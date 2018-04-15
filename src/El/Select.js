/*

──────────────────────────────────────────
──────────────────────────────────────────
SELECT
──────────────────────────────────────────
──────────────────────────────────────────

const el[0] = S.Select.el(selector)
const type = S.Select.type(selector)
const name = S.Select.name(selector)

*/

S.Select = {
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
