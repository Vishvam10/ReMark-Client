function validateForm(data) {
    if (data["authority"] == "admin" || data["authority"] == "user") {
        if (data["username"] != "") {
            var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (re.test(data["password"])) {
                return "OK";
            }
            return "Invalid Password Format";
        }
        return "Empty Field Present"
    }
    return "Invalid Authority"
}

function removeHTMLElement(ele) {
    ele.parentElement.removeChild(ele);
    return true;
}