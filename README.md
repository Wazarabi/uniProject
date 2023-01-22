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
        import {MatDatepickerModule} from '@angular/material/datepicker';
        import {MatFormFieldModule} from '@angular/material/form-field';
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

12. Connect to Backend 1
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
        2. Add "hello" APIs
    10. npm install nodemon ts-node --save-dev
        if it was JS 2 run the app >> node server.js BUT we using TS soo ts-node is needed.
        nodemon automatically uses ts-node once given a file
    11. Add all the /api/courses APIs basicaly courseService from UI -> API


13. Connect to Backend 2
    11. Add urls.ts to frontend
    12. Add HttpClient Module
    13. Update food service
