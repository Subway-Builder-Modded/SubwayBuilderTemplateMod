/** Subway Builder Modding API v1.0.0 */

// =============================================================================
// ELECTRON IPC TYPES
// =============================================================================

export interface ElectronAPI {
  invoke(channel: string, ...args: unknown[]): Promise<unknown>;
  quit(): void;
  reloadWindow(): void;
  setCurrentRoute(route: string): void;
  updateDiscordActivity(activity: unknown): void;
  saveGameToFile(data: unknown): Promise<boolean>;
  saveGameAuto(data: unknown): Promise<boolean>;
  loadGameFromFile(): Promise<unknown>;
  loadGameFromPath(path: string): Promise<unknown>;
  getSaveFilesFromDirectory(): Promise<unknown[]>;
  deleteSaveFile(filename: string): Promise<boolean>;
  importMetroFile(): Promise<unknown>;
  setLicenseKey(key: string): Promise<void>;

  /**
   * @deprecated you shouldn't be fucking using this...
   */
  getLicenseKey(): Promise<string | null>;
  removeLicenseKey(): Promise<void>;
  getVersion(): Promise<string>;
  getIsBeta(): Promise<boolean>;
}

export interface ElectronAPIExtended {
  loadDataFile(path: string): Promise<unknown>;
  getDataServerPort(): Promise<number>;
  buildBlueprints(): Promise<void>;
  findRoutePathOrder(routeId: string): Promise<unknown>;
}
