//_ COMMENTS


//- 0. Design Related

// const annotationActions = document.querySelectorAll(".annotation_actions");

// function toggleAnnotationActions(ele) {
//     ele
// }

// Array.from(annotationActions).forEach((ele) => {
//     // console.log(ele);
//     ele.addEventListener("click", (e) => {
//         e.preventDefault();
//         toggleAnnotationActions(ele)
//     })
// })



//- 1. Handling Submit Event

const inp = document.getElementById("comment_input");
const inp_submit = document.getElementById("content_input_submit")
const op = document.getElementById("sample_output")

inp_submit.addEventListener("click", (e) => {
    e.preventDefault();
    const content = inp.value;
    console.log(content);
    const content_html = parseMarkdown(content)
    console.log(content_html);
});