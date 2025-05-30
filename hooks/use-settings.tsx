"use client";

import { 
  createContext, 
  useContext, 
  useState, 
  ReactNode, 
  useEffect,
  useMemo,
  useRef
} from "react";
import { ManualItemStatus, MANUAL_ITEM_STATUSES } from "@/lib/eg-client/src/types";

const STORAGE_KEY = "evergreen-device-settings";

export interface Settings {
  enableManualItemEntry: boolean;
  recordInHouseUse: boolean;
  updateInventoryDateTime: boolean;
  enableCheckIn: boolean;
  availableStatusChanges: Record<ManualItemStatus, boolean>;
  loading: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  toggleStatusChange: (status: ManualItemStatus) => void;
  resetSettings: () => void;
  enableManualItemEntry: boolean;
  setEnableManualItemEntry: (value: boolean) => void;
  recordInHouseUse: boolean;
  setRecordInHouseUse: (value: boolean) => void;
  updateInventoryDateTime: boolean;
  setUpdateInventoryDateTime: (value: boolean) => void;
  enableCheckIn: boolean;
  setEnableCheckIn: (value: boolean) => void;
  isStatusChangeEnabled: (status: ManualItemStatus) => boolean;
  enabledStatusChanges: ManualItemStatus[];
  loading: boolean;
}


const defaultSettings: Settings = {
  enableManualItemEntry: false,
  recordInHouseUse: false,
  updateInventoryDateTime: false,
  enableCheckIn: false,
  availableStatusChanges: MANUAL_ITEM_STATUSES.reduce((acc, status) => {
    acc[status] = false;
    return acc;
  }, {} as Record<ManualItemStatus, boolean>),
  loading: false,
};


const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInitialMount = useRef(true);
  
  useEffect(() => {
    const loadSettings = () => {
      setIsLoaded(false);
      try {
        const savedSettings = localStorage.getItem(STORAGE_KEY);
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings) as Settings;
          setSettings(parsedSettings);
        }
      } catch (error) {
        console.error("Failed to parse saved settings:", error);
        setSettings(defaultSettings);
      }
      setIsLoaded(true);
    };
    
    loadSettings();
    

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        loadSettings();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleStatusChange = (status: ManualItemStatus) => {
    setSettings(prev => ({
      ...prev,
      availableStatusChanges: {
        ...prev.availableStatusChanges,
        [status]: !prev.availableStatusChanges[status]
      }
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };
  
  const setEnableManualItemEntry = (value: boolean) => updateSetting("enableManualItemEntry", value);
  const setRecordInHouseUse = (value: boolean) => updateSetting("recordInHouseUse", value);
  const setUpdateInventoryDateTime = (value: boolean) => updateSetting("updateInventoryDateTime", value);
  const setEnableCheckIn = (value: boolean) => updateSetting("enableCheckIn", value);
  
  const isStatusChangeEnabled = (status: ManualItemStatus) => settings.availableStatusChanges[status];
  
  const enabledStatusChanges = useMemo(() => {
    return MANUAL_ITEM_STATUSES.filter(status => settings.availableStatusChanges[status]);
  }, [settings.availableStatusChanges]);

  const value: SettingsContextType = {
    settings,
    updateSetting,
    toggleStatusChange,
    resetSettings,
    enableManualItemEntry: settings.enableManualItemEntry,
    setEnableManualItemEntry,
    recordInHouseUse: settings.recordInHouseUse,
    setRecordInHouseUse,
    updateInventoryDateTime: settings.updateInventoryDateTime,
    setUpdateInventoryDateTime,
    enableCheckIn: settings.enableCheckIn,
    setEnableCheckIn,
    isStatusChangeEnabled,
    enabledStatusChanges,
    loading: !isLoaded
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  
  return context;
}