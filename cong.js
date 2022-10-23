
//level select div css
let leveldiv = document.getElementById('cong');
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

// //header css 
// document.getElementById('header');
// header.style.position = 'relative';
// header.style.bottom = '30px';

// //header2 css
// document.getElementById('header2');
// header2.style.position = 'relative';
// header2.style.bottom = '30px';


//button css 
document.getElementById('another');
another.setAttribute('class', 'btn btn-primary m-1')
another.style.width = '150px';
another.style.backgroundColor = '#e93838';
another.style.borderColor = '#e93838';


function goToSudokuPage(difficulty) {
    localStorage.setItem('level',`${difficulty}`);
    location.href = "level.html";
}

