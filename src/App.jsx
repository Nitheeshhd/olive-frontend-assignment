import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhonePreview from "./components/PhonePreview";

function App() {
  const stats = [
    ["92/100", "Average clean-food score"],
    ["18k+", "Ingredients checked this week"],
    ["4.9/5", "Rated by grocery shoppers"],
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f9f2] text-[#18230f]">
      <Navbar />
      <main>
        <Hero />
        <PhonePreview />
        <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-3 px-5 pb-12 pt-4 sm:grid-cols-3 lg:pb-16">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-[#dfe7d2] bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur transition hover:shadow-lg"
            >
              <p className="text-2xl font-black text-[#23440f]">{value}</p>
              <p className="mt-1 text-sm font-medium text-[#65705c]">{label}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
