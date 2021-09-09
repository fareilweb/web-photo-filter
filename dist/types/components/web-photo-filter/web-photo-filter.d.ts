import { EventEmitter } from '../../stencil-public-runtime';
import { WebPhotoFilterResult } from '../../types/web-photo-filter/web-photo-filter-result';
/**
 * @part img - The part attribute to access the source image
 * @part canvas - The part attribute to access the resulting filtered canvas
 */
export declare class WebPhotoFilterComponent {
  el: HTMLElement;
  /**
   * The source of the image.
   */
  src: string;
  /**
   * A comma separated list of filter to apply on the source image. If no filter is provided, the source image as it will be displayed. Current filter are supported: 'sepia', 'blue_monotone', 'violent_tomato', 'greyscale', 'desaturate', 'brightness', 'saturation', 'contrast', 'hue', 'cookie', 'vintage', 'koda', 'technicolor', 'polaroid', 'bgr'.
   */
  filter: string;
  /**
   * An optional level to apply the filter. If multiple filter are provided, it applies to all except if a specific level is provided for a filter, such as saturation(1.1)
   */
  level: number;
  /**
   * An event emitted each times a filter is applied. It provides information about the webgl context (is is supported?) and emit either the image, if filter can not be applied, or the resulting canvas.
   */
  filterLoad: EventEmitter<WebPhotoFilterResult>;
  private imgRef;
  private createWebGLProgram;
  private readonly vertexShaderSource;
  private readonly fragmentShaderSource;
  onFilterChange(): void;
  private applyFilter;
  private emitFilterApplied;
  private desaturateImage;
  private createCanvas;
  private appendCanvas;
  private createRootTexture;
  private applyMatrix;
  private createFramebufferTexture;
  private hasValidWegGLContext;
  render(): any;
}
