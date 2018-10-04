/*

──────────────────────────────────────────
──────────────────────────────────────────
WHEEL & TOUCH
──────────────────────────────────────────
──────────────────────────────────────────

S.BM(this, ['wtCb'])

this.WT = new S.WT(this.wtCb)

this.WT.on()
this.WT.off()

wtCb (delta, type, event) {

}

type → 'scroll' or 'touch'

*/

S.WT = function (cb) {
    this.cb = cb
    this.tick = false

    S.BM(this, ['tS', 'gRaf', 'run'])
}

S.WT.prototype = {

    on: function () {
        this.l('add')
    },

    off: function () {
        this.l('remove')
    },

    l: function (action) {
        var d = document
        S.L(d, action, 'mouseWheel', this.gRaf, {passive: false})
        S.L(d, action, 'touchstart', this.tS, {passive: false})
        S.L(d, action, 'touchmove', this.gRaf, {passive: false})
    },

    gRaf: function (e) {
        this.e = e
        if (this.e.cancelable) {
            this.e.preventDefault()
        }

        if (!this.tick) {
            requestAnimationFrame(this.run)
            this.tick = true
        }
    },

    run: function () {
        var eType = this.e.type

        if (eType === 'wheel') {
            this.onWheel()
        } else if (eType === 'mousewheel') {
            this.onMWheel()
        } else if (eType === 'touchmove') {
            this.tM()
        }
    },

    onWheel: function () {
        this.type = 'scroll'
        this.delta = this.e.wheelDeltaY || this.e.deltaY * -1

        // deltamode === 1 -> wheel mouse, not touch pad
        // https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
        if (S.Snif.isFirefox && this.e.deltaMode === 1) {
            this.delta *= 40
        }

        this.getCb()
    },

    onMWheel: function () {
        this.type = 'scroll'
        this.delta = this.e.wheelDeltaY ? this.e.wheelDeltaY : this.e.wheelDelta

        this.getCb()
    },

    tS: function (e) {
        this.start = e.targetTouches[0].pageY
    },

    tM: function () {
        this.type = 'touch'
        this.delta = this.e.targetTouches[0].pageY - this.start

        this.getCb()
    },

    getCb: function () {
        this.cb(this.delta, this.type, this.e)
        this.tick = false
    }

}
