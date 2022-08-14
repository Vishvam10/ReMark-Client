const { remarkGlobalData } = require("./global");
const { BASE_API_URL } = require("./constants");
const { removeHTMLElement } = require("./utils/dom_operations");
const { showAlert } = require("./alert"); 
const { renderComment } = require("./render");


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
        renderComment(comment=comment, include_actions=true);
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
        const content_id = data["comment_id"] + "message";
        const contentEle = document.getElementById(`${content_id}`);
        contentEle.textContent = data["content"];
        showAlert("SUCCESS", "Comment edited successfully !");
        contentEle.contentEditable = false;
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
        document.getElementById(`${bodyData["comment_id"]}upvotes`).textContent = data["comment_upvotes"];
        document.getElementById(`${bodyData["comment_id"]}downvotes`).textContent = data["comment_downvotes"];
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
        removeHTMLElement(comment);
        const deleteCommentModal = document.getElementById("remark_delete_comment_modal");
        if(deleteComment) {
            removeHTMLElement(deleteCommentModal);
        }
        showAlert("SUCCESS", "Comment deleted successfully !")
    } else {
        showAlert("ERROR", "Something went wrong")
    }
    return data;
}

module.exports = {
    createComment,
    editComment,
    updateCommentVote,
    deleteComment
}