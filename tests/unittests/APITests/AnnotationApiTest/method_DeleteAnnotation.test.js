/**
 * @jest-environment jsdom
*/

import fetchMock from "jest-fetch-mock";
import { deleteAnnotation } from "../../../../src/js/annotationAPI";
import { remarkGlobalData } from "../../../../src/js/global";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("API : ANNOTATION API : Delete annotation method without error", async () => {

    // Setup

    const delete_modal_markup = `
        <div class="remark_standard_modal" id="remark_delete_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Delete Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="deleteAnnotationForm" class="remark_form" data-annotation_id="Testingsdfasdfwfdadf" data-annotation_name="Testing" data-xpath='//testing/test1234' data-html_tag="div" data-html_text_content="Testing">
                    <div class="remark_form_fields">
                        <p class="remark_delete_annotation_form_field"> 
                        Are you sure you want to delete this annotation ? 
                        <span class="remark_" style="font-weight: 700;">This can not be undone.</span> 
                        Enter the annotation name to confirm : <span class="remark_" style="font-weight: 700;">Testing</span>
                        </p>
                        <input type="text" name="deleteAnnotationConfirmation" class="remark_form_input" id="deleteAnnotationConfirmation">
                    </div>
                    <div class="remark_form_fields">
                        <button type="button"  class="remark_standard_button remark_delete_button" id="remark_delete_annotation_button">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    `

    document.body.insertAdjacentHTML("beforeend", delete_modal_markup);

    const ele = `
        <div id="test1">
            <p id="test2" class="text">Hello World !</p>
        </div>
    `

    document.body.insertAdjacentHTML("beforeend", ele);

    const bodyData = {
        "node_xpath": "//html[1]/body[1]/div[0]/p[0]",
        "html_tag": "div",
        "html_id": "test1",
        "html_text_content": "Hello World !",
        "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a"
    }

    const return_value = {
        "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a",
        "message": "Annotation deleted successfully",
        "status": 200
    }

    remarkGlobalData["api_key"] = "fasdfasdfqi09fi04fq9-20i3f0q92j4foqire"

    // Test the function
    
    fetch.mockResponse(JSON.stringify(return_value));
    const data = await deleteAnnotation(bodyData);

    expect(data).not.toBeNull();
    expect(data.status).toEqual(200);

    const delete_modal_check = document.getElementById("remark_delete_annotation_modal");
    expect(delete_modal_check).toBeNull();

    const chosen_ele = document.getElementById(bodyData["html_id"]);

    const check = chosen_ele.className.includes("highlight_element_strong")
    expect(check).toEqual(false);

});


