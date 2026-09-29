const ITEMS = [
  "TRAIN",
  "MOVE",
  "PERFORM",
  "RECOVER",
  "REPEAT",
  "24HS",
  "365 DÍAS",
  "NLD",
]

export function MarqueeBanner() {
  // Triple-repeat so the -33.33% translateX loops seamlessly
  const sequence = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div
      className="relative bg-primary py-4 sm:py-5 overflow-hidden -rotate-[1.5deg] scale-[1.06] my-8 sm:my-10"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap w-max will-change-transform"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#090909] px-4 sm:px-6">
              {item}
            </span>
            <span className="text-[#090909]/40 text-xl sm:text-2xl select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
