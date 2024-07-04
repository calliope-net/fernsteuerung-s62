input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    bM0 = !(bM0)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
let bM0 = false
sender.beimStart(
true,
storage.getNumber(StorageSlots.s1)
)
storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
bM0 = true
loops.everyInterval(400, function () {
    basic.setLedColor(0x00ff00)
    if (sender.joystickQwiic()) {
        radio.fill_sendBuffer19()
        if (bM0) {
            sender.sendM0(radio.radio_sendBuffer19())
        } else {
            sender.sendM01(radio.radio_sendBuffer19(), 60)
        }
        radio.sendData(radio.radio_sendBuffer19())
        radio.zeige5x5Buffer(radio.radio_sendBuffer19())
        radio.zeige5x5Joystick(radio.radio_sendBuffer19())
    } else {
        radio.zeigeBIN(68, radio.ePlot.hex, 4)
    }
    basic.turnRgbLedOff()
})
