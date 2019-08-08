import page from "./page";
import menu from "./menu";
import contact from "./contact";

page();

document.addEventListener("click", function(e){
    if(e.target.id == "menu-btn"){
        menu();
    } else if(e.target.id =="contact-btn"){
        contact();
    }
});