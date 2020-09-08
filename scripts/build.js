'use strict';

const inquirer = require('inquirer');
const { spawn } = require('child_process');

const getSampleCommand = function (sample) {
    let result = `cd samples/${sample} &&`;
    result += `yarn &&  pod-install --quiet`;
    return result;
};

const SELECTION_OPTIONS = [
    { name: 'Build React Native Sample', value: 0 },
    { name: 'Run React Native Sample', value: 1 },
    { name: 'Start Metro server', value: 2 },
    { name: 'Fix metro server Android', value: 3 },
];
const commands = {
    0: (sample) => {
        return `yarn build-project && ${getSampleCommand(sample)}`;
    },
    1: (sample) => {
        return `yarn --cwd samples/${sample} ios`;
    },
    2: (sample) => {
        return `yarn --cwd samples/${sample} start --reset-cache`;
    },
    3: () => {
        return 'adb reverse tcp:8081 tcp:8081';
    },
};
const SELECTION_OPTIONS_BY_QUESTIONS = (text) => {
    return [
        { name: text + ' sample version 0.61 ', value: 0 },
        { name: text + ' sample version 0.61.5 ', value: 1 },
        { name: text + ' sample version 0.62 ', value: 2 },
        { name: text + ' sample version 0.63 ', value: 3 },
    ];
};

const executeCommand = (command) => {
    const exec = spawn(command, {
        shell: true,
    });
    exec.stdout.on('data', (data) => {
        console.log(data.toString());
    });
    exec.stderr.on('data', (data) => {
        console.log(data.toString());
    });
};

const executeSampleCommand = (commandIndex, sample) => {
    let command;
    switch (sample.build) {
        case 0: {
            command = commands[commandIndex]('reactNativeSample0_61');
            break;
        }
        case 1: {
            command = commands[commandIndex]('reactNativeSample0_61_5');
            break;
        }
        case 2: {
            command = commands[commandIndex]('reactNativeSample0_62');
            break;
        }
        case 3: {
            command = commands[commandIndex]('reactNativeSample0_63');
            break;
        }
    }
    executeCommand(command);
};
const showQuestion = (message, options, callback) => {
    console.log('[showQuestion]', message);
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'build',
                message: message,
                choices: options,
            },
        ])
        .then(callback);
};

showQuestion('Select one option to proceed.', SELECTION_OPTIONS, (selection) => {
    selection = selection.build;
    switch (selection) {
        case 0: {
            showQuestion(
                'Select the sample you want to build?',
                SELECTION_OPTIONS_BY_QUESTIONS('Build'),
                executeSampleCommand.bind(this, selection)
            );
            break;
        }
        case 1: {
            showQuestion(
                'Select the sample you want to run?',
                SELECTION_OPTIONS_BY_QUESTIONS('Run'),
                executeSampleCommand.bind(this, selection)
            );
            break;
        }
        case 2: {
            showQuestion(
                'Select the sample you want to start metro server?',
                SELECTION_OPTIONS_BY_QUESTIONS('Start Metro server'),
                executeSampleCommand.bind(this, selection)
            );
            break;
        }
        case 3: {
            executeCommand(commands[selection]());
            break;
        }
    }
});
