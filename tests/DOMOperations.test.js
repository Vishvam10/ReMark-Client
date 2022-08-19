/**
 * @jest-environment jsdom
*/

import { removeHTMLElement, highlightElements, repositionStart, removeAllExistingModals } from "./../src/js/utils/dom_operations";

import * as components from "./../src/js/components";

test('UTILS/DOM_OPERATIONS : Remove HTML element method ', () => {
    const markup = 
    `
        <div class="hero">
            <div class="hero-text-box">
            <h1 class="heading-primary">
                Sample Heading
            </h1>
            <p id="hero_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta cumque maiores nihil eos at quos perspiciatis aspernatur quod ullam aliquam non assumenda, velit ipsum eaque possimus dolor neque beatae.
            </p>   
        </div>
    `
    document.body.insertAdjacentHTML("beforeend", markup);
    const ele = document.getElementById("hero_description");
    removeHTMLElement(ele);
    const check = document.getElementById("hero_description");
    expect(check).toBeNull();
});

test('UTILS/DOM_OPERATIONS : Reposition start (the REMARK start button) method ', () => {
    const markup = `
        <div class="remark_init_container">
            <span class="remark_init_text">REMARK</span>
            <button type="button" class="remark_standard_button remark_init_button remark_login_button" id="remark_login_button">Start</button>
            <button type="button" class="remark_standard_button remark_init_button" id="remark_start">Start Annotation</button>
        </div>
    `;
    
    document.body.insertAdjacentHTML("afterbegin", markup);
    repositionStart();

    let check = document.querySelector(".remark_init_container").classList.contains("remark_init_container_resize");
    expect(check).not.toBeNull();
    expect(check).toBe(true);
});

test('UTILS/DOM_OPERATIONS : Remove all existing modals method ', () => {
   
    const create_modal_markup = `
        <div class="remark_standard_modal" id="remark_create_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Create Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="createAnnotationForm" class="remark_form">
                    <div class="remark_form_fields">
                        <label for="annotation_name" class="remark_form_label">Annotation Name</label>
                        <input type="text" name="annotation_name" class="remark_form_input" id="annotation_name">
                    </div>
                    <div class="remark_form_fields">
                        <label for="tags" class="remark_form_label">Tags ( Comma Separated )</label>
                        <input type="tags" name="tags" class="remark_form_input" id="tags">
                    </div>
                    <div class="remark_form_fields remark_hide">
                        <label for="node_xpath" class="remark_form_label">Node XPath</label>
                        <input type="node_xpath" name="node_xpath" class="remark_form_input" id="node_xpath" value='//testing/testing123' readonly>
                    </div>
                    <div class="remark_form_fields remark_hide">
                        <label for="html_tag" class="remark_form_label">Selected Node</label>
                        <input type="text" name="html_tag" class="remark_form_input" id="html_tag" value="Testing" readonly>
                    <div class="remark_form_fields remark_hide">
                        <label for="html_class" class="remark_form_label">HTML Node Class</label>
                        <input type="html_class" name="html_class" class="remark_form_input" id="html_class" value="Testing" readonly>
                    </div>
                    <div class="remark_form_fields remark_hide">
                        <label for="html_id" class="remark_form_label">HTML Node ID</label>
                        <input type="html_id" name="html_id" class="remark_form_input" id="html_id" value="Testing" readonly>
                    </div>
                    </div>
                        <div class="remark_form_fields remark_hide">
                        <label for="html_text_content" class="remark_form_label">HTML Text Content </label>
                        <input type="html_text_content" name="html_text_content" class="remark_form_input" id="html_text_content" value="Testing" readonly>
                    </div>
                    <div class="remark_form_fields">
                        <button class="remark_standard_button" type="button" id="remark_create_annotation_button">Create</button>
                    </div>
                </form>
            </div>
        </div>
    `

    const edit_modal_markup = `
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
                <form id="editAnnotationForm" class="remark_form" data-annotation_id="Testing123">
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
                        <input type="text" name="old_tags" class="remark_form_input" id="old_tags" value="Testing" readonly disabled>
                    </div>
                    <div class="remark_form_fields">
                        <label for="new_tags" class="remark_form_label">New Tags ( Comma Separated )</label>
                        <input type="text" name="new_tags" class="remark_form_input" id="new_tags">
                    </div>
                    <div class="remark_form_fields">
                        <label for="annotation_id" class="remark_form_label</label>
                        <input type="text" name="annotation_id" class="remark_form_input" value="Testing" readonly>
                    </div>
                    <div class="remark_form_fields">
                        <button type="button"  class="remark_standard_button" id="remark_edit_annotation_button">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    `

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
                <form id="deleteAnnotationForm" class="remark_form" data-annotation_id="Testing123" data-annotation_name="Testing" data-xpath='//testing/testing123' data-html_tag="Testing" data-html_text_content="Testing">
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

    const sidebar_markup = `
        <div class="remark_standard_sidebar" id="remark_annotations_sidebar">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Testing</h3>
                <div class="remark_standard_modal_actions">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                </div>
            </div>
            <div class="remark_standard_modal_body remark_standard_sidebar_body" id="remark_comments_body">
            </div>
            <div class="remark_annotation_user_input">
                <textarea placeholder="Text input" id="remark_comment_input" data-annotation_id="Testing"}></textarea>
                <span id="remark_create_comment" class="remark_">
                    <ion-icon name="paper-plane-outline" class="remark_"></ion-icon>
                </span>
            </div>
        </div>
    `
    const login_modal_markup = components.LOGIN_MARKUP;

    const signup_modal_markup = components.SIGNUP_MARKUP;

    const context_menu_markup = components.CONTEXT_MENU_MARKUP(true);
    
    let markups = [];
    let checks = []

    markups.push(create_modal_markup, edit_modal_markup, delete_modal_markup,sidebar_markup, login_modal_markup, signup_modal_markup, context_menu_markup);

    for(const m of markups) {
        document.body.insertAdjacentHTML("afterbegin", m);
    };

    removeAllExistingModals();

    checks.push(document.getElementById("remark_create_annotation_modal"), document.getElementById("remark_edit_annotation_modal"), document.getElementById("remark_delete_annotation_modal"), document.getElementById("remark_annotations_sidebar"), document.getElementById("remark_login_modal"), document.getElementById("remark_signup_modal"), document.getElementById("remark_context_menu"))

    for(const c of checks) {
        expect(c).toBeNull();
    }
});

// TODO :  highlightElements() test