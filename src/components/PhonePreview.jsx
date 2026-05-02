import phone from "../assets/photo.png";

const PhonePreview = () => {
  return (
    <section className="relative mx-auto flex min-h-[500px] max-w-6xl justify-center px-5 pt-10 sm:min-h-[560px] lg:pt-8">
      <div className="absolute inset-x-0 top-36 h-px bg-[#dfe7d2]" />
      <div className="absolute inset-x-4 bottom-10 mx-auto h-40 max-w-4xl rounded-[50%] bg-[#e7ecd9] blur-2xl" />

      <div className="relative flex w-full max-w-4xl justify-center">
        <div className="absolute left-0 top-20 hidden max-w-[190px] rounded-lg border border-[#dfe7d2] bg-white/90 p-4 text-left shadow-lg shadow-[#73815c]/10 backdrop-blur transition hover:shadow-xl md:block">
          <p className="text-xs font-black uppercase text-[#8c6d2d]">Scanner score</p>
          <p className="mt-1 text-3xl font-black text-[#23440f]">96</p>
          <p className="mt-1 text-sm font-semibold text-[#65705c]">
            Better picks surfaced before checkout.
          </p>
        </div>

        <div className="absolute right-0 top-28 hidden max-w-[210px] rounded-lg border border-[#dfe7d2] bg-white/90 p-4 text-left shadow-lg shadow-[#73815c]/10 backdrop-blur transition hover:shadow-xl md:block">
          <p className="text-xs font-black uppercase text-[#8c6d2d]">Product insight</p>
          <p className="mt-2 text-sm font-bold text-[#1f2c17]">Fresh Broccoli</p>
          <p className="mt-1 text-sm font-semibold text-[#65705c]">
            4.8 rating with clean ingredients.
          </p>
        </div>

        <div className="absolute bottom-16 left-10 hidden max-w-[210px] rounded-lg border border-[#dfe7d2] bg-white/90 p-4 text-left shadow-lg shadow-[#73815c]/10 backdrop-blur transition hover:shadow-xl lg:block">
          <p className="text-xs font-black uppercase text-[#8c6d2d]">Smart cart</p>
          <p className="mt-1 text-sm font-semibold text-[#65705c]">
            Compare products, ratings, and add safer food fast.
          </p>
        </div>

        <img
          src={phone}
          alt="Olive grocery app shown inside an iPhone style mockup"
          className="relative z-10 w-[250px] object-contain drop-shadow-2xl sm:w-[305px] lg:w-[360px]"
        />
      </div>
    </section>
  );
};

export default PhonePreview;
