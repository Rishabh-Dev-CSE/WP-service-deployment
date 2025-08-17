import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "DesignPro",
     description: "A professional design portfolio app template. Perfect for showcasing projects, clients, and creative work.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/designpro.png" },
  { name: "ArtSpace", description: "A gallery-style app for artists and designers. Highlights artworks, exhibitions, and collections.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/artspace.png" },
  { name: "PhotoHub", description: "A photography app template for portfolios and photo sharing. Clean interface with image-focused layouts.", rating: "(4.5/5)⭐⭐", appthumbnail: "appthumbnails/creativeimages/photohub.png" },
  { name: "MusicVibe", description: "A music app template for artists and bands. Features playlists, tracks, and event promotion.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/musicvibe.png" },
  { name: "PersonalCV", description: "A personal CV and resume app. Highlights skills, experience, and achievements in a professional layout.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/personalcv.png" },
  { name: "CreativeEdge", description: "A creative portfolio app. Perfect for freelancers to showcase projects and attract clients.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/creativeedge.png" },
  { name: "ArtistStudio", description: "Designed for artists and designers. Includes project galleries, biographies, and client testimonials.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/artiststudio.png" },
  { name: "BandPage", description: "A musician/band app template. Features tracks, events, and fan engagement.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/bandpage.png" },
  { name: "PortfolioX", description: "A sleek portfolio app for creatives. Showcases work, services, and contact info seamlessly.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/portfoliox.png" },
  { name: "StyleBook", description: "A fashion and style portfolio app. Highlights collections, lookbooks, and designer info.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/stylebook.png" },
  { name: "SketchLab", description: "A digital sketching and art-sharing app template. Includes tools for showcasing and organizing sketches.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/sketchlab.png" },
  { name: "ArtGallery", description: "An app template for art galleries and exhibitions. Features artwork, events, and artist info.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/artgallery.png" },
  { name: "ModelBook", description: "A modeling portfolio app. Highlights photoshoots, work experience, and social links.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/modelbook.png" },
  { name: "SoundWave", description: "A music and audio app template. Perfect for musicians, DJs, and sound designers.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/soundwave.png" },
  { name: "PaintersHub", description: "Designed for painters and visual artists. Showcases artworks, workshops, and galleries.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/paintershub.png" },
  { name: "CraftWorld", description: "A DIY and crafts app template. Includes project tutorials, galleries, and community engagement.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/craftworld.png" },
  { name: "StarPortfolio", description: "A professional portfolio app for actors, models, and creatives. Clean layout with multimedia support.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/starportfolio.png" },
  { name: "ActorSpace", description: "An actor-focused app template. Highlights roles, reels, and auditions.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/actorspace.png" },
  { name: "MyShowcase", description: "A personal showcase app for freelancers and creatives. Highlights projects, services, and testimonials.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/myshowcase.png" },
  { name: "ResumePro", description: "A professional resume and portfolio app. Designed for individuals to present skills and work experience elegantly.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/creativeimages/resumepro.png" }
];


export default function CreativeApps() {
  return (
    <>
      <Helmet>
        <title>Creative App Templates | Design, Music & Media UI Kits 2025</title>
        <meta
          name="description"
          content="Explore Creative App Templates for designers, music creators, video editors, and digital artists. Perfect UI kits for creative startups."
        />
        <meta
          name="keywords"
          content="Creative app templates, design app UI, music apps, video editing UI kits, art apps, photography apps, media editing templates"
        />
        <meta property="og:title" content="Creative App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Creative App Templates for design, music, and video editing platforms."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Creative & Media Apps"
        templates={templates}
        color="from-pink-500 to-rose-400"
      />
    </>
  );
}
