// annotation_id = data["annotation_id"]
// content = data["content"]
// content_html = data["content_html"]
// parent_node = data["parent_node"]
// created_by = data["created_by"]


async function createComment(bodyData) {
    const url = `${BASE_API_URL}/api/comment`;
    const api_key = remarkGlobalData["api_key"];
    console.log(bodyData);
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
    return data;
}