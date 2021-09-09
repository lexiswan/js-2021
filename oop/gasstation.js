class GenericGasStation {
    // clasa GenericGasStation este numita clasa abstracta
    // metoda fillTank este numita metoda abstracta
    // reprezinta un contract pe care il vor respecta tpate clasele ce o extind
    //de aceea se numeste polimorfica
    fillTank(car) {}
}

class ShellGasStation extends GenericGasStation {
    fillTank(car) {
      car.tank = car.maxTank
    }
}

class FakeGasStation extends GenericGasStation {
    fillTank(car) {
        //nu umple rezervorul maxim, ci cu 10l mai putin
        car.tank = car.maxTank - 10
    }
}

class Car {
    tank = 0
    maxTank
    constructor(maxTank) {
    this.maxTank = maxTank
    }
    fillTankTo(station) {
        station.fillTank(this)
    }
}

let station1 = new ShellGasStation()
let station2 = new FakeGasStation()
let ferrari = new Car(100)
ferrari.fillTankTo(station1)