window.Modernizr = function(t, n, e) {
        function i(t) {
            v.cssText = t
        }

        function r(t, n) {
            return i(w.join(t + ";") + (n || ""))
        }

        function a(t, n) {
            return typeof t === n
        }

        function o(t, n) {
            return !!~("" + t).indexOf(n)
        }

        function s(t, n) {
            for (var i in t) {
                var r = t[i];
                if (!o(r, "-") && v[r] !== e) return "pfx" == n ? r : !0
            }
            return !1
        }

        function u(t, n, i) {
            for (var r in t) {
                var o = n[t[r]];
                if (o !== e) return i === !1 ? t[r] : a(o, "function") ? o.bind(i || n) : o
            }
            return !1
        }

        function l(t, n, e) {
            var i = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + S.join(i + " ") + i).split(" ");
            return a(n, "string") || a(n, "undefined") ? s(r, n) : (r = (t + " " + _.join(i + " ") + i).split(" "), u(r, n, e))
        }

        function c() {
            f.input = function(e) {
                for (var i = 0, r = e.length; r > i; i++) A[e[i]] = !!(e[i] in y);
                return A.list && (A.list = !(!n.createElement("datalist") || !t.HTMLDataListElement)), A
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(t) {
                for (var i = 0, r, a, o, s = t.length; s > i; i++) y.setAttribute("type", a = t[i]), r = "text" !== y.type, r && (y.value = x, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(a) && y.style.WebkitAppearance !== e ? (g.appendChild(y), o = n.defaultView, r = o.getComputedStyle && "textfield" !== o.getComputedStyle(y, null).WebkitAppearance && 0 !== y.offsetHeight, g.removeChild(y)) : /^(search|tel)$/.test(a) || (r = /^(url|email)$/.test(a) ? y.checkValidity && y.checkValidity() === !1 : y.value != x)), E[t[i]] = !!r;
                return E
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var h = "2.6.2",
            f = {},
            d = !0,
            g = n.documentElement,
            p = "modernizr",
            m = n.createElement(p),
            v = m.style,
            y = n.createElement("input"),
            x = ":)",
            b = {}.toString,
            w = " -webkit- -moz- -o- -ms- ".split(" "),
            M = "Webkit Moz O ms",
            S = M.split(" "),
            _ = M.toLowerCase().split(" "),
            k = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            E = {},
            A = {},
            P = [],
            L = P.slice,
            N, T = function(t, e, i, r) {
                var a, o, s, u, l = n.createElement("div"),
                    c = n.body,
                    h = c || n.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = n.createElement("div"), s.id = r ? r[i] : p + (i + 1), l.appendChild(s);
                return a = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), l.id = p, (c ? l : h).innerHTML += a, h.appendChild(l), c || (h.style.background = "", h.style.overflow = "hidden", u = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), o = e(l, t), c ? l.parentNode.removeChild(l) : (h.parentNode.removeChild(h), g.style.overflow = u), !!o
            },
            z = function(n) {
                var e = t.matchMedia || t.msMatchMedia;
                if (e) return e(n).matches;
                var i;
                return T("@media " + n + " { #" + p + " { position: absolute; } }", function(n) {
                    i = "absolute" == (t.getComputedStyle ? getComputedStyle(n, null) : n.currentStyle).position
                }), i
            },
            R = function() {
                function t(t, r) {
                    r = r || n.createElement(i[t] || "div"), t = "on" + t;
                    var o = t in r;
                    return o || (r.setAttribute || (r = n.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), o = a(r[t], "function"), a(r[t], "undefined") || (r[t] = e), r.removeAttribute(t))), r = null, o
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            F = {}.hasOwnProperty,
            B;
        B = a(F, "undefined") || a(F.call, "undefined") ? function(t, n) {
            return n in t && a(t.constructor.prototype[n], "undefined")
        } : function(t, n) {
            return F.call(t, n)
        }, Function.prototype.bind || (Function.prototype.bind = function q(t) {
            var n = this;
            if ("function" != typeof n) throw new TypeError;
            var e = L.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var r = function() {};
                        r.prototype = n.prototype;
                        var a = new r,
                            o = n.apply(a, e.concat(L.call(arguments)));
                        return Object(o) === o ? o : a
                    }
                    return n.apply(t, e.concat(L.call(arguments)))
                };
            return i
        }), C.flexbox = function() {
            return l("flexWrap")
        }, C.flexboxlegacy = function() {
            return l("boxDirection")
        }, C.canvas = function() {
            var t = n.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, C.canvastext = function() {
            return !(!f.canvas || !a(n.createElement("canvas").getContext("2d").fillText, "function"))
        }, C.webgl = function() {
            return !!t.WebGLRenderingContext
        }, C.touch = function() {
            var e;
            return "ontouchstart" in t || t.DocumentTouch && n instanceof DocumentTouch ? e = !0 : T(["@media (", w.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                e = 9 === t.offsetTop
            }), e
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.postmessage = function() {
            return !!t.postMessage
        }, C.websqldatabase = function() {
            return !!t.openDatabase
        }, C.indexedDB = function() {
            return !!l("indexedDB", t)
        }, C.hashchange = function() {
            return R("hashchange", t) && (n.documentMode === e || n.documentMode > 7)
        }, C.history = function() {
            return !(!t.history || !history.pushState)
        }, C.draganddrop = function() {
            var t = n.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, C.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, C.rgba = function() {
            return i("background-color:rgba(150,255,150,.5)"), o(v.backgroundColor, "rgba")
        }, C.hsla = function() {
            return i("background-color:hsla(120,40%,100%,.5)"), o(v.backgroundColor, "rgba") || o(v.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(v.background)
        }, C.backgroundsize = function() {
            return l("backgroundSize")
        }, C.borderimage = function() {
            return l("borderImage")
        }, C.borderradius = function() {
            return l("borderRadius")
        }, C.boxshadow = function() {
            return l("boxShadow")
        }, C.textshadow = function() {
            return "" === n.createElement("div").style.textShadow
        }, C.opacity = function() {
            return r("opacity:.55"), /^0.55$/.test(v.opacity)
        }, C.cssanimations = function() {
            return l("animationName")
        }, C.csscolumns = function() {
            return l("columnCount")
        }, C.cssgradients = function() {
            var t = "background-image:",
                n = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                e = "linear-gradient(left top,#9f9, white);";
            return i((t + "-webkit- ".split(" ").join(n + t) + w.join(e + t)).slice(0, -t.length)), o(v.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return l("boxReflect")
        }, C.csstransforms = function() {
            return !!l("transform")
        }, C.csstransforms3d = function() {
            var t = !!l("perspective");
            return t && "webkitPerspective" in g.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(n, e) {
                t = 9 === n.offsetLeft && 3 === n.offsetHeight
            }), t
        }, C.csstransitions = function() {
            return l("transition")
        }, C.fontface = function() {
            var t;
            return T('@font-face {font-family:"font";src:url("https://")}', function(e, i) {
                var r = n.getElementById("smodernizr"),
                    a = r.sheet || r.styleSheet,
                    o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
                t = /src/i.test(o) && 0 === o.indexOf(i.split(" ")[0])
            }), t
        }, C.generatedcontent = function() {
            var t;
            return T(["#", p, "{font:0/0 a}#", p, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(n) {
                t = n.offsetHeight >= 3
            }), t
        }, C.video = function() {
            var t = n.createElement("video"),
                e = !1;
            try {
                (e = !!t.canPlayType) && (e = new Boolean(e), e.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (i) {}
            return e
        }, C.audio = function() {
            var t = n.createElement("audio"),
                e = !1;
            try {
                (e = !!t.canPlayType) && (e = new Boolean(e), e.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (i) {}
            return e
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(p, p), localStorage.removeItem(p), !0
            } catch (t) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0
            } catch (t) {
                return !1
            }
        }, C.webworkers = function() {
            return !!t.Worker
        }, C.applicationcache = function() {
            return !!t.applicationCache
        }, C.svg = function() {
            return !!n.createElementNS && !!n.createElementNS(k.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var t = n.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == k.svg
        }, C.smil = function() {
            return !!n.createElementNS && /SVGAnimate/.test(b.call(n.createElementNS(k.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!n.createElementNS && /SVGClipPath/.test(b.call(n.createElementNS(k.svg, "clipPath")))
        };
        for (var I in C) B(C, I) && (N = I.toLowerCase(), f[N] = C[I](), P.push((f[N] ? "" : "no-") + N));
        return f.input || c(), f.addTest = function(t, n) {
                if ("object" == typeof t)
                    for (var i in t) B(t, i) && f.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), f[t] !== e) return f;
                    n = "function" == typeof n ? n() : n, "undefined" != typeof d && d && (g.className += " " + (n ? "" : "no-") + t), f[t] = n
                }
                return f
            }, i(""), m = y = null,
            function(t, n) {
                function e(t, n) {
                    var e = t.createElement("p"),
                        i = t.getElementsByTagName("head")[0] || t.documentElement;
                    return e.innerHTML = "x<style>" + n + "</style>", i.insertBefore(e.lastChild, i.firstChild)
                }

                function i() {
                    var t = v.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function r(t) {
                    var n = p[t[d]];
                    return n || (n = {}, g++, t[d] = g, p[g] = n), n
                }

                function a(t, e, i) {
                    if (e || (e = n), m) return e.createElement(t);
                    i || (i = r(e));
                    var a;
                    return a = i.cache[t] ? i.cache[t].cloneNode() : h.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), a.canHaveChildren && !c.test(t) ? i.frag.appendChild(a) : a
                }

                function o(t, e) {
                    if (t || (t = n), m) return t.createDocumentFragment();
                    e = e || r(t);
                    for (var a = e.frag.cloneNode(), o = 0, s = i(), u = s.length; u > o; o++) a.createElement(s[o]);
                    return a
                }

                function s(t, n) {
                    n.cache || (n.cache = {}, n.createElem = t.createElement, n.createFrag = t.createDocumentFragment, n.frag = n.createFrag()), t.createElement = function(e) {
                        return v.shivMethods ? a(e, t, n) : n.createElem(e)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(t) {
                        return n.createElem(t), n.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(v, n.frag)
                }

                function u(t) {
                    t || (t = n);
                    var i = r(t);
                    return !v.shivCSS || f || i.hasCSS || (i.hasCSS = !!e(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || s(t, i), t
                }
                var l = t.html5 || {},
                    c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, d = "_html5shiv",
                    g = 0,
                    p = {},
                    m;
                ! function() {
                    try {
                        var t = n.createElement("a");
                        t.innerHTML = "<xyz></xyz>", f = "hidden" in t, m = 1 == t.childNodes.length || function() {
                            n.createElement("a");
                            var t = n.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (e) {
                        f = !0, m = !0
                    }
                }();
                var v = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: l.shivCSS !== !1,
                    supportsUnknownElements: m,
                    shivMethods: l.shivMethods !== !1,
                    type: "default",
                    shivDocument: u,
                    createElement: a,
                    createDocumentFragment: o
                };
                t.html5 = v, u(n)
            }(this, n), f._version = h, f._prefixes = w, f._domPrefixes = _, f._cssomPrefixes = S, f.mq = z, f.hasEvent = R, f.testProp = function(t) {
                return s([t])
            }, f.testAllProps = l, f.testStyles = T, f.prefixed = function(t, n, e) {
                return n ? l(t, n, e) : l(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + P.join(" ") : ""), f
    }(this, this.document), ! function() {
        function t(t) {
            return t && (t.ownerDocument || t.document || t).documentElement
        }

        function n(t) {
            return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
        }

        function e(t, n) {
            return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }

        function i(t) {
            return null === t ? NaN : +t
        }

        function r(t) {
            return !isNaN(t)
        }

        function a(t) {
            return {
                left: function(n, e, i, r) {
                    for (arguments.length < 3 && (i = 0), arguments.length < 4 && (r = n.length); r > i;) {
                        var a = i + r >>> 1;
                        t(n[a], e) < 0 ? i = a + 1 : r = a
                    }
                    return i
                },
                right: function(n, e, i, r) {
                    for (arguments.length < 3 && (i = 0), arguments.length < 4 && (r = n.length); r > i;) {
                        var a = i + r >>> 1;
                        t(n[a], e) > 0 ? r = a : i = a + 1
                    }
                    return i
                }
            }
        }

        function o(t) {
            return t.length
        }

        function s(t) {
            for (var n = 1; t * n % 1;) n *= 10;
            return n
        }

        function u(t, n) {
            for (var e in n) Object.defineProperty(t.prototype, e, {
                value: n[e],
                enumerable: !1
            })
        }

        function l() {
            this._ = Object.create(null)
        }

        function c(t) {
            return (t += "") === po || t[0] === mo ? mo + t : t
        }

        function h(t) {
            return (t += "")[0] === mo ? t.slice(1) : t
        }

        function f(t) {
            return c(t) in this._
        }

        function d(t) {
            return (t = c(t)) in this._ && delete this._[t]
        }

        function g() {
            var t = [];
            for (var n in this._) t.push(h(n));
            return t
        }

        function p() {
            var t = 0;
            for (var n in this._) ++t;
            return t
        }

        function m() {
            for (var t in this._) return !1;
            return !0
        }

        function v() {
            this._ = Object.create(null)
        }

        function y(t) {
            return t
        }

        function x(t, n, e) {
            return function() {
                var i = e.apply(n, arguments);
                return i === n ? t : i
            }
        }

        function b(t, n) {
            if (n in t) return n;
            n = n.charAt(0).toUpperCase() + n.slice(1);
            for (var e = 0, i = vo.length; i > e; ++e) {
                var r = vo[e] + n;
                if (r in t) return r
            }
        }

        function w() {}

        function M() {}

        function S(t) {
            function n() {
                for (var n, i = e, r = -1, a = i.length; ++r < a;)(n = i[r].on) && n.apply(this, arguments);
                return t
            }
            var e = [],
                i = new l;
            return n.on = function(n, r) {
                var a, o = i.get(n);
                return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, a = e.indexOf(o)).concat(e.slice(a + 1)), i.remove(n)), r && e.push(i.set(n, {
                    on: r
                })), t)
            }, n
        }

        function _() {
            no.event.preventDefault()
        }

        function k() {
            for (var t, n = no.event; t = n.sourceEvent;) n = t;
            return n
        }

        function C(t) {
            for (var n = new M, e = 0, i = arguments.length; ++e < i;) n[arguments[e]] = S(n);
            return n.of = function(e, i) {
                return function(r) {
                    try {
                        var a = r.sourceEvent = no.event;
                        r.target = t, no.event = r, n[r.type].apply(e, i)
                    } finally {
                        no.event = a
                    }
                }
            }, n
        }

        function E(t) {
            return xo(t, So), t
        }

        function A(t) {
            return "function" == typeof t ? t : function() {
                return bo(t, this)
            }
        }

        function P(t) {
            return "function" == typeof t ? t : function() {
                return wo(t, this)
            }
        }

        function L(t, n) {
            function e() {
                this.removeAttribute(t)
            }

            function i() {
                this.removeAttributeNS(t.space, t.local)
            }

            function r() {
                this.setAttribute(t, n)
            }

            function a() {
                this.setAttributeNS(t.space, t.local, n)
            }

            function o() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }

            function s() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
            return t = no.ns.qualify(t), null == n ? t.local ? i : e : "function" == typeof n ? t.local ? s : o : t.local ? a : r
        }

        function N(t) {
            return t.trim().replace(/\s+/g, " ")
        }

        function T(t) {
            return new RegExp("(?:^|\\s+)" + no.requote(t) + "(?:\\s+|$)", "g")
        }

        function z(t) {
            return (t + "").trim().split(/^|\s+/)
        }

        function R(t, n) {
            function e() {
                for (var e = -1; ++e < r;) t[e](this, n)
            }

            function i() {
                for (var e = -1, i = n.apply(this, arguments); ++e < r;) t[e](this, i)
            }
            t = z(t).map(F);
            var r = t.length;
            return "function" == typeof n ? i : e
        }

        function F(t) {
            var n = T(t);
            return function(e, i) {
                if (r = e.classList) return i ? r.add(t) : r.remove(t);
                var r = e.getAttribute("class") || "";
                i ? (n.lastIndex = 0, n.test(r) || e.setAttribute("class", N(r + " " + t))) : e.setAttribute("class", N(r.replace(n, " ")))
            }
        }

        function B(t, n, e) {
            function i() {
                this.style.removeProperty(t)
            }

            function r() {
                this.style.setProperty(t, n, e)
            }

            function a() {
                var i = n.apply(this, arguments);
                null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, e)
            }
            return null == n ? i : "function" == typeof n ? a : r
        }

        function I(t, n) {
            function e() {
                delete this[t]
            }

            function i() {
                this[t] = n
            }

            function r() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
            return null == n ? e : "function" == typeof n ? r : i
        }

        function q(t) {
            function n() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e ? n.createElementNS(e, t) : n.createElement(t)
            }

            function e() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
            return "function" == typeof t ? t : (t = no.ns.qualify(t)).local ? e : n
        }

        function D() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function O(t) {
            return {
                __data__: t
            }
        }

        function W(t) {
            return function() {
                return Mo(this, t)
            }
        }

        function H(t) {
            return arguments.length || (t = e),
                function(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }
        }

        function j(t, n) {
            for (var e = 0, i = t.length; i > e; e++)
                for (var r, a = t[e], o = 0, s = a.length; s > o; o++)(r = a[o]) && n(r, o, e);
            return t
        }

        function Y(t) {
            return xo(t, ko), t
        }

        function U(t) {
            var n, e;
            return function(i, r, a) {
                var o, s = t[a].update,
                    u = s.length;
                for (a != e && (e = a, n = 0), r >= n && (n = r + 1); !(o = s[n]) && ++n < u;);
                return o
            }
        }

        function V(t, n, e) {
            function i() {
                var n = this[o];
                n && (this.removeEventListener(t, n, n.$), delete this[o])
            }

            function r() {
                var r = u(n, io(arguments));
                i.call(this), this.addEventListener(t, this[o] = r, r.$ = e), r._ = n
            }

            function a() {
                var n, e = new RegExp("^__on([^.]+)" + no.requote(t) + "$");
                for (var i in this)
                    if (n = i.match(e)) {
                        var r = this[i];
                        this.removeEventListener(n[1], r, r.$), delete this[i]
                    }
            }
            var o = "__on" + t,
                s = t.indexOf("."),
                u = $;
            s > 0 && (t = t.slice(0, s));
            var l = Co.get(t);
            return l && (t = l, u = X), s ? n ? r : i : n ? w : a
        }

        function $(t, n) {
            return function(e) {
                var i = no.event;
                no.event = e, n[0] = this.__data__;
                try {
                    t.apply(this, n)
                } finally {
                    no.event = i
                }
            }
        }

        function X(t, n) {
            var e = $(t, n);
            return function(t) {
                var n = this,
                    i = t.relatedTarget;
                i && (i === n || 8 & i.compareDocumentPosition(n)) || e.call(n, t)
            }
        }

        function Z(e) {
            var i = ".dragsuppress-" + ++Ao,
                r = "click" + i,
                a = no.select(n(e)).on("touchmove" + i, _).on("dragstart" + i, _).on("selectstart" + i, _);
            if (null == Eo && (Eo = "onselectstart" in e ? !1 : b(e.style, "userSelect")), Eo) {
                var o = t(e).style,
                    s = o[Eo];
                o[Eo] = "none"
            }
            return function(t) {
                if (a.on(i, null), Eo && (o[Eo] = s), t) {
                    var n = function() {
                        a.on(r, null)
                    };
                    a.on(r, function() {
                        _(), n()
                    }, !0), setTimeout(n, 0)
                }
            }
        }

        function G(t, e) {
            e.changedTouches && (e = e.changedTouches[0]);
            var i = t.ownerSVGElement || t;
            if (i.createSVGPoint) {
                var r = i.createSVGPoint();
                if (0 > Po) {
                    var a = n(t);
                    if (a.scrollX || a.scrollY) {
                        i = no.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var o = i[0][0].getScreenCTM();
                        Po = !(o.f || o.e), i.remove()
                    }
                }
                return Po ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
            }
            var s = t.getBoundingClientRect();
            return [e.clientX - s.left - t.clientLeft, e.clientY - s.top - t.clientTop]
        }

        function J() {
            return no.event.changedTouches[0].identifier
        }

        function Q(t) {
            return t > 0 ? 1 : 0 > t ? -1 : 0
        }

        function K(t, n, e) {
            return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
        }

        function tt(t) {
            return t > 1 ? 0 : -1 > t ? To : Math.acos(t)
        }

        function nt(t) {
            return t > 1 ? Fo : -1 > t ? -Fo : Math.asin(t)
        }

        function et(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }

        function it(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }

        function rt(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }

        function at(t) {
            return (t = Math.sin(t / 2)) * t
        }

        function ot() {}

        function st(t, n, e) {
            return this instanceof st ? (this.h = +t, this.s = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof st ? new st(t.h, t.s, t.l) : wt("" + t, Mt, st) : new st(t, n, e)
        }

        function ut(t, n, e) {
            function i(t) {
                return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? a + (o - a) * t / 60 : 180 > t ? o : 240 > t ? a + (o - a) * (240 - t) / 60 : a
            }

            function r(t) {
                return Math.round(255 * i(t))
            }
            var a, o;
            return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, n = isNaN(n) ? 0 : 0 > n ? 0 : n > 1 ? 1 : n, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + n) : e + n - e * n, a = 2 * e - o, new vt(r(t + 120), r(t), r(t - 120))
        }

        function lt(t, n, e) {
            return this instanceof lt ? (this.h = +t, this.c = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof lt ? new lt(t.h, t.c, t.l) : t instanceof ht ? dt(t.l, t.a, t.b) : dt((t = St((t = no.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new lt(t, n, e)
        }

        function ct(t, n, e) {
            return isNaN(t) && (t = 0), isNaN(n) && (n = 0), new ht(e, Math.cos(t *= Bo) * n, Math.sin(t) * n)
        }

        function ht(t, n, e) {
            return this instanceof ht ? (this.l = +t, this.a = +n, void(this.b = +e)) : arguments.length < 2 ? t instanceof ht ? new ht(t.l, t.a, t.b) : t instanceof lt ? ct(t.h, t.c, t.l) : St((t = vt(t)).r, t.g, t.b) : new ht(t, n, e)
        }

        function ft(t, n, e) {
            var i = (t + 16) / 116,
                r = i + n / 500,
                a = i - e / 200;
            return r = gt(r) * Vo, i = gt(i) * Xo, a = gt(a) * Zo, new vt(mt(3.2404542 * r - 1.5371385 * i - .4985314 * a), mt(-.969266 * r + 1.8760108 * i + .041556 * a), mt(.0556434 * r - .2040259 * i + 1.0572252 * a))
        }

        function dt(t, n, e) {
            return t > 0 ? new lt(Math.atan2(e, n) * Io, Math.sqrt(n * n + e * e), t) : new lt(NaN, NaN, t)
        }

        function gt(t) {
            return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
        }

        function pt(t) {
            return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
        }

        function mt(t) {
            return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
        }

        function vt(t, n, e) {
            return this instanceof vt ? (this.r = ~~t, this.g = ~~n, void(this.b = ~~e)) : arguments.length < 2 ? t instanceof vt ? new vt(t.r, t.g, t.b) : wt("" + t, vt, ut) : new vt(t, n, e)
        }

        function yt(t) {
            return new vt(t >> 16, t >> 8 & 255, 255 & t)
        }

        function xt(t) {
            return yt(t) + ""
        }

        function bt(t) {
            return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
        }

        function wt(t, n, e) {
            var i, r, a, o = 0,
                s = 0,
                u = 0;
            if (i = /([a-z]+)\((.*)\)/i.exec(t)) switch (r = i[2].split(","), i[1]) {
                case "hsl":
                    return e(parseFloat(r[0]), parseFloat(r[1]) / 100, parseFloat(r[2]) / 100);
                case "rgb":
                    return n(kt(r[0]), kt(r[1]), kt(r[2]))
            }
            return (a = Qo.get(t.toLowerCase())) ? n(a.r, a.g, a.b) : (null == t || "#" !== t.charAt(0) || isNaN(a = parseInt(t.slice(1), 16)) || (4 === t.length ? (o = (3840 & a) >> 4, o = o >> 4 | o, s = 240 & a, s = s >> 4 | s, u = 15 & a, u = u << 4 | u) : 7 === t.length && (o = (16711680 & a) >> 16, s = (65280 & a) >> 8, u = 255 & a)), n(o, s, u))
        }

        function Mt(t, n, e) {
            var i, r, a = Math.min(t /= 255, n /= 255, e /= 255),
                o = Math.max(t, n, e),
                s = o - a,
                u = (o + a) / 2;
            return s ? (r = .5 > u ? s / (o + a) : s / (2 - o - a), i = t == o ? (n - e) / s + (e > n ? 6 : 0) : n == o ? (e - t) / s + 2 : (t - n) / s + 4, i *= 60) : (i = NaN, r = u > 0 && 1 > u ? 0 : i), new st(i, r, u)
        }

        function St(t, n, e) {
            t = _t(t), n = _t(n), e = _t(e);
            var i = pt((.4124564 * t + .3575761 * n + .1804375 * e) / Vo),
                r = pt((.2126729 * t + .7151522 * n + .072175 * e) / Xo),
                a = pt((.0193339 * t + .119192 * n + .9503041 * e) / Zo);
            return ht(116 * r - 16, 500 * (i - r), 200 * (r - a))
        }

        function _t(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function kt(t) {
            var n = parseFloat(t);
            return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n
        }

        function Ct(t) {
            return "function" == typeof t ? t : function() {
                return t
            }
        }

        function Et(t) {
            return function(n, e, i) {
                return 2 === arguments.length && "function" == typeof e && (i = e, e = null), At(n, e, t, i)
            }
        }

        function At(t, n, e, i) {
            function r() {
                var t, n = u.status;
                if (!n && Lt(u) || n >= 200 && 300 > n || 304 === n) {
                    try {
                        t = e.call(a, u)
                    } catch (i) {
                        return void o.error.call(a, i)
                    }
                    o.load.call(a, t)
                } else o.error.call(a, u)
            }
            var a = {},
                o = no.dispatch("beforesend", "progress", "load", "error"),
                s = {},
                u = new XMLHttpRequest,
                l = null;
            return !this.XDomainRequest || "withCredentials" in u || !/^(http(s)?:)?\/\//.test(t) || (u = new XDomainRequest), "onload" in u ? u.onload = u.onerror = r : u.onreadystatechange = function() {
                u.readyState > 3 && r()
            }, u.onprogress = function(t) {
                var n = no.event;
                no.event = t;
                try {
                    o.progress.call(a, u)
                } finally {
                    no.event = n
                }
            }, a.header = function(t, n) {
                return t = (t + "").toLowerCase(), arguments.length < 2 ? s[t] : (null == n ? delete s[t] : s[t] = n + "", a)
            }, a.mimeType = function(t) {
                return arguments.length ? (n = null == t ? null : t + "", a) : n
            }, a.responseType = function(t) {
                return arguments.length ? (l = t, a) : l
            }, a.response = function(t) {
                return e = t, a
            }, ["get", "post"].forEach(function(t) {
                a[t] = function() {
                    return a.send.apply(a, [t].concat(io(arguments)))
                }
            }), a.send = function(e, i, r) {
                if (2 === arguments.length && "function" == typeof i && (r = i, i = null), u.open(e, t, !0), null == n || "accept" in s || (s.accept = n + ",*/*"), u.setRequestHeader)
                    for (var c in s) u.setRequestHeader(c, s[c]);
                return null != n && u.overrideMimeType && u.overrideMimeType(n), null != l && (u.responseType = l), null != r && a.on("error", r).on("load", function(t) {
                    r(null, t)
                }), o.beforesend.call(a, u), u.send(null == i ? null : i), a
            }, a.abort = function() {
                return u.abort(), a
            }, no.rebind(a, o, "on"), null == i ? a : a.get(Pt(i))
        }

        function Pt(t) {
            return 1 === t.length ? function(n, e) {
                t(null == n ? e : null)
            } : t
        }

        function Lt(t) {
            var n = t.responseType;
            return n && "text" !== n ? t.response : t.responseText
        }

        function Nt() {
            var t = Tt(),
                n = zt() - t;
            n > 24 ? (isFinite(n) && (clearTimeout(es), es = setTimeout(Nt, n)), ns = 0) : (ns = 1, rs(Nt))
        }

        function Tt() {
            var t = Date.now();
            for (is = Ko; is;) t >= is.t && (is.f = is.c(t - is.t)), is = is.n;
            return t
        }

        function zt() {
            for (var t, n = Ko, e = 1 / 0; n;) n.f ? n = t ? t.n = n.n : Ko = n.n : (n.t < e && (e = n.t), n = (t = n).n);
            return ts = t, e
        }

        function Rt(t, n) {
            return n - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
        }

        function Ft(t, n) {
            var e = Math.pow(10, 3 * go(8 - n));
            return {
                scale: n > 8 ? function(t) {
                    return t / e
                } : function(t) {
                    return t * e
                },
                symbol: t
            }
        }

        function Bt(t) {
            var n = t.decimal,
                e = t.thousands,
                i = t.grouping,
                r = t.currency,
                a = i && e ? function(t, n) {
                    for (var r = t.length, a = [], o = 0, s = i[0], u = 0; r > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), a.push(t.substring(r -= s, r + s)), !((u += s + 1) > n));) s = i[o = (o + 1) % i.length];
                    return a.reverse().join(e)
                } : y;
            return function(t) {
                var e = os.exec(t),
                    i = e[1] || " ",
                    o = e[2] || ">",
                    s = e[3] || "-",
                    u = e[4] || "",
                    l = e[5],
                    c = +e[6],
                    h = e[7],
                    f = e[8],
                    d = e[9],
                    g = 1,
                    p = "",
                    m = "",
                    v = !1,
                    y = !0;
                switch (f && (f = +f.substring(1)), (l || "0" === i && "=" === o) && (l = i = "0", o = "="), d) {
                    case "n":
                        h = !0, d = "g";
                        break;
                    case "%":
                        g = 100, m = "%", d = "f";
                        break;
                    case "p":
                        g = 100, m = "%", d = "r";
                        break;
                    case "b":
                    case "o":
                    case "x":
                    case "X":
                        "#" === u && (p = "0" + d.toLowerCase());
                    case "c":
                        y = !1;
                    case "d":
                        v = !0, f = 0;
                        break;
                    case "s":
                        g = -1, d = "r"
                }
                "$" === u && (p = r[0], m = r[1]), "r" != d || f || (d = "g"), null != f && ("g" == d ? f = Math.max(1, Math.min(21, f)) : ("e" == d || "f" == d) && (f = Math.max(0, Math.min(20, f)))), d = ss.get(d) || It;
                var x = l && h;
                return function(t) {
                    var e = m;
                    if (v && t % 1) return "";
                    var r = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === s ? "" : s;
                    if (0 > g) {
                        var u = no.formatPrefix(t, f);
                        t = u.scale(t), e = u.symbol + m
                    } else t *= g;
                    t = d(t, f);
                    var b, w, M = t.lastIndexOf(".");
                    if (0 > M) {
                        var S = y ? t.lastIndexOf("e") : -1;
                        0 > S ? (b = t, w = "") : (b = t.substring(0, S), w = t.substring(S))
                    } else b = t.substring(0, M), w = n + t.substring(M + 1);
                    !l && h && (b = a(b, 1 / 0));
                    var _ = p.length + b.length + w.length + (x ? 0 : r.length),
                        k = c > _ ? new Array(_ = c - _ + 1).join(i) : "";
                    return x && (b = a(k + b, k.length ? c - w.length : 1 / 0)), r += p, t = b + w, ("<" === o ? r + t + k : ">" === o ? k + r + t : "^" === o ? k.substring(0, _ >>= 1) + r + t + k.substring(_) : r + (x ? t : k + t)) + e
                }
            }
        }

        function It(t) {
            return t + ""
        }

        function $t() {
            this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
        }

        function qt(t, n, e) {
            function i(n) {
                var e = t(n),
                    i = a(e, 1);
                return i - n > n - e ? e : i
            }

            function r(e) {
                return n(e = t(new ls(e - 1)), 1), e
            }

            function a(t, e) {
                return n(t = new ls(+t), e), t
            }

            function o(t, i, a) {
                var o = r(t),
                    s = [];
                if (a > 1)
                    for (; i > o;) e(o) % a || s.push(new Date(+o)), n(o, 1);
                else
                    for (; i > o;) s.push(new Date(+o)), n(o, 1);
                return s
            }

            function s(t, n, e) {
                try {
                    ls = $t;
                    var i = new $t;
                    return i._ = t, o(i, n, e)
                } finally {
                    ls = Date
                }
            }
            t.floor = t, t.round = i, t.ceil = r, t.offset = a, t.range = o;
            var u = t.utc = Dt(t);
            return u.floor = u, u.round = Dt(i), u.ceil = Dt(r), u.offset = Dt(a), u.range = s, t
        }

        function Dt(t) {
            return function(n, e) {
                try {
                    ls = $t;
                    var i = new $t;
                    return i._ = n, t(i, e)._
                } finally {
                    ls = Date
                }
            }
        }

        function Ot(t) {
            function n(t) {
                function n(n) {
                    for (var e, r, a, o = [], s = -1, u = 0; ++s < i;) 37 === t.charCodeAt(s) && (o.push(t.slice(u, s)), null != (r = hs[e = t.charAt(++s)]) && (e = t.charAt(++s)), (a = A[e]) && (e = a(n, null == r ? "e" === e ? " " : "0" : r)), o.push(e), u = s + 1);
                    return o.push(t.slice(u, s)), o.join("")
                }
                var i = t.length;
                return n.parse = function(n) {
                    var i = {
                            y: 1900,
                            m: 0,
                            d: 1,
                            H: 0,
                            M: 0,
                            S: 0,
                            L: 0,
                            Z: null
                        },
                        r = e(i, t, n, 0);
                    if (r != n.length) return null;
                    "p" in i && (i.H = i.H % 12 + 12 * i.p);
                    var a = null != i.Z && ls !== $t,
                        o = new(a ? $t : ls);
                    return "j" in i ? o.setFullYear(i.y, 0, i.j) : "w" in i && ("W" in i || "U" in i) ? (o.setFullYear(i.y, 0, 1), o.setFullYear(i.y, 0, "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o.getDay() + 5) % 7 : i.w + 7 * i.U - (o.getDay() + 6) % 7)) : o.setFullYear(i.y, i.m, i.d), o.setHours(i.H + (i.Z / 100 | 0), i.M + i.Z % 100, i.S, i.L), a ? o._ : o
                }, n.toString = function() {
                    return t
                }, n
            }

            function e(t, n, e, i) {
                for (var r, a, o, s = 0, u = n.length, l = e.length; u > s;) {
                    if (i >= l) return -1;
                    if (r = n.charCodeAt(s++), 37 === r) {
                        if (o = n.charAt(s++), a = P[o in hs ? n.charAt(s++) : o], !a || (i = a(t, e, i)) < 0) return -1
                    } else if (r != e.charCodeAt(i++)) return -1
                }
                return i
            }

            function i(t, n, e) {
                M.lastIndex = 0;
                var i = M.exec(n.slice(e));
                return i ? (t.w = S.get(i[0].toLowerCase()), e + i[0].length) : -1
            }

            function r(t, n, e) {
                b.lastIndex = 0;
                var i = b.exec(n.slice(e));
                return i ? (t.w = w.get(i[0].toLowerCase()), e + i[0].length) : -1
            }

            function a(t, n, e) {
                C.lastIndex = 0;
                var i = C.exec(n.slice(e));
                return i ? (t.m = E.get(i[0].toLowerCase()), e + i[0].length) : -1
            }

            function o(t, n, e) {
                _.lastIndex = 0;
                var i = _.exec(n.slice(e));
                return i ? (t.m = k.get(i[0].toLowerCase()), e + i[0].length) : -1
            }

            function s(t, n, i) {
                return e(t, A.c.toString(), n, i)
            }

            function u(t, n, i) {
                return e(t, A.x.toString(), n, i)
            }

            function l(t, n, i) {
                return e(t, A.X.toString(), n, i)
            }

            function c(t, n, e) {
                var i = x.get(n.slice(e, e += 2).toLowerCase());
                return null == i ? -1 : (t.p = i, e)
            }
            var h = t.dateTime,
                f = t.date,
                d = t.time,
                g = t.periods,
                p = t.days,
                m = t.shortDays,
                v = t.months,
                y = t.shortMonths;
            n.utc = function(t) {
                function e(t) {
                    try {
                        ls = $t;
                        var n = new ls;
                        return n._ = t, i(n)
                    } finally {
                        ls = Date
                    }
                }
                var i = n(t);
                return e.parse = function(t) {
                    try {
                        ls = $t;
                        var n = i.parse(t);
                        return n && n._
                    } finally {
                        ls = Date
                    }
                }, e.toString = i.toString, e
            }, n.multi = n.utc.multi = un;
            var x = no.map(),
                b = Ht(p),
                w = jt(p),
                M = Ht(m),
                S = jt(m),
                _ = Ht(v),
                k = jt(v),
                C = Ht(y),
                E = jt(y);
            g.forEach(function(t, n) {
                x.set(t.toLowerCase(), n)
            });
            var A = {
                    a: function(t) {
                        return m[t.getDay()]
                    },
                    A: function(t) {
                        return p[t.getDay()]
                    },
                    b: function(t) {
                        return y[t.getMonth()]
                    },
                    B: function(t) {
                        return v[t.getMonth()]
                    },
                    c: n(h),
                    d: function(t, n) {
                        return Wt(t.getDate(), n, 2)
                    },
                    e: function(t, n) {
                        return Wt(t.getDate(), n, 2)
                    },
                    H: function(t, n) {
                        return Wt(t.getHours(), n, 2)
                    },
                    I: function(t, n) {
                        return Wt(t.getHours() % 12 || 12, n, 2)
                    },
                    j: function(t, n) {
                        return Wt(1 + us.dayOfYear(t), n, 3)
                    },
                    L: function(t, n) {
                        return Wt(t.getMilliseconds(), n, 3)
                    },
                    m: function(t, n) {
                        return Wt(t.getMonth() + 1, n, 2)
                    },
                    M: function(t, n) {
                        return Wt(t.getMinutes(), n, 2)
                    },
                    p: function(t) {
                        return g[+(t.getHours() >= 12)]
                    },
                    S: function(t, n) {
                        return Wt(t.getSeconds(), n, 2)
                    },
                    U: function(t, n) {
                        return Wt(us.sundayOfYear(t), n, 2)
                    },
                    w: function(t) {
                        return t.getDay()
                    },
                    W: function(t, n) {
                        return Wt(us.mondayOfYear(t), n, 2)
                    },
                    x: n(f),
                    X: n(d),
                    y: function(t, n) {
                        return Wt(t.getFullYear() % 100, n, 2)
                    },
                    Y: function(t, n) {
                        return Wt(t.getFullYear() % 1e4, n, 4)
                    },
                    Z: on,
                    "%": function() {
                        return "%"
                    }
                },
                P = {
                    a: i,
                    A: r,
                    b: a,
                    B: o,
                    c: s,
                    d: Kt,
                    e: Kt,
                    H: nn,
                    I: nn,
                    j: tn,
                    L: an,
                    m: Qt,
                    M: en,
                    p: c,
                    S: rn,
                    U: Ut,
                    w: Yt,
                    W: Vt,
                    x: u,
                    X: l,
                    y: Zt,
                    Y: Xt,
                    Z: Gt,
                    "%": sn
                };
            return n
        }

        function Wt(t, n, e) {
            var i = 0 > t ? "-" : "",
                r = (i ? -t : t) + "",
                a = r.length;
            return i + (e > a ? new Array(e - a + 1).join(n) + r : r)
        }

        function Ht(t) {
            return new RegExp("^(?:" + t.map(no.requote).join("|") + ")", "i")
        }

        function jt(t) {
            for (var n = new l, e = -1, i = t.length; ++e < i;) n.set(t[e].toLowerCase(), e);
            return n
        }

        function Yt(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 1));
            return i ? (t.w = +i[0], e + i[0].length) : -1
        }

        function Ut(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e));
            return i ? (t.U = +i[0], e + i[0].length) : -1
        }

        function Vt(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e));
            return i ? (t.W = +i[0], e + i[0].length) : -1
        }

        function Xt(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 4));
            return i ? (t.y = +i[0], e + i[0].length) : -1
        }

        function Zt(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 2));
            return i ? (t.y = Jt(+i[0]), e + i[0].length) : -1
        }

        function Gt(t, n, e) {
            return /^[+-]\d{4}$/.test(n = n.slice(e, e + 5)) ? (t.Z = -n, e + 5) : -1
        }

        function Jt(t) {
            return t + (t > 68 ? 1900 : 2e3)
        }

        function Qt(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 2));
            return i ? (t.m = i[0] - 1, e + i[0].length) : -1
        }

        function Kt(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 2));
            return i ? (t.d = +i[0], e + i[0].length) : -1
        }

        function tn(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 3));
            return i ? (t.j = +i[0], e + i[0].length) : -1
        }

        function nn(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 2));
            return i ? (t.H = +i[0], e + i[0].length) : -1
        }

        function en(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 2));
            return i ? (t.M = +i[0], e + i[0].length) : -1
        }

        function rn(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 2));
            return i ? (t.S = +i[0], e + i[0].length) : -1
        }

        function an(t, n, e) {
            fs.lastIndex = 0;
            var i = fs.exec(n.slice(e, e + 3));
            return i ? (t.L = +i[0], e + i[0].length) : -1
        }

        function on(t) {
            var n = t.getTimezoneOffset(),
                e = n > 0 ? "-" : "+",
                i = go(n) / 60 | 0,
                r = go(n) % 60;
            return e + Wt(i, "0", 2) + Wt(r, "0", 2)
        }

        function sn(t, n, e) {
            ds.lastIndex = 0;
            var i = ds.exec(n.slice(e, e + 1));
            return i ? e + i[0].length : -1
        }

        function un(t) {
            for (var n = t.length, e = -1; ++e < n;) t[e][0] = this(t[e][0]);
            return function(n) {
                for (var e = 0, i = t[e]; !i[1](n);) i = t[++e];
                return i[0](n)
            }
        }

        function ln() {}

        function cn(t, n, e) {
            var i = e.s = t + n,
                r = i - t,
                a = i - r;
            e.t = t - a + (n - r)
        }

        function hn(t, n) {
            t && vs.hasOwnProperty(t.type) && vs[t.type](t, n)
        }

        function fn(t, n, e) {
            var i, r = -1,
                a = t.length - e;
            for (n.lineStart(); ++r < a;) i = t[r], n.point(i[0], i[1], i[2]);
            n.lineEnd()
        }

        function dn(t, n) {
            var e = -1,
                i = t.length;
            for (n.polygonStart(); ++e < i;) fn(t[e], n, 1);
            n.polygonEnd()
        }

        function gn() {
            function t(t, n) {
                t *= Bo, n = n * Bo / 2 + To / 4;
                var e = t - i,
                    o = e >= 0 ? 1 : -1,
                    s = o * e,
                    u = Math.cos(n),
                    l = Math.sin(n),
                    c = a * l,
                    h = r * u + c * Math.cos(s),
                    f = c * o * Math.sin(s);
                xs.add(Math.atan2(f, h)), i = t, r = u, a = l
            }
            var n, e, i, r, a;
            bs.point = function(o, s) {
                bs.point = t, i = (n = o) * Bo, r = Math.cos(s = (e = s) * Bo / 2 + To / 4), a = Math.sin(s)
            }, bs.lineEnd = function() {
                t(n, e)
            }
        }

        function pn(t) {
            var n = t[0],
                e = t[1],
                i = Math.cos(e);
            return [i * Math.cos(n), i * Math.sin(n), Math.sin(e)]
        }

        function mn(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }

        function vn(t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }

        function yn(t, n) {
            t[0] += n[0], t[1] += n[1], t[2] += n[2]
        }

        function xn(t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }

        function bn(t) {
            var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n, t[1] /= n, t[2] /= n
        }

        function wn(t) {
            return [Math.atan2(t[1], t[0]), nt(t[2])]
        }

        function Mn(t, n) {
            return go(t[0] - n[0]) < Lo && go(t[1] - n[1]) < Lo
        }

        function Sn(t, n) {
            t *= Bo;
            var e = Math.cos(n *= Bo);
            _n(e * Math.cos(t), e * Math.sin(t), Math.sin(n))
        }

        function _n(t, n, e) {
            ++ws, Ss += (t - Ss) / ws, _s += (n - _s) / ws, ks += (e - ks) / ws
        }

        function kn() {
            function t(t, r) {
                t *= Bo;
                var a = Math.cos(r *= Bo),
                    o = a * Math.cos(t),
                    s = a * Math.sin(t),
                    u = Math.sin(r),
                    l = Math.atan2(Math.sqrt((l = e * u - i * s) * l + (l = i * o - n * u) * l + (l = n * s - e * o) * l), n * o + e * s + i * u);
                Ms += l, Cs += l * (n + (n = o)), Es += l * (e + (e = s)), As += l * (i + (i = u)), _n(n, e, i)
            }
            var n, e, i;
            Ts.point = function(r, a) {
                r *= Bo;
                var o = Math.cos(a *= Bo);
                n = o * Math.cos(r), e = o * Math.sin(r), i = Math.sin(a), Ts.point = t, _n(n, e, i)
            }
        }

        function Cn() {
            Ts.point = Sn
        }

        function En() {
            function t(t, n) {
                t *= Bo;
                var e = Math.cos(n *= Bo),
                    o = e * Math.cos(t),
                    s = e * Math.sin(t),
                    u = Math.sin(n),
                    l = r * u - a * s,
                    c = a * o - i * u,
                    h = i * s - r * o,
                    f = Math.sqrt(l * l + c * c + h * h),
                    d = i * o + r * s + a * u,
                    g = f && -tt(d) / f,
                    p = Math.atan2(f, d);
                Ps += g * l, Ls += g * c, Ns += g * h, Ms += p, Cs += p * (i + (i = o)), Es += p * (r + (r = s)), As += p * (a + (a = u)), _n(i, r, a)
            }
            var n, e, i, r, a;
            Ts.point = function(o, s) {
                n = o, e = s, Ts.point = t, o *= Bo;
                var u = Math.cos(s *= Bo);
                i = u * Math.cos(o), r = u * Math.sin(o), a = Math.sin(s), _n(i, r, a)
            }, Ts.lineEnd = function() {
                t(n, e), Ts.lineEnd = Cn, Ts.point = Sn
            }
        }

        function An(t, n) {
            function e(e, i) {
                return e = t(e, i), n(e[0], e[1])
            }
            return t.invert && n.invert && (e.invert = function(e, i) {
                return e = n.invert(e, i), e && t.invert(e[0], e[1])
            }), e
        }

        function Pn() {
            return !0
        }

        function Ln(t, n, e, i, r) {
            var a = [],
                o = [];
            if (t.forEach(function(t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e = t[0],
                            i = t[n];
                        if (Mn(e, i)) {
                            r.lineStart();
                            for (var s = 0; n > s; ++s) r.point((e = t[s])[0], e[1]);
                            return void r.lineEnd()
                        }
                        var u = new Tn(e, t, null, !0),
                            l = new Tn(e, null, u, !1);
                        u.o = l, a.push(u), o.push(l), u = new Tn(i, t, null, !1), l = new Tn(i, null, u, !0), u.o = l, a.push(u), o.push(l)
                    }
                }), o.sort(n), Nn(a), Nn(o), a.length) {
                for (var s = 0, u = e, l = o.length; l > s; ++s) o[s].e = u = !u;
                for (var c, h, f = a[0];;) {
                    for (var d = f, g = !0; d.v;)
                        if ((d = d.n) === f) return;
                    c = d.z, r.lineStart();
                    do {
                        if (d.v = d.o.v = !0, d.e) {
                            if (g)
                                for (var s = 0, l = c.length; l > s; ++s) r.point((h = c[s])[0], h[1]);
                            else i(d.x, d.n.x, 1, r);
                            d = d.n
                        } else {
                            if (g) {
                                c = d.p.z;
                                for (var s = c.length - 1; s >= 0; --s) r.point((h = c[s])[0], h[1])
                            } else i(d.x, d.p.x, -1, r);
                            d = d.p
                        }
                        d = d.o, c = d.z, g = !g
                    } while (!d.v);
                    r.lineEnd()
                }
            }
        }

        function Nn(t) {
            if (n = t.length) {
                for (var n, e, i = 0, r = t[0]; ++i < n;) r.n = e = t[i], e.p = r, r = e;
                r.n = e = t[0], e.p = r
            }
        }

        function Tn(t, n, e, i) {
            this.x = t, this.z = n, this.o = e, this.e = i, this.v = !1, this.n = this.p = null
        }

        function zn(t, n, e, i) {
            return function(r, a) {
                function o(n, e) {
                    var i = r(n, e);
                    t(n = i[0], e = i[1]) && a.point(n, e)
                }

                function s(t, n) {
                    var e = r(t, n);
                    m.point(e[0], e[1])
                }

                function u() {
                    y.point = s, m.lineStart()
                }

                function l() {
                    y.point = o, m.lineEnd()
                }

                function c(t, n) {
                    p.push([t, n]);
                    var e = r(t, n);
                    b.point(e[0], e[1])
                }

                function h() {
                    b.lineStart(), p = []
                }

                function f() {
                    c(p[0][0], p[0][1]), b.lineEnd();
                    var t, n = b.clean(),
                        e = x.buffer(),
                        i = e.length;
                    if (p.pop(), g.push(p), p = null, i)
                        if (1 & n) {
                            t = e[0];
                            var r, i = t.length - 1,
                                o = -1;
                            if (i > 0) {
                                for (w || (a.polygonStart(), w = !0), a.lineStart(); ++o < i;) a.point((r = t[o])[0], r[1]);
                                a.lineEnd()
                            }
                        } else i > 1 && 2 & n && e.push(e.pop().concat(e.shift())), d.push(e.filter(Rn))
                }
                var d, g, p, m = n(a),
                    v = r.invert(i[0], i[1]),
                    y = {
                        point: o,
                        lineStart: u,
                        lineEnd: l,
                        polygonStart: function() {
                            y.point = c, y.lineStart = h, y.lineEnd = f, d = [], g = []
                        },
                        polygonEnd: function() {
                            y.point = o, y.lineStart = u, y.lineEnd = l, d = no.merge(d);
                            var t = Dn(v, g);
                            d.length ? (w || (a.polygonStart(), w = !0), Ln(d, Bn, t, e, a)) : t && (w || (a.polygonStart(), w = !0), a.lineStart(), e(null, null, 1, a), a.lineEnd()), w && (a.polygonEnd(), w = !1), d = g = null
                        },
                        sphere: function() {
                            a.polygonStart(), a.lineStart(), e(null, null, 1, a), a.lineEnd(), a.polygonEnd()
                        }
                    },
                    x = Fn(),
                    b = n(x),
                    w = !1;
                return y
            }
        }

        function Rn(t) {
            return t.length > 1
        }

        function Fn() {
            var t, n = [];
            return {
                lineStart: function() {
                    n.push(t = [])
                },
                point: function(n, e) {
                    t.push([n, e])
                },
                lineEnd: w,
                buffer: function() {
                    var e = n;
                    return n = [], t = null, e
                },
                rejoin: function() {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                }
            }
        }

        function Bn(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - Fo - Lo : Fo - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Fo - Lo : Fo - n[1])
        }

        function In(t) {
            var n, e = NaN,
                i = NaN,
                r = NaN;
            return {
                lineStart: function() {
                    t.lineStart(), n = 1
                },
                point: function(a, o) {
                    var s = a > 0 ? To : -To,
                        u = go(a - e);
                    go(u - To) < Lo ? (t.point(e, i = (i + o) / 2 > 0 ? Fo : -Fo), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(s, i), t.point(a, i), n = 0) : r !== s && u >= To && (go(e - r) < Lo && (e -= r * Lo), go(a - s) < Lo && (a -= s * Lo), i = $n(e, i, a, o), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(s, i), n = 0), t.point(e = a, i = o), r = s
                },
                lineEnd: function() {
                    t.lineEnd(), e = i = NaN
                },
                clean: function() {
                    return 2 - n
                }
            }
        }

        function $n(t, n, e, i) {
            var r, a, o = Math.sin(t - e);
            return go(o) > Lo ? Math.atan((Math.sin(n) * (a = Math.cos(i)) * Math.sin(e) - Math.sin(i) * (r = Math.cos(n)) * Math.sin(t)) / (r * a * o)) : (n + i) / 2
        }

        function qn(t, n, e, i) {
            var r;
            if (null == t) r = e * Fo, i.point(-To, r), i.point(0, r), i.point(To, r), i.point(To, 0), i.point(To, -r), i.point(0, -r), i.point(-To, -r), i.point(-To, 0), i.point(-To, r);
            else if (go(t[0] - n[0]) > Lo) {
                var a = t[0] < n[0] ? To : -To;
                r = e * a / 2, i.point(-a, r), i.point(0, r), i.point(a, r)
            } else i.point(n[0], n[1])
        }

        function Dn(t, n) {
            var e = t[0],
                i = t[1],
                r = [Math.sin(e), -Math.cos(e), 0],
                a = 0,
                o = 0;
            xs.reset();
            for (var s = 0, u = n.length; u > s; ++s) {
                var l = n[s],
                    c = l.length;
                if (c)
                    for (var h = l[0], f = h[0], d = h[1] / 2 + To / 4, g = Math.sin(d), p = Math.cos(d), m = 1;;) {
                        m === c && (m = 0), t = l[m];
                        var v = t[0],
                            y = t[1] / 2 + To / 4,
                            x = Math.sin(y),
                            b = Math.cos(y),
                            w = v - f,
                            M = w >= 0 ? 1 : -1,
                            S = M * w,
                            _ = S > To,
                            k = g * x;
                        if (xs.add(Math.atan2(k * M * Math.sin(S), p * b + k * Math.cos(S))), a += _ ? w + M * zo : w, _ ^ f >= e ^ v >= e) {
                            var C = vn(pn(h), pn(t));
                            bn(C);
                            var E = vn(r, C);
                            bn(E);
                            var A = (_ ^ w >= 0 ? -1 : 1) * nt(E[2]);
                            (i > A || i === A && (C[0] || C[1])) && (o += _ ^ w >= 0 ? 1 : -1)
                        }
                        if (!m++) break;
                        f = v, g = x, p = b, h = t
                    }
            }
            return (-Lo > a || Lo > a && 0 > xs) ^ 1 & o
        }

        function On(t) {
            function n(t, n) {
                return Math.cos(t) * Math.cos(n) > a
            }

            function e(t) {
                var e, a, u, l, c;
                return {
                    lineStart: function() {
                        l = u = !1, c = 1
                    },
                    point: function(h, f) {
                        var d, g = [h, f],
                            p = n(h, f),
                            m = o ? p ? 0 : r(h, f) : p ? r(h + (0 > h ? To : -To), f) : 0;
                        if (!e && (l = u = p) && t.lineStart(), p !== u && (d = i(e, g), (Mn(e, d) || Mn(g, d)) && (g[0] += Lo, g[1] += Lo, p = n(g[0], g[1]))), p !== u) c = 0, p ? (t.lineStart(), d = i(g, e), t.point(d[0], d[1])) : (d = i(e, g), t.point(d[0], d[1]), t.lineEnd()), e = d;
                        else if (s && e && o ^ p) {
                            var v;
                            m & a || !(v = i(g, e, !0)) || (c = 0, o ? (t.lineStart(), t.point(v[0][0], v[0][1]), t.point(v[1][0], v[1][1]), t.lineEnd()) : (t.point(v[1][0], v[1][1]), t.lineEnd(), t.lineStart(), t.point(v[0][0], v[0][1])))
                        }!p || e && Mn(e, g) || t.point(g[0], g[1]), e = g, u = p, a = m
                    },
                    lineEnd: function() {
                        u && t.lineEnd(), e = null
                    },
                    clean: function() {
                        return c | (l && u) << 1
                    }
                }
            }

            function i(t, n, e) {
                var i = pn(t),
                    r = pn(n),
                    o = [1, 0, 0],
                    s = vn(i, r),
                    u = mn(s, s),
                    l = s[0],
                    c = u - l * l;
                if (!c) return !e && t;
                var h = a * u / c,
                    f = -a * l / c,
                    d = vn(o, s),
                    g = xn(o, h),
                    p = xn(s, f);
                yn(g, p);
                var m = d,
                    v = mn(g, m),
                    y = mn(m, m),
                    x = v * v - y * (mn(g, g) - 1);
                if (!(0 > x)) {
                    var b = Math.sqrt(x),
                        w = xn(m, (-v - b) / y);
                    if (yn(w, g), w = wn(w), !e) return w;
                    var M, S = t[0],
                        _ = n[0],
                        k = t[1],
                        C = n[1];
                    S > _ && (M = S, S = _, _ = M);
                    var E = _ - S,
                        A = go(E - To) < Lo,
                        P = A || Lo > E;
                    if (!A && k > C && (M = k, k = C, C = M), P ? A ? k + C > 0 ^ w[1] < (go(w[0] - S) < Lo ? k : C) : k <= w[1] && w[1] <= C : E > To ^ (S <= w[0] && w[0] <= _)) {
                        var L = xn(m, (-v + b) / y);
                        return yn(L, g), [w, wn(L)]
                    }
                }
            }

            function r(n, e) {
                var i = o ? t : To - t,
                    r = 0;
                return -i > n ? r |= 1 : n > i && (r |= 2), -i > e ? r |= 4 : e > i && (r |= 8), r
            }
            var a = Math.cos(t),
                o = a > 0,
                s = go(a) > Lo,
                u = ge(t, 6 * Bo);
            return zn(n, e, u, o ? [0, -t] : [-To, t - To])
        }

        function Wn(t, n, e, i) {
            return function(r) {
                var a, o = r.a,
                    s = r.b,
                    u = o.x,
                    l = o.y,
                    c = s.x,
                    h = s.y,
                    f = 0,
                    d = 1,
                    g = c - u,
                    p = h - l;
                if (a = t - u, g || !(a > 0)) {
                    if (a /= g, 0 > g) {
                        if (f > a) return;
                        d > a && (d = a)
                    } else if (g > 0) {
                        if (a > d) return;
                        a > f && (f = a)
                    }
                    if (a = e - u, g || !(0 > a)) {
                        if (a /= g, 0 > g) {
                            if (a > d) return;
                            a > f && (f = a)
                        } else if (g > 0) {
                            if (f > a) return;
                            d > a && (d = a)
                        }
                        if (a = n - l, p || !(a > 0)) {
                            if (a /= p, 0 > p) {
                                if (f > a) return;
                                d > a && (d = a)
                            } else if (p > 0) {
                                if (a > d) return;
                                a > f && (f = a)
                            }
                            if (a = i - l, p || !(0 > a)) {
                                if (a /= p, 0 > p) {
                                    if (a > d) return;
                                    a > f && (f = a)
                                } else if (p > 0) {
                                    if (f > a) return;
                                    d > a && (d = a)
                                }
                                return f > 0 && (r.a = {
                                    x: u + f * g,
                                    y: l + f * p
                                }), 1 > d && (r.b = {
                                    x: u + d * g,
                                    y: l + d * p
                                }), r
                            }
                        }
                    }
                }
            }
        }

        function Hn(t, n, e, i) {
            function r(i, r) {
                return go(i[0] - t) < Lo ? r > 0 ? 0 : 3 : go(i[0] - e) < Lo ? r > 0 ? 2 : 1 : go(i[1] - n) < Lo ? r > 0 ? 1 : 0 : r > 0 ? 3 : 2
            }

            function a(t, n) {
                return o(t.x, n.x)
            }

            function o(t, n) {
                var e = r(t, 1),
                    i = r(n, 1);
                return e !== i ? e - i : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }
            return function(s) {
                function u(t) {
                    for (var n = 0, e = m.length, i = t[1], r = 0; e > r; ++r)
                        for (var a, o = 1, s = m[r], u = s.length, l = s[0]; u > o; ++o) a = s[o], l[1] <= i ? a[1] > i && K(l, a, t) > 0 && ++n : a[1] <= i && K(l, a, t) < 0 && --n, l = a;
                    return 0 !== n
                }

                function l(a, s, u, l) {
                    var c = 0,
                        h = 0;
                    if (null == a || (c = r(a, u)) !== (h = r(s, u)) || o(a, s) < 0 ^ u > 0) {
                        do l.point(0 === c || 3 === c ? t : e, c > 1 ? i : n); while ((c = (c + u + 4) % 4) !== h)
                    } else l.point(s[0], s[1])
                }

                function c(r, a) {
                    return r >= t && e >= r && a >= n && i >= a
                }

                function h(t, n) {
                    c(t, n) && s.point(t, n)
                }

                function f() {
                    P.point = g, m && m.push(v = []), _ = !0, S = !1, w = M = NaN
                }

                function d() {
                    p && (g(y, x), b && S && E.rejoin(), p.push(E.buffer())), P.point = h, S && s.lineEnd()
                }

                function g(t, n) {
                    t = Math.max(-Rs, Math.min(Rs, t)), n = Math.max(-Rs, Math.min(Rs, n));
                    var e = c(t, n);
                    if (m && v.push([t, n]), _) y = t, x = n, b = e, _ = !1, e && (s.lineStart(), s.point(t, n));
                    else if (e && S) s.point(t, n);
                    else {
                        var i = {
                            a: {
                                x: w,
                                y: M
                            },
                            b: {
                                x: t,
                                y: n
                            }
                        };
                        A(i) ? (S || (s.lineStart(), s.point(i.a.x, i.a.y)), s.point(i.b.x, i.b.y), e || s.lineEnd(), k = !1) : e && (s.lineStart(), s.point(t, n), k = !1)
                    }
                    w = t, M = n, S = e
                }
                var p, m, v, y, x, b, w, M, S, _, k, C = s,
                    E = Fn(),
                    A = Wn(t, n, e, i),
                    P = {
                        point: h,
                        lineStart: f,
                        lineEnd: d,
                        polygonStart: function() {
                            s = E, p = [], m = [], k = !0
                        },
                        polygonEnd: function() {
                            s = C, p = no.merge(p);
                            var n = u([t, i]),
                                e = k && n,
                                r = p.length;
                            (e || r) && (s.polygonStart(), e && (s.lineStart(), l(null, null, 1, s), s.lineEnd()), r && Ln(p, a, n, l, s), s.polygonEnd()), p = m = v = null
                        }
                    };
                return P
            }
        }

        function jn(t) {
            var n = 0,
                e = To / 3,
                i = oe(t),
                r = i(n, e);
            return r.parallels = function(t) {
                return arguments.length ? i(n = t[0] * To / 180, e = t[1] * To / 180) : [n / To * 180, e / To * 180]
            }, r
        }

        function Yn(t, n) {
            function e(t, n) {
                var e = Math.sqrt(a - 2 * r * Math.sin(n)) / r;
                return [e * Math.sin(t *= r), o - e * Math.cos(t)]
            }
            var i = Math.sin(t),
                r = (i + Math.sin(n)) / 2,
                a = 1 + i * (2 * r - i),
                o = Math.sqrt(a) / r;
            return e.invert = function(t, n) {
                var e = o - n;
                return [Math.atan2(t, e) / r, nt((a - (t * t + e * e) * r * r) / (2 * r))]
            }, e
        }

        function Un() {
            function t(t, n) {
                Bs += r * t - i * n, i = t, r = n
            }
            var n, e, i, r;
            Os.point = function(a, o) {
                Os.point = t, n = i = a, e = r = o
            }, Os.lineEnd = function() {
                t(n, e)
            }
        }

        function Vn(t, n) {
            Is > t && (Is = t), t > qs && (qs = t), $s > n && ($s = n), n > Ds && (Ds = n)
        }

        function Xn() {
            function t(t, n) {
                o.push("M", t, ",", n, a)
            }

            function n(t, n) {
                o.push("M", t, ",", n), s.point = e
            }

            function e(t, n) {
                o.push("L", t, ",", n)
            }

            function i() {
                s.point = t
            }

            function r() {
                o.push("Z")
            }
            var a = Zn(4.5),
                o = [],
                s = {
                    point: t,
                    lineStart: function() {
                        s.point = n
                    },
                    lineEnd: i,
                    polygonStart: function() {
                        s.lineEnd = r
                    },
                    polygonEnd: function() {
                        s.lineEnd = i, s.point = t
                    },
                    pointRadius: function(t) {
                        return a = Zn(t), s
                    },
                    result: function() {
                        if (o.length) {
                            var t = o.join("");
                            return o = [], t
                        }
                    }
                };
            return s
        }

        function Zn(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }

        function Gn(t, n) {
            Ss += t, _s += n, ++ks
        }

        function Jn() {
            function t(t, i) {
                var r = t - n,
                    a = i - e,
                    o = Math.sqrt(r * r + a * a);
                Cs += o * (n + t) / 2, Es += o * (e + i) / 2, As += o, Gn(n = t, e = i)
            }
            var n, e;
            Hs.point = function(i, r) {
                Hs.point = t, Gn(n = i, e = r)
            }
        }

        function Qn() {
            Hs.point = Gn
        }

        function Kn() {
            function t(t, n) {
                var e = t - i,
                    a = n - r,
                    o = Math.sqrt(e * e + a * a);
                Cs += o * (i + t) / 2, Es += o * (r + n) / 2, As += o, o = r * t - i * n, Ps += o * (i + t), Ls += o * (r + n), Ns += 3 * o, Gn(i = t, r = n)
            }
            var n, e, i, r;
            Hs.point = function(a, o) {
                Hs.point = t, Gn(n = i = a, e = r = o)
            }, Hs.lineEnd = function() {
                t(n, e)
            }
        }

        function te(t) {
            function n(n, e) {
                t.moveTo(n + o, e), t.arc(n, e, o, 0, zo)
            }

            function e(n, e) {
                t.moveTo(n, e), s.point = i
            }

            function i(n, e) {
                t.lineTo(n, e)
            }

            function r() {
                s.point = n
            }

            function a() {
                t.closePath()
            }
            var o = 4.5,
                s = {
                    point: n,
                    lineStart: function() {
                        s.point = e
                    },
                    lineEnd: r,
                    polygonStart: function() {
                        s.lineEnd = a
                    },
                    polygonEnd: function() {
                        s.lineEnd = r, s.point = n
                    },
                    pointRadius: function(t) {
                        return o = t, s
                    },
                    result: w
                };
            return s
        }

        function ne(t) {
            function n(t) {
                return (s ? i : e)(t)
            }

            function e(n) {
                return re(n, function(e, i) {
                    e = t(e, i), n.point(e[0], e[1])
                })
            }

            function i(n) {
                function e(e, i) {
                    e = t(e, i), n.point(e[0], e[1])
                }

                function i() {
                    x = NaN, _.point = a, n.lineStart()
                }

                function a(e, i) {
                    var a = pn([e, i]),
                        o = t(e, i);
                    r(x, b, y, w, M, S, x = o[0], b = o[1], y = e, w = a[0], M = a[1], S = a[2], s, n), n.point(x, b)
                }

                function o() {
                    _.point = e, n.lineEnd()
                }

                function u() {
                    i(), _.point = l, _.lineEnd = c
                }

                function l(t, n) {
                    a(h = t, f = n), d = x, g = b, p = w, m = M, v = S, _.point = a
                }

                function c() {
                    r(x, b, y, w, M, S, d, g, h, p, m, v, s, n), _.lineEnd = o, o()
                }
                var h, f, d, g, p, m, v, y, x, b, w, M, S, _ = {
                    point: e,
                    lineStart: i,
                    lineEnd: o,
                    polygonStart: function() {
                        n.polygonStart(), _.lineStart = u
                    },
                    polygonEnd: function() {
                        n.polygonEnd(), _.lineStart = i
                    }
                };
                return _
            }

            function r(n, e, i, s, u, l, c, h, f, d, g, p, m, v) {
                var y = c - n,
                    x = h - e,
                    b = y * y + x * x;
                if (b > 4 * a && m--) {
                    var w = s + d,
                        M = u + g,
                        S = l + p,
                        _ = Math.sqrt(w * w + M * M + S * S),
                        k = Math.asin(S /= _),
                        C = go(go(S) - 1) < Lo || go(i - f) < Lo ? (i + f) / 2 : Math.atan2(M, w),
                        E = t(C, k),
                        A = E[0],
                        P = E[1],
                        L = A - n,
                        N = P - e,
                        T = x * L - y * N;
                    (T * T / b > a || go((y * L + x * N) / b - .5) > .3 || o > s * d + u * g + l * p) && (r(n, e, i, s, u, l, A, P, C, w /= _, M /= _, S, m, v), v.point(A, P), r(A, P, C, w, M, S, c, h, f, d, g, p, m, v))
                }
            }
            var a = .5,
                o = Math.cos(30 * Bo),
                s = 16;
            return n.precision = function(t) {
                return arguments.length ? (s = (a = t * t) > 0 && 16, n) : Math.sqrt(a)
            }, n
        }

        function ee(t) {
            var n = ne(function(n, e) {
                return t([n * Io, e * Io])
            });
            return function(t) {
                return se(n(t))
            }
        }

        function ie(t) {
            this.stream = t
        }

        function re(t, n) {
            return {
                point: n,
                sphere: function() {
                    t.sphere()
                },
                lineStart: function() {
                    t.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd()
                }
            }
        }

        function ae(t) {
            return oe(function() {
                return t
            })()
        }

        function oe(t) {
            function n(t) {
                return t = s(t[0] * Bo, t[1] * Bo), [t[0] * f + u, l - t[1] * f]
            }

            function e(t) {
                return t = s.invert((t[0] - u) / f, (l - t[1]) / f), t && [t[0] * Io, t[1] * Io]
            }

            function i() {
                s = An(o = ce(v, x, b), a);
                var t = a(p, m);
                return u = d - t[0] * f, l = g + t[1] * f, r()
            }

            function r() {
                return c && (c.valid = !1, c = null), n
            }
            var a, o, s, u, l, c, h = ne(function(t, n) {
                    return t = a(t, n), [t[0] * f + u, l - t[1] * f]
                }),
                f = 150,
                d = 480,
                g = 250,
                p = 0,
                m = 0,
                v = 0,
                x = 0,
                b = 0,
                w = zs,
                M = y,
                S = null,
                _ = null;
            return n.stream = function(t) {
                    return c && (c.valid = !1), c = se(w(o, h(M(t)))), c.valid = !0, c
                }, n.clipAngle = function(t) {
                    return arguments.length ? (w = null == t ? (S = t, zs) : On((S = +t) * Bo), r()) : S
                }, n.clipExtent = function(t) {
                    return arguments.length ? (_ = t, M = t ? Hn(t[0][0], t[0][1], t[1][0], t[1][1]) : y, r()) : _
                }, n.scale = function(t) {
                    return arguments.length ? (f = +t, i()) : f
                }, n.translate = function(t) {
                    return arguments.length ? (d = +t[0], g = +t[1], i()) : [d, g]
                }, n.center = function(t) {
                    return arguments.length ? (p = t[0] % 360 * Bo, m = t[1] % 360 * Bo, i()) : [p * Io, m * Io]
                }, n.rotate = function(t) {
                    return arguments.length ? (v = t[0] % 360 * Bo, x = t[1] % 360 * Bo, b = t.length > 2 ? t[2] % 360 * Bo : 0, i()) : [v * Io, x * Io, b * Io]
                }, no.rebind(n, h, "precision"),
                function() {
                    return a = t.apply(this, arguments), n.invert = a.invert && e, i()
                }
        }

        function se(t) {
            return re(t, function(n, e) {
                t.point(n * Bo, e * Bo)
            })
        }

        function ue(t, n) {
            return [t, n]
        }

        function le(t, n) {
            return [t > To ? t - zo : -To > t ? t + zo : t, n]
        }

        function ce(t, n, e) {
            return t ? n || e ? An(fe(t), de(n, e)) : fe(t) : n || e ? de(n, e) : le
        }

        function he(t) {
            return function(n, e) {
                return n += t, [n > To ? n - zo : -To > n ? n + zo : n, e]
            }
        }

        function fe(t) {
            var n = he(t);
            return n.invert = he(-t), n
        }

        function de(t, n) {
            function e(t, n) {
                var e = Math.cos(n),
                    s = Math.cos(t) * e,
                    u = Math.sin(t) * e,
                    l = Math.sin(n),
                    c = l * i + s * r;
                return [Math.atan2(u * a - c * o, s * i - l * r), nt(c * a + u * o)]
            }
            var i = Math.cos(t),
                r = Math.sin(t),
                a = Math.cos(n),
                o = Math.sin(n);
            return e.invert = function(t, n) {
                var e = Math.cos(n),
                    s = Math.cos(t) * e,
                    u = Math.sin(t) * e,
                    l = Math.sin(n),
                    c = l * a - u * o;
                return [Math.atan2(u * a + l * o, s * i + c * r), nt(c * i - s * r)]
            }, e
        }

        function ge(t, n) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return function(r, a, o, s) {
                var u = o * n;
                null != r ? (r = pe(e, r), a = pe(e, a), (o > 0 ? a > r : r > a) && (r += o * zo)) : (r = t + o * zo, a = t - .5 * u);
                for (var l, c = r; o > 0 ? c > a : a > c; c -= u) s.point((l = wn([e, -i * Math.cos(c), -i * Math.sin(c)]))[0], l[1])
            }
        }

        function pe(t, n) {
            var e = pn(n);
            e[0] -= t, bn(e);
            var i = tt(-e[1]);
            return ((-e[2] < 0 ? -i : i) + 2 * Math.PI - Lo) % (2 * Math.PI)
        }

        function me(t, n, e) {
            var i = no.range(t, n - Lo, e).concat(n);
            return function(t) {
                return i.map(function(n) {
                    return [t, n]
                })
            }
        }

        function ve(t, n, e) {
            var i = no.range(t, n - Lo, e).concat(n);
            return function(t) {
                return i.map(function(n) {
                    return [n, t]
                })
            }
        }

        function ye(t) {
            return t.source
        }

        function xe(t) {
            return t.target
        }

        function be(t, n, e, i) {
            var r = Math.cos(n),
                a = Math.sin(n),
                o = Math.cos(i),
                s = Math.sin(i),
                u = r * Math.cos(t),
                l = r * Math.sin(t),
                c = o * Math.cos(e),
                h = o * Math.sin(e),
                f = 2 * Math.asin(Math.sqrt(at(i - n) + r * o * at(e - t))),
                d = 1 / Math.sin(f),
                g = f ? function(t) {
                    var n = Math.sin(t *= f) * d,
                        e = Math.sin(f - t) * d,
                        i = e * u + n * c,
                        r = e * l + n * h,
                        o = e * a + n * s;
                    return [Math.atan2(r, i) * Io, Math.atan2(o, Math.sqrt(i * i + r * r)) * Io]
                } : function() {
                    return [t * Io, n * Io]
                };
            return g.distance = f, g
        }

        function we() {
            function t(t, r) {
                var a = Math.sin(r *= Bo),
                    o = Math.cos(r),
                    s = go((t *= Bo) - n),
                    u = Math.cos(s);
                js += Math.atan2(Math.sqrt((s = o * Math.sin(s)) * s + (s = i * a - e * o * u) * s), e * a + i * o * u), n = t, e = a, i = o
            }
            var n, e, i;
            Ys.point = function(r, a) {
                n = r * Bo, e = Math.sin(a *= Bo), i = Math.cos(a), Ys.point = t
            }, Ys.lineEnd = function() {
                Ys.point = Ys.lineEnd = w
            }
        }

        function Me(t, n) {
            function e(n, e) {
                var i = Math.cos(n),
                    r = Math.cos(e),
                    a = t(i * r);
                return [a * r * Math.sin(n), a * Math.sin(e)]
            }
            return e.invert = function(t, e) {
                var i = Math.sqrt(t * t + e * e),
                    r = n(i),
                    a = Math.sin(r),
                    o = Math.cos(r);
                return [Math.atan2(t * a, i * o), Math.asin(i && e * a / i)]
            }, e
        }

        function Se(t, n) {
            function e(t, n) {
                o > 0 ? -Fo + Lo > n && (n = -Fo + Lo) : n > Fo - Lo && (n = Fo - Lo);
                var e = o / Math.pow(r(n), a);
                return [e * Math.sin(a * t), o - e * Math.cos(a * t)]
            }
            var i = Math.cos(t),
                r = function(t) {
                    return Math.tan(To / 4 + t / 2)
                },
                a = t === n ? Math.sin(t) : Math.log(i / Math.cos(n)) / Math.log(r(n) / r(t)),
                o = i * Math.pow(r(t), a) / a;
            return a ? (e.invert = function(t, n) {
                var e = o - n,
                    i = Q(a) * Math.sqrt(t * t + e * e);
                return [Math.atan2(t, e) / a, 2 * Math.atan(Math.pow(o / i, 1 / a)) - Fo]
            }, e) : ke
        }

        function _e(t, n) {
            function e(t, n) {
                var e = a - n;
                return [e * Math.sin(r * t), a - e * Math.cos(r * t)]
            }
            var i = Math.cos(t),
                r = t === n ? Math.sin(t) : (i - Math.cos(n)) / (n - t),
                a = i / r + t;
            return go(r) < Lo ? ue : (e.invert = function(t, n) {
                var e = a - n;
                return [Math.atan2(t, e) / r, a - Q(r) * Math.sqrt(t * t + e * e)]
            }, e)
        }

        function ke(t, n) {
            return [t, Math.log(Math.tan(To / 4 + n / 2))]
        }

        function Ce(t) {
            var n, e = ae(t),
                i = e.scale,
                r = e.translate,
                a = e.clipExtent;
            return e.scale = function() {
                var t = i.apply(e, arguments);
                return t === e ? n ? e.clipExtent(null) : e : t
            }, e.translate = function() {
                var t = r.apply(e, arguments);
                return t === e ? n ? e.clipExtent(null) : e : t
            }, e.clipExtent = function(t) {
                var o = a.apply(e, arguments);
                if (o === e) {
                    if (n = null == t) {
                        var s = To * i(),
                            u = r();
                        a([
                            [u[0] - s, u[1] - s],
                            [u[0] + s, u[1] + s]
                        ])
                    }
                } else n && (o = null);
                return o
            }, e.clipExtent(null)
        }

        function Ee(t, n) {
            return [Math.log(Math.tan(To / 4 + n / 2)), -t]
        }

        function Ae(t) {
            return t[0]
        }

        function Pe(t) {
            return t[1]
        }

        function Le(t) {
            for (var n = t.length, e = [0, 1], i = 2, r = 2; n > r; r++) {
                for (; i > 1 && K(t[e[i - 2]], t[e[i - 1]], t[r]) <= 0;) --i;
                e[i++] = r
            }
            return e.slice(0, i)
        }

        function Ne(t, n) {
            return t[0] - n[0] || t[1] - n[1]
        }

        function Te(t, n, e) {
            return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0])
        }

        function ze(t, n, e, i) {
            var r = t[0],
                a = e[0],
                o = n[0] - r,
                s = i[0] - a,
                u = t[1],
                l = e[1],
                c = n[1] - u,
                h = i[1] - l,
                f = (s * (u - l) - h * (r - a)) / (h * o - s * c);
            return [r + f * o, u + f * c]
        }

        function Re(t) {
            var n = t[0],
                e = t[t.length - 1];
            return !(n[0] - e[0] || n[1] - e[1])
        }

        function Fe() {
            ei(this), this.edge = this.site = this.circle = null
        }

        function Be(t) {
            var n = iu.pop() || new Fe;
            return n.site = t, n
        }

        function Ie(t) {
            Ve(t), tu.remove(t), iu.push(t), ei(t)
        }

        function $e(t) {
            var n = t.circle,
                e = n.x,
                i = n.cy,
                r = {
                    x: e,
                    y: i
                },
                a = t.P,
                o = t.N,
                s = [t];
            Ie(t);
            for (var u = a; u.circle && go(e - u.circle.x) < Lo && go(i - u.circle.cy) < Lo;) a = u.P, s.unshift(u), Ie(u), u = a;
            s.unshift(u), Ve(u);
            for (var l = o; l.circle && go(e - l.circle.x) < Lo && go(i - l.circle.cy) < Lo;) o = l.N, s.push(l), Ie(l), l = o;
            s.push(l), Ve(l);
            var c, h = s.length;
            for (c = 1; h > c; ++c) l = s[c], u = s[c - 1], Ke(l.edge, u.site, l.site, r);
            u = s[0], l = s[h - 1], l.edge = Je(u.site, l.site, null, r), Ue(u), Ue(l)
        }

        function qe(t) {
            for (var n, e, i, r, a = t.x, o = t.y, s = tu._; s;)
                if (i = De(s, o) - a, i > Lo) s = s.L;
                else {
                    if (r = a - Oe(s, o), !(r > Lo)) {
                        i > -Lo ? (n = s.P, e = s) : r > -Lo ? (n = s, e = s.N) : n = e = s;
                        break
                    }
                    if (!s.R) {
                        n = s;
                        break
                    }
                    s = s.R
                }
            var u = Be(t);
            if (tu.insert(n, u), n || e) {
                if (n === e) return Ve(n), e = Be(n.site), tu.insert(u, e), u.edge = e.edge = Je(n.site, u.site), Ue(n), void Ue(e);
                if (!e) return void(u.edge = Je(n.site, u.site));
                Ve(n), Ve(e);
                var l = n.site,
                    c = l.x,
                    h = l.y,
                    f = t.x - c,
                    d = t.y - h,
                    g = e.site,
                    p = g.x - c,
                    m = g.y - h,
                    v = 2 * (f * m - d * p),
                    y = f * f + d * d,
                    x = p * p + m * m,
                    b = {
                        x: (m * y - d * x) / v + c,
                        y: (f * x - p * y) / v + h
                    };
                Ke(e.edge, l, g, b), u.edge = Je(l, t, null, b), e.edge = Je(t, g, null, b), Ue(n), Ue(e)
            }
        }

        function De(t, n) {
            var e = t.site,
                i = e.x,
                r = e.y,
                a = r - n;
            if (!a) return i;
            var o = t.P;
            if (!o) return -1 / 0;
            e = o.site;
            var s = e.x,
                u = e.y,
                l = u - n;
            if (!l) return s;
            var c = s - i,
                h = 1 / a - 1 / l,
                f = c / l;
            return h ? (-f + Math.sqrt(f * f - 2 * h * (c * c / (-2 * l) - u + l / 2 + r - a / 2))) / h + i : (i + s) / 2
        }

        function Oe(t, n) {
            var e = t.N;
            if (e) return De(e, n);
            var i = t.site;
            return i.y === n ? i.x : 1 / 0
        }

        function We(t) {
            this.site = t, this.edges = []
        }

        function He(t) {
            for (var n, e, i, r, a, o, s, u, l, c, h = t[0][0], f = t[1][0], d = t[0][1], g = t[1][1], p = Ks, m = p.length; m--;)
                if (a = p[m], a && a.prepare())
                    for (s = a.edges, u = s.length, o = 0; u > o;) c = s[o].end(), i = c.x, r = c.y, l = s[++o % u].start(), n = l.x, e = l.y, (go(i - n) > Lo || go(r - e) > Lo) && (s.splice(o, 0, new ti(Qe(a.site, c, go(i - h) < Lo && g - r > Lo ? {
                        x: h,
                        y: go(n - h) < Lo ? e : g
                    } : go(r - g) < Lo && f - i > Lo ? {
                        x: go(e - g) < Lo ? n : f,
                        y: g
                    } : go(i - f) < Lo && r - d > Lo ? {
                        x: f,
                        y: go(n - f) < Lo ? e : d
                    } : go(r - d) < Lo && i - h > Lo ? {
                        x: go(e - d) < Lo ? n : h,
                        y: d
                    } : null), a.site, null)), ++u)
        }

        function je(t, n) {
            return n.angle - t.angle
        }

        function Ye() {
            ei(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function Ue(t) {
            var n = t.P,
                e = t.N;
            if (n && e) {
                var i = n.site,
                    r = t.site,
                    a = e.site;
                if (i !== a) {
                    var o = r.x,
                        s = r.y,
                        u = i.x - o,
                        l = i.y - s,
                        c = a.x - o,
                        h = a.y - s,
                        f = 2 * (u * h - l * c);
                    if (!(f >= -No)) {
                        var d = u * u + l * l,
                            g = c * c + h * h,
                            p = (h * d - l * g) / f,
                            m = (u * g - c * d) / f,
                            h = m + s,
                            v = ru.pop() || new Ye;
                        v.arc = t, v.site = r, v.x = p + o, v.y = h + Math.sqrt(p * p + m * m), v.cy = h, t.circle = v;
                        for (var y = null, x = eu._; x;)
                            if (v.y < x.y || v.y === x.y && v.x <= x.x) {
                                if (!x.L) {
                                    y = x.P;
                                    break
                                }
                                x = x.L
                            } else {
                                if (!x.R) {
                                    y = x;
                                    break
                                }
                                x = x.R
                            }
                        eu.insert(y, v), y || (nu = v)
                    }
                }
            }
        }

        function Ve(t) {
            var n = t.circle;
            n && (n.P || (nu = n.N), eu.remove(n), ru.push(n), ei(n), t.circle = null)
        }

        function Xe(t) {
            for (var n, e = Qs, i = Wn(t[0][0], t[0][1], t[1][0], t[1][1]), r = e.length; r--;) n = e[r], (!Ze(n, t) || !i(n) || go(n.a.x - n.b.x) < Lo && go(n.a.y - n.b.y) < Lo) && (n.a = n.b = null, e.splice(r, 1))
        }

        function Ze(t, n) {
            var e = t.b;
            if (e) return !0;
            var i, r, a = t.a,
                o = n[0][0],
                s = n[1][0],
                u = n[0][1],
                l = n[1][1],
                c = t.l,
                h = t.r,
                f = c.x,
                d = c.y,
                g = h.x,
                p = h.y,
                m = (f + g) / 2,
                v = (d + p) / 2;
            if (p === d) {
                if (o > m || m >= s) return;
                if (f > g) {
                    if (a) {
                        if (a.y >= l) return
                    } else a = {
                        x: m,
                        y: u
                    };
                    e = {
                        x: m,
                        y: l
                    }
                } else {
                    if (a) {
                        if (a.y < u) return
                    } else a = {
                        x: m,
                        y: l
                    };
                    e = {
                        x: m,
                        y: u
                    }
                }
            } else if (i = (f - g) / (p - d), r = v - i * m, -1 > i || i > 1)
                if (f > g) {
                    if (a) {
                        if (a.y >= l) return
                    } else a = {
                        x: (u - r) / i,
                        y: u
                    };
                    e = {
                        x: (l - r) / i,
                        y: l
                    }
                } else {
                    if (a) {
                        if (a.y < u) return
                    } else a = {
                        x: (l - r) / i,
                        y: l
                    };
                    e = {
                        x: (u - r) / i,
                        y: u
                    }
                } else if (p > d) {
                if (a) {
                    if (a.x >= s) return
                } else a = {
                    x: o,
                    y: i * o + r
                };
                e = {
                    x: s,
                    y: i * s + r
                }
            } else {
                if (a) {
                    if (a.x < o) return
                } else a = {
                    x: s,
                    y: i * s + r
                };
                e = {
                    x: o,
                    y: i * o + r
                }
            }
            return t.a = a, t.b = e, !0
        }

        function Ge(t, n) {
            this.l = t, this.r = n, this.a = this.b = null
        }

        function Je(t, n, e, i) {
            var r = new Ge(t, n);
            return Qs.push(r), e && Ke(r, t, n, e), i && Ke(r, n, t, i), Ks[t.i].edges.push(new ti(r, t, n)), Ks[n.i].edges.push(new ti(r, n, t)), r
        }

        function Qe(t, n, e) {
            var i = new Ge(t, null);
            return i.a = n, i.b = e, Qs.push(i), i
        }

        function Ke(t, n, e, i) {
            t.a || t.b ? t.l === e ? t.b = i : t.a = i : (t.a = i, t.l = n, t.r = e)
        }

        function ti(t, n, e) {
            var i = t.a,
                r = t.b;
            this.edge = t, this.site = n, this.angle = e ? Math.atan2(e.y - n.y, e.x - n.x) : t.l === n ? Math.atan2(r.x - i.x, i.y - r.y) : Math.atan2(i.x - r.x, r.y - i.y)
        }

        function ni() {
            this._ = null
        }

        function ei(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }

        function ii(t, n) {
            var e = n,
                i = n.R,
                r = e.U;
            r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.R = i.L, e.R && (e.R.U = e), i.L = e
        }

        function ri(t, n) {
            var e = n,
                i = n.L,
                r = e.U;
            r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.L = i.R, e.L && (e.L.U = e), i.R = e
        }

        function ai(t) {
            for (; t.L;) t = t.L;
            return t
        }

        function oi(t, n) {
            var e, i, r, a = t.sort(si).pop();
            for (Qs = [], Ks = new Array(t.length), tu = new ni, eu = new ni;;)
                if (r = nu, a && (!r || a.y < r.y || a.y === r.y && a.x < r.x))(a.x !== e || a.y !== i) && (Ks[a.i] = new We(a), qe(a), e = a.x, i = a.y), a = t.pop();
                else {
                    if (!r) break;
                    $e(r.arc)
                }
            n && (Xe(n), He(n));
            var o = {
                cells: Ks,
                edges: Qs
            };
            return tu = eu = Qs = Ks = null, o
        }

        function si(t, n) {
            return n.y - t.y || n.x - t.x
        }

        function ui(t, n, e) {
            return (t.x - e.x) * (n.y - t.y) - (t.x - n.x) * (e.y - t.y)
        }

        function li(t) {
            return t.x
        }

        function ci(t) {
            return t.y
        }

        function hi() {
            return {
                leaf: !0,
                nodes: [],
                point: null,
                x: null,
                y: null
            }
        }

        function fi(t, n, e, i, r, a) {
            if (!t(n, e, i, r, a)) {
                var o = .5 * (e + r),
                    s = .5 * (i + a),
                    u = n.nodes;
                u[0] && fi(t, u[0], e, i, o, s), u[1] && fi(t, u[1], o, i, r, s), u[2] && fi(t, u[2], e, s, o, a), u[3] && fi(t, u[3], o, s, r, a)
            }
        }

        function di(t, n, e, i, r, a, o) {
            var s, u = 1 / 0;
            return function l(t, c, h, f, d) {
                if (!(c > a || h > o || i > f || r > d)) {
                    if (g = t.point) {
                        var g, p = n - t.x,
                            m = e - t.y,
                            v = p * p + m * m;
                        if (u > v) {
                            var y = Math.sqrt(u = v);
                            i = n - y, r = e - y, a = n + y, o = e + y, s = g
                        }
                    }
                    for (var x = t.nodes, b = .5 * (c + f), w = .5 * (h + d), M = n >= b, S = e >= w, _ = S << 1 | M, k = _ + 4; k > _; ++_)
                        if (t = x[3 & _]) switch (3 & _) {
                            case 0:
                                l(t, c, h, b, w);
                                break;
                            case 1:
                                l(t, b, h, f, w);
                                break;
                            case 2:
                                l(t, c, w, b, d);
                                break;
                            case 3:
                                l(t, b, w, f, d)
                        }
                }
            }(t, i, r, a, o), s
        }

        function gi(t, n) {
            t = no.rgb(t), n = no.rgb(n);
            var e = t.r,
                i = t.g,
                r = t.b,
                a = n.r - e,
                o = n.g - i,
                s = n.b - r;
            return function(t) {
                return "#" + bt(Math.round(e + a * t)) + bt(Math.round(i + o * t)) + bt(Math.round(r + s * t))
            }
        }

        function pi(t, n) {
            var e, i = {},
                r = {};
            for (e in t) e in n ? i[e] = yi(t[e], n[e]) : r[e] = t[e];
            for (e in n) e in t || (r[e] = n[e]);
            return function(t) {
                for (e in i) r[e] = i[e](t);
                return r
            }
        }

        function mi(t, n) {
            return t = +t, n = +n,
                function(e) {
                    return t * (1 - e) + n * e
                }
        }

        function vi(t, n) {
            var e, i, r, a = ou.lastIndex = su.lastIndex = 0,
                o = -1,
                s = [],
                u = [];
            for (t += "", n += "";
                (e = ou.exec(t)) && (i = su.exec(n));)(r = i.index) > a && (r = n.slice(a, r), s[o] ? s[o] += r : s[++o] = r), (e = e[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({
                i: o,
                x: mi(e, i)
            })), a = su.lastIndex;
            return a < n.length && (r = n.slice(a), s[o] ? s[o] += r : s[++o] = r), s.length < 2 ? u[0] ? (n = u[0].x, function(t) {
                return n(t) + ""
            }) : function() {
                return n
            } : (n = u.length, function(t) {
                for (var e, i = 0; n > i; ++i) s[(e = u[i]).i] = e.x(t);
                return s.join("")
            })
        }

        function yi(t, n) {
            for (var e, i = no.interpolators.length; --i >= 0 && !(e = no.interpolators[i](t, n)););
            return e
        }

        function xi(t, n) {
            var e, i = [],
                r = [],
                a = t.length,
                o = n.length,
                s = Math.min(t.length, n.length);
            for (e = 0; s > e; ++e) i.push(yi(t[e], n[e]));
            for (; a > e; ++e) r[e] = t[e];
            for (; o > e; ++e) r[e] = n[e];
            return function(t) {
                for (e = 0; s > e; ++e) r[e] = i[e](t);
                return r
            }
        }

        function bi(t) {
            return function(n) {
                return 0 >= n ? 0 : n >= 1 ? 1 : t(n)
            }
        }

        function wi(t) {
            return function(n) {
                return 1 - t(1 - n)
            }
        }

        function Mi(t) {
            return function(n) {
                return .5 * (.5 > n ? t(2 * n) : 2 - t(2 - 2 * n))
            }
        }

        function Si(t) {
            return t * t
        }

        function _i(t) {
            return t * t * t
        }

        function ki(t) {
            if (0 >= t) return 0;
            if (t >= 1) return 1;
            var n = t * t,
                e = n * t;
            return 4 * (.5 > t ? e : 3 * (t - n) + e - .75)
        }

        function Ci(t) {
            return function(n) {
                return Math.pow(n, t)
            }
        }

        function Ei(t) {
            return 1 - Math.cos(t * Fo)
        }

        function Ai(t) {
            return Math.pow(2, 10 * (t - 1))
        }

        function Pi(t) {
            return 1 - Math.sqrt(1 - t * t)
        }

        function Li(t, n) {
            var e;
            return arguments.length < 2 && (n = .45), arguments.length ? e = n / zo * Math.asin(1 / t) : (t = 1, e = n / 4),
                function(i) {
                    return 1 + t * Math.pow(2, -10 * i) * Math.sin((i - e) * zo / n)
                }
        }

        function Ni(t) {
            return t || (t = 1.70158),
                function(n) {
                    return n * n * ((t + 1) * n - t)
                }
        }

        function Ti(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }

        function zi(t, n) {
            t = no.hcl(t), n = no.hcl(n);
            var e = t.h,
                i = t.c,
                r = t.l,
                a = n.h - e,
                o = n.c - i,
                s = n.l - r;
            return isNaN(o) && (o = 0, i = isNaN(i) ? n.c : i), isNaN(a) ? (a = 0, e = isNaN(e) ? n.h : e) : a > 180 ? a -= 360 : -180 > a && (a += 360),
                function(t) {
                    return ct(e + a * t, i + o * t, r + s * t) + ""
                }
        }

        function Ri(t, n) {
            t = no.hsl(t), n = no.hsl(n);
            var e = t.h,
                i = t.s,
                r = t.l,
                a = n.h - e,
                o = n.s - i,
                s = n.l - r;
            return isNaN(o) && (o = 0, i = isNaN(i) ? n.s : i), isNaN(a) ? (a = 0, e = isNaN(e) ? n.h : e) : a > 180 ? a -= 360 : -180 > a && (a += 360),
                function(t) {
                    return ut(e + a * t, i + o * t, r + s * t) + ""
                }
        }

        function Fi(t, n) {
            t = no.lab(t), n = no.lab(n);
            var e = t.l,
                i = t.a,
                r = t.b,
                a = n.l - e,
                o = n.a - i,
                s = n.b - r;
            return function(t) {
                return ft(e + a * t, i + o * t, r + s * t) + ""
            }
        }

        function Bi(t, n) {
            return n -= t,
                function(e) {
                    return Math.round(t + n * e)
                }
        }

        function Ii(t) {
            var n = [t.a, t.b],
                e = [t.c, t.d],
                i = qi(n),
                r = $i(n, e),
                a = qi(Di(e, n, -r)) || 0;
            n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, i *= -1, r *= -1), this.rotate = (i ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Io, this.translate = [t.e, t.f], this.scale = [i, a], this.skew = a ? Math.atan2(r, a) * Io : 0
        }

        function $i(t, n) {
            return t[0] * n[0] + t[1] * n[1]
        }

        function qi(t) {
            var n = Math.sqrt($i(t, t));
            return n && (t[0] /= n, t[1] /= n), n
        }

        function Di(t, n, e) {
            return t[0] += e * n[0], t[1] += e * n[1], t
        }

        function Oi(t, n) {
            var e, i = [],
                r = [],
                a = no.transform(t),
                o = no.transform(n),
                s = a.translate,
                u = o.translate,
                l = a.rotate,
                c = o.rotate,
                h = a.skew,
                f = o.skew,
                d = a.scale,
                g = o.scale;
            return s[0] != u[0] || s[1] != u[1] ? (i.push("translate(", null, ",", null, ")"), r.push({
                    i: 1,
                    x: mi(s[0], u[0])
                }, {
                    i: 3,
                    x: mi(s[1], u[1])
                })) : i.push(u[0] || u[1] ? "translate(" + u + ")" : ""), l != c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), r.push({
                    i: i.push(i.pop() + "rotate(", null, ")") - 2,
                    x: mi(l, c)
                })) : c && i.push(i.pop() + "rotate(" + c + ")"), h != f ? r.push({
                    i: i.push(i.pop() + "skewX(", null, ")") - 2,
                    x: mi(h, f)
                }) : f && i.push(i.pop() + "skewX(" + f + ")"), d[0] != g[0] || d[1] != g[1] ? (e = i.push(i.pop() + "scale(", null, ",", null, ")"), r.push({
                    i: e - 4,
                    x: mi(d[0], g[0])
                }, {
                    i: e - 2,
                    x: mi(d[1], g[1])
                })) : (1 != g[0] || 1 != g[1]) && i.push(i.pop() + "scale(" + g + ")"), e = r.length,
                function(t) {
                    for (var n, a = -1; ++a < e;) i[(n = r[a]).i] = n.x(t);
                    return i.join("")
                }
        }

        function Wi(t, n) {
            return n = (n -= t = +t) || 1 / n,
                function(e) {
                    return (e - t) / n
                }
        }

        function Hi(t, n) {
            return n = (n -= t = +t) || 1 / n,
                function(e) {
                    return Math.max(0, Math.min(1, (e - t) / n))
                }
        }

        function ji(t) {
            for (var n = t.source, e = t.target, i = Ui(n, e), r = [n]; n !== i;) n = n.parent, r.push(n);
            for (var a = r.length; e !== i;) r.splice(a, 0, e), e = e.parent;
            return r
        }

        function Yi(t) {
            for (var n = [], e = t.parent; null != e;) n.push(t), t = e, e = e.parent;
            return n.push(t), n
        }

        function Ui(t, n) {
            if (t === n) return t;
            for (var e = Yi(t), i = Yi(n), r = e.pop(), a = i.pop(), o = null; r === a;) o = r, r = e.pop(), a = i.pop();
            return o
        }

        function Vi(t) {
            t.fixed |= 2
        }

        function Xi(t) {
            t.fixed &= -7
        }

        function Zi(t) {
            t.fixed |= 4, t.px = t.x, t.py = t.y
        }

        function Gi(t) {
            t.fixed &= -5
        }

        function Ji(t, n, e) {
            var i = 0,
                r = 0;
            if (t.charge = 0, !t.leaf)
                for (var a, o = t.nodes, s = o.length, u = -1; ++u < s;) a = o[u], null != a && (Ji(a, n, e), t.charge += a.charge, i += a.charge * a.cx, r += a.charge * a.cy);
            if (t.point) {
                t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                var l = n * e[t.point.index];
                t.charge += t.pointCharge = l, i += l * t.point.x, r += l * t.point.y
            }
            t.cx = i / t.charge, t.cy = r / t.charge
        }

        function Qi(t, n) {
            return no.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = rr, t
        }

        function Ki(t, n) {
            for (var e = [t]; null != (t = e.pop());)
                if (n(t), (r = t.children) && (i = r.length))
                    for (var i, r; --i >= 0;) e.push(r[i])
        }

        function tr(t, n) {
            for (var e = [t], i = []; null != (t = e.pop());)
                if (i.push(t), (a = t.children) && (r = a.length))
                    for (var r, a, o = -1; ++o < r;) e.push(a[o]);
            for (; null != (t = i.pop());) n(t)
        }

        function nr(t) {
            return t.children
        }

        function er(t) {
            return t.value
        }

        function ir(t, n) {
            return n.value - t.value
        }

        function rr(t) {
            return no.merge(t.map(function(t) {
                return (t.children || []).map(function(n) {
                    return {
                        source: t,
                        target: n
                    }
                })
            }))
        }

        function ar(t) {
            return t.x
        }

        function or(t) {
            return t.y
        }

        function sr(t, n, e) {
            t.y0 = n, t.y = e
        }

        function ur(t) {
            return no.range(t.length)
        }

        function lr(t) {
            for (var n = -1, e = t[0].length, i = []; ++n < e;) i[n] = 0;
            return i
        }

        function cr(t) {
            for (var n, e = 1, i = 0, r = t[0][1], a = t.length; a > e; ++e)(n = t[e][1]) > r && (i = e, r = n);
            return i
        }

        function hr(t) {
            return t.reduce(fr, 0)
        }

        function fr(t, n) {
            return t + n[1]
        }

        function dr(t, n) {
            return gr(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1))
        }

        function gr(t, n) {
            for (var e = -1, i = +t[0], r = (t[1] - i) / n, a = []; ++e <= n;) a[e] = r * e + i;
            return a
        }

        function pr(t) {
            return [no.min(t), no.max(t)]
        }

        function mr(t, n) {
            return t.value - n.value
        }

        function vr(t, n) {
            var e = t._pack_next;
            t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n
        }

        function yr(t, n) {
            t._pack_next = n, n._pack_prev = t
        }

        function xr(t, n) {
            var e = n.x - t.x,
                i = n.y - t.y,
                r = t.r + n.r;
            return .999 * r * r > e * e + i * i
        }

        function br(t) {
            function n(t) {
                c = Math.min(t.x - t.r, c), h = Math.max(t.x + t.r, h), f = Math.min(t.y - t.r, f), d = Math.max(t.y + t.r, d)
            }
            if ((e = t.children) && (l = e.length)) {
                var e, i, r, a, o, s, u, l, c = 1 / 0,
                    h = -1 / 0,
                    f = 1 / 0,
                    d = -1 / 0;
                if (e.forEach(wr), i = e[0], i.x = -i.r, i.y = 0, n(i), l > 1 && (r = e[1], r.x = r.r, r.y = 0, n(r), l > 2))
                    for (a = e[2], _r(i, r, a), n(a), vr(i, a), i._pack_prev = a, vr(a, r), r = i._pack_next, o = 3; l > o; o++) {
                        _r(i, r, a = e[o]);
                        var g = 0,
                            p = 1,
                            m = 1;
                        for (s = r._pack_next; s !== r; s = s._pack_next, p++)
                            if (xr(s, a)) {
                                g = 1;
                                break
                            }
                        if (1 == g)
                            for (u = i._pack_prev; u !== s._pack_prev && !xr(u, a); u = u._pack_prev, m++);
                        g ? (m > p || p == m && r.r < i.r ? yr(i, r = s) : yr(i = u, r), o--) : (vr(i, a), r = a, n(a))
                    }
                var v = (c + h) / 2,
                    y = (f + d) / 2,
                    x = 0;
                for (o = 0; l > o; o++) a = e[o], a.x -= v, a.y -= y, x = Math.max(x, a.r + Math.sqrt(a.x * a.x + a.y * a.y));
                t.r = x, e.forEach(Mr)
            }
        }

        function wr(t) {
            t._pack_next = t._pack_prev = t
        }

        function Mr(t) {
            delete t._pack_next, delete t._pack_prev
        }

        function Sr(t, n, e, i) {
            var r = t.children;
            if (t.x = n += i * t.x, t.y = e += i * t.y, t.r *= i, r)
                for (var a = -1, o = r.length; ++a < o;) Sr(r[a], n, e, i)
        }

        function _r(t, n, e) {
            var i = t.r + e.r,
                r = n.x - t.x,
                a = n.y - t.y;
            if (i && (r || a)) {
                var o = n.r + e.r,
                    s = r * r + a * a;
                o *= o, i *= i;
                var u = .5 + (i - o) / (2 * s),
                    l = Math.sqrt(Math.max(0, 2 * o * (i + s) - (i -= s) * i - o * o)) / (2 * s);
                e.x = t.x + u * r + l * a, e.y = t.y + u * a - l * r
            } else e.x = t.x + i, e.y = t.y
        }

        function kr(t, n) {
            return t.parent == n.parent ? 1 : 2
        }

        function Cr(t) {
            var n = t.children;
            return n.length ? n[0] : t.t
        }

        function Er(t) {
            var n, e = t.children;
            return (n = e.length) ? e[n - 1] : t.t
        }

        function Ar(t, n, e) {
            var i = e / (n.i - t.i);
            n.c -= i, n.s += e, t.c += i, n.z += e, n.m += e
        }

        function Pr(t) {
            for (var n, e = 0, i = 0, r = t.children, a = r.length; --a >= 0;) n = r[a], n.z += e, n.m += e, e += n.s + (i += n.c)
        }

        function Lr(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }

        function Nr(t) {
            return 1 + no.max(t, function(t) {
                return t.y
            })
        }

        function Tr(t) {
            return t.reduce(function(t, n) {
                return t + n.x
            }, 0) / t.length
        }

        function zr(t) {
            var n = t.children;
            return n && n.length ? zr(n[0]) : t
        }

        function Rr(t) {
            var n, e = t.children;
            return e && (n = e.length) ? Rr(e[n - 1]) : t
        }

        function Fr(t) {
            return {
                x: t.x,
                y: t.y,
                dx: t.dx,
                dy: t.dy
            }
        }

        function Br(t, n) {
            var e = t.x + n[3],
                i = t.y + n[0],
                r = t.dx - n[1] - n[3],
                a = t.dy - n[0] - n[2];
            return 0 > r && (e += r / 2, r = 0), 0 > a && (i += a / 2, a = 0), {
                x: e,
                y: i,
                dx: r,
                dy: a
            }
        }

        function Ir(t) {
            var n = t[0],
                e = t[t.length - 1];
            return e > n ? [n, e] : [e, n]
        }

        function $r(t) {
            return t.rangeExtent ? t.rangeExtent() : Ir(t.range())
        }

        function qr(t, n, e, i) {
            var r = e(t[0], t[1]),
                a = i(n[0], n[1]);
            return function(t) {
                return a(r(t))
            }
        }

        function Dr(t, n) {
            var e, i = 0,
                r = t.length - 1,
                a = t[i],
                o = t[r];
            return a > o && (e = i, i = r, r = e, e = a, a = o, o = e), t[i] = n.floor(a), t[r] = n.ceil(o), t
        }

        function Or(t) {
            return t ? {
                floor: function(n) {
                    return Math.floor(n / t) * t
                },
                ceil: function(n) {
                    return Math.ceil(n / t) * t
                }
            } : yu
        }

        function Wr(t, n, e, i) {
            var r = [],
                a = [],
                o = 0,
                s = Math.min(t.length, n.length) - 1;
            for (t[s] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o <= s;) r.push(e(t[o - 1], t[o])), a.push(i(n[o - 1], n[o]));
            return function(n) {
                var e = no.bisect(t, n, 1, s) - 1;
                return a[e](r[e](n))
            }
        }

        function Hr(t, n, e, i) {
            function r() {
                var r = Math.min(t.length, n.length) > 2 ? Wr : qr,
                    u = i ? Hi : Wi;
                return o = r(t, n, u, e), s = r(n, t, u, yi), a
            }

            function a(t) {
                return o(t);
            }
            var o, s;
            return a.invert = function(t) {
                return s(t)
            }, a.domain = function(n) {
                return arguments.length ? (t = n.map(Number), r()) : t
            }, a.range = function(t) {
                return arguments.length ? (n = t, r()) : n
            }, a.rangeRound = function(t) {
                return a.range(t).interpolate(Bi)
            }, a.clamp = function(t) {
                return arguments.length ? (i = t, r()) : i
            }, a.interpolate = function(t) {
                return arguments.length ? (e = t, r()) : e
            }, a.ticks = function(n) {
                return Vr(t, n)
            }, a.tickFormat = function(n, e) {
                return Xr(t, n, e)
            }, a.nice = function(n) {
                return Yr(t, n), r()
            }, a.copy = function() {
                return Hr(t, n, e, i)
            }, r()
        }

        function jr(t, n) {
            return no.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
        }

        function Yr(t, n) {
            return Dr(t, Or(Ur(t, n)[2]))
        }

        function Ur(t, n) {
            null == n && (n = 10);
            var e = Ir(t),
                i = e[1] - e[0],
                r = Math.pow(10, Math.floor(Math.log(i / n) / Math.LN10)),
                a = n / i * r;
            return .15 >= a ? r *= 10 : .35 >= a ? r *= 5 : .75 >= a && (r *= 2), e[0] = Math.ceil(e[0] / r) * r, e[1] = Math.floor(e[1] / r) * r + .5 * r, e[2] = r, e
        }

        function Vr(t, n) {
            return no.range.apply(no, Ur(t, n))
        }

        function Xr(t, n, e) {
            var i = Ur(t, n);
            if (e) {
                var r = os.exec(e);
                if (r.shift(), "s" === r[8]) {
                    var a = no.formatPrefix(Math.max(go(i[0]), go(i[1])));
                    return r[7] || (r[7] = "." + Zr(a.scale(i[2]))), r[8] = "f", e = no.format(r.join("")),
                        function(t) {
                            return e(a.scale(t)) + a.symbol
                        }
                }
                r[7] || (r[7] = "." + Gr(r[8], i)), e = r.join("")
            } else e = ",." + Zr(i[2]) + "f";
            return no.format(e)
        }

        function Zr(t) {
            return -Math.floor(Math.log(t) / Math.LN10 + .01)
        }

        function Gr(t, n) {
            var e = Zr(n[2]);
            return t in xu ? Math.abs(e - Zr(Math.max(go(n[0]), go(n[1])))) + +("e" !== t) : e - 2 * ("%" === t)
        }

        function Jr(t, n, e, i) {
            function r(t) {
                return (e ? Math.log(0 > t ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(n)
            }

            function a(t) {
                return e ? Math.pow(n, t) : -Math.pow(n, -t)
            }

            function o(n) {
                return t(r(n))
            }
            return o.invert = function(n) {
                return a(t.invert(n))
            }, o.domain = function(n) {
                return arguments.length ? (e = n[0] >= 0, t.domain((i = n.map(Number)).map(r)), o) : i
            }, o.base = function(e) {
                return arguments.length ? (n = +e, t.domain(i.map(r)), o) : n
            }, o.nice = function() {
                var n = Dr(i.map(r), e ? Math : wu);
                return t.domain(n), i = n.map(a), o
            }, o.ticks = function() {
                var t = Ir(i),
                    o = [],
                    s = t[0],
                    u = t[1],
                    l = Math.floor(r(s)),
                    c = Math.ceil(r(u)),
                    h = n % 1 ? 2 : n;
                if (isFinite(c - l)) {
                    if (e) {
                        for (; c > l; l++)
                            for (var f = 1; h > f; f++) o.push(a(l) * f);
                        o.push(a(l))
                    } else
                        for (o.push(a(l)); l++ < c;)
                            for (var f = h - 1; f > 0; f--) o.push(a(l) * f);
                    for (l = 0; o[l] < s; l++);
                    for (c = o.length; o[c - 1] > u; c--);
                    o = o.slice(l, c)
                }
                return o
            }, o.tickFormat = function(t, n) {
                if (!arguments.length) return bu;
                arguments.length < 2 ? n = bu : "function" != typeof n && (n = no.format(n));
                var i, s = Math.max(.1, t / o.ticks().length),
                    u = e ? (i = 1e-12, Math.ceil) : (i = -1e-12, Math.floor);
                return function(t) {
                    return t / a(u(r(t) + i)) <= s ? n(t) : ""
                }
            }, o.copy = function() {
                return Jr(t.copy(), n, e, i)
            }, jr(o, t)
        }

        function Qr(t, n, e) {
            function i(n) {
                return t(r(n))
            }
            var r = Kr(n),
                a = Kr(1 / n);
            return i.invert = function(n) {
                return a(t.invert(n))
            }, i.domain = function(n) {
                return arguments.length ? (t.domain((e = n.map(Number)).map(r)), i) : e
            }, i.ticks = function(t) {
                return Vr(e, t)
            }, i.tickFormat = function(t, n) {
                return Xr(e, t, n)
            }, i.nice = function(t) {
                return i.domain(Yr(e, t))
            }, i.exponent = function(o) {
                return arguments.length ? (r = Kr(n = o), a = Kr(1 / n), t.domain(e.map(r)), i) : n
            }, i.copy = function() {
                return Qr(t.copy(), n, e)
            }, jr(i, t)
        }

        function Kr(t) {
            return function(n) {
                return 0 > n ? -Math.pow(-n, t) : Math.pow(n, t)
            }
        }

        function ta(t, n) {
            function e(e) {
                return a[((r.get(e) || ("range" === n.t ? r.set(e, t.push(e)) : NaN)) - 1) % a.length]
            }

            function i(n, e) {
                return no.range(t.length).map(function(t) {
                    return n + e * t
                })
            }
            var r, a, o;
            return e.domain = function(i) {
                if (!arguments.length) return t;
                t = [], r = new l;
                for (var a, o = -1, s = i.length; ++o < s;) r.has(a = i[o]) || r.set(a, t.push(a));
                return e[n.t].apply(e, n.a)
            }, e.range = function(t) {
                return arguments.length ? (a = t, o = 0, n = {
                    t: "range",
                    a: arguments
                }, e) : a
            }, e.rangePoints = function(r, s) {
                arguments.length < 2 && (s = 0);
                var u = r[0],
                    l = r[1],
                    c = t.length < 2 ? (u = (u + l) / 2, 0) : (l - u) / (t.length - 1 + s);
                return a = i(u + c * s / 2, c), o = 0, n = {
                    t: "rangePoints",
                    a: arguments
                }, e
            }, e.rangeRoundPoints = function(r, s) {
                arguments.length < 2 && (s = 0);
                var u = r[0],
                    l = r[1],
                    c = t.length < 2 ? (u = l = Math.round((u + l) / 2), 0) : (l - u) / (t.length - 1 + s) | 0;
                return a = i(u + Math.round(c * s / 2 + (l - u - (t.length - 1 + s) * c) / 2), c), o = 0, n = {
                    t: "rangeRoundPoints",
                    a: arguments
                }, e
            }, e.rangeBands = function(r, s, u) {
                arguments.length < 2 && (s = 0), arguments.length < 3 && (u = s);
                var l = r[1] < r[0],
                    c = r[l - 0],
                    h = r[1 - l],
                    f = (h - c) / (t.length - s + 2 * u);
                return a = i(c + f * u, f), l && a.reverse(), o = f * (1 - s), n = {
                    t: "rangeBands",
                    a: arguments
                }, e
            }, e.rangeRoundBands = function(r, s, u) {
                arguments.length < 2 && (s = 0), arguments.length < 3 && (u = s);
                var l = r[1] < r[0],
                    c = r[l - 0],
                    h = r[1 - l],
                    f = Math.floor((h - c) / (t.length - s + 2 * u));
                return a = i(c + Math.round((h - c - (t.length - s) * f) / 2), f), l && a.reverse(), o = Math.round(f * (1 - s)), n = {
                    t: "rangeRoundBands",
                    a: arguments
                }, e
            }, e.rangeBand = function() {
                return o
            }, e.rangeExtent = function() {
                return Ir(n.a[0])
            }, e.copy = function() {
                return ta(t, n)
            }, e.domain(t)
        }

        function na(t, n) {
            function a() {
                var e = 0,
                    i = n.length;
                for (s = []; ++e < i;) s[e - 1] = no.quantile(t, e / i);
                return o
            }

            function o(t) {
                return isNaN(t = +t) ? void 0 : n[no.bisect(s, t)]
            }
            var s;
            return o.domain = function(n) {
                return arguments.length ? (t = n.map(i).filter(r).sort(e), a()) : t
            }, o.range = function(t) {
                return arguments.length ? (n = t, a()) : n
            }, o.quantiles = function() {
                return s
            }, o.invertExtent = function(e) {
                return e = n.indexOf(e), 0 > e ? [NaN, NaN] : [e > 0 ? s[e - 1] : t[0], e < s.length ? s[e] : t[t.length - 1]]
            }, o.copy = function() {
                return na(t, n)
            }, a()
        }

        function ea(t, n, e) {
            function i(n) {
                return e[Math.max(0, Math.min(o, Math.floor(a * (n - t))))]
            }

            function r() {
                return a = e.length / (n - t), o = e.length - 1, i
            }
            var a, o;
            return i.domain = function(e) {
                return arguments.length ? (t = +e[0], n = +e[e.length - 1], r()) : [t, n]
            }, i.range = function(t) {
                return arguments.length ? (e = t, r()) : e
            }, i.invertExtent = function(n) {
                return n = e.indexOf(n), n = 0 > n ? NaN : n / a + t, [n, n + 1 / a]
            }, i.copy = function() {
                return ea(t, n, e)
            }, r()
        }

        function ia(t, n) {
            function e(e) {
                return e >= e ? n[no.bisect(t, e)] : void 0
            }
            return e.domain = function(n) {
                return arguments.length ? (t = n, e) : t
            }, e.range = function(t) {
                return arguments.length ? (n = t, e) : n
            }, e.invertExtent = function(e) {
                return e = n.indexOf(e), [t[e - 1], t[e]]
            }, e.copy = function() {
                return ia(t, n)
            }, e
        }

        function ra(t) {
            function n(t) {
                return +t
            }
            return n.invert = n, n.domain = n.range = function(e) {
                return arguments.length ? (t = e.map(n), n) : t
            }, n.ticks = function(n) {
                return Vr(t, n)
            }, n.tickFormat = function(n, e) {
                return Xr(t, n, e)
            }, n.copy = function() {
                return ra(t)
            }, n
        }

        function aa() {
            return 0
        }

        function oa(t) {
            return t.innerRadius
        }

        function sa(t) {
            return t.outerRadius
        }

        function ua(t) {
            return t.startAngle
        }

        function la(t) {
            return t.endAngle
        }

        function ca(t) {
            return t && t.padAngle
        }

        function ha(t, n, e, i) {
            return (t - e) * n - (n - i) * t > 0 ? 0 : 1
        }

        function fa(t, n, e, i, r) {
            var a = t[0] - n[0],
                o = t[1] - n[1],
                s = (r ? i : -i) / Math.sqrt(a * a + o * o),
                u = s * o,
                l = -s * a,
                c = t[0] + u,
                h = t[1] + l,
                f = n[0] + u,
                d = n[1] + l,
                g = (c + f) / 2,
                p = (h + d) / 2,
                m = f - c,
                v = d - h,
                y = m * m + v * v,
                x = e - i,
                b = c * d - f * h,
                w = (0 > v ? -1 : 1) * Math.sqrt(x * x * y - b * b),
                M = (b * v - m * w) / y,
                S = (-b * m - v * w) / y,
                _ = (b * v + m * w) / y,
                k = (-b * m + v * w) / y,
                C = M - g,
                E = S - p,
                A = _ - g,
                P = k - p;
            return C * C + E * E > A * A + P * P && (M = _, S = k), [
                [M - u, S - l],
                [M * e / x, S * e / x]
            ]
        }

        function da(t) {
            function n(n) {
                function o() {
                    l.push("M", a(t(c), s))
                }
                for (var u, l = [], c = [], h = -1, f = n.length, d = Ct(e), g = Ct(i); ++h < f;) r.call(this, u = n[h], h) ? c.push([+d.call(this, u, h), +g.call(this, u, h)]) : c.length && (o(), c = []);
                return c.length && o(), l.length ? l.join("") : null
            }
            var e = Ae,
                i = Pe,
                r = Pn,
                a = ga,
                o = a.key,
                s = .7;
            return n.x = function(t) {
                return arguments.length ? (e = t, n) : e
            }, n.y = function(t) {
                return arguments.length ? (i = t, n) : i
            }, n.defined = function(t) {
                return arguments.length ? (r = t, n) : r
            }, n.interpolate = function(t) {
                return arguments.length ? (o = "function" == typeof t ? a = t : (a = Eu.get(t) || ga).key, n) : o
            }, n.tension = function(t) {
                return arguments.length ? (s = t, n) : s
            }, n
        }

        function ga(t) {
            return t.join("L")
        }

        function pa(t) {
            return ga(t) + "Z"
        }

        function ma(t) {
            for (var n = 0, e = t.length, i = t[0], r = [i[0], ",", i[1]]; ++n < e;) r.push("H", (i[0] + (i = t[n])[0]) / 2, "V", i[1]);
            return e > 1 && r.push("H", i[0]), r.join("")
        }

        function va(t) {
            for (var n = 0, e = t.length, i = t[0], r = [i[0], ",", i[1]]; ++n < e;) r.push("V", (i = t[n])[1], "H", i[0]);
            return r.join("")
        }

        function ya(t) {
            for (var n = 0, e = t.length, i = t[0], r = [i[0], ",", i[1]]; ++n < e;) r.push("H", (i = t[n])[0], "V", i[1]);
            return r.join("")
        }

        function xa(t, n) {
            return t.length < 4 ? ga(t) : t[1] + Ma(t.slice(1, -1), Sa(t, n))
        }

        function ba(t, n) {
            return t.length < 3 ? ga(t) : t[0] + Ma((t.push(t[0]), t), Sa([t[t.length - 2]].concat(t, [t[1]]), n))
        }

        function wa(t, n) {
            return t.length < 3 ? ga(t) : t[0] + Ma(t, Sa(t, n))
        }

        function Ma(t, n) {
            if (n.length < 1 || t.length != n.length && t.length != n.length + 2) return ga(t);
            var e = t.length != n.length,
                i = "",
                r = t[0],
                a = t[1],
                o = n[0],
                s = o,
                u = 1;
            if (e && (i += "Q" + (a[0] - 2 * o[0] / 3) + "," + (a[1] - 2 * o[1] / 3) + "," + a[0] + "," + a[1], r = t[1], u = 2), n.length > 1) {
                s = n[1], a = t[u], u++, i += "C" + (r[0] + o[0]) + "," + (r[1] + o[1]) + "," + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1];
                for (var l = 2; l < n.length; l++, u++) a = t[u], s = n[l], i += "S" + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1]
            }
            if (e) {
                var c = t[u];
                i += "Q" + (a[0] + 2 * s[0] / 3) + "," + (a[1] + 2 * s[1] / 3) + "," + c[0] + "," + c[1]
            }
            return i
        }

        function Sa(t, n) {
            for (var e, i = [], r = (1 - n) / 2, a = t[0], o = t[1], s = 1, u = t.length; ++s < u;) e = a, a = o, o = t[s], i.push([r * (o[0] - e[0]), r * (o[1] - e[1])]);
            return i
        }

        function _a(t) {
            if (t.length < 3) return ga(t);
            var n = 1,
                e = t.length,
                i = t[0],
                r = i[0],
                a = i[1],
                o = [r, r, r, (i = t[1])[0]],
                s = [a, a, a, i[1]],
                u = [r, ",", a, "L", Aa(Lu, o), ",", Aa(Lu, s)];
            for (t.push(t[e - 1]); ++n <= e;) i = t[n], o.shift(), o.push(i[0]), s.shift(), s.push(i[1]), Pa(u, o, s);
            return t.pop(), u.push("L", i), u.join("")
        }

        function ka(t) {
            if (t.length < 4) return ga(t);
            for (var n, e = [], i = -1, r = t.length, a = [0], o = [0]; ++i < 3;) n = t[i], a.push(n[0]), o.push(n[1]);
            for (e.push(Aa(Lu, a) + "," + Aa(Lu, o)), --i; ++i < r;) n = t[i], a.shift(), a.push(n[0]), o.shift(), o.push(n[1]), Pa(e, a, o);
            return e.join("")
        }

        function Ca(t) {
            for (var n, e, i = -1, r = t.length, a = r + 4, o = [], s = []; ++i < 4;) e = t[i % r], o.push(e[0]), s.push(e[1]);
            for (n = [Aa(Lu, o), ",", Aa(Lu, s)], --i; ++i < a;) e = t[i % r], o.shift(), o.push(e[0]), s.shift(), s.push(e[1]), Pa(n, o, s);
            return n.join("")
        }

        function Ea(t, n) {
            var e = t.length - 1;
            if (e)
                for (var i, r, a = t[0][0], o = t[0][1], s = t[e][0] - a, u = t[e][1] - o, l = -1; ++l <= e;) i = t[l], r = l / e, i[0] = n * i[0] + (1 - n) * (a + r * s), i[1] = n * i[1] + (1 - n) * (o + r * u);
            return _a(t)
        }

        function Aa(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
        }

        function Pa(t, n, e) {
            t.push("C", Aa(Au, n), ",", Aa(Au, e), ",", Aa(Pu, n), ",", Aa(Pu, e), ",", Aa(Lu, n), ",", Aa(Lu, e))
        }

        function La(t, n) {
            return (n[1] - t[1]) / (n[0] - t[0])
        }

        function Na(t) {
            for (var n = 0, e = t.length - 1, i = [], r = t[0], a = t[1], o = i[0] = La(r, a); ++n < e;) i[n] = (o + (o = La(r = a, a = t[n + 1]))) / 2;
            return i[n] = o, i
        }

        function Ta(t) {
            for (var n, e, i, r, a = [], o = Na(t), s = -1, u = t.length - 1; ++s < u;) n = La(t[s], t[s + 1]), go(n) < Lo ? o[s] = o[s + 1] = 0 : (e = o[s] / n, i = o[s + 1] / n, r = e * e + i * i, r > 9 && (r = 3 * n / Math.sqrt(r), o[s] = r * e, o[s + 1] = r * i));
            for (s = -1; ++s <= u;) r = (t[Math.min(u, s + 1)][0] - t[Math.max(0, s - 1)][0]) / (6 * (1 + o[s] * o[s])), a.push([r || 0, o[s] * r || 0]);
            return a
        }

        function za(t) {
            return t.length < 3 ? ga(t) : t[0] + Ma(t, Ta(t))
        }

        function Ra(t) {
            for (var n, e, i, r = -1, a = t.length; ++r < a;) n = t[r], e = n[0], i = n[1] - Fo, n[0] = e * Math.cos(i), n[1] = e * Math.sin(i);
            return t
        }

        function Fa(t) {
            function n(n) {
                function u() {
                    p.push("M", s(t(v), h), c, l(t(m.reverse()), h), "Z")
                }
                for (var f, d, g, p = [], m = [], v = [], y = -1, x = n.length, b = Ct(e), w = Ct(r), M = e === i ? function() {
                        return d
                    } : Ct(i), S = r === a ? function() {
                        return g
                    } : Ct(a); ++y < x;) o.call(this, f = n[y], y) ? (m.push([d = +b.call(this, f, y), g = +w.call(this, f, y)]), v.push([+M.call(this, f, y), +S.call(this, f, y)])) : m.length && (u(), m = [], v = []);
                return m.length && u(), p.length ? p.join("") : null
            }
            var e = Ae,
                i = Ae,
                r = 0,
                a = Pe,
                o = Pn,
                s = ga,
                u = s.key,
                l = s,
                c = "L",
                h = .7;
            return n.x = function(t) {
                return arguments.length ? (e = i = t, n) : i
            }, n.x0 = function(t) {
                return arguments.length ? (e = t, n) : e
            }, n.x1 = function(t) {
                return arguments.length ? (i = t, n) : i
            }, n.y = function(t) {
                return arguments.length ? (r = a = t, n) : a
            }, n.y0 = function(t) {
                return arguments.length ? (r = t, n) : r
            }, n.y1 = function(t) {
                return arguments.length ? (a = t, n) : a
            }, n.defined = function(t) {
                return arguments.length ? (o = t, n) : o
            }, n.interpolate = function(t) {
                return arguments.length ? (u = "function" == typeof t ? s = t : (s = Eu.get(t) || ga).key, l = s.reverse || s, c = s.closed ? "M" : "L", n) : u
            }, n.tension = function(t) {
                return arguments.length ? (h = t, n) : h
            }, n
        }

        function Ba(t) {
            return t.radius
        }

        function Ia(t) {
            return [t.x, t.y]
        }

        function $a(t) {
            return function() {
                var n = t.apply(this, arguments),
                    e = n[0],
                    i = n[1] - Fo;
                return [e * Math.cos(i), e * Math.sin(i)]
            }
        }

        function qa() {
            return 64
        }

        function Da() {
            return "circle"
        }

        function Oa(t) {
            var n = Math.sqrt(t / To);
            return "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z"
        }

        function Wa(t) {
            return function() {
                var n, e;
                (n = this[t]) && (e = n[n.active]) && (--n.count ? delete n[n.active] : delete this[t], n.active += .5, e.event && e.event.interrupt.call(this, this.__data__, e.index))
            }
        }

        function Ha(t, n, e) {
            return xo(t, Iu), t.namespace = n, t.id = e, t
        }

        function ja(t, n, e, i) {
            var r = t.id,
                a = t.namespace;
            return j(t, "function" == typeof e ? function(t, o, s) {
                t[a][r].tween.set(n, i(e.call(t, t.__data__, o, s)))
            } : (e = i(e), function(t) {
                t[a][r].tween.set(n, e)
            }))
        }

        function Ya(t) {
            return null == t && (t = ""),
                function() {
                    this.textContent = t
                }
        }

        function Ua(t) {
            return null == t ? "__transition__" : "__transition_" + t + "__"
        }

        function Va(t, n, e, i, r) {
            var a = t[e] || (t[e] = {
                    active: 0,
                    count: 0
                }),
                o = a[i];
            if (!o) {
                var s = r.time;
                o = a[i] = {
                    tween: new l,
                    time: s,
                    delay: r.delay,
                    duration: r.duration,
                    ease: r.ease,
                    index: n
                }, r = null, ++a.count, no.timer(function(r) {
                    function u(e) {
                        if (a.active > i) return c();
                        var r = a[a.active];
                        r && (--a.count, delete a[a.active], r.event && r.event.interrupt.call(t, t.__data__, r.index)), a.active = i, o.event && o.event.start.call(t, t.__data__, n), o.tween.forEach(function(e, i) {
                            (i = i.call(t, t.__data__, n)) && p.push(i)
                        }), f = o.ease, h = o.duration, no.timer(function() {
                            return g.c = l(e || 1) ? Pn : l, 1
                        }, 0, s)
                    }

                    function l(e) {
                        if (a.active !== i) return 1;
                        for (var r = e / h, s = f(r), u = p.length; u > 0;) p[--u].call(t, s);
                        return r >= 1 ? (o.event && o.event.end.call(t, t.__data__, n), c()) : void 0
                    }

                    function c() {
                        return --a.count ? delete a[i] : delete t[e], 1
                    }
                    var h, f, d = o.delay,
                        g = is,
                        p = [];
                    return g.t = d + s, r >= d ? u(r - d) : void(g.c = u)
                }, 0, s)
            }
        }

        function Xa(t, n, e) {
            t.attr("transform", function(t) {
                var i = n(t);
                return "translate(" + (isFinite(i) ? i : e(t)) + ",0)"
            })
        }

        function Za(t, n, e) {
            t.attr("transform", function(t) {
                var i = n(t);
                return "translate(0," + (isFinite(i) ? i : e(t)) + ")"
            })
        }

        function Ga(t) {
            return t.toISOString()
        }

        function Ja(t, n, e) {
            function i(n) {
                return t(n)
            }

            function r(t, e) {
                var i = t[1] - t[0],
                    r = i / e,
                    a = no.bisect(Uu, r);
                return a == Uu.length ? [n.year, Ur(t.map(function(t) {
                    return t / 31536e6
                }), e)[2]] : a ? n[r / Uu[a - 1] < Uu[a] / r ? a - 1 : a] : [Zu, Ur(t, e)[2]]
            }
            return i.invert = function(n) {
                return Qa(t.invert(n))
            }, i.domain = function(n) {
                return arguments.length ? (t.domain(n), i) : t.domain().map(Qa)
            }, i.nice = function(t, n) {
                function e(e) {
                    return !isNaN(e) && !t.range(e, Qa(+e + 1), n).length
                }
                var a = i.domain(),
                    o = Ir(a),
                    s = null == t ? r(o, 10) : "number" == typeof t && r(o, t);
                return s && (t = s[0], n = s[1]), i.domain(Dr(a, n > 1 ? {
                    floor: function(n) {
                        for (; e(n = t.floor(n));) n = Qa(n - 1);
                        return n
                    },
                    ceil: function(n) {
                        for (; e(n = t.ceil(n));) n = Qa(+n + 1);
                        return n
                    }
                } : t))
            }, i.ticks = function(t, n) {
                var e = Ir(i.domain()),
                    a = null == t ? r(e, 10) : "number" == typeof t ? r(e, t) : !t.range && [{
                        range: t
                    }, n];
                return a && (t = a[0], n = a[1]), t.range(e[0], Qa(+e[1] + 1), 1 > n ? 1 : n)
            }, i.tickFormat = function() {
                return e
            }, i.copy = function() {
                return Ja(t.copy(), n, e)
            }, jr(i, t)
        }

        function Qa(t) {
            return new Date(t)
        }

        function Ka(t) {
            return JSON.parse(t.responseText)
        }

        function to(t) {
            var n = ro.createRange();
            return n.selectNode(ro.body), n.createContextualFragment(t.responseText)
        }
        var no = {
                version: "3.5.5"
            },
            eo = [].slice,
            io = function(t) {
                return eo.call(t)
            },
            ro = this.document;
        if (ro) try {
            io(ro.documentElement.childNodes)[0].nodeType
        } catch (ao) {
            io = function(t) {
                for (var n = t.length, e = new Array(n); n--;) e[n] = t[n];
                return e
            }
        }
        if (Date.now || (Date.now = function() {
                return +new Date
            }), ro) try {
            ro.createElement("DIV").style.setProperty("opacity", 0, "")
        } catch (oo) {
            var so = this.Element.prototype,
                uo = so.setAttribute,
                lo = so.setAttributeNS,
                co = this.CSSStyleDeclaration.prototype,
                ho = co.setProperty;
            so.setAttribute = function(t, n) {
                uo.call(this, t, n + "")
            }, so.setAttributeNS = function(t, n, e) {
                lo.call(this, t, n, e + "")
            }, co.setProperty = function(t, n, e) {
                ho.call(this, t, n + "", e)
            }
        }
        no.ascending = e, no.descending = function(t, n) {
            return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }, no.min = function(t, n) {
            var e, i, r = -1,
                a = t.length;
            if (1 === arguments.length) {
                for (; ++r < a;)
                    if (null != (i = t[r]) && i >= i) {
                        e = i;
                        break
                    }
                for (; ++r < a;) null != (i = t[r]) && e > i && (e = i)
            } else {
                for (; ++r < a;)
                    if (null != (i = n.call(t, t[r], r)) && i >= i) {
                        e = i;
                        break
                    }
                for (; ++r < a;) null != (i = n.call(t, t[r], r)) && e > i && (e = i)
            }
            return e
        }, no.max = function(t, n) {
            var e, i, r = -1,
                a = t.length;
            if (1 === arguments.length) {
                for (; ++r < a;)
                    if (null != (i = t[r]) && i >= i) {
                        e = i;
                        break
                    }
                for (; ++r < a;) null != (i = t[r]) && i > e && (e = i)
            } else {
                for (; ++r < a;)
                    if (null != (i = n.call(t, t[r], r)) && i >= i) {
                        e = i;
                        break
                    }
                for (; ++r < a;) null != (i = n.call(t, t[r], r)) && i > e && (e = i)
            }
            return e
        }, no.extent = function(t, n) {
            var e, i, r, a = -1,
                o = t.length;
            if (1 === arguments.length) {
                for (; ++a < o;)
                    if (null != (i = t[a]) && i >= i) {
                        e = r = i;
                        break
                    }
                for (; ++a < o;) null != (i = t[a]) && (e > i && (e = i), i > r && (r = i))
            } else {
                for (; ++a < o;)
                    if (null != (i = n.call(t, t[a], a)) && i >= i) {
                        e = r = i;
                        break
                    }
                for (; ++a < o;) null != (i = n.call(t, t[a], a)) && (e > i && (e = i), i > r && (r = i))
            }
            return [e, r]
        }, no.sum = function(t, n) {
            var e, i = 0,
                a = t.length,
                o = -1;
            if (1 === arguments.length)
                for (; ++o < a;) r(e = +t[o]) && (i += e);
            else
                for (; ++o < a;) r(e = +n.call(t, t[o], o)) && (i += e);
            return i
        }, no.mean = function(t, n) {
            var e, a = 0,
                o = t.length,
                s = -1,
                u = o;
            if (1 === arguments.length)
                for (; ++s < o;) r(e = i(t[s])) ? a += e : --u;
            else
                for (; ++s < o;) r(e = i(n.call(t, t[s], s))) ? a += e : --u;
            return u ? a / u : void 0
        }, no.quantile = function(t, n) {
            var e = (t.length - 1) * n + 1,
                i = Math.floor(e),
                r = +t[i - 1],
                a = e - i;
            return a ? r + a * (t[i] - r) : r
        }, no.median = function(t, n) {
            var a, o = [],
                s = t.length,
                u = -1;
            if (1 === arguments.length)
                for (; ++u < s;) r(a = i(t[u])) && o.push(a);
            else
                for (; ++u < s;) r(a = i(n.call(t, t[u], u))) && o.push(a);
            return o.length ? no.quantile(o.sort(e), .5) : void 0
        }, no.variance = function(t, n) {
            var e, a, o = t.length,
                s = 0,
                u = 0,
                l = -1,
                c = 0;
            if (1 === arguments.length)
                for (; ++l < o;) r(e = i(t[l])) && (a = e - s, s += a / ++c, u += a * (e - s));
            else
                for (; ++l < o;) r(e = i(n.call(t, t[l], l))) && (a = e - s, s += a / ++c, u += a * (e - s));
            return c > 1 ? u / (c - 1) : void 0
        }, no.deviation = function() {
            var t = no.variance.apply(this, arguments);
            return t ? Math.sqrt(t) : t
        };
        var fo = a(e);
        no.bisectLeft = fo.left, no.bisect = no.bisectRight = fo.right, no.bisector = function(t) {
            return a(1 === t.length ? function(n, i) {
                return e(t(n), i)
            } : t)
        }, no.shuffle = function(t, n, e) {
            (a = arguments.length) < 3 && (e = t.length, 2 > a && (n = 0));
            for (var i, r, a = e - n; a;) r = Math.random() * a-- | 0, i = t[a + n], t[a + n] = t[r + n], t[r + n] = i;
            return t
        }, no.permute = function(t, n) {
            for (var e = n.length, i = new Array(e); e--;) i[e] = t[n[e]];
            return i
        }, no.pairs = function(t) {
            for (var n, e = 0, i = t.length - 1, r = t[0], a = new Array(0 > i ? 0 : i); i > e;) a[e] = [n = r, r = t[++e]];
            return a
        }, no.zip = function() {
            if (!(i = arguments.length)) return [];
            for (var t = -1, n = no.min(arguments, o), e = new Array(n); ++t < n;)
                for (var i, r = -1, a = e[t] = new Array(i); ++r < i;) a[r] = arguments[r][t];
            return e
        }, no.transpose = function(t) {
            return no.zip.apply(no, t)
        }, no.keys = function(t) {
            var n = [];
            for (var e in t) n.push(e);
            return n
        }, no.values = function(t) {
            var n = [];
            for (var e in t) n.push(t[e]);
            return n
        }, no.entries = function(t) {
            var n = [];
            for (var e in t) n.push({
                key: e,
                value: t[e]
            });
            return n
        }, no.merge = function(t) {
            for (var n, e, i, r = t.length, a = -1, o = 0; ++a < r;) o += t[a].length;
            for (e = new Array(o); --r >= 0;)
                for (i = t[r], n = i.length; --n >= 0;) e[--o] = i[n];
            return e
        };
        var go = Math.abs;
        no.range = function(t, n, e) {
            if (arguments.length < 3 && (e = 1, arguments.length < 2 && (n = t, t = 0)), (n - t) / e === 1 / 0) throw new Error("infinite range");
            var i, r = [],
                a = s(go(e)),
                o = -1;
            if (t *= a, n *= a, e *= a, 0 > e)
                for (;
                    (i = t + e * ++o) > n;) r.push(i / a);
            else
                for (;
                    (i = t + e * ++o) < n;) r.push(i / a);
            return r
        }, no.map = function(t, n) {
            var e = new l;
            if (t instanceof l) t.forEach(function(t, n) {
                e.set(t, n)
            });
            else if (Array.isArray(t)) {
                var i, r = -1,
                    a = t.length;
                if (1 === arguments.length)
                    for (; ++r < a;) e.set(r, t[r]);
                else
                    for (; ++r < a;) e.set(n.call(t, i = t[r], r), i)
            } else
                for (var o in t) e.set(o, t[o]);
            return e
        };
        var po = "__proto__",
            mo = "\x00";
        u(l, {
            has: f,
            get: function(t) {
                return this._[c(t)]
            },
            set: function(t, n) {
                return this._[c(t)] = n
            },
            remove: d,
            keys: g,
            values: function() {
                var t = [];
                for (var n in this._) t.push(this._[n]);
                return t
            },
            entries: function() {
                var t = [];
                for (var n in this._) t.push({
                    key: h(n),
                    value: this._[n]
                });
                return t
            },
            size: p,
            empty: m,
            forEach: function(t) {
                for (var n in this._) t.call(this, h(n), this._[n])
            }
        }), no.nest = function() {
            function t(n, o, s) {
                if (s >= a.length) return i ? i.call(r, o) : e ? o.sort(e) : o;
                for (var u, c, h, f, d = -1, g = o.length, p = a[s++], m = new l; ++d < g;)(f = m.get(u = p(c = o[d]))) ? f.push(c) : m.set(u, [c]);
                return n ? (c = n(), h = function(e, i) {
                    c.set(e, t(n, i, s))
                }) : (c = {}, h = function(e, i) {
                    c[e] = t(n, i, s)
                }), m.forEach(h), c
            }

            function n(t, e) {
                if (e >= a.length) return t;
                var i = [],
                    r = o[e++];
                return t.forEach(function(t, r) {
                    i.push({
                        key: t,
                        values: n(r, e)
                    })
                }), r ? i.sort(function(t, n) {
                    return r(t.key, n.key)
                }) : i
            }
            var e, i, r = {},
                a = [],
                o = [];
            return r.map = function(n, e) {
                return t(e, n, 0)
            }, r.entries = function(e) {
                return n(t(no.map, e, 0), 0)
            }, r.key = function(t) {
                return a.push(t), r
            }, r.sortKeys = function(t) {
                return o[a.length - 1] = t, r
            }, r.sortValues = function(t) {
                return e = t, r
            }, r.rollup = function(t) {
                return i = t, r
            }, r
        }, no.set = function(t) {
            var n = new v;
            if (t)
                for (var e = 0, i = t.length; i > e; ++e) n.add(t[e]);
            return n
        }, u(v, {
            has: f,
            add: function(t) {
                return this._[c(t += "")] = !0, t
            },
            remove: d,
            values: g,
            size: p,
            empty: m,
            forEach: function(t) {
                for (var n in this._) t.call(this, h(n))
            }
        }), no.behavior = {}, no.rebind = function(t, n) {
            for (var e, i = 1, r = arguments.length; ++i < r;) t[e = arguments[i]] = x(t, n, n[e]);
            return t
        };
        var vo = ["webkit", "ms", "moz", "Moz", "o", "O"];
        no.dispatch = function() {
            for (var t = new M, n = -1, e = arguments.length; ++n < e;) t[arguments[n]] = S(t);
            return t
        }, M.prototype.on = function(t, n) {
            var e = t.indexOf("."),
                i = "";
            if (e >= 0 && (i = t.slice(e + 1), t = t.slice(0, e)), t) return arguments.length < 2 ? this[t].on(i) : this[t].on(i, n);
            if (2 === arguments.length) {
                if (null == n)
                    for (t in this) this.hasOwnProperty(t) && this[t].on(i, null);
                return this
            }
        }, no.event = null, no.requote = function(t) {
            return t.replace(yo, "\\$&")
        };
        var yo = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
            xo = {}.__proto__ ? function(t, n) {
                t.__proto__ = n
            } : function(t, n) {
                for (var e in n) t[e] = n[e]
            },
            bo = function(t, n) {
                return n.querySelector(t)
            },
            wo = function(t, n) {
                return n.querySelectorAll(t)
            },
            Mo = function(t, n) {
                var e = t.matches || t[b(t, "matchesSelector")];
                return (Mo = function(t, n) {
                    return e.call(t, n)
                })(t, n)
            };
        "function" == typeof Sizzle && (bo = function(t, n) {
            return Sizzle(t, n)[0] || null
        }, wo = Sizzle, Mo = Sizzle.matchesSelector), no.selection = function() {
            return no.select(ro.documentElement)
        };
        var So = no.selection.prototype = [];
        So.select = function(t) {
            var n, e, i, r, a = [];
            t = A(t);
            for (var o = -1, s = this.length; ++o < s;) {
                a.push(n = []), n.parentNode = (i = this[o]).parentNode;
                for (var u = -1, l = i.length; ++u < l;)(r = i[u]) ? (n.push(e = t.call(r, r.__data__, u, o)), e && "__data__" in r && (e.__data__ = r.__data__)) : n.push(null)
            }
            return E(a)
        }, So.selectAll = function(t) {
            var n, e, i = [];
            t = P(t);
            for (var r = -1, a = this.length; ++r < a;)
                for (var o = this[r], s = -1, u = o.length; ++s < u;)(e = o[s]) && (i.push(n = io(t.call(e, e.__data__, s, r))), n.parentNode = e);
            return E(i)
        };
        var _o = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };
        no.ns = {
            prefix: _o,
            qualify: function(t) {
                var n = t.indexOf(":"),
                    e = t;
                return n >= 0 && (e = t.slice(0, n), t = t.slice(n + 1)), _o.hasOwnProperty(e) ? {
                    space: _o[e],
                    local: t
                } : t
            }
        }, So.attr = function(t, n) {
            if (arguments.length < 2) {
                if ("string" == typeof t) {
                    var e = this.node();
                    return t = no.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
                }
                for (n in t) this.each(L(n, t[n]));
                return this
            }
            return this.each(L(t, n))
        }, So.classed = function(t, n) {
            if (arguments.length < 2) {
                if ("string" == typeof t) {
                    var e = this.node(),
                        i = (t = z(t)).length,
                        r = -1;
                    if (n = e.classList) {
                        for (; ++r < i;)
                            if (!n.contains(t[r])) return !1
                    } else
                        for (n = e.getAttribute("class"); ++r < i;)
                            if (!T(t[r]).test(n)) return !1; return !0
                }
                for (n in t) this.each(R(n, t[n]));
                return this
            }
            return this.each(R(t, n))
        }, So.style = function(t, e, i) {
            var r = arguments.length;
            if (3 > r) {
                if ("string" != typeof t) {
                    2 > r && (e = "");
                    for (i in t) this.each(B(i, t[i], e));
                    return this
                }
                if (2 > r) {
                    var a = this.node();
                    return n(a).getComputedStyle(a, null).getPropertyValue(t)
                }
                i = ""
            }
            return this.each(B(t, e, i))
        }, So.property = function(t, n) {
            if (arguments.length < 2) {
                if ("string" == typeof t) return this.node()[t];
                for (n in t) this.each(I(n, t[n]));
                return this
            }
            return this.each(I(t, n))
        }, So.text = function(t) {
            return arguments.length ? this.each("function" == typeof t ? function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            } : null == t ? function() {
                this.textContent = ""
            } : function() {
                this.textContent = t
            }) : this.node().textContent
        }, So.html = function(t) {
            return arguments.length ? this.each("function" == typeof t ? function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            } : null == t ? function() {
                this.innerHTML = ""
            } : function() {
                this.innerHTML = t
            }) : this.node().innerHTML
        }, So.append = function(t) {
            return t = q(t), this.select(function() {
                return this.appendChild(t.apply(this, arguments))
            })
        }, So.insert = function(t, n) {
            return t = q(t), n = A(n), this.select(function() {
                return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null)
            })
        }, So.remove = function() {
            return this.each(D)
        }, So.data = function(t, n) {
            function e(t, e) {
                var i, r, a, o = t.length,
                    h = e.length,
                    f = Math.min(o, h),
                    d = new Array(h),
                    g = new Array(h),
                    p = new Array(o);
                if (n) {
                    var m, v = new l,
                        y = new Array(o);
                    for (i = -1; ++i < o;) v.has(m = n.call(r = t[i], r.__data__, i)) ? p[i] = r : v.set(m, r), y[i] = m;
                    for (i = -1; ++i < h;)(r = v.get(m = n.call(e, a = e[i], i))) ? r !== !0 && (d[i] = r, r.__data__ = a) : g[i] = O(a), v.set(m, !0);
                    for (i = -1; ++i < o;) v.get(y[i]) !== !0 && (p[i] = t[i])
                } else {
                    for (i = -1; ++i < f;) r = t[i], a = e[i], r ? (r.__data__ = a, d[i] = r) : g[i] = O(a);
                    for (; h > i; ++i) g[i] = O(e[i]);
                    for (; o > i; ++i) p[i] = t[i]
                }
                g.update = d, g.parentNode = d.parentNode = p.parentNode = t.parentNode, s.push(g), u.push(d), c.push(p)
            }
            var i, r, a = -1,
                o = this.length;
            if (!arguments.length) {
                for (t = new Array(o = (i = this[0]).length); ++a < o;)(r = i[a]) && (t[a] = r.__data__);
                return t
            }
            var s = Y([]),
                u = E([]),
                c = E([]);
            if ("function" == typeof t)
                for (; ++a < o;) e(i = this[a], t.call(i, i.parentNode.__data__, a));
            else
                for (; ++a < o;) e(i = this[a], t);
            return u.enter = function() {
                return s
            }, u.exit = function() {
                return c
            }, u
        }, So.datum = function(t) {
            return arguments.length ? this.property("__data__", t) : this.property("__data__")
        }, So.filter = function(t) {
            var n, e, i, r = [];
            "function" != typeof t && (t = W(t));
            for (var a = 0, o = this.length; o > a; a++) {
                r.push(n = []), n.parentNode = (e = this[a]).parentNode;
                for (var s = 0, u = e.length; u > s; s++)(i = e[s]) && t.call(i, i.__data__, s, a) && n.push(i)
            }
            return E(r)
        }, So.order = function() {
            for (var t = -1, n = this.length; ++t < n;)
                for (var e, i = this[t], r = i.length - 1, a = i[r]; --r >= 0;)(e = i[r]) && (a && a !== e.nextSibling && a.parentNode.insertBefore(e, a), a = e);
            return this
        }, So.sort = function(t) {
            t = H.apply(this, arguments);
            for (var n = -1, e = this.length; ++n < e;) this[n].sort(t);
            return this.order()
        }, So.each = function(t) {
            return j(this, function(n, e, i) {
                t.call(n, n.__data__, e, i)
            })
        }, So.call = function(t) {
            var n = io(arguments);
            return t.apply(n[0] = this, n), this
        }, So.empty = function() {
            return !this.node()
        }, So.node = function() {
            for (var t = 0, n = this.length; n > t; t++)
                for (var e = this[t], i = 0, r = e.length; r > i; i++) {
                    var a = e[i];
                    if (a) return a
                }
            return null
        }, So.size = function() {
            var t = 0;
            return j(this, function() {
                ++t
            }), t
        };
        var ko = [];
        no.selection.enter = Y, no.selection.enter.prototype = ko, ko.append = So.append, ko.empty = So.empty, ko.node = So.node, ko.call = So.call, ko.size = So.size, ko.select = function(t) {
            for (var n, e, i, r, a, o = [], s = -1, u = this.length; ++s < u;) {
                i = (r = this[s]).update, o.push(n = []), n.parentNode = r.parentNode;
                for (var l = -1, c = r.length; ++l < c;)(a = r[l]) ? (n.push(i[l] = e = t.call(r.parentNode, a.__data__, l, s)), e.__data__ = a.__data__) : n.push(null)
            }
            return E(o)
        }, ko.insert = function(t, n) {
            return arguments.length < 2 && (n = U(this)), So.insert.call(this, t, n)
        }, no.select = function(n) {
            var e;
            return "string" == typeof n ? (e = [bo(n, ro)], e.parentNode = ro.documentElement) : (e = [n], e.parentNode = t(n)), E([e])
        }, no.selectAll = function(t) {
            var n;
            return "string" == typeof t ? (n = io(wo(t, ro)), n.parentNode = ro.documentElement) : (n = t, n.parentNode = null), E([n])
        }, So.on = function(t, n, e) {
            var i = arguments.length;
            if (3 > i) {
                if ("string" != typeof t) {
                    2 > i && (n = !1);
                    for (e in t) this.each(V(e, t[e], n));
                    return this
                }
                if (2 > i) return (i = this.node()["__on" + t]) && i._;
                e = !1
            }
            return this.each(V(t, n, e))
        };
        var Co = no.map({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        });
        ro && Co.forEach(function(t) {
            "on" + t in ro && Co.remove(t)
        });
        var Eo, Ao = 0;
        no.mouse = function(t) {
            return G(t, k())
        };
        var Po = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
        no.touch = function(t, n, e) {
            if (arguments.length < 3 && (e = n, n = k().changedTouches), n)
                for (var i, r = 0, a = n.length; a > r; ++r)
                    if ((i = n[r]).identifier === e) return G(t, i)
        }, no.behavior.drag = function() {
            function t() {
                this.on("mousedown.drag", a).on("touchstart.drag", o)
            }

            function e(t, n, e, a, o) {
                return function() {
                    function s() {
                        var t, e, i = n(f, p);
                        i && (t = i[0] - x[0], e = i[1] - x[1], g |= t | e, x = i, d({
                            type: "drag",
                            x: i[0] + l[0],
                            y: i[1] + l[1],
                            dx: t,
                            dy: e
                        }))
                    }

                    function u() {
                        n(f, p) && (v.on(a + m, null).on(o + m, null), y(g && no.event.target === h), d({
                            type: "dragend"
                        }))
                    }
                    var l, c = this,
                        h = no.event.target,
                        f = c.parentNode,
                        d = i.of(c, arguments),
                        g = 0,
                        p = t(),
                        m = ".drag" + (null == p ? "" : "-" + p),
                        v = no.select(e(h)).on(a + m, s).on(o + m, u),
                        y = Z(h),
                        x = n(f, p);
                    r ? (l = r.apply(c, arguments), l = [l.x - x[0], l.y - x[1]]) : l = [0, 0], d({
                        type: "dragstart"
                    })
                }
            }
            var i = C(t, "drag", "dragstart", "dragend"),
                r = null,
                a = e(w, no.mouse, n, "mousemove", "mouseup"),
                o = e(J, no.touch, y, "touchmove", "touchend");
            return t.origin = function(n) {
                return arguments.length ? (r = n, t) : r
            }, no.rebind(t, i, "on")
        }, no.touches = function(t, n) {
            return arguments.length < 2 && (n = k().touches), n ? io(n).map(function(n) {
                var e = G(t, n);
                return e.identifier = n.identifier, e
            }) : []
        };
        var Lo = 1e-6,
            No = Lo * Lo,
            To = Math.PI,
            zo = 2 * To,
            Ro = zo - Lo,
            Fo = To / 2,
            Bo = To / 180,
            Io = 180 / To,
            $o = Math.SQRT2,
            qo = 2,
            Do = 4;
        no.interpolateZoom = function(t, n) {
            function e(t) {
                var n = t * y;
                if (v) {
                    var e = it(p),
                        o = a / (qo * f) * (e * rt($o * n + p) - et(p));
                    return [i + o * l, r + o * c, a * e / it($o * n + p)]
                }
                return [i + t * l, r + t * c, a * Math.exp($o * n)]
            }
            var i = t[0],
                r = t[1],
                a = t[2],
                o = n[0],
                s = n[1],
                u = n[2],
                l = o - i,
                c = s - r,
                h = l * l + c * c,
                f = Math.sqrt(h),
                d = (u * u - a * a + Do * h) / (2 * a * qo * f),
                g = (u * u - a * a - Do * h) / (2 * u * qo * f),
                p = Math.log(Math.sqrt(d * d + 1) - d),
                m = Math.log(Math.sqrt(g * g + 1) - g),
                v = m - p,
                y = (v || Math.log(u / a)) / $o;
            return e.duration = 1e3 * y, e
        }, no.behavior.zoom = function() {
            function t(t) {
                t.on(N, h).on(Wo + ".zoom", d).on("dblclick.zoom", g).on(R, f)
            }

            function e(t) {
                return [(t[0] - k.x) / k.k, (t[1] - k.y) / k.k]
            }

            function i(t) {
                return [t[0] * k.k + k.x, t[1] * k.k + k.y]
            }

            function r(t) {
                k.k = Math.max(A[0], Math.min(A[1], t))
            }

            function a(t, n) {
                n = i(n), k.x += t[0] - n[0], k.y += t[1] - n[1]
            }

            function o(n, e, i, o) {
                n.__chart__ = {
                    x: k.x,
                    y: k.y,
                    k: k.k
                }, r(Math.pow(2, o)), a(m = e, i), n = no.select(n), P > 0 && (n = n.transition().duration(P)), n.call(t.event)
            }

            function s() {
                w && w.domain(b.range().map(function(t) {
                    return (t - k.x) / k.k
                }).map(b.invert)), S && S.domain(M.range().map(function(t) {
                    return (t - k.y) / k.k
                }).map(M.invert))
            }

            function u(t) {
                L++ || t({
                    type: "zoomstart"
                })
            }

            function l(t) {
                s(), t({
                    type: "zoom",
                    scale: k.k,
                    translate: [k.x, k.y]
                })
            }

            function c(t) {
                --L || t({
                    type: "zoomend"
                }), m = null
            }

            function h() {
                function t() {
                    h = 1, a(no.mouse(r), d), l(s)
                }

                function i() {
                    f.on(T, null).on(z, null), g(h && no.event.target === o), c(s)
                }
                var r = this,
                    o = no.event.target,
                    s = F.of(r, arguments),
                    h = 0,
                    f = no.select(n(r)).on(T, t).on(z, i),
                    d = e(no.mouse(r)),
                    g = Z(r);
                Bu.call(r), u(s)
            }

            function f() {
                function t() {
                    var t = no.touches(g);
                    return d = k.k, t.forEach(function(t) {
                        t.identifier in m && (m[t.identifier] = e(t))
                    }), t
                }

                function n() {
                    var n = no.event.target;
                    no.select(n).on(b, i).on(w, s), M.push(n);
                    for (var e = no.event.changedTouches, r = 0, a = e.length; a > r; ++r) m[e[r].identifier] = null;
                    var u = t(),
                        l = Date.now();
                    if (1 === u.length) {
                        if (500 > l - x) {
                            var c = u[0];
                            o(g, c, m[c.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), _()
                        }
                        x = l
                    } else if (u.length > 1) {
                        var c = u[0],
                            h = u[1],
                            f = c[0] - h[0],
                            d = c[1] - h[1];
                        v = f * f + d * d
                    }
                }

                function i() {
                    var t, n, e, i, o = no.touches(g);
                    Bu.call(g);
                    for (var s = 0, u = o.length; u > s; ++s, i = null)
                        if (e = o[s], i = m[e.identifier]) {
                            if (n) break;
                            t = e, n = i
                        }
                    if (i) {
                        var c = (c = e[0] - t[0]) * c + (c = e[1] - t[1]) * c,
                            h = v && Math.sqrt(c / v);
                        t = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], n = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2], r(h * d)
                    }
                    x = null, a(t, n), l(p)
                }

                function s() {
                    if (no.event.touches.length) {
                        for (var n = no.event.changedTouches, e = 0, i = n.length; i > e; ++e) delete m[n[e].identifier];
                        for (var r in m) return void t()
                    }
                    no.selectAll(M).on(y, null), S.on(N, h).on(R, f), C(), c(p)
                }
                var d, g = this,
                    p = F.of(g, arguments),
                    m = {},
                    v = 0,
                    y = ".zoom-" + no.event.changedTouches[0].identifier,
                    b = "touchmove" + y,
                    w = "touchend" + y,
                    M = [],
                    S = no.select(g),
                    C = Z(g);
                n(), u(p), S.on(N, null).on(R, n)
            }

            function d() {
                var t = F.of(this, arguments);
                y ? clearTimeout(y) : (p = e(m = v || no.mouse(this)), Bu.call(this), u(t)), y = setTimeout(function() {
                    y = null, c(t)
                }, 50), _(), r(Math.pow(2, .002 * Oo()) * k.k), a(m, p), l(t)
            }

            function g() {
                var t = no.mouse(this),
                    n = Math.log(k.k) / Math.LN2;
                o(this, t, e(t), no.event.shiftKey ? Math.ceil(n) - 1 : Math.floor(n) + 1)
            }
            var p, m, v, y, x, b, w, M, S, k = {
                    x: 0,
                    y: 0,
                    k: 1
                },
                E = [960, 500],
                A = Ho,
                P = 250,
                L = 0,
                N = "mousedown.zoom",
                T = "mousemove.zoom",
                z = "mouseup.zoom",
                R = "touchstart.zoom",
                F = C(t, "zoomstart", "zoom", "zoomend");
            return Wo || (Wo = "onwheel" in ro ? (Oo = function() {
                return -no.event.deltaY * (no.event.deltaMode ? 120 : 1)
            }, "wheel") : "onmousewheel" in ro ? (Oo = function() {
                return no.event.wheelDelta
            }, "mousewheel") : (Oo = function() {
                return -no.event.detail
            }, "MozMousePixelScroll")), t.event = function(t) {
                t.each(function() {
                    var t = F.of(this, arguments),
                        n = k;
                    Ru ? no.select(this).transition().each("start.zoom", function() {
                        k = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                        }, u(t)
                    }).tween("zoom:zoom", function() {
                        var e = E[0],
                            i = E[1],
                            r = m ? m[0] : e / 2,
                            a = m ? m[1] : i / 2,
                            o = no.interpolateZoom([(r - k.x) / k.k, (a - k.y) / k.k, e / k.k], [(r - n.x) / n.k, (a - n.y) / n.k, e / n.k]);
                        return function(n) {
                            var i = o(n),
                                s = e / i[2];
                            this.__chart__ = k = {
                                x: r - i[0] * s,
                                y: a - i[1] * s,
                                k: s
                            }, l(t)
                        }
                    }).each("interrupt.zoom", function() {
                        c(t)
                    }).each("end.zoom", function() {
                        c(t)
                    }) : (this.__chart__ = k, u(t), l(t), c(t))
                })
            }, t.translate = function(n) {
                return arguments.length ? (k = {
                    x: +n[0],
                    y: +n[1],
                    k: k.k
                }, s(), t) : [k.x, k.y]
            }, t.scale = function(n) {
                return arguments.length ? (k = {
                    x: k.x,
                    y: k.y,
                    k: +n
                }, s(), t) : k.k
            }, t.scaleExtent = function(n) {
                return arguments.length ? (A = null == n ? Ho : [+n[0], +n[1]], t) : A
            }, t.center = function(n) {
                return arguments.length ? (v = n && [+n[0], +n[1]], t) : v
            }, t.size = function(n) {
                return arguments.length ? (E = n && [+n[0], +n[1]], t) : E
            }, t.duration = function(n) {
                return arguments.length ? (P = +n, t) : P
            }, t.x = function(n) {
                return arguments.length ? (w = n, b = n.copy(), k = {
                    x: 0,
                    y: 0,
                    k: 1
                }, t) : w
            }, t.y = function(n) {
                return arguments.length ? (S = n, M = n.copy(), k = {
                    x: 0,
                    y: 0,
                    k: 1
                }, t) : S
            }, no.rebind(t, F, "on")
        };
        var Oo, Wo, Ho = [0, 1 / 0];
        no.color = ot, ot.prototype.toString = function() {
            return this.rgb() + ""
        }, no.hsl = st;
        var jo = st.prototype = new ot;
        jo.brighter = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new st(this.h, this.s, this.l / t)
        }, jo.darker = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new st(this.h, this.s, t * this.l)
        }, jo.rgb = function() {
            return ut(this.h, this.s, this.l)
        }, no.hcl = lt;
        var Yo = lt.prototype = new ot;
        Yo.brighter = function(t) {
            return new lt(this.h, this.c, Math.min(100, this.l + Uo * (arguments.length ? t : 1)))
        }, Yo.darker = function(t) {
            return new lt(this.h, this.c, Math.max(0, this.l - Uo * (arguments.length ? t : 1)))
        }, Yo.rgb = function() {
            return ct(this.h, this.c, this.l).rgb()
        }, no.lab = ht;
        var Uo = 18,
            Vo = .95047,
            Xo = 1,
            Zo = 1.08883,
            Go = ht.prototype = new ot;
        Go.brighter = function(t) {
            return new ht(Math.min(100, this.l + Uo * (arguments.length ? t : 1)), this.a, this.b)
        }, Go.darker = function(t) {
            return new ht(Math.max(0, this.l - Uo * (arguments.length ? t : 1)), this.a, this.b)
        }, Go.rgb = function() {
            return ft(this.l, this.a, this.b)
        }, no.rgb = vt;
        var Jo = vt.prototype = new ot;
        Jo.brighter = function(t) {
            t = Math.pow(.7, arguments.length ? t : 1);
            var n = this.r,
                e = this.g,
                i = this.b,
                r = 30;
            return n || e || i ? (n && r > n && (n = r), e && r > e && (e = r), i && r > i && (i = r), new vt(Math.min(255, n / t), Math.min(255, e / t), Math.min(255, i / t))) : new vt(r, r, r)
        }, Jo.darker = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new vt(t * this.r, t * this.g, t * this.b)
        }, Jo.hsl = function() {
            return Mt(this.r, this.g, this.b)
        }, Jo.toString = function() {
            return "#" + bt(this.r) + bt(this.g) + bt(this.b)
        };
        var Qo = no.map({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        });
        Qo.forEach(function(t, n) {
            Qo.set(t, yt(n))
        }), no.functor = Ct, no.xhr = Et(y), no.dsv = function(t, n) {
            function e(t, e, a) {
                arguments.length < 3 && (a = e, e = null);
                var o = At(t, n, null == e ? i : r(e), a);
                return o.row = function(t) {
                    return arguments.length ? o.response(null == (e = t) ? i : r(t)) : e
                }, o
            }

            function i(t) {
                return e.parse(t.responseText)
            }

            function r(t) {
                return function(n) {
                    return e.parse(n.responseText, t)
                }
            }

            function a(n) {
                return n.map(o).join(t)
            }

            function o(t) {
                return s.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
            }
            var s = new RegExp('["' + t + "\n]"),
                u = t.charCodeAt(0);
            return e.parse = function(t, n) {
                var i;
                return e.parseRows(t, function(t, e) {
                    if (i) return i(t, e - 1);
                    var r = new Function("d", "return {" + t.map(function(t, n) {
                        return JSON.stringify(t) + ": d[" + n + "]"
                    }).join(",") + "}");
                    i = n ? function(t, e) {
                        return n(r(t), e)
                    } : r
                })
            }, e.parseRows = function(t, n) {
                function e() {
                    if (c >= l) return o;
                    if (r) return r = !1, a;
                    var n = c;
                    if (34 === t.charCodeAt(n)) {
                        for (var e = n; e++ < l;)
                            if (34 === t.charCodeAt(e)) {
                                if (34 !== t.charCodeAt(e + 1)) break;
                                ++e
                            }
                        c = e + 2;
                        var i = t.charCodeAt(e + 1);
                        return 13 === i ? (r = !0, 10 === t.charCodeAt(e + 2) && ++c) : 10 === i && (r = !0), t.slice(n + 1, e).replace(/""/g, '"')
                    }
                    for (; l > c;) {
                        var i = t.charCodeAt(c++),
                            s = 1;
                        if (10 === i) r = !0;
                        else if (13 === i) r = !0, 10 === t.charCodeAt(c) && (++c, ++s);
                        else if (i !== u) continue;
                        return t.slice(n, c - s)
                    }
                    return t.slice(n)
                }
                for (var i, r, a = {}, o = {}, s = [], l = t.length, c = 0, h = 0;
                    (i = e()) !== o;) {
                    for (var f = []; i !== a && i !== o;) f.push(i), i = e();
                    n && null == (f = n(f, h++)) || s.push(f)
                }
                return s
            }, e.format = function(n) {
                if (Array.isArray(n[0])) return e.formatRows(n);
                var i = new v,
                    r = [];
                return n.forEach(function(t) {
                    for (var n in t) i.has(n) || r.push(i.add(n))
                }), [r.map(o).join(t)].concat(n.map(function(n) {
                    return r.map(function(t) {
                        return o(n[t])
                    }).join(t)
                })).join("\n")
            }, e.formatRows = function(t) {
                return t.map(a).join("\n")
            }, e
        }, no.csv = no.dsv(",", "text/csv"), no.tsv = no.dsv("	", "text/tab-separated-values");
        var Ko, ts, ns, es, is, rs = this[b(this, "requestAnimationFrame")] || function(t) {
            setTimeout(t, 17)
        };
        no.timer = function(t, n, e) {
            var i = arguments.length;
            2 > i && (n = 0), 3 > i && (e = Date.now());
            var r = e + n,
                a = {
                    c: t,
                    t: r,
                    f: !1,
                    n: null
                };
            ts ? ts.n = a : Ko = a, ts = a, ns || (es = clearTimeout(es), ns = 1, rs(Nt))
        }, no.timer.flush = function() {
            Tt(), zt()
        }, no.round = function(t, n) {
            return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t)
        };
        var as = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Ft);
        no.formatPrefix = function(t, n) {
            var e = 0;
            return t && (0 > t && (t *= -1), n && (t = no.round(t, Rt(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), as[8 + e / 3]
        };
        var os = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
            ss = no.map({
                b: function(t) {
                    return t.toString(2)
                },
                c: function(t) {
                    return String.fromCharCode(t)
                },
                o: function(t) {
                    return t.toString(8)
                },
                x: function(t) {
                    return t.toString(16)
                },
                X: function(t) {
                    return t.toString(16).toUpperCase()
                },
                g: function(t, n) {
                    return t.toPrecision(n)
                },
                e: function(t, n) {
                    return t.toExponential(n)
                },
                f: function(t, n) {
                    return t.toFixed(n)
                },
                r: function(t, n) {
                    return (t = no.round(t, Rt(t, n))).toFixed(Math.max(0, Math.min(20, Rt(t * (1 + 1e-15), n))))
                }
            }),
            us = no.time = {},
            ls = Date;
        $t.prototype = {
            getDate: function() {
                return this._.getUTCDate()
            },
            getDay: function() {
                return this._.getUTCDay()
            },
            getFullYear: function() {
                return this._.getUTCFullYear()
            },
            getHours: function() {
                return this._.getUTCHours()
            },
            getMilliseconds: function() {
                return this._.getUTCMilliseconds()
            },
            getMinutes: function() {
                return this._.getUTCMinutes()
            },
            getMonth: function() {
                return this._.getUTCMonth()
            },
            getSeconds: function() {
                return this._.getUTCSeconds()
            },
            getTime: function() {
                return this._.getTime()
            },
            getTimezoneOffset: function() {
                return 0
            },
            valueOf: function() {
                return this._.valueOf()
            },
            setDate: function() {
                cs.setUTCDate.apply(this._, arguments)
            },
            setDay: function() {
                cs.setUTCDay.apply(this._, arguments)
            },
            setFullYear: function() {
                cs.setUTCFullYear.apply(this._, arguments)
            },
            setHours: function() {
                cs.setUTCHours.apply(this._, arguments)
            },
            setMilliseconds: function() {
                cs.setUTCMilliseconds.apply(this._, arguments)
            },
            setMinutes: function() {
                cs.setUTCMinutes.apply(this._, arguments)
            },
            setMonth: function() {
                cs.setUTCMonth.apply(this._, arguments)
            },
            setSeconds: function() {
                cs.setUTCSeconds.apply(this._, arguments)
            },
            setTime: function() {
                cs.setTime.apply(this._, arguments)
            }
        };
        var cs = Date.prototype;
        us.year = qt(function(t) {
            return t = us.day(t), t.setMonth(0, 1), t
        }, function(t, n) {
            t.setFullYear(t.getFullYear() + n)
        }, function(t) {
            return t.getFullYear()
        }), us.years = us.year.range, us.years.utc = us.year.utc.range, us.day = qt(function(t) {
            var n = new ls(2e3, 0);
            return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
        }, function(t, n) {
            t.setDate(t.getDate() + n)
        }, function(t) {
            return t.getDate() - 1
        }), us.days = us.day.range, us.days.utc = us.day.utc.range, us.dayOfYear = function(t) {
            var n = us.year(t);
            return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5)
        }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, n) {
            n = 7 - n;
            var e = us[t] = qt(function(t) {
                return (t = us.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
            }, function(t, n) {
                t.setDate(t.getDate() + 7 * Math.floor(n))
            }, function(t) {
                var e = us.year(t).getDay();
                return Math.floor((us.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
            });
            us[t + "s"] = e.range, us[t + "s"].utc = e.utc.range, us[t + "OfYear"] = function(t) {
                var e = us.year(t).getDay();
                return Math.floor((us.dayOfYear(t) + (e + n) % 7) / 7)
            }
        }), us.week = us.sunday, us.weeks = us.sunday.range, us.weeks.utc = us.sunday.utc.range, us.weekOfYear = us.sundayOfYear;
        var hs = {
                "-": "",
                _: " ",
                0: "0"
            },
            fs = /^\s*\d+/,
            ds = /^%/;
        no.locale = function(t) {
            return {
                numberFormat: Bt(t),
                timeFormat: Ot(t)
            }
        };
        var gs = no.locale({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            date: "%m/%d/%Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        no.format = gs.numberFormat, no.geo = {}, ln.prototype = {
            s: 0,
            t: 0,
            add: function(t) {
                cn(t, this.t, ps), cn(ps.s, this.s, this), this.s ? this.t += ps.t : this.s = ps.t
            },
            reset: function() {
                this.s = this.t = 0
            },
            valueOf: function() {
                return this.s
            }
        };
        var ps = new ln;
        no.geo.stream = function(t, n) {
            t && ms.hasOwnProperty(t.type) ? ms[t.type](t, n) : hn(t, n)
        };
        var ms = {
                Feature: function(t, n) {
                    hn(t.geometry, n)
                },
                FeatureCollection: function(t, n) {
                    for (var e = t.features, i = -1, r = e.length; ++i < r;) hn(e[i].geometry, n)
                }
            },
            vs = {
                Sphere: function(t, n) {
                    n.sphere()
                },
                Point: function(t, n) {
                    t = t.coordinates, n.point(t[0], t[1], t[2])
                },
                MultiPoint: function(t, n) {
                    for (var e = t.coordinates, i = -1, r = e.length; ++i < r;) t = e[i], n.point(t[0], t[1], t[2])
                },
                LineString: function(t, n) {
                    fn(t.coordinates, n, 0)
                },
                MultiLineString: function(t, n) {
                    for (var e = t.coordinates, i = -1, r = e.length; ++i < r;) fn(e[i], n, 0)
                },
                Polygon: function(t, n) {
                    dn(t.coordinates, n)
                },
                MultiPolygon: function(t, n) {
                    for (var e = t.coordinates, i = -1, r = e.length; ++i < r;) dn(e[i], n)
                },
                GeometryCollection: function(t, n) {
                    for (var e = t.geometries, i = -1, r = e.length; ++i < r;) hn(e[i], n)
                }
            };
        no.geo.area = function(t) {
            return ys = 0, no.geo.stream(t, bs), ys
        };
        var ys, xs = new ln,
            bs = {
                sphere: function() {
                    ys += 4 * To
                },
                point: w,
                lineStart: w,
                lineEnd: w,
                polygonStart: function() {
                    xs.reset(), bs.lineStart = gn
                },
                polygonEnd: function() {
                    var t = 2 * xs;
                    ys += 0 > t ? 4 * To + t : t, bs.lineStart = bs.lineEnd = bs.point = w
                }
            };
        no.geo.bounds = function() {
            function t(t, n) {
                x.push(b = [c = t, f = t]), h > n && (h = n), n > d && (d = n)
            }

            function n(n, e) {
                var i = pn([n * Bo, e * Bo]);
                if (v) {
                    var r = vn(v, i),
                        a = [r[1], -r[0], 0],
                        o = vn(a, r);
                    bn(o), o = wn(o);
                    var u = n - g,
                        l = u > 0 ? 1 : -1,
                        p = o[0] * Io * l,
                        m = go(u) > 180;
                    if (m ^ (p > l * g && l * n > p)) {
                        var y = o[1] * Io;
                        y > d && (d = y)
                    } else if (p = (p + 360) % 360 - 180, m ^ (p > l * g && l * n > p)) {
                        var y = -o[1] * Io;
                        h > y && (h = y)
                    } else h > e && (h = e), e > d && (d = e);
                    m ? g > n ? s(c, n) > s(c, f) && (f = n) : s(n, f) > s(c, f) && (c = n) : f >= c ? (c > n && (c = n), n > f && (f = n)) : n > g ? s(c, n) > s(c, f) && (f = n) : s(n, f) > s(c, f) && (c = n)
                } else t(n, e);
                v = i, g = n
            }

            function e() {
                w.point = n
            }

            function i() {
                b[0] = c, b[1] = f, w.point = t, v = null
            }

            function r(t, e) {
                if (v) {
                    var i = t - g;
                    y += go(i) > 180 ? i + (i > 0 ? 360 : -360) : i
                } else p = t, m = e;
                bs.point(t, e), n(t, e)
            }

            function a() {
                bs.lineStart()
            }

            function o() {
                r(p, m), bs.lineEnd(), go(y) > Lo && (c = -(f = 180)), b[0] = c, b[1] = f, v = null
            }

            function s(t, n) {
                return (n -= t) < 0 ? n + 360 : n
            }

            function u(t, n) {
                return t[0] - n[0]
            }

            function l(t, n) {
                return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
            }
            var c, h, f, d, g, p, m, v, y, x, b, w = {
                point: t,
                lineStart: e,
                lineEnd: i,
                polygonStart: function() {
                    w.point = r, w.lineStart = a, w.lineEnd = o, y = 0, bs.polygonStart()
                },
                polygonEnd: function() {
                    bs.polygonEnd(), w.point = t, w.lineStart = e, w.lineEnd = i, 0 > xs ? (c = -(f = 180), h = -(d = 90)) : y > Lo ? d = 90 : -Lo > y && (h = -90), b[0] = c, b[1] = f
                }
            };
            return function(t) {
                d = f = -(c = h = 1 / 0), x = [], no.geo.stream(t, w);
                var n = x.length;
                if (n) {
                    x.sort(u);
                    for (var e, i = 1, r = x[0], a = [r]; n > i; ++i) e = x[i], l(e[0], r) || l(e[1], r) ? (s(r[0], e[1]) > s(r[0], r[1]) && (r[1] = e[1]), s(e[0], r[1]) > s(r[0], r[1]) && (r[0] = e[0])) : a.push(r = e);
                    for (var o, e, g = -1 / 0, n = a.length - 1, i = 0, r = a[n]; n >= i; r = e, ++i) e = a[i], (o = s(r[1], e[0])) > g && (g = o, c = e[0], f = r[1])
                }
                return x = b = null, 1 / 0 === c || 1 / 0 === h ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [c, h],
                    [f, d]
                ]
            }
        }(), no.geo.centroid = function(t) {
            ws = Ms = Ss = _s = ks = Cs = Es = As = Ps = Ls = Ns = 0, no.geo.stream(t, Ts);
            var n = Ps,
                e = Ls,
                i = Ns,
                r = n * n + e * e + i * i;
            return No > r && (n = Cs, e = Es, i = As, Lo > Ms && (n = Ss, e = _s, i = ks), r = n * n + e * e + i * i, No > r) ? [NaN, NaN] : [Math.atan2(e, n) * Io, nt(i / Math.sqrt(r)) * Io]
        };
        var ws, Ms, Ss, _s, ks, Cs, Es, As, Ps, Ls, Ns, Ts = {
                sphere: w,
                point: Sn,
                lineStart: kn,
                lineEnd: Cn,
                polygonStart: function() {
                    Ts.lineStart = En
                },
                polygonEnd: function() {
                    Ts.lineStart = kn
                }
            },
            zs = zn(Pn, In, qn, [-To, -To / 2]),
            Rs = 1e9;
        no.geo.clipExtent = function() {
            var t, n, e, i, r, a, o = {
                stream: function(t) {
                    return r && (r.valid = !1), r = a(t), r.valid = !0, r
                },
                extent: function(s) {
                    return arguments.length ? (a = Hn(t = +s[0][0], n = +s[0][1], e = +s[1][0], i = +s[1][1]), r && (r.valid = !1, r = null), o) : [
                        [t, n],
                        [e, i]
                    ]
                }
            };
            return o.extent([
                [0, 0],
                [960, 500]
            ])
        }, (no.geo.conicEqualArea = function() {
            return jn(Yn)
        }).raw = Yn, no.geo.albers = function() {
            return no.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
        }, no.geo.albersUsa = function() {
            function t(t) {
                var a = t[0],
                    o = t[1];
                return n = null, e(a, o), n || (i(a, o), n) || r(a, o), n
            }
            var n, e, i, r, a = no.geo.albers(),
                o = no.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                s = no.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                u = {
                    point: function(t, e) {
                        n = [t, e]
                    }
                };
            return t.invert = function(t) {
                var n = a.scale(),
                    e = a.translate(),
                    i = (t[0] - e[0]) / n,
                    r = (t[1] - e[1]) / n;
                return (r >= .12 && .234 > r && i >= -.425 && -.214 > i ? o : r >= .166 && .234 > r && i >= -.214 && -.115 > i ? s : a).invert(t)
            }, t.stream = function(t) {
                var n = a.stream(t),
                    e = o.stream(t),
                    i = s.stream(t);
                return {
                    point: function(t, r) {
                        n.point(t, r), e.point(t, r), i.point(t, r)
                    },
                    sphere: function() {
                        n.sphere(), e.sphere(), i.sphere()
                    },
                    lineStart: function() {
                        n.lineStart(), e.lineStart(), i.lineStart()
                    },
                    lineEnd: function() {
                        n.lineEnd(), e.lineEnd(), i.lineEnd()
                    },
                    polygonStart: function() {
                        n.polygonStart(), e.polygonStart(), i.polygonStart()
                    },
                    polygonEnd: function() {
                        n.polygonEnd(), e.polygonEnd(), i.polygonEnd()
                    }
                }
            }, t.precision = function(n) {
                return arguments.length ? (a.precision(n), o.precision(n), s.precision(n), t) : a.precision()
            }, t.scale = function(n) {
                return arguments.length ? (a.scale(n), o.scale(.35 * n), s.scale(n), t.translate(a.translate())) : a.scale()
            }, t.translate = function(n) {
                if (!arguments.length) return a.translate();
                var l = a.scale(),
                    c = +n[0],
                    h = +n[1];
                return e = a.translate(n).clipExtent([
                    [c - .455 * l, h - .238 * l],
                    [c + .455 * l, h + .238 * l]
                ]).stream(u).point, i = o.translate([c - .307 * l, h + .201 * l]).clipExtent([
                    [c - .425 * l + Lo, h + .12 * l + Lo],
                    [c - .214 * l - Lo, h + .234 * l - Lo]
                ]).stream(u).point, r = s.translate([c - .205 * l, h + .212 * l]).clipExtent([
                    [c - .214 * l + Lo, h + .166 * l + Lo],
                    [c - .115 * l - Lo, h + .234 * l - Lo]
                ]).stream(u).point, t
            }, t.scale(1070)
        };
        var Fs, Bs, Is, $s, qs, Ds, Os = {
                point: w,
                lineStart: w,
                lineEnd: w,
                polygonStart: function() {
                    Bs = 0, Os.lineStart = Un
                },
                polygonEnd: function() {
                    Os.lineStart = Os.lineEnd = Os.point = w, Fs += go(Bs / 2)
                }
            },
            Ws = {
                point: Vn,
                lineStart: w,
                lineEnd: w,
                polygonStart: w,
                polygonEnd: w
            },
            Hs = {
                point: Gn,
                lineStart: Jn,
                lineEnd: Qn,
                polygonStart: function() {
                    Hs.lineStart = Kn
                },
                polygonEnd: function() {
                    Hs.point = Gn, Hs.lineStart = Jn, Hs.lineEnd = Qn
                }
            };
        no.geo.path = function() {
            function t(t) {
                return t && ("function" == typeof s && a.pointRadius(+s.apply(this, arguments)), o && o.valid || (o = r(a)), no.geo.stream(t, o)), a.result()
            }

            function n() {
                return o = null, t
            }
            var e, i, r, a, o, s = 4.5;
            return t.area = function(t) {
                return Fs = 0, no.geo.stream(t, r(Os)), Fs
            }, t.centroid = function(t) {
                return Ss = _s = ks = Cs = Es = As = Ps = Ls = Ns = 0, no.geo.stream(t, r(Hs)), Ns ? [Ps / Ns, Ls / Ns] : As ? [Cs / As, Es / As] : ks ? [Ss / ks, _s / ks] : [NaN, NaN]
            }, t.bounds = function(t) {
                return qs = Ds = -(Is = $s = 1 / 0), no.geo.stream(t, r(Ws)), [
                    [Is, $s],
                    [qs, Ds]
                ]
            }, t.projection = function(t) {
                return arguments.length ? (r = (e = t) ? t.stream || ee(t) : y, n()) : e
            }, t.context = function(t) {
                return arguments.length ? (a = null == (i = t) ? new Xn : new te(t), "function" != typeof s && a.pointRadius(s), n()) : i
            }, t.pointRadius = function(n) {
                return arguments.length ? (s = "function" == typeof n ? n : (a.pointRadius(+n), +n), t) : s
            }, t.projection(no.geo.albersUsa()).context(null)
        }, no.geo.transform = function(t) {
            return {
                stream: function(n) {
                    var e = new ie(n);
                    for (var i in t) e[i] = t[i];
                    return e
                }
            }
        }, ie.prototype = {
            point: function(t, n) {
                this.stream.point(t, n)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        }, no.geo.projection = ae, no.geo.projectionMutator = oe, (no.geo.equirectangular = function() {
            return ae(ue)
        }).raw = ue.invert = ue, no.geo.rotation = function(t) {
            function n(n) {
                return n = t(n[0] * Bo, n[1] * Bo), n[0] *= Io, n[1] *= Io, n
            }
            return t = ce(t[0] % 360 * Bo, t[1] * Bo, t.length > 2 ? t[2] * Bo : 0), n.invert = function(n) {
                return n = t.invert(n[0] * Bo, n[1] * Bo), n[0] *= Io, n[1] *= Io, n
            }, n
        }, le.invert = ue, no.geo.circle = function() {
            function t() {
                var t = "function" == typeof i ? i.apply(this, arguments) : i,
                    n = ce(-t[0] * Bo, -t[1] * Bo, 0).invert,
                    r = [];
                return e(null, null, 1, {
                    point: function(t, e) {
                        r.push(t = n(t, e)), t[0] *= Io, t[1] *= Io
                    }
                }), {
                    type: "Polygon",
                    coordinates: [r]
                }
            }
            var n, e, i = [0, 0],
                r = 6;
            return t.origin = function(n) {
                return arguments.length ? (i = n, t) : i
            }, t.angle = function(i) {
                return arguments.length ? (e = ge((n = +i) * Bo, r * Bo), t) : n
            }, t.precision = function(i) {
                return arguments.length ? (e = ge(n * Bo, (r = +i) * Bo), t) : r
            }, t.angle(90)
        }, no.geo.distance = function(t, n) {
            var e, i = (n[0] - t[0]) * Bo,
                r = t[1] * Bo,
                a = n[1] * Bo,
                o = Math.sin(i),
                s = Math.cos(i),
                u = Math.sin(r),
                l = Math.cos(r),
                c = Math.sin(a),
                h = Math.cos(a);
            return Math.atan2(Math.sqrt((e = h * o) * e + (e = l * c - u * h * s) * e), u * c + l * h * s)
        }, no.geo.graticule = function() {
            function t() {
                return {
                    type: "MultiLineString",
                    coordinates: n()
                }
            }

            function n() {
                return no.range(Math.ceil(a / m) * m, r, m).map(f).concat(no.range(Math.ceil(l / v) * v, u, v).map(d)).concat(no.range(Math.ceil(i / g) * g, e, g).filter(function(t) {
                    return go(t % m) > Lo
                }).map(c)).concat(no.range(Math.ceil(s / p) * p, o, p).filter(function(t) {
                    return go(t % v) > Lo
                }).map(h))
            }
            var e, i, r, a, o, s, u, l, c, h, f, d, g = 10,
                p = g,
                m = 90,
                v = 360,
                y = 2.5;
            return t.lines = function() {
                return n().map(function(t) {
                    return {
                        type: "LineString",
                        coordinates: t
                    }
                })
            }, t.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [f(a).concat(d(u).slice(1), f(r).reverse().slice(1), d(l).reverse().slice(1))]
                }
            }, t.extent = function(n) {
                return arguments.length ? t.majorExtent(n).minorExtent(n) : t.minorExtent()
            }, t.majorExtent = function(n) {
                return arguments.length ? (a = +n[0][0], r = +n[1][0], l = +n[0][1], u = +n[1][1], a > r && (n = a, a = r, r = n), l > u && (n = l, l = u, u = n), t.precision(y)) : [
                    [a, l],
                    [r, u]
                ]
            }, t.minorExtent = function(n) {
                return arguments.length ? (i = +n[0][0], e = +n[1][0], s = +n[0][1], o = +n[1][1], i > e && (n = i, i = e, e = n), s > o && (n = s, s = o, o = n), t.precision(y)) : [
                    [i, s],
                    [e, o]
                ]
            }, t.step = function(n) {
                return arguments.length ? t.majorStep(n).minorStep(n) : t.minorStep()
            }, t.majorStep = function(n) {
                return arguments.length ? (m = +n[0], v = +n[1], t) : [m, v]
            }, t.minorStep = function(n) {
                return arguments.length ? (g = +n[0], p = +n[1], t) : [g, p]
            }, t.precision = function(n) {
                return arguments.length ? (y = +n, c = me(s, o, 90), h = ve(i, e, y), f = me(l, u, 90), d = ve(a, r, y), t) : y
            }, t.majorExtent([
                [-180, -90 + Lo],
                [180, 90 - Lo]
            ]).minorExtent([
                [-180, -80 - Lo],
                [180, 80 + Lo]
            ])
        }, no.geo.greatArc = function() {
            function t() {
                return {
                    type: "LineString",
                    coordinates: [n || i.apply(this, arguments), e || r.apply(this, arguments)]
                }
            }
            var n, e, i = ye,
                r = xe;
            return t.distance = function() {
                return no.geo.distance(n || i.apply(this, arguments), e || r.apply(this, arguments))
            }, t.source = function(e) {
                return arguments.length ? (i = e, n = "function" == typeof e ? null : e, t) : i
            }, t.target = function(n) {
                return arguments.length ? (r = n, e = "function" == typeof n ? null : n, t) : r
            }, t.precision = function() {
                return arguments.length ? t : 0
            }, t
        }, no.geo.interpolate = function(t, n) {
            return be(t[0] * Bo, t[1] * Bo, n[0] * Bo, n[1] * Bo)
        }, no.geo.length = function(t) {
            return js = 0, no.geo.stream(t, Ys), js
        };
        var js, Ys = {
                sphere: w,
                point: w,
                lineStart: we,
                lineEnd: w,
                polygonStart: w,
                polygonEnd: w
            },
            Us = Me(function(t) {
                return Math.sqrt(2 / (1 + t))
            }, function(t) {
                return 2 * Math.asin(t / 2)
            });
        (no.geo.azimuthalEqualArea = function() {
            return ae(Us)
        }).raw = Us;
        var Vs = Me(function(t) {
            var n = Math.acos(t);
            return n && n / Math.sin(n)
        }, y);
        (no.geo.azimuthalEquidistant = function() {
            return ae(Vs)
        }).raw = Vs, (no.geo.conicConformal = function() {
            return jn(Se)
        }).raw = Se, (no.geo.conicEquidistant = function() {
            return jn(_e)
        }).raw = _e;
        var Xs = Me(function(t) {
            return 1 / t
        }, Math.atan);
        (no.geo.gnomonic = function() {
            return ae(Xs)
        }).raw = Xs, ke.invert = function(t, n) {
            return [t, 2 * Math.atan(Math.exp(n)) - Fo]
        }, (no.geo.mercator = function() {
            return Ce(ke)
        }).raw = ke;
        var Zs = Me(function() {
            return 1
        }, Math.asin);
        (no.geo.orthographic = function() {
            return ae(Zs)
        }).raw = Zs;
        var Gs = Me(function(t) {
            return 1 / (1 + t)
        }, function(t) {
            return 2 * Math.atan(t)
        });
        (no.geo.stereographic = function() {
            return ae(Gs)
        }).raw = Gs, Ee.invert = function(t, n) {
            return [-n, 2 * Math.atan(Math.exp(t)) - Fo]
        }, (no.geo.transverseMercator = function() {
            var t = Ce(Ee),
                n = t.center,
                e = t.rotate;
            return t.center = function(t) {
                return t ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
            }, t.rotate = function(t) {
                return t ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
            }, e([0, 0, 90])
        }).raw = Ee, no.geom = {}, no.geom.hull = function(t) {
            function n(t) {
                if (t.length < 3) return [];
                var n, r = Ct(e),
                    a = Ct(i),
                    o = t.length,
                    s = [],
                    u = [];
                for (n = 0; o > n; n++) s.push([+r.call(this, t[n], n), +a.call(this, t[n], n), n]);
                for (s.sort(Ne), n = 0; o > n; n++) u.push([s[n][0], -s[n][1]]);
                var l = Le(s),
                    c = Le(u),
                    h = c[0] === l[0],
                    f = c[c.length - 1] === l[l.length - 1],
                    d = [];
                for (n = l.length - 1; n >= 0; --n) d.push(t[s[l[n]][2]]);
                for (n = +h; n < c.length - f; ++n) d.push(t[s[c[n]][2]]);
                return d
            }
            var e = Ae,
                i = Pe;
            return arguments.length ? n(t) : (n.x = function(t) {
                return arguments.length ? (e = t, n) : e
            }, n.y = function(t) {
                return arguments.length ? (i = t, n) : i
            }, n)
        }, no.geom.polygon = function(t) {
            return xo(t, Js), t
        };
        var Js = no.geom.polygon.prototype = [];
        Js.area = function() {
            for (var t, n = -1, e = this.length, i = this[e - 1], r = 0; ++n < e;) t = i, i = this[n], r += t[1] * i[0] - t[0] * i[1];
            return .5 * r
        }, Js.centroid = function(t) {
            var n, e, i = -1,
                r = this.length,
                a = 0,
                o = 0,
                s = this[r - 1];
            for (arguments.length || (t = -1 / (6 * this.area())); ++i < r;) n = s, s = this[i], e = n[0] * s[1] - s[0] * n[1], a += (n[0] + s[0]) * e, o += (n[1] + s[1]) * e;
            return [a * t, o * t]
        }, Js.clip = function(t) {
            for (var n, e, i, r, a, o, s = Re(t), u = -1, l = this.length - Re(this), c = this[l - 1]; ++u < l;) {
                for (n = t.slice(), t.length = 0, r = this[u], a = n[(i = n.length - s) - 1], e = -1; ++e < i;) o = n[e], Te(o, c, r) ? (Te(a, c, r) || t.push(ze(a, o, c, r)), t.push(o)) : Te(a, c, r) && t.push(ze(a, o, c, r)), a = o;
                s && t.push(t[0]), c = r
            }
            return t
        };
        var Qs, Ks, tu, nu, eu, iu = [],
            ru = [];
        We.prototype.prepare = function() {
            for (var t, n = this.edges, e = n.length; e--;) t = n[e].edge, t.b && t.a || n.splice(e, 1);
            return n.sort(je), n.length
        }, ti.prototype = {
            start: function() {
                return this.edge.l === this.site ? this.edge.a : this.edge.b
            },
            end: function() {
                return this.edge.l === this.site ? this.edge.b : this.edge.a
            }
        }, ni.prototype = {
            insert: function(t, n) {
                var e, i, r;
                if (t) {
                    if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                        for (t = t.R; t.L;) t = t.L;
                        t.L = n
                    } else t.R = n;
                    e = t
                } else this._ ? (t = ai(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) i = e.U, e === i.L ? (r = i.R, r && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.R && (ii(this, e), t = e, e = t.U), e.C = !1, i.C = !0, ri(this, i))) : (r = i.L, r && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.L && (ri(this, e), t = e, e = t.U), e.C = !1, i.C = !0, ii(this, i))), e = t.U;
                this._.C = !1
            },
            remove: function(t) {
                t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                var n, e, i, r = t.U,
                    a = t.L,
                    o = t.R;
                if (e = a ? o ? ai(o) : a : o, r ? r.L === t ? r.L = e : r.R = e : this._ = e, a && o ? (i = e.C, e.C = t.C, e.L = a, a.U = e, e !== o ? (r = e.U, e.U = t.U, t = e.R, r.L = t, e.R = o, o.U = e) : (e.U = r, r = e, t = e.R)) : (i = t.C, t = e), t && (t.U = r), !i) {
                    if (t && t.C) return void(t.C = !1);
                    do {
                        if (t === this._) break;
                        if (t === r.L) {
                            if (n = r.R, n.C && (n.C = !1, r.C = !0, ii(this, r), n = r.R), n.L && n.L.C || n.R && n.R.C) {
                                n.R && n.R.C || (n.L.C = !1, n.C = !0, ri(this, n), n = r.R), n.C = r.C, r.C = n.R.C = !1, ii(this, r), t = this._;
                                break
                            }
                        } else if (n = r.L, n.C && (n.C = !1, r.C = !0, ri(this, r), n = r.L), n.L && n.L.C || n.R && n.R.C) {
                            n.L && n.L.C || (n.R.C = !1, n.C = !0, ii(this, n), n = r.L), n.C = r.C, r.C = n.L.C = !1, ri(this, r), t = this._;
                            break
                        }
                        n.C = !0, t = r, r = r.U
                    } while (!t.C);
                    t && (t.C = !1)
                }
            }
        }, no.geom.voronoi = function(t) {
            function n(t) {
                var n = new Array(t.length),
                    i = s[0][0],
                    r = s[0][1],
                    a = s[1][0],
                    o = s[1][1];
                return oi(e(t), s).cells.forEach(function(e, s) {
                    var u = e.edges,
                        l = e.site,
                        c = n[s] = u.length ? u.map(function(t) {
                            var n = t.start();
                            return [n.x, n.y]
                        }) : l.x >= i && l.x <= a && l.y >= r && l.y <= o ? [
                            [i, o],
                            [a, o],
                            [a, r],
                            [i, r]
                        ] : [];
                    c.point = t[s]
                }), n
            }

            function e(t) {
                return t.map(function(t, n) {
                    return {
                        x: Math.round(a(t, n) / Lo) * Lo,
                        y: Math.round(o(t, n) / Lo) * Lo,
                        i: n
                    }
                })
            }
            var i = Ae,
                r = Pe,
                a = i,
                o = r,
                s = au;
            return t ? n(t) : (n.links = function(t) {
                return oi(e(t)).edges.filter(function(t) {
                    return t.l && t.r
                }).map(function(n) {
                    return {
                        source: t[n.l.i],
                        target: t[n.r.i]
                    }
                })
            }, n.triangles = function(t) {
                var n = [];
                return oi(e(t)).cells.forEach(function(e, i) {
                    for (var r, a, o = e.site, s = e.edges.sort(je), u = -1, l = s.length, c = s[l - 1].edge, h = c.l === o ? c.r : c.l; ++u < l;) r = c, a = h, c = s[u].edge, h = c.l === o ? c.r : c.l, i < a.i && i < h.i && ui(o, a, h) < 0 && n.push([t[i], t[a.i], t[h.i]])
                }), n
            }, n.x = function(t) {
                return arguments.length ? (a = Ct(i = t), n) : i
            }, n.y = function(t) {
                return arguments.length ? (o = Ct(r = t), n) : r
            }, n.clipExtent = function(t) {
                return arguments.length ? (s = null == t ? au : t, n) : s === au ? null : s
            }, n.size = function(t) {
                return arguments.length ? n.clipExtent(t && [
                    [0, 0], t
                ]) : s === au ? null : s && s[1]
            }, n)
        };
        var au = [
            [-1e6, -1e6],
            [1e6, 1e6]
        ];
        no.geom.delaunay = function(t) {
            return no.geom.voronoi().triangles(t)
        }, no.geom.quadtree = function(t, n, e, i, r) {
            function a(t) {
                function a(t, n, e, i, r, a, o, s) {
                    if (!isNaN(e) && !isNaN(i))
                        if (t.leaf) {
                            var u = t.x,
                                c = t.y;
                            if (null != u)
                                if (go(u - e) + go(c - i) < .01) l(t, n, e, i, r, a, o, s);
                                else {
                                    var h = t.point;
                                    t.x = t.y = t.point = null, l(t, h, u, c, r, a, o, s), l(t, n, e, i, r, a, o, s)
                                } else t.x = e, t.y = i, t.point = n
                        } else l(t, n, e, i, r, a, o, s)
                }

                function l(t, n, e, i, r, o, s, u) {
                    var l = .5 * (r + s),
                        c = .5 * (o + u),
                        h = e >= l,
                        f = i >= c,
                        d = f << 1 | h;
                    t.leaf = !1, t = t.nodes[d] || (t.nodes[d] = hi()), h ? r = l : s = l, f ? o = c : u = c, a(t, n, e, i, r, o, s, u)
                }
                var c, h, f, d, g, p, m, v, y, x = Ct(s),
                    b = Ct(u);
                if (null != n) p = n, m = e, v = i, y = r;
                else if (v = y = -(p = m = 1 / 0), h = [], f = [], g = t.length, o)
                    for (d = 0; g > d; ++d) c = t[d], c.x < p && (p = c.x), c.y < m && (m = c.y), c.x > v && (v = c.x), c.y > y && (y = c.y), h.push(c.x), f.push(c.y);
                else
                    for (d = 0; g > d; ++d) {
                        var w = +x(c = t[d], d),
                            M = +b(c, d);
                        p > w && (p = w), m > M && (m = M), w > v && (v = w), M > y && (y = M), h.push(w), f.push(M)
                    }
                var S = v - p,
                    _ = y - m;
                S > _ ? y = m + S : v = p + _;
                var k = hi();
                if (k.add = function(t) {
                        a(k, t, +x(t, ++d), +b(t, d), p, m, v, y)
                    }, k.visit = function(t) {
                        fi(t, k, p, m, v, y)
                    }, k.find = function(t) {
                        return di(k, t[0], t[1], p, m, v, y)
                    }, d = -1, null == n) {
                    for (; ++d < g;) a(k, t[d], h[d], f[d], p, m, v, y);
                    --d
                } else t.forEach(k.add);
                return h = f = t = c = null, k
            }
            var o, s = Ae,
                u = Pe;
            return (o = arguments.length) ? (s = li, u = ci, 3 === o && (r = e, i = n, e = n = 0), a(t)) : (a.x = function(t) {
                return arguments.length ? (s = t, a) : s
            }, a.y = function(t) {
                return arguments.length ? (u = t, a) : u
            }, a.extent = function(t) {
                return arguments.length ? (null == t ? n = e = i = r = null : (n = +t[0][0], e = +t[0][1], i = +t[1][0], r = +t[1][1]), a) : null == n ? null : [
                    [n, e],
                    [i, r]
                ]
            }, a.size = function(t) {
                return arguments.length ? (null == t ? n = e = i = r = null : (n = e = 0, i = +t[0], r = +t[1]), a) : null == n ? null : [i - n, r - e]
            }, a)
        }, no.interpolateRgb = gi, no.interpolateObject = pi, no.interpolateNumber = mi, no.interpolateString = vi;
        var ou = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            su = new RegExp(ou.source, "g");
        no.interpolate = yi, no.interpolators = [function(t, n) {
            var e = typeof n;
            return ("string" === e ? Qo.has(n) || /^(#|rgb\(|hsl\()/.test(n) ? gi : vi : n instanceof ot ? gi : Array.isArray(n) ? xi : "object" === e && isNaN(n) ? pi : mi)(t, n)
        }], no.interpolateArray = xi;
        var uu = function() {
                return y
            },
            lu = no.map({
                linear: uu,
                poly: Ci,
                quad: function() {
                    return Si
                },
                cubic: function() {
                    return _i
                },
                sin: function() {
                    return Ei
                },
                exp: function() {
                    return Ai
                },
                circle: function() {
                    return Pi
                },
                elastic: Li,
                back: Ni,
                bounce: function() {
                    return Ti
                }
            }),
            cu = no.map({
                "in": y,
                out: wi,
                "in-out": Mi,
                "out-in": function(t) {
                    return Mi(wi(t))
                }
            });
        no.ease = function(t) {
            var n = t.indexOf("-"),
                e = n >= 0 ? t.slice(0, n) : t,
                i = n >= 0 ? t.slice(n + 1) : "in";
            return e = lu.get(e) || uu, i = cu.get(i) || y, bi(i(e.apply(null, eo.call(arguments, 1))))
        }, no.interpolateHcl = zi, no.interpolateHsl = Ri, no.interpolateLab = Fi, no.interpolateRound = Bi, no.transform = function(t) {
            var n = ro.createElementNS(no.ns.prefix.svg, "g");
            return (no.transform = function(t) {
                if (null != t) {
                    n.setAttribute("transform", t);
                    var e = n.transform.baseVal.consolidate()
                }
                return new Ii(e ? e.matrix : hu)
            })(t)
        }, Ii.prototype.toString = function() {
            return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
        };
        var hu = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        no.interpolateTransform = Oi, no.layout = {}, no.layout.bundle = function() {
            return function(t) {
                for (var n = [], e = -1, i = t.length; ++e < i;) n.push(ji(t[e]));
                return n
            }
        }, no.layout.chord = function() {
            function t() {
                var t, l, h, f, d, g = {},
                    p = [],
                    m = no.range(a),
                    v = [];
                for (e = [], i = [], t = 0, f = -1; ++f < a;) {
                    for (l = 0, d = -1; ++d < a;) l += r[f][d];
                    p.push(l), v.push(no.range(a)), t += l
                }
                for (o && m.sort(function(t, n) {
                        return o(p[t], p[n])
                    }), s && v.forEach(function(t, n) {
                        t.sort(function(t, e) {
                            return s(r[n][t], r[n][e])
                        })
                    }), t = (zo - c * a) / t, l = 0, f = -1; ++f < a;) {
                    for (h = l, d = -1; ++d < a;) {
                        var y = m[f],
                            x = v[y][d],
                            b = r[y][x],
                            w = l,
                            M = l += b * t;
                        g[y + "-" + x] = {
                            index: y,
                            subindex: x,
                            startAngle: w,
                            endAngle: M,
                            value: b
                        }
                    }
                    i[y] = {
                        index: y,
                        startAngle: h,
                        endAngle: l,
                        value: (l - h) / t
                    }, l += c
                }
                for (f = -1; ++f < a;)
                    for (d = f - 1; ++d < a;) {
                        var S = g[f + "-" + d],
                            _ = g[d + "-" + f];
                        (S.value || _.value) && e.push(S.value < _.value ? {
                            source: _,
                            target: S
                        } : {
                            source: S,
                            target: _
                        })
                    }
                u && n()
            }

            function n() {
                e.sort(function(t, n) {
                    return u((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2)
                })
            }
            var e, i, r, a, o, s, u, l = {},
                c = 0;
            return l.matrix = function(t) {
                return arguments.length ? (a = (r = t) && r.length, e = i = null, l) : r
            }, l.padding = function(t) {
                return arguments.length ? (c = t, e = i = null, l) : c
            }, l.sortGroups = function(t) {
                return arguments.length ? (o = t, e = i = null, l) : o
            }, l.sortSubgroups = function(t) {
                return arguments.length ? (s = t, e = null, l) : s
            }, l.sortChords = function(t) {
                return arguments.length ? (u = t, e && n(), l) : u
            }, l.chords = function() {
                return e || t(), e
            }, l.groups = function() {
                return i || t(), i
            }, l
        }, no.layout.force = function() {
            function t(t) {
                return function(n, e, i, r) {
                    if (n.point !== t) {
                        var a = n.cx - t.x,
                            o = n.cy - t.y,
                            s = r - e,
                            u = a * a + o * o;
                        if (u > s * s / m) {
                            if (g > u) {
                                var l = n.charge / u;
                                t.px -= a * l, t.py -= o * l
                            }
                            return !0
                        }
                        if (n.point && u && g > u) {
                            var l = n.pointCharge / u;
                            t.px -= a * l, t.py -= o * l
                        }
                    }
                    return !n.charge
                }
            }

            function n(t) {
                t.px = no.event.x, t.py = no.event.y, s.resume()
            }
            var e, i, r, a, o, s = {},
                u = no.dispatch("start", "tick", "end"),
                l = [1, 1],
                c = .9,
                h = fu,
                f = du,
                d = -30,
                g = gu,
                p = .1,
                m = .64,
                v = [],
                x = [];
            return s.tick = function() {
                if ((i *= .99) < .005) return u.end({
                    type: "end",
                    alpha: i = 0
                }), !0;
                var n, e, s, h, f, g, m, y, b, w = v.length,
                    M = x.length;
                for (e = 0; M > e; ++e) s = x[e], h = s.source, f = s.target, y = f.x - h.x, b = f.y - h.y, (g = y * y + b * b) && (g = i * a[e] * ((g = Math.sqrt(g)) - r[e]) / g, y *= g, b *= g, f.x -= y * (m = h.weight / (f.weight + h.weight)), f.y -= b * m, h.x += y * (m = 1 - m), h.y += b * m);
                if ((m = i * p) && (y = l[0] / 2, b = l[1] / 2, e = -1, m))
                    for (; ++e < w;) s = v[e], s.x += (y - s.x) * m, s.y += (b - s.y) * m;
                if (d)
                    for (Ji(n = no.geom.quadtree(v), i, o), e = -1; ++e < w;)(s = v[e]).fixed || n.visit(t(s));
                for (e = -1; ++e < w;) s = v[e], s.fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * c, s.y -= (s.py - (s.py = s.y)) * c);
                u.tick({
                    type: "tick",
                    alpha: i
                })
            }, s.nodes = function(t) {
                return arguments.length ? (v = t, s) : v
            }, s.links = function(t) {
                return arguments.length ? (x = t,
                    s) : x
            }, s.size = function(t) {
                return arguments.length ? (l = t, s) : l
            }, s.linkDistance = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h
            }, s.distance = s.linkDistance, s.linkStrength = function(t) {
                return arguments.length ? (f = "function" == typeof t ? t : +t, s) : f
            }, s.friction = function(t) {
                return arguments.length ? (c = +t, s) : c
            }, s.charge = function(t) {
                return arguments.length ? (d = "function" == typeof t ? t : +t, s) : d
            }, s.chargeDistance = function(t) {
                return arguments.length ? (g = t * t, s) : Math.sqrt(g)
            }, s.gravity = function(t) {
                return arguments.length ? (p = +t, s) : p
            }, s.theta = function(t) {
                return arguments.length ? (m = t * t, s) : Math.sqrt(m)
            }, s.alpha = function(t) {
                return arguments.length ? (t = +t, i ? i = t > 0 ? t : 0 : t > 0 && (u.start({
                    type: "start",
                    alpha: i = t
                }), no.timer(s.tick)), s) : i
            }, s.start = function() {
                function t(t, i) {
                    if (!e) {
                        for (e = new Array(u), s = 0; u > s; ++s) e[s] = [];
                        for (s = 0; c > s; ++s) {
                            var r = x[s];
                            e[r.source.index].push(r.target), e[r.target.index].push(r.source)
                        }
                    }
                    for (var a, o = e[n], s = -1, l = o.length; ++s < l;)
                        if (!isNaN(a = o[s][t])) return a;
                    return Math.random() * i
                }
                var n, e, i, u = v.length,
                    c = x.length,
                    g = l[0],
                    p = l[1];
                for (n = 0; u > n; ++n)(i = v[n]).index = n, i.weight = 0;
                for (n = 0; c > n; ++n) i = x[n], "number" == typeof i.source && (i.source = v[i.source]), "number" == typeof i.target && (i.target = v[i.target]), ++i.source.weight, ++i.target.weight;
                for (n = 0; u > n; ++n) i = v[n], isNaN(i.x) && (i.x = t("x", g)), isNaN(i.y) && (i.y = t("y", p)), isNaN(i.px) && (i.px = i.x), isNaN(i.py) && (i.py = i.y);
                if (r = [], "function" == typeof h)
                    for (n = 0; c > n; ++n) r[n] = +h.call(this, x[n], n);
                else
                    for (n = 0; c > n; ++n) r[n] = h;
                if (a = [], "function" == typeof f)
                    for (n = 0; c > n; ++n) a[n] = +f.call(this, x[n], n);
                else
                    for (n = 0; c > n; ++n) a[n] = f;
                if (o = [], "function" == typeof d)
                    for (n = 0; u > n; ++n) o[n] = +d.call(this, v[n], n);
                else
                    for (n = 0; u > n; ++n) o[n] = d;
                return s.resume()
            }, s.resume = function() {
                return s.alpha(.1)
            }, s.stop = function() {
                return s.alpha(0)
            }, s.drag = function() {
                return e || (e = no.behavior.drag().origin(y).on("dragstart.force", Vi).on("drag.force", n).on("dragend.force", Xi)), arguments.length ? void this.on("mouseover.force", Zi).on("mouseout.force", Gi).call(e) : e
            }, no.rebind(s, u, "on")
        };
        var fu = 20,
            du = 1,
            gu = 1 / 0;
        no.layout.hierarchy = function() {
            function t(r) {
                var a, o = [r],
                    s = [];
                for (r.depth = 0; null != (a = o.pop());)
                    if (s.push(a), (l = e.call(t, a, a.depth)) && (u = l.length)) {
                        for (var u, l, c; --u >= 0;) o.push(c = l[u]), c.parent = a, c.depth = a.depth + 1;
                        i && (a.value = 0), a.children = l
                    } else i && (a.value = +i.call(t, a, a.depth) || 0), delete a.children;
                return tr(r, function(t) {
                    var e, r;
                    n && (e = t.children) && e.sort(n), i && (r = t.parent) && (r.value += t.value)
                }), s
            }
            var n = ir,
                e = nr,
                i = er;
            return t.sort = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.children = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.value = function(n) {
                return arguments.length ? (i = n, t) : i
            }, t.revalue = function(n) {
                return i && (Ki(n, function(t) {
                    t.children && (t.value = 0)
                }), tr(n, function(n) {
                    var e;
                    n.children || (n.value = +i.call(t, n, n.depth) || 0), (e = n.parent) && (e.value += n.value)
                })), n
            }, t
        }, no.layout.partition = function() {
            function t(n, e, i, r) {
                var a = n.children;
                if (n.x = e, n.y = n.depth * r, n.dx = i, n.dy = r, a && (o = a.length)) {
                    var o, s, u, l = -1;
                    for (i = n.value ? i / n.value : 0; ++l < o;) t(s = a[l], e, u = s.value * i, r), e += u
                }
            }

            function n(t) {
                var e = t.children,
                    i = 0;
                if (e && (r = e.length))
                    for (var r, a = -1; ++a < r;) i = Math.max(i, n(e[a]));
                return 1 + i
            }

            function e(e, a) {
                var o = i.call(this, e, a);
                return t(o[0], 0, r[0], r[1] / n(o[0])), o
            }
            var i = no.layout.hierarchy(),
                r = [1, 1];
            return e.size = function(t) {
                return arguments.length ? (r = t, e) : r
            }, Qi(e, i)
        }, no.layout.pie = function() {
            function t(o) {
                var s, u = o.length,
                    l = o.map(function(e, i) {
                        return +n.call(t, e, i)
                    }),
                    c = +("function" == typeof i ? i.apply(this, arguments) : i),
                    h = ("function" == typeof r ? r.apply(this, arguments) : r) - c,
                    f = Math.min(Math.abs(h) / u, +("function" == typeof a ? a.apply(this, arguments) : a)),
                    d = f * (0 > h ? -1 : 1),
                    g = (h - u * d) / no.sum(l),
                    p = no.range(u),
                    m = [];
                return null != e && p.sort(e === pu ? function(t, n) {
                    return l[n] - l[t]
                } : function(t, n) {
                    return e(o[t], o[n])
                }), p.forEach(function(t) {
                    m[t] = {
                        data: o[t],
                        value: s = l[t],
                        startAngle: c,
                        endAngle: c += s * g + d,
                        padAngle: f
                    }
                }), m
            }
            var n = Number,
                e = pu,
                i = 0,
                r = zo,
                a = 0;
            return t.value = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.sort = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.startAngle = function(n) {
                return arguments.length ? (i = n, t) : i
            }, t.endAngle = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t.padAngle = function(n) {
                return arguments.length ? (a = n, t) : a
            }, t
        };
        var pu = {};
        no.layout.stack = function() {
            function t(s, u) {
                if (!(f = s.length)) return s;
                var l = s.map(function(e, i) {
                        return n.call(t, e, i)
                    }),
                    c = l.map(function(n) {
                        return n.map(function(n, e) {
                            return [a.call(t, n, e), o.call(t, n, e)]
                        })
                    }),
                    h = e.call(t, c, u);
                l = no.permute(l, h), c = no.permute(c, h);
                var f, d, g, p, m = i.call(t, c, u),
                    v = l[0].length;
                for (g = 0; v > g; ++g)
                    for (r.call(t, l[0][g], p = m[g], c[0][g][1]), d = 1; f > d; ++d) r.call(t, l[d][g], p += c[d - 1][g][1], c[d][g][1]);
                return s
            }
            var n = y,
                e = ur,
                i = lr,
                r = sr,
                a = ar,
                o = or;
            return t.values = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.order = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : mu.get(n) || ur, t) : e
            }, t.offset = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : vu.get(n) || lr, t) : i
            }, t.x = function(n) {
                return arguments.length ? (a = n, t) : a
            }, t.y = function(n) {
                return arguments.length ? (o = n, t) : o
            }, t.out = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t
        };
        var mu = no.map({
                "inside-out": function(t) {
                    var n, e, i = t.length,
                        r = t.map(cr),
                        a = t.map(hr),
                        o = no.range(i).sort(function(t, n) {
                            return r[t] - r[n]
                        }),
                        s = 0,
                        u = 0,
                        l = [],
                        c = [];
                    for (n = 0; i > n; ++n) e = o[n], u > s ? (s += a[e], l.push(e)) : (u += a[e], c.push(e));
                    return c.reverse().concat(l)
                },
                reverse: function(t) {
                    return no.range(t.length).reverse()
                },
                "default": ur
            }),
            vu = no.map({
                silhouette: function(t) {
                    var n, e, i, r = t.length,
                        a = t[0].length,
                        o = [],
                        s = 0,
                        u = [];
                    for (e = 0; a > e; ++e) {
                        for (n = 0, i = 0; r > n; n++) i += t[n][e][1];
                        i > s && (s = i), o.push(i)
                    }
                    for (e = 0; a > e; ++e) u[e] = (s - o[e]) / 2;
                    return u
                },
                wiggle: function(t) {
                    var n, e, i, r, a, o, s, u, l, c = t.length,
                        h = t[0],
                        f = h.length,
                        d = [];
                    for (d[0] = u = l = 0, e = 1; f > e; ++e) {
                        for (n = 0, r = 0; c > n; ++n) r += t[n][e][1];
                        for (n = 0, a = 0, s = h[e][0] - h[e - 1][0]; c > n; ++n) {
                            for (i = 0, o = (t[n][e][1] - t[n][e - 1][1]) / (2 * s); n > i; ++i) o += (t[i][e][1] - t[i][e - 1][1]) / s;
                            a += o * t[n][e][1]
                        }
                        d[e] = u -= r ? a / r * s : 0, l > u && (l = u)
                    }
                    for (e = 0; f > e; ++e) d[e] -= l;
                    return d
                },
                expand: function(t) {
                    var n, e, i, r = t.length,
                        a = t[0].length,
                        o = 1 / r,
                        s = [];
                    for (e = 0; a > e; ++e) {
                        for (n = 0, i = 0; r > n; n++) i += t[n][e][1];
                        if (i)
                            for (n = 0; r > n; n++) t[n][e][1] /= i;
                        else
                            for (n = 0; r > n; n++) t[n][e][1] = o
                    }
                    for (e = 0; a > e; ++e) s[e] = 0;
                    return s
                },
                zero: lr
            });
        no.layout.histogram = function() {
            function t(t, a) {
                for (var o, s, u = [], l = t.map(e, this), c = i.call(this, l, a), h = r.call(this, c, l, a), a = -1, f = l.length, d = h.length - 1, g = n ? 1 : 1 / f; ++a < d;) o = u[a] = [], o.dx = h[a + 1] - (o.x = h[a]), o.y = 0;
                if (d > 0)
                    for (a = -1; ++a < f;) s = l[a], s >= c[0] && s <= c[1] && (o = u[no.bisect(h, s, 1, d) - 1], o.y += g, o.push(t[a]));
                return u
            }
            var n = !0,
                e = Number,
                i = pr,
                r = dr;
            return t.value = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.range = function(n) {
                return arguments.length ? (i = Ct(n), t) : i
            }, t.bins = function(n) {
                return arguments.length ? (r = "number" == typeof n ? function(t) {
                    return gr(t, n)
                } : Ct(n), t) : r
            }, t.frequency = function(e) {
                return arguments.length ? (n = !!e, t) : n
            }, t
        }, no.layout.pack = function() {
            function t(t, a) {
                var o = e.call(this, t, a),
                    s = o[0],
                    u = r[0],
                    l = r[1],
                    c = null == n ? Math.sqrt : "function" == typeof n ? n : function() {
                        return n
                    };
                if (s.x = s.y = 0, tr(s, function(t) {
                        t.r = +c(t.value)
                    }), tr(s, br), i) {
                    var h = i * (n ? 1 : Math.max(2 * s.r / u, 2 * s.r / l)) / 2;
                    tr(s, function(t) {
                        t.r += h
                    }), tr(s, br), tr(s, function(t) {
                        t.r -= h
                    })
                }
                return Sr(s, u / 2, l / 2, n ? 1 : 1 / Math.max(2 * s.r / u, 2 * s.r / l)), o
            }
            var n, e = no.layout.hierarchy().sort(mr),
                i = 0,
                r = [1, 1];
            return t.size = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t.radius = function(e) {
                return arguments.length ? (n = null == e || "function" == typeof e ? e : +e, t) : n
            }, t.padding = function(n) {
                return arguments.length ? (i = +n, t) : i
            }, Qi(t, e)
        }, no.layout.tree = function() {
            function t(t, r) {
                var c = o.call(this, t, r),
                    h = c[0],
                    f = n(h);
                if (tr(f, e), f.parent.m = -f.z, Ki(f, i), l) Ki(h, a);
                else {
                    var d = h,
                        g = h,
                        p = h;
                    Ki(h, function(t) {
                        t.x < d.x && (d = t), t.x > g.x && (g = t), t.depth > p.depth && (p = t)
                    });
                    var m = s(d, g) / 2 - d.x,
                        v = u[0] / (g.x + s(g, d) / 2 + m),
                        y = u[1] / (p.depth || 1);
                    Ki(h, function(t) {
                        t.x = (t.x + m) * v, t.y = t.depth * y
                    })
                }
                return c
            }

            function n(t) {
                for (var n, e = {
                        A: null,
                        children: [t]
                    }, i = [e]; null != (n = i.pop());)
                    for (var r, a = n.children, o = 0, s = a.length; s > o; ++o) i.push((a[o] = r = {
                        _: a[o],
                        parent: n,
                        children: (r = a[o].children) && r.slice() || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: o
                    }).a = r);
                return e.children[0]
            }

            function e(t) {
                var n = t.children,
                    e = t.parent.children,
                    i = t.i ? e[t.i - 1] : null;
                if (n.length) {
                    Pr(t);
                    var a = (n[0].z + n[n.length - 1].z) / 2;
                    i ? (t.z = i.z + s(t._, i._), t.m = t.z - a) : t.z = a
                } else i && (t.z = i.z + s(t._, i._));
                t.parent.A = r(t, i, t.parent.A || e[0])
            }

            function i(t) {
                t._.x = t.z + t.parent.m, t.m += t.parent.m
            }

            function r(t, n, e) {
                if (n) {
                    for (var i, r = t, a = t, o = n, u = r.parent.children[0], l = r.m, c = a.m, h = o.m, f = u.m; o = Er(o), r = Cr(r), o && r;) u = Cr(u), a = Er(a), a.a = t, i = o.z + h - r.z - l + s(o._, r._), i > 0 && (Ar(Lr(o, t, e), t, i), l += i, c += i), h += o.m, l += r.m, f += u.m, c += a.m;
                    o && !Er(a) && (a.t = o, a.m += h - c), r && !Cr(u) && (u.t = r, u.m += l - f, e = t)
                }
                return e
            }

            function a(t) {
                t.x *= u[0], t.y = t.depth * u[1]
            }
            var o = no.layout.hierarchy().sort(null).value(null),
                s = kr,
                u = [1, 1],
                l = null;
            return t.separation = function(n) {
                return arguments.length ? (s = n, t) : s
            }, t.size = function(n) {
                return arguments.length ? (l = null == (u = n) ? a : null, t) : l ? null : u
            }, t.nodeSize = function(n) {
                return arguments.length ? (l = null == (u = n) ? null : a, t) : l ? u : null
            }, Qi(t, o)
        }, no.layout.cluster = function() {
            function t(t, a) {
                var o, s = n.call(this, t, a),
                    u = s[0],
                    l = 0;
                tr(u, function(t) {
                    var n = t.children;
                    n && n.length ? (t.x = Tr(n), t.y = Nr(n)) : (t.x = o ? l += e(t, o) : 0, t.y = 0, o = t)
                });
                var c = zr(u),
                    h = Rr(u),
                    f = c.x - e(c, h) / 2,
                    d = h.x + e(h, c) / 2;
                return tr(u, r ? function(t) {
                    t.x = (t.x - u.x) * i[0], t.y = (u.y - t.y) * i[1]
                } : function(t) {
                    t.x = (t.x - f) / (d - f) * i[0], t.y = (1 - (u.y ? t.y / u.y : 1)) * i[1]
                }), s
            }
            var n = no.layout.hierarchy().sort(null).value(null),
                e = kr,
                i = [1, 1],
                r = !1;
            return t.separation = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.size = function(n) {
                return arguments.length ? (r = null == (i = n), t) : r ? null : i
            }, t.nodeSize = function(n) {
                return arguments.length ? (r = null != (i = n), t) : r ? i : null
            }, Qi(t, n)
        }, no.layout.treemap = function() {
            function t(t, n) {
                for (var e, i, r = -1, a = t.length; ++r < a;) i = (e = t[r]).value * (0 > n ? 0 : n), e.area = isNaN(i) || 0 >= i ? 0 : i
            }

            function n(e) {
                var a = e.children;
                if (a && a.length) {
                    var o, s, u, l = h(e),
                        c = [],
                        f = a.slice(),
                        g = 1 / 0,
                        p = "slice" === d ? l.dx : "dice" === d ? l.dy : "slice-dice" === d ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                    for (t(f, l.dx * l.dy / e.value), c.area = 0;
                        (u = f.length) > 0;) c.push(o = f[u - 1]), c.area += o.area, "squarify" !== d || (s = i(c, p)) <= g ? (f.pop(), g = s) : (c.area -= c.pop().area, r(c, p, l, !1), p = Math.min(l.dx, l.dy), c.length = c.area = 0, g = 1 / 0);
                    c.length && (r(c, p, l, !0), c.length = c.area = 0), a.forEach(n)
                }
            }

            function e(n) {
                var i = n.children;
                if (i && i.length) {
                    var a, o = h(n),
                        s = i.slice(),
                        u = [];
                    for (t(s, o.dx * o.dy / n.value), u.area = 0; a = s.pop();) u.push(a), u.area += a.area, null != a.z && (r(u, a.z ? o.dx : o.dy, o, !s.length), u.length = u.area = 0);
                    i.forEach(e)
                }
            }

            function i(t, n) {
                for (var e, i = t.area, r = 0, a = 1 / 0, o = -1, s = t.length; ++o < s;)(e = t[o].area) && (a > e && (a = e), e > r && (r = e));
                return i *= i, n *= n, i ? Math.max(n * r * g / i, i / (n * a * g)) : 1 / 0
            }

            function r(t, n, e, i) {
                var r, a = -1,
                    o = t.length,
                    s = e.x,
                    l = e.y,
                    c = n ? u(t.area / n) : 0;
                if (n == e.dx) {
                    for ((i || c > e.dy) && (c = e.dy); ++a < o;) r = t[a], r.x = s, r.y = l, r.dy = c, s += r.dx = Math.min(e.x + e.dx - s, c ? u(r.area / c) : 0);
                    r.z = !0, r.dx += e.x + e.dx - s, e.y += c, e.dy -= c
                } else {
                    for ((i || c > e.dx) && (c = e.dx); ++a < o;) r = t[a], r.x = s, r.y = l, r.dx = c, l += r.dy = Math.min(e.y + e.dy - l, c ? u(r.area / c) : 0);
                    r.z = !1, r.dy += e.y + e.dy - l, e.x += c, e.dx -= c
                }
            }

            function a(i) {
                var r = o || s(i),
                    a = r[0];
                return a.x = 0, a.y = 0, a.dx = l[0], a.dy = l[1], o && s.revalue(a), t([a], a.dx * a.dy / a.value), (o ? e : n)(a), f && (o = r), r
            }
            var o, s = no.layout.hierarchy(),
                u = Math.round,
                l = [1, 1],
                c = null,
                h = Fr,
                f = !1,
                d = "squarify",
                g = .5 * (1 + Math.sqrt(5));
            return a.size = function(t) {
                return arguments.length ? (l = t, a) : l
            }, a.padding = function(t) {
                function n(n) {
                    var e = t.call(a, n, n.depth);
                    return null == e ? Fr(n) : Br(n, "number" == typeof e ? [e, e, e, e] : e)
                }

                function e(n) {
                    return Br(n, t)
                }
                if (!arguments.length) return c;
                var i;
                return h = null == (c = t) ? Fr : "function" == (i = typeof t) ? n : "number" === i ? (t = [t, t, t, t], e) : e, a
            }, a.round = function(t) {
                return arguments.length ? (u = t ? Math.round : Number, a) : u != Number
            }, a.sticky = function(t) {
                return arguments.length ? (f = t, o = null, a) : f
            }, a.ratio = function(t) {
                return arguments.length ? (g = t, a) : g
            }, a.mode = function(t) {
                return arguments.length ? (d = t + "", a) : d
            }, Qi(a, s)
        }, no.random = {
            normal: function(t, n) {
                var e = arguments.length;
                return 2 > e && (n = 1), 1 > e && (t = 0),
                    function() {
                        var e, i, r;
                        do e = 2 * Math.random() - 1, i = 2 * Math.random() - 1, r = e * e + i * i; while (!r || r > 1);
                        return t + n * e * Math.sqrt(-2 * Math.log(r) / r)
                    }
            },
            logNormal: function() {
                var t = no.random.normal.apply(no, arguments);
                return function() {
                    return Math.exp(t())
                }
            },
            bates: function(t) {
                var n = no.random.irwinHall(t);
                return function() {
                    return n() / t
                }
            },
            irwinHall: function(t) {
                return function() {
                    for (var n = 0, e = 0; t > e; e++) n += Math.random();
                    return n
                }
            }
        }, no.scale = {};
        var yu = {
            floor: y,
            ceil: y
        };
        no.scale.linear = function() {
            return Hr([0, 1], [0, 1], yi, !1)
        };
        var xu = {
            s: 1,
            g: 1,
            p: 1,
            r: 1,
            e: 1
        };
        no.scale.log = function() {
            return Jr(no.scale.linear().domain([0, 1]), 10, !0, [1, 10])
        };
        var bu = no.format(".0e"),
            wu = {
                floor: function(t) {
                    return -Math.ceil(-t)
                },
                ceil: function(t) {
                    return -Math.floor(-t)
                }
            };
        no.scale.pow = function() {
            return Qr(no.scale.linear(), 1, [0, 1])
        }, no.scale.sqrt = function() {
            return no.scale.pow().exponent(.5)
        }, no.scale.ordinal = function() {
            return ta([], {
                t: "range",
                a: [
                    []
                ]
            })
        }, no.scale.category10 = function() {
            return no.scale.ordinal().range(Mu)
        }, no.scale.category20 = function() {
            return no.scale.ordinal().range(Su)
        }, no.scale.category20b = function() {
            return no.scale.ordinal().range(_u)
        }, no.scale.category20c = function() {
            return no.scale.ordinal().range(ku)
        };
        var Mu = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(xt),
            Su = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(xt),
            _u = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(xt),
            ku = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(xt);
        no.scale.quantile = function() {
            return na([], [])
        }, no.scale.quantize = function() {
            return ea(0, 1, [0, 1])
        }, no.scale.threshold = function() {
            return ia([.5], [0, 1])
        }, no.scale.identity = function() {
            return ra([0, 1])
        }, no.svg = {}, no.svg.arc = function() {
            function t() {
                var t = Math.max(0, +e.apply(this, arguments)),
                    l = Math.max(0, +i.apply(this, arguments)),
                    c = o.apply(this, arguments) - Fo,
                    h = s.apply(this, arguments) - Fo,
                    f = Math.abs(h - c),
                    d = c > h ? 0 : 1;
                if (t > l && (g = l, l = t, t = g), f >= Ro) return n(l, d) + (t ? n(t, 1 - d) : "") + "Z";
                var g, p, m, v, y, x, b, w, M, S, _, k, C = 0,
                    E = 0,
                    A = [];
                if ((v = (+u.apply(this, arguments) || 0) / 2) && (m = a === Cu ? Math.sqrt(t * t + l * l) : +a.apply(this, arguments), d || (E *= -1), l && (E = nt(m / l * Math.sin(v))), t && (C = nt(m / t * Math.sin(v)))), l) {
                    y = l * Math.cos(c + E), x = l * Math.sin(c + E), b = l * Math.cos(h - E), w = l * Math.sin(h - E);
                    var P = Math.abs(h - c - 2 * E) <= To ? 0 : 1;
                    if (E && ha(y, x, b, w) === d ^ P) {
                        var L = (c + h) / 2;
                        y = l * Math.cos(L), x = l * Math.sin(L), b = w = null
                    }
                } else y = x = 0;
                if (t) {
                    M = t * Math.cos(h - C), S = t * Math.sin(h - C), _ = t * Math.cos(c + C), k = t * Math.sin(c + C);
                    var N = Math.abs(c - h + 2 * C) <= To ? 0 : 1;
                    if (C && ha(M, S, _, k) === 1 - d ^ N) {
                        var T = (c + h) / 2;
                        M = t * Math.cos(T), S = t * Math.sin(T), _ = k = null
                    }
                } else M = S = 0;
                if ((g = Math.min(Math.abs(l - t) / 2, +r.apply(this, arguments))) > .001) {
                    p = l > t ^ d ? 0 : 1;
                    var z = null == _ ? [M, S] : null == b ? [y, x] : ze([y, x], [_, k], [b, w], [M, S]),
                        R = y - z[0],
                        F = x - z[1],
                        B = b - z[0],
                        I = w - z[1],
                        q = 1 / Math.sin(Math.acos((R * B + F * I) / (Math.sqrt(R * R + F * F) * Math.sqrt(B * B + I * I))) / 2),
                        D = Math.sqrt(z[0] * z[0] + z[1] * z[1]);
                    if (null != b) {
                        var O = Math.min(g, (l - D) / (q + 1)),
                            W = fa(null == _ ? [M, S] : [_, k], [y, x], l, O, d),
                            H = fa([b, w], [M, S], l, O, d);
                        g === O ? A.push("M", W[0], "A", O, ",", O, " 0 0,", p, " ", W[1], "A", l, ",", l, " 0 ", 1 - d ^ ha(W[1][0], W[1][1], H[1][0], H[1][1]), ",", d, " ", H[1], "A", O, ",", O, " 0 0,", p, " ", H[0]) : A.push("M", W[0], "A", O, ",", O, " 0 1,", p, " ", H[0])
                    } else A.push("M", y, ",", x);
                    if (null != _) {
                        var j = Math.min(g, (t - D) / (q - 1)),
                            Y = fa([y, x], [_, k], t, -j, d),
                            U = fa([M, S], null == b ? [y, x] : [b, w], t, -j, d);
                        g === j ? A.push("L", U[0], "A", j, ",", j, " 0 0,", p, " ", U[1], "A", t, ",", t, " 0 ", d ^ ha(U[1][0], U[1][1], Y[1][0], Y[1][1]), ",", 1 - d, " ", Y[1], "A", j, ",", j, " 0 0,", p, " ", Y[0]) : A.push("L", U[0], "A", j, ",", j, " 0 0,", p, " ", Y[0])
                    } else A.push("L", M, ",", S)
                } else A.push("M", y, ",", x), null != b && A.push("A", l, ",", l, " 0 ", P, ",", d, " ", b, ",", w), A.push("L", M, ",", S), null != _ && A.push("A", t, ",", t, " 0 ", N, ",", 1 - d, " ", _, ",", k);
                return A.push("Z"), A.join("")
            }

            function n(t, n) {
                return "M0," + t + "A" + t + "," + t + " 0 1," + n + " 0," + -t + "A" + t + "," + t + " 0 1," + n + " 0," + t
            }
            var e = oa,
                i = sa,
                r = aa,
                a = Cu,
                o = ua,
                s = la,
                u = ca;
            return t.innerRadius = function(n) {
                return arguments.length ? (e = Ct(n), t) : e
            }, t.outerRadius = function(n) {
                return arguments.length ? (i = Ct(n), t) : i
            }, t.cornerRadius = function(n) {
                return arguments.length ? (r = Ct(n), t) : r
            }, t.padRadius = function(n) {
                return arguments.length ? (a = n == Cu ? Cu : Ct(n), t) : a
            }, t.startAngle = function(n) {
                return arguments.length ? (o = Ct(n), t) : o
            }, t.endAngle = function(n) {
                return arguments.length ? (s = Ct(n), t) : s
            }, t.padAngle = function(n) {
                return arguments.length ? (u = Ct(n), t) : u
            }, t.centroid = function() {
                var t = (+e.apply(this, arguments) + +i.apply(this, arguments)) / 2,
                    n = (+o.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Fo;
                return [Math.cos(n) * t, Math.sin(n) * t]
            }, t
        };
        var Cu = "auto";
        no.svg.line = function() {
            return da(y)
        };
        var Eu = no.map({
            linear: ga,
            "linear-closed": pa,
            step: ma,
            "step-before": va,
            "step-after": ya,
            basis: _a,
            "basis-open": ka,
            "basis-closed": Ca,
            bundle: Ea,
            cardinal: wa,
            "cardinal-open": xa,
            "cardinal-closed": ba,
            monotone: za
        });
        Eu.forEach(function(t, n) {
            n.key = t, n.closed = /-closed$/.test(t)
        });
        var Au = [0, 2 / 3, 1 / 3, 0],
            Pu = [0, 1 / 3, 2 / 3, 0],
            Lu = [0, 1 / 6, 2 / 3, 1 / 6];
        no.svg.line.radial = function() {
            var t = da(Ra);
            return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
        }, va.reverse = ya, ya.reverse = va, no.svg.area = function() {
            return Fa(y)
        }, no.svg.area.radial = function() {
            var t = Fa(Ra);
            return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
        }, no.svg.chord = function() {
            function t(t, s) {
                var u = n(this, a, t, s),
                    l = n(this, o, t, s);
                return "M" + u.p0 + i(u.r, u.p1, u.a1 - u.a0) + (e(u, l) ? r(u.r, u.p1, u.r, u.p0) : r(u.r, u.p1, l.r, l.p0) + i(l.r, l.p1, l.a1 - l.a0) + r(l.r, l.p1, u.r, u.p0)) + "Z"
            }

            function n(t, n, e, i) {
                var r = n.call(t, e, i),
                    a = s.call(t, r, i),
                    o = u.call(t, r, i) - Fo,
                    c = l.call(t, r, i) - Fo;
                return {
                    r: a,
                    a0: o,
                    a1: c,
                    p0: [a * Math.cos(o), a * Math.sin(o)],
                    p1: [a * Math.cos(c), a * Math.sin(c)]
                }
            }

            function e(t, n) {
                return t.a0 == n.a0 && t.a1 == n.a1
            }

            function i(t, n, e) {
                return "A" + t + "," + t + " 0 " + +(e > To) + ",1 " + n
            }

            function r(t, n, e, i) {
                return "Q 0,0 " + i
            }
            var a = ye,
                o = xe,
                s = Ba,
                u = ua,
                l = la;
            return t.radius = function(n) {
                return arguments.length ? (s = Ct(n), t) : s
            }, t.source = function(n) {
                return arguments.length ? (a = Ct(n), t) : a
            }, t.target = function(n) {
                return arguments.length ? (o = Ct(n), t) : o
            }, t.startAngle = function(n) {
                return arguments.length ? (u = Ct(n), t) : u
            }, t.endAngle = function(n) {
                return arguments.length ? (l = Ct(n), t) : l
            }, t
        }, no.svg.diagonal = function() {
            function t(t, r) {
                var a = n.call(this, t, r),
                    o = e.call(this, t, r),
                    s = (a.y + o.y) / 2,
                    u = [a, {
                        x: a.x,
                        y: s
                    }, {
                        x: o.x,
                        y: s
                    }, o];
                return u = u.map(i), "M" + u[0] + "C" + u[1] + " " + u[2] + " " + u[3]
            }
            var n = ye,
                e = xe,
                i = Ia;
            return t.source = function(e) {
                return arguments.length ? (n = Ct(e), t) : n
            }, t.target = function(n) {
                return arguments.length ? (e = Ct(n), t) : e
            }, t.projection = function(n) {
                return arguments.length ? (i = n, t) : i
            }, t
        }, no.svg.diagonal.radial = function() {
            var t = no.svg.diagonal(),
                n = Ia,
                e = t.projection;
            return t.projection = function(t) {
                return arguments.length ? e($a(n = t)) : n
            }, t
        }, no.svg.symbol = function() {
            function t(t, i) {
                return (Nu.get(n.call(this, t, i)) || Oa)(e.call(this, t, i))
            }
            var n = Da,
                e = qa;
            return t.type = function(e) {
                return arguments.length ? (n = Ct(e), t) : n
            }, t.size = function(n) {
                return arguments.length ? (e = Ct(n), t) : e
            }, t
        };
        var Nu = no.map({
            circle: Oa,
            cross: function(t) {
                var n = Math.sqrt(t / 5) / 2;
                return "M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z"
            },
            diamond: function(t) {
                var n = Math.sqrt(t / (2 * zu)),
                    e = n * zu;
                return "M0," + -n + "L" + e + ",0 0," + n + " " + -e + ",0Z"
            },
            square: function(t) {
                var n = Math.sqrt(t) / 2;
                return "M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z"
            },
            "triangle-down": function(t) {
                var n = Math.sqrt(t / Tu),
                    e = n * Tu / 2;
                return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z"
            },
            "triangle-up": function(t) {
                var n = Math.sqrt(t / Tu),
                    e = n * Tu / 2;
                return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z"
            }
        });
        no.svg.symbolTypes = Nu.keys();
        var Tu = Math.sqrt(3),
            zu = Math.tan(30 * Bo);
        So.transition = function(t) {
            for (var n, e, i = Ru || ++$u, r = Ua(t), a = [], o = Fu || {
                    time: Date.now(),
                    ease: ki,
                    delay: 0,
                    duration: 250
                }, s = -1, u = this.length; ++s < u;) {
                a.push(n = []);
                for (var l = this[s], c = -1, h = l.length; ++c < h;)(e = l[c]) && Va(e, c, r, i, o), n.push(e)
            }
            return Ha(a, r, i)
        }, So.interrupt = function(t) {
            return this.each(null == t ? Bu : Wa(Ua(t)))
        };
        var Ru, Fu, Bu = Wa(Ua()),
            Iu = [],
            $u = 0;
        Iu.call = So.call, Iu.empty = So.empty, Iu.node = So.node, Iu.size = So.size, no.transition = function(t, n) {
            return t && t.transition ? Ru ? t.transition(n) : t : no.selection().transition(t)
        }, no.transition.prototype = Iu, Iu.select = function(t) {
            var n, e, i, r = this.id,
                a = this.namespace,
                o = [];
            t = A(t);
            for (var s = -1, u = this.length; ++s < u;) {
                o.push(n = []);
                for (var l = this[s], c = -1, h = l.length; ++c < h;)(i = l[c]) && (e = t.call(i, i.__data__, c, s)) ? ("__data__" in i && (e.__data__ = i.__data__), Va(e, c, a, r, i[a][r]), n.push(e)) : n.push(null)
            }
            return Ha(o, a, r)
        }, Iu.selectAll = function(t) {
            var n, e, i, r, a, o = this.id,
                s = this.namespace,
                u = [];
            t = P(t);
            for (var l = -1, c = this.length; ++l < c;)
                for (var h = this[l], f = -1, d = h.length; ++f < d;)
                    if (i = h[f]) {
                        a = i[s][o], e = t.call(i, i.__data__, f, l), u.push(n = []);
                        for (var g = -1, p = e.length; ++g < p;)(r = e[g]) && Va(r, g, s, o, a), n.push(r)
                    }
            return Ha(u, s, o)
        }, Iu.filter = function(t) {
            var n, e, i, r = [];
            "function" != typeof t && (t = W(t));
            for (var a = 0, o = this.length; o > a; a++) {
                r.push(n = []);
                for (var e = this[a], s = 0, u = e.length; u > s; s++)(i = e[s]) && t.call(i, i.__data__, s, a) && n.push(i)
            }
            return Ha(r, this.namespace, this.id)
        }, Iu.tween = function(t, n) {
            var e = this.id,
                i = this.namespace;
            return arguments.length < 2 ? this.node()[i][e].tween.get(t) : j(this, null == n ? function(n) {
                n[i][e].tween.remove(t)
            } : function(r) {
                r[i][e].tween.set(t, n)
            })
        }, Iu.attr = function(t, n) {
            function e() {
                this.removeAttribute(s)
            }

            function i() {
                this.removeAttributeNS(s.space, s.local)
            }

            function r(t) {
                return null == t ? e : (t += "", function() {
                    var n, e = this.getAttribute(s);
                    return e !== t && (n = o(e, t), function(t) {
                        this.setAttribute(s, n(t))
                    })
                })
            }

            function a(t) {
                return null == t ? i : (t += "", function() {
                    var n, e = this.getAttributeNS(s.space, s.local);
                    return e !== t && (n = o(e, t), function(t) {
                        this.setAttributeNS(s.space, s.local, n(t))
                    })
                })
            }
            if (arguments.length < 2) {
                for (n in t) this.attr(n, t[n]);
                return this
            }
            var o = "transform" == t ? Oi : yi,
                s = no.ns.qualify(t);
            return ja(this, "attr." + t, n, s.local ? a : r)
        }, Iu.attrTween = function(t, n) {
            function e(t, e) {
                var i = n.call(this, t, e, this.getAttribute(r));
                return i && function(t) {
                    this.setAttribute(r, i(t))
                }
            }

            function i(t, e) {
                var i = n.call(this, t, e, this.getAttributeNS(r.space, r.local));
                return i && function(t) {
                    this.setAttributeNS(r.space, r.local, i(t))
                }
            }
            var r = no.ns.qualify(t);
            return this.tween("attr." + t, r.local ? i : e)
        }, Iu.style = function(t, e, i) {
            function r() {
                this.style.removeProperty(t)
            }

            function a(e) {
                return null == e ? r : (e += "", function() {
                    var r, a = n(this).getComputedStyle(this, null).getPropertyValue(t);
                    return a !== e && (r = yi(a, e), function(n) {
                        this.style.setProperty(t, r(n), i)
                    })
                })
            }
            var o = arguments.length;
            if (3 > o) {
                if ("string" != typeof t) {
                    2 > o && (e = "");
                    for (i in t) this.style(i, t[i], e);
                    return this
                }
                i = ""
            }
            return ja(this, "style." + t, e, a)
        }, Iu.styleTween = function(t, e, i) {
            function r(r, a) {
                var o = e.call(this, r, a, n(this).getComputedStyle(this, null).getPropertyValue(t));
                return o && function(n) {
                    this.style.setProperty(t, o(n), i)
                }
            }
            return arguments.length < 3 && (i = ""), this.tween("style." + t, r)
        }, Iu.text = function(t) {
            return ja(this, "text", t, Ya)
        }, Iu.remove = function() {
            var t = this.namespace;
            return this.each("end.transition", function() {
                var n;
                this[t].count < 2 && (n = this.parentNode) && n.removeChild(this)
            })
        }, Iu.ease = function(t) {
            var n = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][n].ease : ("function" != typeof t && (t = no.ease.apply(no, arguments)), j(this, function(i) {
                i[e][n].ease = t
            }))
        }, Iu.delay = function(t) {
            var n = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][n].delay : j(this, "function" == typeof t ? function(i, r, a) {
                i[e][n].delay = +t.call(i, i.__data__, r, a)
            } : (t = +t, function(i) {
                i[e][n].delay = t
            }))
        }, Iu.duration = function(t) {
            var n = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][n].duration : j(this, "function" == typeof t ? function(i, r, a) {
                i[e][n].duration = Math.max(1, t.call(i, i.__data__, r, a))
            } : (t = Math.max(1, t), function(i) {
                i[e][n].duration = t
            }))
        }, Iu.each = function(t, n) {
            var e = this.id,
                i = this.namespace;
            if (arguments.length < 2) {
                var r = Fu,
                    a = Ru;
                try {
                    Ru = e, j(this, function(n, r, a) {
                        Fu = n[i][e], t.call(n, n.__data__, r, a)
                    })
                } finally {
                    Fu = r, Ru = a
                }
            } else j(this, function(r) {
                var a = r[i][e];
                (a.event || (a.event = no.dispatch("start", "end", "interrupt"))).on(t, n)
            });
            return this
        }, Iu.transition = function() {
            for (var t, n, e, i, r = this.id, a = ++$u, o = this.namespace, s = [], u = 0, l = this.length; l > u; u++) {
                s.push(t = []);
                for (var n = this[u], c = 0, h = n.length; h > c; c++)(e = n[c]) && (i = e[o][r], Va(e, c, o, a, {
                    time: i.time,
                    ease: i.ease,
                    delay: i.delay + i.duration,
                    duration: i.duration
                })), t.push(e)
            }
            return Ha(s, o, a)
        }, no.svg.axis = function() {
            function t(t) {
                t.each(function() {
                    var t, l = no.select(this),
                        c = this.__chart__ || e,
                        h = this.__chart__ = e.copy(),
                        f = null == u ? h.ticks ? h.ticks.apply(h, s) : h.domain() : u,
                        d = null == n ? h.tickFormat ? h.tickFormat.apply(h, s) : y : n,
                        g = l.selectAll(".tick").data(f, h),
                        p = g.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Lo),
                        m = no.transition(g.exit()).style("opacity", Lo).remove(),
                        v = no.transition(g.order()).style("opacity", 1),
                        x = Math.max(r, 0) + o,
                        b = $r(h),
                        w = l.selectAll(".domain").data([0]),
                        M = (w.enter().append("path").attr("class", "domain"), no.transition(w));
                    p.append("line"), p.append("text");
                    var S, _, k, C, E = p.select("line"),
                        A = v.select("line"),
                        P = g.select("text").text(d),
                        L = p.select("text"),
                        N = v.select("text"),
                        T = "top" === i || "left" === i ? -1 : 1;
                    if ("bottom" === i || "top" === i ? (t = Xa, S = "x", k = "y", _ = "x2", C = "y2", P.attr("dy", 0 > T ? "0em" : ".71em").style("text-anchor", "middle"), M.attr("d", "M" + b[0] + "," + T * a + "V0H" + b[1] + "V" + T * a)) : (t = Za, S = "y", k = "x", _ = "y2", C = "x2", P.attr("dy", ".32em").style("text-anchor", 0 > T ? "end" : "start"), M.attr("d", "M" + T * a + "," + b[0] + "H0V" + b[1] + "H" + T * a)), E.attr(C, T * r), L.attr(k, T * x), A.attr(_, 0).attr(C, T * r), N.attr(S, 0).attr(k, T * x), h.rangeBand) {
                        var z = h,
                            R = z.rangeBand() / 2;
                        c = h = function(t) {
                            return z(t) + R
                        }
                    } else c.rangeBand ? c = h : m.call(t, h, c);
                    p.call(t, c, h), v.call(t, h, h)
                })
            }
            var n, e = no.scale.linear(),
                i = qu,
                r = 6,
                a = 6,
                o = 3,
                s = [10],
                u = null;
            return t.scale = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.orient = function(n) {
                return arguments.length ? (i = n in Du ? n + "" : qu, t) : i
            }, t.ticks = function() {
                return arguments.length ? (s = arguments, t) : s
            }, t.tickValues = function(n) {
                return arguments.length ? (u = n, t) : u
            }, t.tickFormat = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.tickSize = function(n) {
                var e = arguments.length;
                return e ? (r = +n, a = +arguments[e - 1], t) : r
            }, t.innerTickSize = function(n) {
                return arguments.length ? (r = +n, t) : r
            }, t.outerTickSize = function(n) {
                return arguments.length ? (a = +n, t) : a
            }, t.tickPadding = function(n) {
                return arguments.length ? (o = +n, t) : o
            }, t.tickSubdivide = function() {
                return arguments.length && t
            }, t
        };
        var qu = "bottom",
            Du = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
        no.svg.brush = function() {
            function t(n) {
                n.each(function() {
                    var n = no.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", a).on("touchstart.brush", a),
                        o = n.selectAll(".background").data([0]);
                    o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), n.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                    var s = n.selectAll(".resize").data(p, y);
                    s.exit().remove(), s.enter().append("g").attr("class", function(t) {
                        return "resize " + t
                    }).style("cursor", function(t) {
                        return Ou[t]
                    }).append("rect").attr("x", function(t) {
                        return /[ew]$/.test(t) ? -3 : null
                    }).attr("y", function(t) {
                        return /^[ns]/.test(t) ? -3 : null
                    }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", t.empty() ? "none" : null);
                    var u, h = no.transition(n),
                        f = no.transition(o);
                    l && (u = $r(l), f.attr("x", u[0]).attr("width", u[1] - u[0]), i(h)), c && (u = $r(c), f.attr("y", u[0]).attr("height", u[1] - u[0]), r(h)), e(h)
                })
            }

            function e(t) {
                t.selectAll(".resize").attr("transform", function(t) {
                    return "translate(" + h[+/e$/.test(t)] + "," + f[+/^s/.test(t)] + ")"
                })
            }

            function i(t) {
                t.select(".extent").attr("x", h[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", h[1] - h[0])
            }

            function r(t) {
                t.select(".extent").attr("y", f[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
            }

            function a() {
                function a() {
                    32 == no.event.keyCode && (P || (x = null, N[0] -= h[1], N[1] -= f[1], P = 2), _())
                }

                function p() {
                    32 == no.event.keyCode && 2 == P && (N[0] += h[1], N[1] += f[1], P = 0, _())
                }

                function m() {
                    var t = no.mouse(w),
                        n = !1;
                    b && (t[0] += b[0], t[1] += b[1]), P || (no.event.altKey ? (x || (x = [(h[0] + h[1]) / 2, (f[0] + f[1]) / 2]), N[0] = h[+(t[0] < x[0])], N[1] = f[+(t[1] < x[1])]) : x = null), E && v(t, l, 0) && (i(k), n = !0), A && v(t, c, 1) && (r(k), n = !0), n && (e(k), S({
                        type: "brush",
                        mode: P ? "move" : "resize"
                    }))
                }

                function v(t, n, e) {
                    var i, r, a = $r(n),
                        u = a[0],
                        l = a[1],
                        c = N[e],
                        p = e ? f : h,
                        m = p[1] - p[0];
                    return P && (u -= c, l -= m + c), i = (e ? g : d) ? Math.max(u, Math.min(l, t[e])) : t[e], P ? r = (i += c) + m : (x && (c = Math.max(u, Math.min(l, 2 * x[e] - i))), i > c ? (r = i, i = c) : r = c), p[0] != i || p[1] != r ? (e ? s = null : o = null, p[0] = i, p[1] = r, !0) : void 0
                }

                function y() {
                    m(), k.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), no.select("body").style("cursor", null), T.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), L(), S({
                        type: "brushend"
                    })
                }
                var x, b, w = this,
                    M = no.select(no.event.target),
                    S = u.of(w, arguments),
                    k = no.select(w),
                    C = M.datum(),
                    E = !/^(n|s)$/.test(C) && l,
                    A = !/^(e|w)$/.test(C) && c,
                    P = M.classed("extent"),
                    L = Z(w),
                    N = no.mouse(w),
                    T = no.select(n(w)).on("keydown.brush", a).on("keyup.brush", p);
                if (no.event.changedTouches ? T.on("touchmove.brush", m).on("touchend.brush", y) : T.on("mousemove.brush", m).on("mouseup.brush", y), k.interrupt().selectAll("*").interrupt(), P) N[0] = h[0] - N[0], N[1] = f[0] - N[1];
                else if (C) {
                    var z = +/w$/.test(C),
                        R = +/^n/.test(C);
                    b = [h[1 - z] - N[0], f[1 - R] - N[1]], N[0] = h[z], N[1] = f[R]
                } else no.event.altKey && (x = N.slice());
                k.style("pointer-events", "none").selectAll(".resize").style("display", null), no.select("body").style("cursor", M.style("cursor")), S({
                    type: "brushstart"
                }), m()
            }
            var o, s, u = C(t, "brushstart", "brush", "brushend"),
                l = null,
                c = null,
                h = [0, 0],
                f = [0, 0],
                d = !0,
                g = !0,
                p = Wu[0];
            return t.event = function(t) {
                t.each(function() {
                    var t = u.of(this, arguments),
                        n = {
                            x: h,
                            y: f,
                            i: o,
                            j: s
                        },
                        e = this.__chart__ || n;
                    this.__chart__ = n, Ru ? no.select(this).transition().each("start.brush", function() {
                        o = e.i, s = e.j, h = e.x, f = e.y, t({
                            type: "brushstart"
                        })
                    }).tween("brush:brush", function() {
                        var e = xi(h, n.x),
                            i = xi(f, n.y);
                        return o = s = null,
                            function(r) {
                                h = n.x = e(r), f = n.y = i(r), t({
                                    type: "brush",
                                    mode: "resize"
                                })
                            }
                    }).each("end.brush", function() {
                        o = n.i, s = n.j, t({
                            type: "brush",
                            mode: "resize"
                        }), t({
                            type: "brushend"
                        })
                    }) : (t({
                        type: "brushstart"
                    }), t({
                        type: "brush",
                        mode: "resize"
                    }), t({
                        type: "brushend"
                    }))
                })
            }, t.x = function(n) {
                return arguments.length ? (l = n, p = Wu[!l << 1 | !c], t) : l
            }, t.y = function(n) {
                return arguments.length ? (c = n, p = Wu[!l << 1 | !c], t) : c
            }, t.clamp = function(n) {
                return arguments.length ? (l && c ? (d = !!n[0], g = !!n[1]) : l ? d = !!n : c && (g = !!n), t) : l && c ? [d, g] : l ? d : c ? g : null
            }, t.extent = function(n) {
                var e, i, r, a, u;
                return arguments.length ? (l && (e = n[0], i = n[1], c && (e = e[0], i = i[0]), o = [e, i], l.invert && (e = l(e), i = l(i)), e > i && (u = e, e = i, i = u), (e != h[0] || i != h[1]) && (h = [e, i])), c && (r = n[0], a = n[1], l && (r = r[1], a = a[1]), s = [r, a], c.invert && (r = c(r), a = c(a)), r > a && (u = r, r = a, a = u), (r != f[0] || a != f[1]) && (f = [r, a])), t) : (l && (o ? (e = o[0], i = o[1]) : (e = h[0], i = h[1], l.invert && (e = l.invert(e), i = l.invert(i)), e > i && (u = e, e = i, i = u))), c && (s ? (r = s[0], a = s[1]) : (r = f[0], a = f[1], c.invert && (r = c.invert(r), a = c.invert(a)), r > a && (u = r, r = a, a = u))), l && c ? [
                    [e, r],
                    [i, a]
                ] : l ? [e, i] : c && [r, a])
            }, t.clear = function() {
                return t.empty() || (h = [0, 0], f = [0, 0], o = s = null), t
            }, t.empty = function() {
                return !!l && h[0] == h[1] || !!c && f[0] == f[1]
            }, no.rebind(t, u, "on")
        };
        var Ou = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            },
            Wu = [
                ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                ["e", "w"],
                ["n", "s"],
                []
            ],
            Hu = us.format = gs.timeFormat,
            ju = Hu.utc,
            Yu = ju("%Y-%m-%dT%H:%M:%S.%LZ");
        Hu.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Ga : Yu, Ga.parse = function(t) {
            var n = new Date(t);
            return isNaN(n) ? null : n
        }, Ga.toString = Yu.toString, us.second = qt(function(t) {
            return new ls(1e3 * Math.floor(t / 1e3))
        }, function(t, n) {
            t.setTime(t.getTime() + 1e3 * Math.floor(n))
        }, function(t) {
            return t.getSeconds()
        }), us.seconds = us.second.range, us.seconds.utc = us.second.utc.range, us.minute = qt(function(t) {
            return new ls(6e4 * Math.floor(t / 6e4))
        }, function(t, n) {
            t.setTime(t.getTime() + 6e4 * Math.floor(n))
        }, function(t) {
            return t.getMinutes()
        }), us.minutes = us.minute.range, us.minutes.utc = us.minute.utc.range, us.hour = qt(function(t) {
            var n = t.getTimezoneOffset() / 60;
            return new ls(36e5 * (Math.floor(t / 36e5 - n) + n));
        }, function(t, n) {
            t.setTime(t.getTime() + 36e5 * Math.floor(n))
        }, function(t) {
            return t.getHours()
        }), us.hours = us.hour.range, us.hours.utc = us.hour.utc.range, us.month = qt(function(t) {
            return t = us.day(t), t.setDate(1), t
        }, function(t, n) {
            t.setMonth(t.getMonth() + n)
        }, function(t) {
            return t.getMonth()
        }), us.months = us.month.range, us.months.utc = us.month.utc.range;
        var Uu = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
            Vu = [
                [us.second, 1],
                [us.second, 5],
                [us.second, 15],
                [us.second, 30],
                [us.minute, 1],
                [us.minute, 5],
                [us.minute, 15],
                [us.minute, 30],
                [us.hour, 1],
                [us.hour, 3],
                [us.hour, 6],
                [us.hour, 12],
                [us.day, 1],
                [us.day, 2],
                [us.week, 1],
                [us.month, 1],
                [us.month, 3],
                [us.year, 1]
            ],
            Xu = Hu.multi([
                [".%L", function(t) {
                    return t.getMilliseconds()
                }],
                [":%S", function(t) {
                    return t.getSeconds()
                }],
                ["%I:%M", function(t) {
                    return t.getMinutes()
                }],
                ["%I %p", function(t) {
                    return t.getHours()
                }],
                ["%a %d", function(t) {
                    return t.getDay() && 1 != t.getDate()
                }],
                ["%b %d", function(t) {
                    return 1 != t.getDate()
                }],
                ["%B", function(t) {
                    return t.getMonth()
                }],
                ["%Y", Pn]
            ]),
            Zu = {
                range: function(t, n, e) {
                    return no.range(Math.ceil(t / e) * e, +n, e).map(Qa)
                },
                floor: y,
                ceil: y
            };
        Vu.year = us.year, us.scale = function() {
            return Ja(no.scale.linear(), Vu, Xu)
        };
        var Gu = Vu.map(function(t) {
                return [t[0].utc, t[1]]
            }),
            Ju = ju.multi([
                [".%L", function(t) {
                    return t.getUTCMilliseconds()
                }],
                [":%S", function(t) {
                    return t.getUTCSeconds()
                }],
                ["%I:%M", function(t) {
                    return t.getUTCMinutes()
                }],
                ["%I %p", function(t) {
                    return t.getUTCHours()
                }],
                ["%a %d", function(t) {
                    return t.getUTCDay() && 1 != t.getUTCDate()
                }],
                ["%b %d", function(t) {
                    return 1 != t.getUTCDate()
                }],
                ["%B", function(t) {
                    return t.getUTCMonth()
                }],
                ["%Y", Pn]
            ]);
        Gu.year = us.year.utc, us.scale.utc = function() {
            return Ja(no.scale.linear(), Gu, Ju)
        }, no.text = Et(function(t) {
            return t.responseText
        }), no.json = function(t, n) {
            return At(t, "application/json", Ka, n)
        }, no.html = function(t, n) {
            return At(t, "text/html", to, n)
        }, no.xml = Et(function(t) {
            return t.responseXML
        }), "function" == typeof define && define.amd ? define(no) : "object" == typeof module && module.exports && (module.exports = no), this.d3 = no
    }(), ! function(t, n) {
        "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n(require, exports, module) : t.scrollReveal = n()
    }(this, function() {
        return window.scrollReveal = function(t) {
            "use strict";

            function n(e) {
                return this instanceof n ? (a = this, a.elems = {}, a.serial = 1, a.blocked = !1, a.config = i(a.defaults, e), a.isMobile() && !a.config.mobile || !a.isSupported() ? void a.destroy() : (a.config.viewport === t.document.documentElement ? (t.addEventListener("scroll", r, !1), t.addEventListener("resize", r, !1)) : a.config.viewport.addEventListener("scroll", r, !1), void a.init(!0))) : new n(e)
            }
            var e, i, r, a;
            return n.prototype = {
                defaults: {
                    enter: "bottom",
                    move: "8px",
                    over: "0.6s",
                    wait: "0s",
                    easing: "ease",
                    scale: {
                        direction: "up",
                        power: "5%"
                    },
                    rotate: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    opacity: 0,
                    mobile: !1,
                    reset: !1,
                    viewport: t.document.documentElement,
                    delay: "once",
                    vFactor: .6,
                    complete: function() {}
                },
                init: function(t) {
                    var n, e, i;
                    i = Array.prototype.slice.call(a.config.viewport.querySelectorAll("[data-sr]")), i.forEach(function(t) {
                        n = a.serial++, e = a.elems[n] = {
                            domEl: t
                        }, e.config = a.configFactory(e), e.styles = a.styleFactory(e), e.seen = !1, t.removeAttribute("data-sr"), t.setAttribute("style", e.styles.inline + e.styles.initial)
                    }), a.scrolled = a.scrollY(), a.animate(t)
                },
                animate: function(t) {
                    function n(t) {
                        var n = a.elems[t];
                        setTimeout(function() {
                            n.domEl.setAttribute("style", n.styles.inline), n.config.complete(n.domEl), delete a.elems[t]
                        }, n.styles.duration)
                    }
                    var e, i, r;
                    for (e in a.elems) a.elems.hasOwnProperty(e) && (i = a.elems[e], r = a.isElemInViewport(i), r ? ("always" === a.config.delay || "onload" === a.config.delay && t || "once" === a.config.delay && !i.seen ? i.domEl.setAttribute("style", i.styles.inline + i.styles.target + i.styles.transition) : i.domEl.setAttribute("style", i.styles.inline + i.styles.target + i.styles.reset), i.seen = !0, i.config.reset || i.animating || (i.animating = !0, n(e))) : !r && i.config.reset && i.domEl.setAttribute("style", i.styles.inline + i.styles.initial + i.styles.reset));
                    a.blocked = !1
                },
                configFactory: function(t) {
                    var n = {},
                        e = {},
                        r = t.domEl.getAttribute("data-sr").split(/[, ]+/);
                    return r.forEach(function(t, e) {
                        switch (t) {
                            case "enter":
                                n.enter = r[e + 1];
                                break;
                            case "wait":
                                n.wait = r[e + 1];
                                break;
                            case "move":
                                n.move = r[e + 1];
                                break;
                            case "ease":
                                n.move = r[e + 1], n.ease = "ease";
                                break;
                            case "ease-in":
                                if ("up" == r[e + 1] || "down" == r[e + 1]) {
                                    n.scale.direction = r[e + 1], n.scale.power = r[e + 2], n.easing = "ease-in";
                                    break
                                }
                                n.move = r[e + 1], n.easing = "ease-in";
                                break;
                            case "ease-in-out":
                                if ("up" == r[e + 1] || "down" == r[e + 1]) {
                                    n.scale.direction = r[e + 1], n.scale.power = r[e + 2], n.easing = "ease-in-out";
                                    break
                                }
                                n.move = r[e + 1], n.easing = "ease-in-out";
                                break;
                            case "ease-out":
                                if ("up" == r[e + 1] || "down" == r[e + 1]) {
                                    n.scale.direction = r[e + 1], n.scale.power = r[e + 2], n.easing = "ease-out";
                                    break
                                }
                                n.move = r[e + 1], n.easing = "ease-out";
                                break;
                            case "hustle":
                                if ("up" == r[e + 1] || "down" == r[e + 1]) {
                                    n.scale.direction = r[e + 1], n.scale.power = r[e + 2], n.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )";
                                    break
                                }
                                n.move = r[e + 1], n.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )";
                                break;
                            case "over":
                                n.over = r[e + 1];
                                break;
                            case "flip":
                            case "pitch":
                                n.rotate = n.rotate || {}, n.rotate.x = r[e + 1];
                                break;
                            case "spin":
                            case "yaw":
                                n.rotate = n.rotate || {}, n.rotate.y = r[e + 1];
                                break;
                            case "roll":
                                n.rotate = n.rotate || {}, n.rotate.z = r[e + 1];
                                break;
                            case "reset":
                                n.reset = "no" == r[e - 1] ? !1 : !0;
                                break;
                            case "scale":
                                if (n.scale = {}, "up" == r[e + 1] || "down" == r[e + 1]) {
                                    n.scale.direction = r[e + 1], n.scale.power = r[e + 2];
                                    break
                                }
                                n.scale.power = r[e + 1];
                                break;
                            case "vFactor":
                            case "vF":
                                n.vFactor = r[e + 1];
                                break;
                            case "opacity":
                                n.opacity = r[e + 1];
                                break;
                            default:
                                return
                        }
                    }), e = i(e, a.config), e = i(e, n), "top" === e.enter || "bottom" === e.enter ? e.axis = "Y" : ("left" === e.enter || "right" === e.enter) && (e.axis = "X"), ("top" === e.enter || "left" === e.enter) && (e.move = "-" + e.move), e
                },
                styleFactory: function(t) {
                    function n() {
                        0 !== parseInt(s.move) && (i += " translate" + s.axis + "(" + s.move + ")", a += " translate" + s.axis + "(0)"), 0 !== parseInt(s.scale.power) && ("up" === s.scale.direction ? s.scale.value = 1 - .01 * parseFloat(s.scale.power) : "down" === s.scale.direction && (s.scale.value = 1 + .01 * parseFloat(s.scale.power)), i += " scale(" + s.scale.value + ")", a += " scale(1)"), s.rotate.x && (i += " rotateX(" + s.rotate.x + ")", a += " rotateX(0)"), s.rotate.y && (i += " rotateY(" + s.rotate.y + ")", a += " rotateY(0)"), s.rotate.z && (i += " rotateZ(" + s.rotate.z + ")", a += " rotateZ(0)"), i += "; opacity: " + s.opacity + "; ", a += "; opacity: 1; "
                    }
                    var e, i, r, a, o, s = t.config,
                        u = 1e3 * (parseFloat(s.over) + parseFloat(s.wait));
                    return e = t.domEl.getAttribute("style") ? t.domEl.getAttribute("style") + "; visibility: visible; " : "visibility: visible; ", o = "-webkit-transition: -webkit-transform " + s.over + " " + s.easing + " " + s.wait + ", opacity " + s.over + " " + s.easing + " " + s.wait + "; transition: transform " + s.over + " " + s.easing + " " + s.wait + ", opacity " + s.over + " " + s.easing + " " + s.wait + "; -webkit-perspective: 1000;-webkit-backface-visibility: hidden;", r = "-webkit-transition: -webkit-transform " + s.over + " " + s.easing + " 0s, opacity " + s.over + " " + s.easing + " 0s; transition: transform " + s.over + " " + s.easing + " 0s, opacity " + s.over + " " + s.easing + " 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ", i = "transform:", a = "transform:", n(), i += "-webkit-transform:", a += "-webkit-transform:", n(), {
                        transition: o,
                        initial: i,
                        target: a,
                        reset: r,
                        inline: e,
                        duration: u
                    }
                },
                getViewportH: function() {
                    var n = a.config.viewport.clientHeight,
                        e = t.innerHeight;
                    return a.config.viewport === t.document.documentElement && e > n ? e : n
                },
                scrollY: function() {
                    return a.config.viewport === t.document.documentElement ? t.pageYOffset : a.config.viewport.scrollTop + a.config.viewport.offsetTop
                },
                getOffset: function(t) {
                    var n = 0,
                        e = 0;
                    do isNaN(t.offsetTop) || (n += t.offsetTop), isNaN(t.offsetLeft) || (e += t.offsetLeft); while (t = t.offsetParent);
                    return {
                        top: n,
                        left: e
                    }
                },
                isElemInViewport: function(n) {
                    function e() {
                        var t = o + r * u,
                            n = s - r * u,
                            e = a.scrolled + a.getViewportH(),
                            i = a.scrolled;
                        return e > t && n > i
                    }

                    function i() {
                        var e = n.domEl,
                            i = e.currentStyle || t.getComputedStyle(e, null);
                        return "fixed" === i.position
                    }
                    var r = n.domEl.offsetHeight,
                        o = a.getOffset(n.domEl).top,
                        s = o + r,
                        u = n.config.vFactor || 0;
                    return e() || i()
                },
                isMobile: function() {
                    var n = navigator.userAgent || navigator.vendor || t.opera;
                    return /(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4)) ? !0 : !1
                },
                isSupported: function() {
                    for (var t = document.createElement("sensor"), n = "Webkit,Moz,O,".split(","), e = ("transition " + n.join("transition,")).split(","), i = 0; i < e.length; i++)
                        if ("" === !t.style[e[i]]) return !1;
                    return !0
                },
                destroy: function() {
                    var t = a.config.viewport,
                        n = Array.prototype.slice.call(t.querySelectorAll("[data-sr]"));
                    n.forEach(function(t) {
                        t.removeAttribute("data-sr")
                    })
                }
            }, r = function() {
                a.blocked || (a.blocked = !0, a.scrolled = a.scrollY(), e(function() {
                    a.animate()
                }))
            }, i = function(t, n) {
                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
                return t
            }, e = function() {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(n) {
                    t.setTimeout(n, 1e3 / 60)
                }
            }(), n
        }(window), scrollReveal
    }),
    function() {
        "use strict";
        var t = this,
            n = t.Chart,
            e = function(t) {
                var n = this;
                this.canvas = t.canvas, this.ctx = t;
                var e = this.width = t.canvas.width,
                    r = this.height = t.canvas.height;
                return this.aspectRatio = this.width / this.height, i.retinaScale(this), this
            };
        e.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, e.types = {};
        var i = e.helpers = {},
            r = i.each = function(t, n, e) {
                var i = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var r;
                        for (r = 0; r < t.length; r++) n.apply(e, [t[r], r].concat(i))
                    } else
                        for (var a in t) n.apply(e, [t[a], a].concat(i))
            },
            a = i.clone = function(t) {
                var n = {};
                return r(t, function(e, i) {
                    t.hasOwnProperty(i) && (n[i] = e)
                }), n
            },
            o = i.extend = function(t) {
                return r(Array.prototype.slice.call(arguments, 1), function(n) {
                    r(n, function(e, i) {
                        n.hasOwnProperty(i) && (t[i] = e)
                    })
                }), t
            },
            s = i.merge = function(t, n) {
                var e = Array.prototype.slice.call(arguments, 0);
                return e.unshift({}), o.apply(null, e)
            },
            u = i.indexOf = function(t, n) {
                if (Array.prototype.indexOf) return t.indexOf(n);
                for (var e = 0; e < t.length; e++)
                    if (t[e] === n) return e;
                return -1
            },
            l = i.where = function(t, n) {
                var e = [];
                return i.each(t, function(t) {
                    n(t) && e.push(t)
                }), e
            },
            c = i.findNextWhere = function(t, n, e) {
                e || (e = -1);
                for (var i = e + 1; i < t.length; i++) {
                    var r = t[i];
                    if (n(r)) return r
                }
            },
            h = i.findPreviousWhere = function(t, n, e) {
                e || (e = t.length);
                for (var i = e - 1; i >= 0; i--) {
                    var r = t[i];
                    if (n(r)) return r
                }
            },
            f = i.inherits = function(t) {
                var n = this,
                    e = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return n.apply(this, arguments)
                    },
                    i = function() {
                        this.constructor = e
                    };
                return i.prototype = n.prototype, e.prototype = new i, e.extend = f, t && o(e.prototype, t), e.__super__ = n.prototype, e
            },
            d = i.noop = function() {},
            g = i.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++
                }
            }(),
            p = i.warn = function(t) {
                window.console && "function" == typeof window.console.warn && console.warn(t)
            },
            m = i.amd = "function" == typeof define && define.amd,
            v = i.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            y = i.max = function(t) {
                return Math.max.apply(Math, t)
            },
            x = i.min = function(t) {
                return Math.min.apply(Math, t)
            },
            b = i.cap = function(t, n, e) {
                if (v(n)) {
                    if (t > n) return n
                } else if (v(e) && e > t) return e;
                return t
            },
            w = i.getDecimalPlaces = function(t) {
                return t % 1 !== 0 && v(t) ? t.toString().split(".")[1].length : 0
            },
            M = i.radians = function(t) {
                return t * (Math.PI / 180)
            },
            S = i.getAngleFromPoint = function(t, n) {
                var e = n.x - t.x,
                    i = n.y - t.y,
                    r = Math.sqrt(e * e + i * i),
                    a = 2 * Math.PI + Math.atan2(i, e);
                return 0 > e && 0 > i && (a += 2 * Math.PI), {
                    angle: a,
                    distance: r
                }
            },
            _ = i.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            },
            k = i.splineCurve = function(t, n, e, i) {
                var r = Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)),
                    a = Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)),
                    o = i * r / (r + a),
                    s = i * a / (r + a);
                return {
                    inner: {
                        x: n.x - o * (e.x - t.x),
                        y: n.y - o * (e.y - t.y)
                    },
                    outer: {
                        x: n.x + s * (e.x - t.x),
                        y: n.y + s * (e.y - t.y)
                    }
                }
            },
            C = i.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10)
            },
            E = i.calculateScaleRange = function(t, n, e, i, r) {
                var a = 2,
                    o = Math.floor(n / (1.5 * e)),
                    s = a >= o,
                    u = y(t),
                    l = x(t);
                u === l && (u += .5, l >= .5 && !i ? l -= .5 : u += .5);
                for (var c = Math.abs(u - l), h = C(c), f = Math.ceil(u / (1 * Math.pow(10, h))) * Math.pow(10, h), d = i ? 0 : Math.floor(l / (1 * Math.pow(10, h))) * Math.pow(10, h), g = f - d, p = Math.pow(10, h), m = Math.round(g / p);
                    (m > o || o > 2 * m) && !s;)
                    if (m > o) p *= 2, m = Math.round(g / p), m % 1 !== 0 && (s = !0);
                    else if (r && h >= 0) {
                    if (p / 2 % 1 !== 0) break;
                    p /= 2, m = Math.round(g / p)
                } else p /= 2, m = Math.round(g / p);
                return s && (m = a, p = g / m), {
                    steps: m,
                    stepValue: p,
                    min: d,
                    max: d + m * p
                }
            },
            A = i.template = function(t, n) {
                function e(t, n) {
                    var e = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
                    return n ? e(n) : e
                }
                if (t instanceof Function) return t(n);
                var i = {};
                return e(t, n)
            },
            P = i.generateLabels = function(t, n, e, i) {
                var a = new Array(n);
                return labelTemplateString && r(a, function(n, r) {
                    a[r] = A(t, {
                        value: e + i * (r + 1)
                    })
                }), a
            },
            L = i.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var n = 1.70158,
                        e = 0,
                        i = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), i < Math.abs(1) ? (i = 1, n = e / 4) : n = e / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - n) * (2 * Math.PI) / e)))
                },
                easeOutElastic: function(t) {
                    var n = 1.70158,
                        e = 0,
                        i = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), i < Math.abs(1) ? (i = 1, n = e / 4) : n = e / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - n) * (2 * Math.PI) / e) + 1)
                },
                easeInOutElastic: function(t) {
                    var n = 1.70158,
                        e = 0,
                        i = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, n = e / 4) : n = e / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - n) * (2 * Math.PI) / e)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - n) * (2 * Math.PI) / e) * .5 + 1)
                },
                easeInBack: function(t) {
                    var n = 1.70158;
                    return 1 * (t /= 1) * t * ((n + 1) * t - n)
                },
                easeOutBack: function(t) {
                    var n = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((n + 1) * t + n) + 1)
                },
                easeInOutBack: function(t) {
                    var n = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((n *= 1.525) + 1) * t - n)) : .5 * ((t -= 2) * t * (((n *= 1.525) + 1) * t + n) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - L.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return .5 > t ? .5 * L.easeInBounce(2 * t) : .5 * L.easeOutBounce(2 * t - 1) + .5
                }
            },
            N = i.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(),
            T = i.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(),
            z = i.animationLoop = function(t, n, e, i, r, a) {
                var o = 0,
                    s = L[e] || L.linear,
                    u = function() {
                        o++;
                        var e = o / n,
                            l = s(e);
                        t.call(a, l, e, o), i.call(a, l, e), n > o ? a.animationFrame = N(u) : r.apply(a)
                    };
                N(u)
            },
            R = i.getRelativePosition = function(t) {
                var n, e, i = t.originalEvent || t,
                    r = t.currentTarget || t.srcElement,
                    a = r.getBoundingClientRect();
                return i.touches ? (n = i.touches[0].clientX - a.left, e = i.touches[0].clientY - a.top) : (n = i.clientX - a.left, e = i.clientY - a.top), {
                    x: n,
                    y: e
                }
            },
            F = i.addEvent = function(t, n, e) {
                t.addEventListener ? t.addEventListener(n, e) : t.attachEvent ? t.attachEvent("on" + n, e) : t["on" + n] = e
            },
            B = i.removeEvent = function(t, n, e) {
                t.removeEventListener ? t.removeEventListener(n, e, !1) : t.detachEvent ? t.detachEvent("on" + n, e) : t["on" + n] = d
            },
            I = i.bindEvents = function(t, n, e) {
                t.events || (t.events = {}), r(n, function(n) {
                    t.events[n] = function() {
                        e.apply(t, arguments)
                    }, F(t.chart.canvas, n, t.events[n])
                })
            },
            q = i.unbindEvents = function(t, n) {
                r(n, function(n, e) {
                    B(t.chart.canvas, e, n)
                })
            },
            D = i.getMaximumWidth = function(t) {
                var n = t.parentNode;
                return n.clientWidth
            },
            O = i.getMaximumHeight = function(t) {
                var n = t.parentNode;
                return n.clientHeight
            },
            W = i.getMaximumSize = i.getMaximumWidth,
            H = i.retinaScale = function(t) {
                var n = t.ctx,
                    e = t.canvas.width,
                    i = t.canvas.height;
                window.devicePixelRatio && (n.canvas.style.width = e + "px", n.canvas.style.height = i + "px", n.canvas.height = i * window.devicePixelRatio, n.canvas.width = e * window.devicePixelRatio, n.scale(window.devicePixelRatio, window.devicePixelRatio))
            },
            j = i.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            Y = i.fontString = function(t, n, e) {
                return n + " " + t + "px " + e
            },
            U = i.longestText = function(t, n, e) {
                t.font = n;
                var i = 0;
                return r(e, function(n) {
                    var e = t.measureText(n).width;
                    i = e > i ? e : i
                }), i
            },
            V = i.drawRoundedRectangle = function(t, n, e, i, r, a) {
                t.beginPath(), t.moveTo(n + a, e), t.lineTo(n + i - a, e), t.quadraticCurveTo(n + i, e, n + i, e + a), t.lineTo(n + i, e + r - a), t.quadraticCurveTo(n + i, e + r, n + i - a, e + r), t.lineTo(n + a, e + r), t.quadraticCurveTo(n, e + r, n, e + r - a), t.lineTo(n, e + a), t.quadraticCurveTo(n, e, n + a, e), t.closePath()
            };
        e.instances = {}, e.Type = function(t, n, i) {
            this.options = n, this.chart = i, this.id = g(), e.instances[this.id] = this, n.responsive && this.resize(), this.initialize.call(this, t)
        }, o(e.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return j(this.chart), this
            },
            stop: function() {
                return i.cancelAnimFrame.call(t, this.animationFrame), this
            },
            resize: function(t) {
                this.stop();
                var n = this.chart.canvas,
                    e = D(this.chart.canvas),
                    i = this.options.maintainAspectRatio ? e / this.chart.aspectRatio : O(this.chart.canvas);
                return n.width = this.chart.width = e, n.height = this.chart.height = i, H(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: d,
            render: function(t) {
                return t && this.reflow(), this.options.animation && !t ? i.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
            },
            generateLegend: function() {
                return A(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), q(this, this.events), delete e.instances[this.id]
            },
            showTooltip: function(t, n) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var a = function(t) {
                    var n = !1;
                    return t.length !== this.activeElements.length ? n = !0 : (r(t, function(t, e) {
                        t !== this.activeElements[e] && (n = !0)
                    }, this), n)
                }.call(this, t);
                if (a || n) {
                    if (this.activeElements = t, this.draw(), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var o, s, l = this.datasets.length - 1; l >= 0 && (o = this.datasets[l].points || this.datasets[l].bars || this.datasets[l].segments, s = u(o, t[0]), -1 === s); l--);
                            var c = [],
                                h = [],
                                f = function(t) {
                                    var n = [],
                                        e, r = [],
                                        a = [],
                                        o, u, l, f;
                                    return i.each(this.datasets, function(t) {
                                        e = t.points || t.bars || t.segments, e[s] && e[s].hasValue() && n.push(e[s])
                                    }), i.each(n, function(t) {
                                        r.push(t.x), a.push(t.y), c.push(i.template(this.options.multiTooltipTemplate, t)), h.push({
                                            fill: t._saved.fillColor || t.fillColor,
                                            stroke: t._saved.strokeColor || t.strokeColor
                                        })
                                    }, this), f = x(a), u = y(a), l = x(r), o = y(r), {
                                        x: l > this.chart.width / 2 ? l : o,
                                        y: (f + u) / 2
                                    }
                                }.call(this, s);
                            new e.MultiTooltip({
                                x: f.x,
                                y: f.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: c,
                                legendColors: h,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: t[0].label,
                                chart: this.chart,
                                ctx: this.chart.ctx
                            }).draw()
                        } else r(t, function(t) {
                            var n = t.tooltipPosition();
                            new e.Tooltip({
                                x: Math.round(n.x),
                                y: Math.round(n.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: A(this.options.tooltipTemplate, t),
                                chart: this.chart
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), e.Type.extend = function(t) {
            var n = this,
                i = function() {
                    return n.apply(this, arguments)
                };
            if (i.prototype = a(n.prototype), o(i.prototype, t), i.extend = e.Type.extend, t.name || n.prototype.name) {
                var r = t.name || n.prototype.name,
                    u = e.defaults[n.prototype.name] ? a(e.defaults[n.prototype.name]) : {};
                e.defaults[r] = o(u, t.defaults), e.types[r] = i, e.prototype[r] = function(t, n) {
                    var a = s(e.defaults.global, e.defaults[r], n || {});
                    return new i(t, a, this)
                }
            } else p("Name not provided for this chart, so it hasn't been registered");
            return n
        }, e.Element = function(t) {
            o(this, t), this.initialize.apply(this, arguments), this.save()
        }, o(e.Element.prototype, {
            initialize: function() {},
            restore: function(t) {
                return t ? r(t, function(t) {
                    this[t] = this._saved[t]
                }, this) : o(this, this._saved), this
            },
            save: function() {
                return this._saved = a(this), delete this._saved._saved, this
            },
            update: function(t) {
                return r(t, function(t, n) {
                    this._saved[n] = this[n], this[n] = t
                }, this), this
            },
            transition: function(t, n) {
                return r(t, function(t, e) {
                    this[e] = (t - this._saved[e]) * n + this._saved[e]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return v(this.value)
            }
        }), e.Element.extend = f, e.Point = e.Element.extend({
            display: !0,
            inRange: function(t, n) {
                var e = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(n - this.y, 2) < Math.pow(e, 2)
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                }
            }
        }), e.Arc = e.Element.extend({
            inRange: function(t, n) {
                var e = i.getAngleFromPoint(this, {
                        x: t,
                        y: n
                    }),
                    r = e.angle >= this.startAngle && e.angle <= this.endAngle,
                    a = e.distance >= this.innerRadius && e.distance <= this.outerRadius;
                return r && a
            },
            tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    n = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(t) * n,
                    y: this.y + Math.sin(t) * n
                }
            },
            draw: function(t) {
                var n = t || 1,
                    e = this.ctx;
                e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
            }
        }), e.Rectangle = e.Element.extend({
            draw: function() {
                var t = this.ctx,
                    n = this.width / 2,
                    e = this.x - n,
                    i = this.x + n,
                    r = this.base - (this.base - this.y),
                    a = this.strokeWidth / 2;
                this.showStroke && (e += a, i -= a, r += a), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(e, this.base), t.lineTo(e, r), t.lineTo(i, r), t.lineTo(i, this.base), t.fill(), this.showStroke && t.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(t, n) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && n >= this.y && n <= this.base
            }
        }), e.Tooltip = e.Element.extend({
            draw: function() {
                var t = this.chart.ctx;
                t.font = Y(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var n = 2,
                    e = t.measureText(this.text).width + 2 * this.xPadding,
                    i = this.fontSize + 2 * this.yPadding,
                    r = i + this.caretHeight + n;
                this.x + e / 2 > this.chart.width ? this.xAlign = "left" : this.x - e / 2 < 0 && (this.xAlign = "right"), this.y - r < 0 && (this.yAlign = "below");
                var a = this.x - e / 2,
                    o = this.y - r;
                switch (t.fillStyle = this.fillColor, this.yAlign) {
                    case "above":
                        t.beginPath(), t.moveTo(this.x, this.y - n), t.lineTo(this.x + this.caretHeight, this.y - (n + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (n + this.caretHeight)), t.closePath(), t.fill();
                        break;
                    case "below":
                        o = this.y + n + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + n), t.lineTo(this.x + this.caretHeight, this.y + n + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + n + this.caretHeight), t.closePath(), t.fill()
                }
                switch (this.xAlign) {
                    case "left":
                        a = this.x - e + (this.cornerRadius + this.caretHeight);
                        break;
                    case "right":
                        a = this.x - (this.cornerRadius + this.caretHeight)
                }
                V(t, a, o, e, i, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, a + e / 2, o + i / 2)
            }
        }), e.MultiTooltip = e.Element.extend({
            initialize: function() {
                this.font = Y(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = Y(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    n = U(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    e = y([n, t]);
                this.width = e + 2 * this.xPadding;
                var i = this.height / 2;
                this.y - i < 0 ? this.y = i : this.y + i > this.chart.height && (this.y = this.chart.height - i), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(t) {
                var n = this.y - this.height / 2 + this.yPadding,
                    e = t - 1;
                return 0 === t ? n + this.titleFontSize / 2 : n + (1.5 * this.fontSize * e + this.fontSize / 2) + 1.5 * this.titleFontSize
            },
            draw: function() {
                V(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, i.each(this.labels, function(n, e) {
                    t.fillStyle = this.textColor, t.fillText(n, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(e + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[e].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }), e.Scale = e.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = w(this.stepValue), n = 0; n <= this.steps; n++) this.yLabels.push(A(this.templateString, {
                    value: (this.min + n * this.stepValue).toFixed(t)
                }));
                this.yLabelWidth = this.display && this.showLabels ? U(this.ctx, this.font, this.yLabels) : 0
            },
            addXLabel: function(t) {
                this.xLabels.push(t), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var t = this.endPoint - this.startPoint,
                    n;
                for (this.calculateYRange(t), this.buildYLabels(), this.calculateXLabelRotation(); t > this.endPoint - this.startPoint;) t = this.endPoint - this.startPoint, n = this.yLabelWidth, this.calculateYRange(t), this.buildYLabels(), n < this.yLabelWidth && this.calculateXLabelRotation()
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var t = this.ctx.measureText(this.xLabels[0]).width,
                    n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
                    e, i;
                if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = t / 2 > this.yLabelWidth + 10 ? t / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                    var r = U(this.ctx, this.font, this.xLabels),
                        a, o;
                    this.xLabelWidth = r;
                    for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) a = Math.cos(M(this.xLabelRotation)), e = a * t, i = a * n, e + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = e + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = a * r;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(M(this.xLabelRotation)) * r + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: d,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(t) {
                var n = this.drawingArea() / (this.min - this.max);
                return this.endPoint - n * (t - this.min)
            },
            calculateX: function(t) {
                var n = this.xLabelRotation > 0,
                    e = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
                    i = e / (this.valuesCount - (this.offsetGridLines ? 0 : 1)),
                    r = i * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (r += i / 2),
                    Math.round(r)
            },
            update: function(t) {
                i.extend(this, t), this.fit()
            },
            draw: function() {
                var t = this.ctx,
                    n = (this.endPoint - this.startPoint) / this.steps,
                    e = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, r(this.yLabels, function(r, a) {
                    var o = this.endPoint - n * a,
                        s = Math.round(o);
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(r, e - 10, o), t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s += i.aliasPixel(t.lineWidth), t.moveTo(e, s), t.lineTo(this.width, s), t.stroke(), t.closePath(), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(e - 5, s), t.lineTo(e, s), t.stroke(), t.closePath()
                }, this), r(this.xLabels, function(n, e) {
                    var i = this.calculateX(e) + _(this.lineWidth),
                        r = this.calculateX(e - (this.offsetGridLines ? .5 : 0)) + _(this.lineWidth),
                        a = this.xLabelRotation > 0;
                    t.beginPath(), e > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), t.moveTo(r, this.endPoint), t.lineTo(r, this.startPoint - 3), t.stroke(), t.closePath(), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(r, this.endPoint), t.lineTo(r, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(i, a ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * M(this.xLabelRotation)), t.font = this.font, t.textAlign = a ? "right" : "center", t.textBaseline = a ? "middle" : "top", t.fillText(n, 0, 0), t.restore()
                }, this))
            }
        }), e.RadialScale = e.Element.extend({
            initialize: function() {
                this.size = x([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(t) {
                var n = this.drawingArea / (this.max - this.min);
                return (t - this.min) * n
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = w(this.stepValue), n = 0; n <= this.steps; n++) this.yLabels.push(A(this.templateString, {
                    value: (this.min + n * this.stepValue).toFixed(t)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var t = x([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    n, e, i, r, a = this.width,
                    o, s, u = 0,
                    l, c, h, f, d, g, p;
                for (this.ctx.font = Y(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) n = this.getPointPosition(e, t), i = this.ctx.measureText(A(this.templateString, {
                    value: this.labels[e]
                })).width + 5, 0 === e || e === this.valuesCount / 2 ? (r = i / 2, n.x + r > a && (a = n.x + r, o = e), n.x - r < u && (u = n.x - r, l = e)) : e < this.valuesCount / 2 ? n.x + i > a && (a = n.x + i, o = e) : e > this.valuesCount / 2 && n.x - i < u && (u = n.x - i, l = e);
                h = u, f = Math.ceil(a - this.width), s = this.getIndexAngle(o), c = this.getIndexAngle(l), d = f / Math.sin(s + Math.PI / 2), g = h / Math.sin(c + Math.PI / 2), d = v(d) ? d : 0, g = v(g) ? g : 0, this.drawingArea = t - (g + d) / 2, this.setCenterPoint(g, d)
            },
            setCenterPoint: function(t, n) {
                var e = this.width - n - this.drawingArea,
                    i = t + this.drawingArea;
                this.xCenter = (i + e) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(t) {
                var n = 2 * Math.PI / this.valuesCount;
                return t * n - Math.PI / 2
            },
            getPointPosition: function(t, n) {
                var e = this.getIndexAngle(t);
                return {
                    x: Math.cos(e) * n + this.xCenter,
                    y: Math.sin(e) * n + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (r(this.yLabels, function(n, e) {
                            if (e > 0) {
                                var i = e * (this.drawingArea / this.steps),
                                    r = this.yCenter - i,
                                    a;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, i, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else {
                                        t.beginPath();
                                        for (var o = 0; o < this.valuesCount; o++) a = this.getPointPosition(o, this.calculateCenterOffset(this.min + e * this.stepValue)), 0 === o ? t.moveTo(a.x, a.y) : t.lineTo(a.x, a.y);
                                        t.closePath(), t.stroke()
                                    }
                                if (this.showLabels) {
                                    if (t.font = Y(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var s = t.measureText(n).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - s / 2 - this.backdropPaddingX, r - this.fontSize / 2 - this.backdropPaddingY, s + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(n, this.xCenter, r)
                                }
                            }
                        }, this), !this.lineArc) {
                        t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var n = this.valuesCount - 1; n >= 0; n--) {
                            if (this.angleLineWidth > 0) {
                                var e = this.getPointPosition(n, this.calculateCenterOffset(this.max));
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(e.x, e.y), t.stroke(), t.closePath()
                            }
                            var i = this.getPointPosition(n, this.calculateCenterOffset(this.max) + 5);
                            t.font = Y(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var a = this.labels.length,
                                o = this.labels.length / 2,
                                s = o / 2,
                                u = s > n || n > a - s,
                                l = n === s || n === a - s;
                            0 === n ? t.textAlign = "center" : n === o ? t.textAlign = "center" : o > n ? t.textAlign = "left" : t.textAlign = "right", l ? t.textBaseline = "middle" : u ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[n], i.x, i.y)
                        }
                    }
                }
            }
        }), i.addEvent(window, "resize", function() {
            var t;
            return function() {
                clearTimeout(t), t = setTimeout(function() {
                    r(e.instances, function(t) {
                        t.options.responsive && t.resize(t.render, !0)
                    })
                }, 50)
            }
        }()), m ? define(function() {
            return e
        }) : "object" == typeof module && module.exports && (module.exports = e), t.Chart = e, e.noConflict = function() {
            return t.Chart = n, e
        }
    }.call(this),
    function() {
        "use strict";
        var t = this,
            n = t.Chart,
            e = n.helpers,
            i = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        n.Type.extend({
            name: "Bar",
            defaults: i,
            initialize: function(t) {
                var i = this.options;
                this.ScaleClass = n.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, n, e) {
                        var r = this.calculateBaseWidth(),
                            a = this.calculateX(e) - r / 2,
                            o = this.calculateBarWidth(t);
                        return a + o * n + n * i.barDatasetSpacing + o / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * i.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var n = this.calculateBaseWidth() - (t - 1) * i.barDatasetSpacing;
                        return n / t
                    }
                }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var n = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(n, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(n)
                }), this.BarClass = n.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), e.each(t.datasets, function(n, i) {
                    var r = {
                        label: n.label || null,
                        fillColor: n.fillColor,
                        strokeColor: n.strokeColor,
                        bars: []
                    };
                    this.datasets.push(r), e.each(n.data, function(e, i) {
                        r.bars.push(new this.BarClass({
                            value: e,
                            label: t.labels[i],
                            datasetLabel: n.label,
                            strokeColor: n.strokeColor,
                            fillColor: n.fillColor,
                            highlightFill: n.highlightFill || n.fillColor,
                            highlightStroke: n.highlightStroke || n.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, n, i) {
                    e.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, i, n),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), e.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                e.each(this.datasets, function(n, i) {
                    e.each(n.bars, t, this, i)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var n = [], i = e.getRelativePosition(t), r = function(t) {
                        n.push(t.bars[a])
                    }, a, o = 0; o < this.datasets.length; o++)
                    for (a = 0; a < this.datasets[o].bars.length; a++)
                        if (this.datasets[o].bars[a].inRange(i.x, i.y)) return e.each(this.datasets, r), n;
                return n
            },
            buildScale: function(t) {
                var n = this,
                    i = function() {
                        var t = [];
                        return n.eachBars(function(n) {
                            t.push(n.value)
                        }), t
                    },
                    r = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var n = e.calculateScaleRange(i(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, n)
                        },
                        xLabels: t,
                        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && e.extend(r, {
                    calculateYRange: e.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(r)
            },
            addData: function(t, n) {
                e.each(t, function(t, e) {
                    this.datasets[e].bars.push(new this.BarClass({
                        value: t,
                        label: n,
                        x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[e].strokeColor,
                        fillColor: this.datasets[e].fillColor
                    }))
                }, this), this.scale.addXLabel(n), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), e.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                e.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = e.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var n = t || 1;
                this.clear();
                var i = this.chart.ctx;
                this.scale.draw(n), e.each(this.datasets, function(t, i) {
                    e.each(t.bars, function(t, e) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, i, e),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, n).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            n = t.Chart,
            e = n.helpers,
            i = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        n.Type.extend({
            name: "Doughnut",
            defaults: i,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = n.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var n = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), e.each(n, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(n)
                }), this.calculateTotal(t), e.each(t, function(t, n) {
                    this.addData(t, n, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var n = [],
                    i = e.getRelativePosition(t);
                return e.each(this.segments, function(t) {
                    t.inRange(i.x, i.y) && n.push(t)
                }, this), n
            },
            addData: function(t, n, e) {
                var i = n || this.segments.length;
                this.segments.splice(i, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), e || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return 2 * Math.PI * (t / this.total)
            },
            calculateTotal: function(t) {
                this.total = 0, e.each(t, function(t) {
                    this.total += t.value
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), e.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), e.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var n = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(n, 1), this.reflow(), this.update()
            },
            reflow: function() {
                e.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, e.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var n = t ? t : 1;
                this.clear(), e.each(this.segments, function(t, e) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, n), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle)
                }, this)
            }
        }), n.types.Doughnut.extend({
            name: "Pie",
            defaults: e.merge(i, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            n = t.Chart,
            e = n.helpers,
            i = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        n.Type.extend({
            name: "Line",
            defaults: i,
            initialize: function(t) {
                this.PointClass = n.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var n = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(n, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(n)
                }), e.each(t.datasets, function(n) {
                    var i = {
                        label: n.label || null,
                        fillColor: n.fillColor,
                        strokeColor: n.strokeColor,
                        pointColor: n.pointColor,
                        pointStrokeColor: n.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(i), e.each(n.data, function(e, r) {
                        i.points.push(new this.PointClass({
                            value: e,
                            label: t.labels[r],
                            datasetLabel: n.label,
                            strokeColor: n.pointStrokeColor,
                            fillColor: n.pointColor,
                            highlightFill: n.pointHighlightFill || n.pointColor,
                            highlightStroke: n.pointHighlightStroke || n.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, n) {
                        e.extend(t, {
                            x: this.scale.calculateX(n),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), e.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                e.each(this.datasets, function(n) {
                    e.each(n.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var n = [],
                    i = e.getRelativePosition(t);
                return e.each(this.datasets, function(t) {
                    e.each(t.points, function(t) {
                        t.inRange(i.x, i.y) && n.push(t)
                    })
                }, this), n
            },
            buildScale: function(t) {
                var i = this,
                    r = function() {
                        var t = [];
                        return i.eachPoints(function(n) {
                            t.push(n.value)
                        }), t
                    },
                    a = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var n = e.calculateScaleRange(r(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, n)
                        },
                        xLabels: t,
                        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && e.extend(a, {
                    calculateYRange: e.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new n.Scale(a)
            },
            addData: function(t, n) {
                e.each(t, function(t, e) {
                    this.datasets[e].points.push(new this.PointClass({
                        value: t,
                        label: n,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[e].pointStrokeColor,
                        fillColor: this.datasets[e].pointColor
                    }))
                }, this), this.scale.addXLabel(n), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), e.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = e.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var n = t || 1;
                this.clear();
                var i = this.chart.ctx,
                    r = function(t) {
                        return null !== t.value
                    },
                    a = function(t, n, i) {
                        return e.findNextWhere(n, r, i) || t
                    },
                    o = function(t, n, i) {
                        return e.findPreviousWhere(n, r, i) || t
                    };
                this.scale.draw(n), e.each(this.datasets, function(t) {
                    var s = e.where(t.points, r);
                    e.each(t.points, function(t, e) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(e)
                        }, n)
                    }, this), this.options.bezierCurve && e.each(s, function(t, n) {
                        var i = n > 0 && n < s.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = e.splineCurve(o(t, s, n), t, a(t, s, n), i), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, i.beginPath(), e.each(s, function(t, n) {
                        if (0 === n) i.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var e = o(t, s, n);
                            i.bezierCurveTo(e.controlPoints.outer.x, e.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else i.lineTo(t.x, t.y)
                    }, this), i.stroke(), this.options.datasetFill && s.length > 0 && (i.lineTo(s[s.length - 1].x, this.scale.endPoint), i.lineTo(s[0].x, this.scale.endPoint), i.fillStyle = t.fillColor, i.closePath(), i.fill()), e.each(s, function(t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            n = t.Chart,
            e = n.helpers,
            i = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        n.Type.extend({
            name: "PolarArea",
            defaults: i,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = n.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new n.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), e.each(t, function(t, n) {
                    this.addData(t, n, !0)
                }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var n = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), e.each(n, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(n)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var n = [],
                    i = e.getRelativePosition(t);
                return e.each(this.segments, function(t) {
                    t.inRange(i.x, i.y) && n.push(t)
                }, this), n
            },
            addData: function(t, n, e) {
                var i = n || this.segments.length;
                this.segments.splice(i, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), e || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var n = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(n, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, e.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var n = [];
                e.each(t, function(t) {
                    n.push(t.value)
                });
                var i = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : e.calculateScaleRange(n, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, i, {
                    size: e.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), e.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            reflow: function() {
                e.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), e.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var n = t || 1;
                this.clear(), e.each(this.segments, function(t, e) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, n), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            n = t.Chart,
            e = n.helpers;
        n.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = n.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var n = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(n, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(n)
                }), e.each(t.datasets, function(n) {
                    var i = {
                        label: n.label || null,
                        fillColor: n.fillColor,
                        strokeColor: n.strokeColor,
                        pointColor: n.pointColor,
                        pointStrokeColor: n.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(i), e.each(n.data, function(e, r) {
                        var a;
                        this.scale.animation || (a = this.scale.getPointPosition(r, this.scale.calculateCenterOffset(e))), i.points.push(new this.PointClass({
                            value: e,
                            label: t.labels[r],
                            datasetLabel: n.label,
                            x: this.options.animation ? this.scale.xCenter : a.x,
                            y: this.options.animation ? this.scale.yCenter : a.y,
                            strokeColor: n.pointStrokeColor,
                            fillColor: n.pointColor,
                            highlightFill: n.pointHighlightFill || n.pointColor,
                            highlightStroke: n.pointHighlightStroke || n.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                e.each(this.datasets, function(n) {
                    e.each(n.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var n = e.getRelativePosition(t),
                    i = e.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, n),
                    r = 2 * Math.PI / this.scale.valuesCount,
                    a = Math.round((i.angle - 1.5 * Math.PI) / r),
                    o = [];
                return (a >= this.scale.valuesCount || 0 > a) && (a = 0), i.distance <= this.scale.drawingArea && e.each(this.datasets, function(t) {
                    o.push(t.points[a])
                }), o
            },
            buildScale: function(t) {
                this.scale = new n.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var n = function() {
                        var n = [];
                        return e.each(t, function(t) {
                            t.data ? n = n.concat(t.data) : e.each(t.points, function(t) {
                                n.push(t.value)
                            })
                        }), n
                    }(),
                    i = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : e.calculateScaleRange(n, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, i)
            },
            addData: function(t, n) {
                this.scale.valuesCount++, e.each(t, function(t, e) {
                    var i = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[e].points.push(new this.PointClass({
                        value: t,
                        label: n,
                        x: i.x,
                        y: i.y,
                        strokeColor: this.datasets[e].pointStrokeColor,
                        fillColor: this.datasets[e].pointColor
                    }))
                }, this), this.scale.labels.push(n), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                e.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: e.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var n = t || 1,
                    i = this.chart.ctx;
                this.clear(), this.scale.draw(), e.each(this.datasets, function(t) {
                    e.each(t.points, function(t, e) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), n)
                    }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, i.beginPath(), e.each(t.points, function(t, n) {
                        0 === n ? i.moveTo(t.x, t.y) : i.lineTo(t.x, t.y)
                    }, this), i.closePath(), i.stroke(), i.fillStyle = t.fillColor, i.fill(), e.each(t.points, function(t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this);
var barChartData3 = {
        labels: ["1900", "1910", "1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990", "2000", "2010"],
        datasets: [{
            scale: "250",
            fillColor: "#26466D",
            strokeColor: "rgb(38,70,109)",
            highlightFill: "#3d5d7d",
            highlightStroke: "rgba(220,220,220,1)",
            data: [14.7, 13.2, 11.6, 8.8, 6.9, 5.4, 4.7, 6.2, 7.9, 11.1, 12.9, 13]
        }]
    },
    barChartData4 = {
        labels: ["1900", "1910", "1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990", "2000", "2010"],
        datasets: [{
            fillColor: "#26466D",
            strokeColor: "rgb(38,70,109)",
            highlightFill: "#3d5d7d",
            highlightStroke: "rgba(220,220,220,1)",
            data: [68600, 77662, 84809, 75448, 61698, 52645, 39687, 28710, 24667, 23467, 29638, 44449]
        }]
    };
window.onload = function() {
    if (Modernizr.canvas) {
        var t = document.getElementById("canvas4").getContext("2d");
        window.myBar = new Chart(t).Bar(barChartData4, {
            responsive: !0,
            barShowStroke: !1,
            scaleShowLabels: !0,
            scaleLineColor: "#e2e2e2",
            scaleShowGridLines: !0,
            scaleLabel: "<%=parseInt(value).toLocaleString()%>"
        })
    } else $(".pop-chart--bmore").hide();
    var n = document.getElementById("canvas3").getContext("2d");
    window.myBar = new Chart(n).Bar(barChartData3, {
        responsive: !0,
        barShowStroke: !1,
        scaleShowLabels: !0,
        scaleLineColor: "#e2e2e2",
        scaleShowGridLines: !0
    })
}, $(document).ready(function() {
    $(".pop-charts__tab").on("click", function() {
        if (!$(this).hasClass("is-selected")) {
            $(".pop-charts__tab").removeClass("is-selected"), $(this).addClass("is-selected");
            var t = $(this).data("chart");
            $(".pop-chart").removeClass("is-visible"), $(".pop-chart").eq(t).addClass("is-visible")
        }
    })
});
var app = app || {
        init: function() {
            app.share(), app.show_video()
        },
        show_video: function() {
            $("#featured-video").find(".fv__overlay, .fv__play-btn").on("click", function() {
                $(".fv__overlay, .fv__play-btn").addClass("is-hidden")
            })
        },
        share: function() {
            $(".icon-twitter").on("click", function() {
                var t = "A new wave of refugees, often from far-flung countries, has landed at Patterson High School. Read their stories: ",
                    n = "http://data.baltimoresun.com/news/unsettled-journeys/part-1/",
                    e = "https://twitter.com/intent/tweet?text=" + t + "&url=" + n + "&tw_p=tweetbutton";
                return window.open(e, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0"), !1
            }), $(".icon-facebook").on("click", function() {
                var t = "http://data.baltimoresun.com/news/unsettled-journeys/part-1/images/topper.jpg",
                    n = "Unsettled Journeys: Torn between two worlds",
                    e = "A new wave of refugees, often from far-flung countries, has landed at Patterson High School. Read their stories.",
                    i = "http://data.baltimoresun.com/news/unsettled-journeys/part-1/",
                    r = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + i + "&picture=" + t + "&name=" + n + "&description=" + e + "&redirect_uri=http://www.facebook.com";
                return window.open(r, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0"), !1
            })
        }
    },
    video_grid = video_grid || {
        init: function() {
            video_grid.update_spotlight(), video_grid.expand_btn(), video_grid.spotlight_btns(), video_grid.mobile_dropdown(), video_grid.load_info("narmin-aleethawi")
        },
        expand_grid: function(t) {
            $(".vg__portraits-row").addClass("is-visible"), $(".vg__expand-btn").addClass("is-hidden"), t && $(".vg__portraits").addClass("is-spotlight-ready")
        },
        expand_btn: function() {
            $(".vg__expand-btn").on("click", function() {
                video_grid.expand_grid(!1)
            })
        },
        update_spotlight: function() {
            $(".vg__portrait").on("click", function() {
                if (!$(this).hasClass("is-selected")) {
                    video_grid.expand_grid(!0), $(".vg__portrait").removeClass("is-selected"), $(this).addClass("is-selected"), $(".vg__portraits-row").removeClass("is-shifted"), $(this).parent().addClass("is-shifted"), $(this).parent().nextAll().addClass("is-shifted");
                    var t = $(this).parent().data("row");
                    $(".vg__spotlight").attr("class", "vg__spotlight is-visible").addClass("is-row-" + t), video_grid.load_info($(this).data("kid")), video_grid.update_mobile_dropdown($(this).data("kid"))
                }
            })
        },
        update_video_src: function(t) {
            $(".vg__spotlight__video iframe").attr("src", "https://player.vimeo.com/video/" + t + "?color=ffffff")
        },
        spotlight_btns: function() {
            $(".vg__spotlight__btn").on("click", function() {
                video_grid.update_video_src($(this).attr("data-src")), $(".vg__spotlight__btn").removeClass("is-selected"), $(this).addClass("is-selected")
            })
        },
        mobile_dropdown: function() {
            $(".vg__spotlight__mobile-dropdown select").on("change", function() {
                var t = $(this).val();
                video_grid.load_info(t), $(".vg__portrait").removeClass("is-selected"), $(".vg__portrait[data-kid='" + t + "']").addClass("is-selected")
            })
        },
        update_mobile_dropdown: function(t) {
            $(".vg__spotlight__mobile-dropdown select").val(t)
        },
        load_info: function(t) {
            var n = $.grep(video_grid.kids, function(n) {
                return n.id === t
            });
            $(".vg__spotlight__name").text(n[0].name), $(".vg__spotlight__age span").text(n[0].age), $(".vg__spotlight__country span").text(n[0].country), $(".vg__spotlight__language span").text(n[0].language), $(".vg__spotlight__btn--english").attr("data-src", n[0].video_english), $(".vg__spotlight__btn--other").attr("data-src", n[0].video_other), video_grid.update_video_src(n[0].video_other), $(".vg__spotlight__btn").removeClass("is-selected"), $(".vg__spotlight__btn--other").addClass("is-selected"), $(".vg__spotlight__btn--other span").text(n[0].language)
        },
        kids: [{
            id: "exel-estrada",
            name: "Exel Estrada",
            age: 17,
            country: "Guatemala",
            language: "Spanish",
            video_other: 138646014,
            video_english: 138646258
        }, {
            id: "carlotta",
            name: "Carlotta",
            age: 17,
            country: "Italy",
            language: "Italian",
            video_other: 138655153,
            video_english: 138655552
        }, {
            id: "faraz-nadeem",
            name: "Faraz Nadeem",
            age: 17,
            country: "Pakistan",
            language: "Urdu",
            video_other: 138648674,
            video_english: 138648868
        }, {
            id: "fayza-al-halabi",
            name: "Fayza Al halabi",
            age: 17,
            country: "Syria",
            language: "Arabic",
            video_other: 138642374,
            video_english: 138642747
        }, {
            id: "franck-kibinda",
            name: "Franck Kibinda",
            age: 15,
            country: "Democratic Republic of the Congo",
            language: "French",
            video_other: 138659837,
            video_english: 138659838
        }, {
            id: "franklin-aguilar",
            name: "Franklin Aguilar",
            age: 20,
            country: "El Salvador",
            language: "Spanish",
            video_other: 138659101,
            video_english: 138659971
        }, {
            id: "karen-abuel",
            name: "Karen Abuel",
            age: 15,
            country: "Philippines",
            language: "Tagalog",
            video_other: 138658693,
            video_english: 138658824
        }, {
            id: "kibra-buluts",
            name: "Kibra Buluts",
            age: 16,
            country: "Ethiopia",
            language: "Tigrignya",
            video_other: 138647285,
            video_english: 138647465
        }, {
            id: "maria-lourenco",
            name: "Maria Lourenco",
            age: "Unknown",
            country: "Angola",
            language: "Portuguese",
            video_other: 138655835,
            video_english: 138656760
        }, {
            id: "mona-al-halabi",
            name: "Mona Al halabi",
            age: 16,
            country: "Syria",
            language: "Arabic",
            video_other: 138646783,
            video_english: 138647080
        }, {
            id: "monique-ngomba",
            name: "Monique Ngomba",
            age: 16,
            country: "Central African Republic",
            language: "Sango",
            video_other: 138658990,
            video_english: 138641808
        }, {
            id: "mussa-alenga",
            name: "Mussa Alenga",
            age: 17,
            country: "Tanzania",
            language: "Swahili",
            video_other: 138657396,
            video_english: 138657935
        }, {
            id: "nan-wang",
            name: "Nan Wang",
            age: 18,
            country: "China",
            language: "Mandarin, Shangai dialect",
            video_other: 138653563,
            video_english: 138653857
        }, {
            id: "nar-bahadur-darjee",
            name: "Nar Bahadur Darjee",
            age: 18,
            country: "Nepal",
            language: "Nepali",
            video_other: 138647646,
            video_english: 138647777
        }, {
            id: "narmin-aleethawi",
            name: "Narmin Al Eethawi",
            age: 19,
            country: "Iraq",
            language: "Arabic",
            video_other: 138659575,
            video_english: 138659574
        }, {
            id: "norma-argueta",
            name: "Norma Argueta",
            age: 18,
            country: "El Salvador",
            language: "Spanish",
            video_other: 138653022,
            video_english: 138653173
        }, {
            id: "reema-alfaheed",
            name: "Reema Alfaheed",
            age: 17,
            country: "Palestine, Iraq",
            language: "Arabic",
            video_other: 138645548,
            video_english: 138645763
        }, {
            id: "tina-lin",
            name: "Tina Lin",
            age: 17,
            country: "China",
            language: "Mandarin",
            video_other: 138649227,
            video_english: 138652895
        }, {
            id: "vigueur-kibinda",
            name: "Vigueur Kibinda",
            age: 17,
            country: "Democratic Republic of the Congo",
            language: "French",
            video_other: 138646443,
            video_english: 138646585
        }, {
            id: "yonas-fishaye",
            name: "Yonas Fishaye",
            age: 17,
            country: "Ethiopia",
            language: "Tigrignya/Amharic",
            video_other: 138648195,
            video_english: 138648460
        }]
    },
    gallery_app = gallery_app || {
        init: function() {
            gallery_app.open(), gallery_app.close(), gallery_app.arrow_events(), gallery_app.update_caption(1), gallery_app.toggle_caption()
        },
        current_slide: 1,
        max_slides: 24,
        open: function() {
            $("div.inline-media--pic__open-gallery span").on("click", function() {
                $(".overlay, #gallery").addClass("is-visible")
            })
        },
        close: function() {
            $("#gallery").find("div.gallery__control--close").on("click", function() {
                $(".overlay, #gallery").removeClass("is-visible")
            }), $("div.overlay").on("click", function() {
                $(".overlay, #gallery").removeClass("is-visible")
            })
        },
        arrow_events: function() {
            $("#gallery").find("div.gallery__control--slide").on("click", function() {
                gallery_app.update_slide($(this).data("dir"))
            })
        },
        update_slide: function(t) {
            "left" === t ? gallery_app.current_slide-- : "right" === t && gallery_app.current_slide++, gallery_app.current_slide < 1 ? gallery_app.current_slide = gallery_app.max_slides : gallery_app.current_slide > gallery_app.max_slides && (gallery_app.current_slide = 1);
            var n = -100 * (gallery_app.current_slide - 1) + "%";
            $("#gallery").find("div.gallery__photos").css("left", n), $("#gallery__current-img").text(gallery_app.current_slide);
            var e = (gallery_app.current_slide - 1) * (100 / (gallery_app.max_slides - 1));
            $("#gallery").find("div.gallery__progress-bar").css("width", e + "%"), gallery_app.update_caption(gallery_app.current_slide)
        },
        toggle_caption: function() {
            $("#gallery").find("div.gallery__toggle-caption div").on("click", function() {
                $(this).parent().toggleClass("is-active"), $("#gallery").find("div.gallery__caption").toggleClass("is-visible")
            })
        },
        update_caption: function(t) {
            $("#gallery").find("div.gallery__caption").html(gallery_app.captions[t - 1])
        },
        captions: ["Narmin Al Eethawi, who is originally from Baghdad, listens during a U.S. History class for English as a Second Language students taught by Melissa Harris.", "Narmin Al Eethawi, 19, plays guitar in her bedroom.", "Narmin Al Eethawi, 19, far left, watches her sisters Raghad, 7, standing at left, and Nabaa, 9, right, dance with friends to a video in their home. Seated on the floor is a family friend, Yara Al Ba Bajalan, 4.", "Narmin Al Eethawi, working at her part-time summer job at Flamer's Grill at Johns Hopkins Hospital, hands a customer his lunch order. The job helped her improve her English skills. The employee at left is Amina Tirhoula.", "Narmin Al Eethawi works at her part-time summer job at Flamer's Grill at Johns Hopkins Hospital, which helped her improve her English skills.", "Narmin Al Eethawi, left, and Fayza Al halabi in Tom Smith's English as a Second Language class between periods.", "Narmin Al Eethawi, second from left, waits in the lunch line with friend Reema Alfaheed, left, and Eyerusalem Hirgeto in the Patterson High School cafeteria.", "Iraqi students, from left, Sarah Al Baroodi, Reema Alfaheed and Narmin Al Eethawi eat lunch and chat at Patterson High School.", "Memi Desta, left, and Narmin Al Eethawi get ready for a volleyball game after school at Patterson High School.", "Memi Desta, left, shares ear buds with friend Narmin Al Eethawi, right, as they speak on Narmin's cellphone to Narmin's mother while walking to their next class at Patterson High School. Memi, who is from Eritrea, lived in the Sudan and is friendly with Narmin's mother, to whom she can speak in Arabic.", "Narmin Al Eethawi, in back row, listens during Tom Smith's English as a Second Language class at Patterson High School. In front is Dama Traore, left, and Pampha Kadariya.", "Iraqi student Narmin Al Eethawi, left, shares a laugh with English as a Second Language teacher Tom Smith after a heart-to-heart conversation on the last day of school. Narmin and her friend Reema Alfaheed had arranged for a farewell party that day for Smith, who was retiring from Patterson High School at the end of the 2014-2015 school year.", "Narmin Al Eethawi, left, and Reema Alfaheed say participating in the Mindful Moments yoga and meditation exercises helps them. The Mindful Moments program at Patterson High School, run by instructors from the Holistic Life Foundation in Baltimore, is a daily part of school at Patterson High School.", "Jeremy Brown, a Mindful Moments instructor from the Holistic Life Foundation, visits a classroom to lead a morning Mindful Moments exercise. Students Narmin Al Eethawi, center, and Reema Alfaheed, facing camera at right, accompanied him to help demonstrate the meditation exercises. All classes are supposed to take a break from instruction to participate, as meditation instructions are broadcast over the public address system.", "Iraqi friends Narmin Al Eethawi, left, and Reema Alfaheed meet in the hallway at Patterson High School last spring.", "Patterson High School students Narmin Al Eethawi, left, Memi Desta (back to camera), and Sarah Al Baroodi, visit friend Reema Alfaheed at Johns Hopkins Hospital. Reema was being observed for spells, which doctors said could be an outgrowth of the stress she experienced in a refugee camp. Resting in a chair behind them is Reema's father.", "Memi Desta, 16, left, and Narmin Al Eethawi, 19, assist as a nurse tends to their friend Reema Alfaheed during a seizure, which she was under observation for at Johns Hopkins Hospital. The Patterson High School students were visiting Reema when she suddenly had a seizure.", "Narmin Al Eethawi, 19, right, comforts her close friend Reema Alfaheed, who was being observed at Johns Hopkins Hospital for seizures. Narmin considers Reema like a younger sister.", "Reema Alfaheed, a Palestinian Iraqi, waits outside Patterson High School before the start of a school day in June.", "Reema Alfaheed changes her shoes after a girls soccer team practice in August, shortly before the start of the 2015-2016 school year.", "At Reema Alfaheed's 17th birthday party in May, held at a local motel, ESOL teacher Tom Smith joins the dance circle with Reema, center, and other friends. Narmin Al Eethawi, behind them at left, claps as they dance.", "Reema Alfaheed, left, and her younger brother, Ahmed Alfaheed, 15, look at videos depicting the Iraq refugee camp near the border with Syria, where they lived for six years after fleeing Baghdad.", "Reema Alfaheed, at home, shows on her cellphone the scene when she says her family's tent caught on fire in the Iraq refugee camp near the border with Syria. They lived in the camp for six years after fleeing Baghdad.", "Fayza Al halabi holds her friend Reema Alfaheed's arm, where Reema has written this message: &quot;I got hurt. I cried too much. But I learned from my best people the right things to do!!!&quot; Reema and Fayza were in Tom Smith's classroom between periods."]
    },
    map = map || {
        init: function() {
            for (var t = [], n = 0; 5 > n; n++) t[n] = {
                x: document.getElementById("pointNarmin" + n).cx.animVal.value,
                y: document.getElementById("pointNarmin" + n).cy.animVal.value
            };
            var e = [
                ["", ""],
                ["Baghdad to Damascus", "When she was 14, Narmin’s family fled their longtime home in Baghdad, Iraq in the middle of the night, hours after their house was firebombed. They jammed into a car and drove more than 12 hours to reach a safe place in Damascus, Syria. They lived there for two years."],
                ["Damascus to Baghdad", "After the unrest in Syria began, Narmin’s family fled again, this time back to Baghdad to get their passports renewed. They stayed a month, living undercover with friends, fearful they would be killed by those who sought to punish her father for working for the Americans."],
                ["Baghdad to Eskisehir", "After filing for refugee status from the United Nations, the family spent nearly two years in Eskisehir, Turkey. The parents were not allowed to work, so they lived on the proceeds of the sale of their house in Baghdad, until they could come to the United States."],
                ["Eskisehir to Baltimore", "The family received permission to come to the United States. They were assigned to Baltimore, and they arrived on December 4, 2013. They were brought to a sprawling apartment complex in Northeast Baltimore, where hundreds of other new immigrants have been settled."]
            ];
            map.onClickNarmin(t, e)
        },
        lockoutButton: function(t) {
            var n = t.value;
            t.setAttribute("disabled", !0), t.value = "...processing...", setTimeout(function() {
                t.value = n, t.removeAttribute("disabled")
            }, 250)
        },
        onClickNarmin: function(t, n) {
            var e = 0;
            $("#slideSubheadNarmin").text(n[e][0]), $("#slideChatterNarmin").text(n[e][1]), $("#nextButtonNarmin").click(function() {
                if (0 == e && (d3.select("#slideNumberCircleNarmin").transition().duration(500).style("opacity", 1), $(".slideIntro").addClass("is-hidden")), e < t.length - 1) {
                    document.getElementById("nextButtonNarmin").id = "inactiveNextButton";
                    var i = d3.svg.line().x(function(t) {
                            return t.x
                        }).y(function(t) {
                            return t.y
                        }).interpolate("basis"),
                        r = d3.select("#narminMapSVG");
                    if (1 == e) var a = r.append("path").attr("d", i([t[e], {
                        x: (t[e].x + t[e + 1].x) / 2,
                        y: (t[e].y + t[e + 1].y) / 2 + 50
                    }, t[e + 1]])).attr("stroke", "black").attr("stroke-width", 1).attr("fill", "none").attr("id", "latestPathNarmin" + e);
                    else var a = r.append("path").attr("d", i([t[e], {
                        x: (t[e].x + t[e + 1].x) / 2,
                        y: (t[e].y + t[e + 1].y) / 2 - 50
                    }, t[e + 1]])).attr("stroke", "black").attr("stroke-width", 1).attr("fill", "none").attr("id", "latestPathNarmin" + e);
                    var o = a.node().getTotalLength();
                    a.attr("stroke-dasharray", o + " " + o).attr("stroke-dashoffset", o).transition().duration(1e3).ease("linear").attr("stroke-dashoffset", 0), 1 == e ? d3.select("#pointNarmin0").transition().delay(900).duration(300).style("opacity", 0).transition().delay(1200).style("opacity", 1).transition().delay(1500).style("opacity", 0).transition().delay(1800).style("opacity", 1) : d3.select("#pointNarmin" + (e + 1)).transition().delay(900).duration(300).style("opacity", 0).transition().delay(1200).style("opacity", 1).transition().delay(1500).style("opacity", 0).transition().delay(1800).style("opacity", 1), $("#slideSubheadNarmin").fadeOut("slow", function() {
                        $(this).text(n[e][0]), $(this).fadeIn("slow")
                    }), $("#slideChatterNarmin").fadeOut("slow", function() {
                        $(this).text(n[e][1]), $(this).fadeIn("slow")
                    }), $("#slideNumberNarmin").fadeOut("slow", function() {
                        $(this).text(e), $(this).fadeIn("slow")
                    }), e++, e > 1 && $("#prevButtonNarmin").removeClass("is-hidden"), e === t.length - 1 && $(this).addClass("is-hidden"), $(".mobileMapSlides img").attr("src", "images/maps/narmin/slide-" + e + ".png"), setTimeout(function() {
                        document.getElementById("inactiveNextButton").id = "nextButtonNarmin"
                    }, 1e3)
                }
            }), $("#prevButtonNarmin").click(function() {
                e > 1 && (document.getElementById("prevButtonNarmin").id = "inactivePrevButton", d3.select("#latestPathNarmin" + (e - 1)).transition().duration(500).style("opacity", 0).remove(), $("#slideSubheadNarmin").fadeOut("slow", function() {
                    $(this).text(n[e][0]), $(this).fadeIn("slow")
                }), $("#slideChatterNarmin").fadeOut("slow", function() {
                    $(this).text(n[e][1]), $(this).fadeIn("slow")
                }), $("#slideNumberNarmin").fadeOut("slow", function() {
                    0 != e && ($(this).text(e), $(this).fadeIn("slow"))
                }), e--, $("#nextButtonNarmin").removeClass("is-hidden"), 1 === e && $(this).addClass("is-hidden"), $(".mobileMapSlides img").attr("src", "images/maps/narmin/slide-" + e + ".png")), setTimeout(function() {
                    document.getElementById("inactivePrevButton").id = "prevButtonNarmin"
                }, 1e3)
            })
        },
        onClickExel: function(t, n) {
            var e = 0;
            $("#slideSubheadExel").text(n[e][0]), $("#slideChatterExel").text(n[e][1]), $("#nextButtonExel").click(function() {
                if (0 == e && d3.select("#slideNumberCircleExel").transition().duration(500).style("opacity", 1), e < t.length - 1) {
                    document.getElementById("nextButtonExel").id = "inactiveNextButton";
                    var i = d3.svg.line().x(function(t) {
                            return t.x
                        }).y(function(t) {
                            return t.y
                        }).interpolate("basis"),
                        r = d3.select("#exelMapSVG");
                    if (2 > e) var a = r.append("path").attr("d", i([t[e], t[e + 1]])).attr("stroke", "black").attr("stroke-width", 1).attr("fill", "none").attr("id", "latestPathExel" + e);
                    else var a = r.append("path").attr("d", i([t[e], {
                        x: (t[e].x + t[e + 1].x) / 2,
                        y: (t[e].y + t[e + 1].y) / 2 - 100
                    }, t[e + 1]])).attr("stroke", "black").attr("stroke-width", 1).attr("fill", "none").attr("id", "latestPathExel" + e);
                    var o = a.node().getTotalLength();
                    a.attr("stroke-dasharray", o + " " + o).attr("stroke-dashoffset", o).transition().duration(1e3).ease("linear").attr("stroke-dashoffset", 0), d3.select("#pointExel" + (e + 1)).transition().delay(900).duration(300).style("opacity", 0).transition().delay(1200).style("opacity", 1).transition().delay(1500).style("opacity", 0).transition().delay(1800).style("opacity", 1), $("#slideSubheadExel").fadeOut("slow", function() {
                        $(this).text(n[e][0]), $(this).fadeIn("slow")
                    }), $("#slideChatterExel").fadeOut("slow", function() {
                        $(this).text(n[e][1]), $(this).fadeIn("slow")
                    }), $("#slideNumberExel").fadeOut("slow", function() {
                        $(this).text(e), $(this).fadeIn("slow")
                    }), e++, setTimeout(function() {
                        document.getElementById("inactiveNextButton").id = "nextButtonExel"
                    }, 1e3)
                }
            }), $("#prevButtonExel").click(function() {
                e > 0 && (document.getElementById("prevButtonExel").id = "inactivePrevButton", 1 == e && (d3.select("#slideNumberCircleExel").transition().duration(500).style("opacity", 0), $("#slideNumberExel").fadeOut("slow", function() {
                    $(this).text(""), $(this).fadeIn("slow")
                })), d3.select("#latestPathExel" + (e - 1)).transition().duration(500).style("opacity", 0).remove(), $("#slideSubheadExel").fadeOut("slow", function() {
                    $(this).text(n[e][0]), $(this).fadeIn("slow")
                }), $("#slideChatterExel").fadeOut("slow", function() {
                    $(this).text(n[e][1]), $(this).fadeIn("slow")
                }), $("#slideNumberExel").fadeOut("slow", function() {
                    0 != e && ($(this).text(e), $(this).fadeIn("slow"))
                }), e--), setTimeout(function() {
                    document.getElementById("inactivePrevButton").id = "prevButtonExel"
                }, 1e3)
            })
        }
    };
$(document).ready(function() {
    app.init(), video_grid.init(), gallery_app.init(), map.init()
});