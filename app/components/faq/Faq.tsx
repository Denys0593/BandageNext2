import Image from "next/image";

import "./faq.scss";

export default function Faq({ data }: any) {
  const main = data.slices[2].primary;

  const items = main.items.map((item: any) => {
    return (
      <div key={item.subtitle} className="faq_item">
        <Image
          src={`/icons/smallArrowBlue.svg`}
          alt="arrow"
          width="9"
          height="16"
        />
        <div className="faq_descr">
          <h3 className="faq_subtitle">{item.subtitle}</h3>
          <div className="faq_article">{item.descr}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="faq">
      <div className="container">
        <h2 className="faq_title">{main.title}</h2>
        <p className="faq_text">{main.text}</p>
        <div className="faq_wrapper">{items}</div>
        <div className="faq_bottom">{main.bottom}</div>
      </div>
    </div>
  );
}
