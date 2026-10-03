import { StoreSettings } from '../types';
import { INITIAL_STORE_SETTINGS } from '../data/initialData';

const SETTINGS_KEY = 'asv_store_settings_v1';

export function getLocalStoreSettings(): StoreSettings {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) {
      return { ...INITIAL_STORE_SETTINGS, ...JSON.parse(saved) };
    }
  } catch {}
  return INITIAL_STORE_SETTINGS;
}

export function saveLocalStoreSettings(settings: StoreSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {}
}
