const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const nt = require('nano-time');
const readline = require('readline');
Int64 = require('node-int64');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function main(){
    console.prompt("Number of Input : ");
    var input = parseInt(input);

    for(let i = 0; i < input; i++){
        let transaction_id = window.prompt("Transaction ID :");
        transaction_id = parseInt(transaction_id,16);
        let index = window.prompt("Index :");
        index = parseInt(index);
        let signature = window.prompt("Signature :");
        signature = parseInt(signature,16);
    }

    var output = window.prompt("Number of Output :");
    output = parseInt(output);

    for(let i=0;i<output;i++){
        let coins = window.prompt("Number of Coins :");
        let coin = new Int64(coins);
        let timestamp = new Int64(nt());
        let key = window.prompt("Enter path to your Public Key :");
        publicKey = fs.readFileSync(key,'utf-8');
    }
}
