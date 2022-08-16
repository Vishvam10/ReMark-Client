/**
 * @jest-environment jsdom
*/

import fetchMock from "jest-fetch-mock";
import { editComment } from "../../../../src/js/commentAPI";

fetchMock.enableMocks();

// Not checking contenteditable property as jsdom
// does not support it

describe("API : COMMENT API :", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("API : COMMENT API : Edit comment method without error", async () => {
    
        // Setup

        const bodyData = {
          "user_id": "4fa8e53790154685b993fe901aaf95bb",
          "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
          "new_content": "Edited Testing",
          "new_content_html": ""
        }
        
        const return_value = {
            "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
            "annotation_id": "9a8e7508ae824de5b41afa1b38344c4c",
            "content": "Edited Testing",
            "content_html": "",
            "parent_node": null,
            "upvotes": 0,
            "downvotes": 0,
            "mod_required": false,
            "created_at": "Tue, 16 Aug 2022 05:39:54 -0000",
            "updated_at": "Tue, 16 Aug 2022 05:44:14 -0000",
            "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
            "created_by": "Testing"
        }

        const testing_markup = `
          <div class="remark_annotation_user_message">
              <p id="${bodyData["comment_id"]}message">Testing</p>
          </div>
        `
        document.body.insertAdjacentHTML("beforeend", testing_markup);
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await editComment(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.content).toEqual(bodyData["new_content"]);
    
    });

    it("API : COMMENT API : Edit comment method with error", async () => {
    
        // Setup
 
        const bodyData = {
          "user_id": "4fa8e53790154685b993fe901aaf95bb",
          "comment_id": "e847ad977fa14cff8e6fcc102db365c5",
          "new_content": "",
          "new_content_html": ""
        }
        
        const return_value_1 = {
          "error_message": "Content is required",
          "status": 400
        }
        const return_value_2 = {
          "error_message": "Something went wrong !",
          "status": 409
        }

        const testing_markup = `
          <div class="remark_annotation_user_message">
              <p id="${bodyData["comment_id"]}message">Testing</p>
          </div>
        `
        document.body.insertAdjacentHTML("beforeend", testing_markup);

        // Test the function
    
        fetch.mockResponse(JSON.stringify(return_value_1));
        const data1 = await editComment(bodyData);
    
        expect(data1).not.toBeNull();
        expect(data1.status).toEqual(400);

        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
        fetch.mockResponse(JSON.stringify(return_value_2));
        const data2 = await editComment(bodyData);
    
        expect(data2).not.toBeNull();
        expect(data2.status).toEqual(409);

        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
    });

   
})



