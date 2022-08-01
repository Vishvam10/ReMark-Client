function renderNewAnnotationModal(node, html_tag) {
    const create_modal_check = document.getElementById("remark_create_annotation_modal");
    if (create_modal_check) {
        console.log("Create annotation modal already present.");
        return;
    }

    let node_xpath = getNodeXpath(node);
    node_xpath = `//${node_xpath.toLowerCase()}`

    const body = document.getElementsByTagName('body')[0];
    const xpath_check = getElementByXpath(node_xpath);

    if (xpath_check == node) {
        const createAnnotationModal = CREATE_ANNOTATION_MODAL(html_tag, node_xpath);
        body.insertAdjacentHTML("afterbegin", createAnnotationModal);
    } else {
        console.log("Xpath not matched. Please try again !");
        return;
    }
}

function renderEditAnnotatioModal(node) {
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

function renderExistingAnnotations() {

    const annotations = remarkGlobalData["annotations"];

    // 1. Indicate the elements on which the annotations are present
    annotations.forEach((annotation) => {
        const node_xpath = annotation["node_xpath"];
        const ele = getElementByXpath(node_xpath);
        ele.classList.add("highlight_element_strong");
        ele.dataset.xpath = node_xpath;
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