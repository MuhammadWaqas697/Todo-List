#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
console.log(chalk.blue(" \n \tWelcome to Muhammad Waqas - Todo-list Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: (chalk.green("Please enter your task"))
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-list successfully`);
    let addmoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: (chalk.green("Do you want to add more task")),
            default: "false"
        }
    ]);
    condition = addmoretask.addmore;
}
console.log(chalk.yellow("Your updated Todo-list:" + todolist));
