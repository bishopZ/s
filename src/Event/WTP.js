/*

──────────────────────────────────────────
──────────────────────────────────────────
WHEEL & TOUCH PREVENT
──────────────────────────────────────────
──────────────────────────────────────────

S.WTP.on()
S.WTP.off()

*/

S.WTP = {
    p: function (e) {
        if (e.cancelable) {
            e.preventDefault()
        }
    },

    l: function (action) {
        var t = S.Snif.isMobile ? 'touchmove' : 'mouseWheel'
        S.L(document, action, t, this.p, {passive: false})
    },

    on: function () {
        this.l('add')
    },

    off: function () {
        this.l('remove')
    }
}
