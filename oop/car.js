class Car {
    //propietatile clasei
    model;
    color;
    maxSpeed;
    horsePower;
    handling;
    //constructor creeaza o instanta a clasei - un obiect
    constructor(model, color, maxSpeed, horsePower, handling) {
        // validam parametrii
        this.validateMaxSpeed(maxSpeed)
        

        // this reprezinta obiectul curent
        // this.model reprezinta propietatea
        // model reprezinta parametrul constructorului
        //atribuim valori propietatilor obiectului curent
        this.model = model
        this.color = color
        this.maxSpeed = maxSpeed
        this.horsePower = horsePower
        this.handling = handling
    }
    validateMaxSpeed(maxSpeed) {
        // verifica daca valoarea este corecta
        if(maxSpeed < 0 || maxSpeed > 300) {
            //aruncam o eroare in caz ca maxSpeed depaseste limitele
            throw "maxSpeed is invalid"
        }
    }
}

let apple = new Car('Apple Titanium', 'white', 150, 95, 'easy')

console.log(apple)