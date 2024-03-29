import { remarkGlobalData } from "./global";
import { BASE_API_URL } from "./constants";
import { removeHTMLElement } from "./utils/dom_operations";
import { getElementAfterCheck } from "./utils/xpath_operations";
import { showAlert } from "./alert";
import { DELETE, GET, POST, PUT } from "./apiFactory";

export async function getAnnotationByWebsiteID() {
    const website_id = remarkGlobalData["website_id"];
    const url = `${BASE_API_URL}/api/annotation/all/${website_id}`;
    const api_key = remarkGlobalData["api_key"];
    const res = await GET(url, api_key);
    const data = await res.json();
    remarkGlobalData["annotations"] = data;
    return data;
}

export async function createAnnotation(bodyData) {
    const url = `${BASE_API_URL}/api/annotation`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    
    const res = await POST(url, bodyData, api_key, auth_token);
    const data = await res.json();
    if (data.status == 201) {
        const create_modal_check = document.getElementById("remark_create_annotation_modal");
        if (create_modal_check) {
            removeHTMLElement(create_modal_check)
        }
        const ele = getElementAfterCheck(bodyData["node_xpath"], bodyData["html_id"], bodyData["html_tag"], bodyData["html_text_content"]);
        ele.classList.add("highlight_element_strong");
        showAlert("SUCCESS", "Annotation created successfully !")
    }
    getAnnotationByWebsiteID();
    return data;
}

export async function editAnnotation(bodyData) {
    const annotation_id = bodyData["annotation_id"];
    const url = `${BASE_API_URL}/api/annotation/${annotation_id}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await PUT(url, bodyData, api_key, auth_token);
    const data = await res.json();
    if (data) {
        if(data["message"] == "Annotation edited successfully !") {
            showAlert("SUCCESS", data["message"]);
        }
        if(data["message"] == "Annotation resolved successfully !") {
            showAlert("SUCCESS", data["message"]);
            const resolve_btn = document.getElementById("remark_annotation_resolve_button");
            resolve_btn.classList.add("remark_unresolve_button")
            resolve_btn.innerText = "UNRESOLVE";
        } else if(data["message"] == "Annotation unresolved successfully !") {
            showAlert("SUCCESS", data["message"]);
            const resolve_btn = document.getElementById("remark_annotation_resolve_button");
            resolve_btn.classList.remove("remark_unresolve_button")
            resolve_btn.innerText = "RESOLVE";
        }
    }
    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (edit_modal_check) {
        removeHTMLElement(edit_modal_check)
    }
    getAnnotationByWebsiteID();
    return data;
}

export async function deleteAnnotation(bodyData) {
    const url = `${BASE_API_URL}/api/annotation/${bodyData["annotation_id"]}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await DELETE(url, api_key, auth_token)
    const data = await res.json();
    if (data.status == 200) {
        const delete_modal_check = document.getElementById("remark_delete_annotation_modal");
        if (delete_modal_check) {
            removeHTMLElement(delete_modal_check);
        }
        const ele = getElementAfterCheck(bodyData["node_xpath"], bodyData["html_id"], bodyData["html_tag"], bodyData["html_text_content"]);
        ele.classList.remove("highlight_element_strong");
        showAlert("SUCCESS", "Annotation deleted successfully !")
    }
    getAnnotationByWebsiteID();
    return data;
}
