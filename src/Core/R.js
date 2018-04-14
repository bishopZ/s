/*

──────────────────────────────────────────
──────────────────────────────────────────
ROUND
──────────────────────────────────────────
──────────────────────────────────────────

S.R(number, precision)

►►►  precision is optional → 3 by default

0 → 1
1 → 0.1
2 → 0.01
3 → 0.001

*/

S.R = function (n, p) {
    var p = p !== undefined ? Math.pow(10, p) : 1000
    return Math.round(n * p) / p
}
