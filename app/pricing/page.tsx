import { createClient } from "@/prismicio";

import Main from "./Main";

export default async function Pricing() {
  const client = createClient();
  const { data } = await client.getSingle("pricing");
  const document = await client.getSingle("homepage");
  const data2 = document.data;

  return (
    <>
      <Main data={data} data2={data2} />
    </>
  );
}
