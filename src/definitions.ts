import type { PluginListenerHandle } from '@capacitor/core';

export interface MagnetometerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  startMagnetometerUpdates(options: { frequency: number }): Promise<void>;
  stopMagnetometerUpdates(): Promise<void>;
  addListener(
      eventName: 'magnetometerData',
      listenerFunc: (data: MagnetometerData) => void
  ): Promise<PluginListenerHandle>;
}

export interface MagnetometerData {
  x: number;
  y: number;
  z: number;
}
