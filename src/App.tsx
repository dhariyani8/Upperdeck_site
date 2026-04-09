import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "white", minHeight: "100vh", color: "black" }}>
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
