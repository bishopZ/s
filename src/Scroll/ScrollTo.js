/*

──────────────────────────────────────────
──────────────────────────────────────────
SCROLL TO
──────────────────────────────────────────
──────────────────────────────────────────

S.ScrollTo({
    dest: 1000,
    d: 200,
    e: '3o',
    cb: afterTop
})

*/

S.ScrollTo = function (opts) {
    var d = document
    var scrollNode = d.scrollingElement ? d.scrollingElement : S.Dom.body // Chrome v.61
    var scrollable = S.Snif.isFirefox || S.Snif.isIE ? d.documentElement : scrollNode
    var start = pageYOffset
    var end = opts.dest
    var r = 1000
    var anim = new S.M({d: opts.d, e: opts.e, update: upd, cb: getCb})

    if (start === end) {
        getCb()
    } else {
        S.WTP.on()
        anim.play()
    }

    function upd (v) {
        scrollable.scrollTop = Math.round(S.Lerp.init(start, end, v.progress) * r) / r
    }

    function getCb () {
        S.WTP.off()

        if (opts.cb) {
            opts.cb()
        }
    }
}
