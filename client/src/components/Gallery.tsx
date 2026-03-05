const KITCHEN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663386531688/PMFhFJDf55eBmmtmS9ai7o/hp-kitchen-remodel-88yiwvrXQnLL5RmZHTY29W.webp";
const DECK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663386531688/PMFhFJDf55eBmmtmS9ai7o/hp-deck-work-XYHn2ahrMcwDeKArKyfhkD.webp";

// Unsplash images for additional gallery items
const PAINTING = "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80";
const BATHROOM = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80";
const FLOORING = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80";
const FENCE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";

const projects = [
  { img: KITCHEN, label: "Kitchen Remodel", location: "Vancouver, WA", span: "col-span-2 row-span-2" },
  { img: DECK, label: "Deck Build", location: "Battle Ground, WA", span: "" },
  { img: BATHROOM, label: "Bathroom Refresh", location: "Camas, WA", span: "" },
  { img: PAINTING, label: "Exterior Painting", location: "Ridgefield, WA", span: "" },
  { img: FLOORING, label: "Hardwood Flooring", location: "Washougal, WA", span: "" },
  { img: FENCE, label: "Fence Repair", location: "Vancouver, WA", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: "oklch(1 0 0)" }}>
      <div className="container">
        <div className="text-center mb-14 reveal">
          <div className="section-divider justify-center mb-4">
            <span className="section-divider-label">Our Work</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.07 160)" }}
          >
            Recent Projects
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Real work, real results — across Clark County homes.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
          {projects.map(({ img, label, location, span }, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg group ${span}`}
              style={{ aspectRatio: span ? "1/1" : "4/3" }}
            >
              <img
                src={img}
                alt={`${label} in ${location}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                style={{ background: "linear-gradient(to top, rgba(20,35,28,0.85) 0%, transparent 60%)" }}
              >
                <div
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {label}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.80 0.10 65)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <button
            className="hcp-button"
            onClick={() => (window as any).HCPWidget?.openModal()}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
