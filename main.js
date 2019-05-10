let toggleStatus=false;


let toggleMenu = function(){

    
        let getNavSideBar = document.querySelector(".nav-sidebar");
        let getTitle = document . querySelector(".nav-sidebar span ");
        let getUList= document.querySelector(".nav-sidebar ul");
        let getLink = document. querySelectorAll(".nav-sidear a");
        console.log(getNavSideBar);
        if(toggleStatus === false){

            getNavSideBar.style.width = "150px";
            getTitle.style.opacity = ".5";
            getUList.style.visibility = "visible";

         
            toggleStatus = true;
    }

    else if(toggleStatus===true){
        getUList.style.visibility = "hidden";
        getTitle.style.opacity = "0";
        getNavSideBar.style.width = "50px";

        toggleStatus=false;
    }
    

    
}