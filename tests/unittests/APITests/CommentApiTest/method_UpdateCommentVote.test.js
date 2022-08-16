/**
 * @jest-environment jsdom
*/

import fetchMock from "jest-fetch-mock";
import { updateCommentVote } from "../../../../src/js/commentAPI";

fetchMock.enableMocks();

// Not checking contenteditable property as jsdom
// does not support it

describe("API : COMMENT API :", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("Upvote comment method without error", async () => {
    
        // Setup

        const bodyData = {
            "user_id": "4fa8e53790154685b993fe901aaf95bb",
            "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
            "action_type": "upvote"
        }
        
        const comment_id = bodyData["comment_id"];
        const upvotes_id = `${comment_id}upvotes`;
        const downvotes_id = `${comment_id}downvotes`;
        const initial_upvotes = 0;
        
        const return_value = {
            "comment_downvotes": 0,
            "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
            "comment_upvotes": initial_upvotes + 1,
            "message": "Upvoted successfully",
            "status": 200
        }
        
        
        const comment_markup = `
            <div class="remark_annotation" id="${bodyData["comment_id"]}">
                <div class="remark_annotation_header">
                    <div class="remark_annotation_user_profile">
                        <div class="remark_annotation_user_details">
                            <h4 class="remark_annotation_user_username">
                                Test
                            </h4>
                            <span class="remark_annotation_user_last_modified">
                                Modified On : Test
                            </span>
                        </div>
                    </div>
                </div>
                <div class="remark_annotation_user_message">
                    <p id="${bodyData["content_id"]}">Testing</p>
                </div>
                <div class="remark_annotation_vote">
                    <span class="remark_annotation_vote_option">
                        <p id="${upvotes_id}">${initial_upvotes}</p>
                        
                        <ion-icon name="arrow-up-outline" id="${comment_id}upvote"></ion-icon>
                    </span>
                    <span class="remark_annotation_vote_option">
                        <p id="${downvotes_id}">0</p>
                        
                        <ion-icon name="arrow-down-outline" id="${comment_id}downvote"></ion-icon>
                    </span>
                </div>
            </div>
        `

        document.body.insertAdjacentHTML("afterbegin", comment_markup);
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await updateCommentVote(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.status).toEqual(200);
        expect(data.message).toEqual("Upvoted successfully");

        const ele = document.getElementById(`${upvotes_id}`);
        const check = parseInt(ele.textContent) > initial_upvotes && parseInt(ele.textContent) == return_value["comment_upvotes"];

        expect(check).toEqual(true);

        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
    });

    it("Upvote comment method with error (already upvoted)", async () => {
    
        // Setup
 
        const bodyData = {
          "user_id": "4fa8e53790154685b993fe901aaf95bb",
          "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
          "new_content": "",
          "new_content_html": ""
        }
        
        const return_value = {
            "error_message": "Already upvoted",
            "status": 400
        }

        fetch.mockResponse(JSON.stringify(return_value));
        const data = await updateCommentVote(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.status).toEqual(400);
        expect(data.error_message).toEqual("Already upvoted");

        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
    });

    it("Downvote comment method without error", async () => {
    
        // Setup

        const bodyData = {
            "user_id": "4fa8e53790154685b993fe901aaf95bb",
            "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
            "action_type": "downvote"
        }

        const comment_id = bodyData["comment_id"];
        const upvotes_id = `${comment_id}upvotes`;
        const downvotes_id = `${comment_id}downvotes`;
        const initial_downvotes = 0;
        
        
        const return_value = {
            "comment_downvotes": initial_downvotes + 1,
            "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
            "comment_upvotes": 0,
            "message": "Downvoted successfully",
            "status": 200
        }

        const comment_markup = `
            <div class="remark_annotation" id="${bodyData["comment_id"]}">
                <div class="remark_annotation_header">
                    <div class="remark_annotation_user_profile">
                        <div class="remark_annotation_user_details">
                            <h4 class="remark_annotation_user_username">
                                Test
                            </h4>
                            <span class="remark_annotation_user_last_modified">
                                Modified On : Test
                            </span>
                        </div>
                    </div>
                </div>
                <div class="remark_annotation_user_message">
                    <p id="${bodyData["content_id"]}">Testing</p>
                </div>
                <div class="remark_annotation_vote">
                    <span class="remark_annotation_vote_option">
                        <p id="${upvotes_id}">0</p>
                        
                        <ion-icon name="arrow-up-outline" id="${comment_id}upvote"></ion-icon>
                    </span>
                    <span class="remark_annotation_vote_option">
                        <p id="${downvotes_id}">${initial_downvotes}</p>
                        
                        <ion-icon name="arrow-down-outline" id="${comment_id}downvote"></ion-icon>
                    </span>
                </div>
            </div>
        `

        document.body.insertAdjacentHTML("afterbegin", comment_markup);

    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await updateCommentVote(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.status).toEqual(200);
        expect(data.message).toEqual("Downvoted successfully");

        const ele = document.getElementById(`${downvotes_id}`);
        const check = parseInt(ele.textContent) > initial_downvotes && parseInt(ele.textContent) == return_value["comment_downvotes"];

        expect(check).toEqual(true);

        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
    });

    it("Downvote comment method with error (already downvote)", async () => {
    
        // Setup
 
        const bodyData = {
          "user_id": "4fa8e53790154685b993fe901aaf95bb",
          "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
          "new_content": "",
          "new_content_html": ""
        }
        
        const return_value = {
            "error_message": "Already downvoted",
            "status": 400
        }

        fetch.mockResponse(JSON.stringify(return_value));
        const data = await updateCommentVote(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.status).toEqual(400);
        expect(data.error_message).toEqual("Already downvoted");

        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
    });

   
})



