const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

var declaration = "Declared Statement for signing";

// importing public key and signature
const publicKey = fs.readFileSync('public.pem','utf-8');
console.log(publicKey);
const signature = fs.readFileSync('Signature','binary');
console.log(Buffer.from(signature,'binary').toString('hex'));

// verifying signature with help of public key and declaration
var is_Varified = crypto.verify("sha256",Buffer.from(declaration),
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    },
    Buffer.from(signature, 'binary'),
);

if(is_Varified){
    console.log("The Declaration has been Verified!");
}
else{
    console.log("Verification Failed!");
}