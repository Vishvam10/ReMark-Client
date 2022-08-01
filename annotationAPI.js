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
    return data;
}

async function createAnnotation(bodyData) {
    const url = `${BASE_API_URL}/api/annotation`;
    console.log(bodyData);
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
        const ele = getElementByXpath(bodyData["node_xpath"]);
        ele.classList.add("highlight_element_strong");
    }
    getAnnotationByWebsiteID();
    return data;
}

// data["action_type"] = "edit_name,edit_tag,edit_resolved"
// data["new_name"]
// data["new_tag"]
// data["new_resolved"]

async function editAnnotation(bodyData) {
    const url = `${BASE_API_URL}/api/annotation`;
    console.log(bodyData);
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
    getAnnotationByWebsiteID();
    return data;
}