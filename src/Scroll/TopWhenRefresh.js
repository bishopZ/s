/*

──────────────────────────────────────────
──────────────────────────────────────────
SCROLL TOP WHEN REFRESH BROWSER
──────────────────────────────────────────
──────────────────────────────────────────

S.TopWhenRefresh()

*/

S.TopWhenRefresh = function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0)
    }
}
