import { Course } from "./app/shared/models/course";
import { Review } from "./app/shared/models/review";
import { User } from "./app/shared/models/user";

export const sample_users: User[] = [
  {
    id:"0",
    firstName:"Thompson",
    lastName:"Davayne",
    email:"Thompson.Davayne@gmail.com",
    address:"New York",
    token:"",
    isAdmin:false,
    isMentor:true
  },
  {
    id:"1",
    firstName:"DeDe",
    lastName:"DeDe",
    email:"DeDe@gmail.com",
    address:"MumBai",
    token:"",
    isAdmin:false,
    isMentor:false
  },
  {
    id:"2",
    firstName:"Barb",
    lastName:"Barb",
    email:"Barb@gmail.com",
    address:"Texas",
    token:"",
    isAdmin:false,
    isMentor:false
  },
  {
    id:"3",
    firstName:"Alice",
    lastName:"Black",
    email:"Black.Alice@gmail.com",
    address:"New Jersey",
    token:"",
    isAdmin:false,
    isMentor:false
  }

]

export const sample_review:Review[] = [
  {
    id:"0",
    courseId:"O",
    userId:"1",
    comment:"Perfect! We love his style. He's very nice, patient and easy to understand. We really liked the quizzing during the session to measure competency.",
    rating:5
  },
  {
    id:"1",
    courseId:"O",
    userId:"2",
    comment:"Perfect! My 11-year old daughter loved him. He was able to help her understand math problems in 1 session that she’s struggled with all semester.",
    rating:5
  }
]

export const sample_courses: Course[] = [
{
  id:"0",
  userId:"0",
  title:"Full-Time Math Teacher with 5+ Years Experience gives Reliable Lessons Online",
  aboutCourse:"Have trouble understanding your workload? There are a million tutors, and you have landed on the right page.\nHi, My name's Mr. Thompson, and I have the patience and key to your understanding. I am a dynamic tutor.\nI know your needs change from session to session.\nThat's why I provide 3 different rate prices just for you. I have the notes and recordings that can help you.\nI look forward to your message because I'm a fast responder; Oh, and before I forget the most important thing, you can get answers to questions and concepts from me even outside of scheduled classes.\nLet me make the most intricate concepts easy for you to understand.",
  aboutUser:"I am a full-time teacher at a private institution. I teach math, technical drawing, English language, information technology and human and social biology. It is outstanding work, and I want to expand into teaching online. See you in class.\n\nI remember a time when I started teaching online like it was yesterday.\nI'd teach students in my rooms; then I realized that people could learn from anywhere and anytime – so why not just make the content accessible to them?\nNowadays, there are many ways we have to think about student engagement: one of the most important strategies is to offer it in the form of a flexible learning curriculum.\nThings like blogs, websites, and online forums are all ways to keep students involved while offering them new content that'll enhance their academic experience.\nThis way, I can track what they're good at and where they struggle – stronger students will strengthen weaker ones through peer-to-peer help sessions (or P2P as we call it).\nIt may be one of the most critical skills these students learn: if you've been successful doing something on your own, then it's up to you to pass that knowledge along. It is how the wisdom of crowds works – everyone already has something valuable; now, we need to figure out how to use it.\n\nIt isn't easy to believe that I have been teaching English for over four years now. Some of my students may be surprised, too, since I do not look much older than they are, but then again, I will always be the young teacher who has only finished her A levels a few months earlier.\n\n\nMy experience with Zoom has been an interesting one indeed. Zoom allows me to teach 24 hours a day from home and abroad, giving me more free time, which most teachers do not get enough of. Zoom does allow you to live your life (within reason) while keeping all of the benefits of having a job as an English teacher. It is also somewhat addictive in that when you have seen the amount of free time in your schedule; you tend to overbook yourself, much like with any other freelance job. Zoom allows me to do as I please during my work time and only teach when I want to. Zoom also allows students from anywhere in the world to access you at all hours of the day, and they are usually willing to come online and pay for a lesson at 3 am if that's what they want.\n\nOver several years Zoom has allowed me to develop, grow and learn as an English teacher through challenges given by myself or presented by my students. It has brought out some of the best parts of my personality while helping me overcome many flaws along.",
  imageUrl:"assets/superprof00.png",
  baseHrate:20,
  courseLanguages:["Eng","Fr","Arb"],
  courseSubjects:["Mathematics","Physics","Other sciences","Information Technology","Chemical engineering"],
  firstCourseFree:false,
  favorite:false,
  stars:5
},
{
  id:"1",
  userId:"3",
  title:"Piano and Voice lessons. Jazz harmony, piano composition/ improvisation. Julliard School System (New York). Bilingual Teacher English-Spanish. All levels and ages.",
  aboutCourse:"Hi there! I am Alice. I am a professional musician, soprano Opera singer, and classically trained pianist with a Bachelor of Arts in Music Education and a Master of Arts in Education. I`ve been teaching professionally for over 15 years and right now I am a music teacher at the Chula Vista School of Music, in San Diego, CA. I adapt to my students’ necessities for learning. I know every student is different and I make my music lessons according to what they want to learn. I select material for the lesson individually, according to my student´s wishes and abilities. My teaching method is to focus on whatever type of music the student loves most and build from there. I want my students to reach their musical potential and aspirations while having a wonderful time!\nONLINE PIANO LESSONS\nLearn how to play the piano easily and fast! I will teach you how to do it with a modern method more tailored for adults that want to start playing faster without taking traditional piano lessons and before you know it you will be playing your favorite song. I will take complete beginners to an intermediate level in a very short space of time.\nIf you already know how to play the piano, we will work on improving your technique, increasing your repertoire, challenging yourself with new songs learning the ability to play and interpret music accurately and fluently.\nSheet music at the appropriate level will be provided for every student and my aim is always to build confidence and have fun! All lessons are tailored to suit the individual. I teach all ages and genres of music. I teach online using the Synthesia app which allows you to see the exact keys I'm playing on my keyboard. I provide the music material and books in PDF format.",
  aboutUser:"Alice Bromberek is a professional musician, Soprano Opera singer, and a classical pianist. She had master piano classes and music education under the direction of Juilliard School of Music trained composer and pianist, Professor Cesar de la Cerda. Master advanced vocal training courses with the internationally renowned opera singers Soprano Renata Scotto and Tenor Yordi Ramiro.\nAlice has a Bachelor's Degree in Music Education (WV University, Virginia), Bachelor's Degree in Psychology (Suffield University) and, a Master's Degree in Counseling and Education (WV University, Virginia). Opera Training Certificate from the Metropolitan Opera House of New York.\nShe worked as an Elementary and Middle School Choir director and music teacher at the American School Foundation. Lead soprano at the Immaculata Church, University of San Diego. Taught at UCSD Performing Arts, music theory. She was the musical and theatrical consultant to the Men's Leadership Forum in San Diego for over 3 years.Mainly performances: Performing Opera arias with the Maiden Lane Opera Singer’s, San Francisco, CA. Soprano soloist at the Ensenada Orchestra performing several concerts, CA. She performed the Opera The Magic Flute by Mozart as The Queen of the Night at the National Institute of Fine Arts, Mexico City. The Phantom of the Opera as Christine, Pikes Peak, Colorado Center. She worked as a soprano soloist at the TV SKY Catholic channel. She is being performing Operas and concerts with the LS Opera of San Diego Company and several concerts at the Taci Opera Nights, New York City.\nShe has over 20 years of experience as a bilingual (English/Spanish) music teacher teaching piano, voice and music theory to students of all ages and levels. She works at the Chula Vista Academy of Music in San Diego, CA teaching voice, piano and music theory. ",
  imageUrl:"assets/superprof01.png",
  baseHrate:40,
  courseLanguages:["Eng","Fr","Arb"],
  courseSubjects:["Singing","Piano","Music Reading","Vocal coach","Musical keyboard"],
  firstCourseFree:false,
  favorite:false,
  stars:5
}]
