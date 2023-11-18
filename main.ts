input.onButtonPressed(Button.A, function () {
    if (temperatuur > 25) {
        basic.showString("warm ")
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            . . . . .
            . . . . .
            `)
    } else if (temperatuur > 15) {
        basic.showString("goed weer ")
        basic.showIcon(IconNames.TShirt)
    } else if (temperatuur < 15) {
        basic.showString("brr koud ")
    }
})
let temperatuur = 0
basic.showString("Hello!")
basic.forever(function () {
    temperatuur = input.temperature() - 4
})
