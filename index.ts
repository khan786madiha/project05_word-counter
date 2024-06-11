#! /usr/bin/env node
import inquirer from "inquirer"

// declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answer: {
    Sentence: string
} = await inquirer.prompt(
        {
            name: "Sentence",
            type: "input",
            message: "Enter your senten to count the word:"
        }
    )

    const words = answer.Sentence.trim().split(" ")
    // print the array of words to the console 
    console.log(words);
    // print the word count of the sentence to the console
    console.log(`your sentence word count is ${words.length}`);
    

    
    // Notes
    // trim k upar cnt + left click kren to uski functionality samne ajaegi k uske pesche kam kia hwa h . trim ka method apke code se white spaces aur lines ko remove karta h.trim sirf start aur end k spaces remove krta h bech k remove nhi karta.
    // split ka method apke code se string ko array me convert karta h. yaha pe split(" ") space k sath h is lea wo har space k bad word count karega . agr without space k split("") likhenge to  wo har ek word ko seprat kr k count karega. 
    