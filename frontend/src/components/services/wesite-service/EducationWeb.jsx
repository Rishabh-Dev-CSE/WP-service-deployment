import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "EduPro", 
    description: "A complete education website template for schools and online courses. Features classes, assignments, and progress tracking.", 
    rating: "(4.6/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/edupro.png",
    image: "/webthumbnails/healthimages/edupro1.png"
  },
  { 
    name: "LearnX", 
    description: "Designed for e-learning platforms. Offers interactive lessons, quizzes, and video tutorials.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/learnx.png",
    image: "/webthumbnails/healthimages/learnx1.png"
  },
  { 
    name: "ScholarHub", 
    description: "A student-focused website for academic resources and course management.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/scholarhub.png",
    image: "/webthumbnails/healthimages/scholarhub1.png"
  },
  { 
    name: "AcademyPlus", 
    description: "A modern education website for institutes. Includes schedules, assignments, and notifications.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/academyplus.png",
    image: "/webthumbnails/healthimages/academyplus1.png"
  },
  { 
    name: "StudyMate", 
    description: "A collaborative learning website template. Students can share notes, discuss topics, and track progress.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/studymate.png",
    image: "/webthumbnails/healthimages/studymate1.png"
  },
  { 
    name: "BrightEdu", 
    description: "An education platform with bright and engaging design. Perfect for online learning and tutoring.", 
    rating: "(4.6/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/brightedu.png",
    image: "/webthumbnails/healthimages/brightedu1.png"
  },
  { 
    name: "KidsLearn", 
    description: "A fun and interactive website for children’s education. Includes games, lessons, and progress tracking.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/kidslearn.png",
    image: "/webthumbnails/healthimages/kidslearn1.png"
  },
  { 
    name: "SkillBoost", 
    description: "A skill-building website template for professional courses. Focuses on practical learning and certifications.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/skillboost.png",
    image: "/webthumbnails/healthimages/skillboost1.png"
  },
  { 
    name: "SmartSchool", 
    description: "A school management website template. Covers attendance, homework, events, and parent communication.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/smartschool.png",
    image: "/webthumbnails/healthimages/smartschool1.png"
  },
  { 
    name: "UniPro", 
    description: "A university website template with course listings, events, and campus resources.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/appthumbnails/healthimages/unipro.png",
    image: "/webthumbnails/healthimages/unipro1.png"
  }
];

export default function EducationWebsites() {
  return (
    <>
      <Helmet>
        <title>Education Website Templates | E-Learning & Online Course UI Kits 2025</title>
        <meta
          name="description"
          content="Best Education Website Templates for e-learning, online classes, tutoring, and exam preparation. Modern UI kits for schools & universities."
        />
        <meta
          name="keywords"
          content="Education website templates, e-learning UI, online course websites, tutoring website design, exam preparation websites, school management websites"
        />
        <meta property="og:title" content="Education Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Education & E-Learning Website Templates for online courses, schools, and tutoring."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="WebTemplateHub" />
        <meta name="author" content="WebTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Education & E-Learning Websites"
        templates={templates}
        color="from-purple-600 to-violet-500"
      />
    </>
  );
}
