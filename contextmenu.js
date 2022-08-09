function overrideContextMenu(e, data) {
    const body = document.getElementsByTagName("body")[0];
    console.log(data["annotation_present"]);
    const contextMenuMarkup = CONTEXT_MENU_MARKUP(data["annotation_present"])

    body.insertAdjacentHTML("afterbegin", contextMenuMarkup);

    const contextMenu = document.getElementById("remark_context_menu");

    const posX = e.clientX;
    const posY = e.clientY;
    positionContextMenu(contextMenu, posX, posY);

    contextMenu.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const option = e.target.dataset.remark_contextmenu_option;
        handleContextMenuOptions(option, data);
        if (contextMenu) {
            setTimeout(() => {
                removeHTMLElement(contextMenu)
            }, 100);
        }
    })
}

function positionContextMenu(contextMenu, x, y) {
    const i = contextMenu.style;
    i.top = `${y + 20}px`;
    i.left = `${x - 40}px`;
    i.visibility = "visible";
    i.opacity = "1";
}

function handleContextMenuOptions(option, data) {

    remarkGlobalData["currentXPath"] = data["xpath"];
    remarkGlobalData["currentNode"] = data["node"];

    switch (option) {
        case "open":
            renderSideBar(data["xpath"]);
            break;
        case "create":
            renderNewAnnotationModal(data["node"], data["tag"], data["className"].replace("highlight_element_light", ""), data["id"], data["textContent"]);
            break;
        case "edit":
            renderEditAnnotationModal(data["node"], data["tag"], data["id"], data["textContent"]);
            break;
        case "delete":
            renderDeleteAnnotationModal(data["node"], data["tag"], data["id"], data["textContent"]);
            break;
        default:
            break;
    }
}