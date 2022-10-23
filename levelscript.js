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

//level select div css
let leveldiv = document.getElementById('leveloptions');
leveldiv.style.width = '400px';
leveldiv.style.height = '400px';
leveldiv.style.display ='flex';
leveldiv.style.margin = '35%';
leveldiv.style.marginTop = '10%';
leveldiv.style.padding = '20px';
leveldiv.style.flexDirection = 'column';
leveldiv.style.flexWrap = 'nowrap';
leveldiv.style.justifyContent = 'center';
leveldiv.style.alignItems = 'center';

//get username from previouse page
let levelusername = localStorage.getItem("username");
document.getElementById('header').innerHTML += levelusername;

//header css 
document.getElementById('header');
header.style.position = 'relative';
header.style.bottom = '30px';

//header2 css
document.getElementById('header2');
header2.style.position = 'relative';
header2.style.bottom = '30px';


//buttons css 
//easy
document.getElementById('Easy');
Easy.setAttribute('class', 'btn btn-primary m-1')
Easy.style.width = '150px';
Easy.style.backgroundColor = '#e93838';
Easy.style.borderColor = '#e93838';
//medium
document.getElementById('Medium');
Medium.setAttribute('class', 'btn btn-primary m-1')
Medium.style.width = '150px';
Medium.style.backgroundColor = '#e93838';
Medium.style.borderColor = '#e93838';
//hard
document.getElementById('Hard');
Hard.setAttribute('class', 'btn btn-primary m-1')
Hard.style.width = '150px';
Hard.style.backgroundColor = '#e93838';
Hard.style.borderColor = '#e93838';


function goToSudokuPage(difficulty) {
    localStorage.setItem('level',`${difficulty}`);
    location.href = "soduko.html";
}