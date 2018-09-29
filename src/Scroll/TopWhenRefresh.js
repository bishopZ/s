/*

──────────────────────────────────────────
──────────────────────────────────────────
SCROLL TOP WHEN REFRESH BROWSER
──────────────────────────────────────────
──────────────────────────────────────────

S.TopWhenRefresh()

*/

S.TopWhenRefresh = function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0)
        }
    }
}
