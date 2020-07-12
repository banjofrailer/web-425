/*
============================================
; Title:  person.class.ts
; Author: Professor Krasso
; Date:   12 July 2020
; Modified by: Sarah Kovar
; Description: TypeScript, implements the 
; interface IPerson
;===========================================
*/


import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    // Accept two arguments (firstName and lastName) and assign the values to the implemented IPerson fields 
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//create a new Person object passing-in my first and last name
let myName = new Person("Sarah", "Kovar");

//output the Person objects first and last name values
console.log(`My name is ${myName.firstName} ${myName.lastName} `);