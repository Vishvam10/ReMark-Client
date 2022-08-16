/**
 * @jest-environment jsdom
*/

import fetchMock from "jest-fetch-mock";
import { DELETE_COMMENT_MODAL } from "../../../../src/js/components";
import { deleteComment } from "./../../../../src/js/commentAPI";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("API : COMMENT API :", () => {
    
    it("Delete comment method without error", async () => {
    
        // Setup
        const comment_id = "e847ad977fa14cff8e6fcc102db365c5";
         
        const comment_markup = `
            <div class="remark_annotation" id="${comment_id}">
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
                    <p id="asdpfmpqwalasdf">Testing</p>
                </div>
                <div class="remark_annotation_vote">
                    <span class="remark_annotation_vote_option">
                        <p id="asfasdf">0</p>
                        
                        <ion-icon name="arrow-up-outline" id="asdfasdfasdfuasdfasd"></ion-icon>
                    </span>
                    <span class="remark_annotation_vote_option">
                        <p id="asdfasdf23">0</p>
                        
                        <ion-icon name="arrow-down-outline" id="dsfm03jasdf"></ion-icon>
                    </span>
                </div>
            </div>
        `

        document.body.insertAdjacentHTML("afterbegin", comment_markup);

        const delete_modal_markup = DELETE_COMMENT_MODAL(comment_id);
    
        document.body.insertAdjacentHTML("beforeend", delete_modal_markup);
    
        const return_value = {
            "comment_id": "36308e471c8f4ea280f3f2d3564ef4cb",
            "message": "Comment deleted successfully",
            "status": 200
        }
    
        fetch.mockResponseOnce(JSON.stringify(return_value));
        const data = await deleteComment(comment_id);
    
        expect(data).not.toBeNull();
        expect(data.message).toEqual("Comment deleted successfully");
        expect(data.status).toEqual(200);
        
        const comment = document.getElementById(comment_id);
        expect(comment).toBeNull();
    
        const delete_modal_check = document.getElementById("remark_delete_annotation_modal");
        expect(delete_modal_check).toBeNull();
    
        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    });
    
    it("Delete comment method with error", async () => {
    
        // Setup
        const comment_id = "e847ad977fa14cff8e6fcc102db365c5";
         
        const return_value = {
            "error_message": "Something went wrong",
            "status": 400
        }
    
        fetch.mockResponseOnce(JSON.stringify(return_value));
        const data = await deleteComment(comment_id);
    
        expect(data).not.toBeNull();
        expect(data.status).not.toEqual(200);
    
        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    });

})


