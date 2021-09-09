import { r as registerInstance, c as createEvent, h, g as getElement } from './index-04d584a2.js';

class WebPhotoFilterType {
  static getFilters(level) {
    return {
      SEPIA: [1.351, 0, 0, 0, 0, 1.203, 0, 0, 0, 0, 0.937, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      BLUE_MONOTONE: [0.95, 0, 0, 0, 0.05, 0.85, 0, 0, 0, 0.15, 0.5, 0, 0, 0, 0.5, 0, 0, 0, 1, 0],
      VIOLENT_TOMATO: [0.9, 0, 0, 0, 2, 0.9, 0, 0, 0, -0.2, -0.2, 0, 0, 0, -0.5, -0.2, -0.2, -0.2, 1, 0],
      GREYSCALE: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      DESATURATE: [
        0.2764723002910614,
        0.9297080039978027,
        0.09381970018148422,
        0,
        -0.14549018442630768,
        0.2764723002910614,
        0.9297080039978027,
        0.09381970018148422,
        0,
        -0.14549018442630768,
        0.2764723002910614,
        0.9297080039978027,
        0.09381970018148422,
        0,
        -0.14549018442630768,
        0,
        0,
        0,
        1,
        0,
      ],
      BRIGHTNESS: WebPhotoFilterType.brightnessMatrix(level ? level : 1.4),
      SATURATION: WebPhotoFilterType.saturationMatrix(level ? level : 1.5),
      CONTRAST: WebPhotoFilterType.contrastMatrix(level ? level : 1.5),
      HUE: WebPhotoFilterType.hueMatrix(level ? level : 90),
      COOKIE: [
        0.5997023582458496,
        0.3455324172973633,
        -0.27082985639572144,
        0,
        0.186007559299469,
        -0.0377032496035099,
        0.8609577417373657,
        0.1505955308675766,
        0,
        -0.14497417211532593,
        0.2411363571882248,
        -0.07441037893295288,
        0.4497218132019043,
        0,
        -0.029655195772647858,
        0,
        0,
        0,
        1,
        0,
      ],
      VINTAGE: [
        0.6279345750808716,
        0.32021835446357727,
        -0.03965408354997635,
        0,
        0.037848182022571564,
        0.025783976539969444,
        0.6441188454627991,
        0.03259127587080002,
        0,
        0.02926599606871605,
        0.04660555720329285,
        -0.08512330055236816,
        0.5241647958755493,
        0,
        0.020232120528817177,
        0,
        0,
        0,
        1,
        0,
      ],
      KODA: [
        1.1285582780838013,
        -0.3967382311820984,
        -0.03992559015750885,
        0,
        0.24991995096206665,
        -0.1640433967113495,
        1.0835251808166504,
        -0.05498805269598961,
        0,
        0.09698984026908875,
        -0.16786010563373566,
        -0.5603416562080383,
        1.6014851331710815,
        0,
        0.13972482085227966,
        0,
        0,
        0,
        1,
        0,
      ],
      TECHNICOLOR: [
        1.9125277996063232,
        -0.8545345067977905,
        -0.09155508130788803,
        0,
        0.046249426901340485,
        -0.3087833523750305,
        1.7658908367156982,
        -0.10601743310689926,
        0,
        -0.27589040994644165,
        -0.23110337555408478,
        -0.7501899003982544,
        1.8475978374481201,
        0,
        0.12137623876333237,
        0,
        0,
        0,
        1,
        0,
      ],
      POLAROID: [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0],
      BGR: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    };
  }
  static brightnessMatrix(brigthness) {
    return [brigthness, 0, 0, 0, 0, 0, brigthness, 0, 0, 0, 0, 0, brigthness, 0, 0, 0, 0, 0, 1, 0];
  }
  static contrastMatrix(amount) {
    let v = amount;
    let o = -128 * (v - 1);
    return WebPhotoFilterType.normalizeMatrix([v, 0, 0, 0, o, 0, v, 0, 0, o, 0, 0, v, 0, o, 0, 0, 0, 1, 0]);
  }
  static normalizeMatrix(matrix) {
    // Normalize the offset component to 0-1
    matrix[4] /= 255;
    matrix[9] /= 255;
    matrix[14] /= 255;
    matrix[19] /= 255;
    return matrix;
  }
  static hueMatrix(rotation) {
    rotation = ((rotation || 0) / 180) * Math.PI;
    let cos = Math.cos(rotation), sin = Math.sin(rotation), lumR = 0.213, lumG = 0.715, lumB = 0.072;
    return [
      lumR + cos * (1 - lumR) + sin * -lumR,
      lumG + cos * -lumG + sin * -lumG,
      lumB + cos * -lumB + sin * (1 - lumB),
      0,
      0,
      lumR + cos * -lumR + sin * 0.143,
      lumG + cos * (1 - lumG) + sin * 0.14,
      lumB + cos * -lumB + sin * -0.283,
      0,
      0,
      lumR + cos * -lumR + sin * -(1 - lumR),
      lumG + cos * -lumG + sin * lumG,
      lumB + cos * (1 - lumB) + sin * lumB,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
    ];
  }
  static saturationMatrix(amount) {
    let x = ((amount || 0) * 2) / 3 + 1;
    let y = (x - 1) * -0.5;
    return [x, y, y, 0, 0, y, x, y, 0, 0, y, y, x, 0, 0, 0, 0, 0, 1, 0];
  }
  static getFilter(key, filterValue) {
    if (!key || 0 === key.length) {
      return null;
    }
    let result = null;
    Object.keys(WebPhotoFilterType.getFilters(filterValue)).forEach((filterKey) => {
      if (key.toUpperCase() === filterKey) {
        result = WebPhotoFilterType.getFilters(filterValue)[filterKey];
      }
    });
    return result;
  }
}

const webPhotoFilterCss = "img{display:none}img.display-no-filter{display:block}";

const WebPhotoFilterComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.filterLoad = createEvent(this, "filterLoad", 7);
    this.vertexShaderSource = `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    uniform vec2 u_resolution;
    varying vec2 v_texCoord;
    uniform float flipY;

    void main() {
       vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0; // convert the rectangle from pixels to clipspace
       gl_Position = vec4(clipSpace * vec2(1, flipY), 0, 1);
       v_texCoord = a_texCoord; // pass the texCoord to the fragment shader
    }
  `;
    this.fragmentShaderSource = `
    precision mediump float;
    uniform sampler2D u_image; // the texture
    uniform mat4 u_matrix;
    uniform vec4 u_multiplier;
    varying vec2 v_texCoord; // the texCoords passed from the vertex shader.

    void main() {
      vec4 color = texture2D(u_image, v_texCoord);
      mat4 colMat = mat4(
      color.r, 0, 0, 0,
      0, color.g, 0, 0,
      0, 0, color.b, 0,
      0, 0, 0, color.a
      );
      mat4 product = colMat * u_matrix;
      color.r = product[0].x + product[0].y + product[0].z + product[0].w + u_multiplier[0];
      color.g = product[1].x + product[1].y + product[1].z + product[1].w + u_multiplier[1];
      color.b = product[2].x + product[2].y + product[2].z + product[2].w + u_multiplier[2];
      color.a = product[3].x + product[3].y + product[3].z + product[3].w  + u_multiplier[3];
      gl_FragColor = color;
    }
  `;
  }
  createWebGLProgram(ctx, vertexShaderSource, fragmentShaderSource) {
    const compileShader = (shaderSource, shaderType) => {
      let shader = ctx.createShader(shaderType);
      ctx.shaderSource(shader, shaderSource);
      ctx.compileShader(shader);
      return shader;
    };
    let program = ctx.createProgram();
    ctx.attachShader(program, compileShader(vertexShaderSource, ctx.VERTEX_SHADER));
    ctx.attachShader(program, compileShader(fragmentShaderSource, ctx.FRAGMENT_SHADER));
    ctx.linkProgram(program);
    ctx.useProgram(program);
    return program;
  }
  onFilterChange() {
    this.applyFilter();
  }
  applyFilter() {
    var _a, _b, _c, _d;
    const filterList = (_a = this.filter) === null || _a === void 0 ? void 0 : _a.split(',');
    const matrix = (_b = filterList === null || filterList === void 0 ? void 0 : filterList.map((filter) => {
      var _a;
      const extractLevel = /\((.*)\)/;
      const matches = extractLevel.exec(filter);
      const level = matches && matches.length >= 1 ? parseFloat(matches[1]) : this.level;
      return WebPhotoFilterType.getFilter((_a = filter === null || filter === void 0 ? void 0 : filter.replace(/\((.*)\)/, '')) === null || _a === void 0 ? void 0 : _a.trim(), level);
    })) === null || _b === void 0 ? void 0 : _b.filter((matrix) => matrix !== null);
    if (matrix === undefined) {
      // We consider null as NO_FILTER, in that case the img will be emitted
      // Furthermore, we explicity displays it
      (_c = this.imgRef) === null || _c === void 0 ? void 0 : _c.classList.add('display-no-filter');
      this.emitFilterApplied(this.imgRef, this.hasValidWegGLContext());
      return;
    }
    // In case the filter is applied after having displayed no filter
    (_d = this.imgRef) === null || _d === void 0 ? void 0 : _d.classList.remove('display-no-filter');
    this.desaturateImage(matrix);
  }
  emitFilterApplied(result, webGlState) {
    this.filterLoad.emit({ webGLDetected: webGlState, result: result });
  }
  desaturateImage(matrix) {
    const canvas = this.createCanvas();
    let ctx;
    try {
      ctx = canvas.getContext('webgl', { preserveDrawingBuffer: true });
    }
    catch (e) {
      // In case we couldn't instantiate WebGL, do nothing
      this.emitFilterApplied(this.imgRef, false);
      return;
    }
    if (!ctx) {
      // WebGL not supported. A fallback could be 2D methods, but that would not be performing
      this.emitFilterApplied(this.imgRef, false);
      return;
    }
    // Create a texture.
    const texture = this.createRootTexture(ctx);
    const steps = matrix.map(() => this.createFramebufferTexture(ctx));
    matrix.forEach((mat, index) => {
      this.applyMatrix(ctx, mat, index < matrix.length - 1 ? steps[index].target : null, index > 0 ? steps[index - 1].source : texture);
    });
    this.appendCanvas(canvas);
    // The filter was applied, we emit the canvas not the source image
    this.emitFilterApplied(canvas, true);
  }
  createCanvas() {
    var _a, _b;
    const canvas = document.createElement('canvas');
    canvas.setAttribute('part', 'canvas');
    canvas.width = (_a = this.imgRef) === null || _a === void 0 ? void 0 : _a.naturalWidth;
    canvas.height = (_b = this.imgRef) === null || _b === void 0 ? void 0 : _b.naturalHeight;
    return canvas;
  }
  appendCanvas(canvas) {
    const current = this.el.shadowRoot.querySelector('canvas');
    if (current) {
      this.el.shadowRoot.removeChild(current);
    }
    this.el.shadowRoot.insertBefore(canvas, this.el.shadowRoot.firstChild);
  }
  createRootTexture(ctx) {
    const texture = ctx.createTexture();
    ctx.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
    // Set the parameters so we can render any size image.
    ctx.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
    ctx.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
    ctx.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.NEAREST);
    ctx.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.NEAREST);
    // Load the image into the texture.
    ctx.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this.imgRef);
    return texture;
  }
  applyMatrix(ctx, feColorMatrix, target, source) {
    const program = this.createWebGLProgram(ctx, this.vertexShaderSource, this.fragmentShaderSource);
    // Expose canvas width and height to shader via u_resolution
    const resolutionLocation = ctx.getUniformLocation(program, 'u_resolution');
    ctx.uniform2f(resolutionLocation, ctx.canvas.width, ctx.canvas.height);
    // Modify the feColorMatrix to fit better with available shader datatypes by putting the multiplier in a separate vector
    // This is a little unrefined but we're dealing with a very specific known data structure
    const cloneFeColorMatrix = feColorMatrix.slice();
    const feMultiplier = [];
    feMultiplier.push(cloneFeColorMatrix.splice(3, 1)[0]);
    feMultiplier.push(cloneFeColorMatrix.splice(8, 1)[0]);
    feMultiplier.push(cloneFeColorMatrix.splice(12, 1)[0]);
    feMultiplier.push(cloneFeColorMatrix.splice(16, 1)[0]);
    // Expose feColorMatrix to shader via u_matrix
    const matrixTransform = ctx.getUniformLocation(program, 'u_matrix');
    ctx.uniformMatrix4fv(matrixTransform, false, new Float32Array(cloneFeColorMatrix));
    const multiplier = ctx.getUniformLocation(program, 'u_multiplier');
    ctx.uniform4f(multiplier, feMultiplier[0], feMultiplier[1], feMultiplier[2], feMultiplier[3]);
    // Position rectangle vertices (2 triangles)
    const positionLocation = ctx.getAttribLocation(program, 'a_position');
    const buffer = ctx.createBuffer();
    ctx.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffer);
    ctx.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([
      0,
      0,
      this.imgRef.naturalWidth,
      0,
      0,
      this.imgRef.naturalHeight,
      0,
      this.imgRef.naturalHeight,
      this.imgRef.naturalWidth,
      0,
      this.imgRef.naturalWidth,
      this.imgRef.naturalHeight,
    ]), WebGLRenderingContext.STATIC_DRAW);
    ctx.enableVertexAttribArray(positionLocation);
    ctx.vertexAttribPointer(positionLocation, 2, WebGLRenderingContext.FLOAT, false, 0, 0);
    //Position texture
    const texCoordLocation = ctx.getAttribLocation(program, 'a_texCoord');
    const texCoordBuffer = ctx.createBuffer();
    ctx.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, texCoordBuffer);
    ctx.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), WebGLRenderingContext.STATIC_DRAW);
    ctx.enableVertexAttribArray(texCoordLocation);
    ctx.vertexAttribPointer(texCoordLocation, 2, WebGLRenderingContext.FLOAT, false, 0, 0);
    // Bind the source and target and draw the two triangles
    ctx.bindTexture(WebGLRenderingContext.TEXTURE_2D, source);
    ctx.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, target);
    // We may have to flip if last target
    const flipY = target === null;
    const uniformFlipY = ctx.getUniformLocation(program, 'flipY');
    ctx.uniform1f(uniformFlipY, flipY ? -1 : 1);
    // Draw the rectangle.
    ctx.drawArrays(WebGLRenderingContext.TRIANGLES, 0, 6);
  }
  createFramebufferTexture(ctx) {
    const fbo = ctx.createFramebuffer();
    ctx.bindFramebuffer(ctx.FRAMEBUFFER, fbo);
    const renderbuffer = ctx.createRenderbuffer();
    ctx.bindRenderbuffer(ctx.RENDERBUFFER, renderbuffer);
    const texture = ctx.createTexture();
    ctx.bindTexture(ctx.TEXTURE_2D, texture);
    ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, this.imgRef.naturalWidth, this.imgRef.naturalHeight, 0, ctx.RGBA, ctx.UNSIGNED_BYTE, null);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
    ctx.framebufferTexture2D(ctx.FRAMEBUFFER, ctx.COLOR_ATTACHMENT0, ctx.TEXTURE_2D, texture, 0);
    ctx.bindTexture(ctx.TEXTURE_2D, null);
    ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);
    return { target: fbo, source: texture };
  }
  hasValidWegGLContext() {
    let canvas = document.createElement('canvas');
    let ctx;
    try {
      ctx = canvas.getContext('webgl', { preserveDrawingBuffer: true });
    }
    catch (e) {
      return false;
    }
    return ctx && ctx instanceof WebGLRenderingContext;
  }
  render() {
    // prettier-ignore
    // @ts-ignore
    return h("img", { crossOrigin: 'anonymous', ref: (el) => (this.imgRef = el), part: "img", src: this.src, role: "img", "aria-hidden": true, onLoad: () => this.applyFilter() });
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "filter": ["onFilterChange"]
  }; }
};
WebPhotoFilterComponent.style = webPhotoFilterCss;

export { WebPhotoFilterComponent as web_photo_filter };
