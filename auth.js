function isLoggedIn() {
    const username = localStorage.getItem("user_name");
    const user_id = localStorage.getItem("user_id");
    if (username && user_id) {
        return true
    }
    return false
}

function logout() {
    localStorage.clear();
}

function loginUser(form) {
    const formData = new FormData(form);
    const data = {}
    for (var pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    const res = validateForm(data);
    if (res == "OK") {
        const url = `${BASE_API_URL}/api/login`;
        fetch(url, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data["status"] == 200) {
                    localStorage.setItem("user_access_token", data["access_token"]);
                    localStorage.setItem("user_id", data["user_id"]);
                    localStorage.setItem("user_name", data["user_name"]);
                    localStorage.setItem("user_authority", data["user_authority"]);
                    const loginForm = document.getElementById("loginForm");
                    if (loginForm) {
                        removeHTMLElement(loginForm)
                    }
                } else {
                    console.log(data);
                    return false
                }
            })
            .catch(err => console.log(err))
    }
}