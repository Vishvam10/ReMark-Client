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