export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

type BuildMode = "development" | "production";
export type BuildPlatform = "desktop" | "mobile";

export interface BuildOptions {
  devServerPort: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer: boolean;
  platform: BuildPlatform;
  statoscope: boolean;
}
