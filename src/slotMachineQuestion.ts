import { SlothMachine } from './slotMachine';

const machine1 = new SlothMachine();
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Congratulations!!!. You won 3 coins!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Congratulations!!!. You won 2 coins!!"
