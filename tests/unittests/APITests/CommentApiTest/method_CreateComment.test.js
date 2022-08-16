/**
 * @jest-environment jsdom
*/

import fetchMock from "jest-fetch-mock";
import { createComment } from "../../../../src/js/commentAPI";

fetchMock.enableMocks();


describe("API : COMMENT API :", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("API : COMMENT API : Create comment method without error", async () => {
    
        // Setup
    
        const bodyData = {
            "content": "Testing",
            "content_html": "",
            "annotation_id": "9a8e7508ae824de5b41afa1b38344c4c",
            "user_id": "4fa8e53790154685b993fe901aaf95bb",
            "user_name": "Testing",
            "parent_node": null
          }
    
        const return_value = {
            "data": {
                "comment_id": "36308e471c8f4ea280f3f2d3564ef4cb",
                "content": "Testing",
                "content_html": "",
                "created_at": "Tue Aug 16 10:49:07 2022",
                "created_by": "Testing",
                "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
                "downvotes": 2,
                "mod_required": false,
                "upvotes": 40
            },
            "message": "New Comment Created",
            "status": 201
        }
    
        // Test the function
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await createComment(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.status).toEqual(201);
    
    });

    it("API : COMMENT API : Create comment method with error", async () => {
    
        // Setup
    
        const bodyData = {
            "content": "Testing",
            "content_html": "",
            "annotation_id": "9a8e7508ae824de5b41afa1b38344c4c",
            "user_id": "4fa8e53790154685b993fe901aaf95bb",
            "user_name": "Testing",
            "parent_node": null
          }
    
        const return_value = {
            "error_message": "Content is required",
            "status": 400
        }
    
        // Test the function
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await createComment(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.status).toEqual(400);

        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
    });

})



