async function getAnnotationByWebsiteID() {
    const url = `${BASE_API_URL}/api/annotation/all/${website_id}`;
    const api_key = remarkGlobalData["api_key"];
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'API_KEY': `${api_key}`,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const data = await res.json();
    remarkGlobalData["annotations"] = data;
    return data;
}

async function createAnnotation(bodyData) {
    const url = `${BASE_API_URL}/api/annotation`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'API_KEY': `${api_key}`,
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${auth_token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
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

async function editAnnotation(bodyData) {
    const annotation_id = bodyData["annotation_id"];
    const url = `${BASE_API_URL}/api/annotation/${annotation_id}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'API_KEY': `${api_key}`,
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${auth_token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
    const data = await res.json();
    if (data) {
        showAlert("SUCCESS", "Annotation edited successfully !")
    }
    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (edit_modal_check) {
        removeHTMLElement(edit_modal_check)
    }
    getAnnotationByWebsiteID();
    return data;
}

async function deleteAnnotation(bodyData) {
    const url = `${BASE_API_URL}/api/annotation/${bodyData["annotation_id"]}`;
    console.log(bodyData);
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'API_KEY': `${api_key}`,
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${auth_token}`,
            'Content-Type': 'application/json'
        },
    })
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