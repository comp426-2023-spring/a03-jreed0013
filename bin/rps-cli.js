#!/usr/bin/env node

import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});



import { rps, helpRPS, rulesRPS } from "../lib/rpsls.js";

//calling help and rules, or running the game normally
if (args.h || args.help) {
    helpRPS();
    process.exit();
} else if (args.r || args.rules) {
    rulesRPS();
    process.exit();
} else {
    // storing the argument in playerChoice
    const playerChoice = args._[0];

    // case where a choice is not given
    if (!playerChoice) {
        const result = { "player": "rock" };
        console.log(JSON.stringify(result));
        process.exit();
    }

    // fixing case sensitivities
    playerChoice = playerChoice.toLowerCase();

    // playing the game
    const result = rps(playerChoice);
    
    // ensuring the result is defined and logging to console
    if (!(typeof result == "undefined")) {
        console.log(JSON.stringify(result));
        process.exit();
    }
    process.exit();
}