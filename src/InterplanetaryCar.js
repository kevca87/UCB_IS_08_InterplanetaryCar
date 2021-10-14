function validateGridShape(gridShape)
{
  let defaultGridShape = "5,5"
  let isEmpty = gridShape == "";
  if (isEmpty)
    gridShape = defaultGridShape;
  return gridShape;
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
