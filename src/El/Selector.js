/*

──────────────────────────────────────────
──────────────────────────────────────────
SELECTOR
──────────────────────────────────────────
──────────────────────────────────────────

const el[0] = S.Selector.el(selector)
const type = S.Selector.type(selector)
const name = S.Selector.name(selector)

*/

S.Selector = {
    el: function (v) {
        var el = []
        if (S.Is.string(v)) {
            var elName = v.substring(1)
            if (v.charAt(0) === '#') {
                el[0] = S.G.id(elName)
            } else {
                el = S.G.class(elName)
            }
        } else {
            el[0] = v
        }
        return el
    },

    type: function (v) {
        if (v.charAt(0) === '#') {
            return 'id'
        } else {
            return 'class'
        }
    },

    name: function (v) {
        return v.substring(1)
    }
}
