import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "FoodieX", 
    description: "FoodieHub – A modern food delivery app template with an easy-to-browse menu. Perfect for restaurants, cafes, and cloud kitchens.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/foodiex.png" 
  }, 
  { 
    name: "EatNow", 
    description: "TasteBuds – Designed for gourmet dining and food lovers. Stylish layouts highlight dishes with rich visuals.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/eatnow.png" 
  },
  { 
    name: "YumMate", 
    description: "DineIn – A restaurant reservation and dine-in app. Customers can view menus, book tables, and order ahead.", 
    rating: '(3.5/5)⭐⭐⭐✨', 
    appthumbnail: "//appthumbnails/foodimages/yummate.png" 
  }, 
  { 
    name: "DeliveryGo", 
    description: "CafeMocha – A cozy coffee shop app template. Great for menus, loyalty programs, and quick takeaway orders.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/deliverygo.png" 
  },
  { 
    name: "ChefConnect", 
    description: "BakeHouse – Built for bakeries and dessert shops. Sweet, elegant design to showcase cakes, pastries, and breads.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/chefconnect.png" 
  }, 
  { 
    name: "FoodHub", 
    description: "PizzaPlace – A pizza delivery app with custom topping options. Clean interface makes ordering fast and fun.", 
    rating: '(4.7/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/foodhub.png" 
  },
  { 
    name: "DineOut", 
    description: "BurgerKingdom – Bold and fun design for burger joints and fast food outlets. Great for deals and combo offers.", 
    rating: '(3.8/5)⭐⭐⭐✨', 
    appthumbnail: "//appthumbnails/foodimages/dineout.png" 
  }, 
  { 
    name: "MealBox", 
    description: "StreetEats – A vibrant app for street food and local vendors. Designed for quick orders and casual dining.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/mealbox.png" 
  },
  { 
    name: "OrderQuick", 
    description: "TheChef’sTable – A fine-dining template that highlights chefs, menus, and reservations. Perfect for premium restaurants.", 
    rating: '(4.6/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/orderquick.png" 
  }, 
  { 
    name: "Snackify", 
    description: "GrillHouse – A rustic design for BBQ and grill restaurants. Showcases meat cuts, platters, and chef specials.", 
    rating: '(3.9/5)⭐⭐⭐✨', 
    appthumbnail: "//appthumbnails/foodimages/snackify.png" 
  },
  { 
    name: "FoodCraft", 
    description: "FoodCraft – A versatile food app template with customizable menus. Great for any type of eatery or multi-cuisine restaurant.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/foodcraft.png" 
  }, 
  { 
    name: "HealthyBites", 
    description: "HealthyBites – A wellness-focused app for salads, juices, and diet-friendly meals. Clean, health-conscious UI.", 
    rating: '(4.8/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/healthybites.png" 
  },
  { 
    name: "UrbanCafe", 
    description: "UrbanCafe – A trendy cafe and coffee shop app. Highlights ambiance, menu, and loyalty rewards.", 
    rating: '(4.1/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/urbancafe.png" 
  }, 
  { 
    name: "EatFresh", 
    description: "EatFresh – Designed for organic food and fresh produce delivery. Minimalist design with nature-inspired elements.", 
    rating: '(3.7/5)⭐⭐⭐✨', 
    appthumbnail: "//appthumbnails/foodimages/eatfresh.png" 
  },
  { 
    name: "FlavorTown", 
    description: "FlavorTown – A bold and colorful template for food festivals or multi-cuisine delivery apps.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/flavortown.png" 
  }, 
  { 
    name: "GourmetStop", 
    description: "GourmetStop – Elegant design tailored for gourmet shops and delicatessens. Showcases premium food items beautifully.", 
    rating: '(4.9/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/gourmetstop.png" 
  },
  { 
    name: "QuickBite", 
    description: "QuickBite – A fast-food app template with instant order and delivery features. Perfect for busy customers.", 
    rating: '(3.6/5)⭐⭐⭐✨', 
    appthumbnail: "//appthumbnails/foodimages/quickbite.png" 
  }, 
  { 
    name: "HungryHub", 
    description: "HungryHub – A multi-restaurant delivery app. Allows users to explore local eateries and order in one place.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/hungryhub.png" 
  },
  { 
    name: "BrewCafe", 
    description: "BrewCafe – A craft coffee and brewery app. Highlights drinks, brewing styles, and membership plans.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/brewcafe.png" 
  }, 
  { 
    name: "SweetTreats", 
    description: "SweetTreats – A dessert shop app for ice creams, chocolates, and sweets. Playful design with tempting visuals.", 
    rating: '(4.7/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "//appthumbnails/foodimages/sweettreats.png" 
  }
];



export default function FoodApps() {
  return (
    <>
      <Helmet>
        <title>Food Delivery App Templates | Restaurant & Grocery UI Kits 2025</title>
        <meta
          name="description"
          content="Top Food Delivery & Restaurant App Templates for ordering, dining, and grocery delivery platforms. Trending mobile app designs for 2025."
        />
        <meta
          name="keywords"
          content="Food delivery app templates, restaurant app UI, grocery apps, meal ordering app, dine out UI kit, online food delivery"
        />
        <meta property="og:title" content="Food Delivery App Templates 2025" />
        <meta
          property="og:description"
          content="Best Food App Templates for restaurants, food delivery, and grocery apps."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Food & Restaurant Apps"
        templates={templates}
        color="from-orange-500 to-yellow-400"
      />
    </>
  );
}
