// var num1=5;
// var num2=10;
// if(num1>num2)
//   {
//     console.log("The larger of "+num1+" "+"and "+num2+" "+"is"+" "+num1+"." );
 
//   }
// else
//   {
//         console.log("The larger of "+num1+" "+"and "+num2+" "+"is"+" "+num2+"." );

//   }

var num3 = 17.5
var num4 = 42
function evenOdd(x){
  if(x % 2 == 0)
    {
      return x+" "+"is even";
    }
  else
    {
      return x+" "+"is odd";
    }
}
console.log(evenOdd(num3));
console.log(evenOdd(num4));


var var1 = 50;
var var2 = "42F";
function numonot(x){
  if (isNaN(x))
  {
    return x+" "+"is not a number";
  }
  else{
    return x+" "+"is a valid number";
  }
  }
  console.log(numonot(var1));
  console.log(numonot(var2));