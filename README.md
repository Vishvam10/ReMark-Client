# ReMark Client

This is the ReMark client which is written in pure Vanilla JS. The styling is taken care by HTML5 and CSS3. 

<br>

# Major Todo

- [x] **Dynamic Checking for Annotations** : When XPath fails

- [ ] **Create a class to initialize and store globals**

- [ ] ~~**Create a function to make overlays**~~

- [x] **Proper error handling :** Currently the code just logs the error. Need to improve the error modal component and create a generalized error handler

- [x] **Update CSS :** Currently, the CSS code has duplications. Need to use `:root` to declare global stylings. This includes `colors`, `fonts`, `shadows`, etc. Have to make sure not to override the website's styling

- [x] **Convert to ES6 Syntax :** Currently, we have to include multiple `script` tags. Need to convert all files to ES6 modules 

- [x] **Bundle with `Parcel`** :
  - [x] Code Refactoring

- [ ] **Testing** :
  - Unit Tests :   
    - [ ] `index`
      - [x] `registerScripts()`
      - [x] `registerStyles()`
      - [ ] `remark_init()`
      - [ ] `remark_destroy()` ( **TODO** )
    - [x] `alerts`
    - [ ] `utils` :
      - [ ] `validations`
      - [ ] `XPathOperations`
      - [x] `DOMOperations` (`HighlightElements() method left`)
    - [ ] `apiFactory`
    - [ ] APIs :
      - [ ] AnnotationAPI
      - [ ] CommentAPI
    - [ ] `contextmenu`
  - Integration Tests :
    - [ ] `render`
    - [ ] `handlers`

<br>

# Minor Todo

- [x] Update DOM dynamically
- [x] Fix the login form
- [x] Add signup form
- [x] Implement upvote and downvotes
- [x] Implement EDIT comments