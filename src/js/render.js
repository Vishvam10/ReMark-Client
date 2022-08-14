import { remarkGlobalData } from "./global"
import { removeHTMLElement, getNodeXpath, getElementAfterCheck } from "./utils"

import { SIDEBAR, LOGIN_MARKUP, SIGNUP_MARKUP, CREATE_ANNOTATION_MODAL, EDIT_ANNOTATION_MODAL, DELETE_ANNOTATION_MODAL, COMMENTS_MARKUP } from "./components"

import * as handlers from "./handlers"

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

    body.insertAdjacentHTML("afterbegin", newAnnotationModal);
    
    const modalCloseBtn = document.getElementById("remark_standard_modal_close_btn");
    const submitBtn = document.getElementById("remark_create_annotation_button");
    
    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_create_annotation_modal");
            removeHTMLElement(ele);
        })
    }

    if(submitBtn) {
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const createAnnotationForm = document.getElementById("createAnnotationForm");
            handlers.handleCreateAnnotation(createAnnotationForm)
        })
    }

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

    const modalCloseBtn = document.getElementById("remark_standard_modal_close_btn");
    
    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_edit_annotation_modal");
            removeHTMLElement(ele);
        })
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

    const modalCloseBtn = document.getElementById("remark_standard_modal_close_btn");
    
    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_delete_annotation_modal");
            removeHTMLElement(ele);
        })
    }

    const submitBtn = document.getElementById("remark_delete_annotation_button");

    if(submitBtn) {
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const deleteAnnotationForm = document.getElementById("deleteAnnotationForm");
            handlers.handleDeleteAnnotation(deleteAnnotationForm);
        })
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
    const annotations = remarkGlobalData["annotations"];
    remarkGlobalData["currentXPath"] = xpath;
    let curAnnotation;
    
    annotations.forEach((annotation) => {
        if (annotation["node_xpath"] == xpath) {
            curAnnotation = annotation;
        }
    });
    
    const sideBar = SIDEBAR(curAnnotation);
    const body = document.getElementsByTagName('body')[0];
    const check = document.getElementById("remark_annotations_sidebar");    
    if (check) {
        removeHTMLElement(check);
    }

    body.insertAdjacentHTML("afterbegin", sideBar);
    
    const modalCloseBtn = document.getElementById("remark_standard_modal_close_btn");
    const createBtn = document.getElementById("remark_create_comment");
    const resolveBtn = document.getElementById("remark_annotation_resolve_button");
    
    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_annotations_sidebar");
            removeHTMLElement(ele);
        })
    }
    
    if(createBtn) {
        createBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            handlers.handleCreateComment();
        })
    }

    if(resolveBtn) {
        resolveBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            handlers.handleResolveAnnotation(curAnnotation["annotation_id"]);
        })
    }

    const comments = curAnnotation["comments"];
    comments.forEach((comment) => {
        renderComment(comment)
    });
}

export function renderComment(comment) {
    
    const markup = COMMENTS_MARKUP(comment);
    const sidebarBody = document.getElementById("remark_comments_body")
    if(sidebarBody) {
        sidebarBody.insertAdjacentHTML("beforeend", markup);
    }
    const comment_id = comment["comment_id"];

    const deleteBtn = document.getElementById(`${comment_id}delete`);
    const editBtn = document.getElementById(`${comment_id}edit`);
    const upvoteBtn = document.getElementById(`${comment_id}upvote`);
    const downvoteBtn = document.getElementById(`${comment_id}downvote`);

    if(deleteBtn) {
        deleteBtn.addEventListener("click", (e) => {
            console.log("CLICKED");
            e.preventDefault();
            e.stopPropagation();
            handlers.handleDeleteComment(comment_id);
        })
    } 
    if(editBtn) {
        editBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            handlers.handleEditComment(comment_id);
        })
    }
    if(upvoteBtn) {
        upvoteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            handlers.handleCommentUpvote(comment_id, "upvote");
        })
    }
    if(downvoteBtn) {
        downvoteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            handlers.handleCommentUpvote(comment_id, "downvote");
        })
    }
}

export function renderLoginModal() {
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML("afterbegin", LOGIN_MARKUP);

    const modalCloseBtn = document.getElementById("remark_standard_modal_close_btn")
    const submitBtn = document.getElementById("remark_login_button");
    const switchBtn = document.getElementById("loginSignupSwitch");

    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_login_modal");
            removeHTMLElement(ele)
        })
    }
    if(submitBtn) {
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const loginForm = document.getElementById("loginForm");
            handlers.handleLoginUser(loginForm)
        })
    }
    if(switchBtn) {
        switchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_login_modal")
            handlers.handleLoginSignupSwitch(ele);
        })
    }
}

export function renderSignupModal() {
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML("afterbegin", SIGNUP_MARKUP);
    
    const modalCloseBtn = document.getElementById("remark_standard_modal_close_btn")
    const submitBtn = document.getElementById("remark_signup_button");
    const switchBtn = document.getElementById("loginSignupSwitch");

    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_signup_modal");
            removeHTMLElement(ele)
        })
    }
    if(submitBtn) {
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const signupForm = document.getElementById("signupForm");
            handlers.handleSignupUser(signupForm)
        })
    }
    if(switchBtn) {
        switchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const ele = document.getElementById("remark_signup_modal");
            handlers.handleLoginSignupSwitch(ele);
        })
    }
}