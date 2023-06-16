radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Angulo += 5
        if (Angulo > 225) {
            Angulo = 225
        }
    } else if (receivedNumber == 2) {
        Angulo += -5
        if (Angulo < 135) {
            Angulo = 135
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
    } else if (receivedNumber == 5) {
        Angulo = 180
        Velocidad = 0
    }
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
