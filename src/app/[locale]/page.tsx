import About from "@/app/[locale]/components/About";
import HomeBlogSection from "@/app/[locale]/components/Blog/HomeBlogSection";
import CallToAction from "@/app/[locale]/components/CallToAction";
import Clients from "@/app/[locale]/components/Clients";
import ScrollUp from "@/app/[locale]/components/Common/ScrollUp";
import Contact from "@/app/[locale]/components/Contact";
import Faq from "@/app/[locale]/components/Faq";
import Features from "@/app/[locale]/components/Features";
import Hero from "@/app/[locale]/components/Hero";
import Pricing from "@/app/[locale]/components/Pricing";
import Team from "@/app/[locale]/components/Team";
import Testimonials from "@/app/[locale]/components/Testimonials";
import { getAllPosts } from "@/app/[locale]/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indo Blockchain",
  description:
    "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients />
    </main>
  );
}
