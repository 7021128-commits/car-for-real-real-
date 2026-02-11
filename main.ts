function back () {
    pins.analogWritePin(AnalogPin.P1, 700)
}
pins.digitalWritePin(DigitalPin.P0, 0)
radio.setGroup(1)
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})
