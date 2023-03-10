export const sample_students: any[] = [
  {id:"0", firstName:"David", lastName:"Garcia", email:"david.garcia@gmail.com", password:"12345",address:"Dallas", isAdmin:false, isMentor:false},
  {id:"1", firstName:"Jane", lastName:"Smith", email:"jane.smith@gmail.com", password:"12345",address:"New York City", isAdmin:false, isMentor:false},
  {id:"2", firstName:"John", lastName:"Doe", email:"johndoe@gmail.com", password:"12345", address:"Los Angeles", isAdmin:false, isMentor:false},
  {id:"3", firstName:"Mike", lastName:"Johnson", email:"mikej@gmail.com", password:"12345", address:"Chicago", isAdmin:false, isMentor:false},
  {id:"4", firstName:"Emily", lastName:"Williams", email:"emilyw@gmail.com", password:"12345", address:"Houston", isAdmin:false, isMentor:false},
  {id:"5", firstName:"Jessica", lastName:"Jones", email:"jessica.jones@gmail.com", password:"12345", address:"Phoenix", isAdmin:false, isMentor:false},
  {id:"6", firstName:"Jacob", lastName:"Brown", email:"jacobb@gmail.com",  password:"12345", address:"Philadelphia", isAdmin:false, isMentor:false},
  {id:"7", firstName:"Nathan", lastName:"Davis", email:"nathan.davis@gmail.com", password:"12345", address:"San Antonio", isAdmin:false, isMentor:false},
  {id:"8", firstName:"Ashley", lastName:"Miller", email:"ashleym@gmail.com", password:"12345", address:"San Diego", isAdmin:false, isMentor:false}
]

export const sample_mentors: any[] = [
  {id:"0", firstName:"Thompson", lastName:"Davayne", email:"Thompson.Davayne@gmail.com", password:"12345", address:"New York", isAdmin:false, isMentor:true},
  {id:"1", firstName:"Alice", lastName:"Johnson", email:"alice.johnson@piano-voice.com", password:"12345", address: "New Jersey", isAdmin:false, isMentor:true},
  {id:"2", firstName:"Bob", lastName:"Williams", email:"bob.williams@math.com", password:"12345", address:"Los Angeles", isAdmin:false, isMentor:true},
  {id:"3", firstName:"Charlie", lastName:"Jones", email:"charlie.jones@programming.com", password:"12345", address:"Chicago", isAdmin:false, isMentor:true},
  {id:"4", firstName:"David", lastName:"Brown", email:"david.brown@history.com", password:"12345", address:"Houston", isAdmin:false, isMentor:true},
  {id:"5", firstName:"Edward", lastName:"Miller", email:"edward.miller@fitness.com", password:"12345", address:"Philadelphia", isAdmin:false, isMentor:true},
  {id:"6", firstName:"Olga", lastName:"Moore", email:"frank.moore@cooking.com", password:"12345", address:"New Port", isAdmin:false, isMentor:true},
  {id:"7", firstName:"George", lastName:"Taylor", email:"george.taylor@design.com", password:"12345", address:"San Francisco", isAdmin:false, isMentor:true},
  {id:"8", firstName:"Henrietta", lastName:"Anderson", email:"henry.anderson@photography.com", password:"12345", address:"Los Angeles", isAdmin:false, isMentor:true}
]

export const sample_users: any[] = sample_mentors.concat(sample_students);

export const sample_courses: any[] = [
  {
      id: "0",
      userId: "0",
      title: "Intro to Data Analysis with Python",
      aboutCourse: "Learn the basics of data analysis and statistical modeling using Python. Topics covered include data cleaning, visualization, and hypothesis testing.",
      aboutUser: "I am a data scientist with 5 years of experience in the industry. I specialize in using Python for data analysis and machine learning.",
      imageUrl: "assets/superprof00.png",
      baseHrate: 30,
      courseLanguages: ["English"],
      courseSubjects: ["Data Science", "Python"],
      firstCourseFree: false,
      favorite: true,
      responseTime: 5,
      stars: 4.5
  },
  {
      id: "1",
      userId: "1",
      title: "Learn Spanish in 30 days",
      aboutCourse: "Learn to speak and understand Spanish in just 30 days. Includes daily lessons and practice activities.",
      aboutUser: "I am a native Spanish speaker with a degree in linguistics. I have experience teaching Spanish to both children and adults.",
      imageUrl: "assets/superprof01.png",
      baseHrate: 20,
      courseLanguages: ["English", "Spanish"],
      courseSubjects: ["Language Learning", "Spanish"],
      firstCourseFree: true,
      favorite: false,
      responseTime: 3,
      stars: 4
  },
  {
      id: "2",
      userId: "2",
      title: "Web Development with React",
      aboutCourse: "Learn to build web applications using React, a popular JavaScript library for building user interfaces.",
      aboutUser: "I am a full-stack developer with experience in building web applications using React, Node.js and MongoDB.",
      imageUrl: "assets/superprof02.png",
      baseHrate: 25,
      courseLanguages: ["English"],
      courseSubjects: ["Web Development", "JavaScript", "React"],
      firstCourseFree: false,
      favorite: true,
      responseTime: 2,
      stars: 5
  },
  {
      id: "3",
      userId: "3",
      title: "SAT Test Prep",
      aboutCourse: "Prepare for the SAT with test-taking strategies, practice tests and personalized feedback.",
      aboutUser: "I am a certified teacher with 10 years of experience in teaching standardized test preparation, including the SAT.",
      imageUrl: "assets/superprof03.png",
      baseHrate: 35,
      courseLanguages: ["English"],
      courseSubjects: ["Test Preparation", "SAT"],
      firstCourseFree: false,
      favorite: false,
      responseTime: 1,
      stars: 4.5
  },
  {
      id: "4",
      userId: "4",
      title: "Drawing and Painting for Beginners",
      aboutCourse: "Learn the basics of drawing and painting, including composition, color theory and brushstrokes.",
      aboutUser:"Alice Bromberek is a professional musician, Soprano Opera singer, and a classical pianist.",
      imageUrl:"assets/superprof04.png",
      baseHrate:40,
      courseLanguages:["Eng","Fr","Arb"],
      courseSubjects:["Singing","Piano","Music Reading","Vocal coach","Musical keyboard"],
      firstCourseFree:false,
      favorite:false,
      responseTime:9,
      stars:5
  },
  {
    id: "5",
    userId: "5",
    title: "Professional Boxing Training",
    aboutCourse: "Learn the basics of professional boxing training, including techniques, conditioning, and strategy.",
    aboutUser: "I am a professional boxer with 10 years of experience competing at the national level. I specialize in training amateur and semi-pro boxers.",
    imageUrl: "assets/superprof05.png",
    baseHrate: 45,
    courseSubjects: ["Boxing"],
    firstCourseFree: false,
    favorite: false,
    responseTime: 3,
    stars: 4.5
  },
  {
    id: "6",
    userId: "6",
    title: "Med School Admissions Strategy",
    aboutCourse: "Learn how to navigate the med school admissions process, including how to write a compelling personal statement and ace the interview.",
    aboutUser: "I am a medical doctor with experience on med school admissions committees. I specialize in helping pre-med students prepare for the admissions process.",
    imageUrl: "assets/superprof06.png",
    baseHrate: 50,
    courseSubjects: ["Medical School Admissions"],
    firstCourseFree: false,
    favorite: true,
    responseTime: 7,
    stars: 5
  },
  {
    id: "7",
    userId: "7",
    title: "Guitar for Beginners",
    aboutCourse: "Learn the basics of playing guitar, including chords, strumming patterns, and simple songs.",
    aboutUser: "I am a professional musician with 10 years of experience playing guitar. I specialize in teaching beginners of all ages.",
    imageUrl: "assets/superprof07.png",
    baseHrate: 30,
    courseSubjects: ["Guitar"],
    firstCourseFree: true,
    favorite: false,
    responseTime: 24,
    stars: 4
  },
  {
    id: "8",
    userId: "8",
    title: "Android App Development",
    aboutCourse: "Learn to build android apps using Java and Android Studio. Topics covered include UI design and data storage.",
    aboutUser: "I am a mobile app developer with experience in building android apps. I specialize in using Java and Android Studio for app development.",
    imageUrl: "assets/superprof08.png",
    baseHrate: 40,
    courseSubjects: ["Mobile App Development", "Android"],
    firstCourseFree: false,
    favorite: false,
    responseTime: 12,
    stars: 4.5
  }]

export const sample_tags:any[] = [
  { name: 'All', count: 9 },
  { name: 'Web Development', count: 1 },
  { name: 'Guitar', count: 1 },
  { name: 'Medical School Admissions', count: 1},
  { name: 'Boxing', count: 1},
  { name: 'Singing', count: 1},
  { name: 'Piano', count: 1},
  { name: 'SAT', count: 1},
  { name: 'Android App Development', count: 1},
  { name: 'Data Science', count: 1},
]



// export const sample_review:Review[] = [
//   {
//     id:"0",
//     courseId:"O",
//     userId:"0",
//     comment:"Perfect! We love his style. He's very nice, patient and easy to understand. We really liked the quizzing during the session to measure competency.",
//     rating:5
//   },
//   {
//     id:"1",
//     courseId:"O",
//     userId:"2",
//     comment:"Perfect! My 11-year old daughter loved him. He was able to help her understand math problems in 1 session that she???s struggled with all semester.",
//     rating:5
//   }]
