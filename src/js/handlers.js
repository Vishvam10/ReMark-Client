import { createAnnotation, editAnnotation, deleteAnnotation } from "./annotationAPI";
import { createComment, editComment, deleteComment, updateCommentVote } from "./commentAPI";
import { login, signup } from "./auth";

import { renderLoginModal, renderSignupModal } from "./render";
import { removeHTMLElement, repositionStart } from "./utils/dom_operations";
import { remarkGlobalData } from "./global";
import { showAlert } from "./alert";
import { startAnnotationProcess } from "./startAnnotation";

import * as validators from "./utils/validations";

//+ ANNOTATION HANDLERS

export function handleCreateAnnotation(formElement) {
    let form = new FormData(formElement);
    let data = {}
    const user_id = localStorage.getItem("user_id");
    const user_name = localStorage.getItem("user_name");
    for (var pair of form.entries()) {
        if (pair[0] == "annotation_name") {
            if(!validators.validateAnnotationName(pair[1].trim())) {
                showAlert("ERROR", "Only alphanumeric values and comma are allowed !", 2, 2);
                return;
            }
        }
        if(pair[0] == "tags") {
            if(!validators.validateTags(pair[1].trim())) {
                showAlert("ERROR", "Only comma separated alphanumeric values with no trailing or leading spaces are allowed !", 2, 2);
                return;
            }
        }
        data[pair[0]] = pair[1].trim();
    }
    data["website_uri"] = window.location.href;
    data["user_id"] = user_id;
    data["user_name"] = user_name;
    data["website_id"] = remarkGlobalData["website_id"];

    createAnnotation(data);
}

export function handleResolveAnnotation(annotation_id) {
    let data = {}
    data["annotation_id"] = annotation_id;
    data["action_type"] = "edit_resolved";
    data["new_resolved"] = "";
    editAnnotation(data);
}

export function handleEditAnnotation(formElement) {
    let form = new FormData(formElement);
    const annotation_id = formElement.dataset.annotation_id;
    let data = {}
    for (var pair of form.entries()) {
        if(pair[1] != "") {

            if (pair[0] == "new_name") {
                if(!validators.validateAnnotationName(pair[1].trim())) {
                    showAlert("ERROR", "Please enter a valid annotation name with alphanumeric, the symbols : _ !$%^&, space and emojis !", 4);
                    return;
                }
            }
            if(pair[0] == "new_tags") {
                if(!validators.validateTags(pair[1].trim())) {
                    showAlert("ERROR", "Please enter a valid using with comma separated alphanumeric values with no trailing or leading spaces are allowed !", 2);
                    return;
                }
            }
        }
        data[pair[0]] = pair[1].trim();
    }
    let actions = [];
    if(data["new_name" ] != "") {
        actions.push("edit_name")
    }
    if (data["new_tags"] != "") {
        actions.push("edit_tags");
    }
    actions = actions.join(",");
    data["action_type"] = actions;
    data["annotation_id"] = annotation_id;
    editAnnotation(data);
}

export function handleDeleteAnnotation(formElement) {
    let form = new FormData(formElement);
    let data = {}
    for (var pair of form.entries()) {
        data[pair[0]] = pair[1].trim();
    }
    if (formElement.dataset.annotation_name == data["deleteAnnotationConfirmation"]) {
        const annotation_id = formElement.dataset.annotation_id;
        const xpath = formElement.dataset.xpath;
        const html_id = formElement.dataset.html_id;
        const html_tag = formElement.dataset.html_tag;
        const html_text_content = formElement.dataset.html_text_content;
        if (annotation_id && xpath) {
            data["annotation_id"] = annotation_id;
            data["node_xpath"] = xpath;
            data["html_id"] = html_id;
            data["html_tag"] = html_tag;
            data["html_text_content"] = html_text_content;
            deleteAnnotation(data);
        }
    } else {
        showAlert("ERROR", "Annotation names don't match !")
        return;
    }
}

//+ COMMENT HANDLERS

export function handleCreateComment() {
    let data = {}
    const user_id = localStorage.getItem("user_id");
    const user_name = localStorage.getItem("user_name");
    const textarea = document.getElementById("remark_comment_input");
    const text = textarea.value;
    data["content"] = text;
    data["content_html"] = "";
    data["annotation_id"] = textarea.dataset.annotation_id;
    data["user_id"] = user_id;
    data["user_name"] = user_name;
    data["parent_node"] = null;
    textarea.value = "";
    createComment(data);
}

export function handleEditComment(comment_id) {

    const user_id = localStorage.getItem("user_id");
    const content_id = `${comment_id}message`;

    let contentEle = document.getElementById(`${content_id}`);
    contentEle.contentEditable = true;

    let data = {}
    data["user_id"] = user_id;
    data["comment_id"] = comment_id;

    showAlert("INTIMATION", "Please use Ctrl + Enter to submit the edited comment", 2)

    setTimeout(function() {
        contentEle.focus();
        contentEle.style.padding = "1rem";
    }, 0);

    contentEle.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "Enter") {
            contentEle.style.padding = "0rem";
            contentEle.blur();
            let new_content = contentEle.textContent.trim();
            data["new_content"] = new_content;
            data["new_content_html"] = "";
            editComment(data);
        }
    })

}

export function handleDeleteComment(formElement) {
    let form = new FormData(formElement);
    let data = {}
    const comment_id = formElement.dataset.comment_id;
    for (var pair of form.entries()) {
        data[pair[0]] = pair[1].trim();
    }
    if (comment_id == data["deleteCommentConfirmation"]) {
        deleteComment(comment_id);
    } else {
        showAlert("ERROR", "Strings don't match !")
        return;
    }
}

export function handleCommentUpvote(comment_id, action_type) {
    const user_id = localStorage.getItem("user_id");
    let data = {}
    data["user_id"] = user_id;
    data["comment_id"] = comment_id
    data["action_type"] = action_type
    updateCommentVote(data);
}

export function handleLoginSignupSwitch(component) {
    if (component.id == "remark_login_modal") {
        removeHTMLElement(component);
        renderSignupModal();
    } else {
        removeHTMLElement(component);
        renderLoginModal();
    }
}

//+ AUTH HANDLERS

export async function handleLoginUser(form) {
    const formData = new FormData(form);
    const bodyData = {}
    for (var pair of formData.entries()) {
        if(pair[0] == "username") {
            if(!validators.validateUsername(pair[1].trim())) {
                showAlert("ERROR", "Only comma separated alphanumeric values with no trailing or leading spaces are allowed !", 4);
                return false;
            }
        }
        if(pair[0] == "password") {
            if(!validators.validatePassword(pair[1].trim())) {
                showAlert("ERROR", "Please enter a password with minimum 8 letter, with at least a symbol, upper and lower case letters and a number !", 4);
                return false;
            }
        }
        if(pair[0] == "authority") {
            if(!validators.validateAuthority(pair[1].trim())) {
                showAlert("ERROR", "Please enter a valid authority !");
                return false;
            }
        }
        bodyData[pair[0]] = pair[1].trim();
    }
    login(bodyData);
}

export async function handleSignupUser(form) {
    const formData = new FormData(form);
    const bodyData = {}
    for (var pair of formData.entries()) {
        if(pair[0] == "username") {
            if(!validators.validateUsername(pair[1].trim())) {
                showAlert("ERROR", "Please enter a username with alphanumerics, underscores and no spaces !", 4);
                return false;
            }
        }
        if(pair[0] == "password") {
            if(!validators.validatePassword(pair[1].trim())) {
                showAlert("ERROR", "Please enter a password with minimum 8 letter, with at least a symbol, upper and lower case letters and a number !", 4);
                return false;
            }
        }
        if(pair[0] == "email_id") {
            if(!validators.validateEmail(pair[1].trim())) {
                showAlert("ERROR", "Please enter an email ID without dots or underscores !", 2);
                return false;
            }
        }
        if(pair[0] == "bio") {
            if(!validators.validateBio(pair[1].trim())) {
                showAlert("ERROR", "Please enter a valid bio with more than 0 and less than 80 characters !", 2);
                return false;
            }
        }
        bodyData[pair[0]] = pair[1].trim();
    }
    bodyData["authority"] = "user";
    signup(bodyData)
}

export function handlePostLoginSetup() {
    const loginBtn = document.getElementById("remark_login_button");
    loginBtn.innerText = "Logout";
    document.getElementById("remark_start").classList.remove("remark_disabled_button");
    
    console.log("remark.js | v.0.1");
    document.querySelector(".remark_init_container").classList.add("remark_init_container_resize");
    startAnnotationProcess();
    document.getElementById('remark_start').textContent = "Stop Annotation";
    repositionStart();
}

