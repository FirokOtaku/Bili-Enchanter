// ==UserScript==
// @name            Bili Enchanter
// @namespace       https://github.com/FirokOtaku
// @version         0.1.0
// @author          Firok
// @description     Some enchantments to improve your Bilibili experience
// @description:zh  一些提升你 Bilibili 使用体验的附魔
// @copyright       Mulan PSL v2
// @icon            https://i.mcmod.cn/item/icon/128x128/0/53.png?v=11
// @homepage        https://github.com/FirokOtaku/bili-enchanter
// @match           *.bilibili.com/*
// @grant           GM_addStyle
// @grant           GM_getValue
// @grant           GM_setValue
// ==/UserScript==

(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	(function(factory) {
	  factory();
	})(function() {
	  /**
	   * @license
	   * Copyright 2021 Google LLC
	   *
	   * Licensed under the Apache License, Version 2.0 (the "License");
	   * you may not use this file except in compliance with the License.
	   * You may obtain a copy of the License at
	   *
	   *      http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing, software
	   * distributed under the License is distributed on an "AS IS" BASIS,
	   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	   * See the License for the specific language governing permissions and
	   * limitations under the License.
	   */
	  function q(e) {
	    return e < 0 ? -1 : e === 0 ? 0 : 1;
	  }
	  function nt(e, t, r) {
	    return (1 - r) * e + r * t;
	  }
	  function qt(e, t, r) {
	    return r < e ? e : r > t ? t : r;
	  }
	  function ht(e, t, r) {
	    return r < e ? e : r > t ? t : r;
	  }
	  function Ot(e) {
	    return e = e % 360, e < 0 && (e = e + 360), e;
	  }
	  function Dt(e) {
	    return e = e % 360, e < 0 && (e = e + 360), e;
	  }
	  function jt(e, t) {
	    return Dt(t - e) <= 180 ? 1 : -1;
	  }
	  function Nt(e, t) {
	    return 180 - Math.abs(Math.abs(e - t) - 180);
	  }
	  function bt(e, t) {
	    const r = e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2], n = e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2], a = e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2];
	    return [r, n, a];
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  const zt = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], Yt = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], wt = [95.047, 100, 108.883];
	  function ft(e, t, r) {
	    return (255 << 24 | (e & 255) << 16 | (t & 255) << 8 | r & 255) >>> 0;
	  }
	  function Et(e) {
	    const t = tt(e[0]), r = tt(e[1]), n = tt(e[2]);
	    return ft(t, r, n);
	  }
	  function Wt(e) {
	    return e >> 24 & 255;
	  }
	  function dt(e) {
	    return e >> 16 & 255;
	  }
	  function mt(e) {
	    return e >> 8 & 255;
	  }
	  function gt(e) {
	    return e & 255;
	  }
	  function St(e, t, r) {
	    const n = Yt, a = n[0][0] * e + n[0][1] * t + n[0][2] * r, o = n[1][0] * e + n[1][1] * t + n[1][2] * r, s = n[2][0] * e + n[2][1] * t + n[2][2] * r, c = tt(a), u = tt(o), h = tt(s);
	    return ft(c, u, h);
	  }
	  function vt(e) {
	    const t = $(dt(e)), r = $(mt(e)), n = $(gt(e));
	    return bt([t, r, n], zt);
	  }
	  function Jt(e, t, r) {
	    const n = wt, a = (e + 16) / 116, o = t / 500 + a, s = a - r / 200, c = ut(o), u = ut(a), h = ut(s), l = c * n[0], d = u * n[1], p2 = h * n[2];
	    return St(l, d, p2);
	  }
	  function Xt(e) {
	    const t = $(dt(e)), r = $(mt(e)), n = $(gt(e)), a = zt, o = a[0][0] * t + a[0][1] * r + a[0][2] * n, s = a[1][0] * t + a[1][1] * r + a[1][2] * n, c = a[2][0] * t + a[2][1] * r + a[2][2] * n, u = wt, h = o / u[0], l = s / u[1], d = c / u[2], p2 = at(h), f = at(l), M = at(d), g = 116 * f - 16, b = 500 * (p2 - f), w = 200 * (f - M);
	    return [g, b, w];
	  }
	  function $t(e) {
	    const t = Q(e), r = tt(t);
	    return ft(r, r, r);
	  }
	  function Ct(e) {
	    const t = vt(e)[1];
	    return 116 * at(t / 100) - 16;
	  }
	  function Q(e) {
	    return 100 * ut((e + 16) / 116);
	  }
	  function It(e) {
	    return at(e / 100) * 116 - 16;
	  }
	  function $(e) {
	    const t = e / 255;
	    return t <= 0.040449936 ? t / 12.92 * 100 : Math.pow((t + 0.055) / 1.055, 2.4) * 100;
	  }
	  function tt(e) {
	    const t = e / 100;
	    let r = 0;
	    return t <= 31308e-7 ? r = t * 12.92 : r = 1.055 * Math.pow(t, 1 / 2.4) - 0.055, qt(0, 255, Math.round(r * 255));
	  }
	  function Kt() {
	    return wt;
	  }
	  function at(e) {
	    const t = 0.008856451679035631, r = 24389 / 27;
	    return e > t ? Math.pow(e, 1 / 3) : (r * e + 16) / 116;
	  }
	  function ut(e) {
	    const t = 0.008856451679035631, r = 24389 / 27, n = e * e * e;
	    return n > t ? n : (116 * e - 16) / r;
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class v {
	    static make(t = Kt(), r = 200 / Math.PI * Q(50) / 100, n = 50, a = 2, o = false) {
	      const s = t, c = s[0] * 0.401288 + s[1] * 0.650173 + s[2] * -0.051461, u = s[0] * -0.250268 + s[1] * 1.204414 + s[2] * 0.045854, h = s[0] * -2079e-6 + s[1] * 0.048952 + s[2] * 0.953127, l = 0.8 + a / 10, d = l >= 0.9 ? nt(0.59, 0.69, (l - 0.9) * 10) : nt(0.525, 0.59, (l - 0.8) * 10);
	      let p2 = o ? 1 : l * (1 - 1 / 3.6 * Math.exp((-r - 42) / 92));
	      p2 = p2 > 1 ? 1 : p2 < 0 ? 0 : p2;
	      const f = l, M = [p2 * (100 / c) + 1 - p2, p2 * (100 / u) + 1 - p2, p2 * (100 / h) + 1 - p2], g = 1 / (5 * r + 1), b = g * g * g * g, w = 1 - b, y = b * r + 0.1 * w * w * Math.cbrt(5 * r), k = Q(n) / t[1], A = 1.48 + Math.sqrt(k), D = 0.725 / Math.pow(k, 0.2), R = D, P = [Math.pow(y * M[0] * c / 100, 0.42), Math.pow(y * M[1] * u / 100, 0.42), Math.pow(y * M[2] * h / 100, 0.42)], I = [400 * P[0] / (P[0] + 27.13), 400 * P[1] / (P[1] + 27.13), 400 * P[2] / (P[2] + 27.13)], B = (2 * I[0] + I[1] + 0.05 * I[2]) * D;
	      return new v(k, B, D, R, d, f, M, y, Math.pow(y, 0.25), A);
	    }
	    constructor(t, r, n, a, o, s, c, u, h, l) {
	      this.n = t, this.aw = r, this.nbb = n, this.ncb = a, this.c = o, this.nc = s, this.rgbD = c, this.fl = u, this.fLRoot = h, this.z = l;
	    }
	  }
	  v.DEFAULT = v.make();
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class z {
	    constructor(t, r, n, a, o, s, c, u, h) {
	      this.hue = t, this.chroma = r, this.j = n, this.q = a, this.m = o, this.s = s, this.jstar = c, this.astar = u, this.bstar = h;
	    }
	    distance(t) {
	      const r = this.jstar - t.jstar, n = this.astar - t.astar, a = this.bstar - t.bstar, o = Math.sqrt(r * r + n * n + a * a);
	      return 1.41 * Math.pow(o, 0.63);
	    }
	    static fromInt(t) {
	      return z.fromIntInViewingConditions(t, v.DEFAULT);
	    }
	    static fromIntInViewingConditions(t, r) {
	      const n = (t & 16711680) >> 16, a = (t & 65280) >> 8, o = t & 255, s = $(n), c = $(a), u = $(o), h = 0.41233895 * s + 0.35762064 * c + 0.18051042 * u, l = 0.2126 * s + 0.7152 * c + 0.0722 * u, d = 0.01932141 * s + 0.11916382 * c + 0.95034478 * u, p2 = 0.401288 * h + 0.650173 * l - 0.051461 * d, f = -0.250268 * h + 1.204414 * l + 0.045854 * d, M = -2079e-6 * h + 0.048952 * l + 0.953127 * d, g = r.rgbD[0] * p2, b = r.rgbD[1] * f, w = r.rgbD[2] * M, y = Math.pow(r.fl * Math.abs(g) / 100, 0.42), k = Math.pow(r.fl * Math.abs(b) / 100, 0.42), A = Math.pow(r.fl * Math.abs(w) / 100, 0.42), D = q(g) * 400 * y / (y + 27.13), R = q(b) * 400 * k / (k + 27.13), P = q(w) * 400 * A / (A + 27.13), I = (11 * D + -12 * R + P) / 11, B = (D + R - 2 * P) / 9, T = (20 * D + 20 * R + 21 * P) / 20, V = (40 * D + 20 * R + P) / 20, U = Math.atan2(B, I) * 180 / Math.PI, L = U < 0 ? U + 360 : U >= 360 ? U - 360 : U, Z = L * Math.PI / 180, st = V * r.nbb, K = 100 * Math.pow(st / r.aw, r.c * r.z), it = 4 / r.c * Math.sqrt(K / 100) * (r.aw + 4) * r.fLRoot, pt = L < 20.14 ? L + 360 : L, yt = 0.25 * (Math.cos(pt * Math.PI / 180 + 2) + 3.8), kt = 5e4 / 13 * yt * r.nc * r.ncb * Math.sqrt(I * I + B * B) / (T + 0.305), ct = Math.pow(kt, 0.9) * Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), Bt = ct * Math.sqrt(K / 100), Rt = Bt * r.fLRoot, Vt = 50 * Math.sqrt(ct * r.c / (r.aw + 4)), _t = (1 + 100 * 7e-3) * K / (1 + 7e-3 * K), Ft = 1 / 0.0228 * Math.log(1 + 0.0228 * Rt), Ht = Ft * Math.cos(Z), Ut = Ft * Math.sin(Z);
	      return new z(L, Bt, K, it, Rt, Vt, _t, Ht, Ut);
	    }
	    static fromJch(t, r, n) {
	      return z.fromJchInViewingConditions(t, r, n, v.DEFAULT);
	    }
	    static fromJchInViewingConditions(t, r, n, a) {
	      const o = 4 / a.c * Math.sqrt(t / 100) * (a.aw + 4) * a.fLRoot, s = r * a.fLRoot, c = r / Math.sqrt(t / 100), u = 50 * Math.sqrt(c * a.c / (a.aw + 4)), h = n * Math.PI / 180, l = (1 + 100 * 7e-3) * t / (1 + 7e-3 * t), d = 1 / 0.0228 * Math.log(1 + 0.0228 * s), p2 = d * Math.cos(h), f = d * Math.sin(h);
	      return new z(n, r, t, o, s, u, l, p2, f);
	    }
	    static fromUcs(t, r, n) {
	      return z.fromUcsInViewingConditions(t, r, n, v.DEFAULT);
	    }
	    static fromUcsInViewingConditions(t, r, n, a) {
	      const o = r, s = n, c = Math.sqrt(o * o + s * s), h = (Math.exp(c * 0.0228) - 1) / 0.0228 / a.fLRoot;
	      let l = Math.atan2(s, o) * (180 / Math.PI);
	      l < 0 && (l += 360);
	      const d = t / (1 - (t - 100) * 7e-3);
	      return z.fromJchInViewingConditions(d, h, l, a);
	    }
	    toInt() {
	      return this.viewed(v.DEFAULT);
	    }
	    viewed(t) {
	      const r = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), n = Math.pow(r / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), a = this.hue * Math.PI / 180, o = 0.25 * (Math.cos(a + 2) + 3.8), s = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), c = o * (5e4 / 13) * t.nc * t.ncb, u = s / t.nbb, h = Math.sin(a), l = Math.cos(a), d = 23 * (u + 0.305) * n / (23 * c + 11 * n * l + 108 * n * h), p2 = d * l, f = d * h, M = (460 * u + 451 * p2 + 288 * f) / 1403, g = (460 * u - 891 * p2 - 261 * f) / 1403, b = (460 * u - 220 * p2 - 6300 * f) / 1403, w = Math.max(0, 27.13 * Math.abs(M) / (400 - Math.abs(M))), y = q(M) * (100 / t.fl) * Math.pow(w, 1 / 0.42), k = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), A = q(g) * (100 / t.fl) * Math.pow(k, 1 / 0.42), D = Math.max(0, 27.13 * Math.abs(b) / (400 - Math.abs(b))), R = q(b) * (100 / t.fl) * Math.pow(D, 1 / 0.42), P = y / t.rgbD[0], I = A / t.rgbD[1], B = R / t.rgbD[2], T = 1.86206786 * P - 1.01125463 * I + 0.14918677 * B, V = 0.38752654 * P + 0.62144744 * I - 897398e-8 * B, Y = -0.0158415 * P - 0.03412294 * I + 1.04996444 * B;
	      return St(T, V, Y);
	    }
	    static fromXyzInViewingConditions(t, r, n, a) {
	      const o = 0.401288 * t + 0.650173 * r - 0.051461 * n, s = -0.250268 * t + 1.204414 * r + 0.045854 * n, c = -2079e-6 * t + 0.048952 * r + 0.953127 * n, u = a.rgbD[0] * o, h = a.rgbD[1] * s, l = a.rgbD[2] * c, d = Math.pow(a.fl * Math.abs(u) / 100, 0.42), p2 = Math.pow(a.fl * Math.abs(h) / 100, 0.42), f = Math.pow(a.fl * Math.abs(l) / 100, 0.42), M = q(u) * 400 * d / (d + 27.13), g = q(h) * 400 * p2 / (p2 + 27.13), b = q(l) * 400 * f / (f + 27.13), w = (11 * M + -12 * g + b) / 11, y = (M + g - 2 * b) / 9, k = (20 * M + 20 * g + 21 * b) / 20, A = (40 * M + 20 * g + b) / 20, R = Math.atan2(y, w) * 180 / Math.PI, P = R < 0 ? R + 360 : R >= 360 ? R - 360 : R, I = P * Math.PI / 180, B = A * a.nbb, T = 100 * Math.pow(B / a.aw, a.c * a.z), V = 4 / a.c * Math.sqrt(T / 100) * (a.aw + 4) * a.fLRoot, Y = P < 20.14 ? P + 360 : P, U = 1 / 4 * (Math.cos(Y * Math.PI / 180 + 2) + 3.8), Z = 5e4 / 13 * U * a.nc * a.ncb * Math.sqrt(w * w + y * y) / (k + 0.305), st = Math.pow(Z, 0.9) * Math.pow(1.64 - Math.pow(0.29, a.n), 0.73), K = st * Math.sqrt(T / 100), it = K * a.fLRoot, pt = 50 * Math.sqrt(st * a.c / (a.aw + 4)), yt = (1 + 100 * 7e-3) * T / (1 + 7e-3 * T), Mt = Math.log(1 + 0.0228 * it) / 0.0228, kt = Mt * Math.cos(I), ct = Mt * Math.sin(I);
	      return new z(P, K, T, V, it, pt, yt, kt, ct);
	    }
	    xyzInViewingConditions(t) {
	      const r = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), n = Math.pow(r / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), a = this.hue * Math.PI / 180, o = 0.25 * (Math.cos(a + 2) + 3.8), s = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), c = o * (5e4 / 13) * t.nc * t.ncb, u = s / t.nbb, h = Math.sin(a), l = Math.cos(a), d = 23 * (u + 0.305) * n / (23 * c + 11 * n * l + 108 * n * h), p2 = d * l, f = d * h, M = (460 * u + 451 * p2 + 288 * f) / 1403, g = (460 * u - 891 * p2 - 261 * f) / 1403, b = (460 * u - 220 * p2 - 6300 * f) / 1403, w = Math.max(0, 27.13 * Math.abs(M) / (400 - Math.abs(M))), y = q(M) * (100 / t.fl) * Math.pow(w, 1 / 0.42), k = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), A = q(g) * (100 / t.fl) * Math.pow(k, 1 / 0.42), D = Math.max(0, 27.13 * Math.abs(b) / (400 - Math.abs(b))), R = q(b) * (100 / t.fl) * Math.pow(D, 1 / 0.42), P = y / t.rgbD[0], I = A / t.rgbD[1], B = R / t.rgbD[2], T = 1.86206786 * P - 1.01125463 * I + 0.14918677 * B, V = 0.38752654 * P + 0.62144744 * I - 897398e-8 * B, Y = -0.0158415 * P - 0.03412294 * I + 1.04996444 * B;
	      return [T, V, Y];
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class C {
	    static sanitizeRadians(t) {
	      return (t + Math.PI * 8) % (Math.PI * 2);
	    }
	    static trueDelinearized(t) {
	      const r = t / 100;
	      let n = 0;
	      return r <= 31308e-7 ? n = r * 12.92 : n = 1.055 * Math.pow(r, 1 / 2.4) - 0.055, n * 255;
	    }
	    static chromaticAdaptation(t) {
	      const r = Math.pow(Math.abs(t), 0.42);
	      return q(t) * 400 * r / (r + 27.13);
	    }
	    static hueOf(t) {
	      const r = bt(t, C.SCALED_DISCOUNT_FROM_LINRGB), n = C.chromaticAdaptation(r[0]), a = C.chromaticAdaptation(r[1]), o = C.chromaticAdaptation(r[2]), s = (11 * n + -12 * a + o) / 11, c = (n + a - 2 * o) / 9;
	      return Math.atan2(c, s);
	    }
	    static areInCyclicOrder(t, r, n) {
	      const a = C.sanitizeRadians(r - t), o = C.sanitizeRadians(n - t);
	      return a < o;
	    }
	    static intercept(t, r, n) {
	      return (r - t) / (n - t);
	    }
	    static lerpPoint(t, r, n) {
	      return [t[0] + (n[0] - t[0]) * r, t[1] + (n[1] - t[1]) * r, t[2] + (n[2] - t[2]) * r];
	    }
	    static setCoordinate(t, r, n, a) {
	      const o = C.intercept(t[a], r, n[a]);
	      return C.lerpPoint(t, o, n);
	    }
	    static isBounded(t) {
	      return 0 <= t && t <= 100;
	    }
	    static nthVertex(t, r) {
	      const n = C.Y_FROM_LINRGB[0], a = C.Y_FROM_LINRGB[1], o = C.Y_FROM_LINRGB[2], s = r % 4 <= 1 ? 0 : 100, c = r % 2 === 0 ? 0 : 100;
	      if (r < 4) {
	        const u = s, h = c, l = (t - u * a - h * o) / n;
	        return C.isBounded(l) ? [l, u, h] : [-1, -1, -1];
	      } else if (r < 8) {
	        const u = s, h = c, l = (t - h * n - u * o) / a;
	        return C.isBounded(l) ? [h, l, u] : [-1, -1, -1];
	      } else {
	        const u = s, h = c, l = (t - u * n - h * a) / o;
	        return C.isBounded(l) ? [u, h, l] : [-1, -1, -1];
	      }
	    }
	    static bisectToSegment(t, r) {
	      let n = [-1, -1, -1], a = n, o = 0, s = 0, c = false, u = true;
	      for (let h = 0; h < 12; h++) {
	        const l = C.nthVertex(t, h);
	        if (l[0] < 0) continue;
	        const d = C.hueOf(l);
	        if (!c) {
	          n = l, a = l, o = d, s = d, c = true;
	          continue;
	        }
	        (u || C.areInCyclicOrder(o, d, s)) && (u = false, C.areInCyclicOrder(o, r, d) ? (a = l, s = d) : (n = l, o = d));
	      }
	      return [n, a];
	    }
	    static midpoint(t, r) {
	      return [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2, (t[2] + r[2]) / 2];
	    }
	    static criticalPlaneBelow(t) {
	      return Math.floor(t - 0.5);
	    }
	    static criticalPlaneAbove(t) {
	      return Math.ceil(t - 0.5);
	    }
	    static bisectToLimit(t, r) {
	      const n = C.bisectToSegment(t, r);
	      let a = n[0], o = C.hueOf(a), s = n[1];
	      for (let c = 0; c < 3; c++) if (a[c] !== s[c]) {
	        let u = -1, h = 255;
	        a[c] < s[c] ? (u = C.criticalPlaneBelow(C.trueDelinearized(a[c])), h = C.criticalPlaneAbove(C.trueDelinearized(s[c]))) : (u = C.criticalPlaneAbove(C.trueDelinearized(a[c])), h = C.criticalPlaneBelow(C.trueDelinearized(s[c])));
	        for (let l = 0; l < 8 && !(Math.abs(h - u) <= 1); l++) {
	          const d = Math.floor((u + h) / 2), p2 = C.CRITICAL_PLANES[d], f = C.setCoordinate(a, p2, s, c), M = C.hueOf(f);
	          C.areInCyclicOrder(o, r, M) ? (s = f, h = d) : (a = f, o = M, u = d);
	        }
	      }
	      return C.midpoint(a, s);
	    }
	    static inverseChromaticAdaptation(t) {
	      const r = Math.abs(t), n = Math.max(0, 27.13 * r / (400 - r));
	      return q(t) * Math.pow(n, 1 / 0.42);
	    }
	    static findResultByJ(t, r, n) {
	      let a = Math.sqrt(n) * 11;
	      const o = v.DEFAULT, s = 1 / Math.pow(1.64 - Math.pow(0.29, o.n), 0.73), u = 0.25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * o.nc * o.ncb, h = Math.sin(t), l = Math.cos(t);
	      for (let d = 0; d < 5; d++) {
	        const p2 = a / 100, f = r === 0 || a === 0 ? 0 : r / Math.sqrt(p2), M = Math.pow(f * s, 1 / 0.9), b = o.aw * Math.pow(p2, 1 / o.c / o.z) / o.nbb, w = 23 * (b + 0.305) * M / (23 * u + 11 * M * l + 108 * M * h), y = w * l, k = w * h, A = (460 * b + 451 * y + 288 * k) / 1403, D = (460 * b - 891 * y - 261 * k) / 1403, R = (460 * b - 220 * y - 6300 * k) / 1403, P = C.inverseChromaticAdaptation(A), I = C.inverseChromaticAdaptation(D), B = C.inverseChromaticAdaptation(R), T = bt([P, I, B], C.LINRGB_FROM_SCALED_DISCOUNT);
	        if (T[0] < 0 || T[1] < 0 || T[2] < 0) return 0;
	        const V = C.Y_FROM_LINRGB[0], Y = C.Y_FROM_LINRGB[1], U = C.Y_FROM_LINRGB[2], L = V * T[0] + Y * T[1] + U * T[2];
	        if (L <= 0) return 0;
	        if (d === 4 || Math.abs(L - n) < 2e-3) return T[0] > 100.01 || T[1] > 100.01 || T[2] > 100.01 ? 0 : Et(T);
	        a = a - (L - n) * a / (2 * L);
	      }
	      return 0;
	    }
	    static solveToInt(t, r, n) {
	      if (r < 1e-4 || n < 1e-4 || n > 99.9999) return $t(n);
	      t = Dt(t);
	      const a = t / 180 * Math.PI, o = Q(n), s = C.findResultByJ(a, r, o);
	      if (s !== 0) return s;
	      const c = C.bisectToLimit(o, a);
	      return Et(c);
	    }
	    static solveToCam(t, r, n) {
	      return z.fromInt(C.solveToInt(t, r, n));
	    }
	  }
	  C.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]];
	  C.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]];
	  C.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
	  C.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class E {
	    static from(t, r, n) {
	      return new E(C.solveToInt(t, r, n));
	    }
	    static fromInt(t) {
	      return new E(t);
	    }
	    toInt() {
	      return this.argb;
	    }
	    get hue() {
	      return this.internalHue;
	    }
	    set hue(t) {
	      this.setInternalState(C.solveToInt(t, this.internalChroma, this.internalTone));
	    }
	    get chroma() {
	      return this.internalChroma;
	    }
	    set chroma(t) {
	      this.setInternalState(C.solveToInt(this.internalHue, t, this.internalTone));
	    }
	    get tone() {
	      return this.internalTone;
	    }
	    set tone(t) {
	      this.setInternalState(C.solveToInt(this.internalHue, this.internalChroma, t));
	    }
	    constructor(t) {
	      this.argb = t;
	      const r = z.fromInt(t);
	      this.internalHue = r.hue, this.internalChroma = r.chroma, this.internalTone = Ct(t), this.argb = t;
	    }
	    setInternalState(t) {
	      const r = z.fromInt(t);
	      this.internalHue = r.hue, this.internalChroma = r.chroma, this.internalTone = Ct(t), this.argb = t;
	    }
	    inViewingConditions(t) {
	      const n = z.fromInt(this.toInt()).xyzInViewingConditions(t), a = z.fromXyzInViewingConditions(n[0], n[1], n[2], v.make());
	      return E.from(a.hue, a.chroma, It(n[1]));
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class xt {
	    static harmonize(t, r) {
	      const n = E.fromInt(t), a = E.fromInt(r), o = Nt(n.hue, a.hue), s = Math.min(o * 0.5, 15), c = Dt(n.hue + s * jt(n.hue, a.hue));
	      return E.from(c, n.chroma, n.tone).toInt();
	    }
	    static hctHue(t, r, n) {
	      const a = xt.cam16Ucs(t, r, n), o = z.fromInt(a), s = z.fromInt(t);
	      return E.from(o.hue, s.chroma, Ct(t)).toInt();
	    }
	    static cam16Ucs(t, r, n) {
	      const a = z.fromInt(t), o = z.fromInt(r), s = a.jstar, c = a.astar, u = a.bstar, h = o.jstar, l = o.astar, d = o.bstar, p2 = s + (h - s) * n, f = c + (l - c) * n, M = u + (d - u) * n;
	      return z.fromUcs(p2, f, M).toInt();
	    }
	  }
	  /**
	  * @license
	  * Copyright 2022 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class N {
	    static ratioOfTones(t, r) {
	      return t = ht(0, 100, t), r = ht(0, 100, r), N.ratioOfYs(Q(t), Q(r));
	    }
	    static ratioOfYs(t, r) {
	      const n = t > r ? t : r, a = n === r ? t : r;
	      return (n + 5) / (a + 5);
	    }
	    static lighter(t, r) {
	      if (t < 0 || t > 100) return -1;
	      const n = Q(t), a = r * (n + 5) - 5, o = N.ratioOfYs(a, n), s = Math.abs(o - r);
	      if (o < r && s > 0.04) return -1;
	      const c = It(a) + 0.4;
	      return c < 0 || c > 100 ? -1 : c;
	    }
	    static darker(t, r) {
	      if (t < 0 || t > 100) return -1;
	      const n = Q(t), a = (n + 5) / r - 5, o = N.ratioOfYs(n, a), s = Math.abs(o - r);
	      if (o < r && s > 0.04) return -1;
	      const c = It(a) - 0.4;
	      return c < 0 || c > 100 ? -1 : c;
	    }
	    static lighterUnsafe(t, r) {
	      const n = N.lighter(t, r);
	      return n < 0 ? 100 : n;
	    }
	    static darkerUnsafe(t, r) {
	      const n = N.darker(t, r);
	      return n < 0 ? 0 : n;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2023 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class At {
	    static isDisliked(t) {
	      const r = Math.round(t.hue) >= 90 && Math.round(t.hue) <= 111, n = Math.round(t.chroma) > 16, a = Math.round(t.tone) < 65;
	      return r && n && a;
	    }
	    static fixIfDisliked(t) {
	      return At.isDisliked(t) ? E.from(t.hue, t.chroma, 70) : t;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2022 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class m {
	    static fromPalette(t) {
	      return new m(t.name ?? "", t.palette, t.tone, t.isBackground ?? false, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
	    }
	    constructor(t, r, n, a, o, s, c, u) {
	      if (this.name = t, this.palette = r, this.tone = n, this.isBackground = a, this.background = o, this.secondBackground = s, this.contrastCurve = c, this.toneDeltaPair = u, this.hctCache = /* @__PURE__ */ new Map(), !o && s) throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);
	      if (!o && c) throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);
	      if (o && !c) throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`);
	    }
	    getArgb(t) {
	      return this.getHct(t).toInt();
	    }
	    getHct(t) {
	      const r = this.hctCache.get(t);
	      if (r != null) return r;
	      const n = this.getTone(t), a = this.palette(t).getHct(n);
	      return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(t, a), a;
	    }
	    getTone(t) {
	      const r = t.contrastLevel < 0;
	      if (this.toneDeltaPair) {
	        const n = this.toneDeltaPair(t), a = n.roleA, o = n.roleB, s = n.delta, c = n.polarity, u = n.stayTogether, l = this.background(t).getTone(t), d = c === "nearer" || c === "lighter" && !t.isDark || c === "darker" && t.isDark, p2 = d ? a : o, f = d ? o : a, M = this.name === p2.name, g = t.isDark ? 1 : -1, b = p2.contrastCurve.getContrast(t.contrastLevel), w = f.contrastCurve.getContrast(t.contrastLevel), y = p2.tone(t);
	        let k = N.ratioOfTones(l, y) >= b ? y : m.foregroundTone(l, b);
	        const A = f.tone(t);
	        let D = N.ratioOfTones(l, A) >= w ? A : m.foregroundTone(l, w);
	        return r && (k = m.foregroundTone(l, b), D = m.foregroundTone(l, w)), (D - k) * g >= s || (D = ht(0, 100, k + s * g), (D - k) * g >= s || (k = ht(0, 100, D - s * g))), 50 <= k && k < 60 ? g > 0 ? (k = 60, D = Math.max(D, k + s * g)) : (k = 49, D = Math.min(D, k + s * g)) : 50 <= D && D < 60 && (u ? g > 0 ? (k = 60, D = Math.max(D, k + s * g)) : (k = 49, D = Math.min(D, k + s * g)) : g > 0 ? D = 60 : D = 49), M ? k : D;
	      } else {
	        let n = this.tone(t);
	        if (this.background == null) return n;
	        const a = this.background(t).getTone(t), o = this.contrastCurve.getContrast(t.contrastLevel);
	        if (N.ratioOfTones(a, n) >= o || (n = m.foregroundTone(a, o)), r && (n = m.foregroundTone(a, o)), this.isBackground && 50 <= n && n < 60 && (N.ratioOfTones(49, a) >= o ? n = 49 : n = 60), this.secondBackground) {
	          const [s, c] = [this.background, this.secondBackground], [u, h] = [s(t).getTone(t), c(t).getTone(t)], [l, d] = [Math.max(u, h), Math.min(u, h)];
	          if (N.ratioOfTones(l, n) >= o && N.ratioOfTones(d, n) >= o) return n;
	          const p2 = N.lighter(l, o), f = N.darker(d, o), M = [];
	          return p2 !== -1 && M.push(p2), f !== -1 && M.push(f), m.tonePrefersLightForeground(u) || m.tonePrefersLightForeground(h) ? p2 < 0 ? 100 : p2 : M.length === 1 ? M[0] : f < 0 ? 0 : f;
	        }
	        return n;
	      }
	    }
	    static foregroundTone(t, r) {
	      const n = N.lighterUnsafe(t, r), a = N.darkerUnsafe(t, r), o = N.ratioOfTones(n, t), s = N.ratioOfTones(a, t);
	      if (m.tonePrefersLightForeground(t)) {
	        const u = Math.abs(o - s) < 0.1 && o < r && s < r;
	        return o >= r || o >= s || u ? n : a;
	      } else return s >= r || s >= o ? a : n;
	    }
	    static tonePrefersLightForeground(t) {
	      return Math.round(t) < 60;
	    }
	    static toneAllowsLightForeground(t) {
	      return Math.round(t) <= 49;
	    }
	    static enableLightForeground(t) {
	      return m.tonePrefersLightForeground(t) && !m.toneAllowsLightForeground(t) ? 49 : t;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2022 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  var ot;
	  (function(e) {
	    e[e.MONOCHROME = 0] = "MONOCHROME", e[e.NEUTRAL = 1] = "NEUTRAL", e[e.TONAL_SPOT = 2] = "TONAL_SPOT", e[e.VIBRANT = 3] = "VIBRANT", e[e.EXPRESSIVE = 4] = "EXPRESSIVE", e[e.FIDELITY = 5] = "FIDELITY", e[e.CONTENT = 6] = "CONTENT", e[e.RAINBOW = 7] = "RAINBOW", e[e.FRUIT_SALAD = 8] = "FRUIT_SALAD";
	  })(ot || (ot = {}));
	  /**
	  * @license
	  * Copyright 2023 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class x {
	    constructor(t, r, n, a) {
	      this.low = t, this.normal = r, this.medium = n, this.high = a;
	    }
	    getContrast(t) {
	      return t <= -1 ? this.low : t < 0 ? nt(this.low, this.normal, (t - -1) / 1) : t < 0.5 ? nt(this.normal, this.medium, (t - 0) / 0.5) : t < 1 ? nt(this.medium, this.high, (t - 0.5) / 0.5) : this.high;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2023 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class j {
	    constructor(t, r, n, a, o) {
	      this.roleA = t, this.roleB = r, this.delta = n, this.polarity = a, this.stayTogether = o;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2022 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  function et(e) {
	    return e.variant === ot.FIDELITY || e.variant === ot.CONTENT;
	  }
	  function O(e) {
	    return e.variant === ot.MONOCHROME;
	  }
	  function Qt(e, t, r, n) {
	    let a = r, o = E.from(e, t, r);
	    if (o.chroma < t) {
	      let s = o.chroma;
	      for (; o.chroma < t; ) {
	        a += n ? -1 : 1;
	        const c = E.from(e, t, a);
	        if (s > c.chroma || Math.abs(c.chroma - t) < 0.4) break;
	        const u = Math.abs(c.chroma - t), h = Math.abs(o.chroma - t);
	        u < h && (o = c), s = Math.max(s, c.chroma);
	      }
	    }
	    return a;
	  }
	  function Zt(e) {
	    return v.make(void 0, void 0, e.isDark ? 30 : 80, void 0, void 0);
	  }
	  function Tt(e, t) {
	    const r = e.inViewingConditions(Zt(t));
	    return m.tonePrefersLightForeground(e.tone) && !m.toneAllowsLightForeground(r.tone) ? m.enableLightForeground(e.tone) : m.enableLightForeground(r.tone);
	  }
	  class i {
	    static highestSurface(t) {
	      return t.isDark ? i.surfaceBright : i.surfaceDim;
	    }
	  }
	  i.contentAccentToneDelta = 15;
	  i.primaryPaletteKeyColor = m.fromPalette({ name: "primary_palette_key_color", palette: (e) => e.primaryPalette, tone: (e) => e.primaryPalette.keyColor.tone });
	  i.secondaryPaletteKeyColor = m.fromPalette({ name: "secondary_palette_key_color", palette: (e) => e.secondaryPalette, tone: (e) => e.secondaryPalette.keyColor.tone });
	  i.tertiaryPaletteKeyColor = m.fromPalette({ name: "tertiary_palette_key_color", palette: (e) => e.tertiaryPalette, tone: (e) => e.tertiaryPalette.keyColor.tone });
	  i.neutralPaletteKeyColor = m.fromPalette({ name: "neutral_palette_key_color", palette: (e) => e.neutralPalette, tone: (e) => e.neutralPalette.keyColor.tone });
	  i.neutralVariantPaletteKeyColor = m.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e) => e.neutralVariantPalette, tone: (e) => e.neutralVariantPalette.keyColor.tone });
	  i.background = m.fromPalette({ name: "background", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 6 : 98, isBackground: true });
	  i.onBackground = m.fromPalette({ name: "on_background", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 90 : 10, background: (e) => i.background, contrastCurve: new x(3, 3, 4.5, 7) });
	  i.surface = m.fromPalette({ name: "surface", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 6 : 98, isBackground: true });
	  i.surfaceDim = m.fromPalette({ name: "surface_dim", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 6 : 87, isBackground: true });
	  i.surfaceBright = m.fromPalette({ name: "surface_bright", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 24 : 98, isBackground: true });
	  i.surfaceContainerLowest = m.fromPalette({ name: "surface_container_lowest", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 4 : 100, isBackground: true });
	  i.surfaceContainerLow = m.fromPalette({ name: "surface_container_low", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 10 : 96, isBackground: true });
	  i.surfaceContainer = m.fromPalette({ name: "surface_container", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 12 : 94, isBackground: true });
	  i.surfaceContainerHigh = m.fromPalette({ name: "surface_container_high", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 17 : 92, isBackground: true });
	  i.surfaceContainerHighest = m.fromPalette({ name: "surface_container_highest", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 22 : 90, isBackground: true });
	  i.onSurface = m.fromPalette({ name: "on_surface", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 90 : 10, background: (e) => i.highestSurface(e), contrastCurve: new x(4.5, 7, 11, 21) });
	  i.surfaceVariant = m.fromPalette({ name: "surface_variant", palette: (e) => e.neutralVariantPalette, tone: (e) => e.isDark ? 30 : 90, isBackground: true });
	  i.onSurfaceVariant = m.fromPalette({ name: "on_surface_variant", palette: (e) => e.neutralVariantPalette, tone: (e) => e.isDark ? 80 : 30, background: (e) => i.highestSurface(e), contrastCurve: new x(3, 4.5, 7, 11) });
	  i.inverseSurface = m.fromPalette({ name: "inverse_surface", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 90 : 20 });
	  i.inverseOnSurface = m.fromPalette({ name: "inverse_on_surface", palette: (e) => e.neutralPalette, tone: (e) => e.isDark ? 20 : 95, background: (e) => i.inverseSurface, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.outline = m.fromPalette({ name: "outline", palette: (e) => e.neutralVariantPalette, tone: (e) => e.isDark ? 60 : 50, background: (e) => i.highestSurface(e), contrastCurve: new x(1.5, 3, 4.5, 7) });
	  i.outlineVariant = m.fromPalette({ name: "outline_variant", palette: (e) => e.neutralVariantPalette, tone: (e) => e.isDark ? 30 : 80, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7) });
	  i.shadow = m.fromPalette({ name: "shadow", palette: (e) => e.neutralPalette, tone: (e) => 0 });
	  i.scrim = m.fromPalette({ name: "scrim", palette: (e) => e.neutralPalette, tone: (e) => 0 });
	  i.surfaceTint = m.fromPalette({ name: "surface_tint", palette: (e) => e.primaryPalette, tone: (e) => e.isDark ? 80 : 40, isBackground: true });
	  i.primary = m.fromPalette({ name: "primary", palette: (e) => e.primaryPalette, tone: (e) => O(e) ? e.isDark ? 100 : 0 : e.isDark ? 80 : 40, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(3, 4.5, 7, 11), toneDeltaPair: (e) => new j(i.primaryContainer, i.primary, 15, "nearer", false) });
	  i.onPrimary = m.fromPalette({ name: "on_primary", palette: (e) => e.primaryPalette, tone: (e) => O(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100, background: (e) => i.primary, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.primaryContainer = m.fromPalette({ name: "primary_container", palette: (e) => e.primaryPalette, tone: (e) => et(e) ? Tt(e.sourceColorHct, e) : O(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.primaryContainer, i.primary, 15, "nearer", false) });
	  i.onPrimaryContainer = m.fromPalette({ name: "on_primary_container", palette: (e) => e.primaryPalette, tone: (e) => et(e) ? m.foregroundTone(i.primaryContainer.tone(e), 4.5) : O(e) ? e.isDark ? 0 : 100 : e.isDark ? 90 : 10, background: (e) => i.primaryContainer, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.inversePrimary = m.fromPalette({ name: "inverse_primary", palette: (e) => e.primaryPalette, tone: (e) => e.isDark ? 40 : 80, background: (e) => i.inverseSurface, contrastCurve: new x(3, 4.5, 7, 11) });
	  i.secondary = m.fromPalette({ name: "secondary", palette: (e) => e.secondaryPalette, tone: (e) => e.isDark ? 80 : 40, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(3, 4.5, 7, 11), toneDeltaPair: (e) => new j(i.secondaryContainer, i.secondary, 15, "nearer", false) });
	  i.onSecondary = m.fromPalette({ name: "on_secondary", palette: (e) => e.secondaryPalette, tone: (e) => O(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100, background: (e) => i.secondary, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.secondaryContainer = m.fromPalette({ name: "secondary_container", palette: (e) => e.secondaryPalette, tone: (e) => {
	    const t = e.isDark ? 30 : 90;
	    if (O(e)) return e.isDark ? 30 : 85;
	    if (!et(e)) return t;
	    let r = Qt(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark);
	    return r = Tt(e.secondaryPalette.getHct(r), e), r;
	  }, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.secondaryContainer, i.secondary, 15, "nearer", false) });
	  i.onSecondaryContainer = m.fromPalette({ name: "on_secondary_container", palette: (e) => e.secondaryPalette, tone: (e) => et(e) ? m.foregroundTone(i.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 10, background: (e) => i.secondaryContainer, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.tertiary = m.fromPalette({ name: "tertiary", palette: (e) => e.tertiaryPalette, tone: (e) => O(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(3, 4.5, 7, 11), toneDeltaPair: (e) => new j(i.tertiaryContainer, i.tertiary, 15, "nearer", false) });
	  i.onTertiary = m.fromPalette({ name: "on_tertiary", palette: (e) => e.tertiaryPalette, tone: (e) => O(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100, background: (e) => i.tertiary, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.tertiaryContainer = m.fromPalette({ name: "tertiary_container", palette: (e) => e.tertiaryPalette, tone: (e) => {
	    if (O(e)) return e.isDark ? 60 : 49;
	    if (!et(e)) return e.isDark ? 30 : 90;
	    const t = Tt(e.tertiaryPalette.getHct(e.sourceColorHct.tone), e), r = e.tertiaryPalette.getHct(t);
	    return At.fixIfDisliked(r).tone;
	  }, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.tertiaryContainer, i.tertiary, 15, "nearer", false) });
	  i.onTertiaryContainer = m.fromPalette({ name: "on_tertiary_container", palette: (e) => e.tertiaryPalette, tone: (e) => O(e) ? e.isDark ? 0 : 100 : et(e) ? m.foregroundTone(i.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 10, background: (e) => i.tertiaryContainer, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.error = m.fromPalette({ name: "error", palette: (e) => e.errorPalette, tone: (e) => e.isDark ? 80 : 40, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(3, 4.5, 7, 11), toneDeltaPair: (e) => new j(i.errorContainer, i.error, 15, "nearer", false) });
	  i.onError = m.fromPalette({ name: "on_error", palette: (e) => e.errorPalette, tone: (e) => e.isDark ? 20 : 100, background: (e) => i.error, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.errorContainer = m.fromPalette({ name: "error_container", palette: (e) => e.errorPalette, tone: (e) => e.isDark ? 30 : 90, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.errorContainer, i.error, 15, "nearer", false) });
	  i.onErrorContainer = m.fromPalette({ name: "on_error_container", palette: (e) => e.errorPalette, tone: (e) => e.isDark ? 90 : 10, background: (e) => i.errorContainer, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.primaryFixed = m.fromPalette({ name: "primary_fixed", palette: (e) => e.primaryPalette, tone: (e) => O(e) ? 40 : 90, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.primaryFixed, i.primaryFixedDim, 10, "lighter", true) });
	  i.primaryFixedDim = m.fromPalette({ name: "primary_fixed_dim", palette: (e) => e.primaryPalette, tone: (e) => O(e) ? 30 : 80, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.primaryFixed, i.primaryFixedDim, 10, "lighter", true) });
	  i.onPrimaryFixed = m.fromPalette({ name: "on_primary_fixed", palette: (e) => e.primaryPalette, tone: (e) => O(e) ? 100 : 10, background: (e) => i.primaryFixedDim, secondBackground: (e) => i.primaryFixed, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.onPrimaryFixedVariant = m.fromPalette({ name: "on_primary_fixed_variant", palette: (e) => e.primaryPalette, tone: (e) => O(e) ? 90 : 30, background: (e) => i.primaryFixedDim, secondBackground: (e) => i.primaryFixed, contrastCurve: new x(3, 4.5, 7, 11) });
	  i.secondaryFixed = m.fromPalette({ name: "secondary_fixed", palette: (e) => e.secondaryPalette, tone: (e) => O(e) ? 80 : 90, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.secondaryFixed, i.secondaryFixedDim, 10, "lighter", true) });
	  i.secondaryFixedDim = m.fromPalette({ name: "secondary_fixed_dim", palette: (e) => e.secondaryPalette, tone: (e) => O(e) ? 70 : 80, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.secondaryFixed, i.secondaryFixedDim, 10, "lighter", true) });
	  i.onSecondaryFixed = m.fromPalette({ name: "on_secondary_fixed", palette: (e) => e.secondaryPalette, tone: (e) => 10, background: (e) => i.secondaryFixedDim, secondBackground: (e) => i.secondaryFixed, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.onSecondaryFixedVariant = m.fromPalette({ name: "on_secondary_fixed_variant", palette: (e) => e.secondaryPalette, tone: (e) => O(e) ? 25 : 30, background: (e) => i.secondaryFixedDim, secondBackground: (e) => i.secondaryFixed, contrastCurve: new x(3, 4.5, 7, 11) });
	  i.tertiaryFixed = m.fromPalette({ name: "tertiary_fixed", palette: (e) => e.tertiaryPalette, tone: (e) => O(e) ? 40 : 90, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.tertiaryFixed, i.tertiaryFixedDim, 10, "lighter", true) });
	  i.tertiaryFixedDim = m.fromPalette({ name: "tertiary_fixed_dim", palette: (e) => e.tertiaryPalette, tone: (e) => O(e) ? 30 : 80, isBackground: true, background: (e) => i.highestSurface(e), contrastCurve: new x(1, 1, 3, 7), toneDeltaPair: (e) => new j(i.tertiaryFixed, i.tertiaryFixedDim, 10, "lighter", true) });
	  i.onTertiaryFixed = m.fromPalette({ name: "on_tertiary_fixed", palette: (e) => e.tertiaryPalette, tone: (e) => O(e) ? 100 : 10, background: (e) => i.tertiaryFixedDim, secondBackground: (e) => i.tertiaryFixed, contrastCurve: new x(4.5, 7, 11, 21) });
	  i.onTertiaryFixedVariant = m.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e) => e.tertiaryPalette, tone: (e) => O(e) ? 90 : 30, background: (e) => i.tertiaryFixedDim, secondBackground: (e) => i.tertiaryFixed, contrastCurve: new x(3, 4.5, 7, 11) });
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class G {
	    static fromInt(t) {
	      const r = E.fromInt(t);
	      return G.fromHct(r);
	    }
	    static fromHct(t) {
	      return new G(t.hue, t.chroma, t);
	    }
	    static fromHueAndChroma(t, r) {
	      return new G(t, r, G.createKeyColor(t, r));
	    }
	    constructor(t, r, n) {
	      this.hue = t, this.chroma = r, this.keyColor = n, this.cache = /* @__PURE__ */ new Map();
	    }
	    static createKeyColor(t, r) {
	      let a = E.from(t, r, 50), o = Math.abs(a.chroma - r);
	      for (let s = 1; s < 50; s += 1) {
	        if (Math.round(r) === Math.round(a.chroma)) return a;
	        const c = E.from(t, r, 50 + s), u = Math.abs(c.chroma - r);
	        u < o && (o = u, a = c);
	        const h = E.from(t, r, 50 - s), l = Math.abs(h.chroma - r);
	        l < o && (o = l, a = h);
	      }
	      return a;
	    }
	    tone(t) {
	      let r = this.cache.get(t);
	      return r === void 0 && (r = E.from(this.hue, this.chroma, t).toInt(), this.cache.set(t, r)), r;
	    }
	    getHct(t) {
	      return E.fromInt(this.tone(t));
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class S {
	    static of(t) {
	      return new S(t, false);
	    }
	    static contentOf(t) {
	      return new S(t, true);
	    }
	    static fromColors(t) {
	      return S.createPaletteFromColors(false, t);
	    }
	    static contentFromColors(t) {
	      return S.createPaletteFromColors(true, t);
	    }
	    static createPaletteFromColors(t, r) {
	      const n = new S(r.primary, t);
	      if (r.secondary) {
	        const a = new S(r.secondary, t);
	        n.a2 = a.a1;
	      }
	      if (r.tertiary) {
	        const a = new S(r.tertiary, t);
	        n.a3 = a.a1;
	      }
	      if (r.error) {
	        const a = new S(r.error, t);
	        n.error = a.a1;
	      }
	      if (r.neutral) {
	        const a = new S(r.neutral, t);
	        n.n1 = a.n1;
	      }
	      if (r.neutralVariant) {
	        const a = new S(r.neutralVariant, t);
	        n.n2 = a.n2;
	      }
	      return n;
	    }
	    constructor(t, r) {
	      const n = E.fromInt(t), a = n.hue, o = n.chroma;
	      r ? (this.a1 = G.fromHueAndChroma(a, o), this.a2 = G.fromHueAndChroma(a, o / 3), this.a3 = G.fromHueAndChroma(a + 60, o / 2), this.n1 = G.fromHueAndChroma(a, Math.min(o / 12, 4)), this.n2 = G.fromHueAndChroma(a, Math.min(o / 6, 8))) : (this.a1 = G.fromHueAndChroma(a, Math.max(48, o)), this.a2 = G.fromHueAndChroma(a, 16), this.a3 = G.fromHueAndChroma(a + 60, 24), this.n1 = G.fromHueAndChroma(a, 4), this.n2 = G.fromHueAndChroma(a, 8)), this.error = G.fromHueAndChroma(25, 84);
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class te {
	    fromInt(t) {
	      return Xt(t);
	    }
	    toInt(t) {
	      return Jt(t[0], t[1], t[2]);
	    }
	    distance(t, r) {
	      const n = t[0] - r[0], a = t[1] - r[1], o = t[2] - r[2];
	      return n * n + a * a + o * o;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  const ee = 10, re = 3;
	  class ne {
	    static quantize(t, r, n) {
	      const a = /* @__PURE__ */ new Map(), o = new Array(), s = new Array(), c = new te();
	      let u = 0;
	      for (let y = 0; y < t.length; y++) {
	        const k = t[y], A = a.get(k);
	        A === void 0 ? (u++, o.push(c.fromInt(k)), s.push(k), a.set(k, 1)) : a.set(k, A + 1);
	      }
	      const h = new Array();
	      for (let y = 0; y < u; y++) {
	        const k = s[y], A = a.get(k);
	        A !== void 0 && (h[y] = A);
	      }
	      let l = Math.min(n, u);
	      r.length > 0 && (l = Math.min(l, r.length));
	      const d = new Array();
	      for (let y = 0; y < r.length; y++) d.push(c.fromInt(r[y]));
	      const p2 = l - d.length;
	      if (r.length === 0 && p2 > 0) for (let y = 0; y < p2; y++) {
	        const k = Math.random() * 100, A = Math.random() * (100 - -100 + 1) + -100, D = Math.random() * (100 - -100 + 1) + -100;
	        d.push(new Array(k, A, D));
	      }
	      const f = new Array();
	      for (let y = 0; y < u; y++) f.push(Math.floor(Math.random() * l));
	      const M = new Array();
	      for (let y = 0; y < l; y++) {
	        M.push(new Array());
	        for (let k = 0; k < l; k++) M[y].push(0);
	      }
	      const g = new Array();
	      for (let y = 0; y < l; y++) {
	        g.push(new Array());
	        for (let k = 0; k < l; k++) g[y].push(new ae());
	      }
	      const b = new Array();
	      for (let y = 0; y < l; y++) b.push(0);
	      for (let y = 0; y < ee; y++) {
	        for (let P = 0; P < l; P++) {
	          for (let I = P + 1; I < l; I++) {
	            const B = c.distance(d[P], d[I]);
	            g[I][P].distance = B, g[I][P].index = P, g[P][I].distance = B, g[P][I].index = I;
	          }
	          g[P].sort();
	          for (let I = 0; I < l; I++) M[P][I] = g[P][I].index;
	        }
	        let k = 0;
	        for (let P = 0; P < u; P++) {
	          const I = o[P], B = f[P], T = d[B], V = c.distance(I, T);
	          let Y = V, U = -1;
	          for (let L = 0; L < l; L++) {
	            if (g[B][L].distance >= 4 * V) continue;
	            const Z = c.distance(I, d[L]);
	            Z < Y && (Y = Z, U = L);
	          }
	          U !== -1 && Math.abs(Math.sqrt(Y) - Math.sqrt(V)) > re && (k++, f[P] = U);
	        }
	        if (k === 0 && y !== 0) break;
	        const A = new Array(l).fill(0), D = new Array(l).fill(0), R = new Array(l).fill(0);
	        for (let P = 0; P < l; P++) b[P] = 0;
	        for (let P = 0; P < u; P++) {
	          const I = f[P], B = o[P], T = h[P];
	          b[I] += T, A[I] += B[0] * T, D[I] += B[1] * T, R[I] += B[2] * T;
	        }
	        for (let P = 0; P < l; P++) {
	          const I = b[P];
	          if (I === 0) {
	            d[P] = [0, 0, 0];
	            continue;
	          }
	          const B = A[P] / I, T = D[P] / I, V = R[P] / I;
	          d[P] = [B, T, V];
	        }
	      }
	      const w = /* @__PURE__ */ new Map();
	      for (let y = 0; y < l; y++) {
	        const k = b[y];
	        if (k === 0) continue;
	        const A = c.toInt(d[y]);
	        w.has(A) || w.set(A, k);
	      }
	      return w;
	    }
	  }
	  class ae {
	    constructor() {
	      this.distance = -1, this.index = -1;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class oe {
	    static quantize(t) {
	      const r = /* @__PURE__ */ new Map();
	      for (let n = 0; n < t.length; n++) {
	        const a = t[n];
	        Wt(a) < 255 || r.set(a, (r.get(a) ?? 0) + 1);
	      }
	      return r;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  const lt = 5, W = 33, rt = 35937, _ = { RED: "red", GREEN: "green", BLUE: "blue" };
	  class se {
	    constructor(t = [], r = [], n = [], a = [], o = [], s = []) {
	      this.weights = t, this.momentsR = r, this.momentsG = n, this.momentsB = a, this.moments = o, this.cubes = s;
	    }
	    quantize(t, r) {
	      this.constructHistogram(t), this.computeMoments();
	      const n = this.createBoxes(r);
	      return this.createResult(n.resultCount);
	    }
	    constructHistogram(t) {
	      this.weights = Array.from({ length: rt }).fill(0), this.momentsR = Array.from({ length: rt }).fill(0), this.momentsG = Array.from({ length: rt }).fill(0), this.momentsB = Array.from({ length: rt }).fill(0), this.moments = Array.from({ length: rt }).fill(0);
	      const r = oe.quantize(t);
	      for (const [n, a] of r.entries()) {
	        const o = dt(n), s = mt(n), c = gt(n), u = 8 - lt, h = (o >> u) + 1, l = (s >> u) + 1, d = (c >> u) + 1, p2 = this.getIndex(h, l, d);
	        this.weights[p2] = (this.weights[p2] ?? 0) + a, this.momentsR[p2] += a * o, this.momentsG[p2] += a * s, this.momentsB[p2] += a * c, this.moments[p2] += a * (o * o + s * s + c * c);
	      }
	    }
	    computeMoments() {
	      for (let t = 1; t < W; t++) {
	        const r = Array.from({ length: W }).fill(0), n = Array.from({ length: W }).fill(0), a = Array.from({ length: W }).fill(0), o = Array.from({ length: W }).fill(0), s = Array.from({ length: W }).fill(0);
	        for (let c = 1; c < W; c++) {
	          let u = 0, h = 0, l = 0, d = 0, p2 = 0;
	          for (let f = 1; f < W; f++) {
	            const M = this.getIndex(t, c, f);
	            u += this.weights[M], h += this.momentsR[M], l += this.momentsG[M], d += this.momentsB[M], p2 += this.moments[M], r[f] += u, n[f] += h, a[f] += l, o[f] += d, s[f] += p2;
	            const g = this.getIndex(t - 1, c, f);
	            this.weights[M] = this.weights[g] + r[f], this.momentsR[M] = this.momentsR[g] + n[f], this.momentsG[M] = this.momentsG[g] + a[f], this.momentsB[M] = this.momentsB[g] + o[f], this.moments[M] = this.moments[g] + s[f];
	          }
	        }
	      }
	    }
	    createBoxes(t) {
	      this.cubes = Array.from({ length: t }).fill(0).map(() => new ie());
	      const r = Array.from({ length: t }).fill(0);
	      this.cubes[0].r0 = 0, this.cubes[0].g0 = 0, this.cubes[0].b0 = 0, this.cubes[0].r1 = W - 1, this.cubes[0].g1 = W - 1, this.cubes[0].b1 = W - 1;
	      let n = t, a = 0;
	      for (let o = 1; o < t; o++) {
	        this.cut(this.cubes[a], this.cubes[o]) ? (r[a] = this.cubes[a].vol > 1 ? this.variance(this.cubes[a]) : 0, r[o] = this.cubes[o].vol > 1 ? this.variance(this.cubes[o]) : 0) : (r[a] = 0, o--), a = 0;
	        let s = r[0];
	        for (let c = 1; c <= o; c++) r[c] > s && (s = r[c], a = c);
	        if (s <= 0) {
	          n = o + 1;
	          break;
	        }
	      }
	      return new ce(t, n);
	    }
	    createResult(t) {
	      const r = [];
	      for (let n = 0; n < t; ++n) {
	        const a = this.cubes[n], o = this.volume(a, this.weights);
	        if (o > 0) {
	          const s = Math.round(this.volume(a, this.momentsR) / o), c = Math.round(this.volume(a, this.momentsG) / o), u = Math.round(this.volume(a, this.momentsB) / o), h = 255 << 24 | (s & 255) << 16 | (c & 255) << 8 | u & 255;
	          r.push(h);
	        }
	      }
	      return r;
	    }
	    variance(t) {
	      const r = this.volume(t, this.momentsR), n = this.volume(t, this.momentsG), a = this.volume(t, this.momentsB), o = this.moments[this.getIndex(t.r1, t.g1, t.b1)] - this.moments[this.getIndex(t.r1, t.g1, t.b0)] - this.moments[this.getIndex(t.r1, t.g0, t.b1)] + this.moments[this.getIndex(t.r1, t.g0, t.b0)] - this.moments[this.getIndex(t.r0, t.g1, t.b1)] + this.moments[this.getIndex(t.r0, t.g1, t.b0)] + this.moments[this.getIndex(t.r0, t.g0, t.b1)] - this.moments[this.getIndex(t.r0, t.g0, t.b0)], s = r * r + n * n + a * a, c = this.volume(t, this.weights);
	      return o - s / c;
	    }
	    cut(t, r) {
	      const n = this.volume(t, this.momentsR), a = this.volume(t, this.momentsG), o = this.volume(t, this.momentsB), s = this.volume(t, this.weights), c = this.maximize(t, _.RED, t.r0 + 1, t.r1, n, a, o, s), u = this.maximize(t, _.GREEN, t.g0 + 1, t.g1, n, a, o, s), h = this.maximize(t, _.BLUE, t.b0 + 1, t.b1, n, a, o, s);
	      let l;
	      const d = c.maximum, p2 = u.maximum, f = h.maximum;
	      if (d >= p2 && d >= f) {
	        if (c.cutLocation < 0) return false;
	        l = _.RED;
	      } else p2 >= d && p2 >= f ? l = _.GREEN : l = _.BLUE;
	      switch (r.r1 = t.r1, r.g1 = t.g1, r.b1 = t.b1, l) {
	        case _.RED:
	          t.r1 = c.cutLocation, r.r0 = t.r1, r.g0 = t.g0, r.b0 = t.b0;
	          break;
	        case _.GREEN:
	          t.g1 = u.cutLocation, r.r0 = t.r0, r.g0 = t.g1, r.b0 = t.b0;
	          break;
	        case _.BLUE:
	          t.b1 = h.cutLocation, r.r0 = t.r0, r.g0 = t.g0, r.b0 = t.b1;
	          break;
	        default:
	          throw new Error("unexpected direction " + l);
	      }
	      return t.vol = (t.r1 - t.r0) * (t.g1 - t.g0) * (t.b1 - t.b0), r.vol = (r.r1 - r.r0) * (r.g1 - r.g0) * (r.b1 - r.b0), true;
	    }
	    maximize(t, r, n, a, o, s, c, u) {
	      const h = this.bottom(t, r, this.momentsR), l = this.bottom(t, r, this.momentsG), d = this.bottom(t, r, this.momentsB), p2 = this.bottom(t, r, this.weights);
	      let f = 0, M = -1, g = 0, b = 0, w = 0, y = 0;
	      for (let k = n; k < a; k++) {
	        if (g = h + this.top(t, r, k, this.momentsR), b = l + this.top(t, r, k, this.momentsG), w = d + this.top(t, r, k, this.momentsB), y = p2 + this.top(t, r, k, this.weights), y === 0) continue;
	        let A = (g * g + b * b + w * w) * 1, D = y * 1, R = A / D;
	        g = o - g, b = s - b, w = c - w, y = u - y, y !== 0 && (A = (g * g + b * b + w * w) * 1, D = y * 1, R += A / D, R > f && (f = R, M = k));
	      }
	      return new le(M, f);
	    }
	    volume(t, r) {
	      return r[this.getIndex(t.r1, t.g1, t.b1)] - r[this.getIndex(t.r1, t.g1, t.b0)] - r[this.getIndex(t.r1, t.g0, t.b1)] + r[this.getIndex(t.r1, t.g0, t.b0)] - r[this.getIndex(t.r0, t.g1, t.b1)] + r[this.getIndex(t.r0, t.g1, t.b0)] + r[this.getIndex(t.r0, t.g0, t.b1)] - r[this.getIndex(t.r0, t.g0, t.b0)];
	    }
	    bottom(t, r, n) {
	      switch (r) {
	        case _.RED:
	          return -n[this.getIndex(t.r0, t.g1, t.b1)] + n[this.getIndex(t.r0, t.g1, t.b0)] + n[this.getIndex(t.r0, t.g0, t.b1)] - n[this.getIndex(t.r0, t.g0, t.b0)];
	        case _.GREEN:
	          return -n[this.getIndex(t.r1, t.g0, t.b1)] + n[this.getIndex(t.r1, t.g0, t.b0)] + n[this.getIndex(t.r0, t.g0, t.b1)] - n[this.getIndex(t.r0, t.g0, t.b0)];
	        case _.BLUE:
	          return -n[this.getIndex(t.r1, t.g1, t.b0)] + n[this.getIndex(t.r1, t.g0, t.b0)] + n[this.getIndex(t.r0, t.g1, t.b0)] - n[this.getIndex(t.r0, t.g0, t.b0)];
	        default:
	          throw new Error("unexpected direction $direction");
	      }
	    }
	    top(t, r, n, a) {
	      switch (r) {
	        case _.RED:
	          return a[this.getIndex(n, t.g1, t.b1)] - a[this.getIndex(n, t.g1, t.b0)] - a[this.getIndex(n, t.g0, t.b1)] + a[this.getIndex(n, t.g0, t.b0)];
	        case _.GREEN:
	          return a[this.getIndex(t.r1, n, t.b1)] - a[this.getIndex(t.r1, n, t.b0)] - a[this.getIndex(t.r0, n, t.b1)] + a[this.getIndex(t.r0, n, t.b0)];
	        case _.BLUE:
	          return a[this.getIndex(t.r1, t.g1, n)] - a[this.getIndex(t.r1, t.g0, n)] - a[this.getIndex(t.r0, t.g1, n)] + a[this.getIndex(t.r0, t.g0, n)];
	        default:
	          throw new Error("unexpected direction $direction");
	      }
	    }
	    getIndex(t, r, n) {
	      return (t << lt * 2) + (t << lt + 1) + t + (r << lt) + r + n;
	    }
	  }
	  class ie {
	    constructor(t = 0, r = 0, n = 0, a = 0, o = 0, s = 0, c = 0) {
	      this.r0 = t, this.r1 = r, this.g0 = n, this.g1 = a, this.b0 = o, this.b1 = s, this.vol = c;
	    }
	  }
	  class ce {
	    constructor(t, r) {
	      this.requestedCount = t, this.resultCount = r;
	    }
	  }
	  class le {
	    constructor(t, r) {
	      this.cutLocation = t, this.maximum = r;
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class ue {
	    static quantize(t, r) {
	      const a = new se().quantize(t, r);
	      return ne.quantize(t, a, r);
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  class X {
	    get primary() {
	      return this.props.primary;
	    }
	    get onPrimary() {
	      return this.props.onPrimary;
	    }
	    get primaryContainer() {
	      return this.props.primaryContainer;
	    }
	    get onPrimaryContainer() {
	      return this.props.onPrimaryContainer;
	    }
	    get secondary() {
	      return this.props.secondary;
	    }
	    get onSecondary() {
	      return this.props.onSecondary;
	    }
	    get secondaryContainer() {
	      return this.props.secondaryContainer;
	    }
	    get onSecondaryContainer() {
	      return this.props.onSecondaryContainer;
	    }
	    get tertiary() {
	      return this.props.tertiary;
	    }
	    get onTertiary() {
	      return this.props.onTertiary;
	    }
	    get tertiaryContainer() {
	      return this.props.tertiaryContainer;
	    }
	    get onTertiaryContainer() {
	      return this.props.onTertiaryContainer;
	    }
	    get error() {
	      return this.props.error;
	    }
	    get onError() {
	      return this.props.onError;
	    }
	    get errorContainer() {
	      return this.props.errorContainer;
	    }
	    get onErrorContainer() {
	      return this.props.onErrorContainer;
	    }
	    get background() {
	      return this.props.background;
	    }
	    get onBackground() {
	      return this.props.onBackground;
	    }
	    get surface() {
	      return this.props.surface;
	    }
	    get onSurface() {
	      return this.props.onSurface;
	    }
	    get surfaceVariant() {
	      return this.props.surfaceVariant;
	    }
	    get onSurfaceVariant() {
	      return this.props.onSurfaceVariant;
	    }
	    get outline() {
	      return this.props.outline;
	    }
	    get outlineVariant() {
	      return this.props.outlineVariant;
	    }
	    get shadow() {
	      return this.props.shadow;
	    }
	    get scrim() {
	      return this.props.scrim;
	    }
	    get inverseSurface() {
	      return this.props.inverseSurface;
	    }
	    get inverseOnSurface() {
	      return this.props.inverseOnSurface;
	    }
	    get inversePrimary() {
	      return this.props.inversePrimary;
	    }
	    static light(t) {
	      return X.lightFromCorePalette(S.of(t));
	    }
	    static dark(t) {
	      return X.darkFromCorePalette(S.of(t));
	    }
	    static lightContent(t) {
	      return X.lightFromCorePalette(S.contentOf(t));
	    }
	    static darkContent(t) {
	      return X.darkFromCorePalette(S.contentOf(t));
	    }
	    static lightFromCorePalette(t) {
	      return new X({ primary: t.a1.tone(40), onPrimary: t.a1.tone(100), primaryContainer: t.a1.tone(90), onPrimaryContainer: t.a1.tone(10), secondary: t.a2.tone(40), onSecondary: t.a2.tone(100), secondaryContainer: t.a2.tone(90), onSecondaryContainer: t.a2.tone(10), tertiary: t.a3.tone(40), onTertiary: t.a3.tone(100), tertiaryContainer: t.a3.tone(90), onTertiaryContainer: t.a3.tone(10), error: t.error.tone(40), onError: t.error.tone(100), errorContainer: t.error.tone(90), onErrorContainer: t.error.tone(10), background: t.n1.tone(99), onBackground: t.n1.tone(10), surface: t.n1.tone(99), onSurface: t.n1.tone(10), surfaceVariant: t.n2.tone(90), onSurfaceVariant: t.n2.tone(30), outline: t.n2.tone(50), outlineVariant: t.n2.tone(80), shadow: t.n1.tone(0), scrim: t.n1.tone(0), inverseSurface: t.n1.tone(20), inverseOnSurface: t.n1.tone(95), inversePrimary: t.a1.tone(80) });
	    }
	    static darkFromCorePalette(t) {
	      return new X({ primary: t.a1.tone(80), onPrimary: t.a1.tone(20), primaryContainer: t.a1.tone(30), onPrimaryContainer: t.a1.tone(90), secondary: t.a2.tone(80), onSecondary: t.a2.tone(20), secondaryContainer: t.a2.tone(30), onSecondaryContainer: t.a2.tone(90), tertiary: t.a3.tone(80), onTertiary: t.a3.tone(20), tertiaryContainer: t.a3.tone(30), onTertiaryContainer: t.a3.tone(90), error: t.error.tone(80), onError: t.error.tone(20), errorContainer: t.error.tone(30), onErrorContainer: t.error.tone(80), background: t.n1.tone(10), onBackground: t.n1.tone(90), surface: t.n1.tone(10), onSurface: t.n1.tone(90), surfaceVariant: t.n2.tone(30), onSurfaceVariant: t.n2.tone(80), outline: t.n2.tone(60), outlineVariant: t.n2.tone(30), shadow: t.n1.tone(0), scrim: t.n1.tone(0), inverseSurface: t.n1.tone(90), inverseOnSurface: t.n1.tone(20), inversePrimary: t.a1.tone(40) });
	    }
	    constructor(t) {
	      this.props = t;
	    }
	    toJSON() {
	      return { ...this.props };
	    }
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  const he = { desired: 4, fallbackColorARGB: 4282549748, filter: true };
	  function fe(e, t) {
	    return e.score > t.score ? -1 : e.score < t.score ? 1 : 0;
	  }
	  class H {
	    constructor() {
	    }
	    static score(t, r) {
	      const { desired: n, fallbackColorARGB: a, filter: o } = { ...he, ...r }, s = [], c = new Array(360).fill(0);
	      let u = 0;
	      for (const [f, M] of t.entries()) {
	        const g = E.fromInt(f);
	        s.push(g);
	        const b = Math.floor(g.hue);
	        c[b] += M, u += M;
	      }
	      const h = new Array(360).fill(0);
	      for (let f = 0; f < 360; f++) {
	        const M = c[f] / u;
	        for (let g = f - 14; g < f + 16; g++) {
	          const b = Ot(g);
	          h[b] += M;
	        }
	      }
	      const l = new Array();
	      for (const f of s) {
	        const M = Ot(Math.round(f.hue)), g = h[M];
	        if (o && (f.chroma < H.CUTOFF_CHROMA || g <= H.CUTOFF_EXCITED_PROPORTION)) continue;
	        const b = g * 100 * H.WEIGHT_PROPORTION, w = f.chroma < H.TARGET_CHROMA ? H.WEIGHT_CHROMA_BELOW : H.WEIGHT_CHROMA_ABOVE, y = (f.chroma - H.TARGET_CHROMA) * w, k = b + y;
	        l.push({ hct: f, score: k });
	      }
	      l.sort(fe);
	      const d = [];
	      for (let f = 90; f >= 15; f--) {
	        d.length = 0;
	        for (const { hct: M } of l) if (d.find((b) => Nt(M.hue, b.hue) < f) || d.push(M), d.length >= n) break;
	        if (d.length >= n) break;
	      }
	      const p2 = [];
	      d.length === 0 && p2.push(a);
	      for (const f of d) p2.push(f.toInt());
	      return p2;
	    }
	  }
	  H.TARGET_CHROMA = 48;
	  H.WEIGHT_PROPORTION = 0.7;
	  H.WEIGHT_CHROMA_ABOVE = 0.3;
	  H.WEIGHT_CHROMA_BELOW = 0.1;
	  H.CUTOFF_CHROMA = 5;
	  H.CUTOFF_EXCITED_PROPORTION = 0.01;
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  function F(e) {
	    const t = dt(e), r = mt(e), n = gt(e), a = [t.toString(16), r.toString(16), n.toString(16)];
	    for (const [o, s] of a.entries()) s.length === 1 && (a[o] = "0" + s);
	    return "#" + a.join("");
	  }
	  function de(e) {
	    e = e.replace("#", "");
	    const t = e.length === 3, r = e.length === 6, n = e.length === 8;
	    if (!t && !r && !n) throw new Error("unexpected hex " + e);
	    let a = 0, o = 0, s = 0;
	    return t ? (a = J(e.slice(0, 1).repeat(2)), o = J(e.slice(1, 2).repeat(2)), s = J(e.slice(2, 3).repeat(2))) : r ? (a = J(e.slice(0, 2)), o = J(e.slice(2, 4)), s = J(e.slice(4, 6))) : n && (a = J(e.slice(2, 4)), o = J(e.slice(4, 6)), s = J(e.slice(6, 8))), (255 << 24 | (a & 255) << 16 | (o & 255) << 8 | s & 255) >>> 0;
	  }
	  function J(e) {
	    return parseInt(e, 16);
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  async function me(e) {
	    const t = await new Promise((s, c) => {
	      const u = document.createElement("canvas"), h = u.getContext("2d");
	      if (!h) {
	        c(new Error("Could not get canvas context"));
	        return;
	      }
	      const l = () => {
	        u.width = e.width, u.height = e.height, h.drawImage(e, 0, 0);
	        let d = [0, 0, e.width, e.height];
	        const p2 = e.dataset.area;
	        p2 && /^\d+(\s*,\s*\d+){3}$/.test(p2) && (d = p2.split(/\s*,\s*/).map((w) => parseInt(w, 10)));
	        const [f, M, g, b] = d;
	        s(h.getImageData(f, M, g, b).data);
	      };
	      e.complete ? l() : e.onload = l;
	    }), r = [];
	    for (let s = 0; s < t.length; s += 4) {
	      const c = t[s], u = t[s + 1], h = t[s + 2];
	      if (t[s + 3] < 255) continue;
	      const d = ft(c, u, h);
	      r.push(d);
	    }
	    const n = ue.quantize(r, 128);
	    return H.score(n)[0];
	  }
	  /**
	  * @license
	  * Copyright 2021 Google LLC
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License");
	  * you may not use this file except in compliance with the License.
	  * You may obtain a copy of the License at
	  *
	  *      http://www.apache.org/licenses/LICENSE-2.0
	  *
	  * Unless required by applicable law or agreed to in writing, software
	  * distributed under the License is distributed on an "AS IS" BASIS,
	  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	  * See the License for the specific language governing permissions and
	  * limitations under the License.
	  */
	  function Gt(e, t = []) {
	    const r = S.of(e);
	    return { source: e, schemes: { light: X.light(e), dark: X.dark(e) }, palettes: { primary: r.a1, secondary: r.a2, tertiary: r.a3, neutral: r.n1, neutralVariant: r.n2, error: r.error }, customColors: t.map((n) => ge(e, n)) };
	  }
	  async function Lt(e, t = []) {
	    const r = await me(e);
	    return Gt(r, t);
	  }
	  function ge(e, t) {
	    let r = t.value;
	    const n = r, a = e;
	    t.blend && (r = xt.harmonize(n, a));
	    const s = S.of(r).a1;
	    return { color: t, value: r, light: { color: s.tone(40), onColor: s.tone(100), colorContainer: s.tone(90), onColorContainer: s.tone(10) }, dark: { color: s.tone(80), onColor: s.tone(20), colorContainer: s.tone(30), onColorContainer: s.tone(90) } };
	  }
	  function Pt(e) {
	    let t = JSON.parse(JSON.stringify(e.schemes));
	    for (let r in t) for (let n in t[r]) t[r][n] = F(t[r][n]);
	    return t.dark.surfaceDim = F(e.palettes.neutral.tone(6)), t.dark.surface = F(e.palettes.neutral.tone(6)), t.dark.surfaceBright = F(e.palettes.neutral.tone(24)), t.dark.surfaceContainerLowest = F(e.palettes.neutral.tone(4)), t.dark.surfaceContainerLow = F(e.palettes.neutral.tone(10)), t.dark.surfaceContainer = F(e.palettes.neutral.tone(12)), t.dark.surfaceContainerHigh = F(e.palettes.neutral.tone(17)), t.dark.surfaceContainerHighest = F(e.palettes.neutral.tone(22)), t.dark.onSurface = F(e.palettes.neutral.tone(90)), t.dark.onSurfaceVariant = F(e.palettes.neutralVariant.tone(80)), t.dark.outline = F(e.palettes.neutralVariant.tone(60)), t.dark.outlineVariant = F(e.palettes.neutralVariant.tone(30)), t.light.surfaceDim = F(e.palettes.neutral.tone(87)), t.light.surface = F(e.palettes.neutral.tone(98)), t.light.surfaceBright = F(e.palettes.neutral.tone(98)), t.light.surfaceContainerLowest = F(e.palettes.neutral.tone(100)), t.light.surfaceContainerLow = F(e.palettes.neutral.tone(96)), t.light.surfaceContainer = F(e.palettes.neutral.tone(94)), t.light.surfaceContainerHigh = F(e.palettes.neutral.tone(92)), t.light.surfaceContainerHighest = F(e.palettes.neutral.tone(90)), t.light.onSurface = F(e.palettes.neutral.tone(10)), t.light.onSurfaceVariant = F(e.palettes.neutralVariant.tone(30)), t.light.outline = F(e.palettes.neutralVariant.tone(50)), t.light.outlineVariant = F(e.palettes.neutralVariant.tone(80)), t;
	  }
	  async function pe(e) {
	    const t = e, r = { light: {}, dark: {} };
	    try {
	      if (typeof t == "string" && /^\#[0-9a-f]+$/i.test(t)) {
	        let s = Gt(de(t));
	        return Pt(s);
	      }
	      if (t.src) {
	        let s = await Lt(t);
	        return Pt(s);
	      }
	      let n = new Blob();
	      if (typeof t == "string" && (n = await fetch(t).then((s) => s.blob())), t.size && (n = t), t.files && t.files[0] && (n = t.files[0]), t.target && t.target.files && t.target.files[0] && (n = t.target.files[0]), !n.size) return r;
	      let a = new Image(64);
	      a.src = URL.createObjectURL(n);
	      let o = await Lt(a);
	      return Pt(o);
	    } catch {
	      return r;
	    }
	  }
	  globalThis.materialDynamicColors = pe;
	  /**
	  * @vue/shared v3.4.35
	  * (c) 2018-present Yuxi (Evan) You and Vue contributors
	  * @license MIT
	  **/
	  /*! #__NO_SIDE_EFFECTS__ */
	  // @__NO_SIDE_EFFECTS__
	  function makeMap(str, expectsLowerCase) {
	    const set2 = new Set(str.split(","));
	    return (val) => set2.has(val);
	  }
	  const EMPTY_OBJ = {};
	  const EMPTY_ARR = [];
	  const NOOP = () => {
	  };
	  const NO = () => false;
	  const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
	  (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
	  const isModelListener = (key) => key.startsWith("onUpdate:");
	  const extend = Object.assign;
	  const remove = (arr, el) => {
	    const i2 = arr.indexOf(el);
	    if (i2 > -1) {
	      arr.splice(i2, 1);
	    }
	  };
	  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	  const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
	  const isArray = Array.isArray;
	  const isMap = (val) => toTypeString(val) === "[object Map]";
	  const isSet = (val) => toTypeString(val) === "[object Set]";
	  const isDate = (val) => toTypeString(val) === "[object Date]";
	  const isFunction = (val) => typeof val === "function";
	  const isString = (val) => typeof val === "string";
	  const isSymbol = (val) => typeof val === "symbol";
	  const isObject = (val) => val !== null && typeof val === "object";
	  const isPromise = (val) => {
	    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
	  };
	  const objectToString = Object.prototype.toString;
	  const toTypeString = (value) => objectToString.call(value);
	  const toRawType = (value) => {
	    return toTypeString(value).slice(8, -1);
	  };
	  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
	  const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
	  const isReservedProp = /* @__PURE__ */ makeMap(
	    // the leading comma is intentional so empty string "" is also included
	    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
	  );
	  const cacheStringFunction = (fn) => {
	    const cache = /* @__PURE__ */ Object.create(null);
	    return (str) => {
	      const hit = cache[str];
	      return hit || (cache[str] = fn(str));
	    };
	  };
	  const camelizeRE = /-(\w)/g;
	  const camelize = cacheStringFunction((str) => {
	    return str.replace(camelizeRE, (_2, c) => c ? c.toUpperCase() : "");
	  });
	  const hyphenateRE = /\B([A-Z])/g;
	  const hyphenate = cacheStringFunction(
	    (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
	  );
	  const capitalize = cacheStringFunction((str) => {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  });
	  const toHandlerKey = cacheStringFunction((str) => {
	    const s = str ? `on${capitalize(str)}` : ``;
	    return s;
	  });
	  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
	  const invokeArrayFns = (fns, ...arg) => {
	    for (let i2 = 0; i2 < fns.length; i2++) {
	      fns[i2](...arg);
	    }
	  };
	  const def = (obj, key, value, writable = false) => {
	    Object.defineProperty(obj, key, {
	      configurable: true,
	      enumerable: false,
	      writable,
	      value
	    });
	  };
	  const looseToNumber = (val) => {
	    const n = parseFloat(val);
	    return isNaN(n) ? val : n;
	  };
	  let _globalThis;
	  const getGlobalThis = () => {
	    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
	  };
	  function normalizeStyle(value) {
	    if (isArray(value)) {
	      const res = {};
	      for (let i2 = 0; i2 < value.length; i2++) {
	        const item = value[i2];
	        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
	        if (normalized) {
	          for (const key in normalized) {
	            res[key] = normalized[key];
	          }
	        }
	      }
	      return res;
	    } else if (isString(value) || isObject(value)) {
	      return value;
	    }
	  }
	  const listDelimiterRE = /;(?![^(]*\))/g;
	  const propertyDelimiterRE = /:([^]+)/;
	  const styleCommentRE = /\/\*[^]*?\*\//g;
	  function parseStringStyle(cssText) {
	    const ret = {};
	    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
	      if (item) {
	        const tmp = item.split(propertyDelimiterRE);
	        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
	      }
	    });
	    return ret;
	  }
	  function normalizeClass(value) {
	    let res = "";
	    if (isString(value)) {
	      res = value;
	    } else if (isArray(value)) {
	      for (let i2 = 0; i2 < value.length; i2++) {
	        const normalized = normalizeClass(value[i2]);
	        if (normalized) {
	          res += normalized + " ";
	        }
	      }
	    } else if (isObject(value)) {
	      for (const name in value) {
	        if (value[name]) {
	          res += name + " ";
	        }
	      }
	    }
	    return res.trim();
	  }
	  const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
	  const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
	  function includeBooleanAttr(value) {
	    return !!value || value === "";
	  }
	  function looseCompareArrays(a, b) {
	    if (a.length !== b.length) return false;
	    let equal = true;
	    for (let i2 = 0; equal && i2 < a.length; i2++) {
	      equal = looseEqual(a[i2], b[i2]);
	    }
	    return equal;
	  }
	  function looseEqual(a, b) {
	    if (a === b) return true;
	    let aValidType = isDate(a);
	    let bValidType = isDate(b);
	    if (aValidType || bValidType) {
	      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
	    }
	    aValidType = isSymbol(a);
	    bValidType = isSymbol(b);
	    if (aValidType || bValidType) {
	      return a === b;
	    }
	    aValidType = isArray(a);
	    bValidType = isArray(b);
	    if (aValidType || bValidType) {
	      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
	    }
	    aValidType = isObject(a);
	    bValidType = isObject(b);
	    if (aValidType || bValidType) {
	      if (!aValidType || !bValidType) {
	        return false;
	      }
	      const aKeysCount = Object.keys(a).length;
	      const bKeysCount = Object.keys(b).length;
	      if (aKeysCount !== bKeysCount) {
	        return false;
	      }
	      for (const key in a) {
	        const aHasKey = a.hasOwnProperty(key);
	        const bHasKey = b.hasOwnProperty(key);
	        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
	          return false;
	        }
	      }
	    }
	    return String(a) === String(b);
	  }
	  function looseIndexOf(arr, val) {
	    return arr.findIndex((item) => looseEqual(item, val));
	  }
	  const isRef$1 = (val) => {
	    return !!(val && val.__v_isRef === true);
	  };
	  const toDisplayString = (val) => {
	    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
	  };
	  const replacer = (_key, val) => {
	    if (isRef$1(val)) {
	      return replacer(_key, val.value);
	    } else if (isMap(val)) {
	      return {
	        [`Map(${val.size})`]: [...val.entries()].reduce(
	          (entries, [key, val2], i2) => {
	            entries[stringifySymbol(key, i2) + " =>"] = val2;
	            return entries;
	          },
	          {}
	        )
	      };
	    } else if (isSet(val)) {
	      return {
	        [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
	      };
	    } else if (isSymbol(val)) {
	      return stringifySymbol(val);
	    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
	      return String(val);
	    }
	    return val;
	  };
	  const stringifySymbol = (v2, i2 = "") => {
	    var _a;
	    return (
	      // Symbol.description in es2019+ so we need to cast here to pass
	      // the lib: es2016 check
	      isSymbol(v2) ? `Symbol(${(_a = v2.description) != null ? _a : i2})` : v2
	    );
	  };
	  /**
	  * @vue/reactivity v3.4.35
	  * (c) 2018-present Yuxi (Evan) You and Vue contributors
	  * @license MIT
	  **/
	  let activeEffectScope;
	  class EffectScope {
	    constructor(detached = false) {
	      this.detached = detached;
	      this._active = true;
	      this.effects = [];
	      this.cleanups = [];
	      this.parent = activeEffectScope;
	      if (!detached && activeEffectScope) {
	        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
	          this
	        ) - 1;
	      }
	    }
	    get active() {
	      return this._active;
	    }
	    run(fn) {
	      if (this._active) {
	        const currentEffectScope = activeEffectScope;
	        try {
	          activeEffectScope = this;
	          return fn();
	        } finally {
	          activeEffectScope = currentEffectScope;
	        }
	      }
	    }
	    /**
	     * This should only be called on non-detached scopes
	     * @internal
	     */
	    on() {
	      activeEffectScope = this;
	    }
	    /**
	     * This should only be called on non-detached scopes
	     * @internal
	     */
	    off() {
	      activeEffectScope = this.parent;
	    }
	    stop(fromParent) {
	      if (this._active) {
	        let i2, l;
	        for (i2 = 0, l = this.effects.length; i2 < l; i2++) {
	          this.effects[i2].stop();
	        }
	        for (i2 = 0, l = this.cleanups.length; i2 < l; i2++) {
	          this.cleanups[i2]();
	        }
	        if (this.scopes) {
	          for (i2 = 0, l = this.scopes.length; i2 < l; i2++) {
	            this.scopes[i2].stop(true);
	          }
	        }
	        if (!this.detached && this.parent && !fromParent) {
	          const last = this.parent.scopes.pop();
	          if (last && last !== this) {
	            this.parent.scopes[this.index] = last;
	            last.index = this.index;
	          }
	        }
	        this.parent = void 0;
	        this._active = false;
	      }
	    }
	  }
	  function recordEffectScope(effect2, scope = activeEffectScope) {
	    if (scope && scope.active) {
	      scope.effects.push(effect2);
	    }
	  }
	  function getCurrentScope() {
	    return activeEffectScope;
	  }
	  let activeEffect;
	  class ReactiveEffect {
	    constructor(fn, trigger2, scheduler, scope) {
	      this.fn = fn;
	      this.trigger = trigger2;
	      this.scheduler = scheduler;
	      this.active = true;
	      this.deps = [];
	      this._dirtyLevel = 4;
	      this._trackId = 0;
	      this._runnings = 0;
	      this._shouldSchedule = false;
	      this._depsLength = 0;
	      recordEffectScope(this, scope);
	    }
	    get dirty() {
	      if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
	        this._dirtyLevel = 1;
	        pauseTracking();
	        for (let i2 = 0; i2 < this._depsLength; i2++) {
	          const dep = this.deps[i2];
	          if (dep.computed) {
	            triggerComputed(dep.computed);
	            if (this._dirtyLevel >= 4) {
	              break;
	            }
	          }
	        }
	        if (this._dirtyLevel === 1) {
	          this._dirtyLevel = 0;
	        }
	        resetTracking();
	      }
	      return this._dirtyLevel >= 4;
	    }
	    set dirty(v2) {
	      this._dirtyLevel = v2 ? 4 : 0;
	    }
	    run() {
	      this._dirtyLevel = 0;
	      if (!this.active) {
	        return this.fn();
	      }
	      let lastShouldTrack = shouldTrack;
	      let lastEffect = activeEffect;
	      try {
	        shouldTrack = true;
	        activeEffect = this;
	        this._runnings++;
	        preCleanupEffect(this);
	        return this.fn();
	      } finally {
	        postCleanupEffect(this);
	        this._runnings--;
	        activeEffect = lastEffect;
	        shouldTrack = lastShouldTrack;
	      }
	    }
	    stop() {
	      if (this.active) {
	        preCleanupEffect(this);
	        postCleanupEffect(this);
	        this.onStop && this.onStop();
	        this.active = false;
	      }
	    }
	  }
	  function triggerComputed(computed2) {
	    return computed2.value;
	  }
	  function preCleanupEffect(effect2) {
	    effect2._trackId++;
	    effect2._depsLength = 0;
	  }
	  function postCleanupEffect(effect2) {
	    if (effect2.deps.length > effect2._depsLength) {
	      for (let i2 = effect2._depsLength; i2 < effect2.deps.length; i2++) {
	        cleanupDepEffect(effect2.deps[i2], effect2);
	      }
	      effect2.deps.length = effect2._depsLength;
	    }
	  }
	  function cleanupDepEffect(dep, effect2) {
	    const trackId = dep.get(effect2);
	    if (trackId !== void 0 && effect2._trackId !== trackId) {
	      dep.delete(effect2);
	      if (dep.size === 0) {
	        dep.cleanup();
	      }
	    }
	  }
	  let shouldTrack = true;
	  let pauseScheduleStack = 0;
	  const trackStack = [];
	  function pauseTracking() {
	    trackStack.push(shouldTrack);
	    shouldTrack = false;
	  }
	  function resetTracking() {
	    const last = trackStack.pop();
	    shouldTrack = last === void 0 ? true : last;
	  }
	  function pauseScheduling() {
	    pauseScheduleStack++;
	  }
	  function resetScheduling() {
	    pauseScheduleStack--;
	    while (!pauseScheduleStack && queueEffectSchedulers.length) {
	      queueEffectSchedulers.shift()();
	    }
	  }
	  function trackEffect(effect2, dep, debuggerEventExtraInfo) {
	    if (dep.get(effect2) !== effect2._trackId) {
	      dep.set(effect2, effect2._trackId);
	      const oldDep = effect2.deps[effect2._depsLength];
	      if (oldDep !== dep) {
	        if (oldDep) {
	          cleanupDepEffect(oldDep, effect2);
	        }
	        effect2.deps[effect2._depsLength++] = dep;
	      } else {
	        effect2._depsLength++;
	      }
	    }
	  }
	  const queueEffectSchedulers = [];
	  function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
	    pauseScheduling();
	    for (const effect2 of dep.keys()) {
	      let tracking;
	      if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
	        effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
	        effect2._dirtyLevel = dirtyLevel;
	      }
	      if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
	        effect2.trigger();
	        if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
	          effect2._shouldSchedule = false;
	          if (effect2.scheduler) {
	            queueEffectSchedulers.push(effect2.scheduler);
	          }
	        }
	      }
	    }
	    resetScheduling();
	  }
	  const createDep = (cleanup, computed2) => {
	    const dep = /* @__PURE__ */ new Map();
	    dep.cleanup = cleanup;
	    dep.computed = computed2;
	    return dep;
	  };
	  const targetMap = /* @__PURE__ */ new WeakMap();
	  const ITERATE_KEY = Symbol("");
	  const MAP_KEY_ITERATE_KEY = Symbol("");
	  function track(target, type, key) {
	    if (shouldTrack && activeEffect) {
	      let depsMap = targetMap.get(target);
	      if (!depsMap) {
	        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
	      }
	      let dep = depsMap.get(key);
	      if (!dep) {
	        depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
	      }
	      trackEffect(
	        activeEffect,
	        dep
	      );
	    }
	  }
	  function trigger(target, type, key, newValue, oldValue, oldTarget) {
	    const depsMap = targetMap.get(target);
	    if (!depsMap) {
	      return;
	    }
	    let deps = [];
	    if (type === "clear") {
	      deps = [...depsMap.values()];
	    } else if (key === "length" && isArray(target)) {
	      const newLength = Number(newValue);
	      depsMap.forEach((dep, key2) => {
	        if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
	          deps.push(dep);
	        }
	      });
	    } else {
	      if (key !== void 0) {
	        deps.push(depsMap.get(key));
	      }
	      switch (type) {
	        case "add":
	          if (!isArray(target)) {
	            deps.push(depsMap.get(ITERATE_KEY));
	            if (isMap(target)) {
	              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
	            }
	          } else if (isIntegerKey(key)) {
	            deps.push(depsMap.get("length"));
	          }
	          break;
	        case "delete":
	          if (!isArray(target)) {
	            deps.push(depsMap.get(ITERATE_KEY));
	            if (isMap(target)) {
	              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
	            }
	          }
	          break;
	        case "set":
	          if (isMap(target)) {
	            deps.push(depsMap.get(ITERATE_KEY));
	          }
	          break;
	      }
	    }
	    pauseScheduling();
	    for (const dep of deps) {
	      if (dep) {
	        triggerEffects(
	          dep,
	          4
	        );
	      }
	    }
	    resetScheduling();
	  }
	  const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
	  const builtInSymbols = new Set(
	    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
	  );
	  const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
	  function createArrayInstrumentations() {
	    const instrumentations = {};
	    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
	      instrumentations[key] = function(...args) {
	        const arr = toRaw(this);
	        for (let i2 = 0, l = this.length; i2 < l; i2++) {
	          track(arr, "get", i2 + "");
	        }
	        const res = arr[key](...args);
	        if (res === -1 || res === false) {
	          return arr[key](...args.map(toRaw));
	        } else {
	          return res;
	        }
	      };
	    });
	    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
	      instrumentations[key] = function(...args) {
	        pauseTracking();
	        pauseScheduling();
	        const res = toRaw(this)[key].apply(this, args);
	        resetScheduling();
	        resetTracking();
	        return res;
	      };
	    });
	    return instrumentations;
	  }
	  function hasOwnProperty(key) {
	    if (!isSymbol(key)) key = String(key);
	    const obj = toRaw(this);
	    track(obj, "has", key);
	    return obj.hasOwnProperty(key);
	  }
	  class BaseReactiveHandler {
	    constructor(_isReadonly = false, _isShallow = false) {
	      this._isReadonly = _isReadonly;
	      this._isShallow = _isShallow;
	    }
	    get(target, key, receiver) {
	      const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
	      if (key === "__v_isReactive") {
	        return !isReadonly2;
	      } else if (key === "__v_isReadonly") {
	        return isReadonly2;
	      } else if (key === "__v_isShallow") {
	        return isShallow2;
	      } else if (key === "__v_raw") {
	        if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
	        // this means the reciever is a user proxy of the reactive proxy
	        Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
	          return target;
	        }
	        return;
	      }
	      const targetIsArray = isArray(target);
	      if (!isReadonly2) {
	        if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
	          return Reflect.get(arrayInstrumentations, key, receiver);
	        }
	        if (key === "hasOwnProperty") {
	          return hasOwnProperty;
	        }
	      }
	      const res = Reflect.get(target, key, receiver);
	      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
	        return res;
	      }
	      if (!isReadonly2) {
	        track(target, "get", key);
	      }
	      if (isShallow2) {
	        return res;
	      }
	      if (isRef(res)) {
	        return targetIsArray && isIntegerKey(key) ? res : res.value;
	      }
	      if (isObject(res)) {
	        return isReadonly2 ? readonly(res) : reactive(res);
	      }
	      return res;
	    }
	  }
	  class MutableReactiveHandler extends BaseReactiveHandler {
	    constructor(isShallow2 = false) {
	      super(false, isShallow2);
	    }
	    set(target, key, value, receiver) {
	      let oldValue = target[key];
	      if (!this._isShallow) {
	        const isOldValueReadonly = isReadonly(oldValue);
	        if (!isShallow(value) && !isReadonly(value)) {
	          oldValue = toRaw(oldValue);
	          value = toRaw(value);
	        }
	        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
	          if (isOldValueReadonly) {
	            return false;
	          } else {
	            oldValue.value = value;
	            return true;
	          }
	        }
	      }
	      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
	      const result = Reflect.set(target, key, value, receiver);
	      if (target === toRaw(receiver)) {
	        if (!hadKey) {
	          trigger(target, "add", key, value);
	        } else if (hasChanged(value, oldValue)) {
	          trigger(target, "set", key, value);
	        }
	      }
	      return result;
	    }
	    deleteProperty(target, key) {
	      const hadKey = hasOwn(target, key);
	      target[key];
	      const result = Reflect.deleteProperty(target, key);
	      if (result && hadKey) {
	        trigger(target, "delete", key, void 0);
	      }
	      return result;
	    }
	    has(target, key) {
	      const result = Reflect.has(target, key);
	      if (!isSymbol(key) || !builtInSymbols.has(key)) {
	        track(target, "has", key);
	      }
	      return result;
	    }
	    ownKeys(target) {
	      track(
	        target,
	        "iterate",
	        isArray(target) ? "length" : ITERATE_KEY
	      );
	      return Reflect.ownKeys(target);
	    }
	  }
	  class ReadonlyReactiveHandler extends BaseReactiveHandler {
	    constructor(isShallow2 = false) {
	      super(true, isShallow2);
	    }
	    set(target, key) {
	      return true;
	    }
	    deleteProperty(target, key) {
	      return true;
	    }
	  }
	  const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
	  const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
	  const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
	    true
	  );
	  const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
	  const toShallow = (value) => value;
	  const getProto = (v2) => Reflect.getPrototypeOf(v2);
	  function get(target, key, isReadonly2 = false, isShallow2 = false) {
	    target = target["__v_raw"];
	    const rawTarget = toRaw(target);
	    const rawKey = toRaw(key);
	    if (!isReadonly2) {
	      if (hasChanged(key, rawKey)) {
	        track(rawTarget, "get", key);
	      }
	      track(rawTarget, "get", rawKey);
	    }
	    const { has: has2 } = getProto(rawTarget);
	    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
	    if (has2.call(rawTarget, key)) {
	      return wrap(target.get(key));
	    } else if (has2.call(rawTarget, rawKey)) {
	      return wrap(target.get(rawKey));
	    } else if (target !== rawTarget) {
	      target.get(key);
	    }
	  }
	  function has(key, isReadonly2 = false) {
	    const target = this["__v_raw"];
	    const rawTarget = toRaw(target);
	    const rawKey = toRaw(key);
	    if (!isReadonly2) {
	      if (hasChanged(key, rawKey)) {
	        track(rawTarget, "has", key);
	      }
	      track(rawTarget, "has", rawKey);
	    }
	    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
	  }
	  function size(target, isReadonly2 = false) {
	    target = target["__v_raw"];
	    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
	    return Reflect.get(target, "size", target);
	  }
	  function add(value, _isShallow = false) {
	    if (!_isShallow && !isShallow(value) && !isReadonly(value)) {
	      value = toRaw(value);
	    }
	    const target = toRaw(this);
	    const proto = getProto(target);
	    const hadKey = proto.has.call(target, value);
	    if (!hadKey) {
	      target.add(value);
	      trigger(target, "add", value, value);
	    }
	    return this;
	  }
	  function set(key, value, _isShallow = false) {
	    if (!_isShallow && !isShallow(value) && !isReadonly(value)) {
	      value = toRaw(value);
	    }
	    const target = toRaw(this);
	    const { has: has2, get: get2 } = getProto(target);
	    let hadKey = has2.call(target, key);
	    if (!hadKey) {
	      key = toRaw(key);
	      hadKey = has2.call(target, key);
	    }
	    const oldValue = get2.call(target, key);
	    target.set(key, value);
	    if (!hadKey) {
	      trigger(target, "add", key, value);
	    } else if (hasChanged(value, oldValue)) {
	      trigger(target, "set", key, value);
	    }
	    return this;
	  }
	  function deleteEntry(key) {
	    const target = toRaw(this);
	    const { has: has2, get: get2 } = getProto(target);
	    let hadKey = has2.call(target, key);
	    if (!hadKey) {
	      key = toRaw(key);
	      hadKey = has2.call(target, key);
	    }
	    get2 ? get2.call(target, key) : void 0;
	    const result = target.delete(key);
	    if (hadKey) {
	      trigger(target, "delete", key, void 0);
	    }
	    return result;
	  }
	  function clear() {
	    const target = toRaw(this);
	    const hadItems = target.size !== 0;
	    const result = target.clear();
	    if (hadItems) {
	      trigger(target, "clear", void 0, void 0);
	    }
	    return result;
	  }
	  function createForEach(isReadonly2, isShallow2) {
	    return function forEach(callback, thisArg) {
	      const observed = this;
	      const target = observed["__v_raw"];
	      const rawTarget = toRaw(target);
	      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
	      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
	      return target.forEach((value, key) => {
	        return callback.call(thisArg, wrap(value), wrap(key), observed);
	      });
	    };
	  }
	  function createIterableMethod(method, isReadonly2, isShallow2) {
	    return function(...args) {
	      const target = this["__v_raw"];
	      const rawTarget = toRaw(target);
	      const targetIsMap = isMap(rawTarget);
	      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
	      const isKeyOnly = method === "keys" && targetIsMap;
	      const innerIterator = target[method](...args);
	      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
	      !isReadonly2 && track(
	        rawTarget,
	        "iterate",
	        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
	      );
	      return {
	        // iterator protocol
	        next() {
	          const { value, done } = innerIterator.next();
	          return done ? { value, done } : {
	            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
	            done
	          };
	        },
	        // iterable protocol
	        [Symbol.iterator]() {
	          return this;
	        }
	      };
	    };
	  }
	  function createReadonlyMethod(type) {
	    return function(...args) {
	      return type === "delete" ? false : type === "clear" ? void 0 : this;
	    };
	  }
	  function createInstrumentations() {
	    const mutableInstrumentations2 = {
	      get(key) {
	        return get(this, key);
	      },
	      get size() {
	        return size(this);
	      },
	      has,
	      add,
	      set,
	      delete: deleteEntry,
	      clear,
	      forEach: createForEach(false, false)
	    };
	    const shallowInstrumentations2 = {
	      get(key) {
	        return get(this, key, false, true);
	      },
	      get size() {
	        return size(this);
	      },
	      has,
	      add(value) {
	        return add.call(this, value, true);
	      },
	      set(key, value) {
	        return set.call(this, key, value, true);
	      },
	      delete: deleteEntry,
	      clear,
	      forEach: createForEach(false, true)
	    };
	    const readonlyInstrumentations2 = {
	      get(key) {
	        return get(this, key, true);
	      },
	      get size() {
	        return size(this, true);
	      },
	      has(key) {
	        return has.call(this, key, true);
	      },
	      add: createReadonlyMethod("add"),
	      set: createReadonlyMethod("set"),
	      delete: createReadonlyMethod("delete"),
	      clear: createReadonlyMethod("clear"),
	      forEach: createForEach(true, false)
	    };
	    const shallowReadonlyInstrumentations2 = {
	      get(key) {
	        return get(this, key, true, true);
	      },
	      get size() {
	        return size(this, true);
	      },
	      has(key) {
	        return has.call(this, key, true);
	      },
	      add: createReadonlyMethod("add"),
	      set: createReadonlyMethod("set"),
	      delete: createReadonlyMethod("delete"),
	      clear: createReadonlyMethod("clear"),
	      forEach: createForEach(true, true)
	    };
	    const iteratorMethods = [
	      "keys",
	      "values",
	      "entries",
	      Symbol.iterator
	    ];
	    iteratorMethods.forEach((method) => {
	      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
	      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
	      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
	      shallowReadonlyInstrumentations2[method] = createIterableMethod(
	        method,
	        true,
	        true
	      );
	    });
	    return [
	      mutableInstrumentations2,
	      readonlyInstrumentations2,
	      shallowInstrumentations2,
	      shallowReadonlyInstrumentations2
	    ];
	  }
	  const [
	    mutableInstrumentations,
	    readonlyInstrumentations,
	    shallowInstrumentations,
	    shallowReadonlyInstrumentations
	  ] = /* @__PURE__ */ createInstrumentations();
	  function createInstrumentationGetter(isReadonly2, shallow) {
	    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
	    return (target, key, receiver) => {
	      if (key === "__v_isReactive") {
	        return !isReadonly2;
	      } else if (key === "__v_isReadonly") {
	        return isReadonly2;
	      } else if (key === "__v_raw") {
	        return target;
	      }
	      return Reflect.get(
	        hasOwn(instrumentations, key) && key in target ? instrumentations : target,
	        key,
	        receiver
	      );
	    };
	  }
	  const mutableCollectionHandlers = {
	    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
	  };
	  const shallowCollectionHandlers = {
	    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
	  };
	  const readonlyCollectionHandlers = {
	    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
	  };
	  const shallowReadonlyCollectionHandlers = {
	    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
	  };
	  const reactiveMap = /* @__PURE__ */ new WeakMap();
	  const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
	  const readonlyMap = /* @__PURE__ */ new WeakMap();
	  const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
	  function targetTypeMap(rawType) {
	    switch (rawType) {
	      case "Object":
	      case "Array":
	        return 1;
	      case "Map":
	      case "Set":
	      case "WeakMap":
	      case "WeakSet":
	        return 2;
	      default:
	        return 0;
	    }
	  }
	  function getTargetType(value) {
	    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
	  }
	  function reactive(target) {
	    if (isReadonly(target)) {
	      return target;
	    }
	    return createReactiveObject(
	      target,
	      false,
	      mutableHandlers,
	      mutableCollectionHandlers,
	      reactiveMap
	    );
	  }
	  function shallowReactive(target) {
	    return createReactiveObject(
	      target,
	      false,
	      shallowReactiveHandlers,
	      shallowCollectionHandlers,
	      shallowReactiveMap
	    );
	  }
	  function readonly(target) {
	    return createReactiveObject(
	      target,
	      true,
	      readonlyHandlers,
	      readonlyCollectionHandlers,
	      readonlyMap
	    );
	  }
	  function shallowReadonly(target) {
	    return createReactiveObject(
	      target,
	      true,
	      shallowReadonlyHandlers,
	      shallowReadonlyCollectionHandlers,
	      shallowReadonlyMap
	    );
	  }
	  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
	    if (!isObject(target)) {
	      return target;
	    }
	    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
	      return target;
	    }
	    const existingProxy = proxyMap.get(target);
	    if (existingProxy) {
	      return existingProxy;
	    }
	    const targetType = getTargetType(target);
	    if (targetType === 0) {
	      return target;
	    }
	    const proxy = new Proxy(
	      target,
	      targetType === 2 ? collectionHandlers : baseHandlers
	    );
	    proxyMap.set(target, proxy);
	    return proxy;
	  }
	  function isReactive(value) {
	    if (isReadonly(value)) {
	      return isReactive(value["__v_raw"]);
	    }
	    return !!(value && value["__v_isReactive"]);
	  }
	  function isReadonly(value) {
	    return !!(value && value["__v_isReadonly"]);
	  }
	  function isShallow(value) {
	    return !!(value && value["__v_isShallow"]);
	  }
	  function isProxy(value) {
	    return value ? !!value["__v_raw"] : false;
	  }
	  function toRaw(observed) {
	    const raw = observed && observed["__v_raw"];
	    return raw ? toRaw(raw) : observed;
	  }
	  function markRaw(value) {
	    if (Object.isExtensible(value)) {
	      def(value, "__v_skip", true);
	    }
	    return value;
	  }
	  const toReactive = (value) => isObject(value) ? reactive(value) : value;
	  const toReadonly = (value) => isObject(value) ? readonly(value) : value;
	  class ComputedRefImpl {
	    constructor(getter, _setter, isReadonly2, isSSR) {
	      this.getter = getter;
	      this._setter = _setter;
	      this.dep = void 0;
	      this.__v_isRef = true;
	      this["__v_isReadonly"] = false;
	      this.effect = new ReactiveEffect(
	        () => getter(this._value),
	        () => triggerRefValue(
	          this,
	          this.effect._dirtyLevel === 2 ? 2 : 3
	        )
	      );
	      this.effect.computed = this;
	      this.effect.active = this._cacheable = !isSSR;
	      this["__v_isReadonly"] = isReadonly2;
	    }
	    get value() {
	      const self2 = toRaw(this);
	      if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
	        triggerRefValue(self2, 4);
	      }
	      trackRefValue(self2);
	      if (self2.effect._dirtyLevel >= 2) {
	        triggerRefValue(self2, 2);
	      }
	      return self2._value;
	    }
	    set value(newValue) {
	      this._setter(newValue);
	    }
	    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
	    get _dirty() {
	      return this.effect.dirty;
	    }
	    set _dirty(v2) {
	      this.effect.dirty = v2;
	    }
	    // #endregion
	  }
	  function computed$1(getterOrOptions, debugOptions, isSSR = false) {
	    let getter;
	    let setter;
	    const onlyGetter = isFunction(getterOrOptions);
	    if (onlyGetter) {
	      getter = getterOrOptions;
	      setter = NOOP;
	    } else {
	      getter = getterOrOptions.get;
	      setter = getterOrOptions.set;
	    }
	    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
	    return cRef;
	  }
	  function trackRefValue(ref2) {
	    var _a;
	    if (shouldTrack && activeEffect) {
	      ref2 = toRaw(ref2);
	      trackEffect(
	        activeEffect,
	        (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
	          () => ref2.dep = void 0,
	          ref2 instanceof ComputedRefImpl ? ref2 : void 0
	        )
	      );
	    }
	  }
	  function triggerRefValue(ref2, dirtyLevel = 4, newVal, oldVal) {
	    ref2 = toRaw(ref2);
	    const dep = ref2.dep;
	    if (dep) {
	      triggerEffects(
	        dep,
	        dirtyLevel
	      );
	    }
	  }
	  function isRef(r) {
	    return !!(r && r.__v_isRef === true);
	  }
	  function ref(value) {
	    return createRef(value, false);
	  }
	  function createRef(rawValue, shallow) {
	    if (isRef(rawValue)) {
	      return rawValue;
	    }
	    return new RefImpl(rawValue, shallow);
	  }
	  class RefImpl {
	    constructor(value, __v_isShallow) {
	      this.__v_isShallow = __v_isShallow;
	      this.dep = void 0;
	      this.__v_isRef = true;
	      this._rawValue = __v_isShallow ? value : toRaw(value);
	      this._value = __v_isShallow ? value : toReactive(value);
	    }
	    get value() {
	      trackRefValue(this);
	      return this._value;
	    }
	    set value(newVal) {
	      const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
	      newVal = useDirectValue ? newVal : toRaw(newVal);
	      if (hasChanged(newVal, this._rawValue)) {
	        this._rawValue;
	        this._rawValue = newVal;
	        this._value = useDirectValue ? newVal : toReactive(newVal);
	        triggerRefValue(this, 4);
	      }
	    }
	  }
	  function unref(ref2) {
	    return isRef(ref2) ? ref2.value : ref2;
	  }
	  const shallowUnwrapHandlers = {
	    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
	    set: (target, key, value, receiver) => {
	      const oldValue = target[key];
	      if (isRef(oldValue) && !isRef(value)) {
	        oldValue.value = value;
	        return true;
	      } else {
	        return Reflect.set(target, key, value, receiver);
	      }
	    }
	  };
	  function proxyRefs(objectWithRefs) {
	    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
	  }
	  /**
	  * @vue/runtime-core v3.4.35
	  * (c) 2018-present Yuxi (Evan) You and Vue contributors
	  * @license MIT
	  **/
	  const stack = [];
	  let isWarning = false;
	  function warn$1(msg, ...args) {
	    if (isWarning) return;
	    isWarning = true;
	    pauseTracking();
	    const instance = stack.length ? stack[stack.length - 1].component : null;
	    const appWarnHandler = instance && instance.appContext.config.warnHandler;
	    const trace = getComponentTrace();
	    if (appWarnHandler) {
	      callWithErrorHandling(
	        appWarnHandler,
	        instance,
	        11,
	        [
	          // eslint-disable-next-line no-restricted-syntax
	          msg + args.map((a) => {
	            var _a, _b;
	            return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
	          }).join(""),
	          instance && instance.proxy,
	          trace.map(
	            ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
	          ).join("\n"),
	          trace
	        ]
	      );
	    } else {
	      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
	      if (trace.length && // avoid spamming console during tests
	      true) {
	        warnArgs.push(`
`, ...formatTrace(trace));
	      }
	      console.warn(...warnArgs);
	    }
	    resetTracking();
	    isWarning = false;
	  }
	  function getComponentTrace() {
	    let currentVNode = stack[stack.length - 1];
	    if (!currentVNode) {
	      return [];
	    }
	    const normalizedStack = [];
	    while (currentVNode) {
	      const last = normalizedStack[0];
	      if (last && last.vnode === currentVNode) {
	        last.recurseCount++;
	      } else {
	        normalizedStack.push({
	          vnode: currentVNode,
	          recurseCount: 0
	        });
	      }
	      const parentInstance = currentVNode.component && currentVNode.component.parent;
	      currentVNode = parentInstance && parentInstance.vnode;
	    }
	    return normalizedStack;
	  }
	  function formatTrace(trace) {
	    const logs = [];
	    trace.forEach((entry, i2) => {
	      logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
	    });
	    return logs;
	  }
	  function formatTraceEntry({ vnode, recurseCount }) {
	    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
	    const isRoot = vnode.component ? vnode.component.parent == null : false;
	    const open = ` at <${formatComponentName(
      vnode.component,
      vnode.type,
      isRoot
    )}`;
	    const close = `>` + postfix;
	    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
	  }
	  function formatProps(props) {
	    const res = [];
	    const keys = Object.keys(props);
	    keys.slice(0, 3).forEach((key) => {
	      res.push(...formatProp(key, props[key]));
	    });
	    if (keys.length > 3) {
	      res.push(` ...`);
	    }
	    return res;
	  }
	  function formatProp(key, value, raw) {
	    if (isString(value)) {
	      value = JSON.stringify(value);
	      return raw ? value : [`${key}=${value}`];
	    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
	      return raw ? value : [`${key}=${value}`];
	    } else if (isRef(value)) {
	      value = formatProp(key, toRaw(value.value), true);
	      return raw ? value : [`${key}=Ref<`, value, `>`];
	    } else if (isFunction(value)) {
	      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
	    } else {
	      value = toRaw(value);
	      return raw ? value : [`${key}=`, value];
	    }
	  }
	  function callWithErrorHandling(fn, instance, type, args) {
	    try {
	      return args ? fn(...args) : fn();
	    } catch (err) {
	      handleError(err, instance, type);
	    }
	  }
	  function callWithAsyncErrorHandling(fn, instance, type, args) {
	    if (isFunction(fn)) {
	      const res = callWithErrorHandling(fn, instance, type, args);
	      if (res && isPromise(res)) {
	        res.catch((err) => {
	          handleError(err, instance, type);
	        });
	      }
	      return res;
	    }
	    if (isArray(fn)) {
	      const values = [];
	      for (let i2 = 0; i2 < fn.length; i2++) {
	        values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
	      }
	      return values;
	    }
	  }
	  function handleError(err, instance, type, throwInDev = true) {
	    const contextVNode = instance ? instance.vnode : null;
	    if (instance) {
	      let cur = instance.parent;
	      const exposedInstance = instance.proxy;
	      const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
	      while (cur) {
	        const errorCapturedHooks = cur.ec;
	        if (errorCapturedHooks) {
	          for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
	            if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
	              return;
	            }
	          }
	        }
	        cur = cur.parent;
	      }
	      const appErrorHandler = instance.appContext.config.errorHandler;
	      if (appErrorHandler) {
	        pauseTracking();
	        callWithErrorHandling(
	          appErrorHandler,
	          null,
	          10,
	          [err, exposedInstance, errorInfo]
	        );
	        resetTracking();
	        return;
	      }
	    }
	    logError(err, type, contextVNode, throwInDev);
	  }
	  function logError(err, type, contextVNode, throwInDev = true) {
	    {
	      console.error(err);
	    }
	  }
	  let isFlushing = false;
	  let isFlushPending = false;
	  const queue = [];
	  let flushIndex = 0;
	  const pendingPostFlushCbs = [];
	  let activePostFlushCbs = null;
	  let postFlushIndex = 0;
	  const resolvedPromise = /* @__PURE__ */ Promise.resolve();
	  let currentFlushPromise = null;
	  function nextTick(fn) {
	    const p2 = currentFlushPromise || resolvedPromise;
	    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
	  }
	  function findInsertionIndex(id) {
	    let start = flushIndex + 1;
	    let end = queue.length;
	    while (start < end) {
	      const middle = start + end >>> 1;
	      const middleJob = queue[middle];
	      const middleJobId = getId(middleJob);
	      if (middleJobId < id || middleJobId === id && middleJob.pre) {
	        start = middle + 1;
	      } else {
	        end = middle;
	      }
	    }
	    return start;
	  }
	  function queueJob(job) {
	    if (!queue.length || !queue.includes(
	      job,
	      isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
	    )) {
	      if (job.id == null) {
	        queue.push(job);
	      } else {
	        queue.splice(findInsertionIndex(job.id), 0, job);
	      }
	      queueFlush();
	    }
	  }
	  function queueFlush() {
	    if (!isFlushing && !isFlushPending) {
	      isFlushPending = true;
	      currentFlushPromise = resolvedPromise.then(flushJobs);
	    }
	  }
	  function invalidateJob(job) {
	    const i2 = queue.indexOf(job);
	    if (i2 > flushIndex) {
	      queue.splice(i2, 1);
	    }
	  }
	  function queuePostFlushCb(cb) {
	    if (!isArray(cb)) {
	      if (!activePostFlushCbs || !activePostFlushCbs.includes(
	        cb,
	        cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
	      )) {
	        pendingPostFlushCbs.push(cb);
	      }
	    } else {
	      pendingPostFlushCbs.push(...cb);
	    }
	    queueFlush();
	  }
	  function flushPreFlushCbs(instance, seen, i2 = isFlushing ? flushIndex + 1 : 0) {
	    for (; i2 < queue.length; i2++) {
	      const cb = queue[i2];
	      if (cb && cb.pre) {
	        if (instance && cb.id !== instance.uid) {
	          continue;
	        }
	        queue.splice(i2, 1);
	        i2--;
	        cb();
	      }
	    }
	  }
	  function flushPostFlushCbs(seen) {
	    if (pendingPostFlushCbs.length) {
	      const deduped = [...new Set(pendingPostFlushCbs)].sort(
	        (a, b) => getId(a) - getId(b)
	      );
	      pendingPostFlushCbs.length = 0;
	      if (activePostFlushCbs) {
	        activePostFlushCbs.push(...deduped);
	        return;
	      }
	      activePostFlushCbs = deduped;
	      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
	        const cb = activePostFlushCbs[postFlushIndex];
	        if (cb.active !== false) cb();
	      }
	      activePostFlushCbs = null;
	      postFlushIndex = 0;
	    }
	  }
	  const getId = (job) => job.id == null ? Infinity : job.id;
	  const comparator = (a, b) => {
	    const diff = getId(a) - getId(b);
	    if (diff === 0) {
	      if (a.pre && !b.pre) return -1;
	      if (b.pre && !a.pre) return 1;
	    }
	    return diff;
	  };
	  function flushJobs(seen) {
	    isFlushPending = false;
	    isFlushing = true;
	    queue.sort(comparator);
	    try {
	      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
	        const job = queue[flushIndex];
	        if (job && job.active !== false) {
	          if (false) ;
	          callWithErrorHandling(
	            job,
	            job.i,
	            job.i ? 15 : 14
	          );
	        }
	      }
	    } finally {
	      flushIndex = 0;
	      queue.length = 0;
	      flushPostFlushCbs();
	      isFlushing = false;
	      currentFlushPromise = null;
	      if (queue.length || pendingPostFlushCbs.length) {
	        flushJobs();
	      }
	    }
	  }
	  let currentRenderingInstance = null;
	  let currentScopeId = null;
	  function setCurrentRenderingInstance(instance) {
	    const prev = currentRenderingInstance;
	    currentRenderingInstance = instance;
	    currentScopeId = instance && instance.type.__scopeId || null;
	    return prev;
	  }
	  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
	    if (!ctx) return fn;
	    if (fn._n) {
	      return fn;
	    }
	    const renderFnWithContext = (...args) => {
	      if (renderFnWithContext._d) {
	        setBlockTracking(-1);
	      }
	      const prevInstance = setCurrentRenderingInstance(ctx);
	      let res;
	      try {
	        res = fn(...args);
	      } finally {
	        setCurrentRenderingInstance(prevInstance);
	        if (renderFnWithContext._d) {
	          setBlockTracking(1);
	        }
	      }
	      return res;
	    };
	    renderFnWithContext._n = true;
	    renderFnWithContext._c = true;
	    renderFnWithContext._d = true;
	    return renderFnWithContext;
	  }
	  function withDirectives(vnode, directives) {
	    if (currentRenderingInstance === null) {
	      return vnode;
	    }
	    const instance = getComponentPublicInstance(currentRenderingInstance);
	    const bindings = vnode.dirs || (vnode.dirs = []);
	    for (let i2 = 0; i2 < directives.length; i2++) {
	      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
	      if (dir) {
	        if (isFunction(dir)) {
	          dir = {
	            mounted: dir,
	            updated: dir
	          };
	        }
	        if (dir.deep) {
	          traverse(value);
	        }
	        bindings.push({
	          dir,
	          instance,
	          value,
	          oldValue: void 0,
	          arg,
	          modifiers
	        });
	      }
	    }
	    return vnode;
	  }
	  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	    const bindings = vnode.dirs;
	    const oldBindings = prevVNode && prevVNode.dirs;
	    for (let i2 = 0; i2 < bindings.length; i2++) {
	      const binding = bindings[i2];
	      if (oldBindings) {
	        binding.oldValue = oldBindings[i2].value;
	      }
	      let hook = binding.dir[name];
	      if (hook) {
	        pauseTracking();
	        callWithAsyncErrorHandling(hook, instance, 8, [
	          vnode.el,
	          binding,
	          vnode,
	          prevVNode
	        ]);
	        resetTracking();
	      }
	    }
	  }
	  function setTransitionHooks(vnode, hooks) {
	    if (vnode.shapeFlag & 6 && vnode.component) {
	      setTransitionHooks(vnode.component.subTree, hooks);
	    } else if (vnode.shapeFlag & 128) {
	      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
	      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
	    } else {
	      vnode.transition = hooks;
	    }
	  }
	  const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
	  const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
	  function onActivated(hook, target) {
	    registerKeepAliveHook(hook, "a", target);
	  }
	  function onDeactivated(hook, target) {
	    registerKeepAliveHook(hook, "da", target);
	  }
	  function registerKeepAliveHook(hook, type, target = currentInstance) {
	    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
	      let current = target;
	      while (current) {
	        if (current.isDeactivated) {
	          return;
	        }
	        current = current.parent;
	      }
	      return hook();
	    });
	    injectHook(type, wrappedHook, target);
	    if (target) {
	      let current = target.parent;
	      while (current && current.parent) {
	        if (isKeepAlive(current.parent.vnode)) {
	          injectToKeepAliveRoot(wrappedHook, type, target, current);
	        }
	        current = current.parent;
	      }
	    }
	  }
	  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	    const injected = injectHook(
	      type,
	      hook,
	      keepAliveRoot,
	      true
	      /* prepend */
	    );
	    onUnmounted(() => {
	      remove(keepAliveRoot[type], injected);
	    }, target);
	  }
	  function injectHook(type, hook, target = currentInstance, prepend = false) {
	    if (target) {
	      const hooks = target[type] || (target[type] = []);
	      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
	        pauseTracking();
	        const reset = setCurrentInstance(target);
	        const res = callWithAsyncErrorHandling(hook, target, type, args);
	        reset();
	        resetTracking();
	        return res;
	      });
	      if (prepend) {
	        hooks.unshift(wrappedHook);
	      } else {
	        hooks.push(wrappedHook);
	      }
	      return wrappedHook;
	    }
	  }
	  const createHook = (lifecycle) => (hook, target = currentInstance) => {
	    if (!isInSSRComponentSetup || lifecycle === "sp") {
	      injectHook(lifecycle, (...args) => hook(...args), target);
	    }
	  };
	  const onBeforeMount = createHook("bm");
	  const onMounted = createHook("m");
	  const onBeforeUpdate = createHook("bu");
	  const onUpdated = createHook("u");
	  const onBeforeUnmount = createHook("bum");
	  const onUnmounted = createHook("um");
	  const onServerPrefetch = createHook("sp");
	  const onRenderTriggered = createHook(
	    "rtg"
	  );
	  const onRenderTracked = createHook(
	    "rtc"
	  );
	  function onErrorCaptured(hook, target = currentInstance) {
	    injectHook("ec", hook, target);
	  }
	  const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
	  function renderList(source, renderItem, cache, index) {
	    let ret;
	    const cached = cache;
	    if (isArray(source) || isString(source)) {
	      ret = new Array(source.length);
	      for (let i2 = 0, l = source.length; i2 < l; i2++) {
	        ret[i2] = renderItem(source[i2], i2, void 0, cached);
	      }
	    } else if (typeof source === "number") {
	      ret = new Array(source);
	      for (let i2 = 0; i2 < source; i2++) {
	        ret[i2] = renderItem(i2 + 1, i2, void 0, cached);
	      }
	    } else if (isObject(source)) {
	      if (source[Symbol.iterator]) {
	        ret = Array.from(
	          source,
	          (item, i2) => renderItem(item, i2, void 0, cached)
	        );
	      } else {
	        const keys = Object.keys(source);
	        ret = new Array(keys.length);
	        for (let i2 = 0, l = keys.length; i2 < l; i2++) {
	          const key = keys[i2];
	          ret[i2] = renderItem(source[key], key, i2, cached);
	        }
	      }
	    } else {
	      ret = [];
	    }
	    return ret;
	  }
	  const getPublicInstance = (i2) => {
	    if (!i2) return null;
	    if (isStatefulComponent(i2)) return getComponentPublicInstance(i2);
	    return getPublicInstance(i2.parent);
	  };
	  const publicPropertiesMap = (
	    // Move PURE marker to new line to workaround compiler discarding it
	    // due to type annotation
	    /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
	      $: (i2) => i2,
	      $el: (i2) => i2.vnode.el,
	      $data: (i2) => i2.data,
	      $props: (i2) => i2.props,
	      $attrs: (i2) => i2.attrs,
	      $slots: (i2) => i2.slots,
	      $refs: (i2) => i2.refs,
	      $parent: (i2) => getPublicInstance(i2.parent),
	      $root: (i2) => getPublicInstance(i2.root),
	      $emit: (i2) => i2.emit,
	      $options: (i2) => resolveMergedOptions(i2),
	      $forceUpdate: (i2) => i2.f || (i2.f = () => {
	        i2.effect.dirty = true;
	        queueJob(i2.update);
	      }),
	      $nextTick: (i2) => i2.n || (i2.n = nextTick.bind(i2.proxy)),
	      $watch: (i2) => instanceWatch.bind(i2)
	    })
	  );
	  const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
	  const PublicInstanceProxyHandlers = {
	    get({ _: instance }, key) {
	      if (key === "__v_skip") {
	        return true;
	      }
	      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
	      let normalizedProps;
	      if (key[0] !== "$") {
	        const n = accessCache[key];
	        if (n !== void 0) {
	          switch (n) {
	            case 1:
	              return setupState[key];
	            case 2:
	              return data[key];
	            case 4:
	              return ctx[key];
	            case 3:
	              return props[key];
	          }
	        } else if (hasSetupBinding(setupState, key)) {
	          accessCache[key] = 1;
	          return setupState[key];
	        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
	          accessCache[key] = 2;
	          return data[key];
	        } else if (
	          // only cache other properties when instance has declared (thus stable)
	          // props
	          (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
	        ) {
	          accessCache[key] = 3;
	          return props[key];
	        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
	          accessCache[key] = 4;
	          return ctx[key];
	        } else if (shouldCacheAccess) {
	          accessCache[key] = 0;
	        }
	      }
	      const publicGetter = publicPropertiesMap[key];
	      let cssModule, globalProperties;
	      if (publicGetter) {
	        if (key === "$attrs") {
	          track(instance.attrs, "get", "");
	        }
	        return publicGetter(instance);
	      } else if (
	        // css module (injected by vue-loader)
	        (cssModule = type.__cssModules) && (cssModule = cssModule[key])
	      ) {
	        return cssModule;
	      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
	        accessCache[key] = 4;
	        return ctx[key];
	      } else if (
	        // global properties
	        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
	      ) {
	        {
	          return globalProperties[key];
	        }
	      } else ;
	    },
	    set({ _: instance }, key, value) {
	      const { data, setupState, ctx } = instance;
	      if (hasSetupBinding(setupState, key)) {
	        setupState[key] = value;
	        return true;
	      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
	        data[key] = value;
	        return true;
	      } else if (hasOwn(instance.props, key)) {
	        return false;
	      }
	      if (key[0] === "$" && key.slice(1) in instance) {
	        return false;
	      } else {
	        {
	          ctx[key] = value;
	        }
	      }
	      return true;
	    },
	    has({
	      _: { data, setupState, accessCache, ctx, appContext, propsOptions }
	    }, key) {
	      let normalizedProps;
	      return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
	    },
	    defineProperty(target, key, descriptor) {
	      if (descriptor.get != null) {
	        target._.accessCache[key] = 0;
	      } else if (hasOwn(descriptor, "value")) {
	        this.set(target, key, descriptor.value, null);
	      }
	      return Reflect.defineProperty(target, key, descriptor);
	    }
	  };
	  function normalizePropsOrEmits(props) {
	    return isArray(props) ? props.reduce(
	      (normalized, p2) => (normalized[p2] = null, normalized),
	      {}
	    ) : props;
	  }
	  let shouldCacheAccess = true;
	  function applyOptions(instance) {
	    const options = resolveMergedOptions(instance);
	    const publicThis = instance.proxy;
	    const ctx = instance.ctx;
	    shouldCacheAccess = false;
	    if (options.beforeCreate) {
	      callHook(options.beforeCreate, instance, "bc");
	    }
	    const {
	      // state
	      data: dataOptions,
	      computed: computedOptions,
	      methods,
	      watch: watchOptions,
	      provide: provideOptions,
	      inject: injectOptions,
	      // lifecycle
	      created,
	      beforeMount,
	      mounted,
	      beforeUpdate,
	      updated,
	      activated,
	      deactivated,
	      beforeDestroy,
	      beforeUnmount,
	      destroyed,
	      unmounted,
	      render,
	      renderTracked,
	      renderTriggered,
	      errorCaptured,
	      serverPrefetch,
	      // public API
	      expose,
	      inheritAttrs,
	      // assets
	      components,
	      directives,
	      filters
	    } = options;
	    const checkDuplicateProperties = null;
	    if (injectOptions) {
	      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
	    }
	    if (methods) {
	      for (const key in methods) {
	        const methodHandler = methods[key];
	        if (isFunction(methodHandler)) {
	          {
	            ctx[key] = methodHandler.bind(publicThis);
	          }
	        }
	      }
	    }
	    if (dataOptions) {
	      const data = dataOptions.call(publicThis, publicThis);
	      if (!isObject(data)) ;
	      else {
	        instance.data = reactive(data);
	      }
	    }
	    shouldCacheAccess = true;
	    if (computedOptions) {
	      for (const key in computedOptions) {
	        const opt = computedOptions[key];
	        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
	        const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
	        const c = computed({
	          get: get2,
	          set: set2
	        });
	        Object.defineProperty(ctx, key, {
	          enumerable: true,
	          configurable: true,
	          get: () => c.value,
	          set: (v2) => c.value = v2
	        });
	      }
	    }
	    if (watchOptions) {
	      for (const key in watchOptions) {
	        createWatcher(watchOptions[key], ctx, publicThis, key);
	      }
	    }
	    if (provideOptions) {
	      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
	      Reflect.ownKeys(provides).forEach((key) => {
	        provide(key, provides[key]);
	      });
	    }
	    if (created) {
	      callHook(created, instance, "c");
	    }
	    function registerLifecycleHook(register, hook) {
	      if (isArray(hook)) {
	        hook.forEach((_hook) => register(_hook.bind(publicThis)));
	      } else if (hook) {
	        register(hook.bind(publicThis));
	      }
	    }
	    registerLifecycleHook(onBeforeMount, beforeMount);
	    registerLifecycleHook(onMounted, mounted);
	    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
	    registerLifecycleHook(onUpdated, updated);
	    registerLifecycleHook(onActivated, activated);
	    registerLifecycleHook(onDeactivated, deactivated);
	    registerLifecycleHook(onErrorCaptured, errorCaptured);
	    registerLifecycleHook(onRenderTracked, renderTracked);
	    registerLifecycleHook(onRenderTriggered, renderTriggered);
	    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
	    registerLifecycleHook(onUnmounted, unmounted);
	    registerLifecycleHook(onServerPrefetch, serverPrefetch);
	    if (isArray(expose)) {
	      if (expose.length) {
	        const exposed = instance.exposed || (instance.exposed = {});
	        expose.forEach((key) => {
	          Object.defineProperty(exposed, key, {
	            get: () => publicThis[key],
	            set: (val) => publicThis[key] = val
	          });
	        });
	      } else if (!instance.exposed) {
	        instance.exposed = {};
	      }
	    }
	    if (render && instance.render === NOOP) {
	      instance.render = render;
	    }
	    if (inheritAttrs != null) {
	      instance.inheritAttrs = inheritAttrs;
	    }
	    if (components) instance.components = components;
	    if (directives) instance.directives = directives;
	  }
	  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
	    if (isArray(injectOptions)) {
	      injectOptions = normalizeInject(injectOptions);
	    }
	    for (const key in injectOptions) {
	      const opt = injectOptions[key];
	      let injected;
	      if (isObject(opt)) {
	        if ("default" in opt) {
	          injected = inject(
	            opt.from || key,
	            opt.default,
	            true
	          );
	        } else {
	          injected = inject(opt.from || key);
	        }
	      } else {
	        injected = inject(opt);
	      }
	      if (isRef(injected)) {
	        Object.defineProperty(ctx, key, {
	          enumerable: true,
	          configurable: true,
	          get: () => injected.value,
	          set: (v2) => injected.value = v2
	        });
	      } else {
	        ctx[key] = injected;
	      }
	    }
	  }
	  function callHook(hook, instance, type) {
	    callWithAsyncErrorHandling(
	      isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
	      instance,
	      type
	    );
	  }
	  function createWatcher(raw, ctx, publicThis, key) {
	    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
	    if (isString(raw)) {
	      const handler = ctx[raw];
	      if (isFunction(handler)) {
	        watch(getter, handler);
	      }
	    } else if (isFunction(raw)) {
	      watch(getter, raw.bind(publicThis));
	    } else if (isObject(raw)) {
	      if (isArray(raw)) {
	        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
	      } else {
	        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
	        if (isFunction(handler)) {
	          watch(getter, handler, raw);
	        }
	      }
	    } else ;
	  }
	  function resolveMergedOptions(instance) {
	    const base = instance.type;
	    const { mixins, extends: extendsOptions } = base;
	    const {
	      mixins: globalMixins,
	      optionsCache: cache,
	      config: { optionMergeStrategies }
	    } = instance.appContext;
	    const cached = cache.get(base);
	    let resolved;
	    if (cached) {
	      resolved = cached;
	    } else if (!globalMixins.length && !mixins && !extendsOptions) {
	      {
	        resolved = base;
	      }
	    } else {
	      resolved = {};
	      if (globalMixins.length) {
	        globalMixins.forEach(
	          (m2) => mergeOptions(resolved, m2, optionMergeStrategies, true)
	        );
	      }
	      mergeOptions(resolved, base, optionMergeStrategies);
	    }
	    if (isObject(base)) {
	      cache.set(base, resolved);
	    }
	    return resolved;
	  }
	  function mergeOptions(to, from, strats, asMixin = false) {
	    const { mixins, extends: extendsOptions } = from;
	    if (extendsOptions) {
	      mergeOptions(to, extendsOptions, strats, true);
	    }
	    if (mixins) {
	      mixins.forEach(
	        (m2) => mergeOptions(to, m2, strats, true)
	      );
	    }
	    for (const key in from) {
	      if (asMixin && key === "expose") ;
	      else {
	        const strat = internalOptionMergeStrats[key] || strats && strats[key];
	        to[key] = strat ? strat(to[key], from[key]) : from[key];
	      }
	    }
	    return to;
	  }
	  const internalOptionMergeStrats = {
	    data: mergeDataFn,
	    props: mergeEmitsOrPropsOptions,
	    emits: mergeEmitsOrPropsOptions,
	    // objects
	    methods: mergeObjectOptions,
	    computed: mergeObjectOptions,
	    // lifecycle
	    beforeCreate: mergeAsArray,
	    created: mergeAsArray,
	    beforeMount: mergeAsArray,
	    mounted: mergeAsArray,
	    beforeUpdate: mergeAsArray,
	    updated: mergeAsArray,
	    beforeDestroy: mergeAsArray,
	    beforeUnmount: mergeAsArray,
	    destroyed: mergeAsArray,
	    unmounted: mergeAsArray,
	    activated: mergeAsArray,
	    deactivated: mergeAsArray,
	    errorCaptured: mergeAsArray,
	    serverPrefetch: mergeAsArray,
	    // assets
	    components: mergeObjectOptions,
	    directives: mergeObjectOptions,
	    // watch
	    watch: mergeWatchOptions,
	    // provide / inject
	    provide: mergeDataFn,
	    inject: mergeInject
	  };
	  function mergeDataFn(to, from) {
	    if (!from) {
	      return to;
	    }
	    if (!to) {
	      return from;
	    }
	    return function mergedDataFn() {
	      return extend(
	        isFunction(to) ? to.call(this, this) : to,
	        isFunction(from) ? from.call(this, this) : from
	      );
	    };
	  }
	  function mergeInject(to, from) {
	    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
	  }
	  function normalizeInject(raw) {
	    if (isArray(raw)) {
	      const res = {};
	      for (let i2 = 0; i2 < raw.length; i2++) {
	        res[raw[i2]] = raw[i2];
	      }
	      return res;
	    }
	    return raw;
	  }
	  function mergeAsArray(to, from) {
	    return to ? [...new Set([].concat(to, from))] : from;
	  }
	  function mergeObjectOptions(to, from) {
	    return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
	  }
	  function mergeEmitsOrPropsOptions(to, from) {
	    if (to) {
	      if (isArray(to) && isArray(from)) {
	        return [.../* @__PURE__ */ new Set([...to, ...from])];
	      }
	      return extend(
	        /* @__PURE__ */ Object.create(null),
	        normalizePropsOrEmits(to),
	        normalizePropsOrEmits(from != null ? from : {})
	      );
	    } else {
	      return from;
	    }
	  }
	  function mergeWatchOptions(to, from) {
	    if (!to) return from;
	    if (!from) return to;
	    const merged = extend(/* @__PURE__ */ Object.create(null), to);
	    for (const key in from) {
	      merged[key] = mergeAsArray(to[key], from[key]);
	    }
	    return merged;
	  }
	  function createAppContext() {
	    return {
	      app: null,
	      config: {
	        isNativeTag: NO,
	        performance: false,
	        globalProperties: {},
	        optionMergeStrategies: {},
	        errorHandler: void 0,
	        warnHandler: void 0,
	        compilerOptions: {}
	      },
	      mixins: [],
	      components: {},
	      directives: {},
	      provides: /* @__PURE__ */ Object.create(null),
	      optionsCache: /* @__PURE__ */ new WeakMap(),
	      propsCache: /* @__PURE__ */ new WeakMap(),
	      emitsCache: /* @__PURE__ */ new WeakMap()
	    };
	  }
	  let uid$1 = 0;
	  function createAppAPI(render, hydrate) {
	    return function createApp2(rootComponent, rootProps = null) {
	      if (!isFunction(rootComponent)) {
	        rootComponent = extend({}, rootComponent);
	      }
	      if (rootProps != null && !isObject(rootProps)) {
	        rootProps = null;
	      }
	      const context = createAppContext();
	      const installedPlugins = /* @__PURE__ */ new WeakSet();
	      let isMounted = false;
	      const app2 = context.app = {
	        _uid: uid$1++,
	        _component: rootComponent,
	        _props: rootProps,
	        _container: null,
	        _context: context,
	        _instance: null,
	        version: version$1,
	        get config() {
	          return context.config;
	        },
	        set config(v2) {
	        },
	        use(plugin, ...options) {
	          if (installedPlugins.has(plugin)) ;
	          else if (plugin && isFunction(plugin.install)) {
	            installedPlugins.add(plugin);
	            plugin.install(app2, ...options);
	          } else if (isFunction(plugin)) {
	            installedPlugins.add(plugin);
	            plugin(app2, ...options);
	          } else ;
	          return app2;
	        },
	        mixin(mixin) {
	          {
	            if (!context.mixins.includes(mixin)) {
	              context.mixins.push(mixin);
	            }
	          }
	          return app2;
	        },
	        component(name, component) {
	          if (!component) {
	            return context.components[name];
	          }
	          context.components[name] = component;
	          return app2;
	        },
	        directive(name, directive) {
	          if (!directive) {
	            return context.directives[name];
	          }
	          context.directives[name] = directive;
	          return app2;
	        },
	        mount(rootContainer, isHydrate, namespace) {
	          if (!isMounted) {
	            const vnode = createVNode(rootComponent, rootProps);
	            vnode.appContext = context;
	            if (namespace === true) {
	              namespace = "svg";
	            } else if (namespace === false) {
	              namespace = void 0;
	            }
	            if (isHydrate && hydrate) {
	              hydrate(vnode, rootContainer);
	            } else {
	              render(vnode, rootContainer, namespace);
	            }
	            isMounted = true;
	            app2._container = rootContainer;
	            rootContainer.__vue_app__ = app2;
	            return getComponentPublicInstance(vnode.component);
	          }
	        },
	        unmount() {
	          if (isMounted) {
	            render(null, app2._container);
	            delete app2._container.__vue_app__;
	          }
	        },
	        provide(key, value) {
	          context.provides[key] = value;
	          return app2;
	        },
	        runWithContext(fn) {
	          const lastApp = currentApp;
	          currentApp = app2;
	          try {
	            return fn();
	          } finally {
	            currentApp = lastApp;
	          }
	        }
	      };
	      return app2;
	    };
	  }
	  let currentApp = null;
	  function provide(key, value) {
	    if (!currentInstance) ;
	    else {
	      let provides = currentInstance.provides;
	      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
	      if (parentProvides === provides) {
	        provides = currentInstance.provides = Object.create(parentProvides);
	      }
	      provides[key] = value;
	    }
	  }
	  function inject(key, defaultValue, treatDefaultAsFactory = false) {
	    const instance = currentInstance || currentRenderingInstance;
	    if (instance || currentApp) {
	      const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
	      if (provides && key in provides) {
	        return provides[key];
	      } else if (arguments.length > 1) {
	        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
	      } else ;
	    }
	  }
	  const internalObjectProto = {};
	  const createInternalObject = () => Object.create(internalObjectProto);
	  const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
	  function initProps(instance, rawProps, isStateful, isSSR = false) {
	    const props = {};
	    const attrs = createInternalObject();
	    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	    setFullProps(instance, rawProps, props, attrs);
	    for (const key in instance.propsOptions[0]) {
	      if (!(key in props)) {
	        props[key] = void 0;
	      }
	    }
	    if (isStateful) {
	      instance.props = isSSR ? props : shallowReactive(props);
	    } else {
	      if (!instance.type.props) {
	        instance.props = attrs;
	      } else {
	        instance.props = props;
	      }
	    }
	    instance.attrs = attrs;
	  }
	  function updateProps(instance, rawProps, rawPrevProps, optimized) {
	    const {
	      props,
	      attrs,
	      vnode: { patchFlag }
	    } = instance;
	    const rawCurrentProps = toRaw(props);
	    const [options] = instance.propsOptions;
	    let hasAttrsChanged = false;
	    if (
	      // always force full diff in dev
	      // - #1942 if hmr is enabled with sfc component
	      // - vite#872 non-sfc component used by sfc component
	      (optimized || patchFlag > 0) && !(patchFlag & 16)
	    ) {
	      if (patchFlag & 8) {
	        const propsToUpdate = instance.vnode.dynamicProps;
	        for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
	          let key = propsToUpdate[i2];
	          if (isEmitListener(instance.emitsOptions, key)) {
	            continue;
	          }
	          const value = rawProps[key];
	          if (options) {
	            if (hasOwn(attrs, key)) {
	              if (value !== attrs[key]) {
	                attrs[key] = value;
	                hasAttrsChanged = true;
	              }
	            } else {
	              const camelizedKey = camelize(key);
	              props[camelizedKey] = resolvePropValue(
	                options,
	                rawCurrentProps,
	                camelizedKey,
	                value,
	                instance,
	                false
	              );
	            }
	          } else {
	            if (value !== attrs[key]) {
	              attrs[key] = value;
	              hasAttrsChanged = true;
	            }
	          }
	        }
	      }
	    } else {
	      if (setFullProps(instance, rawProps, props, attrs)) {
	        hasAttrsChanged = true;
	      }
	      let kebabKey;
	      for (const key in rawCurrentProps) {
	        if (!rawProps || // for camelCase
	        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
	        // and converted to camelCase (#955)
	        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
	          if (options) {
	            if (rawPrevProps && // for camelCase
	            (rawPrevProps[key] !== void 0 || // for kebab-case
	            rawPrevProps[kebabKey] !== void 0)) {
	              props[key] = resolvePropValue(
	                options,
	                rawCurrentProps,
	                key,
	                void 0,
	                instance,
	                true
	              );
	            }
	          } else {
	            delete props[key];
	          }
	        }
	      }
	      if (attrs !== rawCurrentProps) {
	        for (const key in attrs) {
	          if (!rawProps || !hasOwn(rawProps, key) && true) {
	            delete attrs[key];
	            hasAttrsChanged = true;
	          }
	        }
	      }
	    }
	    if (hasAttrsChanged) {
	      trigger(instance.attrs, "set", "");
	    }
	  }
	  function setFullProps(instance, rawProps, props, attrs) {
	    const [options, needCastKeys] = instance.propsOptions;
	    let hasAttrsChanged = false;
	    let rawCastValues;
	    if (rawProps) {
	      for (let key in rawProps) {
	        if (isReservedProp(key)) {
	          continue;
	        }
	        const value = rawProps[key];
	        let camelKey;
	        if (options && hasOwn(options, camelKey = camelize(key))) {
	          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
	            props[camelKey] = value;
	          } else {
	            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
	          }
	        } else if (!isEmitListener(instance.emitsOptions, key)) {
	          if (!(key in attrs) || value !== attrs[key]) {
	            attrs[key] = value;
	            hasAttrsChanged = true;
	          }
	        }
	      }
	    }
	    if (needCastKeys) {
	      const rawCurrentProps = toRaw(props);
	      const castValues = rawCastValues || EMPTY_OBJ;
	      for (let i2 = 0; i2 < needCastKeys.length; i2++) {
	        const key = needCastKeys[i2];
	        props[key] = resolvePropValue(
	          options,
	          rawCurrentProps,
	          key,
	          castValues[key],
	          instance,
	          !hasOwn(castValues, key)
	        );
	      }
	    }
	    return hasAttrsChanged;
	  }
	  function resolvePropValue(options, props, key, value, instance, isAbsent) {
	    const opt = options[key];
	    if (opt != null) {
	      const hasDefault = hasOwn(opt, "default");
	      if (hasDefault && value === void 0) {
	        const defaultValue = opt.default;
	        if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
	          const { propsDefaults } = instance;
	          if (key in propsDefaults) {
	            value = propsDefaults[key];
	          } else {
	            const reset = setCurrentInstance(instance);
	            value = propsDefaults[key] = defaultValue.call(
	              null,
	              props
	            );
	            reset();
	          }
	        } else {
	          value = defaultValue;
	        }
	      }
	      if (opt[
	        0
	        /* shouldCast */
	      ]) {
	        if (isAbsent && !hasDefault) {
	          value = false;
	        } else if (opt[
	          1
	          /* shouldCastTrue */
	        ] && (value === "" || value === hyphenate(key))) {
	          value = true;
	        }
	      }
	    }
	    return value;
	  }
	  const mixinPropsCache = /* @__PURE__ */ new WeakMap();
	  function normalizePropsOptions(comp, appContext, asMixin = false) {
	    const cache = asMixin ? mixinPropsCache : appContext.propsCache;
	    const cached = cache.get(comp);
	    if (cached) {
	      return cached;
	    }
	    const raw = comp.props;
	    const normalized = {};
	    const needCastKeys = [];
	    let hasExtends = false;
	    if (!isFunction(comp)) {
	      const extendProps = (raw2) => {
	        hasExtends = true;
	        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
	        extend(normalized, props);
	        if (keys) needCastKeys.push(...keys);
	      };
	      if (!asMixin && appContext.mixins.length) {
	        appContext.mixins.forEach(extendProps);
	      }
	      if (comp.extends) {
	        extendProps(comp.extends);
	      }
	      if (comp.mixins) {
	        comp.mixins.forEach(extendProps);
	      }
	    }
	    if (!raw && !hasExtends) {
	      if (isObject(comp)) {
	        cache.set(comp, EMPTY_ARR);
	      }
	      return EMPTY_ARR;
	    }
	    if (isArray(raw)) {
	      for (let i2 = 0; i2 < raw.length; i2++) {
	        const normalizedKey = camelize(raw[i2]);
	        if (validatePropName(normalizedKey)) {
	          normalized[normalizedKey] = EMPTY_OBJ;
	        }
	      }
	    } else if (raw) {
	      for (const key in raw) {
	        const normalizedKey = camelize(key);
	        if (validatePropName(normalizedKey)) {
	          const opt = raw[key];
	          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
	          const propType = prop.type;
	          let shouldCast = false;
	          let shouldCastTrue = true;
	          if (isArray(propType)) {
	            for (let index = 0; index < propType.length; ++index) {
	              const type = propType[index];
	              const typeName = isFunction(type) && type.name;
	              if (typeName === "Boolean") {
	                shouldCast = true;
	                break;
	              } else if (typeName === "String") {
	                shouldCastTrue = false;
	              }
	            }
	          } else {
	            shouldCast = isFunction(propType) && propType.name === "Boolean";
	          }
	          prop[
	            0
	            /* shouldCast */
	          ] = shouldCast;
	          prop[
	            1
	            /* shouldCastTrue */
	          ] = shouldCastTrue;
	          if (shouldCast || hasOwn(prop, "default")) {
	            needCastKeys.push(normalizedKey);
	          }
	        }
	      }
	    }
	    const res = [normalized, needCastKeys];
	    if (isObject(comp)) {
	      cache.set(comp, res);
	    }
	    return res;
	  }
	  function validatePropName(key) {
	    if (key[0] !== "$" && !isReservedProp(key)) {
	      return true;
	    }
	    return false;
	  }
	  const isInternalKey = (key) => key[0] === "_" || key === "$stable";
	  const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
	  const normalizeSlot = (key, rawSlot, ctx) => {
	    if (rawSlot._n) {
	      return rawSlot;
	    }
	    const normalized = withCtx((...args) => {
	      if (false) ;
	      return normalizeSlotValue(rawSlot(...args));
	    }, ctx);
	    normalized._c = false;
	    return normalized;
	  };
	  const normalizeObjectSlots = (rawSlots, slots, instance) => {
	    const ctx = rawSlots._ctx;
	    for (const key in rawSlots) {
	      if (isInternalKey(key)) continue;
	      const value = rawSlots[key];
	      if (isFunction(value)) {
	        slots[key] = normalizeSlot(key, value, ctx);
	      } else if (value != null) {
	        const normalized = normalizeSlotValue(value);
	        slots[key] = () => normalized;
	      }
	    }
	  };
	  const normalizeVNodeSlots = (instance, children) => {
	    const normalized = normalizeSlotValue(children);
	    instance.slots.default = () => normalized;
	  };
	  const assignSlots = (slots, children, optimized) => {
	    for (const key in children) {
	      if (optimized || key !== "_") {
	        slots[key] = children[key];
	      }
	    }
	  };
	  const initSlots = (instance, children, optimized) => {
	    const slots = instance.slots = createInternalObject();
	    if (instance.vnode.shapeFlag & 32) {
	      const type = children._;
	      if (type) {
	        assignSlots(slots, children, optimized);
	        if (optimized) {
	          def(slots, "_", type, true);
	        }
	      } else {
	        normalizeObjectSlots(children, slots);
	      }
	    } else if (children) {
	      normalizeVNodeSlots(instance, children);
	    }
	  };
	  const updateSlots = (instance, children, optimized) => {
	    const { vnode, slots } = instance;
	    let needDeletionCheck = true;
	    let deletionComparisonTarget = EMPTY_OBJ;
	    if (vnode.shapeFlag & 32) {
	      const type = children._;
	      if (type) {
	        if (optimized && type === 1) {
	          needDeletionCheck = false;
	        } else {
	          assignSlots(slots, children, optimized);
	        }
	      } else {
	        needDeletionCheck = !children.$stable;
	        normalizeObjectSlots(children, slots);
	      }
	      deletionComparisonTarget = children;
	    } else if (children) {
	      normalizeVNodeSlots(instance, children);
	      deletionComparisonTarget = { default: 1 };
	    }
	    if (needDeletionCheck) {
	      for (const key in slots) {
	        if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
	          delete slots[key];
	        }
	      }
	    }
	  };
	  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
	    if (isArray(rawRef)) {
	      rawRef.forEach(
	        (r, i2) => setRef(
	          r,
	          oldRawRef && (isArray(oldRawRef) ? oldRawRef[i2] : oldRawRef),
	          parentSuspense,
	          vnode,
	          isUnmount
	        )
	      );
	      return;
	    }
	    if (isAsyncWrapper(vnode) && !isUnmount) {
	      return;
	    }
	    const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
	    const value = isUnmount ? null : refValue;
	    const { i: owner, r: ref3 } = rawRef;
	    const oldRef = oldRawRef && oldRawRef.r;
	    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
	    const setupState = owner.setupState;
	    if (oldRef != null && oldRef !== ref3) {
	      if (isString(oldRef)) {
	        refs[oldRef] = null;
	        if (hasOwn(setupState, oldRef)) {
	          setupState[oldRef] = null;
	        }
	      } else if (isRef(oldRef)) {
	        oldRef.value = null;
	      }
	    }
	    if (isFunction(ref3)) {
	      callWithErrorHandling(ref3, owner, 12, [value, refs]);
	    } else {
	      const _isString = isString(ref3);
	      const _isRef = isRef(ref3);
	      if (_isString || _isRef) {
	        const doSet = () => {
	          if (rawRef.f) {
	            const existing = _isString ? hasOwn(setupState, ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
	            if (isUnmount) {
	              isArray(existing) && remove(existing, refValue);
	            } else {
	              if (!isArray(existing)) {
	                if (_isString) {
	                  refs[ref3] = [refValue];
	                  if (hasOwn(setupState, ref3)) {
	                    setupState[ref3] = refs[ref3];
	                  }
	                } else {
	                  ref3.value = [refValue];
	                  if (rawRef.k) refs[rawRef.k] = ref3.value;
	                }
	              } else if (!existing.includes(refValue)) {
	                existing.push(refValue);
	              }
	            }
	          } else if (_isString) {
	            refs[ref3] = value;
	            if (hasOwn(setupState, ref3)) {
	              setupState[ref3] = value;
	            }
	          } else if (_isRef) {
	            ref3.value = value;
	            if (rawRef.k) refs[rawRef.k] = value;
	          } else ;
	        };
	        if (value) {
	          doSet.id = -1;
	          queuePostRenderEffect(doSet, parentSuspense);
	        } else {
	          doSet();
	        }
	      }
	    }
	  }
	  const TeleportEndKey = Symbol("_vte");
	  const isTeleport = (type) => type.__isTeleport;
	  const queuePostRenderEffect = queueEffectWithSuspense;
	  function createRenderer(options) {
	    return baseCreateRenderer(options);
	  }
	  function baseCreateRenderer(options, createHydrationFns) {
	    const target = getGlobalThis();
	    target.__VUE__ = true;
	    const {
	      insert: hostInsert,
	      remove: hostRemove,
	      patchProp: hostPatchProp,
	      createElement: hostCreateElement,
	      createText: hostCreateText,
	      createComment: hostCreateComment,
	      setText: hostSetText,
	      setElementText: hostSetElementText,
	      parentNode: hostParentNode,
	      nextSibling: hostNextSibling,
	      setScopeId: hostSetScopeId = NOOP,
	      insertStaticContent: hostInsertStaticContent
	    } = options;
	    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
	      if (n1 === n2) {
	        return;
	      }
	      if (n1 && !isSameVNodeType(n1, n2)) {
	        anchor = getNextHostNode(n1);
	        unmount(n1, parentComponent, parentSuspense, true);
	        n1 = null;
	      }
	      if (n2.patchFlag === -2) {
	        optimized = false;
	        n2.dynamicChildren = null;
	      }
	      const { type, ref: ref3, shapeFlag } = n2;
	      switch (type) {
	        case Text:
	          processText(n1, n2, container, anchor);
	          break;
	        case Comment:
	          processCommentNode(n1, n2, container, anchor);
	          break;
	        case Static:
	          if (n1 == null) {
	            mountStaticNode(n2, container, anchor, namespace);
	          }
	          break;
	        case Fragment:
	          processFragment(
	            n1,
	            n2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            slotScopeIds,
	            optimized
	          );
	          break;
	        default:
	          if (shapeFlag & 1) {
	            processElement(
	              n1,
	              n2,
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized
	            );
	          } else if (shapeFlag & 6) {
	            processComponent(
	              n1,
	              n2,
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized
	            );
	          } else if (shapeFlag & 64) {
	            type.process(
	              n1,
	              n2,
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized,
	              internals
	            );
	          } else if (shapeFlag & 128) {
	            type.process(
	              n1,
	              n2,
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized,
	              internals
	            );
	          } else ;
	      }
	      if (ref3 != null && parentComponent) {
	        setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
	      }
	    };
	    const processText = (n1, n2, container, anchor) => {
	      if (n1 == null) {
	        hostInsert(
	          n2.el = hostCreateText(n2.children),
	          container,
	          anchor
	        );
	      } else {
	        const el = n2.el = n1.el;
	        if (n2.children !== n1.children) {
	          hostSetText(el, n2.children);
	        }
	      }
	    };
	    const processCommentNode = (n1, n2, container, anchor) => {
	      if (n1 == null) {
	        hostInsert(
	          n2.el = hostCreateComment(n2.children || ""),
	          container,
	          anchor
	        );
	      } else {
	        n2.el = n1.el;
	      }
	    };
	    const mountStaticNode = (n2, container, anchor, namespace) => {
	      [n2.el, n2.anchor] = hostInsertStaticContent(
	        n2.children,
	        container,
	        anchor,
	        namespace,
	        n2.el,
	        n2.anchor
	      );
	    };
	    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
	      let next;
	      while (el && el !== anchor) {
	        next = hostNextSibling(el);
	        hostInsert(el, container, nextSibling);
	        el = next;
	      }
	      hostInsert(anchor, container, nextSibling);
	    };
	    const removeStaticNode = ({ el, anchor }) => {
	      let next;
	      while (el && el !== anchor) {
	        next = hostNextSibling(el);
	        hostRemove(el);
	        el = next;
	      }
	      hostRemove(anchor);
	    };
	    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
	      if (n2.type === "svg") {
	        namespace = "svg";
	      } else if (n2.type === "math") {
	        namespace = "mathml";
	      }
	      if (n1 == null) {
	        mountElement(
	          n2,
	          container,
	          anchor,
	          parentComponent,
	          parentSuspense,
	          namespace,
	          slotScopeIds,
	          optimized
	        );
	      } else {
	        patchElement(
	          n1,
	          n2,
	          parentComponent,
	          parentSuspense,
	          namespace,
	          slotScopeIds,
	          optimized
	        );
	      }
	    };
	    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
	      let el;
	      let vnodeHook;
	      const { props, shapeFlag, transition, dirs } = vnode;
	      el = vnode.el = hostCreateElement(
	        vnode.type,
	        namespace,
	        props && props.is,
	        props
	      );
	      if (shapeFlag & 8) {
	        hostSetElementText(el, vnode.children);
	      } else if (shapeFlag & 16) {
	        mountChildren(
	          vnode.children,
	          el,
	          null,
	          parentComponent,
	          parentSuspense,
	          resolveChildrenNamespace(vnode, namespace),
	          slotScopeIds,
	          optimized
	        );
	      }
	      if (dirs) {
	        invokeDirectiveHook(vnode, null, parentComponent, "created");
	      }
	      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
	      if (props) {
	        for (const key in props) {
	          if (key !== "value" && !isReservedProp(key)) {
	            hostPatchProp(el, key, null, props[key], namespace, parentComponent);
	          }
	        }
	        if ("value" in props) {
	          hostPatchProp(el, "value", null, props.value, namespace);
	        }
	        if (vnodeHook = props.onVnodeBeforeMount) {
	          invokeVNodeHook(vnodeHook, parentComponent, vnode);
	        }
	      }
	      if (dirs) {
	        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
	      }
	      const needCallTransitionHooks = needTransition(parentSuspense, transition);
	      if (needCallTransitionHooks) {
	        transition.beforeEnter(el);
	      }
	      hostInsert(el, container, anchor);
	      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
	        queuePostRenderEffect(() => {
	          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
	          needCallTransitionHooks && transition.enter(el);
	          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
	        }, parentSuspense);
	      }
	    };
	    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
	      if (scopeId) {
	        hostSetScopeId(el, scopeId);
	      }
	      if (slotScopeIds) {
	        for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
	          hostSetScopeId(el, slotScopeIds[i2]);
	        }
	      }
	      if (parentComponent) {
	        let subTree = parentComponent.subTree;
	        if (vnode === subTree) {
	          const parentVNode = parentComponent.vnode;
	          setScopeId(
	            el,
	            parentVNode,
	            parentVNode.scopeId,
	            parentVNode.slotScopeIds,
	            parentComponent.parent
	          );
	        }
	      }
	    };
	    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
	      for (let i2 = start; i2 < children.length; i2++) {
	        const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
	        patch(
	          null,
	          child,
	          container,
	          anchor,
	          parentComponent,
	          parentSuspense,
	          namespace,
	          slotScopeIds,
	          optimized
	        );
	      }
	    };
	    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
	      const el = n2.el = n1.el;
	      let { patchFlag, dynamicChildren, dirs } = n2;
	      patchFlag |= n1.patchFlag & 16;
	      const oldProps = n1.props || EMPTY_OBJ;
	      const newProps = n2.props || EMPTY_OBJ;
	      let vnodeHook;
	      parentComponent && toggleRecurse(parentComponent, false);
	      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
	        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
	      }
	      if (dirs) {
	        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
	      }
	      parentComponent && toggleRecurse(parentComponent, true);
	      if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
	        hostSetElementText(el, "");
	      }
	      if (dynamicChildren) {
	        patchBlockChildren(
	          n1.dynamicChildren,
	          dynamicChildren,
	          el,
	          parentComponent,
	          parentSuspense,
	          resolveChildrenNamespace(n2, namespace),
	          slotScopeIds
	        );
	      } else if (!optimized) {
	        patchChildren(
	          n1,
	          n2,
	          el,
	          null,
	          parentComponent,
	          parentSuspense,
	          resolveChildrenNamespace(n2, namespace),
	          slotScopeIds,
	          false
	        );
	      }
	      if (patchFlag > 0) {
	        if (patchFlag & 16) {
	          patchProps(el, oldProps, newProps, parentComponent, namespace);
	        } else {
	          if (patchFlag & 2) {
	            if (oldProps.class !== newProps.class) {
	              hostPatchProp(el, "class", null, newProps.class, namespace);
	            }
	          }
	          if (patchFlag & 4) {
	            hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
	          }
	          if (patchFlag & 8) {
	            const propsToUpdate = n2.dynamicProps;
	            for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
	              const key = propsToUpdate[i2];
	              const prev = oldProps[key];
	              const next = newProps[key];
	              if (next !== prev || key === "value") {
	                hostPatchProp(el, key, prev, next, namespace, parentComponent);
	              }
	            }
	          }
	        }
	        if (patchFlag & 1) {
	          if (n1.children !== n2.children) {
	            hostSetElementText(el, n2.children);
	          }
	        }
	      } else if (!optimized && dynamicChildren == null) {
	        patchProps(el, oldProps, newProps, parentComponent, namespace);
	      }
	      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
	        queuePostRenderEffect(() => {
	          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
	          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
	        }, parentSuspense);
	      }
	    };
	    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
	      for (let i2 = 0; i2 < newChildren.length; i2++) {
	        const oldVNode = oldChildren[i2];
	        const newVNode = newChildren[i2];
	        const container = (
	          // oldVNode may be an errored async setup() component inside Suspense
	          // which will not have a mounted element
	          oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
	          // of the Fragment itself so it can move its children.
	          (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
	          // which also requires the correct parent container
	          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
	          oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
	            // In other cases, the parent container is not actually used so we
	            // just pass the block element here to avoid a DOM parentNode call.
	            fallbackContainer
	          )
	        );
	        patch(
	          oldVNode,
	          newVNode,
	          container,
	          null,
	          parentComponent,
	          parentSuspense,
	          namespace,
	          slotScopeIds,
	          true
	        );
	      }
	    };
	    const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
	      if (oldProps !== newProps) {
	        if (oldProps !== EMPTY_OBJ) {
	          for (const key in oldProps) {
	            if (!isReservedProp(key) && !(key in newProps)) {
	              hostPatchProp(
	                el,
	                key,
	                oldProps[key],
	                null,
	                namespace,
	                parentComponent
	              );
	            }
	          }
	        }
	        for (const key in newProps) {
	          if (isReservedProp(key)) continue;
	          const next = newProps[key];
	          const prev = oldProps[key];
	          if (next !== prev && key !== "value") {
	            hostPatchProp(el, key, prev, next, namespace, parentComponent);
	          }
	        }
	        if ("value" in newProps) {
	          hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
	        }
	      }
	    };
	    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
	      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
	      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
	      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
	      if (fragmentSlotScopeIds) {
	        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
	      }
	      if (n1 == null) {
	        hostInsert(fragmentStartAnchor, container, anchor);
	        hostInsert(fragmentEndAnchor, container, anchor);
	        mountChildren(
	          // #10007
	          // such fragment like `<></>` will be compiled into
	          // a fragment which doesn't have a children.
	          // In this case fallback to an empty array
	          n2.children || [],
	          container,
	          fragmentEndAnchor,
	          parentComponent,
	          parentSuspense,
	          namespace,
	          slotScopeIds,
	          optimized
	        );
	      } else {
	        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
	        // of renderSlot() with no valid children
	        n1.dynamicChildren) {
	          patchBlockChildren(
	            n1.dynamicChildren,
	            dynamicChildren,
	            container,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            slotScopeIds
	          );
	          if (
	            // #2080 if the stable fragment has a key, it's a <template v-for> that may
	            //  get moved around. Make sure all root level vnodes inherit el.
	            // #2134 or if it's a component root, it may also get moved around
	            // as the component is being moved.
	            n2.key != null || parentComponent && n2 === parentComponent.subTree
	          ) {
	            traverseStaticChildren(
	              n1,
	              n2,
	              true
	              /* shallow */
	            );
	          }
	        } else {
	          patchChildren(
	            n1,
	            n2,
	            container,
	            fragmentEndAnchor,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            slotScopeIds,
	            optimized
	          );
	        }
	      }
	    };
	    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
	      n2.slotScopeIds = slotScopeIds;
	      if (n1 == null) {
	        if (n2.shapeFlag & 512) {
	          parentComponent.ctx.activate(
	            n2,
	            container,
	            anchor,
	            namespace,
	            optimized
	          );
	        } else {
	          mountComponent(
	            n2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            optimized
	          );
	        }
	      } else {
	        updateComponent(n1, n2, optimized);
	      }
	    };
	    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
	      const instance = initialVNode.component = createComponentInstance(
	        initialVNode,
	        parentComponent,
	        parentSuspense
	      );
	      if (isKeepAlive(initialVNode)) {
	        instance.ctx.renderer = internals;
	      }
	      {
	        setupComponent(instance, false, optimized);
	      }
	      if (instance.asyncDep) {
	        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
	        if (!initialVNode.el) {
	          const placeholder = instance.subTree = createVNode(Comment);
	          processCommentNode(null, placeholder, container, anchor);
	        }
	      } else {
	        setupRenderEffect(
	          instance,
	          initialVNode,
	          container,
	          anchor,
	          parentSuspense,
	          namespace,
	          optimized
	        );
	      }
	    };
	    const updateComponent = (n1, n2, optimized) => {
	      const instance = n2.component = n1.component;
	      if (shouldUpdateComponent(n1, n2, optimized)) {
	        if (instance.asyncDep && !instance.asyncResolved) {
	          updateComponentPreRender(instance, n2, optimized);
	          return;
	        } else {
	          instance.next = n2;
	          invalidateJob(instance.update);
	          instance.effect.dirty = true;
	          instance.update();
	        }
	      } else {
	        n2.el = n1.el;
	        instance.vnode = n2;
	      }
	    };
	    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
	      const componentUpdateFn = () => {
	        if (!instance.isMounted) {
	          let vnodeHook;
	          const { el, props } = initialVNode;
	          const { bm, m: m2, parent } = instance;
	          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
	          toggleRecurse(instance, false);
	          if (bm) {
	            invokeArrayFns(bm);
	          }
	          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
	            invokeVNodeHook(vnodeHook, parent, initialVNode);
	          }
	          toggleRecurse(instance, true);
	          if (el && hydrateNode) {
	            const hydrateSubTree = () => {
	              instance.subTree = renderComponentRoot(instance);
	              hydrateNode(
	                el,
	                instance.subTree,
	                instance,
	                parentSuspense,
	                null
	              );
	            };
	            if (isAsyncWrapperVNode) {
	              initialVNode.type.__asyncLoader().then(
	                // note: we are moving the render call into an async callback,
	                // which means it won't track dependencies - but it's ok because
	                // a server-rendered async wrapper is already in resolved state
	                // and it will never need to change.
	                () => !instance.isUnmounted && hydrateSubTree()
	              );
	            } else {
	              hydrateSubTree();
	            }
	          } else {
	            const subTree = instance.subTree = renderComponentRoot(instance);
	            patch(
	              null,
	              subTree,
	              container,
	              anchor,
	              instance,
	              parentSuspense,
	              namespace
	            );
	            initialVNode.el = subTree.el;
	          }
	          if (m2) {
	            queuePostRenderEffect(m2, parentSuspense);
	          }
	          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
	            const scopedInitialVNode = initialVNode;
	            queuePostRenderEffect(
	              () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
	              parentSuspense
	            );
	          }
	          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
	            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
	          }
	          instance.isMounted = true;
	          initialVNode = container = anchor = null;
	        } else {
	          let { next, bu, u, parent, vnode } = instance;
	          {
	            const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
	            if (nonHydratedAsyncRoot) {
	              if (next) {
	                next.el = vnode.el;
	                updateComponentPreRender(instance, next, optimized);
	              }
	              nonHydratedAsyncRoot.asyncDep.then(() => {
	                if (!instance.isUnmounted) {
	                  componentUpdateFn();
	                }
	              });
	              return;
	            }
	          }
	          let originNext = next;
	          let vnodeHook;
	          toggleRecurse(instance, false);
	          if (next) {
	            next.el = vnode.el;
	            updateComponentPreRender(instance, next, optimized);
	          } else {
	            next = vnode;
	          }
	          if (bu) {
	            invokeArrayFns(bu);
	          }
	          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
	            invokeVNodeHook(vnodeHook, parent, next, vnode);
	          }
	          toggleRecurse(instance, true);
	          const nextTree = renderComponentRoot(instance);
	          const prevTree = instance.subTree;
	          instance.subTree = nextTree;
	          patch(
	            prevTree,
	            nextTree,
	            // parent may have changed if it's in a teleport
	            hostParentNode(prevTree.el),
	            // anchor may have changed if it's in a fragment
	            getNextHostNode(prevTree),
	            instance,
	            parentSuspense,
	            namespace
	          );
	          next.el = nextTree.el;
	          if (originNext === null) {
	            updateHOCHostEl(instance, nextTree.el);
	          }
	          if (u) {
	            queuePostRenderEffect(u, parentSuspense);
	          }
	          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
	            queuePostRenderEffect(
	              () => invokeVNodeHook(vnodeHook, parent, next, vnode),
	              parentSuspense
	            );
	          }
	        }
	      };
	      const effect2 = instance.effect = new ReactiveEffect(
	        componentUpdateFn,
	        NOOP,
	        () => queueJob(update),
	        instance.scope
	        // track it in component's effect scope
	      );
	      const update = instance.update = () => {
	        if (effect2.dirty) {
	          effect2.run();
	        }
	      };
	      update.i = instance;
	      update.id = instance.uid;
	      toggleRecurse(instance, true);
	      update();
	    };
	    const updateComponentPreRender = (instance, nextVNode, optimized) => {
	      nextVNode.component = instance;
	      const prevProps = instance.vnode.props;
	      instance.vnode = nextVNode;
	      instance.next = null;
	      updateProps(instance, nextVNode.props, prevProps, optimized);
	      updateSlots(instance, nextVNode.children, optimized);
	      pauseTracking();
	      flushPreFlushCbs(instance);
	      resetTracking();
	    };
	    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
	      const c1 = n1 && n1.children;
	      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
	      const c2 = n2.children;
	      const { patchFlag, shapeFlag } = n2;
	      if (patchFlag > 0) {
	        if (patchFlag & 128) {
	          patchKeyedChildren(
	            c1,
	            c2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            slotScopeIds,
	            optimized
	          );
	          return;
	        } else if (patchFlag & 256) {
	          patchUnkeyedChildren(
	            c1,
	            c2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            slotScopeIds,
	            optimized
	          );
	          return;
	        }
	      }
	      if (shapeFlag & 8) {
	        if (prevShapeFlag & 16) {
	          unmountChildren(c1, parentComponent, parentSuspense);
	        }
	        if (c2 !== c1) {
	          hostSetElementText(container, c2);
	        }
	      } else {
	        if (prevShapeFlag & 16) {
	          if (shapeFlag & 16) {
	            patchKeyedChildren(
	              c1,
	              c2,
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized
	            );
	          } else {
	            unmountChildren(c1, parentComponent, parentSuspense, true);
	          }
	        } else {
	          if (prevShapeFlag & 8) {
	            hostSetElementText(container, "");
	          }
	          if (shapeFlag & 16) {
	            mountChildren(
	              c2,
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized
	            );
	          }
	        }
	      }
	    };
	    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
	      c1 = c1 || EMPTY_ARR;
	      c2 = c2 || EMPTY_ARR;
	      const oldLength = c1.length;
	      const newLength = c2.length;
	      const commonLength = Math.min(oldLength, newLength);
	      let i2;
	      for (i2 = 0; i2 < commonLength; i2++) {
	        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
	        patch(
	          c1[i2],
	          nextChild,
	          container,
	          null,
	          parentComponent,
	          parentSuspense,
	          namespace,
	          slotScopeIds,
	          optimized
	        );
	      }
	      if (oldLength > newLength) {
	        unmountChildren(
	          c1,
	          parentComponent,
	          parentSuspense,
	          true,
	          false,
	          commonLength
	        );
	      } else {
	        mountChildren(
	          c2,
	          container,
	          anchor,
	          parentComponent,
	          parentSuspense,
	          namespace,
	          slotScopeIds,
	          optimized,
	          commonLength
	        );
	      }
	    };
	    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
	      let i2 = 0;
	      const l2 = c2.length;
	      let e1 = c1.length - 1;
	      let e2 = l2 - 1;
	      while (i2 <= e1 && i2 <= e2) {
	        const n1 = c1[i2];
	        const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
	        if (isSameVNodeType(n1, n2)) {
	          patch(
	            n1,
	            n2,
	            container,
	            null,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            slotScopeIds,
	            optimized
	          );
	        } else {
	          break;
	        }
	        i2++;
	      }
	      while (i2 <= e1 && i2 <= e2) {
	        const n1 = c1[e1];
	        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
	        if (isSameVNodeType(n1, n2)) {
	          patch(
	            n1,
	            n2,
	            container,
	            null,
	            parentComponent,
	            parentSuspense,
	            namespace,
	            slotScopeIds,
	            optimized
	          );
	        } else {
	          break;
	        }
	        e1--;
	        e2--;
	      }
	      if (i2 > e1) {
	        if (i2 <= e2) {
	          const nextPos = e2 + 1;
	          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
	          while (i2 <= e2) {
	            patch(
	              null,
	              c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]),
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized
	            );
	            i2++;
	          }
	        }
	      } else if (i2 > e2) {
	        while (i2 <= e1) {
	          unmount(c1[i2], parentComponent, parentSuspense, true);
	          i2++;
	        }
	      } else {
	        const s1 = i2;
	        const s2 = i2;
	        const keyToNewIndexMap = /* @__PURE__ */ new Map();
	        for (i2 = s2; i2 <= e2; i2++) {
	          const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
	          if (nextChild.key != null) {
	            keyToNewIndexMap.set(nextChild.key, i2);
	          }
	        }
	        let j2;
	        let patched = 0;
	        const toBePatched = e2 - s2 + 1;
	        let moved = false;
	        let maxNewIndexSoFar = 0;
	        const newIndexToOldIndexMap = new Array(toBePatched);
	        for (i2 = 0; i2 < toBePatched; i2++) newIndexToOldIndexMap[i2] = 0;
	        for (i2 = s1; i2 <= e1; i2++) {
	          const prevChild = c1[i2];
	          if (patched >= toBePatched) {
	            unmount(prevChild, parentComponent, parentSuspense, true);
	            continue;
	          }
	          let newIndex;
	          if (prevChild.key != null) {
	            newIndex = keyToNewIndexMap.get(prevChild.key);
	          } else {
	            for (j2 = s2; j2 <= e2; j2++) {
	              if (newIndexToOldIndexMap[j2 - s2] === 0 && isSameVNodeType(prevChild, c2[j2])) {
	                newIndex = j2;
	                break;
	              }
	            }
	          }
	          if (newIndex === void 0) {
	            unmount(prevChild, parentComponent, parentSuspense, true);
	          } else {
	            newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
	            if (newIndex >= maxNewIndexSoFar) {
	              maxNewIndexSoFar = newIndex;
	            } else {
	              moved = true;
	            }
	            patch(
	              prevChild,
	              c2[newIndex],
	              container,
	              null,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized
	            );
	            patched++;
	          }
	        }
	        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
	        j2 = increasingNewIndexSequence.length - 1;
	        for (i2 = toBePatched - 1; i2 >= 0; i2--) {
	          const nextIndex = s2 + i2;
	          const nextChild = c2[nextIndex];
	          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
	          if (newIndexToOldIndexMap[i2] === 0) {
	            patch(
	              null,
	              nextChild,
	              container,
	              anchor,
	              parentComponent,
	              parentSuspense,
	              namespace,
	              slotScopeIds,
	              optimized
	            );
	          } else if (moved) {
	            if (j2 < 0 || i2 !== increasingNewIndexSequence[j2]) {
	              move(nextChild, container, anchor, 2);
	            } else {
	              j2--;
	            }
	          }
	        }
	      }
	    };
	    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
	      const { el, type, transition, children, shapeFlag } = vnode;
	      if (shapeFlag & 6) {
	        move(vnode.component.subTree, container, anchor, moveType);
	        return;
	      }
	      if (shapeFlag & 128) {
	        vnode.suspense.move(container, anchor, moveType);
	        return;
	      }
	      if (shapeFlag & 64) {
	        type.move(vnode, container, anchor, internals);
	        return;
	      }
	      if (type === Fragment) {
	        hostInsert(el, container, anchor);
	        for (let i2 = 0; i2 < children.length; i2++) {
	          move(children[i2], container, anchor, moveType);
	        }
	        hostInsert(vnode.anchor, container, anchor);
	        return;
	      }
	      if (type === Static) {
	        moveStaticNode(vnode, container, anchor);
	        return;
	      }
	      const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
	      if (needTransition2) {
	        if (moveType === 0) {
	          transition.beforeEnter(el);
	          hostInsert(el, container, anchor);
	          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
	        } else {
	          const { leave, delayLeave, afterLeave } = transition;
	          const remove22 = () => hostInsert(el, container, anchor);
	          const performLeave = () => {
	            leave(el, () => {
	              remove22();
	              afterLeave && afterLeave();
	            });
	          };
	          if (delayLeave) {
	            delayLeave(el, remove22, performLeave);
	          } else {
	            performLeave();
	          }
	        }
	      } else {
	        hostInsert(el, container, anchor);
	      }
	    };
	    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
	      const {
	        type,
	        props,
	        ref: ref3,
	        children,
	        dynamicChildren,
	        shapeFlag,
	        patchFlag,
	        dirs,
	        cacheIndex
	      } = vnode;
	      if (patchFlag === -2) {
	        optimized = false;
	      }
	      if (ref3 != null) {
	        setRef(ref3, null, parentSuspense, vnode, true);
	      }
	      if (cacheIndex != null) {
	        parentComponent.renderCache[cacheIndex] = void 0;
	      }
	      if (shapeFlag & 256) {
	        parentComponent.ctx.deactivate(vnode);
	        return;
	      }
	      const shouldInvokeDirs = shapeFlag & 1 && dirs;
	      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
	      let vnodeHook;
	      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
	        invokeVNodeHook(vnodeHook, parentComponent, vnode);
	      }
	      if (shapeFlag & 6) {
	        unmountComponent(vnode.component, parentSuspense, doRemove);
	      } else {
	        if (shapeFlag & 128) {
	          vnode.suspense.unmount(parentSuspense, doRemove);
	          return;
	        }
	        if (shouldInvokeDirs) {
	          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
	        }
	        if (shapeFlag & 64) {
	          vnode.type.remove(
	            vnode,
	            parentComponent,
	            parentSuspense,
	            internals,
	            doRemove
	          );
	        } else if (dynamicChildren && // #5154
	        // when v-once is used inside a block, setBlockTracking(-1) marks the
	        // parent block with hasOnce: true
	        // so that it doesn't take the fast path during unmount - otherwise
	        // components nested in v-once are never unmounted.
	        !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
	        (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
	          unmountChildren(
	            dynamicChildren,
	            parentComponent,
	            parentSuspense,
	            false,
	            true
	          );
	        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
	          unmountChildren(children, parentComponent, parentSuspense);
	        }
	        if (doRemove) {
	          remove2(vnode);
	        }
	      }
	      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
	        queuePostRenderEffect(() => {
	          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
	          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
	        }, parentSuspense);
	      }
	    };
	    const remove2 = (vnode) => {
	      const { type, el, anchor, transition } = vnode;
	      if (type === Fragment) {
	        {
	          removeFragment(el, anchor);
	        }
	        return;
	      }
	      if (type === Static) {
	        removeStaticNode(vnode);
	        return;
	      }
	      const performRemove = () => {
	        hostRemove(el);
	        if (transition && !transition.persisted && transition.afterLeave) {
	          transition.afterLeave();
	        }
	      };
	      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
	        const { leave, delayLeave } = transition;
	        const performLeave = () => leave(el, performRemove);
	        if (delayLeave) {
	          delayLeave(vnode.el, performRemove, performLeave);
	        } else {
	          performLeave();
	        }
	      } else {
	        performRemove();
	      }
	    };
	    const removeFragment = (cur, end) => {
	      let next;
	      while (cur !== end) {
	        next = hostNextSibling(cur);
	        hostRemove(cur);
	        cur = next;
	      }
	      hostRemove(end);
	    };
	    const unmountComponent = (instance, parentSuspense, doRemove) => {
	      const { bum, scope, update, subTree, um, m: m2, a } = instance;
	      invalidateMount(m2);
	      invalidateMount(a);
	      if (bum) {
	        invokeArrayFns(bum);
	      }
	      scope.stop();
	      if (update) {
	        update.active = false;
	        unmount(subTree, instance, parentSuspense, doRemove);
	      }
	      if (um) {
	        queuePostRenderEffect(um, parentSuspense);
	      }
	      queuePostRenderEffect(() => {
	        instance.isUnmounted = true;
	      }, parentSuspense);
	      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
	        parentSuspense.deps--;
	        if (parentSuspense.deps === 0) {
	          parentSuspense.resolve();
	        }
	      }
	    };
	    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
	      for (let i2 = start; i2 < children.length; i2++) {
	        unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
	      }
	    };
	    const getNextHostNode = (vnode) => {
	      if (vnode.shapeFlag & 6) {
	        return getNextHostNode(vnode.component.subTree);
	      }
	      if (vnode.shapeFlag & 128) {
	        return vnode.suspense.next();
	      }
	      const el = hostNextSibling(vnode.anchor || vnode.el);
	      const teleportEnd = el && el[TeleportEndKey];
	      return teleportEnd ? hostNextSibling(teleportEnd) : el;
	    };
	    let isFlushing2 = false;
	    const render = (vnode, container, namespace) => {
	      if (vnode == null) {
	        if (container._vnode) {
	          unmount(container._vnode, null, null, true);
	        }
	      } else {
	        patch(
	          container._vnode || null,
	          vnode,
	          container,
	          null,
	          null,
	          null,
	          namespace
	        );
	      }
	      if (!isFlushing2) {
	        isFlushing2 = true;
	        flushPreFlushCbs();
	        flushPostFlushCbs();
	        isFlushing2 = false;
	      }
	      container._vnode = vnode;
	    };
	    const internals = {
	      p: patch,
	      um: unmount,
	      m: move,
	      r: remove2,
	      mt: mountComponent,
	      mc: mountChildren,
	      pc: patchChildren,
	      pbc: patchBlockChildren,
	      n: getNextHostNode,
	      o: options
	    };
	    let hydrate;
	    let hydrateNode;
	    return {
	      render,
	      hydrate,
	      createApp: createAppAPI(render, hydrate)
	    };
	  }
	  function resolveChildrenNamespace({ type, props }, currentNamespace) {
	    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
	  }
	  function toggleRecurse({ effect: effect2, update }, allowed) {
	    effect2.allowRecurse = update.allowRecurse = allowed;
	  }
	  function needTransition(parentSuspense, transition) {
	    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
	  }
	  function traverseStaticChildren(n1, n2, shallow = false) {
	    const ch1 = n1.children;
	    const ch2 = n2.children;
	    if (isArray(ch1) && isArray(ch2)) {
	      for (let i2 = 0; i2 < ch1.length; i2++) {
	        const c1 = ch1[i2];
	        let c2 = ch2[i2];
	        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
	          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
	            c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
	            c2.el = c1.el;
	          }
	          if (!shallow && c2.patchFlag !== -2)
	            traverseStaticChildren(c1, c2);
	        }
	        if (c2.type === Text) {
	          c2.el = c1.el;
	        }
	      }
	    }
	  }
	  function getSequence(arr) {
	    const p2 = arr.slice();
	    const result = [0];
	    let i2, j2, u, v2, c;
	    const len = arr.length;
	    for (i2 = 0; i2 < len; i2++) {
	      const arrI = arr[i2];
	      if (arrI !== 0) {
	        j2 = result[result.length - 1];
	        if (arr[j2] < arrI) {
	          p2[i2] = j2;
	          result.push(i2);
	          continue;
	        }
	        u = 0;
	        v2 = result.length - 1;
	        while (u < v2) {
	          c = u + v2 >> 1;
	          if (arr[result[c]] < arrI) {
	            u = c + 1;
	          } else {
	            v2 = c;
	          }
	        }
	        if (arrI < arr[result[u]]) {
	          if (u > 0) {
	            p2[i2] = result[u - 1];
	          }
	          result[u] = i2;
	        }
	      }
	    }
	    u = result.length;
	    v2 = result[u - 1];
	    while (u-- > 0) {
	      result[u] = v2;
	      v2 = p2[v2];
	    }
	    return result;
	  }
	  function locateNonHydratedAsyncRoot(instance) {
	    const subComponent = instance.subTree.component;
	    if (subComponent) {
	      if (subComponent.asyncDep && !subComponent.asyncResolved) {
	        return subComponent;
	      } else {
	        return locateNonHydratedAsyncRoot(subComponent);
	      }
	    }
	  }
	  function invalidateMount(hooks) {
	    if (hooks) {
	      for (let i2 = 0; i2 < hooks.length; i2++) hooks[i2].active = false;
	    }
	  }
	  const ssrContextKey = Symbol.for("v-scx");
	  const useSSRContext = () => {
	    {
	      const ctx = inject(ssrContextKey);
	      return ctx;
	    }
	  };
	  const INITIAL_WATCHER_VALUE = {};
	  function watch(source, cb, options) {
	    return doWatch(source, cb, options);
	  }
	  function doWatch(source, cb, {
	    immediate,
	    deep,
	    flush,
	    once,
	    onTrack,
	    onTrigger
	  } = EMPTY_OBJ) {
	    if (cb && once) {
	      const _cb = cb;
	      cb = (...args) => {
	        _cb(...args);
	        unwatch();
	      };
	    }
	    const instance = currentInstance;
	    const reactiveGetter = (source2) => deep === true ? source2 : (
	      // for deep: false, only traverse root-level properties
	      traverse(source2, deep === false ? 1 : void 0)
	    );
	    let getter;
	    let forceTrigger = false;
	    let isMultiSource = false;
	    if (isRef(source)) {
	      getter = () => source.value;
	      forceTrigger = isShallow(source);
	    } else if (isReactive(source)) {
	      getter = () => reactiveGetter(source);
	      forceTrigger = true;
	    } else if (isArray(source)) {
	      isMultiSource = true;
	      forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
	      getter = () => source.map((s) => {
	        if (isRef(s)) {
	          return s.value;
	        } else if (isReactive(s)) {
	          return reactiveGetter(s);
	        } else if (isFunction(s)) {
	          return callWithErrorHandling(s, instance, 2);
	        } else ;
	      });
	    } else if (isFunction(source)) {
	      if (cb) {
	        getter = () => callWithErrorHandling(source, instance, 2);
	      } else {
	        getter = () => {
	          if (cleanup) {
	            cleanup();
	          }
	          return callWithAsyncErrorHandling(
	            source,
	            instance,
	            3,
	            [onCleanup]
	          );
	        };
	      }
	    } else {
	      getter = NOOP;
	    }
	    if (cb && deep) {
	      const baseGetter = getter;
	      getter = () => traverse(baseGetter());
	    }
	    let cleanup;
	    let onCleanup = (fn) => {
	      cleanup = effect2.onStop = () => {
	        callWithErrorHandling(fn, instance, 4);
	        cleanup = effect2.onStop = void 0;
	      };
	    };
	    let ssrCleanup;
	    if (isInSSRComponentSetup) {
	      onCleanup = NOOP;
	      if (!cb) {
	        getter();
	      } else if (immediate) {
	        callWithAsyncErrorHandling(cb, instance, 3, [
	          getter(),
	          isMultiSource ? [] : void 0,
	          onCleanup
	        ]);
	      }
	      if (flush === "sync") {
	        const ctx = useSSRContext();
	        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
	      } else {
	        return NOOP;
	      }
	    }
	    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
	    const job = () => {
	      if (!effect2.active || !effect2.dirty) {
	        return;
	      }
	      if (cb) {
	        const newValue = effect2.run();
	        if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
	          if (cleanup) {
	            cleanup();
	          }
	          callWithAsyncErrorHandling(cb, instance, 3, [
	            newValue,
	            // pass undefined as the old value when it's changed for the first time
	            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
	            onCleanup
	          ]);
	          oldValue = newValue;
	        }
	      } else {
	        effect2.run();
	      }
	    };
	    job.allowRecurse = !!cb;
	    let scheduler;
	    if (flush === "sync") {
	      scheduler = job;
	    } else if (flush === "post") {
	      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
	    } else {
	      job.pre = true;
	      if (instance) job.id = instance.uid;
	      scheduler = () => queueJob(job);
	    }
	    const effect2 = new ReactiveEffect(getter, NOOP, scheduler);
	    const scope = getCurrentScope();
	    const unwatch = () => {
	      effect2.stop();
	      if (scope) {
	        remove(scope.effects, effect2);
	      }
	    };
	    if (cb) {
	      if (immediate) {
	        job();
	      } else {
	        oldValue = effect2.run();
	      }
	    } else if (flush === "post") {
	      queuePostRenderEffect(
	        effect2.run.bind(effect2),
	        instance && instance.suspense
	      );
	    } else {
	      effect2.run();
	    }
	    if (ssrCleanup) ssrCleanup.push(unwatch);
	    return unwatch;
	  }
	  function instanceWatch(source, value, options) {
	    const publicThis = this.proxy;
	    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
	    let cb;
	    if (isFunction(value)) {
	      cb = value;
	    } else {
	      cb = value.handler;
	      options = value;
	    }
	    const reset = setCurrentInstance(this);
	    const res = doWatch(getter, cb.bind(publicThis), options);
	    reset();
	    return res;
	  }
	  function createPathGetter(ctx, path) {
	    const segments = path.split(".");
	    return () => {
	      let cur = ctx;
	      for (let i2 = 0; i2 < segments.length && cur; i2++) {
	        cur = cur[segments[i2]];
	      }
	      return cur;
	    };
	  }
	  function traverse(value, depth = Infinity, seen) {
	    if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
	      return value;
	    }
	    seen = seen || /* @__PURE__ */ new Set();
	    if (seen.has(value)) {
	      return value;
	    }
	    seen.add(value);
	    depth--;
	    if (isRef(value)) {
	      traverse(value.value, depth, seen);
	    } else if (isArray(value)) {
	      for (let i2 = 0; i2 < value.length; i2++) {
	        traverse(value[i2], depth, seen);
	      }
	    } else if (isSet(value) || isMap(value)) {
	      value.forEach((v2) => {
	        traverse(v2, depth, seen);
	      });
	    } else if (isPlainObject(value)) {
	      for (const key in value) {
	        traverse(value[key], depth, seen);
	      }
	      for (const key of Object.getOwnPropertySymbols(value)) {
	        if (Object.prototype.propertyIsEnumerable.call(value, key)) {
	          traverse(value[key], depth, seen);
	        }
	      }
	    }
	    return value;
	  }
	  const getModelModifiers = (props, modelName) => {
	    return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
	  };
	  function emit(instance, event, ...rawArgs) {
	    if (instance.isUnmounted) return;
	    const props = instance.vnode.props || EMPTY_OBJ;
	    let args = rawArgs;
	    const isModelListener2 = event.startsWith("update:");
	    const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
	    if (modifiers) {
	      if (modifiers.trim) {
	        args = rawArgs.map((a) => isString(a) ? a.trim() : a);
	      }
	      if (modifiers.number) {
	        args = rawArgs.map(looseToNumber);
	      }
	    }
	    let handlerName;
	    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
	    props[handlerName = toHandlerKey(camelize(event))];
	    if (!handler && isModelListener2) {
	      handler = props[handlerName = toHandlerKey(hyphenate(event))];
	    }
	    if (handler) {
	      callWithAsyncErrorHandling(
	        handler,
	        instance,
	        6,
	        args
	      );
	    }
	    const onceHandler = props[handlerName + `Once`];
	    if (onceHandler) {
	      if (!instance.emitted) {
	        instance.emitted = {};
	      } else if (instance.emitted[handlerName]) {
	        return;
	      }
	      instance.emitted[handlerName] = true;
	      callWithAsyncErrorHandling(
	        onceHandler,
	        instance,
	        6,
	        args
	      );
	    }
	  }
	  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
	    const cache = appContext.emitsCache;
	    const cached = cache.get(comp);
	    if (cached !== void 0) {
	      return cached;
	    }
	    const raw = comp.emits;
	    let normalized = {};
	    let hasExtends = false;
	    if (!isFunction(comp)) {
	      const extendEmits = (raw2) => {
	        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
	        if (normalizedFromExtend) {
	          hasExtends = true;
	          extend(normalized, normalizedFromExtend);
	        }
	      };
	      if (!asMixin && appContext.mixins.length) {
	        appContext.mixins.forEach(extendEmits);
	      }
	      if (comp.extends) {
	        extendEmits(comp.extends);
	      }
	      if (comp.mixins) {
	        comp.mixins.forEach(extendEmits);
	      }
	    }
	    if (!raw && !hasExtends) {
	      if (isObject(comp)) {
	        cache.set(comp, null);
	      }
	      return null;
	    }
	    if (isArray(raw)) {
	      raw.forEach((key) => normalized[key] = null);
	    } else {
	      extend(normalized, raw);
	    }
	    if (isObject(comp)) {
	      cache.set(comp, normalized);
	    }
	    return normalized;
	  }
	  function isEmitListener(options, key) {
	    if (!options || !isOn(key)) {
	      return false;
	    }
	    key = key.slice(2).replace(/Once$/, "");
	    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
	  }
	  function markAttrsAccessed() {
	  }
	  function renderComponentRoot(instance) {
	    const {
	      type: Component,
	      vnode,
	      proxy,
	      withProxy,
	      propsOptions: [propsOptions],
	      slots,
	      attrs,
	      emit: emit2,
	      render,
	      renderCache,
	      props,
	      data,
	      setupState,
	      ctx,
	      inheritAttrs
	    } = instance;
	    const prev = setCurrentRenderingInstance(instance);
	    let result;
	    let fallthroughAttrs;
	    try {
	      if (vnode.shapeFlag & 4) {
	        const proxyToUse = withProxy || proxy;
	        const thisProxy = false ? new Proxy(proxyToUse, {
	          get(target, key, receiver) {
	            warn$1(
	              `Property '${String(
                key
              )}' was accessed via 'this'. Avoid using 'this' in templates.`
	            );
	            return Reflect.get(target, key, receiver);
	          }
	        }) : proxyToUse;
	        result = normalizeVNode(
	          render.call(
	            thisProxy,
	            proxyToUse,
	            renderCache,
	            false ? shallowReadonly(props) : props,
	            setupState,
	            data,
	            ctx
	          )
	        );
	        fallthroughAttrs = attrs;
	      } else {
	        const render2 = Component;
	        if (false) ;
	        result = normalizeVNode(
	          render2.length > 1 ? render2(
	            false ? shallowReadonly(props) : props,
	            false ? {
	              get attrs() {
	                markAttrsAccessed();
	                return shallowReadonly(attrs);
	              },
	              slots,
	              emit: emit2
	            } : { attrs, slots, emit: emit2 }
	          ) : render2(
	            false ? shallowReadonly(props) : props,
	            null
	          )
	        );
	        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
	      }
	    } catch (err) {
	      blockStack.length = 0;
	      handleError(err, instance, 1);
	      result = createVNode(Comment);
	    }
	    let root = result;
	    if (fallthroughAttrs && inheritAttrs !== false) {
	      const keys = Object.keys(fallthroughAttrs);
	      const { shapeFlag } = root;
	      if (keys.length) {
	        if (shapeFlag & (1 | 6)) {
	          if (propsOptions && keys.some(isModelListener)) {
	            fallthroughAttrs = filterModelListeners(
	              fallthroughAttrs,
	              propsOptions
	            );
	          }
	          root = cloneVNode(root, fallthroughAttrs, false, true);
	        }
	      }
	    }
	    if (vnode.dirs) {
	      root = cloneVNode(root, null, false, true);
	      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	    }
	    if (vnode.transition) {
	      root.transition = vnode.transition;
	    }
	    {
	      result = root;
	    }
	    setCurrentRenderingInstance(prev);
	    return result;
	  }
	  const getFunctionalFallthrough = (attrs) => {
	    let res;
	    for (const key in attrs) {
	      if (key === "class" || key === "style" || isOn(key)) {
	        (res || (res = {}))[key] = attrs[key];
	      }
	    }
	    return res;
	  };
	  const filterModelListeners = (attrs, props) => {
	    const res = {};
	    for (const key in attrs) {
	      if (!isModelListener(key) || !(key.slice(9) in props)) {
	        res[key] = attrs[key];
	      }
	    }
	    return res;
	  };
	  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	    const { props: prevProps, children: prevChildren, component } = prevVNode;
	    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
	    const emits = component.emitsOptions;
	    if (nextVNode.dirs || nextVNode.transition) {
	      return true;
	    }
	    if (optimized && patchFlag >= 0) {
	      if (patchFlag & 1024) {
	        return true;
	      }
	      if (patchFlag & 16) {
	        if (!prevProps) {
	          return !!nextProps;
	        }
	        return hasPropsChanged(prevProps, nextProps, emits);
	      } else if (patchFlag & 8) {
	        const dynamicProps = nextVNode.dynamicProps;
	        for (let i2 = 0; i2 < dynamicProps.length; i2++) {
	          const key = dynamicProps[i2];
	          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
	            return true;
	          }
	        }
	      }
	    } else {
	      if (prevChildren || nextChildren) {
	        if (!nextChildren || !nextChildren.$stable) {
	          return true;
	        }
	      }
	      if (prevProps === nextProps) {
	        return false;
	      }
	      if (!prevProps) {
	        return !!nextProps;
	      }
	      if (!nextProps) {
	        return true;
	      }
	      return hasPropsChanged(prevProps, nextProps, emits);
	    }
	    return false;
	  }
	  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	    const nextKeys = Object.keys(nextProps);
	    if (nextKeys.length !== Object.keys(prevProps).length) {
	      return true;
	    }
	    for (let i2 = 0; i2 < nextKeys.length; i2++) {
	      const key = nextKeys[i2];
	      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
	        return true;
	      }
	    }
	    return false;
	  }
	  function updateHOCHostEl({ vnode, parent }, el) {
	    while (parent) {
	      const root = parent.subTree;
	      if (root.suspense && root.suspense.activeBranch === vnode) {
	        root.el = vnode.el;
	      }
	      if (root === vnode) {
	        (vnode = parent.vnode).el = el;
	        parent = parent.parent;
	      } else {
	        break;
	      }
	    }
	  }
	  const isSuspense = (type) => type.__isSuspense;
	  function queueEffectWithSuspense(fn, suspense) {
	    if (suspense && suspense.pendingBranch) {
	      if (isArray(fn)) {
	        suspense.effects.push(...fn);
	      } else {
	        suspense.effects.push(fn);
	      }
	    } else {
	      queuePostFlushCb(fn);
	    }
	  }
	  const Fragment = Symbol.for("v-fgt");
	  const Text = Symbol.for("v-txt");
	  const Comment = Symbol.for("v-cmt");
	  const Static = Symbol.for("v-stc");
	  const blockStack = [];
	  let currentBlock = null;
	  function openBlock(disableTracking = false) {
	    blockStack.push(currentBlock = disableTracking ? null : []);
	  }
	  function closeBlock() {
	    blockStack.pop();
	    currentBlock = blockStack[blockStack.length - 1] || null;
	  }
	  let isBlockTreeEnabled = 1;
	  function setBlockTracking(value) {
	    isBlockTreeEnabled += value;
	    if (value < 0 && currentBlock) {
	      currentBlock.hasOnce = true;
	    }
	  }
	  function setupBlock(vnode) {
	    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
	    closeBlock();
	    if (isBlockTreeEnabled > 0 && currentBlock) {
	      currentBlock.push(vnode);
	    }
	    return vnode;
	  }
	  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
	    return setupBlock(
	      createBaseVNode(
	        type,
	        props,
	        children,
	        patchFlag,
	        dynamicProps,
	        shapeFlag,
	        true
	      )
	    );
	  }
	  function createBlock(type, props, children, patchFlag, dynamicProps) {
	    return setupBlock(
	      createVNode(
	        type,
	        props,
	        children,
	        patchFlag,
	        dynamicProps,
	        true
	      )
	    );
	  }
	  function isVNode(value) {
	    return value ? value.__v_isVNode === true : false;
	  }
	  function isSameVNodeType(n1, n2) {
	    return n1.type === n2.type && n1.key === n2.key;
	  }
	  const normalizeKey = ({ key }) => key != null ? key : null;
	  const normalizeRef = ({
	    ref: ref3,
	    ref_key,
	    ref_for
	  }) => {
	    if (typeof ref3 === "number") {
	      ref3 = "" + ref3;
	    }
	    return ref3 != null ? isString(ref3) || isRef(ref3) || isFunction(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
	  };
	  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
	    const vnode = {
	      __v_isVNode: true,
	      __v_skip: true,
	      type,
	      props,
	      key: props && normalizeKey(props),
	      ref: props && normalizeRef(props),
	      scopeId: currentScopeId,
	      slotScopeIds: null,
	      children,
	      component: null,
	      suspense: null,
	      ssContent: null,
	      ssFallback: null,
	      dirs: null,
	      transition: null,
	      el: null,
	      anchor: null,
	      target: null,
	      targetStart: null,
	      targetAnchor: null,
	      staticCount: 0,
	      shapeFlag,
	      patchFlag,
	      dynamicProps,
	      dynamicChildren: null,
	      appContext: null,
	      ctx: currentRenderingInstance
	    };
	    if (needFullChildrenNormalization) {
	      normalizeChildren(vnode, children);
	      if (shapeFlag & 128) {
	        type.normalize(vnode);
	      }
	    } else if (children) {
	      vnode.shapeFlag |= isString(children) ? 8 : 16;
	    }
	    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
	    !isBlockNode && // has current parent block
	    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
	    // component nodes also should always be patched, because even if the
	    // component doesn't need to update, it needs to persist the instance on to
	    // the next vnode so that it can be properly unmounted later.
	    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
	    // vnode should not be considered dynamic due to handler caching.
	    vnode.patchFlag !== 32) {
	      currentBlock.push(vnode);
	    }
	    return vnode;
	  }
	  const createVNode = _createVNode;
	  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
	    if (!type || type === NULL_DYNAMIC_COMPONENT) {
	      type = Comment;
	    }
	    if (isVNode(type)) {
	      const cloned = cloneVNode(
	        type,
	        props,
	        true
	        /* mergeRef: true */
	      );
	      if (children) {
	        normalizeChildren(cloned, children);
	      }
	      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
	        if (cloned.shapeFlag & 6) {
	          currentBlock[currentBlock.indexOf(type)] = cloned;
	        } else {
	          currentBlock.push(cloned);
	        }
	      }
	      cloned.patchFlag = -2;
	      return cloned;
	    }
	    if (isClassComponent(type)) {
	      type = type.__vccOpts;
	    }
	    if (props) {
	      props = guardReactiveProps(props);
	      let { class: klass, style } = props;
	      if (klass && !isString(klass)) {
	        props.class = normalizeClass(klass);
	      }
	      if (isObject(style)) {
	        if (isProxy(style) && !isArray(style)) {
	          style = extend({}, style);
	        }
	        props.style = normalizeStyle(style);
	      }
	    }
	    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
	    return createBaseVNode(
	      type,
	      props,
	      children,
	      patchFlag,
	      dynamicProps,
	      shapeFlag,
	      isBlockNode,
	      true
	    );
	  }
	  function guardReactiveProps(props) {
	    if (!props) return null;
	    return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
	  }
	  function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
	    const { props, ref: ref3, patchFlag, children, transition } = vnode;
	    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	    const cloned = {
	      __v_isVNode: true,
	      __v_skip: true,
	      type: vnode.type,
	      props: mergedProps,
	      key: mergedProps && normalizeKey(mergedProps),
	      ref: extraProps && extraProps.ref ? (
	        // #2078 in the case of <component :is="vnode" ref="extra"/>
	        // if the vnode itself already has a ref, cloneVNode will need to merge
	        // the refs so the single vnode can be set on multiple refs
	        mergeRef && ref3 ? isArray(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
	      ) : ref3,
	      scopeId: vnode.scopeId,
	      slotScopeIds: vnode.slotScopeIds,
	      children,
	      target: vnode.target,
	      targetStart: vnode.targetStart,
	      targetAnchor: vnode.targetAnchor,
	      staticCount: vnode.staticCount,
	      shapeFlag: vnode.shapeFlag,
	      // if the vnode is cloned with extra props, we can no longer assume its
	      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
	      // note: preserve flag for fragments since they use the flag for children
	      // fast paths only.
	      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
	      dynamicProps: vnode.dynamicProps,
	      dynamicChildren: vnode.dynamicChildren,
	      appContext: vnode.appContext,
	      dirs: vnode.dirs,
	      transition,
	      // These should technically only be non-null on mounted VNodes. However,
	      // they *should* be copied for kept-alive vnodes. So we just always copy
	      // them since them being non-null during a mount doesn't affect the logic as
	      // they will simply be overwritten.
	      component: vnode.component,
	      suspense: vnode.suspense,
	      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
	      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
	      el: vnode.el,
	      anchor: vnode.anchor,
	      ctx: vnode.ctx,
	      ce: vnode.ce
	    };
	    if (transition && cloneTransition) {
	      setTransitionHooks(
	        cloned,
	        transition.clone(cloned)
	      );
	    }
	    return cloned;
	  }
	  function createTextVNode(text = " ", flag = 0) {
	    return createVNode(Text, null, text, flag);
	  }
	  function createStaticVNode(content, numberOfNodes) {
	    const vnode = createVNode(Static, null, content);
	    vnode.staticCount = numberOfNodes;
	    return vnode;
	  }
	  function createCommentVNode(text = "", asBlock = false) {
	    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
	  }
	  function normalizeVNode(child) {
	    if (child == null || typeof child === "boolean") {
	      return createVNode(Comment);
	    } else if (isArray(child)) {
	      return createVNode(
	        Fragment,
	        null,
	        // #3666, avoid reference pollution when reusing vnode
	        child.slice()
	      );
	    } else if (typeof child === "object") {
	      return cloneIfMounted(child);
	    } else {
	      return createVNode(Text, null, String(child));
	    }
	  }
	  function cloneIfMounted(child) {
	    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
	  }
	  function normalizeChildren(vnode, children) {
	    let type = 0;
	    const { shapeFlag } = vnode;
	    if (children == null) {
	      children = null;
	    } else if (isArray(children)) {
	      type = 16;
	    } else if (typeof children === "object") {
	      if (shapeFlag & (1 | 64)) {
	        const slot = children.default;
	        if (slot) {
	          slot._c && (slot._d = false);
	          normalizeChildren(vnode, slot());
	          slot._c && (slot._d = true);
	        }
	        return;
	      } else {
	        type = 32;
	        const slotFlag = children._;
	        if (!slotFlag && !isInternalObject(children)) {
	          children._ctx = currentRenderingInstance;
	        } else if (slotFlag === 3 && currentRenderingInstance) {
	          if (currentRenderingInstance.slots._ === 1) {
	            children._ = 1;
	          } else {
	            children._ = 2;
	            vnode.patchFlag |= 1024;
	          }
	        }
	      }
	    } else if (isFunction(children)) {
	      children = { default: children, _ctx: currentRenderingInstance };
	      type = 32;
	    } else {
	      children = String(children);
	      if (shapeFlag & 64) {
	        type = 16;
	        children = [createTextVNode(children)];
	      } else {
	        type = 8;
	      }
	    }
	    vnode.children = children;
	    vnode.shapeFlag |= type;
	  }
	  function mergeProps(...args) {
	    const ret = {};
	    for (let i2 = 0; i2 < args.length; i2++) {
	      const toMerge = args[i2];
	      for (const key in toMerge) {
	        if (key === "class") {
	          if (ret.class !== toMerge.class) {
	            ret.class = normalizeClass([ret.class, toMerge.class]);
	          }
	        } else if (key === "style") {
	          ret.style = normalizeStyle([ret.style, toMerge.style]);
	        } else if (isOn(key)) {
	          const existing = ret[key];
	          const incoming = toMerge[key];
	          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
	            ret[key] = existing ? [].concat(existing, incoming) : incoming;
	          }
	        } else if (key !== "") {
	          ret[key] = toMerge[key];
	        }
	      }
	    }
	    return ret;
	  }
	  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
	    callWithAsyncErrorHandling(hook, instance, 7, [
	      vnode,
	      prevVNode
	    ]);
	  }
	  const emptyAppContext = createAppContext();
	  let uid = 0;
	  function createComponentInstance(vnode, parent, suspense) {
	    const type = vnode.type;
	    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	    const instance = {
	      uid: uid++,
	      vnode,
	      type,
	      parent,
	      appContext,
	      root: null,
	      // to be immediately set
	      next: null,
	      subTree: null,
	      // will be set synchronously right after creation
	      effect: null,
	      update: null,
	      // will be set synchronously right after creation
	      scope: new EffectScope(
	        true
	        /* detached */
	      ),
	      render: null,
	      proxy: null,
	      exposed: null,
	      exposeProxy: null,
	      withProxy: null,
	      provides: parent ? parent.provides : Object.create(appContext.provides),
	      accessCache: null,
	      renderCache: [],
	      // local resolved assets
	      components: null,
	      directives: null,
	      // resolved props and emits options
	      propsOptions: normalizePropsOptions(type, appContext),
	      emitsOptions: normalizeEmitsOptions(type, appContext),
	      // emit
	      emit: null,
	      // to be set immediately
	      emitted: null,
	      // props default value
	      propsDefaults: EMPTY_OBJ,
	      // inheritAttrs
	      inheritAttrs: type.inheritAttrs,
	      // state
	      ctx: EMPTY_OBJ,
	      data: EMPTY_OBJ,
	      props: EMPTY_OBJ,
	      attrs: EMPTY_OBJ,
	      slots: EMPTY_OBJ,
	      refs: EMPTY_OBJ,
	      setupState: EMPTY_OBJ,
	      setupContext: null,
	      // suspense related
	      suspense,
	      suspenseId: suspense ? suspense.pendingId : 0,
	      asyncDep: null,
	      asyncResolved: false,
	      // lifecycle hooks
	      // not using enums here because it results in computed properties
	      isMounted: false,
	      isUnmounted: false,
	      isDeactivated: false,
	      bc: null,
	      c: null,
	      bm: null,
	      m: null,
	      bu: null,
	      u: null,
	      um: null,
	      bum: null,
	      da: null,
	      a: null,
	      rtg: null,
	      rtc: null,
	      ec: null,
	      sp: null
	    };
	    {
	      instance.ctx = { _: instance };
	    }
	    instance.root = parent ? parent.root : instance;
	    instance.emit = emit.bind(null, instance);
	    if (vnode.ce) {
	      vnode.ce(instance);
	    }
	    return instance;
	  }
	  let currentInstance = null;
	  let internalSetCurrentInstance;
	  let setInSSRSetupState;
	  {
	    const g = getGlobalThis();
	    const registerGlobalSetter = (key, setter) => {
	      let setters;
	      if (!(setters = g[key])) setters = g[key] = [];
	      setters.push(setter);
	      return (v2) => {
	        if (setters.length > 1) setters.forEach((set2) => set2(v2));
	        else setters[0](v2);
	      };
	    };
	    internalSetCurrentInstance = registerGlobalSetter(
	      `__VUE_INSTANCE_SETTERS__`,
	      (v2) => currentInstance = v2
	    );
	    setInSSRSetupState = registerGlobalSetter(
	      `__VUE_SSR_SETTERS__`,
	      (v2) => isInSSRComponentSetup = v2
	    );
	  }
	  const setCurrentInstance = (instance) => {
	    const prev = currentInstance;
	    internalSetCurrentInstance(instance);
	    instance.scope.on();
	    return () => {
	      instance.scope.off();
	      internalSetCurrentInstance(prev);
	    };
	  };
	  const unsetCurrentInstance = () => {
	    currentInstance && currentInstance.scope.off();
	    internalSetCurrentInstance(null);
	  };
	  function isStatefulComponent(instance) {
	    return instance.vnode.shapeFlag & 4;
	  }
	  let isInSSRComponentSetup = false;
	  function setupComponent(instance, isSSR = false, optimized = false) {
	    isSSR && setInSSRSetupState(isSSR);
	    const { props, children } = instance.vnode;
	    const isStateful = isStatefulComponent(instance);
	    initProps(instance, props, isStateful, isSSR);
	    initSlots(instance, children, optimized);
	    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
	    isSSR && setInSSRSetupState(false);
	    return setupResult;
	  }
	  function setupStatefulComponent(instance, isSSR) {
	    const Component = instance.type;
	    instance.accessCache = /* @__PURE__ */ Object.create(null);
	    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
	    const { setup } = Component;
	    if (setup) {
	      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
	      const reset = setCurrentInstance(instance);
	      pauseTracking();
	      const setupResult = callWithErrorHandling(
	        setup,
	        instance,
	        0,
	        [
	          instance.props,
	          setupContext
	        ]
	      );
	      resetTracking();
	      reset();
	      if (isPromise(setupResult)) {
	        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
	        if (isSSR) {
	          return setupResult.then((resolvedResult) => {
	            handleSetupResult(instance, resolvedResult, isSSR);
	          }).catch((e) => {
	            handleError(e, instance, 0);
	          });
	        } else {
	          instance.asyncDep = setupResult;
	        }
	      } else {
	        handleSetupResult(instance, setupResult, isSSR);
	      }
	    } else {
	      finishComponentSetup(instance, isSSR);
	    }
	  }
	  function handleSetupResult(instance, setupResult, isSSR) {
	    if (isFunction(setupResult)) {
	      if (instance.type.__ssrInlineRender) {
	        instance.ssrRender = setupResult;
	      } else {
	        instance.render = setupResult;
	      }
	    } else if (isObject(setupResult)) {
	      instance.setupState = proxyRefs(setupResult);
	    } else ;
	    finishComponentSetup(instance, isSSR);
	  }
	  let compile;
	  function finishComponentSetup(instance, isSSR, skipOptions) {
	    const Component = instance.type;
	    if (!instance.render) {
	      if (!isSSR && compile && !Component.render) {
	        const template = Component.template || resolveMergedOptions(instance).template;
	        if (template) {
	          const { isCustomElement, compilerOptions } = instance.appContext.config;
	          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
	          const finalCompilerOptions = extend(
	            extend(
	              {
	                isCustomElement,
	                delimiters
	              },
	              compilerOptions
	            ),
	            componentCompilerOptions
	          );
	          Component.render = compile(template, finalCompilerOptions);
	        }
	      }
	      instance.render = Component.render || NOOP;
	    }
	    {
	      const reset = setCurrentInstance(instance);
	      pauseTracking();
	      try {
	        applyOptions(instance);
	      } finally {
	        resetTracking();
	        reset();
	      }
	    }
	  }
	  const attrsProxyHandlers = {
	    get(target, key) {
	      track(target, "get", "");
	      return target[key];
	    }
	  };
	  function createSetupContext(instance) {
	    const expose = (exposed) => {
	      instance.exposed = exposed || {};
	    };
	    {
	      return {
	        attrs: new Proxy(instance.attrs, attrsProxyHandlers),
	        slots: instance.slots,
	        emit: instance.emit,
	        expose
	      };
	    }
	  }
	  function getComponentPublicInstance(instance) {
	    if (instance.exposed) {
	      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
	        get(target, key) {
	          if (key in target) {
	            return target[key];
	          } else if (key in publicPropertiesMap) {
	            return publicPropertiesMap[key](instance);
	          }
	        },
	        has(target, key) {
	          return key in target || key in publicPropertiesMap;
	        }
	      }));
	    } else {
	      return instance.proxy;
	    }
	  }
	  const classifyRE = /(?:^|[-_])(\w)/g;
	  const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
	  function getComponentName(Component, includeInferred = true) {
	    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
	  }
	  function formatComponentName(instance, Component, isRoot = false) {
	    let name = getComponentName(Component);
	    if (!name && Component.__file) {
	      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
	      if (match) {
	        name = match[1];
	      }
	    }
	    if (!name && instance && instance.parent) {
	      const inferFromRegistry = (registry) => {
	        for (const key in registry) {
	          if (registry[key] === Component) {
	            return key;
	          }
	        }
	      };
	      name = inferFromRegistry(
	        instance.components || instance.parent.type.components
	      ) || inferFromRegistry(instance.appContext.components);
	    }
	    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
	  }
	  function isClassComponent(value) {
	    return isFunction(value) && "__vccOpts" in value;
	  }
	  const computed = (getterOrOptions, debugOptions) => {
	    const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
	    return c;
	  };
	  const version$1 = "3.4.35";
	  /**
	  * @vue/runtime-dom v3.4.35
	  * (c) 2018-present Yuxi (Evan) You and Vue contributors
	  * @license MIT
	  **/
	  const svgNS = "http://www.w3.org/2000/svg";
	  const mathmlNS = "http://www.w3.org/1998/Math/MathML";
	  const doc$1 = typeof document !== "undefined" ? document : null;
	  const templateContainer = doc$1 && /* @__PURE__ */ doc$1.createElement("template");
	  const nodeOps = {
	    insert: (child, parent, anchor) => {
	      parent.insertBefore(child, anchor || null);
	    },
	    remove: (child) => {
	      const parent = child.parentNode;
	      if (parent) {
	        parent.removeChild(child);
	      }
	    },
	    createElement: (tag, namespace, is, props) => {
	      const el = namespace === "svg" ? doc$1.createElementNS(svgNS, tag) : namespace === "mathml" ? doc$1.createElementNS(mathmlNS, tag) : is ? doc$1.createElement(tag, { is }) : doc$1.createElement(tag);
	      if (tag === "select" && props && props.multiple != null) {
	        el.setAttribute("multiple", props.multiple);
	      }
	      return el;
	    },
	    createText: (text) => doc$1.createTextNode(text),
	    createComment: (text) => doc$1.createComment(text),
	    setText: (node, text) => {
	      node.nodeValue = text;
	    },
	    setElementText: (el, text) => {
	      el.textContent = text;
	    },
	    parentNode: (node) => node.parentNode,
	    nextSibling: (node) => node.nextSibling,
	    querySelector: (selector) => doc$1.querySelector(selector),
	    setScopeId(el, id) {
	      el.setAttribute(id, "");
	    },
	    // __UNSAFE__
	    // Reason: innerHTML.
	    // Static content here can only come from compiled templates.
	    // As long as the user only uses trusted templates, this is safe.
	    insertStaticContent(content, parent, anchor, namespace, start, end) {
	      const before = anchor ? anchor.previousSibling : parent.lastChild;
	      if (start && (start === end || start.nextSibling)) {
	        while (true) {
	          parent.insertBefore(start.cloneNode(true), anchor);
	          if (start === end || !(start = start.nextSibling)) break;
	        }
	      } else {
	        templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
	        const template = templateContainer.content;
	        if (namespace === "svg" || namespace === "mathml") {
	          const wrapper = template.firstChild;
	          while (wrapper.firstChild) {
	            template.appendChild(wrapper.firstChild);
	          }
	          template.removeChild(wrapper);
	        }
	        parent.insertBefore(template, anchor);
	      }
	      return [
	        // first
	        before ? before.nextSibling : parent.firstChild,
	        // last
	        anchor ? anchor.previousSibling : parent.lastChild
	      ];
	    }
	  };
	  const vtcKey = Symbol("_vtc");
	  function patchClass(el, value, isSVG) {
	    const transitionClasses = el[vtcKey];
	    if (transitionClasses) {
	      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
	    }
	    if (value == null) {
	      el.removeAttribute("class");
	    } else if (isSVG) {
	      el.setAttribute("class", value);
	    } else {
	      el.className = value;
	    }
	  }
	  const vShowOriginalDisplay = Symbol("_vod");
	  const vShowHidden = Symbol("_vsh");
	  const CSS_VAR_TEXT = Symbol("");
	  const displayRE = /(^|;)\s*display\s*:/;
	  function patchStyle(el, prev, next) {
	    const style = el.style;
	    const isCssString = isString(next);
	    let hasControlledDisplay = false;
	    if (next && !isCssString) {
	      if (prev) {
	        if (!isString(prev)) {
	          for (const key in prev) {
	            if (next[key] == null) {
	              setStyle$1(style, key, "");
	            }
	          }
	        } else {
	          for (const prevStyle of prev.split(";")) {
	            const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
	            if (next[key] == null) {
	              setStyle$1(style, key, "");
	            }
	          }
	        }
	      }
	      for (const key in next) {
	        if (key === "display") {
	          hasControlledDisplay = true;
	        }
	        setStyle$1(style, key, next[key]);
	      }
	    } else {
	      if (isCssString) {
	        if (prev !== next) {
	          const cssVarText = style[CSS_VAR_TEXT];
	          if (cssVarText) {
	            next += ";" + cssVarText;
	          }
	          style.cssText = next;
	          hasControlledDisplay = displayRE.test(next);
	        }
	      } else if (prev) {
	        el.removeAttribute("style");
	      }
	    }
	    if (vShowOriginalDisplay in el) {
	      el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
	      if (el[vShowHidden]) {
	        style.display = "none";
	      }
	    }
	  }
	  const importantRE = /\s*!important$/;
	  function setStyle$1(style, name, val) {
	    if (isArray(val)) {
	      val.forEach((v2) => setStyle$1(style, name, v2));
	    } else {
	      if (val == null) val = "";
	      if (name.startsWith("--")) {
	        style.setProperty(name, val);
	      } else {
	        const prefixed = autoPrefix(style, name);
	        if (importantRE.test(val)) {
	          style.setProperty(
	            hyphenate(prefixed),
	            val.replace(importantRE, ""),
	            "important"
	          );
	        } else {
	          style[prefixed] = val;
	        }
	      }
	    }
	  }
	  const prefixes = ["Webkit", "Moz", "ms"];
	  const prefixCache = {};
	  function autoPrefix(style, rawName) {
	    const cached = prefixCache[rawName];
	    if (cached) {
	      return cached;
	    }
	    let name = camelize(rawName);
	    if (name !== "filter" && name in style) {
	      return prefixCache[rawName] = name;
	    }
	    name = capitalize(name);
	    for (let i2 = 0; i2 < prefixes.length; i2++) {
	      const prefixed = prefixes[i2] + name;
	      if (prefixed in style) {
	        return prefixCache[rawName] = prefixed;
	      }
	    }
	    return rawName;
	  }
	  const xlinkNS = "http://www.w3.org/1999/xlink";
	  function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
	    if (isSVG && key.startsWith("xlink:")) {
	      if (value == null) {
	        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
	      } else {
	        el.setAttributeNS(xlinkNS, key, value);
	      }
	    } else {
	      if (value == null || isBoolean && !includeBooleanAttr(value)) {
	        el.removeAttribute(key);
	      } else {
	        el.setAttribute(
	          key,
	          isBoolean ? "" : isSymbol(value) ? String(value) : value
	        );
	      }
	    }
	  }
	  function patchDOMProp(el, key, value, parentComponent) {
	    if (key === "innerHTML" || key === "textContent") {
	      if (value == null) return;
	      el[key] = value;
	      return;
	    }
	    const tag = el.tagName;
	    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
	    !tag.includes("-")) {
	      const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
	      const newValue = value == null ? "" : String(value);
	      if (oldValue !== newValue || !("_value" in el)) {
	        el.value = newValue;
	      }
	      if (value == null) {
	        el.removeAttribute(key);
	      }
	      el._value = value;
	      return;
	    }
	    let needRemove = false;
	    if (value === "" || value == null) {
	      const type = typeof el[key];
	      if (type === "boolean") {
	        value = includeBooleanAttr(value);
	      } else if (value == null && type === "string") {
	        value = "";
	        needRemove = true;
	      } else if (type === "number") {
	        value = 0;
	        needRemove = true;
	      }
	    }
	    try {
	      el[key] = value;
	    } catch (e) {
	    }
	    needRemove && el.removeAttribute(key);
	  }
	  function addEventListener(el, event, handler, options) {
	    el.addEventListener(event, handler, options);
	  }
	  function removeEventListener(el, event, handler, options) {
	    el.removeEventListener(event, handler, options);
	  }
	  const veiKey = Symbol("_vei");
	  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
	    const invokers = el[veiKey] || (el[veiKey] = {});
	    const existingInvoker = invokers[rawName];
	    if (nextValue && existingInvoker) {
	      existingInvoker.value = nextValue;
	    } else {
	      const [name, options] = parseName(rawName);
	      if (nextValue) {
	        const invoker = invokers[rawName] = createInvoker(
	          nextValue,
	          instance
	        );
	        addEventListener(el, name, invoker, options);
	      } else if (existingInvoker) {
	        removeEventListener(el, name, existingInvoker, options);
	        invokers[rawName] = void 0;
	      }
	    }
	  }
	  const optionsModifierRE = /(?:Once|Passive|Capture)$/;
	  function parseName(name) {
	    let options;
	    if (optionsModifierRE.test(name)) {
	      options = {};
	      let m2;
	      while (m2 = name.match(optionsModifierRE)) {
	        name = name.slice(0, name.length - m2[0].length);
	        options[m2[0].toLowerCase()] = true;
	      }
	    }
	    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
	    return [event, options];
	  }
	  let cachedNow = 0;
	  const p = /* @__PURE__ */ Promise.resolve();
	  const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
	  function createInvoker(initialValue, instance) {
	    const invoker = (e) => {
	      if (!e._vts) {
	        e._vts = Date.now();
	      } else if (e._vts <= invoker.attached) {
	        return;
	      }
	      callWithAsyncErrorHandling(
	        patchStopImmediatePropagation(e, invoker.value),
	        instance,
	        5,
	        [e]
	      );
	    };
	    invoker.value = initialValue;
	    invoker.attached = getNow();
	    return invoker;
	  }
	  function patchStopImmediatePropagation(e, value) {
	    if (isArray(value)) {
	      const originalStop = e.stopImmediatePropagation;
	      e.stopImmediatePropagation = () => {
	        originalStop.call(e);
	        e._stopped = true;
	      };
	      return value.map(
	        (fn) => (e2) => !e2._stopped && fn && fn(e2)
	      );
	    } else {
	      return value;
	    }
	  }
	  const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
	  key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
	  const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
	    const isSVG = namespace === "svg";
	    if (key === "class") {
	      patchClass(el, nextValue, isSVG);
	    } else if (key === "style") {
	      patchStyle(el, prevValue, nextValue);
	    } else if (isOn(key)) {
	      if (!isModelListener(key)) {
	        patchEvent(el, key, prevValue, nextValue, parentComponent);
	      }
	    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
	      patchDOMProp(el, key, nextValue);
	      if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
	        patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
	      }
	    } else {
	      if (key === "true-value") {
	        el._trueValue = nextValue;
	      } else if (key === "false-value") {
	        el._falseValue = nextValue;
	      }
	      patchAttr(el, key, nextValue, isSVG);
	    }
	  };
	  function shouldSetAsProp(el, key, value, isSVG) {
	    if (isSVG) {
	      if (key === "innerHTML" || key === "textContent") {
	        return true;
	      }
	      if (key in el && isNativeOn(key) && isFunction(value)) {
	        return true;
	      }
	      return false;
	    }
	    if (key === "spellcheck" || key === "draggable" || key === "translate") {
	      return false;
	    }
	    if (key === "form") {
	      return false;
	    }
	    if (key === "list" && el.tagName === "INPUT") {
	      return false;
	    }
	    if (key === "type" && el.tagName === "TEXTAREA") {
	      return false;
	    }
	    if (key === "width" || key === "height") {
	      const tag = el.tagName;
	      if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
	        return false;
	      }
	    }
	    if (isNativeOn(key) && isString(value)) {
	      return false;
	    }
	    return key in el;
	  }
	  const getModelAssigner = (vnode) => {
	    const fn = vnode.props["onUpdate:modelValue"] || false;
	    return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
	  };
	  function onCompositionStart(e) {
	    e.target.composing = true;
	  }
	  function onCompositionEnd(e) {
	    const target = e.target;
	    if (target.composing) {
	      target.composing = false;
	      target.dispatchEvent(new Event("input"));
	    }
	  }
	  const assignKey = Symbol("_assign");
	  const vModelText = {
	    created(el, { modifiers: { lazy, trim, number } }, vnode) {
	      el[assignKey] = getModelAssigner(vnode);
	      const castToNumber = number || vnode.props && vnode.props.type === "number";
	      addEventListener(el, lazy ? "change" : "input", (e) => {
	        if (e.target.composing) return;
	        let domValue = el.value;
	        if (trim) {
	          domValue = domValue.trim();
	        }
	        if (castToNumber) {
	          domValue = looseToNumber(domValue);
	        }
	        el[assignKey](domValue);
	      });
	      if (trim) {
	        addEventListener(el, "change", () => {
	          el.value = el.value.trim();
	        });
	      }
	      if (!lazy) {
	        addEventListener(el, "compositionstart", onCompositionStart);
	        addEventListener(el, "compositionend", onCompositionEnd);
	        addEventListener(el, "change", onCompositionEnd);
	      }
	    },
	    // set value on mounted so it's after min/max for type="range"
	    mounted(el, { value }) {
	      el.value = value == null ? "" : value;
	    },
	    beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
	      el[assignKey] = getModelAssigner(vnode);
	      if (el.composing) return;
	      const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
	      const newValue = value == null ? "" : value;
	      if (elValue === newValue) {
	        return;
	      }
	      if (document.activeElement === el && el.type !== "range") {
	        if (lazy && value === oldValue) {
	          return;
	        }
	        if (trim && el.value.trim() === newValue) {
	          return;
	        }
	      }
	      el.value = newValue;
	    }
	  };
	  const vModelCheckbox = {
	    // #4096 array checkboxes need to be deep traversed
	    deep: true,
	    created(el, _2, vnode) {
	      el[assignKey] = getModelAssigner(vnode);
	      addEventListener(el, "change", () => {
	        const modelValue = el._modelValue;
	        const elementValue = getValue(el);
	        const checked = el.checked;
	        const assign = el[assignKey];
	        if (isArray(modelValue)) {
	          const index = looseIndexOf(modelValue, elementValue);
	          const found = index !== -1;
	          if (checked && !found) {
	            assign(modelValue.concat(elementValue));
	          } else if (!checked && found) {
	            const filtered = [...modelValue];
	            filtered.splice(index, 1);
	            assign(filtered);
	          }
	        } else if (isSet(modelValue)) {
	          const cloned = new Set(modelValue);
	          if (checked) {
	            cloned.add(elementValue);
	          } else {
	            cloned.delete(elementValue);
	          }
	          assign(cloned);
	        } else {
	          assign(getCheckboxValue(el, checked));
	        }
	      });
	    },
	    // set initial checked on mount to wait for true-value/false-value
	    mounted: setChecked,
	    beforeUpdate(el, binding, vnode) {
	      el[assignKey] = getModelAssigner(vnode);
	      setChecked(el, binding, vnode);
	    }
	  };
	  function setChecked(el, { value, oldValue }, vnode) {
	    el._modelValue = value;
	    if (isArray(value)) {
	      el.checked = looseIndexOf(value, vnode.props.value) > -1;
	    } else if (isSet(value)) {
	      el.checked = value.has(vnode.props.value);
	    } else if (value !== oldValue) {
	      el.checked = looseEqual(value, getCheckboxValue(el, true));
	    }
	  }
	  function getValue(el) {
	    return "_value" in el ? el._value : el.value;
	  }
	  function getCheckboxValue(el, checked) {
	    const key = checked ? "_trueValue" : "_falseValue";
	    return key in el ? el[key] : checked;
	  }
	  const keyNames = {
	    esc: "escape",
	    space: " ",
	    up: "arrow-up",
	    left: "arrow-left",
	    right: "arrow-right",
	    down: "arrow-down",
	    delete: "backspace"
	  };
	  const withKeys = (fn, modifiers) => {
	    const cache = fn._withKeys || (fn._withKeys = {});
	    const cacheKey = modifiers.join(".");
	    return cache[cacheKey] || (cache[cacheKey] = (event) => {
	      if (!("key" in event)) {
	        return;
	      }
	      const eventKey = hyphenate(event.key);
	      if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
	        return fn(event);
	      }
	    });
	  };
	  const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
	  let renderer;
	  function ensureRenderer() {
	    return renderer || (renderer = createRenderer(rendererOptions));
	  }
	  const createApp = (...args) => {
	    const app2 = ensureRenderer().createApp(...args);
	    const { mount } = app2;
	    app2.mount = (containerOrSelector) => {
	      const container = normalizeContainer(containerOrSelector);
	      if (!container) return;
	      const component = app2._component;
	      if (!isFunction(component) && !component.render && !component.template) {
	        component.template = container.innerHTML;
	      }
	      container.innerHTML = "";
	      const proxy = mount(container, false, resolveRootNamespace(container));
	      if (container instanceof Element) {
	        container.removeAttribute("v-cloak");
	        container.setAttribute("data-v-app", "");
	      }
	      return proxy;
	    };
	    return app2;
	  };
	  function resolveRootNamespace(container) {
	    if (container instanceof SVGElement) {
	      return "svg";
	    }
	    if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
	      return "mathml";
	    }
	  }
	  function normalizeContainer(container) {
	    if (isString(container)) {
	      const res = document.querySelector(container);
	      return res;
	    }
	    return container;
	  }
	  function setStyle(styles, dom) {
	    const style = dom.style;
	    for (const key in styles) {
	      style[key] = styles[key];
	    }
	  }
	  function injectButton() {
	    docMain.addEventListener("readystatechange", (event) => {
	      if (docMain.readyState !== "complete" || !event.target.location.host.includes("www.bilibili.com")) return;
	      const domBtnEnchanter = docMain.createElement("div");
	      setStyle({
	        "width": "40px",
	        "height": "40px",
	        "display": "flex",
	        "justify-content": "flex-end",
	        "align-items": "center",
	        "cursor": "pointer",
	        "border": "1px solid silver",
	        "border-radius": "6px",
	        "text-align": "center",
	        "vertical-align": "center",
	        "margin-top": "10px"
	      }, domBtnEnchanter);
	      domBtnEnchanter.classList.add("btn-bili-enchanter");
	      domBtnEnchanter.innerHTML = `
<img src="${strImgEnchantTable}" style="width: 36px; height: 36px; margin: auto"/>
`;
	      domBtnEnchanter.onclick = showConfigDialog;
	      let dom = domBili.domRightButtonContainer;
	      if (!dom) {
	        console.log("发生一次奇怪的调用", event);
	        console.trace();
	        return;
	      }
	      console.log("成功注入 button", event);
	      dom.appendChild(domBtnEnchanter);
	    });
	  }
	  var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
	  const cssSub = "#i_cecream.hidden-by-bili-enchanter\r\n{\r\n    display: none !important;\r\n}\r\n\r\n.adblock-tips\r\n{\r\n    display: none !important;\r\n}\r\n\r\n.login-panel-popover\r\n{\r\n    display: none !important;\r\n}\r\n";
	  const version = "0.1.0";
	  const pluginVersion = version;
	  const isUnderTamperMonkey = typeof GM_setValue === "function" && typeof GM_getValue === "function";
	  const isUnderBilibili = ((location == null ? void 0 : location.hostname) ?? "").includes("bilibili.com");
	  const IdDomApp = "bili-enchanter";
	  const domFrame = document.createElement("iframe");
	  domFrame.id = IdDomApp;
	  domFrame.width = "100%";
	  domFrame.height = "100%";
	  setStyle({
	    "position": "fixed",
	    "top": "0",
	    "left": "0",
	    "background": "transparent",
	    "opacity": "var(--opacity-dialog-bilibili-enchanter, 0)",
	    "pointer-events": "none",
	    "z-index": "-1000",
	    "transition": "opacity 0.5s ease"
	  }, domFrame);
	  document.body.appendChild(domFrame);
	  const winMain = window;
	  const winFrame = domFrame.contentWindow;
	  const docFrame = winFrame.document;
	  const docMain = document;
	  const domBili = {
	    /**
	     * @return {HTMLElement | null}
	     * */
	    get domRightButtonContainer() {
	      return isUnderBilibili ? [...docMain.getElementsByClassName("palette-button-wrap")][0] ?? null : null;
	    }
	  };
	  const domFrameDiv = docFrame.createElement("div");
	  docFrame.body.appendChild(domFrameDiv);
	  const strImgEnchantTable = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC0UlEQVR4Xu2UP2/TUBTFI8V59nuOk+ZPW5W2tEgUVIHKVAESC1LFgAQDUxEDC1KHDGFgY0Ag8QkQYmHKN+CDMPApmFhZHz7PPs7LjW3aNEVC6pWO7Ngv7/zevSdpNC7rsv7X2v383vqS7y+sRo2Gvf39m33864ed/P7phHs8wzu5fmmFzaHJrX37LtSlwjuuk99fuHxj6M3VbXu8vlYqvOO6c4NIY2n2Ny0MgkBxxmyr3Py04riYkdqwbr4duQUohouzlRufVkU28v1Q8ICX9G/0nh7Z4ctnbgGI2YFlAHA/7N15eM+2Dw/mAWBOHZUEry58Ulzv5+AgFcwp6e8AJpOJPfn6yQFQMoh1IHwnjalHo1d2PB6XA2x9eO3MCXCcxJUgDJf8D6gyfqCjAgAaPH8yD9BqRfbOl49OuCdEGQhn6v8TQmXGNG82W3b35IUT7qW/A6CM6borAXwQdIphZTFcOJlvTMFQSvo7ABhTcbwy0wUKHWJY8ctBohksnE6aAygMk9RUWaV0em/qAWBsDJR1QeYBAMgJAksABAuzBYCcO8xg3GyGNgiiegAszAA6RScI4Y+IYUUXcHKGy2+xb66USY27DiAxg2qAGzt33eIpAGD6zjSKEnffSzaKsBKA4cLmYRgXp8Q1CNB6AMR2a/1m3o0KAJjubR/m5oTouyu+aExiB93NohMIJILHU2PWMFUqTtV291dW93IACN2I6wFgYMwwlbGxhnknb6O2WmdQWqMb2Xh40syYVwBkp98YXnedYXfwvBLAD2IQhA4GZkopNx7mAgbzANnmUwid7hHYbrI6A8BuSf+ifJAoahftx2jY/v1r9+cAcNrMOL2qbBR4FuteEbxaY1k+CE611t/Jx4NgTrOATdnqTnvoPsOQIzizsSyCrKTpnwJkEARA0KZtNsXzcxnLIogPMZsBs1irz1r+aHyACzeWRZB/brzs+gOuaT2zfG4CCAAAAABJRU5ErkJggg==";
	  _GM_addStyle(`${cssSub}`);
	  class Pool {
	    /**
	     * @param {string} name 频道名称
	     * @param {vue.Ref} ref 需要同步的 vue Ref
	     * @param {any} defaultData 默认值
	     * */
	    constructor(name, ref2, defaultData = {}) {
	      this.name = name;
	      this.ref = ref2;
	      this.listUpdateListener = [];
	      Object.defineProperty(this, "defaultData", {
	        get: () => {
	          return defaultData == null ? null : JSON.parse(JSON.stringify(defaultData));
	        }
	      });
	      this.channel = new BroadcastChannel(name);
	      this.channel.addEventListener("message", (event) => {
	        this._load();
	        const valueLatest = this.ref.value;
	        for (let updateListener of this.listUpdateListener) {
	          if (typeof updateListener !== "function") continue;
	          updateListener(valueLatest);
	        }
	      });
	      this._load();
	    }
	    update(value) {
	      this.ref.value = value;
	      this._save();
	      setTimeout(() => {
	        this.channel.postMessage("update," + Date.now());
	      }, 250);
	    }
	    _load() {
	      let data;
	      if (isUnderTamperMonkey) {
	        data = GM_getValue(this.name, this.defaultData);
	      } else {
	        data = localStorage.getItem("bili-enchanter-cache");
	      }
	      if (data === null || data === "")
	        data = this.defaultData;
	      this.ref.value = typeof data === "string" ? JSON.parse(data) : JSON.parse(JSON.stringify(data));
	    }
	    _save() {
	      const data = JSON.stringify(this.ref.value);
	      if (isUnderTamperMonkey) {
	        GM_setValue(this.name, data);
	      } else {
	        localStorage.setItem(this.name, data);
	      }
	    }
	    reset() {
	      this.ref.value = this.defaultData;
	      this._save();
	      setTimeout(() => {
	        this.channel.postMessage("reset," + Date.now());
	      }, 250);
	    }
	    close() {
	      this.channel.close();
	    }
	  }
	  const cp = ref("homepage");
	  const domBiliMain = document.getElementById("i_cecream");
	  const isDialogConfigShow = ref(false);
	  function refreshOpacity(newValue) {
	    const opacity = newValue ? "1" : "0";
	    docMain.body.style.setProperty("--opacity-dialog-bilibili-enchanter", opacity);
	    domFrame.style.setProperty("pointer-events", newValue ? "auto" : "none");
	    domFrame.style.setProperty("z-index", newValue ? "10000" : "-1000");
	    if (newValue) {
	      domBiliMain.classList.add("hidden-by-bili-enchanter");
	    } else {
	      domBiliMain.classList.remove("hidden-by-bili-enchanter");
	    }
	  }
	  const defaultConfig = {
	    hideAd: true,
	    hideCarousel: true,
	    hideCategory: true,
	    hideCategoryRecommend: true,
	    hideLiveRecommend: true,
	    hideManyLike: false,
	    hideManyCoin: false,
	    hideFriendFollow: false,
	    hideMyFollow: false,
	    hideShortVideo: 0,
	    listBlacklistUid: [],
	    listBlacklistKeyword: "",
	    showBtnAnime: true,
	    showBtnLive: true,
	    showBtnGameCenter: false,
	    showBtnShop: false,
	    showBtnManga: false,
	    showBtnMatch: false,
	    showBtnEra: false,
	    showBtnDownloadClient: false,
	    showBtnSpace: true,
	    showBtnBig: false,
	    showBtnMessage: true,
	    showBtnT: true,
	    showBtnFavlist: true,
	    showBtnHistory: true,
	    showBtnCreative: false,
	    showBtnUpload: false,
	    enableSearchBarOpacity: true,
	    hideSearchBarHistory: false,
	    hideSearchBarRecommend: false,
	    version: "v1"
	  };
	  const configReal = ref(null);
	  const configEditing = ref(null);
	  function showConfigDialog() {
	    isDialogConfigShow.value = true;
	    configEditing.value = JSON.parse(JSON.stringify(configReal.value));
	    refreshOpacity(true);
	  }
	  function hideConfigDialog(shouldSave = false) {
	    refreshOpacity(false);
	    isDialogConfigShow.value = false;
	    if (shouldSave) {
	      poolConfig.update(configEditing.value);
	    }
	    configEditing.value = null;
	  }
	  let poolConfig;
	  function startConfigPool() {
	    stopConfigPool();
	    poolConfig = new Pool("bili-enchanter-config", configReal, defaultConfig);
	    poolConfig.listUpdateListener.push((latestConfig) => {
	      let isSame = true;
	      for (let key of Object.keys(defaultConfig)) {
	        if (defaultConfig[key] === latestConfig[key]) continue;
	        isSame = false;
	        break;
	      }
	      if (isSame) return;
	      if (isDialogConfigShow.value) {
	        configEditing.value = JSON.parse(JSON.stringify(latestConfig));
	      }
	    });
	  }
	  function updateConfig(configValue) {
	    if (poolConfig == null) return;
	    poolConfig.update(configValue);
	  }
	  function stopConfigPool() {
	    if (poolConfig == null) return;
	    poolConfig.close();
	    poolConfig = null;
	  }
	  function resetConfigPool() {
	    if (poolConfig == null) return;
	    poolConfig.reset();
	  }
	  const cacheUserInfo = ref({});
	  async function triggerLoadUserInfo(uid2 = "") {
	    const userKey = uid2;
	    const cachedData = cacheUserInfo.value;
	    if (cachedData[userKey] != null && cachedData[userKey].caching)
	      return;
	    cachedData[userKey] = { caching: true };
	    poolUserInfo.update(cachedData);
	    let response;
	    try {
	      response = await fetch(`https://api.bilibili.com/x/web-interface/card?mid=${uid2}`, {
	        method: "GET"
	      });
	      if (response.ok) {
	        const json = await response.json();
	        const card = json.data.card;
	        cachedData[userKey] = {
	          name: card.name,
	          sex: card.sex,
	          face: card.face
	        };
	      } else {
	        throw { statusText: "api denied" };
	      }
	    } catch (any) {
	      cachedData[userKey] = { error: (response == null ? void 0 : response.statusText) ?? "unknown" };
	    }
	    setTimeout(() => {
	      poolUserInfo.update(cachedData);
	    }, 250);
	  }
	  let poolUserInfo;
	  function startUserInfoPool() {
	    stopUserInfoPool();
	    poolUserInfo = new Pool("bili-enchanter-cache", cacheUserInfo, {});
	  }
	  function stopUserInfoPool() {
	    if (poolUserInfo == null) return;
	    poolUserInfo.close();
	    poolUserInfo = null;
	  }
	  const _hoisted_1$4 = {
	    key: 0,
	    class: "medium-width auto-margin full-height"
	  };
	  const _hoisted_2$3 = { class: "full-width" };
	  const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("legend", null, "整体内容", -1);
	  const _hoisted_4$3 = { class: "checkbox" };
	  const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("span", null, "过滤广告", -1);
	  const _hoisted_6$3 = { class: "full-width" };
	  const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("legend", null, "首页内容", -1);
	  const _hoisted_8$3 = { class: "checkbox" };
	  const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("span", null, "隐藏轮播推荐", -1);
	  const _hoisted_10$3 = { class: "checkbox" };
	  const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("span", null, "隐藏信息流分区导航", -1);
	  const _hoisted_12$3 = { class: "checkbox" };
	  const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("span", null, "过滤信息流来自各分区的推荐", -1);
	  const _hoisted_14$2 = { class: "checkbox" };
	  const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("span", null, "过滤信息流直播推荐", -1);
	  const _hoisted_16$2 = { class: "checkbox" };
	  const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("span", null, '过滤信息流 "XX 点赞"', -1);
	  const _hoisted_18$2 = { class: "checkbox" };
	  const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("span", null, '过滤信息流 "XX 投币"', -1);
	  const _hoisted_20$2 = { class: "checkbox" };
	  const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("span", null, '过滤信息流 "已关注"', -1);
	  const _hoisted_22$2 = { class: "checkbox" };
	  const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("span", null, '过滤信息流 "好友关注"', -1);
	  const _hoisted_24$1 = { class: "field label" };
	  const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("label", { class: "active" }, "隐藏小于指定时长短视频", -1);
	  const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("span", { class: "helper" }, "单位: 秒. 填 0 则不过滤", -1);
	  const _hoisted_27$1 = { class: "medium-height flex-vertical" };
	  const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("legend", null, "UP 主过滤", -1);
	  const _hoisted_29$1 = { class: "row flex-fixed bottom-margin" };
	  const _hoisted_30$1 = { class: "field border small" };
	  const _hoisted_31$1 = { class: "flex-dynamic scroll" };
	  const _hoisted_32$1 = {
	    key: 0,
	    class: "row"
	  };
	  const _hoisted_33$1 = /* @__PURE__ */ createBaseVNode("div", { class: "max grey-text" }, " 暂无屏蔽 UP 主 ", -1);
	  const _hoisted_34$1 = [
	    _hoisted_33$1
	  ];
	  const _hoisted_35$1 = { class: "row" };
	  const _hoisted_36$1 = { class: "max" };
	  const _hoisted_37$1 = {
	    key: 0,
	    class: "tertiary-text"
	  };
	  const _hoisted_38$1 = {
	    key: 1,
	    class: "error-text"
	  };
	  const _hoisted_39$1 = { key: 2 };
	  const _hoisted_40$1 = ["src"];
	  const _hoisted_41$1 = ["onClick"];
	  const _hoisted_42$1 = { class: "grey-text small-text" };
	  const _hoisted_43$1 = ["onClick"];
	  const _hoisted_44 = /* @__PURE__ */ createBaseVNode("i", { class: "small" }, "account_circle", -1);
	  const _hoisted_45 = [
	    _hoisted_44
	  ];
	  const _hoisted_46 = ["onClick"];
	  const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", { class: "small" }, "close", -1);
	  const _hoisted_48 = [
	    _hoisted_47
	  ];
	  const _hoisted_49 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
	  const _hoisted_50 = {
	    class: "medium-height flex-vertical",
	    style: { "padding": "1rem 0 0.5rem 0" }
	  };
	  const _hoisted_51 = /* @__PURE__ */ createBaseVNode("legend", { class: "left-margin small-margin" }, "视频标题过滤", -1);
	  const _hoisted_52 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-fixed left-padding small-text" }, "每行一个, 支持正则表达式", -1);
	  const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1);
	  const _sfc_main$4 = {
	    __name: "ComponentConfigHomepage",
	    setup(__props) {
	      const editingUid = ref("");
	      function addToBlacklist() {
	        let uid2 = editingUid.value;
	        if (uid2 === "") return;
	        uid2 = parseInt(uid2);
	        if (isNaN(uid2)) return;
	        for (let uidBlacklist of configEditing.value.listBlacklistUid) {
	          if (uidBlacklist === uid2) {
	            editingUid.value = "";
	            return;
	          }
	        }
	        configEditing.value.listBlacklistUid.push(uid2);
	        triggerLoadUserInfo(uid2);
	        editingUid.value = "";
	      }
	      function openSpace(uid2) {
	        winMain.open("https://space.bilibili.com/" + uid2);
	      }
	      return (_ctx, _cache) => {
	        var _a;
	        return openBlock(), createElementBlock("div", {
	          class: normalizeClass(["page bottom padding", unref(cp) === "homepage" ? "active" : ""])
	        }, [
	          unref(configEditing) != null ? (openBlock(), createElementBlock("main", _hoisted_1$4, [
	            createBaseVNode("fieldset", _hoisted_2$3, [
	              _hoisted_3$3,
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_4$3, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(configEditing).hideAd = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideAd]
	                  ]),
	                  _hoisted_5$3
	                ])
	              ])
	            ]),
	            createBaseVNode("fieldset", _hoisted_6$3, [
	              _hoisted_7$3,
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_8$3, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(configEditing).hideCarousel = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideCarousel]
	                  ]),
	                  _hoisted_9$3
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_10$3, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(configEditing).hideCategory = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideCategory]
	                  ]),
	                  _hoisted_11$3
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_12$3, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(configEditing).hideCategoryRecommend = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideCategoryRecommend]
	                  ]),
	                  _hoisted_13$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_14$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(configEditing).hideLiveRecommend = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideLiveRecommend]
	                  ]),
	                  _hoisted_15$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_16$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(configEditing).hideManyLike = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideManyLike]
	                  ]),
	                  _hoisted_17$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_18$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(configEditing).hideManyCoin = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideManyCoin]
	                  ]),
	                  _hoisted_19$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_20$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(configEditing).hideMyFollow = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideMyFollow]
	                  ]),
	                  _hoisted_21$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_22$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(configEditing).hideFriendFollow = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideFriendFollow]
	                  ]),
	                  _hoisted_23$2
	                ])
	              ]),
	              createBaseVNode("div", _hoisted_24$1, [
	                withDirectives(createBaseVNode("input", {
	                  type: "number",
	                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(configEditing).hideShortVideo = $event)
	                }, null, 512), [
	                  [vModelText, unref(configEditing).hideShortVideo]
	                ]),
	                _hoisted_25$1,
	                _hoisted_26$1
	              ])
	            ]),
	            createBaseVNode("fieldset", _hoisted_27$1, [
	              _hoisted_28$1,
	              createBaseVNode("div", _hoisted_29$1, [
	                createBaseVNode("div", _hoisted_30$1, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "text",
	                    placeholder: "输入 UID 屏蔽",
	                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => editingUid.value = $event),
	                    onKeydown: withKeys(addToBlacklist, ["enter"])
	                  }, null, 544), [
	                    [vModelText, editingUid.value]
	                  ])
	                ])
	              ]),
	              createBaseVNode("div", _hoisted_31$1, [
	                !((_a = unref(configEditing).listBlacklistUid) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_32$1, _hoisted_34$1)) : createCommentVNode("", true),
	                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(configEditing).listBlacklistUid, (blacklistUid, indexBlacklistUid) => {
	                  return openBlock(), createElementBlock(Fragment, null, [
	                    createBaseVNode("div", _hoisted_35$1, [
	                      createBaseVNode("div", _hoisted_36$1, [
	                        unref(cacheUserInfo)[blacklistUid] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
	                          unref(cacheUserInfo)[blacklistUid].caching ? (openBlock(), createElementBlock("span", _hoisted_37$1, " ... ")) : unref(cacheUserInfo)[blacklistUid].error ? (openBlock(), createElementBlock("span", _hoisted_38$1, " x ")) : (openBlock(), createElementBlock("span", _hoisted_39$1, [
	                            createBaseVNode("i", null, [
	                              createBaseVNode("img", {
	                                src: unref(cacheUserInfo)[blacklistUid].face
	                              }, null, 8, _hoisted_40$1)
	                            ]),
	                            createTextVNode(" " + toDisplayString(unref(cacheUserInfo)[blacklistUid].name), 1)
	                          ]))
	                        ], 64)) : (openBlock(), createElementBlock("span", {
	                          key: 1,
	                          onClick: ($event) => unref(triggerLoadUserInfo)(blacklistUid)
	                        }, " - ", 8, _hoisted_41$1)),
	                        createBaseVNode("span", _hoisted_42$1, "(" + toDisplayString(blacklistUid) + ")", 1)
	                      ]),
	                      createBaseVNode("div", null, [
	                        createBaseVNode("button", {
	                          class: "circle transparent small no-margin",
	                          onClick: ($event) => openSpace(blacklistUid)
	                        }, _hoisted_45, 8, _hoisted_43$1),
	                        createBaseVNode("button", {
	                          class: "circle transparent small no-margin",
	                          onClick: ($event) => unref(configEditing).listBlacklistUid.splice(indexBlacklistUid, 1)
	                        }, _hoisted_48, 8, _hoisted_46)
	                      ])
	                    ]),
	                    _hoisted_49
	                  ], 64);
	                }), 256))
	              ])
	            ]),
	            createBaseVNode("fieldset", _hoisted_50, [
	              _hoisted_51,
	              withDirectives(createBaseVNode("textarea", {
	                class: "no-margin no-border flex-dynamic transparent large-text padding",
	                style: { "resize": "none", "outline": "none", "border": "none" },
	                placeholder: "无过滤规则",
	                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(configEditing).listBlacklistKeyword = $event)
	              }, null, 512), [
	                [vModelText, unref(configEditing).listBlacklistKeyword]
	              ]),
	              _hoisted_52
	            ]),
	            _hoisted_53
	          ])) : createCommentVNode("", true)
	        ], 2);
	      };
	    }
	  };
	  const _hoisted_1$3 = {
	    key: 0,
	    class: "medium-width auto-margin full-height"
	  };
	  const _hoisted_2$2 = { class: "full-width" };
	  const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("legend", null, "导航栏", -1);
	  const _hoisted_4$2 = { class: "checkbox" };
	  const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "番剧" 按钮', -1);
	  const _hoisted_6$2 = { class: "checkbox" };
	  const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "直播" 按钮', -1);
	  const _hoisted_8$2 = { class: "checkbox" };
	  const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "游戏中心" 按钮', -1);
	  const _hoisted_10$2 = { class: "checkbox" };
	  const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "会员购" 按钮', -1);
	  const _hoisted_12$2 = { class: "checkbox" };
	  const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "漫画" 按钮', -1);
	  const _hoisted_14$1 = { class: "checkbox" };
	  const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "赛事" 按钮', -1);
	  const _hoisted_16$1 = { class: "checkbox" };
	  const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("span", null, "显示热点活动按钮", -1);
	  const _hoisted_18$1 = { class: "checkbox" };
	  const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "下载客户端" 按钮', -1);
	  const _hoisted_20$1 = { class: "checkbox" };
	  const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "个人中心" 头像按钮', -1);
	  const _hoisted_22$1 = { class: "checkbox" };
	  const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "大会员" 按钮', -1);
	  const _hoisted_24 = { class: "checkbox" };
	  const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "消息" 按钮', -1);
	  const _hoisted_26 = { class: "checkbox" };
	  const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "动态" 按钮', -1);
	  const _hoisted_28 = { class: "checkbox" };
	  const _hoisted_29 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "收藏" 按钮', -1);
	  const _hoisted_30 = { class: "checkbox" };
	  const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "历史" 按钮', -1);
	  const _hoisted_32 = { class: "checkbox" };
	  const _hoisted_33 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "创作中心" 按钮', -1);
	  const _hoisted_34 = { class: "checkbox" };
	  const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", null, '显示 "投稿" 按钮', -1);
	  const _hoisted_36 = { class: "full-width" };
	  const _hoisted_37 = /* @__PURE__ */ createBaseVNode("legend", null, "搜索栏", -1);
	  const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", null, [
	    /* @__PURE__ */ createBaseVNode("label", { class: "checkbox" }, [
	      /* @__PURE__ */ createBaseVNode("input", {
	        type: "checkbox",
	        disabled: "",
	        readonly: ""
	      }),
	      /* @__PURE__ */ createBaseVNode("span", null, "启用半透明效果")
	    ])
	  ], -1);
	  const _hoisted_39 = { class: "checkbox" };
	  const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", null, "隐藏历史搜索", -1);
	  const _hoisted_41 = { class: "checkbox" };
	  const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", null, "隐藏热搜推荐", -1);
	  const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1);
	  const _sfc_main$3 = {
	    __name: "ComponentConfigNav",
	    setup(__props) {
	      return (_ctx, _cache) => {
	        return openBlock(), createElementBlock("div", {
	          class: normalizeClass(["page bottom padding", unref(cp) === "nav" ? "active" : ""])
	        }, [
	          unref(configEditing) != null ? (openBlock(), createElementBlock("main", _hoisted_1$3, [
	            createBaseVNode("fieldset", _hoisted_2$2, [
	              _hoisted_3$2,
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_4$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(configEditing).showBtnAnime = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnAnime]
	                  ]),
	                  _hoisted_5$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_6$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(configEditing).showBtnLive = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnLive]
	                  ]),
	                  _hoisted_7$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_8$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(configEditing).showBtnGameCenter = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnGameCenter]
	                  ]),
	                  _hoisted_9$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_10$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(configEditing).showBtnShop = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnShop]
	                  ]),
	                  _hoisted_11$2
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_12$2, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(configEditing).showBtnManga = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnManga]
	                  ]),
	                  _hoisted_13$1
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_14$1, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(configEditing).showBtnMatch = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnMatch]
	                  ]),
	                  _hoisted_15$1
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_16$1, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(configEditing).showBtnEra = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnEra]
	                  ]),
	                  _hoisted_17$1
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_18$1, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(configEditing).showBtnDownloadClient = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnDownloadClient]
	                  ]),
	                  _hoisted_19$1
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_20$1, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(configEditing).showBtnSpace = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnSpace]
	                  ]),
	                  _hoisted_21$1
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_22$1, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(configEditing).showBtnBig = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnBig]
	                  ]),
	                  _hoisted_23$1
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_24, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(configEditing).showBtnMessage = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnMessage]
	                  ]),
	                  _hoisted_25
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_26, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(configEditing).showBtnT = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnT]
	                  ]),
	                  _hoisted_27
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_28, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(configEditing).showBtnFavlist = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnFavlist]
	                  ]),
	                  _hoisted_29
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_30, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(configEditing).showBtnHistory = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnHistory]
	                  ]),
	                  _hoisted_31
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_32, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(configEditing).showBtnCreative = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnCreative]
	                  ]),
	                  _hoisted_33
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_34, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(configEditing).showBtnUpload = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).showBtnUpload]
	                  ]),
	                  _hoisted_35
	                ])
	              ])
	            ]),
	            createBaseVNode("fieldset", _hoisted_36, [
	              _hoisted_37,
	              _hoisted_38,
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_39, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(configEditing).hideSearchBarHistory = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideSearchBarHistory]
	                  ]),
	                  _hoisted_40
	                ])
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("label", _hoisted_41, [
	                  withDirectives(createBaseVNode("input", {
	                    type: "checkbox",
	                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(configEditing).hideSearchBarRecommend = $event)
	                  }, null, 512), [
	                    [vModelCheckbox, unref(configEditing).hideSearchBarRecommend]
	                  ]),
	                  _hoisted_42
	                ])
	              ])
	            ]),
	            _hoisted_43
	          ])) : createCommentVNode("", true)
	        ], 2);
	      };
	    }
	  };
	  const _hoisted_1$2 = { class: "medium-width auto-margin full-height" };
	  const _hoisted_2$1 = { class: "full-width top-margin" };
	  const _hoisted_3$1 = { class: "center-align" };
	  const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", null, "upload", -1);
	  const _hoisted_5$1 = { class: "secondary small small-round" };
	  const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", null, "download", -1);
	  const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "bottom-margin top-margin" }, null, -1);
	  const _hoisted_8$1 = { class: "center-align" };
	  const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", null, "delete", -1);
	  const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "重置配置", -1);
	  const _hoisted_11$1 = [
	    _hoisted_9$1,
	    _hoisted_10$1
	  ];
	  const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", null, "如果插件使用时出现问题, 可尝试重置配置", -1);
	  const _hoisted_13 = {
	    key: 0,
	    class: "margin"
	  };
	  const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "确认重置", -1);
	  const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", null, "check_circle", -1);
	  const _hoisted_16 = [
	    _hoisted_14,
	    _hoisted_15
	  ];
	  const _hoisted_17 = /* @__PURE__ */ createBaseVNode("hr", { class: "bottom-margin top-margin" }, null, -1);
	  const _hoisted_18 = { class: "center-align" };
	  const _hoisted_19 = ["src"];
	  const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "italic" }, "醒醒, 让我们把垃圾烧成灰", -1);
	  const _hoisted_21 = { class: "middle-align" };
	  const _hoisted_22 = /* @__PURE__ */ createBaseVNode("a", {
	    href: "https://github.com/FirokOtaku",
	    target: "_blank",
	    class: "link tiny-margin"
	  }, [
	    /* @__PURE__ */ createTextVNode(" Firok "),
	    /* @__PURE__ */ createBaseVNode("i", { class: "no-margin tiny" }, "open_in_new")
	  ], -1);
	  const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<div class="middle-align"> 基于 <a href="https://www.tampermonkey.net/" class="link" target="_blank"> Tamper Monkey <i class="no-margin tiny">open_in_new</i></a>,  <a href="https://vuejs.org/" class="link" target="_blank"> Vue3 <i class="no-margin tiny">open_in_new</i></a>,  <a href="https://www.beercss.com/" class="link" target="_blank"> Beer.css <i class="no-margin tiny">open_in_new</i></a></div><div class="middle-align"> 源码以木兰宽松许可证 (第2版) 协议开源于 <a href="https://github.com/FirokOtaku/bili-enchanter" target="_blank" class="link tiny-margin"> GitHub <i class="no-margin tiny">open_in_new</i></a></div><div class="middle-align"> 图标来自 Minecraft </div>', 3);
	  const _sfc_main$2 = {
	    __name: "ComponentConfigAbout",
	    setup(__props) {
	      const isShowingConfirmBtn = ref(false);
	      const keyHideConfirmBtn = ref(null);
	      let threadHideConfigBtn = null;
	      function showConfirmBtn() {
	        isShowingConfirmBtn.value = true;
	        const key = Math.random() + ":" + Math.random();
	        keyHideConfirmBtn.value = key;
	        if (threadHideConfigBtn != null)
	          clearTimeout(threadHideConfigBtn);
	        threadHideConfigBtn = setTimeout(() => {
	          if (keyHideConfirmBtn.value === key) {
	            isShowingConfirmBtn.value = false;
	            keyHideConfirmBtn.value = null;
	          }
	        }, 3e3);
	      }
	      function onClickResetConfig() {
	        resetConfigPool();
	        showConfigDialog();
	        isShowingConfirmBtn.value = false;
	        keyHideConfirmBtn.value = null;
	        clearTimeout(threadHideConfigBtn);
	        threadHideConfigBtn = null;
	      }
	      function onClickExportConfig() {
	        let data = JSON.stringify(configReal.value, null, 2);
	        data = new Blob([data]);
	        let domLink = document.createElement("a");
	        domLink.href = window.URL.createObjectURL(data);
	        domLink.download = "bili-enchanter-config.json";
	        domLink.click();
	      }
	      async function onClickImportConfig(event) {
	        const domInput = event.target;
	        if (domInput.files.length === 0) return;
	        const file = domInput.files[0];
	        const promise = new Promise((resolve, reject) => {
	          const reader = new FileReader();
	          reader.onload = (e) => resolve(e.target.result);
	          reader.onerror = () => reject();
	          reader.readAsText(file, "utf-8");
	        });
	        const textConfig = await promise;
	        const jsonConfig = JSON.parse(textConfig);
	        updateConfig(jsonConfig);
	      }
	      return (_ctx, _cache) => {
	        return openBlock(), createElementBlock("div", {
	          class: normalizeClass(["page bottom padding", unref(cp) === "about" ? "active" : ""])
	        }, [
	          createBaseVNode("main", _hoisted_1$2, [
	            createBaseVNode("fieldset", _hoisted_2$1, [
	              createBaseVNode("div", _hoisted_3$1, [
	                createBaseVNode("button", {
	                  class: "primary small small-round",
	                  onClick: onClickExportConfig
	                }, [
	                  _hoisted_4$1,
	                  createTextVNode(" 导出配置 ")
	                ]),
	                createBaseVNode("button", _hoisted_5$1, [
	                  _hoisted_6$1,
	                  createBaseVNode("input", {
	                    type: "file",
	                    onChange: onClickImportConfig
	                  }, null, 32),
	                  createTextVNode(" 导入配置 ")
	                ])
	              ]),
	              _hoisted_7$1,
	              createBaseVNode("div", _hoisted_8$1, [
	                createBaseVNode("button", {
	                  class: "error small small-round small-margin",
	                  onClick: showConfirmBtn
	                }, _hoisted_11$1),
	                _hoisted_12$1,
	                isShowingConfirmBtn.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
	                  createBaseVNode("button", {
	                    class: "error vertical no-round",
	                    onClick: onClickResetConfig
	                  }, _hoisted_16)
	                ])) : createCommentVNode("", true)
	              ]),
	              _hoisted_17,
	              createBaseVNode("div", _hoisted_18, [
	                createBaseVNode("div", null, [
	                  createBaseVNode("img", {
	                    src: unref(strImgEnchantTable),
	                    class: "extra",
	                    style: { "image-rendering": "pixelated" }
	                  }, null, 8, _hoisted_19)
	                ]),
	                _hoisted_20
	              ]),
	              createBaseVNode("div", _hoisted_21, [
	                createTextVNode(" v" + toDisplayString(unref(pluginVersion)) + " by ", 1),
	                _hoisted_22
	              ]),
	              _hoisted_23
	            ])
	          ])
	        ], 2);
	      };
	    }
	  };
	  const _hoisted_1$1 = { class: "flex-dynamic scroll" };
	  const _sfc_main$1 = {
	    __name: "ComponentConfig",
	    setup(__props) {
	      return (_ctx, _cache) => {
	        return openBlock(), createElementBlock("div", _hoisted_1$1, [
	          createVNode(_sfc_main$4),
	          createVNode(_sfc_main$3),
	          createVNode(_sfc_main$2)
	        ]);
	      };
	    }
	  };
	  const _hoisted_1 = {
	    class: "background full flex-vertical",
	    style: {}
	  };
	  const _hoisted_2 = { class: "flex-fixed primary-container center-align extra-line" };
	  const _hoisted_3 = { class: "middle-align" };
	  const _hoisted_4 = { class: "" };
	  const _hoisted_5 = ["src"];
	  const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "left-margin tiny-margin bold" }, " Bili Enchanter ", -1);
	  const _hoisted_7 = { class: "flex-fixed secondary-container center-align" };
	  const _hoisted_8 = { class: "tabs left-align max" };
	  const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", null, "close", -1);
	  const _hoisted_10 = [
	    _hoisted_9
	  ];
	  const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", null, "check", -1);
	  const _hoisted_12 = [
	    _hoisted_11
	  ];
	  const _sfc_main = {
	    __name: "App",
	    setup(__props) {
	      function handleElement(domElement, shouldShow) {
	        if (shouldShow) {
	          domElement.style.setProperty("display", "");
	        } else {
	          domElement.style.setProperty("display", "none");
	        }
	      }
	      function enchantNavSide(conf) {
	        const domNavLeft = docMain.querySelector("ul.left-entry");
	        if (domNavLeft) {
	          const domNavLeftChildren = [...domNavLeft.children];
	          for (let step = 1; step < domNavLeftChildren.length; step++) {
	            const domNavLeftChild = domNavLeftChildren[step];
	            CHECK_BUTTON_LEFT: {
	              if (domNavLeftChild.classList.contains("left-loc-entry")) {
	                handleElement(domNavLeftChild, conf.showBtnEra);
	                break CHECK_BUTTON_LEFT;
	              }
	              const domCheckDownloadEntry = domNavLeftChild.querySelector("a.download-entry");
	              if (domCheckDownloadEntry) {
	                handleElement(domNavLeftChild, conf.showBtnDownloadClient);
	                break CHECK_BUTTON_LEFT;
	              }
	              const domCheckDefaultEntry = domNavLeftChild.querySelector("a.default-entry");
	              if (domCheckDefaultEntry) {
	                const url = domCheckDefaultEntry.href;
	                if (url.includes("www.bilibili.com/anime")) {
	                  handleElement(domNavLeftChild, conf.showBtnAnime);
	                  break CHECK_BUTTON_LEFT;
	                } else if (url.includes("live.bilibili.com")) {
	                  handleElement(domNavLeftChild, conf.showBtnLive);
	                  break CHECK_BUTTON_LEFT;
	                } else if (url.includes("game.bilibili.com")) {
	                  handleElement(domNavLeftChild, conf.showBtnGameCenter);
	                  break CHECK_BUTTON_LEFT;
	                } else if (url.includes("show.bilibili.com")) {
	                  handleElement(domNavLeftChild, conf.showBtnShop);
	                  break CHECK_BUTTON_LEFT;
	                } else if (url.includes("manga.bilibili.com")) {
	                  handleElement(domNavLeftChild, conf.showBtnManga);
	                  break CHECK_BUTTON_LEFT;
	                } else if (url.includes("www.bilibili.com/match")) {
	                  handleElement(domNavLeftChild, conf.showBtnMatch);
	                  break CHECK_BUTTON_LEFT;
	                }
	              }
	            }
	          }
	        }
	        const domNavRight = docMain.querySelector("ul.right-entry");
	        if (domNavRight) {
	          const domNavRightChildren = [...domNavRight.children];
	          for (let step = 0; step < domNavRightChildren.length; step++) {
	            const domNavRightChild = domNavRightChildren[step];
	            CHECK_BUTTON_RIGHT: {
	              if (domNavRightChild.classList.contains("header-avatar-wrap")) {
	                handleElement(domNavRightChild, conf.showBtnSpace);
	                break CHECK_BUTTON_RIGHT;
	              }
	              if (domNavRightChild.classList.contains("vip-wrap")) {
	                handleElement(domNavRightChild, conf.showBtnBig);
	                break CHECK_BUTTON_RIGHT;
	              }
	              if (domNavRightChild.classList.contains("right-entry-item--upload")) {
	                handleElement(domNavRightChild, conf.showBtnUpload);
	                break CHECK_BUTTON_RIGHT;
	              }
	              const domRightEntryOutsideLink = domNavRightChild.querySelector("a.right-entry__outside");
	              if (domRightEntryOutsideLink) {
	                const url = domRightEntryOutsideLink.href;
	                if (url.includes("message.bilibili.com")) {
	                  handleElement(domNavRightChild, conf.showBtnMessage);
	                  break CHECK_BUTTON_RIGHT;
	                } else if (url.includes("t.bilibili.com")) {
	                  handleElement(domNavRightChild, conf.showBtnT);
	                  break CHECK_BUTTON_RIGHT;
	                } else if (url.includes("space.bilibili.com") && url.includes("favlist")) {
	                  handleElement(domNavRightChild, conf.showBtnFavlist);
	                  break CHECK_BUTTON_RIGHT;
	                } else if (url.includes("www.bilibili.com/account/history")) {
	                  handleElement(domNavRightChild, conf.showBtnHistory);
	                  break CHECK_BUTTON_RIGHT;
	                } else if (url.includes("member.bilibili.com/platform/home")) {
	                  handleElement(domNavRightChild, conf.showBtnCreative);
	                  break CHECK_BUTTON_RIGHT;
	                }
	              }
	            }
	          }
	        }
	      }
	      function enchantSearchBar(conf) {
	        const domNavMid = docMain.querySelector("div.center-search-container");
	        if (domNavMid) {
	          const domSearchBarAppend = domNavMid.querySelector("div.search-panel");
	          if (domSearchBarAppend) {
	            const domSearchBarHistory = domSearchBarAppend.querySelector("div.history");
	            if (domSearchBarHistory) {
	              handleElement(domSearchBarHistory, !conf.hideSearchBarHistory);
	            }
	            const domSearchBarRecommend = domSearchBarAppend.querySelector("div.trending");
	            if (domSearchBarRecommend) {
	              handleElement(domSearchBarRecommend, !conf.hideSearchBarRecommend);
	            }
	          }
	        }
	      }
	      function enchantFeedHead(conf) {
	        const domMainFeed = docMain.querySelector("main.bili-feed4-layout");
	        const domCategory = docMain.querySelector("div.bili-header__channel");
	        if (domCategory) {
	          handleElement(domCategory, !conf.hideCategory);
	          domMainFeed.style.setProperty("padding-top", conf.hideCategory ? "24px" : "0");
	        }
	        const domCarousel = docMain.querySelector("div.recommended-swipe");
	        if (domCarousel) {
	          handleElement(domCarousel, !conf.hideCarousel);
	        }
	        const domCarouselCore = docMain.querySelector("div.recommended-swipe-core");
	        if (domCarouselCore) {
	          domCarouselCore.style.setProperty("height", "492px");
	        }
	        const domFeedBody = docMain.querySelector(".bili-feed4-layout");
	        if (domFeedBody) {
	          domFeedBody.style.setProperty("padding-bottom", "160px");
	        }
	      }
	      function enchantFeedCard(conf) {
	        const listCard = [...docMain.getElementsByClassName("bili-video-card")];
	        function handleCard(domCard, shouldHide) {
	          if (domCard.parentNode && domCard.parentNode.classList.contains("feed-card")) {
	            handleElement(domCard.parentNode, !shouldHide);
	          }
	          handleElement(domCard, !shouldHide);
	        }
	        const listRegExp = [];
	        for (let lineBlacklistTitle of conf.listBlacklistKeyword.split("\n")) {
	          if (lineBlacklistTitle === "") continue;
	          listRegExp.push({
	            keyword: lineBlacklistTitle,
	            regexp: new RegExp(lineBlacklistTitle, "i")
	          });
	        }
	        for (let domCard of listCard) {
	          let shouldBlockByEmpty = false;
	          let shouldBlockByTitle = false;
	          let shouldBlockByUid = false;
	          let shouldBlockByShort = false;
	          let isManyLike = false;
	          let isManyCoin = false;
	          let isMyFollow = false;
	          let isFriendFollow = false;
	          CHECK_CARD_CONTENT: {
	            if (domCard.textContent === "") {
	              shouldBlockByEmpty = true;
	              break CHECK_CARD_CONTENT;
	            }
	            const domTitle = domCard.querySelector(".bili-video-card__info--tit");
	            if (domTitle) {
	              const title = domTitle == null ? void 0 : domTitle.getAttribute("title");
	              for (let regexpBlacklistTitle of listRegExp) {
	                if (title.includes(regexpBlacklistTitle.keyword) || regexpBlacklistTitle.regexp.test(title)) {
	                  shouldBlockByTitle = true;
	                  break CHECK_CARD_CONTENT;
	                }
	              }
	              const domOwner = domCard.querySelector(".bili-video-card__info--owner");
	              const domOwnerName = domOwner.querySelector(".bili-video-card__info--author");
	              domOwnerName.innerText;
	              const ownerHref = new URL(domOwner.href);
	              const ownerUid = ownerHref.host.includes("space.bilibili.com") ? ownerHref.pathname.substring(1) : "";
	              for (let uid2 of conf.listBlacklistUid) {
	                if (ownerUid === uid2) {
	                  shouldBlockByUid = true;
	                  break CHECK_CARD_CONTENT;
	                }
	              }
	              const domDuration = domCard.querySelector("span.bili-video-card__stats__duration");
	              const textDuration = domDuration ? domDuration.innerText : "00:00";
	              const durationParts = textDuration.split(":").map((x2) => parseInt(x2));
	              let durationSeconds;
	              switch (durationParts.length) {
	                case 1:
	                  durationSeconds = durationParts[0];
	                  break;
	                case 2:
	                  durationSeconds = durationParts[0] * 60 + durationParts[1];
	                  break;
	                case 3:
	                  durationSeconds = durationParts[0] * 3600 + durationParts[1] * 60 + durationParts[2];
	                  break;
	                default:
	                  durationSeconds = 999999;
	              }
	              if (conf.hideShortVideo > 0 && durationSeconds < conf.hideShortVideo) {
	                shouldBlockByShort = true;
	                break CHECK_CARD_CONTENT;
	              }
	              const domExtraMark = domCard.querySelector(".bili-video-card__info--icon-text");
	              isManyLike = domExtraMark && domExtraMark.innerText.includes("点赞");
	              isManyCoin = domExtraMark && domExtraMark.innerText.includes("硬币");
	              isMyFollow = domExtraMark && domExtraMark.innerText.includes("已关注");
	              isFriendFollow = domExtraMark && domExtraMark.innerText.includes("好友关注");
	            }
	          }
	          const shouldHide = shouldBlockByUid || shouldBlockByEmpty || shouldBlockByTitle || shouldBlockByShort || isManyLike && conf.hideManyLike || isManyCoin && conf.hideManyCoin || isMyFollow && conf.hideMyFollow || isFriendFollow && conf.hideFriendFollow;
	          handleCard(domCard, shouldHide);
	        }
	        const listCategoryRcmd = [...docMain.getElementsByClassName("floor-single-card")];
	        for (let domCategoryRcmd of listCategoryRcmd) {
	          handleElement(domCategoryRcmd, !conf.hideCategoryRecommend);
	        }
	        const listLiveCard = [...docMain.getElementsByClassName("bili-live-card")];
	        for (let domLiveCard of listLiveCard) {
	          handleElement(domLiveCard, !conf.hideLiveRecommend);
	        }
	      }
	      function enchantFeedMargin() {
	        const list = [...docMain.getElementsByClassName("feed-card"), ...docMain.getElementsByClassName("bili-video-card")];
	        for (let step = 0; step < list.length; step++) {
	          const card = list[step];
	          const mt2 = card.style["margin-top"];
	          if (mt2 === "" || mt2 !== "0") {
	            card.style.setProperty("margin-top", "0");
	          }
	        }
	      }
	      function enchantAd(conf) {
	        const list = [
	          ...docMain.getElementsByClassName("ad-report"),
	          ...docMain.getElementsByClassName("ad-floor-exp")
	        ];
	        for (const ad of list) {
	          handleElement(ad, !conf.hideAd);
	        }
	      }
	      const tasks = {
	        all: [enchantNavSide, enchantSearchBar, enchantFeedHead, enchantFeedCard, enchantFeedMargin, enchantAd],
	        on1s: [enchantSearchBar],
	        on2s: [enchantFeedCard, enchantFeedMargin, enchantAd],
	        on10s: [enchantNavSide, enchantFeedHead]
	      };
	      function enchantTemp(counter) {
	        const conf = configReal.value;
	        if (-1 === counter) {
	          for (const task of tasks.all) task(conf);
	          return;
	        }
	        if (counter % 10 === 0) {
	          for (const task of tasks.on10s) task(conf);
	        }
	        if (counter % 2 === 0) {
	          for (const task of tasks.on2s) task(conf);
	        }
	        for (const task of tasks.on1s) task(conf);
	      }
	      function onDocMainContextMenu(event) {
	        let node = event.target;
	        while (node.parentNode != null) {
	          if (node.classList.contains("feed-card")) {
	            console.log("context menu event on feed card", event.target, node);
	            break;
	          }
	          node = node.parentNode;
	        }
	      }
	      let threadEnchanting = null;
	      let counterEnchanting = 1;
	      onBeforeMount(() => {
	        startConfigPool();
	        startUserInfoPool();
	        docMain.addEventListener("contextmenu", onDocMainContextMenu);
	        threadEnchanting = setInterval(() => {
	          enchantTemp(counterEnchanting);
	          counterEnchanting++;
	          if (counterEnchanting >= 100) counterEnchanting = 0;
	        }, 1e3);
	        enchantTemp(-1);
	        winMain.scroll(0, 1);
	      });
	      onBeforeUnmount(() => {
	        clearInterval(threadEnchanting);
	        threadEnchanting = null;
	        stopConfigPool();
	        stopUserInfoPool();
	        docMain.removeEventListener("contextmenu", onDocMainContextMenu);
	      });
	      return (_ctx, _cache) => {
	        return openBlock(), createElementBlock("div", _hoisted_1, [
	          createBaseVNode("nav", _hoisted_2, [
	            createBaseVNode("div", _hoisted_3, [
	              createBaseVNode("i", _hoisted_4, [
	                createBaseVNode("img", { src: unref(strImgEnchantTable) }, null, 8, _hoisted_5)
	              ]),
	              _hoisted_6
	            ])
	          ]),
	          unref(configEditing) != null ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true),
	          createBaseVNode("footer", _hoisted_7, [
	            createBaseVNode("nav", null, [
	              createBaseVNode("div", _hoisted_8, [
	                createBaseVNode("a", {
	                  class: normalizeClass(unref(cp) === "homepage" ? "active" : ""),
	                  onClick: _cache[0] || (_cache[0] = ($event) => cp.value = "homepage")
	                }, "信息流设置", 2),
	                createBaseVNode("a", {
	                  class: normalizeClass(unref(cp) === "nav" ? "active" : ""),
	                  onClick: _cache[1] || (_cache[1] = ($event) => cp.value = "nav")
	                }, "导航栏设置", 2),
	                createBaseVNode("a", {
	                  class: normalizeClass(unref(cp) === "about" ? "active" : ""),
	                  onClick: _cache[2] || (_cache[2] = ($event) => cp.value = "about")
	                }, "帮助", 2)
	              ]),
	              createBaseVNode("div", null, [
	                createBaseVNode("button", {
	                  class: "circle transparent no-margin",
	                  onClick: _cache[3] || (_cache[3] = ($event) => unref(hideConfigDialog)(false))
	                }, _hoisted_10),
	                createBaseVNode("button", {
	                  class: "circle transparent no-margin",
	                  onClick: _cache[4] || (_cache[4] = ($event) => unref(hideConfigDialog)(true))
	                }, _hoisted_12)
	              ])
	            ])
	          ])
	        ]);
	      };
	    }
	  };
	  const strStyle = "\r\nbody\r\n{\r\n    --primary:#225fa6;\r\n    --on-primary:#ffffff;\r\n    --primary-container:#d5e3ff;\r\n    --on-primary-container:#001c3b;\r\n    --secondary:#555f71;\r\n    --on-secondary:#ffffff;\r\n    --secondary-container:#d9e3f8;\r\n    --on-secondary-container:#121c2b;\r\n    --tertiary:#6e5676;\r\n    --on-tertiary:#ffffff;\r\n    --tertiary-container:#f8d8fe;\r\n    --on-tertiary-container:#27132f;\r\n    --error:#ba1a1a;\r\n    --on-error:#ffffff;\r\n    --error-container:#ffdad6;\r\n    --on-error-container:#410002;\r\n    --background:#fdfbff;\r\n    --on-background:#1a1c1e;\r\n    --surface:#faf9fd;\r\n    --on-surface:#1a1c1e;\r\n    --surface-variant:#e0e2ec;\r\n    --on-surface-variant:#43474e;\r\n    --outline:#74777f;\r\n    --outline-variant:#c4c6cf;\r\n    --shadow:#000000;\r\n    --scrim:#000000;\r\n    --inverse-surface:#2f3033;\r\n    --inverse-on-surface:#f1f0f4;\r\n    --inverse-primary:#a7c8ff;\r\n    --surface-dim:#dad9dd;\r\n    --surface-bright:#faf9fd;\r\n    --surface-container-lowest:#ffffff;\r\n    --surface-container-low:#f4f3f7;\r\n    --surface-container:#eeedf1;\r\n    --surface-container-high:#e9e7eb;\r\n    --surface-container-highest:#e3e2e6;\r\n\r\n    background: transparent !important;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    pointer-events: none;\r\n}\r\n\r\n.tooltip\r\n{\r\n    z-index: 10010 !important;\r\n}\r\n\r\nbody > div\r\n{\r\n    pointer-events: auto;\r\n}\r\n\r\n.flex-vertical {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.flex-horizontal {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.flex-fixed {\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n.flex-can-grow {\r\n    flex-grow: 1;\r\n    flex-shrink: 0;\r\n}\r\n.flex-can-shrink {\r\n    flex-grow: 0;\r\n    flex-shrink: 1;\r\n}\r\n.flex-dynamic {\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n}\r\n\r\n.half-height, .half {\r\n    height: 50%;\r\n    max-height: 50%;\r\n}\r\n.half-width, .half {\r\n    width: 50%;\r\n    max-width: 50%;\r\n}\r\n\r\n.full-height, .full {\r\n    height: 100%;\r\n    max-height: 100%;\r\n}\r\n.full-width, .full {\r\n    width: 100%;\r\n    max-width: 100%;\r\n}\r\n\r\n@media only screen and (max-height: 12rem) {\r\n    .mh:not(.sh),\r\n    .lh:not(.sh),\r\n    .mh.lh:not(.sh) {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-height: 12rem) and (max-height: 24rem) {\r\n    .sh:not(.mh),\r\n    .lh:not(.mh),\r\n    .sh.lh:not(.mh) {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-height: 24rem) {\r\n    .mh:not(.lh),\r\n    .sh:not(.lh),\r\n    .mh.sh:not(.lh) {\r\n        display: none;\r\n    }\r\n}\r\n";
	  const strJsBeer = 'let m,S,M,P;const d={light:"",dark:""},z=[];async function U(t){await new Promise(e=>setTimeout(e,t))}function X(){return"fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function C(t,e){try{return typeof t=="string"?(e??document).querySelector(t):t}catch{return null}}function y(t,e){try{return typeof t=="string"?(e??document).querySelectorAll(t):t??z}catch{return z}}function g(t,e){var n;return((n=t==null?void 0:t.classList)==null?void 0:n.contains(e))??!1}function L(t,e){var n;return((n=t==null?void 0:t.tagName)==null?void 0:n.toLowerCase())===e}function T(t,e){var n;return((n=t==null?void 0:t.type)==null?void 0:n.toLowerCase())===e}function h(t,e){var n;(n=t==null?void 0:t.classList)==null||n.add(e)}function f(t,e){var n;(n=t==null?void 0:t.classList)==null||n.remove(e)}function p(t,e,n,r=!0){t==null||t.addEventListener(e,n,r)}function V(t,e,n,r=!0){t==null||t.removeEventListener(e,n,r)}function Y(t,e){var n;(n=e==null?void 0:e.parentNode)==null||n.insertBefore(t,e)}function $(t){return t==null?void 0:t.previousElementSibling}function H(t){return t==null?void 0:t.nextElementSibling}function x(t){return t==null?void 0:t.parentElement}function J(t){const e=document.createElement("div");for(let n=0,r=Object.keys(t),a=r.length;n<a;n++){const o=r[n],c=t[o];e.setAttribute(o,c)}return e}function w(t){const e=t;T(e,"number")&&!e.value&&(e.value=""),e.placeholder||(e.placeholder=" "),t.getAttribute("data-ui")&&D(t,null)}function tt(t){D(t.currentTarget,null,null,t)}function et(t){const e=t.currentTarget,n=x(e),r=C("input:not([type=file], [type=checkbox], [type=radio]), select, textarea",n);r&&r.focus()}function nt(t){const e=t.currentTarget;w(e)}function rt(t){const e=t.currentTarget;w(e)}function K(t){V(document.body,"click",K);const e=t.target,n=y("menu.active");for(let r=0,a=n.length;r<a;r++)Z(e,n[r],t)}function it(t){const e=t.currentTarget;f(e,"active"),m&&clearTimeout(m)}function at(t){const e=t.currentTarget;F(e)}function ot(t){const e=t.currentTarget;_(e)}function ct(t){const e=t.currentTarget;F(e,t)}function st(t){const e=t.currentTarget;_(e,t)}function ut(t){const e=t.currentTarget;R(e)}function j(){S&&clearTimeout(S),S=setTimeout(()=>{A()},180)}function F(t,e){if(e&&e.key==="Enter"){const a=$(t);if(!T(a,"file"))return;a.click();return}const n=t,r=H(t);T(r,"text")&&(r.value=n.files?Array.from(n.files).map(a=>a.name).join(", "):"",r.readOnly=!0,p(r,"keydown",ct,!1),w(r))}function _(t,e){if(e&&e.key==="Enter"){const a=$(t);if(!T(a,"color"))return;a.click();return}const n=t,r=H(t);T(r,"text")&&(r.readOnly=!0,r.value=n.value,p(r,"keydown",st,!1),w(r))}function R(t){const e=x(t),n=x(t);e.removeAttribute("style"),g(e,"min")&&e.style.setProperty("---size",`${Math.max(t.scrollHeight,n.offsetHeight)}px`)}function B(t){const e=x(t),n=C("span",e),r=y("input",e);if(!r.length||!n)return;const a=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size"))||16,o=g(e,"max")?0:.25*a*100/r[0].offsetWidth,c=[],l=[];for(let k=0,W=r.length;k<W;k++){const I=parseFloat(r[k].min)||0,G=parseFloat(r[k].max)||100,O=parseFloat(r[k].value)||0,q=(O-I)*100/(G-I),Q=o/2-o*q/100;c.push(q+Q),l.push(O)}let i=c[0],s=0,u=100-s-i,v=l[0],b=l[1]||0;r.length>1&&(i=Math.abs(c[1]-c[0]),s=c[1]>c[0]?c[0]:c[1],u=100-s-i,b>v&&(v=l[1]||0,b=l[0])),e.style.setProperty("---start",`${s}%`),e.style.setProperty("---end",`${u}%`),e.style.setProperty("---value1",`\'${v}\'`),e.style.setProperty("---value2",`\'${b}\'`)}function N(t){if(t){const n=t.target;if(n.type==="range"){B(n);return}}const e=y(".slider > input[type=range]");e.length?p(globalThis,"input",N,!1):V(globalThis,"input",N,!1);for(let n=0,r=e.length;n<r;n++)B(e[n])}async function D(t,e,n,r){if(!(!e&&(e=C(t.getAttribute("data-ui")),!e))){if(L(e,"dialog")){await ft(t,e);return}if(L(e,"menu")){Z(t,e,r);return}if(g(e,"snackbar")){dt(t,e,n);return}if(g(e,"page")){lt(t,e);return}if(E(t),g(e,"active")){f(e,"active");return}h(e,"active")}}function E(t){t.id&&g(t,"page")&&(t=C(`[data-ui="#${t.id}"]`)??t);const e=x(t);if(!g(e,"tabs"))return;const n=y("a",e);for(let r=0,a=n.length;r<a;r++)f(n[r],"active");h(t,"active")}function lt(t,e){E(t);const n=x(e);if(n)for(let r=0,a=n.children.length;r<a;r++)g(n.children[r],"page")&&f(n.children[r],"active");h(e,"active")}function Z(t,e,n){M&&clearTimeout(M),M=setTimeout(()=>{var l;p(document.body,"click",K),(l=document.activeElement)==null||l.blur(),E(t);const r=g(e,"active"),a=(n==null?void 0:n.target)===t,o=!!t.closest("menu");if(!r&&o||r&&a){f(e,"active");return}const c=y("menu.active");for(let i=0,s=c.length;i<s;i++)f(c[i],"active");h(e,"active")},90)}async function ft(t,e){var i;(i=document.activeElement)==null||i.blur(),E(t);let n=$(e);const r=e,a=g(e,"active")||r.open,o=g(e,"modal"),c=x(e),l=L(c,"nav");if(g(n,"overlay")||(n=J({class:"overlay"}),Y(n,e),await U(90)),n.onclick=()=>{o||(f(t,"active"),f(e,"active"),f(n,"active"),r.close())},l){const s=y("dialog, a, .overlay",c);for(let u=0,v=s.length;u<v;u++){const b=s[u];f(b,"active"),b.open&&b.close()}}a?(f(t,"active"),f(n,"active"),f(e,"active"),r.close()):(!L(t,"button")&&!g(t,"button")&&!g(t,"chip")&&h(t,"active"),h(n,"active"),h(e,"active"),o?r.showModal():r.show())}function dt(t,e,n){var a;(a=document.activeElement)==null||a.blur(),E(t);const r=y(".snackbar.active");for(let o=0,c=r.length;o<c;o++)f(r[o],"active");h(e,"active"),p(e,"click",it),m&&clearTimeout(m),n!==-1&&(m=setTimeout(()=>{f(e,"active")},n??6e3))}function gt(){if(d.light&&d.dark)return d;const t=document.createElement("body");t.className="light",document.body.appendChild(t);const e=document.createElement("body");e.className="dark",document.body.appendChild(e);const n=getComputedStyle(t),r=getComputedStyle(e),a=["--primary","--on-primary","--primary-container","--on-primary-container","--secondary","--on-secondary","--secondary-container","--on-secondary-container","--tertiary","--on-tertiary","--tertiary-container","--on-tertiary-container","--error","--on-error","--error-container","--on-error-container","--background","--on-background","--surface","--on-surface","--surface-variant","--on-surface-variant","--outline","--outline-variant","--shadow","--scrim","--inverse-surface","--inverse-on-surface","--inverse-primary","--surface-dim","--surface-bright","--surface-container-lowest","--surface-container-low","--surface-container","--surface-container-high","--surface-container-highest"];for(let o=0,c=a.length;o<c;o++)d.light+=a[o]+":"+n.getPropertyValue(a[o])+";",d.dark+=a[o]+":"+r.getPropertyValue(a[o])+";";return document.body.removeChild(t),document.body.removeChild(e),d}function yt(t){if(!t||!globalThis.materialDynamicColors)return gt();const e=/dark/i.test(document.body.className)?"dark":"light";return t.light&&t.dark?(d.light=t.light,d.dark=t.dark,document.body.setAttribute("style",t[e]),t):globalThis.materialDynamicColors(t).then(n=>{const r=a=>{let o="";for(let c=0,l=Object.keys(a),i=l.length;c<i;c++){const s=l[c],u=a[s],v=s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();o+="--"+v+":"+u+";"}return o};return d.light=r(n.light),d.dark=r(n.dark),document.body.setAttribute("style",d[e]),d})}function pt(t){if(!t)return/dark/i.test(document.body.className)?"dark":"light";document.body.classList.remove("light","dark"),document.body.classList.add(t);const e=t==="light"?d.light:d.dark;return globalThis.materialDynamicColors&&document.body.setAttribute("style",e),t}function ht(){P||(P=new MutationObserver(j),P.observe(document.body,{childList:!0,subtree:!0}),j())}function A(t,e){if(t){if(t==="setup"){ht();return}if(t==="guid")return X();if(t==="mode")return pt(e);if(t==="theme")return yt(e);const i=C(t);if(!i)return;D(i,i,e)}const n=y("[data-ui]");for(let i=0,s=n.length;i<s;i++)p(n[i],"click",tt);const r=y(".field > label");for(let i=0,s=r.length;i<s;i++)p(r[i],"click",et);const a=y(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea");for(let i=0,s=a.length;i<s;i++){const u=a[i];p(u,"focus",nt),p(u,"blur",rt),w(u)}const o=y(".field > input[type=file]");for(let i=0,s=o.length;i<s;i++){const u=o[i];p(u,"change",at),F(u)}const c=y(".field > input[type=color]");for(let i=0,s=c.length;i<s;i++){const u=c[i];p(u,"change",ot),_(u)}const l=y(".field.textarea > textarea");for(let i=0,s=l.length;i<s;i++){const u=l[i];p(u,"input",ut),R(u)}N()}globalThis.addEventListener&&globalThis.addEventListener("load",async()=>await A("setup"));globalThis.beercss=A;globalThis.ui=A;\n\nexport default globalThis.ui;';
	  const strStyleBeer = ':root{--size: 16px;--font: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon: "Material Symbols Outlined";--speed1: .1s;--speed2: .2s;--speed3: .3s;--speed4: .4s;--active: rgb(128 128 128 / .192);--overlay: rgb(0 0 0 / .5);--elevate1: 0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2: 0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3: 0 .375rem .75rem 0 rgb(0 0 0 / .48);--top: env(safe-area-inset-top);--bottom: env(safe-area-inset-bottom);--left: env(safe-area-inset-left);--right: env(safe-area-inset-right)}:root,body.light{--primary: #6750a4;--on-primary: #ffffff;--primary-container: #e9ddff;--on-primary-container: #22005d;--secondary: #625b71;--on-secondary: #ffffff;--secondary-container: #e8def8;--on-secondary-container: #1e192b;--tertiary: #7e5260;--on-tertiary: #ffffff;--tertiary-container: #ffd9e3;--on-tertiary-container: #31101d;--error: #ba1a1a;--on-error: #ffffff;--error-container: #ffdad6;--on-error-container: #410002;--background: #fffbff;--on-background: #1c1b1e;--surface: #fdf8fd;--on-surface: #1c1b1e;--surface-variant: #e7e0eb;--on-surface-variant: #49454e;--outline: #7a757f;--outline-variant: #cac4cf;--shadow: #000000;--scrim: #000000;--inverse-surface: #313033;--inverse-on-surface: #f4eff4;--inverse-primary: #cfbcff;--surface-dim: #ddd8dd;--surface-bright: #fdf8fd;--surface-container-lowest: #ffffff;--surface-container-low: #f7f2f7;--surface-container: #f2ecf1;--surface-container-high: #ece7eb;--surface-container-highest: #e6e1e6}body.dark{--primary: #cfbcff;--on-primary: #381e72;--primary-container: #4f378a;--on-primary-container: #e9ddff;--secondary: #cbc2db;--on-secondary: #332d41;--secondary-container: #4a4458;--on-secondary-container: #e8def8;--tertiary: #efb8c8;--on-tertiary: #4a2532;--tertiary-container: #633b48;--on-tertiary-container: #ffd9e3;--error: #ffb4ab;--on-error: #690005;--error-container: #93000a;--on-error-container: #ffb4ab;--background: #1c1b1e;--on-background: #e6e1e6;--surface: #141316;--on-surface: #e6e1e6;--surface-variant: #49454e;--on-surface-variant: #cac4cf;--outline: #948f99;--outline-variant: #49454e;--shadow: #000000;--scrim: #000000;--inverse-surface: #e6e1e6;--inverse-on-surface: #313033;--inverse-primary: #6750a4;--surface-dim: #141316;--surface-bright: #3a383c;--surface-container-lowest: #0f0e11;--surface-container-low: #1c1b1e;--surface-container: #201f22;--surface-container-high: #2b292d;--surface-container-highest: #363438}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:block;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.6.12/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:block;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.6.12/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:block;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.6.12/dist/cdn/material-symbols-sharp.woff2) format("woff2")}*{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}body{color:var(--on-surface);background-color:var(--surface);overflow-x:hidden}label{font-size:.75rem;vertical-align:baseline}a,b,i,span,strong,em,code{vertical-align:baseline}a,button,.button{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}a,button,.button,i,label{-webkit-user-select:none;user-select:none}body ::-webkit-scrollbar,body ::-webkit-scrollbar-thumb,body ::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}body :is(:hover,:focus)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}*+:is(address,article,blockquote,code,.field,fieldset,form,.grid,h1,h2,h3,h4,h5,h6,nav,ol,p,pre,.row,section,aside,table,.tabs,ul){margin-block-start:1rem}.primary{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text{color:var(--primary)!important}.primary-border{border-color:var(--primary)!important}.primary-container{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text{color:var(--secondary)!important}.secondary-border{border-color:var(--secondary)!important}.secondary-container{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text{color:var(--tertiary)!important}.tertiary-border{border-color:var(--tertiary)!important}.tertiary-container{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error{background-color:var(--error)!important;color:var(--on-error)!important}.error-text{color:var(--error)!important}.error-border{border-color:var(--error)!important}.error-container{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background{background-color:var(--background)!important;color:var(--on-background)!important}.surface,.surface-dim,.surface-bright,.surface-container-lowest,.surface-container-low,.surface-container,.surface-container-high,.surface-container-highest{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text{color:var(--inverse-primary)!important}.inverse-primary-border{border-color:var(--inverse-primary)!important}.surface-dim{background-color:var(--surface-dim)!important}.surface-bright{background-color:var(--surface-bright)!important}.surface-container-lowest{background-color:var(--surface-container-lowest)!important}.surface-container{background-color:var(--surface-container)!important}.surface-container-high{background-color:var(--surface-container-high)!important}.surface-container-highest{background-color:var(--surface-container-highest)!important}.surface-container-low{background-color:var(--surface-container-low)!important}.black{background-color:#000!important}.black-border{border-color:#000!important}.black-text{color:#000!important}.white{background-color:#fff!important}.white-border{border-color:#fff!important}.white-text{color:#fff!important}.transparent{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border{border-color:transparent!important}.transparent-text{color:transparent!important}.fill:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align{display:flex;align-items:center!important}.bottom-align{display:flex;align-items:flex-end!important}.top-align{display:flex;align-items:flex-start!important}.left-align{text-align:start;justify-content:flex-start!important}.right-align{text-align:end;justify-content:flex-end!important}.center-align{text-align:center;justify-content:center!important}.red,.red6{background-color:#f44336!important}.red-border{border-color:#f44336!important}.red-text{color:#f44336!important}.red1{background-color:#ffebee!important}.red2{background-color:#ffcdd2!important}.red3{background-color:#ef9a9a!important}.red4{background-color:#e57373!important}.red5{background-color:#ef5350!important}.red7{background-color:#e53935!important}.red8{background-color:#d32f2f!important}.red9{background-color:#c62828!important}.red10{background-color:#b71c1c!important}.pink,.pink6{background-color:#e91e63!important}.pink-border{border-color:#e91e63!important}.pink-text{color:#e91e63!important}.pink1{background-color:#fce4ec!important}.pink2{background-color:#f8bbd0!important}.pink3{background-color:#f48fb1!important}.pink4{background-color:#f06292!important}.pink5{background-color:#ec407a!important}.pink7{background-color:#d81b60!important}.pink8{background-color:#c2185b!important}.pink9{background-color:#ad1457!important}.pink10{background-color:#880e4f!important}.purple,.purple6{background-color:#9c27b0!important}.purple-border{border-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.purple1{background-color:#f3e5f5!important}.purple2{background-color:#e1bee7!important}.purple3{background-color:#ce93d8!important}.purple4{background-color:#ba68c8!important}.purple5{background-color:#ab47bc!important}.purple7{background-color:#8e24aa!important}.purple8{background-color:#7b1fa2!important}.purple9{background-color:#6a1b9a!important}.purple10{background-color:#4a148c!important}.deep-purple,.deep-purple6{background-color:#673ab7!important}.deep-purple-border{border-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.deep-purple1{background-color:#ede7f6!important}.deep-purple2{background-color:#d1c4e9!important}.deep-purple3{background-color:#b39ddb!important}.deep-purple4{background-color:#9575cd!important}.deep-purple5{background-color:#7e57c2!important}.deep-purple7{background-color:#5e35b1!important}.deep-purple8{background-color:#512da8!important}.deep-purple9{background-color:#4527a0!important}.deep-purple10{background-color:#311b92!important}.indigo,.indigo6{background-color:#3f51b5!important}.indigo-border{border-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.indigo1{background-color:#e8eaf6!important}.indigo2{background-color:#c5cae9!important}.indigo3{background-color:#9fa8da!important}.indigo4{background-color:#7986cb!important}.indigo5{background-color:#5c6bc0!important}.indigo7{background-color:#3949ab!important}.indigo8{background-color:#303f9f!important}.indigo9{background-color:#283593!important}.indigo10{background-color:#1a237e!important}.blue,.blue6{background-color:#2196f3!important}.blue-border{border-color:#2196f3!important}.blue-text{color:#2196f3!important}.blue1{background-color:#e3f2fd!important}.blue2{background-color:#bbdefb!important}.blue3{background-color:#90caf9!important}.blue4{background-color:#64b5f6!important}.blue5{background-color:#42a5f5!important}.blue7{background-color:#1e88e5!important}.blue8{background-color:#1976d2!important}.blue9{background-color:#1565c0!important}.blue10{background-color:#0d47a1!important}.light-blue,.light-blue6{background-color:#03a9f4!important}.light-blue-border{border-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.light-blue1{background-color:#e1f5fe!important}.light-blue2{background-color:#b3e5fc!important}.light-blue3{background-color:#81d4fa!important}.light-blue4{background-color:#4fc3f7!important}.light-blue5{background-color:#29b6f6!important}.light-blue7{background-color:#039be5!important}.light-blue8{background-color:#0288d1!important}.light-blue9{background-color:#0277bd!important}.light-blue10{background-color:#01579b!important}.cyan,.cyan6{background-color:#00bcd4!important}.cyan-border{border-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.cyan1{background-color:#e0f7fa!important}.cyan2{background-color:#b2ebf2!important}.cyan3{background-color:#80deea!important}.cyan4{background-color:#4dd0e1!important}.cyan5{background-color:#26c6da!important}.cyan7{background-color:#00acc1!important}.cyan8{background-color:#0097a7!important}.cyan9{background-color:#00838f!important}.cyan10{background-color:#006064!important}.teal,.teal6{background-color:#009688!important}.teal-border{border-color:#009688!important}.teal-text{color:#009688!important}.teal1{background-color:#e0f2f1!important}.teal2{background-color:#b2dfdb!important}.teal3{background-color:#80cbc4!important}.teal4{background-color:#4db6ac!important}.teal5{background-color:#26a69a!important}.teal7{background-color:#00897b!important}.teal8{background-color:#00796b!important}.teal9{background-color:#00695c!important}.teal10{background-color:#004d40!important}.green,.green6{background-color:#4caf50!important}.green-border{border-color:#4caf50!important}.green-text{color:#4caf50!important}.green1{background-color:#e8f5e9!important}.green2{background-color:#c8e6c9!important}.green3{background-color:#a5d6a7!important}.green4{background-color:#81c784!important}.green5{background-color:#66bb6a!important}.green7{background-color:#43a047!important}.green8{background-color:#388e3c!important}.green9{background-color:#2e7d32!important}.green10{background-color:#1b5e20!important}.light-green,.light-green6{background-color:#8bc34a!important}.light-green-border{border-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.light-green1{background-color:#f1f8e9!important}.light-green2{background-color:#dcedc8!important}.light-green3{background-color:#c5e1a5!important}.light-green4{background-color:#aed581!important}.light-green5{background-color:#9ccc65!important}.light-green7{background-color:#7cb342!important}.light-green8{background-color:#689f38!important}.light-green9{background-color:#558b2f!important}.light-green10{background-color:#33691e!important}.lime,.lime6{background-color:#cddc39!important}.lime-border{border-color:#cddc39!important}.lime-text{color:#cddc39!important}.lime1{background-color:#f9fbe7!important}.lime2{background-color:#f0f4c3!important}.lime3{background-color:#e6ee9c!important}.lime4{background-color:#dce775!important}.lime5{background-color:#d4e157!important}.lime7{background-color:#c0ca33!important}.lime8{background-color:#afb42b!important}.lime9{background-color:#9e9d24!important}.lime10{background-color:#827717!important}.yellow,.yellow6{background-color:#ffeb3b!important}.yellow-border{border-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.yellow1{background-color:#fffde7!important}.yellow2{background-color:#fff9c4!important}.yellow3{background-color:#fff59d!important}.yellow4{background-color:#fff176!important}.yellow5{background-color:#ffee58!important}.yellow7{background-color:#fdd835!important}.yellow8{background-color:#fbc02d!important}.yellow9{background-color:#f9a825!important}.yellow10{background-color:#f57f17!important}.amber,.amber6{background-color:#ffc107!important}.amber-border{border-color:#ffc107!important}.amber-text{color:#ffc107!important}.amber1{background-color:#fff8e1!important}.amber2{background-color:#ffecb3!important}.amber3{background-color:#ffe082!important}.amber4{background-color:#ffd54f!important}.amber5{background-color:#ffca28!important}.amber7{background-color:#ffb300!important}.amber8{background-color:#ffa000!important}.amber9{background-color:#ff8f00!important}.amber10{background-color:#ff6f00!important}.orange,.orange6{background-color:#ff9800!important}.orange-border{border-color:#ff9800!important}.orange-text{color:#ff9800!important}.orange1{background-color:#fff3e0!important}.orange2{background-color:#ffe0b2!important}.orange3{background-color:#ffcc80!important}.orange4{background-color:#ffb74d!important}.orange5{background-color:#ffa726!important}.orange7{background-color:#fb8c00!important}.orange8{background-color:#f57c00!important}.orange9{background-color:#ef6c00!important}.orange10{background-color:#e65100!important}.deep-orange,.deep-orange6{background-color:#ff5722!important}.deep-orange-border{border-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.deep-orange1{background-color:#fbe9e7!important}.deep-orange2{background-color:#ffccbc!important}.deep-orange3{background-color:#ffab91!important}.deep-orange4{background-color:#ff8a65!important}.deep-orange5{background-color:#ff7043!important}.deep-orange7{background-color:#f4511e!important}.deep-orange8{background-color:#e64a19!important}.deep-orange9{background-color:#d84315!important}.deep-orange10{background-color:#bf360c!important}.brown,.brown6{background-color:#795548!important}.brown-border{border-color:#795548!important}.brown-text{color:#795548!important}.brown1{background-color:#efebe9!important}.brown2{background-color:#d7ccc8!important}.brown3{background-color:#bcaaa4!important}.brown4{background-color:#a1887f!important}.brown5{background-color:#8d6e63!important}.brown7{background-color:#6d4c41!important}.brown8{background-color:#5d4037!important}.brown9{background-color:#4e342e!important}.brown10{background-color:#3e2723!important}.blue-grey,.blue-grey6{background-color:#607d8b!important}.blue-grey-border{border-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.blue-grey1{background-color:#eceff1!important}.blue-grey2{background-color:#cfd8dc!important}.blue-grey3{background-color:#b0bec5!important}.blue-grey4{background-color:#90a4ae!important}.blue-grey5{background-color:#78909c!important}.blue-grey7{background-color:#546e7a!important}.blue-grey8{background-color:#455a64!important}.blue-grey9{background-color:#37474f!important}.blue-grey10{background-color:#263238!important}.grey,.grey6{background-color:#9e9e9e!important}.grey-border{border-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.grey1{background-color:#fafafa!important}.grey2{background-color:#f5f5f5!important}.grey3{background-color:#eee!important}.grey4{background-color:#e0e0e0!important}.grey5{background-color:#bdbdbd!important}.grey7{background-color:#757575!important}.grey8{background-color:#616161!important}.grey9{background-color:#424242!important}.grey10{background-color:#212121!important}.horizontal{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal>*{margin-block:0!important}.vertical{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block:.5rem}.vertical>*{margin-inline:0!important}.no-elevate{box-shadow:none!important}.small-elevate,.elevate{box-shadow:var(--elevate1)!important}.medium-elevate{box-shadow:var(--elevate2)!important}.large-elevate{box-shadow:var(--elevate3)!important}.round{border-radius:var(---round)}.small-round,.medium-round,.large-round{border-radius:var(---round)!important}.top-round,.bottom-round,.left-round,.right-round,.medium-round,.round{---round: 2rem}.small-round{---round: .5rem}.large-round{---round: 3.5rem}.no-round,.square,.top-round,.bottom-round,.left-round,.right-round{border-radius:0!important}.top-round{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle{border-radius:50%}:is(button,.button,.chip).circle{border-radius:2.5rem}:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium{block-size:2.5rem;inline-size:2.5rem;padding:0}:is(.circle,.square)>span{display:none}:is(.circle,.square).small:not(i,img,video,svg),:is(.circle,.square).chip{block-size:2rem;inline-size:2rem}:is(.circle,.square).large:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round{border-radius:1rem!important}.border:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border{border-color:transparent!important}:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu>a,menu.max,table,.tabs):not(.round){border-radius:0}[class*=margin]:not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}[class*=margin]{---margin: 1rem}.no-margin{---margin: 0}.auto-margin{---margin: auto}.tiny-margin{---margin: .25rem}.small-margin{---margin: .5rem}.large-margin{---margin: 1.5rem}.left-margin,.horizontal-margin{margin-inline-start:var(---margin)!important}.right-margin,.horizontal-margin{margin-inline-end:var(---margin)!important}.top-margin,.vertical-margin{margin-block-start:var(---margin)!important}.bottom-margin,.vertical-margin{margin-block-end:var(---margin)!important}.no-opacity{opacity:1!important}.opacity{opacity:0!important}.small-opacity{opacity:.75!important}.medium-opacity{opacity:.5!important}.large-opacity{opacity:.25!important}[class*=padding]:not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}[class*=padding]{---padding: 1rem}.no-padding{---padding: 0}.tiny-padding{---padding: .25rem}.small-padding{---padding: .5rem}.large-padding{---padding: 1.5rem}.left-padding,.horizontal-padding{padding-inline-start:var(---padding)!important}.right-padding,.horizontal-padding{padding-inline-end:var(---padding)!important}.top-padding,.vertical-padding{padding-block-start:var(---padding)!important}.bottom-padding,.vertical-padding{padding-block-end:var(---padding)!important}.front{z-index:10!important}.back{z-index:-10!important}.left{inset-inline-start:0}.right{inset-inline-end:0}.top{inset-block-start:0}.bottom{inset-block-end:0}.center{inset-inline-start:50%;transform:translate(-50%)}[dir=rtl] .center{transform:translate(50%)}.middle{inset-block-start:50%;transform:translateY(-50%)}.middle.center{transform:translate(-50%,-50%)}[dir=rtl] .middle.center{transform:translate(50%,-50%)}.scroll{overflow:auto}.no-scroll{overflow:hidden}[class*=width]{max-inline-size:100%}.auto-width{inline-size:auto}.small-width{inline-size:12rem!important}.medium-width{inline-size:24rem!important}.large-width{inline-size:36rem!important}.auto-height{block-size:auto}.small-height{block-size:12rem!important}.medium-height{block-size:24rem!important}.large-height{block-size:36rem!important}.wrap{display:block;white-space:normal}.no-wrap:not(menu){display:flex;white-space:nowrap}.tiny-space:not(nav,ol,ul,.row,.grid,table,.tooltip){block-size:.5rem}:is(.space,.small-space):not(nav,ol,ul,.row,.grid,table,.tooltip){block-size:1rem}.medium-space:not(nav,ol,ul,.row,.grid,table,.tooltip){block-size:2rem}.large-space:not(nav,ol,ul,.row,.grid,table,.tooltip){block-size:3rem}.responsive{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m:not(.s),.l:not(.s),.m.l:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s:not(.m),.l:not(.m),.s.l:not(.m){display:none}}@media only screen and (min-width: 993px){.m:not(.l),.s:not(.l),.m.s:not(.l){display:none}}html{font-size:var(--size)}body{font-family:var(--font);font-size:.875rem;line-height:1.5rem;letter-spacing:.0313rem}h1,h2,h3,h4,h5,h6{font-weight:400;display:block;align-items:center;line-height:normal}h1{font-size:3.5625rem}h2{font-size:2.8125rem}h3{font-size:2.25rem}h4{font-size:2rem}h5{font-size:1.75rem}h6{font-size:1.5rem}h1.small{font-size:3.0625rem}h2.small{font-size:2.3125rem}h3.small{font-size:1.75rem}h4.small{font-size:1.5rem}h5.small{font-size:1.25rem}h6.small{font-size:1rem}h1.large{font-size:4.0625rem}h2.large{font-size:3.3125rem}h3.large{font-size:2.75rem}h4.large{font-size:2.5rem}h5.large{font-size:2.25rem}h6.large{font-size:2rem}.link{color:var(--primary)!important}.inverse-link{color:var(--inverse-primary)!important}.truncate{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate>*{white-space:nowrap!important}.small-text{font-size:.75rem}.medium-text{font-size:.875rem}.large-text{font-size:1rem}.upper{text-transform:uppercase}.lower{text-transform:lowercase}.capitalize{text-transform:capitalize}.bold{font-weight:700}.overline{text-decoration:line-through}.underline{text-decoration:underline}.italic{font-style:italic}p{margin:.5rem 0}.no-line{line-height:normal}.tiny-line{line-height:1.25rem}.small-line{line-height:1.5rem}.medium-line{line-height:1.75rem}.large-line{line-height:2rem}.extra-line{line-height:2.25rem}pre{border-radius:0;background-color:var(--surface-container);white-space:pre-wrap;padding:1rem;border-inline-start:.25rem solid var(--primary);font-family:inherit}blockquote{border-radius:0;padding:1rem;border-inline-start:.25rem solid var(--primary);font-family:inherit}code{border-radius:0;background-color:var(--surface-container);white-space:pre-wrap;direction:ltr;padding:.25rem}pre>code,blockquote>code{padding:0}.scroll>code{white-space:pre}.wave:after,.chip:after,:is(.button,button):after,:is(nav.tabbed,.tabs)>a:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,var(--active) 1%,transparent 1%);opacity:0;transition:none}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a):is(:focus-visible,:hover):after{background-size:15000%;opacity:1;transition:background-size var(--speed2) linear}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a):active:after{background-size:5000%;opacity:0;transition:none}.no-wave:after,.no-wave:is(:hover,:active):after{display:none}.badge{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.6875rem;text-transform:none;z-index:2;padding:0 .25rem;min-block-size:1rem;min-inline-size:1rem;background-color:var(--error);color:var(--on-error);line-height:normal;border-radius:1rem;inset:50% auto auto 50%;transform:translateY(-100%);font-family:var(--font)}.badge.top{transform:translate(-50%,-100%)}.badge.bottom{transform:translate(-50%)}.badge.left{transform:translate(-100%,-50%)}.badge.right{transform:translateY(-50%)}.badge.top.left{transform:translate(-100%,-100%)}.badge.bottom.left{transform:translate(-100%)}.badge.top.right{transform:translateY(-100%)}.badge.bottom.right{transform:translate(0)}.badge.border{border-color:var(--error);color:var(--error);background-color:var(--surface)}.badge:is(.circle,.square){text-align:center;inline-size:auto;block-size:auto;padding:0 .25rem;border-radius:1rem}.badge.square{border-radius:0}.badge.min>*{display:none}.badge.min{clip-path:circle(18.75% at 50% 50%)}nav:is(.left,.right,.top,.bottom)>a>.badge,nav:is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a>.badge{inset:1rem auto auto 50%}.badge.none{inset:auto!important;transform:none;position:relative;margin:0 .125rem}:is(button,.button,.chip)>.badge.none{margin:0 -.5rem}.button,button{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3);-webkit-user-select:none;user-select:none;gap:1rem;line-height:normal}:is(button,.button).small{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border{border-color:var(--outline);color:var(--primary)}:is(button,.button):not(.border,.chip):hover{box-shadow:var(--elevate1)}.extend>span{display:none}.extend:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.extend:is(:hover,.active)>i+span{display:inherit;margin-inline-start:1.5rem}.extend:is(:hover,.active)>:is(img,svg)+span{display:inherit;margin-inline-start:2.5rem}:is(.button,button)[disabled]{opacity:.5;cursor:not-allowed}.button[disabled]{pointer-events:none}:is(.button,button)[disabled]:before,:is(.button,button)[disabled]:after{display:none}:is(.button,button).fill{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical{border-radius:2rem}article{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3)}article.small{block-size:12rem}article.medium{block-size:20rem}article.large{block-size:32rem}.chip{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3);-webkit-user-select:none;user-select:none;gap:1rem;line-height:normal}.chip.fill:hover{box-shadow:var(--elevate1)}.chip.medium{block-size:2.5rem;min-inline-size:2.5rem}.chip.large{block-size:3rem;min-inline-size:3rem}.chip.fill{background-color:var(--secondary-container)!important;border:none}.chip.round.small{border-radius:1rem}.chip.round{border-radius:1.25rem}.chip.round.large{border-radius:1.5rem}main.responsive{flex:1;padding:.5rem;overflow-x:hidden}:is(main,header,footer,section).responsive{max-inline-size:75rem;margin:0 auto}:is(main,header,footer,section).responsive.max{max-inline-size:100%}*:has(>main.responsive){display:flex;flex-direction:column;min-block-size:100vh}*:has(>nav.bottom:not(.s,.m,.l)){padding-block-end:calc(var(--bottom) + 5rem)}*:has(>nav.top:not(.s,.m,.l)){padding-block-start:calc(var(--top) + 5rem)}*:has(>nav.left:not(.s,.m,.l)){padding-inline-start:calc(var(--left) + 5rem)}*:has(>nav.right:not(.s,.m,.l)){padding-inline-end:calc(var(--right) + 5rem)}*:has(>nav.drawer.left:not(.s,.m,.l)){padding-inline-start:calc(var(--left) + 20rem)}*:has(>nav.drawer.right:not(.s,.m,.l)){padding-inline-end:calc(var(--right) + 20rem)}nav.top:not(.s,.m,.l)~header.fixed{inset-block-start:5rem}nav.bottom:not(.s,.m,.l)~footer.fixed{inset-block-end:5rem}:not(main):has(>aside){overflow:auto}aside{z-index:1}aside:not(.fixed,.absolute).right{float:right}aside:not(.fixed,.absolute).left{float:left}@media only screen and (max-width: 600px){*:has(>nav.s.bottom){padding-block-end:calc(var(--bottom) + 5rem)}*:has(>nav.s.top){padding-block-start:calc(var(--top) + 5rem)}*:has(>nav.s.left){padding-inline-start:calc(var(--left) + 5rem)}*:has(>nav.s.right){padding-inline-end:calc(var(--right) + 5rem)}*:has(>nav.s.drawer.left){padding-inline-start:calc(var(--left) + 20rem)}*:has(>nav.s.drawer.right){padding-inline-end:calc(var(--right) + 20rem)}nav.s.top~header.fixed{inset-block-start:5rem}nav.s.bottom~footer.fixed{inset-block-end:5rem}}@media only screen and (min-width: 601px) and (max-width: 992px){*:has(>nav.m.bottom){padding-block-end:calc(var(--bottom) + 5rem)}*:has(>nav.m.top){padding-block-start:calc(var(--top) + 5rem)}*:has(>nav.m.left){padding-inline-start:calc(var(--left) + 5rem)}*:has(>nav.m.right){padding-inline-end:calc(var(--right) + 5rem)}*:has(>nav.m.drawer.left){padding-inline-start:calc(var(--left) + 20rem)}*:has(>nav.m.drawer.right){padding-inline-end:calc(var(--right) + 20rem)}nav.m.top~header.fixed{inset-block-start:5rem}nav.m.bottom~footer.fixed{inset-block-end:5rem}}@media only screen and (min-width: 993px){*:has(>nav.l.bottom){padding-block-end:calc(var(--bottom) + 5rem)}*:has(>nav.l.top){padding-block-start:calc(var(--top) + 5rem)}*:has(>nav.l.left){padding-inline-start:calc(var(--left) + 5rem)}*:has(>nav.l.right){padding-inline-end:calc(var(--right) + 5rem)}*:has(>nav.l.drawer.left){padding-inline-start:calc(var(--left) + 20rem)}*:has(>nav.l.drawer.right){padding-inline-end:calc(var(--right) + 20rem)}nav.l.top~header.fixed{inset-block-start:5rem}nav.l.bottom~footer.fixed{inset-block-end:5rem}}@media only screen and (max-width: 600px){main.responsive{padding-inline:calc(var(--left) + .5rem) calc(var(--right) + .5rem)}}dialog{display:block;border:none;opacity:0;visibility:hidden;position:fixed;box-shadow:var(--elevate2);color:var(--on-surface);background-color:var(--surface-container-high);padding:1.5rem;z-index:100;inset:10% auto auto 50%;min-inline-size:20rem;max-inline-size:100%;max-block-size:80%;overflow-x:hidden;overflow-y:auto;transition:all var(--speed3),0s background-color;border-radius:1.75rem;transform:translate(-50%,-4rem)}dialog::backdrop{display:none}dialog.small{inline-size:25%;block-size:25%}dialog.medium{inline-size:50%;block-size:50%}dialog.large{inline-size:75%;block-size:75%}dialog:is(.active,[open]){opacity:1;visibility:visible;transform:translate(-50%)}dialog.top{opacity:1;padding:1rem;inset:0 auto auto 0;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(-100%);border-radius:0 0 1rem 1rem}[dir=rtl] dialog.right,dialog.left{opacity:1;padding:1rem;inset:0 auto auto 0;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:0 1rem 1rem 0;background-color:var(--surface);transform:translate(-100%)}[dir=rtl] dialog.left,dialog.right{opacity:1;padding:1rem;inset:0 0 auto auto;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:1rem 0 0 1rem;background-color:var(--surface);transform:translate(100%)}dialog.bottom{opacity:1;padding:1rem;inset:auto auto 0 0;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(100%);border-radius:1rem 1rem 0 0}dialog.max{inset:0 auto auto 0;inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;transform:translateY(4rem);background-color:var(--surface)}dialog:is(.active,[open]):is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog.small:is(.left,.right){inline-size:20rem}dialog.medium:is(.left,.right){inline-size:32rem}dialog.large:is(.left,.right){inline-size:44rem}dialog.small:is(.top,.bottom){block-size:16rem}dialog.medium:is(.top,.bottom){block-size:24rem}dialog.large:is(.top,.bottom){block-size:32rem}hr,[class*=divider]{all:unset;min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block}hr+*,[class*=divider]+*{margin:0!important}hr.medium,.medium-divider{margin:1rem 0!important}hr.large,.large-divider{margin:1.5rem 0!important}hr.small,.small-divider{margin:.5rem 0!important}hr.vertical,.divider.vertical{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}summary.none{list-style-type:none}summary.none::-webkit-details-marker{display:none}summary{cursor:pointer}summary:focus{outline:none}.field{---size: 3rem;---start: 1.2rem;block-size:var(---size);margin-block-end:2rem;border-radius:.25rem .25rem 0 0}.grid>*>.field{margin-block-end:1rem}.grid>*>.field+.field{margin-block-start:2rem}.grid.no-space>*>.field+.field{margin-block-start:1rem}.grid.medium-space>*>.field+.field{margin-block-start:2.5rem}.grid.large-space>*>.field+.field{margin-block-start:3rem}.field.small{---size: 2.5rem;---start: 1rem}.field.large{---size: 3.5rem;---start: 1.4rem}.field.extra{---size: 4rem;---start: 1.6rem}.field.border{border-radius:.25rem}.field.round.small{border-radius:1.25rem}.field.round{border-radius:1.5rem}.field.round.large{border-radius:1.75rem}.field.round.extra{border-radius:2rem}.field>:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset:50% auto auto auto;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field>:is(i,img,svg,progress,a:not(.helper,.error)),[dir=rtl] .field>:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset:50% 1rem auto auto}.field>:is(i,img,svg,progress,a:not(.helper,.error)):first-child,[dir=rtl] .field>:is(i,img,svg,progress,a:not(.helper,.error)){inset:50% auto auto 1rem}.field.invalid>i{color:var(--error)}.field>progress.circle{inset-block-start:calc(50% - .75rem)!important;border-width:.1875rem}.field>a:not(.helper,.error){z-index:10}.field>a>:is(i,img,svg,progress,a:not(.helper,.error)){inline-size:1.5rem;block-size:1.5rem}.field>:is(input,textarea,select){all:unset;position:relative;display:flex;align-items:center;box-sizing:border-box;border-radius:inherit;border:.0625rem solid transparent;padding:0 .9375rem;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none;text-align:start}input::-webkit-date-and-time-value{text-align:start}:is(input,select,textarea):-webkit-autofill{-webkit-background-clip:text;-webkit-text-fill-color:inherit}.field>:is(input,textarea,select):focus{border:.125rem solid transparent;padding:0 .875rem}.field.min>textarea{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0}input[type=file],input[type=color],:not(.field)>input[type^=date],:not(.field)>input[type^=time],input::-webkit-calendar-picker-indicator{opacity:0;position:absolute;top:0;right:0;bottom:0;left:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input::-webkit-search-decoration,input::-webkit-search-cancel-button,input::-webkit-search-results-button,input::-webkit-search-results-decoration,input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{display:none}input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.field.border>:is(input,textarea,select){border-color:var(--outline)}.field.border>:is(input,textarea,select):focus{border-color:var(--primary)}.field.round>:is(input,textarea,select){padding-inline:1.4376rem}.field.round>:is(input,textarea,select):focus{padding-inline:1.375rem}.field.prefix>:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix>.slider{margin-inline-start:3.5rem}.field.prefix>:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix>:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix>.slider{margin-inline-end:3.5rem}.field.suffix>:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field:not(.border,.round)>:is(input,textarea,select){border-block-end-color:var(--outline)}.field:not(.border,.round)>:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round:not(.border,.fill)>:is(input,textarea,select),.field.round:not(.border)>:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round:not(.border,.fill)>:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid:not(.border,.round)>:is(input,textarea,select),.field.invalid:not(.border,.round)>:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border>:is(input,textarea,select),.field.invalid.border>:is(input,textarea,select):focus{border-color:var(--error)}.field:has(>:disabled){opacity:.5;cursor:not-allowed}.field>:disabled{cursor:not-allowed}.field.textarea.small:not(.min){---size: 4.5rem}.field.textarea:not(.min){---size: 5.5rem}.field.textarea.large:not(.min){---size: 6.5rem}.field.textarea.extra:not(.min){---size: 7.5rem}.field>select{-webkit-user-select:none;user-select:none}.field>select>option{background-color:var(--surface-container);color:var(--on-surface)}.field.label>:is(input,select){padding-block-start:1rem}.field.label.border:not(.fill)>:is(input,select){padding-block-start:0}.field>textarea{padding-block-start:var(---start)}.field>textarea:focus{padding-block-start:calc(var(---start) - .06rem)}.field:not(.label)>textarea,.field.border.label:not(.fill)>textarea{padding-block-start:calc(var(---start) - .5rem)}.field:not(.label)>textarea:focus,.field.border.label:not(.fill)>textarea:focus{padding-block-start:calc(var(---start) - .56rem)}.field.label>label{position:absolute;inset:-.5rem auto auto 1rem;display:flex;inline-size:calc(100% - 5rem);block-size:4rem;line-height:4rem;font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}[dir=rtl] .field.label>label{inset:-.5rem 1rem auto auto}.field.label.small>label{block-size:3.5rem;line-height:3.5rem}.field.label.large>label{block-size:4.5rem;line-height:4.5rem}.field.label.extra>label{block-size:5rem;line-height:5rem}.field.label.border.prefix:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){inset-inline-start:1rem}.field.label.round>label,.field.label.border.prefix.round:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){inset-inline-start:1.5rem}.field.label.prefix>label{inset-inline-start:3rem}.field.label>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){block-size:1rem;line-height:1rem}.field.label.border:not(.fill)>label:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border:not(.fill)>:focus+label:after{border-block-start:.125rem solid var(--primary)}.field.label.border:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border:not(.fill)>select{clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}[dir=rtl] .field.label.border:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),[dir=rtl] .field.label.border:not(.fill)>select{clip-path:polygon(-2% -2%,5rem -2%,5rem .5rem,calc(100% - .75rem) .5rem,calc(100% - .75rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border.round:not(.fill)>select{clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}[dir=rtl] .field.label.border.round:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),[dir=rtl] .field.label.border.round:not(.fill)>select{clip-path:polygon(-2% -2%,5rem -2%,5rem .5rem,calc(100% - 1.25rem) .5rem,calc(100% - 1.25rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label>:focus+label{color:var(--primary)}.field.label.invalid>label,.field.label.invalid>label:after{color:var(--error)!important;border-color:var(--error)!important}.field.label>label>a{block-size:inherit;line-height:inherit;inline-size:1rem}.field.label>label>a>:is(i,img,svg){block-size:1rem;line-height:1rem;inline-size:1rem;font-size:1rem}.field>:is(.helper,.error){position:absolute;inset:auto auto 0 1rem;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}[dir=rtl] .field>:is(.helper,.error){inset:auto 1rem 0 auto}a.helper{color:var(--primary)}.field>.error{color:var(--error)!important}.field.round>:is(.helper,.error){inset-inline-start:1.5rem}.field.invalid>.helper{display:none}table td>.field{margin:0}fieldset{border-radius:.25rem;padding:1rem;border:.0625rem solid var(--outline-variant)}fieldset>legend{margin:0 -.25rem;padding:0 .25rem}fieldset>legend+*{margin-block-start:0!important}.grid{---gap: 1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.grid.no-space{---gap: 0rem}.grid.medium-space{---gap: 1.5rem}.grid.large-space{---gap: 2rem}.s1{grid-area:auto/span 1}.s2{grid-area:auto/span 2}.s3{grid-area:auto/span 3}.s4{grid-area:auto/span 4}.s5{grid-area:auto/span 5}.s6{grid-area:auto/span 6}.s7{grid-area:auto/span 7}.s8{grid-area:auto/span 8}.s9{grid-area:auto/span 9}.s10{grid-area:auto/span 10}.s11{grid-area:auto/span 11}.s12{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1{grid-area:auto/span 1}.m2{grid-area:auto/span 2}.m3{grid-area:auto/span 3}.m4{grid-area:auto/span 4}.m5{grid-area:auto/span 5}.m6{grid-area:auto/span 6}.m7{grid-area:auto/span 7}.m8{grid-area:auto/span 8}.m9{grid-area:auto/span 9}.m10{grid-area:auto/span 10}.m11{grid-area:auto/span 11}.m12{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1{grid-area:auto/span 1}.l2{grid-area:auto/span 2}.l3{grid-area:auto/span 3}.l4{grid-area:auto/span 4}.l5{grid-area:auto/span 5}.l6{grid-area:auto/span 6}.l7{grid-area:auto/span 7}.l8{grid-area:auto/span 8}.l9{grid-area:auto/span 9}.l10{grid-area:auto/span 10}.l11{grid-area:auto/span 11}.l12{grid-area:auto/span 12}}i{---size: 1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}i.tiny{---size: 1rem}.chip>i,i.small{---size: 1.25rem}i.medium{---size: 1.5rem}i.large{---size: 1.75rem}i.extra{---size: 2rem}i.fill,a.row:is(:hover,:focus)>i,.transparent:is(:hover,:focus)>i{font-variation-settings:"FILL" 1}i>:is(img,svg){inline-size:100%;block-size:100%;background-size:100%;border-radius:inherit;position:absolute;inset:0 auto auto 0;padding:inherit}i[class*=fa-]{font-size:calc(var(---size) * .85);line-height:normal;block-size:auto;min-block-size:auto}.absolute{position:absolute}.fixed{position:fixed}:is(.absolute,.fixed).left.right{inline-size:auto}:is(.absolute,.fixed).left.right.small{block-size:20rem}:is(.absolute,.fixed).left.right.medium{block-size:28rem}:is(.absolute,.fixed).left.right.large{block-size:44rem}:is(.absolute,.fixed).top.bottom.small{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large{inline-size:44rem}header,footer{display:flex;justify-content:center;flex-direction:column;min-block-size:4rem;padding:0 1rem;background-color:var(--surface-container)}main~footer{min-block-size:5rem}:is(header,footer).fixed.responsive{z-index:12}:is(header,footer,menu>*).fixed{position:sticky;top:0;right:0;bottom:0;left:0;z-index:11;background-color:inherit}:is(dialog,menu,nav,article)>:is(header,footer){background-color:inherit;padding:0}:is(dialog,article,[class*=padding])>:is(header,footer).fixed{---translateY: 1rem;transform:translateY(var(---translateY))}:is(dialog,article,[class*=padding])>header.fixed{transform:translateY(calc(-1 * var(---translateY)))}.no-padding>:is(header,footer).fixed{transform:none}.small-padding>:is(header,footer).fixed{---translateY: .5rem}:is(.large-padding,dialog:not(.left,.right,.top,.bottom))>:is(header,footer).fixed{---translateY: 1.5rem}svg{fill:currentcolor}:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3);block-size:3rem;inline-size:3rem}:is(img,svg,video).round{border-radius:.5rem}:is(img,svg,video).tiny{block-size:2rem;inline-size:2rem}:is(img,svg,video).small{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive{inline-size:100%;block-size:100%;margin:0 auto}:is(button,.button,.chip):not(.transparent)>.responsive{border:.25rem solid transparent}:is(button.small,.button.small,.chip)>.responsive{inline-size:2rem}:is(button,.button,.chip.medium)>.responsive{inline-size:2.5rem}:is(button,.button,.chip).large>.responsive{inline-size:3rem}:is(button,.button,.chip).extra>.responsive{inline-size:3.5rem}:is(img,svg,video).responsive.tiny{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round{border-radius:2rem}:is(img,svg,video).empty-state{max-inline-size:100%;inline-size:24rem}:is(button,.button,.chip,.field)>:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.tabs :is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}:is(button,.button,.chip)>:is(i,img,svg),:is(button,.button,.chip)>.responsive{margin:0 -.5rem}:is(button,.button)>.responsive{margin-inline-start:-1.5rem}:is(button,.button)>span+.responsive{margin-inline-start:-.5rem;margin-inline-end:-1.5rem}.chip>.responsive{margin-inline-start:-1rem}.chip>span+.responsive{margin-inline-start:-.5rem;margin-inline-end:-1rem}:is(.circle,.square)>.responsive{margin:0}.extend>:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}.extend>.responsive{inset-inline:0;inline-size:3.5rem}.extend.border>.responsive{inline-size:3.375rem}menu>li{all:unset}menu{opacity:0;visibility:hidden;position:absolute;box-shadow:var(--elevate2);background-color:var(--surface-container);z-index:11;inset:auto auto 0 0;inline-size:100%;max-block-size:50vh;max-inline-size:none!important;overflow-x:hidden;overflow-y:auto;font-size:.875rem;font-weight:400;text-transform:none;color:var(--on-surface);line-height:normal;text-align:start;border-radius:.25rem;transform:scale(.8) translateY(120%);transition:all var(--speed2),0s background-color}[dir=rtl] menu{inset:auto 0 0 auto}menu.no-wrap{inline-size:max-content;white-space:nowrap!important}menu.active,menu:not([data-ui]):active,:not([data-ui]):focus-within>menu,menu>:is(a,li):hover+menu,menu>menu:hover{opacity:1;visibility:visible;transform:scale(1) translateY(100%)}menu *{white-space:inherit!important}menu>a,menu>li>a{padding:.5rem 1rem;min-block-size:3rem;flex:1}menu>a:not(.row),menu>li>a:not(.row){display:flex;flex-direction:column;align-items:flex-start}menu>a:is(:hover,:focus,.active),menu>li>a:is(:hover,:focus,.active){background-color:var(--active)}menu.min{inset:0 0 auto 0;transform:none!important;border-radius:inherit}[dir=rtl] menu.min.right,menu.min.left{inset:0 0 auto auto}[dir=rtl] menu.min.left,menu.min.right{inset:0 auto auto 0}menu.max{position:fixed;top:0;right:0;bottom:0;left:0;block-size:100%;max-block-size:none;min-block-size:auto;z-index:100;transform:none!important}menu.no-wrap:is(.min,.max){min-inline-size:16rem}[dir=rtl] menu.right,menu.left{inset:auto 0 0 auto}[dir=rtl] menu.left,menu.right{inset:auto auto 0 0}menu:has(>menu),menu>menu{---child: 1;---type: 0;overflow:unset;white-space:nowrap;inline-size:auto;min-inline-size:12rem;max-block-size:none}menu>menu,menu>menu.right,[dir=rtl] menu>menu.left{inset:auto auto calc(3rem * (var(---child) - var(---type))) 100%}[dir=rtl] menu>menu,[dir=rtl] menu>menu.right,menu>menu.left{inset:auto 100% calc(3rem * (var(---child) - var(---type))) auto}menu>:nth-last-child(2){---child: 2}menu>:nth-last-child(3){---child: 3}menu>:nth-last-child(4){---child: 4}menu>:nth-last-child(5){---child: 5}menu>:nth-last-child(6){---child: 6}menu>:nth-last-child(7){---child: 7}menu>:nth-last-child(8){---child: 8}menu>:nth-last-child(9){---child: 9}menu>:nth-last-child(10){---child: 10}menu>:nth-last-child(11){---child: 11}menu>:nth-last-of-type(2){---type: 1}menu>:nth-last-of-type(3){---type: 2}menu>:nth-last-of-type(4){---type: 3}menu>:nth-last-of-type(5){---type: 4}menu>:nth-last-of-type(6){---type: 5}menu>:nth-last-of-type(7){---type: 6}menu>:nth-last-of-type(8){---type: 7}menu>:nth-last-of-type(9){---type: 8}menu>:nth-last-of-type(10){---type: 9}menu>:nth-last-of-type(11){---type: 10}nav>:is(ol,ul),nav>:is(ol,ul)>li{all:unset}nav,.row,a.row,nav.drawer>:is(a,label),nav.drawer>:is(ol,ul)>li>:is(a,label){display:flex;align-items:center;align-self:normal;text-align:start;justify-content:flex-start;white-space:nowrap;gap:1rem}a.row{min-block-size:3rem;margin:0}:is(nav,.row,.max)>:only-child,nav>:is(ol,ul)>li>:only-child{margin:0}:is(nav,.row)>*{margin:0;white-space:normal;flex:none}:is(nav,.row).no-space{gap:0}:is(nav,.row).no-space>.border+.border{border-inline-start:0}:is(nav,.row).medium-space{gap:1.5rem}:is(nav,.row).large-space{gap:2rem}:is(nav,.row)>.max,:is(nav,.row)>:is(ol,ul)>.max,nav.drawer>:is(a,label)>.max,nav.drawer>:is(ol,ul)>li>:is(a,label)>.max{flex:1}:is(nav,.row).wrap{display:flex;flex-wrap:wrap}:is(header,footer)>:is(nav,.row){min-block-size:inherit}:is(nav,.row)>.border.no-margin+.border.no-margin{border-inline-start:0}nav:is(.left,.right,.top,.bottom){border:0;position:fixed;color:var(--on-surface);transform:none;z-index:100;block-size:auto;inline-size:auto;text-align:center;padding:.5rem 1rem;inset:var(--top) var(--right) var(--bottom) var(--left);margin:0}nav:is(.left,.right){inline-size:5rem;justify-content:flex-start;flex-direction:column;background-color:var(--surface)}nav:is(.top,.bottom){block-size:5rem;justify-content:center;flex-direction:row;background-color:var(--surface-container)}nav.top{inset-block-end:auto}nav.left{inset-inline-end:auto}nav.right{inset-inline-start:auto}nav.bottom{inset-block-start:auto}nav.drawer{flex-direction:column;align-items:normal;inline-size:20rem;gap:0;padding:.5rem 1rem}nav.drawer:is(.min,.max){inline-size:auto}nav.drawer.max{inline-size:100%}:is(nav,.row)>header{background-color:inherit}nav:is(.left,.right)>header{transform:translateY(-.5rem)}nav.drawer>header{transform:translateY(-.75rem);min-block-size:4.5rem;align-self:stretch}nav.drawer>:is(a,label),nav.drawer>:is(ol,ul)>li>:is(a,label),a.row.wave{padding:.75rem;font-size:inherit}nav.drawer>a,nav.drawer>:is(ol,ul)>li>a{border-radius:2rem}nav.drawer>a:is(:hover,.active),nav.drawer>:is(ol,ul)>li>a:is(:hover,.active){background-color:var(--secondary-container)}nav.drawer>a:is(:hover,:focus,.active)>i,nav.drawer>:is(ol,ul)>li>a:is(:hover,:focus,.active)>i{font-variation-settings:"FILL" 1}nav>:is(ol,ul){all:inherit;flex:auto}nav:not(.left,.right,.bottom,.top)>:is(ol,ul){padding:0}nav:is(.left,.right,.top,.bottom):not(.drawer)>a:not(.button,.chip),nav:is(.left,.right,.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip){align-self:center;display:flex;flex-direction:column}nav:is(.top,.bottom):not(.drawer)>a:not(.button,.chip),nav:is(.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip){inline-size:3.5rem}nav:is(.left,.right,.top,.bottom):not(.drawer)>a:not(.button,.chip)>i,nav:is(.left,.right,.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip)>i{padding:.25rem;border-radius:2rem;transition:padding var(--speed1) linear;margin:0 auto}nav:is(.left,.right,.top,.bottom):not(.drawer)>a:not(.button,.chip):is(:hover,:focus,.active)>i,nav:is(.left,.right,.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip):is(:hover,:focus,.active)>i{background-color:var(--secondary-container);color:var(--on-secondary-container);padding:.25rem 1rem;font-variation-settings:"FILL" 1}:is(nav,.row):is(.left-align,.top-align,.vertical){justify-content:flex-start}:is(nav,.row):is(.right-align,.bottom-align){justify-content:flex-end}:is(nav,.row):is(.center-align,.middle-align){justify-content:center}:is(nav,.row):is(.left-align,.top-align,.vertical).vertical{align-items:flex-start}:is(nav,.row):is(.right-align,.bottom-align).vertical{align-items:flex-end}:is(nav,.row):is(.center-align,.middle-align).vertical{align-items:center}:is(.drawer,.vertical)>:is(li,[class*=divider],hr):not(.vertical),:is(.drawer,.vertical)>:is(ol,ul)>li:not(.vertical){align-self:stretch}nav:not(.left,.right)>.space{inline-size:.5rem}nav:not(.left,.right)>.medium-space{inline-size:1rem}nav:not(.left,.right)>.large-space{inline-size:1.5rem}nav.tabbed{background-color:var(--surface-container);border-radius:4rem!important;gap:0rem;overflow-x:auto;block-size:4rem}nav.tabbed.small{block-size:3rem}nav.tabbed.large{block-size:5rem}nav.tabbed>a{border-radius:inherit;block-size:inherit;display:inline-flex;align-items:center;padding-inline:1rem;gap:.5rem;font-size:1rem;flex:1}nav.tabbed>a.active{background-color:var(--primary-container)}:not(nav)>:is(ul,ol){all:revert}@media only screen and (max-width: 600px){nav.top,nav.bottom{justify-content:space-around}}.overlay{opacity:0;visibility:hidden;position:fixed;inset:0 auto auto 0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:all var(--speed3),0s background-color}nav>.overlay{z-index:0}.overlay.active{opacity:1;visibility:visible}.page,:is(.page,dialog):not(.active) .page.active{---transform: translate(0, 0);opacity:0;position:absolute;display:none}.page.active{opacity:1;position:inherit;display:inherit;animation:var(--speed4) to-page ease}.page.active.top{---transform: translate(0, -4rem)}.page.active.bottom{---transform: translate(0, 4rem)}.page.active.left{---transform: translate(-4rem, 0)}.page.active.right{---transform: translate(4rem, 0)}@keyframes to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}progress{position:relative;inline-size:100%;block-size:.5rem;color:var(--primary);background:var(--primary-container);border-radius:1rem;flex:none;border:none;overflow:hidden;writing-mode:horizontal-tb;direction:ltr}progress.small{inline-size:4rem}progress.medium{inline-size:8rem}progress.large{inline-size:12rem}progress:not(.circle,[value]):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;inline-size:100%;block-size:100%;clip-path:none;background:currentcolor;animation:1.6s to-linear ease infinite}progress:not(.circle,[value])::-moz-progress-bar{animation:1.6s to-linear ease infinite}progress:not(.circle,[value])::-webkit-progress-value{animation:1.6s to-linear ease infinite}progress::-webkit-progress-bar{background:none}progress::-webkit-progress-value{background:currentcolor}progress::-moz-progress-bar{background:currentcolor}progress.circle{display:inline-block;inline-size:2.5rem;block-size:2.5rem;border-radius:50%;border-width:.3rem;border-style:solid;border-color:currentcolor;animation:1.6s to-circular linear infinite;background:none;flex:none}progress.circle::-moz-progress-bar{background:none}progress.circle.small{inline-size:1.5rem;block-size:1.5rem;border-width:.2rem}progress.circle.large{inline-size:3.5rem;block-size:3.5rem;border-width:.4rem}:is(nav,.row,.field)>progress:not(.circle,.small,.medium,.large){flex:auto}progress.max{display:unset;position:absolute;inline-size:100%!important;block-size:100%!important;color:var(--active);background:none;top:0;right:0;bottom:0;left:0;border-radius:inherit;animation:none;writing-mode:horizontal-tb}progress:is(.horizontal,.vertical,.max){display:unset;inline-size:100%!important}progress.vertical{writing-mode:vertical-lr}progress.max.vertical{transform:rotate(-180deg)}:has(>progress)>:not(progress){z-index:1}:is(.button,button,.chip)>progress.circle{color:inherit}@supports (-moz-appearance:none){progress.max.vertical{transform:none}}@keyframes to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:0%;inline-size:100%}to{margin-inline-start:100%;inline-size:0%}}@keyframes to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox,.radio,.switch{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}:is(.checkbox,.radio)>input{inline-size:1.5rem;block-size:1.5rem;opacity:0}.switch>input{inline-size:3.25rem;block-size:2rem;opacity:0}:is(.checkbox,.radio,.switch)>span{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}:is(.checkbox,.radio)>span:not(:empty){padding-inline-start:.25rem}:is(.checkbox,.radio,.switch)>span:before,.icon>span>i{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset:auto auto auto -1.5rem;background-color:transparent;border-radius:50%;-webkit-user-select:none;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:all var(--speed1)}.switch>span:before,.switch.icon>span>i{position:absolute;inset:50% auto auto 0;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:all var(--speed2);font-size:1rem;-webkit-user-select:none;user-select:none;min-inline-size:auto;content:"";color:var(--surface-variant);background-color:var(--outline)}.switch>span:before,.switch.icon>span>i{transform:translate(-3rem,-50%) scale(.6)}.switch.icon>span>i{transform:translate(-3rem,-50%) scale(1)}.checkbox>span:before{content:"check_box_outline_blank"}.checkbox>input:checked+span:before{content:"check_box";font-variation-settings:"FILL" 1}.checkbox>input:indeterminate+span:before{content:"indeterminate_check_box"}.radio>span:before{content:"radio_button_unchecked"}.radio>input:checked+span:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon>span:before{content:""!important;font-variation-settings:unset!important}:is(.checkbox,.radio)>input:not(:disabled):is(:focus,:hover)+span:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.switch>input:not(:disabled):is(:focus,:hover)+span:before,.switch.icon>input:not(:disabled):is(:focus,:hover)+span>i{box-shadow:0 0 0 .5rem var(--active)}:is(.checkbox,.radio)>input:checked+span:before,:is(.checkbox,.radio).icon>input:checked+span>i{color:var(--primary)}.icon>input:checked+span>i:first-child,.icon>span>i:last-child{opacity:0}.icon>input:checked+span>i:last-child,.icon>span>i:first-child{opacity:1}.switch>input:checked+span:after{border:none;background-color:var(--primary)}.switch>input:checked+span:before,.switch.icon>input:checked+span>i{content:"check";color:var(--primary);background-color:var(--on-primary)}.switch>input:checked+span:before,.switch.icon>input:checked+span>i{transform:translate(-1.75rem,-50%) scale(1)}:is(.checkbox,.radio,.switch)>input:disabled+span{opacity:.5;cursor:not-allowed}.switch>span:after{content:"";position:absolute;inset:50% auto auto 0;background-color:var(--active);border:.125rem solid var(--outline);box-sizing:border-box;inline-size:3.25rem;block-size:2rem;border-radius:2rem}.switch>span:after{transform:translate(-3.25rem,-50%)}.field>:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round>:is(nav,.row){flex-grow:1;padding:0 1.5rem}[dir=rtl] .switch{transform:scale(-1)}[dir=rtl] .switch>span:before,[dir=rtl] .switch.icon>span>i{transform:translate(-3rem,-50%) scale(-.6)}[dir=rtl] .switch.icon>span>i{transform:translate(-3rem,-50%) scale(-1)}[dir=rtl] .switch>input:checked+span:before,[dir=rtl] .switch.icon>input:checked+span>i{transform:translate(-1.75rem,-50%) scale(-1)}.slider{---start: 0%;---end: 0%;---value1: "";---value2: "";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none;direction:ltr}[dir=rtl] .slider{transform:scaleX(-1)}.slider.vertical{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg);inline-size:100%}.slider.small{inline-size:4rem}.slider.medium{inline-size:8rem}.slider.large{inline-size:12rem}.slider>input{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:none;inline-size:100%;block-size:1rem;background:none;z-index:1;padding:0;margin:0}.slider>input:only-of-type{pointer-events:all}.slider>input+input{position:absolute}.slider>input::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:2.75rem;inline-size:.25rem;border-radius:.25rem;background:var(--primary);cursor:grab;margin:0}.slider>input::-webkit-slider-thumb:active{cursor:grabbing}.slider>input::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:2.75rem;inline-size:.25rem;border-radius:.25rem;background:var(--primary);cursor:grab;margin:0}.slider>input::-moz-range-thumb:active{cursor:grabbing}.slider>input:not(:disabled):is(:focus)::-webkit-slider-thumb{transform:scaleX(.6)}.slider>input:not(:disabled):is(:focus)::-moz-range-thumb{transform:scaleX(.6)}.slider>input:disabled{cursor:not-allowed;opacity:1}.slider>input:disabled::-webkit-slider-thumb{background:#9e9e9e;cursor:not-allowed}.slider>input:disabled::-moz-range-thumb{background:#9e9e9e;cursor:not-allowed}.slider>input:disabled~span{background:#9e9e9e}.slider>span{position:absolute;block-size:1rem;border-radius:1rem 0 0 1rem;background:var(--primary);z-index:0;inset:calc(50% - .5rem) var(---end) auto var(---start);clip-path:polygon(0 0,calc(100% - .5rem) 0,calc(100% - .5rem) 100%,0 100%)}.slider>input+input~span{border-radius:0;clip-path:polygon(.5rem 0,max(.5rem,calc(100% - .5rem)) 0,max(.5rem,calc(100% - .5rem)) 100%,.5rem 100%)}.field>.slider{inline-size:100%}.slider:before{content:"";position:absolute;inline-size:100%;block-size:1rem;border-radius:1rem;background:var(--primary-container);clip-path:polygon(calc(var(---start) - .5rem) 0,0 0,0 100%,calc(var(---start) - .5rem) 100%,calc(var(---start) - .5rem) 0,calc(100% - var(---end) + .5rem) 0,100% 0,100% 100%,calc(100% - var(---end) + .5rem) 100%,calc(100% - var(---end) + .5rem) 0)}.slider:has(>[disabled]):before{background:var(--active)}.slider>.tooltip{visibility:hidden!important;opacity:0!important;inset:0 auto auto calc(100% - var(---end));border-radius:2rem;transition:top var(--speed2) ease,opacity var(--speed2) ease;transform:translate(-50%,-50%)!important;padding:.75rem 1rem}[dir=rtl] .slider>.tooltip{transform:translate(-50%,-50%) scaleX(-1)!important}.slider>.tooltip+.tooltip{inset:.25rem calc(100% - var(---start)) auto auto;transform:translate(50%,-50%)!important}[dir=rtl] .slider>.tooltip+.tooltip{transform:translate(50%,-50%) scaleX(-1)!important}.slider>.tooltip:before{content:var(---value1)}.slider>.tooltip+.tooltip:before{content:var(---value2)}.slider>:focus~.tooltip{inset-block-start:-1rem!important;opacity:1!important;visibility:visible!important}.slider.vertical>.tooltip{display:none}:is(nav,.row,.field)>.slider:not(.circle,.small,.medium,.large){flex:auto}.slider.max,.slider.max.vertical,.slider.max>input,.slider.max.vertical>input{all:unset;margin:0!important;position:absolute;color:var(--primary);top:0;right:0;bottom:0;left:0;border-radius:inherit;overflow:hidden;z-index:2;cursor:grab;inline-size:100%;block-size:100%}.slider.max:before{display:none}.slider.max.vertical>input{writing-mode:vertical-lr;transform:rotate(-180deg)}.slider.max>input::-webkit-slider-thumb{opacity:0;inline-size:1rem;block-size:100vh;transform:none!important}.slider.max>input::-moz-range-thumb{opacity:0;inline-size:1rem;block-size:100vh;transform:none!important}.slider.max>span{block-size:auto!important;inset:0 var(---end) 0 var(---start);clip-path:none;background:currentcolor;border-radius:0}.slider.max.vertical>span{inset:var(---end) 0 var(---start) 0}@media (hover: none){.slider>:hover~.tooltip{inset-block-start:-1rem!important;opacity:1!important;visibility:visible!important}}.snackbar{---transform-start: translate(-50%, 1rem);---transform-end: translate(-50%, 0);position:fixed;inset:auto auto 6rem 50%;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top{inset:6rem auto auto 50%}.snackbar.active{visibility:visible;animation:var(--speed2) to-snackbar}.snackbar.active.top{---transform-end: translate(-50%, -1rem)}.snackbar>.max{flex:auto}@keyframes to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar{inline-size:40%}}table{inline-size:100%;border-spacing:0;font-size:.875rem;text-align:start}.scroll>table,table :is(thead,tbody,tfoot,tr,th,td){background-color:inherit;color:inherit}:is(th,td){inline-size:auto;text-align:inherit;padding:.5rem}:is(th,td)>*{vertical-align:middle}table.border>tbody>tr:not(:last-child)>td,thead>tr>th{border-block-end:.0625rem solid var(--outline)}tfoot>tr>th{border-block-start:.0625rem solid var(--outline)}table.stripes>tbody>tr:nth-child(odd){background-color:var(--active)}table.no-space :is(th,td){padding:0}table.medium-space :is(th,td){padding:.75rem}table.large-space :is(th,td){padding:1rem}table>.fixed,th.fixed{position:sticky;z-index:1;inset-block-start:0}tfoot.fixed,tfoot th.fixed{inset-block-end:0}:is(td,th).min{inline-size:.1%;white-space:nowrap}.tabs{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs:not(.left-align,.right-align,.center-align){justify-content:space-around}.tabs>a{display:flex;font-size:.875rem;font-weight:500;color:var(--on-surface-variant);padding:.5rem 1rem;text-align:center;min-block-size:3rem;inline-size:100%;gap:.25rem}.tabs.small>a{min-block-size:2rem}.tabs.large>a{min-block-size:4rem}.tabs>a.active,.tabs>a.active>i{color:var(--primary)}.tabs>a.active:before{content:"";position:absolute;inset:auto 0 0 0;block-size:.125rem;background-color:var(--primary)}.tabs.min>a.active:before{margin:0 auto;max-inline-size:min(100%,4rem)}.tabs:is(.left-align,.center-align,.right-align)>a{inline-size:auto}.tooltip{---space: -.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset:0 auto auto 50%;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:all var(--speed2);line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left{inset:50% auto auto 0;transform:translate(-100%,-50%) scale(.9)}.tooltip.right{inset:50% 0 auto auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom{inset:auto auto 0 50%;transform:translate(-50%,100%) scale(.9)}.tooltip.small{inline-size:8rem;white-space:normal}.tooltip.medium{inline-size:12rem;white-space:normal}.tooltip.large{inline-size:16rem;white-space:normal}:hover>.tooltip{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}:hover>.tooltip.left{transform:translate(-100%,-50%) scale(1)}:hover>.tooltip.right{transform:translate(100%,-50%) scale(1)}:hover>.tooltip.bottom{transform:translate(-50%,100%) scale(1)}.tooltip.no-space{---space: 0}.tooltip.medium-space{---space: -1rem}.tooltip.large-space{---space: -1.5rem}.tooltip:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left,.tooltip.right{margin-inline:var(---space)!important}.tooltip.bottom{margin-block-end:var(---space)!important}menu:active~.tooltip,:is(button,.button):focus>menu~.tooltip,.field>:focus~menu~.tooltip{visibility:hidden}.slider>.tooltip{---space: -1.25rem}.slider.vertical>.tooltip{---space: -.75rem}.slider.vertical>.tooltip:is(.left,.right){---space: -.5rem}.tooltip.max{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}[class*=blur],[class*=blur].light{---blur: 1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark [class*=blur],[class*=blur].dark{background-color:#00000080}.small-blur{---blur: .5rem}.large-blur{---blur: 1.5rem}.shadow{background-color:#00000050}:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow{background-image:linear-gradient(to right,black,transparent)}.right-shadow{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow{background-image:linear-gradient(to top,black,transparent)}.top-shadow{background-image:linear-gradient(to bottom,black,transparent)}\n';
	  const app = createApp(_sfc_main);
	  const doc = isUnderBilibili ? docFrame : document;
	  const domDocStyle = doc.createElement("style");
	  domDocStyle.innerHTML = `${strStyle}
${strStyleBeer}`;
	  doc.head.appendChild(domDocStyle);
	  const domDocJs = doc.createElement("script");
	  domDocJs.innerHTML = `${strJsBeer}`;
	  domDocJs.setAttribute("type", "module");
	  doc.head.appendChild(domDocJs);
	  if (isUnderBilibili) {
	    app.mount(domFrameDiv);
	    injectButton();
	    console.log("bili-enchanter 启动完成");
	    winFrame.console = winMain.console;
	  } else {
	    const domApp = doc.createElement("div");
	    doc.body.appendChild(domApp);
	    app.mount(domApp);
	    const msg = "当前未运行于 Bilibili 站点";
	    console.log(msg);
	  }
	});

})();