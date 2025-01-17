/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { WebPhotoFilterResult } from "./types/web-photo-filter/web-photo-filter-result";
export namespace Components {
    interface WebPhotoFilter {
        /**
          * A comma separated list of filter to apply on the source image. If no filter is provided, the source image as it will be displayed. Current filter are supported: 'sepia', 'blue_monotone', 'violent_tomato', 'greyscale', 'desaturate', 'brightness', 'saturation', 'contrast', 'hue', 'cookie', 'vintage', 'koda', 'technicolor', 'polaroid', 'bgr'.
         */
        "filter": string;
        /**
          * An optional level to apply the filter. If multiple filter are provided, it applies to all except if a specific level is provided for a filter, such as saturation(1.1)
         */
        "level": number;
        /**
          * The source of the image.
         */
        "src": string;
    }
}
declare global {
    interface HTMLWebPhotoFilterElement extends Components.WebPhotoFilter, HTMLStencilElement {
    }
    var HTMLWebPhotoFilterElement: {
        prototype: HTMLWebPhotoFilterElement;
        new (): HTMLWebPhotoFilterElement;
    };
    interface HTMLElementTagNameMap {
        "web-photo-filter": HTMLWebPhotoFilterElement;
    }
}
declare namespace LocalJSX {
    interface WebPhotoFilter {
        /**
          * A comma separated list of filter to apply on the source image. If no filter is provided, the source image as it will be displayed. Current filter are supported: 'sepia', 'blue_monotone', 'violent_tomato', 'greyscale', 'desaturate', 'brightness', 'saturation', 'contrast', 'hue', 'cookie', 'vintage', 'koda', 'technicolor', 'polaroid', 'bgr'.
         */
        "filter"?: string;
        /**
          * An optional level to apply the filter. If multiple filter are provided, it applies to all except if a specific level is provided for a filter, such as saturation(1.1)
         */
        "level"?: number;
        /**
          * An event emitted each times a filter is applied. It provides information about the webgl context (is is supported?) and emit either the image, if filter can not be applied, or the resulting canvas.
         */
        "onFilterLoad"?: (event: CustomEvent<WebPhotoFilterResult>) => void;
        /**
          * The source of the image.
         */
        "src"?: string;
    }
    interface IntrinsicElements {
        "web-photo-filter": WebPhotoFilter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "web-photo-filter": LocalJSX.WebPhotoFilter & JSXBase.HTMLAttributes<HTMLWebPhotoFilterElement>;
        }
    }
}
