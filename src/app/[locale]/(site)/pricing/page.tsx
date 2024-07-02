import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumb";
import Faq from "@/app/[locale]/components/Faq";
import Pricing from "@/app/[locale]/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
