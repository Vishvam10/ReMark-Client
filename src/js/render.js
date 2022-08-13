import { removeHTMLElement, getNodeXpath, getElementAfterCheck } from "./utils"
import { SIDEBAR, LOGIN_MARKUP, SIGNUP_MARKUP, CREATE_ANNOTATION_MODAL, EDIT_ANNOTATION_MODAL } from "./components"

import { showAlert } from "./alert"

/*
    
    1. Check with XPath
    2. If that fails, check with ID
    3. If that fails, check with textContent
    4. If that fails, check with className + Xpath (extract the 
       child node number from XPath) 
    
*/

export function renderNewAnnotationModal(html_node, html_tag, html_class, html_id, html_text_content) {
    const create_modal_check = document.getElementById("remark_create_annotation_modal");
    if (create_modal_check) {
        return;
    }
    const body = document.getElementsByTagName('body')[0];

    let node_xpath = getNodeXpath(html_node);
    node_xpath = `//${node_xpath.toLowerCase()}`

    const newAnnotationModal = CREATE_ANNOTATION_MODAL(node_xpath, html_tag, html_class, html_id, html_text_content)

    body.insertAdjacentHTML("afterbegin", newAnnotationModal)

}

export function renderEditAnnotationModal(html_node, html_tag, html_id, html_text_content) {
    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (edit_modal_check) {
        console.log("Edit annotation modal already present.");
        return;
    }

    const body = document.getElementsByTagName('body')[0];
    let node_xpath = getNodeXpath(html_node);
    node_xpath = `//${node_xpath.toLowerCase()}`

    const ele = getElementAfterCheck(node_xpath, html_id, html_tag, html_text_content)

    if (ele) {
        const editAnnotationModal = EDIT_ANNOTATION_MODAL(node_xpath);
        body.insertAdjacentHTML("afterbegin", editAnnotationModal);
    } else {
        showAlert("ERROR", "Xpath not matched. Please try again !");
        return;
    }
}

export function renderDeleteAnnotationModal(html_node, html_tag, html_id, html_text_content) {
    const delete_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (delete_modal_check) {
        return;
    }

    let node_xpath = getNodeXpath(html_node);
    node_xpath = `//${node_xpath.toLowerCase()}`

    const body = document.getElementsByTagName('body')[0];
    const ele = getElementAfterCheck(node_xpath, html_id, html_tag, html_text_content)

    if (ele) {
        const deleteAnnotationModal = DELETE_ANNOTATION_MODAL(node_xpath);
        body.insertAdjacentHTML("afterbegin", deleteAnnotationModal);
    } else {
        showAlert("ERROR", "Xpath not matched. Please try again !");
        return;
    }
}

export function renderExistingAnnotations() {

    const annotations = remarkGlobalData["annotations"];

    // Indicate the elements on which the annotations are present

    annotations.forEach((annotation) => {
        const ele = getElementAfterCheck(annotation["node_xpath"], annotation["html_id"], annotation["html_tag"], annotation["html_text_content"])

        if (ele) {
            ele.classList.add("highlight_element_strong");
            ele.dataset.xpath = annotation["node_xpath"];
        } else {
            console.log("RE-RENDER REQUIRED : ", ele);
        }
    });

    // 2. On show, trigger the sidebar (or modal)
    // THIS WILL BE DONE USING THE CONTEXT MENU
}

export function renderSideBar(xpath) {
    const sideBar = SIDEBAR(xpath);
    const body = document.getElementsByTagName('body')[0];
    const check = document.getElementById("remark_annotations_sidebar");
    if (check) {
        removeHTMLElement(check);
    }
    body.insertAdjacentHTML("afterbegin", sideBar);
}

export function renderLoginModal() {
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML("afterbegin", LOGIN_MARKUP);
}

export function renderSignupModal() {
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML("afterbegin", SIGNUP_MARKUP);
}