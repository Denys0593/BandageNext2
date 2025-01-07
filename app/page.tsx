import { createClient } from "@/prismicio";

import AboutUs from "./components/aboutUs/AboutUs";
import UnderAboutUs from "./components/underAboutUs/UnderAboutUs";
import OurTeam from "./components/ourTeam/OurTeam";
import Logos from "./components/logos/Logos";
import GrowYours from "./components/growYours/GrowYours";
import Register from "./components/userComponents/register/Register";
import Main from "./Main";

export default async function Home() {
  const client = createClient();
  const { data } = await client.getSingle("homepage");

  return (
    <>
      <Main data={data} />
    </>
  );
}
