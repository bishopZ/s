/*

──────────────────────────────────────────
──────────────────────────────────────────
INDEX
──────────────────────────────────────────
──────────────────────────────────────────

const elementLiIndex = S.Index.list(liElement)
const elementClassIndex = S.Index.class(elementWithClass, className)

*/

S.Index = {
    index: function (n, els) {
        var elsL = els.length
        for (var i = 0; i < elsL; i++) {
            if (n === els[i]) {
                return i
            }
        }
        return -1
    },

    list: function (n) {
        var els = n.parentNode.children
        return this.index(n, els)
    },

    class: function (n, cN) {
        var els = S.G.class(cN)
        return this.index(n, els)
    }
}
