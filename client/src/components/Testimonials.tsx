import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Vancouver, WA",
    rating: 5,
    text: "Marcin and his team did an outstanding job on our kitchen remodel. They were on time, communicated every step of the way, and the finished product exceeded our expectations. The craftsmanship is top-notch. We'll definitely be calling Handy Pioneers for our bathroom next.",
  },
  {
    name: "James T.",
    location: "Camas, WA",
    rating: 5,
    text: "I hired Handy Pioneers for a deck repair and some rot work on my siding. They were incredibly professional — showed up when they said they would, gave me a fair and transparent estimate, and the work looks great. My neighbors have already asked for their number!",
  },
  {
    name: "Linda K.",
    location: "Battle Ground, WA",
    rating: 5,
    text: "We had a long punch list from our home inspection and Handy Pioneers knocked it all out in two days. Everything from door adjustments to drywall patches to gutter cleaning. Highly recommend for anyone who needs reliable, quality work done right.",
  },
  {
    name: "David R.",
    location: "Ridgefield, WA",
    rating: 5,
    text: "The flooring installation was flawless. They moved furniture, completed the job ahead of schedule, and cleaned up perfectly. The 1-year guarantee gave us real peace of mind. This is the kind of contractor you want on your side.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-20"
      style={{ backgroundColor: "oklch(0.97 0.015 80)" }}
    >
      <div className="container">
        <div className="text-center mb-14 reveal">
          <div className="section-divider justify-center mb-4">
            <span className="section-divider-label">What Clients Say</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.07 160)" }}
          >
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#C8892A" color="#C8892A" />
              ))}
            </div>
            <span
              className="text-base font-semibold"
              style={{ color: "oklch(0.45 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              5.0 · Rated on Google &amp; Facebook
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map(({ name, location, rating, text }, i) => (
            <div
              key={i}
              className="reveal rounded-xl p-7 border relative"
              style={{
                backgroundColor: "oklch(1 0 0)",
                borderColor: "oklch(0.88 0.015 80)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-6 right-6 opacity-10"
                style={{ color: "oklch(0.32 0.07 160)" }}
              />

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#C8892A" color="#C8892A" />
                ))}
              </div>

              {/* Review text */}
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.35 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                "{text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: "oklch(0.32 0.07 160)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {name[0]}
                </div>
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: "oklch(0.22 0.07 160)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="https://www.google.com/search?q=Handy+Pioneers+Vancouver+WA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            style={{ color: "oklch(0.32 0.07 160)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
