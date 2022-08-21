# ReMark Client

Remark is a lightweight and an easy to use Javascript library for annotating websites. It is written in pure vanilla `Javascript`, `HTML5` and `CSS3`. The bundling is done using `parcel (v2)` with `babel` transpilation and code minification is taken care by `terser`.

To start using `remark`, please visit this [link](https://github.com/Vishvam10/ReMark-Admin) to guide you through the process.

<br>

# Basic Setup


Clone the project
```bash
  git clone ...
```

Go to the project directory
```bash
  cd my-project
```

Install the required dependencies using either `npm` or `yarn`
```
  npm install 
  OR
  yarn install
```

<br>


# Testing 

The frontend testing is done using `Jest`. For now only the unittests are covered. Higher order tests will be written in the future. Apart from testing APIs, functions and methods, there are also tests related to DOM manipulation. This is taken care by the `jsdom` environment. Tests that use `jsdom` have the following piece of code on top of the file :

```
/**
 * @jest-environment jsdom
*/
```

**IT IS NOT A COMMENT. DO NOT REMOVE IT**

If there are any DOM related errors, please try installing `jsdom` again via :

```
  npm install jsdom
  OR
  yarn add jsdom
```

API testing is done using the `jest-fetch-mock` package. If it is missing, kindly install it using :

```
  npm install --dev jest-fetch-mock
  OR
  yarn add --dev jest-fetch-mock
```

Once all te required packages are setup :

- To run all tests at once :
  ```
    npm run test
    OR
    yarn run test
  ```
- To run a particular file :
  ```
    npm run test -- method_ValidateAuthority.test.js
    OR
    yarn run test -- method_ValidateAuthority.test.js
  ```
- To run a particular test : (Not recommended since their might be dependencies)
  ```
    npm run test -t "name_of_the_test"
    OR
    yarn run test -t "name_of_the_test"
  ```

<br>

# Building

<br>

To build the app, run :
```
  npm run build
  OR
  yarn run build
```

**NOTE** : There might be warnings related to `.babelrc` file. This is because I have used `babel` for transpilation which is required for `jest`. And the configuration is not suited to the parcel babel plugin. **One can ignore the error but the build time will be a bit slower**. The `.babelrc` file can be temporarily removed as well while building the app. But make sure you add it back while testing.

<br>

# Features 

- ✅ **Works on any static site and delivers a good result on interactive components like popups, slideshows, hovering cards, etc.**
- ✅ Works on various HTML elements like :
 `<div>`, `<span>`, `<button>`, `<h1> ... <h6>`, `<img>`, `<svg>`, `<nav>`, `<a>`, `<table>`, `<input>`, `<label>`, `<form>`, `<audio>`, `<video>`
- ✅ Easy to use and customize*
- ✅ **Admins** can Create, Update, Delete and Resolve Annotations
- ✅ Anyone with a valid username and comment on the annotation
- ✅ Commnet Management (With **CRUD Operations**, **Upvotes and Downvotes** and **Moderation***)


**NOTE** : * Customization include dark theme, brand color, etc. and moderation is implemented in the backend. Fronted integration will be done in the future 

<br>

# Major Todo

- [x] **Dynamic Checking for Annotations** : When XPath fails

- [x] **Proper error handling :** Currently the code just logs the error. Need to improve the error modal component and create a generalized error handler

- [x] **Update CSS :** Currently, the CSS code has duplications. Need to use `:root` to declare global stylings. This includes `colors`, `fonts`, `shadows`, etc. Have to make sure not to override the website's styling

- [x] **Convert to ES6 Syntax :** Currently, we have to include multiple `script` tags. Need to convert all files to ES6 modules 

- [x] **Bundle with `Parcel`** :
  - [x] Code Refactoring

- [ ] **Testing** :
  - Unit Tests :   
    - [x] `index`
      - [x] `registerScripts()`
      - [x] `registerStyles()`
    - [x] `alerts`
    - [ ] `utils` :
      - [x] `validations`
      - [ ] `XPathOperations`
      - [x] `DOMOperations` (`HighlightElements() method is left`)
    - [x] `apiFactory`
    - [x] APIs :
      - [x] AnnotationAPI
      - [x] CommentAPI
  - Integration Tests : (**OPTIONAL**)
    - [ ] `contextmenu`
    - [ ] `render`
    - [ ] `handlers`

<br>

# Minor Todo

- [x] Update DOM dynamically
- [x] Fix the login form
- [x] Add signup form
- [x] Implement upvote and downvotes
- [x] Implement EDIT comments
- [x] Fix the styling when resolved button is clicked

<br>

# Limitations

All though it can work with interactive components, there are cases where it **fails to annotate dynamic content**. For example, say there is a website that shows the whether of a location **given by the user**. Remark can annotate the weather modal component of (say) New York alone but upon rendering a completely new data, the annotation is lost (though it is present in the DB)

> **Workaround** : Instead of annotating the dynamically changing child container :
>  - Annotate the parent container or
>  - Annotate an element that triggers the change or
>  - In the worst case, annotate the nearest static element

Dynamic content (the ones that are received from the server) are hard to annotate in general. Remark uses 4+ different checks to get the annotated DOM elemets. These include : `html_id` check, `html_class` check, `html_node_xpath` check (This was particularly hard to implement), `html_tag` + `html_text_content` check. Dynamic content have usually breaks all the checks because, well, it is dynamic. **Note that dynamic content that actually passes one of the checks are rendered properly. It is only those that fail all of them are not rendered.** Usually, the `html_id` remains the same. So, there are cases where the annotations are rendering properly. But to be in the same side, please follow the workarounds. 
