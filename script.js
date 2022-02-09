
// function changeColor(){
//     let button = document.querySelector('.btn')
//     button.style.color = 'red'
// }

// function changeColor(){

//     document.querySelector('.btn').style.color = '#cccccc'
   
// }
    

function changeColor(){

    let colorInput = document.querySelector('.color_input')
    let color = colorInput.value


    let text = document.querySelector('.text')
    text.style.color = color
   

}

function changeFontSize(){

    let text = document.querySelector('.changed_text')
    let input = document.querySelector('.text_input')

    let textSize = input.value
    
    text.style.fontSize = textSize + 'px'

}