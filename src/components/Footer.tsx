import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" classname="bg-ud-black pt-20 pb-10 border-t border-white/10">
      <div classname="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div classname="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div classname="flex flex-col items-start">
            <h3 classname="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              The Upper Deck
            </h3>
            <p classname="text-gray-400 font-light mb-6">
              Snooker Cafe & Grill. Experience the best rooftop ambiance, premium food, and thrilling games.
            </p>
            <a href="https://www.instagram.com/theupperdeck.cafe_/" target="_blank" rel="noopener noreferrer" classname="flex items-center gap-2 text-ud-accent hover:text-white transition-colors">
              <instagram size="{20}"/>
              <span classname="uppercase tracking-wider text-sm">@theupperdeck.cafe_</span>
            </a>
          </div>

          {/* Contact Info */}
          <div classname="flex flex-col items-start md:items-center">
            <h4 classname="font-display text-lg text-white uppercase tracking-wider mb-6">Contact Us</h4>
            <ul classname="space-y-4">
              <li classname="flex items-start gap-3 text-gray-400">
                <mappin size="{20}" classname="text-ud-accent shrink-0 mt-1"/>
                <span classname="font-light">
                  3rd Floor, Radhe Shyam Complex,<br/>
                  Opp. Madhav Darshan,<br/>
                  Waghawadi Road, Bhavnagar - 364002.
                </span>
              </li>
              <li classname="flex items-center gap-3 text-gray-400">
                <phone size="{20}" classname="text-ud-accent shrink-0"/>
                <span classname="font-light">+91-7878 30 9955</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div classname="flex flex-col items-start md:items-end">
            <h4 classname="font-display text-lg text-white uppercase tracking-wider mb-6">Hours</h4>
            <ul classname="space-y-2 text-gray-400 font-light text-left md:text-right">
              <li>Monday - Sunday</li>
              <li classname="text-ud-accent">Open All Days</li>
              <li classname="mt-4 text-sm italic">Call for bookings & reservations</li>
            </ul>
          </div>

        </div>

        <div classname="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} The Upper Deck Cafe Snooker & Grill. All rights reserved.</p>
          <p classname="mt-2 md:mt-0">Designed for a premium experience.</p>
        </div>
      </div>
    </footer>
  );
}
