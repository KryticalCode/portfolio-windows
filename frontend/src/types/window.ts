// window related types / interfaces

////-----------------////
//// windowConfig.ts ////
////-----------------////

// keys for window configurations
// these will be the only valid keys for windowConfigs
export type WindowConfigKey =
  | "home"
  | "about"
  | "links"
  | "projects"
  | "faq"
  | "contact";

//
export interface WindowConfig {
  width: string;
  height: string;
  isMovable: boolean;
  expandContent?: boolean;
  contentProps?: Record<string, unknown>; // More specific than 'any', allows any JSON-serializable value - fix for Vercel build instead of any (react strice not allowed)
  wrapperClass?: string; // optional class for wrapping content with specific style in child components / div
  responsive: boolean; // responsive design for scaling different screen sizes
}

// Record<WindowConfigKey, WindowConfig>
//            ↑                 ↑
//        Key type         Value type
//       (the names)      (the config objects)

// allows for flexible contentProps

////-----------------////
//useWindowManager.tsx //
////-----------------////

export interface WindowManager {
  openWindows: string[];
  animatingWindows: string[];
  openWindow: (windowType: string, onOpen?: () => void) => void;
  closeWindow: (windowType: string) => void;
}

////-----------------////
////// Window.tsx //////
////-----------------////

export interface WindowProps {
  title: string;
  children: React.ReactNode;
  width: string; // was ? , might need to check if its undefined and how to handle it
  height: string; // was ? , might need to check if its undefined and how to handle it
  isMovable?: boolean;
  onClose?: () => void;
  expandContent?: boolean; // New prop for content expansion
  responsive?: boolean; // responsive design for scaling different screen sizes
}
