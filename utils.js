function validateForm(data) {
    if (data["username"] != "") {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (re.test(data["password"])) {
            return "OK";
        }
        return "Invalid Password Format";
    }
    return "Empty Field Present"
}