const fs = require('fs')

const srcArr = [
    'src/Base/S.js',
    'src/Animation/M.js',
    'src/Animation/TL.js',
    'src/Core/BM.js',
    'src/Core/Ease.js',
    'src/Core/Has.js',
    'src/Core/Is.js',
    'src/Core/Lerp.js',
    'src/Core/R.js',
    'src/Core/Snif.js',
    'src/Core/Throttle.js',
    'src/El/G.js', // Must be before 'Dom'
    'src/El/Dom.js',
    'src/El/Select.js',
    'src/El/Index.js',
    'src/Event/MM.js',
    'src/Event/RO.js',
    'src/Event/Scroll.js',
    'src/Event/WT.js',
    'src/Event/WTP.js',
    'src/Listener/L.js',
    'src/Scroll/ScrollToTop.js',
    'src/Scroll/ScrollTo.js',
    'src/Scroll/ScrollZero.js',
    'src/Scroll/TopWhenRefresh.js',
    'src/Window/Win.js'
]

const dist = 's.js'

const encoding = 'utf-8'

const src = srcArr.map(value => {
    return fs.readFileSync(value, encoding)
}).join('\n')

fs.writeFileSync(dist, src, encoding)
