import { createClient } from "@/prismicio";

import Main from "./Main";

export default async function Team() {
  const client = createClient();
  const { data } = await client.getSingle("team");
  const homepage = await client.getSingle("homepage");
  const homepageData = homepage.data;
  const pricing = await client.getSingle("pricing");
  const pricingData = pricing.data;
  return (
    <>
      <Main data={data} homepageData={homepageData} pricingData={pricingData} />
    </>
  );
}
