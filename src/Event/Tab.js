/*

──────────────────────────────────────────
──────────────────────────────────────────
TAB
──────────────────────────────────────────
──────────────────────────────────────────

this.const tab = new S.Tab(tabArr)

this.tab.on()
this.tab.off()

*/

S.Tab = function (arr) {
    this.arr = arr
    this.arrL = arr.length
    this.pause = 0

    S.BM(this, ['change'])
}

S.Tab.prototype = {

    on: function () {
        this.l('add')
    },

    off: function () {
        this.l('remove')
    },

    l: function (action) {
        S.L(document, action, 'visibilitychange', this.change)
    },

    change: function () {
        var now = performance.now()

        if (document.hidden) {
            this.pause = performance.now()
        } else {
            var elapsed = now - this.pause
            for (var i = 0; i < this.arrL; i++) {
                this.arr[i].tab(elapsed)
            }
        }
    }

}
