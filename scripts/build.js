'use strict';

const inquirer = require('inquirer');
const { spawn } = require('child_process');

const getSampleCommand = function (sample) {
    let result = `cd samples/${sample} &&`;
    result += `yarn &&  pod-install --quiet`;
    return result;
};

const SELECTION_OPTIONS = [
    { name: 'Build Plugin Project', value: 0 },
    { name: 'Build React Native Sample 0.63', value: 1 },
    { name: 'Run React Native Sample 0.63 on iOS', value: 2 },
    { name: 'Start Metro server', value: 3 },
    { name: 'Fix metro server Android', value: 4 },
];
const commands = {
    0: 'yarn build-project',
    1: `yarn build-project && ${getSampleCommand('reactNativeSample0_63')}`,
    2: 'yarn --cwd samples/reactNativeSample0_63 ios',
    3: 'yarn --cwd samples/reactNativeSample0_63 start --reset-cache',
    4: 'adb reverse tcp:8081 tcp:8081',
};

inquirer
    .prompt([
        {
            type: 'list',
            name: 'build',
            message: 'What do you want to do?',
            choices: SELECTION_OPTIONS,
        },
    ])
    .then(({ build }) => {
        const command = spawn(commands[build], {
            shell: true,
        });
        command.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        command.stderr.on('data', (data) => {
            console.log(data.toString());
        });
    });
