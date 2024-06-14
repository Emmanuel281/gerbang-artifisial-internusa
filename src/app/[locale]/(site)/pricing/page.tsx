import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumbon/Breadcrumb";
import Faq from "@/app/[locale]/components/Faqomponents/Faq";
import Pricing from "@/app/[locale]/components/Pricingnents/Pricing";
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
