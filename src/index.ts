import { soma } from "./calc";

let printMessage = (msg: string): void =>
    console.log(`Mensagem: ${msg}`);

let msg = "Hello, TypeScript";
printMessage(msg);

//debugger;

let total=soma(1,2,3,4);
printMessage(total.toString());

// console.log("alteracao 1");
// impressao anterior deu lugar a uma nova de acordo com revisor
console.log("alteracao 1 alterada após revisão");