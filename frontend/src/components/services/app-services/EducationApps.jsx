import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "EduPro", 
    description: "A complete education app template for schools and online courses. Features classes, assignments, and progress tracking.", 
    rating: "(4.6/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/edupro.png" 
  },
  { 
    name: "LearnX", 
    description: "Designed for e-learning platforms. Offers interactive lessons, quizzes, and video tutorials.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/learnx.png" 
  },
  { 
    name: "ScholarHub", 
    description: "A student-focused app for academic resources and course management.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/scholarhub.png" 
  },
  { 
    name: "AcademyPlus", 
    description: "A modern education app for institutes. Includes schedules, assignments, and notifications.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/academyplus.png" 
  },
  { 
    name: "StudyMate", 
    description: "A collaborative learning app template. Students can share notes, discuss topics, and track progress.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/studymate.png" 
  },
  { 
    name: "BrightEdu", 
    description: "An education platform with bright and engaging design. Perfect for online learning and tutoring.", 
    rating: "(4.6/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/brightedu.png" 
  },
  { 
    name: "KidsLearn", 
    description: "A fun and interactive app for children’s education. Includes games, lessons, and progress tracking.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/kidslearn.png" 
  },
  { 
    name: "SkillBoost", 
    description: "A skill-building app template for professional courses. Focuses on practical learning and certifications.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/skillboost.png" 
  },
  { 
    name: "SmartSchool", 
    description: "A school management app template. Covers attendance, homework, events, and parent communication.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/smartschool.png" 
  },
  { 
    name: "UniPro", 
    description: "A university app template with course listings, events, and campus resources.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/unipro.png" 
  },
  { 
    name: "KnowledgeBase", 
    description: "An all-in-one knowledge app. Perfect for e-learning, reference materials, and tutorials.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/knowledgebase.png" 
  },
  { 
    name: "StudyZone", 
    description: "A study-focused app with learning modules, practice tests, and progress tracking.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/studyzone.png" 
  },
  { 
    name: "TeachEase", 
    description: "A teacher-friendly app template. Helps manage classes, assignments, and student communication.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/teachease.png" 
  },
  { 
    name: "Learnify", 
    description: "A mobile-friendly e-learning platform. Offers video lectures, quizzes, and performance insights.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/learnify.png" 
  },
  { 
    name: "SkillGrow", 
    description: "Designed for personal and professional skill development. Tracks learning milestones and achievements.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/skillgrow.png" 
  },
  { 
    name: "TutorHub", 
    description: "A tutoring app template connecting students with tutors. Includes scheduling and messaging features.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/tutorhub.png" 
  },
  { 
    name: "EduPrime", 
    description: "A premium educational app template. Ideal for online courses, workshops, and skill programs.", 
    rating: "(4.6/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/eduprime.png" 
  },
  { 
    name: "CourseMate", 
    description: "A course management app for students and educators. Includes modules, quizzes, and certificates.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/coursemate.png" 
  },
  { 
    name: "ExamPrep", 
    description: "Focused on exam preparation. Offers practice tests, tips, and study schedules.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/examprep.png" 
  },
  { 
    name: "GeniusSchool", 
    description: "A modern school app template with digital classrooms, learning resources, and progress tracking.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/geniusschool.png" 
  }
];


export default function EducationApps() {
  return (
    <>
      <Helmet>
        <title>Education App Templates | E-Learning & Online Course UI Kits 2025</title>
        <meta
          name="description"
          content="Best Education App Templates for e-learning, online classes, tutoring, and exam preparation. Modern UI kits for schools & universities."
        />
        <meta
          name="keywords"
          content="Education app templates, e-learning UI, online course apps, tutoring app design, exam preparation apps, school management apps"
        />
        <meta property="og:title" content="Education App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Education & E-Learning App Templates for online courses, schools, and tutoring."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Education & E-Learning Apps"
        templates={templates}
        color="from-purple-600 to-violet-500"
      />
    </>
  );
}
