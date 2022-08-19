import { remarkGlobalData } from "./global";
import { BASE_API_URL } from "./constants";
import { removeHTMLElement } from "./utils/dom_operations";
import {showAlert} from "./alert";
import { renderComment } from "./render";
import { DELETE, POST, PUT } from "./apiFactory";


export async function createComment(bodyData) {
    const url = `${BASE_API_URL}/api/comment`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    try {
        const res = await POST(url, bodyData, api_key, auth_token);
        const data = await res.json();
        if (data.status == 201) {
            const comment = data.data;
            renderComment(comment, true, false);
        } else {
            showAlert("ERROR", "Please enter a valid comment !")
        }
        return data;
    } catch(err) {
        console.log("ERROR : ", err);
    }
}

export async function editComment(bodyData) {
    const url = `${BASE_API_URL}/api/comment/${bodyData["comment_id"]}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    try {
        const res = await PUT(url, bodyData, api_key, auth_token);
        const data = await res.json();
        if (data.status_code == 400 || data.status_code == 409) {
            const content_id = bodyData["comment_id"] + "message";
            const contentEle = document.getElementById(`${content_id}`);
            contentEle.contentEditable = false;
            showAlert("ERROR", data["error_message"], 2)
        } else {
            const content_id = bodyData["comment_id"] + "message";
            const contentEle = document.getElementById(`${content_id}`);
            contentEle.textContent = data["content"];
            showAlert("SUCCESS", "Comment edited successfully !");
            contentEle.contentEditable = false;
        }
        return data;
    } catch(err) {
        console.log(err);
        return false;
    }
}

export async function updateCommentVote(bodyData) {
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

export async function deleteComment(comment_id) {
    const url = `${BASE_API_URL}/api/comment/${comment_id}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await DELETE(url, api_key, auth_token);
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
