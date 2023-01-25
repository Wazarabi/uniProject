## HOW WE CREATED THIS :
0. Vocabulary
    1. Create (file, folder ...)
    2. Add (function, class ...)
    3. Generate (component, service ...)

1. Install dev tools
    1. node
    2. @angular/cli
    3. git

2. Create Angular App
    1. Create project folder : uniProject
    2. Generate Angular app >> ng new eduEx.NG.UI

3. Create Header Component
    1. Generate >> ng g c /components/partials/header
    2. Add HTML
    3. Add CSS

4. Create Models & Mock-Data
    1. Create Shared folder(shared between components & services) @ -> src/app/shared
    2. Create Model folder @ -> shared/models
    3. Create course && user model files @ -> shared/models/course.ts && user.ts
    3. Create mock data file data.ts at --> src/data.ts
        1. Add sample courses/users
    4. Add images to assets @ -> src/assets/

5. Create Course & User Service
    1. Generate >> ng g s /services/course
    2. Generate >> ng g s /services/user
    3. Add getAll methods to return the dummy data in both services
    6. Genrate Home component
        1. Generate >> ng g c /components/pages/home
        2. Add ts
        3. Add html
        4. Add css

6. Add Search 
    1. Add method to course service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
        0. Generate >> ng g c components/partials/search
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css

7. Tags Bar
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Course Service
        1. Add get all tags method
        2. Add get all courses by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        0. Generate >> ng g c components/partials/tags
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
        
8. Course page
    1. Add method to course service
    2. Generate Course Page component
        0. Generate >> ng g c components/pages/course-page
        1. Add route
        2. Add ts
        3. Add html
        4. Add css

9. Cart Service Logic
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate >> ng g s services/cart **IMPORTANT**
    4. Add Cart Button functionnality in Course page
    5. Generate >> ng g c components/pages/cart-page
        1. Add route

10. Cart page and Date Picker
    1. Add ts
    2. Generate the Reusable/Partial component : Title
        1. Generate >> ng g c components/partials/title
        2. Add ts / html / css
    3. Add html
    4. Add ng material date picker to project
        1. npm install @angular/material
        2. app.module.ts file :
        import { MatDatepickerModule } from '@angular/material/datepicker';
        import { MatFormFieldModule } from '@angular/material/form-field';
        import { MatInputModule } from '@angular/material/input';
        import { MatNativeDateModule } from '@angular/material/core';
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
        3. add html + ts & import css : @import "~@angular/material/prebuilt-themes/indigo-pink.css";
    5. Add css
    6. Update header component : inject cartService and subscribe to display real cartQuantity instead of mock data

11. No result found
    1. Generate Not Found reusable components
        0. Generate >> ng g c components/partials/not-found
        1. Add ts
        2. Add html
        3. Add css
    2. Add To Pages
        1. Cart Page
        2. Home Page
        3. Course Page --> in case a bookmarked course is no longer available

12. Basic Express Backend no database
    1. Create backend folder
    2. npm init -y
    3. npm install typescript
    4. Create tsconfig.json + add configs (one time configs)
    5. Create src folder
    6. Create .gitignore
    7. Copy data.ts to backend/src
    8. npm install express cors
    9. Create server.ts
        1. install @types/express & @types/cors
            @types/express is a package that contains TypeScript definitions for the Express.js library. These definitions provide additional information to the TypeScript compiler about the types and properties of the objects and functions exported by the Express.js library. This allows you to use the Express.js library in a TypeScript project with better type checking and IntelliSense support.
        2. Add "hello" GET APIs
    10. npm install nodemon ts-node --save-dev
            if it was JS 2 run the app >> node server.js 
            BUT we using TS soo ts-node is needed.
            nodemon automatically uses ts-node once given a file
    11. Add to package.json
            "scripts": {
                "start": "cd src && nodemon server.ts", ... }
    12. Add all the /api/courses APIs basicaly courseService from UI -> API


13. Connect Front to Back
    1. Add urls.ts to frontend 2 have a single place to manage API urls
    2. Add HttpClientModule
    3. Update course service to make http requests and return Observables
    4. Update code & Subscribe to the courseObservable in :
        1. Home Page 
        2. Course Page
        3. Tags Component
    5. Change Course Page to display on *ngIf="course"

14. Login Page with Client side Validation (no css) && Login API with jwt
    1. Generate component >> ng g c components/pages/login-page
        1. Add to routes
        2. Add ts : FormGroup, FormBuilder ,Validators & submit()
        3. import ReactiveFormsModule in app.module !!
        4. add html (form) --> how about making the repetitive code into partial components ? done 15 || 16
        5. add css
    2. Add Login API
        1. Use Json >> app.use(express.json());
        2. Add sample users in data.ts (everything is of type any for the moment)
        3. Add JsonWebToken >> npm install jsonwebtoken
        4. import jwt from jsonwebtoken in server.ts && install @types/jsonwebtoken
        5. generateToken & return user API "/api/users/login"
        6. Test using postman

15. User Service <3
    1. Generate User Service >> ng g s services/user
        1. Generate User model
        2. Add User Subject but only expose it outside the service as an observable
        3. Add Login Method
            1. Add User Urls constants/urls.ts
            2. Generate IUserLogin interface
            3. add login to user Service http.post(...
               and pipe the result and tap(rxjs) it, tap returns same object so we still return an Observable<User>
            4. Add ngx-toastr
                1. npm install ngx-toastr
                2. Import Module >> import { ToastrModule } from ngx-toastr';
                3. Add styles in angular.json
                    "styles": [..., "node_modules/ngx-toastr/toastr.css", ...
                4. @import '../node_modules/ngx-toastr/toastr.css';
                5. Functionnal toaster & config
                    1. config toaster behavior ToasterModule.forRoot({timeOut:3000, ...})
                    2. complete login fct in userService
                        1. update userSubject.next(user);
                        2. inject toastService.success(...)
            5. User userService.login in submit() LoginPage
               & subscribe to it (login) to route to the returnUrl
            6. stop serving the frontend (cuz modifed angular.json)
            7. cd /frontend && npm start


16. Synchronising the header component
    1. Add Local Storage methods : set & get UserFromLocalStorage
    2. setUserToLocalStorage after successful login & get it by default for userSubject
    3. header userService.userObservable.subscribe && update HTML to display real user name
    4. Hide LogIn from Header once we are loged in
    5. Add Logout Method
    6. Add userService.logout() to Header Component ts && update HTML to display accordingly


17. Create Reusable Components for Text Input & Client side Validation + Add 2 Login Page
    1. Input Container
        1. Generate >> ng g c components/partials/input-container
        2. add ts with label & bgColor Input()
        3. add html
            1. add <ng-content></ng-content>
            2. simplify selector app-input-container
        4. add css
        5. test that everything looks and works exactly as before
    2. Input Validation
        1. Generate >> ng g c components/partials/input-validation
        2. ts Add VALIDATORS_MESSAGES = { x:'errorMsg', ... }
        3. ts Add Input()s -> AbstractControl + when2showBoolean + errorMsg[]
        4. Error msg handling checkValidation()
            1. get error msgs from errors = this.control.errors 
            2. get the keys errorKeys = Object.keys(errors)
            3. this.errorMsg = errorKeys.map(key => VALIDATORS_MESSAGES[key])
        5. Add life cycle hooks
            1. ngOnInit -> is being used to set up two subscriptions: one for the form control's statusChanges and another for its valueChanges. 
            These subscriptions allow the component to react to changes in the form control's status and value.
            2. ngOnChanges -> react to external changes to the showErrorsWhen @Input()
        6. Simplify Selector app-input-validation
        7. Add HTML from login-page and addapt it to @Inputs
    3. Text Input
        1. Generate >> ng g c components/partials/text-input
        2. ts Add Input()s <-- Input()s from *Input Container* && *Input Validation*
        3. Add html just copy from login page
            1. Add formControl getter this.control as FormControl (AbstractControl won't be accepted by the html <input>)
            2. input>formControlName="email" --> input>[formControl]="formControl"
            3. Simplify Selector app-text-input
        4. Add CSS
    4. Default Button
        1. Generate >> ng g c components/partials/default-button
        2. Add component @Input()_s & @Output()
        *#rq:EventEmitter from '@angular/core'; & NOT FROM 'stream'*
        3. Add html
        4. Simplify Selector app-default-button
        5. Add CSS
    5. Test everything in the login page





