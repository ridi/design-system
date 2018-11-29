const hasOwnProperty = (target, key) => Object.prototype.hasOwnProperty.call(target, key);

module.exports = class Color {
  constructor(color) {
    if (typeof color === 'string') {
      color = color.toLowerCase();
      if (/^#/.test(color)) {
        this.parseHex(color);
      } else if (/^hwb\(/.test(color)) {
        this.parseHwb(color);
      } else if (/^gray\(/.test(color)) {
        this.parseGray(color);
      }
    } else if (hasOwnProperty(color, 'whiteness') && hasOwnProperty(color, 'blackness')) {
      this.hue = color.hue;
      this.white = color.whiteness;
      this.black = color.blackness;
      this.convertHwb();
    } else if (hasOwnProperty(color, 'red') && hasOwnProperty(color, 'green') && hasOwnProperty(color, 'blue')) {
      this.red = color.red / 255;
      this.green = color.green / 255;
      this.blue = color.blue / 255;
      this.convertRgb();
    } else if (hasOwnProperty(color, 'gray')) {
      this.red = color.gray;
      this.green = color.gray;
      this.blue = color.gray;
      this.convertRgb();
    }
  }

  get whiteness() {
    let white = Math.round(this.white * 100)
      .toString();
    if (white.length === 1) white = `0${white}`;
    return white;
  }

  get blackness() {
    let black = Math.round(this.black * 100)
      .toString();
    if (black.length === 1) black = `0${black}`;
    return black;
  }

  get isGray() {
    const isEquality = this.red === this.green && this.green === this.blue;
    return isEquality || (this.white + this.black >= 1);
  }

  toHex() {
    let r = Math.round(this.red * 255)
      .toString(16);
    let g = Math.round(this.green * 255)
      .toString(16);
    let b = Math.round(this.blue * 255)
      .toString(16);
    if (r.length !== 1 || g.length !== 1 || b.length !== 1) {
      r = r.length === 1 ? `0${r}` : r;
      g = g.length === 1 ? `0${g}` : g;
      b = b.length === 1 ? `0${b}` : b;
    }
    if (r[0] === r[1] && g[0] === g[1] && b[0] === b[1]) {
      r = r.slice(0, 1);
      g = g.slice(0, 1);
      b = b.slice(0, 1);
    }
    return `#${r}${g}${b}`;
  }

  toHwb() {
    const hue = Math.round(this.hue);
    const modulus = 100;
    let whiteness = Math.round(this.white * (modulus ** 2)) / modulus;
    let blackness = Math.round(this.black * (modulus ** 2)) / modulus;
    whiteness = Number.isInteger(whiteness) ? Math.round(whiteness) : whiteness;
    blackness = Number.isInteger(blackness) ? Math.round(blackness) : blackness;
    return `hwb(${hue}, ${whiteness}%, ${blackness}%)`;
  }

  toHsl() {
    const hue = Math.round(this.hue);
    const saturation = Math.round(this.saturate * 100);
    const lightness = Math.round(this.light * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  toGray() {
    return !((this.red * 100) % 1) ? `gray(${this.red * 100}%)` : `gray(${Math.round(this.red * 255)})`;
  }

  parseHex(code) {
    code = code.slice(1);
    if (code.length === 3) {
      this.red = (parseInt(code[0], 16) * 17) / 255;
      this.green = (parseInt(code[1], 16) * 17) / 255;
      this.blue = (parseInt(code[2], 16) * 17) / 255;
    }
    else if (code.length === 6) {
      this.red = parseInt(code.slice(0, 2), 16) / 255;
      this.green = parseInt(code.slice(2, 4), 16) / 255;
      this.blue = parseInt(code.slice(4, 6), 16) / 255;
    }
    this.convertRgb();
  }

  parseHwb(code) {
    const value = /hwb\((\d+),\s?(\d+)%?,\s?(\d+)%?\)/.exec(code);
    this.hue = ~~value[1];
    this.white = ~~value[2] / 100;
    this.black = ~~value[3] / 100;
    this.convertHwb();
  }

  parseGray(code) {
    let value = /gray\((\d+%?)\)/.exec(code);
    if (!value) return;
    value = value[1].slice(-1) !== '%' ? ~~value[1] / 255 : parseInt(value[1], 10) / 100;
    this.red = value;
    this.green = value;
    this.blue = value;
    this.convertRgb();
  }

  convertRgb() {
    const { h, s, l } = Color.rgbToHsl(this.red, this.green, this.blue);
    const { w, bl } = Color.rgbToHwb(this.red, this.green, this.blue);
    this.hue = h;
    this.saturate = s;
    this.light = l;
    this.white = w;
    this.black = bl;
  }

  convertHwb() {
    const { r, g, b } = Color.hwbToRgb(this.hue, this.white, this.black);
    const { s, l } = Color.rgbToHsl(r, g, b);
    this.red = r;
    this.green = g;
    this.blue = b;
    this.saturate = s;
    this.light = l;
  }

  static rgbTohue(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;

    if (chroma === 0) {
      return 0;
    } else if (max === r) {
      return ((g - b) / chroma) * 60;
    } else if (max === g) {
      return (((b - r) / chroma) + 2) * 60;
    } else {
      return (((r - g) / chroma) + 4) * 60;
    }
  }

  static hueToRgb(t1, t2, hue) {
    if (hue < 0) hue += 6;
    if (hue >= 6) hue -= 6;

    if (hue < 1) {
      return ((t2 - t1) * hue) + t1;
    } else if (hue < 3) {
      return t2;
    } else if (hue < 4) {
      return ((t2 - t1) * (4 - hue)) + t1;
    }
    return t1;
  }

  static rgbToHsl(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const hue = Color.rgbTohue(r, g, b);
    const light = (max + min) / 2;
    const saturate = max === min ? 0 : (max - min) / (1 - Math.abs((2 * light) - 1));
    return { h: hue, s: saturate, l: light };
  }

  static hslToRgb(h, s, l) {
    const _hue = h / 60;

    const t2 = (l <= 0.5) ? l * (s + 1) : (l + s) - (l * s);
    const t1 = (l * 2) - t2;

    const r = Color.hueToRgb(t1, t2, _hue + 2);
    const g = Color.hueToRgb(t1, t2, _hue);
    const b = Color.hueToRgb(t1, t2, _hue - 2);

    return { r, g, b };
  }

  static rgbToHwb(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const hue = Color.rgbTohue(r, g, b);
    return { h: hue, w: min, bl: 1 - max };
  }

  static hwbToRgb(h, w, bl) {
    let { r, g, b } = Color.hslToRgb(h, 1, 0.5);
    const array = [r, g, b];
    for (let i = 0; i < 3; i++) {
      array[i] *= 1 - w - bl;
      array[i] += w;
      array[i] = Number(array[i] * 255);
    }
    r = Math.round(array[0]) / 255;
    g = Math.round(array[1]) / 255;
    b = Math.round(array[2]) / 255;
    return { r, g, b };
  }
};
