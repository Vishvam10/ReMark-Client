import { BASE_API_URL } from "./constants";
import { removeHTMLElement } from "./utils/dom_operations";
import { showAlert } from "./alert";
import { handlePostLoginSetup } from "./handlers";
import { renderLoginModal } from "./render"

import { POST } from "./apiFactory";

export function isLoggedIn() {
    const user_id = localStorage.getItem("user_id");
    const user_access_token = localStorage.getItem("user_access_token");
    const user_name = localStorage.getItem("user_name");
    const user_authority = localStorage.getItem("user_authority");
    if (user_name && user_id && user_authority && user_access_token) {
        return true;
    }
    return false;
}

export function logout() {
    localStorage.clear();
}

export async function login(bodyData) {
    const url = `${BASE_API_URL}/api/login`;
    try {
        const res = await POST(url, bodyData);
        const data = await res.json();
        if (data["status"] == 200) {
            localStorage.setItem("is_admin_to_website", data["is_admin_to_website"]);
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
        return false;
    } 
}

export async function signup(bodyData) {
    const url = `${BASE_API_URL}/api/user`;
    try {
        const res = POST(url, bodyData);
        const data = await res.json();
        if (data["status"] == 201) {
            const signupFormModal = document.getElementById("remark_signup_modal");
            showAlert("SUCCESS", data["message"]);
            if (signupFormModal) {
                removeHTMLElement(signupFormModal);
            }
            renderLoginModal()
        } else {
            showAlert("ERROR", 
            data["error_message"]);
            return false;
        }
    } catch(err) {
        console.log("ERROR : ", err);
        return false;
    }
}

export function isAdmin() {
    const authority = localStorage.getItem("user_authority");
    const is_admin_to_website = localStorage.getItem("is_admin_to_website");
    if (authority == "admin" && is_admin_to_website == "true") {
        return true;
    }
    return false;
}

exports.postLogin = handlePostLoginSetup;