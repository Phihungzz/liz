"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import React, { useState } from "react";

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
    const [ref, isVisible] = useIntersectionObserver();
    const [isHovered, setIsHovered] = useState(false);

    return (
    <div ref={ref} className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8
    transition-all duration-700 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } ${isHovered ? "transform scale-105 rotate-1 shadow-2xl" : ""}`}
    style={{ transitionDelay: `${delay}ms` }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
    );
};

const Features = () => {

const features = [
    {
      icon: "✂️",
      title: "Intelligent Crop & Resize",
      description:
        "Easily crop with precise aspect ratios and resize images without losing quality, powered by smart AI algorithms.",
    },
    {
      icon: "🎨",
      title: "Color & Light Adjustment",
      description:
        "Adjust brightness, contrast, and saturation like a pro with instant previews and AI-assisted enhancement.",
    },
    {
      icon: "🤖",
      title: "AI Background Removal",
      description:
        "Automatically detect and remove complex backgrounds with high accuracy, keeping fine details intact.",
    },
    {
      icon: "🔧",
      title: "AI Content Editor",
      description:
        "Edit images using natural language commands. Add, remove, or modify elements seamlessly with AI.",
    },
    {
      icon: "📏",
      title: "Image Extender",
      description:
        "Expand your images in any direction while AI fills in new content naturally to match the original scene.",
    },
    {
      icon: "⬆️",
      title: "AI Upscaler",
      description:
        "Boost image resolution up to 4x while preserving clarity, textures, and reducing visual artifacts.",
    },
  ];

    return (
    <section className="py-20" id="features">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                    Next-Level AI Tools
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    All-in-one tools to create, refine, and elevate your images 
                    with state-of-the-art AI technology. 
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return <FeatureCard key={index} {...feature} delay={index * 100} />;
                })}
            </div>
        </div>
    </section>
    );
};




export default Features;