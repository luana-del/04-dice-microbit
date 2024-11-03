input.onGesture(Gesture.Shake, function () {
    NÚMERO = randint(0, 6)
    basic.showNumber(NÚMERO)
    basic.pause(1000)
    basic.clearScreen()
})
let NÚMERO = 0
basic.showString("DADO")
basic.forever(function () {
	
})
