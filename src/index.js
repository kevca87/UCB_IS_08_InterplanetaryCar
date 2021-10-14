import { splitCommandParts, executeCommands } from './InterplanetaryCar';


const form = document.querySelector("#form");
const commandInput = document.querySelector("#command-input");
const gridShapeOutput = document.querySelector("#grid-shape");
const initPosOutput = document.querySelector("#init-pos");
const movementCommandsOutput = document.querySelector("#movement-commands");
const finalPosOutput = document.querySelector("#final-pos");

form.addEventListener("submit",event=>{
    event.preventDefault();
    let command = commandInput.value;
    //alert (command);
    let commandParts = splitCommandParts(command);
    console.log(commandParts);
    let gridShape = commandParts[0];
    let initPos = commandParts[1];
    let movementsCommands = commandParts[2];
    gridShapeOutput.innerHTML = gridShapeOutput.textContent + gridShape;    
    initPosOutput.innerHTML = initPosOutput.textContent + initPos;    
    movementCommandsOutput.innerHTML = movementCommandsOutput.textContent + movementsCommands;
    let finalPos = executeCommands(command);
    finalPosOutput.innerHTML = finalPosOutput.textContent +  finalPos;
})
