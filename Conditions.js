function checkEvenOdd(num){
    if(num%2==0){
        return "even";
            }
            else {
                return "odd";
            }
        }
        console.log(checkEvenOdd(25));

// Maximum number
function maximum(x , y){
    if(x>y){
        return x;
    }
    else{
        return y;
    }
}
console.log(maximum(99, 48));

//factorial
function factorial(n){
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(20));

//reverse string
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("ayushi"));

//sum of array
function arraySum(array){
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum;
}
console.log(arraySum([29,14,87,15]));

//largest number in array
function largestNumber(array){
    let maximum = array[0];
    for(let num of array){
        if(num>maximum){
            maximum = num;
        }
    }
    return maximum;
}
console.log(largestNumber([109,34,86,201,45]));