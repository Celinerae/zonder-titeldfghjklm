let start = 1
let code = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
        start = 0
        code = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (start == 1) {
        basic.showString("C")
    }
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B) && input.logoIsPressed())) {
        code = 1
    }
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A) && input.logoIsPressed())) {
        code = 2
    }
    if (code == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (input.logoIsPressed() && !(input.buttonIsPressed(Button.B) && input.buttonIsPressed(Button.A))) {
        code = 3
    }
    if (code == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B) && input.logoIsPressed())) {
        code = 4
    }
    if (code == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (input.logoIsPressed() && !(input.buttonIsPressed(Button.B) && input.buttonIsPressed(Button.A))) {
        code = 5
    }
    if (code == 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
