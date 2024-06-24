
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

const await = await inquirer.prompt([{
        message: "frist Number", type: "number", name:"frist number"
},
{
    message: "second number", topic:"number", name:"second number"
},

{
    message: "select any one of the following operator to perform operators", topic:"list", name: "operator", Choice: "Addition", "Substraction","Division"
}
])

//condition statement 

if (answer.operator === "addition"){
    console.log(answer.fristNumber + answer.secondNumber);
} else if (answer, operator === "subtraction")
    {
        console.log(answer.fristNumber + answer.secondNumber);
    }else if(answer.operator === "Multiplication")
        {
            console.log(answer .fristNumber + answer. secondNumber);
        }else if(answer.operator === "Division")