//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
//Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalItems() {
    this.mainsPower = true // Питане
    this.power = false // Выключен
}

ElectricalItems.prototype.powerOn = function () {
    return this.power = !this.power
} // Включает

Television.prototype = new ElectricalItems()

function Television(color, brand, wattPower) {
    this.color = color
    this.brand = brand
    this.wattPower = wattPower
    this.volume = 0
}

Television.prototype.setVolume = function (volume) {
    return this.volume = volume
} // Громкость

const television = new Television('white', 'Samsung', 100)

television.powerOn() // Включаем или выключаем
television.setVolume(100) // Громкость
console.log(television)

Kettle.prototype = new ElectricalItems()

function Kettle(color, brand, wattPower) {
    this.color = color
    this.brand = brand
    this.wattPower = wattPower
    this.heat = 0
}

Kettle.prototype.setHeat = function (heat) {
    return this.heat = heat
} // Температура

const kettle = new Kettle('black', 'LG', 1500)
kettle.powerOn() //  Включаем или выключаем
kettle.setHeat(80) //  До какой температуры
console.log(kettle)