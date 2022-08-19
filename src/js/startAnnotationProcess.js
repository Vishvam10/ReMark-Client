import { remarkGlobalData } from "./global";

import { renderExistingAnnotations } from "./render";

import { getAnnotationByWebsiteID } from "./annotationAPI";
import { verifyToken } from "./tokenAPI";
import { isAdmin } from "./auth";

import {BASE_API_URL} from "./constants";
import { highlightElements, removeHTMLElement, removeAllExistingModals } from "./utils/dom_operations";
import { contextMenuListener } from "./utils/dom_listeners";
import { showAlert } from "./alert";

export async function startAnnotationProcess() {

    // 1. Check for API_KEY
    const data = JSON.parse(remark_config);
    const api_key = data.REMARK_API_KEY;
    const website_id = data.REMARK_WEBSITE_ID;
    if ((!api_key) || (api_key == "")) {
        showAlert("ERROR", "Invalid API KEY", 1);
        return;
    } else {
        remarkGlobalData["api_key"] = api_key;
    }

    // 2. Verify API_KEY
    const token_status = await verifyToken(api_key);
    if (token_status.status != 200) {
        showAlert("ERROR", "Error in token verification");
        return;
    }

    // 3. Load and render existing annotations if any
    if ((!website_id) || (website_id == "")) {
        showAlert("ERROR", "Invalid website ID");
        return;
    } else {
        remarkGlobalData["website_id"] = website_id; 
    }

    const user_id = localStorage.getItem("user_id");
    const user_authority = localStorage.getItem("user_authority");
    if(user_authority) {
        getUserPreferences(user_id);
    }

    const annotations = await getAnnotationByWebsiteID();

    if (annotations.length > 0) {
        remarkGlobalData["annotations"] = annotations;
        renderExistingAnnotations();
    }

    // 4. (ADMIN ONLY) Start the highlight process
    if (isAdmin()) {
        highlightElements();
    }

  
    document.addEventListener("contextmenu", contextMenuListener,  true);

    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            removeAllExistingModals();
        }
    }); 

    document.addEventListener("click", (e) => {
        const context_menu_check = document.getElementById("remark_context_menu");
        if(context_menu_check) {
            removeHTMLElement(context_menu_check);
        }
    })
}

async function getUserPreferences(user_id) {
    const url = `${BASE_API_URL}/api/user_preference/${user_id}`;
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${auth_token}`
        }
    })
    const data = await res.json();
    if(data.user_id != null) {
        remarkGlobalData["user_preference"] = data;
    }
}   