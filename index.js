const menuToggle = document.getElementById('links');
const openToggle = document.getElementsByClassName('nav-container')[0].children[3];
const closeToggle = document.getElementsByClassName('nav-container')[0].children[2];


function setIcons(){
    if(openToggle.style.display='block'){
        closeToggle.style.display='none'
    }
}
function hideOpenIcon(){
    openToggle.addEventListener('click', function(){
        openToggle.style.display='none'
        closeToggle.style.display='block'
    })
}
function showOpenIcon(){
closeToggle.addEventListener('click', function(){
    closeToggle.style.display='none'
    openToggle.style.display='block'
})
}

setIcons()
hideOpenIcon()
showOpenIcon()

function openMenu(){
    openToggle.addEventListener('click', function(){
        menuToggle.style.right="0px";
        menuToggle.style.opacity="1";
    });
};

function closeMenu(){
    closeToggle.addEventListener('click', function(){
        menuToggle.style.right="-300px";
        menuToggle.style.opacity="0";
    });
};
openMenu();
closeMenu();




// prevent past days in form date picker
var today = new Date().toISOString().split('T')[0];
var twoWeeks = new Date(Date.now() + 12096e5).toISOString().split('T')[0];
document.getElementsByName("service-date")[0].setAttribute('min', today);
document.getElementsByName("service-date")[0].setAttribute('max', twoWeeks);
