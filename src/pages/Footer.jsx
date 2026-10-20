export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      className="relative h-96 w-full bg-white text-black p-8"
    >
      {/* sticky area */}
      <div className="relative h-[calc(100vh+384px)] top-[-100vh]">
        <div className="sticky top-[calc(100vh-384px)] h-96">
          <Content currentYear={currentYear} />
        </div>
      </div>
    </footer>
  );
}

function Content({ currentYear }) {
  const col1Keywords = [
    "Architecture",
    "Urban Planning",
    "Interior Design",
    "Sustainable Systems",
    "Masterplanning",
  ];

  const col2Keywords = [
    "Residential",
    "Commercial",
    "Cultural Pavilions",
    "Adaptive Reuse",
    "Landscape",
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 bg-white text-black">
      {/* Brand & 3 Social Platforms */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">LPAS</h2>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      {/* 2 Columns with 5 Keywords Each */}
      <div className="grid grid-cols-2 gap-8 max-w-xl text-sm">
        <div className="flex flex-col gap-2">
          {col1Keywords.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {col2Keywords.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      {/* Bottom Bar: All Rights Reserved & Date / Year */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-neutral-500">
        <p>© {currentYear} LPAS. All rights reserved.</p>
        <p>{currentYear}</p>
      </div>
    </div>
  );
}
