import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "enter your first number",
    },
    {
        name: "num2",
        type: "number",
        message: "enter your second number",
    },
    {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
console.log(answers);
if (answers.operation === "addition") {
    console.log(`sum of two numbers=${answers.num1 + answers.num2}`);
}
else if (answers.operation === "subtraction") {
    console.log(`differnce of two numbers=${answers.num1 - answers.num2}`);
}
else if (answers.operation === "multiplication") {
    console.log(`multiply of two numbers=${answers.num1 * answers.num2}`);
}
else if (answers.operation === "division") {
    console.log(`division of two numbers=${answers.num1 / answers.num2}`);
}
