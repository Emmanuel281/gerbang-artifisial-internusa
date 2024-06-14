import Signin from "@/app/[locale]/components/Auth/SignIns/Auth/SignIn";
import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumbon/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
