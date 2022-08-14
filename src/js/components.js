import { isAdmin } from "./auth"
import { remarkGlobalData } from "./global"

export const LOGIN_MARKUP =
    `
    <div class="remark_standard_modal" id="remark_login_modal">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">Login</h3>
            <div class="remark_standard_modal_actions">
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
                </div>
            </div>
        </div>
        <div class="remark_standard_modal_body">
            <form id="loginForm" class="remark_form">
                <div class="remark_form_fields">
                    <label for="username" class="remark_form_label">Username</label>
                    <input type="text" name="username" class="remark_form_input" id="username">
                </div>
                <div class="remark_form_fields">
                    <label for="password" class="remark_form_label">Password </label>
                    <input type="password" name="password" class="remark_form_input" id="password">
                </div>
                <div class="remark_form_fields">
                    <label for="authority" class="remark_form_label">Authority</label>
                    <input type="authority" name="authority" class="remark_form_input" id="authority">
                </div>
                <div class="remark_form_fields">
                    <button type="button" class="remark_standard_button" id="remark_login_button">Login</button>
                </div>
                <div class="remark_form_fields">
                <p style="font-size: 1.4rem;">Don't have an account ? <span class="loginSignupSwitch" id="loginSignupSwitch">Sign up</span></p>
                </div>
            </form>
        </div>
    </div>
`

export const SIGNUP_MARKUP =
    `    
    <div class="remark_standard_modal" id="remark_signup_modal">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">Signup</h3>
            <div class="remark_standard_modal_actions">
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
                </div>
            </div>
        </div>
        <div class="remark_standard_modal_body">
            <form id="signupForm" class="remark_form">
                <div class="remark_form_fields">
                    <label for="username" class="remark_form_label">Username</label>
                    <input type="text" name="username" class="remark_form_input" id="username">
                </div>
                <div class="remark_form_fields">
                    <label for="password" class="remark_form_label">Password </label>
                    <input type="password" name="password" class="remark_form_input" id="password">
                </div>
                <div class="remark_form_fields">
                    <label for="email_id" class="remark_form_label">Email ID</label>
                    <input type="email" name="email_id" class="remark_form_input" id="email_id">
                </div>
                <div class="remark_form_fields">
                    <label for="bio" class="remark_form_label">Bio</label>
                    <input name="bio" class="remark_form_input" id="bio">
                </div>
                <div class="remark_form_fields">
                    <button type="button" class="remark_standard_button" id="remark_signup_button">Sign Up</button>
                </div>
                <div class="remark_form_fields">
                <p style="font-size: 1.4rem;">Already have an account ? <span class="loginSignupSwitch" id="loginSignupSwitch" >Login</span></p>
                </div>
            </form>
        </div>
    </div>

`

export const CONTEXT_MENU_MARKUP = (annotation_present) => {

    let markup = ""
    if (annotation_present) {
        markup =
            `
            <div class="remark_contextmenu_wrapper" id="remark_context_menu">
                <div class="remark_contextmenu_content">
                    <ul class="remark_contextmenu_menu_list">
                        <li class="remark_item" data-remark_contextmenu_option="open">
                            <ion-icon name="open-outline" class="uil uil remark_contextmenu_icon" data-remark_contextmenu_option="open"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="open">Open Annotation</span>
                        </li>
                        <li class="remark_item" data-remark_contextmenu_option="edit">
                            <ion-icon name="options-outline" class="uil uil remark_contextmenu_icon" data-remark_contextmenu_option="edit"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="edit">Edit Annotation</span>
                        </li>
                        <li class="remark_item" data-remark_contextmenu_option="delete">
                            <ion-icon name="trash-outline" class="uil uil remark_contextmenu_icon" data-remark_contextmenu_option="delete"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="delete">Delete Annotation</span>
                        </li>
                    </ul>
                </div>
            </div>
        `
    } else {
        markup =
            `
            <div class="remark_contextmenu_wrapper" id="remark_context_menu">
                <div class="remark_contextmenu_content">
                    <ul class="remark_contextmenu_menu_list">
                        <li class="remark_item">
                            <ion-icon name="add-outline" class="uil uil remark_contextmenu_icon"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="create">Create Annotation</span>
                        </li>
                        </li>
                    </ul>
                </div>
            </div>
        `

    }
    return markup;
}

export const CREATE_ANNOTATION_MODAL = (node_xpath, html_tag, html_class, html_id, html_text_content) => {
    const authority = localStorage.getItem("user_authority");
    if (authority != "admin") {
        return;
    }
    if (html_class == "") {
        html_class = null;
    }

    if (html_id == "") {
        html_id = null;
    }
    if (html_text_content == "") {
        html_text_content = null;
    }

    const markup =
        `
        <div class="remark_standard_modal" id="remark_create_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Create Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="createAnnotationForm" class="remark_form">
                    <div class="remark_form_fields">
                        <label for="annotation_name" class="remark_form_label">Annotation Name</label>
                        <input type="text" name="annotation_name" class="remark_form_input" id="annotation_name">
                    </div>
                    <div class="remark_form_fields">
                        <label for="tags" class="remark_form_label">Tags ( Comma Separated )</label>
                        <input type="tags" name="tags" class="remark_form_input" id="tags">
                    </div>
                    <div class="remark_form_fields hide">
                        <label for="node_xpath" class="remark_form_label">Node XPath</label>
                        <input type="node_xpath" name="node_xpath" class="remark_form_input" id="node_xpath" value='${node_xpath}' readonly>
                    </div>
                    <div class="remark_form_fields hide">
                        <label for="html_tag" class="remark_form_label">Selected Node</label>
                        <input type="text" name="html_tag" class="remark_form_input" id="html_tag" value="${html_tag.toLowerCase()}" readonly>
                    <div class="remark_form_fields hide">
                        <label for="html_class" class="remark_form_label">HTML Node Class</label>
                        <input type="html_class" name="html_class" class="remark_form_input" id="html_class" value="${html_class}" readonly>
                    </div>
                    <div class="remark_form_fields hide">
                        <label for="html_id" class="remark_form_label">HTML Node ID</label>
                        <input type="html_id" name="html_id" class="remark_form_input" id="html_id" value="${html_id}" readonly>
                    </div>
                    </div>
                        <div class="remark_form_fields hide">
                        <label for="html_text_content" class="remark_form_label">HTML Text Content </label>
                        <input type="html_text_content" name="html_text_content" class="remark_form_input" id="html_text_content" value="${html_text_content}" readonly>
                    </div>
                    <div class="remark_form_fields">
                        <button class="remark_standard_button" type="button" id="remark_create_annotation_button">Create</button>
                    </div>
                </form>
            </div>
        </div>
    `
    return markup;
}

export const EDIT_ANNOTATION_MODAL = (node_xpath) => {
    const authority = localStorage.getItem("user_authority");
    if (authority != "admin") {
        return;
    }

    const annotations = remarkGlobalData["annotations"];

    let curAnnotation;

    annotations.forEach((annotation) => {
        if (annotation["node_xpath"] == node_xpath) {
            curAnnotation = annotation;
        }
    });

    const markup =
        `
        <div class="remark_standard_modal" id="remark_edit_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Edit Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="editAnnotationForm" class="remark_form" data-annotation_id="${curAnnotation["annotation_id"]}">
                    <div class="remark_form_fields">
                        <label for="old_name" class="remark_form_label">Old Annotation Name</label>
                        <input type="text" name="old_name" class="remark_form_input" id="old_name" value="${curAnnotation["annotation_name"]}" readonly disabled>
                    </div>
                    <div class="remark_form_fields">
                        <label for="new_name" class="remark_form_label">New Annotation Name</label>
                        <input type="text" name="new_name" class="remark_form_input" id="new_name">
                    </div>
                    <div class="remark_form_fields">
                        <label for="old_tags" class="remark_form_label">Old Tags ( Comma Separated )</label>
                        <input type="text" name="old_tags" class="remark_form_input" id="old_tags" value="${curAnnotation["tags"]}" readonly disabled>
                    </div>
                    <div class="remark_form_fields">
                        <label for="new_tags" class="remark_form_label">New Tags ( Comma Separated )</label>
                        <input type="text" name="new_tags" class="remark_form_input" id="new_tags">
                    </div>
                    <div class="remark_form_fields">
                        <label for="annotation_id" class="remark_form_label</label>
                        <input type="text" name="annotation_id" class="remark_form_input" value=${curAnnotation["annotation_id"]} readonly>
                    </div>
                    <div class="remark_form_fields">
                        <button type="button"  class="remark_standard_button" id="remark_edit_annotation_button">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    `
    return markup;
}

export const DELETE_ANNOTATION_MODAL = (node_xpath) => {
    const authority = localStorage.getItem("user_authority");
    if (authority != "admin") {
        return;
    }

    const annotations = remarkGlobalData["annotations"];

    let curAnnotation;

    annotations.forEach((annotation) => {
        if (annotation["node_xpath"] == node_xpath) {
            curAnnotation = annotation;
        }
    });

    const markup =
        `
        <div class="remark_standard_modal" id="remark_delete_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Delete Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="deleteAnnotationForm" class="remark_form" data-annotation_id="${curAnnotation["annotation_id"]}" data-annotation_name="${curAnnotation["annotation_name"]}" data-xpath='${node_xpath}' data-html_tag=${curAnnotation["html_tag"]} data-html_text_content="${curAnnotation["html_text_content"]}">
                    <div class="remark_form_fields">
                        <p class="remark_delete_annotation_form_field"> 
                        Are you sure you want to delete this annotation ? 
                        <span class="remark_" style="font-weight: 700;">This can not be undone.</span> 
                        Enter the annotation name to confirm : <span class="remark_" style="font-weight: 700;">${curAnnotation["annotation_name"]}</span>
                        </p>
                        <input type="text" name="deleteConfirmation" class="remark_form_input" id="deleteConfirmation">
                    </div>
                    <div class="remark_form_fields">
                        <button type="button"  class="remark_standard_button remark_delete_button" id="remark_delete_annotation_button">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    `
    return markup;
}

export const SIDEBAR = (curAnnotation) => {
    const annotation_name = curAnnotation["annotation_name"];
    const annotation_id = curAnnotation["annotation_id"];
    const resolved = curAnnotation["resolved"];
    
    let resolve_button_markup = ""
    let resolve_button_text = ""
    let c = ""
    
    if(isAdmin()) {
        console.log("ADMIN ? ", isAdmin());
        if(resolved) {
            resolve_button_text = "UNRESOLVE";
            c = "remark_unresolve_button";
        } else {
            resolve_button_text = "RESOLVE";
        }
        resolve_button_markup = 
        `
            <button class="remark_standard_button remark_resolve_button ${c}" id="remark_annotation_resolve_button">
                ${resolve_button_text}
            </button>
        `
    }

   
    const markup =
        `
        <div class="remark_standard_sidebar" id="remark_annotations_sidebar">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">${annotation_name}</h3>
            <div class="remark_standard_modal_actions">
                ${resolve_button_markup}
                <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
            </div>
        </div>
        <div class="remark_standard_modal_body remark_standard_sidebar_body" id="remark_comments_body">
        </div>
        <div class="remark_annotation_user_input">
            <textarea placeholder="Text input" id="remark_comment_input" data-annotation_id=${annotation_id}></textarea>
            <span id="remark_create_comment" class="remark_">
                <ion-icon name="paper-plane-outline" class="remark_"></ion-icon>
            </span>
        </div>
    </div>
    `

    return markup;

}

export const COMMENTS_MARKUP = (comment, include_actions=false) => {
    let d;
    if (comment["updated_at"]) {
        d = comment["updated_at"];
    } else {
        d = comment["created_at"]
    }
    const comment_id = comment["comment_id"]
    let content_id = `${comment_id}message`;
    let upvotes_id = `${comment_id}upvotes`;
    let downvotes_id = `${comment_id}downvotes`;

    let actions_markup = ""

    if(include_actions) {
        actions_markup = 
        `
        <div class="remark_comment_actions">
            <ion-icon name="create-outline" id="${comment_id}edit"></ion-icon>
            <ion-icon name="trash-outline" id="${comment_id}delete"></ion-icon>
        </div>
        `
    }

    const markup =
        `
        <div class="remark_annotation" id="${comment["comment_id"]}">
            <div class="remark_annotation_header">
                <div class="remark_annotation_user_profile">
                    <div class="remark_annotation_user_details">
                        <h4 class="remark_annotation_user_username">
                            ${comment["created_by"]}
                        </h4>
                        <span class="remark_annotation_user_last_modified">
                            Modified On : ${d}
                        </span>
                    </div>
                </div>
                ${actions_markup}
            </div>
            <div class="remark_annotation_user_message">
                <p id="${content_id}">${comment["content"]}</p>
            </div>
            <div class="remark_annotation_vote">
                <span class="remark_annotation_vote_option">
                    <p id="${upvotes_id}">${comment["upvotes"]}</p>
                    
                    <ion-icon name="arrow-up-outline" id="${comment_id}upvote"></ion-icon>
                </span>
                <span class="remark_annotation_vote_option">
                    <p id="${downvotes_id}">${comment["downvotes"]}</p>
                    
                    <ion-icon name="arrow-down-outline" id="${comment_id}downvote"></ion-icon>
                </span>
            </div>
        </div>
    `

    return markup;
}