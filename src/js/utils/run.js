const messages = {
    common: [
        "i love ian",
        "ian is sigma",
        "ian is ayelaaj's favorite rapper",
        "ian is my favorite rapper",
        "ayelaaj loves to listen to ian all day everyday",
    ],
    uncommon: ["cartiiii", "whyyyyy", ":(", ":)", ":D"],
    rare: ["D:", "SHATTTTTTTT", "YEAHAHAHAHAHAHAHAH", "SLATTT"],
    epic: ["YEAH"],
    legendary: ["YEAH, THATS ME"],
    vampire: ["VAMP LIFE"],
    codeine: ["🟣💊 CODEINE IS LIFE"],
    kingVamp: ["K-I-N-G-V-A-M-P"],
    ayelaaj: ["00", "YVL"],
    bounty: ["i placed a bounty on ur head. haha funny", "bullet"],
    xurst: ["👉🔵🔴👈🤞🫴🟣", "Ḯ̵̡̛͇̳̪̰̜̯͎͔̝̻̳̩̻̩̣͎̊̂̒͐͒͛̇̌̈́͒̌́̓̅͊͑͆̽̐̉̒̈́͛͐̎͒̓̏̔̑̔̓̈́̚̚͝͠͝ͅ ̶̧̡̨̩̬̯͇̝̼̤̘̝͔̦̪̫̹͎̖̰̖̈͋̉̇̇̀͛͑̈́͋́̍͊̀̓̉͐̐́̄͗̏̿͌̓͋̇̋͌̇̈́̕̚͝͠A̷̢̧̨̡̪̟̖͈̱̺͇̣͔̣̼͖̪̤͖̝͚̰͍͚͙̩̫̠̫̯͇̦̝̩͎̥̭̮̞̹̣͋̄̍̍̌̽͋͑̀̅͑̒͋́͂̌̽̂͑͊͒̈́̃̌͆̇̿̿̔̏́̕͝͠͝M̵̢͍̗͈̗͚̳̹̻̼̝͈͓̥̖͓̬̣͍̭̰̪͉͕̘͉̀͗̌̿̔̉̈͂̑̽̎͆̂̃́̓̀́͛͌͛̔̍͊̾͒͘͘̕̕͘̕͝͠͠͠ ̵̡̢̛̙̜̙̹̺͚͖̋̈́͒͑̋̒͂̐̓̀͛̀̾͆́̌̈́͛͊̉̽͆͒͆̍̐̓͂́͂̈́̏͗̌̀̉̿̿̑̐̓̐̆̚͘͘̕M̷̻͔̦̆͛̽̾̋̒͊̑̏̏͊̃̊́̑̍̍͒̀̎̒͊͛͊̓̈́̇̐̿̃̕̕͝U̸̢̡̧̡͉͉̯͉̼̼̦͍̫͇͇̝̜̙̹̫͓͓̜̙̭̣̺̯̺̱̭̤̮̲͈͕͇̬͚̞͉̭̖͚͓̬͖̍̈́̀͐̽̌̿̂̇̀̽͑̈́̂͌̋͊͋̆͂̽̐̇̏̆̊̀͘͜ͅŞ̶̧̮͕̱̩̳̜̘̹͙͙̯̤̞̘̺̳͇͖̽́͑̎̚İ̵̡̛̛̪̱̥̻̱̜̱̥͎͕̗̼͎̬̣͒͌̀͛̌̀̓̈́̎̌͋͗̽̈͛͊̇̆͐͛̈́̒͒̀̅̌͛̏̃͆̓͗̌͒̈́̽̌́́͝͝͝͠͝͝͝͝C̵̨̡̧̹̭͉̠̦̜̬̦̥̖̖͎̟̖̦̳̪͖̞̠̜͈͔̺͚̪̳̲̣̜̟̺͇͎͉͉͈̤̯̮̳͔̺͙͎̪̀͊̾̒̃͗͗̈͂̂̽̆̃͑̊̊̀̔̋̍̈́͑̈́̋̓̐̉̈́͂̀͌̒͋̽̄́̍͘̚̕͠"],
};

const getRandomCategory = () => {
    const random = Math.random() * 100;

    if (random <= 0.000000000000000000012679231) {
        return "xurst";
    } else if (random <= 0.00000000075) {
        return "bounty";
   } else if (random <= 0.00000125) {
        return "ayelaaj";
    } else if (random <= 0.00025) {
        return "kingVamp";
    } else if (random <= 0.05) {
        return "codeine";
    } else if (random <= 0.1) {
        return "vampire";
    } else if (random <= 1) {
        return "legendary";
    } else if (random <= 5) {
        return "epic";
    } else if (random <= 10) {
        return "rare";
    } else if (random <= 40) {
        return "uncommon";
    } else {
        return "common";
    }
};

const getRandomMessage = () => {
    const category = getRandomCategory();
    const messagesInCategory = messages[category];
    const randomIndex = Math.floor(Math.random() * messagesInCategory.length);
    return messagesInCategory[randomIndex];
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".title").textContent = getRandomMessage();
});

// Use this for as print statements
// Example: showNotification("test!", "info", 4000);