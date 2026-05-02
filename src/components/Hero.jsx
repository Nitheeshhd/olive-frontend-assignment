const Hero = () => {
  const trustPeople = [
    ["AL", "bg-[#527323]"],
    ["MK", "bg-[#c87935]"],
    ["JR", "bg-[#6f7b55]"],
    ["SP", "bg-[#2d4a18]"],
  ];
  const badges = ["Clean labels", "Real product ratings", "Fast grocery search"];

  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-14 text-center sm:px-8 lg:px-10 lg:pt-16">
      <div className="mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-[#dfe7d2] bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
        <div className="flex -space-x-2">
          {trustPeople.map(([initials, color]) => (
            <span
              key={initials}
              className={`grid h-7 w-7 place-items-center rounded-full border-2 border-white text-[10px] font-black text-white ${color}`}
            >
              {initials}
            </span>
          ))}
        </div>
        <p className="text-xs font-semibold text-[#65705c] sm:text-sm">
          Trusted by thousands of healthy families
        </p>
      </div>

      <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-[1.02] text-[#17210f] sm:text-6xl lg:text-7xl">
        The Safest Way to
        <span className="block">Shop for Groceries</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-[#66705e] sm:text-lg">
        Use the Olive Food Scanner App to instantly find safer products,
        compare ratings, and get expert-backed food insights while you shop.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#18230f] px-6 py-3 text-sm font-black text-white shadow-md shadow-[#1f3d10]/15 transition hover:bg-[#2b4017]">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-xs text-[#18230f]">
            i
          </span>
          Download for iOS
        </button>

        <button className="inline-flex min-h-12 items-center rounded-full border border-[#d4ddc8] bg-white px-6 py-3 text-sm font-black text-[#1f2c17] shadow-sm transition hover:border-[#a9bf45]">
          Join the Olive Community +
        </button>
      </div>

      <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#65705c]">
        {badges.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#dfe7d2] bg-[#fbfcf8] px-3 py-1.5"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
