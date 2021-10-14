function splitCommandParts(command)
{
  let commandParts = command.split('/');
  let commandIsComplete = commandParts.length == 3;
  if (!commandIsComplete)
    commandParts = ["","",""];
  return commandParts;
}

export {splitCommandParts};
