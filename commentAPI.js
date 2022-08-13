// annotation_id = data["annotation_id"]
// content = data["content"]
// content_html = data["content_html"]
// parent_node = data["parent_node"]
// created_by = data["created_by"]


async function createComment(bodyData) {
    const url = `${BASE_API_URL}/api/comment`;
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
        const comment = data.data;
        const markup = COMMENTS_MARKUP(comment);
        document.getElementById("remark_comments_body").insertAdjacentHTML("beforeend", markup);
    } else {
        showAlert("ERROR", "Please enter a valid comment !")
    }
    return data;
}

async function editComment(bodyData) {
    const url = `${BASE_API_URL}/api/comment/${bodyData["comment_id"]}`;
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
    if (!data) {
        showAlert("ERROR", "Something went wrong !", 2)
    } else {
        console.log(data);
        const contentEle = data["comment_id"] + "message";
        contentEle.textContent = data["content"];
        showAlert("SUCCESS", "Comment edited successfully !")
    }
    return data;
}

async function updateCommentVote(bodyData) {
    const url = `${BASE_API_URL}/api/comment/vote/${bodyData["comment_id"]}`;
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
    if (data.status == 200) {   
        showAlert("SUCCESS", `${data["message"]}`)
        if(bodyData["action_type"] == "upvote") {
            document.getElementById(`${bodyData["comment_id"]}upvotes`).textContent = data["comment_upvotes"];
        } else {
            document.getElementById(`${bodyData["comment_id"]}downvotes`).textContent = data["comment_downvotes"];
        }
    } else {
        showAlert("ERROR", data["error_message"])
    }
    return data;
}

async function deleteComment(comment_id) {
    const url = `${BASE_API_URL}/api/comment/${comment_id}`;
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
        const comment = document.getElementById(comment_id);
        console.log(comment, comment_id);
        removeHTMLElement(comment);
    }
    return data;
}