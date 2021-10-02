/* The data is signed by hashing the message with
   a hashing algorithm and the sender’s private key.*/
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

var declaration = "Declared Statement for signing";
const privateKey = fs.readFileSync('private.pem','utf-8');//.replace("-----BEGIN RSA PRIVATE KEY-----","").replace("-----END RSA PRIVATE KEY-----","").trim();
console.log(privateKey);
const sign = crypto.sign("sha256",
Buffer.from(declaration),
{
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
}
);
// the primary purpose of Base64 encoding is 
// to convert binary data into textual format
console.log(sign.toString("base64"));
fs.writeFileSync("Signature",sign);
