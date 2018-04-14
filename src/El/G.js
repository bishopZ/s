/*

──────────────────────────────────────────
──────────────────────────────────────────
GET ELEMENT BY
──────────────────────────────────────────
──────────────────────────────────────────

const content = S.G.id('content')
const btn = S.G.class('btn')
const span = S.G.tag('span')

CHILD OF ELEMENT
────────────────

const elements = S.G.class('elements', parentEl)

*/

S.G = {
    parent: function (p) {
        return p ? p : document
    },

    id: function (el, p) {
        return this.parent(p).getElementById(el)
    },

    class: function (el, p) {
        return this.parent(p).getElementsByClassName(el)
    },

    tag: function (el, p) {
        return this.parent(p).getElementsByTagName(el)
    }
}
