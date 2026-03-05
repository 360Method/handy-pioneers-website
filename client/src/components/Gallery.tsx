/**
 * Gallery — Carousel-style project cards
 * Design: Pacific Northwest Craftsman
 * Horizontal scrolling carousel with category filter pills.
 * Clicking a card opens a full-screen modal/lightbox with full project details.
 */

import { useState, useRef } from "react";
import { X, Calendar, Tag, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663386531688/PMFhFJDf55eBmmtmS9ai7o";

interface Project {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  description: string;
  image: string;
  tags: string[];
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Porch Step Repair in Battle Ground",
    category: "Stairs & Railings",
    date: "November 21, 2025",
    excerpt: "Rebuilt two rotting steps and installed new railings for a safe, beautiful front porch.",
    description: "At Handy Pioneers, we believe in making your home safer and more comfortable. Realizing the original front porch steps were not safe and starting to warp, we rolled up our sleeves and got to work. Our expertise in porch step repair came in handy as we rebuilt the two steps and railings. Now, you can safely use your front porch without any worries.",
    image: `${CDN}/porch-step-repair_2b0660e5.jpg`,
    tags: ["battle ground handyman", "battle ground wa", "Clark County", "porch step repair", "railings"],
    location: "Battle Ground, WA",
  },
  {
    id: 2,
    title: "Gutter Cleaning Service in Vancouver",
    category: "Gutters",
    date: "October 16, 2025",
    excerpt: "Removed debris, flushed downspouts, and tidied the roof — turning overflowing gutters into an efficient drainage system.",
    description: "One thing we at Handy Pioneers understand is that rainwater flowing over your gutter can lead to a mess. Recently tackled a project where this was happening. Our gutter cleaning service got to the heart of the matter. We removed accumulated debris, flushed the downspouts, and tidied up the roof. This simple procedure turned over-flooding gutters back into an efficient drainage system, protecting our customer's property.",
    image: `${CDN}/gutter-cleaning_26e21b16.webp`,
    tags: ["gutter cleaning", "Clark County", "debris removal", "downspout flushing", "Vancouver WA"],
    location: "Vancouver, WA",
  },
  {
    id: 3,
    title: "Graffiti Removal and Painting in Vancouver",
    category: "Painting",
    date: "October 1, 2025",
    excerpt: "Transformed a vandalized vacant building with a fresh coat of paint — quick, efficient, and restored to full curb appeal.",
    description: "When a busy out-of-town client found themselves with a littered and graffiti-covered vacant building, they reached out to Handy Pioneers for help. We jumped in immediately, offering our top-notch graffiti removal and painting service. After swiftly cleaning up the trash, we worked hard to transform the vandalized exterior with a fresh coat of paint. This quick and efficient solution relieved our client from the burden while restoring their property's look and value.",
    image: `${CDN}/graffiti-removal_9fbe4828.png`,
    tags: ["graffiti removal", "painting service", "building maintenance", "vacant building cleanup", "Vancouver WA"],
    location: "Vancouver, WA",
  },
  {
    id: 4,
    title: "Porch Screen Installation in Vancouver",
    category: "Screen Installation",
    date: "October 1, 2025",
    excerpt: "Installed a privacy screen and rod for a homeowner who needed it done right but lacked the time and tools.",
    description: "Recently, the team at Handy Pioneers completed a porch screen installation job that significantly improved a home's privacy. This particular client wanted a porch screen and rod installed but lacked the necessary time and tools to carry out the task herself. Our skilled handymen stepped in, ensuring a quick and efficient installation that met the client's desires.",
    image: `${CDN}/porch-screen_296aecd4.jpg`,
    tags: ["porch screen installation", "privacy screen", "rod installation", "Clark County", "Vancouver WA"],
    location: "Vancouver, WA",
  },
  {
    id: 5,
    title: "Kitchen Water Damage Repair in Camas",
    category: "Home Repair",
    date: "September 18, 2025",
    excerpt: "What started as moving a fridge revealed major water damage — drywall, flooring, paint, and new cabinet all restored.",
    description: "When a customer reached out to us at Handy Pioneers for help moving a heavy fridge to fix a water leak, we discovered more than what we initially bargained for. There was significant water damage. Transforming an unfortunate scenario into a fresh renovation opportunity, we performed kitchen water damage repair, restoring the drywall, flooring, painting, and even installing new cabinet and trim.",
    image: `${CDN}/shower-recaulking_4ec1b209.webp`,
    tags: ["kitchen water damage repair", "drywall repair", "flooring installation", "cabinet installation", "Camas WA"],
    location: "Camas, WA",
  },
  {
    id: 6,
    title: "Shower Re-Caulking Service in Camas",
    category: "Caulking",
    date: "September 15, 2025",
    excerpt: "Removed old caulk, prepped the surface, and applied fresh caulk — shower left in top condition.",
    description: "A busy customer barely had the time or tools necessary for a shower re-caulking service. The task involved more than just removing the old caulk. At Handy Pioneers, we carefully prepared the surface before applying the new caulk, making sure the job was done right and the customer's shower was left in top condition. With our help, the customer was able to save valuable time and avoid potential complications.",
    image: `${CDN}/shower-recaulking_4ec1b209.webp`,
    tags: ["shower re-caulking", "caulking removal", "new caulk application", "Camas WA", "Clark County"],
    location: "Camas, WA",
  },
  {
    id: 7,
    title: "Porch Step & Lattice Replacement in Battle Ground",
    category: "Stairs & Railings",
    date: "September 15, 2025",
    excerpt: "Replaced rotting steps and privacy lattice for a returning client — curb appeal and safety fully restored.",
    description: "At Handy Pioneers, we pride ourselves on keeping our clients' homes in top shape. Recently, we completed a porch step and lattice replacement for a returning client whose front porch steps and privacy lattice had started to rot. This boosted the appeal of their home and increased the longevity and safety of their porch.",
    image: `${CDN}/porch-lattice_1e6a1918.jpg`,
    tags: ["porch step repair", "lattice installation", "front porch remodel", "Battle Ground WA", "Clark County"],
    location: "Battle Ground, WA",
  },
  {
    id: 8,
    title: "Kitchen Island Appliance Installation in Vancouver",
    category: "Appliance Installation",
    date: "August 1, 2025",
    excerpt: "Installed a telescoping downdraft and gas cooktop on a newly countered kitchen island — more functional and better looking.",
    description: "At Handy Pioneers, we recently finished a Punch List project in Vancouver that involved adding more functionality and appeal to a kitchen island. We installed a telescoping downdraft and a gas cooktop to match our client's newly installed countertops. The client noted: 'Marcin did an excellent job installing my cooktop and downdraft. He arrived promptly and listened carefully to what I wanted. I would definitely recommend him.'",
    image: `${CDN}/kitchen-island_b506045b.jpg`,
    tags: ["appliance installation", "gas cooktop installation", "kitchen island upgrade", "telescoping downdraft", "Vancouver WA"],
    location: "Vancouver, WA",
  },
  {
    id: 9,
    title: "Pressure Washing Service in Vancouver",
    category: "Pressure Washing",
    date: "July 1, 2025",
    excerpt: "Years of grime, moss, and tough stains wiped out from a driveway — curb appeal fully restored in one visit.",
    description: "Had a fruitful day cleaning a driveway for a client in Vancouver. Years of grime, moss, and tough stains completely wiped out with our power-packed pressure washing service. We take pride here at Handy Pioneers to rejuvenate your property's exterior, rapidly boosting its curb appeal. We extend this service to the whole of Clark County, including Camas.",
    image: `${CDN}/pressure-washing-driveway_42597364.jpg`,
    tags: ["pressure washing", "driveway cleaning", "moss removal", "curb appeal", "Vancouver WA"],
    location: "Vancouver, WA",
  },
  {
    id: 10,
    title: "Deck Pressure Washing in Camas",
    category: "Pressure Washing",
    date: "July 1, 2025",
    excerpt: "Renewed a weather-beaten, moss-covered deck — now clean, safe, and prepped for summer.",
    description: "At Handy Pioneers, we recently helped a homeowner in Camas rediscover the beauty of their deck. This deck was showing the signs of many seasons passing, weather-beaten and rendered unsafe due to moss build-up. We were able to renew it with a robust session of deck pressure washing. The wood is now clean as a whistle — safe for foot traffic and prepped for the upcoming summer activities.",
    image: `${CDN}/deck-pressure-washing_fb06fd69.webp`,
    tags: ["deck pressure washing", "moss removal", "deck restoration", "Camas WA", "Clark County"],
    location: "Camas, WA",
  },
  {
    id: 11,
    title: "House Washing Services in Vancouver",
    category: "Pressure Washing",
    date: "July 1, 2025",
    excerpt: "Low-pressure house wash removed dirt, mildew, and grime from siding — exterior restored to original curb appeal.",
    description: "Earlier, we had a great project in Vancouver where we noticed that the siding was covered in dirt, mildew, and grime. We used our expertise in Pressure Washing Services to perform a low-pressure house wash. The result? A stunning, bright, and refreshed exterior restored to its original curb appeal — no surface damage involved. Homeowners in Vancouver, Camas, and Clark County rely on us for safe and effective exterior cleaning.",
    image: `${CDN}/house-washing_aa00df1e.webp`,
    tags: ["pressure washing", "house wash", "siding cleaning", "curb appeal restoration", "Vancouver WA"],
    location: "Vancouver, WA",
  },
  {
    id: 12,
    title: "Window Cleaning Service in Camas",
    category: "Windows",
    date: "June 16, 2025",
    excerpt: "Cleaned windows buried under dust, streaks, and spider webs — sills, tracks, and screens included.",
    description: "These windows in Camas were terribly hidden behind layers of dust, pesky streaks, and spider webs tucked away in the inside sills. But now, thanks to the team at Handy Pioneers, they're sparkling and fresh — letting the light flood back in again! We don't just clean your windows, but also pay attention to the interior sills, tracks, and screens.",
    image: `${CDN}/window-cleaning_66a54ef2.jpg`,
    tags: ["window cleaning", "streak removal", "interior sill cleaning", "Camas WA", "Clark County"],
    location: "Camas, WA",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalIndex, setModalIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openModal = (project: Project) => {
    const idx = filtered.findIndex((p) => p.id === project.id);
    setSelectedProject(project);
    setModalIndex(idx);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const prevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (modalIndex - 1 + filtered.length) % filtered.length;
    setModalIndex(newIndex);
    setSelectedProject(filtered[newIndex]);
  };

  const nextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (modalIndex + 1) % filtered.length;
    setModalIndex(newIndex);
    setSelectedProject(filtered[newIndex]);
  };

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = 340;
    carouselRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-20 overflow-hidden" style={{ backgroundColor: "oklch(0.97 0.015 80)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 reveal">
          <div className="section-divider justify-center mb-4">
            <span className="section-divider-label">Our Work</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.07 160)" }}
          >
            Project Gallery
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "oklch(0.45 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Real projects, real results. Browse our completed work across Clark County.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                backgroundColor:
                  activeCategory === cat ? "oklch(0.32 0.07 160)" : "oklch(0.90 0.015 80)",
                color:
                  activeCategory === cat ? "oklch(1 0 0)" : "oklch(0.35 0.04 80)",
                border: "none",
                letterSpacing: "0.03em",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel — full-width with overflow scroll */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: "oklch(1 0 0)", color: "oklch(0.22 0.07 160)", border: "1px solid oklch(0.88 0.015 80)" }}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: "oklch(1 0 0)", color: "oklch(0.22 0.07 160)", border: "1px solid oklch(0.88 0.015 80)" }}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable track */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto px-12 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {filtered.map((project) => (
            <article
              key={project.id}
              onClick={() => openModal(project)}
              className="flex-none rounded-xl overflow-hidden border cursor-pointer group"
              style={{
                width: "300px",
                backgroundColor: "oklch(1 0 0)",
                borderColor: "oklch(0.88 0.015 80)",
                boxShadow: "0 2px 8px oklch(0 0 0 / 0.06)",
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px oklch(0 0 0 / 0.14)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px oklch(0 0 0 / 0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ height: "180px" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: "oklch(0.32 0.07 160)",
                    color: "oklch(1 0 0)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    letterSpacing: "0.07em",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-4">
                <div
                  className="flex items-center gap-1 text-xs mb-1.5"
                  style={{ color: "oklch(0.60 0.04 65)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  <Calendar size={11} />
                  <span>{project.date}</span>
                </div>

                <h3
                  className="font-bold text-base mb-1.5 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.07 160)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "oklch(0.48 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {project.excerpt}
                </p>

                <div className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.55 0.04 65)" }}>
                  <MapPin size={11} />
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{project.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container">
        <div className="text-center mt-8 reveal">
          <button
            className="hcp-button"
            onClick={() => (window as any).HCPWidget?.openModal()}
          >
            Request Estimate Today
          </button>
        </div>
      </div>

      {/* Full-screen Modal / Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "oklch(0 0 0 / 0.82)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{ backgroundColor: "oklch(1 0 0)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.92 0.01 80)", color: "oklch(0.22 0.07 160)" }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Prev / Next arrows */}
            <button
              onClick={prevModal}
              className="absolute left-3 z-20 w-9 h-9 rounded-full flex items-center justify-center shadow-md"
              style={{ top: "calc(200px - 18px)", backgroundColor: "oklch(1 0 0 / 0.92)", color: "oklch(0.22 0.07 160)" }}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextModal}
              className="absolute right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center shadow-md"
              style={{ top: "calc(200px - 18px)", backgroundColor: "oklch(1 0 0 / 0.92)", color: "oklch(0.22 0.07 160)" }}
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>

            {/* Hero image */}
            <div className="w-full overflow-hidden rounded-t-2xl" style={{ height: "260px" }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: "oklch(0.32 0.07 160)",
                    color: "oklch(1 0 0)",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  {selectedProject.category}
                </span>
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "oklch(0.55 0.04 65)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  <Calendar size={11} />
                  {selectedProject.date}
                </span>
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "oklch(0.55 0.04 65)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  <MapPin size={11} />
                  {selectedProject.location}
                </span>
              </div>

              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.07 160)" }}
              >
                {selectedProject.title}
              </h2>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "oklch(0.38 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs"
                    style={{
                      backgroundColor: "oklch(0.93 0.015 80)",
                      color: "oklch(0.40 0.04 80)",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    <Tag size={9} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  className="hcp-button"
                  onClick={() => {
                    closeModal();
                    (window as any).HCPWidget?.openModal();
                  }}
                >
                  Request Estimate
                </button>
                <a
                  href="tel:+13605449858"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm border transition-colors"
                  style={{
                    borderColor: "oklch(0.32 0.07 160)",
                    color: "oklch(0.32 0.07 160)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    textDecoration: "none",
                  }}
                >
                  Call (360) 544-9858
                </a>
              </div>

              <p
                className="text-xs mt-4 text-center"
                style={{ color: "oklch(0.65 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Project {modalIndex + 1} of {filtered.length} — click arrows to browse
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
