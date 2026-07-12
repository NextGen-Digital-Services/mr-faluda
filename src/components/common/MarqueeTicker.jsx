import './MarqueeTicker.css';

export default function MarqueeTicker({ speed = 25, bgColor = 'var(--color-accent)', textColor = 'var(--color-primary)' }) {
  const tickerText = "REAL FRUIT • REAL MILK • REAL KULFI • MUMBAI'S FALOODA SPECIALISTS • ";
  const repeatedText = Array(10).fill(tickerText).join("");

  return (
    <div className="marquee-strip" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="marquee-content" style={{ animationDuration: `${speed}s` }}>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
}
