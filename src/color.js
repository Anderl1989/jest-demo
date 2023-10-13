export default class Color {
    r = 255;
    g = 255;
    b = 255;
    a = 1;

    constructor(color) {
        if (color && typeof color === 'string') {
            const hexMatch = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
            const shortHexMatch = color.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
            const hexAlphaMatch = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
            const rgbMatch = color.match(/^rgb\(([0-9]{1,3}), ?([0-9]{1,3}), ?([0-9]{1,3})\)$/i);
            const rgbaMatch = color.match(/^rgba\(([0-9]{1,3}), ?([0-9]{1,3}), ?([0-9]{1,3}), ?(1|0(\.[0-9]*)?)\)$/i);

            if (hexMatch) {
                this.r = parseInt(hexMatch[1], 16);
                this.g = parseInt(hexMatch[2], 16);
                this.b = parseInt(hexMatch[3], 16);
            } else if (shortHexMatch) {
                this.r = parseInt(shortHexMatch[1], 16) * 17;
                this.g = parseInt(shortHexMatch[2], 16) * 17;
                this.b = parseInt(shortHexMatch[3], 16) * 17;
            } else if (hexAlphaMatch) {
                this.r = parseInt(hexAlphaMatch[1], 16);
                this.g = parseInt(hexAlphaMatch[2], 16);
                this.b = parseInt(hexAlphaMatch[3], 16);
                this.a = parseInt(hexAlphaMatch[4], 16) / 255;
            } else if (rgbMatch) {
                this.r = Math.min(parseInt(rgbMatch[1], 10), 255);
                this.g = Math.min(parseInt(rgbMatch[2], 10), 255);
                this.b = Math.min(parseInt(rgbMatch[3], 10), 255);
            } else if (rgbaMatch) {
                this.r = Math.min(parseInt(rgbaMatch[1], 10), 255);
                this.g = Math.min(parseInt(rgbaMatch[2], 10), 255);
                this.b = Math.min(parseInt(rgbaMatch[3], 10), 255);
                this.a = parseFloat(rgbaMatch[4], 10);
            }
        }
    }

    toHex() {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
    }

    toShortHex() {
        const r = Math.round(this.r / 17);
        const g = Math.round(this.g / 17);
        const b = Math.round(this.b / 17);
        return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    }

    toHexAlpha() {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}${Math.round(this.a * 255).toString(16)}`;
    }

    toRgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    toRgba() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    toString() {
        return this.toRgba();
    }
}

