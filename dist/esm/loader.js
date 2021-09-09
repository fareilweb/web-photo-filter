import { p as promiseResolve, b as bootstrapLazy } from './index-04d584a2.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["web-photo-filter",[[1,"web-photo-filter",{"src":[1],"filter":[1],"level":[2]}]]]], options);
  });
};

export { defineCustomElements };
