function getGridDimensions(gridShape)
{
  let dimensions = gridShape.split(',');
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
  let shapeIsEmpty = gridShape == "";
  if (shapeIsEmpty)
    gridShape = ",";
  let gridDimensions = getGridDimensions(gridShape);
  return gridDimensions.join(',');
}

function splitCommandParts(command)
{
  let commandParts = command.split('/');
  let commandIsComplete = commandParts.length == 3;
  if (!commandIsComplete)
    commandParts = ["","",""];
  return commandParts;
}

export {splitCommandParts,validateGridShape};
