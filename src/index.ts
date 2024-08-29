/*Exercício 2: Faça um programa em JS que leia um número inteiro informado pelo usuário e diga se esse número é par ou impar.
Sugestão: Use o % (resto da divisão inteira). */

import promptSync from "prompt-sync";
const prompt = promptSync(); 

const numero : number = Number(prompt("Informe um número inteiro:"));

console.log(epar(numero));

function epar(numero: number): string {

let mensagem:string;
if (numero % 2 === 0) {
mensagem = " O número é par";
} else {
mensagem = "O número é impar";
}
return mensagem; 
}

/*Exercício 3: Faça um programa que leia dois números e informe qual é o maior.
numero1 = 20
numero2 = 30
resposta = 'o numero2 e o maior'*/
let numero1: number = Number(prompt ("Informe o número 1")); 
let numero2: number = Number(prompt ("Informe o número 2"));

 if (numero1 > numero2) {

 console. log(0 número $(numero1) é maior*);
 ) else {

// console. log(O número $(numero2} é maior*);