const crypto = require('crypto');

const {
    publicKey,
    privateKey,
  } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'Hi there, this chat is getting encrypted'
    }
  });
console.log("Public Key: " + publicKey);
console.log("Private Key: " + privateKey);
console.log(passphrase);