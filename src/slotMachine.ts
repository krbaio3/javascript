export class SlothMachine {

    public count = 0;

    constructor() {}

    public play(): string {
        let a = !!Math.floor(Math.random() * 2);
        let b = !!Math.floor(Math.random() * 2);
        let c = !!Math.floor(Math.random() * 2);

        this.count++;

        let cadena = '';

        c && b && a ?
            (cadena = `Congratulations!!!. You won ${this.count} coins!!`,  this.count = 0):
            cadena = 'Good luck next time!!';
        return cadena
    }

}
//
// const machine1 = new SlothMachine();
// //console.log(machine1.play()); // "Good luck next time!!"
// //console.log(machine1.play()); // "Good luck next time!!"
// //console.log(machine1.play()); // "Congratulations!!!. You won 3 coins!!"
// //console.log(machine1.play()); // "Good luck next time!!"
// //console.log(machine1.play()); // "Congratulations!!!. You won 2 coins!!"
