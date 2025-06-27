var timex, timer, slideMask, OuterSpecialC, OuterSpecial, HomeBusiness, ProjectLibrary, NewsListLoad, BgNews, TitleNews, UA = navigator.userAgent, HTML = document.documentElement, isFirefox = "undefined" != typeof InstallTrigger, isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString(), isIE9 = /MSIE 9/i.test(UA), isIE10 = /MSIE 10/i.test(UA), isIE11 = /rv:11.0/i.test(UA), isIE = !!document.documentMode, isEdge = !isIE && !!window.StyleMedia && !isIE11, isChrome = -1 < UA.indexOf("Chrome") || !!window.chrome && !!window.chrome.webstore, Mobile = window.matchMedia("(max-width: 1024px)"), Touch = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart"in document.documentElement, iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform), Portrait = window.innerHeight > window.innerWidth, Landscape = window.innerHeight <= window.innerWidth, doWheel = !0, doTouch = !0, Body = document.body, Html = document.querySelector("html"), windscroll = window.pageYOffset, LoadIcon = document.querySelector(".loadicon"), Logo = document.querySelector(".logo"), Mask = document.querySelector(".mask"), TextSlogan = LoadIcon.querySelector(".text-slogan"), EnterSite = Mask.querySelector(".enter-site"), AllAlbum = document.querySelector(".all-album"), OverlayDark = document.querySelector(".overlay-dark"), Main = document.querySelector(".main"), Footer = document.querySelector(".footer"), Header = document.querySelector(".header"), Navigation = Header.querySelector(".navigation"), OverlayMenu = Navigation.querySelector(".overlay-menu"), Container = document.querySelector(".container"), IDPage = Container.getAttribute("id"), goTop = document.querySelector(".go-top"), Wheel = document.querySelector(".wheel"), rightHeader = document.querySelector(".right-header"), TitlePage = document.querySelector(".title-page"), NavClick = document.querySelector(".nav-click"), Banner = Container.querySelector(".banner") || Container.querySelector(".banner-inner"), OuterNavSec = Container.querySelector(".section-outernav"), OuterNav = Container.querySelector(".outer-nav"), Details = 0, NextOfBanner = Banner.nextElementSibling, TileReveal = Banner.querySelector(".tile-reveal");
"home-page" == IDPage ? (slideMask = Container.querySelector(".slide-mask"),
OuterSpecialC = Container.querySelector(".outernav-special"),
Body.appendChild(OuterSpecialC),
OuterSpecial = Body.querySelector(".outernav-special"),
HomeBusiness = Container.querySelector(".home-business")) : "project-details-page" == IDPage ? ProjectLibrary = Container.querySelector(".project-library") : "news-page" == IDPage && (NewsListLoad = Container.querySelector(".load-news-list"),
BgNews = Container.querySelector(".news-list-section .bg-cover"),
TitleNews = Container.querySelector(".news-list-section .title-main h2"));
function defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i)
    }
}
function createClass(t, e, n) {
    return e && defineProperties(t.prototype, e),
    n && defineProperties(t, n),
    t
}
function Extends() {
    return (Extends = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n, i = arguments[e];
            for (n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    }
    ).apply(this, arguments)
}
function inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype),
    (t.prototype.constructor = t).__proto__ = e
}
function instanceOf(t, e) {
    return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? e[Symbol.hasInstance](t) : t instanceof e
}
function classCallCheck(t, e) {
    if (!instanceOf(t, e))
        throw new TypeError("Cannot call a class as a function")
}
function iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
        return Array.from(t)
}
function toConsumableArray(t) {
    return arrayWithoutHoles(t) || iterableToArray(t) || nonIterableSpread()
}
function arrayWithHoles(t) {
    if (Array.isArray(t))
        return t
}
function arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
        return n
    }
}
iOS && HTML.classList.add("is-iOS"),
1 == Touch && HTML.classList.add("is-touch"),
isFirefox ? HTML.classList.add("is-Firefox") : isEdge ? HTML.classList.add("is-Edge") : isSafari ? HTML.classList.add("is-Safari") : isChrome && HTML.classList.add("is-Chrome");
var winsize, NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge, MathUtils = {
    lineEq: function(t, e, n, i, o) {
        t = (t - e) / (n - i);
        return t * o + (e - t * i)
    },
    map: function(t, e, n, i, o) {
        return (t - e) * (o - i) / (n - e) + i
    },
    lerp: function(t, e, n) {
        return (1 - n) * t + n * e
    },
    getRandomFloat: function(t, e) {
        return (Math.random() * (e - t) + t).toFixed(2)
    }
};
function RanDom(t, e) {
    return Math.max(Math.random() * (e - t) + t)
}
var calcWinsize = function() {
    return winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    }
}
  , debounce = function(i, o, s) {
    var a;
    return function() {
        var t = this
          , e = arguments
          , n = s && !a;
        clearTimeout(a),
        a = setTimeout(function() {
            a = null,
            s || i.apply(t, e)
        }, o),
        n && i.apply(t, e)
    }
}
  , u = (!function(t, i) {
    "use strict";
    "function" != typeof t.CustomEvent && (t.CustomEvent = function(t, e) {
        e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = i.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
        n
    }
    ,
    t.CustomEvent.prototype = t.Event.prototype),
    i.addEventListener("touchstart", n, !1),
    i.addEventListener("touchmove", u, !1),
    i.addEventListener("touchend", e, !1),
    i.addEventListener("mousedown", n, !1),
    i.addEventListener("mousemove", u, !1),
    i.addEventListener("mouseup", e, !1);
    var o = null
      , s = null
      , a = null
      , r = null
      , h = null
      , c = null;
    function e(t) {
        var e, n, i;
        c === t.target && (t = parseInt(c.getAttribute("data-swipe-threshold") || "20", 10),
        e = parseInt(c.getAttribute("data-swipe-timeout") || "500", 10),
        n = Date.now() - h,
        i = "",
        Math.abs(a) > Math.abs(r) ? Math.abs(a) > t && n < e && (i = 0 < a ? "swipeleft" : "swiperight") : Math.abs(r) > t && n < e && (i = 0 < r ? "swipeup" : "swipedown"),
        "" !== i && c.dispatchEvent(new CustomEvent(i,{
            bubbles: !0,
            cancelable: !0
        })),
        h = s = o = null)
    }
    function n(t) {
        "true" !== t.target.getAttribute("data-swipe-ignore") && (c = t.target,
        h = Date.now(),
        o = (t.touches ? t.touches[0] : t).clientX,
        s = (t.touches ? t.touches[0] : t).clientY,
        r = a = 0)
    }
    function u(t) {
        var e;
        o && s && (e = (t.touches ? t.touches[0] : t).clientX,
        t = (t.touches ? t.touches[0] : t).clientY,
        a = o - e,
        r = s - t)
    }
}(window, document),
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Splitting = e()
}(this, function() {
    "use strict";
    var o = document
      , c = o.createTextNode.bind(o);
    function u(t, e) {
        return t.appendChild(e)
    }
    function l(t, e, n) {
        var i = o.createElement("span");
        return e && (i.className = e),
        n && (i.textContent = n),
        t && u(t, i) || i
    }
    function f(t, e) {
        return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (e || o).querySelectorAll(t)) : []
    }
    function d(t, e) {
        t && t.some(e)
    }
    var s = {};
    function t(t, e, n, i) {
        return {
            by: t,
            depends: e,
            key: n,
            split: i
        }
    }
    function a(t) {
        return function e(n, t, i) {
            var o = i.indexOf(n);
            return -1 == o ? (i.unshift(n),
            d(s[n].depends, function(t) {
                e(t, n, i)
            })) : (t = i.indexOf(t),
            i.splice(o, 1),
            i.splice(t, 0, n)),
            i
        }(t, 0, []).map((e = s,
        function(t) {
            return e[t]
        }
        ));
        var e
    }
    function e(t) {
        s[t.by] = t
    }
    function p(t, n, i, o, s) {
        t.normalize();
        var a = []
          , r = document.createDocumentFragment()
          , h = (o && a.push(t.previousSibling),
        []);
        return f(t.childNodes).some(function(t) {
            var e;
            t.tagName && !t.hasChildNodes() ? h.push(t) : t.childNodes && t.childNodes.length ? (h.push(t),
            a.push.apply(a, p(t, n, i, o, s))) : (e = (t = t.wholeText || "").trim()).length && (" " === t[0] && h.push(c(" ")),
            d(e.split(i), function(t, e) {
                e && s && h.push(l(r, "whitespace", " "));
                e = l(r, n, t);
                a.push(e),
                h.push(e)
            }),
            " " === t[t.length - 1]) && h.push(c(" "))
        }),
        d(h, function(t) {
            u(r, t)
        }),
        t.innerHTML = "",
        u(t, r),
        a
    }
    var r = "words"
      , n = t(r, 0, "word", function(t) {
        return p(t, "word", /\s+/, 0, 1)
    })
      , i = t("chars", [r], "char", function(t, n, e) {
        var i = [];
        return d(e[r], function(t, e) {
            i.push.apply(i, p(t, "char", "", n.whitespace && e))
        }),
        i
    });
    function h(e) {
        e = e || {};
        return f(e.target || "[data-splitting]").map(function(n) {
            var t, i, o = n["ðŸŒ"];
            return !e.force && o || (o = n["ðŸŒ"] = {
                el: n
            },
            t = a(e.by || "chars"),
            i = function(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }({}, e),
            d(t, function(t) {
                var e;
                t.split && (e = t.by,
                t.key,
                t = t.split(n, i, o),
                o[e] = t,
                n.classList.add(e))
            }),
            n.classList.add("splitting")),
            o
        })
    }
    return h.html = function(t) {
        var e = (t = t || {}).target = l();
        return e.innerHTML = t.content,
        h(t),
        e.outerHTML
    }
    ,
    (h.add = e)(n),
    e(i),
    h
}),
!function(t, e) {
    "function" == typeof define && define.amd ? define(["exports"], e) : "undefined" != typeof exports ? e(exports) : (e(e = {}),
    t.PinchZoom = e)
}(this, function(t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t, e) {
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o)
                    for (var s in o)
                        Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }),
    "function" != typeof Array.from && (Array.from = function(t) {
        return [].slice.call(t)
    }
    );
    function s(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !1),
        t.dispatchEvent(n)
    }
    i.prototype = {
        defaults: {
            tapZoomFactor: 2,
            zoomOutFactor: 1.3,
            animationDuration: 300,
            maxZoom: 4,
            minZoom: .5,
            draggableUnzoomed: !0,
            lockDragAxis: !1,
            setOffsetsOnce: !1,
            use2d: !0,
            zoomStartEventName: "pz_zoomstart",
            zoomUpdateEventName: "pz_zoomupdate",
            zoomEndEventName: "pz_zoomend",
            dragStartEventName: "pz_dragstart",
            dragUpdateEventName: "pz_dragupdate",
            dragEndEventName: "pz_dragend",
            doubleTapEventName: "pz_doubletap",
            verticalPadding: 0,
            horizontalPadding: 0,
            onZoomStart: null,
            onZoomEnd: null,
            onZoomUpdate: null,
            onDragStart: null,
            onDragEnd: null,
            onDragUpdate: null,
            onDoubleTap: null
        },
        handleDragStart: function(t) {
            s(this.el, this.options.dragStartEventName),
            "function" == typeof this.options.onDragStart && this.options.onDragStart(this, t),
            this.stopAnimation(),
            this.lastDragPosition = !1,
            this.hasInteraction = !0,
            this.handleDrag(t)
        },
        handleDrag: function(t) {
            t = this.getTouches(t)[0];
            this.drag(t, this.lastDragPosition),
            this.offset = this.sanitizeOffset(this.offset),
            this.lastDragPosition = t
        },
        handleDragEnd: function() {
            s(this.el, this.options.dragEndEventName),
            "function" == typeof this.options.onDragEnd && this.options.onDragEnd(this, event),
            this.end()
        },
        handleZoomStart: function(t) {
            s(this.el, this.options.zoomStartEventName),
            "function" == typeof this.options.onZoomStart && this.options.onZoomStart(this, t),
            this.stopAnimation(),
            this.lastScale = 1,
            this.nthZoom = 0,
            this.lastZoomCenter = !1,
            this.hasInteraction = !0
        },
        handleZoom: function(t, e) {
            var t = this.getTouchCenter(this.getTouches(t))
              , n = e / this.lastScale;
            this.lastScale = e,
            this.nthZoom += 1,
            3 < this.nthZoom && (this.scale(n, t),
            this.drag(t, this.lastZoomCenter)),
            this.lastZoomCenter = t
        },
        handleZoomEnd: function() {
            s(this.el, this.options.zoomEndEventName),
            "function" == typeof this.options.onZoomEnd && this.options.onZoomEnd(this, event),
            this.end()
        },
        handleDoubleTap: function(t) {
            var e = this.getTouches(t)[0]
              , n = 1 < this.zoomFactor ? 1 : this.options.tapZoomFactor
              , i = this.zoomFactor
              , o = function(t) {
                this.scaleTo(i + t * (n - i), e)
            }
            .bind(this);
            this.hasInteraction || (this.isDoubleTap = !0,
            n < i && (e = this.getCurrentZoomCenter()),
            this.animate(this.options.animationDuration, o, this.swing),
            s(this.el, this.options.doubleTapEventName),
            "function" == typeof this.options.onDoubleTap && this.options.onDoubleTap(this, t))
        },
        computeInitialOffset: function() {
            this.initialOffset = {
                x: -Math.abs(this.el.offsetWidth * this.getInitialZoomFactor() - this.containPinch.offsetWidth) / 2,
                y: -Math.abs(this.el.offsetHeight * this.getInitialZoomFactor() - this.containPinch.offsetHeight) / 2
            }
        },
        resetOffset: function() {
            this.offset.x = this.initialOffset.x,
            this.offset.y = this.initialOffset.y
        },
        isImageLoaded: function(t) {
            return "IMG" === t.nodeName ? t.complete && 0 !== t.naturalHeight : Array.from(t.querySelectorAll("img")).every(this.isImageLoaded)
        },
        setupOffsets: function() {
            this.options.setOffsetsOnce && this._isOffsetsSet || (this._isOffsetsSet = !0,
            this.computeInitialOffset(),
            this.resetOffset())
        },
        sanitizeOffset: function(t) {
            var e = this.el.offsetWidth * this.getInitialZoomFactor() * this.zoomFactor
              , n = this.el.offsetHeight * this.getInitialZoomFactor() * this.zoomFactor
              , e = e - this.getContainerX() + this.options.horizontalPadding
              , n = n - this.getContainerY() + this.options.verticalPadding
              , i = Math.max(e, 0)
              , o = Math.max(n, 0)
              , e = Math.min(e, 0) - this.options.horizontalPadding
              , n = Math.min(n, 0) - this.options.verticalPadding;
            return {
                x: Math.min(Math.max(t.x, e), i),
                y: Math.min(Math.max(t.y, n), o)
            }
        },
        scaleTo: function(t, e) {
            this.scale(t / this.zoomFactor, e)
        },
        scale: function(t, e) {
            t = this.scaleZoomFactor(t),
            this.addOffset({
                x: (t - 1) * (e.x + this.offset.x),
                y: (t - 1) * (e.y + this.offset.y)
            }),
            s(this.el, this.options.zoomUpdateEventName),
            "function" == typeof this.options.onZoomUpdate && this.options.onZoomUpdate(this, event)
        },
        scaleZoomFactor: function(t) {
            var e = this.zoomFactor;
            return this.zoomFactor *= t,
            this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)),
            this.zoomFactor / e
        },
        canDrag: function() {
            return this.options.draggableUnzoomed || (t = this.zoomFactor,
            !((e = 1) - .01 < t && t < e + .01));
            var t, e
        },
        drag: function(t, e) {
            e && (this.options.lockDragAxis ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? this.addOffset({
                x: -(t.x - e.x),
                y: 0
            }) : this.addOffset({
                y: -(t.y - e.y),
                x: 0
            }) : this.addOffset({
                y: -(t.y - e.y),
                x: -(t.x - e.x)
            }),
            s(this.el, this.options.dragUpdateEventName),
            "function" == typeof this.options.onDragUpdate) && this.options.onDragUpdate(this, event)
        },
        getTouchCenter: function(t) {
            return this.getVectorAvg(t)
        },
        getVectorAvg: function(t) {
            return {
                x: t.map(function(t) {
                    return t.x
                }).reduce(o) / t.length,
                y: t.map(function(t) {
                    return t.y
                }).reduce(o) / t.length
            }
        },
        addOffset: function(t) {
            this.offset = {
                x: this.offset.x + t.x,
                y: this.offset.y + t.y
            }
        },
        sanitize: function() {
            this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
        },
        isInsaneOffset: function(t) {
            var e = this.sanitizeOffset(t);
            return e.x !== t.x || e.y !== t.y
        },
        sanitizeOffsetAnimation: function() {
            var e = this.sanitizeOffset(this.offset)
              , n = this.offset.x
              , i = this.offset.y
              , t = function(t) {
                this.offset.x = n + t * (e.x - n),
                this.offset.y = i + t * (e.y - i),
                this.update()
            }
            .bind(this);
            this.animate(this.options.animationDuration, t, this.swing)
        },
        zoomOutAnimation: function() {
            var e, n, t;
            1 !== this.zoomFactor && (e = this.zoomFactor,
            n = this.getCurrentZoomCenter(),
            t = function(t) {
                this.scaleTo(e + t * (1 - e), n)
            }
            .bind(this),
            this.animate(this.options.animationDuration, t, this.swing))
        },
        updateAspectRatio: function() {
            this.unsetContainerY(),
            null !== document.querySelector(".pinch-zoom-container") && this.setContainerY(this.containPinch.parentNode.offsetHeight)
        },
        getInitialZoomFactor: function() {
            var t = this.containPinch.offsetWidth / this.el.offsetWidth
              , e = this.containPinch.offsetHeight / this.el.offsetHeight;
            return Math.min(t, e)
        },
        getAspectRatio: function() {
            return this.el.offsetWidth / this.el.offsetHeight
        },
        getCurrentZoomCenter: function() {
            var t = this.offset.x - this.initialOffset.x
              , t = -1 * this.offset.x - t / (1 / this.zoomFactor - 1)
              , e = this.offset.y - this.initialOffset.y;
            return {
                x: t,
                y: -1 * this.offset.y - e / (1 / this.zoomFactor - 1)
            }
        },
        getTouches: function(t) {
            var e = this.containPinch.getBoundingClientRect()
              , n = document.documentElement.scrollTop || document.body.scrollTop
              , i = document.documentElement.scrollLeft || document.body.scrollLeft
              , o = e.top + n
              , s = e.left + i;
            return Array.prototype.slice.call(t.touches).map(function(t) {
                return {
                    x: t.pageX - s,
                    y: t.pageY - o
                }
            })
        },
        animate: function(n, i, o, s) {
            var a = (new Date).getTime()
              , r = function() {
                var t, e;
                this.inAnimation && (e = (t = (new Date).getTime() - a) / n,
                n <= t ? (i(1),
                s && s(),
                this.update(),
                this.stopAnimation(),
                this.update()) : (o && (e = o(e)),
                i(e),
                this.update(),
                requestAnimationFrame(r)))
            }
            .bind(this);
            this.inAnimation = !0,
            requestAnimationFrame(r)
        },
        stopAnimation: function() {
            this.inAnimation = !1
        },
        swing: function(t) {
            return -Math.cos(t * Math.PI) / 2 + .5
        },
        getContainerX: function() {
            return this.containPinch.offsetWidth
        },
        getContainerY: function() {
            return this.containPinch.offsetHeight
        },
        setContainerY: function(t) {
            return this.containPinch.style.height = t + "px"
        },
        unsetContainerY: function() {
            this.containPinch.style.height = null
        },
        setupMarkup: function() {
            var t, e;
            this.containPinch = (t = '<div class="pinch-zoom-container"></div>',
            (e = document.implementation.createHTMLDocument("")).body.innerHTML = t,
            Array.from(e.body.children)[0]),
            this.el.parentNode.insertBefore(this.containPinch, this.el),
            this.containPinch.appendChild(this.el),
            this.containPinch.style.overflow = "hidden",
            this.containPinch.style.position = "relative",
            this.el.style.webkitTransformOrigin = "0% 0%",
            this.el.style.mozTransformOrigin = "0% 0%",
            this.el.style.msTransformOrigin = "0% 0%",
            this.el.style.oTransformOrigin = "0% 0%",
            this.el.style.transformOrigin = "0% 0%",
            this.el.style.position = "absolute"
        },
        end: function() {
            this.hasInteraction = !1,
            this.sanitize(),
            this.update()
        },
        bindEvents: function() {
            var e = this;
            n(this.containPinch, this),
            window.addEventListener("resize", this.update.bind(this)),
            Array.from(this.el.querySelectorAll("img")).forEach(function(t) {
                t.addEventListener("load", e.update.bind(e))
            }),
            "IMG" === this.el.nodeName && this.el.addEventListener("load", this.update.bind(this))
        },
        update: function(o) {
            this.updatePlaned || (this.updatePlaned = !0,
            window.setTimeout(function() {
                this.updatePlaned = !1,
                o && "resize" === o.type && (this.updateAspectRatio(),
                this.setupOffsets()),
                o && "load" === o.type && (this.updateAspectRatio(),
                this.setupOffsets());
                var t = this.getInitialZoomFactor() * this.zoomFactor
                  , e = -this.offset.x / t
                  , n = -this.offset.y / t
                  , i = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + n + "px,0px)"
                  , t = "scale(" + t + ", " + t + ") translate(" + e + "px," + n + "px)"
                  , e = function() {
                    this.clone && (this.clone.parentNode.removeChild(this.clone),
                    delete this.clone)
                }
                .bind(this);
                !this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0,
                e(),
                this.el.style.webkitTransform = i,
                this.el.style.mozTransform = t,
                this.el.style.msTransform = t,
                this.el.style.oTransform = t,
                this.el.style.transform = i) : (this.is3d && (this.clone = this.el.cloneNode(!0),
                this.clone.style.pointerEvents = "none",
                this.containPinch.appendChild(this.clone),
                window.setTimeout(e, 100)),
                this.el.style.webkitTransform = t,
                this.el.style.mozTransform = t,
                this.el.style.msTransform = t,
                this.el.style.oTransform = t,
                this.el.style.transform = t,
                this.is3d = !1)
            }
            .bind(this), 0))
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        }
    },
    n = function(t, n) {
        function e(t, e) {
            if (r !== t) {
                if (r && !t)
                    switch (r) {
                    case "zoom":
                        n.handleZoomEnd(e);
                        break;
                    case "drag":
                        n.handleDragEnd(e)
                    }
                switch (t) {
                case "zoom":
                    n.handleZoomStart(e);
                    break;
                case "drag":
                    n.handleDragStart(e)
                }
            }
            r = t
        }
        function i(t) {
            2 === h ? e("zoom") : 1 === h && n.canDrag() ? e("drag", t) : e(null, t)
        }
        function o(t) {
            return Array.from(t).map(function(t) {
                return {
                    x: t.pageX,
                    y: t.pageY
                }
            })
        }
        function s(t, e) {
            var n = t.x - e.x
              , t = t.y - e.y;
            return Math.sqrt(n * n + t * t)
        }
        function a(t) {
            t.stopPropagation(),
            t.preventDefault()
        }
        var r = null
          , h = 0
          , c = null
          , u = null
          , l = !0;
        t.addEventListener("touchstart", function(t) {
            if (n.enabled) {
                l = !0,
                h = t.touches.length;
                var e = t
                  , t = (new Date).getTime();
                if (t - (c = 1 < h ? null : c) < 300)
                    switch (a(e),
                    n.handleDoubleTap(e),
                    r) {
                    case "zoom":
                        n.handleZoomEnd(e);
                        break;
                    case "drag":
                        n.handleDragEnd(e)
                    }
                else
                    n.isDoubleTap = !1;
                1 === h && (c = t)
            }
        }),
        t.addEventListener("touchmove", function(t) {
            if (n.enabled && !n.isDoubleTap) {
                if (l)
                    i(t),
                    r && a(t),
                    u = o(t.touches);
                else {
                    switch (r) {
                    case "zoom":
                        2 == u.length && 2 == t.touches.length && n.handleZoom(t, function(t, e) {
                            t = s(t[0], t[1]);
                            return s(e[0], e[1]) / t
                        }(u, o(t.touches)));
                        break;
                    case "drag":
                        n.handleDrag(t)
                    }
                    r && (a(t),
                    n.update())
                }
                l = !1
            }
        }),
        t.addEventListener("touchend", function(t) {
            n.enabled && (h = t.touches.length,
            i(t))
        })
    }
    ;
    var n, e = i;
    function i(t, e) {
        this.el = t,
        this.zoomFactor = 1,
        this.lastScale = 1,
        this.offset = {
            x: 0,
            y: 0
        },
        this.initialOffset = {
            x: 0,
            y: 0
        },
        this.options = Object.assign({}, this.defaults, e),
        this.setupMarkup(),
        this.bindEvents(),
        this.update(),
        this.isImageLoaded(this.el) && (this.updateAspectRatio(),
        this.setupOffsets()),
        this.enable()
    }
    function o(t, e) {
        return t + e
    }
    t.default = e
}),
function() {
    var t = document.querySelector(".httptemplate").innerHTML
      , e = document.createElement("script");
    e.id = "js_crypt",
    e.src = t + "../../catalog/view/js/crypt.js",
    e.type = "text/javascript",
    setTimeout(function() {
    }, 500)
}
);
var core_event = function() {
    var o = [];
    function i(t) {
        t.elm && t.elm.removeEventListener(t.event, t.handler, t.options)
    }
    return {
        on: function(t, e, n, i) {
            void 0 === n && (n = null),
            void 0 === i && (i = {}),
            t.split(" ").forEach(function(t) {
                n && n.addEventListener(t, e, {
                    passive: !1
                }, i),
                o.push({
                    event: t,
                    handler: e,
                    elm: n,
                    options: i
                })
            })
        },
        off: function(t, n) {
            void 0 === n && (n = null),
            t.split(" ").forEach(function(e) {
                o = o.filter(function(t) {
                    return !t || t.event !== e || t.elm !== n || (i(t),
                    !1)
                })
            })
        },
        emit: function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
            o.forEach(function(t) {
                t.elm || t.event.split(".")[0] !== e || t.handler.apply(t, n)
            })
        },
        destroy: function() {
            o.forEach(i),
            o = []
        }
    }
}
  , state = function(t) {
    var e = t;
    return {
        set: function(t) {
            e = t
        },
        is: function(t) {
            return t === e
        }
    }
}
  , keys = Object.keys;
function each(n, i) {
    keys(n).some(function(t, e) {
        return i(n[t], t, e)
    })
}
function values(e) {
    return keys(e).map(function(t) {
        return e[t]
    })
}
function isObject(t) {
    return "object" == typeof t
}
function merge(t, e) {
    var n = Extends({}, t);
    return each(e, function(t, e) {
        isObject(t) ? (isObject(n[e]) || (n[e] = {}),
        n[e] = merge(n[e], t)) : n[e] = t
    }),
    n
}
function object_assign(e, n) {
    return keys(n).forEach(function(t) {
        e[t] || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }),
    e
}
function toArray(t) {
    return Array.isArray(t) ? t : [t]
}
function between(t, e, n) {
    return Math.min(Math.max(t, n < e ? n : e), n < e ? e : n)
}
function sprintf(t, e) {
    var n = 0;
    return t.replace(/%s/g, function() {
        return toArray(e)[n++]
    })
}
function unit(t) {
    var e = typeof t;
    return "number" == e && 0 < t ? parseFloat(t) + "px" : "string" == e ? t : ""
}
function pad(t) {
    return t < 10 ? "0" + t : t
}
function toPixel(t, e) {
    var n;
    return "string" == typeof e && (applyStyle(n = create("div", {}), {
        position: "absolute",
        width: e
    }),
    append(t, n),
    e = n.clientWidth,
    dom_remove(n)),
    +e || 0
}
function find(t, e) {
    return t ? t.querySelector(e.split(" ")[0]) : null
}
function child(t, e) {
    return children(t, e)[0]
}
function children(t, e) {
    return t ? values(t.children).filter(function(t) {
        return hasClass(t, e.split(" ")[0]) || t.tagName === e
    }) : []
}
function create(t, e) {
    var n = document.createElement(t);
    return each(e, function(t, e) {
        return setAttribute(n, e, t)
    }),
    n
}
function domify(t) {
    var e = create("div", {});
    return e.innerHTML = t,
    e.firstChild
}
function dom_remove(t) {
    toArray(t).forEach(function(t) {
        var e;
        t && (e = t.parentElement) && e.removeChild(t)
    })
}
function append(t, e) {
    t && t.appendChild(e)
}
function before(t, e) {
    var n;
    t && e && (n = e.parentElement) && n.insertBefore(t, e)
}
function applyStyle(n, t) {
    n && each(t, function(t, e) {
        null !== t && (n.style[e] = t)
    })
}
function addOrRemoveClasses(e, t, n) {
    e && toArray(t).forEach(function(t) {
        t && e.classList[n ? "remove" : "add"](t)
    })
}
function addClass(t, e) {
    addOrRemoveClasses(t, e, !1)
}
function removeClass(t, e) {
    addOrRemoveClasses(t, e, !0)
}
function hasClass(t, e) {
    return !!t && t.classList.contains(e)
}
function setAttribute(t, e, n) {
    t && t.setAttribute(e, n)
}
function getAttribute(t, e) {
    return t ? t.getAttribute(e) : ""
}
function removeAttribute(t, e) {
    toArray(e).forEach(function(e) {
        toArray(t).forEach(function(t) {
            return t && t.removeAttribute(e)
        })
    })
}
function getRect(t) {
    return t.getBoundingClientRect()
}
function loaded(t, e) {
    var n, t = t.querySelectorAll("img"), i = t.length;
    i ? (n = 0,
    each(t, function(t) {
        t.onload = t.onerror = function() {
            ++n === i && e()
        }
    })) : e()
}
var SLIDE = "slide"
  , LOOP = "loop"
  , FADE = "fade"
  , slide = function(u, c) {
    var l, d;
    return {
        mount: function() {
            l = c.Elements.list,
            u.on("transitionend", function(t) {
                t.target === l && d && d()
            }, l)
        },
        start: function(t, e, n, i, o) {
            var r = u.options
              , s = c.Controller.edgeIndex
              , a = r.speed;
            d = o,
            u.is(SLIDE) && (0 === n && s <= e || s <= n && 0 === e) && (a = r.rewindSpeed || a),
            applyStyle(l, {
                transition: "transform " + a + "ms " + r.easing,
                transform: "translate(" + i.x + "px," + i.y + "px)"
            })
        }
    }
}
  , fade = function(n, s) {
    function a(t) {
        var e = n.options;
        applyStyle(s.Elements.slides[t], {
            transition: "opacity " + e.speed + "ms " + e.easing
        })
    }
    return {
        mount: function() {
            a(n.index)
        },
        start: function(t, e, n, i, o) {
            var r = s.Elements.track;
            applyStyle(r, {
                height: unit(r.clientHeight)
            }),
            a(e),
            setTimeout(function() {
                o(),
                applyStyle(r, {
                    height: ""
                })
            })
        }
    }
};
function compose(n, t, e) {
    var i = {};
    return each(t, function(t, e) {
        i[e] = t(n, i, e.toLowerCase())
    }),
    e = e || (n.is(FADE) ? fade : slide),
    i.Transition = e(n, i),
    i
}
var MESSAGE_PREFIX = "[SLIDEBOX]";
function error(t) {
    console.error(MESSAGE_PREFIX + " " + t)
}
function exist(t, e) {
    if (!t)
        throw new Error(e)
}
var ROOT = "slidebox"
  , ELEMENT_CLASSES = {
    root: ROOT,
    slider: ROOT + "-slider",
    track: ROOT + "-track",
    list: ROOT + "-list",
    slide: ROOT + "-item",
    container: ROOT + "-container",
    modify: ROOT + "-modify",
    arrows: ROOT + "-arrows",
    arrow: ROOT + "-arrow",
    prev: "arrow-prev",
    next: "arrow-next",
    pagination: ROOT + "-pagination",
    page: ROOT + "-pagi-item",
    num: ROOT + "-pagi-num",
    numsvg: ROOT + "-pagi-numsvg",
    clone: ROOT + "-item-clone",
    progress: ROOT + "-progress",
    bar: ROOT + "-progress-bar",
    autoplay: ROOT + "-autoplay",
    play: ROOT + "-play",
    pause: ROOT + "-pause",
    spinner: ROOT + "-spinner",
    sr: ROOT + "-sr"
}
  , STATUS_CLASSES = {
    active: "is-active",
    visible: "is-visible",
    loading: "is-loading"
}
  , I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay"
}
  , DEFAULTS = {
    type: "slide",
    rewind: !1,
    speed: 400,
    rewindSpeed: 0,
    waitForTransition: !0,
    width: 0,
    height: 0,
    fixedWidth: 0,
    fixedHeight: 0,
    heightRatio: 0,
    autoWidth: !1,
    autoHeight: !1,
    perPage: 1,
    perMove: 0,
    clones: 0,
    start: 0,
    focus: !1,
    gap: 0,
    padding: 0,
    arrows: !0,
    arrowPath: "",
    SizeW: 80,
    SizeH: 40,
    pagination: !0,
    dotNum: !1,
    dotNumSvg: !1,
    intoNav: !1,
    autoplay: !1,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    lazyLoad: !1,
    preloadPages: 1,
    easing: "cubic-bezier(.42,.65,.27,.99)",
    keyboard: "global",
    drag: !0,
    dragAngleThreshold: 30,
    swipeDistanceThreshold: 150,
    flickVelocityThreshold: .6,
    flickPower: 600,
    flickMaxPages: 1,
    direction: "ltr",
    cover: !1,
    accessibility: !0,
    slideFocus: !0,
    isNavigation: !1,
    trimSpace: !0,
    updateOnMove: !1,
    throttle: 100,
    destroy: !1,
    breakpoints: !1,
    classes: ELEMENT_CLASSES,
    i18n: I18N
}
  , CREATED = 1
  , MOUNTED = 2
  , IDLE = 3
  , MOVING = 4
  , DESTROYED = 5
  , Splide = function() {
    function t(t, e, n) {
        void 0 === e && (e = {}),
        void 0 === n && (n = {}),
        this.root = t instanceof Element ? t : document.querySelector(t),
        exist(this.root, "An invalid element/selector was given."),
        this.Components = null,
        this.Event = core_event(),
        this.State = state(CREATED),
        this._o = merge(DEFAULTS, e),
        this._i = 0,
        this._c = n,
        this._e = {},
        this._t = null
    }
    var e = t.prototype;
    return e.mount = function(t, e) {
        var i = this;
        void 0 === t && (t = this._e),
        void 0 === e && (e = this._t),
        this.State.set(CREATED),
        this._e = t,
        this._t = e,
        this.Components = compose(this, merge(this._c, t), e);
        try {
            each(this.Components, function(t, e) {
                var n = t.required;
                void 0 === n || n ? t.mount && t.mount() : delete i.Components[e]
            })
        } catch (t) {
            return void error(t.message)
        }
        var n = this.State;
        return n.set(MOUNTED),
        each(this.Components, function(t) {
            t.mounted && t.mounted()
        }),
        this.emit("mounted"),
        n.set(IDLE),
        this.emit("ready"),
        applyStyle(this.root, {
            visibility: "visible"
        }),
        this.on("move drag", function() {
            return n.set(MOVING)
        }).on("moved dragged", function() {
            return n.set(IDLE)
        }),
        this
    }
    ,
    e.sync = function(t) {
        return this.sibling = t,
        this
    }
    ,
    e.on = function(t, e, n, i) {
        return this.Event.on(t, e, n = void 0 === n ? null : n, i = void 0 === i ? {} : i),
        this
    }
    ,
    e.off = function(t, e) {
        return this.Event.off(t, e = void 0 === e ? null : e),
        this
    }
    ,
    e.emit = function(t) {
        for (var e, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++)
            i[o - 1] = arguments[o];
        return (e = this.Event).emit.apply(e, [t].concat(i)),
        this
    }
    ,
    e.go = function(t, e) {
        return void 0 === e && (e = this.options.waitForTransition),
        (this.State.is(IDLE) || this.State.is(MOVING) && !e) && this.Components.Controller.go(t, !1),
        this
    }
    ,
    e.is = function(t) {
        return t === this._o.type
    }
    ,
    e.add = function(t, e) {
        return this.Components.Elements.add(t, e = void 0 === e ? -1 : e, this.refresh.bind(this)),
        this
    }
    ,
    e.remove = function(t) {
        return this.Components.Elements.remove(t),
        this.refresh(),
        this
    }
    ,
    e.refresh = function() {
        return this.emit("refresh:before").emit("refresh").emit("resize"),
        this
    }
    ,
    e.destroy = function(e) {
        var t = this;
        if (void 0 === e && (e = !0),
        !this.State.is(CREATED))
            return values(this.Components).reverse().forEach(function(t) {
                t.destroy && t.destroy(e)
            }),
            this.emit("destroy", e),
            this.Event.destroy(),
            this.State.set(DESTROYED),
            this;
        this.on("ready", function() {
            return t.destroy(e)
        })
    }
    ,
    createClass(t, [{
        key: "index",
        get: function() {
            return this._i
        },
        set: function(t) {
            this._i = parseInt(t)
        }
    }, {
        key: "length",
        get: function() {
            return this.Components.Elements.length
        }
    }, {
        key: "options",
        get: function() {
            return this._o
        },
        set: function(t) {
            var e = this.State.is(CREATED);
            e || this.emit("update"),
            this._o = merge(this._o, t),
            e || this.emit("updated", this._o)
        }
    }, {
        key: "classes",
        get: function() {
            return this._o.classes
        }
    }, {
        key: "i18n",
        get: function() {
            return this._o.i18n
        }
    }]),
    t
}()
  , options = function(t) {
    var e = getAttribute(t.root, "data-splide");
    if (e)
        try {
            t.options = JSON.parse(e)
        } catch (t) {
            error(t.message)
        }
    return {
        mount: function() {
            t.State.is(CREATED) && (t.index = t.options.start)
        }
    }
}
  , LTR = "ltr"
  , RTL = "rtl"
  , TTB = "ttb"
  , STYLE_RESTORE_EVENTS = "update.slide"
  , elements_slide = function(o, n, e, r) {
    var i = o.options.updateOnMove
      , s = "ready.slide updated.slide resized.slide moved.slide" + (i ? " move.slide" : "")
      , a = {
        slide: r,
        index: n,
        realIndex: e,
        container: child(r, o.classes.container),
        isClone: -1 < e,
        mount: function() {
            var t = this;
            this.isClone || (r.id = o.root.id + "-slide" + pad(n + 1)),
            o.on(s, function() {
                return t.update()
            }).on(STYLE_RESTORE_EVENTS, c).on("click", function() {
                return o.emit("click", t)
            }, r),
            i && o.on("move.slide", function(t) {
                t === e && u(!0, !1)
            }),
            applyStyle(r, {
                display: ""
            }),
            this.styles = getAttribute(r, "style") || ""
        },
        destroy: function() {
            o.off(s).off(STYLE_RESTORE_EVENTS).off("click", r),
            removeClass(r, values(STATUS_CLASSES)),
            c(),
            removeAttribute(this.container, "style")
        },
        update: function() {
            u(this.isActive(), !1),
            u(this.isVisible(), !0)
        },
        isActive: function() {
            return o.index === n
        },
        isVisible: function() {
            var t, e, n = this.isActive();
            return o.is(FADE) || n ? n : (n = Math.ceil,
            t = getRect(o.Components.Elements.track),
            e = getRect(r),
            o.options.direction === TTB ? t.top <= e.top && e.bottom <= n(t.bottom) : t.left <= e.left && e.right <= n(t.right))
        },
        isWithin: function(t, e) {
            t = Math.abs(t - n);
            return (t = o.is(SLIDE) || this.isClone ? t : Math.min(t, o.length - t)) < e
        }
    };
    function u(t, e) {
        var n = e ? "visible" : "active"
          , i = STATUS_CLASSES[n];
        t ? (addClass(r, i),
        o.emit(n, a)) : hasClass(r, i) && (removeClass(r, i),
        o.emit(e ? "hidden" : "inactive", a))
    }
    function c() {
        setAttribute(r, "style", a.styles)
    }
    return a
}
  , UID_NAME = "uid"
  , components_elements = function(i, o) {
    var t, e = i.root, r = i.classes, s = [], a = (e.id || (window.splide = window.splide || {},
    t = window.splide[UID_NAME] || 0,
    window.splide[UID_NAME] = ++t,
    e.id = "slide" + pad(t)),
    {
        mount: function() {
            var t = this;
            this.init(),
            i.on("refresh", function() {
                t.destroy(),
                t.init()
            }).on("updated", function() {
                removeClass(e, u()),
                addClass(e, u())
            })
        },
        destroy: function() {
            s.forEach(function(t) {
                t.destroy()
            }),
            s = [],
            removeClass(e, u())
        },
        init: function() {
            var t, n = this;
            a.slider = child(e, r.slider),
            a.track = find(e, "." + r.track),
            a.list = child(a.track, r.list),
            exist(a.track && a.list, "Track or list was not found."),
            a.slides = children(a.list, r.slide),
            t = c(r.arrows),
            a.arrows = {
                prev: find(t, "." + r.prev),
                next: find(t, "." + r.next)
            },
            t = c(r.autoplay),
            a.bar = find(c(r.progress), "." + r.bar),
            a.play = find(t, "." + r.play),
            a.pause = find(t, "." + r.pause),
            a.track.id = a.track.id || e.id + "-track",
            a.list.id = a.list.id || e.id + "-list",
            addClass(e, u()),
            this.slides.forEach(function(t, e) {
                n.register(t, e, -1)
            })
        },
        register: function(t, e, n) {
            e = elements_slide(i, e, n, t);
            e.mount(),
            s.push(e)
        },
        getSlide: function(e) {
            return s.filter(function(t) {
                return t.index === e
            })[0]
        },
        getSlides: function(t) {
            return t ? s : s.filter(function(t) {
                return !t.isClone
            })
        },
        getSlidesByPage: function(t) {
            var e = o.Controller.toIndex(t)
              , t = i.options
              , n = !1 !== t.focus ? 1 : t.perPage;
            return s.filter(function(t) {
                t = t.index;
                return e <= t && t < e + n
            })
        },
        add: function(t, e, n) {
            var i;
            (t = "string" == typeof t ? domify(t) : t)instanceof Element && (i = this.slides[e],
            applyStyle(t, {
                display: "none"
            }),
            i ? (before(t, i),
            this.slides.splice(e, 0, t)) : (append(this.list, t),
            this.slides.push(t)),
            loaded(t, function() {
                n && n(t)
            }))
        },
        remove: function(t) {
            dom_remove(this.slides.splice(t, 1)[0])
        },
        each: function(t) {
            s.forEach(t)
        },
        get length() {
            return this.slides.length
        },
        get total() {
            return s.length
        }
    });
    function u() {
        var t = r.root
          , e = i.options;
        return [t + "-" + e.type, t + "-" + e.direction, e.drag ? t + "-draggable" : "", e.isNavigation ? t + "-nav" : "", STATUS_CLASSES.active]
    }
    function c(t) {
        return child(e, t) || child(a.slider, t)
    }
    return a
}
  , floor = Math.floor
  , controller = function(r, n) {
    var s, i, a = {
        mount: function() {
            s = r.options,
            i = r.is(LOOP),
            r.on("move", function(t) {
                r.index = t
            }).on("updated refresh", function(t) {
                s = t || s,
                r.index = between(r.index, 0, a.edgeIndex)
            })
        },
        go: function(t, e) {
            t = this.trim(this.parse(t));
            n.Track.go(t, this.rewind(t), e)
        },
        parse: function(t) {
            var e = r.index
              , n = String(t).match(/([+\-<>]+)(\d+)?/)
              , i = n ? n[1] : ""
              , o = n ? parseInt(n[2]) : 0;
            switch (i) {
            case "+":
                e += o || 1;
                break;
            case "-":
                e -= o || 1;
                break;
            case ">":
            case "<":
                e = function(t, e, n) {
                    if (-1 < t)
                        return a.toIndex(t);
                    t = s.perMove,
                    n = n ? -1 : 1;
                    if (t)
                        return e + t * n;
                    return a.toIndex(a.toPage(e) + n)
                }(o, e, "<" === i);
                break;
            default:
                e = parseInt(t)
            }
            return e
        },
        toIndex: function(t) {
            var e, n;
            return o() ? t : (e = r.length,
            n = t * (t = s.perPage),
            e - t <= (n -= (this.pageLength * t - e) * floor(n / e)) && n < e ? e - t : n)
        },
        toPage: function(t) {
            var e, n;
            return o() ? t : (e = r.length,
            n = s.perPage,
            floor(e - n <= t && t < e ? (e - 1) / n : t / n))
        },
        trim: function(t) {
            return t = i ? t : s.rewind ? this.rewind(t) : between(t, 0, this.edgeIndex)
        },
        rewind: function(t) {
            var e = this.edgeIndex;
            if (i) {
                for (; e < t; )
                    t -= e + 1;
                for (; t < 0; )
                    t += e + 1
            } else
                e < t ? t = 0 : t < 0 && (t = e);
            return t
        },
        isRtl: function() {
            return s.direction === RTL
        },
        get pageLength() {
            var t = r.length;
            return o() ? t : Math.ceil(t / s.perPage)
        },
        get edgeIndex() {
            var t = r.length;
            return t ? o() || s.isNavigation || i ? t - 1 : t - s.perPage : 0
        },
        get prevIndex() {
            var t = r.index - 1;
            return -1 < (t = i || s.rewind ? this.rewind(t) : t) ? t : -1
        },
        get nextIndex() {
            var t = r.index + 1;
            return (i || s.rewind) && (t = this.rewind(t)),
            r.index < t && t <= this.edgeIndex || 0 === t ? t : -1
        }
    };
    function o() {
        return !1 !== s.focus
    }
    return a
}
  , abs = Math.abs
  , track = function(r, s) {
    var n, e, o, i = r.options.direction === TTB, a = r.is(FADE), u = r.options.direction === RTL, c = !1, l = u ? 1 : -1, d = {
        sign: l,
        mount: function() {
            e = s.Elements,
            n = s.Layout,
            o = e.list
        },
        mounted: function() {
            var t = this;
            a || (this.jump(0),
            r.on("mounted resize updated", function() {
                t.jump(r.index)
            }))
        },
        go: function(t, e, n) {
            var i = p(t)
              , o = r.index;
            r.State.is(MOVING) && c || (c = t !== e,
            n || r.emit("move", e, o, t),
            1 <= Math.abs(i - this.position) || a ? s.Transition.start(t, e, o, this.toCoord(i), function() {
                f(t, e, o, n)
            }) : t !== o && "move" === r.options.trimSpace ? s.Controller.go(t + t - o, n) : f(t, e, o, n))
        },
        jump: function(t) {
            this.translate(p(t))
        },
        translate: function(t) {
            applyStyle(o, {
                transform: "translate" + (i ? "Y" : "X") + "(" + t + "px)"
            })
        },
        cancel: function() {
            r.is(LOOP) ? this.shift() : this.translate(this.position),
            applyStyle(o, {
                transition: ""
            })
        },
        shift: function() {
            var t = abs(this.position)
              , e = abs(this.toPosition(0))
              , n = abs(this.toPosition(r.length))
              , i = n - e;
            t < e ? t += i : n < t && (t -= i),
            this.translate(l * t)
        },
        trim: function(t) {
            return !r.options.trimSpace || r.is(LOOP) ? t : between(t, l * (n.totalSize() - n.size - n.gap), 0)
        },
        toIndex: function(n) {
            var i = this
              , o = 0
              , r = 1 / 0;
            return e.getSlides(!0).forEach(function(t) {
                var t = t.index
                  , e = abs(i.toPosition(t) - n);
                e < r && (r = e,
                o = t)
            }),
            o
        },
        toCoord: function(t) {
            return {
                x: i ? 0 : t,
                y: i ? t : 0
            }
        },
        toPosition: function(t) {
            var e = n.totalSize(t) - n.slideSize(t) - n.gap;
            return l * (e + this.offset(t))
        },
        offset: function(t) {
            var e = r.options.focus
              , t = n.slideSize(t);
            return "center" === e ? -(n.size - t) / 2 : -(parseInt(e) || 0) * (t + n.gap)
        },
        get position() {
            var t = i ? "top" : u ? "right" : "left";
            return getRect(o)[t] - (getRect(e.track)[t] - n.padding[t] * l)
        }
    };
    function f(t, e, n, i) {
        applyStyle(o, {
            transition: ""
        }),
        c = !1,
        a || d.jump(e),
        i || r.emit("moved", e, n, t)
    }
    function p(t) {
        return d.trim(d.toPosition(t))
    }
    return d
}
  , clones = function(o, t) {
    var s = []
      , e = 0
      , a = t.Elements
      , u = {
        mount: function() {
            var t = this;
            o.is(LOOP) && (n(),
            o.on("refresh:before", function() {
                t.destroy()
            }).on("refresh", n).on("resize", function() {
                e !== c() && (t.destroy(),
                o.refresh())
            }))
        },
        destroy: function() {
            dom_remove(s),
            s = []
        },
        get clones() {
            return s
        },
        get length() {
            return s.length
        }
    };
    function n() {
        u.destroy();
        var n = e = c()
          , i = a.length
          , o = a.register;
        if (i) {
            for (var r = a.slides; r.length < n; )
                r = r.concat(r);
            r.slice(0, n).forEach(function(t, e) {
                t = l(t);
                append(a.list, t),
                s.push(t),
                o(t, e + i, e % i)
            }),
            r.slice(-n).forEach(function(t, e) {
                t = l(t);
                before(t, r[0]),
                s.push(t),
                o(t, e - n, (i + e - n % i) % i)
            })
        }
    }
    function c() {
        var t, e, n, i = o.options;
        return i.clones || (t = i.autoWidth || i.autoHeight ? a.length : i.perPage,
        e = i.direction === TTB ? "Height" : "Width",
        (t = (n = toPixel(o.root, i["fixed" + e])) ? Math.ceil(a.track["client" + e] / n) : t) * (i.drag ? i.flickMaxPages + 1 : 1))
    }
    function l(t) {
        t = t.cloneNode(!0);
        return addClass(t, o.classes.clone),
        removeAttribute(t, "id"),
        t
    }
    return u
}
  , horizontal = function(i, t) {
    var n, o = t.Elements, r = i.root, s = i.options;
    return {
        margin: "margin" + (s.direction === RTL ? "Left" : "Right"),
        height: 0,
        init: function() {
            this.resize()
        },
        resize: function() {
            s = i.options,
            n = o.track,
            this.gap = toPixel(r, s.gap);
            var t = s.padding
              , e = toPixel(r, t.left || t)
              , t = toPixel(r, t.right || t);
            this.padding = {
                left: e,
                right: t
            },
            applyStyle(n, {
                paddingLeft: unit(e),
                paddingRight: unit(t)
            })
        },
        totalWidth: function(t) {
            void 0 === t && (t = i.length - 1);
            var e, t = o.getSlide(t), n = 0;
            return t && (t = getRect(t.slide),
            e = getRect(o.list),
            n = s.direction === RTL ? e.right - t.left : t.right - e.left,
            n += this.gap),
            n
        },
        slideWidth: function(t) {
            return s.autoWidth ? (t = o.getSlide(t)) ? t.slide.offsetWidth : 0 : (t = s.fixedWidth || (this.width + this.gap) / s.perPage - this.gap,
            toPixel(r, t))
        },
        slideHeight: function() {
            var t = s.height || s.fixedHeight || this.width * s.heightRatio;
            return toPixel(r, t)
        },
        get width() {
            return n.clientWidth - this.padding.left - this.padding.right
        }
    }
}
  , vertical = function(n, t) {
    var i, o, r = t.Elements, s = n.root;
    return {
        margin: "marginBottom",
        init: function() {
            this.resize()
        },
        resize: function() {
            o = n.options,
            i = r.track,
            this.gap = toPixel(s, o.gap);
            var t = o.padding
              , e = toPixel(s, t.top || t)
              , t = toPixel(s, t.bottom || t);
            this.padding = {
                top: e,
                bottom: t
            },
            applyStyle(i, {
                paddingTop: unit(e),
                paddingBottom: unit(t)
            })
        },
        totalHeight: function(t) {
            void 0 === t && (t = n.length - 1);
            t = r.getSlide(t);
            return t ? getRect(t.slide).bottom - getRect(r.list).top + this.gap : 0
        },
        slideWidth: function() {
            return toPixel(s, o.fixedWidth || this.width)
        },
        slideHeight: function(t) {
            return o.autoHeight ? (t = r.getSlide(t)) ? t.slide.offsetHeight : 0 : (t = o.fixedHeight || (this.height + this.gap) / o.perPage - this.gap,
            toPixel(s, t))
        },
        get width() {
            return i.clientWidth
        },
        get height() {
            var t = o.height || this.width * o.heightRatio;
            return exist(t, '"height" or "heightRatio" is missing.'),
            toPixel(s, t) - this.padding.top - this.padding.bottom
        }
    }
};
function throttle(t, e) {
    var n;
    return function() {
        n = n || setTimeout(function() {
            t(),
            n = null
        }, e)
    }
}
function createInterval(e, n, i) {
    function o(t) {
        c || (r || (r = t,
        a && a < 1 && (r -= a * n)),
        a = (s = t - r) / n,
        n <= s && (r = 0,
        a = 1,
        e()),
        i && i(a),
        u(o))
    }
    var r, s, a, u = window.requestAnimationFrame, c = !0;
    return {
        pause: function() {
            c = !0,
            r = 0
        },
        play: function(t) {
            r = 0,
            t && (a = 0),
            c && (c = !1,
            u(o))
        }
    }
}
var layout = function(t, e) {
    var i = e.Elements
      , n = t.options.direction === TTB
      , o = object_assign({
        mount: function() {
            t.on("resize load", throttle(function() {
                t.emit("resize")
            }, t.options.throttle), window).on("resize", s).on("updated refresh", r),
            r(),
            this.totalSize = n ? this.totalHeight : this.totalWidth,
            this.slideSize = n ? this.slideHeight : this.slideWidth
        },
        destroy: function() {
            removeAttribute([i.list, i.track], "style")
        },
        get size() {
            return n ? this.height : this.width
        }
    }, (n ? vertical : horizontal)(t, e));
    function r() {
        o.init(),
        applyStyle(t.root, {
            maxWidth: unit(t.options.width)
        }),
        i.each(function(t) {
            t.slide.style[o.margin] = unit(o.gap)
        }),
        s()
    }
    function s() {
        var e = t.options
          , n = (o.resize(),
        applyStyle(i.track, {
            height: unit(o.height)
        }),
        e.autoHeight ? null : unit(o.slideHeight()));
        i.each(function(t) {
            applyStyle(t.container, {
                height: n
            }),
            applyStyle(t.slide, {
                width: e.autoWidth ? null : unit(o.slideWidth(t.index)),
                height: t.container ? null : n
            })
        }),
        t.emit("resized")
    }
    return o
}
  , drag_abs = Math.abs
  , MIN_VELOCITY = .1
  , FRICTION_REDUCER = 7
  , drag = function(a, u) {
    var n, c, l, d, f = u.Track, p = u.Controller, i = a.options.direction === TTB, h = i ? "y" : "x", e = {
        disabled: !1,
        mount: function() {
            var t = this
              , e = u.Elements
              , n = e.track;
            a.on("touchstart mousedown", o, n).on("touchmove mousemove", s, n, {
                passive: !1
            }).on("touchend touchcancel mouseleave mouseup dragend", g, n).on("mounted refresh", function() {
                each(e.list.querySelectorAll("img, a"), function(t) {
                    a.off("dragstart", t).on("dragstart", function(t) {
                        t.preventDefault()
                    }, t, {
                        passive: !1
                    })
                })
            }).on("mounted updated", function() {
                t.disabled = !a.options.drag
            })
        }
    };
    function o(t) {
        e.disabled || d || r(t)
    }
    function r(t) {
        n = f.toCoord(f.position),
        c = m(t, {}),
        l = c
    }
    function s(t) {
        var e;
        c && (l = m(t, c),
        d ? (t.cancelable && t.preventDefault(),
        a.is(FADE) || (e = n[h] + l.offset[h],
        f.translate(function(t) {
            {
                var e, n, i;
                a.is(SLIDE) && (e = f.sign,
                n = e * f.trim(f.toPosition(0)),
                i = e * f.trim(f.toPosition(p.edgeIndex)),
                (t *= e) < n ? t = n - FRICTION_REDUCER * Math.log(n - t) : i < t && (t = i + FRICTION_REDUCER * Math.log(t - i)),
                t *= e)
            }
            return t
        }(e)))) : function(t) {
            t = t.offset;
            if (a.State.is(MOVING) && a.options.waitForTransition)
                return;
            t = 180 * Math.atan(drag_abs(t.y) / drag_abs(t.x)) / Math.PI;
            i && (t = 90 - t);
            return t < a.options.dragAngleThreshold
        }(l) && (a.emit("drag", c),
        a.root.classList.add("dragging"),
        d = !0,
        f.cancel(),
        r(t)))
    }
    function g() {
        var t, e, n, i, o, r, s;
        c = null,
        d && (a.emit("dragged", l),
        a.root.classList.remove("dragging"),
        e = (t = l).velocity[h],
        0 < (n = drag_abs(e)) && (i = a.options,
        o = a.index,
        e = e < 0 ? -1 : 1,
        r = o,
        a.is(FADE) || (s = f.position,
        n > i.flickVelocityThreshold && drag_abs(t.offset[h]) < i.swipeDistanceThreshold && (s += e * Math.min(n * i.flickPower, u.Layout.size * (i.flickMaxPages || 1))),
        r = f.toIndex(s)),
        r === o && MIN_VELOCITY < n && (r = o + e * f.sign),
        a.is(SLIDE) && (r = between(r, 0, p.edgeIndex)),
        p.go(r, i.isNavigation)),
        d = !1)
    }
    function m(t, e) {
        var n = t.timeStamp
          , i = t.touches
          , i = i ? i[0] : t
          , t = i.clientX
          , i = i.clientY
          , o = e.to || {}
          , r = o.x
          , o = o.y
          , r = {
            x: t - (void 0 === r ? t : r),
            y: i - (void 0 === o ? i : o)
        }
          , o = n - (e.time || 0);
        return {
            to: {
                x: t,
                y: i
            },
            offset: r,
            time: n,
            velocity: {
                x: r.x / o,
                y: r.y / o
            }
        }
    }
    return e
}
  , click = function(t, e) {
    var n = !1;
    function i(t) {
        n && (t.preventDefault(),
        t.stopPropagation(),
        t.stopImmediatePropagation())
    }
    return {
        required: t.options.drag,
        mount: function() {
            t.on("click", i, e.Elements.track, {
                capture: !0
            }).on("drag", function() {
                n = !0
            }).on("dragged", function() {
                setTimeout(function() {
                    n = !1
                })
            })
        }
    }
}
  , PAUSE_FLAGS = {
    HOVER: 1,
    FOCUS: 2,
    MANUAL: 3
}
  , autoplay = function(o, t, n) {
    var i, r = [], s = t.Elements, a = {
        required: o.options.autoplay,
        mount: function() {
            var t, e = o.options;
            s.slides.length > e.perPage && (i = createInterval(function() {
                o.go(">")
            }, e.interval, function(t) {
                o.emit(n + ":playing", t),
                s.bar && applyStyle(s.bar, {
                    width: 100 * t + "%"
                })
            }),
            e = o.options,
            t = o.sibling,
            t = [o.root, t ? t.root : null],
            e.pauseOnHover && (u(t, "mouseleave", PAUSE_FLAGS.HOVER, !0),
            u(t, "mouseenter", PAUSE_FLAGS.HOVER, !1)),
            e.pauseOnFocus && (u(t, "focusout", PAUSE_FLAGS.FOCUS, !0),
            u(t, "focusin", PAUSE_FLAGS.FOCUS, !1)),
            s.play && o.on("click", function() {
                a.play(PAUSE_FLAGS.FOCUS),
                a.play(PAUSE_FLAGS.MANUAL)
            }, s.play),
            s.pause && u([s.pause], "click", PAUSE_FLAGS.MANUAL, !1),
            o.on("move refresh", function() {
                a.play()
            }).on("destroy", function() {
                a.pause()
            }),
            this.play())
        },
        play: function(e) {
            void 0 === e && (e = 0),
            (r = r.filter(function(t) {
                return t !== e
            })).length || (o.emit(n + ":play"),
            i.play(o.options.resetProgress))
        },
        pause: function(t) {
            void 0 === t && (t = 0),
            i.pause(),
            -1 === r.indexOf(t) && r.push(t),
            1 === r.length && o.emit(n + ":pause")
        }
    };
    function u(t, e, n, i) {
        t.forEach(function(t) {
            o.on(e, function() {
                a[i ? "play" : "pause"](n)
            }, t)
        })
    }
    return a
}
  , cover = function(t, n) {
    function e(e) {
        n.Elements.each(function(t) {
            t = child(t.slide, "IMG") || child(t.container, "IMG");
            t && t.src && i(t, e)
        })
    }
    function i(t, e) {
        applyStyle(t.parentElement, {
            background: e ? "" : 'center/cover no-repeat url("' + t.src + '")'
        }),
        applyStyle(t, {
            display: e ? "" : "none"
        })
    }
    return {
        required: t.options.cover,
        mount: function() {
            t.on("lazyload:loaded", function(t) {
                i(t, !1)
            }),
            t.on("mounted updated refresh", function() {
                return e(!1)
            })
        },
        destroy: function() {
            e(!0)
        }
    }
}
  , XML_NAME_SPACE = "http://www.w3.org/2000/svg"
  , PATH = "M40,76C20.2,76,4,59.8,4,40C4,20.2,20.2,4,40,4c19.8,0,36,16.1,36,36C76,59.8,59.8,76,40,76z M40,5.8C21.1,5.8,5.8,21.1,5.8,40c0,18.9,15.4,34.2,34.2,34.2c18.9,0,34.2-15.4,34.2-34.2C74.2,21.1,58.9,5.8,40,5.8z"
  , PATHS1 = "M36.1,52.5 34.9,51.3 46.1,40 34.9,28.7 36.1,27.5 48.6,40z"
  , arrows = function(i, o, r) {
    var s, a, n, u = i.classes, c = i.root, l = o.Elements;
    function d() {
        var t = o.Controller
          , e = t.prevIndex
          , t = t.nextIndex
          , n = i.length > i.options.perPage || i.is(LOOP);
        s.disabled = e < 0 || !n,
        a.disabled = t < 0 || !n,
        i.emit(r + ":updated", s, a, e, t)
    }
    function f(t) {
        return "special" == i.options.arrowPath ? domify('<div class="special ' + u.arrow + " " + (t ? u.prev : u.next) + '"><svg xmlns="' + XML_NAME_SPACE + '"\tviewBox="0 0 ' + i.options.SizeW + " " + i.options.SizeH + '"\twidth="' + i.options.SizeW + '"\theight="' + i.options.SizeH + '"><path fill="currentColor" d="' + PATH + '" /><path fill="currentColor" d="' + PATHS1 + '" />') : domify('<div class="' + u.arrow + " " + (t ? u.prev : u.next) + '"><svg xmlns="' + XML_NAME_SPACE + '"\tviewBox="0 0 ' + i.options.SizeW + " " + i.options.SizeH + '"\twidth="' + i.options.SizeW + '"\theight="' + i.options.SizeH + '"><path fill="currentColor" d="' + (i.options.arrowPath || PATH) + '" />')
    }
    return {
        required: i.options.arrows,
        mount: function() {
            var t, e;
            s = l.arrows.prev,
            a = l.arrows.next,
            s && a || !i.options.arrows || (s = f(!0),
            a = f(!1),
            n = !0,
            t = i.root.querySelector(".slidebox-modify"),
            i.options.intoNav ? t || (append(e = create("div", {
                class: u.arrows
            }), s),
            append(e, a),
            t = create("div", {
                class: u.modify
            }),
            append(i.root, t),
            append(t, e)) : (append(e = create("div", {
                class: u.arrows
            }), s),
            append(e, a),
            t = l.slider,
            t = "slider" === i.options.arrows && t ? t : c,
            before(e, t.firstElementChild))),
            s && a && i.on("click", function() {
                i.go("<")
            }, s).on("click", function() {
                i.go(">")
            }, a).on("mounted move updated refresh", d),
            this.arrows = {
                prev: s,
                next: a
            }
        },
        mounted: function() {
            i.emit(r + ":mounted", s, a)
        },
        destroy: function() {
            var t;
            removeAttribute([s, a], "disabled"),
            n && (dom_remove(s.parentElement),
            t = i.root.querySelector(".slidebox-modify")) && t.remove()
        }
    }
}
  , ATTRIBUTES_UPDATE_EVENT = "move.page"
  , UPDATE_EVENT = "updated.page refresh.page"
  , pagination = function(s, e, i) {
    var a = {}
      , u = e.Elements
      , c = {
        mount: function() {
            var t, i, o, r, e, n = s.options.pagination;
            n && (i = s.options,
            o = s.classes,
            r = create("div", {
                class: o.pagination
            }),
            e = u.getSlides(!1).filter(function(t) {
                return !1 !== i.focus || t.index % i.perPage == 0
            }).map(function(t, e) {
                var n;
                return i.dotNum ? (n = create("div", {
                    class: o.num
                })).innerHTML = e <= 9 ? "0" + (e + 1) : e + 1 : i.dotNumSvg ? (n = create("div", {
                    class: o.numsvg
                })).innerHTML = e <= 9 ? "0" + (e + 1) : e + 1 : n = create("div", {
                    class: o.page
                }),
                append(r, n),
                s.on("click", function() {
                    s.go(">" + e)
                }, n),
                {
                    button: n,
                    page: e,
                    Slides: u.getSlidesByPage(e)
                }
            }),
            a = {
                list: r,
                items: e
            },
            e = u.slider,
            n = "slider" === n && e ? e : s.root,
            e = s.root.querySelector(".slidebox-arrows"),
            t = s.root.querySelector(".slidebox-pagination"),
            s.options.intoNav ? e && !t && append(e, a.list) : append(n, a.list),
            s.on(ATTRIBUTES_UPDATE_EVENT, l)),
            s.off(UPDATE_EVENT).on(UPDATE_EVENT, function() {
                c.destroy(),
                s.options.pagination && (c.mount(),
                c.mounted())
            })
        },
        mounted: function() {
            var t;
            s.options.pagination && (t = s.index,
            s.emit(i + ":mounted", a, this.getItem(t)),
            l(t, -1))
        },
        destroy: function() {
            dom_remove(a.list),
            a.items && a.items.forEach(function(t) {
                s.off("click", t.button)
            }),
            s.off(ATTRIBUTES_UPDATE_EVENT),
            a = {}
        },
        getItem: function(t) {
            return a.items[e.Controller.toPage(t)]
        },
        get data() {
            return a
        }
    };
    function l(t, e) {
        var e = c.getItem(e)
          , t = c.getItem(t)
          , n = STATUS_CLASSES.active;
        e && removeClass(e.button, n),
        t && addClass(t.button, n),
        s.emit(i + ":updated", a, e, t)
    }
    return c
}
  , SRC_DATA_NAME = "data-lazy"
  , SRCSET_DATA_NAME = "data-lazy-srcset"
  , lazyload = function(o, t, r) {
    var e, n, i = o.options, s = "sequential" === i.lazyLoad;
    function a() {
        n = [],
        e = 0
    }
    function u(e) {
        e = isNaN(e) ? o.index : e,
        (n = n.filter(function(t) {
            return !t.Slide.isWithin(e, i.perPage * (i.preloadPages + 1)) || (c(t.img, t.Slide),
            !1)
        }))[0] || o.off("moved." + r)
    }
    function c(t, e) {
        addClass(e.slide, STATUS_CLASSES.loading);
        var n = create("span", {
            class: o.classes.spinner
        });
        append(t.parentElement, n),
        t.onload = function() {
            d(t, n, e, !1)
        }
        ,
        t.onerror = function() {
            d(t, n, e, !0)
        }
        ,
        setAttribute(t, "srcset", getAttribute(t, SRCSET_DATA_NAME) || ""),
        setAttribute(t, "src", getAttribute(t, SRC_DATA_NAME) || "")
    }
    function l() {
        var t;
        e < n.length && c((t = n[e]).img, t.Slide),
        e++
    }
    function d(t, e, n, i) {
        removeClass(n.slide, STATUS_CLASSES.loading),
        i || (dom_remove(e),
        applyStyle(t, {
            display: ""
        }),
        o.emit(r + ":loaded", t).emit("resize")),
        s && l()
    }
    return {
        required: i.lazyLoad,
        mount: function() {
            o.on("mounted refresh", function() {
                a(),
                t.Elements.each(function(e) {
                    each(e.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function(t) {
                        t.src || t.srcset || (n.push({
                            img: t,
                            Slide: e
                        }),
                        applyStyle(t, {
                            display: "none"
                        }))
                    })
                }),
                s && l()
            }),
            s || o.on("mounted refresh moved." + r, u)
        },
        destroy: a
    }
}
  , ARIA_CURRENRT = "data-current"
  , ARIA_CONTROLS = "data-controls"
  , ARIA_LABEL = "data-label"
  , ARIA_LABELLEDBY = "aria-labelledby"
  , ARIA_HIDDEN = "aria-hidden"
  , TAB_INDEX = "tabindex"
  , KEY_MAP = {
    ltr: {
        ArrowLeft: "<",
        ArrowRight: ">",
        Left: "<",
        Right: ">"
    },
    rtl: {
        ArrowLeft: ">",
        ArrowRight: "<",
        Left: ">",
        Right: "<"
    },
    ttb: {
        ArrowUp: "<",
        ArrowDown: ">",
        Up: "<",
        Down: ">"
    }
}
  , keyboard = function(i) {
    var o;
    return {
        mount: function() {
            i.on("mounted updated", function() {
                var t = i.options
                  , e = i.root
                  , n = KEY_MAP[t.direction]
                  , t = t.keyboard;
                o && (i.off("keydown", o),
                removeAttribute(e, TAB_INDEX)),
                t && ("focused" === t ? setAttribute(o = e, TAB_INDEX, 0) : o = document,
                i.on("keydown", function(t) {
                    n[t.key] && i.go(n[t.key])
                }, o))
            })
        }
    }
}
  , a11y = function(r, e) {
    var s = r.i18n
      , o = e.Elements
      , n = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, "role"];
    function i(t, e) {
        setAttribute(t, ARIA_HIDDEN, !e),
        r.options.slideFocus && setAttribute(t, TAB_INDEX, e ? 0 : -1)
    }
    function t(t, e) {
        var n = o.track.id;
        setAttribute(t, ARIA_CONTROLS, n),
        setAttribute(e, ARIA_CONTROLS, n)
    }
    function a(t, e, n, i) {
        var o = r.index
          , n = -1 < n && o < n ? s.last : s.prev
          , i = -1 < i && i < o ? s.first : s.next;
        setAttribute(t, ARIA_LABEL, n),
        setAttribute(e, ARIA_LABEL, i)
    }
    function u(t, e) {
        e && setAttribute(e.button, ARIA_CURRENRT, !0),
        t.items.forEach(function(t) {
            var e = r.options
              , e = sprintf(!1 === e.focus && 1 < e.perPage ? s.pageX : s.slideX, t.page + 1)
              , n = t.button
              , t = t.Slides.map(function(t) {
                return t.slide.id
            });
            setAttribute(n, ARIA_CONTROLS, t.join(" ")),
            setAttribute(n, ARIA_LABEL, e)
        })
    }
    function c(t, e, n) {
        e && removeAttribute(e.button, ARIA_CURRENRT),
        n && setAttribute(n.button, ARIA_CURRENRT, !0)
    }
    function l(i) {
        o.each(function(t) {
            var e = t.slide
              , n = t.realIndex
              , n = (f(e) || setAttribute(e, "role", "div"),
            -1 < n ? n : t.index)
              , t = sprintf(s.slideX, n + 1)
              , n = i.Components.Elements.getSlide(n);
            setAttribute(e, ARIA_LABEL, t),
            n && setAttribute(e, ARIA_CONTROLS, n.slide.id)
        })
    }
    function d(t, e) {
        t = t.slide;
        e ? setAttribute(t, ARIA_CURRENRT, !0) : removeAttribute(t, ARIA_CURRENRT)
    }
    function f(t) {
        return "BUTTON" === t.tagName
    }
    return {
        required: r.options.accessibility,
        mount: function() {
            r.on("visible", function(t) {
                i(t.slide, !0)
            }).on("hidden", function(t) {
                i(t.slide, !1)
            }).on("arrows:mounted", t).on("arrows:updated", a).on("pagination:mounted", u).on("pagination:updated", c).on("refresh", function() {
                removeAttribute(e.Clones.clones, n)
            }),
            r.options.isNavigation && r.on("navigation:mounted navigation:updated", l).on("active", function(t) {
                d(t, !0)
            }).on("inactive", function(t) {
                d(t, !1)
            }),
            ["play", "pause"].forEach(function(t) {
                var e = o[t];
                e && (f(e) || setAttribute(e, "role", "button"),
                setAttribute(e, ARIA_CONTROLS, o.track.id),
                setAttribute(e, ARIA_LABEL, s[t]))
            })
        },
        destroy: function() {
            var t = e.Arrows
              , t = t ? t.arrows : {};
            removeAttribute(o.slides.concat([t.prev, t.next, o.play, o.pause]), n)
        }
    }
}
  , SYNC_EVENT = "move.sync"
  , CLICK_EVENTS = "mouseup touchend"
  , TRIGGER_KEYS = [" ", "Enter", "Spacebar"]
  , sync = function(i) {
    var o = i.sibling
      , t = o && o.options.isNavigation;
    function r() {
        i.on(SYNC_EVENT, function(t, e, n) {
            o.off(SYNC_EVENT).go(o.is(LOOP) ? n : t, !1),
            s()
        })
    }
    function s() {
        o.on(SYNC_EVENT, function(t, e, n) {
            i.off(SYNC_EVENT).go(i.is(LOOP) ? n : t, !1),
            r()
        })
    }
    function e() {
        o.Components.Elements.each(function(t) {
            var e = t.slide
              , n = t.index;
            i.off(CLICK_EVENTS, e).on(CLICK_EVENTS, function(t) {
                t.button && 0 !== t.button || a(n)
            }, e),
            i.off("keyup", e).on("keyup", function(t) {
                -1 < TRIGGER_KEYS.indexOf(t.key) && (t.preventDefault(),
                a(n))
            }, e, {
                passive: !1
            })
        })
    }
    function a(t) {
        i.State.is(IDLE) && o.go(t)
    }
    return {
        required: !!o,
        mount: function() {
            r(),
            s(),
            t && (e(),
            i.on("refresh", function() {
                setTimeout(function() {
                    e(),
                    o.emit("navigation:updated", i)
                })
            }))
        },
        mounted: function() {
            t && o.emit("navigation:mounted", i)
        }
    }
}
  , THROTTLE = 50
  , breakpoints = function(i) {
    var o, r, s = i.options.breakpoints, e = throttle(t, THROTTLE), a = [];
    function t() {
        var t, e, n = (n = a.filter(function(t) {
            return t.mql.matches
        })[0]) ? n.point : -1;
        n !== r && (r = n,
        t = i.State,
        (e = (n = s[n] || o).destroy) ? (i.options = o,
        i.destroy("completely" === e)) : (t.is(DESTROYED) && i.mount(),
        i.options = n))
    }
    return {
        required: s && matchMedia,
        mount: function() {
            a = Object.keys(s).sort(function(t, e) {
                return +t - +e
            }).map(function(t) {
                return {
                    point: t,
                    mql: matchMedia("(max-width:" + t + "px)")
                }
            }),
            this.destroy(!0),
            addEventListener("resize", e),
            o = i.options,
            t()
        },
        destroy: function(t) {
            t && removeEventListener("resize", e)
        }
    }
}
  , COMPLETE = {
    Options: options,
    Breakpoints: breakpoints,
    Controller: controller,
    Elements: components_elements,
    Track: track,
    Clones: clones,
    Layout: layout,
    Drag: drag,
    Click: click,
    Autoplay: autoplay,
    Cover: cover,
    Arrows: arrows,
    Pagination: pagination,
    LazyLoad: lazyload,
    Keyboard: keyboard,
    Sync: sync,
    A11y: a11y
}
  , LIGHT = {
    Options: options,
    Controller: controller,
    Elements: components_elements,
    Track: track,
    Clones: clones,
    Layout: layout,
    Drag: drag,
    Click: click,
    Arrows: arrows,
    Pagination: pagination,
    A11y: a11y
}
  , complete_Splide = function(n) {
    function t(t, e) {
        return n.call(this, t, e, COMPLETE) || this
    }
    return inheritsLoose(t, n),
    t
}(Splide);
window.Splide = complete_Splide;
gsap.config({
    nullTargetWarn: !1
});
var httpserver = document.querySelector(".httpserver") ? document.querySelector(".httpserver").innerHTML : ""
  , httptemplate = document.querySelector(".httptemplate") ? document.querySelector(".httptemplate").innerHTML : "";
function changeUrl(e, t, n, r, o, a, s) {
    void 0 !== window.history.pushState && document.URL != e && "" != e && window.history.pushState({
        path: e,
        dataName: o,
        title: t,
        keyword: r,
        description: n,
        titleog: a,
        descriptionog: s
    }, "", e),
    "" != t && (document.title = t,
    document.querySelector('meta[name="description"]').setAttribute("content", n),
    document.querySelector('meta[name="keywords"]').setAttribute("content", r),
    document.querySelector('meta[property="og:title"]').setAttribute("content", a),
    document.querySelector('meta[property="og:description"]').setAttribute("content", s),
    document.querySelector('meta[property="og:url"]').setAttribute("content", e),
    document.querySelector('link[rel="canonical"]').setAttribute("href", e)),
    document.getElementById("changlanguage_redirect").value = e
}
function changeAlternate(e, t, n) {
    null !== t && (void 0 !== n ? (document.querySelector('link[hreflang="vi-vn"]').setAttribute("href", t.dataset.hrefvi),
    document.querySelector('link[hreflang="en-vn"]').setAttribute("href", t.dataset.hrefen)) : t.forEach(function(e) {
        e.classList.contains("alternate-hl-vi") && document.querySelector('link[hreflang="vi-vn"]').setAttribute("href", e.innerHTML),
        e.classList.contains("alternate-hl-en") && document.querySelector('link[hreflang="en-vn"]').setAttribute("href", e.innerHTML)
    }))
}
var removeURL = function() {
    var e = document.querySelector(".nav-item.current a").href
      , t = document.querySelector(".nav-item.current a").dataset.title
      , n = document.querySelector(".nav-item.current a").dataset.keyword
      , r = document.querySelector(".nav-item.current a").dataset.description;
    changeUrl(e, t, r, n, document.querySelector(".nav-item.current a").dataset.name, t, r)
}
  , addURL = function(e, t) {
    var n = e.href || e.dataset.href
      , r = e.dataset.title || e.parentElement.querySelector(".link-change-url").dataset.title
      , o = e.dataset.keyword || e.parentElement.querySelector(".link-change-url").dataset.keyword
      , a = e.dataset.description || e.parentElement.querySelector(".link-change-url").dataset.description;
    changeUrl(n, r, a, o, e.dataset.name, r, a)
};
function ResizeWindows() {
    innerHeight,
    innerWidth,
    innerHeight,
    innerWidth,
    innerHeight,
    innerWidth;
    Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile"),
    Array.from(document.querySelectorAll(".more-button"), function(e) {
        if (e) {
            var e = e.parentNode.parentNode.querySelector(".wrap-text-us")
              , t = 0;
            if (e) {
                var n = e.querySelectorAll("p");
                if (10 < n.length) {
                    for (var r = 0; r < 10; r++)
                        t = n[r].clientHeight + t;
                    e.style.height = t + "px"
                }
            }
        }
    })
}
var doWheel = !0
  , doTouch = !0;
function turnWheel() {
    doWheel = !0
}
function turnTouch() {
    doTouch = !0
}
function FocusText() {
    document.querySelectorAll(".input-text, .input-area").forEach(function(e) {
        e.addEventListener("focusin", function(e) {
            this.querySelector(".holder") && this.querySelector(".holder").classList.add("hide")
        }),
        e.addEventListener("focusout", function(e) {
            this.querySelector("input, textarea").value.length <= 0 && this.querySelector(".holder") && this.querySelector(".holder").classList.remove("hide")
        })
    })
}
function Done() {
    setTimeout(function() {
        ContentLoad()
    }, 500)
}
function textBreak() {
    var e = document.querySelectorAll(".text-ani-item");
    e && e.forEach(function(e) {
        e.setAttribute("data-splitting", ""),
        Splitting()
    }),
    "home-page" !== IDPage && (TitlePage && (e = TitlePage.cloneNode(!0),
    Header.appendChild(e)),
    Array.from(document.querySelectorAll(".title-page"), function(e, t) {
        var n = document.createElement("div")
          , r = e.querySelector("h1").innerHTML;
        n.className = "title-page-inner",
        n.innerHTML = r,
        e.appendChild(n),
        Splitting({
            target: ".title-page-inner",
            by: "chars",
            key: null
        })
    }))
}
function Option() {
    Container.querySelectorAll(".view-album:not(.already), .link-view-album:not(.already)").forEach(function(e) {
        e.classList.add("already"),
        e.addEventListener("click", function(e) {
            e.preventDefault();
            e = this.getAttribute("data-href") || this.getAttribute("href");
            return Body.classList.add("no-scroll"),
            HTML.classList.add("no-scroll"),
            OverlayDark.classList.add("show"),
            AllAlbum.classList.add("show"),
            Container.classList.add("blur"),
            Header.classList.add("blur"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
            document.querySelector(".loadx").style.opacity = "1",
            u(),
            AlbumLoad(e, 0),
            !1
        })
    });
    Container.querySelectorAll(".view-video:not(.already)").forEach(function(e) {
        e.classList.add("already"),
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var e = this.getAttribute("data-href") || this.getAttribute("href")
              , t = this.getAttribute("data-embed").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)
              , t = t && 11 == t[2].length ? t[2] : "no video found"
              , t = '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + t + "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + t + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
            Html.classList.add("no-scroll"),
            Body.classList.add("no-scroll"),
            Container.classList.add("blur"),
            Header.classList.add("blur"),
            OverlayDark.classList.add("show"),
            gsap.to(".allvideo", {
                opacity: "1",
                duration: 1,
                display: "block",
                ease: "power2",
                delay: 1
            }),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
            document.querySelector(".loadx").style.opacity = "1",
            u(),
            VideoLoad(e, t)
        })
    });
    var c, e = document.querySelectorAll(".zoom-pic:not(.already)"), e = (e && (c = document.querySelector(".all-pics"),
    e.forEach(function(l) {
        l.classList.add("already"),
        l.addEventListener("click", function(e) {
            this.classList.contains("pic-background") && c.classList.add("has-background"),
            u();
            var t = l.querySelector("img") || l
              , n = (Html.classList.add("no-scroll"),
            Body.classList.add("no-scroll"),
            OverlayDark.classList.add("show"),
            c.classList.add("show"),
            Container.classList.add("blur"),
            Header.classList.add("blur"),
            document.createElement("div"))
              , r = document.createElement("div")
              , o = (n.classList.add("full"),
            r.classList.add("close-pics"),
            t.parentNode.parentNode.parentNode.querySelector("h3"))
              , a = (o ? (i = document.createElement("div"),
            a = document.createElement("h3"),
            i.className = "text-length",
            i.append(a),
            c.append(n, i),
            Body.append(r),
            a.textContent = o.textContent,
            i.classList.add("fadeindown")) : (c.append(n),
            Body.append(r)),
            t.dataset.datasrc)
              , s = (o = a || t.src,
            document.createElement("img"))
              , i = document.createElement("span");
            s.src = o,
            c.querySelector(".full").appendChild(s),
            c.querySelector(".full").appendChild(i),
            c.querySelector("img").addEventListener("load", function(e) {
                n.classList.add("pinch-zoom"),
                new PinchZoom.default(n,{
                    draggableUnzoomed: !1
                }),
                s.classList.add("fadein"),
                gsap.fromTo(r, {
                    opacity: 0,
                    x: 50
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1
                })
            }),
            i.addEventListener("click", function() {
                r.click()
            }),
            r.addEventListener("click", function() {
                return gsap.to(r, {
                    duration: .5,
                    opacity: 0,
                    ease: "none",
                    onComplete: function() {
                        r.remove()
                    }
                }),
                OverlayDark.classList.remove("show"),
                gsap.to(n, {
                    duration: .5,
                    opacity: 0,
                    ease: "none",
                    onComplete: function() {
                        c.classList.remove("show"),
                        c.innerHTML = "",
                        Html.classList.remove("no-scroll"),
                        Body.classList.remove("no-scroll"),
                        Container.classList.remove("blur"),
                        Header.classList.remove("blur")
                    }
                }),
                !1
            })
        })
    })),
    document.querySelectorAll("button.zoom:not(.already)"));
    e && (c = document.querySelector(".all-pics"),
    e.forEach(function(l) {
        l.classList.add("already"),
        l.addEventListener("click", function(e) {
            var t = l.parentNode.querySelector("img")
              , n = (Html.classList.add("no-scroll"),
            Body.classList.add("no-scroll"),
            OverlayDark.classList.add("show"),
            c.classList.add("show"),
            Container.classList.add("blur"),
            Header.classList.add("blur"),
            document.createElement("div"))
              , r = document.createElement("div")
              , o = (n.classList.add("full"),
            r.classList.add("close-pics"),
            t.parentNode.parentNode.parentNode.querySelector("h3"))
              , a = (o ? (i = document.createElement("div"),
            a = document.createElement("h3"),
            i.className = "text-length",
            i.append(a),
            c.append(n, i),
            Body.append(r),
            a.textContent = o.textContent,
            i.classList.add("fadeindown")) : (c.append(n),
            Body.append(r)),
            u(),
            t.dataset.datasrc)
              , s = (o = a || t.src,
            document.createElement("img"))
              , i = document.createElement("span");
            s.src = o,
            c.querySelector(".full").appendChild(s),
            c.querySelector(".full").appendChild(i),
            c.querySelector("img").addEventListener("load", function(e) {
                n.classList.add("pinch-zoom"),
                new PinchZoom.default(n,{
                    draggableUnzoomed: !1
                }),
                s.classList.add("fadein"),
                gsap.fromTo(r, {
                    opacity: 0,
                    x: 50
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1
                })
            }),
            i.addEventListener("click", function() {
                r.click()
            }),
            r.addEventListener("click", function() {
                return gsap.to(r, {
                    duration: .5,
                    opacity: 0,
                    ease: "none",
                    onComplete: function() {
                        r.remove()
                    }
                }),
                OverlayDark.classList.remove("show"),
                gsap.to(n, {
                    duration: .5,
                    opacity: 0,
                    ease: "none",
                    onComplete: function() {
                        c.classList.remove("show"),
                        c.innerHTML = "",
                        Html.classList.remove("no-scroll"),
                        Body.classList.remove("no-scroll"),
                        Container.classList.remove("blur"),
                        Header.classList.remove("blur")
                    }
                }),
                !1
            })
        })
    }))
}
function MouseCursor() {
    var l, t = function(e, t) {
        e.style.setProperty("--x", t.x + "px"),
        e.style.setProperty("--y", t.y + "px"),
        e.style.setProperty("--width", t.width + "px"),
        e.style.setProperty("--height", t.height + "px"),
        e.style.setProperty("--radius", t.radius),
        e.style.setProperty("--scale", t.scale),
        e.style.setProperty("--background", t.background),
        e.style.setProperty("--bordercolor", t.bordercolor)
    }
    .bind(this), n = document.querySelector("#cursor"), r = function(e) {
        var t, n, r, o, a, s, e = {
            x: e.clientX,
            y: e.clientY,
            width: 12,
            height: 12,
            radius: "50%",
            background: "#fba81a",
            bordercolor: "#fba81a"
        }, i = {};
        return null != l && (t = (o = l.getBoundingClientRect()).top,
        n = o.left,
        r = o.width,
        o = o.height,
        a = window.getComputedStyle(l).borderTopLeftRadius,
        s = window.getComputedStyle(l).getPropertyValue("border-color"),
        i.x = n + r / 2,
        i.y = t + o / 2,
        i.width = r,
        i.height = o,
        i.radius = a,
        i.background = "rgba(0, 0, 0, 0)",
        i.bordercolor = s),
        Object.assign({}, e, i)
    }
    // .bind(this);
    // document.addEventListener("mousemove", function(e) {
    //     e = r(e);
    //     t(n, e)
    // }
    // .bind(this)),
    // document.querySelectorAll("a, button, .nav-click").forEach(function(e) {
    //     e.addEventListener("mouseenter", function() {
    //         return l = e
    //     }
    //     .bind(this)),
    //     e.addEventListener("mouseleave", function() {
    //         return l = void 0
    //     }
    //     .bind(this))
    // }
    // .bind(this))
}
function PrintShare() {
    var e = Container.querySelector(".share-but")
      , t = Container.querySelector(".save-but")
      , n = Container.querySelector(".print-but")
      , r = Container.querySelector(".print-box")
      , o = Container.querySelector(".save-but");
    o && o.addEventListener("click", function() {
        return window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(document.title, window.location.href, "") : window.external && "AddFavorite"in window.external ? window.external.AddFavorite(location.href, document.title) : alert("Nhấn " + (-1 !== navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D để tạo bookmark cho trang này."),
        !1
    }),
    t && t.addEventListener("mouseenter", function() {
        e.classList.remove("active")
    }),
    e && e.addEventListener("mouseenter", function() {
        this.classList.add("active")
    }),
    n && n.addEventListener("mouseenter", function() {
        e.classList.remove("active")
    }),
    r && r.addEventListener("mouseleave", function() {
        e.classList.remove("active")
    }),
    n && n.addEventListener("click", function() {
        window.print()
    })
}
function detectButSpecial() {
    document.querySelectorAll(".outer-special .current").forEach(function(e) {
        var t = e.parentNode.parentNode.parentNode.offsetLeft
          , n = e.parentNode.offsetLeft
          , r = innerWidth / 2 - e.clientWidth / 2 - 40;
        e.parentNode.parentNode.parentNode.scrollLeft = n - r - t
    })
}
function detectBut() {
    var e = document.querySelectorAll(".outer-nav .current");
    OuterNav && (OuterNav.classList.contains("oversize") ? e.forEach(function(e) {
        var t = e.parentNode.parentNode.parentNode.offsetLeft
          , n = e.parentNode.offsetLeft
          , r = innerWidth / 2 - e.clientWidth / 2 - 40;
        e.parentNode.parentNode.parentNode.scrollLeft = n - r - t
    }) : Array.from(document.querySelectorAll(".sub-nav ul"), function(e) {
        e.removeAttribute("style")
    }))
}
function subNavFn() {
    var n = document.querySelectorAll(".sub-nav:not(.release) li button")
      , r = Header.querySelector(".outer-nav.second")
      , o = r.querySelector(".sub-nav");
    n.forEach(function(e) {
        e.addEventListener("click", function() {
            var e = this.getAttribute("data-name")
              , t = (null == document.querySelector("#business-page") && null == document.querySelector("#about-page") || (addURL(this, e),
            changeAlternate(this.getAttribute("data-href"), this.parentElement.querySelector(".link-change-url"), 1)),
            Mobile.matches ? document.querySelector(".set-post[data-post='" + e + "']").offsetTop - 105 : document.querySelector(".set-post[data-post='" + e + "']").offsetTop);
            return n.forEach(function(e) {
                e.classList.remove("current"),
                e.classList.remove("subcurrent")
            }),
            Html.scrollTo({
                top: t,
                left: 0,
                behavior: "smooth"
            }),
            Header.querySelector(".second li button[data-name='" + e + "']").classList.add("current"),
            r.classList.add("fixed"),
            o.classList.add("on-show"),
            setTimeout(function() {
                detectBut()
            }, 300),
            u(),
            !1
        })
    }),
    document.querySelector(".sub-nav:not(.release) li button.subcurrent") ? setTimeout(function() {
        document.querySelector(".outer-nav:not(.second) .sub-nav:not(.release) li button.subcurrent").click()
    }, 500) : (addClass(OuterNav.querySelector("ul li:first-child button"), "current"),
    addClass(r.querySelector("ul li:first-child button"), "current")),
    SubOverSize()
}
function subNavFnSpecial() {
    var n = document.querySelectorAll(".sub-special:not(.release) li button")
      , r = document.querySelector(".outer-special");
    n.forEach(function(e) {
        e.addEventListener("click", function() {
            var e = this.getAttribute("data-name")
              , t = Mobile.matches ? document.querySelector(".set-post[data-post='" + e + "']").offsetTop - 20 : document.querySelector(".set-post[data-post='" + e + "']").offsetTop;
            return n.forEach(function(e) {
                e.classList.remove("current"),
                e.classList.remove("subcurrent")
            }),
            Html.scrollTo({
                top: t,
                left: 0,
                behavior: "smooth"
            }),
            document.querySelector(".sub-special li button[data-name='" + e + "']").classList.add("current"),
            r.classList.add("fixed"),
            setTimeout(function() {
                detectBut()
            }, 300),
            u(),
            !1
        })
    }),
    document.querySelector(".sub-Z:not(.release) li button") ? setTimeout(function() {
        document.querySelector(".outer-nav:not(.second) .sub-nav:not(.release) li button").click()
    }, 500) : addClass(r.querySelector("ul li:first-child button"), "current")
}
function LinkLoadPopup() {
    var e = document.querySelectorAll(".link-popup:not(.already), .details-manager-zoom, .link-member, .home-popup");
    e && (e.forEach(function(e) {
        e.classList.contains("already") || (e.classList.add("already"),
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var e = this.getAttribute("data-name")
              , t = this.getAttribute("data-href") || this.getAttribute("href")
              , e = (null != e && (addURL(this, e),
            changeAlternate(this.getAttribute("href"), this.parentElement.querySelector(".link-change-url"), 1)),
            document.querySelector(".details-content"));
            return e && e.remove(),
            Body.classList.add("no-scroll"),
            HTML.classList.add("no-scroll"),
            OverlayDark.classList.add("show"),
            Container.classList.add("blur"),
            Header.classList.add("blur"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>'),
            document.querySelector(".loadx").style.opacity = "1",
            popupLoad(t),
            !1
        }))
    }),
    null != document.querySelector(".link-popup.current") && setTimeout(function() {
        document.querySelector(".link-popup.current").click()
    }, 1e3),
    null != document.querySelector(".link-member.current")) && setTimeout(function() {
        document.querySelector(".link-member.current").click()
    }, 1e3)
}
function SubOverSize() {
    for (var e = OuterNav.querySelectorAll("li"), t = Header.querySelector(".outer-nav.second"), n = 0, r = 0; r < e.length; r++)
        ((n += e[r].clientWidth) > innerWidth ? (t && t.classList.add("oversize"),
        addClass) : (t && t.classList.remove("oversize"),
        removeClass))(OuterNav, "oversize")
}
function CustomeSelect() {
    for (var e, t, n, r, o, a, s = document.getElementsByClassName("custom-select"), i = s.length, l = 0; l < i; l++)
        if (t = s[l].getElementsByTagName("select")[0],
        !s[l].querySelector(".select-items")) {
            var c = t.length
              , d = document.createElement("DIV")
              , u = t.className;
            for (d.setAttribute("class", "select-selected"),
            (o = document.createElement("DIV")).setAttribute("class", "drop-down-select"),
            (a = document.createElement("DIV")).setAttribute("class", "wrap-drop-down-select"),
            d.innerHTML = t.options[t.selectedIndex].innerHTML,
            s[l].appendChild(d),
            (n = document.createElement("DIV")).setAttribute("class", "select-items select-hide " + u + " "),
            e = 1; e < c; e++) {
                (r = document.createElement("DIV")).className = "select-div",
                r.innerHTML = t.options[e].innerHTML;
                var m = t.options[e].getAttribute("value")
                  , p = t.options[e].getAttribute("data-href");
                m && r.setAttribute("data-value", m),
                p && r.setAttribute("data-href", p),
                r.addEventListener("click", function(e) {
                    for (var t, n, r, o = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("select")[0], a = o.length, s = this.parentNode.parentNode.parentNode.previousSibling, i = 0; i < a; i++)
                        if (o.options[i].innerHTML == this.innerHTML) {
                            for (o.selectedIndex = i,
                            hasClass(s.parentNode, "can-change") && (s.innerHTML = this.innerHTML),
                            r = (t = this.parentNode.parentNode.parentNode.getElementsByClassName("same-as-selected")).length,
                            n = 0; n < r; n++)
                                t[n].removeAttribute("class");
                            this.setAttribute("class", "same-as-selected");
                            break
                        }
                    s.click()
                }),
                o.appendChild(r),
                a.appendChild(o),
                n.appendChild(a)
            }
            s[l].appendChild(n),
            d.addEventListener("click", function(e) {
                e.stopPropagation(),
                h(this),
                this.nextSibling.classList.toggle("select-hide"),
                this.classList.toggle("select-arrow-active"),
                this.parentNode.classList.toggle("level-index-in")
            })
        }
    function h(e) {
        for (var t = [], n = document.getElementsByClassName("select-items"), r = document.getElementsByClassName("select-selected"), o = n.length, a = r.length, s = 0; s < a; s++)
            e == r[s] ? t.push(s) : (r[s].classList.remove("select-arrow-active"),
            r[s].parentNode.classList.remove("level-index-in"));
        for (s = 0; s < o; s++)
            t.indexOf(s) && n[s].classList.add("select-hide")
    }
    document.addEventListener("click", h)
}
var isFirst = 0;
function onClick(e, t) {
    return document.getElementById("language_code").setAttribute("value", e),
    document.URL == document.querySelector(".httpserver").innerHTML ? (document.querySelector("input[name='language_code']").setAttribute("value", e),
    document.querySelector("input[name='redirect']").setAttribute("value", t),
    document.getElementById("change_lang").submit()) : (e = ("vi" == document.getElementById("language_code").getAttribute("value") ? document.querySelector('link[hreflang="vi-vn"]') : document.querySelector('link[hreflang="en-vn"]')).getAttribute("href"),
    document.getElementById("changlanguage_redirect").setAttribute("value", e),
    document.getElementById("change_lang").submit()),
    !1
}
function onScroll() {
    var e = document.querySelectorAll(".ani-item")
      , t = document.querySelectorAll(".text-ani-item:not(.not-onscroll)")
      , o = document.querySelectorAll(".color-strip");
    observer = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            e.isIntersecting && !e.target.classList.contains("on-show") && e.target.classList.add("on-show")
        })
    }
    ),
    observer2 = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            var o;
            e.isIntersecting && !e.target.classList.contains("on-show-text") && (e.target.classList.add("on-show-text"),
            clearTimeout(o),
            Array.from(e.target.querySelectorAll(".char"), function(e, t) {
                return o = setTimeout(function() {
                    e.classList.add("move")
                }, 60 * (t + 1)),
                !1
            }))
        })
    }
    ),
    observer3 = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            e.isIntersecting && !hasClass(e.target, "ani-strip") && e.target.classList.add("ani-strip")
        })
    }
    ),
    e && e.forEach(function(e) {
        observer.observe(e)
    }),
    t && t.forEach(function(e) {
        observer2.observe(e)
    }),
    o && o.forEach(function(e) {
        observer3.observe(e)
    })
}
function execSearch() {
    var e = document.getElementById("qsearch").value
      , t = document.getElementById("href_search").value
      , o = document.getElementById("defaultvalue").value
      , n = document.getElementById("errorsearchcode").value;
    return hidemsg(),
    e != o && "" != e && (e.length <= 2 ? ((o = document.createElement("div")).className = "contact-success color-red",
    o.innerHTML = n,
    document.querySelector(".overlay-dark").after(o),
    setTimeout(hidemsg, 5e3),
    !1) : void ("" != e && (n = t + "?qsearch=" + encodeURIComponent(e),
    window.location = n)))
}
var SlidePicture = {
    slideBanner: function() {
        e = 1 < slideMask.querySelectorAll(".slidebox-item").length && slideMask.getAttribute("data-time");
        var e, t = new Splide(slideMask,{
            type: "fade",
            rewind: !0,
            gap: 0,
            speed: 2e3,
            autoplay: !0,
            interval: e,
            pauseOnHover: !1,
            arrows: !1,
            pagination: !0,
            SizeH: 40,
            SizeW: 80,
            dotNum: !1
        });
        t.on("mounted", function() {
            slideMask.querySelector(".slidebox-pause").click()
        }),
        t.on("mounted", function() {
            1 < slideMask.querySelectorAll(".slidebox-item").length ? (slideMask.classList.add("true-option"),
            slideMask.addEventListener("swiperight", function(e) {
                t.go("<")
            }),
            slideMask.addEventListener("swipeleft", function(e) {
                t.go(">")
            })) : slideMask.classList.remove("true-option")
        }),
        t.on("moved", function(e) {
            Array.from(slideMask.querySelectorAll(".banner-home"), function(e) {
                e.classList.remove("this-view")
            })
        }),
        t.on("active", function() {
            slideMask.querySelector(".is-active").classList.add("this-view"),
            slideMask.querySelector(".slidebox-play").click()
        }),
        t.mount()
    },
    SlideHomeBusiness: function() {
        var n, t, o, r, i, a, s, l, c, u = Container.querySelector(".business-thumbs:not(.slide-already)"), d = Container.querySelector(".slide-business"), p = Container.querySelectorAll(".slide-box-business"), m = Container.querySelector(".arrows-business .next-bus"), f = Container.querySelector(".arrows-business .prev-bus");
        u && (u.classList.add("slide-already"),
        n = new Splide(u,{
            rewind: !0,
            speed: 1e3,
            perPage: 1,
            perMove: 1,
            pagination: !1,
            gap: "30px",
            arrows: !1,
            drag: !1,
            updateOnMove: !0,
            easing: "cubic-bezier(0.84, 0, 0.16, 1)",
            breakpoints: {
                1500: {
                    gap: "20px",
                    drag: !1,
                    pagination: !1
                },
                570: {
                    destroy: !0
                }
            }
        }),
        o = "45vw",
        r = t = "22vw",
        i = "15vw",
        a = "20px",
        s = "none",
        l = function(e) {
            e.style.opacity = "1",
            setTimeout(function() {
                e.classList.add("show-ani")
            }, 800),
            gsap.to(e, {
                duration: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                borderRadius: "0",
                opacity: 1,
                PointerEvent: "auto",
                ease: "power4.inOut"
            })
        }
        ,
        c = function(e) {
            p.forEach(function(e) {
                e.classList.remove("show-ani")
            }),
            gsap.to(e, {
                duration: 1,
                width: i,
                height: r,
                top: t,
                left: o,
                PointerEvent: s,
                borderRadius: a,
                ease: "power4.inOut",
                onComplete: function() {
                    e.style.opacity = "0"
                }
            })
        }
        ,
        n.on("mounted", function() {
            var e = d.querySelector(".slide-box-business:nth-child(1)");
            l(e)
        }),
        n.on("mounted moved", function() {
            var e = u.querySelector(".thumbs-box-business.is-active"),
                index = [].slice.call(e.parentNode.children).indexOf(e), // index từ 0
                t = Container.querySelector(".slider-progress-bar"),
                o = Container.querySelector(".slider-number"),
                topNumber = Container.querySelector(".slider-number-top"); // phần tử mới
        
            // Cập nhật thanh tiến trình
            t.style.width = (100 * (index + 1)) / p.length + "%";
        
            // Tính số trang hiển thị: 2 slide đầu là 01, còn lại tăng từ 02
            var displayedNumber = (index < 2) ? 1 : index;
        
            // Tổng số slide (hiển thị sau dấu /), trừ đi 1
            var totalSlides = p.length - 1;
        
            // Hiển thị đầy đủ trong slider-number: VD 01/06
            o.innerHTML = 
                (displayedNumber < 10 ? "0" + displayedNumber : displayedNumber) + 
                '<span class="slider-total">/' + 
                (totalSlides < 10 ? "0" + totalSlides : totalSlides) + 
                '</span>';
        
            // Hiển thị chỉ số hiện tại trong slider-number-top: VD 01
            if (topNumber) {
                topNumber.innerHTML = (displayedNumber < 10 ? "0" + displayedNumber : displayedNumber);
            }
        }),                
        d.addEventListener("swiperight", function(e) {
            f.click()
        }),
        d.addEventListener("swipeleft", function(e) {
            m.click()
        }),
        m.addEventListener("click", function() {
            var e = u.querySelector(".thumbs-box-business.is-active")
              , t = [].slice.call(e.parentNode.children).indexOf(e) + 2
              , o = d.querySelector(".slide-box-business:nth-child(" + t + ")");
            t > p.length ? (p.length,
            Array.from(Container.querySelectorAll(".thumbs-box-business"), function(e) {
                e.style.opacity = "1"
            }),
            t = d.querySelector(".slide-box-business:first-child"),
            p.forEach(function(e) {
                c(e)
            }),
            l(t),
            n.go(">")) : (e.nextElementSibling.style.opacity = "0",
            l(o),
            setTimeout(function() {
                n.go(">")
            }, 400))
        }),
        f.addEventListener("click", function() {
            var e, t = u.querySelector(".thumbs-box-business.is-active"), o = [].slice.call(t.parentNode.children).indexOf(t) + 1;
            1 == o ? (o = p.length,
            t = u.querySelector(".thumbs-box-business:last-child"),
            e = d.querySelector(".slide-box-business:nth-child(" + o + ")"),
            l(e)) : (e = d.querySelector(".slide-box-business:nth-child(" + o + ")"),
            c(e),
            l(e.previousElementSibling)),
            n.go("<"),
            setTimeout(function() {
                t.style.opacity = "1"
            }, 950)
        }),
        n.mount())
    },
    SlideOneObject: function() {
        var e = document.querySelectorAll(".slide-one:not(.slide-already)");
        e && e.forEach(function(e) {
            var t;
            e && (e.classList.add("slide-already"),
            (t = new Splide(e,{
                type: "fade",
                speed: 1500,
                perPage: 1,
                pagination: !1,
                gap: "0px",
                SizeW: 50,
                SizeH: 30,
                drag: !0,
                arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
                breakpoints: {
                    1100: {
                        pagination: !0,
                        arrows: !1
                    }
                }
            })).on("resize", function() {
                1 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t.on("mounted", function() {
                1 < e.querySelectorAll(".slidebox-item").length ? (e.classList.add("true-option"),
                e.addEventListener("swiperight", function(e) {
                    t.go("<")
                }),
                e.addEventListener("swipeleft", function(e) {
                    t.go(">")
                })) : e.classList.remove("true-option")
            }),
            t.mount())
        })
    },
    SlideTwoObject: function() {
        var e = document.querySelectorAll(".slide-two:not(.slide-already)");
        e && e.forEach(function(t) {
            var e;
            t && (t.classList.add("slide-already"),
            (e = new Splide(t,{
                rewind: !0,
                perPage: 2,
                pagination: !1,
                gap: "30px",
                SizeW: 50,
                SizeH: 30,
                arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
                speed: 600,
                breakpoints: {
                    1100: {
                        pagination: !0,
                        perPage: 2,
                        gap: "20px"
                    },
                    660: {
                        pagination: !0,
                        perPage: 1,
                        gap: "0"
                    }
                }
            })).on("mounted", function() {
                var e = t.querySelectorAll(".slidebox-item").length;
                570 < innerWidth ? 2 < e ? t.classList.add("true-option") : t.classList.remove("true-option") : 1 < e ? t.classList.add("true-option") : t.classList.remove("true-option")
            }),
            e.on("resize", function() {
                var e = t.querySelectorAll(".slidebox-item").length;
                570 < innerWidth ? 2 < e ? t.classList.add("true-option") : t.classList.remove("true-option") : 1 < e ? t.classList.add("true-option") : t.classList.remove("true-option")
            }),
            e.mount())
        })
    },
    SlideThreeObject: function() {
        var e = document.querySelectorAll(".slide-three:not(.slide-already)");
        e && e.forEach(function(e) {
            var t;
            e && (e.classList.add("slide-already"),
            (t = new Splide(e,{
                rewind: !0,
                perPage: 3,
                pagination: !1,
                gap: "30px",
                SizeW: 50,
                SizeH: 30,
                arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
                speed: 600,
                breakpoints: {
                    1100: {
                        destroy: !0
                    }
                }
            })).on("mounted", function() {
                3 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t.mount())
        })
    },
    slideNewsRelative: function() {
        var e = document.querySelectorAll(".slide-news-relative:not(.slide-already)");
        e && e.forEach(function(e) {
            var o, t, n;
            e && (e.classList.add("slide-already"),
            (o = new Splide(e,{
                perPage: 3,
                perMove: 1,
                pagination: !1,
                gap: "20px",
                SizeW: 50,
                SizeH: 30,
                arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
                speed: 600,
                breakpoints: {
                    1100: {
                        destroy: !0
                    }
                }
            })).on("mounted", function() {
                4 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            o.on("resize", function() {
                4 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t = Container.querySelectorAll(".slide-news-relative .item-news-home"),
            n = t.length - 1,
            t && t.forEach(function(e) {
                e.addEventListener("click", function(e) {
                    var t = [].slice.call(this.parentNode.children).indexOf(this);
                    setTimeout(function() {
                        1100 < innerWidth && (n - 1 <= t ? o.go(n - 2) : 0 == t ? o.go(t) : o.go(t - 1))
                    }, 1500)
                })
            }),
            o.mount())
        })
    },
    SlidePopupDetails: function() {
        document.querySelectorAll(".slide-popup-details").forEach(function(t) {
            var o, e;
            t && (o = t.querySelector(".slidebox-track"),
            (e = new Splide(t,{
                rewind: !0,
                perPage: 1,
                pagination: !0,
                gap: "0px",
                SizeW: 50,
                SizeH: 30,
                arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
                speed: 600,
                updateOnMove: !0
            })).on("mounted", function() {
                1 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option"),
                setTimeout(function() {
                    var e = t.querySelector(".slidebox-item.is-active .pic-cover").clientHeight;
                    o.style.height = e + "px"
                }, 100)
            }),
            e.on("move", function(e) {
                setTimeout(function() {
                    var e = t.querySelector(".slidebox-item.is-active .pic-cover").clientHeight;
                    o.style.height = e + "px"
                }, 50)
            }),
            e.on("resize", function() {
                1 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option")
            }),
            e.mount())
        })
    },
    SlideRelative: function() {
        var e = document.querySelectorAll(".slide-product-relative:not(.slide-already)");
        e && e.forEach(function(e) {
            var o, t, n;
            e && (e.classList.add("slide-already"),
            (o = new Splide(e,{
                rewind: !0,
                perPage: 4,
                perMove: 2,
                pagination: !1,
                gap: 40,
                SizeW: 50,
                SizeH: 30,
                arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
                speed: 700,
                breakpoints: {
                    1100: {
                        pagination: !0,
                        perPage: 3,
                        arrows: !1,
                        gap: 30
                    },
                    570: {
                        pagination: !0,
                        perPage: 2,
                        arrows: !1,
                        gap: 20
                    }
                }
            })).on("mounted", function() {
                4 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            o.on("resize", function() {
                4 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t = RelativeProduct.querySelectorAll(".product-item"),
            n = t.length - 1,
            t && t.forEach(function(e) {
                e.addEventListener("click", function(e) {
                    var t = [].slice.call(this.parentNode.children).indexOf(this);
                    setTimeout(function() {
                        1100 < innerWidth ? n - 2 <= t ? o.go(n - 3) : 0 == t ? o.go(t) : o.go(t - 1) : 570 < innerWidth < 1100 ? n - 1 <= t ? o.go(n - 2) : o.go(t - 1) : o.go(t)
                    }, 1500)
                })
            }),
            o.mount())
        })
    },
    Sliderprocess: function() {
        var e, t = Container.querySelector(".slide-process");
        t && ((e = new Splide(t,{
            pagination: !1,
            gap: "150px",
            SizeW: 50,
            SizeH: 30,
            arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
            speed: 600,
            focus: "center",
            perPage: 1,
            updateOnMove: !0
        })).on("mounted", function() {
            3 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option")
        }),
        e.on("resize", function() {
            3 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option")
        }),
        e.mount())
    },
    SliderLeader: function() {
        var e, t = document.querySelector(".slide-leader");
        t && ((e = new Splide(t,{
            perPage: 3,
            rewind: !0,
            pagination: !1,
            gap: "30px",
            SizeW: 50,
            SizeH: 30,
            arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
            speed: 600,
            breakpoints: {
                1100: {
                    pagination: !0,
                    gap: "30px",
                    perPage: 3,
                    arrow: !1
                },
                660: {
                    pagination: !0,
                    gap: "30px",
                    perPage: 2,
                    arrow: !1
                },
                540: {
                    pagination: !0,
                    gap: "30px",
                    perPage: 1,
                    arrow: !1
                }
            }
        })).on("mounted", function() {
            1 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option")
        }),
        e.on("resize", function() {
            1 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option")
        }),
        e.mount())
    },
    SliderProProject: function() {
        var e, t = Container.querySelector(".slide-center");
        t && ((e = new Splide(t,{
            perPage: 2,
            focus: "center",
            trimSpace: !1,
            start: 1,
            updateOnMove: !0,
            rewind: !0,
            pagination: !1,
            gap: "140px",
            SizeW: 50,
            SizeH: 30,
            arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z",
            speed: 600,
            breakpoints: {
                1100: {
                    perPage: 1,
                    gap: "5px",
                    pagination: !0
                }
            }
        })).on("mounted", function() {
            1 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option")
        }),
        e.on("resize", function() {
            1 < t.querySelectorAll(".slidebox-item").length ? t.classList.add("true-option") : t.classList.remove("true-option")
        }),
        e.mount())
    }
};
function popupLoad(e) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0),
    t.onreadystatechange = function() {
        var t, e, o, n;
        4 == this.readyState && 200 == this.status && (n = this.response,
        Body.insertAdjacentHTML("beforeend", n),
        SlidePicture.SlidePopupDetails(),
        t = document.querySelector(".details-content"),
        e = document.querySelector(".details-center"),
        n = t.querySelector(".close-popup"),
        gsap.fromTo(e, 1.2, {
            opacity: "0",
            transform: "translateY(200px)"
        }, {
            opacity: "1",
            delay: .5,
            transform: "none",
            ease: "power2"
        }),
        n.classList.add("goleft"),
        o = document.querySelector(".loadx"),
        gsap.to(o, .4, {
            opacity: "0",
            ease: "power2",
            delay: .5,
            onComplete: function() {
                e.clientHeight > window.innerheight && e.classList.add("no-after"),
                o.remove()
            }
        }),
        (n = document.querySelectorAll(".close-popup, .details-content > span")).forEach(function(e) {
            e.addEventListener("click", function() {
                return document.querySelector("#recruitment-page") && (addURL(document.querySelector(".main-menu li.current a"), document.querySelector(".main-menu li.current a").getAttribute("data-name")),
                changeAlternate(document.querySelector(".main-menu li.current a").getAttribute("href"), document.querySelector(".main-menu li.current").querySelector(".link-change-url"), 1)),
                TweenMax.to(t, .6, {
                    opacity: "0",
                    ease: "power2",
                    onComplete: function() {
                        t.remove()
                    }
                }),
                OverlayDark.classList.remove("show"),
                Body.classList.remove("no-scroll"),
                HTML.classList.remove("no-scroll"),
                Container.classList.remove("blur"),
                Header.classList.remove("blur"),
                !1
            })
        }))
    }
    ,
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send()
}
function Load360(e) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0),
    t.onload = function() {
        var e, t, o;
        200 <= this.status && this.status < 400 && (e = this.response,
        (t = document.querySelector(".bg-degree")).insertAdjacentHTML("beforeend", e),
        addClass(t, "show"),
        Details = 1,
        o = document.querySelector(".loadx"),
        gsap.to(o, {
            duration: .5,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function() {
                o.remove(),
                t.querySelector(".close-360").addEventListener("click", function() {
                    return removeClass(t, "show"),
                    removeClass(Body, "no-scroll"),
                    removeClass(Container, "blur"),
                    Header.classList.remove("off"),
                    Wheel.classList.add("show"),
                    Array.from(t.querySelectorAll("iframe"), function(e) {
                        e.remove()
                    }),
                    !1
                })
            }
        }))
    }
    ,
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send()
}
function LibrarySlideLoad(e) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0),
    t.onload = function() {
        var t, o, e;
        200 <= this.status && this.status < 400 && (t = this.response,
        o = ProjectLibrary.querySelector(".load-library-center"),
        gsap.to(o, {
            duration: .3,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function() {
                var e = document.querySelector(".load-library-center .slide-library")
                  , e = (e && e.remove(),
                gsap.to(o, {
                    duration: .5,
                    opacity: 1,
                    ease: Power2.easeOut
                }),
                o.insertAdjacentHTML("beforeend", t),
                SlidePicture.SlideTwoObject(),
                Details = 1,
                onScroll(),
                Option(),
                Array.from(o.querySelectorAll(".item-deg"), function(e) {
                    e.addEventListener("click", function(e) {
                        return e.preventDefault(),
                        addClass(Body, "no-scroll"),
                        addClass(Container, "blur"),
                        Wheel.classList.remove("show"),
                        Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
                        document.querySelector(".loadx").style.opacity = "1",
                        Load360(this.getAttribute("data-href")),
                        !1
                    })
                }),
                ProjectLibrary.querySelector(".slide-library"));
                Array.from(Container.querySelectorAll(".title-pic h3"), function(e) {
                    addClass(e, "display-mobile")
                }),
                Array.from(Container.querySelectorAll(".item-album"), function(e) {
                    e.addEventListener("click", function() {
                        find(this, "a") && find(this, "a").click(),
                        find(this, "button") && find(this, "button").click()
                    })
                }),
                e && !e.classList.contains("on-show") && e.classList.add("on-show")
            }
        }),
        e = document.querySelector(".loadx"),
        gsap.to(e, {
            duration: .5,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function() {
                e.remove()
            }
        }),
        Main.classList.contains("scrolling")) && scrollTranslate()
    }
    ,
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send()
}
function LoadNewsList(e, t) {
    var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    o.open("GET", e, !0),
    o.onreadystatechange = function() {
        var e;
        4 == this.readyState && 200 == this.status && (e = this.response,
        NewsListLoad.insertAdjacentHTML("beforeend", e),
        gsap.to(NewsListLoad, {
            duration: .4,
            opacity: 1,
            filter: "blur(0)",
            ease: "none",
            onComplete: function() {
                Array.from(Container.querySelectorAll(".item-album"), function(e) {
                    e.addEventListener("click", function() {
                        find(this, "a") && find(this, "a").click(),
                        find(this, "button") && find(this, "button").click()
                    })
                }),
                onScroll(),
                LinkPage(),
                Option()
            }
        }),
        TitleNews.innerHTML = t,
        gsap.to(TitleNews, {
            duration: 1,
            opacity: 1,
            ease: "none"
        }),
        gsap.to(BgNews, {
            duration: 2,
            opacity: 1,
            ease: "none"
        }))
    }
    ,
    o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    o.send()
}
function NewsLoad(r) {
    var e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    e.open("GET", r, !0),
    e.onload = function() {
        var e, t, o, n;
        200 <= this.status && this.status < 400 && (o = this.response,
        e.insertAdjacentHTML("beforeend", o),
        changeAlternate(r, document.querySelectorAll(".alternate-hl-news")),
        o = n.querySelectorAll(".load-text img"),
        (n = n.querySelector(".load-text")) && !n.classList.contains("on-show") && n.classList.add("on-show"),
        Array.from(o, function(e) {
            e.classList.add("zoom-pic")
        }),
        gsap.to(e, {
            duration: .4,
            opacity: 1,
            delay: .3,
            filter: "none",
            ease: "none",
            onComplete: function() {
                Details = 1,
                PrintShare(),
                onScroll(),
                Option(),
                SlidePicture.SlidePopupDetails()
            }
        }),
        t.forEach(function(e) {
            e.addEventListener("click", function(e) {
                e.preventDefault();
                e = this.getAttribute("href");
                return window.open(e, "_blank"),
                !1
            })
        }))
    }
    ,
    e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    e.send()
}
function AlbumLoad(e, c) {
    var u = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    u.open("GET", e, !0),
    u.onreadystatechange = function() {
        var e, t, o, n, r, i, a, s, l;
        4 == u.readyState && 200 == u.status && (AllAlbum.innerHTML = u.responseText,
        e = AllAlbum.querySelector(".album-load"),
        t = AllAlbum.querySelector(".close-album"),
        Array.from(AllAlbum.querySelectorAll(".pic-name > h3"), function(e) {
            Splitting({
                target: e,
                by: "chars"
            })
        }),
        Array.from(AllAlbum.querySelectorAll(".pinch-zoom"), function(e) {
            new PinchZoom.default(e,{
                draggableUnzoomed: !1
            })
        }),
        n = e.querySelector(".album-center"),
        r = e.querySelector(".thumbs"),
        i = e.querySelectorAll(".slidebox-item").length,
        s = n.querySelectorAll(".slidebox-item").length,
        1 < i && (r.classList.add("display-block"),
        n.classList.add("true-option")),
        (i = new Splide(n,{
            gap: 0,
            perPage: 1,
            speed: 600,
            start: c,
            pagination: !1,
            SizeW: 50,
            SizeH: 30,
            arrowPath: "M47.5,16.2 2.5,16.2 2.5,13.8 21.7,13.8 47.5,13.8z"
        })).on("moved", function() {
            Array.from(document.querySelectorAll(".slidebox-item, .pic-name h3 .char"), function(e) {
                e.classList.remove("this-view", "current", "move")
            })
        }),
        i.on("active", function() {
            n.querySelector(".is-active").classList.add("this-view"),
            clearTimeout(o),
            AllAlbum.querySelector(".this-view").querySelectorAll(".pic-name h3 .char").forEach(function(e, t) {
                o = setTimeout(function() {
                    e.classList.add("move")
                }, 50 * (t + 1))
            })
        }),
        6 < s ? a = "center" : (a = !1,
        r.classList.add("center")),
        s = new Splide(r,{
            rewind: !0,
            isNavigation: !0,
            gap: 6,
            pagination: !1,
            arrows: !1,
            start: c,
            perMove: 1,
            perPage: 6,
            focus: a
        }).mount(),
        i.sync(s).mount(),
        l = document.querySelector(".loadx"),
        gsap.to(e, {
            duration: .8,
            opacity: 1,
            ease: "none",
            onComplete: function() {
                t.classList.add("goleft"),
                n.classList.add("fadein"),
                r.classList.add("fadeinup"),
                l.classList.remove("display-block"),
                gsap.to(l, {
                    duration: .4,
                    opacity: 0,
                    ease: "none",
                    onComplete: function() {
                        l.remove()
                    }
                })
            }
        }),
        t.addEventListener("click", function() {
            return OverlayDark.classList.remove("show"),
            gsap.to(e, {
                duration: .5,
                opacity: 0,
                ease: "none",
                onComplete: function() {
                    AllAlbum.classList.remove("show"),
                    Body.classList.remove("no-scroll"),
                    HTML.classList.remove("no-scroll"),
                    Container.classList.remove("blur"),
                    Header.classList.remove("blur"),
                    OverlayDark.innerHTML = "",
                    AllAlbum.innerHTML = ""
                }
            }),
            !1
        }))
    }
    ,
    u.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    u.send()
}
function onChange(e) {
    Container.querySelector(".file-name").innerHTML = e.files[0] ? e.files[0].name : ""
}
function highlight(n) {
    Array.from(document.querySelectorAll(".color-blue"), function(e) {
        var t = e.innerHTML
          , o = t.indexOf(n);
        0 <= o && (t = t.substring(0, o) + "<mark>" + t.substring(o, o + n.length) + "</mark>" + t.substring(o + n.length),
        e.innerHTML = t)
    })
}
function ContentLoad() {
    var n, e, t, o, r, i;
    LinkPage(),
    FocusText(),
    "news-details-page" != IDPage && "project-details-page" != IDPage && "project-list-page" != IDPage && "sustainble-details-page" != IDPage || (Navigation.querySelector(".nav-item.current").classList.add("active-color"),
    Navigation.querySelector(".nav-item.current").classList.remove("current")),
    setTimeout(function() {
        Wheel.classList.add("show")
    }, 1e3),
    "home-page" !== IDPage && (onScroll(),
    Logo.style.cursor = "pointer",
    Logo.addEventListener("click", function() {
        Navigation.querySelector("li:first-child a").click()
    }),
    Array.from(document.querySelectorAll(".title-page"), function(e) {
        e.classList.add("show")
    }),
    Array.from(document.querySelectorAll(".title-page .char"), function(e, t) {
        return Move = setTimeout(function() {
            e.classList.add("move")
        }, 70 * (t + 1)),
        !1
    })),
    "home-page" == IDPage && (LinkLoadPopup(),
    subNavFnSpecial(),
    Array.from(document.querySelectorAll(".box-home-estate"), function(e) {
        e.addEventListener("click", function() {
            this.querySelector("a").click()
        })
    }),
    document.querySelector(".home-popup")) && setTimeout(function() {
        document.querySelector(".home-popup").click()
    }, 3e3),
    "about-page" == IDPage && (LinkLoadPopup(),
    SubOverSize(),
    subNavFn(),
    Option(),
    SlidePicture.Sliderprocess(),
    SlidePicture.SlideTwoObject(),
    SlidePicture.SliderLeader()),
    "partner-page" == IDPage && LinkLoadPopup(),
    "business-page" == IDPage && (LinkLoadPopup(),
    SubOverSize(),
    subNavFn(),
    Option(),
    SlidePicture.SlideOneObject(),
    SlidePicture.SlideTwoObject(),
    (e = Container.querySelectorAll(".business-group"))[e.length - 1].classList.add("last-business"),
    Array.from(document.querySelectorAll(".more-button"), function(e) {
        if (e) {
            var n = e.parentNode.parentNode.querySelector(".wrap-text-us")
              , r = 0;
            if (n) {
                for (var i = n.querySelectorAll("p"), t = 0; t < i.length; t++)
                    i[t].style.animationDelay = 100 * t + "ms";
                if (i.length <= 10)
                    addClass(e.parentNode, "display-none");
                else {
                    for (t = 0; t < 10; t++)
                        r = i[t].clientHeight + r;
                    n.style.height = r + "px"
                }
                e.addEventListener("click", function(e) {
                    if (e.preventDefault(),
                    this.classList.contains("active"))
                        n.style.height = r + "px",
                        this.classList.remove("active");
                    else {
                        for (var t = 0, o = 0; o < i.length; o++)
                            t = i[o].clientHeight + t;
                        n.style.height = t + "px",
                        this.classList.add("active")
                    }
                })
            }
        }
    }),
    setTimeout(function() {
        LocationHash()
    }, 2e3)),
    "project-page" == IDPage && Array.from(Container.querySelectorAll(".box-project-thumbs"), function(e) {
        e.addEventListener("click", function() {
            this.querySelector(".link-load").click()
        })
    }),
    "project-list-page" == IDPage && (SubOverSize(),
    subNavFn(),
    CustomeSelect(),
    Container.querySelector(".reset-button").addEventListener("click", function(e) {
        e.preventDefault();
        e = this.dataset.href;
        return window.location = e,
        !1
    }),
    Container.querySelector(".search-project").addEventListener("click", function(e) {
        e.preventDefault();
        e = this.dataset.href,
        e = (e += "?sta=" + Container.querySelector(".tinhtrang").value) + "&typ=" + Container.querySelector(".typeproject").value;
        return window.location = e,
        !1
    })),
    "project-details-page" == IDPage && (SubOverSize(),
    subNavFn(),
    Option(),
    SlidePicture.SlideOneObject(),
    SlidePicture.SlideTwoObject(),
    SlidePicture.SliderProProject(),
    Array.from(Container.querySelectorAll(".box-pro-intro, .box-center-slide"), function(e) {
        e.addEventListener("click", function() {
            find(this, "a") && this.querySelector("a").click(),
            find(this, "button") && this.querySelector("button").click()
        })
    }),
    Array.from(document.querySelectorAll(".item-deg"), function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault(),
            addClass(Body, "no-scroll"),
            addClass(Container, "blur"),
            Wheel.classList.remove("show"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>');
            document.querySelector(".loadx").style.opacity = "1";
            e = this.getAttribute("data-href");
            return Header.classList.add("off"),
            Load360(e),
            !1
        })
    }),
    ProjectLibrary && Array.from(Container.querySelectorAll(".sub-nav-lib"), function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault(),
            Array.from(Container.querySelectorAll(".sub-nav-lib"), function(e) {
                e.classList.remove("current")
            }),
            this.classList.add("current"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>');
            document.querySelector(".loadx").style.opacity = "1";
            var t, e = this.getAttribute("data-href");
            return 1 == Details && (t = ProjectLibrary.offsetTop - 40,
            Html.scrollTo({
                top: t,
                left: 0,
                behavior: "smooth"
            })),
            LibrarySlideLoad(e),
            !1
        })
    }),
    setTimeout(function() {
        Array.from(Container.querySelectorAll(".sub-pro li:first-child .sub-nav-pro, .sub-lib li:first-child .sub-nav-lib"), function(e) {
            e && e.click()
        })
    }, 1e3)),
    "service-page" == IDPage && Option(),
    "sustainble-page" == IDPage && SlidePicture.SlideThreeObject(),
    "news-page" == IDPage && (SubOverSize(),
    Array.from(document.querySelectorAll(".sub-ajax a"), function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var t, o = this.getAttribute("href"), e = this.getAttribute("data-name"), n = this.innerHTML;
            return Array.from(document.querySelectorAll(".sub-ajax li a"), function(e) {
                e && e.classList.remove("current")
            }),
            Array.from(document.querySelectorAll('.sub-ajax li a[data-name="' + e + '"]'), function(e) {
                e.classList.add("current")
            }),
            1 == isFirst && (addURL(this, e),
            changeAlternate(this.getAttribute("href"), this.parentElement.querySelector(".link-change-url"), 1)),
            isFirst = 1,
            NewsListLoad && (gsap.to(NewsListLoad, {
                duration: .4,
                opacity: 0,
                filter: "blur(20px)",
                ease: "none",
                onComplete: function() {
                    LoadNewsList(o, n);
                    var e = Container.querySelector(".news-list");
                    e && e.remove()
                }
            }),
            gsap.to([BgNews, TitleNews], {
                duration: .4,
                opacity: 0,
                ease: "none"
            })),
            1 == Details && (e = window.pageYOffset,
            t = Container.querySelector(".section-outernav"),
            (t = Mobile.matches ? t.offsetTop - 60 : t.offsetTop - 40) < e) && Html.scrollTo({
                top: t,
                left: 0,
                behavior: "auto"
            }),
            Details = 1,
            detectBut(),
            !1
        })
    }),
    (Container.querySelector(".sub-ajax li a.current") ? Container.querySelector(".sub-ajax li a.current") : Container.querySelector(".sub-ajax li:first-child a")).click()),
    "news-details-page" != IDPage && "sustainble-details-page" != IDPage || (OuterNav && subNavFn(),
    SlidePicture.slideNewsRelative(),
    (n = Container.querySelectorAll(".item-news-home")).forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            n.forEach(function(e) {
                e.classList.remove("current")
            }),
            this.classList.add("current"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>');
            document.querySelector(".loadx").style.opacity = "1";
            var t = this.querySelector("a").getAttribute("data-details")
              , o = this.querySelector("a").getAttribute("href");
            return addURL(this.querySelector("a"), t),
            1 == Details && (t = Mobile.matches ? e.offsetTop - 120 : e.offsetTop,
            Html.scrollTo({
                top: t,
                left: 0,
                behavior: "smooth"
            })),
            gsap.to(e, {
                duration: .5,
                opacity: 0,
                filter: "blur(20px)",
                ease: "none",
                onComplete: function() {
                    NewsLoad(o)
                }
            }),
            !1
        })
    }),
    (null != document.querySelector(".news-relative .item-news-home.current") ? document.querySelector(".news-relative .item-news-home.current") : Container.querySelector(".news-relative .item-news-home:first-child")).click()),
    "recruitment-page" == IDPage && (LinkLoadPopup(),
    CustomeSelect(),
    e = Container.querySelectorAll(".table-recruitment tr"),
    t = Container.querySelector(".file-mark"),
    e.forEach(function(e) {
        e.addEventListener("click", function() {
            this.querySelector("a").click()
        })
    }),
    t) && t.addEventListener("click", function() {
        this.parentNode.querySelector('input[type="file"]').click()
    }),
    IDPage,
    "search-page" == IDPage && (r = document.querySelectorAll(".item-search").length,
    o = document.querySelector(".search-view-more")) && (r = 10,
    (i = document.querySelectorAll(".item-search")).forEach(function(e) {
        e.addEventListener("click", function() {
            this.querySelector("a").click()
        })
    }),
    i.length > r && i.forEach(function(e, t) {
        e.classList.toggle("hide", 10 <= t)
    }),
    o.querySelector(".button-viewmore").addEventListener("click", function(e) {
        for (var t = r; t < r + 6; t++)
            i[t] && (i[t].classList.remove("hide"),
            setTimeout(function() {
                Mobile.matches || thatScroll.update()
            }, 300));
        (r += 6) >= i.length && (event.target.style.display = "none",
        o.remove())
    })),
    Array.from(document.querySelectorAll(".text-achievement p, .text-project-home > p, .title-pic h3"), function(e) {
        e.classList.add("display-mobile")
    }),
    setTimeout(function() {
        u()
    }, 7e3)
}
function LinkPage() {
    var e = document.querySelectorAll(".link-blank");
    document.querySelectorAll(".link-load, .link-home").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.href;
            return this.classList.contains("link-home") ? (Body.classList.add("link-to-home"),
            gsap.to(Container, {
                duration: 2,
                opacity: 0,
                ease: "none",
                onComplete: function() {
                    window.location = t
                }
            })) : (Header.classList.remove("hide"),
            gsap.to(Container, {
                duration: .6,
                opacity: 0,
                ease: "none",
                onComplete: function() {
                    window.location = t
                }
            })),
            hasClass(NavClick, "show") && NavClick.click(),
            !1
        })
    }),
    e.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            e = this.href;
            return window.open(e, "_blank"),
            !1
        })
    })
}
function VideoLoad(e, d) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0),
    t.onload = function() {
        var s, e, t, l, c, u;
        200 <= this.status && this.status < 400 && (e = this.response,
        (s = document.querySelector(".allvideo")).insertAdjacentHTML("beforeend", e),
        document.querySelector("#youtube_js") || ((e = document.createElement("script")).id = "youtube_js",
        e.src = "https://www.youtube.com/player_api",
        (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t)),
        l = document.querySelector("#view-video"),
        (c = document.querySelector(".video-list")).querySelector(".video-wrap").querySelector("iframe"),
        u = c.querySelector(".close-video"),
        setTimeout(function() {
            {
                function e() {
                    o.play()
                }
                function t() {
                    o.pause()
                }
                var o;
                l && (o = document.getElementById("view-video"))
            }
            u.classList.add("goleft"),
            u.addEventListener("click", function() {
                l && t(),
                OverlayDark.classList.remove("show"),
                gsap.to(s, {
                    opacity: "0",
                    duration: .5,
                    display: "none",
                    ease: Power2.easeOut,
                    onComplete: function() {
                        u.classList.remove("goleft"),
                        s.style.display = "none",
                        c.remove(),
                        Html.classList.remove("no-scroll"),
                        Body.classList.remove("no-scroll"),
                        Container.classList.remove("blur"),
                        Header.classList.remove("blur")
                    }
                })
            });
            var n, r, i = document.querySelector(".loadx");
            function a(e) {
                Mobile.matches && (e.target.mute(),
                e.target.playVideo()),
                1 < r.getPlayerState() && (e = r.getVideoData().title,
                n.querySelector("iframe").setAttribute("title", e))
            }
            gsap.to(i, {
                duration: .4,
                opacity: 0,
                delay: .4,
                ease: Power0.easeOut,
                onComplete: function() {
                    i.remove()
                }
            }),
            d ? ((n = c.querySelector(".video-wrap")).insertAdjacentHTML("beforeend", d),
            r = new YT.Player("VYT",{
                events: {
                    onReady: a
                }
            })) : l && e()
        }, 300))
    }
    ,
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send()
}
function LocationHash() {
    var e = (e = window.location.hash).slice(1)
      , t = Container.querySelector(".news-relative .item-news-home a[data-details='" + e + "']")
      , o = Container.querySelector(".slide-pagi a[data-number='" + e + "']")
      , n = Container.querySelector(".sub-nav li button[data-name='" + e + "']")
      , e = Container.querySelector(".sub-ajax li a[data-name='" + e + "']");
    Array.from([t, o, e, n], function(e) {
        e && e.click()
    })
}
window.addEventListener("keydown", function(e) {
    var t = e.keyCode || e.which
      , o = document.querySelector(".content-details")
      , n = document.querySelector(".nav-click");
    if (u(),
    38 == t && (e.preventDefault(),
    o ? DetailLoad.scrollTop -= 40 : document.documentElement.scrollTop -= 40),
    40 == t && (e.preventDefault(),
    o ? DetailLoad.scrollTop += 40 : document.documentElement.scrollTop += 40),
    n.classList.contains("show") && 27 == t && (e.preventDefault(),
    n.click()),
    123 === t || 67 === t || 85 === t)
        return !1
}),
window.addEventListener("scroll", function(e) {
    var t, n = window.pageYOffset;
    100 < n ? Header.classList.add("hide") : Header.classList.remove("hide"),
    n > Container.clientHeight - Footer.clientHeight - this.innerHeight ? (goTop.classList.add("show"),
    Wheel.classList.remove("show")) : (goTop.classList.remove("show"),
    Wheel.classList.add("show")),
    slideMask && (n >= innerHeight / 2 ? slideMask.querySelector(".slidebox-pause") : slideMask.querySelector(".slidebox-play")).click(),
    OuterNav && !hasClass(OuterNav, "release") && (t = Header.querySelector(".outer-nav.second"),
    ((Mobile.matches ? n >= OuterNavSec.offsetTop : n >= OuterNavSec.offsetTop + 50) ? (addClass(t, "fixed"),
    addClass) : (removeClass(t, "fixed"),
    removeClass))(OuterNav, "fixed")),
    Container.querySelector(".set-post") && Array.from(document.querySelectorAll(".set-post"), function(e) {
        var t = e.offsetTop - 300
          , o = e.clientHeight
          , o = t + (o = o < window.innerHeight ? window.innerHeight : o);
        OuterSpecial ? t <= n && n <= o && (e.classList.add("active"),
        document.querySelectorAll(".sub-special li button").forEach(function(e) {
            e.classList.remove("current")
        }),
        document.querySelectorAll('.sub-special li button[data-name="' + e.getAttribute("data-post") + '"]').forEach(function(e) {
            e.classList.add("current")
        }),
        Mobile.matches) && detectButSpecial() : t <= n && n <= o && (e.classList.add("active"),
        document.querySelectorAll(".sub-nav li button").forEach(function(e) {
            e.classList.remove("current")
        }),
        document.querySelectorAll('.sub-nav li button[data-name="' + e.getAttribute("data-post") + '"]').forEach(function(e) {
            e.classList.add("current")
        }),
        Mobile.matches) && detectBut()
    }),
    windscroll = n
}, {
    passive: !0
}),
window.addEventListener("orientationchange", function(e) {
    ResizeWindows()
}),
window.addEventListener("resize", debounce(function() {
    ResizeWindows(),
    OuterNav && (SubOverSize(),
    detectBut()),
    Mobile.matches
}, 250)),
Wheel.addEventListener("click", function(e) {
    var t;
    e.preventDefault(),
    u(),
    "home-page" != IDPage || Mobile.matches ? t = window.pageYOffset + innerHeight : "home-banner" == (e = document.querySelector(".sub-special button.current")).getAttribute("data-name") ? t = NextOfBanner.clientHeight + NextOfBanner.offsetTop - innerHeight : e.parentNode.nextElementSibling && e.parentNode.nextElementSibling.querySelector("button").click(),
    gsap.to("html", {
        duration: 1,
        scrollTop: t,
        ease: "none"
    })
}),
goTop.addEventListener("click", function(e) {
    e.preventDefault(),
    gsap.to("html", {
        duration: 1,
        scrollTop: 0,
        ease: "none"
    }),
    u()
}),
EnterSite.addEventListener("click", function() {
    gsap.to(".wrap-loadicon", {
        duration: 2,
        transform: "scale(1.5)",
        delay: 0,
        opacity: 0,
        filter: "blur(30px)",
        ease: "power2",
        onComplete: function() {
            LoadIcon.remove(),
            Mask.remove()
        }
    }),
    Logo.classList.add("move"),
    SlidePicture.slideBanner(),
    EnterSite.remove(),
    Mask.classList.add("hidden"),
    Container.style.display = "block",
    setTimeout(function() {
        Banner.classList.add("show")
    }, 500),
    setTimeout(function() {
        Body.classList.remove("no-scroll"),
        SlidePicture.SlideHomeBusiness(),
        onScroll(),
        Option()
    }, 1e3)
}),
document.addEventListener("DOMContentLoaded", function() {
    if (textBreak(),
    MouseCursor(),
    "home-page" == IDPage)
        Container.style.display = "none",
        Container.style.opacity = "1",
        LoadIcon.style.display = "block",
        Body.classList.add("no-scroll"),
        setTimeout(function() {
            LoadIcon.classList.add("show"),
            LoadIcon.classList.add("lighting"),
            TextSlogan.classList.add("show"),
            EnterSite.classList.add("show"),
            Array.from(EnterSite.querySelectorAll(".char"), function(e, t) {
                return Move = setTimeout(function() {
                    e.classList.add("move")
                }, 30 * (t + 1)),
                !1
            })
        }, 500),
        setTimeout(function() {
            EnterSite.click(),
            Done()
        }, 3e3);
    else {
        var t = innerWidth
          , o = innerHeight
          , n = o < t ? 13e-5 * t : 15e-5 * o;
        for (let e = Math.round(o < t ? t * n : o * n); e--; )
            TileReveal.insertAdjacentHTML("beforeend", '<div class="tile-reveal-square"></div>');
        Container.style.opacity = "1";
        var e, t = Container.querySelectorAll(".tile-reveal-square");
        gsap.to(t, {
            duration: 1,
            opacity: 0,
            scale: .75,
            delay: .25,
            ease: "back.out(1.5)",
            stagger: {
                amount: 1,
                from: "start",
                axis: null,
                grid: "auto"
            }
        }, "scene+=0.12"),
        Banner.classList.add("show"),
        setTimeout(function() {
            Done()
        }, 400),
        "recruitment-page" == IDPage && (e = document.querySelector(".link-header"),
        gsap.to(e, .6, {
            opacity: "0",
            ease: "power2",
            onComplete: function() {
                e.remove()
            }
        }))
    }
    OuterNav && (hasClass(OuterNav, "release") || ((o = OuterNav.cloneNode(!0)).querySelector(".sub-nav").style.opacity = 1,
    addClass(o, "second"),
    removeClass(o, "ani-item"),
    Header.appendChild(o)),
    Array.from(document.querySelectorAll(".outer-nav .wheel-next"), function(e) {
        e && e.addEventListener("click", function(e) {
            e.preventDefault(),
            this.parentNode.querySelector(".sub-nav").scrollLeft += 200
        })
    }),
    Array.from(document.querySelectorAll(".outer-nav .wheel-prev"), function(e) {
        e && e.addEventListener("click", function() {
            this.parentNode.querySelector(".sub-nav").scrollLeft -= 200
        })
    }))
}),
window.onbeforeunload = function() {
    window.scrollTo(0, 0)
}
,
window.onpopstate = function(e) {
    e.preventDefault();
    var o, e = document.querySelector(".httpserver").innerHTML;
    null !== history.state ? (o = history.state.path,
    history.state.dataName,
    history.state.title,
    o.replace(e, "")) : o = document.URL,
    (document.querySelector("#about-page") || document.querySelector("#news-page") || document.querySelector("#business-page") || document.querySelector("#develop-page") || document.querySelector("#internal-details-page")) && (null != document.querySelector(".close-pics") && document.querySelector(".close-pics").click(),
    null != document.querySelector(".close-popup") && document.querySelector(".close-popup").click(),
    null != document.querySelector(".close-video") && document.querySelector(".close-video").click(),
    null != document.querySelector(".close-album") && document.querySelector(".close-album").click(),
    document.querySelectorAll(".navigation a").forEach(function(e) {
        e.href == o && window.history.back()
    }),
    document.querySelectorAll(".outer-nav:not(.second) .sub-nav li button").forEach(function(e) {
        var t;
        e.dataset.href == o && (t = 0,
        document.querySelector(".all-section-tab") ? t = document.querySelector(".all-section-tab").offsetTop : document.querySelector("#business-page") ? t = document.querySelector('.business-group[data-post="' + e.dataset.name + '"]').offsetTop : document.querySelector("#about-page") && (t = document.querySelector('section[data-post="' + e.dataset.name + '"]').offsetTop),
        gsap.to("html", {
            duration: .6,
            scrollTop: t,
            onComplete: function() {
                e.click()
            }
        }))
    }),
    document.querySelectorAll(".outer-nav:not(.second) .sub-ajax li a").forEach(function(e) {
        var t;
        e.href == o && (t = document.querySelector(".load-news-list").offsetTop,
        gsap.to("html", {
            duration: .6,
            scrollTop: t,
            onComplete: function() {
                e.click()
            }
        }))
    })),
    (document.querySelector("#recruitment-page") || document.querySelector("#service-page")) && (null != document.querySelector(".close-popup") ? document.querySelector(".close-popup").click() : (document.querySelectorAll(".navigation a").forEach(function(e) {
        e.href == o && window.history.back()
    }),
    document.querySelectorAll(".outer-nav:not(.second) .sub-nav li button").forEach(function(e) {
        e.dataset.href == o && e.click()
    }),
    document.querySelectorAll(".link-member").forEach(function(e) {
        e.href == o && e.click()
    }),
    document.querySelectorAll(".link-popup").forEach(function(e) {
        e.href == o && e.click()
    }))),
    (document.querySelector("#news-details-page") || document.querySelector("#sustainble-details-page")) && (null != document.querySelector(".detail-container") ? document.querySelector(".go-back").click() : (document.querySelectorAll(".navigation a").forEach(function(e) {
        e.href == o && (window.location = o)
    }),
    document.querySelectorAll(".item-news-home a").forEach(function(e) {
        var t;
        e.href == o && (e.parentElement.classList.add("current"),
        gsap.to("html", {
            duration: .6,
            scrollTop: t,
            onComplete: function() {
                e.click()
            }
        }))
    }))),
    document.querySelector("#project-page") && (document.querySelectorAll(".navigation a").forEach(function(e) {
        e.href == o && window.history.back()
    }),
    document.querySelectorAll(".outer-nav.second .sub-filter button").forEach(function(e) {
        var t;
        e.dataset.href == o && (t = document.querySelector(".project-section").offsetTop,
        gsap.to("html", {
            duration: .6,
            scrollTop: t,
            onComplete: function() {
                e.click()
            }
        }))
    }))
}
;
function isNumber(e) {
    var t = e.which || e.keyCode;
    return !(46 != t && 31 < t && (t < 48 || 57 < t)) || (e.returnValue = !1)
}
function serialize(e) {
    if (e && "FORM" === e.nodeName) {
        for (var t, n = [], r = e.elements.length - 1; 0 <= r; r -= 1)
            if ("" !== e.elements[r].name)
                switch (e.elements[r].nodeName) {
                case "INPUT":
                    switch (e.elements[r].type) {
                    case "text":
                    case "tel":
                    case "email":
                    case "hidden":
                    case "password":
                    case "button":
                    case "reset":
                    case "submit":
                        n.push(e.elements[r].name + "=" + encodeURIComponent(e.elements[r].value));
                        break;
                    case "checkbox":
                    case "radio":
                        e.elements[r].checked && n.push(e.elements[r].name + "=" + encodeURIComponent(e.elements[r].value))
                    }
                    break;
                case "file":
                    break;
                case "TEXTAREA":
                    n.push(e.elements[r].name + "=" + encodeURIComponent(e.elements[r].value));
                    break;
                case "SELECT":
                    switch (e.elements[r].type) {
                    case "select-one":
                        n.push(e.elements[r].name + "=" + encodeURIComponent(e.elements[r].value));
                        break;
                    case "select-multiple":
                        for (t = e.elements[r].options.length - 1; 0 <= t; t -= 1)
                            e.elements[r].options[t].selected && n.push(e.elements[r].name + "=" + encodeURIComponent(e.elements[r].options[t].value))
                    }
                    break;
                case "BUTTON":
                    switch (e.elements[r].type) {
                    case "reset":
                    case "submit":
                    case "button":
                        n.push(e.elements[r].name + "=" + encodeURIComponent(e.elements[r].value))
                    }
                }
        return n.join("&")
    }
}
function hideerror() {
    document.querySelectorAll(".formError").forEach(function(e) {
        e.remove()
    })
}
function hidemsg() {
    null != document.querySelector(".contact-success") && document.querySelector(".contact-success").remove(),
    null != document.querySelector(".register-success") && document.querySelector(".register-success").remove()
}
function checkEmail(e) {
    e = document.getElementById(e);
    return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e.value)
}
function checkNull(e, t, n, r, o) {
    var m = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    return "" != m && m != n || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((m = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (n = document.createElement("div")).className = "formErrorContent",
    n.id = "error_" + e,
    n.innerHTML = t,
    m.appendChild(n),
    document.getElementById(e).after(m)),
    !1)
}
function checkPhone(e, t, n, r, o) {
    var m = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    return !("" == m || m == n || m.length < 10 || 11 < m.length) || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((n = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (m = document.createElement("div")).className = "formErrorContent",
    m.id = "error_" + e,
    m.innerHTML = t,
    n.appendChild(m),
    document.getElementById(e).after(n)),
    !1)
}
function checkMail(e, t, n, r, o) {
    var m, c;
    return !!checkEmail(e) || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((m = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (c = document.createElement("div")).className = "formErrorContent",
    c.id = "error_" + e,
    c.innerHTML = t,
    m.appendChild(c),
    document.getElementById(e).after(m)),
    !1)
}
function checkCaptcha(e, t, n, r, o) {
    var m, c;
    return (null != document.getElementById(e) ? document.getElementById(e).value.trim() : "") == (null != document.getElementById(e + "_bk") ? document.getElementById(e + "_bk").value.trim() : "") || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((m = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (c = document.createElement("div")).className = "formErrorContent",
    c.id = "error_" + e,
    c.innerHTML = t,
    m.appendChild(c),
    document.getElementById(e).after(m)),
    !1)
}
function checkNullTwo(e, t, n, r, o, m, c) {
    var d = null != document.getElementById(e) ? document.getElementById(e).value.trim() : ""
      , t = null != document.getElementById(t) ? document.getElementById(t).value.trim() : "";
    if ("" == d || d == r || "" == t || t == o)
        return null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = n : ((d = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
        (r = document.createElement("div")).className = "formErrorContent",
        r.id = "error_" + e,
        r.innerHTML = n,
        d.appendChild(r),
        document.getElementById(e).after(d)),
        !1
}
function checkSelect(e, t, n, r, o) {
    var m = null != document.getElementById(e) ? document.getElementById(e).value : "";
    return "" != m && m != n && 0 != m || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((n = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (m = document.createElement("div")).className = "formErrorContent",
    m.id = "error_" + e,
    m.innerHTML = t,
    n.appendChild(m),
    document.getElementById(e).after(n)),
    !1)
}
function checkComment(e, t, n, r, o, m) {
    var c = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    return 1 != (null != document.getElementById(t) && document.getElementById(t).checked) || "" != c && c != r || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = n : ((t = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (c = document.createElement("div")).className = "formErrorContent",
    c.id = "error_" + e,
    c.innerHTML = n,
    t.appendChild(c),
    document.getElementById(e).after(t)),
    !1)
}
function checkNhucau(e, t, n, r, o, m) {
    var c = null != document.getElementById(e) && document.getElementById(e).checked
      , t = null != document.getElementById(t) && document.getElementById(t).checked;
    if (0 == t && 0 == c)
        return null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = n : ((t = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
        (c = document.createElement("div")).className = "formErrorContent",
        c.id = "error_" + e,
        c.innerHTML = n,
        t.appendChild(c),
        document.getElementById(e).after(t)),
        !1;
    return !0
}
function checkCheckbox(e, t, n, r, o) {
    var m, c, d = !1;
    return document.querySelectorAll("." + e).forEach(function(e) {
        1 == e.checked && (d = !0)
    }),
    0 != d || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((m = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (c = document.createElement("div")).className = "formErrorContent",
    c.id = "error_" + e,
    c.innerHTML = t,
    m.appendChild(c),
    document.querySelector(".listcheckbox").after(m)),
    !1)
}
function checkQuocTich(e, t, n, r, o) {
    var m, c;
    return 0 != (null != document.getElementById(e) && document.getElementById(e).checked) || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((m = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (c = document.createElement("div")).className = "formErrorContent",
    c.id = "error_" + e,
    c.innerHTML = t,
    m.appendChild(c),
    document.getElementById(e).after(m)),
    !1)
}
function checkCMND(e, t, n, r, o) {
    var m = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    return "" != m && m != n && (9 == m.length || 12 == m.length) || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((n = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (m = document.createElement("div")).className = "formErrorContent",
    m.id = "error_" + e,
    m.innerHTML = t,
    n.appendChild(m),
    document.getElementById(e).after(n)),
    !1)
}
function checkPassport(e, t, n, r, o) {
    var m = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    return !("" == m || m == n || 12 < m.length) || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((n = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (m = document.createElement("div")).className = "formErrorContent",
    m.id = "error_" + e,
    m.innerHTML = t,
    n.appendChild(m),
    document.getElementById(e).after(n)),
    !1)
}
function parseDate(e) {
    e = e.split("/");
    return new Date(e[2],e[1],e[0])
}
function checkDate(e, t, n, r, o, m) {
    var c, d, l = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "", u = l.split("/"), u = (null != u[1] && null != u[2] || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((c = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (d = document.createElement("div")).className = "formErrorContent",
    d.id = "error_" + e,
    d.innerHTML = t,
    c.appendChild(d),
    document.getElementById(e).after(c))),
    u[0] + "/" + u[1] + "/" + (parseInt(u[2]) + 18)), a = new Date, u = parseDate(u).getTime(), a = parseDate(a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear()).getTime();
    return "" == l || l == n ? (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((c = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (d = document.createElement("div")).className = "formErrorContent",
    d.id = "error_" + e,
    d.innerHTML = t,
    c.appendChild(d),
    document.getElementById(e).after(c)),
    !1) : !(a < u && (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = m : ((c = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (d = document.createElement("div")).className = "formErrorContent",
    d.id = "error_" + e,
    d.innerHTML = m,
    c.appendChild(d),
    document.getElementById(e).after(c)),
    1))
}
var httpserver = document.querySelector(".httpserver").innerHTML;
function _scrollToElement(e, t) {
    e = Math.round(e.getBoundingClientRect().top);
    scrollToY(document.scrollingElement.scrollTop + e, t)
}
function validatecontact() {
    hidemsg();
    var e = !0
      , t = checkNull("name", document.getElementById("name").getAttribute("data-error"), document.getElementById("name").getAttribute("data-default"), "40", "-270")
      , n = checkNull("comments", document.getElementById("comments").getAttribute("data-error"), document.getElementById("comments").getAttribute("data-default"), "40", "-270")
      , r = checkPhone("phone", document.getElementById("phone").getAttribute("data-error"), document.getElementById("phone").getAttribute("data-default"), "40", "-270");
    return email = checkMail("email", document.getElementById("email").getAttribute("data-error"), document.getElementById("email").getAttribute("data-default"), "40", "-270"),
    t && n && r && email || (e = !1,
    setTimeout(hideerror, 5e3)),
    e
}
function validaterecruitment() {
    hidemsg();
    var e = !0
      , t = checkNull("namerecruitment", document.getElementById("namerecruitment").getAttribute("data-error"), document.getElementById("namerecruitment").getAttribute("data-default"), "40", "-270")
      , n = checkPhone("phonerecruitment", document.getElementById("phonerecruitment").getAttribute("data-error"), document.getElementById("phonerecruitment").getAttribute("data-default"), "40", "-270");
    return email = checkMail("emailrecruitment", document.getElementById("emailrecruitment").getAttribute("data-error"), document.getElementById("emailrecruitment").getAttribute("data-default"), "40", "-270"),
    recruitmentid = checkSelect("recruitment_id", document.getElementById("recruitment_id").getAttribute("data-error"), document.getElementById("recruitment_id").getAttribute("data-default"), "40", "-270"),
    t && n && email && recruitmentid || (null != (t = null != document.querySelector(".career-form") ? document.querySelector(".career-form") : null) && _scrollToElement(t, 1e3),
    e = !1,
    setTimeout(hideerror, 5e3)),
    e
}
function stopUpload(e) {
    var t;
    return document.querySelector(".loadx").remove(),
    "200" == e.status ? ((t = document.createElement("div")).className = "contact-success color-blue",
    t.innerHTML = e.message,
    document.getElementById("recruitment-send").reset(),
    document.querySelectorAll(".holder").forEach(function(e) {
        e.classList.remove("hide")
    }),
    document.getElementById("recruitment_id").parentElement.querySelector(".select-selected").innerHTML = document.getElementById("recruitment_id").dataset.default) : ((t = document.createElement("div")).className = "contact-success color-red",
    t.innerHTML = e.message),
    document.getElementById("fileInput").value = "",
    document.querySelector(".file-name").innerHTML = document.querySelector(".file-name").getAttribute("data-default"),
    document.querySelector(".overlay-dark").after(t),
    document.getElementById("btn-recruitment-submit").removeAttribute("disabled"),
    document.getElementById("btn-recruitment-submit").style.pointerEvents = "auto",
    setTimeout(hidemsg, 5e3),
    !0
}
function validateregister() {
    hidemsg();
    var e = !0;
    return checkMail("emailregister", document.getElementById("emailregister").getAttribute("data-error"), document.getElementById("emailregister").getAttribute("data-default"), "40", "-270") || (e = !1,
    setTimeout(hideerror, 5e3)),
    e
}
function validateregisterproject() {
    hidemsg();
    var e = !0
      , t = checkNull("nameregisterproject", document.getElementById("nameregisterproject").getAttribute("data-error"), document.getElementById("nameregisterproject").getAttribute("data-default"), "40", "-270")
      , n = checkPhone("phoneregisterproject", document.getElementById("phoneregisterproject").getAttribute("data-error"), document.getElementById("phoneregisterproject").getAttribute("data-default"), "40", "-270");
    return email = checkMail("emailregisterproject", document.getElementById("emailregisterproject").getAttribute("data-error"), document.getElementById("emailregisterproject").getAttribute("data-default"), "40", "-270"),
    t && n && email || (e = !1,
    setTimeout(hideerror, 5e3)),
    e
}
function validatelogin() {
    hidemsg();
    var e = !0
      , t = checkNull("namelogin", document.getElementById("namelogin").getAttribute("data-error"), document.getElementById("namelogin").getAttribute("data-default"), "40", "-270")
      , n = checkNull("passwordlogin", document.getElementById("passwordlogin").getAttribute("data-error"), document.getElementById("passwordlogin").getAttribute("data-default"), "40", "-270");
    return t && n || (e = !1,
    setTimeout(hideerror, 5e3)),
    e
}
function validateservice() {
    hidemsg();
    var e = !0
      , t = checkNull("nameservice", document.getElementById("nameservice").getAttribute("data-error"), document.getElementById("nameservice").getAttribute("data-default"), "40", "-270")
      , n = checkNull("commentservice", document.getElementById("commentservice").getAttribute("data-error"), document.getElementById("commentservice").getAttribute("data-default"), "40", "-270")
      , r = checkPhone("phoneservice", document.getElementById("phoneservice").getAttribute("data-error"), document.getElementById("phoneservice").getAttribute("data-default"), "40", "-270");
    return email = checkMail("emailservice", document.getElementById("emailservice").getAttribute("data-error"), document.getElementById("emailservice").getAttribute("data-default"), "40", "-270"),
    t && n && r && email || (e = !1,
    setTimeout(hideerror, 5e3)),
    e
}
function _popupSubmit() {
    null != document.getElementById("popup_form") && (document.getElementById("btn-popup-submit").addEventListener("click", function(e) {
        var n, t, r;
        return e.preventDefault(),
        1 == (hidemsg(),
        e = !0,
        t = checkNull("namepopup", document.getElementById("namepopup").getAttribute("data-error"), document.getElementById("namepopup").getAttribute("data-default"), "40", "-270"),
        r = checkPhone("phonepopup", document.getElementById("phonepopup").getAttribute("data-error"), document.getElementById("phonepopup").getAttribute("data-default"), "40", "-270"),
        email = checkMail("emailpopup", document.getElementById("emailpopup").getAttribute("data-error"), document.getElementById("emailpopup").getAttribute("data-default"), "40", "-270"),
        t && r && email || (e = !1,
        setTimeout(hideerror, 5e3)),
        e) ? (document.getElementById("btn-popup-submit").setAttribute("disabled", "disabled"),
        document.getElementById("btn-popup-submit").style.pointerEvents = "none",
        (t = document.createElement("div")).className = "loadx",
        t.style.display = "block",
        t.style.opacity = 1,
        document.body.after(t),
        document.querySelector(".loadx").style.display = "block",
        (n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", httpserver + "send-popup-ajax.html", !0),
        r = serialize(document.forms.popup_form),
        n.onreadystatechange = function() {
            var e, t;
            4 == n.readyState && 200 == n.status && (document.querySelector(".loadx").remove(),
            "200" == (e = JSON.parse(n.responseText)).status ? (document.getElementById("popup_form").reset(),
            (t = document.createElement("div")).className = "contact-success color-blue",
            t.innerHTML = e.message,
            document.querySelector(".details-popup-home .close-popup").click(),
            document.querySelectorAll(".holder").forEach(function(e) {
                e.classList.remove("hide")
            })) : ((t = document.createElement("div")).className = "contact-success color-red",
            t.innerHTML = e.message),
            document.querySelector(".overlay-dark").after(t),
            document.getElementById("btn-popup-submit").removeAttribute("disabled"),
            document.getElementById("btn-popup-submit").style.pointerEvents = "auto",
            setTimeout(hidemsg, 5e3))
        }
        ,
        n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        n.send(r)) : document.querySelectorAll(".formError").forEach(function(e) {
            e.addEventListener("click", function(e) {
                this.remove()
            })
        }),
        !1
    }),
    null != document.getElementById("phonepopup") && document.getElementById("phonepopup").addEventListener("keypress", isNumber),
    document.getElementById("popup_form").addEventListener("keydown", function(e) {
        document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btn-popup-submit").click()
    }))
}
null != document.getElementById("contact_form") && (document.getElementById("btn-contact-submit").addEventListener("click", function(e) {
    var n;
    return e.preventDefault(),
    1 == validatecontact() ? (document.getElementById("btn-contact-submit").setAttribute("disabled", "disabled"),
    document.getElementById("btn-contact-submit").style.pointerEvents = "none",
    (e = document.createElement("div")).className = "loadx",
    e.style.display = "block",
    e.style.opacity = 1,
    document.body.after(e),
    document.querySelector(".loadx").style.display = "block",
    (n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", httpserver + "send-contact.html", !0),
    e = serialize(document.forms.contact_form),
    n.onreadystatechange = function() {
        var e, t;
        4 == n.readyState && 200 == n.status && (document.querySelector(".loadx").remove(),
        "200" == (e = JSON.parse(n.responseText)).status ? (document.getElementById("contact_form").reset(),
        (t = document.createElement("div")).className = "contact-success color-blue",
        t.innerHTML = e.message,
        document.querySelectorAll(".holder").forEach(function(e) {
            e.classList.remove("hide")
        })) : ((t = document.createElement("div")).className = "contact-success color-red",
        t.innerHTML = e.message),
        document.querySelector(".overlay-dark").after(t),
        document.getElementById("btn-contact-submit").removeAttribute("disabled"),
        document.getElementById("btn-contact-submit").style.pointerEvents = "auto",
        setTimeout(hidemsg, 5e3))
    }
    ,
    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    n.send(e)) : document.querySelectorAll(".formError").forEach(function(e) {
        e.addEventListener("click", function(e) {
            this.remove()
        })
    }),
    !1
}),
null != document.getElementById("phone") && document.getElementById("phone").addEventListener("keypress", isNumber),
document.getElementById("contact_form").addEventListener("keydown", function(e) {
    document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btn-recruitment-submit").click()
})),
null != document.getElementById("recruitment-send") && (document.getElementById("btn-recruitment-submit").addEventListener("click", function(e) {
    return e.preventDefault(),
    1 == validaterecruitment() ? (document.getElementById("btn-recruitment-submit").setAttribute("disabled", "disabled"),
    document.getElementById("btn-recruitment-submit").style.pointerEvents = "none",
    (e = document.createElement("div")).className = "loadx",
    e.style.display = "block",
    e.style.opacity = 1,
    document.body.after(e),
    document.getElementById("recruitment-send").submit()) : document.querySelectorAll(".formError").forEach(function(e) {
        e.addEventListener("click", function(e) {
            this.remove()
        })
    }),
    !1
}),
null != document.getElementById("phonerecruitment") && document.getElementById("phonerecruitment").addEventListener("keypress", isNumber),
document.getElementById("recruitment-send").addEventListener("keydown", function(e) {
    13 === e.keyCode && (e.preventDefault(),
    document.getElementById("btn-recruitment-submit").click())
})),
null != document.getElementById("register") && (document.getElementById("btn-register-submit").addEventListener("click", function(e) {
    var n;
    return e.preventDefault(),
    1 == validateregister() ? (document.getElementById("btn-register-submit").setAttribute("disabled", "disabled"),
    document.getElementById("btn-register-submit").style.pointerEvents = "none",
    (e = document.createElement("div")).className = "loadx",
    e.style.display = "block",
    e.style.opacity = 1,
    document.body.after(e),
    (n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", httpserver + "send-register.html", !0),
    e = serialize(document.forms.register),
    n.onreadystatechange = function() {
        var e, t;
        4 == n.readyState && 200 == n.status && (e = JSON.parse(n.responseText),
        document.querySelector(".loadx").remove(),
        "200" == e.status ? (document.getElementById("register").reset(),
        (t = document.createElement("div")).className = "contact-success color-blue",
        t.innerHTML = e.message,
        document.querySelectorAll(".holder").forEach(function(e) {
            e.classList.remove("hide")
        })) : ((t = document.createElement("div")).className = "contact-success color-red",
        t.innerHTML = e.message),
        document.querySelector(".overlay-dark").after(t),
        document.getElementById("btn-register-submit").removeAttribute("disabled"),
        document.getElementById("btn-register-submit").style.pointerEvents = "auto",
        setTimeout(hidemsg, 5e3))
    }
    ,
    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    n.send(e)) : document.querySelectorAll(".formError").forEach(function(e) {
        e.addEventListener("click", function(e) {
            this.remove()
        })
    }),
    !1
}),
null != document.getElementById("phoneregister") && document.getElementById("phoneregister").addEventListener("keypress", isNumber),
document.getElementById("register").addEventListener("keydown", function(e) {
    13 === e.keyCode && (e.preventDefault(),
    document.getElementById("btn-register-submit").click())
})),
null != document.getElementById("registerproject_form") && (document.getElementById("btn-registerproject-submit").addEventListener("click", function(e) {
    var n;
    return e.preventDefault(),
    1 == validateregisterproject() ? (document.getElementById("btn-registerproject-submit").setAttribute("disabled", "disabled"),
    document.getElementById("btn-registerproject-submit").style.pointerEvents = "none",
    (e = document.createElement("div")).className = "loadx",
    e.style.display = "block",
    e.style.opacity = 1,
    document.body.after(e),
    document.querySelector(".loadx").style.display = "block",
    (n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", httpserver + "send-registerproject-ajax.html", !0),
    e = serialize(document.forms.registerproject_form),
    n.onreadystatechange = function() {
        var e, t;
        4 == n.readyState && 200 == n.status && (document.querySelector(".loadx").remove(),
        "200" == (e = JSON.parse(n.responseText)).status ? (document.getElementById("registerproject_form").reset(),
        (t = document.createElement("div")).className = "contact-success color-blue",
        t.innerHTML = e.message,
        document.querySelectorAll(".holder").forEach(function(e) {
            e.classList.remove("hide")
        })) : ((t = document.createElement("div")).className = "contact-success color-red",
        t.innerHTML = e.message),
        document.querySelector(".overlay-dark").after(t),
        grecaptcha.reset(),
        document.getElementById("btn-registerproject-submit").removeAttribute("disabled"),
        document.getElementById("btn-registerproject-submit").style.pointerEvents = "auto",
        setTimeout(hidemsg, 5e3))
    }
    ,
    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    n.send(e)) : document.querySelectorAll(".formError").forEach(function(e) {
        e.addEventListener("click", function(e) {
            this.remove()
        })
    }),
    !1
}),
null != document.getElementById("phoneregisterproject") && document.getElementById("phoneregisterproject").addEventListener("keypress", isNumber),
document.getElementById("registerproject_form").addEventListener("keydown", function(e) {
    document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btn-recruitment-submit").click()
})),
null != document.getElementById("login_form") && (document.getElementById("btn-login-submit").addEventListener("click", function(e) {
    var n;
    return e.preventDefault(),
    1 == validatelogin() ? (document.getElementById("btn-login-submit").setAttribute("disabled", "disabled"),
    document.getElementById("btn-login-submit").style.pointerEvents = "none",
    (e = document.createElement("div")).className = "loadx",
    e.style.display = "block",
    e.style.opacity = 1,
    document.body.after(e),
    document.querySelector(".loadx").style.display = "block",
    (n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", httpserver + "send-login-ajax.html", !0),
    e = serialize(document.forms.login_form),
    n.onreadystatechange = function() {
        var e, t;
        4 == n.readyState && 200 == n.status && (document.querySelector(".loadx").remove(),
        "200" == (e = JSON.parse(n.responseText)).status ? (window.location.reload(),
        document.getElementById("login_form").reset(),
        (t = document.createElement("div")).className = "contact-success color-blue",
        t.innerHTML = e.message,
        document.querySelectorAll(".holder").forEach(function(e) {
            e.classList.remove("hide")
        })) : ((t = document.createElement("div")).className = "contact-success color-red",
        t.innerHTML = e.message),
        document.querySelector(".overlay-dark").after(t),
        grecaptcha.reset(),
        document.getElementById("btn-login-submit").removeAttribute("disabled"),
        document.getElementById("btn-login-submit").style.pointerEvents = "auto",
        setTimeout(hidemsg, 5e3))
    }
    ,
    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    n.send(e)) : document.querySelectorAll(".formError").forEach(function(e) {
        e.addEventListener("click", function(e) {
            this.remove()
        })
    }),
    !1
}),
document.getElementById("login_form").addEventListener("keydown", function(e) {
    13 === e.keyCode && (e.preventDefault(),
    document.getElementById("btn-recruitment-submit").click())
})),
null != document.getElementById("service_form") && (document.getElementById("btn-service-submit").addEventListener("click", function(e) {
    var n;
    return e.preventDefault(),
    1 == validateservice() ? (document.getElementById("btn-service-submit").setAttribute("disabled", "disabled"),
    document.getElementById("btn-service-submit").style.pointerEvents = "none",
    (e = document.createElement("div")).className = "loadx",
    e.style.display = "block",
    e.style.opacity = 1,
    document.body.after(e),
    document.querySelector(".loadx").style.display = "block",
    (n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", httpserver + "send-service-ajax.html", !0),
    e = serialize(document.forms.service_form),
    n.onreadystatechange = function() {
        var e, t;
        4 == n.readyState && 200 == n.status && (document.querySelector(".loadx").remove(),
        "200" == (e = JSON.parse(n.responseText)).status ? (document.getElementById("service_form").reset(),
        (t = document.createElement("div")).className = "contact-success color-blue",
        t.innerHTML = e.message,
        document.querySelectorAll(".holder").forEach(function(e) {
            e.classList.remove("hide")
        })) : ((t = document.createElement("div")).className = "contact-success color-red",
        t.innerHTML = e.message),
        document.querySelector(".overlay-dark").after(t),
        document.getElementById("btn-service-submit").removeAttribute("disabled"),
        document.getElementById("btn-service-submit").style.pointerEvents = "auto",
        setTimeout(hidemsg, 5e3))
    }
    ,
    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    n.send(e)) : document.querySelectorAll(".formError").forEach(function(e) {
        e.addEventListener("click", function(e) {
            this.remove()
        })
    }),
    !1
}),
null != document.getElementById("phoneservice") && document.getElementById("phoneservice").addEventListener("keypress", isNumber),
document.getElementById("service_form").addEventListener("keydown", function(e) {
    document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btn-service-submit").click()
}));