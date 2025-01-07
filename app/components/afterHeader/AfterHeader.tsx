import Image from "next/image";
import Link from "next/link";

import "./afterHeader.scss";

export default function AfterHeader({ data }: any) {
  const main = data.slices[0].primary;

  return (
    <div className="afterHeader">
      <div className="container">
        <h3 className="afterHeader_subtitle">{main.subtitle}</h3>
        <h1 className="afterHeader_title">{main.title}</h1>

        <div className="afterHeader_wrapper">
          <Link className="afterHeader_home" href="/">
            {main.homeLink}
          </Link>
          <Image
            src={`/icons/afterHeaderArrow.svg`}
            alt="arrow"
            width="9"
            height="16"
          />
          <div className="afterHeader_page">{main.pageLink}</div>
        </div>
      </div>
    </div>
  );
}
