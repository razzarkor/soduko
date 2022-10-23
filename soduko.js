//body background
document.body.style.backgroundImage = "url('SodokuBG2.png')"; //putting background to page
//navbar css 
let navbar = document.getElementById('navbar');
navbar.style.display ='flex';
navbar.style.maxHeight = '32px';
navbar.style.flexDirection = 'row';
navbar.style.flexWrap = 'nowrap';

//navbar title css 
let title = document.getElementById('title');
title.style.maxWidth = '114px';

//navbar home button css 
let home = document.getElementById('home');
home.style.maxWidth = '45px';

//navbar tutorial button css 
let tutorial = document.getElementById('Tutorial');
tutorial.style.maxWidth = '54px';

//navbar difficulty
let difficulty = document.getElementById('difficulty');
difficulty.style.maxWidth = '130px';
let select = document.getElementById('myselect'); 
select.addEventListener('change',buildSoduko); //onchange event for dropdown to select difficulty

//creating 4 complete soduko boards
let soduko1 = [
      [4,3,5,2,6,9,7,8,1],
      [6,8,2,5,7,1,4,9,3],
      [1,9,7,8,3,4,5,6,2],
      [8,2,6,1,9,5,3,4,7],
      [3,7,4,6,8,2,9,1,5],
      [9,5,1,7,4,3,6,2,8],
      [5,1,9,3,2,6,8,7,4],
      [2,4,8,9,5,7,1,3,6],
      [7,6,3,4,1,8,2,5,9]
        ];
   
let soduko2 = [
      [5,8,1,6,7,2,4,3,9],
      [7,9,2,8,4,3,6,5,1],
      [3,6,4,5,9,1,7,8,2],
      [4,3,8,9,5,7,2,1,6],
      [2,5,6,1,8,4,9,7,3],
      [1,7,9,3,2,6,8,4,5],
      [8,4,5,2,1,9,3,6,7],
      [9,1,3,7,6,8,5,2,4],
      [6,2,7,4,3,5,1,9,8]
       ];

let soduko3 = [
      [1,2,3,6,7,8,9,4,5],
      [5,8,4,2,3,9,7,6,1],
      [9,6,7,1,4,5,3,2,8],
      [3,7,2,4,6,1,5,8,9],
      [6,9,1,5,8,3,2,7,4],
      [4,5,8,7,9,2,6,1,3],
      [8,3,6,9,2,4,1,5,7],
      [2,1,9,8,5,7,4,3,6],
      [7,4,5,3,1,6,8,9,2]
       ];

let soduko4 = [
      [1,2,6,4,3,7,9,5,8],
      [8,9,5,6,2,1,4,7,3],
      [3,7,4,9,8,5,1,2,6],
      [4,5,7,1,9,3,8,6,2],
      [9,8,3,2,4,6,5,1,7],
      [6,1,2,5,7,8,3,9,4],
      [2,6,9,3,1,4,7,8,5],
      [5,4,8,7,6,9,2,3,1],
      [7,3,1,8,5,2,6,4,9]
       ];

let sodukoarr = [soduko1,soduko2,soduko3,soduko4];


//get value from last page button
var level = localStorage.getItem("level");
buildSoduko();//building the soduko 

function buildSoduko(){
let sodukoarrcopy = JSON.parse(JSON.stringify(sodukoarr)); //deep copy
//get value from dropdown
let myselect = document.getElementById('myselect').value;
let randsoduko;
let x=1; 

while(x<82){
    document.getElementById(`${x}`).value = '';
    document.getElementById(`${x}`).disabled = false;
   x++;
}
x = 1;

if(myselect == ''){
    randsoduko = sodukoarrcopy[Math.floor(Math.random()*4)];//pick a random soduko board from soduko array
    for(g=0;g<level;g++){
        let randrow = Math.floor(Math.random()*9);
        let randcol = Math.floor(Math.random()*9);
        if(randsoduko[randrow][randcol] == ''){
            let randrow = Math.floor(Math.random()*9);
            let randcol = Math.floor(Math.random()*9);
            randsoduko[randrow][randcol] = ''; 
            }
            else{
            randsoduko[randrow][randcol] = '';
        }
        }
}
else{
    let i = parseInt(myselect);
    level = i;
    randsoduko = sodukoarrcopy[Math.floor(Math.random()*4)];//pick a random soduko board from soduko array
    for(g=0;g<i;g++){
        let randrow = Math.floor(Math.random()*9);
        let randcol = Math.floor(Math.random()*9);
        if(randsoduko[randrow][randcol] == ''){
            let randrow = Math.floor(Math.random()*9);
            let randcol = Math.floor(Math.random()*9);
            randsoduko[randrow][randcol] = ''; 
            }
            else{
            randsoduko[randrow][randcol] = '';
        }
        }
}
    
 
 while(x<82){ //while loop runs on all cells and puts the numbers in board in html
    for(i=0;i<randsoduko.length;i++){
    for(j=0;j<randsoduko[i].length;j++){
        document.getElementById(`${x}`).value = randsoduko[i][j];
        if(randsoduko[i][j] != ''){
            document.getElementById(`${x}`).disabled = true;
        }
        x++;
    }
  }
 }
}




let solveButton = document.getElementById('solve');
solveButton.addEventListener("click", solve);
//solve button
function solve(){
    let solvearr = [];
    let temparr = [];
    let x = 1;

    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            let cell = parseInt(document.getElementById(`${x}`).value)
            temparr.push(cell);
            x++;
        }
        solvearr.push(temparr);
        temparr = [];
    }
    
    if(JSON.stringify(solvearr) == JSON.stringify(soduko1) || JSON.stringify(solvearr) == JSON.stringify(soduko2) || JSON.stringify(solvearr) == JSON.stringify(soduko3) || JSON.stringify(solvearr) == JSON.stringify(soduko4)){
        location.href = "congratulation.html";  
    }
    else{
    alert('You have A Mistake Try Again');
  }
 }

//Clear button
let clearButton = document.getElementById('clear');
clearButton.addEventListener("click", clear);
function clear() {
    let x=1; 
    while(x<82){ 
    if(document.getElementById(`${x}`).disabled == false){
         document.getElementById(`${x}`).value = '';
   }
   x++;
 }
}







// let soduko1 = {
//     board: [
//         [4,3,5,2,6,9,7,8,1],
//         [6,8,2,5,7,1,4,9,3],
//         [1,9,7,8,3,4,5,6,2],
//         [8,2,6,1,9,5,3,4,7],
//         [3,7,4,6,8,2,9,1,5],
//         [9,5,1,7,4,3,6,2,8],
//         [5,1,9,3,2,6,8,7,4],
//         [2,4,8,9,5,7,1,3,6],
//         [7,6,3,4,1,8,2,5,9]
//           ]
// }
// let soduko2 = {
//     board: [
//         [5,8,1,6,7,2,4,3,9],
//         [7,9,2,8,4,3,6,5,1],
//         [3,6,4,5,9,1,7,8,2],
//         [4,3,8,9,5,7,2,1,6],
//         [2,5,6,1,8,4,9,7,3],
//         [1,7,9,3,2,6,8,4,5],
//         [8,4,5,2,1,9,3,6,7],
//         [9,1,3,7,6,8,5,2,4],
//         [6,2,7,4,3,5,1,9,8]
//          ]
// }
// let soduko3 = {
//     board: [
//         [1,2,3,6,7,8,9,4,5],
//         [5,8,4,2,3,9,7,6,1],
//         [9,6,7,1,4,5,3,2,8],
//         [3,7,2,4,6,1,5,8,9],
//         [6,9,1,5,8,3,2,7,4],
//         [4,5,8,7,9,2,6,1,3],
//         [8,3,6,9,2,4,1,5,7],
//         [2,1,9,8,5,7,4,3,6],
//         [7,4,5,3,1,6,8,9,2]
//          ]
// }
// let soduko4 = {
//     board: [
//         [1,2,6,4,3,7,9,5,8],
//         [8,9,5,6,2,1,4,7,3],
//         [3,7,4,9,8,5,1,2,6],
//         [4,5,7,1,9,3,8,6,2],
//         [9,8,3,2,4,6,5,1,7],
//         [6,1,2,5,7,8,3,9,4],
//         [2,6,9,3,1,4,7,8,5],
//         [5,4,8,7,6,9,2,3,1],
//         [7,3,1,8,5,2,6,4,9]
//          ]
// }
// let sodukoarr = [soduko1,soduko2,soduko3,soduko4]
// let solvedsoduko = [Object.freeze([soduko1),Object.freeze(soduko2),Object.freeze(soduko3),Object.freeze(soduko4)];




