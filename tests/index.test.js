/**
 * @jest-environment jsdom
*/

import { registerScripts, registerStyles } from "../src/js/index";


test('INDEX : Register CSS Styles ', () => {
    registerStyles()
    const ele = document.getElementById("remark_global_styles");
    expect(ele).not.toBeNull();
    expect(ele.id).toEqual("remark_global_styles")
});

test('INDEX : Register icon fonts ', () => {
    registerScripts()
    const ele = document.getElementById("remark_global_script_ionicons");
    expect(ele).not.toBeNull();
    expect(ele.id).toEqual("remark_global_script_ionicons")
});