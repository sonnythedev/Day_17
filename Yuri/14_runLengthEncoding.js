/*
    Write a function that accepts a string as input, then returns how often each letter is repeated in a single run, taking case into account.

    Tip: This approach is used in a simple lossless compression technique called run-length encoding.

    solution("aabbcc")      == "a2b2c2";
    solution("aaabaaabaaa") == "a3b1a3b1a3";
    solution("aaAAaa")      == "a2A2a2";
*/

function solution1(str) {
    //let obj={};
    let currIndex=0;
    let output='';
    let count=1;
    while(currIndex<str.length){
        if(str[currIndex]==str[currIndex+1]){
            //next char is same. so just increment the count
            count++;
        }
        else{
            //next char is different so append the count
            output +=str[currIndex]+count;
            count=1;
        }
        currIndex++;
    }
    return output;
}

function solution2(str) {
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests

// test solution1()

//console.log(solution1("aaabaaabaaa"));

console.assert(solution1("aabbcc")      == "a2b2c2");
console.assert(solution1("aaabaaabaaa") == "a3b1a3b1a3");
console.assert(solution1("aaAAaa")      == "a2A2a2");

// test solution2()


/*
************************* PERFORMANCE RESULTS *************************

*/