import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
    
    {
        name: "ShopEase",
        description: "ShopEase – A clean and modern e-commerce website template designed for any type of online store. Smooth navigation and fast checkout make online shopping effortless.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/shopease.png",
        image: "/webthumbnails/shopping/shopease1.png"
    },

    {
        name: "TrendMart",
        description: "TrendMart – A stylish shopping website built for trendy fashion and lifestyle products. Perfect for showcasing collections with a modern web experience.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/trendmart.png",
        image: "/webthumbnails/shopping/trendmart1.png",
    },

    {
        name: "StyleCart",
        description: "StyleCart – A fashion-focused website template with sleek product grids and quick-buy options. Great for clothing, accessories, and footwear brands.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/stylecart.png",
        image: "/webthumbnails/shopping/stylecart1.png"
    },
    {
        name: "ShopSmart",
        description: "ShopSmart – Built for multi-category e-commerce websites with powerful search and category navigation. Optimized for smooth browsing.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/shopsmart.png",
        image: "/webthumbnails/shopping/shopsmart1.png"
    },

    {
        name: "ElectroStore",
        description: "ElectroStore – Designed for electronics and gadgets websites, with product highlights and easy filtering. A tech-friendly UI for smart shopping.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/electrostore.png",
        image: "/webthumbnails/shopping/electrostore1.png"
    },

    {
        name: "GlamCart",
        description: "GlamCart – A beauty and cosmetics-focused website template. Elegant design highlights products with reviews and quick-purchase options.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/glamcart.png",
        image: "/webthumbnails/shopping/glamcart1.png"
    },

    {
        name: "FreshMart",
        description: "FreshMart – A grocery website template with fresh, clean design. Ideal for supermarkets, organic stores, and food delivery businesses.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/freshmart.png",
        image: "/webthumbnails/shopping/freshmart1.png"
    },

    {
        name: "LuxeShop",
        description: "LuxeShop – A premium e-commerce website template for luxury brands. Minimalist layouts with elegant product displays to impress high-end buyers.",
        rating: '(5/5)⭐⭐⭐⭐⭐',
        appthumbnail: "/webthumbnails/shopping/luxeshop.png",
        image: "/webthumbnails/shopping/luxeshop1.png"
    },

    {
        name: "UrbanWear",
        description: "UrbanWear – A streetwear and casual fashion website template. Bold layouts make it perfect for young and modern audiences.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/urbanwear.png",
        image: "/webthumbnails/shopping/urbanwear1.png"
    },

    {
        name: "GadgetHub",
        description: "GadgetHub – A tech gadget store website with modern product showcases. Ideal for mobiles, laptops, and accessories sellers.",
        rating: '(4/5)⭐⭐⭐⭐🌟',
        appthumbnail: "/webthumbnails/shopping/gadgethub.png",
        image: "/webthumbnails/shopping/gadgethub1.png"
    },

];

export default function EcommerceWeb() {
    return (
        <>
            <Helmet>
                <title>Ecommerce Website Templates | Online Store & Shopping UI Kits 2025</title>
                <meta
                    name="description"
                    content="Modern Ecommerce Website Templates for online stores, fashion shops, and retail platforms. Ready-to-use UI kits for shopping websites."
                />
                <meta
                    name="keywords"
                    content="Ecommerce website templates, shopping websites, retail UI kit, online store design, cart websites, buy now templates"
                />
                <meta property="og:title" content="Ecommerce Website Templates 2025" />
                <meta
                    property="og:description"
                    content="Trending Ecommerce Website Templates for online stores and shopping platforms."
                />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="WebTemplateHub" />
                <meta name="author" content="WebTemplateHub Team" />
            </Helmet>

            <CategorySection
                category="Ecommerce & Shopping Websites"
                templates={templates}
                color="from-pink-500 to-red-400"
            />
        </>
    );
}
