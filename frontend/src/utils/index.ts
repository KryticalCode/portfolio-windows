// barrel exports for utils
// export everything from /utils directory into a single index file for easier imports from external files
// e.g., import { WindowConfigKey } from "../utils"; <- don't need to specify the full path as index.ts acts as the entry point to the directory

export * from "./windowContentFactory";
export * from "./windowRenderer";
