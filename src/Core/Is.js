/*

──────────────────────────────────────────
──────────────────────────────────────────
IS
──────────────────────────────────────────
──────────────────────────────────────────

const isString = S.Is.string(varToCheck)
const isObject = S.Is.object(varToCheck)

*/

S.Is = {
    string: function (v) {
        return typeof v === 'string'
    },

    object: function (v) {
        return v === Object(v)
    },

    array: function (v) {
        return v.constructor === Array
    },

    def: function (v) {
        return v !== undefined
    },

    undef: function (v) {
        return v === undefined
    }
}

/*
    TODO

    nodeList (nodes) {
        const sdc = Object.prototype.toString.call(nodes)

        return typeof nodes === 'object' &&
            /^\[object (HTMLCollection|NodeList|Object)]$/.test(sdc) &&
            (typeof nodes.length === 'number') &&
            (nodes.length === 0 || (typeof nodes[0] === 'object' && nodes[0].nodeType > 0))
    }
*/
