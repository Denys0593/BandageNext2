import Image from "next/image";

import "./letsTalk.scss";

export default function LetsTalk() {
  return (
    <div className="talk">
      <Image
        className="talk_image"
        src={`/icons/arrowRound.svg`}
        alt="arrowRound"
        width="62"
        height="62"
      />
      <div className="container">
        <h3 className="talk_subtitle">WE Can't WAIT TO MEET YOU</h3>
        <h2 className="talk_title">Let’s Talk</h2>
        <button className="talk_btn">Try it free now</button>
      </div>
    </div>
  );
}
