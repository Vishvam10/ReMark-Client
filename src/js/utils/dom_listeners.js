import { VALID_HTML_ELEMENTS } from "../constants";
import { handleContextMenu } from "../handlers";

export function contextMenuListener(e) {
    e.preventDefault();
    e.stopPropagation();
    handleContextMenu(e);
}

export function mouseOverListener(e) {
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
}

export function mouseOutListener(e) {
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
}