type bankAccounts = {money:number,deposit:(value:number)=>void};
let bankAccount:bankAccounts = {
    money: 2000,
    deposit(value: number): void{
        this.money +=value;
    }
}

let myself:{name:string,bankAccount:bankAccounts,hobbies:string[]}  = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sporst","Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

