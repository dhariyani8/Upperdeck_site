/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div classname="min-h-screen bg-ud-black text-white selection:bg-ud-accent selection:text-ud-black">
      <navbar/>
      <main>
        <hero/>
        <menusection/>
        <gallery/>
      </main>
      <footer/>
    </div>
  );
}
