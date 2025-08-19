import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "BlogMate", 
    description: "Modern blogging website template designed for effortless content creation. Users can share articles, images, and videos seamlessly. Perfect for personal blogs or professional blogging networks.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/blogmate.png",
    image: "/webthumbnails/blogmedia/blogmate.png"
  },
  { 
    name: "NewsPro", 
    description: "Professional news website delivering real-time updates across multiple categories. Supports articles, multimedia content, and push notifications. Ideal for news agencies and independent journalists.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/newspro.png",
    image: "/webthumbnails/blogmedia/newspro.png"
  },
  { 
    name: "TravelBlog", 
    description: "Travel-focused blogging website for sharing experiences and itineraries. Users can include photos, travel tips, and guides. Perfect for travel enthusiasts and influencers.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/travelblog.png",
    image: "/webthumbnails/blogmedia/travelblog.png"
  },
  { 
    name: "LifestyleHub", 
    description: "Lifestyle blogging website template covering fashion, wellness, and daily tips. Includes customizable categories and social sharing features. Great for lifestyle influencers and content creators.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/lifestylehub.png",
    image: "/webthumbnails/blogmedia/lifestylehub.png"
  },
  { 
    name: "TechTalks", 
    description: "Tech media website featuring news, reviews, and tutorials. Allows users to comment, rate, and share content. Ideal for tech enthusiasts, bloggers, and review channels.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/techtalks.png",
    image: "/webthumbnails/blogmedia/techtalks.png"
  },
  { 
    name: "WritersCorner", 
    description: "Creative writing website for publishing articles, stories, and poems. Includes community features and feedback options. Perfect for aspiring writers and literary communities.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/writerscorner.png",
    image: "/webthumbnails/blogmedia/writerscorner.png"
  },
  { 
    name: "DailyBuzz", 
    description: "Trending news and media website delivering viral stories, videos, and updates. Users can interact via comments, likes, and shares. Suitable for news aggregators and social media platforms.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/dailybuzz.png",
    image: "/webthumbnails/blogmedia/dailybuzz.png"
  },
  { 
    name: "FoodBlog", 
    description: "Food and recipe blogging website for sharing recipes, reviews, and culinary tips. Includes photo galleries, videos, and social sharing. Ideal for chefs, food bloggers, and enthusiasts.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/foodblog.png",
    image: "/webthumbnails/blogmedia/foodblog.png"
  },
  { 
    name: "MediaX", 
    description: "Versatile media website for blogs, news, videos, and podcasts. Supports multimedia content, notifications, and user interaction. Perfect for media houses and online publishers.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/mediax.png",
    image: "/webthumbnails/blogmedia/mediax.png"
  },
  { 
    name: "StyleBlog", 
    description: "Fashion and style blogging website highlighting trends, collections, and tips. Users can share posts, photos, and outfit ideas. Suitable for influencers, stylists, and fashion enthusiasts.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/styleblog.png",
    image: "/webthumbnails/blogmedia/styleblog.png"
  },
  { 
    name: "StoryTeller", 
    description: "Website for publishing creative writing, short stories, and personal narratives. Supports text, images, and video content. Encourages community engagement and story sharing.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/storyteller.png",
    image: "/webthumbnails/blogmedia/storyteller.png"
  },
  { 
    name: "VlogPro", 
    description: "Video blogging website allowing users to upload, manage, and share vlogs. Supports notifications, comments, and playlists. Perfect for vloggers and video content creators.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/vlogpro.png",
    image: "/webthumbnails/blogmedia/vlogpro.png"
  },
  { 
    name: "CineBuzz", 
    description: "Movie and entertainment website providing news, reviews, and celebrity updates. Includes trailers, ratings, and event coverage. Ideal for film fans and entertainment bloggers.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/cinebuzz.png",
    image: "/webthumbnails/blogmedia/cinebuzz.png"
  },
  { 
    name: "GamersWorld", 
    description: "Gaming media website delivering news, reviews, streaming, and tutorials. Supports community interaction and event updates. Perfect for gamers and e-sports enthusiasts.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/gamersworld.png",
    image: "/webthumbnails/blogmedia/gamersworld.png"
  },
  { 
    name: "PodCastX", 
    description: "Podcast and audio content website supporting subscriptions, playlists, and sharing. Users can browse categories and follow creators. Great for podcasters and audio content networks.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/podcastx.png",
    image: "/webthumbnails/blogmedia/podcastx.png"
  },
  { 
    name: "TrendNow", 
    description: "Trending news and media website highlighting viral stories, videos, and hot topics. Users can interact with content and receive notifications. Ideal for social media and news aggregators.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/trendnow.png",
    image: "/webthumbnails/blogmedia/trendnow.png"
  },
  { 
    name: "BloggerSpace", 
    description: "Personal blogging website supporting text, photo, and video posts. Includes categories, sharing, and community features. Perfect for hobby bloggers and creative writers.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/bloggerspace.png",
    image: "/webthumbnails/blogmedia/bloggerspace.png"
  },
  { 
    name: "SportsBuzz", 
    description: "Sports media website providing news, scores, events, and athlete updates. Supports notifications, live scores, and multimedia content. Ideal for sports fans, clubs, and media outlets.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/sportsbuzz.png",
    image: "/webthumbnails/blogmedia/sportsbuzz.png"
  },
  { 
    name: "OpinionPro", 
    description: "Debate and opinion-sharing website for publishing viewpoints and articles. Users can comment, vote, and discuss topics. Suitable for communities, educators, and discussion platforms.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/opinionpro.png",
    image: "/webthumbnails/blogmedia/opinionpro.png"
  },
  { 
    name: "ArticleHub", 
    description: "Content-rich blogging website managing articles, categories, and user interactions. Supports multimedia posts and social sharing. Ideal for publishers, bloggers, and knowledge platforms.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/blogmedia/articlehub.png",
    image: "/webthumbnails/blogmedia/articlehub.png"
  }
];

export default function BlogsWebsites() {
  return (
    <>
      <Helmet>
        <title>Blog Website Templates | Writing, Journals & Content UI Kits 2025</title>
        <meta
          name="description"
          content="Browse Blog Website Templates for writers, journaling, and content creators. Modern UI kits for personal blogs, storytelling & publishing platforms."
        />
        <meta
          name="keywords"
          content="Blog website templates, writing websites, journal UI kits, content creator websites, storytelling websites, publishing website design"
        />
        <meta property="og:title" content="Blog Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Blog Website Templates for writing, storytelling, and digital publishing."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="WebTemplateHub" />
        <meta name="author" content="WebTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Blogs & Writing Websites"
        templates={templates}
        color="from-violet-500 to-purple-400"
      />
    </>
  );
}
