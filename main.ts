input.onButtonPressed(Button.A, function () {
    LuftdruckListe = []
    for (let index = 0; index < AnzahlMessungen; index++) {
        Luftdruck = BME280.pressure(BME280_P.Pa)
        LuftdruckListe.push(Luftdruck)
        serial.writeValue("P", Luftdruck)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
    }
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    SummeLuftdruck = 0
    for (let Index = 0; Index <= LuftdruckListe.length - 1; Index++) {
        SummeLuftdruck += LuftdruckListe[Index]
    }
    basic.showNumber(SummeLuftdruck / LuftdruckListe.length)
})
let SummeLuftdruck = 0
let Luftdruck = 0
let LuftdruckListe: number[] = []
let AnzahlMessungen = 0
BME280.Address(BME280_I2C_ADDRESS.ADDR_0x76)
BME280.PowerOn()
AnzahlMessungen = 10
