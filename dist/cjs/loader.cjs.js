'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2fd4124b.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["web-photo-filter.cjs",[[1,"web-photo-filter",{"src":[1],"filter":[1],"level":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
