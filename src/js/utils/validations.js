export function isAlphaNumeric(s) {
    var code, i, len;

    for (i = 0, len = s.length; i < len; i++) {
        code = s.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};


export function validateForm(data) {
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