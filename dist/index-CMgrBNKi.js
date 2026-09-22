import { jsx as c, jsxs as w, Fragment as pe } from "react/jsx-runtime";
import R, { useRef as ie, useCallback as ae, useEffect as Y, useMemo as we, useState as j, Fragment as Un, memo as Gn, Children as dt, forwardRef as Et, useLayoutEffect as zo, useContext as Kn, isValidElement as at, cloneElement as wn, Suspense as Uo, lazy as Go } from "react";
import { ROCrate as Ko, JsonController as Cn } from "@nfdi4plants/arctrl";
import { d as _, c as I, f as Jo, u as Yt, a as Je, B as Sn, b as En, e as Xo, X as Zo, S as Qo, g as Yo, C as ei, V as Oe, h as ti, A as ni, r as oi, i as ii, F as ri, j as Jn, k as li } from "./lib-DTXX7TYQ.js";
import { useResponsiveValue as Xn, Link as ai, Truncate as Nt, IconButton as Kt, Breadcrumbs as Dt, FormControl as xn, Autocomplete as st, useFocusZone as si, ActionList as Pt, Heading as he, Text as H, Stack as ne, TreeView as Ue, Banner as ci, SplitPageLayout as Lt, Dialog as di } from "@primer/react";
import "react-dom/client";
import { createPortal as Zn } from "react-dom";
const ui = {
  "outside-top": ["outside-bottom", "outside-right", "outside-left", "outside-bottom"],
  "outside-bottom": ["outside-top", "outside-right", "outside-left", "outside-bottom"],
  "outside-left": ["outside-right", "outside-bottom", "outside-top", "outside-bottom"],
  "outside-right": ["outside-left", "outside-bottom", "outside-top", "outside-bottom"]
}, fi = {
  start: ["end", "center"],
  end: ["start", "center"],
  center: ["end", "start"]
};
function pi(t, e, n = {}) {
  const o = hi(t), i = bi(o), r = getComputedStyle(o), l = o.getBoundingClientRect(), [a, s] = [r.borderTopWidth, r.borderLeftWidth].map((u) => parseInt(u, 10) || 0), d = {
    top: l.top + a,
    left: l.left + s
  };
  return vi(i, d, t.getBoundingClientRect(), e instanceof Element ? e.getBoundingClientRect() : e, gi(n));
}
function hi(t) {
  if (mi(t))
    return document.body;
  let e = t.parentNode;
  for (; e !== null; ) {
    if (e instanceof HTMLElement && getComputedStyle(e).position !== "static")
      return e;
    e = e.parentNode;
  }
  return document.body;
}
function mi(t) {
  var e;
  if (t.tagName === "DIALOG")
    return !0;
  try {
    if (t.matches(":popover-open") && /native code/.test((e = document.body.showPopover) === null || e === void 0 ? void 0 : e.toString()))
      return !0;
  } catch {
    return !1;
  }
  return !1;
}
function bi(t) {
  let e = t;
  for (; e !== null && !(!(e instanceof Element) || getComputedStyle(e).overflow !== "visible"); )
    e = e.parentNode;
  const n = e === document.body || !(e instanceof HTMLElement) ? document.body : e, o = n.getBoundingClientRect(), i = getComputedStyle(n), [r, l, a, s] = [
    i.borderTopWidth,
    i.borderLeftWidth,
    i.borderRightWidth,
    i.borderBottomWidth
  ].map((d) => parseInt(d, 10) || 0);
  return {
    top: o.top + r,
    left: o.left + l,
    width: o.width - a - l,
    height: Math.max(o.height - r - s, n === document.body ? window.innerHeight : -1 / 0)
  };
}
const Ve = {
  side: "outside-bottom",
  align: "start",
  anchorOffset: 4,
  alignmentOffset: 4,
  allowOutOfBounds: !1
};
function gi(t = {}) {
  var e, n, o, i, r;
  const l = (e = t.side) !== null && e !== void 0 ? e : Ve.side, a = (n = t.align) !== null && n !== void 0 ? n : Ve.align;
  return {
    side: l,
    align: a,
    anchorOffset: (o = t.anchorOffset) !== null && o !== void 0 ? o : l === "inside-center" ? 0 : Ve.anchorOffset,
    alignmentOffset: (i = t.alignmentOffset) !== null && i !== void 0 ? i : a !== "center" && l.startsWith("inside") ? Ve.alignmentOffset : 0,
    allowOutOfBounds: (r = t.allowOutOfBounds) !== null && r !== void 0 ? r : Ve.allowOutOfBounds
  };
}
function vi(t, e, n, o, { side: i, align: r, allowOutOfBounds: l, anchorOffset: a, alignmentOffset: s }) {
  const d = {
    top: t.top - e.top,
    left: t.left - e.left,
    width: t.width,
    height: t.height
  };
  let u = Rt(n, o, i, r, a, s), f = i, m = r;
  if (u.top -= e.top, u.left -= e.left, !l) {
    const p = ui[i];
    let h = 0;
    if (p) {
      let v = i;
      for (; h < p.length && Ti(v, u, d, n); ) {
        const T = p[h++];
        v = T, u = Rt(n, o, T, r, a, s), u.top -= e.top, u.left -= e.left, f = T;
      }
    }
    const b = fi[r];
    let g = 0;
    if (b) {
      let v = r;
      for (; g < b.length && yi(v, u, d, n); ) {
        const T = b[g++];
        v = T, u = Rt(n, o, f, T, a, s), u.top -= e.top, u.left -= e.left, m = T;
      }
    }
    u.top < d.top && (u.top = d.top), u.left < d.left && (u.left = d.left), u.left + n.width > t.width + d.left && (u.left = t.width + d.left - n.width), p && h < p.length && u.top + n.height > t.height + d.top && (u.top = Math.max(t.height + d.top - n.height, 0));
  }
  return Object.assign(Object.assign({}, u), { anchorSide: f, anchorAlign: m });
}
function Rt(t, e, n, o, i, r) {
  const l = e.left + e.width, a = e.top + e.height;
  let s = -1, d = -1;
  return n === "outside-top" ? s = e.top - i - t.height : n === "outside-bottom" ? s = a + i : n === "outside-left" ? d = e.left - i - t.width : n === "outside-right" && (d = l + i), (n === "outside-top" || n === "outside-bottom") && (o === "start" ? d = e.left + r : o === "center" ? d = e.left - (t.width - e.width) / 2 + r : d = l - t.width - r), (n === "outside-left" || n === "outside-right") && (o === "start" ? s = e.top + r : o === "center" ? s = e.top - (t.height - e.height) / 2 + r : s = a - t.height - r), n === "inside-top" ? s = e.top + i : n === "inside-bottom" ? s = a - i - t.height : n === "inside-left" ? d = e.left + i : n === "inside-right" ? d = l - i - t.width : n === "inside-center" && (d = (l + e.left) / 2 - t.width / 2 + i), n === "inside-top" || n === "inside-bottom" ? o === "start" ? d = e.left + r : o === "center" ? d = e.left - (t.width - e.width) / 2 + r : d = l - t.width - r : (n === "inside-left" || n === "inside-right" || n === "inside-center") && (o === "start" ? s = e.top + r : o === "center" ? s = e.top - (t.height - e.height) / 2 + r : s = a - t.height - r), { top: s, left: d };
}
function Ti(t, e, n, o) {
  return t === "outside-top" || t === "outside-bottom" ? e.top < n.top || e.top + o.height > n.height + n.top : e.left < n.left || e.left + o.width > n.width + n.left;
}
function yi(t, e, n, o) {
  if (t === "end")
    return e.left < n.left;
  if (t === "start" || t === "center")
    return e.left + o.width > n.left + n.width || e.left < n.left;
}
function* ut(t, e = {}) {
  var n, o;
  const i = (n = e.strict) !== null && n !== void 0 ? n : !1, r = (o = e.onlyTabbable) !== null && o !== void 0 && o ? Yn : Qn, l = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => s instanceof HTMLElement && r(s, i) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  let a = null;
  if (!e.reverse && r(t, i) && (yield t), e.reverse) {
    let s = l.lastChild();
    for (; s; )
      a = s, s = l.lastChild();
  } else
    a = l.firstChild();
  for (; a instanceof HTMLElement; )
    yield a, a = e.reverse ? l.previousNode() : l.nextNode();
  e.reverse && r(t, i) && (yield t);
}
function kt(t, e = !1) {
  return ut(t, { reverse: e, strict: !0, onlyTabbable: !0 }).next().value;
}
function Qn(t, e = !1) {
  const n = ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTGROUP", "OPTION", "FIELDSET"].includes(t.tagName) && t.disabled, o = t.hidden, i = t instanceof HTMLInputElement && t.type === "hidden", r = t.classList.contains("sentinel");
  if (n || o || i || r)
    return !1;
  if (e) {
    const l = getComputedStyle(t), a = t.offsetWidth === 0 || t.offsetHeight === 0, s = ["hidden", "collapse"].includes(l.visibility), d = l.display === "none" || !t.offsetParent, u = t.getClientRects().length === 0;
    if (a || s || u || d)
      return !1;
  }
  return t.getAttribute("tabindex") != null || t.getAttribute("contenteditable") === "true" || t.getAttribute("contenteditable") === "plaintext-only" ? !0 : t instanceof HTMLAnchorElement && t.getAttribute("href") == null ? !1 : t.tabIndex !== -1;
}
function Yn(t, e = !1) {
  return Qn(t, e) && t.getAttribute("tabindex") !== "-1";
}
let en = !1;
function An() {
}
try {
  const t = Object.create({}, {
    signal: {
      get() {
        en = !0;
      }
    }
  });
  window.addEventListener("test", An, t), window.removeEventListener("test", An, t);
} catch {
}
function wi() {
  return en;
}
function Ci() {
  if (typeof window > "u")
    return;
  const t = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(e, n, o) {
    return typeof o == "object" && "signal" in o && o.signal instanceof AbortSignal && t.call(o.signal, "abort", () => {
      this.removeEventListener(e, n, o);
    }), t.call(this, e, n, o);
  };
}
function eo() {
  wi() || (Ci(), en = !0);
}
eo();
const Le = [];
let De;
function Si() {
  const t = Le.pop();
  t && to(t.container, t.initialFocus, t.originalSignal);
}
function Ei(t) {
  const e = new AbortController();
  return t.addEventListener("abort", () => {
    e.abort();
  }), e;
}
function xi(t, e) {
  const n = new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList" && i.addedNodes.length) {
        if (Array.from(i.addedNodes).filter((u) => u instanceof HTMLElement && u.classList.contains("sentinel") && u.tagName === "SPAN").length)
          return;
        const l = t.firstElementChild, a = t.lastElementChild, [s, d] = e;
        l?.classList.contains("sentinel") || t.insertAdjacentElement("afterbegin", s), a?.classList.contains("sentinel") || t.insertAdjacentElement("beforeend", d);
      }
  });
  return n.observe(t, { childList: !0 }), n;
}
function to(t, e, n) {
  const o = new AbortController(), i = n ?? o.signal;
  t.setAttribute("data-focus-trap", "active");
  const r = document.createElement("span");
  r.setAttribute("class", "sentinel"), r.setAttribute("tabindex", "0"), r.setAttribute("aria-hidden", "true"), r.onfocus = () => {
    const p = kt(t, !0);
    p?.focus();
  };
  const l = document.createElement("span");
  l.setAttribute("class", "sentinel"), l.setAttribute("tabindex", "0"), l.setAttribute("aria-hidden", "true"), l.onfocus = () => {
    const p = kt(t);
    p?.focus();
  }, Array.from(t.children).filter((p) => p.classList.contains("sentinel") && p.tagName === "SPAN").length || (t.prepend(r), t.append(l));
  const s = xi(t, [r, l]);
  let d;
  function u(p) {
    if (p instanceof HTMLElement && document.contains(t))
      if (t.contains(p)) {
        d = p;
        return;
      } else if (d && Yn(d) && t.contains(d)) {
        d.focus();
        return;
      } else if (e && t.contains(e)) {
        e.focus();
        return;
      } else {
        const h = kt(t);
        h?.focus();
        return;
      }
  }
  const f = Ei(i);
  if (De) {
    const p = De;
    De.container.setAttribute("data-focus-trap", "suspended"), De.controller.abort(), Le.push(p);
  }
  f.signal.addEventListener("abort", () => {
    De = void 0;
  }), i.addEventListener("abort", () => {
    t.removeAttribute("data-focus-trap");
    const p = t.getElementsByClassName("sentinel");
    for (; p.length > 0; )
      p[0].remove();
    const h = Le.findIndex((b) => b.container === t);
    h >= 0 && Le.splice(h, 1), s.disconnect(), Si();
  }), document.addEventListener("focus", (p) => {
    u(p.target);
  }, { signal: f.signal, capture: !0 }), u(document.activeElement), De = {
    container: t,
    controller: f,
    initialFocus: e,
    originalSignal: i
  };
  const m = Le.findIndex((p) => p.container === t);
  if (m >= 0 && Le.splice(m, 1), !n)
    return o;
}
let Ht;
function Xe() {
  return Ht === void 0 && (Ht = /^mac/i.test(window.navigator.platform)), Ht;
}
let Ai = 1e4;
function Ii() {
  return `__primer_id_${Ai++}`;
}
const _i = /* @__PURE__ */ new Set([
  "button",
  "checkbox",
  "color",
  "file",
  "hidden",
  "image",
  "radio",
  "range",
  "reset",
  "submit"
]);
function Ni(t) {
  var e, n;
  if (!(t instanceof HTMLElement))
    return !1;
  const o = t.nodeName.toLowerCase(), i = (n = (e = t.getAttribute("type")) === null || e === void 0 ? void 0 : e.toLowerCase()) !== null && n !== void 0 ? n : "text", r = t.ariaReadOnly === "true" || t.getAttribute("aria-readonly") === "true" || t.getAttribute("readonly") !== null;
  return (o === "select" || o === "textarea" || o === "input" && !_i.has(i) || t.isContentEditable) && !r;
}
eo();
var q;
(function(t) {
  t[t.ArrowHorizontal = 1] = "ArrowHorizontal", t[t.ArrowVertical = 2] = "ArrowVertical", t[t.JK = 4] = "JK", t[t.HL = 8] = "HL", t[t.HomeAndEnd = 16] = "HomeAndEnd", t[t.PageUpDown = 256] = "PageUpDown", t[t.WS = 32] = "WS", t[t.AD = 64] = "AD", t[t.Tab = 128] = "Tab", t[t.Backspace = 512] = "Backspace", t[t.ArrowAll = 3] = "ArrowAll", t[t.HJKL = 12] = "HJKL", t[t.WASD = 96] = "WASD", t[t.All = 511] = "All";
})(q || (q = {}));
const Di = {
  ArrowLeft: q.ArrowHorizontal,
  ArrowDown: q.ArrowVertical,
  ArrowUp: q.ArrowVertical,
  ArrowRight: q.ArrowHorizontal,
  h: q.HL,
  j: q.JK,
  k: q.JK,
  l: q.HL,
  a: q.AD,
  s: q.WS,
  w: q.WS,
  d: q.AD,
  Tab: q.Tab,
  Home: q.HomeAndEnd,
  End: q.HomeAndEnd,
  PageUp: q.PageUpDown,
  PageDown: q.PageUpDown,
  Backspace: q.Backspace
}, no = {
  ArrowLeft: "previous",
  ArrowDown: "next",
  ArrowUp: "previous",
  ArrowRight: "next",
  h: "previous",
  j: "next",
  k: "previous",
  l: "next",
  a: "previous",
  s: "next",
  w: "previous",
  d: "next",
  Tab: "next",
  Home: "start",
  End: "end",
  PageUp: "start",
  PageDown: "end",
  Backspace: "previous"
};
function In(t) {
  const e = no[t.key];
  if (t.key === "Tab" && t.shiftKey)
    return "previous";
  const n = Xe();
  if (n && t.metaKey || !n && t.ctrlKey) {
    if (t.key === "ArrowLeft" || t.key === "ArrowUp")
      return "start";
    if (t.key === "ArrowRight" || t.key === "ArrowDown")
      return "end";
  }
  return e;
}
function Pi(t, e) {
  const n = t.key, o = [...n].length, i = Ni(e), r = e instanceof HTMLSelectElement;
  if (i && (o === 1 || n === "Home" || n === "End"))
    return !0;
  if (r)
    return !!(n === "ArrowDown" && Xe() && !t.metaKey || n === "ArrowDown" && !Xe() && t.altKey);
  if (i && !r) {
    const l = e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement, a = l && e.selectionStart === 0 && e.selectionEnd === 0, s = l && e.selectionStart === e.value.length && e.selectionEnd === e.value.length;
    if (n === "ArrowLeft" && !a || n === "ArrowRight" && !s)
      return !0;
    const d = e instanceof HTMLElement && e.isContentEditable;
    if ((e instanceof HTMLTextAreaElement || d) && (n === "PageUp" || n === "PageDown" || n === "ArrowUp" && !a || n === "ArrowDown" && !s))
      return !0;
  }
  return !1;
}
const qe = "data-is-active-descendant", Li = "activated-directly", Ri = "activated-indirectly", _n = "data-has-active-descendant";
function ki(t, e) {
  var n, o, i, r, l, a;
  const s = [], d = /* @__PURE__ */ new WeakMap(), u = (n = e?.bindKeys) !== null && n !== void 0 ? n : (e?.getNextFocusable ? q.ArrowAll : q.ArrowVertical) | q.HomeAndEnd, f = (o = e?.focusOutBehavior) !== null && o !== void 0 ? o : "stop", m = (i = e?.focusInStrategy) !== null && i !== void 0 ? i : "previous", p = e?.activeDescendantControl, h = e?.onActiveDescendantChanged, b = (r = e?.ignoreHoverEvents) !== null && r !== void 0 ? r : !1;
  let g;
  const v = (l = e?.preventScroll) !== null && l !== void 0 ? l : !1, T = m === "initial" && e?.activeDescendantControl;
  function S() {
    return s[0];
  }
  function k() {
    return document.activeElement === p;
  }
  function A(y, x = !1) {
    const D = g;
    if (g = y, p) {
      y && k() ? M(D, y, x) : E();
      return;
    }
    D && D !== y && d.has(D) && D.setAttribute("tabindex", "-1"), y?.setAttribute("tabindex", "0");
  }
  function M(y, x, D = !1) {
    x.id || x.setAttribute("id", Ii()), y && y !== x && y.removeAttribute(qe), !(!p || !D && p.getAttribute("aria-activedescendant") === x.id) && (p.setAttribute("aria-activedescendant", x.id), t.setAttribute(_n, x.id), x.setAttribute(qe, D ? Li : Ri), h?.(x, y, D));
  }
  function E(y = g) {
    m === "first" && (g = void 0), p?.removeAttribute("aria-activedescendant"), t.removeAttribute(_n), y?.removeAttribute(qe);
    for (const x of t.querySelectorAll(`[${qe}]`))
      x?.removeAttribute(qe);
    h?.(void 0, y, !1);
  }
  function V(...y) {
    const x = y.filter((D) => {
      var U, G;
      return (G = (U = e?.focusableElementFilter) === null || U === void 0 ? void 0 : U.call(e, D)) !== null && G !== void 0 ? G : !0;
    });
    if (x.length !== 0) {
      s.splice(O(x), 0, ...x);
      for (const D of x)
        d.has(D) || d.set(D, D.getAttribute("tabindex")), D.setAttribute("tabindex", "-1");
      !g && !T && A(S());
    }
  }
  function O(y) {
    const x = y[0];
    if (s.length === 0)
      return 0;
    let D = 0, U = s.length - 1;
    for (; D <= U; ) {
      const G = Math.floor((D + U) / 2), de = s[G];
      B(x, de) ? U = G - 1 : D = G + 1;
    }
    return D;
  }
  function B(y, x) {
    return (x.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_PRECEDING) > 0;
  }
  function C(...y) {
    for (const x of y) {
      const D = s.indexOf(x);
      D >= 0 && s.splice(D, 1);
      const U = d.get(x);
      if (U !== void 0 && (U === null ? x.removeAttribute("tabindex") : x.setAttribute("tabindex", U), d.delete(x)), x === g) {
        const G = S();
        A(G);
      }
    }
  }
  const N = {
    reverse: e?.reverse,
    strict: e?.strict,
    onlyTabbable: e?.onlyTabbable
  };
  V(...ut(t, N));
  const $ = typeof m == "function" ? m(document.body) : S();
  T || A($), new MutationObserver((y) => {
    for (const x of y) {
      for (const D of x.removedNodes)
        D instanceof HTMLElement && C(...ut(D));
      x.type === "attributes" && x.oldValue === null && x.target instanceof HTMLElement && C(x.target);
    }
    for (const x of y) {
      for (const D of x.addedNodes)
        D instanceof HTMLElement && V(...ut(D, N));
      x.type === "attributes" && x.oldValue !== null && x.target instanceof HTMLElement && V(x.target);
    }
  }).observe(t, {
    subtree: !0,
    childList: !0,
    attributeFilter: ["hidden", "disabled"],
    attributeOldValue: !0
  });
  const K = new AbortController(), W = (a = e?.abortSignal) !== null && a !== void 0 ? a : K.signal;
  W.addEventListener("abort", () => {
    C(...s);
  });
  let Z;
  t.addEventListener("mousedown", (y) => {
    y.target instanceof HTMLElement && y.target !== document.activeElement && (Z = s.indexOf(y.target));
  }, { signal: W }), p ? (t.addEventListener("focusin", (y) => {
    y.target instanceof HTMLElement && s.includes(y.target) && (p.focus({ preventScroll: v }), A(y.target));
  }, { signal: W }), b || t.addEventListener("mousemove", ({ target: y }) => {
    if (!(y instanceof Node))
      return;
    const x = s.find((D) => D.contains(y));
    x && A(x);
  }, { signal: W, capture: !0 }), p.addEventListener("focusin", () => {
    g ? M(void 0, g) : T || A(S());
  }, { signal: W }), p.addEventListener("focusout", () => {
    E();
  }, { signal: W })) : t.addEventListener("focusin", (y) => {
    if (y.target instanceof HTMLElement) {
      if (Z !== void 0)
        Z >= 0 && s[Z] !== g && A(s[Z]), Z = void 0;
      else if (m === "previous")
        A(y.target);
      else if (m === "closest" || m === "first")
        if (y.relatedTarget instanceof Element && !t.contains(y.relatedTarget)) {
          const x = ee === "previous" ? s.length - 1 : 0, D = s[x];
          D?.focus({ preventScroll: v });
          return;
        } else
          A(y.target);
      else if (typeof m == "function")
        if (y.relatedTarget instanceof Element && !t.contains(y.relatedTarget)) {
          const x = m(y.relatedTarget);
          if ((x ? s.indexOf(x) : -1) >= 0 && x instanceof HTMLElement) {
            x.focus({ preventScroll: v });
            return;
          } else
            console.warn("Element requested is not a known focusable element.");
        } else
          A(y.target);
    }
    ee = void 0;
  }, { signal: W });
  const z = p ?? t;
  let ee;
  m === "closest" && document.addEventListener("keydown", (y) => {
    y.key === "Tab" && (ee = In(y));
  }, { signal: W, capture: !0 });
  function ce() {
    if (!g)
      return T ? -1 : 0;
    const y = s.indexOf(g);
    return y !== -1 ? y : g === t ? -1 : 0;
  }
  return z.addEventListener("keydown", (y) => {
    var x;
    if (y.key in no) {
      const D = Di[y.key];
      if (!y.defaultPrevented && (D & u) > 0 && !Pi(y, document.activeElement)) {
        const U = In(y);
        let G;
        if (e?.getNextFocusable && (G = e.getNextFocusable(U, (x = document.activeElement) !== null && x !== void 0 ? x : void 0, y)), !G) {
          const de = ce();
          let Q = de;
          U === "previous" ? Q -= 1 : U === "start" ? Q = 0 : U === "next" ? Q += 1 : Q = s.length - 1, Q < 0 && (f === "wrap" && y.key !== "Tab" ? Q = s.length - 1 : Q = 0), Q >= s.length && (f === "wrap" && y.key !== "Tab" ? Q = 0 : Q = s.length - 1), de !== Q && (G = s[Q]);
        }
        p ? A(G || g, !0) : G && (ee = U, G.focus({ preventScroll: v })), (y.key !== "Tab" || G) && y.preventDefault();
      }
    }
  }, { signal: W }), K;
}
function Hi() {
}
const He = process.env.NODE_ENV !== "production" ? (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function(e, n, ...o) {
    if (!e) {
      let i;
      if (n === void 0)
        i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        let r = 0;
        const l = n.replace(/%s/g, () => o[r++]);
        i = new Error(l), i.name = "Invariant Violation";
      }
      throw i;
    }
  }
) : Hi;
function oo() {
}
const Mi = process.env.NODE_ENV !== "production" ? function(e) {
  console.warn("Warning:", e);
} : oo, tn = process.env.NODE_ENV !== "production" ? (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function(e, n, ...o) {
    if (e) {
      let i = 0;
      const r = n.replace(/%s/g, () => o[i++]);
      Mi(r);
    }
  }
) : oo;
var xt = class extends Event {
  oldState;
  newState;
  constructor(t, { oldState: e = "", newState: n = "", ...o } = {}) {
    super(t, o), this.oldState = String(e || ""), this.newState = String(n || "");
  }
}, Nn = /* @__PURE__ */ new WeakMap();
function io(t, e, n) {
  Nn.set(
    t,
    setTimeout(() => {
      Nn.has(t) && t.dispatchEvent(
        new xt("toggle", {
          cancelable: !1,
          oldState: e,
          newState: n
        })
      );
    }, 0)
  );
}
var nn = globalThis.ShadowRoot || function() {
}, Bi = globalThis.HTMLDialogElement || function() {
}, ft = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap();
function gt(t) {
  return tt.get(t) || "hidden";
}
var vt = /* @__PURE__ */ new WeakMap();
function Oi(t) {
  const e = t.popoverTargetElement;
  if (!(e instanceof HTMLElement))
    return;
  const n = gt(e);
  t.popoverTargetAction === "show" && n === "showing" || t.popoverTargetAction === "hide" && n === "hidden" || (n === "showing" ? Ze(e, !0, !0) : Ce(e, !1) && (vt.set(e, t), Jt(e)));
}
function Ce(t, e) {
  return !(t.popover !== "auto" && t.popover !== "manual" || !t.isConnected || e && gt(t) !== "showing" || !e && gt(t) !== "hidden" || t instanceof Bi && t.hasAttribute("open") || document.fullscreenElement === t);
}
function Dn(t) {
  return t ? Array.from(se.get(t.ownerDocument) || []).indexOf(
    t
  ) + 1 : 0;
}
function $i(t) {
  const e = ro(t), n = Fi(t);
  return Dn(e) > Dn(n) ? e : n;
}
function Tt(t) {
  const e = se.get(t);
  for (const n of e || [])
    if (!n.isConnected)
      e.delete(n);
    else
      return n;
  return null;
}
function Fe(t) {
  return typeof t.getRootNode == "function" ? t.getRootNode() : t.parentNode ? Fe(t.parentNode) : t;
}
function ro(t) {
  for (; t; ) {
    if (t instanceof HTMLElement && t.popover === "auto" && tt.get(t) === "showing")
      return t;
    if (t = t instanceof Element && t.assignedSlot || t.parentElement || Fe(t), t instanceof nn && (t = t.host), t instanceof Document) return;
  }
}
function Fi(t) {
  for (; t; ) {
    const e = t.popoverTargetElement;
    if (e instanceof HTMLElement) return e;
    if (t = t.parentElement || Fe(t), t instanceof nn && (t = t.host), t instanceof Document) return;
  }
}
function Wi(t) {
  const e = /* @__PURE__ */ new Map();
  let n = 0;
  for (const r of se.get(t.ownerDocument) || [])
    e.set(r, n), n += 1;
  e.set(t, n), n += 1;
  let o = null;
  function i(r) {
    const l = ro(r);
    if (l === null) return null;
    const a = e.get(l);
    (o === null || e.get(o) < a) && (o = l);
  }
  return i(t.parentElement || Fe(t)), o;
}
function Vi(t) {
  return t.hidden || t instanceof nn || (t instanceof HTMLButtonElement || t instanceof HTMLInputElement || t instanceof HTMLSelectElement || t instanceof HTMLTextAreaElement || t instanceof HTMLOptGroupElement || t instanceof HTMLOptionElement || t instanceof HTMLFieldSetElement) && t.disabled || t instanceof HTMLInputElement && t.type === "hidden" || t instanceof HTMLAnchorElement && t.href === "" ? !1 : typeof t.tabIndex == "number" && t.tabIndex !== -1;
}
function qi(t) {
  if (t.shadowRoot && t.shadowRoot.delegatesFocus !== !0)
    return null;
  let e = t;
  e.shadowRoot && (e = e.shadowRoot);
  let n = e.querySelector("[autofocus]");
  if (n)
    return n;
  {
    const r = e.querySelectorAll("slot");
    for (const l of r) {
      const a = l.assignedElements({ flatten: !0 });
      for (const s of a) {
        if (s.hasAttribute("autofocus"))
          return s;
        if (n = s.querySelector("[autofocus]"), n)
          return n;
      }
    }
  }
  const o = t.ownerDocument.createTreeWalker(
    e,
    NodeFilter.SHOW_ELEMENT
  );
  let i = o.currentNode;
  for (; i; ) {
    if (Vi(i))
      return i;
    i = o.nextNode();
  }
}
function ji(t) {
  qi(t)?.focus();
}
var yt = /* @__PURE__ */ new WeakMap();
function Jt(t) {
  if (!Ce(t, !1))
    return;
  const e = t.ownerDocument;
  if (!t.dispatchEvent(
    new xt("beforetoggle", {
      cancelable: !0,
      oldState: "closed",
      newState: "open"
    })
  ) || !Ce(t, !1))
    return;
  let n = !1;
  if (t.popover === "auto") {
    const i = t.getAttribute("popover"), r = Wi(t) || e;
    if (At(r, !1, !0), i !== t.getAttribute("popover") || !Ce(t, !1))
      return;
  }
  Tt(e) || (n = !0), yt.delete(t);
  const o = e.activeElement;
  t.classList.add(":popover-open"), tt.set(t, "showing"), ft.has(e) || ft.set(e, /* @__PURE__ */ new Set()), ft.get(e).add(t), ji(t), t.popover === "auto" && (se.has(e) || se.set(e, /* @__PURE__ */ new Set()), se.get(e).add(t), lo(vt.get(t), !0)), n && o && t.popover === "auto" && yt.set(t, o), io(t, "closed", "open");
}
function Ze(t, e = !1, n = !1) {
  if (!Ce(t, !0))
    return;
  const o = t.ownerDocument;
  if (t.popover === "auto" && (At(t, e, n), !Ce(t, !0)) || (lo(vt.get(t), !1), vt.delete(t), n && (t.dispatchEvent(
    new xt("beforetoggle", {
      oldState: "open",
      newState: "closed"
    })
  ), !Ce(t, !0))))
    return;
  ft.get(o)?.delete(t), se.get(o)?.delete(t), t.classList.remove(":popover-open"), tt.set(t, "hidden"), n && io(t, "open", "closed");
  const i = yt.get(t);
  i && (yt.delete(t), e && i.focus());
}
function Pn(t, e = !1, n = !1) {
  let o = Tt(t);
  for (; o; )
    Ze(o, e, n), o = Tt(t);
}
function At(t, e, n) {
  const o = t.ownerDocument || t;
  if (t instanceof Document)
    return Pn(o, e, n);
  let i = null, r = !1;
  for (const l of se.get(o) || [])
    if (l === t)
      r = !0;
    else if (r) {
      i = l;
      break;
    }
  if (!r)
    return Pn(o, e, n);
  for (; i && gt(i) === "showing" && se.get(o)?.size; )
    Ze(i, e, n);
}
var Mt = /* @__PURE__ */ new WeakMap();
function Ln(t) {
  if (!t.isTrusted) return;
  const e = t.composedPath()[0];
  if (!e) return;
  const n = e.ownerDocument;
  if (!Tt(n)) return;
  const i = $i(e);
  if (i && t.type === "pointerdown")
    Mt.set(n, i);
  else if (t.type === "pointerup") {
    const r = Mt.get(n) === i;
    Mt.delete(n), r && At(i || n, !1, !0);
  }
}
var Bt = /* @__PURE__ */ new WeakMap();
function lo(t, e = !1) {
  if (!t) return;
  Bt.has(t) || Bt.set(t, t.getAttribute("aria-expanded"));
  const n = t.popoverTargetElement;
  if (n instanceof HTMLElement && n.popover === "auto")
    t.setAttribute("aria-expanded", String(e));
  else {
    const o = Bt.get(t);
    o ? t.setAttribute("aria-expanded", o) : t.removeAttribute("aria-expanded");
  }
}
var Rn = globalThis.ShadowRoot || function() {
};
function zi() {
  return typeof HTMLElement < "u" && typeof HTMLElement.prototype == "object" && "popover" in HTMLElement.prototype;
}
function me(t, e, n) {
  const o = t[e];
  Object.defineProperty(t, e, {
    value(i) {
      return o.call(this, n(i));
    }
  });
}
var Ui = /(^|[^\\]):popover-open\b/g;
function Gi() {
  return typeof globalThis.CSSLayerBlockRule == "function";
}
function Ki() {
  const t = Gi();
  return `
${t ? "@layer popover-polyfill {" : ""}
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }

  :where(dialog[popover].\\:popover-open) {
    display: block;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
${t ? "}" : ""}
`;
}
var Pe = null;
function Ot(t) {
  const e = Ki();
  if (Pe === null)
    try {
      Pe = new CSSStyleSheet(), Pe.replaceSync(e);
    } catch {
      Pe = !1;
    }
  if (Pe === !1) {
    const n = document.createElement("style");
    n.textContent = e, t instanceof Document ? t.head.prepend(n) : t.prepend(n);
  } else
    t.adoptedStyleSheets = [Pe, ...t.adoptedStyleSheets];
}
function Ji() {
  if (typeof window > "u") return;
  window.ToggleEvent = window.ToggleEvent || xt;
  function t(s) {
    return s?.includes(":popover-open") && (s = s.replace(
      Ui,
      "$1.\\:popover-open"
    )), s;
  }
  me(Document.prototype, "querySelector", t), me(Document.prototype, "querySelectorAll", t), me(Element.prototype, "querySelector", t), me(Element.prototype, "querySelectorAll", t), me(Element.prototype, "matches", t), me(Element.prototype, "closest", t), me(
    DocumentFragment.prototype,
    "querySelectorAll",
    t
  ), Object.defineProperties(HTMLElement.prototype, {
    popover: {
      enumerable: !0,
      configurable: !0,
      get() {
        if (!this.hasAttribute("popover")) return null;
        const s = (this.getAttribute("popover") || "").toLowerCase();
        return s === "" || s == "auto" ? "auto" : "manual";
      },
      set(s) {
        s === null ? this.removeAttribute("popover") : this.setAttribute("popover", s);
      }
    },
    showPopover: {
      enumerable: !0,
      configurable: !0,
      value() {
        Jt(this);
      }
    },
    hidePopover: {
      enumerable: !0,
      configurable: !0,
      value() {
        Ze(this, !0, !0);
      }
    },
    togglePopover: {
      enumerable: !0,
      configurable: !0,
      value(s) {
        tt.get(this) === "showing" && s === void 0 || s === !1 ? Ze(this, !0, !0) : (s === void 0 || s === !0) && Jt(this);
      }
    }
  });
  const e = Element.prototype.attachShadow;
  e && Object.defineProperties(Element.prototype, {
    attachShadow: {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value(s) {
        const d = e.call(this, s);
        return Ot(d), d;
      }
    }
  });
  const n = HTMLElement.prototype.attachInternals;
  n && Object.defineProperties(HTMLElement.prototype, {
    attachInternals: {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value() {
        const s = n.call(this);
        return s.shadowRoot && Ot(s.shadowRoot), s;
      }
    }
  });
  const o = /* @__PURE__ */ new WeakMap();
  function i(s) {
    Object.defineProperties(s.prototype, {
      popoverTargetElement: {
        enumerable: !0,
        configurable: !0,
        set(d) {
          if (d === null)
            this.removeAttribute("popovertarget"), o.delete(this);
          else if (d instanceof Element)
            this.setAttribute("popovertarget", ""), o.set(this, d);
          else
            throw new TypeError(
              "popoverTargetElement must be an element or null"
            );
        },
        get() {
          if (this.localName !== "button" && this.localName !== "input" || this.localName === "input" && this.type !== "reset" && this.type !== "image" && this.type !== "button" || this.disabled || this.form && this.type === "submit")
            return null;
          const d = o.get(this);
          if (d && d.isConnected)
            return d;
          if (d && !d.isConnected)
            return o.delete(this), null;
          const u = Fe(this), f = this.getAttribute("popovertarget");
          return (u instanceof Document || u instanceof Rn) && f && u.getElementById(f) || null;
        }
      },
      popoverTargetAction: {
        enumerable: !0,
        configurable: !0,
        get() {
          const d = (this.getAttribute("popovertargetaction") || "").toLowerCase();
          return d === "show" || d === "hide" ? d : "toggle";
        },
        set(d) {
          this.setAttribute("popovertargetaction", d);
        }
      }
    });
  }
  i(HTMLButtonElement), i(HTMLInputElement);
  const r = (s) => {
    const d = s.composedPath(), u = d[0];
    if (!(u instanceof Element) || u?.shadowRoot)
      return;
    const f = Fe(u);
    if (!(f instanceof Rn || f instanceof Document))
      return;
    const m = d.find(
      (p) => p.matches?.("[popovertargetaction],[popovertarget]")
    );
    if (m) {
      Oi(m), s.preventDefault();
      return;
    }
  }, l = (s) => {
    const d = s.key, u = s.target;
    !s.defaultPrevented && u && (d === "Escape" || d === "Esc") && At(u.ownerDocument, !0, !0);
  };
  ((s) => {
    s.addEventListener("click", r), s.addEventListener("keydown", l), s.addEventListener("pointerdown", Ln), s.addEventListener("pointerup", Ln);
  })(document), Ot(document);
}
var $t = { Tooltip: "prc-TooltipV2-Tooltip-tLeuB", KeybindingHintContainer: "prc-TooltipV2-KeybindingHintContainer-Ymj-3", HasTextBefore: "prc-TooltipV2-HasTextBefore-fdOXj" }, Xi = { InternalVisuallyHidden: "prc-src-InternalVisuallyHidden-2YaI6" };
function nt(t) {
  const e = _.c(14);
  let n, o, i, r, l;
  e[0] !== t ? ({
    isVisible: r,
    children: o,
    as: n,
    className: i,
    ...l
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i, e[4] = r, e[5] = l) : (n = e[1], o = e[2], i = e[3], r = e[4], l = e[5]);
  const a = n || "span", s = !r;
  let d;
  e[6] !== i || e[7] !== s ? (d = I(i, {
    [Xi.InternalVisuallyHidden]: s
  }), e[6] = i, e[7] = s, e[8] = d) : d = e[8];
  let u;
  return e[9] !== a || e[10] !== o || e[11] !== l || e[12] !== d ? (u = /* @__PURE__ */ c(a, {
    className: d,
    ...l,
    children: o
  }), e[9] = a, e[10] = o, e[11] = l, e[12] = d, e[13] = u) : u = e[13], u;
}
function Zi() {
  const t = ie(/* @__PURE__ */ new Set()), e = ae((o, i, ...r) => {
    const l = window.setTimeout(o, i, ...r);
    return t.current.add(l), l;
  }, []), n = ae((o) => {
    clearTimeout(o), t.current.delete(o);
  }, []);
  return Y(() => () => {
    for (const o of t.current)
      clearTimeout(o);
  }, []), {
    safeSetTimeout: e,
    safeClearTimeout: n
  };
}
function We(t) {
  const e = R.useRef(null);
  return t ?? e;
}
function kn(t) {
  if (!t.defaultPrevented) {
    for (const e of Object.values(Qe).reverse())
      if (e(t), t.defaultPrevented) break;
  }
}
const Qe = {};
function Qi(t, e) {
  Qe[t] = e;
}
function Yi(t) {
  delete Qe[t];
}
let er = 0;
const ao = (t, e = [t]) => {
  const n = ae(t, e), o = ae((r) => {
    r.key === "Escape" && n(r);
  }, [n]), i = we(() => er++, []);
  Y(() => (Object.keys(Qe).length === 0 && document.addEventListener("keydown", kn), Qi(i, o), () => {
    Yi(i), Object.keys(Qe).length === 0 && document.removeEventListener("keydown", kn);
  }), [i, o]);
}, tr = !!(typeof window < "u" && window.document && window.document.createElement);
function so() {
  const t = _.c(2), [e, n] = j(nr);
  let o, i;
  return t[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
    n(Xe());
  }, i = [], t[0] = o, t[1] = i) : (o = t[0], i = t[1]), Y(o, i), e;
}
function nr() {
  return tr ? Xe() : !1;
}
const co = ([t, ...e]) => {
  var n;
  return ((n = t?.toUpperCase()) !== null && n !== void 0 ? n : "") + e.join("").toLowerCase();
}, or = (t, e) => {
  var n;
  return (n = {
    alt: e ? "⌥" : "Alt",
    // the alt key _is_ the option key on MacOS - in the browser there is no "option" key
    control: "⌃",
    shift: "⇧",
    meta: e ? "⌘" : "Win",
    mod: e ? "⌘" : "⌃",
    pageup: "PgUp",
    pagedown: "PgDn",
    arrowup: "↑",
    arrowdown: "↓",
    arrowleft: "←",
    arrowright: "→",
    plus: "+",
    // needed to allow +-separated chords
    backspace: "⌫",
    delete: "Del",
    space: "␣",
    // needed to allow space-separated sequences
    tab: "⇥",
    enter: "⏎",
    escape: "Esc",
    function: "Fn",
    capslock: "CapsLock",
    insert: "Ins",
    printscreen: "PrtScn"
  }[t]) !== null && n !== void 0 ? n : co(t);
}, ir = (t, e) => {
  var n;
  return (n = {
    alt: e ? "Option" : "Alt",
    mod: e ? "Command" : "Control",
    "+": "Plus",
    pageup: "Page Up",
    pagedown: "Page Down",
    arrowup: "Up Arrow",
    arrowdown: "Down Arrow",
    arrowleft: "Left Arrow",
    arrowright: "Right Arrow",
    capslock: "Caps Lock",
    printscreen: "Print Screen"
  }[t]) !== null && n !== void 0 ? n : co(t);
}, uo = (t, e) => {
  var n;
  return (n = {
    alt: e ? "option" : "alt",
    meta: e ? "command" : "Windows",
    mod: e ? "command" : "control",
    // Screen readers may not be able to pronounce concatenated words - this provides a better experience
    pageup: "page up",
    pagedown: "page down",
    arrowup: "up arrow",
    arrowdown: "down arrow",
    arrowleft: "left arrow",
    arrowright: "right arrow",
    capslock: "caps lock",
    printscreen: "print screen",
    // We don't need to represent _every_ symbol - only those found on standard keyboards.
    // Other symbols should be avoided as keyboard shortcuts anyway.
    // These should match the colloquial names of the keys, not the names of the symbols. Ie,
    // "Equals" not "Equal Sign", "Dash" not "Minus", "Period" not "Dot", etc.
    "`": "backtick",
    "~": "tilde",
    "!": "exclamation point",
    "@": "at",
    "#": "hash",
    $: "dollar sign",
    "%": "percent",
    "^": "caret",
    "&": "ampersand",
    "*": "asterisk",
    "(": "left parenthesis",
    ")": "right parenthesis",
    _: "underscore",
    "-": "dash",
    "+": "plus",
    "=": "equals",
    "[": "left bracket",
    "{": "left curly brace",
    "]": "right bracket",
    "}": "right curly brace",
    "\\": "backslash",
    "|": "pipe",
    ";": "semicolon",
    ":": "colon",
    "'": "single quote",
    '"': "double quote",
    ",": "comma",
    "<": "left angle bracket",
    ".": "period",
    ">": "right angle bracket",
    "/": "forward slash",
    "?": "question mark",
    " ": "space"
  }[t]) !== null && n !== void 0 ? n : t.toLowerCase();
}, rr = (t) => {
  const e = _.c(14), {
    name: n,
    format: o
  } = t, i = so();
  let r;
  e[0] !== i || e[1] !== n ? (r = uo(n, i), e[0] = i, e[1] = n, e[2] = r) : r = e[2];
  let l;
  e[3] !== r ? (l = /* @__PURE__ */ c(nt, {
    children: r
  }), e[3] = r, e[4] = l) : l = e[4];
  let a;
  e[5] !== o || e[6] !== i || e[7] !== n ? (a = o === "condensed" ? or(n, i) : ir(n, i), e[5] = o, e[6] = i, e[7] = n, e[8] = a) : a = e[8];
  let s;
  e[9] !== a ? (s = /* @__PURE__ */ c("span", {
    "aria-hidden": !0,
    children: a
  }), e[9] = a, e[10] = s) : s = e[10];
  let d;
  return e[11] !== l || e[12] !== s ? (d = /* @__PURE__ */ w(pe, {
    children: [l, s]
  }), e[11] = l, e[12] = s, e[13] = d) : d = e[13], d;
};
var je = { Chord: "prc-components-Chord-DdhWN", ChordNormal: "prc-components-ChordNormal-Ov9XG", ChordOnEmphasis: "prc-components-ChordOnEmphasis-O-4BS", ChordOnPrimary: "prc-components-ChordOnPrimary-J2XUj", ChordSmall: "prc-components-ChordSmall-c-P-x" }, lr = { Text: "prc-Text-Text-9mHv3" };
function fo(t, e) {
  const n = _.c(14);
  let o, i, r, l, a;
  n[0] !== t ? ({
    as: l,
    className: o,
    size: r,
    weight: a,
    ...i
  } = t, n[0] = t, n[1] = o, n[2] = i, n[3] = r, n[4] = l, n[5] = a) : (o = n[1], i = n[2], r = n[3], l = n[4], a = n[5]);
  const s = l === void 0 ? "span" : l, d = R.useRef(null);
  Yt(e, d);
  let u;
  n[6] !== o ? (u = I(o, lr.Text), n[6] = o, n[7] = u) : u = n[7];
  let f;
  return n[8] !== s || n[9] !== i || n[10] !== r || n[11] !== u || n[12] !== a ? (f = /* @__PURE__ */ c(s, {
    className: u,
    "data-size": r,
    "data-weight": a,
    ...i,
    ref: d
  }), n[8] = s, n[9] = i, n[10] = r, n[11] = u, n[12] = a, n[13] = f) : f = n[13], f;
}
fo.displayName = "Text";
var on = Jo(fo);
const ar = {
  control: 1,
  meta: 2,
  alt: 3,
  option: 4,
  shift: 5,
  function: 6
}, Hn = (t) => {
  var e;
  return (e = ar[t]) !== null && e !== void 0 ? e : 1 / 0;
}, sr = (t, e) => Hn(t) - Hn(e), po = (t) => t.split("+").map((e) => e.toLowerCase()).sort(sr), cr = (t) => {
  const e = _.c(13), {
    keys: n,
    format: o,
    variant: i,
    size: r
  } = t, l = o === void 0 ? "condensed" : o, a = i === void 0 ? "normal" : i, s = r === void 0 ? "normal" : r, d = a === "normal", u = a === "onEmphasis", f = a === "onPrimary", m = s === "small";
  let p;
  e[0] !== d || e[1] !== u || e[2] !== f || e[3] !== m ? (p = I(je.Chord, {
    [je.ChordNormal]: d,
    [je.ChordOnEmphasis]: u,
    [je.ChordOnPrimary]: f,
    [je.ChordSmall]: m
  }), e[0] = d, e[1] = u, e[2] = f, e[3] = m, e[4] = p) : p = e[4];
  let h;
  if (e[5] !== l || e[6] !== n) {
    let g;
    e[8] !== l ? (g = (v, T) => /* @__PURE__ */ w(Un, {
      children: [T > 0 && l === "full" ? /* @__PURE__ */ c("span", {
        "aria-hidden": !0,
        children: " + "
      }) : " ", /* @__PURE__ */ c(rr, {
        name: v,
        format: l
      })]
    }, T), e[8] = l, e[9] = g) : g = e[9], h = po(n).map(g), e[5] = l, e[6] = n, e[7] = h;
  } else
    h = e[7];
  let b;
  return e[10] !== p || e[11] !== h ? (b = /* @__PURE__ */ c(on, {
    "data-kbd-chord": !0,
    className: p,
    children: h
  }), e[10] = p, e[11] = h, e[12] = b) : b = e[12], b;
}, dr = (t, e) => po(t).map((n) => uo(n, e)).join(" "), ho = (t) => t.split(" "), ur = ({
  keys: t,
  ...e
}) => ho(t).map((n, o) => /* @__PURE__ */ w(Un, {
  children: [
    //  Since we audibly separate individual keys in chord with space, we need some other separator for chords in a sequence
    o > 0 && /* @__PURE__ */ w(pe, {
      children: [/* @__PURE__ */ c(nt, {
        children: "then"
      }), " "]
    }),
    /* @__PURE__ */ c(cr, {
      keys: n,
      ...e
    })
  ]
}, o)), fr = (t, e) => ho(t).map((n) => dr(n, e)).join(" then ");
var pr = { KeybindingHint: "prc-KeybindingHint-KeybindingHint-qpYIs" };
const hr = (t) => {
  const e = _.c(5), {
    children: n,
    className: o
  } = t;
  let i;
  e[0] !== o ? (i = I(o, pr.KeybindingHint), e[0] = o, e[1] = i) : i = e[1];
  let r;
  return e[2] !== n || e[3] !== i ? (r = /* @__PURE__ */ c(on, {
    as: "kbd",
    className: i,
    "data-testid": "keybinding-hint",
    children: n
  }), e[2] = n, e[3] = i, e[4] = r) : r = e[4], r;
}, mo = /* @__PURE__ */ Gn((t) => {
  const e = _.c(8);
  let n, o;
  e[0] !== t ? ({
    className: n,
    ...o
  } = t, e[0] = t, e[1] = n, e[2] = o) : (n = e[1], o = e[2]);
  let i;
  e[3] !== o ? (i = /* @__PURE__ */ c(ur, {
    ...o
  }), e[3] = o, e[4] = i) : i = e[4];
  let r;
  return e[5] !== n || e[6] !== i ? (r = /* @__PURE__ */ c(hr, {
    className: n,
    children: i
  }), e[5] = n, e[6] = i, e[7] = r) : r = e[7], r;
});
mo.displayName = "KeybindingHint";
const mr = fr, Mn = {
  nw: {
    side: "outside-top",
    align: "end"
  },
  n: {
    side: "outside-top",
    align: "center"
  },
  ne: {
    side: "outside-top",
    align: "start"
  },
  e: {
    side: "outside-right",
    align: "center"
  },
  se: {
    side: "outside-bottom",
    align: "start"
  },
  s: {
    side: "outside-bottom",
    align: "center"
  },
  sw: {
    side: "outside-bottom",
    align: "end"
  },
  w: {
    side: "outside-left",
    align: "center"
  }
}, br = {
  "outside-top-end": "nw",
  "outside-top-center": "n",
  "outside-top-start": "ne",
  "outside-right-center": "e",
  "outside-bottom-start": "se",
  "outside-bottom-center": "s",
  "outside-bottom-end": "sw",
  "outside-left-center": "w"
}, gr = ["a[href]", "button:not([disabled])", "summary", "select", "input:not([type=hidden])", "textarea"], vr = {
  short: 50,
  medium: 400,
  long: 1200
}, Ft = (t) => gr.some((e) => t.matches(e)) || t.hasAttribute("role") && t.getAttribute("role") === "button", bo = /* @__PURE__ */ R.createContext({}), go = /* @__PURE__ */ R.forwardRef(({
  direction: t = "s",
  text: e,
  type: n = "description",
  children: o,
  id: i,
  className: r,
  keybindingHint: l,
  delay: a = "short",
  _privateDisableTooltip: s = !1,
  ...d
}, u) => {
  const f = Je(i), m = dt.only(o), p = We(u), h = ie(null), [b, g] = j(t), [v, T] = j(!1), S = R.useRef(null), {
    safeSetTimeout: k,
    safeClearTimeout: A
  } = Zi(), M = () => {
    try {
      if (h.current && p.current && h.current.hasAttribute("popover") && !h.current.matches(":popover-open") && !s) {
        const C = h.current, N = p.current;
        C.showPopover(), T(!0);
        const $ = {
          side: Mn[t].side,
          align: Mn[t].align
        }, {
          top: X,
          left: K,
          anchorAlign: W,
          anchorSide: Z
        } = pi(C, N, $), z = br[`${Z}-${W}`];
        g(z), C.style.top = `${X}px`, C.style.left = `${K}px`;
      }
    } catch (C) {
      if (!(C && typeof C == "object" && "message" in C && typeof C.message == "string" && C.message.includes("not a valid selector"))) throw C;
    }
  }, E = () => {
    S.current && (A(S.current), S.current = null);
    try {
      h.current && p.current && h.current.hasAttribute("popover") && h.current.matches(":popover-open") && h.current.hidePopover(), T(!1);
    } catch (C) {
      if (!(C && typeof C == "object" && "message" in C && typeof C.message == "string" && C.message.includes("not a valid selector"))) throw C;
    }
  }, V = we(() => ({
    tooltipId: f
  }), [f]);
  Y(() => {
    if (!h.current || !p.current) return;
    const C = Ft(p.current), N = p.current.childNodes, $ = Array.from(N).some((K) => K instanceof HTMLElement && Ft(K) || Array.from(K.childNodes).some((W) => W instanceof HTMLElement && Ft(W)));
    if (C || $ || (process.env.NODE_ENV !== "production" ? He(!1, "The `Tooltip` component expects a single React element that contains interactive content. Consider using a `<button>` or equivalent interactive element instead.") : He(!1)), n === "label") {
      const K = p.current.hasAttribute("aria-label"), W = Array.from(p.current.childNodes).some((Z) => Z instanceof HTMLElement && Z.hasAttribute("aria-label"));
      process.env.NODE_ENV !== "production" && tn(K || W, "The label type `Tooltip` is going to be used here to label the trigger element. Please remove the aria-label from the trigger element.");
    }
    typeof window < "u" && (zi() || Ji()), h.current.setAttribute("popover", "auto");
  }, [h, p, t, n]), ao((C) => {
    v && (C.stopImmediatePropagation(), C.preventDefault(), E());
  }, [v]);
  const O = so(), B = "aria-label" in d;
  return /* @__PURE__ */ c(bo.Provider, {
    value: V,
    children: /* @__PURE__ */ w(pe, {
      children: [/* @__PURE__ */ R.isValidElement(m) && // eslint-disable-next-line react-hooks/refs
      /* @__PURE__ */ R.cloneElement(m, {
        // @ts-expect-error it needs a non nullable ref
        ref: p,
        // If it is a type description, we use tooltip to describe the trigger
        "aria-describedby": (() => {
          if (n !== "description")
            return m.props["aria-describedby"];
          const C = m.props["aria-describedby"];
          return C ? `${C} ${f}` : f;
        })(),
        // If it is a label type, we use tooltip to label the trigger
        "aria-labelledby": n === "label" ? f : m.props["aria-labelledby"],
        onBlur: (C) => {
          var N, $;
          E(), (N = ($ = m.props).onBlur) === null || N === void 0 || N.call($, C);
        },
        onTouchEnd: (C) => {
          var N, $;
          (N = ($ = m.props).onTouchEnd) === null || N === void 0 || N.call($, C), k(() => E(), 10);
        },
        onFocus: (C) => {
          var N, $;
          try {
            if (!C.target.matches(":focus-visible")) return;
          } catch {
          }
          M(), (N = ($ = m.props).onFocus) === null || N === void 0 || N.call($, C);
        },
        onMouseOverCapture: (C) => {
          const N = vr[a] || 50;
          S.current = k(() => {
            var $, X;
            S.current && (M(), ($ = (X = m.props).onMouseEnter) === null || $ === void 0 || $.call(X, C));
          }, N);
        },
        onMouseLeave: (C) => {
          var N, $;
          E(), (N = ($ = m.props).onMouseLeave) === null || N === void 0 || N.call($, C);
        }
      }), /* @__PURE__ */ c("span", {
        className: I(r, $t.Tooltip),
        ref: h,
        "data-direction": b,
        ...d,
        // Only need tooltip role if the tooltip is a description for supplementary information
        role: n === "description" ? "tooltip" : void 0,
        "aria-hidden": !0,
        onMouseEnter: M,
        onMouseLeave: E,
        id: B || !l ? f : void 0,
        children: l ? /* @__PURE__ */ w(pe, {
          children: [/* @__PURE__ */ w("span", {
            id: B ? void 0 : f,
            children: [e, /* @__PURE__ */ w(nt, {
              children: ["(", mr(l, O), ")"]
            })]
          }), /* @__PURE__ */ c("span", {
            className: I($t.KeybindingHintContainer, e && $t.HasTextBefore),
            "aria-hidden": !0,
            children: /* @__PURE__ */ c(mo, {
              keys: l,
              format: "condensed",
              variant: "onEmphasis",
              size: "small"
            })
          })]
        }) : e
      })]
    })
  });
});
go.__SLOT__ = Symbol("Tooltip");
var ze = { Tooltip: "prc-Tooltip-Tooltip-JLsri", "tooltip-appear": "prc-Tooltip-tooltip-appear-orG4s", "Tooltip--noDelay": "prc-Tooltip-Tooltip--noDelay-g8wqY", "Tooltip--multiline": "prc-Tooltip-Tooltip--multiline-3-2P7", "Tooltip--s": "prc-Tooltip-Tooltip--s-RbCQB", "Tooltip--se": "prc-Tooltip-Tooltip--se-VqnS5", "Tooltip--sw": "prc-Tooltip-Tooltip--sw-FsNH8", "Tooltip--n": "prc-Tooltip-Tooltip--n-SqCQ-", "Tooltip--ne": "prc-Tooltip-Tooltip--ne-WzCLj", "Tooltip--nw": "prc-Tooltip-Tooltip--nw-fM9Mv", "Tooltip--w": "prc-Tooltip-Tooltip--w-2-qCh", "Tooltip--e": "prc-Tooltip-Tooltip--e-JU1w8", "Tooltip--alignRight": "prc-Tooltip-Tooltip--alignRight-aNEnL", "Tooltip--alignLeft": "prc-Tooltip-Tooltip--alignLeft-LqNu7" };
const vo = /* @__PURE__ */ R.createContext({}), rn = /* @__PURE__ */ R.forwardRef(function({
  as: e = "span",
  direction: n = "n",
  children: o,
  className: i,
  text: r,
  noDelay: l,
  align: a,
  wrap: s,
  id: d,
  ...u
}, f) {
  const m = Je(d), p = I(i, ze.Tooltip, ze[`Tooltip--${n}`], {
    [ze[`Tooltip--align${a === "left" ? "Left" : "Right"}`]]: a,
    [ze["Tooltip--noDelay"]]: l,
    [ze["Tooltip--multiline"]]: s,
    // maintaining feature parity with old classes
    [`tooltipped-${n}`]: !0,
    [`tooltipped-align-${a === "left" ? "left" : "right"}-2`]: a,
    "tooltipped-no-delay": l,
    "tooltipped-multiline": s
  }), h = we(() => ({
    tooltipId: m
  }), [m]);
  return (
    // This provider is used to check if an icon button is wrapped with tooltip or not.
    /* @__PURE__ */ c(vo.Provider, {
      value: h,
      children: /* @__PURE__ */ c(e, {
        role: "tooltip",
        "aria-label": r,
        id: m,
        ...u,
        className: p,
        ref: f,
        children: o
      })
    })
  );
});
rn.alignments = ["left", "right"];
rn.directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
rn.__SLOT__ = Symbol("DEPRECATED_Tooltip");
const Tr = /* @__PURE__ */ Et(({
  icon: t,
  "aria-label": e,
  description: n,
  disabled: o,
  tooltipDirection: i,
  // This is planned to be a temporary prop until the default tooltip on icon buttons are fully rolled out.
  unsafeDisableTooltip: r = !1,
  keyshortcuts: l,
  keybindingHint: a,
  className: s,
  ...d
}, u) => {
  const {
    tooltipId: f
  } = R.useContext(bo), {
    tooltipId: m
  } = R.useContext(vo), {
    "aria-expanded": p,
    "aria-haspopup": h
  } = d, b = f || m, g = (p === !0 || p === "true") && h === "true";
  return r || o || e === void 0 || e === "" || b ? /* @__PURE__ */ c(Sn, {
    icon: t,
    className: I(s, En.IconButton),
    "data-component": "IconButton",
    type: "button",
    "aria-label": e,
    disabled: o,
    ...d,
    // @ts-expect-error StyledButton wants both Anchor and Button refs
    ref: u
  }) : /* @__PURE__ */ c(go, {
    ref: u,
    text: n ?? e,
    type: n ? void 0 : "label",
    direction: i,
    keybindingHint: a ?? l,
    _privateDisableTooltip: g,
    children: /* @__PURE__ */ c(Sn, {
      icon: t,
      className: I(s, En.IconButton),
      "data-component": "IconButton",
      type: "button",
      "aria-keyshortcuts": l ?? void 0,
      "aria-label": n ? e : void 0,
      ...d
    })
  });
}), pt = !0;
function Bn(t) {
  if (!t.defaultPrevented) {
    for (const e of Object.values(Ye).reverse())
      if (e(t) === pt || t.defaultPrevented)
        break;
  }
}
const Ye = {};
function yr(t, e) {
  Ye[t] = e;
}
function wr(t) {
  delete Ye[t];
}
let Cr = 0;
const Sr = ({
  containerRef: t,
  ignoreClickRefs: e,
  onClickOutside: n
}) => {
  const o = we(() => Cr++, []), i = ae((r) => {
    var l;
    if (r instanceof MouseEvent && r.button > 0 || (l = t.current) !== null && l !== void 0 && l.contains(r.target) || e && e.some(({
      current: a
    }) => a?.contains(r.target)))
      return pt;
    n(r);
  }, [t, e, n]);
  Y(() => (Object.keys(Ye).length === 0 && document.addEventListener("mousedown", Bn, {
    capture: !0
  }), yr(o, i), () => {
    wr(o), Object.keys(Ye).length === 0 && document.removeEventListener("mousedown", Bn, {
      capture: !0
    });
  }), [o, i]);
};
function Er(t, e = []) {
  const [n, o] = R.useState(!1), i = We(t?.containerRef), r = We(t?.initialFocusRef), l = t?.disabled, a = R.useRef(), s = R.useRef(null);
  !s.current && !l && (s.current = document.activeElement);
  function d() {
    var u;
    (u = a.current) === null || u === void 0 || u.abort(), !(t != null && t.allowOutsideClick && n) && (t != null && t.returnFocusRef && t.returnFocusRef.current instanceof HTMLElement ? t.returnFocusRef.current.focus() : t != null && t.restoreFocusOnCleanUp && s.current instanceof HTMLElement && (s.current.focus(), s.current = null));
  }
  return R.useEffect(
    () => {
      if (i.current instanceof HTMLElement)
        if (l)
          d();
        else {
          var u;
          return a.current = to(i.current, (u = r.current) !== null && u !== void 0 ? u : void 0), () => {
            d();
          };
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, r, l, ...e]
  ), Sr({
    containerRef: i,
    onClickOutside: () => {
      if (o(!0), t != null && t.allowOutsideClick) {
        var u;
        t.returnFocusRef && (t.returnFocusRef = void 0), t.restoreFocusOnCleanUp = !1, (u = a.current) === null || u === void 0 || u.abort();
      }
    }
  }), {
    containerRef: i,
    initialFocusRef: r
  };
}
function To(t = {}, e = []) {
  const n = We(t.containerRef), o = !!t.activeDescendantFocus, i = typeof t.activeDescendantFocus == "boolean" || !t.activeDescendantFocus ? void 0 : t.activeDescendantFocus, r = We(i), l = t.disabled, a = R.useRef();
  return Y(
    () => {
      if (n.current instanceof HTMLElement && (!o || r.current instanceof HTMLElement))
        if (l) {
          var d;
          (d = a.current) === null || d === void 0 || d.abort();
        } else {
          var s;
          const u = {
            ...t,
            activeDescendantControl: (s = r.current) !== null && s !== void 0 ? s : void 0
          };
          return a.current = ki(n.current, u), () => {
            var f;
            (f = a.current) === null || f === void 0 || f.abort();
          };
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, ...e]
  ), {
    containerRef: n,
    activeDescendantControlRef: r
  };
}
const wt = typeof window < "u" && // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
typeof window.document < "u" && // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
typeof window.document.createElement < "u" ? zo : Y, On = "__primerPortalRoot__", ln = "__default__", an = {};
function xr(t, e = ln) {
  an[e] = t;
}
function Ar() {
  const t = an[ln];
  if (!t || !document.body.contains(t)) {
    let e = document.getElementById(On);
    if (!(e instanceof Element)) {
      e = document.createElement("div"), e.setAttribute("id", On), e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.width = "100%";
      const n = document.querySelector("[data-portal-root]");
      n ? n.appendChild(e) : document.body.appendChild(e);
    }
    xr(e);
  }
}
const Ir = /* @__PURE__ */ R.createContext({}), _r = ({
  children: t,
  onMount: e,
  containerName: n
}) => {
  const {
    portalContainerName: o
  } = Kn(Ir), i = R.useRef(null);
  if (!i.current) {
    const l = document.createElement("div");
    l.style.position = "relative", l.style.zIndex = "1", i.current = l;
  }
  const r = i.current;
  return wt(() => {
    let l = n ?? o;
    l === void 0 && (l = ln, Ar());
    const a = an[l];
    if (!a)
      throw new Error(`Portal container '${l}' is not yet registered. Container must be registered with registerPortalRoot before use.`);
    return a.appendChild(r), e?.(), () => {
      a.removeChild(r);
    };
  }, [r, n, o]), /* @__PURE__ */ Zn(t, r);
};
var re = { Backdrop: "prc-Dialog-Backdrop-5Nt2U", Dialog: "prc-Dialog-Dialog-G8cDF", DisableScroll: "prc-Dialog-DisableScroll-UkWFM", DialogOverflowWrapper: "prc-Dialog-DialogOverflowWrapper-JvHzz", Footer: "prc-Dialog-Footer-PMeQk", Header: "prc-Dialog-Header-f7Me-", HeaderInner: "prc-Dialog-HeaderInner-H-fFY", HeaderContent: "prc-Dialog-HeaderContent-mjAsn", Title: "prc-Dialog-Title-M-iPn", Subtitle: "prc-Dialog-Subtitle-aBFSq", Body: "prc-Dialog-Body-bB903" };
function Me(t, e) {
  var n, o;
  const i = typeof t;
  if (i !== "object" && i !== "function" && t != null)
    return !1;
  const r = t, l = (n = r.__SLOT__) !== null && n !== void 0 ? n : (o = r.type) === null || o === void 0 ? void 0 : o.__SLOT__;
  return e.__SLOT__ ? l === e.__SLOT__ : !1;
}
function Nr(t, e) {
  const n = Dr(e, () => {
  }), o = [], i = Object.keys(e), r = Object.values(e);
  return R.Children.forEach(t, (l) => {
    if (!/* @__PURE__ */ R.isValidElement(l)) {
      o.push(l);
      return;
    }
    const a = r.findIndex((d) => {
      if (Array.isArray(d)) {
        const [u, f] = d;
        return (l.type === u || Me(l, u)) && f(l.props);
      } else
        return l.type === d || Me(l, d);
    });
    if (a === -1) {
      o.push(l);
      return;
    }
    const s = i[a];
    if (n[s]) {
      process.env.NODE_ENV !== "production" && tn(!0, `Found duplicate "${String(s)}" slot. Only the first will be rendered.`);
      return;
    }
    n[s] = l;
  }), [n, o];
}
function Dr(t, e) {
  return Object.keys(t).reduce((n, o) => (n[o] = e(t[o]), n), {});
}
function Pr(t) {
  const e = _.c(3), [n, o] = j(!1);
  let i, r;
  return e[0] !== t ? (i = () => {
    if (t.current === null)
      return;
    const l = new ResizeObserver((a) => {
      for (const s of a)
        if (s.target.scrollHeight > s.target.clientHeight || s.target.scrollWidth > s.target.clientWidth) {
          o(!0);
          break;
        }
    });
    return l.observe(t.current), () => {
      l.disconnect();
    };
  }, r = [t], e[0] = t, e[1] = i, e[2] = r) : (i = e[1], r = e[2]), Y(i, r), n;
}
var Lr = { ScrollableRegion: "prc-ScrollableRegion-ScrollableRegion--xtjK" };
function yo(t) {
  const e = _.c(17);
  let n, o, i, r, l;
  e[0] !== t ? ({
    "aria-label": i,
    "aria-labelledby": r,
    children: n,
    className: o,
    ...l
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i, e[4] = r, e[5] = l) : (n = e[1], o = e[2], i = e[3], r = e[4], l = e[5]);
  const a = R.useRef(null), s = Pr(a);
  let d;
  e[6] !== s || e[7] !== i || e[8] !== r ? (d = s ? {
    "aria-label": i,
    "aria-labelledby": r,
    role: "region",
    tabIndex: 0
  } : {}, e[6] = s, e[7] = i, e[8] = r, e[9] = d) : d = e[9];
  const u = d;
  let f;
  e[10] !== o ? (f = I(Lr.ScrollableRegion, o), e[10] = o, e[11] = f) : f = e[11];
  let m;
  return e[12] !== n || e[13] !== u || e[14] !== l || e[15] !== f ? (m = /* @__PURE__ */ c("div", {
    ...l,
    ...u,
    ref: a,
    className: f,
    children: n
  }), e[12] = n, e[13] = u, e[14] = l, e[15] = f, e[16] = m) : m = e[16], m;
}
const Rr = (t) => {
  const e = _.c(16), {
    dialogLabelId: n,
    title: o,
    subtitle: i,
    dialogDescriptionId: r,
    onClose: l
  } = t;
  let a;
  e[0] !== l ? (a = () => {
    l("close-button");
  }, e[0] = l, e[1] = a) : a = e[1];
  const s = a, d = o ?? "Dialog";
  let u;
  e[2] !== n || e[3] !== d ? (u = /* @__PURE__ */ c(oe.Title, {
    id: n,
    children: d
  }), e[2] = n, e[3] = d, e[4] = u) : u = e[4];
  let f;
  e[5] !== r || e[6] !== i ? (f = i && /* @__PURE__ */ c(oe.Subtitle, {
    id: r,
    children: i
  }), e[5] = r, e[6] = i, e[7] = f) : f = e[7];
  let m;
  e[8] !== u || e[9] !== f ? (m = /* @__PURE__ */ w("div", {
    className: re.HeaderContent,
    children: [u, f]
  }), e[8] = u, e[9] = f, e[10] = m) : m = e[10];
  let p;
  e[11] !== s ? (p = /* @__PURE__ */ c(oe.CloseButton, {
    onClose: s
  }), e[11] = s, e[12] = p) : p = e[12];
  let h;
  return e[13] !== m || e[14] !== p ? (h = /* @__PURE__ */ c(oe.Header, {
    children: /* @__PURE__ */ w("div", {
      className: re.HeaderInner,
      children: [m, p]
    })
  }), e[13] = m, e[14] = p, e[15] = h) : h = e[15], h;
}, kr = (t) => {
  const e = _.c(2), {
    children: n
  } = t;
  let o;
  return e[0] !== n ? (o = /* @__PURE__ */ c(oe.Body, {
    children: n
  }), e[0] = n, e[1] = o) : o = e[1], o;
}, Hr = (t) => {
  const e = _.c(4), {
    footerButtons: n
  } = t;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {
    bindKeys: q.ArrowHorizontal | q.Tab,
    focusInStrategy: "closest"
  }, e[0] = o) : o = e[0];
  const {
    containerRef: i
  } = To(o);
  let r;
  return e[1] !== n || e[2] !== i ? (r = n ? /* @__PURE__ */ c(oe.Footer, {
    ref: i,
    children: /* @__PURE__ */ c(oe.Buttons, {
      buttons: n
    })
  }) : null, e[1] = n, e[2] = i, e[3] = r) : r = e[3], r;
}, Mr = {
  narrow: "center",
  regular: "center"
}, Br = [], wo = /* @__PURE__ */ R.forwardRef((t, e) => {
  var n, o, i;
  const {
    title: r = "Dialog",
    subtitle: l = "",
    renderHeader: a,
    renderBody: s,
    renderFooter: d,
    onClose: u,
    role: f = "dialog",
    width: m = "xlarge",
    height: p = "auto",
    footerButtons: h = Br,
    position: b = Mr,
    returnFocusRef: g,
    initialFocusRef: v,
    className: T
  } = t, S = Je(), k = Je(), A = ie(null);
  for (const z of h)
    z.autoFocus && (z.ref = A);
  const [M, E] = j(!1), V = {
    ...t,
    title: r,
    subtitle: l,
    role: f,
    dialogLabelId: S,
    dialogDescriptionId: k
  }, O = ae((z) => {
    z.target === z.currentTarget && M && u("escape");
  }, [u, M]), [B, C] = Nr(t.children, {
    body: oe.Body,
    header: oe.Header,
    footer: oe.Footer
  }), N = ie(null);
  Yt(e, N);
  const $ = ie(null);
  Er({
    containerRef: N,
    initialFocusRef: v ?? A,
    restoreFocusOnCleanUp: !(g != null && g.current),
    returnFocusRef: g
  }), ao((z) => {
    u("escape"), z.preventDefault();
  }, [u]), R.useEffect(() => {
    var z;
    const ee = window.innerWidth - document.body.clientWidth;
    (z = N.current) === null || z === void 0 || z.classList.add(re.DisableScroll), document.body.style.setProperty("--prc-dialog-scrollgutter", `${ee}px`);
  }, []);
  const X = (n = B.header) !== null && n !== void 0 ? n : (a ?? Rr)(V), K = (o = B.body) !== null && o !== void 0 ? o : (s ?? kr)({
    ...V,
    children: C
  }), W = (i = B.footer) !== null && i !== void 0 ? i : (d ?? Hr)(V), Z = typeof b == "string" ? {
    "data-position-regular": b
  } : Object.fromEntries(Object.entries(b).map(([z, ee]) => [`data-position-${z}`, ee]));
  return /* @__PURE__ */ c(pe, {
    children: /* @__PURE__ */ c(_r, {
      children: /* @__PURE__ */ c("div", {
        ref: $,
        className: re.Backdrop,
        ...Z,
        onClick: O,
        onMouseDown: (z) => {
          E(z.target === z.currentTarget);
        },
        children: /* @__PURE__ */ w("div", {
          ref: N,
          role: f,
          "aria-labelledby": S,
          "aria-describedby": k,
          "aria-modal": !0,
          ...Z,
          "data-width": m,
          "data-height": p,
          className: I(T, re.Dialog),
          children: [X, /* @__PURE__ */ c(yo, {
            "aria-labelledby": S,
            className: re.DialogOverflowWrapper,
            children: K
          }), W]
        })
      })
    })
  });
});
wo.displayName = "Dialog";
const sn = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(9);
  let i, r;
  o[0] !== e ? ({
    className: i,
    ...r
  } = e, o[0] = e, o[1] = i, o[2] = r) : (i = o[1], r = o[2]);
  let l;
  o[3] !== i ? (l = I(i, re.Header), o[3] = i, o[4] = l) : l = o[4];
  let a;
  return o[5] !== n || o[6] !== r || o[7] !== l ? (a = /* @__PURE__ */ c("div", {
    ref: n,
    className: l,
    ...r
  }), o[5] = n, o[6] = r, o[7] = l, o[8] = a) : a = o[8], a;
});
sn.displayName = "Dialog.Header";
const Co = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(9);
  let i, r;
  o[0] !== e ? ({
    className: i,
    ...r
  } = e, o[0] = e, o[1] = i, o[2] = r) : (i = o[1], r = o[2]);
  let l;
  o[3] !== i ? (l = I(i, re.Title), o[3] = i, o[4] = l) : l = o[4];
  let a;
  return o[5] !== n || o[6] !== r || o[7] !== l ? (a = /* @__PURE__ */ c("h1", {
    ref: n,
    className: l,
    ...r
  }), o[5] = n, o[6] = r, o[7] = l, o[8] = a) : a = o[8], a;
});
Co.displayName = "Dialog.Title";
const So = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(9);
  let i, r;
  o[0] !== e ? ({
    className: i,
    ...r
  } = e, o[0] = e, o[1] = i, o[2] = r) : (i = o[1], r = o[2]);
  let l;
  o[3] !== i ? (l = I(i, re.Subtitle), o[3] = i, o[4] = l) : l = o[4];
  let a;
  return o[5] !== n || o[6] !== r || o[7] !== l ? (a = /* @__PURE__ */ c("h2", {
    ref: n,
    className: l,
    ...r
  }), o[5] = n, o[6] = r, o[7] = l, o[8] = a) : a = o[8], a;
});
So.displayName = "Dialog.Subtitle";
const cn = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(9);
  let i, r;
  o[0] !== e ? ({
    className: i,
    ...r
  } = e, o[0] = e, o[1] = i, o[2] = r) : (i = o[1], r = o[2]);
  let l;
  o[3] !== i ? (l = I(i, re.Body), o[3] = i, o[4] = l) : l = o[4];
  let a;
  return o[5] !== n || o[6] !== r || o[7] !== l ? (a = /* @__PURE__ */ c("div", {
    ref: n,
    className: l,
    ...r
  }), o[5] = n, o[6] = r, o[7] = l, o[8] = a) : a = o[8], a;
});
cn.displayName = "Dialog.Body";
const dn = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(9);
  let i, r;
  o[0] !== e ? ({
    className: i,
    ...r
  } = e, o[0] = e, o[1] = i, o[2] = r) : (i = o[1], r = o[2]);
  let l;
  o[3] !== i ? (l = I(i, re.Footer), o[3] = i, o[4] = l) : l = o[4];
  let a;
  return o[5] !== n || o[6] !== r || o[7] !== l ? (a = /* @__PURE__ */ c("div", {
    ref: n,
    className: l,
    ...r
  }), o[5] = n, o[6] = r, o[7] = l, o[8] = a) : a = o[8], a;
});
dn.displayName = "Dialog.Footer";
const Or = ({
  buttons: t
}) => {
  var e;
  const n = We((e = t.find((l) => l.autoFocus)) === null || e === void 0 ? void 0 : e.ref);
  let o = 0;
  const [i, r] = j(0);
  return Y(() => {
    if (i === 1) {
      var l;
      (l = n.current) === null || l === void 0 || l.focus();
    } else
      r(i + 1);
  }, [n, i]), /* @__PURE__ */ c(pe, {
    children: t.map((l, a) => {
      const {
        content: s,
        buttonType: d = "default",
        autoFocus: u = !1,
        ...f
      } = l;
      return /* @__PURE__ */ c(Xo, {
        ...f,
        // 'normal' value is equivalent to 'default', this is used for backwards compatibility
        variant: d === "normal" ? "default" : d,
        ref: u && o === 0 ? (o++, n) : null,
        children: s
      }, a);
    })
  });
}, $r = (t) => {
  const e = _.c(2), {
    onClose: n
  } = t;
  let o;
  return e[0] !== n ? (o = /* @__PURE__ */ c(Tr, {
    icon: Zo,
    "aria-label": "Close",
    onClick: n,
    variant: "invisible"
  }), e[0] = n, e[1] = o) : o = e[1], o;
};
sn.__SLOT__ = Symbol("Dialog.Header");
dn.__SLOT__ = Symbol("Dialog.Footer");
cn.__SLOT__ = Symbol("Dialog.Body");
const oe = Object.assign(wo, {
  __SLOT__: Symbol("Dialog"),
  Header: sn,
  Title: Co,
  Subtitle: So,
  Body: cn,
  Footer: dn,
  Buttons: Or,
  CloseButton: $r
});
var un = { ConfirmationHeader: "prc-ConfirmationDialog-ConfirmationHeader-O9n-1", ConfirmationBody: "prc-ConfirmationDialog-ConfirmationBody--0CDE", ConfirmationFooter: "prc-ConfirmationDialog-ConfirmationFooter-6q0Nn" }, Fr = { Heading: "prc-Heading-Heading-MtWFE" };
const Eo = /* @__PURE__ */ Et(({
  as: t = "h2",
  className: e,
  variant: n,
  ...o
}, i) => {
  const r = R.useRef(null);
  return Yt(i, r), process.env.NODE_ENV !== "production" && Y(() => {
    r.current && !(r.current instanceof HTMLHeadingElement) && console.warn("This Heading component should be an instanceof of h1-h6");
  }, [r]), /* @__PURE__ */ c(t, {
    className: I(e, Fr.Heading),
    "data-variant": n,
    ...o,
    ref: r
  });
});
Eo.displayName = "Heading";
const xo = ({
  title: t,
  onClose: e,
  dialogLabelId: n
}) => {
  const o = ae(() => {
    e("close-button");
  }, [e]);
  return /* @__PURE__ */ w("div", {
    className: un.ConfirmationHeader,
    children: [/* @__PURE__ */ c(Eo, {
      id: n,
      as: "h1",
      variant: "small",
      children: t
    }), /* @__PURE__ */ c(oe.CloseButton, {
      onClose: o
    })]
  });
};
xo.displayName = "ConfirmationHeader";
const Ao = ({
  children: t
}) => /* @__PURE__ */ c("div", {
  className: un.ConfirmationBody,
  children: t
});
Ao.displayName = "ConfirmationBody";
const Io = ({
  footerButtons: t
}) => {
  const {
    containerRef: e
  } = To({
    bindKeys: q.ArrowHorizontal | q.Tab,
    focusInStrategy: "closest"
  });
  return /* @__PURE__ */ c("div", {
    ref: e,
    className: un.ConfirmationFooter,
    children: /* @__PURE__ */ c(oe.Buttons, {
      buttons: t ?? []
    })
  });
};
Io.displayName = "ConfirmationFooter";
const _o = (t) => {
  const {
    onClose: e,
    title: n,
    cancelButtonContent: o = "Cancel",
    confirmButtonContent: i = "OK",
    confirmButtonType: r = "normal",
    cancelButtonLoading: l = !1,
    confirmButtonLoading: a = !1,
    children: s,
    className: d,
    width: u = "medium",
    height: f,
    overrideButtonFocus: m
  } = t, p = ae(() => {
    e("cancel");
  }, [e]), h = ae(() => {
    e("confirm");
  }, [e]), g = m !== void 0 ? m : r === "danger" ? "cancel" : "confirm";
  return /* @__PURE__ */ c(oe, {
    onClose: e,
    title: n,
    footerButtons: [{
      content: o,
      onClick: p,
      autoFocus: g === "cancel",
      loading: l
    }, {
      content: i,
      buttonType: r,
      onClick: h,
      autoFocus: g === "confirm",
      loading: a
    }],
    role: "alertdialog",
    width: u,
    height: f,
    className: d,
    renderHeader: xo,
    renderBody: Ao,
    renderFooter: Io,
    children: s
  });
};
_o.displayName = "ConfirmationDialog";
function Wr(t) {
  const e = _.c(7), {
    title: n,
    children: o,
    onRetry: i,
    onDismiss: r
  } = t, l = n === void 0 ? "Error" : n;
  let a;
  e[0] !== r || e[1] !== i ? (a = (d) => {
    d === "confirm" ? i?.() : r?.();
  }, e[0] = r, e[1] = i, e[2] = a) : a = e[2];
  let s;
  return e[3] !== o || e[4] !== a || e[5] !== l ? (s = /* @__PURE__ */ c(_o, {
    title: l,
    onClose: a,
    confirmButtonContent: "Retry",
    cancelButtonContent: "Dismiss",
    children: o
  }), e[3] = o, e[4] = a, e[5] = l, e[6] = s) : s = e[6], s;
}
const le = {
  ASC: "ASC",
  DESC: "DESC",
  NONE: "NONE"
}, No = le.ASC;
function Vr(t) {
  return t === le.ASC ? le.DESC : le.ASC;
}
function qr(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function jr(t, e) {
  const n = t instanceof Date ? t.getTime() : t, o = e instanceof Date ? e.getTime() : e;
  return n > o ? 1 : n < o ? -1 : 0;
}
function zr(t, e) {
  const n = $n(t), o = $n(e);
  for (; n.length !== 0 && o.length !== 0; ) {
    const i = n.shift(), r = o.shift();
    if (i !== r) {
      if (typeof i == "string" && typeof r == "string")
        return i.localeCompare(r);
      if (typeof i == "number" && typeof r == "number")
        return i > r ? 1 : -1;
      if (typeof i == "number" && typeof r == "string")
        return -1;
      if (typeof i == "string" && typeof r == "number")
        return 1;
      if (i === void 0 || r === void 0)
        break;
    }
  }
  return n.length > o.length ? 1 : -1;
}
function $n(t) {
  const e = [];
  let n = 0;
  for (; n < t.length; ) {
    let o = t[n];
    if (Wt(o)) {
      for (; n + 1 < t.length && Wt(t[n + 1]); )
        o = o + t[n + 1], n++;
      e.push(parseInt(o, 10));
    } else {
      for (; n + 1 < t.length && !Wt(t[n + 1]); )
        o = o + t[n + 1], n++;
      e.push(o);
    }
    n++;
  }
  return e;
}
function Wt(t) {
  return !Number.isNaN(parseInt(t, 10));
}
const Fn = {
  alphanumeric: zr,
  basic: qr,
  datetime: jr
};
function Ur(t) {
  const e = _.c(20), {
    columns: n,
    data: o,
    initialSortColumn: i,
    initialSortDirection: r,
    getRowId: l
  } = t, [a, s] = j(o), [d, u] = j(o), [f, m] = j(n);
  let p;
  e[0] !== n || e[1] !== i || e[2] !== r ? (p = () => Gr(n, i, r), e[0] = n, e[1] = i, e[2] = r, e[3] = p) : p = e[3];
  const [h, b] = j(p), {
    gridTemplateColumns: g
  } = Do(n);
  n !== f && (m(n), h && (n.find((M) => {
    var E;
    const V = (E = M.id) !== null && E !== void 0 ? E : M.field;
    return h.id === V;
  }) || b(null)));
  let v, T, S;
  if (e[4] !== n || e[5] !== o || e[6] !== l || e[7] !== d || e[8] !== a || e[9] !== h) {
    let V = function(O) {
      const B = M.find((N) => N.id === O.id);
      if (!B)
        throw new Error(`Unable to find header with id: ${O.id}`);
      if (B.column.sortBy === !1 || B.column.sortBy === void 0)
        throw new Error("The column for this header is not sortable");
      const C = B.column.sortBy === !0 ? Fn.basic : typeof B.column.sortBy == "string" ? Fn[B.column.sortBy] : B.column.sortBy;
      s((N) => N.slice().sort(($, X) => {
        if (B.column.field === void 0)
          return 0;
        if (typeof B.column.sortBy == "function")
          return O.direction === le.ASC ? C($, X) : C(X, $);
        const K = Vt($, B.column.field), W = Vt(X, B.column.field);
        return K && W ? O.direction === le.ASC ? C(K, W) : C(W, K) : K ? -1 : W ? 1 : 0;
      }));
    }, A;
    e[13] !== h ? (A = (O) => {
      var B;
      const C = (B = O.id) !== null && B !== void 0 ? B : O.field;
      if (C === void 0)
        throw new Error("Expected either an `id` or `field` to be defined for a Column");
      const N = O.sortBy !== void 0 && O.sortBy !== !1;
      return {
        id: C,
        column: O,
        isSortable() {
          return N;
        },
        getSortDirection() {
          return h && h.id === C ? h.direction : le.NONE;
        }
      };
    }, e[13] = h, e[14] = A) : A = e[14];
    const M = n.map(A);
    o !== d && (u(o), s(o), h && V(h));
    const E = function(B) {
      const C = {
        id: B.id,
        direction: h && h.id === B.id ? Vr(h.direction) : No
      };
      b(C), V(C);
    };
    v = M, T = a.map((O) => {
      const B = l(O);
      return {
        id: `${B}`,
        getValue() {
          return O;
        },
        getCells() {
          return M.map((C) => {
            var N;
            return {
              id: `${B}:${C.id}`,
              column: C.column,
              rowHeader: (N = C.column.rowHeader) !== null && N !== void 0 ? N : !1,
              getValue() {
                if (C.column.field !== void 0)
                  return Vt(O, C.column.field);
                throw new Error(`Unable to get value for column header ${C.id}`);
              }
            };
          });
        }
      };
    }), S = {
      sortBy: E
    }, e[4] = n, e[5] = o, e[6] = l, e[7] = d, e[8] = a, e[9] = h, e[10] = v, e[11] = T, e[12] = S;
  } else
    v = e[10], T = e[11], S = e[12];
  let k;
  return e[15] !== g || e[16] !== v || e[17] !== T || e[18] !== S ? (k = {
    headers: v,
    rows: T,
    actions: S,
    gridTemplateColumns: g
  }, e[15] = g, e[16] = v, e[17] = T, e[18] = S, e[19] = k) : k = e[19], k;
}
function Gr(t, e, n) {
  if (e !== void 0) {
    const i = t.find((r) => r.id === e || r.field === e);
    return i === void 0 ? (process.env.NODE_ENV !== "production" && console.warn(`Warning: Unable to find a column with id or field set to: ${e}. Please provide a value to \`initialSortColumn\` which corresponds to a \`id\` or \`field\` value in a column.`), null) : i.sortBy === !1 || i.sortBy === void 0 ? (process.env.NODE_ENV !== "production" && console.warn(`Warning: The column specified by initialSortColumn={${e}} is not sortable. Please set \`sortBy\` to true or provide a sort strategy.`), null) : {
      id: `${e}`,
      direction: n ?? No
    };
  }
  if (n !== void 0) {
    var o;
    const i = t.find((l) => l.sortBy !== !1 && l.sortBy !== void 0);
    if (!i)
      return process.env.NODE_ENV !== "production" && console.warn("Warning: An initialSortDirection value was provided but no columns are sortable. Please set `sortBy` to true or provide a sort strategy to a column."), null;
    const r = (o = i.id) !== null && o !== void 0 ? o : i.field;
    return r === void 0 ? (process.env.NODE_ENV !== "production" && console.warn(`Warning: Unable to find an \`id\` or \`field\` for the column: ${i}. Please set one of these properties on the column.`), null) : {
      id: r,
      direction: n
    };
  }
  return null;
}
function Do(t) {
  return {
    gridTemplateColumns: Kr(t).join(" ")
  };
}
function Kr(t) {
  return t.map((e) => {
    var n;
    const o = (n = e.width) !== null && n !== void 0 ? n : "grow";
    let i = "auto", r = "1fr";
    return o === "auto" && (r = "auto"), o === "grow" && !e.maxWidth && (i = "max-content"), o === "growCollapse" && (i = "0"), e.minWidth && (i = typeof e.minWidth == "number" ? `${e.minWidth}px` : e.minWidth), e.maxWidth && (r = typeof e.maxWidth == "number" ? `${e.maxWidth}px` : e.maxWidth), typeof o != "number" && ["grow", "growCollapse", "auto"].includes(o) ? i === r ? i : `minmax(${i}, ${r})` : typeof o == "number" ? `${o}px` : o;
  });
}
function Vt(t, e) {
  return e.split(".").reduce((n, o) => n[o], t);
}
var Jr = { ButtonReset: "prc-components-ButtonReset-O-bEI" };
const Ct = (t) => {
  const e = _.c(10);
  let n, o, i;
  e[0] !== t ? ({
    children: n,
    className: o,
    ...i
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i) : (n = e[1], o = e[2], i = e[3]);
  let r;
  e[4] !== o ? (r = I(o, Jr.ButtonReset), e[4] = o, e[5] = r) : r = e[5];
  let l;
  return e[6] !== n || e[7] !== i || e[8] !== r ? (l = /* @__PURE__ */ c("button", {
    className: r,
    type: "button",
    ...i,
    children: n
  }), e[6] = n, e[7] = i, e[8] = r, e[9] = l) : l = e[9], l;
};
var J = { TableContainer: "prc-DataTable-TableContainer-hn0p3", TableTitle: "prc-DataTable-TableTitle-nM43N", TableSubtitle: "prc-DataTable-TableSubtitle--L6Ho", TableActions: "prc-DataTable-TableActions-fkc2b", TableDivider: "prc-DataTable-TableDivider-TRc3b", TableOverflowWrapper: "prc-DataTable-TableOverflowWrapper-bSqT-", Table: "prc-DataTable-Table-7ux1n", TableCell: "prc-DataTable-TableCell-Fk4ve", TableHeader: "prc-DataTable-TableHeader-eyTab", TableSortButton: "prc-DataTable-TableSortButton--aq0y", TableHead: "prc-DataTable-TableHead-4FaBf", TableRow: "prc-DataTable-TableRow-Icc7F", TableBody: "prc-DataTable-TableBody-QKQy2", TableCellSkeletonItem: "prc-DataTable-TableCellSkeletonItem-bGhwZ", TableCellSkeleton: "prc-DataTable-TableCellSkeleton-DMdM5", TableSortIcon: "prc-DataTable-TableSortIcon-wHvJw", "TableSortIcon--ascending": "prc-DataTable-TableSortIcon--ascending-Lpx6z", "TableSortIcon--descending": "prc-DataTable-TableSortIcon--descending-hHJGo", TableCellSkeletonItems: "prc-DataTable-TableCellSkeletonItems-Ljhq5", PlaceholderText: "prc-DataTable-PlaceholderText-8bHo7" }, qt = { SkeletonText: "prc-SkeletonText-SkeletonText--DvUT", SkeletonTextWrapper: "prc-SkeletonText-SkeletonTextWrapper-gfaKQ" }, Xr = { SkeletonBox: "prc-Skeleton-SkeletonBox-e93nW" };
const Wn = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(19);
  let i, r, l, a, s;
  o[0] !== e ? ({
    height: r,
    width: s,
    className: i,
    style: a,
    ...l
  } = e, o[0] = e, o[1] = i, o[2] = r, o[3] = l, o[4] = a, o[5] = s) : (i = o[1], r = o[2], l = o[3], a = o[4], s = o[5]);
  const d = n;
  let u;
  o[6] !== i ? (u = I(i, Xr.SkeletonBox), o[6] = i, o[7] = u) : u = o[7];
  let f;
  o[8] !== a ? (f = a || {}, o[8] = a, o[9] = f) : f = o[9];
  let m;
  o[10] !== r || o[11] !== f || o[12] !== s ? (m = {
    height: r,
    width: s,
    ...f
  }, o[10] = r, o[11] = f, o[12] = s, o[13] = m) : m = o[13];
  let p;
  return o[14] !== l || o[15] !== d || o[16] !== u || o[17] !== m ? (p = /* @__PURE__ */ c("div", {
    ref: d,
    className: u,
    style: m,
    ...l
  }), o[14] = l, o[15] = d, o[16] = u, o[17] = m, o[18] = p) : p = o[18], p;
});
function fn(t) {
  const e = _.c(32);
  let n, o, i, r, l, a;
  e[0] !== t ? ({
    lines: l,
    maxWidth: o,
    size: a,
    className: n,
    style: r,
    ...i
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i, e[4] = r, e[5] = l, e[6] = a) : (n = e[1], o = e[2], i = e[3], r = e[4], l = e[5], a = e[6]);
  const s = l === void 0 ? 1 : l, d = a === void 0 ? "bodyMedium" : a;
  if (s < 2) {
    let p;
    e[7] !== n ? (p = I(n, qt.SkeletonText), e[7] = n, e[8] = p) : p = e[8];
    let h;
    e[9] !== o || e[10] !== r ? (h = {
      ...r,
      maxWidth: o
    }, e[9] = o, e[10] = r, e[11] = h) : h = e[11];
    let b;
    return e[12] !== i || e[13] !== d || e[14] !== p || e[15] !== h ? (b = /* @__PURE__ */ c(Wn, {
      "data-component": "SkeletonText",
      "data-text-skeleton-size": d,
      width: "100%",
      className: p,
      style: h,
      ...i
    }), e[12] = i, e[13] = d, e[14] = p, e[15] = h, e[16] = b) : b = e[16], b;
  }
  let u;
  e[17] !== o || e[18] !== r ? (u = {
    ...r,
    maxWidth: o
  }, e[17] = o, e[18] = r, e[19] = u) : u = e[19];
  let f;
  if (e[20] !== n || e[21] !== s || e[22] !== i || e[23] !== d) {
    let p;
    e[25] !== n || e[26] !== i || e[27] !== d ? (p = (h, b) => /* @__PURE__ */ c(Wn, {
      "data-component": "SkeletonText",
      "data-in-multiline": "true",
      "data-text-skeleton-size": d,
      className: I(n, qt.SkeletonText),
      ...i
    }, b), e[25] = n, e[26] = i, e[27] = d, e[28] = p) : p = e[28], f = Array.from({
      length: s
    }, p), e[20] = n, e[21] = s, e[22] = i, e[23] = d, e[24] = f;
  } else
    f = e[24];
  let m;
  return e[29] !== u || e[30] !== f ? (m = /* @__PURE__ */ c("div", {
    "data-component": "multilineContainer",
    className: qt.SkeletonTextWrapper,
    style: u,
    children: f
  }), e[29] = u, e[30] = f, e[31] = m) : m = e[31], m;
}
const pn = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(21);
  let i, r, l, a, s;
  o[0] !== e ? ({
    "aria-labelledby": l,
    cellPadding: s,
    className: i,
    gridTemplateColumns: r,
    ...a
  } = e, o[0] = e, o[1] = i, o[2] = r, o[3] = l, o[4] = a, o[5] = s) : (i = o[1], r = o[2], l = o[3], a = o[4], s = o[5]);
  const d = s === void 0 ? "normal" : s;
  let u;
  o[6] === Symbol.for("react.memo_cache_sentinel") ? (u = I("TableOverflowWrapper", J.TableOverflowWrapper), o[6] = u) : u = o[6];
  let f;
  o[7] !== i ? (f = I(i, "Table", J.Table), o[7] = i, o[8] = f) : f = o[8];
  let m;
  o[9] !== r ? (m = {
    "--grid-template-columns": r
  }, o[9] = r, o[10] = m) : m = o[10];
  const p = m;
  let h;
  o[11] !== d || o[12] !== l || o[13] !== n || o[14] !== a || o[15] !== f || o[16] !== p ? (h = /* @__PURE__ */ c("table", {
    ...a,
    "aria-labelledby": l,
    "data-cell-padding": d,
    className: f,
    role: "table",
    ref: n,
    style: p
  }), o[11] = d, o[12] = l, o[13] = n, o[14] = a, o[15] = f, o[16] = p, o[17] = h) : h = o[17];
  let b;
  return o[18] !== l || o[19] !== h ? (b = /* @__PURE__ */ c(yo, {
    "aria-labelledby": l,
    className: u,
    children: h
  }), o[18] = l, o[19] = h, o[20] = b) : b = o[20], b;
});
function hn(t) {
  const e = _.c(3), {
    children: n
  } = t;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = I("TableHead", J.TableHead), e[0] = o) : o = e[0];
  let i;
  return e[1] !== n ? (i = /* @__PURE__ */ c("thead", {
    className: o,
    role: "rowgroup",
    children: n
  }), e[1] = n, e[2] = i) : i = e[2], i;
}
function mn(t) {
  const e = _.c(3), {
    children: n
  } = t;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = I("TableBody", J.TableBody), e[0] = o) : o = e[0];
  let i;
  return e[1] !== n ? (i = /* @__PURE__ */ c("tbody", {
    className: o,
    role: "rowgroup",
    children: n
  }), e[1] = n, e[2] = i) : i = e[2], i;
}
function It(t) {
  const e = _.c(9);
  let n, o, i;
  e[0] !== t ? ({
    align: n,
    children: o,
    ...i
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i) : (n = e[1], o = e[2], i = e[3]);
  let r;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (r = I("TableHeader", J.TableHeader), e[4] = r) : r = e[4];
  let l;
  return e[5] !== n || e[6] !== o || e[7] !== i ? (l = /* @__PURE__ */ c("th", {
    ...i,
    className: r,
    role: "columnheader",
    scope: "col",
    "data-cell-align": n,
    children: o
  }), e[5] = n, e[6] = o, e[7] = i, e[8] = l) : l = e[8], l;
}
function Zr(t) {
  const e = _.c(23);
  let n, o, i, r, l;
  e[0] !== t ? ({
    align: n,
    children: o,
    direction: i,
    onToggleSort: r,
    ...l
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i, e[4] = r, e[5] = l) : (n = e[1], o = e[2], i = e[3], r = e[4], l = e[5]);
  const a = i === "DESC" ? "descending" : i === "ASC" ? "ascending" : void 0;
  let s;
  e[6] === Symbol.for("react.memo_cache_sentinel") ? (s = I("TableSortButton", J.TableSortButton), e[6] = s) : s = e[6];
  let d;
  e[7] !== r ? (d = () => {
    r();
  }, e[7] = r, e[8] = d) : d = e[8];
  let u;
  e[9] !== i ? (u = i === le.NONE || i === le.ASC ? /* @__PURE__ */ w(pe, {
    children: [/* @__PURE__ */ c(Qo, {
      className: I("TableSortIcon", "TableSortIcon--ascending", J.TableSortIcon, J["TableSortIcon--ascending"])
    }), i === le.NONE ? /* @__PURE__ */ c(nt, {
      children: "sort ascending"
    }) : null]
  }) : null, e[9] = i, e[10] = u) : u = e[10];
  let f;
  e[11] !== i ? (f = i === le.DESC ? /* @__PURE__ */ c(Yo, {
    className: I("TableSortIcon", "TableSortIcon--descending", J.TableSortIcon, J["TableSortIcon--descending"])
  }) : null, e[11] = i, e[12] = f) : f = e[12];
  let m;
  e[13] !== o || e[14] !== d || e[15] !== u || e[16] !== f ? (m = /* @__PURE__ */ w(Ct, {
    type: "button",
    className: s,
    onClick: d,
    children: [o, u, f]
  }), e[13] = o, e[14] = d, e[15] = u, e[16] = f, e[17] = m) : m = e[17];
  let p;
  return e[18] !== n || e[19] !== a || e[20] !== l || e[21] !== m ? (p = /* @__PURE__ */ c(It, {
    ...l,
    "aria-sort": a,
    align: n,
    children: m
  }), e[18] = n, e[19] = a, e[20] = l, e[21] = m, e[22] = p) : p = e[22], p;
}
function et(t) {
  const e = _.c(7);
  let n, o;
  e[0] !== t ? ({
    children: n,
    ...o
  } = t, e[0] = t, e[1] = n, e[2] = o) : (n = e[1], o = e[2]);
  let i;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (i = I("TableRow", J.TableRow), e[3] = i) : i = e[3];
  let r;
  return e[4] !== n || e[5] !== o ? (r = /* @__PURE__ */ c("tr", {
    ...o,
    className: i,
    role: "row",
    children: n
  }), e[4] = n, e[5] = o, e[6] = r) : r = e[6], r;
}
function bn(t) {
  const e = _.c(16);
  let n, o, i, r, l;
  e[0] !== t ? ({
    align: n,
    className: i,
    children: o,
    scope: l,
    ...r
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i, e[4] = r, e[5] = l) : (n = e[1], o = e[2], i = e[3], r = e[4], l = e[5]);
  const a = l ? "th" : "td", s = l ? "rowheader" : "cell";
  let d;
  e[6] !== i ? (d = I("TableCell", i, J.TableCell), e[6] = i, e[7] = d) : d = e[7];
  let u;
  return e[8] !== a || e[9] !== n || e[10] !== o || e[11] !== r || e[12] !== s || e[13] !== l || e[14] !== d ? (u = /* @__PURE__ */ c(a, {
    ...r,
    className: d,
    scope: l,
    role: s,
    "data-cell-align": n,
    children: o
  }), e[8] = a, e[9] = n, e[10] = o, e[11] = r, e[12] = s, e[13] = l, e[14] = d, e[15] = u) : u = e[15], u;
}
function Qr(t) {
  const e = _.c(2), {
    children: n
  } = t;
  let o;
  return e[0] !== n ? (o = /* @__PURE__ */ c(on, {
    className: J.PlaceholderText,
    children: n
  }), e[0] = n, e[1] = o) : o = e[1], o;
}
function Yr(t) {
  const e = _.c(12);
  let n, o, i, r;
  e[0] !== t ? ({
    children: o,
    className: i,
    as: n,
    ...r
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i, e[4] = r) : (n = e[1], o = e[2], i = e[3], r = e[4]);
  const l = n || "div";
  let a;
  e[5] !== i ? (a = I(i, J.TableContainer), e[5] = i, e[6] = a) : a = e[6];
  let s;
  return e[7] !== l || e[8] !== o || e[9] !== r || e[10] !== a ? (s = /* @__PURE__ */ c(l, {
    ...r,
    className: a,
    children: o
  }), e[7] = l, e[8] = o, e[9] = r, e[10] = a, e[11] = s) : s = e[11], s;
}
const el = /* @__PURE__ */ R.forwardRef(function(e, n) {
  const o = _.c(6), {
    as: i,
    children: r,
    id: l
  } = e, s = i === void 0 ? "h2" : i;
  let d;
  o[0] === Symbol.for("react.memo_cache_sentinel") ? (d = I("TableTitle", J.TableTitle), o[0] = d) : d = o[0];
  let u;
  return o[1] !== s || o[2] !== r || o[3] !== l || o[4] !== n ? (u = /* @__PURE__ */ c(s, {
    className: d,
    id: l,
    ref: n,
    children: r
  }), o[1] = s, o[2] = r, o[3] = l, o[4] = n, o[5] = u) : u = o[5], u;
});
function tl(t) {
  const e = _.c(5), {
    as: n,
    children: o,
    id: i
  } = t, r = n === void 0 ? "div" : n;
  let l;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = I("TableSubtitle", J.TableSubtitle), e[0] = l) : l = e[0];
  let a;
  return e[1] !== r || e[2] !== o || e[3] !== i ? (a = /* @__PURE__ */ c(r, {
    className: l,
    id: i,
    children: o
  }), e[1] = r, e[2] = o, e[3] = i, e[4] = a) : a = e[4], a;
}
function nl() {
  const t = _.c(1);
  let e;
  return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = /* @__PURE__ */ c("div", {
    className: I("TableDivider", J.TableDivider),
    role: "presentation"
  }), t[0] = e) : e = t[0], e;
}
function ol(t) {
  const e = _.c(3), {
    children: n
  } = t;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = I("TableActions", J.TableActions), e[0] = o) : o = e[0];
  let i;
  return e[1] !== n ? (i = /* @__PURE__ */ c("div", {
    className: o,
    children: n
  }), e[1] = n, e[2] = i) : i = e[2], i;
}
function il(t) {
  const e = _.c(20);
  let n, o, i, r;
  e[0] !== t ? ({
    cellPadding: n,
    columns: o,
    rows: r,
    ...i
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i, e[4] = r) : (n = e[1], o = e[2], i = e[3], r = e[4]);
  const l = r === void 0 ? 10 : r, {
    gridTemplateColumns: a
  } = Do(o);
  let s;
  e[5] !== o ? (s = Array.isArray(o) ? o.map(Lo) : null, e[5] = o, e[6] = s) : s = e[6];
  let d;
  e[7] !== s ? (d = /* @__PURE__ */ c(hn, {
    children: /* @__PURE__ */ c(et, {
      children: s
    })
  }), e[7] = s, e[8] = d) : d = e[8];
  let u;
  e[9] !== o.length ? (u = Array.from({
    length: o.length
  }), e[9] = o.length, e[10] = u) : u = e[10];
  let f;
  e[11] !== l || e[12] !== u ? (f = /* @__PURE__ */ c(mn, {
    children: /* @__PURE__ */ c(et, {
      children: u.map((p, h) => /* @__PURE__ */ w(bn, {
        className: I("TableCellSkeleton", J.TableCellSkeleton),
        children: [/* @__PURE__ */ c(nt, {
          children: "Loading"
        }), /* @__PURE__ */ c("div", {
          className: I("TableCellSkeletonItems", J.TableCellSkeletonItems),
          children: Array.from({
            length: l
          }).map(Po)
        })]
      }, h))
    })
  }), e[11] = l, e[12] = u, e[13] = f) : f = e[13];
  let m;
  return e[14] !== n || e[15] !== a || e[16] !== i || e[17] !== d || e[18] !== f ? (m = /* @__PURE__ */ w(pn, {
    ...i,
    cellPadding: n,
    gridTemplateColumns: a,
    children: [d, f]
  }), e[14] = n, e[15] = a, e[16] = i, e[17] = d, e[18] = f, e[19] = m) : m = e[19], m;
}
function Po(t, e) {
  return /* @__PURE__ */ c("div", {
    className: I("TableCellSkeletonItem", J.TableCellSkeletonItem),
    children: /* @__PURE__ */ c(fn, {})
  }, e);
}
Po.displayName = "_temp2";
function Lo(t, e) {
  return /* @__PURE__ */ c(It, {
    children: typeof t.header == "string" ? t.header : t.header()
  }, e);
}
Lo.displayName = "_temp";
const rl = {
  narrow: "(max-width: calc(768px - 0.02px))",
  // < 768px
  regular: "(min-width: 768px)",
  // >= 768px
  wide: "(min-width: 1400px)"
  // >= 1400px
};
function ll(t, e, n, o, i) {
  const r = {
    type: "PREV",
    num: e - 1,
    disabled: e === 1
  }, l = {
    type: "NEXT",
    num: e + 1,
    disabled: e === t
  };
  if (!n)
    return [r, l];
  if (t <= 0)
    return [r, {
      ...l,
      disabled: !0
    }];
  const a = [], s = i + o, d = s + s + 3;
  if (t <= d)
    return v(1, t, !1), [r, ...a, l];
  let u = 0, f = 0;
  e - s - 1 <= 1 ? f = e - s - 2 : u = e - s - 1;
  let m = 0, p = 0;
  t - e - s <= 1 ? p = t - e - s - 1 : m = t - e - s;
  const h = u > 0, b = m > 0;
  return v(1, o, h), h && g(o), v(o + u + p + 1, t - f - m - o, b), b && g(t - f - m - o), v(t - o + 1, t), [r, ...a, l];
  function g(T) {
    a.push({
      type: "BREAK",
      num: T + 1
    });
  }
  function v(T, S, k = !1) {
    for (let A = T; A <= S; A++)
      a.push({
        type: "NUM",
        num: A,
        selected: A === e,
        precedesBreak: A === S && k
      });
  }
}
var fe = { TablePagination: "prc-DataTable-TablePagination-AJ0K7", TablePaginationSteps: "prc-DataTable-TablePaginationSteps-Vxbth", TablePaginationRange: "prc-DataTable-TablePaginationRange-R7KK2", TablePaginationStep: "prc-DataTable-TablePaginationStep-jdto6", TablePaginationAction: "prc-DataTable-TablePaginationAction-SPa7Q", TablePaginationPage: "prc-DataTable-TablePaginationPage-Fn3s-", TablePaginationTruncationStep: "prc-DataTable-TablePaginationTruncationStep-gRyLp" };
const al = {
  narrow: !1
};
function sl(t) {
  const e = _.c(60), {
    "aria-label": n,
    defaultPageIndex: o,
    id: i,
    onChange: r,
    pageSize: l,
    showPages: a,
    totalCount: s
  } = t, d = l === void 0 ? 25 : l, u = a === void 0 ? al : a;
  let f;
  e[0] !== o || e[1] !== r || e[2] !== d || e[3] !== s ? (f = {
    defaultPageIndex: o,
    onChange: r,
    pageSize: d,
    totalCount: s
  }, e[0] = o, e[1] = r, e[2] = d, e[3] = s, e[4] = f) : f = e[4];
  const {
    pageIndex: m,
    pageStart: p,
    pageEnd: h,
    pageCount: b,
    hasPreviousPage: g,
    hasNextPage: v,
    selectPage: T,
    selectNextPage: S,
    selectPreviousPage: k
  } = fl(f);
  let A;
  e[5] !== u ? (A = () => typeof u != "boolean" ? Object.keys(u).filter((_e) => !u[_e]) : u ? [] : Object.keys(rl), e[5] = u, e[6] = A) : A = e[6];
  const M = A, E = m + 1, V = !!u;
  let O;
  e[7] !== b || e[8] !== E || e[9] !== V ? (O = ll(b, E, V, 1, 2), e[7] = b, e[8] = E, e[9] = V, e[10] = O) : O = e[10];
  const B = O;
  let C;
  e[11] === Symbol.for("react.memo_cache_sentinel") ? (C = I("TablePagination", fe.TablePagination), e[11] = C) : C = e[11];
  let N;
  e[12] !== h || e[13] !== p || e[14] !== s ? (N = /* @__PURE__ */ c(cl, {
    pageStart: p,
    pageEnd: h,
    totalCount: s
  }), e[12] = h, e[13] = p, e[14] = s, e[15] = N) : N = e[15];
  let $;
  e[16] === Symbol.for("react.memo_cache_sentinel") ? ($ = I("TablePaginationSteps", fe.TablePaginationSteps), e[16] = $) : $ = e[16];
  let X;
  e[17] !== M ? (X = M(), e[17] = M, e[18] = X) : X = e[18];
  const K = X.join(" ");
  let W;
  e[19] === Symbol.for("react.memo_cache_sentinel") ? (W = I("TablePaginationAction", fe.TablePaginationAction), e[19] = W) : W = e[19];
  const Z = g ? !0 : void 0, z = g ? void 0 : !0;
  let ee;
  e[20] !== g || e[21] !== k ? (ee = () => {
    g && k();
  }, e[20] = g, e[21] = k, e[22] = ee) : ee = e[22];
  let ce;
  e[23] !== g ? (ce = g ? /* @__PURE__ */ c(ei, {}) : null, e[23] = g, e[24] = ce) : ce = e[24];
  let y, x;
  e[25] === Symbol.for("react.memo_cache_sentinel") ? (y = /* @__PURE__ */ c("span", {
    children: "Previous"
  }), x = /* @__PURE__ */ c(Oe, {
    children: " page"
  }), e[25] = y, e[26] = x) : (y = e[25], x = e[26]);
  let D;
  e[27] !== Z || e[28] !== z || e[29] !== ee || e[30] !== ce ? (D = /* @__PURE__ */ c(jt, {
    children: /* @__PURE__ */ w(Ct, {
      className: W,
      type: "button",
      "data-has-page": Z,
      "aria-disabled": z,
      onClick: ee,
      children: [ce, y, x]
    })
  }), e[27] = Z, e[28] = z, e[29] = ee, e[30] = ce, e[31] = D) : D = e[31];
  let U;
  if (e[32] !== B || e[33] !== T) {
    let _e;
    e[35] !== T ? (_e = (Ne, yn) => {
      if (Ne.type === "BREAK")
        return /* @__PURE__ */ c(dl, {}, `truncation-${yn}`);
      if (Ne.type === "NUM")
        return /* @__PURE__ */ c(jt, {
          children: /* @__PURE__ */ w(ul, {
            active: !!Ne.selected,
            onClick: () => {
              T(Ne.num - 1);
            },
            children: [Ne.num, Ne.precedesBreak ? /* @__PURE__ */ c(Oe, {
              children: "…"
            }) : null]
          })
        }, yn);
    }, e[35] = T, e[36] = _e) : _e = e[36], U = B.map(_e), e[32] = B, e[33] = T, e[34] = U;
  } else
    U = e[34];
  let G;
  e[37] === Symbol.for("react.memo_cache_sentinel") ? (G = I("TablePaginationAction", fe.TablePaginationAction), e[37] = G) : G = e[37];
  const de = v ? !0 : void 0, Q = v ? void 0 : !0;
  let Ee;
  e[38] !== v || e[39] !== S ? (Ee = () => {
    v && S();
  }, e[38] = v, e[39] = S, e[40] = Ee) : Ee = e[40];
  let it, rt;
  e[41] === Symbol.for("react.memo_cache_sentinel") ? (it = /* @__PURE__ */ c("span", {
    children: "Next"
  }), rt = /* @__PURE__ */ c(Oe, {
    children: " page"
  }), e[41] = it, e[42] = rt) : (it = e[41], rt = e[42]);
  let xe;
  e[43] !== v ? (xe = v ? /* @__PURE__ */ c(ti, {}) : null, e[43] = v, e[44] = xe) : xe = e[44];
  let Ae;
  e[45] !== de || e[46] !== Q || e[47] !== Ee || e[48] !== xe ? (Ae = /* @__PURE__ */ c(jt, {
    children: /* @__PURE__ */ w(Ct, {
      className: G,
      type: "button",
      "data-has-page": de,
      "aria-disabled": Q,
      onClick: Ee,
      children: [it, rt, xe]
    })
  }), e[45] = de, e[46] = Q, e[47] = Ee, e[48] = xe, e[49] = Ae) : Ae = e[49];
  let Ie;
  e[50] !== K || e[51] !== D || e[52] !== U || e[53] !== Ae ? (Ie = /* @__PURE__ */ w("ol", {
    className: $,
    "data-hidden-viewport-ranges": K,
    children: [D, U, Ae]
  }), e[50] = K, e[51] = D, e[52] = U, e[53] = Ae, e[54] = Ie) : Ie = e[54];
  let lt;
  return e[55] !== i || e[56] !== n || e[57] !== Ie || e[58] !== N ? (lt = /* @__PURE__ */ w("nav", {
    "aria-label": n,
    className: C,
    id: i,
    children: [N, Ie]
  }), e[55] = i, e[56] = n, e[57] = Ie, e[58] = N, e[59] = lt) : lt = e[59], lt;
}
function cl(t) {
  const e = _.c(14), {
    pageStart: n,
    pageEnd: o,
    totalCount: i
  } = t, r = n + 1, l = o;
  let a;
  e[0] !== l || e[1] !== r || e[2] !== i ? (a = /* @__PURE__ */ c(Oe, {
    children: /* @__PURE__ */ w(ni, {
      children: ["Showing ", r, " through ", l, " of ", i]
    })
  }), e[0] = l, e[1] = r, e[2] = i, e[3] = a) : a = e[3];
  let s;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (s = I("TablePaginationRange", fe.TablePaginationRange), e[4] = s) : s = e[4];
  let d, u;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ c(Oe, {
    children: " through "
  }), u = /* @__PURE__ */ c("span", {
    "aria-hidden": "true",
    children: "‒"
  }), e[5] = d, e[6] = u) : (d = e[5], u = e[6]);
  let f;
  e[7] !== l || e[8] !== r || e[9] !== i ? (f = /* @__PURE__ */ w("p", {
    className: s,
    children: [r, d, u, l, " of ", i]
  }), e[7] = l, e[8] = r, e[9] = i, e[10] = f) : f = e[10];
  let m;
  return e[11] !== a || e[12] !== f ? (m = /* @__PURE__ */ w(pe, {
    children: [a, f]
  }), e[11] = a, e[12] = f, e[13] = m) : m = e[13], m;
}
function dl() {
  const t = _.c(1);
  let e;
  return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = /* @__PURE__ */ c("li", {
    "aria-hidden": "true",
    className: I("TablePaginationTruncationStep", fe.TablePaginationTruncationStep),
    children: "…"
  }), t[0] = e) : e = t[0], e;
}
function jt(t) {
  const e = _.c(3), {
    children: n
  } = t;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = I("TablePaginationStep", fe.TablePaginationStep), e[0] = o) : o = e[0];
  let i;
  return e[1] !== n ? (i = /* @__PURE__ */ c("li", {
    className: o,
    children: n
  }), e[1] = n, e[2] = i) : i = e[2], i;
}
function ul(t) {
  const e = _.c(7), {
    active: n,
    children: o,
    onClick: i
  } = t;
  let r;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = I("TablePaginationPage", fe.TablePaginationPage), e[0] = r) : r = e[0];
  const l = n ? !0 : void 0, a = n ? !0 : void 0;
  let s;
  e[1] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ c(Oe, {
    children: "Page "
  }), e[1] = s) : s = e[1];
  let d;
  return e[2] !== o || e[3] !== i || e[4] !== l || e[5] !== a ? (d = /* @__PURE__ */ w(Ct, {
    className: r,
    type: "button",
    "data-active": l,
    "aria-current": a,
    onClick: i,
    children: [s, o]
  }), e[2] = o, e[3] = i, e[4] = l, e[5] = a, e[6] = d) : d = e[6], d;
}
function fl(t) {
  const e = _.c(24), {
    defaultPageIndex: n,
    onChange: o,
    pageSize: i,
    totalCount: r
  } = t, l = Math.ceil(r / i);
  let a;
  e[0] !== n || e[1] !== l ? (a = () => {
    if (n !== void 0) {
      if (n >= 0 && n < l)
        return n;
      process.env.NODE_ENV !== "production" && tn(!0, "<Pagination> expected `defaultPageIndex` to be less than the total number of pages. Instead, received a `defaultPageIndex` of %s with %s total pages.", n, l);
    }
    return 0;
  }, e[0] = n, e[1] = l, e[2] = a) : a = e[2];
  const [s, d] = j(a), [u, f] = j(s);
  n !== void 0 && n >= 0 && n < l && s !== n && (d(n), f(n), o?.({
    pageIndex: n
  }));
  const p = u * i, h = Math.min((u + 1) * i, r), b = u + 1 < l, g = u > 0;
  let v;
  e[3] !== o || e[4] !== u ? (v = function(O) {
    u !== O && (f(O), o?.({
      pageIndex: O
    }));
  }, e[3] = o, e[4] = u, e[5] = v) : v = e[5];
  const T = v;
  let S;
  e[6] !== g || e[7] !== u || e[8] !== T ? (S = function() {
    g && T(u - 1);
  }, e[6] = g, e[7] = u, e[8] = T, e[9] = S) : S = e[9];
  const k = S;
  let A;
  e[10] !== b || e[11] !== u || e[12] !== T ? (A = function() {
    b && T(u + 1);
  }, e[10] = b, e[11] = u, e[12] = T, e[13] = A) : A = e[13];
  const M = A;
  let E;
  return e[14] !== b || e[15] !== g || e[16] !== l || e[17] !== h || e[18] !== u || e[19] !== p || e[20] !== M || e[21] !== T || e[22] !== k ? (E = {
    pageIndex: u,
    pageStart: p,
    pageEnd: h,
    pageCount: l,
    hasNextPage: b,
    hasPreviousPage: g,
    selectPage: T,
    selectPreviousPage: k,
    selectNextPage: M
  }, e[14] = b, e[15] = g, e[16] = l, e[17] = h, e[18] = u, e[19] = p, e[20] = M, e[21] = T, e[22] = k, e[23] = E) : E = e[23], E;
}
const St = Object.assign(pn, {
  Container: Yr,
  Title: el,
  Subtitle: tl,
  Actions: ol,
  Divider: nl,
  Skeleton: il,
  Head: hn,
  Body: mn,
  Header: It,
  Row: et,
  Cell: bn,
  CellPlaceholder: Qr,
  Pagination: sl,
  ErrorDialog: Wr
});
function pl(t, e, n = []) {
  const [o, i] = j(null), r = ie(t);
  wt(() => {
    r.current = t;
  }), wt(() => {
    const l = e && "current" in e ? e.current : document.documentElement;
    if (l)
      if (typeof ResizeObserver == "function") {
        const a = new ResizeObserver((s) => {
          r.current(s);
        });
        return a.observe(l), () => {
          a.disconnect();
        };
      } else {
        const a = () => {
          const s = l.getBoundingClientRect();
          (s.width !== o?.width || s.height !== o.height) && r.current([{
            contentRect: s
          }]), i(s);
        };
        return window.addEventListener("resize", a), () => {
          window.removeEventListener("resize", a);
        };
      }
  }, [e?.current, ...n]);
}
function hl(t) {
  return t.id;
}
function Ro(t) {
  const e = _.c(26), {
    "aria-labelledby": n,
    "aria-describedby": o,
    cellPadding: i,
    columns: r,
    data: l,
    initialSortColumn: a,
    initialSortDirection: s,
    getRowId: d,
    onToggleSort: u
  } = t, f = d === void 0 ? hl : d;
  let m;
  e[0] !== r || e[1] !== l || e[2] !== f || e[3] !== a || e[4] !== s ? (m = {
    data: l,
    columns: r,
    initialSortColumn: a,
    initialSortDirection: s,
    getRowId: f
  }, e[0] = r, e[1] = l, e[2] = f, e[3] = a, e[4] = s, e[5] = m) : m = e[5];
  const {
    headers: p,
    rows: h,
    actions: b,
    gridTemplateColumns: g
  } = Ur(m);
  let v;
  if (e[6] !== b || e[7] !== p || e[8] !== u) {
    let M;
    e[10] !== b || e[11] !== u ? (M = (E) => E.isSortable() ? /* @__PURE__ */ c(Zr, {
      align: E.column.align,
      direction: E.getSortDirection(),
      onToggleSort: () => {
        const V = E.getSortDirection() === "ASC" ? "DESC" : "ASC";
        b.sortBy(E), u?.(E.id, V);
      },
      children: typeof E.column.header == "string" ? E.column.header : E.column.header()
    }, E.id) : /* @__PURE__ */ c(It, {
      align: E.column.align,
      children: typeof E.column.header == "string" ? E.column.header : E.column.header()
    }, E.id), e[10] = b, e[11] = u, e[12] = M) : M = e[12], v = p.map(M), e[6] = b, e[7] = p, e[8] = u, e[9] = v;
  } else
    v = e[9];
  let T;
  e[13] !== v ? (T = /* @__PURE__ */ c(hn, {
    children: /* @__PURE__ */ c(et, {
      children: v
    })
  }), e[13] = v, e[14] = T) : T = e[14];
  let S;
  e[15] !== h ? (S = h.map(ko), e[15] = h, e[16] = S) : S = e[16];
  let k;
  e[17] !== S ? (k = /* @__PURE__ */ c(mn, {
    children: S
  }), e[17] = S, e[18] = k) : k = e[18];
  let A;
  return e[19] !== i || e[20] !== o || e[21] !== g || e[22] !== n || e[23] !== T || e[24] !== k ? (A = /* @__PURE__ */ w(pn, {
    "aria-labelledby": n,
    "aria-describedby": o,
    cellPadding: i,
    gridTemplateColumns: g,
    children: [T, k]
  }), e[19] = i, e[20] = o, e[21] = g, e[22] = n, e[23] = T, e[24] = k, e[25] = A) : A = e[25], A;
}
function ko(t) {
  return /* @__PURE__ */ c(et, {
    children: t.getCells().map((e) => /* @__PURE__ */ c(bn, {
      scope: e.rowHeader ? "row" : void 0,
      align: e.column.align,
      children: e.column.renderCell ? e.column.renderCell(t.getValue()) : e.getValue()
    }, e.id))
  }, t.id);
}
ko.displayName = "_temp";
var ve = function(t, e, n, o, i) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return o === "a" ? i.call(t, n) : i ? i.value = n : e.set(t, n), n;
}, P = function(t, e, n, o) {
  if (n === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(t) : o ? o.value : e.get(t);
}, ml = function(t, e) {
  var n = {};
  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(t); i < o.length; i++)
      e.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[i]) && (n[o[i]] = t[o[i]]);
  return n;
}, zt, ht, Ge, mt, F, Re, ke, Be, Ho, Ke, Mo, Bo, Oo, bt, Xt, $e, ue, ge, $o, Fo, Zt;
const Wo = globalThis.HTMLElement || null, be = "assign" in (((zt = globalThis.HTMLSlotElement) === null || zt === void 0 ? void 0 : zt.prototype) || {}) ? (t, ...e) => {
  t.assign(...e);
} : (t, ...e) => {
  const n = t.getRootNode().host;
  for (const o of n.querySelectorAll(`[slot="${t.name}"]`))
    o.removeAttribute("slot");
  for (const o of e)
    o.setAttribute("slot", t.name);
};
class Vn extends Event {
  constructor(e, n) {
    var { tabIndex: o, tab: i, panel: r } = n, l = ml(n, ["tabIndex", "tab", "panel"]);
    super(e, l), ht.set(this, null), Ge.set(this, null), mt.set(this, null), ve(this, mt, i || null, "f"), ve(this, ht, o || null, "f"), ve(this, Ge, r || null, "f");
  }
  get detail() {
    return console.warn("TabContainerElement.detail is deprecated, please use .panel instead"), { relatedTarget: P(this, Ge, "f") };
  }
  get tabIndex() {
    return P(this, ht, "f");
  }
  get panel() {
    return P(this, Ge, "f");
  }
  get tab() {
    return P(this, mt, "f");
  }
}
ht = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap();
class gn extends Wo {
  constructor() {
    super(...arguments), F.add(this), Re.set(this, null), ke.set(this, null), ue.set(this, !1), ge.set(this, void 0);
  }
  static define(e = "tab-container", n = customElements) {
    return n.define(e, this), this;
  }
  get onChange() {
    return this.onTabContainerChange;
  }
  set onChange(e) {
    this.onTabContainerChange = e;
  }
  get onTabContainerChange() {
    return P(this, Re, "f");
  }
  set onTabContainerChange(e) {
    P(this, Re, "f") && this.removeEventListener("tab-container-change", P(this, Re, "f")), ve(this, Re, typeof e == "object" || typeof e == "function" ? e : null, "f"), typeof e == "function" && this.addEventListener("tab-container-change", e);
  }
  get onTabContainerChanged() {
    return P(this, ke, "f");
  }
  set onTabContainerChanged(e) {
    P(this, ke, "f") && this.removeEventListener("tab-container-changed", P(this, ke, "f")), ve(this, ke, typeof e == "object" || typeof e == "function" ? e : null, "f"), typeof e == "function" && this.addEventListener("tab-container-changed", e);
  }
  get onChanged() {
    return this.onTabContainerChanged;
  }
  set onChanged(e) {
    this.onTabContainerChanged = e;
  }
  get activeTab() {
    return P(this, F, "a", $e)[this.selectedTabIndex];
  }
  get activePanel() {
    return P(this, F, "a", Xt).assignedNodes()[0];
  }
  get vertical() {
    var e;
    return ((e = P(this, F, "a", Be)) === null || e === void 0 ? void 0 : e.getAttribute("aria-orientation")) === "vertical";
  }
  set vertical(e) {
    const n = P(this, F, "a", Be);
    n && e ? n.setAttribute("aria-orientation", "vertical") : n.setAttribute("aria-orientation", "horizontal");
  }
  connectedCallback() {
    ve(this, ge, P(this, ge, "f") || (this.attachInternals ? this.attachInternals() : null), "f");
    const e = this.shadowRoot || this.attachShadow({ mode: "open", slotAssignment: "manual" }), n = document.createElement("slot");
    n.style.display = "flex", n.setAttribute("part", "tablist-wrapper"), n.setAttribute("name", "tablist-wrapper");
    const o = document.createElement("div");
    o.setAttribute("part", "tablist-tab-wrapper"), o.setAttribute("name", "tablist-tab-wrapper");
    const i = document.createElement("slot");
    i.setAttribute("part", "tablist"), i.setAttribute("name", "tablist"), o.append(i);
    const r = document.createElement("slot");
    r.setAttribute("part", "panel"), r.setAttribute("name", "panel");
    const l = document.createElement("slot");
    l.setAttribute("part", "before-tabs"), l.setAttribute("name", "before-tabs");
    const a = document.createElement("slot");
    a.setAttribute("part", "after-tabs"), a.setAttribute("name", "after-tabs"), n.append(l, o, a);
    const s = document.createElement("slot");
    if (s.setAttribute("part", "after-panels"), s.setAttribute("name", "after-panels"), e.replaceChildren(n, r, s), P(this, ge, "f") && "role" in P(this, ge, "f") ? P(this, ge, "f").role = "presentation" : this.setAttribute("role", "presentation"), this.addEventListener("keydown", this), this.addEventListener("click", this), this.selectTab(-1), !P(this, ue, "f")) {
      const d = new MutationObserver(() => {
        this.selectTab(-1), P(this, ue, "f") && d.disconnect();
      });
      d.observe(this, { childList: !0, subtree: !0 });
    }
  }
  attributeChangedCallback(e) {
    !this.isConnected || !this.shadowRoot || e === "vertical" && (this.vertical = this.hasAttribute("vertical"));
  }
  handleEvent(e) {
    if (e.type === "click")
      return P(this, F, "m", Fo).call(this, e);
    if (e.type === "keydown")
      return P(this, F, "m", $o).call(this, e);
  }
  get selectedTabIndex() {
    return P(this, F, "a", $e).findIndex((e) => e.matches("[aria-selected=true]"));
  }
  set selectedTabIndex(e) {
    this.selectTab(e);
  }
  get defaultTabIndex() {
    return Number(this.getAttribute("default-tab") || -1);
  }
  set defaultTabIndex(e) {
    this.setAttribute("default-tab", String(e));
  }
  selectTab(e) {
    var n;
    if (!P(this, ue, "f")) {
      const a = P(this, F, "a", bt), s = P(this, F, "a", Ho), d = this.querySelector("[role=tablist]"), u = this.querySelector("[slot=tablist-wrapper]");
      u && u.closest(this.tagName) === this ? be(s, u) : d && d.closest(this.tagName) === this ? be(a, d) : (P(this, F, "a", Ke).role = "tablist", be(a, ...[...this.children].filter((b) => b.matches("[role=tab]"))));
      const f = P(this, F, "a", Be);
      if (P(this, F, "m", Zt).call(this, "aria-description", f), P(this, F, "m", Zt).call(this, "aria-label", f), this.vertical && P(this, F, "a", Be).setAttribute("aria-orientation", "vertical"), !(((n = this.querySelector("[slot=tablist-wrapper]")) === null || n === void 0 ? void 0 : n.closest(this.tagName)) === this)) {
        const b = [], g = [], v = [];
        let T = b;
        for (const S of this.children) {
          if (S.getAttribute("role") === "tab" || S.getAttribute("role") === "tablist") {
            T = g;
            continue;
          }
          if (S.getAttribute("role") === "tabpanel") {
            T = v;
            continue;
          }
          S.getAttribute("slot") === "before-tabs" ? b.push(S) : S.getAttribute("slot") === "after-tabs" ? g.push(S) : T.push(S);
        }
        be(P(this, F, "a", Mo), ...b), be(P(this, F, "a", Bo), ...g), be(P(this, F, "a", Oo), ...v);
      }
      const p = this.defaultTabIndex, h = p >= 0 ? p : this.selectedTabIndex;
      e = e >= 0 ? e : Math.max(0, h);
    }
    const o = P(this, F, "a", $e), i = Array.from(this.querySelectorAll('[role="tabpanel"]')).filter((a) => a.closest(this.tagName) === this);
    if (e > o.length - 1)
      return;
    const r = o[e], l = i[e];
    if (r && l && !(P(this, ue, "f") && !this.dispatchEvent(new Vn("tab-container-change", {
      tabIndex: e,
      bubbles: !0,
      cancelable: !0,
      tab: r,
      panel: l
    })))) {
      for (const a of o)
        a.setAttribute("aria-selected", "false"), a.setAttribute("tabindex", "-1");
      for (const a of i)
        !a.hasAttribute("tabindex") && !a.hasAttribute("data-tab-container-no-tabstop") && a.setAttribute("tabindex", "0");
      r.setAttribute("aria-selected", "true"), r.setAttribute("tabindex", "0"), be(P(this, F, "a", Xt), l), l.hidden = !1, P(this, ue, "f") && (r.focus(), this.dispatchEvent(new Vn("tab-container-changed", {
        tabIndex: e,
        bubbles: !0,
        tab: r,
        panel: l
      }))), ve(this, ue, !0, "f");
    }
  }
}
Re = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), Be = function() {
  const e = this.querySelector("[slot=tablist-wrapper]");
  if (e?.closest(this.tagName) === this)
    return e.querySelector("[role=tablist]");
  const n = P(this, F, "a", bt);
  return P(this, F, "a", Ke).hasAttribute("role") ? P(this, F, "a", Ke) : n.assignedNodes()[0];
}, Ho = function() {
  return this.shadowRoot.querySelector('slot[part="tablist-wrapper"]');
}, Ke = function() {
  return this.shadowRoot.querySelector('div[part="tablist-tab-wrapper"]');
}, Mo = function() {
  return this.shadowRoot.querySelector('slot[part="before-tabs"]');
}, Bo = function() {
  return this.shadowRoot.querySelector('slot[part="after-tabs"]');
}, Oo = function() {
  return this.shadowRoot.querySelector('slot[part="after-panels"]');
}, bt = function() {
  return this.shadowRoot.querySelector('slot[part="tablist"]');
}, Xt = function() {
  return this.shadowRoot.querySelector('slot[part="panel"]');
}, $e = function() {
  var e;
  return P(this, F, "a", Ke).matches("[role=tablist]") ? P(this, F, "a", bt).assignedNodes() : Array.from(((e = P(this, F, "a", Be)) === null || e === void 0 ? void 0 : e.querySelectorAll('[role="tab"]')) || []).filter((n) => n instanceof Wo && n.closest(this.tagName) === this);
}, $o = function(e) {
  var n, o, i;
  const r = (o = (n = e.target) === null || n === void 0 ? void 0 : n.closest) === null || o === void 0 ? void 0 : o.call(n, '[role="tab"]');
  if (!r)
    return;
  const l = P(this, F, "a", $e);
  if (!l.includes(r))
    return;
  const a = this.selectedTabIndex, s = ((i = r.closest('[role="tablist"]')) === null || i === void 0 ? void 0 : i.getAttribute("aria-orientation")) === "vertical", d = e.code === "ArrowLeft" || s && e.code === "ArrowUp";
  if (e.code === "ArrowRight" || s && e.code === "ArrowDown") {
    let f = a + 1;
    f >= l.length && (f = 0), this.selectTab(f);
  } else if (d) {
    let f = a - 1;
    f < 0 && (f = l.length - 1), this.selectTab(f);
  } else e.code === "Home" ? (this.selectTab(0), e.preventDefault()) : e.code === "End" && (this.selectTab(l.length - 1), e.preventDefault());
}, Fo = function(e) {
  var n, o;
  const i = (o = (n = e.target) === null || n === void 0 ? void 0 : n.closest) === null || o === void 0 ? void 0 : o.call(n, "[role=tab]");
  if (!i)
    return;
  const l = P(this, F, "a", $e).indexOf(i);
  l >= 0 && this.selectTab(l);
}, Zt = function(e, n) {
  this.hasAttribute(e) && (n.setAttribute(e, this.getAttribute(e)), this.removeAttribute(e));
};
gn.observedAttributes = ["vertical"];
const qn = typeof globalThis < "u" ? globalThis : window;
try {
  qn.TabContainerElement = gn.define();
} catch (t) {
  if (!(qn.DOMException && t instanceof DOMException && t.name === "NotSupportedError") && !(t instanceof ReferenceError))
    throw t;
}
const bl = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), jn = /* @__PURE__ */ new WeakMap(), gl = (t, e, n, o, i) => {
  const r = i?.[e];
  r === void 0 || n === o ? n == null && e in HTMLElement.prototype ? t.removeAttribute(e) : t[e] = n : ((l, a, s) => {
    let d = jn.get(l);
    d === void 0 && jn.set(l, d = /* @__PURE__ */ new Map());
    let u = d.get(a);
    s !== void 0 ? u === void 0 ? (d.set(a, u = { handleEvent: s }), l.addEventListener(a, u)) : u.handleEvent = s : u !== void 0 && (d.delete(a), l.removeEventListener(a, u));
  })(t, r, n);
}, vl = (t, e) => {
  typeof t == "function" ? t(e) : t.current = e;
};
function Tl(t = window.React, e, n, o, i) {
  let r, l, a;
  {
    const p = t;
    ({ tagName: l, elementClass: a, events: o, displayName: i } = p), r = p.react;
  }
  const s = r.Component, d = r.createElement, u = new Set(Object.keys(o ?? {}));
  class f extends s {
    constructor() {
      super(...arguments), this.o = null;
    }
    t(h) {
      if (this.o !== null) for (const b in this.i) gl(this.o, b, this.props[b], h ? h[b] : void 0, o);
    }
    componentDidMount() {
      var h;
      this.t(), (h = this.o) === null || h === void 0 || h.removeAttribute("defer-hydration");
    }
    componentDidUpdate(h) {
      this.t(h);
    }
    render() {
      const { _$Gl: h, ...b } = this.props;
      this.h !== h && (this.u = (v) => {
        h !== null && vl(h, v), this.o = v, this.h = h;
      }), this.i = {};
      const g = { ref: this.u };
      for (const [v, T] of Object.entries(b)) bl.has(v) ? g[v === "className" ? "class" : v] = T : u.has(v) || v in a.prototype ? this.i[v] = T : g[v] = T;
      return g.suppressHydrationWarning = !0, d(l, g);
    }
  }
  f.displayName = i ?? a.name;
  const m = r.forwardRef(((p, h) => d(f, { ...p, _$Gl: h }, p?.children)));
  return m.displayName = f.displayName, m;
}
const yl = (t) => t[0].toUpperCase() + t.slice(1).replace(/(-\w)/g, (e) => e[1].toUpperCase()), wl = (t, e, n = void 0) => {
  const o = Tl({
    tagName: e,
    elementClass: t,
    react: R,
    events: n
  });
  return o.displayName = yl(e), o;
};
var _t = { UnderlineWrapper: "prc-components-UnderlineWrapper-eT-Yj", UnderlineItemList: "prc-components-UnderlineItemList-xKlKC", UnderlineItem: "prc-components-UnderlineItem-7fP-n", LoadingCounter: "prc-components-LoadingCounter-dBuLy" };
const Cl = /* @__PURE__ */ Et((t, e) => {
  const n = _.c(13);
  let o, i, r, l;
  n[0] !== t ? ({
    children: o,
    className: i,
    as: l,
    ...r
  } = t, n[0] = t, n[1] = o, n[2] = i, n[3] = r, n[4] = l) : (o = n[1], i = n[2], r = n[3], l = n[4]);
  const a = l === void 0 ? "div" : l;
  let s;
  n[5] !== i ? (s = I(_t.UnderlineWrapper, i), n[5] = i, n[6] = s) : s = n[6];
  const d = e;
  let u;
  return n[7] !== a || n[8] !== o || n[9] !== r || n[10] !== s || n[11] !== d ? (u = /* @__PURE__ */ c(a, {
    className: s,
    ref: d,
    ...r,
    children: o
  }), n[7] = a, n[8] = o, n[9] = r, n[10] = s, n[11] = d, n[12] = u) : u = n[12], u;
}), Sl = /* @__PURE__ */ Et((t, e) => {
  const n = _.c(7);
  let o, i;
  n[0] !== t ? ({
    children: o,
    ...i
  } = t, n[0] = t, n[1] = o, n[2] = i) : (o = n[1], i = n[2]);
  let r;
  return n[3] !== o || n[4] !== e || n[5] !== i ? (r = /* @__PURE__ */ c("ul", {
    className: _t.UnderlineItemList,
    ref: e,
    ...i,
    children: o
  }), n[3] = o, n[4] = e, n[5] = i, n[6] = r) : r = n[6], r;
}), El = () => {
  const t = _.c(1);
  let e;
  return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = /* @__PURE__ */ c("span", {
    className: _t.LoadingCounter
  }), t[0] = e) : e = t[0], e;
}, xl = /* @__PURE__ */ R.forwardRef((t, e) => {
  const n = _.c(27);
  let o, i, r, l, a, s, d, u;
  n[0] !== t ? ({
    as: u,
    children: i,
    counter: l,
    icon: o,
    iconsVisible: a,
    loadingCounters: s,
    className: r,
    ...d
  } = t, n[0] = t, n[1] = o, n[2] = i, n[3] = r, n[4] = l, n[5] = a, n[6] = s, n[7] = d, n[8] = u) : (o = n[1], i = n[2], r = n[3], l = n[4], a = n[5], s = n[6], d = n[7], u = n[8]);
  const f = u === void 0 ? "a" : u;
  let m;
  n[9] !== r ? (m = I(_t.UnderlineItem, r), n[9] = r, n[10] = m) : m = n[10];
  let p;
  n[11] !== o || n[12] !== a ? (p = a && o && /* @__PURE__ */ c("span", {
    "data-component": "icon",
    children: oi.isElement(o) ? o : /* @__PURE__ */ c(o, {})
  }), n[11] = o, n[12] = a, n[13] = p) : p = n[13];
  let h;
  n[14] !== i ? (h = i && /* @__PURE__ */ c("span", {
    "data-component": "text",
    "data-content": i,
    children: i
  }), n[14] = i, n[15] = h) : h = n[15];
  let b;
  n[16] !== l || n[17] !== s ? (b = l !== void 0 ? s ? /* @__PURE__ */ c("span", {
    "data-component": "counter",
    children: /* @__PURE__ */ c(El, {})
  }) : /* @__PURE__ */ c("span", {
    "data-component": "counter",
    children: /* @__PURE__ */ c(ii, {
      children: l
    })
  }) : null, n[16] = l, n[17] = s, n[18] = b) : b = n[18];
  let g;
  return n[19] !== f || n[20] !== e || n[21] !== d || n[22] !== m || n[23] !== p || n[24] !== h || n[25] !== b ? (g = /* @__PURE__ */ w(f, {
    ...d,
    ref: e,
    className: m,
    children: [p, h, b]
  }), n[19] = f, n[20] = e, n[21] = d, n[22] = m, n[23] = p, n[24] = h, n[25] = b, n[26] = g) : g = n[26], g;
});
var Al = { StyledUnderlineWrapper: "prc-UnderlinePanels-StyledUnderlineWrapper-aiLna" };
const Il = wl(gn, "tab-container"), vn = ({
  "aria-label": t,
  "aria-labelledby": e,
  children: n,
  loadingCounters: o,
  className: i,
  ...r
}) => {
  const [l, a] = j(!0), s = ie(null), d = ie(null), u = Je(r.id), [f, m] = j([]), [p, h] = j([]);
  Y(() => {
    let T = 0, S = 0;
    const k = dt.map(n, (E) => /* @__PURE__ */ at(E) && (E.type === Te || Me(E, Te)) ? /* @__PURE__ */ wn(E, {
      id: `${u}-tab-${T++}`,
      loadingCounters: o,
      iconsVisible: l
    }) : /* @__PURE__ */ at(E) && (E.type === ye || Me(E, ye)) ? /* @__PURE__ */ wn(E, {
      "aria-labelledby": `${u}-tab-${S++}`
    }) : E), A = dt.toArray(k).filter((E) => /* @__PURE__ */ at(E) && (E.type === Te || Me(E, Te))), M = dt.toArray(k).filter((E) => /* @__PURE__ */ at(E) && (E.type === ye || Me(E, ye)));
    m(A), h(M);
  }, [n, u, o, l]);
  const b = f.some((T) => /* @__PURE__ */ R.isValidElement(T) && T.props.icon), [g, v] = j(0);
  return wt(() => {
    var T, S;
    b && v((T = (S = d.current) === null || S === void 0 ? void 0 : S.getBoundingClientRect().width) !== null && T !== void 0 ? T : 0);
  }, [b]), pl((T) => {
    if (!b)
      return;
    const S = T[0].contentRect.width;
    a(S > g);
  }, s, []), process.env.NODE_ENV !== "production" && (f.filter((S) => {
    const k = /* @__PURE__ */ R.isValidElement(S) && S.props["aria-selected"];
    return k === !0 || k === "true";
  }).length <= 1 || (process.env.NODE_ENV !== "production" ? He(!1, "Only one tab can be selected at a time.") : He(!1)), f.length !== p.length && (process.env.NODE_ENV !== "production" ? He(!1, `The number of tabs and panels must be equal. Counted ${f.length} tabs and ${p.length} panels.`) : He(!1))), /* @__PURE__ */ w(Il, {
    children: [/* @__PURE__ */ c(Cl, {
      ref: s,
      slot: "tablist-wrapper",
      "data-icons-visible": l,
      className: I(i, Al.StyledUnderlineWrapper),
      ...r,
      children: /* @__PURE__ */ c(Sl, {
        ref: d,
        "aria-label": t,
        "aria-labelledby": e,
        role: "tablist",
        children: f
      })
    }), p]
  });
};
vn.displayName = "UnderlinePanels";
const Te = (t) => {
  const e = _.c(14);
  let n, o, i;
  e[0] !== t ? ({
    "aria-selected": n,
    onSelect: o,
    ...i
  } = t, e[0] = t, e[1] = n, e[2] = o, e[3] = i) : (n = e[1], o = e[2], i = e[3]);
  let r;
  e[4] !== o ? (r = (f) => {
    !f.defaultPrevented && typeof o == "function" && o(f);
  }, e[4] = o, e[5] = r) : r = e[5];
  const l = r;
  let a;
  e[6] !== o ? (a = (f) => {
    (f.key === " " || f.key === "Enter") && !f.defaultPrevented && typeof o == "function" && o(f);
  }, e[6] = o, e[7] = a) : a = e[7];
  const s = a, d = n ? 0 : -1;
  let u;
  return e[8] !== n || e[9] !== l || e[10] !== s || e[11] !== i || e[12] !== d ? (u = /* @__PURE__ */ c(xl, {
    as: "button",
    role: "tab",
    tabIndex: d,
    "aria-selected": n,
    type: "button",
    onClick: l,
    onKeyDown: s,
    ...i
  }), e[8] = n, e[9] = l, e[10] = s, e[11] = i, e[12] = d, e[13] = u) : u = e[13], u;
};
Te.displayName = "UnderlinePanels.Tab";
const ye = (t) => {
  const e = _.c(6);
  let n, o;
  e[0] !== t ? ({
    children: n,
    ...o
  } = t, e[0] = t, e[1] = n, e[2] = o) : (n = e[1], o = e[2]);
  let i;
  return e[3] !== n || e[4] !== o ? (i = /* @__PURE__ */ c("div", {
    role: "tabpanel",
    ...o,
    children: n
  }), e[3] = n, e[4] = o, e[5] = i) : i = e[5], i;
};
ye.displayName = "UnderlinePanels.Panel";
var Ut = Object.assign(vn, {
  Panel: ye,
  Tab: Te
});
vn.__SLOT__ = Symbol("UnderlinePanels");
Te.__SLOT__ = Symbol("UnderlinePanels.Tab");
ye.__SLOT__ = Symbol("UnderlinePanels.Panel");
const _l = () => {
  const t = Kn(ri);
  if (!t) throw new Error("useFileCacheContext must be used within FileCacheProvider");
  return t;
}, Nl = (t, e) => {
  const { files: n, setFile: o } = _l(), [i, r] = j(!0), [l, a] = j({}), [s, d] = j({}), u = t.join(",");
  return Y(() => {
    let f = !0;
    return (async () => {
      r(!0);
      const p = {}, h = {}, b = t.filter((g) => !(g in n));
      if (await Promise.all(
        b.map(async (g) => {
          try {
            const v = await e(g);
            f && (o(g, v), h[g] = v);
          } catch (v) {
            f && (p[g] = v);
          }
        })
      ), f) {
        const g = t.filter((v) => v in n).reduce((v, T) => (v[T] = n[T], v), {});
        d({ ...g, ...h }), a(p), r(!1);
      }
    })(), () => {
      f = !1;
    };
  }, [u]), { files: s, loading: i, errors: l };
}, Dl = Go(() => import("./index-DSxTko_H.js"));
function Pl({ file: t, contentType: e }) {
  return /* @__PURE__ */ w("div", { children: [
    t && typeof t == "string" && e === "markdown" ? /* @__PURE__ */ c(Uo, { fallback: /* @__PURE__ */ c(fn, { lines: 10 }), children: /* @__PURE__ */ c(Dl, { content: t }) }) : /* @__PURE__ */ c("div", { children: t }),
    t instanceof File && /* @__PURE__ */ w("div", { children: [
      /* @__PURE__ */ c("strong", { children: "File:" }),
      " ",
      t.name,
      " (",
      t.type,
      ", ",
      t.size,
      " bytes)"
    ] }),
    t instanceof Blob && !(t instanceof File) && /* @__PURE__ */ w("div", { children: [
      /* @__PURE__ */ c("strong", { children: "Blob:" }),
      " ",
      t.type,
      " (",
      t.size,
      " bytes)"
    ] })
  ] });
}
function Se({ nodes: t }) {
  const e = t.filter((a) => !!a.content), { files: n, loading: o, errors: i } = Nl(
    e.map((a) => a.node.id),
    async (a) => {
      const s = e.find((d) => d.node.id === a);
      if (!s)
        throw new Error(`Node with id ${a} not found`);
      return s.content ? await s.content() : await (async () => "none")();
    }
  ), [r, l] = j(null);
  return /* @__PURE__ */ c("div", { className: "border rounded-2", children: o ? /* @__PURE__ */ c(fn, { lines: 10 }) : /* @__PURE__ */ w(Ut, { className: "border-bottom", "aria-label": "Select a file", id: "panels", children: [
    t.map((a) => /* @__PURE__ */ c(Ut.Tab, { "aria-selected": r === a.node.id + a.name, onSelect: () => l(a.node.id + a.name), children: a.name || a.node.name }, a.node.id + a.name)),
    t.map((a) => /* @__PURE__ */ c(Ut.Panel, { className: "p-5", children: i[a.node.id] ? /* @__PURE__ */ w("div", { className: "text-danger", children: [
      "Error loading file: ",
      i[a.node.id].message
    ] }) : a.component ? a.component : /* @__PURE__ */ c(
      Pl,
      {
        file: n[a.node.id],
        contentType: a.contentType || "text"
      }
    ) }, a.node.id + a.name))
  ] }) });
}
const Ll = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z" })
] }), Rl = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z" })
] }), kl = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M7 22q-1.25 0-2.125-.875T4 19q0-.975.563-1.75T6 16.175v-8.35q-.875-.3-1.437-1.075T4 5q0-1.25.875-2.125T7 2t2.125.875T10 5q0 .975-.562 1.75T8 7.825V8q0 1.25.875 2.125T11 11h2q2.075 0 3.538 1.463T18 16v.175q.875.3 1.438 1.075T20 19q0 1.25-.875 2.125T17 22t-2.125-.875T14 19q0-.975.563-1.75T16 16.175V16q0-1.25-.875-2.125T13 13h-2q-.85 0-1.612-.262T8 12v4.175q.875.3 1.438 1.075T10 19q0 1.25-.875 2.125T7 22m0-2q.425 0 .713-.288T8 19t-.288-.712T7 18t-.712.288T6 19t.288.713T7 20m10 0q.425 0 .713-.288T18 19t-.288-.712T17 18t-.712.288T16 19t.288.713T17 20M7 6q.425 0 .713-.288T8 5t-.288-.712T7 4t-.712.288T6 5t.288.713T7 6" })
] }), Hl = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M11 16H3v3q0 .825.588 1.413T5 21h6zm2 0v5h6q.825 0 1.413-.587T21 19v-3zm-2-2V9H3v5zm2 0h8V9h-8zM3 7h18V5q0-.825-.587-1.412T19 3H5q-.825 0-1.412.588T3 5z" })
] }), Ml = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z" })
] }), Bl = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" })
] }), Ol = () => /* @__PURE__ */ c("div", { className: "d-flex align-items-center justify-content-center", children: /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" })
] }) }), $l = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ c("rect", { width: "16", height: "16", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "m4.177 7.823l2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z" })
] }), Fl = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ c("rect", { width: "16", height: "16", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0M1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25M11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z" })
] }), Wl = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ c("rect", { width: "24", height: "24", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "currentColor", d: "m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" })
] }), Vl = () => /* @__PURE__ */ w("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 32 32", children: [
  /* @__PURE__ */ c("rect", { width: "32", height: "32", fill: "none" }),
  /* @__PURE__ */ c("path", { fill: "#20744a", fillRule: "evenodd", d: "M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.16 1.16 0 0 0 30 25.349V5.5a1.16 1.16 0 0 0-1.219-1.095m.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411Z" }),
  /* @__PURE__ */ c("path", { fill: "#20744a", d: "M22.487 7.439h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323zm0 3.501h4.323v2.2h-4.323z" }),
  /* @__PURE__ */ c("path", { fill: "#fff", fillRule: "evenodd", d: "m6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663z" })
] }), te = {
  FileIcon: Ll,
  FolderIcon: Rl,
  TermIcon: kl,
  TableIcon: Hl,
  IsaFileIcon: Ml,
  PersonIcon: Bl,
  SearchIcon: Ol,
  SidebarExpandIcon: $l,
  SidebarCollapseIcon: Fl,
  DownloadIcon: Wl,
  XlsxIcon: Vl
};
function ql(t) {
  return t ? t.children ? [...t.children].sort((e, n) => e.type === n.type ? e.name.localeCompare(n.name) : e.type === "folder" ? -1 : 1) : [] : [];
}
const ct = ({ navigateTo: t, responsiveValue: e }) => [
  {
    id: "icon",
    width: "auto",
    minWidth: "50px",
    header: () => /* @__PURE__ */ c(
      "div",
      {
        style: {
          clipPath: "inset(50%)",
          height: "1px",
          overflow: "hidden",
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px"
        },
        children: "icon"
      }
    ),
    renderCell: (n) => {
      const o = n.type === "file", i = o ? "File" : "Folder", r = n.name.endsWith(".xlsx");
      return /* @__PURE__ */ c(
        "span",
        {
          "aria-label": i,
          role: "img",
          children: r ? /* @__PURE__ */ c(te.XlsxIcon, {}) : o ? /* @__PURE__ */ c(te.FileIcon, { "aria-hidden": "true" }) : /* @__PURE__ */ c(te.FolderIcon, { "aria-hidden": "true" })
        }
      );
    }
  },
  {
    header: "Name",
    field: "name",
    rowHeader: !0,
    renderCell: (n) => /* @__PURE__ */ c(ai, { href: "#", style: { color: "inherit" }, onClick: () => t(n.id), children: /* @__PURE__ */ c(Nt, { title: n.name, maxWidth: "200px", expandable: !0, children: n.name }) })
  },
  ...e !== "narrow" ? [{
    header: "Path",
    field: "id",
    renderCell: (n) => /* @__PURE__ */ c("div", { style: { width: "content-min" }, children: /* @__PURE__ */ c(Nt, { title: n.id, maxWidth: "200px", children: n.id }) })
  }] : [],
  {
    id: "fileSize",
    width: "auto",
    minWidth: "50px",
    align: "end",
    header: "File Size",
    renderCell: (n) => n.contentSize ? /* @__PURE__ */ c("div", { style: { width: "content-min" }, children: /* @__PURE__ */ c(Nt, { title: n.contentSize, maxWidth: "200px", children: n.contentSize }) }) : null
  },
  {
    id: "actions",
    width: "auto",
    minWidth: "50px",
    align: "end",
    header: "Download",
    renderCell: (n) => n.sha256 ? /* @__PURE__ */ c(
      Kt,
      {
        as: "a",
        href: `https://lfs-resolver.nfdi4plants.org/presigned-url/?oid=${n.sha256}`,
        target: "_blank",
        "aria-label": `Download: ${n.name}`,
        title: `Download: ${n.name}`,
        icon: te.DownloadIcon,
        variant: "invisible"
      }
    ) : null
  }
];
function jl({ loading: t, currentTreeNode: e, navigateTo: n }) {
  const o = Xn(
    {
      narrow: ct({ navigateTo: n, responsiveValue: "narrow" }),
      regular: ct({ navigateTo: n, responsiveValue: "regular" }),
      wide: ct({ navigateTo: n, responsiveValue: "wide" })
    },
    ct({ navigateTo: n, responsiveValue: "regular" })
  );
  return /* @__PURE__ */ c(St.Container, { children: t ? /* @__PURE__ */ c(
    St.Skeleton,
    {
      "aria-labelledby": "repositories-loading",
      cellPadding: "condensed",
      rows: 10,
      columns: o
    }
  ) : /* @__PURE__ */ c(
    Ro,
    {
      "aria-labelledby": "repositories-default-headerAction",
      "aria-describedby": "repositories-subtitle-headerAction",
      cellPadding: "condensed",
      data: ql(e),
      columns: o
    }
  ) });
}
function zl({ currentTreeNode: t, navigateTo: e, title: n = "root" }) {
  const o = t.id.split("/").filter(Boolean);
  return /* @__PURE__ */ w(Dt, { children: [
    /* @__PURE__ */ c(
      Dt.Item,
      {
        href: "#",
        onClick: () => e(""),
        selected: o.length === 0,
        children: n
      },
      "root"
    ),
    o.map((i, r) => {
      const l = o.slice(0, r + 1).join("/");
      return /* @__PURE__ */ c(
        Dt.Item,
        {
          href: "#",
          onClick: () => e(l),
          selected: r === o.length - 1,
          children: i
        },
        l
      );
    })
  ] });
}
function Ul(t) {
  switch (t) {
    case "file":
      return () => /* @__PURE__ */ c(te.FileIcon, {});
    case "header":
      return () => /* @__PURE__ */ c(te.TermIcon, {});
    case "isa-table":
      return () => /* @__PURE__ */ c(te.TableIcon, {});
    case "isa-title":
      return () => /* @__PURE__ */ c(te.IsaFileIcon, {});
    case "person":
      return () => /* @__PURE__ */ c(te.PersonIcon, {});
    default:
      return () => /* @__PURE__ */ c(te.FileIcon, {});
  }
}
function Gl(t, e) {
  return {
    text: t.name,
    id: `${t.path}{${e}}`,
    path: t.path,
    leadingVisual: Ul(t.type)
  };
}
function Kl(t) {
  const e = /* @__PURE__ */ new Set();
  return t.filter((n) => e.has(n.text) ? !1 : (e.add(n.text), !0));
}
function Qt(t) {
  const e = t.map((n, o) => Gl(n, o));
  return Kl(e);
}
function Jl({ searchResults: t, onDialogClose: e, returnFocus: n, onSelect: o }) {
  const i = ie(null), { containerRef: r } = si();
  return /* @__PURE__ */ c(
    oe,
    {
      title: "Search Results",
      onClose: e,
      returnFocusRef: n,
      initialFocusRef: i,
      children: /* @__PURE__ */ c("div", { ref: r, children: /* @__PURE__ */ c(Pt, { "aria-label": "Search Results", id: "search-results-list", children: t.map((l, a) => /* @__PURE__ */ w(
        Pt.Item,
        {
          ref: a === 0 ? i : null,
          onSelect: () => o(l),
          children: [
            l.name,
            /* @__PURE__ */ c(Pt.Description, { variant: "block", children: l.path })
          ]
        },
        a
      )) }) })
    }
  );
}
function zn(t, e) {
  if (e.length < 3) {
    const n = Qt(t.filter((o) => o.type === "file"));
    return n.length > 10 ? n.sort((o, i) => o.text.localeCompare(i.text)).slice(0, 10) : n;
  } else {
    const n = t.filter((i) => i.name.toLowerCase().includes(e.toLowerCase())), o = Qt(n);
    return o.length > 10 ? o.sort((i, r) => i.text.localeCompare(r.text)).slice(0, 10) : o;
  }
}
function Xl({ navigateTo: t }) {
  const { cache: e } = Jn(), [n, o] = j(!1), i = Qt(e.filter((b) => b.type === "file").slice(0, 10)), [r, l] = j(i), [a, s] = j([]), d = ie(null), u = ae(() => s([]), []), f = ie(!1), m = (b) => {
    if (!b && !f.current) {
      f.current = !0, l(i);
      return;
    }
    if (b && f.current) {
      const g = zn(e, d.current.value);
      f.current = !1, l(g);
    }
  }, p = async (b) => {
    const g = b.target.value;
    o(!0);
    const v = zn(e, g);
    l(v), o(!1);
  }, h = (b) => {
    if (s([]), !Array.isArray(b)) {
      console.error("Expected items to be an array");
      return;
    }
    if (b.length !== 0) {
      const g = b[0], v = e.filter((T) => T.name === g.text);
      if (v.length > 1) {
        s(v);
        return;
      }
      t(g.path);
    }
  };
  return Y(() => {
    const b = (g) => {
      g.key === "t" && document.activeElement !== d.current && (g.preventDefault(), d.current?.focus());
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, []), /* @__PURE__ */ w("div", { children: [
    Zn(
      /* @__PURE__ */ c("div", { children: a.length > 0 && /* @__PURE__ */ c(
        Jl,
        {
          searchResults: a,
          onDialogClose: u,
          returnFocus: d,
          onSelect: (b) => {
            t(b.path), s([]);
          }
        }
      ) }),
      document.body
    ),
    /* @__PURE__ */ w(xn, { children: [
      /* @__PURE__ */ c(xn.Label, { visuallyHidden: !0, id: "autocompleteLabel-arc-search", children: "Autocomplete search for ARC" }),
      /* @__PURE__ */ w(st, { children: [
        /* @__PURE__ */ c(st.Input, { ref: d, onChange: p, leadingVisual: /* @__PURE__ */ c(te.SearchIcon, {}), trailingVisual: () => /* @__PURE__ */ c("kbd", { children: "t" }) }),
        /* @__PURE__ */ c(st.Overlay, { style: { width: "max-content" }, children: /* @__PURE__ */ c(
          st.Menu,
          {
            onOpenChange: m,
            loading: n,
            onSelectedChange: h,
            selectedItemIds: [],
            "aria-labelledby": "autocomplete-arc-search",
            items: r
          }
        ) })
      ] })
    ] })
  ] });
}
function Zl(t) {
  if (t.length === 0) return [];
  const e = t[0].length, n = t.length, o = [];
  for (let i = 0; i < e; i++) {
    const r = [];
    for (let l = 0; l < n; l++)
      r.push(t[l][i]);
    o.push(r);
  }
  return o;
}
function Tn({ table: t }) {
  const e = Zl(t.Columns.map((f) => f.Cells.map((m) => m.toString()))), n = t.Columns.map((f) => f.Header.toString()), o = n.map((f) => ({
    header: f,
    field: f
  })), i = e.map((f, m) => {
    const p = {
      id: String(m)
    };
    return t.Columns.forEach((h, b) => {
      const g = n[b];
      p[g] = f[b];
    }), p;
  }), r = 20, [l, a] = R.useState(0), s = l * r, d = s + r, u = i.slice(s, d);
  return /* @__PURE__ */ w(St.Container, { children: [
    /* @__PURE__ */ c(
      Ro,
      {
        "aria-labelledby": "repositories-pagination",
        data: u,
        columns: o
      }
    ),
    /* @__PURE__ */ c(
      St.Pagination,
      {
        "aria-label": "Pagination for Repositories",
        pageSize: r,
        totalCount: u.length,
        onChange: ({ pageIndex: f }) => {
          a(f);
        }
      }
    )
  ] });
}
function L({ exists: t, label: e, children: n, as: o }) {
  return /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ c(he, { as: o || "h4", variant: "small", children: e }),
    t ? n : /* @__PURE__ */ c(H, { color: "fg.muted", children: "Not available" })
  ] });
}
function Ql({ person: t }) {
  const e = [t.FirstName, t.MidInitials, t.LastName].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: "border p-2 rounded-2", children: [
    /* @__PURE__ */ c(he, { as: "h4", children: e }),
    /* @__PURE__ */ c(L, { label: "ORCID", exists: !!t.ORCID, as: "h5", children: /* @__PURE__ */ c(H, { children: t.ORCID }) }),
    /* @__PURE__ */ c(L, { label: "Affiliation", exists: !!t.Affiliation, as: "h5", children: /* @__PURE__ */ c(H, { children: t.Affiliation }) }),
    /* @__PURE__ */ c(L, { label: "Email", exists: !!t.EMail, as: "h5", children: /* @__PURE__ */ c(H, { children: t.EMail }) }),
    /* @__PURE__ */ c(L, { label: "Phone", exists: !!t.Phone, as: "h5", children: /* @__PURE__ */ c(H, { children: t.Phone }) }),
    /* @__PURE__ */ c(L, { label: "Roles", exists: !!t.Roles.length, as: "h5", children: /* @__PURE__ */ c(ne, { children: t.Roles.map((n, o) => /* @__PURE__ */ c("div", { children: /* @__PURE__ */ w(H, { children: [
      "- ",
      n.NameText
    ] }) }, o)) }) })
  ] });
}
function ot({ persons: t }) {
  return /* @__PURE__ */ c(ne, { children: t.map((e, n) => /* @__PURE__ */ c(Ql, { person: e }, n)) });
}
function Yl({ publication: t }) {
  return /* @__PURE__ */ w("div", { className: "border p-2 rounded-2", children: [
    /* @__PURE__ */ c(he, { as: "h4", children: t.Title }),
    /* @__PURE__ */ c(L, { label: "Status", exists: !!t.Status, as: "h5", children: /* @__PURE__ */ c(H, { children: t.Status?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "DOI", exists: !!t.DOI, as: "h5", children: /* @__PURE__ */ c(H, { children: t.DOI }) }),
    /* @__PURE__ */ c(L, { label: "PubMed ID", exists: !!t.PubMedID, as: "h5", children: /* @__PURE__ */ c(H, { children: t.PubMedID }) }),
    /* @__PURE__ */ c(L, { label: "Authors", exists: !!t.Authors, as: "h5", children: /* @__PURE__ */ c(H, { children: t.Authors }) })
  ] });
}
function Vo({ publications: t }) {
  return /* @__PURE__ */ c(ne, { children: t.map((e, n) => /* @__PURE__ */ c(Yl, { publication: e }, n)) });
}
function ea({ assay: t }) {
  return /* @__PURE__ */ w(ne, { spacing: 2, children: [
    /* @__PURE__ */ c(he, { as: "h2", children: t.Identifier }),
    /* @__PURE__ */ c(L, { label: "Title", exists: !!t.Title, children: /* @__PURE__ */ c(H, { children: t.Title }) }),
    /* @__PURE__ */ c(L, { label: "Description", exists: !!t.Description, children: /* @__PURE__ */ c(H, { children: t.Description }) }),
    /* @__PURE__ */ c(L, { label: "Measurement Type", exists: !!t.MeasurementType, children: /* @__PURE__ */ c(H, { children: t.MeasurementType?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "Technology Platform", exists: !!t.TechnologyPlatform, children: /* @__PURE__ */ c(H, { children: t.TechnologyPlatform?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "Technology Type", exists: !!t.TechnologyType, children: /* @__PURE__ */ c(H, { children: t.TechnologyType?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "Performers", exists: t.Performers.length > 0, children: /* @__PURE__ */ c(ot, { persons: t.Performers }) })
  ] });
}
function ta({ study: t }) {
  return /* @__PURE__ */ w(ne, { spacing: 2, children: [
    /* @__PURE__ */ c(he, { as: "h2", children: t.Identifier }),
    /* @__PURE__ */ c(L, { label: "Title", exists: !!t.Title, children: /* @__PURE__ */ c(H, { children: t.Title }) }),
    /* @__PURE__ */ c(L, { label: "Description", exists: !!t.Description, children: /* @__PURE__ */ c(H, { children: t.Description }) }),
    /* @__PURE__ */ c(L, { label: "Submission Date", exists: !!t.SubmissionDate, children: /* @__PURE__ */ c(H, { children: t.SubmissionDate }) }),
    /* @__PURE__ */ c(L, { label: "Publications", exists: t.Publications.length > 0, children: /* @__PURE__ */ c(Vo, { publications: t.Publications }) }),
    /* @__PURE__ */ c(L, { label: "Study Design Descriptors", exists: t.StudyDesignDescriptors.length > 0, children: /* @__PURE__ */ c(ne, { children: t.StudyDesignDescriptors.map((e, n) => /* @__PURE__ */ w(H, { children: [
      "- ",
      e.NameText
    ] }, n)) }) }),
    /* @__PURE__ */ c(L, { label: "Contacts", exists: t.Contacts.length > 0, children: /* @__PURE__ */ c(ot, { persons: t.Contacts }) })
  ] });
}
function na({ arc: t }) {
  return console.log(t), /* @__PURE__ */ w(ne, { spacing: 2, children: [
    /* @__PURE__ */ c(he, { as: "h2", children: t.Identifier }),
    /* @__PURE__ */ c(L, { label: "Title", exists: !!t.Title, children: /* @__PURE__ */ c(H, { children: t.Title }) }),
    /* @__PURE__ */ c(L, { label: "Description", exists: !!t.Description, children: /* @__PURE__ */ c(H, { children: t.Description }) }),
    /* @__PURE__ */ c(L, { label: "Submission Date", exists: !!t.SubmissionDate, children: /* @__PURE__ */ c(H, { children: t.SubmissionDate }) }),
    /* @__PURE__ */ c(L, { label: "Publications", exists: t.Publications.length > 0, children: /* @__PURE__ */ c(Vo, { publications: t.Publications }) }),
    /* @__PURE__ */ c(L, { label: "Contacts", exists: t.Contacts.length > 0, children: /* @__PURE__ */ c(ot, { persons: t.Contacts }) })
  ] });
}
function oa({ run: t }) {
  return /* @__PURE__ */ w(ne, { spacing: 2, children: [
    /* @__PURE__ */ c(he, { as: "h2", children: t.Identifier }),
    /* @__PURE__ */ c(L, { label: "Title", exists: !!t.Title, children: /* @__PURE__ */ c(H, { children: t.Title }) }),
    /* @__PURE__ */ c(L, { label: "Description", exists: !!t.Description, children: /* @__PURE__ */ c(H, { children: t.Description }) }),
    /* @__PURE__ */ c(L, { label: "Measurement Type", exists: !!t.MeasurementType, children: /* @__PURE__ */ c(H, { children: t.MeasurementType?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "Technology Type", exists: !!t.TechnologyType, children: /* @__PURE__ */ c(H, { children: t.TechnologyType?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "Technology Platform", exists: !!t.TechnologyPlatform, children: /* @__PURE__ */ c(H, { children: t.TechnologyPlatform?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "Workflow Identifiers", exists: t.WorkflowIdentifiers.length > 0, children: /* @__PURE__ */ c(ne, { children: t.WorkflowIdentifiers.map((e, n) => /* @__PURE__ */ w(H, { children: [
      "- ",
      e
    ] }, n)) }) }),
    /* @__PURE__ */ c(L, { label: "Performers", exists: t.Performers.length > 0, children: /* @__PURE__ */ c(ot, { persons: t.Performers }) })
  ] });
}
function ia({ workflow: t }) {
  return /* @__PURE__ */ w(ne, { spacing: 2, children: [
    /* @__PURE__ */ c(he, { as: "h2", children: t.Identifier }),
    /* @__PURE__ */ c(L, { label: "Title", exists: !!t.Title, children: /* @__PURE__ */ c(H, { children: t.Title }) }),
    /* @__PURE__ */ c(L, { label: "Description", exists: !!t.Description, children: /* @__PURE__ */ c(H, { children: t.Description }) }),
    /* @__PURE__ */ c(L, { label: "Workflow Type", exists: !!t.WorkflowType, children: /* @__PURE__ */ c(H, { children: t.WorkflowType?.NameText }) }),
    /* @__PURE__ */ c(L, { label: "URI", exists: !!t.URI, children: /* @__PURE__ */ c(H, { children: t.URI }) }),
    /* @__PURE__ */ c(L, { label: "Version", exists: !!t.Version, children: /* @__PURE__ */ c(H, { children: t.Version }) }),
    /* @__PURE__ */ c(L, { label: "Sub-Workflow Identifiers", exists: t.SubWorkflowIdentifiers.length > 0, children: /* @__PURE__ */ c(ne, { children: t.SubWorkflowIdentifiers.map((e, n) => /* @__PURE__ */ w(H, { children: [
      "- ",
      e
    ] }, n)) }) }),
    /* @__PURE__ */ c(L, { label: "Parameters", exists: t.Parameters.length > 0, children: /* @__PURE__ */ c(ne, { children: t.Parameters.map((e, n) => /* @__PURE__ */ w(H, { children: [
      "- ",
      e.NameText
    ] }, n)) }) }),
    /* @__PURE__ */ c(L, { label: "Components", exists: t.Components.length > 0, children: /* @__PURE__ */ c(ne, { children: t.Components.map((e, n) => {
      const i = e.ComponentType?.NameText || "Unknown Component";
      return /* @__PURE__ */ w(H, { children: [
        "- ",
        i
      ] }, n);
    }) }) }),
    /* @__PURE__ */ c(L, { label: "Contacts", exists: t.Contacts.length > 0, children: /* @__PURE__ */ c(ot, { persons: t.Contacts }) })
  ] });
}
function ra(t) {
  return t.endsWith(".xlsx");
}
const la = Gn(function t({
  node: e,
  currentTreeNode: n,
  expandedFolderIds: o = [],
  navigateTo: i
}) {
  const r = e.type === "folder", l = e.id === n?.id, a = o.includes(e.id);
  return /* @__PURE__ */ w(
    Ue.Item,
    {
      id: e.id,
      current: l,
      defaultExpanded: a,
      onSelect: () => i(e.id),
      children: [
        /* @__PURE__ */ c(Ue.LeadingVisual, { children: r ? /* @__PURE__ */ c(Ue.DirectoryIcon, {}) : ra(e.name) ? /* @__PURE__ */ c(te.XlsxIcon, {}) : /* @__PURE__ */ c(te.FileIcon, {}) }),
        e.name,
        r && e.children && e.children.length > 0 && /* @__PURE__ */ c(Ue.SubTree, { children: e.children.map((s) => /* @__PURE__ */ c(
          t,
          {
            node: s,
            currentTreeNode: n,
            expandedFolderIds: o,
            navigateTo: i
          },
          s.id
        )) })
      ]
    },
    e.id
  );
}, (t, e) => t.node === e.node && t.currentTreeNode === e.currentTreeNode && t.expandedFolderIds === e.expandedFolderIds);
function aa({
  tree: t,
  currentTreeNode: e,
  expandedFolderIds: n,
  navigateTo: o
}) {
  return !t || !t.children || !e ? /* @__PURE__ */ c("div", { children: "No files to display" }) : /* @__PURE__ */ c(Ue, { "aria-label": "File Tree", children: t.children?.map(
    (i) => /* @__PURE__ */ c(
      la,
      {
        node: i,
        currentTreeNode: e,
        expandedFolderIds: n,
        navigateTo: o
      },
      i.id
    )
  ) });
}
function Gt(t, e) {
  const n = ie(0), [o, i] = j({ loading: !0 });
  return Y(() => {
    let r = !0;
    const l = ++n.current;
    return i((a) => ({ ...a, loading: !0 })), t().then((a) => {
      !r || l !== n.current || i({ loading: !1, value: a });
    }).catch((a) => {
      !r || l !== n.current || i({ loading: !1, error: a });
    }), () => {
      r = !1;
    };
  }, e), o;
}
function sa(t) {
  return t.replace(/\\/g, "/").replace(/^.?\/+/, "");
}
function ca(t, e) {
  const n = {
    name: "root",
    id: "",
    type: "folder",
    children: []
  }, o = t.filter((i) => !i.endsWith(".gitkeep"));
  for (const i of o) {
    const r = i.split("/");
    let l = n;
    for (let a = 0; a < r.length; a++) {
      const s = r[a], d = a === r.length - 1;
      l.children || (l.children = []);
      let u = l.children.find(
        (f) => f.name === s
      );
      if (!u) {
        const f = r.slice(0, a + 1).join("/");
        u = {
          name: s,
          id: f,
          sha256: e.get(f)?.sha256 || void 0,
          // Use sha256 if available
          contentSize: e.get(f)?.contentSize || void 0,
          // Use contentSize if available
          ...d ? { type: "file" } : { type: "folder", children: [] }
        }, l.children.push(u);
      }
      l = u;
    }
  }
  return n;
}
function da(t, e) {
  const n = e.split("/").filter(Boolean);
  let o = t;
  for (const i of n) {
    if (!o.children) return null;
    const r = o.children.find((l) => l.name === i);
    if (!r) return null;
    o = r;
  }
  return o;
}
async function ua(t, e) {
  return console.warn(
    "Fetching file by node not implemented yet: fetchFileByNode",
    t,
    e
  ), "This feature is not implemented yet. At the moment you can only view metadata files.";
}
function qo(t, e = []) {
  return t.type === "file" ? [{ name: t.name, path: t.id, type: "file" }] : t.type === "folder" && t.children ? [
    ...t.children.flatMap(
      (n) => qo(n, e)
    )
  ] : [];
}
async function fa(t, e, n) {
  const o = qo(t);
  n(o);
  const i = /* @__PURE__ */ new Set();
  e.Assays.forEach((l) => {
    const a = `assays/${l.Identifier}/isa.assay.xlsx`;
    i.add({ name: l.Identifier, path: a, type: "isa-title" }), l.Performers.forEach((s) => {
      s.ORCID && i.add({ name: s.ORCID, path: a, type: "person" });
      const d = [
        s.FirstName,
        s.MidInitials,
        s.LastName
      ].filter(Boolean).join(" ");
      d && i.add({ name: d, path: a, type: "person" });
    }), l.tables.forEach((s) => {
      i.add({ name: s.Name, path: a, type: "isa-table" }), s.Headers.forEach((d) => {
        const u = d.TryGetTerm();
        if (u || i.add({
          name: d.toString(),
          path: a,
          type: "header"
        }), u) {
          const f = u.NameText;
          f && i.add({ name: f, path: a, type: "header" });
        }
      });
    });
  }), e.Studies.forEach((l) => {
    const a = `studies/${l.Identifier}/isa.study.xlsx`;
    i.add({ name: l.Identifier, path: a, type: "isa-title" }), l.Contacts.forEach((s) => {
      s.ORCID && i.add({ name: s.ORCID, path: a, type: "person" });
      const d = [
        s.FirstName,
        s.MidInitials,
        s.LastName
      ].filter(Boolean).join(" ");
      d && i.add({ name: d, path: a, type: "person" });
    }), l.tables.forEach((s) => {
      i.add({ name: s.Name, path: a, type: "isa-table" }), s.Headers.forEach((d) => {
        const u = d.TryGetTerm();
        if (u || i.add({
          name: d.toString(),
          path: a,
          type: "header"
        }), u) {
          const f = u.NameText;
          f && i.add({ name: f, path: a, type: "header" });
        }
      });
    });
  });
  const r = "isa.investigation.xlsx";
  e.Contacts.forEach((l) => {
    l.ORCID && i.add({
      name: l.ORCID,
      path: r,
      type: "person"
    });
    const a = [l.FirstName, l.MidInitials, l.LastName].filter(Boolean).join(" ");
    a && i.add({ name: a, path: r, type: "person" });
  }), e.Runs.forEach((l) => {
    const a = `runs/${l.Identifier}/isa.run.xlsx`;
    i.add({ name: l.Identifier, path: a, type: "isa-title" }), l.Performers.forEach((s) => {
      s.ORCID && i.add({ name: s.ORCID, path: a, type: "person" });
      const d = [
        s.FirstName,
        s.MidInitials,
        s.LastName
      ].filter(Boolean).join(" ");
      d && i.add({ name: d, path: a, type: "person" });
    }), l.Tables.forEach((s) => {
      i.add({ name: s.Name, path: a, type: "isa-table" }), s.Headers.forEach((d) => {
        const u = d.TryGetTerm();
        if (u || i.add({
          name: d.toString(),
          path: a,
          type: "header"
        }), u) {
          const f = u.NameText;
          f && i.add({ name: f, path: a, type: "header" });
        }
      });
    });
  }), e.Workflows.forEach((l) => {
    const a = `workflows/${l.Identifier}/isa.workflow.xlsx`;
    i.add({ name: l.Identifier, path: a, type: "isa-title" }), l.Contacts.forEach((s) => {
      s.ORCID && i.add({ name: s.ORCID, path: a, type: "person" });
      const d = [
        s.FirstName,
        s.MidInitials,
        s.LastName
      ].filter(Boolean).join(" ");
      d && i.add({ name: d, path: a, type: "person" });
    });
  }), n((l) => [...l, ...Array.from(i)]);
}
function pa({
  currentTreeNode: t,
  arc: e
}) {
  const n = t.id.match(
    /assays\/([^/]+)\/isa\.assay\.xlsx/
  ), o = e.Assays.find((i) => i.Identifier === n?.[1]);
  return o ? /* @__PURE__ */ c(
    Se,
    {
      nodes: [
        {
          node: t,
          name: "Metadata",
          component: /* @__PURE__ */ c(ea, { assay: o }),
          contentType: "jsx"
        },
        ...o.Tables.map((i) => ({
          node: t,
          name: i.Name,
          contentType: "jsx",
          component: /* @__PURE__ */ c(Tn, { table: i })
        }))
      ]
    }
  ) : /* @__PURE__ */ c("div", { children: "Assay not found" });
}
function ha({
  currentTreeNode: t,
  arc: e
}) {
  const n = t.id.match(
    /studies\/([^/]+)\/isa\.study\.xlsx/
  ), o = e.Studies.find((i) => i.Identifier === n?.[1]);
  return o ? /* @__PURE__ */ c(
    Se,
    {
      nodes: [
        {
          node: t,
          component: /* @__PURE__ */ c(ta, { study: o }),
          contentType: "jsx"
        },
        ...o.Tables.map((i) => ({
          node: t,
          name: i.Name,
          contentType: "jsx",
          component: /* @__PURE__ */ c(Tn, { table: i })
        }))
      ]
    }
  ) : /* @__PURE__ */ c("div", { children: "Study not found" });
}
function ma({
  currentTreeNode: t,
  arc: e
}) {
  const n = t.id.match(
    /runs\/([^/]+)\/isa\.run\.xlsx/
  ), o = e.Runs.find((i) => i.Identifier === n?.[1]);
  return o ? /* @__PURE__ */ c(
    Se,
    {
      nodes: [
        {
          node: t,
          name: "Metadata",
          component: /* @__PURE__ */ c(oa, { run: o }),
          contentType: "jsx"
        },
        ...o.Tables.map((i) => ({
          node: t,
          name: i.Name,
          contentType: "jsx",
          component: /* @__PURE__ */ c(Tn, { table: i })
        }))
      ]
    }
  ) : /* @__PURE__ */ c("div", { children: "Run not found" });
}
function ba({
  currentTreeNode: t,
  arc: e
}) {
  const n = t.id.match(
    /workflows\/([^/]+)\/isa\.workflow\.xlsx/
  ), o = e.Workflows.find((i) => i.Identifier === n?.[1]);
  return o ? /* @__PURE__ */ c(
    Se,
    {
      nodes: [
        {
          node: t,
          component: /* @__PURE__ */ c(ia, { workflow: o }),
          contentType: "jsx"
        }
      ]
    }
  ) : /* @__PURE__ */ c("div", { children: "Workflow not found" });
}
function ga({
  currentTreeNode: t,
  arc: e
}) {
  return /* @__PURE__ */ c(
    Se,
    {
      nodes: [
        {
          node: t,
          component: /* @__PURE__ */ c(na, { arc: e }),
          contentType: "jsx"
        }
      ]
    }
  );
}
function va({
  currentTreeNode: t,
  arc: e
}) {
  switch (t.name) {
    case "isa.investigation.xlsx":
      return /* @__PURE__ */ c(
        ga,
        {
          currentTreeNode: t,
          arc: e
        }
      );
    case "isa.study.xlsx":
      return /* @__PURE__ */ c(ha, { currentTreeNode: t, arc: e });
    case "isa.assay.xlsx":
      return /* @__PURE__ */ c(pa, { currentTreeNode: t, arc: e });
    case "isa.run.xlsx":
      return /* @__PURE__ */ c(ma, { currentTreeNode: t, arc: e });
    case "isa.workflow.xlsx":
      return /* @__PURE__ */ c(ba, { currentTreeNode: t, arc: e });
    default:
      return /* @__PURE__ */ c(
        Se,
        {
          nodes: [
            {
              node: t,
              content: () => ua(t, e)
            }
          ]
        }
      );
  }
}
function Ta({ close: t, children: e }) {
  return /* @__PURE__ */ c(di, { title: "My Dialog", onClose: t, position: "left", children: e });
}
function jo(t, e, n = []) {
  for (const o of t) {
    if (o.id === e)
      return console.log("Found node:", o), n;
    if (o.type === "folder" && o.children) {
      const i = jo(o.children, e, [
        ...n,
        o.id
      ]);
      if (i) return i;
    }
  }
  return null;
}
function ya(t, e, n) {
  if (!e) return;
  const o = da(e, t);
  o ? n(o) : console.warn(`Node not found for path: ${t}`);
}
function wa(t) {
  const e = t.match(/^(\d+)(b|B)$/);
  if (!e) return t;
  const n = parseInt(e[1], 10);
  if (isNaN(n)) return t;
  const o = ["B", "KB", "MB", "GB", "TB", "PB"];
  let i = 0, r = n;
  for (; r >= 1024 && i < o.length - 1; )
    r /= 1024, i++;
  return `${r.toFixed(2)} ${o[i]}`;
}
function Ca({
  jsonString: t,
  readmefetch: e,
  licensefetch: n,
  clearJsonCallback: o
}) {
  const { setCache: i } = Jn(), [r, l] = j(!1), a = Xn(
    {
      narrow: !0,
      regular: !0,
      wide: !1
    },
    !1
  ), s = Gt(async () => Cn.LDGraph.fromROCrateJsonString(t), [t]), d = Gt(async () => Cn.ARC.fromROCrateJsonString(t), [t]), u = Gt(async () => {
    if (d.value && s.value) {
      const v = s.value.Nodes.filter(
        (A) => Ko.LDFile.validate(
          A,
          s.value?.TryGetContext()
        )
      );
      console.log(v);
      const T = /* @__PURE__ */ new Map();
      v.forEach((A) => {
        const M = A.id, E = A.TryGetProperty(
          "http://schema.org/sha256",
          s.value?.TryGetContext()
        ) || A.TryGetProperty(
          "https://schema.org/sha256",
          s.value?.TryGetContext()
        );
        if (M && E) {
          const V = A.TryGetProperty("contentSize"), O = sa(M);
          T.set(O, {
            sha256: E,
            contentSize: V ? wa(V) : void 0
          });
        }
      });
      const S = d.value.FileSystem.Tree.ToFilePaths(!0);
      return ca(S, T);
    } else
      return;
  }, [d, s]), [f, m] = j(u.value), p = we(() => (v) => {
    u.value && (ya(v, u.value, m), a && l(!1));
  }, [u, a]);
  Y(() => {
    u.value && m(u.value);
  }, [u.value]), Y(() => {
    u.value && d.value && fa(u.value, d.value, i);
  }, [u, d, i]);
  const h = we(() => f?.id ? jo(u.value?.children || [], f.id) ?? [] : [], [u, f]), b = we(
    () => /* @__PURE__ */ c(
      aa,
      {
        tree: u.value,
        currentTreeNode: f,
        expandedFolderIds: h,
        navigateTo: p
      }
    ),
    [u, f, h, p]
  ), g = [s.error?.message, d.error?.message, u.error?.message].filter(Boolean).join(`
`) || void 0;
  return g ? /* @__PURE__ */ c(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      },
      children: /* @__PURE__ */ c("div", { style: { minWidth: "300px" }, children: /* @__PURE__ */ c(
        ci,
        {
          "aria-label": "Error",
          title: "Error",
          description: g,
          variant: "critical",
          onDismiss: o
        }
      ) })
    }
  ) : /* @__PURE__ */ w(Lt, { children: [
    /* @__PURE__ */ c("div", { className: "z-2", children: r && a && /* @__PURE__ */ c(Ta, { close: () => l(!1), children: b }) }),
    /* @__PURE__ */ c(
      Lt.Pane,
      {
        "aria-label": "Sidebar",
        resizable: !0,
        widthStorageKey: "arc-webviewer-sidebar-width",
        hidden: !r || a,
        sticky: !0,
        children: b
      }
    ),
    /* @__PURE__ */ c(Lt.Content, { children: /* @__PURE__ */ w(ne, { children: [
      /* @__PURE__ */ c("div", { className: "bgColor-default py-2 position-sticky top-0 z-1 d-flex flex-items-start", children: /* @__PURE__ */ w(
        ne,
        {
          className: "flex-column flex-sm-row flex-items-start flex-sm-items-center",
          style: { width: "100%" },
          children: [
            /* @__PURE__ */ w(
              "div",
              {
                className: "d-flex flex-row",
                style: { gap: "0.5rem" },
                children: [
                  /* @__PURE__ */ c(
                    Kt,
                    {
                      "aria-label": "Expand sidebar",
                      variant: "invisible",
                      icon: r ? te.SidebarCollapseIcon : te.SidebarExpandIcon,
                      onClick: () => l(!r)
                    }
                  ),
                  /* @__PURE__ */ c(Xl, { navigateTo: p })
                ]
              }
            ),
            f && d.value && d.value.Title && /* @__PURE__ */ c(
              zl,
              {
                currentTreeNode: f,
                navigateTo: p,
                title: d.value.Title
              }
            ),
            o && /* @__PURE__ */ c(
              Kt,
              {
                style: { marginLeft: "auto" },
                "aria-label": "Clear loaded JSON and upload new",
                variant: "danger",
                icon: li,
                onClick: () => o()
              }
            )
          ]
        }
      ) }),
      f && f.type === "file" && d.value ? /* @__PURE__ */ c(
        va,
        {
          currentTreeNode: f,
          arc: d.value
        }
      ) : /* @__PURE__ */ c(
        jl,
        {
          loading: d.loading,
          currentTreeNode: f,
          navigateTo: p
        }
      ),
      u.value && f && f.name === "root" && f.type === "folder" && (e || n) && /* @__PURE__ */ c(
        Se,
        {
          nodes: [
            {
              node: {
                id: f.name + "readme",
                name: "README.md",
                type: "file"
              },
              contentType: "markdown",
              content: e
            },
            {
              node: {
                id: f.name + "license",
                name: "LICENSE.md",
                type: "file"
              },
              contentType: "markdown",
              content: n
            }
          ]
        }
      )
    ] }) })
  ] });
}
const Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" }));
export {
  fn as S,
  Da as i
};
