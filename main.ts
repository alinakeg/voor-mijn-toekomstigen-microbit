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
        basic.showString(" goed weer ")
        basic.showIcon(IconNames.TShirt)
    } else if (temperatuur < 15) {
        basic.showString("brr koud ")
    }
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showLeds(`
            . . # # #
            . # # . #
            # # . . #
            # . . . #
            # # # # #
            `)
    } else if (tool == 1) {
        basic.showLeds(`
            . # # . .
            # # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let tool = 0
let temperatuur = 0
basic.showString("Hello!")
basic.forever(function () {
    temperatuur = input.temperature() - 4
})
