export declare class WebPhotoFilterType {
  static getFilters(level: number): any;
  private static brightnessMatrix;
  private static contrastMatrix;
  private static normalizeMatrix;
  private static hueMatrix;
  private static saturationMatrix;
  static getFilter(key: string, filterValue: number): number[];
}
