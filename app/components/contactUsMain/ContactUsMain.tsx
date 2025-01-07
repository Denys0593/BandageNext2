import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import "./contactUsMain.scss";

export default function ContactUsMain({ data }: any) {
  const main = data.slices[0].primary;

  const links = main.socialLinks.map((item: any) => {
    return (
      <Link key={item.logo.id} href={item.link} className="contactUs_link">
        <PrismicNextImage field={item.logo} alt="" />
      </Link>
    );
  });

  return (
    <div className="contactUs">
      <PrismicNextImage
        className="contactUs_mainImage"
        field={main.image}
        alt=""
      />
      <div className="container">
        <h3 className="contactUs_subtitle">{main.subtitle}</h3>
        <h1 className="contactUs_title">{main.title}</h1>
        <p className="contactUs_descr">{main.descr}</p>
        <div className="contactUs_phone">
          Phone: <Link href="tel:+451215215 ">{main.phone}</Link>
        </div>
        <div className="contactUs_email">
          Email: <button>{main.email}</button>
        </div>
        <div className="contactUs_links">{links}</div>
      </div>
    </div>
  );
}
