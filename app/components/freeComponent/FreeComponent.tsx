import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import "./freeComponent.scss";

export default function FreeComponent({ data, paddingTop }: any) {
  const main = data.slices[3].primary;

  const socialLinks = main.socialLogos.map((logo: any) => {
    return (
      <Link key={logo.link} href={`https://www.${logo.link}`}>
        <PrismicNextImage field={logo.socialLogo} alt="" />
      </Link>
    );
  });

  return (
    <div className={paddingTop ? "free pt80" : "free"}>
      <div className="container">
        <h2 className="free_title">{main.title}</h2>
        <p className="free_subtitle">{main.subtitle}</p>
        <button className="free_btn">{main.button}</button>
        <div className="free_wrapper">{socialLinks}</div>
      </div>
    </div>
  );
}
