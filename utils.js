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
    return;
}

function highlightElements() {
    document.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const className = e.target.className;
        if (className.includes("remark_") || className.includes("highlight_element_strong")) {
            return;
        }
        const tag = e.target.tagName;
        if (VALID_HTML_ELEMENTS.includes(tag)) {
            const targetHTMLElement = e.target;
            targetHTMLElement.classList.toggle("highlight_element_light");
        }
    });
    document.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const className = e.target.className;
        if (className.includes("remark_") || className.includes("highlight_element_strong")) {
            return;
        }
        const tag = e.target.tagName;
        if (VALID_HTML_ELEMENTS.includes(tag)) {
            const targetHTMLElement = e.target;
            targetHTMLElement.classList.toggle("highlight_element_light");
        }
    });

}

function handleCloseModal(ele) {
    removeHTMLElement(ele);
    console.log("REMOVED : ", ele);
}

function generateRandomID(len) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function isAlphaNumeric(s) {
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

function getNodeXpath(ele) {
    if (ele.id !== '')
        return 'id("' + ele.id + '")';
    if (ele === document.body)
        return ele.tagName;

    var ix = 0;
    var siblings = ele.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === ele)
            return getNodeXpath(ele.parentNode) + '/' + ele.tagName + '[' + (ix + 1) + ']';
        if (sibling.nodeType === 1 && sibling.tagName === ele.tagName)
            ix++;
    }
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getPageXY(element) {
    var x = 0,
        y = 0;
    while (element) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return [x, y];
}