
function convertToRoman(num) {
  /*
  use biggest symbol you can use, don't use any symbol more than 3 times and move on to the next symbol and then subtract smallest symbol
  */

  var res = '';
  var symbols = [
    {
      name : 'I',
      value : 1
    },
    {
      name : 'V',
      value : 5
    },
    {
      name : 'X',
      value : 10
    },
    {
      name : 'L',
      value : 50
    },
    {
      name : 'C',
      value : 100
    },
    {
      name : 'D',
      value : 500
    },
    {
      name : 'M',
      value : 1000
    },
  ];
  console.log(num);
  var index = symbols.length - 1;

  function findNext(){

    // Single Symbol
    if(num >= symbols[index].value){
      res += symbols[index].name;
      num -= symbols[index].value;
      return 0;
    }

    for(var a = index - 1; a >= 0; a--){

      if(
        num >= symbols[index].value - symbols[a].value &&
        symbols[index].value - symbols[a].value > symbols[index].value / 2
      ){
        res += symbols[a].name + symbols[index].name;
        num -= symbols[index].value - symbols[a].value;
        return 0;
      }

    }

    return -1;

  }

  while(num > 0) index += findNext();

  console.log(res);
  return res;

}

convertToRoman(36);
