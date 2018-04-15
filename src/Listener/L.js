/*

──────────────────────────────────────────
──────────────────────────────────────────
Listener
──────────────────────────────────────────
──────────────────────────────────────────

S.L(element, 'add', 'click', callback)

S.L(document, 'remove', 'touchmove', callback, {passive: false})

*/

S.L = function (el, action, type, cb, o) {
    var d = document
    var el = S.Select.el(el)
    var elL = el.length
    var t

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
