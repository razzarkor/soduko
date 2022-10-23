//*** login page ***
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
// let difficulty = document.getElementById('difficulty');
// difficulty.style.maxWidth = '130px'

//login div css
let div = document.getElementById('login inputs');
div.style.width = '400px';
div.style.height = '400px';
div.style.display ='flex';
div.style.margin = '35%';
div.style.marginTop = '10%';
div.style.padding = '20px';
div.style.flexDirection = 'column';
div.style.flexWrap = 'nowrap';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';

//login title css
// header.style
let header = document.getElementById('loginTitle');
header.style.position = 'relative';
header.style.bottom = '40px';
//inputs css
let username = document.getElementById('username');
username.style.width = '250px';
let password = document.getElementById('password');
password.style.width = '250px';
//submit button css
document.getElementById('submit');
submit.setAttribute('class', 'btn btn-primary')
submit.style.width = '150px';

//check login info
function checkLogin(){
    
    let username1 = document.getElementById('username').value;
    localStorage.setItem('username',`${username1}`) //storing the username
    let password1 = document.getElementById('password').value;

    if(username1 != 'abcd' && password1 != '1234'){
        let usererror = 'wrong username try again.';
        document.getElementById('usererror').innerHTML = usererror;
        let passerror = 'wrong password try again.';
        document.getElementById('passworderror').innerHTML = passerror;
    }
    else if(username1 == 'abcd' && password1 != '1234'){
        document.getElementById('usererror').innerHTML = '';
        let passerror = 'wrong password try again.';
        document.getElementById('passworderror').innerHTML = passerror;
    }
    else if(username1 != 'abcd' && password1 == '1234'){
        document.getElementById('passworderror').innerHTML = '';
        let usererror = 'wrong username try again.';
        document.getElementById('usererror').innerHTML = usererror;
    }
    else{
        location.href = "level.html";
    }
} 



