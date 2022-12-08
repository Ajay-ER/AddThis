var count = 1;
    function navchange() {
        var property = document.getElementById("newname");
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
            document.getElementById("newname").style.transition = "0.5s";
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#BDF5E1"
            count = 0;
            var navlinks = document.getElementsByClassName("nav-link");
            console.log(navlinks);
            for(i=0;i<navlinks.length;i++){
                navlinks[i].style.color="red"
            }
            var btn=document.getElementsByClassName("navbar-toggler")[0];
            btn.style.color="white"
        }
    }