basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        `)
})
