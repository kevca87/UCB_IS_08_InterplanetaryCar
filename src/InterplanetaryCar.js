function toInt(strNum){
  let num = parseInt(strNum);
  //Priorizar calidad o funcionalidad?
  if (isNaN(num) || num > 1000 )
    num = 0;
  return num;
}

function getDelimiter(strSeq){
  strSeq = strSeq.split(']\n')[0];
  let delimiter = strSeq.split('//[')[1];
  return delimiter;
}

function escapeRegExpSpecialChar(delimiter){
  let reDelimiter = ''
  for (var i=0; i<delimiter.length;i=i+1)
  {
    reDelimiter = reDelimiter + `\\${delimiter[i]}`;
  }
  return reDelimiter
}

function getDelimitersList(strNumSeq)
{
  let splitSeq = strNumSeq.split('\n ')
  let delimiters = splitSeq[0];
  if (splitSeq.length<2)
  {
    delimiters = [''];
  }
  else {
    delimiters = delimiters.slice(3,-1)
    delimiters = delimiters.split(/\]\[/);
    delimiters = delimiters.map((del)=>escapeRegExpSpecialChar(del));
  }
  return delimiters;
}

function existExtraDelimiters(extraDelimiters)
{
  return extraDelimiters[0] != "";
}

function getIntList(strOfNumbers,delimiters)
{
  let delimitersRegEx = new RegExp(delimiters);
  return strOfNumbers.split(delimitersRegEx).map(toInt);
}

function sum(numbers)
{
  return numbers.reduce((a,b)=>a+b,0);
}

function addExtraDelimiters(delimiters,extraDelimiters)
{
  return `${delimiters}|${extraDelimiters.join('|')}`;
}

function getStrOfNumbers(strOfNumbers)
{
  return strOfNumbers.split('\n ')[1];
}

function addNumbers(strOfNumbers) { 
  let extraDelimiters = getDelimitersList(strOfNumbers);
  let delimiters = ',|-';
  if (existExtraDelimiters(extraDelimiters))
  {
    delimiters = addExtraDelimiters(delimiters,extraDelimiters);
    strOfNumbers = getStrOfNumbers(strOfNumbers);
  }
  let numbers = getIntList(strOfNumbers,delimiters);
  return sum(numbers);
}

export {toInt,addNumbers as stringCalculator,getDelimiter,getDelimitersList};
