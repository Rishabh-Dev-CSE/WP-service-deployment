import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "DesignPro", 
    description: "DesignPro – A professional design portfolio website template. Perfect for showcasing projects, clients, and creative work.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/designpro.png",
    image: "/webthumbnails/creativeimages/designpro1.png"
  }, 
  { 
    name: "ArtSpace", 
    description: "ArtSpace – A gallery-style website for artists and designers. Highlights artworks, exhibitions, and collections.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/artspace.png",
    image: "/webthumbnails/creativeimages/artspace1.png"
  }, 
  { 
    name: "PhotoHub", 
    description: "PhotoHub – A photography website template for portfolios and photo sharing. Clean interface with image-focused layouts.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/photohub.png",
    image: "/webthumbnails/creativeimages/photohub1.png"
  }, 
  { 
    name: "MusicVibe", 
    description: "MusicVibe – A music website template for artists and bands. Features playlists, tracks, and event promotion.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/musicvibe.png",
    image: "/webthumbnails/creativeimages/musicvibe1.png"
  }, 
  { 
    name: "PersonalCV", 
    description: "PersonalCV – A personal CV and resume website. Highlights skills, experience, and achievements in a professional layout.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/personalcv.png",
    image: "/webthumbnails/creativeimages/personalcv1.png"
  }, 
  { 
    name: "CreativeEdge", 
    description: "CreativeEdge – A creative portfolio website. Perfect for freelancers to showcase projects and attract clients.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/creativeedge.png",
    image: "/webthumbnails/creativeimages/creativeedge1.png"
  }, 
  { 
    name: "ArtistStudio", 
    description: "ArtistStudio – Designed for artists and designers. Includes project galleries, biographies, and client testimonials.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/artiststudio.png",
    image: "/webthumbnails/creativeimages/artiststudio1.png"
  }, 
  { 
    name: "BandPage", 
    description: "BandPage – A musician/band website template. Features tracks, events, and fan engagement.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/bandpage.png",
    image: "/webthumbnails/creativeimages/bandpage1.png"
  }, 
  { 
    name: "PortfolioX", 
    description: "PortfolioX – A sleek portfolio website for creatives. Showcases work, services, and contact info seamlessly.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/portfoliox.png",
    image: "/webthumbnails/creativeimages/portfoliox1.png"
  }, 
  { 
    name: "StyleBook", 
    description: "StyleBook – A fashion and style portfolio website. Highlights collections, lookbooks, and designer info.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/stylebook.png",
    image: "/webthumbnails/creativeimages/stylebook1.png"
  }, 
  { 
    name: "SketchLab", 
    description: "SketchLab – A digital sketching and art-sharing website template. Includes tools for showcasing and organizing sketches.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/sketchlab.png",
    image: "/webthumbnails/creativeimages/sketchlab1.png"
  }, 
  { 
    name: "ArtGallery", 
    description: "ArtGallery – A website template for art galleries and exhibitions. Features artwork, events, and artist info.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/artgallery.png",
    image: "/webthumbnails/creativeimages/artgallery1.png"
  }, 
  { 
    name: "ModelBook", 
    description: "ModelBook – A modeling portfolio website. Highlights photoshoots, work experience, and social links.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/modelbook.png",
    image: "/webthumbnails/creativeimages/modelbook1.png"
  }, 
  { 
    name: "SoundWave", 
    description: "SoundWave – A music and audio website template. Perfect for musicians, DJs, and sound designers.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/soundwave.png",
    image: "/webthumbnails/creativeimages/soundwave1.png"
  }, 
  { 
    name: "PaintersHub", 
    description: "PaintersHub – Designed for painters and visual artists. Showcases artworks, workshops, and galleries.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/paintershub.png",
    image: "/webthumbnails/creativeimages/paintershub1.png"
  }, 
  { 
    name: "CraftWorld", 
    description: "CraftWorld – A DIY and crafts website template. Includes project tutorials, galleries, and community engagement.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/craftworld.png",
    image: "/webthumbnails/creativeimages/craftworld1.png"
  }, 
  { 
    name: "StarPortfolio", 
    description: "StarPortfolio – A professional portfolio website for actors, models, and creatives. Clean layout with multimedia support.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/starportfolio.png",
    image: "/webthumbnails/creativeimages/starportfolio1.png"
  }, 
  { 
    name: "ActorSpace", 
    description: "ActorSpace – An actor-focused website template. Highlights roles, reels, and auditions.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/actorspace.png",
    image: "/webthumbnails/creativeimages/actorspace1.png"
  }, 
  { 
    name: "MyShowcase", 
    description: "MyShowcase – A personal showcase website for freelancers and creatives. Highlights projects, services, and testimonials.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/myshowcase.png",
    image: "/webthumbnails/creativeimages/myshowcase1.png"
  }, 
  { 
    name: "ResumePro", 
    description: "ResumePro – A professional resume and portfolio website. Designed for individuals to present skills and work experience elegantly.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "/webthumbnails/creativeimages/resumepro.png",
    image: "/webthumbnails/creativeimages/resumepro1.png"
  }
];

export default function CreativeWebsites() {
  return (
    <>
      <Helmet>
        <title>Creative Website Templates | Design, Music & Media UI Kits</title>
        <meta
          name="description"
          content="Explore Creative Website Templates for designers, music creators, video editors, and digital artists. Perfect UI kits for creative startups."
        />
        <meta
          name="keywords"
          content="Creative website templates, design website UI, music websites, video editing UI kits, art websites, photography websites, media editing templates"
        />
        <meta property="og:title" content="Creative Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Creative Website Templates for design, music, and video editing platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Creative & Media Websites"
        templates={templates}
        color="from-pink-500 to-rose-400"
      />
    </>
  );
}
