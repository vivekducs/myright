import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { get, set } from 'idb-keyval';
import { Camera, Upload, Trash2, ShieldCheck, FileText, Plus, X } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT } from '../utils/translations';

interface DocumentVaultProps {
  language: SupportedLanguage;
}

interface StoredDocument {
  id: string;
  type: 'aadhar' | 'dl' | 'rc' | 'insurance' | 'other';
  name: string;
  dataUrl: string;
  timestamp: number;
}

const DOCUMENT_TYPES = [
  { id: 'aadhar', label: 'Aadhar / ID Card', icon: ShieldCheck },
  { id: 'dl', label: 'Driving License', icon: FileText },
  { id: 'rc', label: 'Vehicle RC', icon: FileText },
  { id: 'insurance', label: 'Insurance', icon: FileText },
  { id: 'other', label: 'Other Document', icon: FileText },
] as const;

export const DocumentVault: React.FC<DocumentVaultProps> = ({ language }) => {
  const t = getT(language);
  const [documents, setDocuments] = useState<StoredDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedType, setSelectedType] = useState<StoredDocument['type']>('aadhar');
  const [customName, setCustomName] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [viewingDoc, setViewingDoc] = useState<StoredDocument | null>(null);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const storedDocs = await get<StoredDocument[]>('myright_vault_docs') || [];
      // Sort by newest first
      setDocuments(storedDocs.sort((a, b) => b.timestamp - a.timestamp));
    } catch (error) {
      console.error("Failed to load documents", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File is too large. Please select an image under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      if (!customName) {
        setCustomName(file.name.split('.')[0] || 'Document');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!previewUrl) return;

    const newDoc: StoredDocument = {
      id: crypto.randomUUID(),
      type: selectedType,
      name: customName || 'Untitled Document',
      dataUrl: previewUrl,
      timestamp: Date.now()
    };

    const updatedDocs = [newDoc, ...documents];
    
    try {
      await set('myright_vault_docs', updatedDocs);
      setDocuments(updatedDocs);
      
      // Reset form
      setIsAdding(false);
      setPreviewUrl(null);
      setCustomName('');
    } catch (error) {
      console.error("Failed to save document", error);
      alert("Failed to save document securely.");
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this document from your vault?")) return;

    const updatedDocs = documents.filter(doc => doc.id !== id);
    try {
      await set('myright_vault_docs', updatedDocs);
      setDocuments(updatedDocs);
      if (viewingDoc?.id === id) {
        setViewingDoc(null);
      }
    } catch (error) {
      console.error("Failed to delete document", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-teal-600" />
            Secure Document Vault
          </h2>
          <p className="text-slate-600 mt-1">
            Store your IDs locally on your device. Only you can access them, and they work fully offline.
          </p>
        </div>
        
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-md transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Document
        </button>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-800">Add New Document</h3>
              <button onClick={() => { setIsAdding(false); setPreviewUrl(null); }} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Side */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Document Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as StoredDocument['type'])}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  >
                    {DOCUMENT_TYPES.map(type => (
                      <option key={type.id} value={type.id}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Document Name (Optional)</label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="e.g. My Primary Driving License"
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Upload Photo</label>
                  <label className="flex items-center justify-center gap-2 w-full p-4 border-2 border-dashed border-teal-300 rounded-xl bg-teal-50 text-teal-700 cursor-pointer hover:bg-teal-100 transition-colors">
                    <Upload className="w-5 h-5" />
                    <span className="font-semibold">Select Image (Max 5MB)</span>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Preview Side */}
              <div className="flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 relative overflow-hidden">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-contain p-2" />
                ) : (
                  <div className="text-center text-slate-400">
                    <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No image selected</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSave}
                disabled={!previewUrl}
                className="px-6 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md transition-colors"
              >
                Save to Secure Vault
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Documents Grid */}
      {isLoading ? (
        <div className="text-center py-12 text-slate-500 font-medium">Loading secure vault...</div>
      ) : documents.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl">
          <ShieldCheck className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-700 mb-2">Your Vault is Empty</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Store photos of your DL, Aadhar, and RC here. When stopped by traffic police, you can open this page instantly, even without an internet connection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map(doc => {
            const typeConfig = DOCUMENT_TYPES.find(t => t.id === doc.type) || DOCUMENT_TYPES[0];
            const Icon = typeConfig.icon;
            
            return (
              <motion.div
                key={doc.id}
                layoutId={`doc-${doc.id}`}
                onClick={() => setViewingDoc(doc)}
                className="bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <button
                    onClick={(e) => handleDelete(doc.id, e)}
                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <h3 className="font-bold text-slate-800 line-clamp-1">{doc.name}</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{typeConfig.label}</p>
                
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Added {new Date(doc.timestamp).toLocaleDateString()}</span>
                  <span className="text-teal-600 font-semibold group-hover:underline">View Document &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Document Viewer */}
      <AnimatePresence>
        {viewingDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setViewingDoc(null)}
          >
            <motion.div
              layoutId={`doc-${viewingDoc.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{viewingDoc.name}</h3>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    {DOCUMENT_TYPES.find(t => t.id === viewingDoc.type)?.label}
                  </p>
                </div>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto bg-slate-100 p-4 flex items-center justify-center">
                <img 
                  src={viewingDoc.dataUrl} 
                  alt={viewingDoc.name} 
                  className="max-w-full h-auto object-contain rounded-xl shadow-sm"
                />
              </div>
              
              <div className="p-4 bg-white border-t border-slate-100 flex justify-between items-center">
                <p className="text-sm text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Stored securely on device
                </p>
                <button
                  onClick={(e) => handleDelete(viewingDoc.id, e)}
                  className="px-4 py-2 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
                >
                  Delete Document
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
