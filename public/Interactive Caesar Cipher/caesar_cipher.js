let key = {};
let shiftValue = 0;

function generateKey(n) {
    const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const key = {};
    for (let i = 0; i < CHARSET.length; i++) {
        key[CHARSET[i]] = CHARSET[(i + n) % CHARSET.length];
    }
    return key;
}

function displayKey(key) {
    const output = document.getElementById("output");
    output.textContent = "[KEY:]\n";
    output.textContent += Object.keys(key).join(" ") + "\n";
    output.textContent += "! ".repeat(Object.keys(key).length).trim() + "\n";
    output.textContent += Object.values(key).join(" ") + "\n";
}

function encrypt(key, message) {
    const SALT = "`¬!\"£$%^&*()-_=+\\|[{]};:'@#~,<.>/?";
    let cipher = "";
    for (let c of message) {
        if (key[c]) {
            cipher += key[c];
        } else {
            cipher += SALT[Math.floor(Math.random() * SALT.length)];
        }
    }
    return cipher;
}

function getDecryptionKey(key) {
    const dkey = {};
    for (let c in key) {
        dkey[key[c]] = c;
    }
    return dkey;
}

// Event Listeners
document.getElementById("setShift").addEventListener("click", () => {
    const shiftInput = document.getElementById("shiftValue").value;
    shiftValue = parseInt(shiftInput);
    if (!isNaN(shiftValue)) {
        key = generateKey(shiftValue);
        document.getElementById("output").textContent = `Shift value set to ${shiftValue}`;
    } else {
        document.getElementById("output").textContent = "Please enter a valid shift value.";
    }
});

document.getElementById("viewKey").addEventListener("click", () => {
    if (Object.keys(key).length > 0) {
        displayKey(key);
    } else {
        document.getElementById("output").textContent = "Please set a shift value first.";
    }
});

document.getElementById("encryptMessage").addEventListener("click", () => {
    const message = document.getElementById("message").value.toUpperCase();
    if (Object.keys(key).length > 0 && message) {
        const cipher = encrypt(key, message);
        document.getElementById("output").textContent = `Encrypted Message: ${cipher}`;
    } else {
        document.getElementById("output").textContent = "Please set a shift value and enter a message.";
    }
});

document.getElementById("decryptMessage").addEventListener("click", () => {
    const message = document.getElementById("message").value.toUpperCase();
    if (Object.keys(key).length > 0 && message) {
        const dkey = getDecryptionKey(key);
        const dmessage = encrypt(dkey, message);
        document.getElementById("output").textContent = `Decrypted Message: ${dmessage}`;
    } else {
        document.getElementById("output").textContent = "Please set a shift value and enter a message.";
    }
});