/*

──────────────────────────────────────────
──────────────────────────────────────────
Listener
──────────────────────────────────────────
──────────────────────────────────────────

S.L(element, 'add', 'click', callback)

*/

S.L = function (el, action, type, cb) {
    var d = document
    var el = S.Select.el(el)
    var elL = el.length
    var t

    var pE = ['touchmove', 'mousemove', 'scroll', 'mouseWheel', 'touchstart']
    var o = pE.indexOf(type) === -1 ? false : {passive: false}

    if (type === 'mouseWheel') {
        t = 'onwheel' in d ? 'wheel' : d.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll'
    } else if (type === 'focusOut') {
        t = S.Snif.isFirefox ? 'blur' : 'focusout'
    } else {
        t = type
    }

    for (var i = 0; i < elL; i++) {
        el[i][action + 'EventListener'](t, cb, o)
    }
}
