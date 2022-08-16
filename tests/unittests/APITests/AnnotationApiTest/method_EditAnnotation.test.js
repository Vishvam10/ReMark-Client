/**
 * @jest-environment jsdom
*/

import fetchMock from "jest-fetch-mock";
import { editAnnotation } from "../../../src/js/annotationAPI";
import { remarkGlobalData } from "../../../src/js/global";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('API : ANNOTATION API : Edit annotation method without error', () => {

    beforeAll(() => {
        remarkGlobalData["api_key"] = "fasdfasdfqi09fi04fq9-20i3f0q92j4foqire"
        remarkGlobalData["website_id"] = "wsjnfmp0qewfm02j93rkncsd"
        
        const edit_annotation_modal_markup = `
            <div class="remark_standard_modal" id="remark_edit_annotation_modal">
                <div class="remark_standard_modal_header">
                    <h3 class="remark_standard_modal_title">Edit Annotation</h3>
                    <div class="remark_standard_modal_actions">
                        <div class="remark_standard_modal_close_btn">
                            <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                        </div>
                    </div>
                </div>
                <div class="remark_standard_modal_body">
                    <form id="editAnnotationForm" class="remark_form" data-annotation_id="asfasidjf0qwjefpasidf">
                        <div class="remark_form_fields">
                            <label for="old_name" class="remark_form_label">Old Annotation Name</label>
                            <input type="text" name="old_name" class="remark_form_input" id="old_name" value="Testing" readonly disabled>
                        </div>
                        <div class="remark_form_fields">
                            <label for="new_name" class="remark_form_label">New Annotation Name</label>
                            <input type="text" name="new_name" class="remark_form_input" id="new_name">
                        </div>
                        <div class="remark_form_fields">
                            <label for="old_tags" class="remark_form_label">Old Tags ( Comma Separated )</label>
                            <input type="text" name="old_tags" class="remark_form_input" id="old_tags" value="tag1,tag2,tag3" readonly disabled>
                        </div>
                        <div class="remark_form_fields">
                            <label for="new_tags" class="remark_form_label">New Tags ( Comma Separated )</label>
                            <input type="text" name="new_tags" class="remark_form_input" id="new_tags">
                        </div>
                        <div class="remark_form_fields">
                            <label for="annotation_id" class="remark_form_label</label>
                            <input type="text" name="annotation_id" class="remark_form_input" value="asfasidjf0qwjefpasidf" readonly>
                        </div>
                        <div class="remark_form_fields">
                            <button type="button"  class="remark_standard_button" id="remark_edit_annotation_button">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        `
        document.body.insertAdjacentHTML("afterbegin", edit_annotation_modal_markup)
    });
   
    it("Edit only name", async () => {

        const bodyData = {
            "new_name": "asfasdf",
            "new_tags": "",
            "action_type": "edit_name",
            "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a"
        }
    
        const return_value = {
            "message": "Annotation edited successfully !",
            "status": 201
        }
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await editAnnotation(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.message).toEqual(return_value["message"]);
        expect(data.status).toEqual(201);
    
        const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
        expect(edit_modal_check).toBeNull();

        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    
    });
    
    it("Edit only tags", async () => {

        const bodyData = {
            "new_name": "",
            "new_tags": "tag1,test1",
            "action_type": "edit_tag",
            "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a"
        }
    
        const return_value = {
            "message": "Annotation edited successfully !",
            "status": 201
        }
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await editAnnotation(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.message).toEqual(return_value["message"]);
        expect(data.status).toEqual(201);
    
        const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
        expect(edit_modal_check).toBeNull();
    
        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
        
    });
    
    it("Resolve annotation", async () => {
        const resolve_button_markup = 
        `
            <button class="remark_standard_button remark_resolve_button" id="remark_annotation_resolve_button">
                RESOLVE
            </button>
        `        
        document.body.insertAdjacentHTML("afterbegin", resolve_button_markup);

        const bodyData = {
            "new_resolved": "",
            "action_type": "edit_resolved",
            "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a"
        }
    
        const return_value = {
            "message": "Annotation resolved successfully !",
            "status": 201
        }
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await editAnnotation(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.message).toEqual(return_value["message"]);
        expect(data.status).toEqual(201);
    
        const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
        expect(edit_modal_check).toBeNull();
    
        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);

        const btn = document.getElementById("remark_annotation_resolve_button");
        const check = btn.className.includes("remark_unresolve_button")
        expect(check).toEqual(true);
    });

    it("Unresolve annotation", async () => {
        const resolve_button_markup = 
        `
            <button class="remark_standard_button remark_resolve_button remark_unresolve_button" id="remark_annotation_resolve_button">
                UNRESOLVE
            </button>
        `        
        document.body.insertAdjacentHTML("afterbegin", resolve_button_markup);

        const bodyData = {
            "new_resolved": "",
            "action_type": "edit_resolved",
            "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a"
        }
    
        const return_value = {
            "message": "Annotation unresolved successfully !",
            "status": 201
        }
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await editAnnotation(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.message).toEqual(return_value["message"]);
        expect(data.status).toEqual(201);
    
        const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
        expect(edit_modal_check).toBeNull();
    
        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);

        const btn = document.getElementById("remark_annotation_resolve_button");
        const check = btn.className.includes("remark_unresolve_button");
        expect(check).toEqual(false);
    });

    it("Edit both name and tags", async () => {

        const bodyData = {
            "new_name": "new_test1",
            "new_tags": "tag1,test1,test2",
            "action_type": "edit_tag,edit_name",
            "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a"
        }
    
        const return_value = {
            "message": "Annotation edited successfully !",
            "status": 201
        }
    
        fetch.mockResponse(JSON.stringify(return_value));
        const data = await editAnnotation(bodyData);
    
        expect(data).not.toBeNull();
        expect(data.message).toEqual(return_value["message"]);
        expect(data.status).toEqual(201);
    
        const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
        expect(edit_modal_check).toBeNull();
    
        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);

    });
    
});



