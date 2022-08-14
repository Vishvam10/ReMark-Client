import { VALID_HTML_ELEMENTS } from "./constants";
import { hideAlert } from "./alert";

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

export function removeHTMLElement(ele) {
    ele.parentElement.removeChild(ele);
    return;
}

export function highlightElements() {
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

export function generateRandomID(len) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

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

export function getNodeXpath(ele) {
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

export function getElementByXpath(path) {
    let ele = null;
    try {
        ele = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch (error) {
        return;
    }
    return ele;
}

export function getPageXY(element) {
    var x = 0,
        y = 0;
    while (element) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return [x, y];
}

export function checkXPathMatch(node, xpath) {
    const res = getElementByXpath(xpath);
    if (res == node) {
        return true;
    }
    return false;
}

export function getElementAfterCheck(node_xpath, html_id, html_tag, html_text_content) {
    const ele_check1 = getElementByXpath(`${node_xpath}`);
    if (ele_check1) {
        return ele_check1;
    } else {
        const ele_check2 = document.getElementById(`${html_id}`)

        if (ele_check2) {
            return ele_check2;
        } else {
            const html_tags = document.getElementsByTagName(`${html_tag}`);
            let ele_check3;

            for (let i = 0; i < html_tags.length; i++) {
                curElement = html_tags[i];
                if (curElement.textContent.replace(/\s/g, "") == html_text_content.replace(/\s/g, "")) {
                    ele_check3 = curElement;
                    break;
                }
            }
            if (ele_check3) {
                return ele_check3;
            } else {
                //- LOGIC MUST BE CHANGED
                const ht = html_tag.toLowerCase()
                const html_tags = document.getElementsByTagName(`${ht}`);
                // showAlert("INTIMATION", `${html_text_content} TAG : ${ht}`, 1000)
            }
        }
    }
}

export function repositionStart() {
    const ele = document.querySelector(".remark_init_container");
    ele.classList.add("remark_init_container_resize");
}

export function removeAllExistingModals() {
    const create_modal_check = document.getElementById("remark_create_annotation_modal");

    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");

    const delete_modal_check = document.getElementById("remark_delete_annotation_modal");

    const sidebar_check = document.getElementById("remark_annotations_sidebar");

    const login_modal_check = document.getElementById("remark_login_modal");

    const signup_modal_check = document.getElementById("remark_signup_modal");

    const context_menu_check = document.getElementById("remark_context_menu");

    hideAlert();
    
    if (create_modal_check) {
        removeHTMLElement(create_modal_check);
    }
    if (edit_modal_check) {
        removeHTMLElement(edit_modal_check);
    }
    if (delete_modal_check) {
        removeHTMLElement(delete_modal_check);
    }
    if (sidebar_check) {
        removeHTMLElement(sidebar_check);
    }
    if (login_modal_check) {
        removeHTMLElement(login_modal_check);
    }
    if (signup_modal_check) {
        removeHTMLElement(signup_modal_check);
    }
    if (context_menu_check) {
        removeHTMLElement(context_menu_check);
    }
}