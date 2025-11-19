import Features from "@/components/features";
import HeroSection from "@/components/hero";
import Pricing from "@/components/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  const stats = [
    { label: "Images Processed", value: 10000, suffix: "+"},
    { label: "Active Users", value: 700, suffix: "+"},
    { label: "AI Transfomations", value: 42570, suffix: "+"},
    { label: "User Satisfaction", value: 73, suffix: "%"},
  ];


  return (
    <div className="pt-36">
      {/* Hero */}
      <HeroSection/>

      {/* stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat,index)=>{
              return ( 
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 
                to-blue-500 bg-clip-text text-transparent">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* features */}
      <Features/>


      {/* pricing */}
      <Pricing />

      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Push The Boundaries Of Creativity?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Thousands of creators are already unlocking new possibilities with AI-powered editing.
          </p>
          <Link href="/dashboard">
            <Button variant="primary" size="xl">
              Start Now 
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}