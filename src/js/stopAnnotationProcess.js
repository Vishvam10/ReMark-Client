import { hideAlert } from "./alert";
import { stopHighlightElements, removeAllExistingModals } from "./utils/dom_operations";
import * as listeners from "./utils/dom_listeners";

export async function stopAnnotationProcess() {
    stopHighlightElements();
    removeAllExistingModals();
    hideAlert();
    document.removeEventListener("contextmenu", listeners.contextMenuListener, true);
    document.removeEventListener("mouseover", listeners.mouseOverListener, true);
    document.removeEventListener("mouseout", listeners.mouseOutListener, true);
}