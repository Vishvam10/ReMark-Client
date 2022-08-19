import { STYLES } from './styles';
import { renderLoginModal } from "./render";

import { isLoggedIn, logout } from "./auth";
import { stopAnnotationProcess } from './stopAnnotationProcess';
import { startAnnotationProcess } from './startAnnotationProcess';

window.addEventListener("load", (e) => {
    e.preventDefault();
    remark_init();
})

export function remark_init() {
    
    registerStyles();
    registerScripts();
    startAnnotationProcess();
    const body = document.getElementsByTagName('body')[0];
    
    let remark_login_button_text = "Login";
    let remark_disabled_class = "remark_disabled_button";
    if(isLoggedIn()) {
        remark_login_button_text = "Logout";
        remark_disabled_class = "";
    }

    const remark_markup = `
        <div class="remark_init_container">
            <span class="remark_init_text">REMARK</span>
            <button type="button" class="remark_standard_button remark_init_button remark_login_button" id="remark_login_button">${remark_login_button_text}</button>
            <button type="button" class="remark_standard_button remark_init_button ${remark_disabled_class}" id="remark_start">Start Annotation</button>
        </div>
    `
    body.insertAdjacentHTML("afterbegin", remark_markup);
    
    document.getElementById("remark_login_button").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.target.innerText == "Login") {
            document.querySelector(".remark_init_container").classList.add("remark_init_container_resize");
            const login_modal_check = document.getElementById("remark_login_modal");
            if(login_modal_check) {
                return;
            }
            renderLoginModal();
        } else if(e.target.innerText == "Logout") {
            e.target.innerText = "Login";
            logout();
            document.getElementById("remark_start").classList.add   ("remark_disabled_button");
            document.querySelector(".remark_init_container").classList.remove("remark_init_container_resize");
            return;
        } else {
            return;
        }
    });
       
    document.getElementById("remark_start").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.target.innerText == "Start Annotation") {
            document.querySelector(".remark_init_container").classList.add("remark_init_container_resize");
            e.target.innerText = "Stop Annotation";
            startAnnotationProcess();
        }
        else if(e.target.innerText == "Stop Annotation") {
            e.target.innerText = "Start Annotation";
            stopAnnotationProcess();
            document.querySelector(".remark_init_container").classList.remove("remark_init_container_resize");
            return;
        } else {
            return;
        }
    })
       
}

export function remark_destroy() {
    stopAnnotationProcess();
    return;
}

export function registerStyles() {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = "remark_global_styles";
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = STYLES;
    } else {
        styleElement.appendChild(document.createTextNode(STYLES));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    return true;
}

export function registerScripts() {
    const icons = document.createElement("script");
    icons.id = "remark_global_script_ionicons";
    icons.setAttribute("src", "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js");
    document.head.appendChild(icons);
    return true;
}
