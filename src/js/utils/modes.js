function convertInput(input, mode, reverse = false) {
    let output = "";

    switch (mode) {
        case "binary":
            if (reverse) {
                // Binary to text conversion
                output = input
                    .split(" ")
                    .map(binary => String.fromCharCode(parseInt(binary, 2)))
                    .join("");
            } else {
                // Text to binary conversion
                output = input
                    .split("")
                    .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
                    .join(" ");
            }
            break;

        case "hex":
            if (reverse) {
                // Hex to text conversion
                output = input
                    .split(" ")
                    .map(hex => String.fromCharCode(parseInt(hex, 16)))
                    .join("");
            } else {
                // Text to hex conversion
                output = input
                    .split("")
                    .map(char => char.charCodeAt(0).toString(16).toUpperCase())
                    .join(" ");
            }
            break;

        case "morse":
            const morseCode = {
                "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
                "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
                "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
                "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
                "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
                "Z": "--..", "0": "-----", "1": ".----", "2": "..---",
                "3": "...--", "4": "....-", "5": ".....", "6": "-....",
                "7": "--...", "8": "---..", "9": "----."
            };
            const reverseMorseCode = Object.fromEntries(
                Object.entries(morseCode).map(([letter, morse]) => [morse, letter])
            );

            if (reverse) {
                // Morse to text conversion
                output = input
                    .split(" ")
                    .map(morse => reverseMorseCode[morse] || morse)
                    .join("");
            } else {
                // Text to Morse conversion
                output = input
                    .toUpperCase()
                    .split("")
                    .map(char => morseCode[char] || char)
                    .join(" ");
            }
            break;

        default:
            showNotification("failed to convert: unsupported mode!", "error", 4000);
    }

    return output;
}

// Export the function
window.convertInput = convertInput;

// Use this as like print statements
// Example: showNotification("test!", "info", 4000);