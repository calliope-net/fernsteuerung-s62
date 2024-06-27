input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.comment(sender.setServoButton(sender.eServoButton.links))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    bM0 = !(bM0)
    radio.comment(sender.setServoButton(sender.eServoButton.gerade))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.comment(sender.setServoButton(sender.eServoButton.rechts))
})
let bM0 = false
sender.beimStart(169)
storage.putNumber(StorageSlots.s1, radio.getFunkgruppe(0))
bM0 = true
loops.everyInterval(400, function () {
    basic.setLedColor(0x00ff00)
    if (sender.joystickQwiic()) {
        radio.fill_sendBuffer19()
        if (bM0) {
            sender.sendM0(radio.radio_sendBuffer19())
        } else {
            sender.sendM01(radio.radio_sendBuffer19(), 60)
            radio.setByte(radio.radio_sendBuffer19(), radio.eBufferPointer.m0, radio.eBufferOffset.b1_Servo, sender.setServoButton(sender.eServoButton.lesen))
        }
        radio.sendData(radio.radio_sendBuffer19())
        radio.zeige5x5Buffer(radio.radio_sendBuffer19())
        radio.zeige5x5Joystick(radio.radio_sendBuffer19())
    } else {
        radio.zeigeBIN(1092, radio.ePlot.hex, 4)
    }
    basic.turnRgbLedOff()
})
