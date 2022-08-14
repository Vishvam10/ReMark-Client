const { BASE_API_URL } = require("./constants");
const { removeHTMLElement } = require("./utils/dom_operations");
const { validateForm } = require("./utils/validations");
const { showAlert } = require("./alert");
const { renderLoginModal } = require("./render");
const { handlePostLoginSetup } = require("./handlers")

const axios = require("axios");

function isLoggedIn() {
    const user_id = localStorage.getItem("user_id");
    const user_access_token = localStorage.getItem("user_access_token");
    const user_name = localStorage.getItem("user_name");
    const user_authority = localStorage.getItem("user_authority");
    if (user_name && user_id && user_authority && user_access_token) {
        return true;
    }
    return false;
}

function logout() {
    localStorage.clear();
}

async function loginUser(form) {
    const formData = new FormData(form);
    const bodyData = {}
    for (var pair of formData.entries()) {
        bodyData[pair[0]] = pair[1];
    }
    const res = validateForm(bodyData);
    if (res == "OK") {
        const url = `${BASE_API_URL}/api/login`;
        try {
            const res = await axios({
                url: url,
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(bodyData)
            })
            const data = await res.data;
            if (data["status"] == 200) {
                localStorage.setItem("user_access_token", data["access_token"]);
                localStorage.setItem("user_id", data["user_id"]);
                localStorage.setItem("user_name", data["user_name"]);
                localStorage.setItem("user_authority", data["user_authority"]);
                const loginFormModal = document.getElementById("remark_login_modal");
                if (loginFormModal) {
                    removeHTMLElement(loginFormModal)
                }
                handlePostLoginSetup();
                showAlert("SUCCESS", "Logged in successfully !");
                return data;
            } else {
                showAlert("ERROR", data["error_message"])
                return data;
            }
        } catch(err) {
            console.log("ERROR : ", err);
            return data;
        } 
    } else {
        showAlert("ERROR", "Form validation failed");
        return false;
    }
}

async function signupUser(form) {
    const formData = new FormData(form);
    const bodyData = {}
    for (var pair of formData.entries()) {
        bodyData[pair[0]] = pair[1];
    }
    bodyData["authority"] = "user";
    console.log(bodyData);
    const res = validateForm(bodyData);
    if (res == "OK") {
        const url = `${BASE_API_URL}/api/user`;
        try {
            const res = await axios({
                url: url,
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(bodyData)
            })
            const data = await res.data;
            if (data["status"] == 201) {
                const signupFormModal = document.getElementById("remark_signup_modal");
                showAlert("SUCCESS", data["message"]);
                if (signupFormModal) {
                    removeHTMLElement(signupFormModal);
                }
                renderLoginModal()
            } else {
                showAlert("ERROR", data["error_message"]);
                return false;
            }
        } catch(err) {
            console.log("ERROR : ", err);
        }
    } else {
        showAlert("ERROR", "Form validation failed")
    }
}

function isAdmin() {
    const authority = localStorage.getItem("user_authority");
    if (authority == "admin") {
        return true;
    }
    return false;
}

module.exports = {
    loginUser,
    signupUser,
    isAdmin,
    logout,
    isLoggedIn
}