import { p as promiseResolve, b as bootstrapLazy } from './index-04d584a2.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["web-photo-filter",[[1,"web-photo-filter",{"src":[1],"filter":[1],"level":[2]}]]]], options);
});
