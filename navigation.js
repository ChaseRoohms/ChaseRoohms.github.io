let navOpen = false;
let myMediaQuery = window.matchMedia('(max-width: 700px)');
let myDeviceQuery = window.matchMedia('(max-device-width: 749px)');

function toggleNav(x) {
    if(navOpen){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    else {
        if (myMediaQuery.matches || myDeviceQuery.matches) { // Little Screen
            document.getElementById("mySidenav").style.width = "100%";
        } else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    }

    x.classList.toggle("change");
    navOpen = !navOpen
}