import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "FoodieX", 
    description: "FoodieHub – A modern food delivery website template with an easy-to-browse menu. Perfect for restaurants, cafes, and cloud kitchens.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/foodiex.png",
    image: "/webthumbnails/foodimages/foodiex1.png"
  }, 
  { 
    name: "EatNow", 
    description: "TasteBuds – Designed for gourmet dining and food lovers. Stylish website layouts highlight dishes with rich visuals.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/eatnow.png",
    image: "/webthumbnails/foodimages/eatnow1.png"
  },
  { 
    name: "YumMate", 
    description: "DineIn – A restaurant reservation and dine-in website. Customers can view menus, book tables, and order ahead online.", 
    rating: '(3.5/5)⭐⭐⭐✨', 
    appthumbnail: "/webthumbnails/foodimages/yummate.png",
    image: "/webthumbnails/foodimages/yummate1.png"
  }, 
  { 
    name: "DeliveryGo", 
    description: "CafeMocha – A cozy coffee shop website template. Great for menus, loyalty programs, and quick takeaway orders.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/deliverygo.png",
    image: "/webthumbnails/foodimages/deliverygo1.png"
  },
  { 
    name: "ChefConnect", 
    description: "BakeHouse – Built for bakeries and dessert shops. Sweet, elegant design to showcase cakes, pastries, and breads.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/chefconnect.png",
    image: "/webthumbnails/foodimages/chefconnect1.png"
  }, 
  { 
    name: "FoodHub", 
    description: "PizzaPlace – A pizza delivery website with custom topping options. Clean interface makes ordering fast and fun.", 
    rating: '(4.7/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/foodhub.png",
    image: "/webthumbnails/foodimages/foodhub1.png"
  },
  { 
    name: "DineOut", 
    description: "BurgerKingdom – Bold and fun design for burger joints and fast food outlets. Great for deals and combo offers.", 
    rating: '(3.8/5)⭐⭐⭐✨', 
    appthumbnail: "/webthumbnails/foodimages/dineout.png",
    image: "/webthumbnails/foodimages/dineout1.png"
  }, 
  { 
    name: "MealBox", 
    description: "StreetEats – A vibrant food website for street food and local vendors. Designed for quick online orders and casual dining.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/mealbox.png",
    image: "/webthumbnails/foodimages/mealbox1.png"
  },
  { 
    name: "OrderQuick", 
    description: "TheChef’sTable – A fine-dining website that highlights chefs, menus, and reservations. Perfect for premium restaurants.", 
    rating: '(4.6/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/orderquick.png",
    image: "/webthumbnails/foodimages/orderquick1.png"
  }, 
  { 
    name: "Snackify", 
    description: "GrillHouse – A rustic design for BBQ and grill restaurants. Showcases meat cuts, platters, and chef specials.", 
    rating: '(3.9/5)⭐⭐⭐✨', 
    appthumbnail: "/webthumbnails/foodimages/snackify.png",
    image: "/webthumbnails/foodimages/snackify1.png"
  },
  { 
    name: "FoodCraft", 
    description: "FoodCraft – A versatile food website template with customizable menus. Great for any type of eatery or multi-cuisine restaurant.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/foodcraft.png",
    image: "/webthumbnails/foodimages/foodcraft1.png"
  }, 
  { 
    name: "HealthyBites", 
    description: "HealthyBites – A wellness-focused website for salads, juices, and diet-friendly meals. Clean, health-conscious UI.", 
    rating: '(4.8/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/foodimages/healthybites.png",
    image: "/webthumbnails/foodimages/healthybites1.png"
  },
];

export default function FoodWebsites() {
  return (
    <>
      <Helmet>
        <title>Food & Restaurant Website Templates | Online Ordering UI Kits 2025</title>
        <meta
          name="description"
          content="Top Food & Restaurant Website Templates for ordering, dining, and online delivery platforms. Trending website designs for 2025."
        />
        <meta
          name="keywords"
          content="Food website templates, restaurant website UI, grocery websites, meal ordering website, dine out web kit, online food delivery site"
        />
        <meta property="og:title" content="Food & Restaurant Website Templates 2025" />
        <meta
          property="og:description"
          content="Best Food Website Templates for restaurants, food delivery, and grocery websites."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="WebTemplateHub" />
        <meta name="author" content="WebTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Food & Restaurant Websites"
        templates={templates}
        color="from-orange-500 to-yellow-400"
      />
    </>
  );
}
