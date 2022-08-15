export function getNodeXpath(node) {
    let comp, comps = [];
    let parent = null;
    let xpath = '';
    let getPos = function(node) {
        let position = 1, curNode;
        if (node.nodeType == Node.ATTRIBUTE_NODE) {
            return null;
        }
        for (curNode = node.previousSibling; curNode; curNode = curNode.previousSibling) {
            if (curNode.nodeName == node.nodeName) {
                ++position;
            }
        }
        return position;
     }

    if (node instanceof Document) {
        return '/';
    }

    for (; node && !(node instanceof Document); node = node.nodeType == Node.ATTRIBUTE_NODE ? node.ownerElement : node.parentNode) {
        comp = comps[comps.length] = {};
        switch (node.nodeType) {
            case Node.TEXT_NODE:
                comp.name = 'text()';
                break;
            case Node.ATTRIBUTE_NODE:
                comp.name = '@' + node.nodeName;
                break;
            case Node.PROCESSING_INSTRUCTION_NODE:
                comp.name = 'processing-instruction()';
                break;
            case Node.COMMENT_NODE:
                comp.name = 'comment()';
                break;
            case Node.ELEMENT_NODE:
                comp.name = node.nodeName;
                break;
        }
        comp.position = getPos(node);
    }

    for (var i = comps.length - 1; i >= 0; i--) {
        comp = comps[i];
        xpath += '/' + comp.name;
        if (comp.position != null) {
            xpath += '[' + comp.position + ']';
        }
    }
    return xpath;
}

export function getElementByXpath(path) {
    let ele = null;
    try {
        ele = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch (error) {
        console.log(error);
        return;
    }
    return ele;
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
                return;
            }
        }
    }
}