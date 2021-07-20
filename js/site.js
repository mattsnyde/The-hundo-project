const startValue = document.getElementById('startValue')
const endValue = document.getElementById('endValue')
const button = document.getElementById('btn-submit')
const tableEl = document.getElementById('results')

function execute(){
    button.addEventListener('click', function(){
        tableEl.innerHTML = ''; //Reset the table everytime user clicks button
        let arrayOfNums = findNums(startValue, endValue) //assign numbers to an array from the function that finds the numbers between the beginning and end values
         for(let i = 0; i < arrayOfNums.length; i++){ //Loop through all the numbers we have inside of the array, if the numbers are divisible 2 then we make them bold otherwise they are just normal numbers.
            if(arrayOfNums[i] % 2 === 0){
                tableEl.innerHTML += 
                `<tr><td><strong>${arrayOfNums[i]}</strong></tr></td>`
            }else{
                tableEl.innerHTML += 
                `<tr><td>${arrayOfNums[i]}</tr></td>`
             }
         }
    })    
}
execute();


//The function findNums, has 2 arguements, the beginningValue and endValue, the function function finds all numbers between those two numbers and pushes to an array and then returns the array.
function findNums(beginningValue, endingValue){
    let startValue = parseInt(beginningValue.value)
    let endValue = parseInt(endingValue.value)
    let nums=  [];
    for(let i = startValue; i <= endValue; i++){
        nums.push(i);
    }
    return nums
}


 