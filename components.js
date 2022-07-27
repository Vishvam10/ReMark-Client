const LOGIN_MARKUP =
    `
    
    <div class="signup_container">
        <form id="loginForm">
            <div class="form_fields">
                <label for="username" class="remark_form_label">Username</label>
                <input type="text" name="username" class="form_input" id="username">
            </div>
            <div class="form_fields">
                <label for="password" class="remark_form_label">Password</label>
                <input type="password" name="password" class="form_input" id="password">
            </div>
            <div class="form_fields">
                <label for="authority" class="remark_form_label">Authority</label>
                <input type="text" name="authority" class="form_input" id="authority">
            </div>
            <div class="form_fields">
                <button name="submit" class="form_submit" id="loginBtn">Login</button>
            </div>
        </form>
    </div>

`

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
                    <button name="submit" class="remark_standard_button" onclick="handleCreateAnnotation(createAnnotationForm)">Create</button>
                </div>
            </form>
        </div>
    </div>
    `
    return markup;
}

function handleCreateAnnotation(formElement) {
    let form = new FormData(formElement);
    let data = {}
    const user_id = localStorage.getItem("user_id");
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
    data["website_id"] = website_id;
    createAnnotation(data);
}

const CONTEXT_MENU_MARKUP =
    `
    <div class="remark_contextmenu_wrapper" id="remark_context_menu">
        <div class="remark_contextmenu_content">
            <ul class="remark_contextmenu_menu_list">
                <li class="remark_item">
                    <ion-icon name="open-outline" class="uil uil remark_contextmenu_icon"></ion-icon>
                    <span class="remark_context_menu_item_name" data-remark_contextmenu_option="open">Open In Sidebar</span>
                </li>
            </ul>
        </div>
    </div>

`