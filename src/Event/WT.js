/*

──────────────────────────────────────────
──────────────────────────────────────────
WHEEL & TOUCH
──────────────────────────────────────────
──────────────────────────────────────────

S.BindMaker(this, ['wtCb'])

this.WT = new S.WT(this.wtCb)

this.WT.on()
this.WT.off()

wtCb (delta, type, event) {

}

type → 'scroll' or 'touch'

*/

S.WT = function (cb) {
    this.cb = cb
    this.iM = S.Snif.isMobile
    this.tick = false

    S.BindMaker(this, ['touchStart', 'raf', 'run'])
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
        if (this.iM) {
            S.L(d, action, 'touchstart', this.touchStart)
            S.L(d, action, 'touchmove', this.raf)
        } else {
            S.L(d, action, 'mouseWheel', this.raf)
        }
    },

    raf: function (e) {
        this.e = e
        this.e.preventDefault()

        if (!this.tick) {
            this.raf = requestAnimationFrame(this.run)
            this.tick = true
        }
    },

    run: function () {
        var eType = this.e.type

        if (eType === 'wheel') {
            this.onWheel()
        } else if (eType === 'mousewheel') {
            this.onMouseWheel()
        } else if (eType === 'touchmove') {
            this.touchMove()
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

    onMouseWheel: function () {
        this.type = 'scroll'
        this.delta = (this.e.wheelDeltaY) ? this.e.wheelDeltaY : this.e.wheelDelta

        this.getCb()
    },

    touchStart: function (e) {
        this.start = e.targetTouches[0].pageY
    },

    touchMove: function () {
        this.type = 'touch'
        this.delta = this.e.targetTouches[0].pageY - this.start

        this.getCb()
    },

    getCb: function () {
        this.cb(this.delta, this.type, this.e)
        this.tick = false
    }

}
