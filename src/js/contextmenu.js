const { remarkGlobalData } = require("./global");
const { CONTEXT_MENU_MARKUP  } = require("./components");
const { removeHTMLElement } = require("./utils/dom_operations");

const { renderNewAnnotationModal, renderEditAnnotationModal, renderDeleteAnnotationModal, renderSideBar } = require("./render");

const { showAlert } = require("./alert");
const { isAdmin } = require("./auth");

function overrideContextMenu(e, data) {
    const body = document.getElementsByTagName("body")[0];
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
            if(isAdmin()) {
                renderNewAnnotationModal(data["node"], data["tag"], data["className"].replace("highlight_element_light", ""), data["id"], data["textContent"]);
            } else {
                showAlert("INTIMATION", "Create annotation option is for admins only !", 2)
            }
            break;
        case "edit":
            if(isAdmin()) {
                renderEditAnnotationModal(data["node"], data["tag"], data["id"], data["textContent"]);
            } else {
                showAlert("INTIMATION", "Edit annotation option is for admins only !", 2)   
            }
            break;
        case "delete":
            if(isAdmin()) {
                renderDeleteAnnotationModal(data["node"], data["tag"], data["id"], data["textContent"]);
            } else {
                showAlert("INTIMATION", "Delete annotation option is for admins only !", 2)       
            }
            break;
        default:
            break;
    }
}

module.exports = {
    overrideContextMenu,
    positionContextMenu,
    handleContextMenuOptions
}