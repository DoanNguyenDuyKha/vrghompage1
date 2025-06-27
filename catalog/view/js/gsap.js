!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function i(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function b(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function Y(t) {
        return "string" == typeof t
    }
    function f(t) {
        return "function" == typeof t
    }
    function O(t) {
        return "number" == typeof t
    }
    function s(t) {
        return void 0 === t
    }
    function M(t) {
        return "object" == typeof t
    }
    function E(t) {
        return !1 !== t
    }
    function u() {
        return "undefined" != typeof window
    }
    function S(t) {
        return f(t) || Y(t)
    }
    function h(t) {
        return (qt = Ft(t, a)) && d
    }
    function z(t, e) {
        return !e && console.warn(t)
    }
    function m(t, e) {
        return t && (a[t] = e) && qt && (qt[t] = e) || a
    }
    function R() {
        return 0
    }
    function W(t) {
        var e, r, i = t[0];
        if (M(i) || f(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = Ce.length; r-- && !Ce[r].targetTest(i); )
                ;
            e = Ce[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Ne(t[r],e))) || t.splice(r, 1);
        return t
    }
    function H(t) {
        return t._gsap || W(C(t))[0]._gsap
    }
    function g(t, e, r) {
        return (r = t[e]) && f(r) ? t[e]() : s(r) && t.getAttribute && t.getAttribute(e) || r
    }
    function _(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function F(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function k(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }
    function Z() {
        var t, e, r = Oe.length, i = Oe.slice(0);
        for (Me = {},
        t = Oe.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function v(t, e, r, i) {
        Oe.length && Z(),
        t.render(e, r, i),
        Oe.length && Z()
    }
    function y(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(xe).length < 2 ? e : Y(t) ? t.trim() : t
    }
    function T(t) {
        return t
    }
    function B(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }
    function $(t, e) {
        for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }
    function J(t, e) {
        for (var r in e)
            "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = M(e[r]) ? J(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }
    function K(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }
    function tt(t) {
        var e = t.parent || I
          , r = t.keyframes ? $ : B;
        if (E(t.inherit))
            for (; e; )
                r(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }
    function et(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , s = e._next;
        n ? n._next = s : t[r] === e && (t[r] = s),
        s ? s._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }
    function rt(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function it(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }
    function nt(t) {
        return t._repeat ? Bt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function st(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function at(t) {
        t._end = k(t._start + (t._tDur / Math.abs(t._ts || t._rts || L) || 0))
    }
    function ot(t, e) {
        var r = t._dp;
        r && r.smoothChildTiming && t._ts && (t._start = k(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        at(t),
        r._dirty || it(r, t))
    }
    function ut(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = st(t.rawTime(), e),
        !e._dur || Lt(0, e.totalDuration(), r) - e._tTime > L) && e.render(r, !0),
        it(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -L
        }
    }
    function A(t, e, r, i) {
        e.parent && rt(e),
        e._start = k((O(r) ? r : r || t !== I ? l(t, r, e) : t._time) + e._delay),
        e._end = k(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0));
        var r = t
          , n = e
          , s = "_first"
          , a = "_last"
          , o = t._sort ? "_start" : 0;
        void 0 === s && (s = "_first");
        var u, h = r[a = void 0 === a ? "_last" : a];
        if (o)
            for (u = n[o]; h && h[o] > u; )
                h = h._prev;
        return h ? (n._next = h._next,
        h._next = n) : (n._next = r[s],
        r[s] = n),
        n._next ? n._next._prev = n : r[a] = n,
        n._prev = h,
        n.parent = n._dp = r,
        It(e) || (t._recent = e),
        i || ut(t, e),
        t
    }
    function ht(t, e) {
        a.ScrollTrigger && a.ScrollTrigger.create(e, t)
    }
    function lt(t, e, r, i) {
        return We(t, e),
        !t._initted || !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && jt !== c.frame && (Oe.push(t),
        t._lazy = [e, i])
    }
    function ft(t, e, r, i) {
        var n = t._repeat
          , e = k(e) || 0
          , s = t._tTime / t._tDur;
        return s && !i && (t._time *= e / t._dur),
        t._dur = e,
        t._tDur = n ? n < 0 ? 1e10 : k(e * (n + 1) + t._rDelay * n) : e,
        s && !i ? ot(t, t._tTime = t._tDur * s) : t.parent && at(t),
        r || it(t.parent, t),
        t
    }
    function pt(t) {
        return t instanceof P ? it(t) : ft(t, t._dur)
    }
    function _t(t, e, r) {
        var i, n, s = O(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
        if (s && (o.duration = e[1]),
        o.parent = r,
        t) {
            for (i = o,
            n = r; n && !("immediateRender"in i); )
                i = n.vars.defaults || {},
                n = E(n.vars.inherit) && n.parent;
            o.immediateRender = E(i.immediateRender),
            t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
        }
        return new q(e[0],o,e[1 + a])
    }
    function ct(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function U(t) {
        var e;
        return "string" == typeof t && (e = we.exec(t)) ? t.substr(e.index + e[0].length) : ""
    }
    function dt(t, e) {
        return t && M(t) && "length"in t && (!e && !t.length || t.length - 1 in t && M(t[0])) && !t.nodeType && t !== r
    }
    function mt(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function gt(t) {
        var _, c, d, m, g, v, y, T, x;
        return f(t) ? t : (_ = M(t) ? t : {
            each: t
        },
        c = Ye(_.ease),
        d = _.from || 0,
        m = parseFloat(_.base) || 0,
        g = {},
        t = 0 < d && d < 1,
        v = isNaN(d) || t,
        y = _.axis,
        Y(x = T = d) ? T = x = {
            center: .5,
            edges: .5,
            end: 1
        }[d] || 0 : !t && v && (T = d[0],
        x = d[1]),
        function(t, e, r) {
            var i, n, s, a, o, u, h, l, f = (r || _).length, p = g[f];
            if (!p) {
                if (!(l = "auto" === _.grid ? 0 : (_.grid || [1, w])[1])) {
                    for (u = -w; u < (u = r[l++].getBoundingClientRect().left) && l < f; )
                        ;
                    l--
                }
                for (p = g[f] = [],
                i = v ? Math.min(l, f) * T - .5 : d % l,
                n = v ? f * x / l - .5 : d / l | 0,
                h = w,
                o = u = 0; o < f; o++)
                    a = o % l - i,
                    s = n - (o / l | 0),
                    p[o] = a = y ? Math.abs("y" === y ? s : a) : pe(a * a + s * s),
                    u < a && (u = a),
                    a < h && (h = a);
                "random" === d && mt(p),
                p.max = u - h,
                p.min = h,
                p.v = f = (parseFloat(_.amount) || parseFloat(_.each) * (f < l ? f - 1 : y ? "y" === y ? f / l : l : Math.max(l, f / l)) || 0) * ("edges" === d ? -1 : 1),
                p.b = f < 0 ? m - f : m,
                p.u = U(_.amount || _.each) || 0,
                c = c && f < 0 ? Le(c) : c
            }
            return f = (p[t] - p.min) / p.max || 0,
            k(p.b + (c ? c(f) : f) * p.v) + p.u
        }
        )
    }
    function vt(r) {
        var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (O(t) ? 0 : U(t))
        }
    }
    function yt(u, t) {
        var h, l, e = D(u);
        return !e && M(u) && (h = e = u.radius || w,
        u.values ? (u = C(u.values),
        (l = !O(u[0])) && (h *= h)) : u = vt(u.increment)),
        ct(t, e ? f(u) ? function(t) {
            return l = u(t),
            Math.abs(l - t) <= h ? l : t
        }
        : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), s = w, a = 0, o = u.length; o--; )
                (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < s && (s = e,
                a = o);
            return a = !h || s <= h ? u[a] : t,
            l || a === t || O(t) ? a : a + U(t)
        }
        : vt(u))
    }
    function Tt(t, e, r, i) {
        return ct(D(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return D(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }
    function xt(e, r, t) {
        return ct(t, function(t) {
            return e[~~r(t)]
        })
    }
    function wt(t) {
        for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? xe : me),
            a += t.substr(s, e - s) + Tt(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
            s = i + 1;
        return a + t.substr(s, t.length - s)
    }
    function bt(t, e, r) {
        var i, n, s, a = t.labels, o = w;
        for (i in a)
            (n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i,
            o = n);
        return s
    }
    function Ot(t) {
        return rt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && x(t, "onInterrupt"),
        t
    }
    function Mt(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * p + .5 | 0
    }
    function kt(t, e, r) {
        var i, n, s, a, o, u, h, l = t ? O(t) ? [t >> 16, t >> 8 & p, t & p] : 0 : ze.black;
        if (!l) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            ze[t])
                l = ze[t];
            else if ("#" === t.charAt(0)) {
                if (9 === (t = t.length < 6 ? "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "") : t).length)
                    return [(l = parseInt(t.substr(1, 6), 16)) >> 16, l >> 8 & p, l & p, parseInt(t.substr(7), 16) / 255];
                l = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & p, t & p]
            } else if ("hsl" === t.substr(0, 3))
                if (l = h = t.match(me),
                e) {
                    if (~t.indexOf("="))
                        return l = t.match(ge),
                        r && l.length < 4 && (l[3] = 1),
                        l
                } else
                    a = +l[0] % 360 / 360,
                    o = l[1] / 100,
                    i = 2 * (u = l[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < l.length && (l[3] *= 1),
                    l[0] = Mt(a + 1 / 3, i, n),
                    l[1] = Mt(a, i, n),
                    l[2] = Mt(a - 1 / 3, i, n);
            else
                l = t.match(me) || ze.transparent;
            l = l.map(Number)
        }
        return e && !h && (i = l[0] / p,
        n = l[1] / p,
        s = l[2] / p,
        u = ((t = Math.max(i, n, s)) + (e = Math.min(i, n, s))) / 2,
        t === e ? a = o = 0 : (h = t - e,
        o = .5 < u ? h / (2 - t - e) : h / (t + e),
        a = t === i ? (n - s) / h + (n < s ? 6 : 0) : t === n ? (s - i) / h + 2 : (i - n) / h + 4,
        a *= 60),
        l[0] = ~~(a + .5),
        l[1] = ~~(100 * o + .5),
        l[2] = ~~(100 * u + .5)),
        r && l.length < 4 && (l[3] = 1),
        l
    }
    function At(t) {
        var e = []
          , r = []
          , i = -1;
        return t.split(Re).forEach(function(t) {
            t = t.match(ve) || [];
            e.push.apply(e, t),
            r.push(i += t.length + 1)
        }),
        e.c = r,
        e
    }
    function Ct(t, e, r) {
        var i, n, s, a, o = "", u = (t + o).match(Re), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = kt(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (s = At(t),
        (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(Re, "1").split(ve)).length - 1; l < a; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
        if (!n)
            for (a = (n = t.split(Re)).length - 1; l < a; l++)
                o += n[l] + u[l];
        return o + n[a]
    }
    function Dt(t) {
        var e = t.join(" ");
        if (Re.lastIndex = 0,
        Re.test(e))
            return e = Ee.test(e),
            t[1] = Ct(t[1], e),
            t[0] = Ct(t[0], e, At(t[1])),
            !0
    }
    function Pt(t, e) {
        for (var r, i = t._first; i; )
            i instanceof P ? Pt(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Pt(i.timeline, e) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = e)),
            i = i._next
    }
    function St(t, e, r, i) {
        var n, s = {
            easeIn: e,
            easeOut: r = void 0 === r ? function(t) {
                return 1 - e(1 - t)
            }
            : r,
            easeInOut: i = void 0 === i ? function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            }
            : i
        };
        _(t, function(t) {
            for (var e in o[t] = a[t] = s,
            o[n = t.toLowerCase()] = r,
            s)
                o[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = o[t + "." + e] = s[e]
        })
    }
    function zt(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Rt(r, t, e) {
        function i(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * ce((t - s) * a) + 1
        }
        var n = 1 <= t ? t : 1
          , s = (a = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)) / he * (Math.asin(1 / n) || 0)
          , e = "out" === r ? i : "in" === r ? function(t) {
            return 1 - i(1 - t)
        }
        : zt(i)
          , a = he / a;
        return e.config = function(t, e) {
            return Rt(r, t, e)
        }
        ,
        e
    }
    function Et(e, r) {
        function i(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? i : "in" === e ? function(t) {
            return 1 - i(1 - t)
        }
        : zt(i);
        return t.config = function(t) {
            return Et(e, t)
        }
        ,
        t
    }
    function Ft(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }
    function Bt(t, e) {
        return e = Math.floor(t /= e),
        t && e === t ? e - 1 : e
    }
    function It(t) {
        return "isFromStart" === (t = t.data) || "isStart" === t
    }
    function l(t, e, r) {
        var i, n, s, a = t.labels, o = t._recent || Pe, u = t.duration() >= w ? o.endTime(!1) : t._dur;
        return Y(e) && (isNaN(e) || e in a) ? (n = e.charAt(0),
        s = "%" === e.substr(-1),
        i = e.indexOf("="),
        "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")),
        ("<" === n ? o._start : o.endTime(0 <= o._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (i < 0 ? o : r).totalDuration() / 100 : 1)) : i < 0 ? (e in a || (a[e] = u),
        a[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)),
        s && r && (n = n / 100 * (D(r) ? r[0] : r).totalDuration()),
        1 < i ? l(t, e.substr(0, i - 1), r) + n : u + n)) : null == e ? u : +e
    }
    function Lt(t, e, r) {
        return r < t ? t : e < r ? e : r
    }
    function C(t, e, r) {
        return !Y(t) || r || !Xt && Fe() ? D(t) ? (i = r,
        void 0 === n && (n = []),
        t.forEach(function(t) {
            return Y(t) && !i || dt(t, 1) ? n.push.apply(n, C(t)) : n.push(t)
        }) || n) : dt(t) ? Se.call(t, 0) : t ? [t] : [] : Se.call((e || Nt).querySelectorAll(t), 0);
        var i, n
    }
    function Yt(e, t, r, i, n) {
        var s = t - e
          , a = i - r;
        return ct(n, function(t) {
            return r + ((t - e) / s * a || 0)
        })
    }
    function x(t, e, r) {
        var i = t.vars
          , n = i[e];
        if (n)
            e = i[e + "Params"],
            i = i.callbackScope || t,
            r && Oe.length && Z(),
            e ? n.apply(i, e) : n.call(i)
    }
    var Ut, I, r, Xt, Nt, qt, Vt, jt, Qt, Gt, Wt, Ht, Zt, $t, Jt, Kt, te, ee, re, ie, ne, se, ae, oe, X = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, ue = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, w = 1e8, L = 1 / w, he = 2 * Math.PI, le = he / 4, fe = 0, pe = Math.sqrt, _e = Math.cos, ce = Math.sin, de = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , D = Array.isArray, me = /(?:-?\.?\d|\.)+/gi, ge = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ve = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ye = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Te = /[+-]=-?[.\d]+/, xe = /[^,'"\[\]\s]+/gi, we = /[\d.+\-=]+(?:e[-+]\d*)*/i, a = {}, be = {}, Oe = [], Me = {}, N = {}, ke = {}, Ae = 30, Ce = [], De = "", Pe = {
        _start: 0,
        endTime: R,
        totalDuration: R
    }, Se = [].slice, p = 255, ze = {
        aqua: [0, p, p],
        lime: [0, p, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, p],
        navy: [0, 0, 128],
        white: [p, p, p],
        olive: [128, 128, 0],
        yellow: [p, p, 0],
        orange: [p, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [p, 0, 0],
        pink: [p, 192, 203],
        cyan: [0, p, p],
        transparent: [p, p, p, 0]
    }, Re = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in ze)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ee = /hsl[a]?\(/, c = (Kt = Date.now,
    te = 500,
    ee = 33,
    re = Kt(),
    ie = re,
    se = ne = 1e3 / 240,
    Zt = {
        time: 0,
        frame: 0,
        tick: function() {
            Ue(!0)
        },
        deltaRatio: function(t) {
            return $t / (1e3 / (t || 60))
        },
        wake: function() {
            Vt && (!Xt && u() && (r = Xt = window,
            Nt = r.document || {},
            a.gsap = d,
            (r.gsapVersions || (r.gsapVersions = [])).push(d.version),
            h(qt || r.GreenSockGlobals || !r.gsap && r || {}),
            Ht = r.requestAnimationFrame),
            Gt && Zt.sleep(),
            Wt = Ht || function(t) {
                return setTimeout(t, se - 1e3 * Zt.time + 1 | 0)
            }
            ,
            Qt = 1,
            Ue(2))
        },
        sleep: function() {
            (Ht ? r.cancelAnimationFrame : clearTimeout)(Gt),
            Qt = 0,
            Wt = R
        },
        lagSmoothing: function(t, e) {
            te = t || 1e8,
            ee = Math.min(e, te, 0)
        },
        fps: function(t) {
            ne = 1e3 / (t || 240),
            se = 1e3 * Zt.time + ne
        },
        add: function(t) {
            ae.indexOf(t) < 0 && ae.push(t),
            Fe()
        },
        remove: function(t) {
            ~(t = ae.indexOf(t)) && ae.splice(t, 1) && t <= Jt && Jt--
        },
        _listeners: ae = []
    }), Fe = function() {
        return !Qt && c.wake()
    }, o = {}, Be = /^[\d.\-M][\d.\-,\s]/, Ie = /["']/g, Le = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Ye = function(t, e) {
        return t && (f(t) ? t : o[t] || (s = ((t = t) + "").split("("),
        (a = o[s[0]]) && 1 < s.length && a.config ? a.config.apply(null, ~t.indexOf("{") ? [function(t) {
            for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++)
                r = s[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[a] = isNaN(i) ? i.replace(Ie, "").trim() : +i,
                a = r.substr(e + 1).trim();
            return n
        }(s[1])] : (r = (s = t).indexOf("(") + 1,
        i = s.indexOf(")"),
        n = s.indexOf("(", r),
        s.substring(r, ~n && n < i ? s.indexOf(")", i + 1) : i).split(",").map(y))) : o._CE && Be.test(t) ? o._CE("", t) : a)) || e;
        var r, i, n, s, a
    };
    function Ue(t) {
        var e, r, i, n = Kt() - ie, s = !0 === t;
        if (te < n && (re += n - ee),
        (0 < (n = (r = (ie += n) - re) - se) || s) && (i = ++Zt.frame,
        $t = r - 1e3 * Zt.time,
        Zt.time = r /= 1e3,
        se += n + (ne <= n ? 4 : ne - n),
        e = 1),
        s || (Gt = Wt(Ue)),
        e)
            for (Jt = 0; Jt < ae.length; Jt++)
                ae[Jt](r, $t, i, t)
    }
    function Xe(t) {
        return t < 1 / 2.75 ? oe * t * t : t < .7272727272727273 ? oe * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? oe * (t -= 2.25 / 2.75) * t + .9375 : oe * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        St(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }),
    o.Linear.easeNone = o.none = o.Linear.easeIn,
    St("Elastic", Rt("in"), Rt("out"), Rt()),
    oe = 7.5625,
    St("Bounce", function(t) {
        return 1 - Xe(1 - t)
    }, Xe),
    St("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    St("Circ", function(t) {
        return -(pe(1 - t * t) - 1)
    }),
    St("Sine", function(t) {
        return 1 === t ? 1 : 1 - _e(t * le)
    }),
    St("Back", Et("in"), Et("out"), Et()),
    o.SteppedEase = o.steps = a.SteppedEase = {
        config: function(t, e) {
            var r = 1 / (t = void 0 === t ? 1 : t)
              , i = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((i * Lt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    ue.ease = o["quad.out"],
    _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return De += t + "," + t + "Params,"
    });
    var Ne = function(t, e) {
        this.id = fe++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : g,
        this.set = e ? e.getSetter : pr
    }
      , qe = ((e = Ve.prototype).delay = function(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    e.duration = function(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        ft(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(t, e) {
        if (Fe(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (ot(this, t),
            r._dp && !r.parent && ut(r, this); r && r.parent; )
                r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && A(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === L || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        v(this, t, e)),
        this
    }
    ,
    e.time = function(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + nt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }
    ,
    e.totalProgress = function(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + nt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Bt(this._tTime, r) + 1 : 1
    }
    ,
    e.timeScale = function(t) {
        if (!arguments.length)
            return this._rts === -L ? 0 : this._rts;
        if (this._rts !== t) {
            for (var e = this.parent && this._ts ? st(this.parent._time, this) : this._tTime, t = (this._rts = +t || 0,
            this._ts = this._ps || t === -L ? 0 : this._rts,
            this.totalTime(Lt(-this._delay, this._tDur, e), !0)), r = t.parent; r && r.parent; )
                r._dirty = 1,
                r.totalDuration(),
                r = r.parent;
            at(this)
        }
        return this
    }
    ,
    e.paused = function(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Fe(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== L && (this._tTime -= L)))),
        this) : this._ps
    }
    ,
    e.startTime = function(t) {
        var e;
        return arguments.length ? (this._start = t,
        !(e = this.parent || this._dp) || !e._sort && this.parent || A(e, this, t - this._delay),
        this) : this._start
    }
    ,
    e.endTime = function(t) {
        return this._start + (E(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? st(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    e.globalTime = function(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            r = e._start + r / (e._ts || 1),
            e = e._dp;
        return r
    }
    ,
    e.repeat = function(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        pt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(t) {
        var e;
        return arguments.length ? (e = this._time,
        this._rDelay = t,
        pt(this),
        e ? this.time(e) : this) : this._rDelay
    }
    ,
    e.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    e.seek = function(t, e) {
        return this.totalTime(l(this, t), E(e))
    }
    ,
    e.restart = function(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, E(e))
    }
    ,
    e.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -L : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -L,
        this
    }
    ,
    e.isActive = function() {
        var t = this.parent || this._dp
          , e = this._start;
        return !(t && !(this._ts && this._initted && t.isActive() && (t = t.rawTime(!0)) >= e && t < this.endTime(!0) - L))
    }
    ,
    e.eventCallback = function(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e,
        r && (i[t + "Params"] = r),
        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
        this) : i[t]
    }
    ,
    e.then = function(i) {
        var n = this;
        return new Promise(function(e) {
            function t() {
                var t = n.then;
                n.then = null,
                f(r) && (r = r(n)) && (r.then || r === n) && (n.then = t),
                e(r),
                n.then = t
            }
            var r = f(i) ? i : T;
            n._initted && 1 === n.totalProgress() && 0 <= n._ts || !n._tTime && n._ts < 0 ? t() : n._prom = t
        }
        )
    }
    ,
    e.kill = function() {
        Ot(this)
    }
    ,
    Ve);
    function Ve(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        ft(this, +t.duration, 1, 1),
        this.data = t.data,
        Qt || c.wake()
    }
    B(qe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -L,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    i(Qe, je = qe),
    (e = Qe.prototype).to = function(t, e, r) {
        return _t(0, arguments, this),
        this
    }
    ,
    e.from = function(t, e, r) {
        return _t(1, arguments, this),
        this
    }
    ,
    e.fromTo = function(t, e, r, i) {
        return _t(2, arguments, this),
        this
    }
    ,
    e.set = function(t, e, r) {
        return e.duration = 0,
        e.parent = this,
        tt(e).repeatDelay || (e.repeat = 0),
        e.immediateRender = !!e.immediateRender,
        new q(t,e,l(this, r),1),
        this
    }
    ,
    e.call = function(t, e, r) {
        return A(this, q.delayedCall(0, t, e), r)
    }
    ,
    e.staggerTo = function(t, e, r, i, n, s, a) {
        return r.duration = e,
        r.stagger = r.stagger || i,
        r.onComplete = s,
        r.onCompleteParams = a,
        r.parent = this,
        new q(t,r,l(this, n)),
        this
    }
    ,
    e.staggerFrom = function(t, e, r, i, n, s, a) {
        return r.runBackwards = 1,
        tt(r).immediateRender = E(r.immediateRender),
        this.staggerTo(t, e, r, i, n, s, a)
    }
    ,
    e.staggerFromTo = function(t, e, r, i, n, s, a, o) {
        return i.startAt = r,
        tt(i).immediateRender = E(i.immediateRender),
        this.staggerTo(t, e, i, n, s, a, o)
    }
    ,
    e.render = function(t, e, r) {
        var i, n, s, a, o, u, h, l, f, p, _ = this._time, c = this._dirty ? this.totalDuration() : this._tDur, d = this._dur, m = t <= 0 ? 0 : k(t), g = this._zTime < 0 != t < 0 && (this._initted || !d);
        if ((m = this !== I && c < m && 0 <= t ? c : m) !== this._tTime || r || g) {
            if (_ !== this._time && d && (m += this._time - _,
            t += this._time - _),
            i = m,
            l = this._start,
            o = !(h = this._ts),
            g && (d || (_ = this._zTime),
            !t && e || (this._zTime = t)),
            this._repeat) {
                if (g = this._yoyo,
                a = d + this._rDelay,
                this._repeat < -1 && t < 0)
                    return this.totalTime(100 * a + t, e, r);
                if (i = k(m % a),
                m === c ? (s = this._repeat,
                i = d) : ((s = ~~(m / a)) && s === m / a && (i = d,
                s--),
                d < i && (i = d)),
                f = Bt(this._tTime, a),
                g && 1 & s && (i = d - i,
                p = 1),
                s !== (f = !_ && this._tTime && f !== s ? s : f) && !this._lock) {
                    var v = g && 1 & f
                      , g = v === (g && 1 & s)
                      , _ = (v = s < f ? !v : v) ? 0 : d;
                    if (this._lock = 1,
                    this.render(_ || (p ? 0 : k(s * a)), e, !d)._lock = 0,
                    this._tTime = m,
                    !e && this.parent && x(this, "onRepeat"),
                    this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                    _ && _ !== this._time || o != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (d = this._dur,
                    c = this._tDur,
                    g && (this._lock = 2,
                    this.render(_ = v ? d : -1e-4, !0),
                    this.vars.repeatRefresh) && !p && this.invalidate(),
                    this._lock = 0,
                    !this._ts && !o)
                        return this;
                    Pt(this, p)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, r) {
                var i;
                if (e < r)
                    for (i = t._first; i && i._start <= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start > e)
                            return i;
                        i = i._next
                    }
                else
                    for (i = t._last; i && i._start >= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start < e)
                            return i;
                        i = i._prev
                    }
            }(this, k(_), k(i))) && (m -= i - (i = u._start)),
            this._tTime = m,
            this._time = i,
            this._act = !h,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = t,
            _ = 0),
            !_ && i && !e && (x(this, "onStart"),
            this._tTime !== m))
                return this;
            if (_ <= i && 0 <= t)
                for (y = this._first; y; ) {
                    if (n = y._next,
                    (y._act || i >= y._start) && y._ts && u !== y) {
                        if (y.parent !== this)
                            return this.render(t, e, r);
                        if (y.render(0 < y._ts ? (i - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (i - y._start) * y._ts, e, r),
                        i !== this._time || !this._ts && !o) {
                            u = 0,
                            n && (m += this._zTime = -L);
                            break
                        }
                    }
                    y = n
                }
            else
                for (var y = this._last, T = t < 0 ? t : i; y; ) {
                    if (n = y._prev,
                    (y._act || T <= y._end) && y._ts && u !== y) {
                        if (y.parent !== this)
                            return this.render(t, e, r);
                        if (y.render(0 < y._ts ? (T - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (T - y._start) * y._ts, e, r),
                        i !== this._time || !this._ts && !o) {
                            u = 0,
                            n && (m += this._zTime = T ? -L : L);
                            break
                        }
                    }
                    y = n
                }
            if (u && !e && (this.pause(),
            u.render(_ <= i ? 0 : -L)._zTime = _ <= i ? 1 : -1,
            this._ts))
                return this._start = l,
                at(this),
                this.render(t, e, r);
            this._onUpdate && !e && x(this, "onUpdate", !0),
            !(m === c && c >= this.totalDuration() || !m && _) || l !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || (!t && d || !(m === c && 0 < this._ts || !m && this._ts < 0) || rt(this, 1),
            e) || t < 0 && !_ || !m && !_ && c || (x(this, m === c && 0 <= t ? "onComplete" : "onReverseComplete", !0),
            !this._prom) || m < c && 0 < this.timeScale() || this._prom()
        }
        return this
    }
    ,
    e.add = function(t, e) {
        var r = this;
        if (O(e) || (e = l(this, e, t)),
        !(t instanceof qe)) {
            if (D(t))
                return t.forEach(function(t) {
                    return r.add(t, e)
                }),
                this;
            if (Y(t))
                return this.addLabel(t, e);
            if (!f(t))
                return this;
            t = q.delayedCall(0, t)
        }
        return this !== t ? A(this, t, e) : this
    }
    ,
    e.getChildren = function(t, e, r, i) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === r && (r = !0),
        void 0 === i && (i = -w);
        for (var n = [], s = this._first; s; )
            s._start >= i && (s instanceof q ? e && n.push(s) : (r && n.push(s),
            t && n.push.apply(n, s.getChildren(!0, e, r)))),
            s = s._next;
        return n
    }
    ,
    e.getById = function(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t)
                return e[r]
    }
    ,
    e.remove = function(t) {
        return Y(t) ? this.removeLabel(t) : f(t) ? this.killTweensOf(t) : (et(this, t),
        t === this._recent && (this._recent = this._last),
        it(this))
    }
    ,
    e.totalTime = function(t, e) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = k(c.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
        je.prototype.totalTime.call(this, t, e),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    e.addLabel = function(t, e) {
        return this.labels[t] = l(this, e),
        this
    }
    ,
    e.removeLabel = function(t) {
        return delete this.labels[t],
        this
    }
    ,
    e.addPause = function(t, e, r) {
        e = q.delayedCall(0, e || R, r);
        return e.data = "isPause",
        this._hasPause = 1,
        A(this, e, l(this, t))
    }
    ,
    e.removePause = function(t) {
        var e = this._first;
        for (t = l(this, t); e; )
            e._start === t && "isPause" === e.data && rt(e),
            e = e._next
    }
    ,
    e.killTweensOf = function(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
            Ze !== i[n] && i[n].kill(t, e);
        return this
    }
    ,
    e.getTweensOf = function(t, e) {
        for (var r, i = [], n = C(t), s = this._first, a = O(e); s; )
            s instanceof q ? function(t, e) {
                for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
                    ;
                return i < r
            }(s._targets, n) && (a ? (!Ze || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
            s = s._next;
        return i
    }
    ,
    e.tweenTo = function(t, e) {
        e = e || {};
        var r, i = this, n = l(i, t), s = e.startAt, a = e.onStart, o = e.onStartParams, t = e.immediateRender, u = q.to(i, B({
            ease: e.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: n,
            overwrite: "auto",
            duration: e.duration || Math.abs((n - (s && "time"in s ? s.time : i._time)) / i.timeScale()) || L,
            onStart: function() {
                var t;
                i.pause(),
                r || (t = e.duration || Math.abs((n - (s && "time"in s ? s.time : i._time)) / i.timeScale()),
                u._dur !== t && ft(u, t, 0, 1).render(u._time, !0, !0),
                r = 1),
                a && a.apply(u, o || [])
            }
        }, e));
        return t ? u.render(0) : u
    }
    ,
    e.tweenFromTo = function(t, e, r) {
        return this.tweenTo(e, B({
            startAt: {
                time: l(this, t)
            }
        }, r))
    }
    ,
    e.recent = function() {
        return this._recent
    }
    ,
    e.nextLabel = function(t) {
        return void 0 === t && (t = this._time),
        bt(this, l(this, t))
    }
    ,
    e.previousLabel = function(t) {
        return void 0 === t && (t = this._time),
        bt(this, l(this, t), 1)
    }
    ,
    e.currentLabel = function(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + L)
    }
    ,
    e.shiftChildren = function(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, s = this.labels; n; )
            n._start >= r && (n._start += t,
            n._end += t),
            n = n._next;
        if (e)
            for (i in s)
                s[i] >= r && (s[i] += t);
        return it(this)
    }
    ,
    e.invalidate = function() {
        var t = this._first;
        for (this._lock = 0; t; )
            t.invalidate(),
            t = t._next;
        return je.prototype.invalidate.call(this)
    }
    ,
    e.clear = function(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
            e = r._next,
            this.remove(r),
            r = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        it(this)
    }
    ,
    e.totalDuration = function(t) {
        var e, r, i, n = 0, s = this, a = s._last, o = w;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
            for (i = s.parent; a; )
                e = a._prev,
                a._dirty && a.totalDuration(),
                o < (r = a._start) && s._sort && a._ts && !s._lock ? (s._lock = 1,
                A(s, a, r - a._delay, 1)._lock = 0) : o = r,
                r < 0 && a._ts && (n -= r,
                (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts,
                s._time -= r,
                s._tTime -= r),
                s.shiftChildren(-r, !1, -1 / 0),
                o = 0),
                a._end > n && a._ts && (n = a._end),
                a = e;
            ft(s, s === I && s._time > n ? s._time : n, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    Qe.updateRoot = function(t) {
        if (I._ts && (v(I, st(t, I)),
        jt = c.frame),
        c.frame >= Ae) {
            Ae += X.autoSleep || 120;
            var e = I._first;
            if ((!e || !e._ts) && X.autoSleep && c._listeners.length < 2) {
                for (; e && !e._ts; )
                    e = e._next;
                e || c.sleep()
            }
        }
    }
    ;
    var je, P = Qe;
    function Qe(t, e) {
        var r;
        return (r = je.call(this, t = void 0 === t ? {} : t) || this).labels = {},
        r.smoothChildTiming = !!t.smoothChildTiming,
        r.autoRemoveChildren = !!t.autoRemoveChildren,
        r._sort = E(t.sortChildren),
        I && A(t.parent || I, b(r), e),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && ht(b(r), t.scrollTrigger),
        r
    }
    function Ge(t, e, r, i, n, s) {
        var a, o, u, h;
        if (N[t] && !1 !== (a = new N[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
            if (!M(t = f(t) ? He(t, n, e, r, i) : t) || t.style && t.nodeType || D(t) || de(t))
                return Y(t) ? He(t, n, e, r, i) : t;
            var s, a = {};
            for (s in t)
                a[s] = He(t[s], n, e, r, i);
            return a
        }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new V(r._pt,n,t,0,1,a.render,a,0,a.priority),
        r !== gr))
            for (u = r._ptLookup[r._targets.indexOf(n)],
            h = a._props.length; h--; )
                u[a._props[h]] = o;
        return a
    }
    B(P.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function We(t, e) {
        var r, i, n, s, a, o, u, h, l, f, p, _, c, d = t.vars, m = d.ease, g = d.startAt, v = d.immediateRender, y = d.lazy, T = d.onUpdate, x = d.onUpdateParams, w = d.callbackScope, b = d.runBackwards, O = d.yoyoEase, M = d.keyframes, k = d.autoRevert, A = t._dur, C = t._startAt, D = t._targets, P = t.parent, S = P && "nested" === P.data ? P.parent._targets : D, z = "auto" === t._overwrite && !Ut, R = t.timeline;
        if (t._ease = Ye(m = !R || M && m ? m : "none", ue.ease),
        t._yEase = O ? Le(Ye(!0 === O ? m : O, ue.ease)) : 0,
        O && t._yoyo && !t._repeat && (O = t._yEase,
        t._yEase = t._ease,
        t._ease = O),
        t._from = !R && !!d.runBackwards,
        !R) {
            if (_ = (h = D[0] ? H(D[0]).harness : 0) && d[h.prop],
            r = K(d, be),
            C && C.render(-1, !0).kill(),
            g)
                if (rt(t._startAt = q.set(D, B({
                    data: "isStart",
                    overwrite: !1,
                    parent: P,
                    immediateRender: !0,
                    lazy: E(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: T,
                    onUpdateParams: x,
                    callbackScope: w,
                    stagger: 0
                }, g))),
                e < 0 && !v && !k && t._startAt.render(-1, !0),
                v) {
                    if (0 < e && !k && (t._startAt = 0),
                    A && e <= 0)
                        return void (e && (t._zTime = e))
                } else
                    !1 === k && (t._startAt = 0);
            else if (b && A)
                if (C)
                    k || (t._startAt = 0);
                else if (n = B({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: (v = e ? !1 : v) && E(y),
                    immediateRender: v,
                    stagger: 0,
                    parent: P
                }, r),
                _ && (n[h.prop] = _),
                rt(t._startAt = q.set(D, n)),
                e < 0 && t._startAt.render(-1, !0),
                v) {
                    if (!e)
                        return
                } else
                    We(t._startAt, L);
            for (t._pt = 0,
            y = A && E(y) || y && !A,
            i = 0; i < D.length; i++) {
                if (u = (a = D[i])._gsap || W(D)[i]._gsap,
                t._ptLookup[i] = f = {},
                Me[u.id] && Oe.length && Z(),
                p = S === D ? i : S.indexOf(a),
                h && !1 !== (l = new h).init(a, _ || r, t, p, S) && (t._pt = s = new V(t._pt,a,l.name,0,1,l.render,l,0,l.priority),
                l._props.forEach(function(t) {
                    f[t] = s
                }),
                l.priority) && (o = 1),
                !h || _)
                    for (n in r)
                        N[n] && (l = Ge(n, r, t, p, a, S)) ? l.priority && (o = 1) : f[n] = s = Je.call(t, a, n, "get", r[n], p, S, 0, d.stringFilter);
                t._op && t._op[i] && t.kill(a, t._op[i]),
                z && t._pt && (Ze = t,
                I.killTweensOf(a, f, t.globalTime(e)),
                c = !t.parent,
                Ze = 0),
                t._pt && y && (Me[u.id] = 1)
            }
            o && _r(t),
            t._onInit && t._onInit(t)
        }
        t._onUpdate = T,
        t._initted = (!t._op || t._pt) && !c
    }
    function He(t, e, r, i, n) {
        return f(t) ? t.call(e, r, i, n) : Y(t) && ~t.indexOf("random(") ? wt(t) : t
    }
    var Ze, $e, Je = function(t, e, r, i, n, s, a, o, u) {
        f(i) && (i = i(n || 0, t, s));
        var h, n = t[e], s = "get" !== r ? r : f(n) ? u ? t[e.indexOf("set") || !f(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : n, r = f(n) ? u ? sr : nr : ir;
        if (s !== (i = !Y(i) || "=" !== (i = ~i.indexOf("random(") ? wt(i) : i).charAt(1) || !(h = parseFloat(s) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (U(s) || 0)) && 0 !== h ? i : h))
            return isNaN(s * i) || "" === i ? (n || 0 in t,
            function(t, e, r, i, n, s, a) {
                var o, u, h, l, f, p = new V(this._pt,t,e,0,1,ur,null,n), _ = 0, c = 0;
                for (p.b = r,
                p.e = i,
                r += "",
                (n = ~(i += "").indexOf("random(")) && (i = wt(i)),
                s && (s(s = [r, i], t, e),
                r = s[0],
                i = s[1]),
                o = r.match(ye) || []; l = ye.exec(i); )
                    h = l[0],
                    l = i.substring(_, l.index),
                    u ? u = (u + 1) % 5 : "rgba(" === l.substr(-5) && (u = 1),
                    h !== o[c++] && (f = parseFloat(o[c - 1]) || 0,
                    p._pt = {
                        _next: p._pt,
                        p: l || 1 === c ? l : ",",
                        s: f,
                        c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - f,
                        m: u && u < 4 ? Math.round : 0
                    },
                    _ = ye.lastIndex);
                return p.c = _ < i.length ? i.substring(_, i.length) : "",
                p.fp = a,
                (Te.test(i) || n) && (p.e = 0),
                this._pt = p
            }
            .call(this, t, e, s, i, r, o || X.stringFilter, u)) : (h = new V(this._pt,t,e,+s || 0,i - (s || 0),"boolean" == typeof n ? or : ar,0,r),
            u && (h.fp = u),
            a && h.modifier(a, this, t),
            this._pt = h)
    }, Ke = De + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", tr = (Ke + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), q = (i(n, $e = qe),
    (e = n.prototype).render = function(t, e, r) {
        var i, n, s = this._time, a = this._tDur, o = this._dur, u = a - L < t && 0 <= t ? a : t < L ? 0 : t;
        if (o) {
            if (u !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                if (f = u,
                d = this.timeline,
                this._repeat) {
                    if (h = o + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * h + t, e, r);
                    if (f = k(u % h),
                    u === a ? (g = this._repeat,
                    f = o) : ((g = ~~(u / h)) && g === u / h && (f = o,
                    g--),
                    o < f && (f = o)),
                    (p = this._yoyo && 1 & g) && (l = this._yEase,
                    f = o - f),
                    v = Bt(this._tTime, h),
                    f === s && !r && this._initted)
                        return this;
                    g !== v && (d && this._yEase && Pt(d, p),
                    !this.vars.repeatRefresh || p || this._lock || (this._lock = r = 1,
                    this.render(k(h * g), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (lt(this, t < 0 ? t : f, r, e))
                        return this._tTime = 0,
                        this;
                    if (o !== this._dur)
                        return this.render(t, e, r)
                }
                if (this._tTime = u,
                this._time = f,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = n = (l || this._ease)(f / o),
                this._from && (this.ratio = n = 1 - n),
                f && !s && !e && (x(this, "onStart"),
                this._tTime !== u))
                    return this;
                for (i = this._pt; i; )
                    i.r(n, i.d),
                    i = i._next;
                d && d.render(t < 0 ? t : !f && p ? -L : d._dur * n, e, r) || this._startAt && (this._zTime = t),
                this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                x(this, "onUpdate")),
                this._repeat && g !== v && this.vars.onRepeat && !e && this.parent && x(this, "onRepeat"),
                u !== this._tDur && u || this._tTime !== u || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                !t && o || !(u === this._tDur && 0 < this._ts || !u && this._ts < 0) || rt(this, 1),
                e) || t < 0 && !s || !u && !s || (x(this, u === a ? "onComplete" : "onReverseComplete", !0),
                !this._prom) || u < a && 0 < this.timeScale() || this._prom()
            }
        } else {
            var h = this;
            var l = t;
            var f = e;
            var p = r;
            var _, c, d = h.ratio, m = l < 0 || !l && (!h._start && function t(e) {
                e = e.parent;
                return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || t(e))
            }(h) && (h._initted || !It(h)) || (h._ts < 0 || h._dp._ts < 0) && !It(h)) ? 0 : 1, g = h._rDelay, v = 0;
            if (g && h._repeat && (v = Lt(0, h._tDur, l),
            o = Bt(v, g),
            c = Bt(h._tTime, g),
            h._yoyo && 1 & o && (m = 1 - m),
            o !== c) && (d = 1 - m,
            h.vars.repeatRefresh) && h._initted && h.invalidate(),
            m !== d || p || h._zTime === L || !l && h._zTime) {
                if (h._initted || !lt(h, l, p, f)) {
                    for (c = h._zTime,
                    h._zTime = l || (f ? L : 0),
                    f = f || l && !c,
                    h.ratio = m,
                    h._from && (m = 1 - m),
                    h._time = 0,
                    h._tTime = v,
                    _ = h._pt; _; )
                        _.r(m, _.d),
                        _ = _._next;
                    h._startAt && l < 0 && h._startAt.render(l, !0, !0),
                    h._onUpdate && !f && x(h, "onUpdate"),
                    v && h._repeat && !f && h.parent && x(h, "onRepeat"),
                    (l >= h._tDur || l < 0) && h.ratio === m && (m && rt(h, 1),
                    f || (x(h, m ? "onComplete" : "onReverseComplete", !0),
                    h._prom && h._prom()))
                }
            } else
                h._zTime || (h._zTime = l)
        }
        return this
    }
    ,
    e.targets = function() {
        return this._targets
    }
    ,
    e.invalidate = function() {
        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(),
        $e.prototype.invalidate.call(this)
    }
    ,
    e.kill = function(t, e) {
        if (void 0 === e && (e = "all"),
        !(t || e && "all" !== e))
            return this._lazy = this._pt = 0,
            this.parent ? Ot(this) : this;
        if (this.timeline)
            p = this.timeline.totalDuration(),
            this.timeline.killTweensOf(t, e, Ze && !0 !== Ze.vars.overwrite)._first || Ot(this),
            this.parent && p !== this.timeline.totalDuration() && ft(this, this._dur * this.timeline._tDur / p, 0, 1);
        else {
            var r, i, n, s, a, o, u, h = this._targets, l = t ? C(t) : h, f = this._ptLookup, p = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(h, l))
                return "all" === e && (this._pt = 0),
                Ot(this);
            for (r = this._op = this._op || [],
            "all" !== e && (Y(e) && (a = {},
            _(e, function(t) {
                return a[t] = 1
            }),
            e = a),
            e = function(t, e) {
                var r, i, n, s, t = t[0] ? H(t[0]).harness : 0, a = t && t.aliases;
                if (!a)
                    return e;
                for (i in r = Ft({}, e),
                a)
                    if (i in r)
                        for (n = (s = a[i].split(",")).length; n--; )
                            r[s[n]] = r[i];
                return r
            }(h, e)),
            u = h.length; u--; )
                if (~l.indexOf(h[u]))
                    for (a in i = f[u],
                    "all" === e ? (r[u] = e,
                    s = i,
                    n = {}) : (n = r[u] = r[u] || {},
                    s = e),
                    s)
                        (o = i && i[a]) && ("kill"in o.d && !0 !== o.d.kill(a) || et(this, o, "_pt"),
                        delete i[a]),
                        "all" !== n && (n[a] = 1);
            this._initted && !this._pt && p && Ot(this)
        }
        return this
    }
    ,
    n.to = function(t, e, r) {
        return new n(t,e,r)
    }
    ,
    n.from = function(t, e) {
        return _t(1, arguments)
    }
    ,
    n.delayedCall = function(t, e, r, i) {
        return new n(e,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i
        })
    }
    ,
    n.fromTo = function(t, e, r) {
        return _t(2, arguments)
    }
    ,
    n.set = function(t, e) {
        return e.duration = 0,
        e.repeatDelay || (e.repeat = 0),
        new n(t,e)
    }
    ,
    n.killTweensOf = function(t, e, r) {
        return I.killTweensOf(t, e, r)
    }
    ,
    n);
    function n(t, e, r, i) {
        var n;
        "number" == typeof e && (r.duration = e,
        e = r,
        r = null);
        var s, a, o, u, h, l, f, p, i = (n = $e.call(this, i ? e : tt(e)) || this).vars, _ = i.duration, c = i.delay, d = i.immediateRender, m = i.stagger, g = i.overwrite, v = i.keyframes, y = i.defaults, T = i.scrollTrigger, x = i.yoyoEase, i = e.parent || I, w = (D(t) || de(t) ? O(t[0]) : "length"in e) ? [t] : C(t);
        if (n._targets = w.length ? W(w) : z("GSAP target " + t + " not found. https://greensock.com", !X.nullTargetWarn) || [],
        n._ptLookup = [],
        n._overwrite = g,
        v || m || S(_) || S(c)) {
            if (e = n.vars,
            (s = n.timeline = new P({
                data: "nested",
                defaults: y || {}
            })).kill(),
            s.parent = s._dp = b(n),
            s._start = 0,
            v)
                tt(B(s.vars.defaults, {
                    ease: "none"
                })),
                m ? w.forEach(function(r, i) {
                    return v.forEach(function(t, e) {
                        return s.to(r, t, e ? ">" : i * m)
                    })
                }) : v.forEach(function(t) {
                    return s.to(w, t, ">")
                });
            else {
                if (u = w.length,
                f = m ? gt(m) : R,
                M(m))
                    for (h in m)
                        ~Ke.indexOf(h) && ((p = p || {})[h] = m[h]);
                for (a = 0; a < u; a++) {
                    for (h in o = {},
                    e)
                        tr.indexOf(h) < 0 && (o[h] = e[h]);
                    o.stagger = 0,
                    x && (o.yoyoEase = x),
                    p && Ft(o, p),
                    l = w[a],
                    o.duration = +He(_, b(n), a, l, w),
                    o.delay = (+He(c, b(n), a, l, w) || 0) - n._delay,
                    !m && 1 === u && o.delay && (n._delay = c = o.delay,
                    n._start += c,
                    o.delay = 0),
                    s.to(l, o, f(a, l, w))
                }
                s.duration() ? _ = c = 0 : n.timeline = 0
            }
            _ || n.duration(_ = s.duration())
        } else
            n.timeline = 0;
        return !0 !== g || Ut || (Ze = b(n),
        I.killTweensOf(w),
        Ze = 0),
        A(i, b(n), r),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        (d || !_ && !v && n._start === k(i._time) && E(d) && function t(e) {
            return !e || e._ts && t(e.parent)
        }(b(n)) && "nested" !== i.data) && (n._tTime = -L,
        n.render(Math.max(0, -c))),
        T && ht(b(n), T),
        n
    }
    function er(t, e, r) {
        return t.setAttribute(e, r)
    }
    function rr(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    B(q.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    _("staggerTo,staggerFrom,staggerFromTo", function(r) {
        q[r] = function() {
            var t = new P
              , e = Se.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
            t[r].apply(t, e)
        }
    });
    function ir(t, e, r) {
        return t[e] = r
    }
    function nr(t, e, r) {
        return t[e](r)
    }
    function sr(t, e, r, i) {
        return t[e](i.fp, r)
    }
    function ar(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
    function or(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
    function ur(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
    function hr(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
    function lr(t, e, r, i) {
        for (var n, s = this._pt; s; )
            n = s._next,
            s.p === i && s.modifier(t, e, r),
            s = n
    }
    function fr(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            i.p === t && !i.op || i.op === t ? et(this, i, "_pt") : i.dep || (e = 1),
            i = r;
        return !e
    }
    var pr = function(t, e) {
        return f(t[e]) ? nr : s(t[e]) && t.setAttribute ? er : ir
    }
      , _r = function(t) {
        for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next,
            r = i; r && r.pr > s.pr; )
                r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s : i = s,
            (s._next = r) ? r._prev = s : n = s,
            s = e
        }
        t._pt = i
    }
      , V = (cr.prototype.modifier = function(t, e, r) {
        this.mSet = this.mSet || this.set,
        this.set = rr,
        this.m = t,
        this.mt = r,
        this.tween = e
    }
    ,
    cr);
    function cr(t, e, r, i, n, s, a, o, u) {
        this.t = e,
        this.s = i,
        this.c = n,
        this.p = r,
        this.r = s || ar,
        this.d = a || this,
        this.set = o || ir,
        this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    _(De + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return be[t] = 1
    }),
    a.TweenMax = a.TweenLite = q,
    a.TimelineLite = a.TimelineMax = P,
    I = new P({
        sortChildren: !1,
        defaults: ue,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    X.stringFilter = Dt;
    var dr = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                var e = (t = !t.name && t.default || t).name
                  , r = f(t)
                  , r = e && !r && t.init ? function() {
                    this._props = []
                }
                : t
                  , i = {
                    init: R,
                    render: hr,
                    add: Je,
                    kill: fr,
                    modifier: lr,
                    rawVars: 0
                }
                  , n = {
                    targetTest: 0,
                    get: 0,
                    getSetter: pr,
                    aliases: {},
                    register: 0
                };
                if (Fe(),
                t !== r) {
                    if (N[e])
                        return;
                    B(r, B(K(t, i), n)),
                    Ft(r.prototype, Ft(i, K(t, n))),
                    N[r.prop = e] = r,
                    t.targetTest && (Ce.push(r),
                    be[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                m(e, r),
                t.register && t.register(d, r, V)
            })
        },
        timeline: function(t) {
            return new P(t)
        },
        getTweensOf: function(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function(i, t, e, r) {
            var n = H((i = Y(i) ? C(i)[0] : i) || {}).get
              , s = e ? T : y;
            return "native" === e && (e = ""),
            i && (t ? s((N[t] && N[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return s((N[t] && N[t].get || n)(i, t, e, r))
            }
            )
        },
        quickSetter: function(r, e, i) {
            var n, s;
            if (1 < (r = C(r)).length)
                return n = r.map(function(t) {
                    return d.quickSetter(t, e, i)
                }),
                s = n.length,
                function(t) {
                    for (var e = s; e--; )
                        n[e](t)
                }
                ;
            r = r[0] || {};
            var a = N[e]
              , o = H(r)
              , u = o.harness && (o.harness.aliases || {})[e] || e
              , h = a ? function(t) {
                var e = new a;
                gr._pt = 0,
                e.init(r, i ? t + i : t, gr, 0, [r]),
                e.render(1, e),
                gr._pt && hr(1, gr)
            }
            : o.set(r, u);
            return a ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ye(t.ease, ue.ease)),
            J(ue, t || {})
        },
        config: function(t) {
            return J(X, t || {})
        },
        registerEffect: function(t) {
            var i = t.name
              , n = t.effect
              , e = t.plugins
              , s = t.defaults
              , t = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !N[t] && !a[t] && z(i + " effect requires " + t + " plugin.")
            }),
            ke[i] = function(t, e, r) {
                return n(C(t), B(e || {}, s), r)
            }
            ,
            t && (P.prototype[i] = function(t, e, r) {
                return this.add(ke[i](t, M(e) ? e : (r = e) && {}, this), r)
            }
            )
        },
        registerEase: function(t, e) {
            o[t] = Ye(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Ye(t, e) : o
        },
        getById: function(t) {
            return I.getById(t)
        },
        exportRoot: function(t, e) {
            var r, i, n = new P(t = void 0 === t ? {} : t);
            for (n.smoothChildTiming = E(t.smoothChildTiming),
            I.remove(n),
            n._dp = 0,
            n._time = n._tTime = I._time,
            r = I._first; r; )
                i = r._next,
                !e && !r._dur && r instanceof q && r.vars.onComplete === r._targets[0] || A(n, r, r._start - r._delay),
                r = i;
            return A(I, n, 0),
            n
        },
        utils: {
            wrap: function t(e, r, i) {
                var n = r - e;
                return D(e) ? xt(e, t(0, e.length), r) : ct(i, function(t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, r, i) {
                var n = r - e
                  , s = 2 * n;
                return D(e) ? xt(e, t(0, e.length - 1), r) : ct(i, function(t) {
                    return e + (n < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: gt,
            random: Tt,
            snap: yt,
            normalize: function(t, e, r) {
                return Yt(t, e, 0, 1, r)
            },
            getUnit: U,
            clamp: function(e, r, t) {
                return ct(t, function(t) {
                    return Lt(e, r, t)
                })
            },
            splitColor: kt,
            toArray: C,
            selector: function(r) {
                return r = C(r)[0] || z("Invalid scope") || {},
                function(t) {
                    var e = r.current || r.nativeElement || r;
                    return C(t, e.querySelectorAll ? e : e === r ? z("Invalid scope") || Nt.createElement("div") : r)
                }
            },
            mapRange: Yt,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || U(t))
                }
            },
            interpolate: function t(e, r, i, n) {
                var s = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!s) {
                    var a, o, u, h, l, f = Y(e), p = {};
                    if (!0 === i && (n = 1,
                    i = null),
                    f)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (D(e) && !D(r)) {
                        for (u = [],
                        h = e.length,
                        l = h - 2,
                        o = 1; o < h; o++)
                            u.push(t(e[o - 1], e[o]));
                        h--,
                        s = function(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        i = r
                    } else
                        n || (e = Ft(D(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r)
                            Je.call(p, e, a, "get", r[a]);
                        s = function(t) {
                            return hr(t, p),
                            f ? e.p : e
                        }
                    }
                }
                return ct(i, s)
            },
            shuffle: mt
        },
        install: h,
        effects: ke,
        ticker: c,
        updateRoot: P.updateRoot,
        plugins: N,
        globalTimeline: I,
        core: {
            PropTween: V,
            globals: m,
            Tween: q,
            Timeline: P,
            Animation: qe,
            getCache: H,
            _removeLinkedListItem: et,
            suppressOverwrites: function(t) {
                return Ut = t
            }
        }
    };
    function mr(t, l) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, h, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (Y(h) && (e = {},
                    _(h, function(t) {
                        return e[t] = 1
                    }),
                    h = e),
                    l) {
                        for (r in e = {},
                        h)
                            e[r] = l(h[r]);
                        h = e
                    }
                    var i, n, s, a = t, o = h, u = a._targets;
                    for (i in o)
                        for (n = u.length; n--; )
                            (s = (s = a._ptLookup[n][i]) && s.d) && (s._pt && (s = function(t, e) {
                                for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
                                    r = r._next;
                                return r
                            }(s, i)),
                            s) && s.modifier && s.modifier(o[i], a, u[n], i)
                }
            }
        }
    }
    _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return dr[t] = q[t]
    }),
    c.add(P.updateRoot);
    var gr = dr.to({}, {
        duration: 0
    })
      , d = dr.registerPlugin({
        name: "attr",
        init: function(t, e, r, i, n) {
            var s, a;
            for (s in e)
                (a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s),
                this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, mr("roundProps", vt), mr("modifiers"), mr("snap", yt)) || dr;
    function vr(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function yr(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function Tr(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function xr(t, e) {
        t = e.s + e.c * t;
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }
    function wr(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function br(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function Or(t, e, r) {
        return t.style[e] = r
    }
    function Mr(t, e, r) {
        return t.style.setProperty(e, r)
    }
    function kr(t, e, r) {
        return t._gsap[e] = r
    }
    function Ar(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }
    function Cr(t, e, r, i, n) {
        t = t._gsap;
        t.scaleX = t.scaleY = r,
        t.renderTransform(n, t)
    }
    function Dr(t, e, r, i, n) {
        t = t._gsap;
        t[e] = r,
        t.renderTransform(n, t)
    }
    function Pr(t, e) {
        e = Gr.createElementNS ? Gr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Gr.createElement(t);
        return e.style ? e : Gr.createElement(t)
    }
    function j(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ti, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && j(t, ki(e) || e, 1) || ""
    }
    function Sr() {
        "undefined" != typeof window && window.document && (Wr = (Gr = window.document).documentElement,
        Zr = Pr("div") || {
            style: {}
        },
        Pr("div"),
        G = ki(G),
        Oi = G + "Origin",
        Zr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Jr = !!ki("perspective"),
        Hr = 1)
    }
    function zr(t) {
        var e, r = Pr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, s = this.style.cssText;
        if (Wr.appendChild(r),
        r.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = zr
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
        Wr.removeChild(r),
        this.style.cssText = s,
        e
    }
    function Rr(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }
    function Er(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = zr.call(e, !0)
        }
        return !(r = r && (r.width || r.height) || e.getBBox === zr ? r : zr.call(e, !0)) || r.width || r.x || r.y ? r : {
            x: +Rr(e, ["x", "cx", "x1"]) || 0,
            y: +Rr(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function Fr(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Er(t))
    }
    function Br(t, e) {
        e && (t = t.style,
        e in mi && e !== Oi && (e = G),
        t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
        t.removeProperty(e.replace(Ti, "-$1").toLowerCase())) : t.removeAttribute(e))
    }
    function Ir(t, e, r, i, n, s) {
        e = new V(t._pt,e,r,0,1,s ? br : wr);
        (t._pt = e).b = i,
        e.e = n,
        t._props.push(r)
    }
    function Q(t, e, r, i) {
        var n, s = parseFloat(r) || 0, a = (r + "").trim().substr((s + "").length) || "px", o = Zr.style, u = xi.test(e), h = "svg" === t.tagName.toLowerCase(), l = (h ? "client" : "offset") + (u ? "Width" : "Height"), f = "px" === i, p = "%" === i;
        return i === a || !s || Ai[i] || Ai[a] ? s : ("px" === a || f || (s = Q(t, e, r, "px")),
        r = t.getCTM && Fr(t),
        !p && "%" !== a || !mi[e] && !~e.indexOf("adius") ? (o[u ? "width" : "height"] = 100 + (f ? a : i),
        e = ~e.indexOf("adius") || "em" === i && t.appendChild && !h ? t : t.parentNode,
        (i = (e = (e = r ? (t.ownerSVGElement || {}).parentNode : e) && e !== Gr && e.appendChild ? e : Gr.body)._gsap) && p && i.width && u && i.time === c.time ? F(s / i.width * 100) : (!p && "%" !== a || (o.position = j(t, "position")),
        e === t && (o.position = "static"),
        e.appendChild(Zr),
        n = Zr[l],
        e.removeChild(Zr),
        o.position = "absolute",
        u && p && ((i = H(e)).time = c.time,
        i.width = e[l]),
        F(f ? n * s / 100 : n && s ? 100 / n * s : 0))) : (n = r ? t.getBBox()[u ? "width" : "height"] : t[l],
        F(p ? s / n * 100 : s / 100 * n)))
    }
    function Lr(t, e, r, i) {
        var n;
        return Hr || Sr(),
        e in bi && "transform" !== e && ~(e = bi[e]).indexOf(",") && (e = e.split(",")[0]),
        mi[e] && "transform" !== e ? (n = zi(t, i),
        n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ri(j(t, Oi)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Di[e] && Di[e](t, e, r) || j(t, e) || g(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? Q(t, e, n, r) + r : n
    }
    function Yr(t, e, r, i) {
        var n;
        r && "none" !== r || ((n = (s = ki(e, t, 1)) && j(t, s, 1)) && n !== r ? (e = s,
        r = n) : "borderColor" === e && (r = j(t, "borderTopColor")));
        var s, a, o, u, h, l, f, p, _, c, d = new V(this._pt,t.style,e,0,1,ur), m = 0, g = 0;
        if (d.b = r,
        d.e = i,
        r += "",
        "auto" == (i += "") && (t.style[e] = i,
        i = j(t, e) || i,
        t.style[e] = r),
        Dt(s = [r, i]),
        i = s[1],
        a = (r = s[0]).match(ve) || [],
        (i.match(ve) || []).length) {
            for (; f = ve.exec(i); )
                p = f[0],
                f = i.substring(m, f.index),
                u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1),
                p !== (h = a[g++] || "") && (o = parseFloat(h) || 0,
                _ = h.substr((o + "").length),
                (c = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                l = parseFloat(p),
                p = p.substr((l + "").length),
                m = ve.lastIndex - p.length,
                p || (p = p || X.units[e] || _,
                m === i.length && (i += p,
                d.e += p)),
                _ !== p && (o = Q(t, e, h, p) || 0),
                d._pt = {
                    _next: d._pt,
                    p: f || 1 === g ? f : ",",
                    s: o,
                    c: c ? c * l : l - o,
                    m: u && u < 4 || "zIndex" === e ? Math.round : 0
                });
            d.c = m < i.length ? i.substring(m, i.length) : ""
        } else
            d.r = "display" === e && "none" === i ? br : wr;
        return Te.test(i) && (d.e = 0),
        this._pt = d
    }
    function Ur(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t, a = s.style, o = e.u, e = s._gsap;
            if ("all" === o || !0 === o)
                a.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    mi[r] && (i = 1,
                    r = "transformOrigin" === r ? Oi : G),
                    Br(s, r);
            i && (Br(s, G),
            e) && (e.svg && s.removeAttribute("transform"),
            zi(s, 1),
            e.uncache = 1)
        }
    }
    function Xr(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function Nr(t) {
        t = j(t, G);
        return Xr(t) ? Pi : t.substr(7).match(ge).map(F)
    }
    function qr(t, e) {
        var r, i, n, s = t._gsap || H(t), a = t.style, o = Nr(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (o = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Pi : o : (o !== Pi || t.offsetParent || t === Wr || s.svg || (i = a.display,
        a.display = "block",
        (s = t.parentNode) && t.offsetParent || (n = 1,
        r = t.nextSibling,
        Wr.appendChild(t)),
        o = Nr(t),
        i ? a.display = i : Br(t, "display"),
        n && (r ? s.insertBefore(t, r) : s ? s.appendChild(t) : Wr.removeChild(t))),
        e && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    }
    function Vr(t, e, r, i, n, s) {
        var a, o = t._gsap, n = n || qr(t, !0), u = o.xOrigin || 0, h = o.yOrigin || 0, l = o.xOffset || 0, f = o.yOffset || 0, p = n[0], _ = n[1], c = n[2], d = n[3], m = n[4], g = n[5], v = e.split(" "), y = parseFloat(v[0]) || 0, T = parseFloat(v[1]) || 0;
        r ? n !== Pi && (n = p * d - _ * c) && (a = y * (-_ / n) + T * (p / n) - (p * g - _ * m) / n,
        y = y * (d / n) + T * (-c / n) + (c * g - d * m) / n,
        T = a) : (y = (n = Er(t)).x + (~v[0].indexOf("%") ? y / 100 * n.width : y),
        T = n.y + (~(v[1] || v[0]).indexOf("%") ? T / 100 * n.height : T)),
        i || !1 !== i && o.smooth ? (o.xOffset = l + ((m = y - u) * p + (g = T - h) * c) - m,
        o.yOffset = f + (m * _ + g * d) - g) : o.xOffset = o.yOffset = 0,
        o.xOrigin = y,
        o.yOrigin = T,
        o.smooth = !!i,
        o.origin = e,
        o.originIsAbsolute = !!r,
        t.style[Oi] = "0px 0px",
        s && (Ir(s, o, "xOrigin", u, y),
        Ir(s, o, "yOrigin", h, T),
        Ir(s, o, "xOffset", l, o.xOffset),
        Ir(s, o, "yOffset", f, o.yOffset)),
        t.setAttribute("data-svg-origin", y + " " + T)
    }
    function jr(t, e, r) {
        var i = U(e);
        return F(parseFloat(e) + parseFloat(Q(t, "x", r + "px", i))) + i
    }
    function Qr(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }
    q.version = P.version = d.version = "3.8.0",
    Vt = 1,
    u() && Fe();
    var Gr, Wr, Hr, Zr, $r, Jr, e = o.Power0, Kr = o.Power1, ti = o.Power2, ei = o.Power3, ri = o.Power4, ii = o.Linear, ni = o.Quad, si = o.Cubic, ai = o.Quart, oi = o.Quint, ui = o.Strong, hi = o.Elastic, li = o.Back, fi = o.SteppedEase, pi = o.Bounce, _i = o.Sine, ci = o.Expo, di = o.Circ, mi = {}, gi = 180 / Math.PI, vi = Math.PI / 180, yi = Math.atan2, Ti = /([A-Z])/g, xi = /(?:left|right|width|margin|padding|x)/i, wi = /[\s,\(]\S/, bi = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, G = "transform", Oi = G + "Origin", Mi = "O,Moz,ms,Ms,Webkit".split(","), ki = function(t, e, r) {
        var i = (e || Zr).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Mi[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Mi[n] : "") + t
    }, Ai = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Ci = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Di = {
        clearProps: function(t, e, r, i, n) {
            if ("isFromStart" !== n.data)
                return (e = t._pt = new V(t._pt,e,r,0,0,Ur)).u = i,
                e.pr = -10,
                e.tween = n,
                t._props.push(r),
                1
        }
    }, Pi = [1, 0, 0, 1, 0, 0], Si = {}, zi = function(t, e) {
        var r, i, n, s, a, o, u, h, l, f, p, _, c, d, m, g, v, y, T, x, w, b, O, M, k, A, C, D, P, S, z, R = t._gsap || new Ne(t);
        return "x"in R && !e && !R.uncache || (A = t.style,
        C = R.scaleX < 0,
        D = "deg",
        P = j(t, Oi) || "0",
        S = r = i = s = a = o = u = h = 0,
        z = n = 1,
        R.svg = !(!t.getCTM || !Fr(t)),
        l = qr(t, R.svg),
        R.svg && (y = (!R.uncache || "0px 0px" === P) && !e && t.getAttribute("data-svg-origin"),
        Vr(t, y || P, !!y || R.originIsAbsolute, !1 !== R.smooth, l)),
        e = R.xOrigin || 0,
        M = R.yOrigin || 0,
        l !== Pi && (_ = l[0],
        c = l[1],
        d = l[2],
        m = l[3],
        S = g = l[4],
        r = v = l[5],
        6 === l.length ? (z = Math.sqrt(_ * _ + c * c),
        n = Math.sqrt(m * m + d * d),
        s = _ || c ? yi(c, _) * gi : 0,
        (u = d || m ? yi(d, m) * gi + s : 0) && (n *= Math.abs(Math.cos(u * vi))),
        R.svg && (S -= e - (e * _ + M * d),
        r -= M - (e * c + M * m))) : (e = l[6],
        M = l[7],
        w = l[8],
        b = l[9],
        O = l[10],
        k = l[11],
        S = l[12],
        r = l[13],
        i = l[14],
        a = (l = yi(e, O)) * gi,
        l && (y = g * (f = Math.cos(-l)) + w * (p = Math.sin(-l)),
        T = v * f + b * p,
        x = e * f + O * p,
        w = g * -p + w * f,
        b = v * -p + b * f,
        O = e * -p + O * f,
        k = M * -p + k * f,
        g = y,
        v = T,
        e = x),
        o = (l = yi(-d, O)) * gi,
        l && (f = Math.cos(-l),
        k = m * (p = Math.sin(-l)) + k * f,
        _ = y = _ * f - w * p,
        c = T = c * f - b * p,
        d = x = d * f - O * p),
        s = (l = yi(c, _)) * gi,
        l && (y = _ * (f = Math.cos(l)) + c * (p = Math.sin(l)),
        T = g * f + v * p,
        c = c * f - _ * p,
        v = v * f - g * p,
        _ = y,
        g = T),
        a && 359.9 < Math.abs(a) + Math.abs(s) && (a = s = 0,
        o = 180 - o),
        z = F(Math.sqrt(_ * _ + c * c + d * d)),
        n = F(Math.sqrt(v * v + e * e)),
        l = yi(g, v),
        u = 2e-4 < Math.abs(l) ? l * gi : 0,
        h = k ? 1 / (k < 0 ? -k : k) : 0),
        R.svg) && (y = t.getAttribute("transform"),
        R.forceCSS = t.setAttribute("transform", "") || !Xr(j(t, G)),
        y) && t.setAttribute("transform", y),
        90 < Math.abs(u) && Math.abs(u) < 270 && (C ? (z *= -1,
        u += s <= 0 ? 180 : -180,
        s += s <= 0 ? 180 : -180) : (n *= -1,
        u += u <= 0 ? 180 : -180)),
        R.x = S - ((R.xPercent = S && (R.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-S) ? -50 : 0))) ? t.offsetWidth * R.xPercent / 100 : 0) + "px",
        R.y = r - ((R.yPercent = r && (R.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * R.yPercent / 100 : 0) + "px",
        R.z = i + "px",
        R.scaleX = F(z),
        R.scaleY = F(n),
        R.rotation = F(s) + D,
        R.rotationX = F(a) + D,
        R.rotationY = F(o) + D,
        R.skewX = u + D,
        R.skewY = 0 + D,
        R.transformPerspective = h + "px",
        (R.zOrigin = parseFloat(P.split(" ")[2]) || 0) && (A[Oi] = Ri(P)),
        R.xOffset = R.yOffset = 0,
        R.force3D = X.force3D,
        R.renderTransform = R.svg ? Yi : Jr ? Li : Ei,
        R.uncache = 0),
        R
    }, Ri = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Ei = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Li(t, e)
    }, Fi = "0deg", Bi = "0px", Ii = ") ", Li = function(t, e) {
        var r, i, e = e || this, n = e.xPercent, s = e.yPercent, a = e.x, o = e.y, u = e.z, h = e.rotation, l = e.rotationY, f = e.rotationX, p = e.skewX, _ = e.skewY, c = e.scaleX, d = e.scaleY, m = e.transformPerspective, g = e.force3D, v = e.target, e = e.zOrigin, y = "", t = "auto" === g && t && 1 !== t || !0 === g;
        !e || f === Fi && l === Fi || (g = parseFloat(l) * vi,
        i = Math.sin(g),
        r = Math.cos(g),
        g = parseFloat(f) * vi,
        a = jr(v, a, i * (i = Math.cos(g)) * -e),
        o = jr(v, o, -Math.sin(g) * -e),
        u = jr(v, u, r * i * -e + e)),
        m !== Bi && (y += "perspective(" + m + Ii),
        (n || s) && (y += "translate(" + n + "%, " + s + "%) "),
        !t && a === Bi && o === Bi && u === Bi || (y += u !== Bi || t ? "translate3d(" + a + ", " + o + ", " + u + ") " : "translate(" + a + ", " + o + Ii),
        h !== Fi && (y += "rotate(" + h + Ii),
        l !== Fi && (y += "rotateY(" + l + Ii),
        f !== Fi && (y += "rotateX(" + f + Ii),
        p === Fi && _ === Fi || (y += "skew(" + p + ", " + _ + Ii),
        1 === c && 1 === d || (y += "scale(" + c + ", " + d + Ii),
        v.style[G] = y || "translate(0, 0)"
    }, Yi = function(t, e) {
        var r, i, n, s, a, e = e || this, o = e.xPercent, u = e.yPercent, h = e.x, l = e.y, f = e.rotation, p = e.skewX, _ = e.skewY, c = e.scaleX, d = e.scaleY, m = e.target, g = e.xOrigin, v = e.yOrigin, y = e.xOffset, T = e.yOffset, e = e.forceCSS, x = parseFloat(h), w = parseFloat(l), f = parseFloat(f), p = parseFloat(p);
        (_ = parseFloat(_)) && (p += _ = parseFloat(_),
        f += _),
        f || p ? (f *= vi,
        p *= vi,
        r = Math.cos(f) * c,
        i = Math.sin(f) * c,
        n = Math.sin(f - p) * -d,
        s = Math.cos(f - p) * d,
        p && (_ *= vi,
        a = Math.tan(p - _),
        n *= a = Math.sqrt(1 + a * a),
        s *= a,
        _) && (a = Math.tan(_),
        r *= a = Math.sqrt(1 + a * a),
        i *= a),
        r = F(r),
        i = F(i),
        n = F(n),
        s = F(s)) : (r = c,
        s = d,
        i = n = 0),
        (x && !~(h + "").indexOf("px") || w && !~(l + "").indexOf("px")) && (x = Q(m, "x", h, "px"),
        w = Q(m, "y", l, "px")),
        (g || v || y || T) && (x = F(x + g - (g * r + v * n) + y),
        w = F(w + v - (g * i + v * s) + T)),
        (o || u) && (x = F(x + o / 100 * (a = m.getBBox()).width),
        w = F(w + u / 100 * a.height)),
        m.setAttribute("transform", a = "matrix(" + r + "," + i + "," + n + "," + s + "," + x + "," + w + ")"),
        e && (m.style[G] = a)
    };
    _("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
          , i = "Bottom"
          , n = "Left"
          , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        Di[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var s, a;
            if (arguments.length < 4)
                return s = o.map(function(t) {
                    return Lr(e, t, r)
                }),
                5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "),
            a = {},
            o.forEach(function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }),
            e.init(t, a, n)
        }
    });
    var Ui, Xi = {
        name: "css",
        register: Sr,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
            var s, a, o, u, h, l, f, p, _, B, c, d, I, m, g, v, y, T, x, w, L = this._props, b = t.style, O = r.vars.startAt;
            for (h in Hr || Sr(),
            e)
                if ("autoRound" !== h && (a = e[h],
                !N[h] || !Ge(h, e, r, i, t, n)))
                    if (p = typeof a,
                    u = Di[h],
                    "function" === p && (p = typeof (a = a.call(r, i, t, n))),
                    "string" === p && ~a.indexOf("random(") && (a = wt(a)),
                    u)
                        u(this, t, h, a, r) && (I = 1);
                    else if ("--" === h.substr(0, 2))
                        s = (getComputedStyle(t).getPropertyValue(h) + "").trim(),
                        a += "",
                        Re.lastIndex = 0,
                        Re.test(s) || (l = U(s),
                        f = U(a)),
                        f ? l !== f && (s = Q(t, h, s, f) + f) : l && (a += l),
                        this.add(b, "setProperty", s, a, i, n, 0, 0, h),
                        L.push(h);
                    else if ("undefined" !== p) {
                        if (O && h in O && (s = "function" == typeof O[h] ? O[h].call(r, i, t, n) : O[h],
                        h in X.units && !U(s) && (s += X.units[h]),
                        "=" !== ((s = Y(s) && ~s.indexOf("random(") ? wt(s) : s) + "").charAt(1)) || (s = Lr(t, h)),
                        u = parseFloat(s),
                        (p = "string" === p && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                        o = parseFloat(a),
                        _ = (h = h in bi && ("autoAlpha" === h && Ir(this, b, "visibility", (u = 1 === u && "hidden" === Lr(t, "visibility") && o ? 0 : u) ? "inherit" : "hidden", o ? "inherit" : "hidden", !o),
                        "scale" !== h) && "transform" !== h && ~(h = bi[h]).indexOf(",") ? h.split(",")[0] : h)in mi)
                            if (B || ((c = t._gsap).renderTransform && !e.parseTransform || zi(t, e.parseTransform),
                            d = !1 !== e.smoothOrigin && c.smooth,
                            (B = this._pt = new V(this._pt,b,G,0,1,c.renderTransform,c,0,-1)).dep = 1),
                            "scale" === h)
                                this._pt = new V(this._pt,c,"scaleY",c.scaleY,(p ? p * o : o - c.scaleY) || 0),
                                L.push("scaleY", h),
                                h += "X";
                            else {
                                if ("transformOrigin" === h) {
                                    w = x = T = void 0,
                                    T = (y = a).split(" "),
                                    x = T[0],
                                    w = T[1] || "50%",
                                    "top" !== x && "bottom" !== x && "left" !== w && "right" !== w || (y = x,
                                    x = w,
                                    w = y),
                                    T[0] = Ci[x] || x,
                                    T[1] = Ci[w] || w,
                                    a = T.join(" "),
                                    c.svg ? Vr(t, a, 0, d, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== c.zOrigin && Ir(this, c, "zOrigin", c.zOrigin, f),
                                    Ir(this, b, h, Ri(s), Ri(a)));
                                    continue
                                }
                                if ("svgOrigin" === h) {
                                    Vr(t, a, 1, d, 0, this);
                                    continue
                                }
                                if (h in Si) {
                                    y = this,
                                    x = c,
                                    w = h,
                                    T = u,
                                    g = p,
                                    v = z = F = void 0,
                                    F = 360,
                                    z = Y(m = a),
                                    v = parseFloat(m) * (z && ~m.indexOf("rad") ? gi : 1),
                                    v = T + (g = g ? v * g : v - T) + "deg",
                                    z && ("short" === (z = m.split("_")[1]) && (g %= F) != g % 180 && (g += g < 0 ? F : -F),
                                    "cw" === z && g < 0 ? g = (g + 36e9) % F - ~~(g / F) * F : "ccw" === z && 0 < g && (g = (g - 36e9) % F - ~~(g / F) * F)),
                                    y._pt = m = new V(y._pt,x,w,T,g,yr),
                                    m.e = v,
                                    m.u = "deg",
                                    y._props.push(w);
                                    continue
                                }
                                if ("smoothOrigin" === h) {
                                    Ir(this, c, "smooth", c.smooth, a);
                                    continue
                                }
                                if ("force3D" === h) {
                                    c[h] = a;
                                    continue
                                }
                                if ("transform" === h) {
                                    F = E = P = C = D = A = k = M = R = z = S = void 0;
                                    var M, k, A, C, D, P, S = this, z = a, R = t, E = Qr({}, R._gsap), F = R.style;
                                    for (k in E.svg ? (A = R.getAttribute("transform"),
                                    R.setAttribute("transform", ""),
                                    F[G] = z,
                                    M = zi(R, 1),
                                    Br(R, G),
                                    R.setAttribute("transform", A)) : (A = getComputedStyle(R)[G],
                                    F[G] = z,
                                    M = zi(R, 1),
                                    F[G] = A),
                                    mi)
                                        (A = E[k]) !== (D = M[k]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(k) < 0 && (C = U(A) !== (P = U(D)) ? Q(R, k, A, P) : parseFloat(A),
                                        D = parseFloat(D),
                                        S._pt = new V(S._pt,M,k,C,D - C,vr),
                                        S._pt.u = P || 0,
                                        S._props.push(k));
                                    Qr(M, E);
                                    continue
                                }
                            }
                        else
                            h in b || (h = ki(h) || h);
                        if (_ || (o || 0 === o) && (u || 0 === u) && !wi.test(a) && h in b)
                            o = o || 0,
                            (l = (s + "").substr((u + "").length)) !== (f = U(a) || (h in X.units ? X.units[h] : l)) && (u = Q(t, h, s, f)),
                            this._pt = new V(this._pt,_ ? c : b,h,u,p ? p * o : o - u,_ || "px" !== f && "zIndex" !== h || !1 === e.autoRound ? vr : xr),
                            this._pt.u = f || 0,
                            l !== f && "%" !== f && (this._pt.b = s,
                            this._pt.r = Tr);
                        else if (h in b)
                            Yr.call(this, t, h, s, a);
                        else {
                            if (!(h in t))
                                continue;
                            this.add(t, h, s || t[h], a, i, n)
                        }
                        L.push(h)
                    }
            I && _r(this)
        },
        get: Lr,
        aliases: bi,
        getSetter: function(t, e, r) {
            var i = bi[e];
            return (e = i && i.indexOf(",") < 0 ? i : e)in mi && e !== Oi && (t._gsap.x || Lr(t, "x")) ? r && $r === r ? "scale" === e ? Ar : kr : ($r = r || {}) && ("scale" === e ? Cr : Dr) : t.style && !s(t.style[e]) ? Or : ~e.indexOf("-") ? Mr : pr(t, e)
        },
        core: {
            _removeProperty: Br,
            _getMatrix: qr
        }
    }, Ni = (d.utils.checkPrefix = ki,
    Ui = _("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ni = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        mi[t] = 1
    }),
    _(Ni, function(t) {
        X.units[t] = "deg",
        Si[t] = 1
    }),
    bi[Ui[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ni,
    _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        t = t.split(":");
        bi[t[1]] = Ui[t[0]]
    }),
    _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        X.units[t] = "px"
    }),
    d.registerPlugin(Xi),
    d.registerPlugin(Xi) || d), qi = Ni.core.Tween;
    t.Back = li,
    t.Bounce = pi,
    t.CSSPlugin = Xi,
    t.Circ = di,
    t.Cubic = si,
    t.Elastic = hi,
    t.Expo = ci,
    t.Linear = ii,
    t.Power0 = e,
    t.Power1 = Kr,
    t.Power2 = ti,
    t.Power3 = ei,
    t.Power4 = ri,
    t.Quad = ni,
    t.Quart = ai,
    t.Quint = oi,
    t.Sine = _i,
    t.SteppedEase = fi,
    t.Strong = ui,
    t.TimelineLite = P,
    t.TimelineMax = P,
    t.TweenLite = q,
    t.TweenMax = qi,
    t.default = Ni,
    t.gsap = Ni,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
});
