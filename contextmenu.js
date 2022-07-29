function overrideContextMenu(e) {
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", CONTEXT_MENU_MARKUP);
    const contextMenu = document.getElementById("remark_context_menu");

    const posX = e.clientX;
    const posY = e.clientY;
    positionContextMenu(contextMenu, posX, posY);

    document.addEventListener("click", (e) => {
        const option = e.target.dataset.remark_contextmenu_option;
        handleContextMenuOptions(option);

        setTimeout(() => {
            if (contextMenu) {
                removeHTMLElement(contextMenu)
            }
        }, 100);
    })
}

function positionContextMenu(contextMenu, x, y) {
    const i = contextMenu.style;
    i.top = `${y + 20}px`;
    i.left = `${x - 40}px`;
    i.visibility = "visible";
    i.opacity = "1";
}

function handleContextMenuOptions(option) {
    switch (option) {
        case "open":
            renderSideBar()

            // In the future 
        case "rename":
            break;
        case "delete":
            break;
        default:
            break;
    }
}