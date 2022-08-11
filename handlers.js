//+ ANNOTATION HANDLERS

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
                showAlert("ERROR", "Only alphanumeric values and comma are allowed !")
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
    console.log(resolved);
    const annotation_id = ele.dataset.annotation_id;

    let data = {}
    data["annotation_id"] = annotation_id;
    data["action_type"] = "edit_resolved";
    if (resolved)
        data["new_resolved"] = true;
    else {
        data["new_resolved"] = false;
    }

    editAnnotation(data);

}

function handleEditAnnotation(formElement, event) {
    event.preventDefault();
    event.stopPropagation();
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

function handleEditComment(ele, event) {
    event.preventDefault();
    event.stopPropagation();

    const user_id = localStorage.getItem("user_id");
    const comment_id = ele.dataset.comment_id;
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
            console.log("EDITING COMMENT");
            contentEle.blur();
            let new_content = contentEle.textContent.trim();
            data["new_content"] = new_content;
            data["new_content_html"] = "";
            editComment(data);
        }
    })

}

function handleDeleteComment(comment_id) {
    // - ARE YOU SURE ? MODAL NEEDS TO BE ADDED FOR CONFIRMATION
    deleteComment(comment_id);
}

function handleCommentUpvote(ele, event) {
    event.preventDefault();
    event.stopPropagation();
    const user_id = localStorage.getItem("user_id");
    let data = {}
    data["user_id"] = user_id;
    data["comment_id"] = ele.dataset.comment_id;
    data["action_type"] = ele.dataset.action_type
    updateCommentVote(data);
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

//+ AUTH HANDLERS

function handleLoginUser(e, formElement) {
    e.preventDefault();
    loginUser(formElement);
}

function handleSignupUser(e, formElement) {
    e.preventDefault();
    signupUser(formElement);
}