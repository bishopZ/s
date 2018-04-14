/*

──────────────────────────────────────────
──────────────────────────────────────────
EASE
──────────────────────────────────────────
──────────────────────────────────────────

const easeMultiplier = S.Ease['linear'](multiplier)

*/

S.Ease = {
    linear: function (m) {
        return m
    },
    Power1In: function (m) {
        return -Math.cos(m * (Math.PI / 2)) + 1
    },
    Power1Out: function (m) {
        return Math.sin(m * (Math.PI / 2))
    },
    Power1InOut: function (m) {
        return -0.5 * (Math.cos(Math.PI * m) - 1)
    },
    Power2In: function (m) {
        return m * m
    },
    Power2Out: function (m) {
        return m * (2 - m)
    },
    Power2InOut: function (m) {
        return m < 0.5 ? 2 * m * m : -1 + (4 - 2 * m) * m
    },
    Power3In: function (m) {
        return m * m * m
    },
    Power3Out: function (m) {
        return (--m) * m * m + 1
    },
    Power3InOut: function (m) {
        return m < 0.5 ? 4 * m * m * m : (m - 1) * (2 * m - 2) * (2 * m - 2) + 1
    },
    Power4In: function (m) {
        return m * m * m * m
    },
    Power4Out: function (m) {
        return 1 - (--m) * m * m * m
    },
    Power4InOut: function (m) {
        return m < 0.5 ? 8 * m * m * m * m : 1 - 8 * (--m) * m * m * m
    },
    Power5In: function (m) {
        return m * m * m * m * m
    },
    Power5Out: function (m) {
        return 1 + (--m) * m * m * m * m
    },
    Power5InOut: function (m) {
        return m < 0.5 ? 16 * m * m * m * m * m : 1 + 16 * (--m) * m * m * m * m
    },
    ExpoIn: function (m) {
        return (m === 0) ? 0 : Math.pow(2, 10 * (m - 1))
    },
    ExpoOut: function (m) {
        return (m === 1) ? 1 : -Math.pow(2, -10 * m) + 1
    },
    ExpoInOut: function (m) {
        if (m === 0) {
            return 0
        } else if (m === 1) {
            return 1
        } else if ((m /= 0.5) < 1) {
            return 0.5 * Math.pow(2, 10 * (m - 1))
        } else {
            return 0.5 * (-Math.pow(2, -10 * --m) + 2)
        }
    }
}
