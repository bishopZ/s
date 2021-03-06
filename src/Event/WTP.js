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
        var d = document
        S.L(d, action, 'mouseWheel', this.p)
        S.L(d, action, 'touchmove', this.p)
    },

    on: function () {
        this.l('add')
    },

    off: function () {
        this.l('remove')
    }
}
