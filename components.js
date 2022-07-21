const LOGIN_MARKUP =
    `
    
    <div class="signup_container">
        <form id="loginForm">
            <div class="form_fields">
                <label for="username" class="form_label">Username</label>
                <input type="text" name="username" class="form_input" id="username">
            </div>
            <div class="form_fields">
                <label for="password" class="form_label">Password</label>
                <input type="password" name="password" class="form_input" id="password">
            </div>
            <div class="form_fields">
                <label for="authority" class="form_label">Authority</label>
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

const ANNOTATION_MODAL = () => {
    const userMessage = "Sample text.";
    const userMessageModifiedOn = "12-02-2022 5pm";
    const userName = "John Doe";
    const authority = "admin";
    let editMenu = "";

    if (authority == "admin") {
        editMenu =
            `
        <div class="annotation_actions">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>        
        </div>
        `
    }

    const markup =
        `
    <div class="sample_container">
        <div class="annotation">
            <div class="annotation_header">
                <div class="user_profile">
                    <div class="user_details">
                        <h4 class="user_username">
                            ${userName}
                        </h4>
                        <span class="user_last_modified">
                            Modified On : ${userMessageModifiedOn}
                        </span>
                    </div>
                </div>
                ${editMenu}
            </div>
            <div class="user_message">
                <p>${userMessage}</p>
            </div>
        </div>

        <div class="user_input">
            <textarea placeholder="Text input" id="comment_input"></textarea>
            <span id="content_input_submit">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </span>
        </div>
    </div>
    `
    return markup;
}