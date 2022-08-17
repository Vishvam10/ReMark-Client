import { hideAlert } from "../alert";
import { mouseOutListener, mouseOverListener } from "./dom_listeners";

export function removeHTMLElement(ele) {
    ele.parentElement.removeChild(ele);
    return;
}

export function highlightElements() {
    document.addEventListener("mouseover", mouseOverListener, true);
    document.addEventListener("mouseout", mouseOutListener, true);
}

export function stopHighlightElements() {
    const elements = document.getElementsByClassName("highlight_element_strong");
    while (elements.length) {
        elements[0].classList.remove("highlight_element_strong");
    }
}

export function repositionStart() {
    const ele = document.querySelector(".remark_init_container");
    ele.classList.add("remark_init_container_resize");
}

export function removeAllExistingModals() {
    const create_modal_check = document.getElementById("remark_create_annotation_modal");

    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");

    const delete_modal_check = document.getElementById("remark_delete_annotation_modal");

    const sidebar_check = document.getElementById("remark_annotations_sidebar");

    const login_modal_check = document.getElementById("remark_login_modal");

    const signup_modal_check = document.getElementById("remark_signup_modal");

    const context_menu_check = document.getElementById("remark_context_menu");

    hideAlert();
    
    if (create_modal_check) {
        removeHTMLElement(create_modal_check);
    }
    if (edit_modal_check) {
        removeHTMLElement(edit_modal_check);
    }
    if (delete_modal_check) {
        removeHTMLElement(delete_modal_check);
    }
    if (sidebar_check) {
        removeHTMLElement(sidebar_check);
    }
    if (login_modal_check) {
        removeHTMLElement(login_modal_check);
    }
    if (signup_modal_check) {
        removeHTMLElement(signup_modal_check);
    }
    if (context_menu_check) {
        removeHTMLElement(context_menu_check);
    }
}