function getGridDimensions(gridShape)
{
  let dimensions = gridShape.split(',');
  let gridHasTwoDimensions = dimensions.length == 2;
  if (!gridHasTwoDimensions)
    dimensions.push("");
  return dimensions.map((dim)=>getDimensionInt(dim));
}

function getDimensionInt(gridDimension)
{
  let defaultDimension = 5;
  let dimension = parseInt(gridDimension);
  if (isNaN(dimension))
    dimension = defaultDimension;
  return dimension;
}

function validateGridShape(gridShape)
{
  let gridDimensions = getGridDimensions(gridShape);
  return gridDimensions.join(',');
}


function getPositionsInt(pos)
{
  let defaultInitPos = 0;
  let initPos = parseInt(pos);
  if(isNaN(initPos))
    initPos = defaultInitPos;
  return initPos;
}

function getInitOrientation(orientation)
{
  let validOrientations = ["N","E","S","O"];
  let defuaultOrientation = "N";
  if (!validOrientations.includes(orientation))
  {
    orientation = defuaultOrientation;
  }
  return orientation;
}

function getInitialPosition(initPos)
{
  let position = initPos.split(',');
  let posHasTwoDimensions = position.length == 2;
  if (!posHasTwoDimensions)
    position.push("0N");
  let initOrientation = position[1][position[1].length-1];
  console.log(initOrientation);
  position[1] = position[1].substring(0,position[1].length-1);
  initOrientation = getInitOrientation(initOrientation);
  console.log(initOrientation);
  return position.map((pos)=>getPositionsInt(pos)).join(',') + initOrientation;
}

function validateInitPos(initPos)
{
  let initialPosition = getInitialPosition(initPos);
  return initialPosition;
}

function splitCommandParts(command)
{
  let commandParts = command.split('/');
  let commandIsComplete = commandParts.length == 3;
  if (!commandIsComplete)
    commandParts = ["","",""];
  return commandParts;
}


function getOrientation(initPos)
{
  let orientationIndex = initPos.length - 1
  return initPos[orientationIndex];
}

function getX(pos)
{
  return parseInt(pos.split(',')[0]);
}

function getY(pos)
{
  return parseInt(pos.split(',')[1]);
}



function isPosInsideGrid(pos,gridShape)
{
  let x = getX(pos);
  let y = getY(pos);
  let gridDimensions = getGridDimensions(gridShape); 
  return (gridDimensions[0] <= x && x >= 0 )&& (gridDimensions[1] <= y && y >= 0);
}

function getValidPos(pos,gridShape)
{
  return "5,5N"
}

function jump(initPos)
{
  let orientationJumps = {
    'N':(pos)=>{pos[1]=pos[1]+2; return pos;},
    'E':(pos)=>{pos[0]=pos[0]+2; return pos;},
    'S':(pos)=>{pos[1]=pos[1]-2; return pos;},
    'O':(pos)=>{pos[0]=pos[0]-2; return pos;}
  }
  let orientation = getOrientation(initPos);
  let x = getX(initPos);
  let y = getY(initPos);
  let actualPos = [x,y]
  let jumpFunction = orientationJumps[orientation];
  let newPos = jumpFunction(actualPos);
  console.log(newPos)
  return newPos.join(',')+orientation;
}

function goAhead(initPos)
{
  let orientationSteps = {
    'N':(pos)=>{pos[1]=pos[1]+1; return pos;},
    'E':(pos)=>{pos[0]=pos[0]+1; return pos;},
    'S':(pos)=>{pos[1]=pos[1]-1; return pos;},
    'O':(pos)=>{pos[0]=pos[0]-1; return pos;}
  }
  let orientation = getOrientation(initPos);
  let x = getX(initPos);
  let y = getY(initPos);
  let actualPos = [x,y]
  let goAheadFunction = orientationSteps[orientation];
  let newPos = goAheadFunction(actualPos);
  return newPos.join(',')+orientation;
}


function executeCommands(command)
{
  let commandFunctions = {'S':jump,'A':goAhead}
  let commandParts = splitCommandParts(command);
  let gridShape = validateGridShape(commandParts[0]);
  let initPos = validateInitPos(commandParts[1]);
  let commands = commandParts[2];
  let commandFunction = commandFunctions[commands];
  let finalPos = commandFunction(initPos);
  return finalPos;
}

export {splitCommandParts,validateGridShape,validateInitPos,executeCommands,isPosInsideGrid,getValidPos};
