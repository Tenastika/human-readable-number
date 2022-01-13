module.exports = function toReadable (num) {

  function units(num) {
    switch(num) {
      case '1': res.push('one'); break;
      case '2': res.push('two'); break;
      case '3': res.push('three'); break;
      case '4': res.push('four'); break;
      case '5': res.push('five'); break;
      case '6': res.push('six'); break;
      case '7': res.push('seven'); break;
      case '8': res.push('eight'); break;
      case '9': res.push('nine'); break;
    }
  }
  
  function dozens(num) {
    switch(num) {
      case '10': res.push('ten'); break;
      case '11': res.push('eleven'); break;
      case '12': res.push('twelve'); break;
      case '13': res.push('thirteen'); break;
      case '14': res.push('fourteen'); break;
      case '15': res.push('fifteen'); break;
      case '16': res.push('sixteen'); break;
      case '17': res.push('seventeen'); break;
      case '18': res.push('eighteen'); break;
      case '19': res.push('nineteen'); break;
      case '20': res.push('twenty'); break;
      case '30': res.push('thirty'); break;
      case '40': res.push('forty'); break;
      case '50': res.push('fifty'); break;
      case '60': res.push('sixty'); break;
      case '70': res.push('seventy'); break;
      case '80': res.push('eighty'); break;
      case '90': res.push('ninety'); break;
    }
  }
  
  function dozen(arr) {
  
    let doz = Number(arr[0] + arr[1]);
    console.log(doz)
    if (doz <= 20 || Number(arr[1]) == 0) {
      dozens(String(doz));
      
    } else {
      dozens(arr[0] + '0');
      units(arr[1]);
    }}
  
  function dozenInHundred(arr) {
    let doz = Number(arr[1] + arr[2]);
    
    if (doz <= 20 || Number(arr[2]) == 0) {
      dozens(String(doz));
      
    } else {
      dozens(arr[1] + '0');
      units(arr[2]);
    }}
  
  let res =[];
  let str = String(num);
  let arr = str.split('');
  
  if (arr.length == 1) {
    if (Number(arr[0]) == 0 ) {
      res.push('zero');
    } else {
      units(arr[0]);
    } 
  } else if (arr.length == 2) {
    dozen(arr);
  } else if (arr.length == 3) {
      units(arr[0]);
      res.push('hundred');
      if (arr[1] == 0) {
        units(arr[2]);
      } else {
        dozenInHundred(arr);
      }
  }
  
  return res.join(' '); 

}

