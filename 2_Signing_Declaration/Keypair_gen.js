const { writeFileSync } = require('fs');
const crypto = require('crypto');

const {
    publicKey,
    privateKey,
  } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    }
  });
console.log("Public Key: " + publicKey);
console.log("Private Key: " + privateKey);

// Exporting Keys
writeFileSync('private.pem', privateKey);
writeFileSync('public.pem', publicKey);