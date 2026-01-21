/**
 * My Subway Builder Mod
 * Entry point for the mod.
 */

// Types are declared globally in ./types/subway-builder.d.ts
import { ExamplePanel } from './ui/ExamplePanel';

const api = window.SubwayBuilderAPI;

if (!api) {
  console.error('[MyMod] SubwayBuilderAPI not found!');
} else {
  console.log('[MyMod] Initializing...');

  // Guard against double initialization (onMapReady can fire multiple times)
  let initialized = false;

  // Initialize mod when map is ready
  api.hooks.onMapReady((map) => {
    if (initialized) {
      console.log('[MyMod] Already initialized, skipping...');
      return;
    }
    initialized = true;

    console.log('[MyMod] Map ready!');

    // Example: Add a floating panel with a React component
    api.ui.addFloatingPanel({
      id: 'my-mod-panel',
      title: 'My Mod',
      icon: 'Puzzle',
      render: ExamplePanel,
    });

    // Example: Add a button to the escape menu
    api.ui.addButton('escape-menu', {
      id: 'my-mod-button',
      label: 'My Mod Button',
      onClick: () => {
        api.ui.showNotification('Hello from My Mod!', 'info');
      },
    });

    console.log('[MyMod] Initialization complete!');
  });

  console.log('[MyMod] Mod loaded.');
}
