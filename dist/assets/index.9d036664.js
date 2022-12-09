const ac = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
};
ac();
var ae = { exports: {} },
  I = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Ul = Object.getOwnPropertySymbols,
  cc = Object.prototype.hasOwnProperty,
  fc = Object.prototype.propertyIsEnumerable;
function dc(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function pc() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var as = pc()
  ? Object.assign
  : function (e, t) {
      for (var n, r = dc(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var l in n) cc.call(n, l) && (r[l] = n[l]);
        if (Ul) {
          o = Ul(n);
          for (var u = 0; u < o.length; u++)
            fc.call(n, o[u]) && (r[o[u]] = n[o[u]]);
        }
      }
      return r;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Di = as,
  Jt = 60103,
  cs = 60106;
I.Fragment = 60107;
I.StrictMode = 60108;
I.Profiler = 60114;
var fs = 60109,
  ds = 60110,
  ps = 60112;
I.Suspense = 60113;
var hs = 60115,
  ms = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var Se = Symbol.for;
  (Jt = Se("react.element")),
    (cs = Se("react.portal")),
    (I.Fragment = Se("react.fragment")),
    (I.StrictMode = Se("react.strict_mode")),
    (I.Profiler = Se("react.profiler")),
    (fs = Se("react.provider")),
    (ds = Se("react.context")),
    (ps = Se("react.forward_ref")),
    (I.Suspense = Se("react.suspense")),
    (hs = Se("react.memo")),
    (ms = Se("react.lazy"));
}
var Vl = typeof Symbol == "function" && Symbol.iterator;
function hc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vl && e[Vl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function bn(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ys = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gs = {};
function Zt(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gs),
    (this.updater = n || ys);
}
Zt.prototype.isReactComponent = {};
Zt.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(bn(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vs() {}
vs.prototype = Zt.prototype;
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gs),
    (this.updater = n || ys);
}
var Vi = (Ui.prototype = new vs());
Vi.constructor = Ui;
Di(Vi, Zt.prototype);
Vi.isPureReactComponent = !0;
var Bi = { current: null },
  ws = Object.prototype.hasOwnProperty,
  Ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function ks(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ws.call(t, r) && !Ss.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: Jt,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Bi.current,
  };
}
function mc(e, t) {
  return {
    $$typeof: Jt,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jt;
}
function yc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bl = /\/+/g;
function xo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yc("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jt:
          case cs:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + xo(l, 0) : r),
      Array.isArray(o)
        ? ((n = ""),
          e != null && (n = e.replace(Bl, "$&/") + "/"),
          kr(o, t, n, "", function (d) {
            return d;
          }))
        : o != null &&
          (Qi(o) &&
            (o = mc(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Bl, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Array.isArray(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + xo(i, u);
      l += kr(i, t, n, s, o);
    }
  else if (((s = hc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xo(i, u++)), (l += kr(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = "" + e),
      Error(
        bn(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return l;
}
function ur(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    kr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 &&
            ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var Es = { current: null };
function $e() {
  var e = Es.current;
  if (e === null) throw Error(bn(321));
  return e;
}
var vc = {
  ReactCurrentDispatcher: Es,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Bi,
  IsSomeRendererActing: { current: !1 },
  assign: Di,
};
I.Children = {
  map: ur,
  forEach: function (e, t, n) {
    ur(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ur(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ur(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qi(e)) throw Error(bn(143));
    return e;
  },
};
I.Component = Zt;
I.PureComponent = Ui;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vc;
I.cloneElement = function (e, t, n) {
  if (e == null) throw Error(bn(267, e));
  var r = Di({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Bi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ws.call(t, s) &&
        !Ss.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Jt, type: e.type, key: o, ref: i, props: r, _owner: l };
};
I.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: ds,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: fs, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = ks;
I.createFactory = function (e) {
  var t = ks.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: ps, render: e };
};
I.isValidElement = Qi;
I.lazy = function (e) {
  return { $$typeof: ms, _payload: { _status: -1, _result: e }, _init: gc };
};
I.memo = function (e, t) {
  return { $$typeof: hs, type: e, compare: t === void 0 ? null : t };
};
I.useCallback = function (e, t) {
  return $e().useCallback(e, t);
};
I.useContext = function (e, t) {
  return $e().useContext(e, t);
};
I.useDebugValue = function () {};
I.useEffect = function (e, t) {
  return $e().useEffect(e, t);
};
I.useImperativeHandle = function (e, t, n) {
  return $e().useImperativeHandle(e, t, n);
};
I.useLayoutEffect = function (e, t) {
  return $e().useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return $e().useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return $e().useReducer(e, t, n);
};
I.useRef = function (e) {
  return $e().useRef(e);
};
I.useState = function (e) {
  return $e().useState(e);
};
I.version = "17.0.2";
ae.exports = I;
var Cs = ae.exports,
  xs = { exports: {} },
  we = {},
  _s = { exports: {} },
  Ps = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, o;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  if (typeof window == "undefined" || typeof MessageChannel != "function") {
    var s = null,
      d = null,
      g = function () {
        if (s !== null)
          try {
            var S = e.unstable_now();
            s(!0, S), (s = null);
          } catch (M) {
            throw (setTimeout(g, 0), M);
          }
      };
    (t = function (S) {
      s !== null ? setTimeout(t, 0, S) : ((s = S), setTimeout(g, 0));
    }),
      (n = function (S, M) {
        d = setTimeout(S, M);
      }),
      (r = function () {
        clearTimeout(d);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var _ = window.setTimeout,
      p = window.clearTimeout;
    if (typeof console != "undefined") {
      var w = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof w != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var C = !1,
      E = null,
      f = -1,
      a = 5,
      c = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= c;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (S) {
        0 > S || 125 < S
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (a = 0 < S ? Math.floor(1e3 / S) : 5);
      });
    var h = new MessageChannel(),
      m = h.port2;
    (h.port1.onmessage = function () {
      if (E !== null) {
        var S = e.unstable_now();
        c = S + a;
        try {
          E(!0, S) ? m.postMessage(null) : ((C = !1), (E = null));
        } catch (M) {
          throw (m.postMessage(null), M);
        }
      } else C = !1;
    }),
      (t = function (S) {
        (E = S), C || ((C = !0), m.postMessage(null));
      }),
      (n = function (S, M) {
        f = _(function () {
          S(e.unstable_now());
        }, M);
      }),
      (r = function () {
        p(f), (f = -1);
      });
  }
  function T(S, M) {
    var O = S.length;
    S.push(M);
    e: for (;;) {
      var D = (O - 1) >>> 1,
        W = S[D];
      if (W !== void 0 && 0 < R(W, M)) (S[D] = M), (S[O] = W), (O = D);
      else break e;
    }
  }
  function v(S) {
    return (S = S[0]), S === void 0 ? null : S;
  }
  function P(S) {
    var M = S[0];
    if (M !== void 0) {
      var O = S.pop();
      if (O !== M) {
        S[0] = O;
        e: for (var D = 0, W = S.length; D < W; ) {
          var ot = 2 * (D + 1) - 1,
            it = S[ot],
            ln = ot + 1,
            St = S[ln];
          if (it !== void 0 && 0 > R(it, O))
            St !== void 0 && 0 > R(St, it)
              ? ((S[D] = St), (S[ln] = O), (D = ln))
              : ((S[D] = it), (S[ot] = O), (D = ot));
          else if (St !== void 0 && 0 > R(St, O))
            (S[D] = St), (S[ln] = O), (D = ln);
          else break e;
        }
      }
      return M;
    }
    return null;
  }
  function R(S, M) {
    var O = S.sortIndex - M.sortIndex;
    return O !== 0 ? O : S.id - M.id;
  }
  var x = [],
    q = [],
    So = 1,
    fe = null,
    G = 3,
    lr = !1,
    rt = !1,
    on = !1;
  function ko(S) {
    for (var M = v(q); M !== null; ) {
      if (M.callback === null) P(q);
      else if (M.startTime <= S)
        P(q), (M.sortIndex = M.expirationTime), T(x, M);
      else break;
      M = v(q);
    }
  }
  function Eo(S) {
    if (((on = !1), ko(S), !rt))
      if (v(x) !== null) (rt = !0), t(Co);
      else {
        var M = v(q);
        M !== null && n(Eo, M.startTime - S);
      }
  }
  function Co(S, M) {
    (rt = !1), on && ((on = !1), r()), (lr = !0);
    var O = G;
    try {
      for (
        ko(M), fe = v(x);
        fe !== null &&
        (!(fe.expirationTime > M) || (S && !e.unstable_shouldYield()));

      ) {
        var D = fe.callback;
        if (typeof D == "function") {
          (fe.callback = null), (G = fe.priorityLevel);
          var W = D(fe.expirationTime <= M);
          (M = e.unstable_now()),
            typeof W == "function" ? (fe.callback = W) : fe === v(x) && P(x),
            ko(M);
        } else P(x);
        fe = v(x);
      }
      if (fe !== null) var ot = !0;
      else {
        var it = v(q);
        it !== null && n(Eo, it.startTime - M), (ot = !1);
      }
      return ot;
    } finally {
      (fe = null), (G = O), (lr = !1);
    }
  }
  var sc = o;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      rt || lr || ((rt = !0), t(Co));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return G;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return v(x);
    }),
    (e.unstable_next = function (S) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = G;
      }
      var O = G;
      G = M;
      try {
        return S();
      } finally {
        G = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = sc),
    (e.unstable_runWithPriority = function (S, M) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var O = G;
      G = S;
      try {
        return M();
      } finally {
        G = O;
      }
    }),
    (e.unstable_scheduleCallback = function (S, M, O) {
      var D = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? D + O : D))
          : (O = D),
        S)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = O + W),
        (S = {
          id: So++,
          callback: M,
          priorityLevel: S,
          startTime: O,
          expirationTime: W,
          sortIndex: -1,
        }),
        O > D
          ? ((S.sortIndex = O),
            T(q, S),
            v(x) === null && S === v(q) && (on ? r() : (on = !0), n(Eo, O - D)))
          : ((S.sortIndex = W), T(x, S), rt || lr || ((rt = !0), t(Co))),
        S
      );
    }),
    (e.unstable_wrapCallback = function (S) {
      var M = G;
      return function () {
        var O = G;
        G = M;
        try {
          return S.apply(this, arguments);
        } finally {
          G = O;
        }
      };
    });
})(Ps);
_s.exports = Ps;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var io = ae.exports,
  $ = as,
  Q = _s.exports;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!io) throw Error(y(227));
var Ts = new Set(),
  $n = {};
function yt(e, t) {
  Qt(e, t), Qt(e + "Capture", t);
}
function Qt(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
}
var Ae = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  wc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ql = Object.prototype.hasOwnProperty,
  ql = {},
  Wl = {};
function Sc(e) {
  return Ql.call(Wl, e)
    ? !0
    : Ql.call(ql, e)
    ? !1
    : wc.test(e)
    ? (Wl[e] = !0)
    : ((ql[e] = !0), !1);
}
function kc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ec(e, t, n, r) {
  if (t === null || typeof t == "undefined" || kc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ne(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var K = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    K[e] = new ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  K[t] = new ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  K[e] = new ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  K[e] = new ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    K[e] = new ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  K[e] = new ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  K[e] = new ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  K[e] = new ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  K[e] = new ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qi = /[\-:]([a-z])/g;
function Wi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qi, Wi);
    K[t] = new ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qi, Wi);
    K[t] = new ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qi, Wi);
  K[t] = new ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  K[e] = new ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
K.xlinkHref = new ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  K[e] = new ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hi(e, t, n, r) {
  var o = K.hasOwnProperty(t) ? K[t] : null,
    i =
      o !== null
        ? o.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  i ||
    (Ec(t, n, o, r) && (n = null),
    r || o === null
      ? Sc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = io.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wn = 60103,
  ut = 60106,
  ze = 60107,
  Xi = 60108,
  xn = 60114,
  Yi = 60109,
  Ki = 60110,
  lo = 60112,
  _n = 60113,
  Ir = 60120,
  uo = 60115,
  Gi = 60116,
  Ji = 60121,
  Zi = 60128,
  Ns = 60129,
  bi = 60130,
  Zo = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var B = Symbol.for;
  (wn = B("react.element")),
    (ut = B("react.portal")),
    (ze = B("react.fragment")),
    (Xi = B("react.strict_mode")),
    (xn = B("react.profiler")),
    (Yi = B("react.provider")),
    (Ki = B("react.context")),
    (lo = B("react.forward_ref")),
    (_n = B("react.suspense")),
    (Ir = B("react.suspense_list")),
    (uo = B("react.memo")),
    (Gi = B("react.lazy")),
    (Ji = B("react.block")),
    B("react.scope"),
    (Zi = B("react.opaque.id")),
    (Ns = B("react.debug_trace_mode")),
    (bi = B("react.offscreen")),
    (Zo = B("react.legacy_hidden"));
}
var Hl = typeof Symbol == "function" && Symbol.iterator;
function un(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hl && e[Hl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _o;
function Sn(e) {
  if (_o === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _o = (t && t[1]) || "";
    }
  return (
    `
` +
    _o +
    e
  );
}
var Po = !1;
function sr(e, t) {
  if (!e || Po) return "";
  Po = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u]))
                return (
                  `
` + o[l].replace(" at new ", " at ")
                );
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (Po = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
}
function Cc(e) {
  switch (e.tag) {
    case 5:
      return Sn(e.type);
    case 16:
      return Sn("Lazy");
    case 13:
      return Sn("Suspense");
    case 19:
      return Sn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = sr(e.type, !1)), e;
    case 11:
      return (e = sr(e.type.render, !1)), e;
    case 22:
      return (e = sr(e.type._render, !1)), e;
    case 1:
      return (e = sr(e.type, !0)), e;
    default:
      return "";
  }
}
function Lt(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ze:
      return "Fragment";
    case ut:
      return "Portal";
    case xn:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case _n:
      return "Suspense";
    case Ir:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ki:
        return (e.displayName || "Context") + ".Consumer";
      case Yi:
        return (e._context.displayName || "Context") + ".Provider";
      case lo:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case uo:
        return Lt(e.type);
      case Ji:
        return Lt(e._render);
      case Gi:
        (t = e._payload), (e = e._init);
        try {
          return Lt(e(t));
        } catch {}
    }
  return null;
}
function Ge(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function Ms(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xc(e) {
  var t = Ms(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ar(e) {
  e._valueTracker || (e._valueTracker = xc(e));
}
function Rs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ms(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bo(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Xl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ge(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Os(e, t) {
  (t = t.checked), t != null && Hi(e, "checked", t, !1);
}
function ei(e, t) {
  Os(e, t);
  var n = Ge(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ti(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ti(e, t.type, Ge(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Yl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ti(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function _c(e) {
  var t = "";
  return (
    io.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function ni(e, t) {
  return (
    (e = $({ children: void 0 }, t)),
    (t = _c(t.children)) && (e.children = t),
    e
  );
}
function Ft(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ge(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kl(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ge(n) };
}
function Is(e, t) {
  var n = Ge(t.value),
    r = Ge(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Gl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var oi = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function Ls(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ls(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var cr,
  Fs = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== oi.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        cr = cr || document.createElement("div"),
          cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Pc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function (e) {
  Pc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]);
  });
});
function As(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
    ? ("" + t).trim()
    : t + "px";
}
function $s(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = As(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Tc = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function li(e, t) {
  if (t) {
    if (Tc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ui(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function el(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  At = null,
  $t = null;
function Jl(e) {
  if ((e = tr(e))) {
    if (typeof si != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ho(t)), si(e.stateNode, e.type, t));
  }
}
function js(e) {
  At ? ($t ? $t.push(e) : ($t = [e])) : (At = e);
}
function zs() {
  if (At) {
    var e = At,
      t = $t;
    if ((($t = At = null), Jl(e), t)) for (e = 0; e < t.length; e++) Jl(t[e]);
  }
}
function tl(e, t) {
  return e(t);
}
function Ds(e, t, n, r, o) {
  return e(t, n, r, o);
}
function nl() {}
var Us = tl,
  st = !1,
  To = !1;
function rl() {
  (At !== null || $t !== null) && (nl(), zs());
}
function Nc(e, t, n) {
  if (To) return e(t, n);
  To = !0;
  try {
    return Us(e, t, n);
  } finally {
    (To = !1), rl();
  }
}
function zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ho(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ai = !1;
if (Ae)
  try {
    var sn = {};
    Object.defineProperty(sn, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", sn, sn),
      window.removeEventListener("test", sn, sn);
  } catch {
    ai = !1;
  }
function Mc(e, t, n, r, o, i, l, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var Tn = !1,
  Fr = null,
  Ar = !1,
  ci = null,
  Rc = {
    onError: function (e) {
      (Tn = !0), (Fr = e);
    },
  };
function Oc(e, t, n, r, o, i, l, u, s) {
  (Tn = !1), (Fr = null), Mc.apply(Rc, arguments);
}
function Ic(e, t, n, r, o, i, l, u, s) {
  if ((Oc.apply(this, arguments), Tn)) {
    if (Tn) {
      var d = Fr;
      (Tn = !1), (Fr = null);
    } else throw Error(y(198));
    Ar || ((Ar = !0), (ci = d));
  }
}
function vt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zl(e) {
  if (vt(e) !== e) throw Error(y(188));
}
function Lc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Zl(o), e;
        if (i === r) return Zl(o), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Bs(e) {
  if (((e = Lc(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function bl(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var Qs,
  ol,
  qs,
  Ws,
  fi = !1,
  xe = [],
  Be = null,
  Qe = null,
  qe = null,
  Dn = new Map(),
  Un = new Map(),
  an = [],
  eu =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function di(e, t, n, r, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: o,
    targetContainers: [r],
  };
}
function tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Be = null;
      break;
    case "dragenter":
    case "dragleave":
      Qe = null;
      break;
    case "mouseover":
    case "mouseout":
      qe = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function cn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = di(t, n, r, o, i)),
      t !== null && ((t = tr(t)), t !== null && ol(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Fc(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Be = cn(Be, e, t, n, r, o)), !0;
    case "dragenter":
      return (Qe = cn(Qe, e, t, n, r, o)), !0;
    case "mouseover":
      return (qe = cn(qe, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Dn.set(i, cn(Dn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Un.set(i, cn(Un.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Ac(e) {
  var t = at(e.target);
  if (t !== null) {
    var n = vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vs(n)), t !== null)) {
          (e.blockedOn = t),
            Ws(e.lanePriority, function () {
              Q.unstable_runWithPriority(e.priority, function () {
                qs(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = tr(n)), t !== null && ol(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function nu(e, t, n) {
  Er(e) && n.delete(t);
}
function $c() {
  for (fi = !1; 0 < xe.length; ) {
    var e = xe[0];
    if (e.blockedOn !== null) {
      (e = tr(e.blockedOn)), e !== null && Qs(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && xe.shift();
  }
  Be !== null && Er(Be) && (Be = null),
    Qe !== null && Er(Qe) && (Qe = null),
    qe !== null && Er(qe) && (qe = null),
    Dn.forEach(nu),
    Un.forEach(nu);
}
function fn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fi ||
      ((fi = !0), Q.unstable_scheduleCallback(Q.unstable_NormalPriority, $c)));
}
function Hs(e) {
  function t(o) {
    return fn(o, e);
  }
  if (0 < xe.length) {
    fn(xe[0], e);
    for (var n = 1; n < xe.length; n++) {
      var r = xe[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Be !== null && fn(Be, e),
      Qe !== null && fn(Qe, e),
      qe !== null && fn(qe, e),
      Dn.forEach(t),
      Un.forEach(t),
      n = 0;
    n < an.length;
    n++
  )
    (r = an[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < an.length && ((n = an[0]), n.blockedOn === null); )
    Ac(n), n.blockedOn === null && an.shift();
}
function fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tt = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  No = {},
  Xs = {};
Ae &&
  ((Xs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tt.animationend.animation,
    delete Tt.animationiteration.animation,
    delete Tt.animationstart.animation),
  "TransitionEvent" in window || delete Tt.transitionend.transition);
function so(e) {
  if (No[e]) return No[e];
  if (!Tt[e]) return e;
  var t = Tt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xs) return (No[e] = t[n]);
  return e;
}
var Ys = so("animationend"),
  Ks = so("animationiteration"),
  Gs = so("animationstart"),
  Js = so("transitionend"),
  Zs = new Map(),
  il = new Map(),
  jc = [
    "abort",
    "abort",
    Ys,
    "animationEnd",
    Ks,
    "animationIteration",
    Gs,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Js,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function ll(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      o = e[n + 1];
    (o = "on" + (o[0].toUpperCase() + o.slice(1))),
      il.set(r, t),
      Zs.set(r, o),
      yt(o, [r]);
  }
}
var zc = Q.unstable_now;
zc();
var L = 8;
function Ct(e) {
  if ((1 & e) !== 0) return (L = 15), 1;
  if ((2 & e) !== 0) return (L = 14), 2;
  if ((4 & e) !== 0) return (L = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((L = 12), t)
    : (e & 32) !== 0
    ? ((L = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((L = 10), t)
        : (e & 256) !== 0
        ? ((L = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((L = 8), t)
            : (e & 4096) !== 0
            ? ((L = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((L = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((L = 5), t)
                    : e & 67108864
                    ? ((L = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((L = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((L = 2), t)
                        : (1073741824 & e) !== 0
                        ? ((L = 1), 1073741824)
                        : ((L = 8), e))))));
}
function Dc(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Uc(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, e));
  }
}
function Vn(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (L = 0);
  var r = 0,
    o = 0,
    i = e.expiredLanes,
    l = e.suspendedLanes,
    u = e.pingedLanes;
  if (i !== 0) (r = i), (o = L = 15);
  else if (((i = n & 134217727), i !== 0)) {
    var s = i & ~l;
    s !== 0
      ? ((r = Ct(s)), (o = L))
      : ((u &= i), u !== 0 && ((r = Ct(u)), (o = L)));
  } else
    (i = n & ~l),
      i !== 0 ? ((r = Ct(i)), (o = L)) : u !== 0 && ((r = Ct(u)), (o = L));
  if (r === 0) return 0;
  if (
    ((r = 31 - Je(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & l) === 0)
  ) {
    if ((Ct(t), o <= L)) return t;
    L = o;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Je(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function bs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $r(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = xt(24 & ~t)), e === 0 ? $r(10, t) : e;
    case 10:
      return (e = xt(192 & ~t)), e === 0 ? $r(8, t) : e;
    case 8:
      return (
        (e = xt(3584 & ~t)),
        e === 0 && ((e = xt(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = xt(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(y(358, e));
}
function xt(e) {
  return e & -e;
}
function Mo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n);
}
var Je = Math.clz32 ? Math.clz32 : Qc,
  Vc = Math.log,
  Bc = Math.LN2;
function Qc(e) {
  return e === 0 ? 32 : (31 - ((Vc(e) / Bc) | 0)) | 0;
}
var qc = Q.unstable_UserBlockingPriority,
  Wc = Q.unstable_runWithPriority,
  Cr = !0;
function Hc(e, t, n, r) {
  st || nl();
  var o = ul,
    i = st;
  st = !0;
  try {
    Ds(o, e, t, n, r);
  } finally {
    (st = i) || rl();
  }
}
function Xc(e, t, n, r) {
  Wc(qc, ul.bind(null, e, t, n, r));
}
function ul(e, t, n, r) {
  if (Cr) {
    var o;
    if ((o = (t & 4) === 0) && 0 < xe.length && -1 < eu.indexOf(e))
      (e = di(null, e, t, n, r)), xe.push(e);
    else {
      var i = sl(e, t, n, r);
      if (i === null) o && tu(e, r);
      else {
        if (o) {
          if (-1 < eu.indexOf(e)) {
            (e = di(i, e, t, n, r)), xe.push(e);
            return;
          }
          if (Fc(i, e, t, n, r)) return;
          tu(e, r);
        }
        da(e, t, r, null, n);
      }
    }
  }
}
function sl(e, t, n, r) {
  var o = el(r);
  if (((o = at(o)), o !== null)) {
    var i = vt(o);
    if (i === null) o = null;
    else {
      var l = i.tag;
      if (l === 13) {
        if (((o = Vs(i)), o !== null)) return o;
        o = null;
      } else if (l === 3) {
        if (i.stateNode.hydrate)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        o = null;
      } else i !== o && (o = null);
    }
  }
  return da(e, t, r, o, n), null;
}
var De = null,
  al = null,
  xr = null;
function ea() {
  if (xr) return xr;
  var e,
    t = al,
    n = t.length,
    r,
    o = "value" in De ? De.value : De.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (xr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dr() {
  return !0;
}
function ru() {
  return !1;
}
function ce(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? dr
        : ru),
      (this.isPropagationStopped = ru),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dr));
      },
      persist: function () {},
      isPersistent: dr,
    }),
    t
  );
}
var bt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cl = ce(bt),
  er = $({}, bt, { view: 0, detail: 0 }),
  Yc = ce(er),
  Ro,
  Oo,
  dn,
  co = $({}, er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== dn &&
            (dn && e.type === "mousemove"
              ? ((Ro = e.screenX - dn.screenX), (Oo = e.screenY - dn.screenY))
              : (Oo = Ro = 0),
            (dn = e)),
          Ro);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Oo;
    },
  }),
  ou = ce(co),
  Kc = $({}, co, { dataTransfer: 0 }),
  Gc = ce(Kc),
  Jc = $({}, er, { relatedTarget: 0 }),
  Io = ce(Jc),
  Zc = $({}, bt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bc = ce(Zc),
  ef = $({}, bt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tf = ce(ef),
  nf = $({}, bt, { data: 0 }),
  iu = ce(nf),
  rf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  of = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  lf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function uf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lf[e]) ? !!t[e] : !1;
}
function fl() {
  return uf;
}
var sf = $({}, er, {
    key: function (e) {
      if (e.key) {
        var t = rf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? of[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fl,
    charCode: function (e) {
      return e.type === "keypress" ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  af = ce(sf),
  cf = $({}, co, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  lu = ce(cf),
  ff = $({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fl,
  }),
  df = ce(ff),
  pf = $({}, bt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hf = ce(pf),
  mf = $({}, co, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yf = ce(mf),
  gf = [9, 13, 27, 32],
  dl = Ae && "CompositionEvent" in window,
  Nn = null;
Ae && "documentMode" in document && (Nn = document.documentMode);
var vf = Ae && "TextEvent" in window && !Nn,
  ta = Ae && (!dl || (Nn && 8 < Nn && 11 >= Nn)),
  uu = String.fromCharCode(32),
  su = !1;
function na(e, t) {
  switch (e) {
    case "keyup":
      return gf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ra(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nt = !1;
function wf(e, t) {
  switch (e) {
    case "compositionend":
      return ra(t);
    case "keypress":
      return t.which !== 32 ? null : ((su = !0), uu);
    case "textInput":
      return (e = t.data), e === uu && su ? null : e;
    default:
      return null;
  }
}
function Sf(e, t) {
  if (Nt)
    return e === "compositionend" || (!dl && na(e, t))
      ? ((e = ea()), (xr = al = De = null), (Nt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ta && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kf[e.type] : t === "textarea";
}
function oa(e, t, n, r) {
  js(r),
    (t = jr(t, "onChange")),
    0 < t.length &&
      ((n = new cl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mn = null,
  Bn = null;
function Ef(e) {
  aa(e, 0);
}
function fo(e) {
  var t = Rt(e);
  if (Rs(t)) return e;
}
function Cf(e, t) {
  if (e === "change") return t;
}
var ia = !1;
if (Ae) {
  var Lo;
  if (Ae) {
    var Fo = "oninput" in document;
    if (!Fo) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"),
        (Fo = typeof cu.oninput == "function");
    }
    Lo = Fo;
  } else Lo = !1;
  ia = Lo && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  Mn && (Mn.detachEvent("onpropertychange", la), (Bn = Mn = null));
}
function la(e) {
  if (e.propertyName === "value" && fo(Bn)) {
    var t = [];
    if ((oa(t, Bn, e, el(e)), (e = Ef), st)) e(t);
    else {
      st = !0;
      try {
        tl(e, t);
      } finally {
        (st = !1), rl();
      }
    }
  }
}
function xf(e, t, n) {
  e === "focusin"
    ? (fu(), (Mn = t), (Bn = n), Mn.attachEvent("onpropertychange", la))
    : e === "focusout" && fu();
}
function _f(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fo(Bn);
}
function Pf(e, t) {
  if (e === "click") return fo(t);
}
function Tf(e, t) {
  if (e === "input" || e === "change") return fo(t);
}
function Nf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var he = typeof Object.is == "function" ? Object.is : Nf,
  Mf = Object.prototype.hasOwnProperty;
function Qn(e, t) {
  if (he(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!Mf.call(t, n[r]) || !he(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, t) {
  var n = du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = du(n);
  }
}
function ua(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ua(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hu() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var Rf = Ae && "documentMode" in document && 11 >= document.documentMode,
  Mt = null,
  hi = null,
  Rn = null,
  mi = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mi ||
    Mt == null ||
    Mt !== Lr(r) ||
    ((r = Mt),
    "selectionStart" in r && pi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Rn && Qn(Rn, r)) ||
      ((Rn = r),
      (r = jr(hi, "onSelect")),
      0 < r.length &&
        ((t = new cl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mt))));
}
ll(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
ll(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
ll(jc, 2);
for (
  var yu =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    Ao = 0;
  Ao < yu.length;
  Ao++
)
  il.set(yu[Ao], 0);
Qt("onMouseEnter", ["mouseout", "mouseover"]);
Qt("onMouseLeave", ["mouseout", "mouseover"]);
Qt("onPointerEnter", ["pointerout", "pointerover"]);
Qt("onPointerLeave", ["pointerout", "pointerover"]);
yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sa = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function gu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ic(r, t, void 0, e), (e.currentTarget = null);
}
function aa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
          gu(o, u, d), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          gu(o, u, d), (i = s);
        }
    }
  }
  if (Ar) throw ((e = ci), (Ar = !1), (ci = null), e);
}
function F(e, t) {
  var n = ha(t),
    r = e + "__bubble";
  n.has(r) || (fa(t, e, 2, !1), n.add(r));
}
var vu = "_reactListening" + Math.random().toString(36).slice(2);
function ca(e) {
  e[vu] ||
    ((e[vu] = !0),
    Ts.forEach(function (t) {
      sa.has(t) || wu(t, !1, e, null), wu(t, !0, e, null);
    }));
}
function wu(e, t, n, r) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    i = n;
  if (
    (e === "selectionchange" && n.nodeType !== 9 && (i = n.ownerDocument),
    r !== null && !t && sa.has(e))
  ) {
    if (e !== "scroll") return;
    (o |= 2), (i = r);
  }
  var l = ha(i),
    u = e + "__" + (t ? "capture" : "bubble");
  l.has(u) || (t && (o |= 4), fa(i, e, o, t), l.add(u));
}
function fa(e, t, n, r) {
  var o = il.get(t);
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = Hc;
      break;
    case 1:
      o = Xc;
      break;
    default:
      o = ul;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ai ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function da(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = at(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Nc(function () {
    var d = i,
      g = el(n),
      _ = [];
    e: {
      var p = Zs.get(e);
      if (p !== void 0) {
        var w = cl,
          C = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = af;
            break;
          case "focusin":
            (C = "focus"), (w = Io);
            break;
          case "focusout":
            (C = "blur"), (w = Io);
            break;
          case "beforeblur":
          case "afterblur":
            w = Io;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Gc;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = df;
            break;
          case Ys:
          case Ks:
          case Gs:
            w = bc;
            break;
          case Js:
            w = hf;
            break;
          case "scroll":
            w = Yc;
            break;
          case "wheel":
            w = yf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = lu;
        }
        var E = (t & 4) !== 0,
          f = !E && e === "scroll",
          a = E ? (p !== null ? p + "Capture" : null) : p;
        E = [];
        for (var c = d, h; c !== null; ) {
          h = c;
          var m = h.stateNode;
          if (
            (h.tag === 5 &&
              m !== null &&
              ((h = m),
              a !== null && ((m = zn(c, a)), m != null && E.push(qn(c, m, h)))),
            f)
          )
            break;
          c = c.return;
        }
        0 < E.length &&
          ((p = new w(p, C, null, n, g)), _.push({ event: p, listeners: E }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            (t & 16) === 0 &&
            (C = n.relatedTarget || n.fromElement) &&
            (at(C) || C[en]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            g.window === g
              ? g
              : (p = g.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((C = n.relatedTarget || n.toElement),
              (w = d),
              (C = C ? at(C) : null),
              C !== null &&
                ((f = vt(C)), C !== f || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((w = null), (C = d)),
          w !== C)
        ) {
          if (
            ((E = ou),
            (m = "onMouseLeave"),
            (a = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = lu),
              (m = "onPointerLeave"),
              (a = "onPointerEnter"),
              (c = "pointer")),
            (f = w == null ? p : Rt(w)),
            (h = C == null ? p : Rt(C)),
            (p = new E(m, c + "leave", w, n, g)),
            (p.target = f),
            (p.relatedTarget = h),
            (m = null),
            at(g) === d &&
              ((E = new E(a, c + "enter", C, n, g)),
              (E.target = h),
              (E.relatedTarget = f),
              (m = E)),
            (f = m),
            w && C)
          )
            t: {
              for (E = w, a = C, c = 0, h = E; h; h = kt(h)) c++;
              for (h = 0, m = a; m; m = kt(m)) h++;
              for (; 0 < c - h; ) (E = kt(E)), c--;
              for (; 0 < h - c; ) (a = kt(a)), h--;
              for (; c--; ) {
                if (E === a || (a !== null && E === a.alternate)) break t;
                (E = kt(E)), (a = kt(a));
              }
              E = null;
            }
          else E = null;
          w !== null && Su(_, p, w, E, !1),
            C !== null && f !== null && Su(_, f, C, E, !0);
        }
      }
      e: {
        if (
          ((p = d ? Rt(d) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var T = Cf;
        else if (au(p))
          if (ia) T = Tf;
          else {
            T = _f;
            var v = xf;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (T = Pf);
        if (T && (T = T(e, d))) {
          oa(_, T, n, g);
          break e;
        }
        v && v(e, p, d),
          e === "focusout" &&
            (v = p._wrapperState) &&
            v.controlled &&
            p.type === "number" &&
            ti(p, "number", p.value);
      }
      switch (((v = d ? Rt(d) : window), e)) {
        case "focusin":
          (au(v) || v.contentEditable === "true") &&
            ((Mt = v), (hi = d), (Rn = null));
          break;
        case "focusout":
          Rn = hi = Mt = null;
          break;
        case "mousedown":
          mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mi = !1), mu(_, n, g);
          break;
        case "selectionchange":
          if (Rf) break;
        case "keydown":
        case "keyup":
          mu(_, n, g);
      }
      var P;
      if (dl)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Nt
          ? na(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (ta &&
          n.locale !== "ko" &&
          (Nt || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Nt && (P = ea())
            : ((De = g),
              (al = "value" in De ? De.value : De.textContent),
              (Nt = !0))),
        (v = jr(d, R)),
        0 < v.length &&
          ((R = new iu(R, e, null, n, g)),
          _.push({ event: R, listeners: v }),
          P ? (R.data = P) : ((P = ra(n)), P !== null && (R.data = P)))),
        (P = vf ? wf(e, n) : Sf(e, n)) &&
          ((d = jr(d, "onBeforeInput")),
          0 < d.length &&
            ((g = new iu("onBeforeInput", "beforeinput", null, n, g)),
            _.push({ event: g, listeners: d }),
            (g.data = P)));
    }
    aa(_, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = zn(e, n)),
      i != null && r.unshift(qn(e, i, o)),
      (i = zn(e, t)),
      i != null && r.push(qn(e, i, o))),
      (e = e.return);
  }
  return r;
}
function kt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Su(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      o
        ? ((s = zn(n, i)), s != null && l.unshift(qn(n, s, u)))
        : o || ((s = zn(n, i)), s != null && l.push(qn(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
function zr() {}
var $o = null,
  jo = null;
function pa(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function yi(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ku = typeof setTimeout == "function" ? setTimeout : void 0,
  Of = typeof clearTimeout == "function" ? clearTimeout : void 0;
function pl(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Eu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zo = 0;
function If(e) {
  return { $$typeof: Zi, toString: e, valueOf: e };
}
var po = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + po,
  Dr = "__reactProps$" + po,
  en = "__reactContainer$" + po,
  Cu = "__reactEvents$" + po;
function at(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[en] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Eu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Eu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function tr(e) {
  return (
    (e = e[Ue] || e[en]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ho(e) {
  return e[Dr] || null;
}
function ha(e) {
  var t = e[Cu];
  return t === void 0 && (t = e[Cu] = new Set()), t;
}
var gi = [],
  Ot = -1;
function tt(e) {
  return { current: e };
}
function A(e) {
  0 > Ot || ((e.current = gi[Ot]), (gi[Ot] = null), Ot--);
}
function z(e, t) {
  Ot++, (gi[Ot] = e.current), (e.current = t);
}
var Ze = {},
  ee = tt(Ze),
  ie = tt(!1),
  pt = Ze;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ze;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function le(e) {
  return (e = e.childContextTypes), e != null;
}
function Ur() {
  A(ie), A(ee);
}
function xu(e, t, n) {
  if (ee.current !== Ze) throw Error(y(168));
  z(ee, t), z(ie, n);
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(y(108, Lt(t) || "Unknown", o));
  return $({}, n, r);
}
function Pr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ze),
    (pt = ee.current),
    z(ee, e),
    z(ie, ie.current),
    !0
  );
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ma(e, t, pt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(ie),
      A(ee),
      z(ee, e))
    : A(ie),
    z(ie, n);
}
var hl = null,
  dt = null,
  Lf = Q.unstable_runWithPriority,
  ml = Q.unstable_scheduleCallback,
  vi = Q.unstable_cancelCallback,
  Ff = Q.unstable_shouldYield,
  Pu = Q.unstable_requestPaint,
  wi = Q.unstable_now,
  Af = Q.unstable_getCurrentPriorityLevel,
  mo = Q.unstable_ImmediatePriority,
  ya = Q.unstable_UserBlockingPriority,
  ga = Q.unstable_NormalPriority,
  va = Q.unstable_LowPriority,
  wa = Q.unstable_IdlePriority,
  Do = {},
  $f = Pu !== void 0 ? Pu : function () {},
  Re = null,
  Tr = null,
  Uo = !1,
  Tu = wi(),
  Z =
    1e4 > Tu
      ? wi
      : function () {
          return wi() - Tu;
        };
function Wt() {
  switch (Af()) {
    case mo:
      return 99;
    case ya:
      return 98;
    case ga:
      return 97;
    case va:
      return 96;
    case wa:
      return 95;
    default:
      throw Error(y(332));
  }
}
function Sa(e) {
  switch (e) {
    case 99:
      return mo;
    case 98:
      return ya;
    case 97:
      return ga;
    case 96:
      return va;
    case 95:
      return wa;
    default:
      throw Error(y(332));
  }
}
function ht(e, t) {
  return (e = Sa(e)), Lf(e, t);
}
function Wn(e, t, n) {
  return (e = Sa(e)), ml(e, t, n);
}
function Me() {
  if (Tr !== null) {
    var e = Tr;
    (Tr = null), vi(e);
  }
  ka();
}
function ka() {
  if (!Uo && Re !== null) {
    Uo = !0;
    var e = 0;
    try {
      var t = Re;
      ht(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (Re = null);
    } catch (n) {
      throw (Re !== null && (Re = Re.slice(e + 1)), ml(mo, Me), n);
    } finally {
      Uo = !1;
    }
  }
}
var jf = gt.ReactCurrentBatchConfig;
function ke(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Vr = tt(null),
  Br = null,
  It = null,
  Qr = null;
function yl() {
  Qr = It = Br = null;
}
function gl(e) {
  var t = Vr.current;
  A(Vr), (e.type._context._currentValue = t);
}
function Ea(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function zt(e, t) {
  (Br = e),
    (Qr = It = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Ee = !0), (e.firstContext = null));
}
function ge(e, t) {
  if (Qr !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((Qr = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      It === null)
    ) {
      if (Br === null) throw Error(y(308));
      (It = t),
        (Br.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else It = It.next = t;
  return e._currentValue;
}
var je = !1;
function vl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Ca(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function He(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function Nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Hn(e, t, n, r) {
  var o = e.updateQueue;
  je = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), l === null ? (i = d) : (l.next = d), (l = s);
    var g = e.alternate;
    if (g !== null) {
      g = g.updateQueue;
      var _ = g.lastBaseUpdate;
      _ !== l &&
        (_ === null ? (g.firstBaseUpdate = d) : (_.next = d),
        (g.lastBaseUpdate = s));
    }
  }
  if (i !== null) {
    (_ = o.baseState), (l = 0), (g = d = s = null);
    do {
      u = i.lane;
      var p = i.eventTime;
      if ((r & u) === u) {
        g !== null &&
          (g = g.next =
            {
              eventTime: p,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            C = i;
          switch (((u = t), (p = n), C.tag)) {
            case 1:
              if (((w = C.payload), typeof w == "function")) {
                _ = w.call(p, _, u);
                break e;
              }
              _ = w;
              break e;
            case 3:
              w.flags = (w.flags & -4097) | 64;
            case 0:
              if (
                ((w = C.payload),
                (u = typeof w == "function" ? w.call(p, _, u) : w),
                u == null)
              )
                break e;
              _ = $({}, _, u);
              break e;
            case 2:
              je = !0;
          }
        }
        i.callback !== null &&
          ((e.flags |= 32),
          (u = o.effects),
          u === null ? (o.effects = [i]) : u.push(i));
      } else
        (p = {
          eventTime: p,
          lane: u,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          g === null ? ((d = g = p), (s = _)) : (g = g.next = p),
          (l |= u);
      if (((i = i.next), i === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (i = u.next),
          (u.next = null),
          (o.lastBaseUpdate = u),
          (o.shared.pending = null);
      }
    } while (1);
    g === null && (s = _),
      (o.baseState = s),
      (o.firstBaseUpdate = d),
      (o.lastBaseUpdate = g),
      (rr |= l),
      (e.lanes = l),
      (e.memoizedState = _);
  }
}
function Mu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(y(191, o));
        o.call(r);
      }
    }
}
var xa = new io.Component().refs;
function qr(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      o = Xe(e),
      i = We(r, o);
    (i.payload = t), n != null && (i.callback = n), He(e, i), Ye(e, o, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      o = Xe(e),
      i = We(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      He(e, i),
      Ye(e, o, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = Xe(e),
      o = We(n, r);
    (o.tag = 2), t != null && (o.callback = t), He(e, o), Ye(e, r, n);
  },
};
function Ru(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qn(n, r) || !Qn(o, i)
      : !0
  );
}
function _a(e, t, n) {
  var r = !1,
    o = Ze,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ge(i))
      : ((o = le(t) ? pt : ee.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qt(e, o) : Ze)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = yo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ou(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yo.enqueueReplaceState(t, t.state, null);
}
function Si(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = xa), vl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ge(i))
    : ((i = le(t) ? pt : ee.current), (o.context = qt(e, i))),
    Hn(e, n, o, r),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (qr(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && yo.enqueueReplaceState(o, o.state, null),
      Hn(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4);
}
var pr = Array.isArray;
function pn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var l = r.refs;
            l === xa && (l = r.refs = {}),
              i === null ? delete l[o] : (l[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, t) {
  if (e.type !== "textarea")
    throw Error(
      y(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function Pa(e) {
  function t(f, a) {
    if (e) {
      var c = f.lastEffect;
      c !== null
        ? ((c.nextEffect = a), (f.lastEffect = a))
        : (f.firstEffect = f.lastEffect = a),
        (a.nextEffect = null),
        (a.flags = 8);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function o(f, a) {
    return (f = et(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, c) {
    return (
      (f.index = c),
      e
        ? ((c = f.alternate),
          c !== null
            ? ((c = c.index), c < a ? ((f.flags = 2), a) : c)
            : ((f.flags = 2), a))
        : a
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags = 2), f;
  }
  function u(f, a, c, h) {
    return a === null || a.tag !== 6
      ? ((a = Wo(c, f.mode, h)), (a.return = f), a)
      : ((a = o(a, c)), (a.return = f), a);
  }
  function s(f, a, c, h) {
    return a !== null && a.elementType === c.type
      ? ((h = o(a, c.props)), (h.ref = pn(f, a, c)), (h.return = f), h)
      : ((h = Or(c.type, c.key, c.props, null, f.mode, h)),
        (h.ref = pn(f, a, c)),
        (h.return = f),
        h);
  }
  function d(f, a, c, h) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== c.containerInfo ||
      a.stateNode.implementation !== c.implementation
      ? ((a = Ho(c, f.mode, h)), (a.return = f), a)
      : ((a = o(a, c.children || [])), (a.return = f), a);
  }
  function g(f, a, c, h, m) {
    return a === null || a.tag !== 7
      ? ((a = Bt(c, f.mode, h, m)), (a.return = f), a)
      : ((a = o(a, c)), (a.return = f), a);
  }
  function _(f, a, c) {
    if (typeof a == "string" || typeof a == "number")
      return (a = Wo("" + a, f.mode, c)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case wn:
          return (
            (c = Or(a.type, a.key, a.props, null, f.mode, c)),
            (c.ref = pn(f, null, a)),
            (c.return = f),
            c
          );
        case ut:
          return (a = Ho(a, f.mode, c)), (a.return = f), a;
      }
      if (pr(a) || un(a))
        return (a = Bt(a, f.mode, c, null)), (a.return = f), a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, c, h) {
    var m = a !== null ? a.key : null;
    if (typeof c == "string" || typeof c == "number")
      return m !== null ? null : u(f, a, "" + c, h);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case wn:
          return c.key === m
            ? c.type === ze
              ? g(f, a, c.props.children, h, m)
              : s(f, a, c, h)
            : null;
        case ut:
          return c.key === m ? d(f, a, c, h) : null;
      }
      if (pr(c) || un(c)) return m !== null ? null : g(f, a, c, h, null);
      hr(f, c);
    }
    return null;
  }
  function w(f, a, c, h, m) {
    if (typeof h == "string" || typeof h == "number")
      return (f = f.get(c) || null), u(a, f, "" + h, m);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case wn:
          return (
            (f = f.get(h.key === null ? c : h.key) || null),
            h.type === ze ? g(a, f, h.props.children, m, h.key) : s(a, f, h, m)
          );
        case ut:
          return (f = f.get(h.key === null ? c : h.key) || null), d(a, f, h, m);
      }
      if (pr(h) || un(h)) return (f = f.get(c) || null), g(a, f, h, m, null);
      hr(a, h);
    }
    return null;
  }
  function C(f, a, c, h) {
    for (
      var m = null, T = null, v = a, P = (a = 0), R = null;
      v !== null && P < c.length;
      P++
    ) {
      v.index > P ? ((R = v), (v = null)) : (R = v.sibling);
      var x = p(f, v, c[P], h);
      if (x === null) {
        v === null && (v = R);
        break;
      }
      e && v && x.alternate === null && t(f, v),
        (a = i(x, a, P)),
        T === null ? (m = x) : (T.sibling = x),
        (T = x),
        (v = R);
    }
    if (P === c.length) return n(f, v), m;
    if (v === null) {
      for (; P < c.length; P++)
        (v = _(f, c[P], h)),
          v !== null &&
            ((a = i(v, a, P)), T === null ? (m = v) : (T.sibling = v), (T = v));
      return m;
    }
    for (v = r(f, v); P < c.length; P++)
      (R = w(v, f, P, c[P], h)),
        R !== null &&
          (e && R.alternate !== null && v.delete(R.key === null ? P : R.key),
          (a = i(R, a, P)),
          T === null ? (m = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        v.forEach(function (q) {
          return t(f, q);
        }),
      m
    );
  }
  function E(f, a, c, h) {
    var m = un(c);
    if (typeof m != "function") throw Error(y(150));
    if (((c = m.call(c)), c == null)) throw Error(y(151));
    for (
      var T = (m = null), v = a, P = (a = 0), R = null, x = c.next();
      v !== null && !x.done;
      P++, x = c.next()
    ) {
      v.index > P ? ((R = v), (v = null)) : (R = v.sibling);
      var q = p(f, v, x.value, h);
      if (q === null) {
        v === null && (v = R);
        break;
      }
      e && v && q.alternate === null && t(f, v),
        (a = i(q, a, P)),
        T === null ? (m = q) : (T.sibling = q),
        (T = q),
        (v = R);
    }
    if (x.done) return n(f, v), m;
    if (v === null) {
      for (; !x.done; P++, x = c.next())
        (x = _(f, x.value, h)),
          x !== null &&
            ((a = i(x, a, P)), T === null ? (m = x) : (T.sibling = x), (T = x));
      return m;
    }
    for (v = r(f, v); !x.done; P++, x = c.next())
      (x = w(v, f, P, x.value, h)),
        x !== null &&
          (e && x.alternate !== null && v.delete(x.key === null ? P : x.key),
          (a = i(x, a, P)),
          T === null ? (m = x) : (T.sibling = x),
          (T = x));
    return (
      e &&
        v.forEach(function (So) {
          return t(f, So);
        }),
      m
    );
  }
  return function (f, a, c, h) {
    var m =
      typeof c == "object" && c !== null && c.type === ze && c.key === null;
    m && (c = c.props.children);
    var T = typeof c == "object" && c !== null;
    if (T)
      switch (c.$$typeof) {
        case wn:
          e: {
            for (T = c.key, m = a; m !== null; ) {
              if (m.key === T) {
                switch (m.tag) {
                  case 7:
                    if (c.type === ze) {
                      n(f, m.sibling),
                        (a = o(m, c.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                    break;
                  default:
                    if (m.elementType === c.type) {
                      n(f, m.sibling),
                        (a = o(m, c.props)),
                        (a.ref = pn(f, m, c)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                }
                n(f, m);
                break;
              } else t(f, m);
              m = m.sibling;
            }
            c.type === ze
              ? ((a = Bt(c.props.children, f.mode, h, c.key)),
                (a.return = f),
                (f = a))
              : ((h = Or(c.type, c.key, c.props, null, f.mode, h)),
                (h.ref = pn(f, a, c)),
                (h.return = f),
                (f = h));
          }
          return l(f);
        case ut:
          e: {
            for (m = c.key; a !== null; ) {
              if (a.key === m)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === c.containerInfo &&
                  a.stateNode.implementation === c.implementation
                ) {
                  n(f, a.sibling),
                    (a = o(a, c.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Ho(c, f.mode, h)), (a.return = f), (f = a);
          }
          return l(f);
      }
    if (typeof c == "string" || typeof c == "number")
      return (
        (c = "" + c),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = o(a, c)), (a.return = f), (f = a))
          : (n(f, a), (a = Wo(c, f.mode, h)), (a.return = f), (f = a)),
        l(f)
      );
    if (pr(c)) return C(f, a, c, h);
    if (un(c)) return E(f, a, c, h);
    if ((T && hr(f, c), typeof c == "undefined" && !m))
      switch (f.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Lt(f.type) || "Component"));
      }
    return n(f, a);
  };
}
var Wr = Pa(!0),
  Ta = Pa(!1),
  nr = {},
  Te = tt(nr),
  Xn = tt(nr),
  Yn = tt(nr);
function ct(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function ki(e, t) {
  switch ((z(Yn, t), z(Xn, e), z(Te, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e));
  }
  A(Te), z(Te, t);
}
function Ht() {
  A(Te), A(Xn), A(Yn);
}
function Iu(e) {
  ct(Yn.current);
  var t = ct(Te.current),
    n = ii(t, e.type);
  t !== n && (z(Xn, e), z(Te, n));
}
function wl(e) {
  Xn.current === e && (A(Te), A(Xn));
}
var j = tt(0);
function Hr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ie = null,
  Ve = null,
  Ne = !1;
function Na(e, t) {
  var n = me(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.type = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function Lu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Ei(e) {
  if (Ne) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Lu(e, t)) {
        if (((t = jt(n.nextSibling)), !t || !Lu(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (Ne = !1), (Ie = e);
          return;
        }
        Na(Ie, n);
      }
      (Ie = e), (Ve = jt(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (Ne = !1), (Ie = e);
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function mr(e) {
  if (e !== Ie) return !1;
  if (!Ne) return Fu(e), (Ne = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !yi(t, e.memoizedProps)))
    for (t = Ve; t; ) Na(e, t), (t = jt(t.nextSibling));
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = Ie ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Vo() {
  (Ve = Ie = null), (Ne = !1);
}
var Dt = [];
function Sl() {
  for (var e = 0; e < Dt.length; e++)
    Dt[e]._workInProgressVersionPrimary = null;
  Dt.length = 0;
}
var On = gt.ReactCurrentDispatcher,
  ye = gt.ReactCurrentBatchConfig,
  Kn = 0,
  U = null,
  J = null,
  X = null,
  Xr = !1,
  In = !1;
function re() {
  throw Error(y(321));
}
function kl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!he(e[n], t[n])) return !1;
  return !0;
}
function El(e, t, n, r, o, i) {
  if (
    ((Kn = i),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (On.current = e === null || e.memoizedState === null ? Df : Uf),
    (e = n(r, o)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), !(25 > i))) throw Error(y(301));
      (i += 1),
        (X = J = null),
        (t.updateQueue = null),
        (On.current = Vf),
        (e = n(r, o));
    } while (In);
  }
  if (
    ((On.current = Jr),
    (t = J !== null && J.next !== null),
    (Kn = 0),
    (X = J = U = null),
    (Xr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (U.memoizedState = X = e) : (X = X.next = e), X;
}
function wt() {
  if (J === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = X === null ? U.memoizedState : X.next;
  if (t !== null) (X = t), (J = e);
  else {
    if (e === null) throw Error(y(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      X === null ? (U.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function _e(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hn(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = J,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (o = o.next), (r = r.baseState);
    var u = (l = i = null),
      s = o;
    do {
      var d = s.lane;
      if ((Kn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
      else {
        var g = {
          lane: d,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = g), (i = r)) : (u = u.next = g),
          (U.lanes |= d),
          (rr |= d);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = l),
      he(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function mn(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    he(i, t.memoizedState) || (Ee = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Au(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var o = t._workInProgressVersionPrimary;
  if (
    (o !== null
      ? (e = o === r)
      : ((e = e.mutableReadLanes),
        (e = (Kn & e) === e) &&
          ((t._workInProgressVersionPrimary = r), Dt.push(t))),
    e)
  )
    return n(t._source);
  throw (Dt.push(t), Error(y(350)));
}
function Ma(e, t, n, r) {
  var o = te;
  if (o === null) throw Error(y(349));
  var i = t._getVersion,
    l = i(t._source),
    u = On.current,
    s = u.useState(function () {
      return Au(o, t, n);
    }),
    d = s[1],
    g = s[0];
  s = X;
  var _ = e.memoizedState,
    p = _.refs,
    w = p.getSnapshot,
    C = _.source;
  _ = _.subscribe;
  var E = U;
  return (
    (e.memoizedState = { refs: p, source: t, subscribe: r }),
    u.useEffect(
      function () {
        (p.getSnapshot = n), (p.setSnapshot = d);
        var f = i(t._source);
        if (!he(l, f)) {
          (f = n(t._source)),
            he(g, f) ||
              (d(f), (f = Xe(E)), (o.mutableReadLanes |= f & o.pendingLanes)),
            (f = o.mutableReadLanes),
            (o.entangledLanes |= f);
          for (var a = o.entanglements, c = f; 0 < c; ) {
            var h = 31 - Je(c),
              m = 1 << h;
            (a[h] |= f), (c &= ~m);
          }
        }
      },
      [n, t, r]
    ),
    u.useEffect(
      function () {
        return r(t._source, function () {
          var f = p.getSnapshot,
            a = p.setSnapshot;
          try {
            a(f(t._source));
            var c = Xe(E);
            o.mutableReadLanes |= c & o.pendingLanes;
          } catch (h) {
            a(function () {
              throw h;
            });
          }
        });
      },
      [t, r]
    ),
    (he(w, n) && he(C, t) && he(_, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: _e,
        lastRenderedState: g,
      }),
      (e.dispatch = d = _l.bind(null, U, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (g = Au(o, t, n)),
      (s.memoizedState = s.baseState = g)),
    g
  );
}
function Ra(e, t, n) {
  var r = wt();
  return Ma(r, e, t, n);
}
function yn(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: _e,
        lastRenderedState: e,
      }),
    (e = e.dispatch = _l.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $u(e) {
  var t = ft();
  return (e = { current: e }), (t.memoizedState = e);
}
function Kr() {
  return wt().memoizedState;
}
function Ci(e, t, n, r) {
  var o = ft();
  (U.flags |= e),
    (o.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cl(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var l = J.memoizedState;
    if (((i = l.destroy), r !== null && kl(r, l.deps))) {
      Yr(t, n, i, r);
      return;
    }
  }
  (U.flags |= e), (o.memoizedState = Yr(1 | t, n, i, r));
}
function ju(e, t) {
  return Ci(516, 4, e, t);
}
function Gr(e, t) {
  return Cl(516, 4, e, t);
}
function Oa(e, t) {
  return Cl(4, 2, e, t);
}
function Ia(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function La(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cl(4, 2, Ia.bind(null, t, e), n)
  );
}
function xl() {}
function Fa(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Aa(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zf(e, t) {
  var n = Wt();
  ht(98 > n ? 98 : n, function () {
    e(!0);
  }),
    ht(97 < n ? 97 : n, function () {
      var r = ye.transition;
      ye.transition = 1;
      try {
        e(!1), t();
      } finally {
        ye.transition = r;
      }
    });
}
function _l(e, t, n) {
  var r = se(),
    o = Xe(e),
    i = {
      lane: o,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    l = t.pending;
  if (
    (l === null ? (i.next = i) : ((i.next = l.next), (l.next = i)),
    (t.pending = i),
    (l = e.alternate),
    e === U || (l !== null && l === U))
  )
    In = Xr = !0;
  else {
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var u = t.lastRenderedState,
          s = l(u, n);
        if (((i.eagerReducer = l), (i.eagerState = s), he(s, u))) return;
      } catch {
      } finally {
      }
    Ye(e, o, r);
  }
}
var Jr = {
    readContext: ge,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useOpaqueIdentifier: re,
    unstable_isNewReconciler: !1,
  },
  Df = {
    readContext: ge,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ge,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Ci(4, 2, Ia.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ci(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = _l.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: $u,
    useState: yn,
    useDebugValue: xl,
    useDeferredValue: function (e) {
      var t = yn(e),
        n = t[0],
        r = t[1];
      return (
        ju(
          function () {
            var o = ye.transition;
            ye.transition = 1;
            try {
              r(e);
            } finally {
              ye.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = yn(!1),
        t = e[0];
      return (e = zf.bind(null, e[1])), $u(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = ft();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        Ma(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (Ne) {
        var e = !1,
          t = If(function () {
            throw (
              (e || ((e = !0), n("r:" + (zo++).toString(36))), Error(y(355)))
            );
          }),
          n = yn(t)[1];
        return (
          (U.mode & 2) === 0 &&
            ((U.flags |= 516),
            Yr(
              5,
              function () {
                n("r:" + (zo++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (zo++).toString(36)), yn(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  Uf = {
    readContext: ge,
    useCallback: Fa,
    useContext: ge,
    useEffect: Gr,
    useImperativeHandle: La,
    useLayoutEffect: Oa,
    useMemo: Aa,
    useReducer: hn,
    useRef: Kr,
    useState: function () {
      return hn(_e);
    },
    useDebugValue: xl,
    useDeferredValue: function (e) {
      var t = hn(_e),
        n = t[0],
        r = t[1];
      return (
        Gr(
          function () {
            var o = ye.transition;
            ye.transition = 1;
            try {
              r(e);
            } finally {
              ye.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = hn(_e)[0];
      return [Kr().current, e];
    },
    useMutableSource: Ra,
    useOpaqueIdentifier: function () {
      return hn(_e)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: ge,
    useCallback: Fa,
    useContext: ge,
    useEffect: Gr,
    useImperativeHandle: La,
    useLayoutEffect: Oa,
    useMemo: Aa,
    useReducer: mn,
    useRef: Kr,
    useState: function () {
      return mn(_e);
    },
    useDebugValue: xl,
    useDeferredValue: function (e) {
      var t = mn(_e),
        n = t[0],
        r = t[1];
      return (
        Gr(
          function () {
            var o = ye.transition;
            ye.transition = 1;
            try {
              r(e);
            } finally {
              ye.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = mn(_e)[0];
      return [Kr().current, e];
    },
    useMutableSource: Ra,
    useOpaqueIdentifier: function () {
      return mn(_e)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Bf = gt.ReactCurrentOwner,
  Ee = !1;
function oe(e, t, n, r) {
  t.child = e === null ? Ta(t, null, n, r) : Wr(t, e.child, n, r);
}
function zu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    zt(t, o),
    (r = El(e, t, n, r, i, o)),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Le(e, t, o))
      : ((t.flags |= 1), oe(e, t, r, o), t.child)
  );
}
function Du(e, t, n, r, o, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Ol(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), $a(e, t, l, r, o, i))
      : ((e = Or(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (l = e.child),
    (o & i) === 0 &&
    ((o = l.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : Qn),
    n(o, r) && e.ref === t.ref)
      ? Le(e, t, i)
      : ((t.flags |= 1),
        (e = et(l, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function $a(e, t, n, r, o, i) {
  if (e !== null && Qn(e.memoizedProps, r) && e.ref === t.ref)
    if (((Ee = !1), (i & o) !== 0)) (e.flags & 16384) !== 0 && (Ee = !0);
    else return (t.lanes = e.lanes), Le(e, t, i);
  return xi(e, t, n, r, i);
}
function Bo(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), gr(t, n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), gr(t, i !== null ? i.baseLanes : n);
    else
      return (
        (e = i !== null ? i.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        gr(t, e),
        null
      );
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      gr(t, r);
  return oe(e, t, o, n), t.child;
}
function ja(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.flags |= 128);
}
function xi(e, t, n, r, o) {
  var i = le(n) ? pt : ee.current;
  return (
    (i = qt(t, i)),
    zt(t, o),
    (n = El(e, t, n, r, i, o)),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Le(e, t, o))
      : ((t.flags |= 1), oe(e, t, n, o), t.child)
  );
}
function Uu(e, t, n, r, o) {
  if (le(n)) {
    var i = !0;
    Pr(t);
  } else i = !1;
  if ((zt(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      _a(t, n, r),
      Si(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = ge(d))
      : ((d = le(n) ? pt : ee.current), (d = qt(t, d)));
    var g = n.getDerivedStateFromProps,
      _ =
        typeof g == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    _ ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== r || s !== d) && Ou(t, l, r, d)),
      (je = !1);
    var p = t.memoizedState;
    (l.state = p),
      Hn(t, r, l, o),
      (s = t.memoizedState),
      u !== r || p !== s || ie.current || je
        ? (typeof g == "function" && (qr(t, n, g, r), (s = t.memoizedState)),
          (u = je || Ru(t, n, u, r, p, s, d))
            ? (_ ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = d),
          (r = u))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4),
          (r = !1));
  } else {
    (l = t.stateNode),
      Ca(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : ke(t.type, u)),
      (l.props = d),
      (_ = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ge(s))
        : ((s = le(n) ? pt : ee.current), (s = qt(t, s)));
    var w = n.getDerivedStateFromProps;
    (g =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== _ || p !== s) && Ou(t, l, r, s)),
      (je = !1),
      (p = t.memoizedState),
      (l.state = p),
      Hn(t, r, l, o);
    var C = t.memoizedState;
    u !== _ || p !== C || ie.current || je
      ? (typeof w == "function" && (qr(t, n, w, r), (C = t.memoizedState)),
        (d = je || Ru(t, n, d, r, p, C, s))
          ? (g ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, C, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, C, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (l.props = r),
        (l.state = C),
        (l.context = s),
        (r = d))
      : (typeof l.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return _i(e, t, n, r, i, o);
}
function _i(e, t, n, r, o, i) {
  ja(e, t);
  var l = (t.flags & 64) !== 0;
  if (!r && !l) return o && _u(t, n, !1), Le(e, t, i);
  (r = t.stateNode), (Bf.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Wr(t, e.child, null, i)), (t.child = Wr(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    o && _u(t, n, !0),
    t.child
  );
}
function Vu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xu(e, t.context, !1),
    ki(e, t.containerInfo);
}
var yr = { dehydrated: null, retryLane: 0 };
function Bu(e, t, n) {
  var r = t.pendingProps,
    o = j.current,
    i = !1,
    l;
  return (
    (l = (t.flags & 64) !== 0) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (o |= 1),
    z(j, o & 1),
    e === null
      ? (r.fallback !== void 0 && Ei(t),
        (e = r.children),
        (o = r.fallback),
        i
          ? ((e = Qu(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = yr),
            e)
          : typeof r.unstable_expectedLoadTime == "number"
          ? ((e = Qu(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = yr),
            (t.lanes = 33554432),
            e)
          : ((n = Il({ mode: "visible", children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? i
        ? ((r = Wu(e, t, r.children, r.fallback, n)),
          (i = t.child),
          (o = e.child.memoizedState),
          (i.memoizedState =
            o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
          (i.childLanes = e.childLanes & ~n),
          (t.memoizedState = yr),
          r)
        : ((n = qu(e, t, r.children, n)), (t.memoizedState = null), n)
      : i
      ? ((r = Wu(e, t, r.children, r.fallback, n)),
        (i = t.child),
        (o = e.child.memoizedState),
        (i.memoizedState =
          o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = yr),
        r)
      : ((n = qu(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function Qu(e, t, n, r) {
  var o = e.mode,
    i = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    (o & 2) === 0 && i !== null
      ? ((i.childLanes = 0), (i.pendingProps = t))
      : (i = Il(t, o, 0, null)),
    (n = Bt(n, o, r, null)),
    (i.return = e),
    (n.return = e),
    (i.sibling = n),
    (e.child = i),
    n
  );
}
function qu(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = et(o, { mode: "visible", children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function Wu(e, t, n, r, o) {
  var i = t.mode,
    l = e.child;
  e = l.sibling;
  var u = { mode: "hidden", children: n };
  return (
    (i & 2) === 0 && t.child !== l
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = u),
        (l = n.lastEffect),
        l !== null
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = l),
            (l.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = et(l, u)),
    e !== null ? (r = et(e, r)) : ((r = Bt(r, i, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function Hu(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ea(e.return, t);
}
function Qo(e, t, n, r, o, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        lastEffect: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o),
      (l.lastEffect = i));
}
function Xu(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = j.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hu(e, n);
        else if (e.tag === 19) Hu(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(j, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Hr(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Qo(t, !1, o, n, i, t.lastEffect);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Hr(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Qo(t, !0, n, null, i, t.lastEffect);
        break;
      case "together":
        Qo(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Le(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rr |= t.lanes),
    (n & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (
        e = t.child, n = et(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = et(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var za, Pi, Da, Ua;
za = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pi = function () {};
Da = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ct(Te.current);
    var i = null;
    switch (n) {
      case "input":
        (o = bo(e, o)), (r = bo(e, r)), (i = []);
        break;
      case "option":
        (o = ni(e, o)), (r = ni(e, r)), (i = []);
        break;
      case "select":
        (o = $({}, o, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ri(e, o)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zr);
    }
    li(n, r);
    var l;
    n = null;
    for (d in o)
      if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null)
        if (d === "style") {
          var u = o[d];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            ($n.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((u = o != null ? o[d] : void 0),
        r.hasOwnProperty(d) && s !== u && (s != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(d, n)), (n = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(d)
                ? (s != null && d === "onScroll" && F("scroll", e),
                  i || u === s || (i = []))
                : typeof s == "object" && s !== null && s.$$typeof === Zi
                ? s.toString()
                : (i = i || []).push(d, s));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ua = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!Ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Qf(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return le(t.type) && Ur(), null;
    case 3:
      return (
        Ht(),
        A(ie),
        A(ee),
        Sl(),
        (r = t.stateNode),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        Pi(t),
        null
      );
    case 5:
      wl(t);
      var o = ct(Yn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Da(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return null;
        }
        if (((e = ct(Te.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Dr] = i), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < kn.length; e++) F(kn[e], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Xl(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Kl(r, i), F("invalid", r);
          }
          li(n, i), (e = null);
          for (var l in i)
            i.hasOwnProperty(l) &&
              ((o = i[l]),
              l === "children"
                ? typeof o == "string"
                  ? r.textContent !== o && (e = ["children", o])
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (e = ["children", "" + o])
                : $n.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  F("scroll", r));
          switch (n) {
            case "input":
              ar(r), Yl(r, i, !0);
              break;
            case "textarea":
              ar(r), Gl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = zr);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((l = o.nodeType === 9 ? o : o.ownerDocument),
            e === oi.html && (e = Ls(n)),
            e === oi.html
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Dr] = r),
            za(e, t, !1, !1),
            (t.stateNode = e),
            (l = ui(n, r)),
            n)
          ) {
            case "dialog":
              F("cancel", e), F("close", e), (o = r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", e), (o = r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < kn.length; o++) F(kn[o], e);
              o = r;
              break;
            case "source":
              F("error", e), (o = r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", e), F("load", e), (o = r);
              break;
            case "details":
              F("toggle", e), (o = r);
              break;
            case "input":
              Xl(e, r), (o = bo(e, r)), F("invalid", e);
              break;
            case "option":
              o = ni(e, r);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (o = $({}, r, { value: void 0 })),
                F("invalid", e);
              break;
            case "textarea":
              Kl(e, r), (o = ri(e, r)), F("invalid", e);
              break;
            default:
              o = r;
          }
          li(n, o);
          var u = o;
          for (i in u)
            if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style"
                ? $s(e, s)
                : i === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0), s != null && Fs(e, s))
                : i === "children"
                ? typeof s == "string"
                  ? (n !== "textarea" || s !== "") && jn(e, s)
                  : typeof s == "number" && jn(e, "" + s)
                : i !== "suppressContentEditableWarning" &&
                  i !== "suppressHydrationWarning" &&
                  i !== "autoFocus" &&
                  ($n.hasOwnProperty(i)
                    ? s != null && i === "onScroll" && F("scroll", e)
                    : s != null && Hi(e, i, s, l));
            }
          switch (n) {
            case "input":
              ar(e), Yl(e, r, !1);
              break;
            case "textarea":
              ar(e), Gl(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Ge(r.value));
              break;
            case "select":
              (e.multiple = !!r.multiple),
                (i = r.value),
                i != null
                  ? Ft(e, !!r.multiple, i, !1)
                  : r.defaultValue != null &&
                    Ft(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof o.onClick == "function" && (e.onclick = zr);
          }
          pa(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        (n = ct(Yn.current)),
          ct(Te.current),
          mr(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ue] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ue] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        A(j),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && mr(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (j.current & 1) !== 0
                ? Y === 0 && (Y = 3)
                : ((Y === 0 || Y === 3) && (Y = 4),
                  te === null ||
                    ((rr & 134217727) === 0 && (nn & 134217727) === 0) ||
                    Ut(te, b))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return Ht(), Pi(t), e === null && ca(t.stateNode.containerInfo), null;
    case 10:
      return gl(t), null;
    case 17:
      return le(t.type) && Ur(), null;
    case 19:
      if ((A(j), (r = t.memoizedState), r === null)) return null;
      if (((i = (t.flags & 64) !== 0), (l = r.rendering), l === null))
        if (i) gn(r, !1);
        else {
          if (Y !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = Hr(e)), l !== null)) {
                for (
                  t.flags |= 64,
                    gn(r, !1),
                    i = l.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 2),
                    (i.nextEffect = null),
                    (i.firstEffect = null),
                    (i.lastEffect = null),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(j, (j.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            Z() > Ii &&
            ((t.flags |= 64), (i = !0), gn(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!i)
          if (((e = Hr(l)), e !== null)) {
            if (
              ((t.flags |= 64),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(r, !0),
              r.tail === null && r.tailMode === "hidden" && !l.alternate && !Ne)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * Z() - r.renderingStartTime > Ii &&
              n !== 1073741824 &&
              ((t.flags |= 64), (i = !0), gn(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = r.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (r.last = l));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = Z()),
          (n.sibling = null),
          (t = j.current),
          z(j, i ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        Rl(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(y(156, t.tag));
}
function qf(e) {
  switch (e.tag) {
    case 1:
      le(e.type) && Ur();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((Ht(), A(ie), A(ee), Sl(), (t = e.flags), (t & 64) !== 0))
        throw Error(y(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return wl(e), null;
    case 13:
      return (
        A(j), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return A(j), null;
    case 4:
      return Ht(), null;
    case 10:
      return gl(e), null;
    case 23:
    case 24:
      return Rl(), null;
    default:
      return null;
  }
}
function Pl(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Cc(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o };
}
function Ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Wf = typeof WeakMap == "function" ? WeakMap : Map;
function Va(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      br || ((br = !0), (Li = r)), Ti(e, t);
    }),
    n
  );
}
function Ba(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function () {
      return Ti(e, t), r(o);
    };
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof r != "function" &&
          (Pe === null ? (Pe = new Set([this])) : Pe.add(this), Ti(e, t));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
var Hf = typeof WeakSet == "function" ? WeakSet : Set;
function Yu(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        Ke(e, n);
      }
    else t.current = null;
}
function Xf(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : ke(t.type, n),
            r
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && pl(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yf(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var o = e;
          (r = o.next),
            (o = o.tag),
            (o & 4) !== 0 && (o & 1) !== 0 && (Ja(n, e), nd(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : ke(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = n.updateQueue),
        t !== null && Mu(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        Mu(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && pa(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && Hs(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function Ku(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == "function"
            ? r.setProperty("display", "none", "important")
            : (r.display = "none");
      else {
        r = n.stateNode;
        var o = n.memoizedProps.style;
        (o = o != null && o.hasOwnProperty("display") ? o.display : null),
          (r.style.display = As("display", o));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Gu(e, t) {
  if (dt && typeof dt.onCommitFiberUnmount == "function")
    try {
      dt.onCommitFiberUnmount(hl, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var r = n,
            o = r.destroy;
          if (((r = r.tag), o !== void 0))
            if ((r & 4) !== 0) Ja(t, n);
            else {
              r = t;
              try {
                o();
              } catch (i) {
                Ke(r, i);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (Yu(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (i) {
          Ke(t, i);
        }
      break;
    case 5:
      Yu(t);
      break;
    case 4:
      Qa(e, t);
  }
}
function Ju(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Zu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Zu(t)) break e;
      t = t.return;
    }
    throw Error(y(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(y(161));
  }
  n.flags & 16 && (jn(t, ""), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Zu(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Ni(e, n, t) : Mi(e, n, t);
}
function Ni(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ni(e, t, n), e = e.sibling; e !== null; ) Ni(e, t, n), (e = e.sibling);
}
function Mi(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), (e = e.sibling);
}
function Qa(e, t) {
  for (var n = t, r = !1, o, i; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(y(160));
        switch (((o = r.stateNode), r.tag)) {
          case 5:
            i = !1;
            break e;
          case 3:
            (o = o.containerInfo), (i = !0);
            break e;
          case 4:
            (o = o.containerInfo), (i = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var l = e, u = n, s = u; ; )
        if ((Gu(l, s), s.child !== null && s.tag !== 4))
          (s.child.return = s), (s = s.child);
        else {
          if (s === u) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === u) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      i
        ? ((l = o),
          (u = n.stateNode),
          l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u))
        : o.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (o = n.stateNode.containerInfo),
          (i = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((Gu(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function qo(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) === 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var o = e !== null ? e.memoizedProps : r;
        e = t.type;
        var i = t.updateQueue;
        if (((t.updateQueue = null), i !== null)) {
          for (
            n[Dr] = r,
              e === "input" && r.type === "radio" && r.name != null && Os(n, r),
              ui(e, o),
              t = ui(e, r),
              o = 0;
            o < i.length;
            o += 2
          ) {
            var l = i[o],
              u = i[o + 1];
            l === "style"
              ? $s(n, u)
              : l === "dangerouslySetInnerHTML"
              ? Fs(n, u)
              : l === "children"
              ? jn(n, u)
              : Hi(n, l, u, t);
          }
          switch (e) {
            case "input":
              ei(n, r);
              break;
            case "textarea":
              Is(n, r);
              break;
            case "select":
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (i = r.value),
                i != null
                  ? Ft(n, !!r.multiple, i, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? Ft(n, !!r.multiple, r.defaultValue, !0)
                      : Ft(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(y(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), Hs(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((Ml = Z()), Ku(t.child, !0)), es(t);
      return;
    case 19:
      es(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Ku(t, t.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hf()),
      t.forEach(function (r) {
        var o = id.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Kf(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var Gf = Math.ceil,
  Zr = gt.ReactCurrentDispatcher,
  Tl = gt.ReactCurrentOwner,
  N = 0,
  te = null,
  V = null,
  b = 0,
  mt = 0,
  Ri = tt(0),
  Y = 0,
  go = null,
  tn = 0,
  rr = 0,
  nn = 0,
  Nl = 0,
  Oi = null,
  Ml = 0,
  Ii = 1 / 0;
function rn() {
  Ii = Z() + 500;
}
var k = null,
  br = !1,
  Li = null,
  Pe = null,
  be = !1,
  Ln = null,
  En = 90,
  Fi = [],
  Ai = [],
  Fe = null,
  Fn = 0,
  $i = null,
  Nr = -1,
  Oe = 0,
  Mr = 0,
  An = null,
  Rr = !1;
function se() {
  return (N & 48) !== 0 ? Z() : Nr !== -1 ? Nr : (Nr = Z());
}
function Xe(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return Wt() === 99 ? 1 : 2;
  if ((Oe === 0 && (Oe = tn), jf.transition !== 0)) {
    Mr !== 0 && (Mr = Oi !== null ? Oi.pendingLanes : 0), (e = Oe);
    var t = 4186112 & ~Mr;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = Wt()),
    (N & 4) !== 0 && e === 98
      ? (e = $r(12, Oe))
      : ((e = Dc(e)), (e = $r(e, Oe))),
    e
  );
}
function Ye(e, t, n) {
  if (50 < Fn) throw ((Fn = 0), ($i = null), Error(y(185)));
  if (((e = vo(e, t)), e === null)) return null;
  ao(e, t, n), e === te && ((nn |= t), Y === 4 && Ut(e, b));
  var r = Wt();
  t === 1
    ? (N & 8) !== 0 && (N & 48) === 0
      ? ji(e)
      : (ve(e, n), N === 0 && (rn(), Me()))
    : ((N & 4) === 0 ||
        (r !== 98 && r !== 99) ||
        (Fe === null ? (Fe = new Set([e])) : Fe.add(e)),
      ve(e, n)),
    (Oi = e);
}
function vo(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function ve(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      o = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var u = 31 - Je(l),
      s = 1 << u,
      d = i[u];
    if (d === -1) {
      if ((s & r) === 0 || (s & o) !== 0) {
        (d = t), Ct(s);
        var g = L;
        i[u] = 10 <= g ? d + 250 : 6 <= g ? d + 5e3 : -1;
      }
    } else d <= t && (e.expiredLanes |= s);
    l &= ~s;
  }
  if (((r = Vn(e, e === te ? b : 0)), (t = L), r === 0))
    n !== null &&
      (n !== Do && vi(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== Do && vi(n);
    }
    t === 15
      ? ((n = ji.bind(null, e)),
        Re === null ? ((Re = [n]), (Tr = ml(mo, ka))) : Re.push(n),
        (n = Do))
      : t === 14
      ? (n = Wn(99, ji.bind(null, e)))
      : ((n = Uc(t)), (n = Wn(n, qa.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function qa(e) {
  if (((Nr = -1), (Mr = Oe = 0), (N & 48) !== 0)) throw Error(y(327));
  var t = e.callbackNode;
  if (nt() && e.callbackNode !== t) return null;
  var n = Vn(e, e === te ? b : 0);
  if (n === 0) return null;
  var r = n,
    o = N;
  N |= 16;
  var i = Ya();
  (te !== e || b !== r) && (rn(), Vt(e, r));
  do
    try {
      bf();
      break;
    } catch (u) {
      Xa(e, u);
    }
  while (1);
  if (
    (yl(),
    (Zr.current = i),
    (N = o),
    V !== null ? (r = 0) : ((te = null), (b = 0), (r = Y)),
    (tn & nn) !== 0)
  )
    Vt(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((N |= 64),
        e.hydrate && ((e.hydrate = !1), pl(e.containerInfo)),
        (n = bs(e)),
        n !== 0 && (r = Cn(e, n))),
      r === 1)
    )
      throw ((t = go), Vt(e, 0), Ut(e, n), ve(e, Z()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        lt(e);
        break;
      case 3:
        if (
          (Ut(e, n), (n & 62914560) === n && ((r = Ml + 500 - Z()), 10 < r))
        ) {
          if (Vn(e, 0) !== 0) break;
          if (((o = e.suspendedLanes), (o & n) !== n)) {
            se(), (e.pingedLanes |= e.suspendedLanes & o);
            break;
          }
          e.timeoutHandle = ku(lt.bind(null, e), r);
          break;
        }
        lt(e);
        break;
      case 4:
        if ((Ut(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, o = -1; 0 < n; ) {
          var l = 31 - Je(n);
          (i = 1 << l), (l = r[l]), l > o && (o = l), (n &= ~i);
        }
        if (
          ((n = o),
          (n = Z() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * Gf(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = ku(lt.bind(null, e), n);
          break;
        }
        lt(e);
        break;
      case 5:
        lt(e);
        break;
      default:
        throw Error(y(329));
    }
  }
  return ve(e, Z()), e.callbackNode === t ? qa.bind(null, e) : null;
}
function Ut(e, t) {
  for (
    t &= ~Nl,
      t &= ~nn,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ji(e) {
  if ((N & 48) !== 0) throw Error(y(327));
  if ((nt(), e === te && (e.expiredLanes & b) !== 0)) {
    var t = b,
      n = Cn(e, t);
    (tn & nn) !== 0 && ((t = Vn(e, t)), (n = Cn(e, t)));
  } else (t = Vn(e, 0)), (n = Cn(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((N |= 64),
      e.hydrate && ((e.hydrate = !1), pl(e.containerInfo)),
      (t = bs(e)),
      t !== 0 && (n = Cn(e, t))),
    n === 1)
  )
    throw ((n = go), Vt(e, 0), Ut(e, t), ve(e, Z()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    lt(e),
    ve(e, Z()),
    null
  );
}
function Jf() {
  if (Fe !== null) {
    var e = Fe;
    (Fe = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), ve(t, Z());
      });
  }
  Me();
}
function Wa(e, t) {
  var n = N;
  N |= 1;
  try {
    return e(t);
  } finally {
    (N = n), N === 0 && (rn(), Me());
  }
}
function Ha(e, t) {
  var n = N;
  (N &= -2), (N |= 8);
  try {
    return e(t);
  } finally {
    (N = n), N === 0 && (rn(), Me());
  }
}
function gr(e, t) {
  z(Ri, mt), (mt |= t), (tn |= t);
}
function Rl() {
  (mt = Ri.current), A(Ri);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Of(n)), V !== null))
    for (n = V.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ur();
          break;
        case 3:
          Ht(), A(ie), A(ee), Sl();
          break;
        case 5:
          wl(r);
          break;
        case 4:
          Ht();
          break;
        case 13:
          A(j);
          break;
        case 19:
          A(j);
          break;
        case 10:
          gl(r);
          break;
        case 23:
        case 24:
          Rl();
      }
      n = n.return;
    }
  (te = e),
    (V = et(e.current, null)),
    (b = mt = tn = t),
    (Y = 0),
    (go = null),
    (Nl = nn = rr = 0);
}
function Xa(e, t) {
  do {
    var n = V;
    try {
      if ((yl(), (On.current = Jr), Xr)) {
        for (var r = U.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((Kn = 0),
        (X = J = U = null),
        (In = !1),
        (Tl.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (go = t), (V = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 2048),
          (u.firstEffect = u.lastEffect = null),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s;
          if ((u.mode & 2) === 0) {
            var g = u.alternate;
            g
              ? ((u.updateQueue = g.updateQueue),
                (u.memoizedState = g.memoizedState),
                (u.lanes = g.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var _ = (j.current & 1) !== 0,
            p = l;
          do {
            var w;
            if ((w = p.tag === 13)) {
              var C = p.memoizedState;
              if (C !== null) w = C.dehydrated !== null;
              else {
                var E = p.memoizedProps;
                w =
                  E.fallback === void 0
                    ? !1
                    : E.unstable_avoidThisFallback !== !0
                    ? !0
                    : !_;
              }
            }
            if (w) {
              var f = p.updateQueue;
              if (f === null) {
                var a = new Set();
                a.add(d), (p.updateQueue = a);
              } else f.add(d);
              if ((p.mode & 2) === 0) {
                if (
                  ((p.flags |= 64),
                  (u.flags |= 16384),
                  (u.flags &= -2981),
                  u.tag === 1)
                )
                  if (u.alternate === null) u.tag = 17;
                  else {
                    var c = We(-1, 1);
                    (c.tag = 2), He(u, c);
                  }
                u.lanes |= 1;
                break e;
              }
              (s = void 0), (u = t);
              var h = i.pingCache;
              if (
                (h === null
                  ? ((h = i.pingCache = new Wf()), (s = new Set()), h.set(d, s))
                  : ((s = h.get(d)),
                    s === void 0 && ((s = new Set()), h.set(d, s))),
                !s.has(u))
              ) {
                s.add(u);
                var m = od.bind(null, i, d, u);
                d.then(m, m);
              }
              (p.flags |= 4096), (p.lanes = t);
              break e;
            }
            p = p.return;
          } while (p !== null);
          s = Error(
            (Lt(u.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        Y !== 5 && (Y = 2), (s = Pl(s, u)), (p = l);
        do {
          switch (p.tag) {
            case 3:
              (i = s), (p.flags |= 4096), (t &= -t), (p.lanes |= t);
              var T = Va(p, i, t);
              Nu(p, T);
              break e;
            case 1:
              i = s;
              var v = p.type,
                P = p.stateNode;
              if (
                (p.flags & 64) === 0 &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (P !== null &&
                    typeof P.componentDidCatch == "function" &&
                    (Pe === null || !Pe.has(P))))
              ) {
                (p.flags |= 4096), (t &= -t), (p.lanes |= t);
                var R = Ba(p, i, t);
                Nu(p, R);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Ga(n);
    } catch (x) {
      (t = x), V === n && n !== null && (V = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ya() {
  var e = Zr.current;
  return (Zr.current = Jr), e === null ? Jr : e;
}
function Cn(e, t) {
  var n = N;
  N |= 16;
  var r = Ya();
  (te === e && b === t) || Vt(e, t);
  do
    try {
      Zf();
      break;
    } catch (o) {
      Xa(e, o);
    }
  while (1);
  if ((yl(), (N = n), (Zr.current = r), V !== null)) throw Error(y(261));
  return (te = null), (b = 0), Y;
}
function Zf() {
  for (; V !== null; ) Ka(V);
}
function bf() {
  for (; V !== null && !Ff(); ) Ka(V);
}
function Ka(e) {
  var t = Za(e.alternate, e, mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ga(e) : (V = t),
    (Tl.current = null);
}
function Ga(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = Qf(n, t, mt)), n !== null)) {
        V = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (mt & 1073741824) !== 0 ||
          (n.mode & 4) === 0)
      ) {
        for (var r = 0, o = n.child; o !== null; )
          (r |= o.lanes | o.childLanes), (o = o.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((n = qf(t)), n !== null)) {
        (n.flags &= 2047), (V = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      V = t;
      return;
    }
    V = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function lt(e) {
  var t = Wt();
  return ht(99, ed.bind(null, e, t)), null;
}
function ed(e, t) {
  do nt();
  while (Ln !== null);
  if ((N & 48) !== 0) throw Error(y(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    o = r,
    i = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  for (var l = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
    var s = 31 - Je(i),
      d = 1 << s;
    (o[s] = 0), (l[s] = -1), (u[s] = -1), (i &= ~d);
  }
  if (
    (Fe !== null && (r & 24) === 0 && Fe.has(e) && Fe.delete(e),
    e === te && ((V = te = null), (b = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (
      ((o = N), (N |= 32), (Tl.current = null), ($o = Cr), (l = hu()), pi(l))
    ) {
      if ("selectionStart" in l)
        u = { start: l.selectionStart, end: l.selectionEnd };
      else
        e: if (
          ((u = ((u = l.ownerDocument) && u.defaultView) || window),
          (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0)
        ) {
          (u = d.anchorNode),
            (i = d.anchorOffset),
            (s = d.focusNode),
            (d = d.focusOffset);
          try {
            u.nodeType, s.nodeType;
          } catch {
            u = null;
            break e;
          }
          var g = 0,
            _ = -1,
            p = -1,
            w = 0,
            C = 0,
            E = l,
            f = null;
          t: for (;;) {
            for (
              var a;
              E !== u || (i !== 0 && E.nodeType !== 3) || (_ = g + i),
                E !== s || (d !== 0 && E.nodeType !== 3) || (p = g + d),
                E.nodeType === 3 && (g += E.nodeValue.length),
                (a = E.firstChild) !== null;

            )
              (f = E), (E = a);
            for (;;) {
              if (E === l) break t;
              if (
                (f === u && ++w === i && (_ = g),
                f === s && ++C === d && (p = g),
                (a = E.nextSibling) !== null)
              )
                break;
              (E = f), (f = E.parentNode);
            }
            E = a;
          }
          u = _ === -1 || p === -1 ? null : { start: _, end: p };
        } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    (jo = { focusedElem: l, selectionRange: u }),
      (Cr = !1),
      (An = null),
      (Rr = !1),
      (k = r);
    do
      try {
        td();
      } catch (x) {
        if (k === null) throw Error(y(330));
        Ke(k, x), (k = k.nextEffect);
      }
    while (k !== null);
    (An = null), (k = r);
    do
      try {
        for (l = e; k !== null; ) {
          var c = k.flags;
          if ((c & 16 && jn(k.stateNode, ""), c & 128)) {
            var h = k.alternate;
            if (h !== null) {
              var m = h.ref;
              m !== null &&
                (typeof m == "function" ? m(null) : (m.current = null));
            }
          }
          switch (c & 1038) {
            case 2:
              bu(k), (k.flags &= -3);
              break;
            case 6:
              bu(k), (k.flags &= -3), qo(k.alternate, k);
              break;
            case 1024:
              k.flags &= -1025;
              break;
            case 1028:
              (k.flags &= -1025), qo(k.alternate, k);
              break;
            case 4:
              qo(k.alternate, k);
              break;
            case 8:
              (u = k), Qa(l, u);
              var T = u.alternate;
              Ju(u), T !== null && Ju(T);
          }
          k = k.nextEffect;
        }
      } catch (x) {
        if (k === null) throw Error(y(330));
        Ke(k, x), (k = k.nextEffect);
      }
    while (k !== null);
    if (
      ((m = jo),
      (h = hu()),
      (c = m.focusedElem),
      (l = m.selectionRange),
      h !== c && c && c.ownerDocument && ua(c.ownerDocument.documentElement, c))
    ) {
      for (
        l !== null &&
          pi(c) &&
          ((h = l.start),
          (m = l.end),
          m === void 0 && (m = h),
          ("selectionStart" in c)
            ? ((c.selectionStart = h),
              (c.selectionEnd = Math.min(m, c.value.length)))
            : ((m =
                ((h = c.ownerDocument || document) && h.defaultView) || window),
              m.getSelection &&
                ((m = m.getSelection()),
                (u = c.textContent.length),
                (T = Math.min(l.start, u)),
                (l = l.end === void 0 ? T : Math.min(l.end, u)),
                !m.extend && T > l && ((u = l), (l = T), (T = u)),
                (u = pu(c, T)),
                (i = pu(c, l)),
                u &&
                  i &&
                  (m.rangeCount !== 1 ||
                    m.anchorNode !== u.node ||
                    m.anchorOffset !== u.offset ||
                    m.focusNode !== i.node ||
                    m.focusOffset !== i.offset) &&
                  ((h = h.createRange()),
                  h.setStart(u.node, u.offset),
                  m.removeAllRanges(),
                  T > l
                    ? (m.addRange(h), m.extend(i.node, i.offset))
                    : (h.setEnd(i.node, i.offset), m.addRange(h)))))),
          h = [],
          m = c;
        (m = m.parentNode);

      )
        m.nodeType === 1 &&
          h.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < h.length; c++)
        (m = h[c]),
          (m.element.scrollLeft = m.left),
          (m.element.scrollTop = m.top);
    }
    (Cr = !!$o), (jo = $o = null), (e.current = n), (k = r);
    do
      try {
        for (c = e; k !== null; ) {
          var v = k.flags;
          if ((v & 36 && Yf(c, k.alternate, k), v & 128)) {
            h = void 0;
            var P = k.ref;
            if (P !== null) {
              var R = k.stateNode;
              switch (k.tag) {
                case 5:
                  h = R;
                  break;
                default:
                  h = R;
              }
              typeof P == "function" ? P(h) : (P.current = h);
            }
          }
          k = k.nextEffect;
        }
      } catch (x) {
        if (k === null) throw Error(y(330));
        Ke(k, x), (k = k.nextEffect);
      }
    while (k !== null);
    (k = null), $f(), (N = o);
  } else e.current = n;
  if (be) (be = !1), (Ln = e), (En = t);
  else
    for (k = r; k !== null; )
      (t = k.nextEffect),
        (k.nextEffect = null),
        k.flags & 8 && ((v = k), (v.sibling = null), (v.stateNode = null)),
        (k = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (Pe = null),
    r === 1 ? (e === $i ? Fn++ : ((Fn = 0), ($i = e))) : (Fn = 0),
    (n = n.stateNode),
    dt && typeof dt.onCommitFiberRoot == "function")
  )
    try {
      dt.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((ve(e, Z()), br)) throw ((br = !1), (e = Li), (Li = null), e);
  return (N & 8) !== 0 || Me(), null;
}
function td() {
  for (; k !== null; ) {
    var e = k.alternate;
    Rr ||
      An === null ||
      ((k.flags & 8) !== 0
        ? bl(k, An) && (Rr = !0)
        : k.tag === 13 && Kf(e, k) && bl(k, An) && (Rr = !0));
    var t = k.flags;
    (t & 256) !== 0 && Xf(e, k),
      (t & 512) === 0 ||
        be ||
        ((be = !0),
        Wn(97, function () {
          return nt(), null;
        })),
      (k = k.nextEffect);
  }
}
function nt() {
  if (En !== 90) {
    var e = 97 < En ? 97 : En;
    return (En = 90), ht(e, rd);
  }
  return !1;
}
function nd(e, t) {
  Fi.push(t, e),
    be ||
      ((be = !0),
      Wn(97, function () {
        return nt(), null;
      }));
}
function Ja(e, t) {
  Ai.push(t, e),
    be ||
      ((be = !0),
      Wn(97, function () {
        return nt(), null;
      }));
}
function rd() {
  if (Ln === null) return !1;
  var e = Ln;
  if (((Ln = null), (N & 48) !== 0)) throw Error(y(331));
  var t = N;
  N |= 32;
  var n = Ai;
  Ai = [];
  for (var r = 0; r < n.length; r += 2) {
    var o = n[r],
      i = n[r + 1],
      l = o.destroy;
    if (((o.destroy = void 0), typeof l == "function"))
      try {
        l();
      } catch (s) {
        if (i === null) throw Error(y(330));
        Ke(i, s);
      }
  }
  for (n = Fi, Fi = [], r = 0; r < n.length; r += 2) {
    (o = n[r]), (i = n[r + 1]);
    try {
      var u = o.create;
      o.destroy = u();
    } catch (s) {
      if (i === null) throw Error(y(330));
      Ke(i, s);
    }
  }
  for (u = e.current.firstEffect; u !== null; )
    (e = u.nextEffect),
      (u.nextEffect = null),
      u.flags & 8 && ((u.sibling = null), (u.stateNode = null)),
      (u = e);
  return (N = t), Me(), !0;
}
function ts(e, t, n) {
  (t = Pl(n, t)),
    (t = Va(e, t, 1)),
    He(e, t),
    (t = se()),
    (e = vo(e, 1)),
    e !== null && (ao(e, 1, t), ve(e, t));
}
function Ke(e, t) {
  if (e.tag === 3) ts(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        ts(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pe === null || !Pe.has(r)))
        ) {
          e = Pl(t, e);
          var o = Ba(n, e, 1);
          if ((He(n, o), (o = se()), (n = vo(n, 1)), n !== null))
            ao(n, 1, o), ve(n, o);
          else if (
            typeof r.componentDidCatch == "function" &&
            (Pe === null || !Pe.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function od(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (b & n) === n &&
      (Y === 4 || (Y === 3 && (b & 62914560) === b && 500 > Z() - Ml)
        ? Vt(e, 0)
        : (Nl |= n)),
    ve(e, t);
}
function id(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = Wt() === 99 ? 1 : 2)
        : (Oe === 0 && (Oe = tn),
          (t = xt(62914560 & ~Oe)),
          t === 0 && (t = 4194304))),
    (n = se()),
    (e = vo(e, t)),
    e !== null && (ao(e, t, n), ve(e, n));
}
var Za;
Za = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ie.current) Ee = !0;
    else if ((n & r) !== 0) Ee = (e.flags & 16384) !== 0;
    else {
      switch (((Ee = !1), t.tag)) {
        case 3:
          Vu(t), Vo();
          break;
        case 5:
          Iu(t);
          break;
        case 1:
          le(t.type) && Pr(t);
          break;
        case 4:
          ki(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var o = t.type._context;
          z(Vr, o._currentValue), (o._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? Bu(e, t, n)
              : (z(j, j.current & 1),
                (t = Le(e, t, n)),
                t !== null ? t.sibling : null);
          z(j, j.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return Xu(e, t, n);
            t.flags |= 64;
          }
          if (
            ((o = t.memoizedState),
            o !== null &&
              ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            z(j, j.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), Bo(e, t, n);
      }
      return Le(e, t, n);
    }
  else Ee = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (o = qt(t, ee.current)),
        zt(t, n),
        (o = El(null, t, r, e, o, n)),
        (t.flags |= 1),
        typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), le(r))
        ) {
          var i = !0;
          Pr(t);
        } else i = !1;
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
          vl(t);
        var l = r.getDerivedStateFromProps;
        typeof l == "function" && qr(t, r, l, e),
          (o.updater = yo),
          (t.stateNode = o),
          (o._reactInternals = t),
          Si(t, r, e, n),
          (t = _i(null, t, r, !0, i, n));
      } else (t.tag = 0), oe(null, t, o, n), (t = t.child);
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (i = o._init),
          (o = i(o._payload)),
          (t.type = o),
          (i = t.tag = ud(o)),
          (e = ke(o, e)),
          i)
        ) {
          case 0:
            t = xi(null, t, o, e, n);
            break e;
          case 1:
            t = Uu(null, t, o, e, n);
            break e;
          case 11:
            t = zu(null, t, o, e, n);
            break e;
          case 14:
            t = Du(null, t, o, ke(o.type, e), r, n);
            break e;
        }
        throw Error(y(306, o, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ke(r, o)),
        xi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ke(r, o)),
        Uu(e, t, r, o, n)
      );
    case 3:
      if ((Vu(t), (r = t.updateQueue), e === null || r === null))
        throw Error(y(282));
      if (
        ((r = t.pendingProps),
        (o = t.memoizedState),
        (o = o !== null ? o.element : null),
        Ca(e, t),
        Hn(t, r, null, n),
        (r = t.memoizedState.element),
        r === o)
      )
        Vo(), (t = Le(e, t, n));
      else {
        if (
          ((o = t.stateNode),
          (i = o.hydrate) &&
            ((Ve = jt(t.stateNode.containerInfo.firstChild)),
            (Ie = t),
            (i = Ne = !0)),
          i)
        ) {
          if (((e = o.mutableSourceEagerHydrationData), e != null))
            for (o = 0; o < e.length; o += 2)
              (i = e[o]),
                (i._workInProgressVersionPrimary = e[o + 1]),
                Dt.push(i);
          for (n = Ta(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else oe(e, t, r, n), Vo();
        t = t.child;
      }
      return t;
    case 5:
      return (
        Iu(t),
        e === null && Ei(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        yi(r, o) ? (l = null) : i !== null && yi(r, i) && (t.flags |= 16),
        ja(e, t),
        oe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ei(t), null;
    case 13:
      return Bu(e, t, n);
    case 4:
      return (
        ki(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Wr(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ke(r, o)),
        zu(e, t, r, o, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value);
        var u = t.type._context;
        if ((z(Vr, u._currentValue), (u._currentValue = i), l !== null))
          if (
            ((u = l.value),
            (i = he(u, i)
              ? 0
              : (typeof r._calculateChangedBits == "function"
                  ? r._calculateChangedBits(u, i)
                  : 1073741823) | 0),
            i === 0)
          ) {
            if (l.children === o.children && !ie.current) {
              t = Le(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var s = u.dependencies;
              if (s !== null) {
                l = u.child;
                for (var d = s.firstContext; d !== null; ) {
                  if (d.context === r && (d.observedBits & i) !== 0) {
                    u.tag === 1 &&
                      ((d = We(-1, n & -n)), (d.tag = 2), He(u, d)),
                      (u.lanes |= n),
                      (d = u.alternate),
                      d !== null && (d.lanes |= n),
                      Ea(u.return, n),
                      (s.lanes |= n);
                    break;
                  }
                  d = d.next;
                }
              } else l = u.tag === 10 && u.type === t.type ? null : u.child;
              if (l !== null) l.return = u;
              else
                for (l = u; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((u = l.sibling), u !== null)) {
                    (u.return = l.return), (l = u);
                    break;
                  }
                  l = l.return;
                }
              u = l;
            }
        oe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (i = t.pendingProps),
        (r = i.children),
        zt(t, n),
        (o = ge(o, i.unstable_observedBits)),
        (r = r(o)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (i = ke(o, t.pendingProps)),
        (i = ke(o.type, i)),
        Du(e, t, o, i, r, n)
      );
    case 15:
      return $a(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ke(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        le(r) ? ((e = !0), Pr(t)) : (e = !1),
        zt(t, n),
        _a(t, r, o),
        Si(t, r, o, n),
        _i(null, t, r, !0, e, n)
      );
    case 19:
      return Xu(e, t, n);
    case 23:
      return Bo(e, t, n);
    case 24:
      return Bo(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ld(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function me(e, t, n, r) {
  return new ld(e, t, n, r);
}
function Ol(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ud(e) {
  if (typeof e == "function") return Ol(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lo)) return 11;
    if (e === uo) return 14;
  }
  return 2;
}
function et(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = me(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Or(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ol(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case ze:
        return Bt(n.children, o, i, t);
      case Ns:
        (l = 8), (o |= 16);
        break;
      case Xi:
        (l = 8), (o |= 1);
        break;
      case xn:
        return (
          (e = me(12, n, t, o | 8)),
          (e.elementType = xn),
          (e.type = xn),
          (e.lanes = i),
          e
        );
      case _n:
        return (
          (e = me(13, n, t, o)),
          (e.type = _n),
          (e.elementType = _n),
          (e.lanes = i),
          e
        );
      case Ir:
        return (e = me(19, n, t, o)), (e.elementType = Ir), (e.lanes = i), e;
      case bi:
        return Il(n, o, i, t);
      case Zo:
        return (e = me(24, n, t, o)), (e.elementType = Zo), (e.lanes = i), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yi:
              l = 10;
              break e;
            case Ki:
              l = 9;
              break e;
            case lo:
              l = 11;
              break e;
            case uo:
              l = 14;
              break e;
            case Gi:
              (l = 16), (r = null);
              break e;
            case Ji:
              l = 22;
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = me(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Bt(e, t, n, r) {
  return (e = me(7, e, r, t)), (e.lanes = n), e;
}
function Il(e, t, n, r) {
  return (e = me(23, e, r, t)), (e.elementType = bi), (e.lanes = n), e;
}
function Wo(e, t, n) {
  return (e = me(6, e, null, t)), (e.lanes = n), e;
}
function Ho(e, t, n) {
  return (
    (t = me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function sd(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Mo(0)),
    (this.expirationTimes = Mo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Mo(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function ad(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ut,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function eo(e, t, n, r) {
  var o = t.current,
    i = se(),
    l = Xe(o);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (vt(n) !== n || n.tag !== 1) throw Error(y(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (le(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (le(s)) {
        n = ma(n, s, u);
        break e;
      }
    }
    n = u;
  } else n = Ze;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    He(o, t),
    Ye(o, l, i),
    l
  );
}
function Xo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ns(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ll(e, t) {
  ns(e, t), (e = e.alternate) && ns(e, t);
}
function cd() {
  return null;
}
function Fl(e, t, n) {
  var r =
    (n != null &&
      n.hydrationOptions != null &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new sd(e, t, n != null && n.hydrate === !0)),
    (t = me(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    vl(t),
    (e[en] = n.current),
    ca(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var o = t._getVersion;
      (o = o(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, o])
          : n.mutableSourceEagerHydrationData.push(t, o);
    }
  this._internalRoot = n;
}
Fl.prototype.render = function (e) {
  eo(e, this._internalRoot, null, null);
};
Fl.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  eo(null, e, null, function () {
    t[en] = null;
  });
};
function or(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fd(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new Fl(e, 0, t ? { hydrate: !0 } : void 0);
}
function wo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i._internalRoot;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var d = Xo(l);
        u.call(d);
      };
    }
    eo(t, l, e, o);
  } else {
    if (
      ((i = n._reactRootContainer = fd(n, r)),
      (l = i._internalRoot),
      typeof o == "function")
    ) {
      var s = o;
      o = function () {
        var d = Xo(l);
        s.call(d);
      };
    }
    Ha(function () {
      eo(t, l, e, o);
    });
  }
  return Xo(l);
}
Qs = function (e) {
  if (e.tag === 13) {
    var t = se();
    Ye(e, 4, t), Ll(e, 4);
  }
};
ol = function (e) {
  if (e.tag === 13) {
    var t = se();
    Ye(e, 67108864, t), Ll(e, 67108864);
  }
};
qs = function (e) {
  if (e.tag === 13) {
    var t = se(),
      n = Xe(e);
    Ye(e, n, t), Ll(e, n);
  }
};
Ws = function (e, t) {
  return t();
};
si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ho(r);
            if (!o) throw Error(y(90));
            Rs(r), ei(r, o);
          }
        }
      }
      break;
    case "textarea":
      Is(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ft(e, !!n.multiple, t, !1);
  }
};
tl = Wa;
Ds = function (e, t, n, r, o) {
  var i = N;
  N |= 4;
  try {
    return ht(98, e.bind(null, t, n, r, o));
  } finally {
    (N = i), N === 0 && (rn(), Me());
  }
};
nl = function () {
  (N & 49) === 0 && (Jf(), nt());
};
Us = function (e, t) {
  var n = N;
  N |= 2;
  try {
    return e(t);
  } finally {
    (N = n), N === 0 && (rn(), Me());
  }
};
function ba(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!or(t)) throw Error(y(200));
  return ad(e, t, null, n);
}
var dd = { Events: [tr, Rt, ho, js, zs, nt, { current: !1 }] },
  vn = {
    findFiberByHostInstance: at,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  pd = {
    bundleType: vn.bundleType,
    version: vn.version,
    rendererPackageName: vn.rendererPackageName,
    rendererConfig: vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vn.findFiberByHostInstance || cd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vr.isDisabled && vr.supportsFiber)
    try {
      (hl = vr.inject(pd)), (dt = vr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dd;
we.createPortal = ba;
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : Error(y(268, Object.keys(e)));
  return (e = Bs(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e, t) {
  var n = N;
  if ((n & 48) !== 0) return e(t);
  N |= 1;
  try {
    if (e) return ht(99, e.bind(null, t));
  } finally {
    (N = n), Me();
  }
};
we.hydrate = function (e, t, n) {
  if (!or(t)) throw Error(y(200));
  return wo(null, e, t, !0, n);
};
we.render = function (e, t, n) {
  if (!or(t)) throw Error(y(200));
  return wo(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!or(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Ha(function () {
        wo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[en] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Wa;
we.unstable_createPortal = function (e, t) {
  return ba(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!or(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return wo(e, t, n, !1, r);
};
we.version = "17.0.2";
function ec() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec);
    } catch (e) {
      console.error(e);
    }
}
ec(), (xs.exports = we);
var Al = xs.exports;
const hd = "0.5.0";
var Gn = wd,
  to = Ed,
  Ce = [],
  de = [],
  md = typeof Uint8Array != "undefined" ? Uint8Array : Array,
  Yo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Et = 0, yd = Yo.length; Et < yd; ++Et)
  (Ce[Et] = Yo[Et]), (de[Yo.charCodeAt(Et)] = Et);
de["-".charCodeAt(0)] = 62;
de["_".charCodeAt(0)] = 63;
function gd(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - (n % 4);
  return [n, r];
}
function vd(e, t, n) {
  return ((t + n) * 3) / 4 - n;
}
function wd(e) {
  var t,
    n = gd(e),
    r = n[0],
    o = n[1],
    i = new md(vd(e, r, o)),
    l = 0,
    u = o > 0 ? r - 4 : r,
    s;
  for (s = 0; s < u; s += 4)
    (t =
      (de[e.charCodeAt(s)] << 18) |
      (de[e.charCodeAt(s + 1)] << 12) |
      (de[e.charCodeAt(s + 2)] << 6) |
      de[e.charCodeAt(s + 3)]),
      (i[l++] = (t >> 16) & 255),
      (i[l++] = (t >> 8) & 255),
      (i[l++] = t & 255);
  return (
    o === 2 &&
      ((t = (de[e.charCodeAt(s)] << 2) | (de[e.charCodeAt(s + 1)] >> 4)),
      (i[l++] = t & 255)),
    o === 1 &&
      ((t =
        (de[e.charCodeAt(s)] << 10) |
        (de[e.charCodeAt(s + 1)] << 4) |
        (de[e.charCodeAt(s + 2)] >> 2)),
      (i[l++] = (t >> 8) & 255),
      (i[l++] = t & 255)),
    i
  );
}
function Sd(e) {
  return (
    Ce[(e >> 18) & 63] + Ce[(e >> 12) & 63] + Ce[(e >> 6) & 63] + Ce[e & 63]
  );
}
function kd(e, t, n) {
  for (var r, o = [], i = t; i < n; i += 3)
    (r =
      ((e[i] << 16) & 16711680) + ((e[i + 1] << 8) & 65280) + (e[i + 2] & 255)),
      o.push(Sd(r));
  return o.join("");
}
function Ed(e) {
  for (
    var t, n = e.length, r = n % 3, o = [], i = 16383, l = 0, u = n - r;
    l < u;
    l += i
  )
    o.push(kd(e, l, l + i > u ? u : l + i));
  return (
    r === 1
      ? ((t = e[n - 1]), o.push(Ce[t >> 2] + Ce[(t << 4) & 63] + "=="))
      : r === 2 &&
        ((t = (e[n - 2] << 8) + e[n - 1]),
        o.push(Ce[t >> 10] + Ce[(t >> 4) & 63] + Ce[(t << 2) & 63] + "=")),
    o.join("")
  );
}
const tc = !0,
  Xt = BigInt("-9223372036854775808"),
  $l = BigInt("9223372036854775807"),
  zi = BigInt("0"),
  Cd = BigInt("8"),
  xd = BigInt("256");
class Jn {
  constructor(t, n) {
    (this.tableName = t), (this.id = n);
  }
  equals(t) {
    return t instanceof Jn
      ? this.tableName === t.tableName && this.id === t.id
      : !1;
  }
  static fromJSON(t) {
    if (typeof t.$id != "string")
      throw new Error(
        `Object ${JSON.stringify(t)} isn't a valid Id: $id isn't a string.`
      );
    const n = t.$id.split("|");
    if (n.length !== 2)
      throw new Error(
        `Object ${JSON.stringify(t)} isn't a valid Id: Wrong number of parts.`
      );
    return new Jn(n[0], n[1]);
  }
  toJSON() {
    return { $id: `${this.tableName}|${this.id}` };
  }
  toString() {
    return this.id;
  }
  inspect() {
    return `Id('${this.tableName}', '${this.id}')`;
  }
}
function nc(e) {
  return Number.isNaN(e) || !Number.isFinite(e) || Object.is(e, -0);
}
function _d(e) {
  e < zi && (e -= Xt + Xt);
  let t = e.toString(16);
  t.length % 2 == 1 && (t = "0" + t);
  const n = new Uint8Array(new ArrayBuffer(8));
  let r = 0;
  for (const o of t.match(/.{2}/g).reverse())
    n.set([parseInt(o, 16)], r++), (e >>= Cd);
  return to(n);
}
function Pd(e) {
  const t = Gn(e);
  if (t.byteLength !== 8)
    throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);
  let n = zi,
    r = zi;
  for (const o of t) (n += BigInt(o) * xd ** r), r++;
  return n > $l && (n += Xt + Xt), n;
}
function Td(e) {
  if (e < Xt || $l < e)
    throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
  const t = new ArrayBuffer(8);
  return new DataView(t).setBigInt64(0, e, !0), to(new Uint8Array(t));
}
function Nd(e) {
  const t = Gn(e);
  if (t.byteLength !== 8)
    throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);
  return new DataView(t.buffer).getBigInt64(0, !0);
}
const Md = DataView.prototype.setBigInt64 ? Td : _d,
  Rd = DataView.prototype.getBigInt64 ? Nd : Pd,
  rs = 64,
  Od = /^_+$/,
  Id = /^[a-zA-Z_][a-zA-Z0-9_]{0,63}$/;
function rc(e) {
  if (e.length === 0) throw new Error("Empty field names are disallowed.");
  if (e.length > rs)
    throw new Error(`Field name ${e} exceeds maximum field name length ${rs}.`);
  if (e.startsWith("$"))
    throw new Error(`Field name ${e} starts with a '$', which is reserved.`);
  if (Od.test(e))
    throw new Error(`Field name ${e} can't exclusively be underscores.`);
  if (!Id.test(e))
    throw new Error(
      `Field name ${e} must only contain alphanumeric characters or underscores and can't start with a number.`
    );
}
function _t(e) {
  if (
    e === null ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    typeof e == "string"
  )
    return e;
  if (e instanceof Array) return e.map(_t);
  if (typeof e != "object") throw new Error(`Unexpected type of ${e}`);
  const t = Object.entries(e);
  if (t.length === 1) {
    const r = t[0][0];
    if (r === "$id" || r === "$weakRef" || r === "$strongRef")
      return Jn.fromJSON(e);
    if (r === "$bytes") {
      if (typeof e.$bytes != "string")
        throw new Error(`Malformed $bytes field on ${e}`);
      return Gn(e.$bytes).buffer;
    }
    if (r === "$integer") {
      if (typeof e.$integer != "string")
        throw new Error(`Malformed $integer field on ${e}`);
      return Rd(e.$integer);
    }
    if (r === "$float") {
      if (typeof e.$float != "string")
        throw new Error(`Malformed $float field on ${e}`);
      const o = Gn(e.$float);
      if (o.byteLength !== 8)
        throw new Error(
          `Received ${o.byteLength} bytes, expected 8 for $float`
        );
      const l = new DataView(o.buffer).getFloat64(0, tc);
      if (!nc(l)) throw new Error(`Float ${l} should be encoded as a number`);
      return l;
    }
    if (r === "$set") {
      if (!(e.$set instanceof Array))
        throw new Error(`Malformed $set field on ${e}`);
      return new Set(e.$set.map(_t));
    }
    if (r === "$map") {
      if (!(e.$map instanceof Array))
        throw new Error(`Malformed $map field on ${e}`);
      const o = new Map();
      for (const i of e.$map) {
        if (!(i instanceof Array) || i.length !== 2)
          throw new Error(`Malformed pair in $map ${e}`);
        const l = _t(i[0]),
          u = _t(i[1]);
        o.set(l, u);
      }
      return o;
    }
  }
  const n = {};
  for (const [r, o] of Object.entries(e)) rc(r), (n[r] = _t(o));
  return n;
}
function jl(e) {
  return _t(e);
}
function Ko(e) {
  return JSON.stringify(e, (t, n) => (n === void 0 ? "undefined" : n));
}
function Pt(e, t, n) {
  if (e === void 0)
    throw new Error(
      `undefined is not a valid Convex value (present at path ${n} in original object ${Ko(
        t
      )}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  if (e === null) return e;
  if (e instanceof Jn) return e.toJSON();
  if (typeof e == "bigint") {
    if (e < Xt || $l < e)
      throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
    return { $integer: Md(e) };
  }
  if (typeof e == "number")
    if (nc(e)) {
      const i = new ArrayBuffer(8);
      return (
        new DataView(i).setFloat64(0, e, tc), { $float: to(new Uint8Array(i)) }
      );
    } else return e;
  if (typeof e == "boolean" || typeof e == "string") return e;
  if (e instanceof ArrayBuffer) return { $bytes: to(new Uint8Array(e)) };
  if (e instanceof Array) return e.map((i, l) => Pt(i, t, n + `[${l}]`));
  if (e instanceof Set)
    return { $set: [...e].map((i, l) => Pt(i, t, n + `.keys()[${l}]`)) };
  if (e instanceof Map)
    return {
      $map: [...e].map(([i, l], u) => {
        const s = Pt(i, t, n + `.keys()[${u}]`),
          d = Pt(l, t, n + `.values()[${u}]`);
        return [s, d];
      }),
    };
  if (typeof e != "object")
    throw new Error(
      `${e} is not a supported Convex type (present at path ${n} in original object ${Ko(
        t
      )}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  const r = Object.getPrototypeOf(e);
  if (r !== null && r !== Object.prototype)
    throw new Error(
      `${e} is not a supported Convex type (present at path ${n} in original object ${Ko(
        t
      )}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  const o = {};
  for (const [i, l] of Object.entries(e)) rc(i), (o[i] = Pt(l, t, n + `.${i}`));
  return o;
}
function Yt(e) {
  return Pt(e, e, "");
}
function no(e) {
  const t = e.split(":");
  let n, r;
  return (
    t.length == 1
      ? ((n = t[0]), (r = "default"))
      : ((n = t.slice(0, t.length - 1).join(":")), (r = t[t.length - 1])),
    n.endsWith(".js") || (n = `${n}.js`),
    `${n}:${r}`
  );
}
function Kt(e, t) {
  return JSON.stringify({ udfPath: no(e), args: Yt(t) });
}
class Ld {
  constructor() {
    (this.nextQueryId = 0),
      (this.querySetVersion = 0),
      (this.identityVersion = 0),
      (this.querySet = new Map()),
      (this.queryIdToToken = new Map());
  }
  subscribe(t, n, r) {
    const o = no(t),
      i = Kt(o, n),
      l = this.querySet.get(i);
    if (l !== void 0)
      return (
        (l.numSubscribers += 1),
        {
          queryToken: i,
          modification: null,
          unsubscribe: () => this.removeSubscriber(i),
        }
      );
    {
      const u = this.nextQueryId++,
        s = {
          id: u,
          canonicalizedUdfPath: o,
          args: n,
          numSubscribers: 1,
          journal: r,
        };
      this.querySet.set(i, s), this.queryIdToToken.set(u, i);
      const d = this.querySetVersion,
        g = ++this.querySetVersion,
        _ = {
          type: "Add",
          queryId: u,
          udfPath: o,
          args: n.map(Yt),
          journal: r,
        };
      return {
        queryToken: i,
        modification: {
          type: "ModifyQuerySet",
          baseVersion: d,
          newVersion: g,
          modifications: [_],
        },
        unsubscribe: () => this.removeSubscriber(i),
      };
    }
  }
  saveQueryJournals(t) {
    for (const n of t.modifications)
      switch (n.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          const r = n.journal;
          if (r !== void 0) {
            const o = this.queryIdToToken.get(n.queryId);
            o !== void 0 && (this.querySet.get(o).journal = r);
          }
          break;
        }
        case "QueryRemoved":
          break;
        default:
          throw new Error(`Invalid modification ${n}`);
      }
  }
  queryId(t, n) {
    const r = no(t),
      o = Kt(r, n),
      i = this.querySet.get(o);
    return i !== void 0 ? i.id : null;
  }
  setAuth(t) {
    this.auth = { tokenType: "User", value: t };
    const n = this.identityVersion++;
    return { type: "Authenticate", baseVersion: n, ...this.auth };
  }
  setAdminAuth(t) {
    this.auth = { tokenType: "Admin", value: t };
    const n = this.identityVersion++;
    return { type: "Authenticate", baseVersion: n, ...this.auth };
  }
  clearAuth() {
    this.auth = void 0;
    const t = this.identityVersion++;
    return { type: "Authenticate", tokenType: "None", baseVersion: t };
  }
  queryPath(t) {
    const n = this.queryIdToToken.get(t);
    return n ? this.querySet.get(n).canonicalizedUdfPath : null;
  }
  queryArgs(t) {
    const n = this.queryIdToToken.get(t);
    return n ? this.querySet.get(n).args : null;
  }
  queryToken(t) {
    var n;
    return (n = this.queryIdToToken.get(t)) != null ? n : null;
  }
  queryJournal(t) {
    var n;
    return (n = this.querySet.get(t)) == null ? void 0 : n.journal;
  }
  restart() {
    const t = [];
    for (const o of this.querySet.values()) {
      const i = {
        type: "Add",
        queryId: o.id,
        udfPath: o.canonicalizedUdfPath,
        args: o.args.map(Yt),
        journal: o.journal,
      };
      t.push(i);
    }
    this.querySetVersion = 1;
    const n = {
      type: "ModifyQuerySet",
      baseVersion: 0,
      newVersion: 1,
      modifications: t,
    };
    if (!this.auth) return (this.identityVersion = 0), [n, void 0];
    const r = { type: "Authenticate", baseVersion: 0, ...this.auth };
    return (this.identityVersion = 1), [n, r];
  }
  removeSubscriber(t) {
    const n = this.querySet.get(t);
    if (n.numSubscribers > 1) return (n.numSubscribers -= 1), null;
    {
      this.querySet.delete(t), this.queryIdToToken.delete(n.id);
      const r = this.querySetVersion,
        o = ++this.querySetVersion,
        i = { type: "Remove", queryId: n.id };
      return {
        type: "ModifyQuerySet",
        baseVersion: r,
        newVersion: o,
        modifications: [i],
      };
    }
  }
}
const Fd = "color:rgb(0, 145, 255)";
function oc(e) {
  switch (e) {
    case "query":
      return "Q";
    case "mutation":
      return "M";
    case "action":
      return "A";
  }
}
function Gt(e, t, n, r) {
  const o = oc(t);
  e == "info"
    ? console.log(`%c[CONVEX ${o}(${n})] ${r}`, Fd)
    : console.error(`[CONVEX ${o}(${n})] ${r}`);
}
function Ad(e) {
  const t = `[CONVEX FATAL ERROR] ${e}`;
  return console.error(t), new Error(t);
}
function ro(e, t, n) {
  const r = oc(e);
  return new Error(`[CONVEX ${r}(${t})] ${n}`);
}
class $d {
  constructor() {
    this.inflightMutations = new Map();
  }
  request(t, n, r) {
    const o = { type: "Mutation", mutationId: r, udfPath: t, args: Yt(n) },
      i = new Promise((l, u) => {
        this.inflightMutations.set(r, {
          message: o,
          status: { status: "Requested", onResult: l, onFailure: u },
        });
      });
    return { message: o, result: i };
  }
  onResponse(t) {
    const n = this.inflightMutations.get(t.mutationId);
    if (n === void 0) return null;
    if (n.status.status === "Requested") {
      const r = n.message.udfPath;
      for (const o of t.logLines) Gt("info", "mutation", r, o);
      return t.success
        ? (n.status.onResult(jl(t.result)),
          (n.status = { status: "Committed", ts: t.ts }),
          null)
        : (this.inflightMutations.delete(t.mutationId),
          Gt("error", "mutation", r, t.result),
          n.status.onFailure(ro("mutation", r, t.result)),
          t.mutationId);
    }
    return null;
  }
  removeCompletedMutations(t) {
    const n = new Set();
    for (const [r, o] of this.inflightMutations.entries()) {
      const i = o.status;
      i.status == "Committed" &&
        i.ts.lessThanOrEqual(t) &&
        (n.add(r), this.inflightMutations.delete(r));
    }
    return n;
  }
  hasUncommittedMutations() {
    for (const t of this.inflightMutations.values())
      if (t.status.status === "Requested") return !0;
    return !1;
  }
  restart() {
    const t = [];
    for (const n of this.inflightMutations.values()) t.push(n.message);
    return t;
  }
}
class Zn {
  constructor(t) {
    (this.queryResults = t), (this.modifiedQueries = []);
  }
  getQuery(t, n) {
    const r = this.queryResults.get(Kt(t, n));
    if (r !== void 0) return Zn.queryValue(r.result);
  }
  getAllQueries(t) {
    const n = [];
    for (const r of this.queryResults.values())
      r.udfPath === no(t) &&
        n.push({ args: r.args, value: Zn.queryValue(r.result) });
    return n;
  }
  setQuery(t, n, r) {
    const o = Kt(t, n);
    let i;
    r === void 0 ? (i = void 0) : (i = { success: !0, value: r });
    const l = { udfPath: t, args: n, result: i };
    this.queryResults.set(o, l), this.modifiedQueries.push(o);
  }
  static queryValue(t) {
    if (t !== void 0) return t.success ? t.value : void 0;
  }
}
class jd {
  constructor() {
    (this.queryResults = new Map()), (this.optimisticUpdates = []);
  }
  ingestQueryResultsFromServer(t, n) {
    this.optimisticUpdates = this.optimisticUpdates.filter(
      (l) => !n.has(l.mutationId)
    );
    const r = this.queryResults;
    this.queryResults = new Map(t);
    const o = new Zn(this.queryResults);
    for (const l of this.optimisticUpdates) l.update(o);
    const i = [];
    for (const [l, u] of this.queryResults) {
      const s = r.get(l);
      (s === void 0 || s.result !== u.result) && i.push(l);
    }
    return i;
  }
  applyOptimisticUpdate(t, n) {
    this.optimisticUpdates.push({ update: t, mutationId: n });
    const r = new Zn(this.queryResults);
    return t(r), r.modifiedQueries;
  }
  queryResult(t) {
    const n = this.queryResults.get(t);
    if (n === void 0) return;
    const r = n.result;
    if (r !== void 0) {
      if (r.success) return r.value;
      throw ro("query", n.udfPath, r.errorMessage);
    }
  }
}
class ue {
  static isLong(t) {
    return (t && t.__isUnsignedLong__) === !0;
  }
  constructor(t, n) {
    (this.low = t | 0), (this.high = n | 0), (this.__isUnsignedLong__ = !0);
  }
  static fromBytesLE(t) {
    return new ue(
      t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
      t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24)
    );
  }
  toBytesLE() {
    const t = this.high,
      n = this.low;
    return [
      n & 255,
      (n >>> 8) & 255,
      (n >>> 16) & 255,
      n >>> 24,
      t & 255,
      (t >>> 8) & 255,
      (t >>> 16) & 255,
      t >>> 24,
    ];
  }
  static fromNumber(t) {
    return isNaN(t) || t < 0
      ? os
      : t >= zd
      ? Dd
      : new ue(t % oo | 0, (t / oo) | 0);
  }
  equals(t) {
    return (
      ue.isLong(t) || (t = ue.fromValue(t)),
      this.high >>> 31 === 1 && t.high >>> 31 === 1
        ? !1
        : this.high === t.high && this.low === t.low
    );
  }
  notEquals(t) {
    return !this.equals(t);
  }
  comp(t) {
    return (
      ue.isLong(t) || (t = ue.fromValue(t)),
      this.equals(t)
        ? 0
        : t.high >>> 0 > this.high >>> 0 ||
          (t.high === this.high && t.low >>> 0 > this.low >>> 0)
        ? -1
        : 1
    );
  }
  lessThanOrEqual(t) {
    return this.comp(t) <= 0;
  }
  static fromValue(t) {
    return typeof t == "number" ? ue.fromNumber(t) : new ue(t.low, t.high);
  }
}
const os = new ue(0, 0),
  is = 1 << 16,
  oo = is * is,
  zd = oo * oo,
  Dd = new ue(-1, -1);
class ls {
  constructor(t) {
    (this.version = { querySet: 0, ts: ue.fromNumber(0), identity: 0 }),
      (this.remoteQuerySet = new Map()),
      (this.queryPath = t);
  }
  transition(t) {
    var r;
    const n = t.startVersion;
    if (
      this.version.querySet !== n.querySet ||
      this.version.ts.notEquals(n.ts) ||
      this.version.identity !== n.identity
    )
      throw new Error(`Invalid start version: ${n.ts}:${n.querySet}`);
    for (const o of t.modifications)
      switch (o.type) {
        case "QueryUpdated": {
          const i = this.queryPath(o.queryId);
          if (i) for (const u of o.logLines) Gt("info", "query", i, u);
          const l = jl((r = o.value) != null ? r : null);
          this.remoteQuerySet.set(o.queryId, { success: !0, value: l });
          break;
        }
        case "QueryFailed": {
          const i = this.queryPath(o.queryId);
          if (i) for (const l of o.logLines) Gt("info", "query", i, l);
          this.remoteQuerySet.set(o.queryId, {
            success: !1,
            errorMessage: o.errorMessage,
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(o.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${o}`);
      }
    this.version = t.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function Go(e) {
  const t = Gn(e);
  return ue.fromBytesLE(Array.from(t));
}
function Ud(e) {
  switch (e.type) {
    case "FatalError":
    case "ActionResponse":
    case "Ping":
      return { ...e };
    case "MutationResponse":
      return e.success ? { ...e, ts: Go(e.ts) } : { ...e };
    case "Transition":
      return {
        ...e,
        startVersion: { ...e.startVersion, ts: Go(e.startVersion.ts) },
        endVersion: { ...e.endVersion, ts: Go(e.endVersion.ts) },
      };
  }
}
const Vd = 1e3,
  Bd = 1005;
function us() {
  let e;
  return {
    promise: new Promise((n) => {
      e = n;
    }),
    resolve: e,
  };
}
class Qd {
  constructor(t, n, r, o) {
    (this.webSocketConstructor = o),
      (this.socket = { state: "disconnected" }),
      (this.connectionCount = 0),
      (this.lastCloseReason = "InitialConnect"),
      (this.initialBackoff = 100),
      (this.maxBackoff = 16e3),
      (this.retries = 0),
      (this.uri = t),
      (this.onOpen = n),
      (this.onMessage = r),
      this.connect();
  }
  async connect() {
    if (
      this.socket.state === "closing" ||
      this.socket.state === "stopping" ||
      this.socket.state === "stopped"
    )
      return;
    if (this.socket.state !== "disconnected")
      throw new Error("Didn't start connection from disconnected state");
    const t = new this.webSocketConstructor(this.uri);
    (this.socket = { state: "connecting", ws: t }),
      (t.onopen = () => {
        if (this.socket.state !== "connecting")
          throw new Error("onopen called with socket not in connecting state");
        (this.socket = { state: "ready", ws: t }),
          this.onOpen({
            connectionCount: this.connectionCount,
            lastCloseReason: this.lastCloseReason,
          }),
          (this.connectionCount += 1),
          (this.lastCloseReason = null);
      }),
      (t.onerror = (n) => {
        const r = n.message;
        console.log(`WebSocket error: ${r}`),
          this.closeAndReconnect("WebSocketError");
      }),
      (t.onmessage = (n) => {
        this.retries = 0;
        const r = Ud(JSON.parse(n.data));
        this.onMessage(r);
      }),
      (t.onclose = (n) => {
        var o;
        if (
          (this.lastCloseReason === null &&
            (this.lastCloseReason =
              (o = n.reason) != null ? o : "OnCloseInvoked"),
          n.code !== Vd && n.code !== Bd)
        ) {
          let i = `WebSocket closed unexpectedly with code ${n.code}`;
          n.reason && (i += `: ${n.reason}`), console.error(i);
        }
        if (this.socket.state === "stopping") {
          this.socket.promisePair.resolve(null),
            (this.socket = { state: "stopped" });
          return;
        }
        this.socket = { state: "disconnected" };
        const r = this.nextBackoff();
        console.log(`Attempting reconnect in ${r}ms`),
          setTimeout(() => this.connect(), r);
      });
  }
  sendMessage(t) {
    if (this.socket.state === "ready") {
      const n = JSON.stringify(t);
      try {
        this.socket.ws.send(n);
      } catch (r) {
        console.log(`Failed to send message on WebSocket, reconnecting: ${r}`),
          this.closeAndReconnect("FailedToSendMessage");
      }
    }
  }
  closeAndReconnect(t) {
    switch (this.socket.state) {
      case "disconnected":
      case "closing":
      case "stopping":
      case "stopped":
        return;
      case "connecting":
      case "ready":
        (this.lastCloseReason = t),
          this.socket.ws.close(),
          (this.socket = { state: "closing" });
        return;
      default:
        this.socket;
    }
  }
  async stop() {
    switch (this.socket.state) {
      case "stopped":
        return;
      case "connecting":
      case "ready":
        this.socket.ws.close(),
          (this.socket = { state: "stopping", promisePair: us() }),
          await this.socket.promisePair.promise;
        return;
      case "closing":
        (this.socket = { state: "stopping", promisePair: us() }),
          await this.socket.promisePair.promise;
        return;
      case "disconnected":
        this.socket = { state: "stopped" };
        return;
      case "stopping":
        await this.socket.promisePair.promise;
        return;
      default:
        this.socket;
    }
  }
  nextBackoff() {
    const t = this.initialBackoff * Math.pow(2, this.retries);
    this.retries += 1;
    const n = Math.min(t, this.maxBackoff),
      r = n * (Math.random() - 0.5);
    return n + r;
  }
}
var wr,
  qd = new Uint8Array(16);
function Wd() {
  if (
    !wr &&
    ((wr =
      (typeof crypto != "undefined" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto != "undefined" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !wr)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return wr(qd);
}
var Hd =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Xd(e) {
  return typeof e == "string" && Hd.test(e);
}
var H = [];
for (var Jo = 0; Jo < 256; ++Jo) H.push((Jo + 256).toString(16).substr(1));
function Yd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = (
      H[e[t + 0]] +
      H[e[t + 1]] +
      H[e[t + 2]] +
      H[e[t + 3]] +
      "-" +
      H[e[t + 4]] +
      H[e[t + 5]] +
      "-" +
      H[e[t + 6]] +
      H[e[t + 7]] +
      "-" +
      H[e[t + 8]] +
      H[e[t + 9]] +
      "-" +
      H[e[t + 10]] +
      H[e[t + 11]] +
      H[e[t + 12]] +
      H[e[t + 13]] +
      H[e[t + 14]] +
      H[e[t + 15]]
    ).toLowerCase();
  if (!Xd(n)) throw TypeError("Stringified UUID is invalid");
  return n;
}
function Kd(e, t, n) {
  e = e || {};
  var r = e.random || (e.rng || Wd)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    n = n || 0;
    for (var o = 0; o < 16; ++o) t[n + o] = r[o];
    return t;
  }
  return Yd(r);
}
class Gd {
  constructor() {
    this.inflightActions = new Map();
  }
  request(t, n, r) {
    const o = { type: "Action", actionId: r, udfPath: t, args: Yt(n) },
      i = new Promise((l, u) => {
        this.inflightActions.set(r, { message: o, onResult: l, onFailure: u });
      });
    return { message: o, result: i };
  }
  onResponse(t) {
    const n = this.inflightActions.get(t.actionId);
    if (n === void 0) return;
    this.inflightActions.delete(t.actionId);
    const r = n.message.udfPath;
    for (const o of t.logLines) Gt("info", "action", r, o);
    t.success
      ? n.onResult(jl(t.result))
      : (Gt("error", "action", r, t.result),
        n.onFailure(ro("action", r, t.result)));
  }
  hasInflightActions() {
    return this.inflightActions.size > 0;
  }
  restart() {
    for (const [t, n] of this.inflightActions) {
      this.inflightActions.delete(t);
      const r = n.message.udfPath;
      n.onFailure(ro("action", r, "Transient error"));
    }
  }
}
const Jd = { unsavedChangesWarning: !0 };
class Zd {
  constructor(t, n, r) {
    r = { ...Jd, ...r };
    let o = r.webSocketConstructor;
    if (!o && typeof WebSocket == "undefined")
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient"
      );
    o = o || WebSocket;
    const i = t.address,
      l = i.search("://");
    if (l == -1) throw new Error("Provided address was not an absolute URL.");
    const u = i.substring(l + 3),
      s = i.substring(0, l);
    let d;
    if (s === "http") d = "ws";
    else if (s === "https") d = "wss";
    else throw new Error(`Unknown parent protocol ${s}`);
    const g = `${d}://${u}/api/${hd}/sync`;
    (this.state = new Ld()),
      (this.remoteQuerySet = new ls((p) => this.state.queryPath(p))),
      (this.mutationManager = new $d()),
      (this.actionManager = new Gd()),
      (this.optimisticQueryResults = new jd()),
      (this.onTransition = n),
      (this.nextMutationId = 0),
      (this.nextActionId = 0),
      (this.sessionId = Kd());
    const { unsavedChangesWarning: _ } = r;
    if (typeof window == "undefined" && _)
      throw new Error(
        "unsavedChangesWarning enabled, but no window object found! Navigating away from the page could cause in-flight mutations to be dropped. Pass {unsavedChangesWarning: false} in Convex client options to disable this feature."
      );
    _ &&
      window.addEventListener("beforeunload", (p) => {
        if (
          this.mutationManager.hasUncommittedMutations() ||
          this.actionManager.hasInflightActions()
        ) {
          p.preventDefault();
          const w =
            "Are you sure you want to leave? Your changes may not be saved.";
          return ((p || window.event).returnValue = w), w;
        }
      }),
      (this.webSocketManager = new Qd(
        g,
        (p) => {
          this.webSocketManager.sendMessage({
            ...p,
            type: "Connect",
            sessionId: this.sessionId,
          }),
            (this.remoteQuerySet = new ls((E) => this.state.queryPath(E)));
          const [w, C] = this.state.restart();
          C && this.webSocketManager.sendMessage(C),
            this.webSocketManager.sendMessage(w),
            this.actionManager.restart();
          for (const E of this.mutationManager.restart())
            this.webSocketManager.sendMessage(E);
        },
        (p) => {
          if (p.type == "Transition") {
            this.remoteQuerySet.transition(p), this.state.saveQueryJournals(p);
            const w = this.mutationManager.removeCompletedMutations(
              this.remoteQuerySet.timestamp()
            );
            this.notifyOnQueryResultChanges(w);
          } else if (p.type == "MutationResponse") {
            const w = this.mutationManager.onResponse(p);
            w && this.notifyOnQueryResultChanges(new Set([w]));
          } else if (p.type == "ActionResponse")
            this.actionManager.onResponse(p);
          else if (p.type == "FatalError") {
            const w = Ad(p.error);
            throw (this.webSocketManager.stop(), w);
          }
        },
        o
      ));
  }
  notifyOnQueryResultChanges(t) {
    const n = this.remoteQuerySet.remoteQueryResults(),
      r = new Map();
    for (const [o, i] of n) {
      const l = this.state.queryToken(o);
      if (l !== null) {
        const u = {
          result: i,
          udfPath: this.state.queryPath(o),
          args: this.state.queryArgs(o),
        };
        r.set(l, u);
      }
    }
    this.onTransition(
      this.optimisticQueryResults.ingestQueryResultsFromServer(r, t)
    );
  }
  setAuth(t) {
    const n = this.state.setAuth(t);
    this.webSocketManager.sendMessage(n);
  }
  setAdminAuth(t) {
    const n = this.state.setAdminAuth(t);
    this.webSocketManager.sendMessage(n);
  }
  clearAuth() {
    const t = this.state.clearAuth();
    this.webSocketManager.sendMessage(t);
  }
  subscribe(t, n, r) {
    if (!Array.isArray(n))
      throw new Error(
        `Query arguments to \`InternalConvexClient.subcribe\` must be an array. Received ${n}.`
      );
    const {
      modification: o,
      queryToken: i,
      unsubscribe: l,
    } = this.state.subscribe(t, n, r);
    return (
      o !== null && this.webSocketManager.sendMessage(o),
      {
        queryToken: i,
        unsubscribe: () => {
          const u = l();
          u && this.webSocketManager.sendMessage(u);
        },
      }
    );
  }
  localQueryResult(t, n) {
    const r = Kt(t, n);
    return this.optimisticQueryResults.queryResult(r);
  }
  queryJournal(t, n) {
    const r = Kt(t, n);
    return this.state.queryJournal(r);
  }
  async mutate(t, n, r = null) {
    const o = this.nextMutationId;
    if ((this.nextMutationId++, r !== null)) {
      const u = (d) => {
          r(d, ...n);
        },
        s = this.optimisticQueryResults.applyOptimisticUpdate(u, o);
      this.onTransition(s);
    }
    const { message: i, result: l } = this.mutationManager.request(t, n, o);
    return this.webSocketManager.sendMessage(i), l;
  }
  async action(t, n) {
    const r = this.nextActionId;
    this.nextActionId++;
    const { message: o, result: i } = this.actionManager.request(t, n, r);
    return this.webSocketManager.sendMessage(o), i;
  }
  async close() {
    return this.webSocketManager.stop();
  }
}
function bd({ getCurrentValue: e, subscribe: t }) {
  const [n, r] = ae.exports.useState(() => ({
    getCurrentValue: e,
    subscribe: t,
    value: e(),
  }));
  let o = n.value;
  return (
    (n.getCurrentValue !== e || n.subscribe !== t) &&
      ((o = e()), r({ getCurrentValue: e, subscribe: t, value: o })),
    ae.exports.useEffect(() => {
      let i = !1;
      const l = () => {
          i ||
            r((s) => {
              if (s.getCurrentValue !== e || s.subscribe !== t) return s;
              const d = e();
              return s.value === d ? s : { ...s, value: d };
            });
        },
        u = t(l);
      return (
        l(),
        () => {
          (i = !0), u();
        }
      );
    }, [e, t]),
    o
  );
}
var zl = { exports: {} },
  ir = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ep = ae.exports,
  ic = 60103;
ir.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var ss = Symbol.for;
  (ic = ss("react.element")), (ir.Fragment = ss("react.fragment"));
}
var tp =
    ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  np = Object.prototype.hasOwnProperty,
  rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) np.call(t, r) && !rp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ic,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: tp.current,
  };
}
ir.jsx = lc;
ir.jsxs = lc;
zl.exports = ir;
const pe = zl.exports.jsx,
  Sr = zl.exports.jsxs;
if (typeof Cs == "undefined")
  throw new Error("Required dependency 'react' not installed");
if (typeof Al == "undefined")
  throw new Error("Required dependency 'react-dom' not installed");
function uc(e, t, n = null) {
  function r(...o) {
    return cp(o), t().mutate(e, o, n);
  }
  return (
    (r.withOptimisticUpdate = function (i) {
      if (n !== null)
        throw new Error(
          `Already specified optimistic update for mutation ${e}`
        );
      return uc(e, t, i);
    }),
    r
  );
}
function op(e, t) {
  return function (...n) {
    return t().action(e, n);
  };
}
const ip = { unsavedChangesWarning: !0 };
class lp {
  constructor(t, n) {
    (this.closed = !1),
      (this.clientConfig = t),
      (this.listeners = new Map()),
      (this.options = { ...ip, ...n });
  }
  get sync() {
    if (this.closed)
      throw new Error("ConvexReactClient has already been closed.");
    return this.cachedSync
      ? this.cachedSync
      : ((this.cachedSync = new Zd(
          this.clientConfig,
          (t) => this.transition(t),
          this.options
        )),
        this.adminAuth && this.cachedSync.setAdminAuth(this.adminAuth),
        this.cachedSync);
  }
  setAuth(t) {
    this.sync.setAuth(t);
  }
  clearAuth() {
    this.sync.clearAuth();
  }
  setAdminAuth(t) {
    if (((this.adminAuth = t), this.closed))
      throw new Error("ConvexReactClient has already been closed.");
    this.cachedSync && this.sync.setAdminAuth(t);
  }
  watchQuery(t, n, r) {
    if (!Array.isArray(n))
      throw new Error(
        `Query arguments to \`ConvexReactClient.watchQuery\` must be an array. Received ${n}.`
      );
    return {
      onUpdate: (o) => {
        const { queryToken: i, unsubscribe: l } = this.sync.subscribe(t, n, r),
          u = this.listeners.get(i);
        return (
          u !== void 0 ? u.add(o) : this.listeners.set(i, new Set([o])),
          () => {
            if (this.closed) return;
            const s = this.listeners.get(i);
            s.delete(o), s.size == 0 && this.listeners.delete(i), l();
          }
        );
      },
      localQueryResult: () => {
        if (this.cachedSync) return this.cachedSync.localQueryResult(t, n);
      },
      journal: () => {
        if (this.cachedSync) return this.cachedSync.queryJournal(t, n);
      },
    };
  }
  mutation(t) {
    return uc(t, () => this.sync);
  }
  action(t) {
    return op(t, () => this.sync);
  }
  async close() {
    if (((this.closed = !0), (this.listeners = new Map()), this.cachedSync)) {
      const t = this.cachedSync;
      (this.cachedSync = void 0), await t.close();
    }
  }
  transition(t) {
    Al.unstable_batchedUpdates(() => {
      for (const n of t) {
        const r = this.listeners.get(n);
        if (r) for (const o of r) o();
      }
    });
  }
}
const Dl = Cs.createContext(void 0),
  up = ({ client: e, children: t }) =>
    pe(Dl.Provider, { value: e, children: t });
function sp(e, ...t) {
  const n = ae.exports.useContext(Dl);
  if (n === void 0)
    throw new Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  const r = ae.exports.useMemo(() => {
    const i = n.watchQuery(e, t);
    return {
      getCurrentValue: () => i.localQueryResult(),
      subscribe: (l) => i.onUpdate(l),
    };
  }, [e, n, JSON.stringify(Yt(t))]);
  return bd(r);
}
function ap(e) {
  const t = ae.exports.useContext(Dl);
  if (t === void 0)
    throw new Error(
      "Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  return ae.exports.useMemo(() => t.mutation(e), [t, e]);
}
function cp(e) {
  if (e.length !== 1) return;
  const [t] = e;
  if (
    typeof t == "object" &&
    "bubbles" in t &&
    "persist" in t &&
    "isDefaultPrevented" in t
  )
    throw new Error(
      "Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler."
    );
}
const fp = sp,
  dp = ap;
function pp() {
  const e = fp("listMessages") || [],
    [t, n] = ae.exports.useState(""),
    r = dp("sendMessage"),
    [o] = ae.exports.useState(() => "User " + Math.floor(Math.random() * 1e4));
  function i(l) {
    l.preventDefault(), r(t, o), n("");
  }
  return Sr("main", {
    children: [
      pe("h1", { children: "Convex Chat" }),
      pe("p", { className: "badge", children: pe("span", { children: o }) }),
      pe("ul", {
        children: e.map((l) =>
          Sr(
            "li",
            {
              children: [
                Sr("span", { children: [l.author, ":"] }),
                pe("span", { children: l.body }),
                pe("span", {
                  children: new Date(l._creationTime).toLocaleTimeString(),
                }),
              ],
            },
            l._id
          )
        ),
      }),
      Sr("form", {
        onSubmit: i,
        children: [
          pe("input", {
            value: t,
            onChange: (l) => n(l.target.value),
            placeholder: "Write a message\u2026",
          }),
          pe("input", { type: "submit", value: "Send", disabled: !t }),
        ],
      }),
    ],
  });
}
const hp = { address: "http://localhost:8187" },
  mp = new lp(hp);
Al.render(
  pe(ae.exports.StrictMode, {
    children: pe(up, { client: mp, children: pe(pp, {}) }),
  }),
  document.getElementById("root")
);
