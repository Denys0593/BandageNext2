import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import FooterForm from "./footerForm/FooterForm";

import "./footer.scss";

export default function Footer({ data }: any) {
  const main = data.slices[5].primary;

  const singleList = main.lists.map((listTitle: any, i: number) => {
    switch (i) {
      case 0:
        return (
          <ul key={listTitle.list} className="middle_list">
            <h3 className="middle_title">{listTitle.list}</h3>
            {main.companyInfo.map((companyInfoItem: any) => {
              return (
                <li className="middle_listItem" key={companyInfoItem.item}>
                  <Link href="#">{companyInfoItem.item}</Link>
                </li>
              );
            })}
          </ul>
        );
      case 1:
        return (
          <ul key={listTitle.list} className="middle_list">
            <h3 className="middle_title">{listTitle.list}</h3>
            {main.legal.map((legalItem: any) => {
              return (
                <li className="middle_listItem" key={legalItem.item}>
                  <Link href="#">{legalItem.item}</Link>
                </li>
              );
            })}
          </ul>
        );
      case 2:
        return (
          <ul key={listTitle.list} className="middle_list">
            <h3 className="middle_title">{listTitle.list}</h3>
            {main.features.map((featureItem: any) => {
              return (
                <li className="middle_listItem" key={featureItem.item}>
                  <Link href="#">{featureItem.item}</Link>
                </li>
              );
            })}
          </ul>
        );
      case 3:
        return (
          <ul key={listTitle.list} className="middle_list">
            <h3 className="middle_title">{listTitle.list}</h3>
            {main.resources.map((resourceItem: any) => {
              return (
                <li className="middle_listItem" key={resourceItem.item}>
                  <Link href="#">{resourceItem.item}</Link>
                </li>
              );
            })}
          </ul>
        );
      case 4:
        return (
          <ul key={listTitle.list} className="middle_list">
            <h3 className="middle_title">{listTitle.list}</h3>
            <FooterForm />
            <span>Lore imp sum dolor Amit</span>
          </ul>
        );
    }
  });

  return (
    <footer>
      <div className="container">
        <div className="top">
          <Link href="/" className="top_logo">
            {main.logo}
          </Link>
          <div className="top_socialWrap">
            <Link href="https://facebook.com">
              <PrismicNextImage field={main.facebook} alt="" />
            </Link>
            <Link href="https://instagram.com">
              <PrismicNextImage field={main.instagram} alt="" />
            </Link>
            <Link href="https://x.com">
              <PrismicNextImage field={main.twitter} alt="" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="middle">{singleList}</div>
      </div>
      <div className="bottom">
        <div className="container">
          <span>Made With Love By Finland All Right Reserved</span>
        </div>
      </div>
    </footer>
  );
}
