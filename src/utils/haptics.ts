export const triggerLightHaptic = () => {
  if (typeof window !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(50);
  }
};

export const triggerHeavyHaptic = () => {
  if (typeof window !== 'undefined' && navigator.vibrate) {
    navigator.vibrate([100, 50, 100]); // Vibrates, pauses, vibrates
  }
};

export const triggerErrorHaptic = () => {
  if (typeof window !== 'undefined' && navigator.vibrate) {
    navigator.vibrate([50, 50, 50, 50, 50]); // Quick repeated bursts
  }
};
