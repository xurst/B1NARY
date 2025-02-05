const messages = {
    common: [
        "xurst's computer language thing"
    ],
    uncommon: [":(", ":)", ":D", "D:", ":3", ";3", "-_-", "_-_", ">-<", "<3", ":P", ";)", ":|", ":o", ":O", ":/", ":'(", ":*", "^_^", "v_v", "T_T", "O_O", ">.>", "<.<", "c:", "3:)", ">:)", ":v", "<:3", "(╯°□°）╯︵ ┻━┻", "( ͡° ͜ʖ ͡°)", "(╯°□°）╯︵", "┻━┻", "✌", "(｡♥‿♥｡)", "(*≧ω≦)", "ʘ‿ʘ", "(⌐■_■)", "(¬‿¬)", "¯\\_(ツ)_/¯", "(* ^ ω ^)", "щ(°Д°щ)", "ಠ_ಠ", "°˛°", "ʕ•ᴥ•ʔ", "(｡•́‿•̀｡)", "(¬_¬)", "⧹(._.)/⧸", "(´∩｡• ᵕ •｡∩`)", "(•‿•)", "(✧ω✧)", "＼(^o^)／", "ヽ(＾Д＾)ﾉ", "٩(◕‿◕｡)۶", "(づ｡◕‿‿◕｡)づ"],
    rare: ["SHATTTTTTTT", "YEAHAHAHAHAHAHAHAH", "SLATTT"],
    epic: ["YEAH"],
    legendary: ["xurst lifeeee"],
    vampire: ["ok"],
    codeine: ["this is rare?"],
    kingVamp: ["1/5/2025"],
    ayelaaj: ["12/17/2024"],
    bounty: ["bullet", "mhm"],
    xurst: ["👉🔵🔴👈🤞🫴[insert purple]"],
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