
// Alter div-one to make sure JS linked properly

const firstDiv = document.querySelector('#div-one')
firstDiv.textContent = "I'm being altered by first.js"

//write function that changes font color of div-one to RED

const changeColor = function(){
    firstDiv.style.color = 'red'
}

// export Function? or try to import function into second.js



