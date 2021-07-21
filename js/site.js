//Get values from page -- Acts as controller function
function getValues(){
    let startValue = document.getElementById('startValue').value
    let endValue = document.getElementById('endValue').value

    //Attempt to parse into Integers
    startValue = parseInt(startValue)
    endValue = parseInt(endValue)


    //Need to be sure startValue and endValue are both integers, if anything else is entered then we will throw an error. This is a little unnecessary however since our input fields are both types of number which does not permit letters or non-numerical characters to be entered into the input field.
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){ 
        //Call generateNumbers function
        let numbers = generateNumbers(startValue, endValue)

        //Call displayNumber function
        displayNumbers(numbers)
    }else{
        alert("Integers only")
    }
}

//generate numbers from startValue to endValue -- logic function
function generateNumbers(startVal, endVal){
    let numbers = [];
    for(let i = startVal; i <= endVal; i++){
        numbers.push(i)
    }
    return numbers;
}

//Viewer or displayer function
function displayNumbers(arrayOfNums){
    const tableEl = document.getElementById('results')
    tableEl.innerHTML = '';
    for(let i = 0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] % 2 === 0){
            tableEl.innerHTML+=
            `<tr><td><strong>${arrayOfNums[i]}</strong></td></tr>`
        }else{
            tableEl.innerHTML += 
            `<tr><td>${arrayOfNums[i]}</td></tr>`
        }
    }
}


 