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

function getX(initPos)
{
  return initPos.split(',')[0];
}

function getY(initPos)
{
  return initPos.split(',')[1];
}

function jump(initPos)
{
  let orientationJumps = {
    'N':(pos)=>{pos[1]=pos[1]+2},
    'E':(pos)=>{pos[0]=pos[0]+2},
    'S':(pos)=>{pos[1]=pos[1]-2},
    'O':(pos)=>{pos[0]=pos[0]-2}
  }
  let orientation = getOrientation(initPos);
  let x = getX(initPos);
  let y = getY(initPos);
  let actualPos = [x,y]
  let jumpFunction = orientationJumps[orientation];
  return jumpFunction(actualPos).join(',')+orientation;
}


function executeCommands(command)
{
  let commandParts = splitCommandParts(command);
  let gridShape = validateGridShape(commandParts[0]);
  let initPos = validateInitPos(commandParts[1]);
  let commands = commandParts[2];
  let finalPos = jump(initPos);
  return finalPos;
}

export {splitCommandParts,validateGridShape,validateInitPos,executeCommands};
