#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var extract_1 = require("./extract");
var _a = require('kleur'), green = _a.green, bold = _a.bold;
var boxen = require('boxen');
var myArgs = process.argv.slice(2);
if (myArgs.length) {
    console.log(myArgs);
    var inquirer = require('inquirer');
    inquirer
        .prompt([{
            type: 'confirm',
            name: 'want',
            message: 'Are these the files you want to analyze?',
            "default": false
        }])
        .then(function (answer) {
        if (answer.want) {
            proceed();
        }
    });
}
else {
    showHelpMessage();
}
function showHelpMessage() {
    console.log(boxen(bold('Typescript Node Graph'), { padding: 1, borderColor: 'green', borderStyle: 'round' }));
    console.log('Please provide a list of input files and/or folders');
    console.log('e.g. `'
        + green('myFile.ts') + '`, `'
        + green('*.ts`') + ', `'
        + green('**/*.ts`') + ', `'
        + green('myFolder/*.ts') + '`');
    console.log('or any combination of the above, like `' + green('myFile.ts myFolder/*.ts') + '`');
}
function proceed() {
    console.log('do some stuff');
    extract_1.processFiles(myArgs);
}
