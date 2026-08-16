import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, AlertCircle, Loader2, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { SupportedLanguage } from '../types';

interface StationLocatorProps {
  language: SupportedLanguage;
}

interface PoliceStation {
  id: number;
  name: string;
  lat: number;
  lon: number;
  distance: number;
}

export const StationLocator: React.FC<StationLocatorProps> = ({ language }) => {
  const [loadingState, setLoadingState] = useState<'idle' | 'locating' | 'fetching' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [stations, setStations] = useState<PoliceStation[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);

  // Haversine formula to calculate distance in km
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const fetchNearbyStations = async (lat: number, lon: number) => {
    setLoadingState('fetching');
    try {
      // 10km radius
      const query = `
        [out:json];
        (
          node["amenity"="police"](around:10000,${lat},${lon});
          way["amenity"="police"](around:10000,${lat},${lon});
          relation["amenity"="police"](around:10000,${lat},${lon});
        );
        out center;
      `;

      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: query
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from OpenStreetMap');
      }

      const data = await response.json();

      const parsedStations: PoliceStation[] = data.elements.map((el: any) => {
        // 'center' is available for ways/relations if 'out center' is used.
        // For nodes, lat/lon are on the element itself.
        const elLat = el.lat || el.center?.lat;
        const elLon = el.lon || el.center?.lon;
        const name = el.tags?.name || el.tags?.['name:en'] || 'Police Station';

        return {
          id: el.id,
          name,
          lat: elLat,
          lon: elLon,
          distance: calculateDistance(lat, lon, elLat, elLon)
        };
      });

      // Sort by distance
      parsedStations.sort((a, b) => a.distance - b.distance);

      setStations(parsedStations);
      setLoadingState('success');
    } catch (err: any) {
      setErrorMsg(err.message || 'Error fetching nearby stations.');
      setLoadingState('error');
    }
  };

  const findLocation = () => {
    setLoadingState('locating');
    setErrorMsg('');

    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser.');
      setLoadingState('error');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
        fetchNearbyStations(latitude, longitude);
      },
      (error) => {
        setLoadingState('error');
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setErrorMsg("Location access denied. Please enable location permissions.");
            break;
          case error.POSITION_UNAVAILABLE:
            setErrorMsg("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setErrorMsg("The request to get user location timed out.");
            break;
          default:
            setErrorMsg("An unknown error occurred.");
            break;
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const openDirections = (destLat: number, destLon: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLon}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4 sm:p-6 lg:p-8 relative min-h-[70vh]">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8 text-teal-700" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
          Find Nearest <span className="text-teal-600">Police Station</span>
        </h1>
        <p className="text-slate-500 font-medium leading-relaxed">
          Quickly locate police stations within a 10km radius for immediate assistance.
          Uses GPS and open data; no location information is stored on our servers.
        </p>

        {loadingState === 'idle' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={findLocation}
            className="mt-6 flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto mx-auto cursor-pointer"
          >
            <Navigation className="w-5 h-5" />
            <span>Locate Me Now</span>
          </motion.button>
        )}
      </div>

      {(loadingState === 'locating' || loadingState === 'fetching') && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
          <p className="text-slate-600 font-semibold animate-pulse">
            {loadingState === 'locating' ? 'Acquiring GPS coordinates...' : 'Searching for nearby police stations...'}
          </p>
        </div>
      )}

      {loadingState === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-lg mx-auto">
          <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <h3 className="text-red-800 font-bold mb-2">Location Error</h3>
          <p className="text-red-600 text-sm mb-6">{errorMsg}</p>
          <button
            onClick={findLocation}
            className="px-6 py-2 bg-red-100 text-red-700 rounded-full font-bold hover:bg-red-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {loadingState === 'success' && stations.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200">
          <Shield className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-700">No Stations Found</h3>
          <p className="text-slate-500 text-sm">We couldn't find any mapped police stations within 10km.</p>
        </div>
      )}

      {loadingState === 'success' && stations.length > 0 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="font-bold text-slate-800">
              Found {stations.length} stations nearby
            </h3>
            <button
              onClick={findLocation}
              className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-full"
            >
              <Navigation className="w-3 h-3" />
              Refresh
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stations.map((station, index) => (
              <div
                key={station.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Shield className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base pr-2">{station.name}</h4>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 ml-10">
                    <MapPin className="w-3.5 h-3.5" />
                    {station.distance.toFixed(1)} km away
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => openDirections(station.lat, station.lon)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-700 font-bold text-xs rounded-full border border-slate-200 hover:border-teal-300 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
