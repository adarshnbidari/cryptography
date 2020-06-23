const { generateKeyPair } = require('crypto');

const fs = require('fs');

generateKeyPair('rsa', {

    modulusLength: 4096,
    publicKeyEncoding: {

        type: "spki",
        format: "pem"

    },

    privateKeyEncoding: {

        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: "please enter a passphrase"


    }



}, (err, publicKey, privateKey) => {

    if (err) {

        console.log(`There was an error in genrating the keys: ${err}`);

    }

    if (publicKey) {

        fs.writeFile('public.pem', publicKey, (err, data) => {


            if (err) {

                console.log(`Error in writing public key!....: ${err}`);

            } else {


                console.log('saved public key');

            }


        });

    }


    if (privateKey) {

        fs.writeFile('private.pem', privateKey, (err, data) => {


            if (err) {

                console.log(`Error in writing private key!....: ${err}`);

            } else {


                console.log('saved private key');

            }


        });

    }





});