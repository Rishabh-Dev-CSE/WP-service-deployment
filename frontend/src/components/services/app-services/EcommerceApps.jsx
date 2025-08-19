import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
    {
        name: "ShopEase",
        description: "ShopEase – A clean and modern e-commerce app template designed for any type of online store. Smooth navigation and fast checkout make shopping effortless.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/appthumbnails/shopping/shopease.png",
    },
    {
        name: "TrendMart",
        description: "TrendMart – A stylish shopping app built for trendy fashion and lifestyle products. Perfect for showcasing collections with a modern feel.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/appthumbnails/shopping/trendmart.png"
    },
    { name: "StyleCart", description: "StyleCart – A fashion-focused template with sleek product grids and quick-buy options. Great for clothing, accessories, and footwear brands.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/stylecart.png" },
    { name: "ElectroStore", description: "ElectroStore – Designed for electronics and gadgets, with product highlights and easy filtering. A tech-friendly UI for smart shopping.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/electrostore.png" },
    { name: "FreshMart", description: "FreshMart – A grocery app template with fresh, clean design. Ideal for supermarkets, organic stores, and food delivery businesses.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/freshmart.png" },
    { name: "LuxeShop", description: "LuxeShop – A premium shopping template for luxury brands. Minimalist layouts with elegant product displays to impress high-end buyers.", rating: '(5/5)⭐⭐⭐⭐⭐', appthumbnail: "/appthumbnails/shopping/luxeshop.png" },
    { name: "ShopSmart", description: "ShopSmart – Built for multi-category stores with powerful search and category navigation. Optimized for smooth product browsing.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/shopsmart.png" },
    { name: "UrbanWear", description: "UrbanWear – A streetwear and casual fashion app template. Bold layouts make it perfect for young and modern audiences.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/urbanwear.png" },
    { name: "GadgetHub", description: "GadgetHub – A tech gadget store app with modern product showcases. Ideal for mobiles, laptops, and accessories sellers.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/gadgethub.png" },
    { name: "GlamCart", description: "GlamCart – A beauty and cosmetics-focused template. Elegant design highlights products with reviews and quick-purchase options.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/glamcart.png" },
    { name: "MegaMall", description: "MegaMall – A multi-vendor e-commerce app with wide product categories. Built to handle big marketplaces with ease.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/megamall.png" },
    { name: "Cartify", description: "Cartify – A versatile shopping app with cart-first design. Simple, clean, and focused on smooth user experience.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/cartify.png" },
    { name: "EcoShop", description: "EcoShop – A sustainable shopping template highlighting eco-friendly products. Ideal for green brands and organic retailers.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/ecoshop.png" },
    { name: "JewelMart", description: "JewelMart – A jewelry-focused app with premium layouts. Designed to showcase fine collections with elegance and style.", rating: '(5/5)⭐⭐⭐⭐⭐', appthumbnail: "/appthumbnails/shopping/jewelmart.png" },
    { name: "HomeStore", description: "HomeStore – A home and furniture e-commerce template. Includes rich visuals and modern UI for product inspiration.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/homestore.png" },
    { name: "PetMart", description: "PetMart – A playful shopping app for pets and accessories. Fun design makes it perfect for pet lovers and stores.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/petmart.png" },
    { name: "OrganicShop", description: "OrganicShop – A nature-inspired template for organic foods and lifestyle products. Clean design highlights health and sustainability.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/organicshop.png" },
    { name: "Click2Cart", description: "Click2Cart – A fast and simple one-click shopping template. Great for quick product purchases and daily-use items.", rating: '(3/5)⭐⭐⭐', appthumbnail: "/appthumbnails/shopping/click2cart.png" },
    { name: "SuperBazaar", description: "SuperBazaar – A wholesale and supermarket-style app template. Best suited for bulk product shopping and big categories.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/superbazaar.png" },
    { name: "DailyDeals", description: "DailyDeals – A deals and discounts app template. Perfect for flash sales, coupons, and limited-time offers.", rating: '(4/5)⭐⭐⭐⭐🌟', appthumbnail: "/appthumbnails/shopping/dailydeals.png" }
];



export default function EcommerceApps() {
    return (
        <>
            <Helmet>
                <title>Ecommerce App Templates | Online Store & Shopping UI Kits 2025</title>
                <meta
                    name="description"
                    content="Modern Ecommerce App Templates for online stores, fashion shops, and retail platforms. Ready-to-use UI kits for mobile shopping apps."
                />
                <meta
                    name="keywords"
                    content="Ecommerce app templates, shopping apps, retail UI kit, online store app design, cart apps, buy now UI kit"
                />
                <meta property="og:title" content="Ecommerce App Templates 2025" />
                <meta
                    property="og:description"
                    content="Trending Ecommerce App Templates for online stores and shopping apps."
                />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="AppTemplateHub" />
                <meta name="author" content="AppTemplateHub Team" />
            </Helmet>

            <CategorySection
            
                category="Ecommerce & Shopping Apps"
                templates={templates}
                color="from-pink-500 to-red-400"
            />
        </>
    );
}
