import { BASE_API_URL } from "./constants";
import { removeHTMLElement } from "./utils/dom_operations";
import { validateForm } from "./utils/validations";
import { showAlert } from "./alert";
import { renderLoginModal } from "./render";
import { handlePostLoginSetup } from "./handlers";

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

export async function loginUser(form) {
    const formData = new FormData(form);
    const bodyData = {}
    for (var pair of formData.entries()) {
        bodyData[pair[0]] = pair[1];
    }
    console.log(bodyData);
    const res = validateForm(bodyData);
    if (res == "OK") {
        const url = `${BASE_API_URL}/api/login`;
        console.log("URL : ", url);
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })
            const data = await res.json();
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
            return false;
        } 
    } else {
        showAlert("ERROR", "Form validation failed");
        return false;;
        return false;
    }
}

export async function signupUser(form) {
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
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })
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
    } else {
        showAlert("ERROR", "Form validation failed");
        return false;
    }
}

export function isAdmin() {
    const authority = localStorage.getItem("user_authority");
    if (authority == "admin") {
        return true;
    }
    return false;
}
