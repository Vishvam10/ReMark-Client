/*
    
    1. Check with XPath
    2. If that fails, check with ID
    3. If that fails, check with textContent
    4. If that fails, check with className + Xpath (extract the 
       child node number from XPath) 
    
*/

function renderNewAnnotationModal(html_node, html_tag, html_id, html_text_content) {
    const create_modal_check = document.getElementById("remark_create_annotation_modal");
    if (create_modal_check) {
        return;
    }
    const body = document.getElementsByTagName('body')[0];

    let node_xpath = getNodeXpath(html_node);
    node_xpath = `//${node_xpath.toLowerCase()}`

    const newAnnotationModal = CREATE_ANNOTATION_MODAL(node_xpath, html_tag, html_id, html_text_content)

    body.insertAdjacentHTML("afterbegin", newAnnotationModal)

}

function renderEditAnnotationModal(node) {
    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (edit_modal_check) {
        console.log("Edit annotation modal already present.");
        return;
    }

    let node_xpath = getNodeXpath(node);
    node_xpath = `//${node_xpath.toLowerCase()}`

    const body = document.getElementsByTagName('body')[0];
    const xpath_check = getElementByXpath(node_xpath).dataset.xpath;


    if (xpath_check == node_xpath) {
        const editAnnotationModal = EDIT_ANNOTATION_MODAL(node_xpath);
        body.insertAdjacentHTML("afterbegin", editAnnotationModal);
    } else {
        console.log("Xpath not matched. Please try again !");
        return;
    }
}

function renderDeleteAnnotationModal(node) {
    const delete_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (delete_modal_check) {
        console.log("Delete annotation modal already present.");
        return;
    }

    let node_xpath = getNodeXpath(node);
    node_xpath = `//${node_xpath.toLowerCase()}`

    const body = document.getElementsByTagName('body')[0];
    const xpath_check = getElementByXpath(node_xpath).dataset.xpath;


    if (xpath_check == node_xpath) {
        const deleteAnnotationModal = DELETE_ANNOTATION_MODAL(node_xpath);
        body.insertAdjacentHTML("afterbegin", deleteAnnotationModal);
    } else {
        console.log("Xpath not matched. Please try again !");
        return;
    }
}

function renderExistingAnnotations() {

    const annotations = remarkGlobalData["annotations"];

    // 1. Indicate the elements on which the annotations are present
    annotations.forEach((annotation) => {
        // console.log(annotation);
        console.log("ANNOTATION : ", annotation);
        const ele_check1 = getElementByXpath(annotation["node_xpath"]);
        console.log("CHECK 1 : ", ele_check1);

        if (ele_check1) {
            ele_check1.classList.add("highlight_element_strong");
            ele_check1.dataset.xpath = annotations["node_xpath"];
        } else {
            const ele_check2 = document.getElementById(`${annotation["html_id"]}`)
            console.log("CHECK 2 : ", ele_check2);

            if (ele_check2) {
                ele_check1.classList.add("highlight_element_strong");
                ele_check1.dataset.xpath = annotations["node_xpath"];
            } else {
                const html_tags = document.getElementsByTagName(`${annotation["html_tag"]}`)
                let ele_check3;

                for (let i = 0; i < html_tags.length; i++) {
                    curElement = html_tags[i];
                    if (curElement.innerHTML == annotation["html_text_content"]) {
                        ele_check3 = curElement;
                        break;
                    }
                }
                ele_check3.classList.add("highlight_element_strong");
                ele_check3.dataset.xpath = annotations["node_xpath"];
            }

        }


        // if (ele) {
        //     ele.classList.add("highlight_element_strong");
        //     ele.dataset.xpath = annotations["node_xpath"];
        // }
    });


    // 2. On show, trigger the sidebar (or modal)
    // THIS WILL BE DONE USING THE CONTEXT MENU
}

function renderSideBar(xpath) {
    const sideBar = SIDEBAR(xpath);
    const body = document.getElementsByTagName('body')[0];
    const check = document.getElementById("remark_annotations_sidebar");
    if (check) {
        console.log(check);
        removeHTMLElement(check);
    }
    body.insertAdjacentHTML("afterbegin", sideBar);
}

function renderLoginModal() {
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML("afterbegin", LOGIN_MARKUP);
}

function renderSignupModal() {
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML("afterbegin", SIGNUP_MARKUP);
}