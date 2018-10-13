 //1. Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. So if we call your function with triangleStars(4), we should see:
   const repeat1 = function(str, q){
  	let index = 0;
  	let result = '';
  	while(index < q){
  		result = result + str;
  		index = index + 1;
  	}
  	return result;
  }
    const triangleStars = function (height) {
    const width = 2 * height -1 ;
    let i = 0;
    while (i < height) {
      console.log(repeat1("_", i) + repeat1("*", width - 2 * i) + repeat1("_", i))
      i = i +1
       }
    }
    
       triangleStars(4)


//2. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
 const multiToSingle = function(array1, array2){
  let newArray = []
 let index = 0
  
  while(index< array1.length){
    newArray[index]=array1[index]
    index = index + 1
    }
  index = 0
  while(index< array2.length){
  newArray[array1.length + index]=array2[index]
  index = index + 1
  }
  return newArray
  }
  console.log(multiToSingle ([2,3,4],[5,6,7,8]))




//3. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true. It returns the smallest number in the given array if the second argument is false.

   const findMixMax = function(inputArr, statment){
    if(statment === true){
    let index = 0
    let max = inputArr[index]
    while(index< inputArr.length){
      if(inputArr[index]> max){
        max = inputArr[index]
   }
      index= index + 1
}
     return max 
 }
    else{
    	 let index = 0
    let min = inputArr[index]
    while(index< inputArr.length){
      if(inputArr[index]< min){
        min = inputArr[index]
      }
      index= index + 1
    }
     return min 
    }
 }
  console.log(findMixMax([2,3,4,5,6],true))


//4. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

const forEach = function (inputArr,func){
  let i = 0;
  while(i < inputArr.length){
    func(inputArr[i]);
  	i = i + 1;
  }
}
  
forEach([3,5,6,7,8],function(a){
		console.log(a);
});
  
    




//5. Create a function 'sum' that takes an array of numbers and returns their sum.
 const sum = function (inputArr){
    let a = 0;
    let b = 0;
  while(a < inputArr.length){
    b = b + inputArr[a]
    a = a + 1
    }
  return b;
  }
  
 console.log(sum([2, 4, 5]));



//6. Write a function 'reverse' that reverses the given string.
const reverse = function (string){
    let newString = ''
    let index = string.length - 1
    
    while(index >= 0){
      
      newString = newString + string[index]
    index = index - 1 
    }
  
  return newString
  }
  console.log(reverse('ihukyaH'))


//7. Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen. Example: checkerboard(5)
    const repeat2 = function(str, q){
  	let index = 0;
  	let res = '';
  	while(index < q){
  		res = res + str;
  		index = index + 1;
  	}
  	return res;
  }


const checkerboard = function(height){
    let width = height;
    let i = 0;
    while(i < height){
    	if(i%2 === 0){
          console.log(repeat2('h *', width));
		}else{
		    console.log(repeat2('* h', width));
		}
    	i = i+1;
    }
  }
  checkerboard(5)




