basic.showLeds(`
    # # # . .
    # # . . .
    # . # . .
    # # # . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    `)
basic.forever(function () {
    music.play(music.stringPlayable("C5 B G F C G D A ", 120), music.PlaybackMode.UntilDone)
})
