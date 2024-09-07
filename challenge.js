// Good Luck! You got this 💪🏾
// Write your code here.

function calculator (num1, num2, Parameter){
    if (Parameter === "+"){
         console.log(num1 + num2);
    }
    else if (Parameter === "-"){
        console.log(num1 - num2);
    }
    else if (Parameter === "*"){
        console.log(num1 * num2);
    }
    else if (Parameter === "/"){
        console.log(num1 / num2);
    }
    else {
        console.log("Invalid");
    }
}
calculator(5, 3, "+"); 
calculator(5, 3, "-"); 
calculator(5, 3, "*"); 
calculator(5, 3, "/");