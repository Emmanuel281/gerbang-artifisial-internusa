import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  const t = useTranslations("Client");
  return (
    <section className="pb-20 dark:bg-dark ">
      <div className="container px-4">
      <SectionTitle
          subtitle=""
          title={t('title')}
          paragraph={t('subtitle')}
        />
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11 pt-20">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
