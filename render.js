function renderNewAnnotationModal(node, html_tag) {
    console.log(node);
    const check = document.getElementById("remark_create_annotation_modal");

    if (check) {
        console.log("Create annotation modal already present.");
        return;
    }
    const body = document.getElementsByTagName('body')[0];
    const html_node_data_tag = generateRandomID(32);
    const annotationModal = CREATE_ANNOTATION_MODAL(html_tag, html_node_data_tag);

    body.insertAdjacentHTML("afterbegin", annotationModal);
}