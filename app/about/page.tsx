import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "Meet Chef Ron Smith and learn about Dejay's Big Bite. 27+ years of culinary excellence bringing bold Southern flavors with Italian inspiration to Birmingham, AL."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-6xl mb-4">About Us</h1>
        <p className="text-brand-orange text-xl font-semibold">
          {site.tagline}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="font-display text-4xl mb-6">
            Meet {site.chef}
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              Led by <strong className="text-brand-orange">{site.chef}</strong>, Dejay's Big Bite 
              serves bold Southern flavors with an Italian touch. With <strong>{site.experience}</strong> in 
              professional kitchens, Chef Ron has perfected the art of creating crowd-pleasing 
              dishes that bring people together.
            </p>
            <p>
              From gourmet tacos and artisanal sandwiches to classic southern comfort dishes made 
              from scratch, every recipe is crafted with passion and precision. Our signature wings, 
              burgers, quesadillas, and ribs are elevated by our house-made SUPERLIT sauces—each 
              one designed to deliver unforgettable flavor.
            </p>
            <p>
              We pop up across the Birmingham area and cater private events, corporate lunches, 
              and celebrations of all sizes. Our mission is simple: <strong className="text-brand-cream">
              make people happy with great food</strong>.
            </p>
          </div>
        </div>

        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/food-collage.jpg"
            alt="Dejay's Big Bite delicious food"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="card bg-gradient-to-r from-brand-red/10 to-brand-orange/10 border-brand-orange/30 mb-12">
        <h2 className="font-display text-3xl mb-6 text-center">Our Story</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-zinc-300 leading-relaxed">
          <p>
            Dejay's Big Bite was born from a simple idea: combine the bold, comforting flavors 
            of Southern cuisine with the refined techniques of Italian cooking. The result? 
            A menu that's both familiar and exciting, traditional and innovative.
          </p>
          <p>
            Every dish tells a story of culinary passion, from locally-sourced ingredients to 
            family recipes passed down through generations. We believe great food has the power 
            to bring communities together, spark conversations, and create lasting memories.
          </p>
          <p className="text-brand-orange font-semibold">
            Whether you find us at a local event or book us for your private celebration, 
            we're here to deliver an unforgettable dining experience—one delicious bite at a time.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="card text-center">
          <div className="text-4xl mb-3">🔥</div>
          <h3 className="font-display text-2xl mb-2 text-brand-orange">Quality First</h3>
          <p className="text-zinc-400 text-sm">
            Fresh ingredients, bold flavors, and attention to every detail
          </p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-3">❤️</div>
          <h3 className="font-display text-2xl mb-2 text-brand-orange">Community Focused</h3>
          <p className="text-zinc-400 text-sm">
            Proud to serve Birmingham and support local events
          </p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-3">⭐</div>
          <h3 className="font-display text-2xl mb-2 text-brand-orange">Customer Satisfaction</h3>
          <p className="text-zinc-400 text-sm">
            Your happiness is our success—we don't settle for less
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="card text-center bg-zinc-900/80">
        <h2 className="font-display text-4xl mb-4">
          Ready to Experience the Flavor?
        </h2>
        <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
          Find us at local events, book us for catering, or give us a call to learn where we'll be next!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link className="btn" href="/menu">
            View Our Menu
          </Link>
          <Link className="btn btn-secondary" href="/catering">
            Book Catering
          </Link>
          <Link className="btn bg-green-700 hover:bg-green-600 border-green-600" href="/contact">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
