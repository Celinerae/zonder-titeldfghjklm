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
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B) && (!(input.logoIsPressed()) && false))) {
        code = 1
    }
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B) && !(input.logoIsPressed())) && code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A) && (!(input.logoIsPressed()) && code == 1))) {
        code = 2
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A) && (!(input.logoIsPressed()) && code == 2))) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (input.logoIsPressed() && !(input.buttonIsPressed(Button.B) && (!(input.buttonIsPressed(Button.A)) && code == 2))) {
        code = 3
    }
    if (input.logoIsPressed() && !(input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.B)) && code == 3))) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B) && (!(input.logoIsPressed()) && code == 3))) {
        code = 4
    }
    if (input.buttonIsPressed(Button.B) && (!(input.buttonIsPressed(Button.A)) && (!(input.logoIsPressed()) && code == 4))) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (input.logoIsPressed() && !(input.buttonIsPressed(Button.B) && (!(input.buttonIsPressed(Button.B)) && code == 4))) {
        code = 5
    }
    if (input.logoIsPressed() && !(input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.A)) && code == 5))) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    }
})
