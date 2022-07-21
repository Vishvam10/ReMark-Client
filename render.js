function renderNewAnnotationModal(node) {
    console.log(node);
    const annotationModal = ANNOTATION_MODAL()
    node.insertAdjacentHTML("beforeend", annotationModal)
}