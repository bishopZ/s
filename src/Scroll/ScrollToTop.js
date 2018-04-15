/*

──────────────────────────────────────────
──────────────────────────────────────────
SCROLL TO TOP
──────────────────────────────────────────
──────────────────────────────────────────

S.ScrollToTop({
    totalH: element.offsetHeight,
    cb: afterTop
})

*/

S.ScrollToTop = function (opts) {
    var currentPos = pageYOffset
    var scrollToOpts = {
        dest: 0,
        d: getDuration(),
        e: getEase(),
        cb: opts.cb
    }

    S.ScrollTo(scrollToOpts)

    function getDuration () {
        var coeff = S.Lerp.init(300, 1500, currentPos / opts.totalH)

        return currentPos === 0 ? 0 : coeff
    }

    function getEase () {
        var step = 500

        if (currentPos <= step * 5) {
            return 'Power' + Math.ceil(currentPos / step) + 'InOut'
        } else {
            return 'ExpoInOut'
        }
    }
}
