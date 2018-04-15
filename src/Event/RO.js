/*

──────────────────────────────────────────
──────────────────────────────────────────
RESIZE & ORIENTATION
──────────────────────────────────────────
──────────────────────────────────────────

S.BM(this, ['resize'])

this.RO = new S.RO({
    cb: this.resize,
    throttle: {
        delay: 100,
        onlyAtEnd: true
    }
})

this.RO.on()
this.RO.off()

resize (event) {

}

*/

S.RO = function (opts) {
    this.cb = opts.cb
    this.iM = S.Snif.isMobile
    this.tick = false

    S.BM(this, ['getThrottle', 'raf', 'run'])

    this.throttle = new S.Throttle({
        cb: this.raf,
        delay: opts.throttle.delay,
        onlyAtEnd: opts.throttle.onlyAtEnd
    })
}

S.RO.prototype = {

    on: function () {
        this.l('add')
    },

    off: function () {
        this.l('remove')
    },

    l: function (action) {
        if (this.iM) {
            S.L(window, action, 'orientationchange', this.getThrottle)
        } else {
            S.L(window, action, 'resize', this.getThrottle)
        }
    },

    getThrottle: function (e) {
        this.e = e
        this.throttle.init()
    },

    raf: function () {
        if (!this.tick) {
            this.raf = requestAnimationFrame(this.run)
            this.tick = true
        }
    },

    run: function () {
        this.cb(this.e)
        this.tick = false
    }

}
