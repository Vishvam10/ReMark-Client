//    ********************** MARKUPS *************************


const LOGIN_MARKUP =
    `
    <div class="remark_standard_modal" id="remark_login_modal">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">Login</h3>
            <div class="remark_standard_modal_actions">
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_login_modal)" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
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
                    <button name="submit" class="remark_standard_button" onclick="handleLoginUser(event, loginForm)">Login</button>
                </div>
                <div class="remark_form_fields">
                <p>Don't have an account ? <span class="loginSignupSwitch" onclick="handleLoginSignupSwitch(remark_login_modal)">Sign up</span></p>
                </div>
            </form>
        </div>
    </div>
`

const SIGNUP_MARKUP =
    `    
    <div class="remark_standard_modal" id="remark_signup_modal">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">Signup</h3>
            <div class="remark_standard_modal_actions">
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_signup_modal)" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
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
                    <button name="submit" class="remark_standard_button" onclick="handleSignupUser(event, signupForm)">Sign Up</button>
                </div>
                <div class="remark_form_fields">
                <p>Already have an account ? <span class="loginSignupSwitch" onclick="handleLoginSignupSwitch(remark_signup_modal)">Login</span></p>
                </div>
            </form>
        </div>
    </div>

`

const CONTEXT_MENU_MARKUP = (annotation_present) => {

    let markup = ""
    if (annotation_present) {
        markup =
            `
            <div class="remark_contextmenu_wrapper" id="remark_context_menu">
                <div class="remark_contextmenu_content">
                    <ul class="remark_contextmenu_menu_list">
                        <li class="remark_item">
                            <ion-icon name="open-outline" class="uil uil remark_contextmenu_icon"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="open">Open Annotation</span>
                        </li>
                        <li class="remark_item">
                            <ion-icon name="options-outline" class="uil uil remark_contextmenu_icon"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="edit">Edit Annotation</span>
                        </li>
                        <li class="remark_item">
                            <ion-icon name="trash-outline" class="uil uil remark_contextmenu_icon"></ion-icon>
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

const ERROR_MODAL = (type) => {
    let styles;
    if (type == "SUCCESS") {
        styles = "background-color: #22C55E;"
    } else if (type == "ERROR") {
        styles = "background-color: #EF4444;"
    }
    const markup =
        `
    <div class="error_modal" style=${styles}>
        <p style="line-height: inherit;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat.</p>
    </div>
    `
}

const CREATE_ANNOTATION_MODAL = (node, node_xpath) => {
    const authority = localStorage.getItem("user_authority");
    if (authority != "admin") {
        return;
    }

    const markup =
        `
        <div class="remark_standard_modal" id="remark_create_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Create Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_create_annotation_modal)"></ion-icon>
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
                    <div class="remark_form_fields">
                        <label for="node_xpath" class="remark_form_label">Node XPath</label>
                        <input type="node_xpath" name="node_xpath" class="remark_form_input" id="node_xpath" value=${node_xpath} readonly>
                    </div>
                    <div class="remark_form_fields">
                        <label for="tag" class="remark_form_label">Selected Node</label>
                        <input type="tag" name="tag" class="remark_form_input" id="tag" value="<${node.toLowerCase()}></${node.toLowerCase()}>" readonly disabled>
                    </div>
                    <div class="remark_form_fields">
                        <button class="remark_standard_button" onclick="handleCreateAnnotation(createAnnotationForm, event)">Create</button>
                    </div>
                </form>
            </div>
        </div>
    `
    return markup;
}

const EDIT_ANNOTATION_MODAL = (node_xpath) => {
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
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_edit_annotation_modal)"></ion-icon>
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
                        <button name="submit"  class="remark_standard_button" onclick="handleEditAnnotation(editAnnotationForm)">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    `
    return markup;
}

const DELETE_ANNOTATION_MODAL = (node_xpath) => {
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
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_delete_annotation_modal)"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="deleteAnnotationForm" class="remark_form" data-annotation_id="${curAnnotation["annotation_id"]}" data-annotation_name="${curAnnotation["annotation_name"]}" data-xpath="${node_xpath}">
                    <div class="remark_form_fields">
                        <p style="font-size: 1.4rem;"> Are you sure you want to delete this annotation ? <span class="remark_" style="font-weight: 700;">This can not be undone.</span> 
                        Enter the annotation name to confirm : <span class="remark_" style="font-weight: 700;">${curAnnotation["annotation_name"]}</span>
                        
                        <input type="text" name="deleteConfirmation" class="remark_form_input" id="deleteConfirmation">
                    </div>
                    <div class="remark_form_fields">
                        <button name="submit"  class="remark_standard_button remark_delete_button" onclick="handleDeleteAnnotation(deleteAnnotationForm, event)">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    `
    return markup;
}

const SIDEBAR = (xpath) => {

    const annotations = remarkGlobalData["annotations"];
    remarkGlobalData["currentXPath"] = xpath;

    let curAnnotation;

    annotations.forEach((annotation) => {
        if (annotation["node_xpath"] == xpath) {
            curAnnotation = annotation;
        }
    });


    const annotation_name = curAnnotation["annotation_name"];
    const annotation_id = curAnnotation["annotation_id"];
    const comments = curAnnotation["comments"];
    const resolved = curAnnotation["resolved"];

    let comment_markup = ""
    let resolve_button_markup = ""

    comments.forEach((comment) => {
        const m = COMMENTS_MARKUP(comment);
        comment_markup += m;
    });


    if (resolved) {
        resolve_button_markup =
            `
            <button class="remark_standard_button remark_resolve_button remark_unresolve_button" data-annotation_id="${annotation_id}" data-annotation_resolved="${resolved}" onclick="handleResolveAnnotation(this, event)">Unresolve</button>
        `
    } else {
        resolve_button_markup =
            `
            <button class="remark_standard_button remark_resolve_button" data-annotation_id="${annotation_id}" data-annotation_resolved="${resolved}" onclick="handleResolveAnnotation(this, event)">Resolve</button>
        `
    }

    const markup =
        `
        <div class="remark_standard_sidebar" id="remark_annotations_sidebar">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">${annotation_name}</h3>
            <div class="remark_standard_modal_actions">
                ${resolve_button_markup}
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_annotations_sidebar)"></ion-icon>
                </div>
            </div>
        </div>
        <div class="remark_standard_modal_body remark_standard_sidebar_body" id="remark_comments_body">
            ${comment_markup}
        </div>
        <div class="remark_annotation_user_input">
            <textarea placeholder="Text input" id="remark_comment_input" data-annotation_id=${annotation_id}></textarea>
            <span id="content_input_submit">
                <ion-icon name="paper-plane-outline" class="remark_" onclick="handleCreateComment(remark_comment_input)"></ion-icon>
            </span>
        </div>
    </div>
    `

    return markup;

}

const COMMENTS_MARKUP = (comment) => {
    console.log(comment);
    let d;
    if (comment["updated_at"]) {
        d = comment["updated_at"];
    } else {
        d = comment["created_at"]
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
                <div class="remark_comment_actions">
                    <ion-icon name="create-outline" data-comment_id="${comment["comment_id"]}"></ion-icon>
                    <ion-icon name="trash-outline" id="${comment["comment_id"]}" onclick="handleDeleteComment(this.id)"></ion-icon>
                </div>
            </div>
            <div class="remark_annotation_user_message">
                <p>${comment["content"]}</p>
            </div>
            <div class="remark_annotation_vote">
                <span class="remark_annotation_vote_option">
                    ${comment["upvotes"]}
                    <ion-icon name="arrow-up-outline" onclick="handleCommentUpvote(remark_annotations_sidebar)data-comment_id="${comment["comment_id"]}"></ion-icon>
                </span>
                <span class="remark_annotation_vote_option">
                    ${comment["downvotes"]}
                    <ion-icon name="arrow-down-outline" data-comment_id="${comment["comment_id"]}"></ion-icon>
                </span>
            </div>
        </div>
    `

    return markup;
}


//    ********************** HANDLERS *************************


function handleCreateAnnotation(formElement, event) {
    event.preventDefault();
    event.stopPropagation();
    let form = new FormData(formElement);
    let data = {}
    const user_id = localStorage.getItem("user_id");
    const user_name = localStorage.getItem("user_name");
    for (var pair of form.entries()) {
        if (pair[0] == "annotation_name" || pair[0] == "tags") {
            if (!pair[1].match(/^[0-9a-zA-Z,_ ]+$/)) {
                console.log("Only alphanumeric values and comma are allowed !");
                return;
            }
        }
        data[pair[0]] = pair[1].trim();
    }
    data["website_uri"] = window.location.href;
    data["user_id"] = user_id;
    data["user_name"] = user_name;
    data["website_id"] = website_id;
    createAnnotation(data);
}

function handleResolveAnnotation(ele, event) {
    event.preventDefault();
    event.stopPropagation();

    const resolved = ele.dataset.annotation_resolved;
    const annotation_id = ele.dataset.annotation_id;

    let data = {}
    data["annotation_id"] = annotation_id;
    data["action_type"] = "edit_resolved";
    if (resolved)
        data["new_resolved"] = true;
    else {
        data["new_resolved"] = false;
    }

    editAnnotation(data)

}

function handleEditAnnotation(formElement) {
    let form = new FormData(formElement);
    const annotation_id = formElement.dataset.annotation_id;
    let data = {}
    for (var pair of form.entries()) {
        //* TODO : Validation
        // if (pair[0] == "new_name" || pair[0] == "new_tags") {
        // if (!pair[1].match(/^[0-9a-zA-Z,_ ]+$/)) {
        // console.log("Only alphanumeric values and comma are allowed !", pair[0], pair[1]);
        // return;
        // }
        // }
        data[pair[0]] = pair[1].trim();
    }
    let actions = [];
    if (data["new_annotation"] != "") {
        actions.push("edit_name");
    }
    if (data["new_tags"] != "") {
        actions.push("edit_tags");
    }
    actions = actions.join(",");
    data["action_type"] = actions;
    data["annotation_id"] = annotation_id;
    editAnnotation(data);
}

function handleDeleteAnnotation(formElement, event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(formElement);
    let form = new FormData(formElement);
    let data = {}
    for (var pair of form.entries()) {
        data[pair[0]] = pair[1].trim();
    }
    if (formElement.dataset.annotation_name == data["deleteConfirmation"]) {
        const annotation_id = formElement.dataset.annotation_id;
        const xpath = formElement.dataset.xpath;
        if (annotation_id && xpath) {
            data["annotation_id"] = annotation_id;
            data["node_xpath"] = xpath;
            deleteAnnotation(data);
        }
    } else {
        console.log("Annotation names don't match.");
        return;
    }
}

function handleCreateComment() {
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

function handleDeleteComment(comment_id) {
    // - ARE YOU SURE ? MODAL NEEDS TO BE ADDED FOR CONFIRMATION
    deleteComment(comment_id);
}

function handleLoginSignupSwitch(component) {
    if (component) {
        if (component.id == "remark_login_modal") {
            removeHTMLElement(component);
            renderSignupModal()
        } else {
            removeHTMLElement(component);
            renderLoginModal()
        }
    }
}

function handleLoginUser(e, formElement) {
    e.preventDefault();
    loginUser(formElement);
}

function handleSignupUser(e, formElement) {
    e.preventDefault();
    signupUser(formElement);
}