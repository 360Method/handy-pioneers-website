/**
 * Gallery — Blog-style project cards
 * Design: Pacific Northwest Craftsman
 * Each card: thumbnail, category badge, title, excerpt, date, location, tags
 * Click opens a modal with larger photo, full description, tags, and CTAs
 */

import { useState } from "react";
import { X, Calendar, Tag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    excerpt: "Turned a shaky step situation into a rock-solid entrance — rebuilt two steps and installed new railings for a safe, beautiful front porch.",
    description: "At Handy Pioneers, we believe in making your home safer and more comfortable. The original front porch steps were not safe and starting to warp, so we rebuilt the two steps and installed new railings. Now the homeowner can safely use their front porch without any worries — and the curb appeal speaks for itself.",
    image: `${CDN}/railing-install_7c601685.jpg`,
    tags: ["porch repair", "step rebuild", "railings", "Battle Ground"],
    location: "Battle Ground, WA",
  },
  {
    id: 2,
    title: "ADU Kitchen Conversion",
    category: "Remodeling",
    date: "October 15, 2025",
    excerpt: "Transformed an underused bonus room into a fully functional accessory dwelling unit with a modern kitchen — adding real value to the property.",
    description: "This bonus room-to-ADU conversion was a full transformation. We designed and built a compact but highly functional kitchen layout, installed cabinetry, countertops, and appliances, and finished the space with modern flooring and trim. The result is a self-contained living unit that significantly increased the property's rental potential and market value.",
    image: `${CDN}/adu-conversion_ed585b3c.jpg`,
    tags: ["ADU", "kitchen remodel", "remodeling", "Vancouver"],
    location: "Vancouver, WA",
  },
  {
    id: 3,
    title: "New Bathroom Installation",
    category: "Bathroom Remodeling",
    date: "September 8, 2025",
    excerpt: "Complete bathroom build-out from rough plumbing to final tile work — a clean, modern finish that the homeowner loves.",
    description: "This was a full bathroom installation in a space that previously had none. We coordinated rough plumbing, tile installation, vanity and fixture placement, and all finish work. Every detail was planned to maximize the small footprint while delivering a spa-like feel. The homeowner was thrilled with the clean lines and durable materials chosen.",
    image: `${CDN}/new-bathroom_3c55bd88.jpg`,
    tags: ["bathroom remodel", "tile work", "plumbing", "Camas"],
    location: "Camas, WA",
  },
  {
    id: 4,
    title: "Basement Upgrade",
    category: "General Contracting",
    date: "August 20, 2025",
    excerpt: "Converted a raw, unfinished basement into a comfortable living space — new framing, drywall, flooring, and lighting throughout.",
    description: "The homeowners wanted to unlock the potential of their unfinished basement. We handled everything from framing new partition walls and installing insulation to hanging drywall, painting, laying luxury vinyl plank flooring, and installing recessed lighting. The result is a bright, comfortable bonus room that the whole family now uses daily.",
    image: `${CDN}/basement-upgrade_ec9135c7.jpg`,
    tags: ["basement finishing", "drywall", "flooring", "Ridgefield"],
    location: "Ridgefield, WA",
  },
  {
    id: 5,
    title: "Custom Kitchen Shelving",
    category: "Carpentry & Woodworking",
    date: "July 12, 2025",
    excerpt: "Built and installed custom open shelving in a kitchen remodel — maximizing storage while adding a warm, craftsman aesthetic.",
    description: "The client wanted to replace upper cabinets with open shelving for a more open, modern kitchen feel. We custom-built and installed floating shelves using solid wood with a natural stain finish, anchored securely to the wall studs. The before-and-after transformation was dramatic — the kitchen feels twice as large and the shelves have become a design feature in their own right.",
    image: `${CDN}/kitchen-shelves_13a61a81.jpg`,
    tags: ["custom shelving", "carpentry", "kitchen", "Vancouver"],
    location: "Vancouver, WA",
  },
  {
    id: 6,
    title: "Smart Lock & Security Upgrade",
    category: "Home Repair",
    date: "June 5, 2025",
    excerpt: "Installed a smart lock system and upgraded door hardware throughout the home — improved security with zero compromise on style.",
    description: "This homeowner wanted to modernize their home security without a full door replacement. We installed a keypad smart lock on the front entry, upgraded deadbolts on all exterior doors, and replaced worn door hardware throughout. The installation was clean and professional, and the client can now manage access remotely from their phone.",
    image: `${CDN}/smart-lock_e5016a4e.jpg`,
    tags: ["smart home", "security", "door hardware", "Battle Ground"],
    location: "Battle Ground, WA",
  },
  {
    id: 7,
    title: "Light Fixture Replacement",
    category: "Home Repair",
    date: "May 18, 2025",
    excerpt: "Swapped out dated overhead fixtures for modern pendant and recessed lighting — a simple upgrade that completely changed the room's atmosphere.",
    description: "Lighting is one of the highest-impact, most cost-effective upgrades a homeowner can make. In this project, we replaced several dated ceiling fixtures with a combination of modern pendant lights over the kitchen island and recessed LED lighting in the living area. The difference in ambiance was immediate and dramatic.",
    image: `${CDN}/light-fixture-1_5f997e6e.jpg`,
    tags: ["lighting", "electrical", "home upgrade", "Vancouver"],
    location: "Vancouver, WA",
  },
  {
    id: 8,
    title: "Gutter Cleaning & Inspection",
    category: "Gutters",
    date: "April 3, 2025",
    excerpt: "Full gutter cleaning and inspection across a two-story home — cleared debris, flushed downspouts, and caught a repair before the rainy season.",
    description: "Pacific Northwest homeowners know that clogged gutters can lead to serious water damage. We performed a thorough gutter cleaning on this two-story home, removing debris from all gutters, flushing all downspouts, and doing a full inspection. We identified and repaired a section of gutter that had separated from the fascia — catching a problem before it became an expensive repair.",
    image: `${CDN}/light-fixture-2_72156f07.jpg`,
    tags: ["gutters", "maintenance", "Clark County", "Vancouver"],
    location: "Vancouver, WA",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const filtered = activeCategory === "All"
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

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (modalIndex - 1 + filtered.length) % filtered.length;
    setModalIndex(newIndex);
    setSelectedProject(filtered[newIndex]);
  };

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (modalIndex + 1) % filtered.length;
    setModalIndex(newIndex);
    setSelectedProject(filtered[newIndex]);
  };

  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: "oklch(0.97 0.015 80)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 reveal">
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
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                backgroundColor: activeCategory === cat ? "oklch(0.32 0.07 160)" : "oklch(0.90 0.015 80)",
                color: activeCategory === cat ? "oklch(1 0 0)" : "oklch(0.35 0.04 80)",
                border: "none",
                letterSpacing: "0.03em",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog-style Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="reveal rounded-xl overflow-hidden border cursor-pointer group"
              style={{
                backgroundColor: "oklch(1 0 0)",
                borderColor: "oklch(0.88 0.015 80)",
                transitionDelay: `${i * 60}ms`,
                boxShadow: "0 2px 8px oklch(0 0 0 / 0.06)",
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onClick={() => openModal(project)}
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
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: "oklch(0.32 0.07 160)",
                    color: "oklch(1 0 0)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div
                  className="flex items-center gap-1.5 text-xs mb-2"
                  style={{ color: "oklch(0.60 0.04 65)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  <Calendar size={12} />
                  <span>{project.date}</span>
                  <span className="mx-1">·</span>
                  <span>{project.location}</span>
                </div>

                <h3
                  className="font-bold text-lg mb-2 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.07 160)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.45 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {project.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
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

                <div
                  className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "oklch(0.65 0.14 65)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <button
            className="hcp-button"
            onClick={() => (window as any).HCPWidget?.openModal()}
          >
            Request Estimate Today
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "oklch(0 0 0 / 0.78)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{ backgroundColor: "oklch(1 0 0)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.92 0.01 80)", color: "oklch(0.22 0.07 160)" }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Prev/Next navigation */}
            <button
              onClick={prevProject}
              className="absolute left-3 top-40 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "oklch(1 0 0 / 0.92)", color: "oklch(0.22 0.07 160)" }}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-3 top-40 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "oklch(1 0 0 / 0.92)", color: "oklch(0.22 0.07 160)" }}
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>

            {/* Hero image */}
            <div className="w-full overflow-hidden rounded-t-2xl" style={{ aspectRatio: "16/9" }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
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
                  <Calendar size={12} />
                  {selectedProject.date} · {selectedProject.location}
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.07 160)" }}
              >
                {selectedProject.title}
              </h2>

              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.38 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs"
                    style={{
                      backgroundColor: "oklch(0.93 0.015 80)",
                      color: "oklch(0.40 0.04 80)",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

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

              {/* Project counter */}
              <p
                className="text-xs mt-4 text-center"
                style={{ color: "oklch(0.65 0.02 80)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Project {modalIndex + 1} of {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
