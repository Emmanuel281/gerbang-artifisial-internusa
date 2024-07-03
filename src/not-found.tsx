import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumb";
import NotFound from "@/app/[locale]/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
