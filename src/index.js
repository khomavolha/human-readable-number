module.exports = function toReadable (number) {
  let one = {0: 'zero', 1: 'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
    10: 'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen',
    18:'eighteen', 19:'nineteen', 20: 'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy',
    80:'eighty', 90:'ninety', 100:'hundred', 1000: 'thousand'}
    let str = number.toString().split('').reverse();
    let length = str.length;
    let omme = Math.floor(number/100);
    let onne = Math.floor(number/10)*10;
    let result = [];



if (number <= 20) return one[number];
if(number<100 && number%10==0) return one[onne];
if(number<1000 && number%100 == 0) return one[omme] +' '+ one[100];
if(number%1000 == 0) return one[1]+' '+one[1000];

switch(length){
  case 2:
  return one[onne]+' '+one[number-onne];
break;
  case 3:
  if (number - omme*100 < 20) return one[omme]+' '+one[100]+' '+ one[number - omme*100];
  if(number%10 === 0) return one[omme]+' '+one[100]+' '+(one[Math.floor((number-omme*100)/10)*10]);
  return one[omme]+' '+one[100]+' '+(one[Math.floor((number-omme*100)/10)*10])+' '+one[number - (omme*100+Math.floor((number-omme*100)/10)*10) ];
  break;
}

  }
