import { jsx as d, Fragment as Ae, jsxs as J } from "react/jsx-runtime";
import C, { useContext as Ne, createContext as be, useImperativeHandle as wt, useId as Rt, useEffect as ie, useState as re, useRef as ue, useSyncExternalStore as Tt, forwardRef as xe, lazy as $t, useCallback as Lt, Suspense as At } from "react";
import { marked as Nt } from "marked";
import { Banner as xt, Stack as Mt, Button as Ot, Spinner as kt } from "@primer/react";
var ke, Ke;
function Pt() {
  if (Ke) return ke;
  Ke = 1;
  var n = Object.create, e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, a = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, o = (v, E) => {
    for (var b in E)
      e(v, b, { get: E[b], enumerable: !0 });
  }, l = (v, E, b, ee) => {
    if (E && typeof E == "object" || typeof E == "function")
      for (let oe of r(E))
        !s.call(v, oe) && oe !== b && e(v, oe, { get: () => E[oe], enumerable: !(ee = t(E, oe)) || ee.enumerable });
    return v;
  }, c = (v, E, b) => (b = v != null ? n(a(v)) : {}, l(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !v || !v.__esModule ? e(b, "default", { value: v, enumerable: !0 }) : b,
    v
  )), u = (v) => l(e({}, "__esModule", { value: !0 }), v), p = {};
  o(p, {
    $dispatcherGuard: () => D,
    $makeReadOnly: () => P,
    $reset: () => k,
    $structuralCheck: () => gt,
    c: () => q,
    clearRenderCounterRegistry: () => U,
    renderCounterRegistry: () => H,
    useRenderCounter: () => Me
  }), ke = u(p);
  var m = c(C), { useRef: _, useEffect: S, isValidElement: f } = m, i, h = (
    //@ts-ignore
    (i = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) != null ? i : m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ), x = Symbol.for("react.memo_cache_sentinel"), O, q = (
    // @ts-expect-error
    typeof ((O = m.__COMPILER_RUNTIME) == null ? void 0 : O.c) == "function" ? (
      // @ts-expect-error
      m.__COMPILER_RUNTIME.c
    ) : function(E) {
      return m.useMemo(() => {
        const b = new Array(E);
        for (let ee = 0; ee < E; ee++)
          b[ee] = x;
        return b[x] = !0, b;
      }, []);
    }
  ), I = {};
  [
    "readContext",
    "useCallback",
    "useContext",
    "useEffect",
    "useImperativeHandle",
    "useInsertionEffect",
    "useLayoutEffect",
    "useMemo",
    "useReducer",
    "useRef",
    "useState",
    "useDebugValue",
    "useDeferredValue",
    "useTransition",
    "useMutableSource",
    "useSyncExternalStore",
    "useId",
    "unstable_isNewReconciler",
    "getCacheSignal",
    "getCacheForType",
    "useCacheRefresh"
  ].forEach((v) => {
    I[v] = () => {
      throw new Error(
        `[React] Unexpected React hook call (${v}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `
      );
    };
  });
  var B = null;
  I.useMemoCache = (v) => {
    if (B == null)
      throw new Error(
        "React Compiler internal invariant violation: unexpected null dispatcher"
      );
    return B.useMemoCache(v);
  };
  function Z(v) {
    return h.ReactCurrentDispatcher.current = v, h.ReactCurrentDispatcher.current;
  }
  var L = [];
  function D(v) {
    const E = h.ReactCurrentDispatcher.current;
    if (v === 0) {
      if (L.push(E), L.length === 1 && (B = E), E === I)
        throw new Error(
          "[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked."
        );
      Z(I);
    } else if (v === 1) {
      const b = L.pop();
      if (b == null)
        throw new Error(
          "React Compiler internal error: unexpected null in guard stack"
        );
      L.length === 0 && (B = null), Z(b);
    } else if (v === 2)
      L.push(E), Z(B);
    else if (v === 3) {
      const b = L.pop();
      if (b == null)
        throw new Error(
          "React Compiler internal error: unexpected null in guard stack"
        );
      Z(b);
    } else
      throw new Error("React Compiler internal error: unreachable block" + v);
  }
  function k(v) {
    for (let E = 0; E < v.length; E++)
      v[E] = x;
  }
  function P() {
    throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime");
  }
  var H = /* @__PURE__ */ new Map();
  function U() {
    for (const v of H.values())
      v.forEach((E) => {
        E.count = 0;
      });
  }
  function X(v, E) {
    let b = H.get(v);
    b == null && (b = /* @__PURE__ */ new Set(), H.set(v, b)), b.add(E);
  }
  function de(v, E) {
    const b = H.get(v);
    b?.delete(E);
  }
  function Me(v) {
    const E = _(null);
    E.current != null && (E.current.count += 1), S(() => {
      if (E.current == null) {
        const b = { count: 0 };
        X(v, b), E.current = b;
      }
      return () => {
        E.current !== null && de(v, E.current);
      };
    });
  }
  var Xe = /* @__PURE__ */ new Set();
  function gt(v, E, b, ee, oe, Ct) {
    function F(g, y, M, A) {
      const le = `${ee}:${Ct} [${oe}] ${b}${M} changed from ${g} to ${y} at depth ${A}`;
      Xe.has(le) || (Xe.add(le), console.error(le));
    }
    const bt = 2;
    function Ee(g, y, M, A) {
      if (!(A > bt)) {
        if (g === y)
          return;
        if (typeof g != typeof y)
          F(`type ${typeof g}`, `type ${typeof y}`, M, A);
        else if (typeof g == "object") {
          const le = Array.isArray(g), Oe = Array.isArray(y);
          if (g === null && y !== null)
            F("null", `type ${typeof y}`, M, A);
          else if (y === null)
            F(`type ${typeof g}`, "null", M, A);
          else if (g instanceof Map)
            if (!(y instanceof Map))
              F("Map instance", "other value", M, A);
            else if (g.size !== y.size)
              F(
                `Map instance with size ${g.size}`,
                `Map instance with size ${y.size}`,
                M,
                A
              );
            else
              for (const [N, St] of g)
                y.has(N) ? Ee(St, y.get(N), `${M}.get(${N})`, A + 1) : F(
                  `Map instance with key ${N}`,
                  `Map instance without key ${N}`,
                  M,
                  A
                );
          else if (y instanceof Map)
            F("other value", "Map instance", M, A);
          else if (g instanceof Set)
            if (!(y instanceof Set))
              F("Set instance", "other value", M, A);
            else if (g.size !== y.size)
              F(
                `Set instance with size ${g.size}`,
                `Set instance with size ${y.size}`,
                M,
                A
              );
            else
              for (const N of y)
                g.has(N) || F(
                  `Set instance without element ${N}`,
                  `Set instance with element ${N}`,
                  M,
                  A
                );
          else if (y instanceof Set)
            F("other value", "Set instance", M, A);
          else if (le || Oe)
            if (le !== Oe)
              F(
                `type ${le ? "array" : "object"}`,
                `type ${Oe ? "array" : "object"}`,
                M,
                A
              );
            else if (g.length !== y.length)
              F(
                `array with length ${g.length}`,
                `array with length ${y.length}`,
                M,
                A
              );
            else
              for (let N = 0; N < g.length; N++)
                Ee(g[N], y[N], `${M}[${N}]`, A + 1);
          else if (f(g) || f(y))
            f(g) !== f(y) ? F(
              `type ${f(g) ? "React element" : "object"}`,
              `type ${f(y) ? "React element" : "object"}`,
              M,
              A
            ) : g.type !== y.type ? F(
              `React element of type ${g.type}`,
              `React element of type ${y.type}`,
              M,
              A
            ) : Ee(
              g.props,
              y.props,
              `[props of ${M}]`,
              A + 1
            );
          else {
            for (const N in y)
              N in g || F(
                `object without key ${N}`,
                `object with key ${N}`,
                M,
                A
              );
            for (const N in g)
              N in y ? Ee(g[N], y[N], `${M}.${N}`, A + 1) : F(
                `object with key ${N}`,
                `object without key ${N}`,
                M,
                A
              );
          }
        } else {
          if (typeof g == "function")
            return;
          isNaN(g) || isNaN(y) ? isNaN(g) !== isNaN(y) && F(
            `${isNaN(g) ? "NaN" : "non-NaN value"}`,
            `${isNaN(y) ? "NaN" : "non-NaN value"}`,
            M,
            A
          ) : g !== y && F(g, y, M, A);
        }
      }
    }
    Ee(v, E, "", 0);
  }
  return ke;
}
var z = Pt();
function rt(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var a = n.length;
    for (e = 0; e < a; e++) n[e] && (t = rt(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function G() {
  for (var n, e, t = 0, r = "", a = arguments.length; t < a; t++) (n = arguments[t]) && (e = rt(n)) && (r && (r += " "), r += e);
  return r;
}
const at = /* @__PURE__ */ be(null);
function It() {
  const n = Ne(at);
  if (!n)
    throw new Error("useBlankslate must be used within a BlankslateProvider");
  return n;
}
const Bt = at.Provider;
var fe = { Container: "prc-Blankslate-Container-Vr9Ce", Blankslate: "prc-Blankslate-Blankslate-Eihy3", Description: "prc-Blankslate-Description-nqiRV", Heading: "prc-Blankslate-Heading-tVZsq", Visual: "prc-Blankslate-Visual-10aPl", Action: "prc-Blankslate-Action-RsgHG" };
function it(n, e) {
  const t = z.c(2);
  let r;
  t[0] !== e.current ? (r = () => e.current, t[0] = e.current, t[1] = r) : r = t[1], wt(n, r);
}
const Dt = (n) => {
  const e = z.c(9);
  let t, r, a;
  if (e[0] !== n ? ({
    if: r,
    children: t,
    ...a
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a) : (t = e[1], r = e[2], a = e[3]), r) {
    let s;
    return e[4] !== t || e[5] !== a ? (s = /* @__PURE__ */ d("div", {
      ...a,
      children: t
    }), e[4] = t, e[5] = a, e[6] = s) : s = e[6], s;
  } else {
    let s;
    return e[7] !== t ? (s = /* @__PURE__ */ d(Ae, {
      children: t
    }), e[7] = t, e[8] = s) : s = e[8], s;
  }
};
var te = { ButtonBase: "prc-Button-ButtonBase-9n-Xk", CounterLabel: "prc-Button-CounterLabel-5hAs4", Visual: "prc-Button-Visual-YNt2F", VisualWrap: "prc-Button-VisualWrap-E4cnq", IconButton: "prc-Button-IconButton-fyge7", ButtonContent: "prc-Button-ButtonContent-Iohp5", Label: "prc-Button-Label-FWkx3", LoadingSpinner: "prc-Button-LoadingSpinner-6KfaT", ConditionalWrapper: "prc-Button-ConditionalWrapper-Rvbgb" }, Se = { exports: {} }, R = {};
var Qe;
function Ft() {
  if (Qe) return R;
  Qe = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
  function f(i) {
    if (typeof i == "object" && i !== null) {
      var h = i.$$typeof;
      switch (h) {
        case n:
          switch (i = i.type, i) {
            case t:
            case a:
            case r:
            case c:
            case u:
            case _:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case o:
                case l:
                case m:
                case p:
                  return i;
                case s:
                  return i;
                default:
                  return h;
              }
          }
        case e:
          return h;
      }
    }
  }
  return R.ContextConsumer = s, R.ContextProvider = o, R.Element = n, R.ForwardRef = l, R.Fragment = t, R.Lazy = m, R.Memo = p, R.Portal = e, R.Profiler = a, R.StrictMode = r, R.Suspense = c, R.SuspenseList = u, R.isContextConsumer = function(i) {
    return f(i) === s;
  }, R.isContextProvider = function(i) {
    return f(i) === o;
  }, R.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === n;
  }, R.isForwardRef = function(i) {
    return f(i) === l;
  }, R.isFragment = function(i) {
    return f(i) === t;
  }, R.isLazy = function(i) {
    return f(i) === m;
  }, R.isMemo = function(i) {
    return f(i) === p;
  }, R.isPortal = function(i) {
    return f(i) === e;
  }, R.isProfiler = function(i) {
    return f(i) === a;
  }, R.isStrictMode = function(i) {
    return f(i) === r;
  }, R.isSuspense = function(i) {
    return f(i) === c;
  }, R.isSuspenseList = function(i) {
    return f(i) === u;
  }, R.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === t || i === a || i === r || i === c || i === u || typeof i == "object" && i !== null && (i.$$typeof === m || i.$$typeof === p || i.$$typeof === o || i.$$typeof === s || i.$$typeof === l || i.$$typeof === S || i.getModuleId !== void 0);
  }, R.typeOf = f, R;
}
var T = {};
var Ve;
function zt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(i) {
      if (typeof i == "object" && i !== null) {
        var h = i.$$typeof;
        switch (h) {
          case e:
            switch (i = i.type, i) {
              case r:
              case s:
              case a:
              case u:
              case p:
              case S:
                return i;
              default:
                switch (i = i && i.$$typeof, i) {
                  case l:
                  case c:
                  case _:
                  case m:
                    return i;
                  case o:
                    return i;
                  default:
                    return h;
                }
            }
          case t:
            return h;
        }
      }
    }
    var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), S = Symbol.for("react.view_transition"), f = Symbol.for("react.client.reference");
    T.ContextConsumer = o, T.ContextProvider = l, T.Element = e, T.ForwardRef = c, T.Fragment = r, T.Lazy = _, T.Memo = m, T.Portal = t, T.Profiler = s, T.StrictMode = a, T.Suspense = u, T.SuspenseList = p, T.isContextConsumer = function(i) {
      return n(i) === o;
    }, T.isContextProvider = function(i) {
      return n(i) === l;
    }, T.isElement = function(i) {
      return typeof i == "object" && i !== null && i.$$typeof === e;
    }, T.isForwardRef = function(i) {
      return n(i) === c;
    }, T.isFragment = function(i) {
      return n(i) === r;
    }, T.isLazy = function(i) {
      return n(i) === _;
    }, T.isMemo = function(i) {
      return n(i) === m;
    }, T.isPortal = function(i) {
      return n(i) === t;
    }, T.isProfiler = function(i) {
      return n(i) === s;
    }, T.isStrictMode = function(i) {
      return n(i) === a;
    }, T.isSuspense = function(i) {
      return n(i) === u;
    }, T.isSuspenseList = function(i) {
      return n(i) === p;
    }, T.isValidElementType = function(i) {
      return typeof i == "string" || typeof i == "function" || i === r || i === s || i === a || i === u || i === p || typeof i == "object" && i !== null && (i.$$typeof === _ || i.$$typeof === m || i.$$typeof === l || i.$$typeof === o || i.$$typeof === c || i.$$typeof === f || i.getModuleId !== void 0);
    }, T.typeOf = n;
  })()), T;
}
var et;
function Zt() {
  return et || (et = 1, process.env.NODE_ENV === "production" ? Se.exports = /* @__PURE__ */ Ft() : Se.exports = /* @__PURE__ */ zt()), Se.exports;
}
var st = /* @__PURE__ */ Zt();
function ot(n) {
  const e = Rt();
  return n || e;
}
var tt = { Box: "prc-Spinner-Box-Y-ke-", SpinnerAnimation: "prc-Spinner-SpinnerAnimation-tutJZ" };
function Wt(n, e) {
  const t = z.c(8), r = Ne(Ht);
  let a;
  t[0] !== e || t[1] !== r || t[2] !== n ? (a = () => r[n] !== void 0 ? r[n] : e, t[0] = e, t[1] = r, t[2] = n, t[3] = a) : a = t[3];
  const [s, o] = C.useState(a);
  r[n] !== void 0 && s !== r[n] && o(r[n]);
  let l, c;
  return t[4] !== r || t[5] !== n ? (l = () => {
    if (r[n] !== void 0)
      return;
    const u = function(_) {
      o(_.matches);
    }, p = window.matchMedia(n);
    return p.addEventListener ? p.addEventListener("change", u) : p.addListener(u), o(p.matches), () => {
      p.addEventListener ? p.removeEventListener("change", u) : p.removeListener(u);
    };
  }, c = [r, n], t[4] = r, t[5] = n, t[6] = l, t[7] = c) : (l = t[6], c = t[7]), ie(l, c), s;
}
const Ht = /* @__PURE__ */ be({});
class $e {
  static create(e) {
    return new $e(e);
  }
  static merge(e, t) {
    const r = new $e();
    for (const [a, s] of e.flags)
      r.flags.set(a, s);
    for (const [a, s] of t.flags)
      r.flags.set(a, s);
    return r;
  }
  constructor(e = {}) {
    this.flags = /* @__PURE__ */ new Map();
    for (const [t, r] of Object.entries(e))
      this.flags.set(t, r ?? !1);
  }
  /**
   * Enable a feature flag
   */
  enable(e) {
    this.flags.set(e, !0);
  }
  /**
   * Disable a feature flag
   */
  disable(e) {
    this.flags.set(e, !1);
  }
  /**
   * Check if a feature flag is enabled
   */
  enabled(e) {
    var t;
    return (t = this.flags.get(e)) !== null && t !== void 0 ? t : !1;
  }
}
const Yt = $e.create({
  primer_react_action_list_item_as_button: !1,
  primer_react_breadcrumbs_overflow_menu: !1,
  primer_react_overlay_overflow: !1,
  primer_react_select_panel_fullscreen_on_narrow: !1,
  primer_react_select_panel_order_selected_at_top: !1,
  primer_react_select_panel_remove_active_descendant: !1,
  primer_react_spinner_synchronize_animations: !1
}), Ut = /* @__PURE__ */ be(Yt);
function qt(n) {
  const e = z.c(3), t = Ne(Ut);
  let r;
  return e[0] !== t || e[1] !== n ? (r = t.enabled(n), e[0] = t, e[1] = n, e[2] = r) : r = e[2], r;
}
var jt = { VisuallyHidden: "prc-VisuallyHidden-VisuallyHidden-Q0qSB" };
const He = (n) => {
  const e = z.c(10);
  let t, r, a;
  e[0] !== n ? ({
    className: r,
    children: t,
    ...a
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a) : (t = e[1], r = e[2], a = e[3]);
  let s;
  e[4] !== r ? (s = G(r, jt.VisuallyHidden), e[4] = r, e[5] = s) : s = e[5];
  let o;
  return e[6] !== t || e[7] !== a || e[8] !== s ? (o = /* @__PURE__ */ d("span", {
    className: s,
    ...a,
    children: t
  }), e[6] = t, e[7] = a, e[8] = s, e[9] = o) : o = e[9], o;
}, Gt = {
  small: "16px",
  medium: "32px",
  large: "64px"
};
function Le(n) {
  var e;
  const t = z.c(30);
  let r, a, s, o, l, c, u;
  t[0] !== n ? ({
    size: l,
    srText: c,
    "aria-label": r,
    className: a,
    style: o,
    delay: u,
    ...s
  } = n, t[0] = n, t[1] = r, t[2] = a, t[3] = s, t[4] = o, t[5] = l, t[6] = c, t[7] = u) : (r = t[1], a = t[2], s = t[3], o = t[4], l = t[5], c = t[6], u = t[7]);
  const p = l === void 0 ? "medium" : l, m = c === void 0 ? "Loading" : c, _ = u === void 0 ? !1 : u, S = qt("primer_react_spinner_synchronize_animations"), f = Xt(), i = Gt[p], h = m !== null && r === void 0, x = ot(), [O, q] = re(!_);
  let I, B;
  if (t[8] !== _ ? (I = () => {
    if (_) {
      const Me = setTimeout(() => {
        q(!0);
      }, 1e3);
      return () => clearTimeout(Me);
    }
  }, B = [_], t[8] = _, t[9] = I, t[10] = B) : (I = t[9], B = t[10]), ie(I, B), !O)
    return null;
  const Z = S ? f : void 0, L = (e = r) !== null && e !== void 0 ? e : void 0, D = h ? x : void 0;
  let k;
  t[11] !== a ? (k = G(a, tt.SpinnerAnimation), t[11] = a, t[12] = k) : k = t[12];
  let P, H;
  t[13] === Symbol.for("react.memo_cache_sentinel") ? (P = /* @__PURE__ */ d("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    stroke: "currentColor",
    strokeOpacity: "0.25",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke"
  }), H = /* @__PURE__ */ d("path", {
    d: "M15 8a7.002 7.002 0 00-7-7",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }), t[13] = P, t[14] = H) : (P = t[13], H = t[14]);
  let U;
  t[15] !== s || t[16] !== i || t[17] !== o || t[18] !== Z || t[19] !== L || t[20] !== D || t[21] !== k ? (U = /* @__PURE__ */ J("svg", {
    ref: Z,
    height: i,
    width: i,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": !0,
    "aria-label": L,
    "aria-labelledby": D,
    className: k,
    style: o,
    ...s,
    children: [P, H]
  }), t[15] = s, t[16] = i, t[17] = o, t[18] = Z, t[19] = L, t[20] = D, t[21] = k, t[22] = U) : U = t[22];
  let X;
  t[23] !== h || t[24] !== x || t[25] !== m ? (X = h ? /* @__PURE__ */ d(He, {
    id: x,
    children: m
  }) : null, t[23] = h, t[24] = x, t[25] = m, t[26] = X) : X = t[26];
  let de;
  return t[27] !== U || t[28] !== X ? (de = /* @__PURE__ */ J("span", {
    className: tt.Box,
    children: [U, X]
  }), t[27] = U, t[28] = X, t[29] = de) : de = t[29], de;
}
Le.displayName = "Spinner";
const K = {
  subscribers: /* @__PURE__ */ new Set(),
  value: {
    startTime: null
  },
  update(n) {
    const e = {
      startTime: n
    };
    K.value = e;
    for (const t of K.subscribers)
      t();
  },
  subscribe(n) {
    return K.subscribers.add(n), () => {
      K.subscribers.delete(n);
    };
  },
  getSnapshot() {
    return K.value;
  },
  getServerSnapshot() {
    return K.value;
  }
};
function Jt() {
  return Tt(K.subscribe, K.getSnapshot, K.getServerSnapshot);
}
function Xt() {
  const n = z.c(3), e = ue(null), t = Wt("(prefers-reduced-motion: no-preference)", !1), r = Jt();
  let a;
  return n[0] !== r || n[1] !== t ? (a = (s) => {
    if (s && e.current === null && t) {
      const l = s.getAnimations().find(Kt);
      if (l?.pause(), e.current = s.animate([{
        transform: "rotate(0deg)"
      }, {
        transform: "rotate(360deg)"
      }], {
        duration: 1e3,
        easing: "cubic-bezier(0,0,1,1)",
        iterations: 1 / 0
      }), r.startTime === null) {
        var o;
        const c = (o = l?.startTime) !== null && o !== void 0 ? o : 0;
        K.update(c), e.current.startTime = c;
      } else
        e.current.startTime = r.startTime;
    }
  }, n[0] = r, n[1] = t, n[2] = a) : a = n[2], a;
}
function Kt(n) {
  return n instanceof CSSAnimation ? n.animationName.startsWith("Spinner") && n.animationName.endsWith("rotate-keyframes") : !1;
}
const Q = {
  Less: "less",
  Equal: "equal",
  Greater: "greater"
};
var lt = (n) => {
  throw TypeError(n);
}, Ye = (n, e, t) => e.has(n) || lt("Cannot " + t), $ = (n, e, t) => (Ye(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Pe = (n, e, t) => e.has(n) ? lt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Ie = (n, e, t, r) => (Ye(n, e, "write to private field"), e.set(n, t), t), Be = (n, e, t) => (Ye(n, e, "access private method"), t), _e, w, Ce, ze, ct;
class Qt {
  constructor({ compareFn: e }) {
    Pe(this, Ce), Pe(this, _e), Pe(this, w), Ie(this, _e, e), Ie(this, w, []);
  }
  insert(e) {
    $(this, w).push(e), Be(this, Ce, ct).call(this);
  }
  pop() {
    const e = $(this, w)[0];
    return $(this, w)[$(this, w).length - 1] && ($(this, w)[0] = $(this, w)[$(this, w).length - 1], $(this, w).pop()), Be(this, Ce, ze).call(this), e;
  }
  peek() {
    return $(this, w)[0];
  }
  delete(e) {
    const t = $(this, w).indexOf(e);
    t !== -1 && (je($(this, w), t, $(this, w).length - 1), $(this, w).pop(), Be(this, Ce, ze).call(this));
  }
  clear() {
    Ie(this, w, []);
  }
  get size() {
    return $(this, w).length;
  }
}
_e = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakSet();
ze = function() {
  let n = 0;
  for (; Vt(n, $(this, w).length); ) {
    let e = Ue(n);
    if (en(n, $(this, w).length) && $(this, _e).call(this, rn($(this, w), n), nn($(this, w), n)) === Q.Less && (e = qe(n)), $(this, _e).call(this, $(this, w)[n], $(this, w)[e]) === Q.Less)
      break;
    je($(this, w), n, e), n = e;
  }
};
ct = function() {
  let n = $(this, w).length - 1;
  for (; tn(n) && $(this, _e).call(this, $(this, w)[n], an($(this, w), n)) === Q.Less; )
    je($(this, w), n, Ze(n)), n = Ze(n);
};
function Ue(n) {
  return 2 * n + 1;
}
function qe(n) {
  return 2 * n + 2;
}
function Ze(n) {
  return Math.floor((n - 1) / 2);
}
function Vt(n, e) {
  return Ue(n) < e;
}
function en(n, e) {
  return qe(n) < e;
}
function tn(n) {
  return n > 0;
}
function nn(n, e) {
  return n[Ue(e)];
}
function rn(n, e) {
  return n[qe(e)];
}
function an(n, e) {
  return n[Ze(e)];
}
function je(n, e, t) {
  const r = n[e];
  n[e] = n[t], n[t] = r;
}
var sn = Object.defineProperty, ut = (n) => {
  throw TypeError(n);
}, on = (n, e, t) => e in n ? sn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, ln = (n, e, t) => on(n, typeof e != "symbol" ? e + "" : e, t), ft = (n, e, t) => e.has(n) || ut("Cannot " + t), he = (n, e, t) => (ft(n, e, "read from private field"), t ? t.call(n) : e.get(n)), De = (n, e, t) => e.has(n) ? ut("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Fe = (n, e, t, r) => (ft(n, e, "write to private field"), e.set(n, t), t), dt, ce, Re, Te;
dt = Symbol.toStringTag;
class cn {
  constructor() {
    ln(this, dt, "Deferred"), De(this, ce), De(this, Re), De(this, Te), Fe(this, ce, new Promise((e, t) => {
      Fe(this, Re, e), Fe(this, Te, t);
    }));
  }
  then(e, t) {
    return Promise.prototype.then.apply(he(this, ce), [e, t]);
  }
  catch(e) {
    return Promise.prototype.catch.apply(he(this, ce), [e]);
  }
  finally(e) {
    return Promise.prototype.finally.apply(he(this, ce), [e]);
  }
  resolve(e) {
    he(this, Re).call(this, e);
  }
  reject(e) {
    he(this, Te).call(this, e);
  }
  getPromise() {
    return he(this, ce);
  }
}
ce = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
Te = /* @__PURE__ */ new WeakMap();
var ht = (n) => {
  throw TypeError(n);
}, Ge = (n, e, t) => e.has(n) || ht("Cannot " + t), j = (n, e, t) => (Ge(n, e, "read from private field"), t ? t.call(n) : e.get(n)), we = (n, e, t) => e.has(n) ? ht("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Y = (n, e, t, r) => (Ge(n, e, "write to private field"), e.set(n, t), t), me = (n, e, t) => (Ge(n, e, "access private method"), t), V, ne, W, ae, ve, pt;
const un = 150;
class mt extends HTMLElement {
  constructor() {
    if (super(), we(this, ae), we(this, V), we(this, ne), we(this, W), !this.shadowRoot) {
      const e = hn();
      this.attachShadow({ mode: "open" }).appendChild(e.content.cloneNode(!0));
    }
    Y(this, V, !1), Y(this, W, null), Y(this, ne, new Qt({
      compareFn: pn
    }));
  }
  /**
   * The delay in milliseconds to wait between announcements. This helps to
   * prevent announcements getting dropped if multiple are made at the same time.
   */
  get delay() {
    const e = this.getAttribute("delay");
    return e ? parseInt(e, 10) : un;
  }
  set delay(e) {
    this.setAttribute("delay", `${e}`);
  }
  /**
   * Announce a message using a live region with a corresponding politeness
   * level.
   */
  announce(e, t = {}) {
    const { delayMs: r, politeness: a = "polite" } = t, s = Date.now(), o = new cn(), l = {
      deferred: o,
      politeness: a,
      contents: e,
      scheduled: r !== void 0 ? s + r : s
    };
    return j(this, ne).insert(l), me(this, ae, ve).call(this), {
      ...o.getPromise(),
      cancel: () => {
        j(this, ne).delete(l), o.resolve();
      }
    };
  }
  /**
   * Announce a message using the text content of an element with a
   * corresponding politeness level
   */
  announceFromElement(e, t) {
    const r = fn(e);
    return r !== "" ? this.announce(r, t) : {
      ...Promise.resolve(),
      cancel: mn
    };
  }
  getMessage(e = "polite") {
    const t = this.shadowRoot?.getElementById(e);
    if (!t)
      throw new Error("Unable to find container for message");
    return t.textContent;
  }
  /**
   * Prevent pending messages from being announced by the live region.
   */
  clear() {
    j(this, W) !== null && (clearTimeout(j(this, W)), Y(this, W, null)), Y(this, V, !1), j(this, ne).clear();
  }
}
V = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakSet();
ve = function() {
  if (j(this, V))
    return;
  let n = j(this, ne).peek();
  if (!n)
    return;
  j(this, W) !== null && (clearTimeout(j(this, W)), Y(this, W, null));
  const e = Date.now();
  if (n.scheduled <= e) {
    n = j(this, ne).pop(), n && me(this, ae, pt).call(this, n), me(this, ae, ve).call(this);
    return;
  }
  const t = n.scheduled - e;
  Y(this, W, window.setTimeout(() => {
    Y(this, W, null), me(this, ae, ve).call(this);
  }, t));
};
pt = function(n) {
  Y(this, V, !0);
  const { contents: e, deferred: t, politeness: r } = n, a = this.shadowRoot?.getElementById(r);
  if (!a)
    throw Y(this, V, !1), new Error(`Unable to find container for message. Expected a container with id="${r}"`);
  a.textContent === e ? a.textContent = `${e} ` : a.textContent = e, j(this, W) !== null && clearTimeout(j(this, W)), t.resolve(), this.delay > 0 ? Y(this, W, window.setTimeout(() => {
    Y(this, W, null), Y(this, V, !1), me(this, ae, ve).call(this);
  }, this.delay)) : (Y(this, W, null), Y(this, V, !1), me(this, ae, ve).call(this));
};
function fn(n) {
  let e = "";
  return n.hasAttribute("aria-label") ? e = n.getAttribute("aria-label") : n.innerText ? e = n.innerText : n.textContent && (e = n.textContent), e ? e.trim() : "";
}
let ye = null;
const dn = `
<style>
:host {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
<div id="polite" aria-live="polite" aria-atomic="true"></div>
<div id="assertive" aria-live="assertive" aria-atomic="true"></div>
`;
function hn() {
  return ye || (ye = document.createElement("template"), ye.innerHTML = dn, ye);
}
function pn(n, e) {
  return n.politeness === e.politeness ? n.scheduled === e.scheduled ? Q.Equal : n.scheduled < e.scheduled ? Q.Less : Q.Greater : n.politeness === "assertive" && e.politeness !== "assertive" ? Q.Less : n.politeness !== "assertive" && e.politeness === "assertive" ? Q.Greater : Q.Equal;
}
function mn() {
}
customElements.get("live-region") || customElements.define("live-region", mt);
function vn(n, e = {}) {
  let t = _n(e.from);
  if (!t) {
    if (t = document.createElement("live-region"), e.appendTo ? e.appendTo.appendChild(t) : vt(e.from).appendChild(t), process.env.NODE_ENV === "test")
      return t.announceFromElement(n, e);
    let r = !1, a = () => {
      r = !0;
    };
    return {
      ...gn(yn).then(() => {
        if (!r) {
          const o = t.announceFromElement(n, e);
          return a = o.cancel, o;
        }
      }),
      cancel: () => {
        a();
      }
    };
  }
  return t.announceFromElement(n, e);
}
function _n(n) {
  let e = null;
  return e = n ? En(n) : null, e !== null || (e = vt(n).querySelector("live-region"), e !== null) ? e : null;
}
function En(n) {
  const e = n.closest("dialog");
  let t = n;
  for (; (t = t.parentElement) && !(e && !e.contains(t)); )
    for (const r of t.childNodes)
      if (r instanceof mt)
        return r;
  return null;
}
function vt(n) {
  let e = document.body;
  if (n) {
    const t = n.closest("dialog");
    t && (e = t);
  }
  return e;
}
const yn = 150;
function gn(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
function Cn(n) {
  const e = z.c(2), t = ue(n), r = ue(!1);
  let a, s;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
    r.current !== !0 && (r.current = !0, t.current());
  }, s = [], e[0] = a, e[1] = s) : (a = e[0], s = e[1]), ie(a, s);
}
function bn(n) {
  const e = z.c(4), t = ue(n);
  let r, a;
  e[0] !== n ? (r = () => {
    t.current = n;
  }, a = [n], e[0] = n, e[1] = r, e[2] = a) : (r = e[1], a = e[2]), ie(r, a);
  let s;
  return e[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (...o) => {
    const l = o;
    return t.current(...l);
  }, e[3] = s) : s = e[3], s;
}
function Sn(n) {
  const e = z.c(25);
  let t, r, a, s, o, l, c;
  e[0] !== n ? ({
    as: s,
    announceOnShow: o,
    children: t,
    delayMs: r,
    hidden: l,
    politeness: c,
    ...a
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a, e[4] = s, e[5] = o, e[6] = l, e[7] = c) : (t = e[1], r = e[2], a = e[3], s = e[4], o = e[5], l = e[6], c = e[7]);
  const u = s === void 0 ? "div" : s, p = o === void 0 ? !0 : o, m = l === void 0 ? !1 : l, _ = c === void 0 ? "polite" : c, S = ue(null), [f, i] = re(null), h = ue(null);
  let x;
  e[8] !== r || e[9] !== m || e[10] !== _ || e[11] !== f ? (x = () => {
    var k;
    const {
      current: P
    } = S;
    if (!P || m)
      return;
    const H = window.getComputedStyle(P);
    if (H.display === "none" || H.visibility === "hidden")
      return;
    const U = wn(P);
    U !== f && ((k = h.current) === null || k === void 0 || k.cancel(), h.current = vn(P, _ === "assertive" ? {
      politeness: _
    } : {
      politeness: _,
      delayMs: r
    }), i(U));
  }, e[8] = r, e[9] = m, e[10] = _, e[11] = f, e[12] = x) : x = e[12];
  const O = bn(x);
  let q;
  e[13] !== O || e[14] !== p ? (q = () => {
    p && O();
  }, e[13] = O, e[14] = p, e[15] = q) : q = e[15], Cn(q);
  let I, B;
  e[16] !== O ? (I = () => {
    const {
      current: k
    } = S;
    if (k === null)
      return;
    const P = new MutationObserver(() => {
      O();
    });
    return P.observe(k, {
      subtree: !0,
      childList: !0,
      characterData: !0
    }), () => {
      P.disconnect();
    };
  }, B = [O], e[16] = O, e[17] = I, e[18] = B) : (I = e[17], B = e[18]), ie(I, B);
  let Z, L;
  e[19] === Symbol.for("react.memo_cache_sentinel") ? (Z = () => () => {
    h.current !== null && (h.current.cancel(), h.current = null);
  }, L = [], e[19] = Z, e[20] = L) : (Z = e[19], L = e[20]), ie(Z, L);
  let D;
  return e[21] !== u || e[22] !== t || e[23] !== a ? (D = /* @__PURE__ */ d(u, {
    ...a,
    ref: S,
    children: t
  }), e[21] = u, e[22] = t, e[23] = a, e[24] = D) : D = e[24], D;
}
function wn(n) {
  let e = "";
  return n.hasAttribute("aria-label") ? e = n.getAttribute("aria-label") : n.textContent && (e = n.textContent), e ? e.trim() : "";
}
function Rn(n) {
  var e;
  const t = z.c(3), r = (e = n.announceOnShow) !== null && e !== void 0 ? e : !1;
  let a;
  return t[0] !== n || t[1] !== r ? (a = /* @__PURE__ */ d(Sn, {
    ...n,
    announceOnShow: r,
    politeness: "polite"
  }), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
}
var Tn = { CounterLabel: "prc-CounterLabel-CounterLabel-X-kRU" };
const _t = /* @__PURE__ */ xe((n, e) => {
  const t = z.c(21);
  let r, a, s, o, l;
  t[0] !== n ? ({
    variant: l,
    scheme: o,
    className: a,
    children: r,
    ...s
  } = n, t[0] = n, t[1] = r, t[2] = a, t[3] = s, t[4] = o, t[5] = l) : (r = t[1], a = t[2], s = t[3], o = t[4], l = t[5]);
  let c;
  t[6] !== r ? (c = /* @__PURE__ */ J(He, {
    children: [" (", r, ")"]
  }), t[6] = r, t[7] = c) : c = t[7];
  const u = c, p = l || o || "secondary";
  let m;
  t[8] !== e || t[9] !== p || t[10] !== s ? (m = {
    ref: e,
    "aria-hidden": "true",
    "data-variant": p,
    ...s
  }, t[8] = e, t[9] = p, t[10] = s, t[11] = m) : m = t[11];
  const _ = m;
  let S;
  t[12] !== a ? (S = G(a, Tn.CounterLabel), t[12] = a, t[13] = S) : S = t[13];
  let f;
  t[14] !== r || t[15] !== _ || t[16] !== S ? (f = /* @__PURE__ */ d("span", {
    ..._,
    className: S,
    children: r
  }), t[14] = r, t[15] = _, t[16] = S, t[17] = f) : f = t[17];
  let i;
  return t[18] !== u || t[19] !== f ? (i = /* @__PURE__ */ J(Ae, {
    children: [f, u]
  }), t[18] = u, t[19] = f, t[20] = i) : i = t[20], i;
});
_t.displayName = "CounterLabel";
const pe = (n, e, t, r) => /* @__PURE__ */ d("span", {
  "data-component": t,
  className: G(!r && te.Visual, e ? te.LoadingSpinner : te.VisualWrap),
  children: e ? /* @__PURE__ */ d(Le, {
    size: "small"
  }) : st.isElement(n) ? n : /* @__PURE__ */ d(n, {})
});
pe.displayName = "renderModuleVisual";
const $n = /* @__PURE__ */ xe(({
  children: n,
  as: e = "button",
  ...t
}, r) => {
  const {
    leadingVisual: a,
    trailingVisual: s,
    trailingAction: o,
    ["aria-describedby"]: l,
    ["aria-labelledby"]: c,
    count: u,
    icon: p,
    id: m,
    variant: _ = "default",
    size: S = "medium",
    alignContent: f = "center",
    block: i = !1,
    loading: h,
    loadingAnnouncement: x = "Loading",
    inactive: O,
    onClick: q,
    labelWrap: I,
    className: B,
    ...Z
  } = t, L = C.useRef(null);
  it(r, L);
  const D = ot(m), k = `${D}-loading-announcement`;
  return process.env.NODE_ENV !== "production" && C.useEffect(() => {
    L.current && !(L.current instanceof HTMLButtonElement) && !(L.current instanceof HTMLAnchorElement) && L.current.tagName !== "SUMMARY" && console.warn("This component should be an instanceof a semantic button or anchor");
  }, [L]), /* @__PURE__ */ J(
    Dt,
    {
      if: typeof h < "u",
      className: i ? te.ConditionalWrapper : void 0,
      "data-loading-wrapper": !0,
      children: [/* @__PURE__ */ d(e, {
        "aria-disabled": h ? !0 : void 0,
        ...Z,
        // @ts-ignore temporary disable as we migrate to css modules, until we remove PolymorphicForwardRefComponent
        ref: L,
        className: G(te.ButtonBase, B),
        "data-block": i ? "block" : null,
        "data-inactive": O ? !0 : void 0,
        "data-loading": !!h,
        "data-no-visuals": !a && !s && !o ? !0 : void 0,
        "data-size": S,
        "data-variant": _,
        "data-label-wrap": I,
        "data-has-count": u !== void 0 ? !0 : void 0,
        "aria-describedby": [k, l].filter((P) => !!P).join(" "),
        "aria-labelledby": h ? [`${D}-label`, c].filter((P) => !!P).join(" ") : c,
        id: m,
        onClick: h ? void 0 : q,
        children: p ? h ? /* @__PURE__ */ d(Le, {
          size: "small"
        }) : st.isElement(p) ? p : /* @__PURE__ */ d(p, {}) : /* @__PURE__ */ J(Ae, {
          children: [
            /* @__PURE__ */ J("span", {
              "data-component": "buttonContent",
              "data-align": f,
              className: te.ButtonContent,
              children: [
                /* If there are no leading/trailing visuals/actions to replace with a loading spinner,
                     render a loading spiner in place of the button content. */
                h && !a && !s && !o && u === void 0 && pe(Le, h, "loadingSpinner", !1),
                /* Render a leading visual unless the button is in a loading state.
                     Then replace the leading visual with a loading spinner. */
                a && pe(a, !!h, "leadingVisual", !1),
                n && /* @__PURE__ */ d("span", {
                  "data-component": "text",
                  className: te.Label,
                  id: h ? `${D}-label` : void 0,
                  children: n
                }),
                /* If there is a count, render a counter label unless there is a trailing visual.
                     Then render the counter label as a trailing visual.
                     Replace the counter label or the trailing visual with a loading spinner if:
                     - the button is in a loading state
                     - there is no leading visual to replace with a loading spinner
                  */
                u !== void 0 && !s ? pe(() => /* @__PURE__ */ d(_t, {
                  className: te.CounterLabel,
                  "data-component": "ButtonCounter",
                  children: u
                }), !!h && !a, "trailingVisual", !0) : s ? pe(s, !!h && !a, "trailingVisual", !1) : null
              ]
            }),
            /* If there is a trailing action, render it unless the button is in a loading state
                 and there is no leading or trailing visual to replace with a loading spinner. */
            o && pe(o, !!h && !a && !s, "trailingAction", !1)
          ]
        })
      }), h && /* @__PURE__ */ d(He, {
        children: /* @__PURE__ */ d(Rn, {
          id: k,
          children: x
        })
      })]
    }
  );
}), Je = /* @__PURE__ */ xe(({
  children: n,
  ...e
}, t) => /* @__PURE__ */ d($n, {
  ref: t,
  as: "button",
  type: "button",
  ...e,
  children: n
}));
Je.displayName = "Button";
Je.__SLOT__ = Symbol("Button");
var Ln = { Link: "prc-Link-Link-9ZwDx" };
const An = xe, Et = (n, e) => {
  const {
    as: t = "a",
    className: r,
    inline: a,
    hoverColor: s,
    ...o
  } = n, l = C.useRef(null);
  return it(e, l), process.env.NODE_ENV !== "production" && ie(() => {
    l.current && !(l.current instanceof HTMLButtonElement) && !(l.current instanceof HTMLAnchorElement) && console.error("Error: Found `Link` component that renders an inaccessible element", l.current, "Please ensure `Link` always renders as <a> or <button>");
  }, [l]), /* @__PURE__ */ d(t, {
    className: G(r, Ln.Link),
    "data-muted": o.muted,
    "data-inline": a,
    "data-hover-color": s,
    ...o,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: l
  });
};
Et.displayName = "UnwrappedLink";
const Nn = An(Et), xn = Object.assign(Nn, {
  displayName: "Link"
});
function Mn(n) {
  const e = z.c(25);
  let t, r, a, s, o, l, c;
  e[0] !== n ? ({
    border: t,
    children: r,
    narrow: s,
    spacious: l,
    className: a,
    size: c,
    ...o
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a, e[4] = s, e[5] = o, e[6] = l, e[7] = c) : (t = e[1], r = e[2], a = e[3], s = e[4], o = e[5], l = e[6], c = e[7]);
  const u = c === void 0 ? "medium" : c;
  let p;
  e[8] !== u ? (p = {
    size: u
  }, e[8] = u, e[9] = p) : p = e[9];
  const m = p;
  let _;
  e[10] !== a ? (_ = G(fe.Blankslate, a), e[10] = a, e[11] = _) : _ = e[11];
  const S = t ? "" : void 0, f = s ? "" : void 0, i = l ? "" : void 0;
  let h;
  e[12] !== r || e[13] !== u || e[14] !== _ || e[15] !== S || e[16] !== f || e[17] !== i ? (h = /* @__PURE__ */ d("div", {
    className: _,
    "data-border": S,
    "data-narrow": f,
    "data-spacious": i,
    "data-size": u,
    children: r
  }), e[12] = r, e[13] = u, e[14] = _, e[15] = S, e[16] = f, e[17] = i, e[18] = h) : h = e[18];
  let x;
  e[19] !== o || e[20] !== h ? (x = /* @__PURE__ */ d("div", {
    ...o,
    className: fe.Container,
    children: h
  }), e[19] = o, e[20] = h, e[21] = x) : x = e[21];
  let O;
  return e[22] !== x || e[23] !== m ? (O = /* @__PURE__ */ d(Bt, {
    value: m,
    children: x
  }), e[22] = x, e[23] = m, e[24] = O) : O = e[24], O;
}
function On(n) {
  const e = z.c(10);
  let t, r, a;
  e[0] !== n ? ({
    children: t,
    className: r,
    ...a
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a) : (t = e[1], r = e[2], a = e[3]);
  let s;
  e[4] !== r ? (s = G("Blankslate-Visual", fe.Visual, r), e[4] = r, e[5] = s) : s = e[5];
  let o;
  return e[6] !== t || e[7] !== a || e[8] !== s ? (o = /* @__PURE__ */ d("span", {
    ...a,
    className: s,
    children: t
  }), e[6] = t, e[7] = a, e[8] = s, e[9] = o) : o = e[9], o;
}
function kn(n) {
  const e = z.c(12);
  let t, r, a, s;
  e[0] !== n ? ({
    as: s,
    children: t,
    className: r,
    ...a
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a, e[4] = s) : (t = e[1], r = e[2], a = e[3], s = e[4]);
  const o = s === void 0 ? "h2" : s;
  let l;
  e[5] !== r ? (l = G("Blankslate-Heading", fe.Heading, r), e[5] = r, e[6] = l) : l = e[6];
  let c;
  return e[7] !== o || e[8] !== t || e[9] !== a || e[10] !== l ? (c = /* @__PURE__ */ d(o, {
    ...a,
    className: l,
    children: t
  }), e[7] = o, e[8] = t, e[9] = a, e[10] = l, e[11] = c) : c = e[11], c;
}
function Pn(n) {
  const e = z.c(10);
  let t, r, a;
  e[0] !== n ? ({
    children: t,
    className: r,
    ...a
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a) : (t = e[1], r = e[2], a = e[3]);
  let s;
  e[4] !== r ? (s = G("Blankslate-Description", fe.Description, r), e[4] = r, e[5] = s) : s = e[5];
  let o;
  return e[6] !== t || e[7] !== a || e[8] !== s ? (o = /* @__PURE__ */ d("p", {
    ...a,
    className: s,
    children: t
  }), e[6] = t, e[7] = a, e[8] = s, e[9] = o) : o = e[9], o;
}
function In(n) {
  const e = z.c(11);
  let t, r, a;
  e[0] !== n ? ({
    children: t,
    href: r,
    ...a
  } = n, e[0] = n, e[1] = t, e[2] = r, e[3] = a) : (t = e[1], r = e[2], a = e[3]);
  const {
    size: s
  } = It();
  let o;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (o = G("Blankslate-Action", fe.Action), e[4] = o) : o = e[4];
  const l = r ? "a" : "button", c = s === "small" ? "small" : void 0;
  let u;
  return e[5] !== t || e[6] !== r || e[7] !== a || e[8] !== l || e[9] !== c ? (u = /* @__PURE__ */ d("div", {
    className: o,
    children: /* @__PURE__ */ d(Je, {
      ...a,
      as: l,
      href: r,
      variant: "primary",
      size: c,
      children: t
    })
  }), e[5] = t, e[6] = r, e[7] = a, e[8] = l, e[9] = c, e[10] = u) : u = e[10], u;
}
function Bn(n) {
  const e = z.c(4), {
    children: t,
    href: r
  } = n;
  let a;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = G("Blankslate-Action", fe.Action), e[0] = a) : a = e[0];
  let s;
  return e[1] !== t || e[2] !== r ? (s = /* @__PURE__ */ d("div", {
    className: a,
    children: /* @__PURE__ */ d(xn, {
      href: r,
      children: t
    })
  }), e[1] = t, e[2] = r, e[3] = s) : s = e[3], s;
}
const ge = Object.assign(Mn, {
  Visual: On,
  Heading: kn,
  Description: Pn,
  PrimaryAction: In,
  SecondaryAction: Bn
});
function nt(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Dn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nt(Object(t), !0).forEach(function(r) {
      Fn(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : nt(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Fn(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function We() {
  return We = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, We.apply(this, arguments);
}
function zn(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), a, s;
  for (s = 0; s < r.length; s++)
    a = r[s], !(e.indexOf(a) >= 0) && (t[a] = n[a]);
  return t;
}
function Zn(n, e) {
  if (n == null) return {};
  var t = zn(n, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (a = 0; a < s.length; a++)
      r = s[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
var Wn = ["aria-label", "aria-labelledby", "tabIndex", "className", "fill", "size", "verticalAlign", "id", "title", "style"], Hn = {
  small: 16,
  medium: 32,
  large: 64
};
function se(n, e, t) {
  var r = t(), a = Object.keys(r), s = /* @__PURE__ */ C.forwardRef(function(o, l) {
    var c = o["aria-label"], u = o["aria-labelledby"], p = o.tabIndex, m = o.className, _ = m === void 0 ? "" : m, S = o.fill, f = S === void 0 ? "currentColor" : S, i = o.size, h = i === void 0 ? 16 : i, x = o.verticalAlign, O = x === void 0 ? "text-bottom" : x, q = o.id, I = o.title, B = o.style, Z = Zn(o, Wn), L = Hn[h] || h, D = Yn(a, L), k = r[D].width, P = L * (k / D), H = r[D].path, U = c || u, X = U ? "img" : void 0;
    return /* @__PURE__ */ C.createElement("svg", We({
      ref: l
    }, Z, {
      "aria-hidden": U ? void 0 : "true",
      tabIndex: p,
      focusable: p >= 0 ? "true" : "false",
      "aria-label": c,
      "aria-labelledby": u,
      className: "".concat(e, " ").concat(_).trim(),
      role: X,
      viewBox: "0 0 ".concat(k, " ").concat(D),
      width: P,
      height: L,
      fill: f,
      id: q,
      display: "inline-block",
      overflow: "visible",
      style: Dn({
        verticalAlign: O
      }, B)
    }), I ? /* @__PURE__ */ C.createElement("title", null, I) : null, H);
  });
  return s.displayName = n, s;
}
function Yn(n, e) {
  return n.map(function(t) {
    return parseInt(t, 10);
  }).reduce(function(t, r) {
    return r <= e ? r : t;
  }, n[0]);
}
var sr = /* @__PURE__ */ se("ChevronLeftIcon", "octicon octicon-chevron-left", function() {
  return {
    12: {
      width: 12,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M3.587 6.025c0 .2.1.4.2.5l3.3 3.3c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1l-2.7-2.7 2.7-2.7c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-3.2 3.2c-.2.2-.3.4-.3.6Z"
      })
    },
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"
      })
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"
      })
    }
  };
}), or = /* @__PURE__ */ se("ChevronRightIcon", "octicon octicon-chevron-right", function() {
  return {
    12: {
      width: 12,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"
      })
    },
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
      })
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"
      })
    }
  };
}), Un = /* @__PURE__ */ se("SearchIcon", "octicon octicon-search", function() {
  return {
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
      })
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"
      })
    }
  };
}), lr = /* @__PURE__ */ se("SortAscIcon", "octicon octicon-sort-asc", function() {
  return {
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "m12.927 2.573 3 3A.25.25 0 0 1 15.75 6H13.5v6.75a.75.75 0 0 1-1.5 0V6H9.75a.25.25 0 0 1-.177-.427l3-3a.25.25 0 0 1 .354 0ZM0 12.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8.25Zm0-4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.25Z"
      })
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M18.5 17.25a.75.75 0 0 1-1.5 0V7.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18.5 7.56v9.69Zm-15.75.25a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5h-9.5Zm0-5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5h-5.5Zm0-5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5h-3.5Z"
      })
    }
  };
}), cr = /* @__PURE__ */ se("SortDescIcon", "octicon octicon-sort-desc", function() {
  return {
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M0 4.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.25Zm0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8.25Zm0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75ZM13.5 10h2.25a.25.25 0 0 1 .177.427l-3 3a.25.25 0 0 1-.354 0l-3-3A.25.25 0 0 1 9.75 10H12V3.75a.75.75 0 0 1 1.5 0V10Z"
      })
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M18.5 16.44V6.75a.75.75 0 0 0-1.5 0v9.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22ZM2 7.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 7.25Zm0 5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
      })
    }
  };
}), qn = /* @__PURE__ */ se("UploadIcon", "octicon octicon-upload", function() {
  return {
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("path", {
        d: "M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"
      }), /* @__PURE__ */ C.createElement("path", {
        d: "M11.78 4.72a.749.749 0 1 1-1.06 1.06L8.75 3.811V9.5a.75.75 0 0 1-1.5 0V3.811L5.28 5.78a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0l3.25 3.25Z"
      }))
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("path", {
        d: "M4 20.25V18a.75.75 0 0 1 1.5 0v2.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V18a.75.75 0 0 1 1.5 0v2.25A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25Z"
      }), /* @__PURE__ */ C.createElement("path", {
        d: "M5.22 9.53a.749.749 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 1 1-1.06 1.06l-4.97-4.969V16.75a.75.75 0 0 1-1.5 0V4.561L6.28 9.53a.749.749 0 0 1-1.06 0Z"
      }))
    }
  };
}), ur = /* @__PURE__ */ se("XIcon", "octicon octicon-x", function() {
  return {
    12: {
      width: 12,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939 8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6 9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061 3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6 2.22 3.28a.749.749 0 0 1 0-1.06Z"
      })
    },
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
      })
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"
      })
    }
  };
}), fr = /* @__PURE__ */ se("XCircleIcon", "octicon octicon-x-circle", function() {
  return {
    16: {
      width: 16,
      path: /* @__PURE__ */ C.createElement("path", {
        d: "M2.344 2.343h-.001a8 8 0 0 1 11.314 11.314A8.002 8.002 0 0 1 .234 10.089a8 8 0 0 1 2.11-7.746Zm1.06 10.253a6.5 6.5 0 1 0 9.108-9.275 6.5 6.5 0 0 0-9.108 9.275ZM6.03 4.97 8 6.94l1.97-1.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-1.97 1.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L6.94 8 4.97 6.03a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018Z"
      })
    },
    24: {
      width: 24,
      path: /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("path", {
        d: "M9.036 7.976a.75.75 0 0 0-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 1 0 1.06 1.06L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.75.75 0 1 0-1.06-1.06L12 10.939 9.036 7.976Z"
      }), /* @__PURE__ */ C.createElement("path", {
        d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"
      }))
    }
  };
});
const jn = be(void 0), yt = be(void 0), dr = () => {
  const n = Ne(yt);
  if (!n)
    throw new Error("useSortCacheContext must be used within a SortCacheProvider");
  return n;
}, Gn = ({ children: n }) => {
  const [e, t] = re({}), r = (a, s) => {
    t((o) => ({ ...o, [a]: s }));
  };
  return /* @__PURE__ */ d(jn.Provider, { value: { files: e, setFile: r }, children: n });
}, Jn = ({ children: n }) => {
  const [e, t] = re([]);
  return /* @__PURE__ */ d(yt.Provider, { value: { cache: e, setCache: t }, children: n });
}, Xn = $t(() => import("./index-CMgrBNKi.js").then((n) => n.i));
function Kn({ error: n, clearError: e }) {
  return /* @__PURE__ */ d(
    xt,
    {
      "aria-label": "Error",
      title: "Error",
      description: n,
      variant: "critical",
      onDismiss: e
    }
  );
}
const Qn = async () => (await import("./arc-ro-crate-metadata-Dm8jqDKx.js")).default;
function Vn({ handleClickExampleData: n, setJsonString: e }) {
  const t = ue(null), r = async (s) => {
    s.preventDefault(), t.current?.click();
  };
  return /* @__PURE__ */ J(Ae, { children: [
    /* @__PURE__ */ d("input", { type: "file", ref: t, style: { display: "none" }, accept: ".json,application/json", onChange: async (s) => {
      const o = s.target.files?.[0];
      if (o) {
        const l = await o.text();
        e(l);
      }
    } }),
    /* @__PURE__ */ J(ge, { spacious: !0, children: [
      /* @__PURE__ */ d(ge.Visual, { children: /* @__PURE__ */ d(Un, { size: 32 }) }),
      /* @__PURE__ */ d(ge.Heading, { children: "Welcome to the ARC web viewer" }),
      /* @__PURE__ */ d(ge.Description, { children: "This viewer allows you to explore and visualize your ARC metadata. Currently no data is loaded." }),
      /* @__PURE__ */ d(ge.PrimaryAction, { onClick: r, children: /* @__PURE__ */ J(Mt, { direction: "horizontal", align: "center", children: [
        /* @__PURE__ */ d(qn, { size: 16 }),
        "Upload ROC-JSON"
      ] }) }),
      /* @__PURE__ */ d(Ot, { onClick: n, variant: "link", children: "Load example data" })
    ] })
  ] });
}
Nt.use({
  renderer: {
    code: function(n) {
      return n.lang == "mermaid" ? `<pre class="mermaid">${n.text}</pre>` : `<pre>${n.text}</pre>`;
    }
  }
});
const er = async () => (await import("./README-CYdtXErU.js")).default;
function tr() {
  return /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }, children: /* @__PURE__ */ d(kt, { size: "large" }) });
}
function hr({ jsonString: n, readmefetch: e, licensefetch: t }) {
  const [r, a] = re(null), [s, o] = re(!0), [l, c] = re(null), [u, p] = re(!1);
  ie(() => {
    (async () => {
      if (n)
        try {
          o(!0);
          const f = await n();
          a(f);
        } catch (f) {
          console.error("Error fetching JSON:", f), c("Failed to load JSON data.");
        } finally {
          o(!1);
        }
      if (window.arcwebview && window.arcwebview.getROCJson)
        try {
          o(!0);
          const f = await window.arcwebview.getROCJson();
          a(f);
        } catch (f) {
          console.error("Error fetching JSON:", f), c("Failed to load JSON data.");
        } finally {
          o(!1);
        }
      else
        o(!1);
    })();
  }, [n]);
  const m = Lt(() => {
    a(null), c(null), p(!1), c(null), o(!1);
  }, []);
  return /* @__PURE__ */ d(Gn, { children: /* @__PURE__ */ J(Jn, { children: [
    l && /* @__PURE__ */ d(Kn, { error: l, clearError: () => c(null) }),
    s || !r ? /* @__PURE__ */ d(Vn, { handleClickExampleData: async () => {
      const S = await Qn();
      a(S), p(!0);
    }, setJsonString: a }) : /* @__PURE__ */ d(At, { fallback: /* @__PURE__ */ d(tr, {}), children: /* @__PURE__ */ d(Xn, { jsonString: r, readmefetch: u ? er : e, licensefetch: t, clearJsonCallback: m }) })
  ] }) });
}
export {
  Rn as A,
  $n as B,
  sr as C,
  jn as F,
  lr as S,
  He as V,
  ur as X,
  ot as a,
  te as b,
  G as c,
  z as d,
  Je as e,
  An as f,
  cr as g,
  or as h,
  _t as i,
  dr as j,
  fr as k,
  hr as l,
  st as r,
  it as u
};
