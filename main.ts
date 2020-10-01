basic.showIcon(IconNames.Yes)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S2, 0)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S2, 180)
    basic.pause(1000)
})
