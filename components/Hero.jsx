export default function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="text1 poppins-extrabold">
        Hello, I&apos;m <span className="color-change">Izz!</span>
      </p>
      <p className="text2 poppins-extrabold flex-text">
        I do{" "}
        <span className="scroller color-change">
          <span className="scroller-inner">
            <span>stuff</span>
            <span>photography</span>
            <span>operating</span>
            <span>coding</span>
            <span>designing</span>
            <span>stuff</span>
          </span>
        </span>
      </p>
    </section>
  );
}
