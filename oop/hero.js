class BaseHero {
    health
    mana
    constructor(health, mana) {
        this.health = health
        this.mana = mana
    }
    //intrebare, intrebarile mereu dau return
    isAlive() {
        return this.health > 0
    }
    getMana() {
        return this.mana
    }
    //comanda
    firePrimary() { }
    fireSecondary() { }
    receiveHit() { }
}

class Superman extends BaseHero {
    firePrimary() {
        // cand foloseste puterea sta scade din mana cu o unitate
        this.mana--
    }
    fireSecondary() {
        this.mana -= 2
    }
    receiveHit() {
        this.health -= 0.5
    }
}

class Batman extends BaseHero {
    firePrimary() {
        this.mana--
    }
    fireSecondary() {
        this.mana -= 1.5
    }
    receiveHit() {
        if (this.mana < 50) {
            this.health -= 1
        } else {
            this.health -= 0.5
        }
    }
}

let clark = new Superman()
let bruce = new Batman()

clark.firePrimary()
bruce.receiveHit()
clark.firePrimary()
bruce.receiveHit()
bruce.fireSecondary()
clark.receiveHit()
clark.receiveHit()
//...