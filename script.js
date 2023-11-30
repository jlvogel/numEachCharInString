const numCharInString = (char, string)=>{
  let numCharsFound = 0;
  for(let letter of string){
    if(letter == char){
      numCharsFound++
    }
  }
  return [char, numCharsFound]
}

const numEachCharInString = (string)=> {
  const lettersArray = []
  const lettersAndNumOfTimes2DArray = []
  for(let letter of string){
    if(!lettersArray.includes(letter)){
      lettersArray.push(letter)
      lettersAndNumOfTimes2DArray.push(numCharInString(letter, string))
    }
  }

  lettersAndNumOfTimes2DArray.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
  for(let subArray of lettersAndNumOfTimes2DArray) {
    console.log(subArray[0], subArray[1])
  }
}

numEachCharInString("supercalifragilisticexpialidocious")
