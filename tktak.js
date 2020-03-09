const X_CLASS ='x'
const O_CLASS ='o'
var N='1';
const winning_combintion=[
[0,1,2],
[0,3,6],
[0,4,8],
[2,4,6],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8]
]
const winningmessegetextelement = document.getElementById('data-winning-messege-text')
const winningmessegeelement = document.getElementById('winningmessege')
const cellElements = document.querySelectorAll('[data-cell]')
const box = document.getElementById('box')
const restart = document.getElementById('restartbutton')
let oturn

start()
restart.addEventListener('click', start )
function start() {
winningmessegeelement.classList.remove('show')




cellElements.forEach(cell=>{
      cell.classList.remove(O_CLASS)
     cell.classList.remove(X_CLASS)
     cell.removeEventListener('click', handeclick)
      cell.addEventListener('click',handeclick,{once:true})
})
}
function handeclick(e){

    const cell = e.target
    const currentClass = oturn ? O_CLASS : X_CLASS
    placeMark(cell,currentClass)

    if(checkwin(currentClass)){
       endgame(false)
    }
    else if(isdraw()){
        endgame(true)
     }
         else{ 
        swapturns()
         setboxHoverClass()
    
         }
}
    
function endgame(draw){
    if(draw){
        
        winningmessegetextelement.innerText ="Draw!"
        
    }
        
    else{
        if(oturn){
        winningmessegetextelement.innerText =" O's Wins!"
        }
        else{winningmessegetextelement.innerText =" X's Wins!"}
        
        
    }

    winningmessegeelement.classList.add('show')
}
 function isdraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(O_CLASS)
    })
 }
function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
    
}
 function swapturns(){
     oturn = !oturn
 }

 function  setboxHoverClass(){
     box.classList.remove(X_CLASS)
     box.classList.remove(O_CLASS)

     if(oturn){
         box.classList.add(O_CLASS)
     }
     else{
         box.classList.add(X_CLASS)
     }
 }

  function checkwin(currentClass){
     return winning_combintion.some(combination =>{
          return combination.every(index =>
            {
                return cellElements[index].classList.contains(currentClass)
            })
      })
  }



