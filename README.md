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

5. Create Course Service
    1. Generate >> ng g s /services/course
    2. Generate >> ng g s /services/user
    3. Add getAll methods to return the dummy data in both services
    6. Create Home component
        1. Generate >> ng g c /components/pages/home
        2. Add ts
        3. Add html
        4. Add css