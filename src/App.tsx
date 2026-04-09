import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ud-black text-white selection:bg-ud-accent selection:text-ud-black">
      <Navbar />

      <main>
        <Hero />
        <MenuSection />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
