radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Angulo += 10
        if (Angulo > 180) {
            Angulo = 180
        }
    } else if (receivedNumber == 2) {
        Angulo += -10
        if (Angulo < 90) {
            Angulo = 90
        }
    } else if (receivedNumber == 3) {
        Velocidad += 10
        if (Velocidad > 100) {
            Velocidad = 100
        }
    } else if (receivedNumber == 4) {
        Velocidad += -10
        if (Velocidad < 0) {
            Velocidad = 0
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
let Angulo = 0
let Velocidad = 0
radio.setGroup(10)
Velocidad = 0
Angulo = 180
basic.forever(function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, Angulo)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, Velocidad)
})
