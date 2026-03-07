/**
 * Blog post data for Handy Pioneers
 * Each post follows the Hook-Story-Offer framework.
 * Add new posts to the top of the array (newest first).
 *
 * Fields:
 *   slug        — URL-safe identifier, used in /blog/:slug
 *   title       — Full post title
 *   excerpt     — 1–2 sentence summary shown on the index card
 *   date        — Display date string
 *   isoDate     — ISO 8601 date for sorting and schema
 *   author      — Author display name
 *   category    — Content category label
 *   audience    — Target audience segment(s)
 *   tags        — Array of keyword/topic tags
 *   image       — CDN URL for hero image
 *   imageAlt    — Alt text for hero image
 *   readTime    — Estimated read time in minutes
 *   body        — Array of content blocks (type: "h2" | "p" | "ul" | "ol" | "blockquote" | "cta")
 *   seoTitle    — <title> tag override (defaults to title + " | Handy Pioneers")
 *   seoDesc     — <meta name="description"> content
 */

export interface BlogBlock {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "blockquote" | "cta";
  text?: string;
  items?: string[];
  ctaLabel?: string;
  ctaAction?: "booking" | "phone" | "link";
  ctaHref?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  author: string;
  category: string;
  audience: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  readTime: number;
  body: BlogBlock[];
  seoTitle?: string;
  seoDesc?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-360-method-why-we-look-at-your-whole-home",
    title: "The 360° Method: Why We Look at Your Whole Home, Not Just the One Thing You Called About",
    excerpt:
      "Most contractors fix what you point at. We've built a system that finds what you haven't noticed yet — and it's changing how Clark County homeowners think about home care.",
    date: "April 6, 2026",
    isoDate: "2026-04-06",
    author: "Handy Pioneers Team",
    category: "Home Care Strategy",
    audience: ["Homeowners", "Prospects", "Clark County Community"],
    tags: [
      "360° Method",
      "whole home assessment",
      "preventive maintenance",
      "Vancouver WA",
      "Clark County",
      "home systems",
      "home inspection",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663386531688/PMFhFJDf55eBmmtmS9ai7o/blog-360-method-hero_cd5decc0.jpg",
    imageAlt:
      "Pacific Northwest craftsman home exterior — the kind of home the 360° Method was designed to protect",
    readTime: 6,
    seoTitle:
      "The 360° Method: Whole Home Assessment in Vancouver WA | Handy Pioneers",
    seoDesc:
      "Most contractors fix what you point at. Handy Pioneers built the 360° Method — a complete home systems assessment that finds what you haven't noticed yet. Free for Clark County homeowners.",
    body: [
      {
        type: "p",
        text: "Most contractors fix what you point at. You call about a squeaky floor, they fix the squeaky floor. You call about a leaky faucet, they fix the leaky faucet. And then they leave — without ever telling you about the soft spot in the subfloor three feet away, or the slow drip under the cabinet that's been there since last winter.",
      },
      {
        type: "p",
        text: "We've built a different system. We call it the 360° Method — and it's changing how Clark County homeowners think about home care.",
      },
      {
        type: "h2",
        text: "The Story That Started It All",
      },
      {
        type: "p",
        text: "A homeowner in Camas called us about a squeaky floor in her hallway. Standard job — we've done hundreds of them. Our tech arrived, walked the hallway, and fixed the squeak in about 45 minutes.",
      },
      {
        type: "p",
        text: "But before he left, he did what we train every Handy Pioneers tech to do: he walked the rest of the house. Not intrusively — just a professional set of eyes moving through each space with a checklist in mind.",
      },
      {
        type: "p",
        text: "What he found: a bathroom exhaust fan that was venting into the attic instead of outside (a moisture and mold risk), a deck ledger board with early signs of separation from the house framing, two windows with failed seals (visible fogging between the panes), and a GFCI outlet in the garage that hadn't been tested in years and didn't trip when tested.",
      },
      {
        type: "p",
        text: "None of those things were why she called. All of them were real problems — at various stages of becoming expensive ones.",
      },
      {
        type: "p",
        text: "She left that visit with a written, prioritized home health report. Twelve items. Ranked by urgency. With rough cost estimates for each. She told us it was the first time in eight years of homeownership that she felt like she actually knew what was going on with her house.",
      },
      {
        type: "h2",
        text: "What the 360° Method Actually Is",
      },
      {
        type: "p",
        text: "A home is not a collection of independent problems. It's an interconnected system — and problems in one area almost always have causes or consequences in another. Water damage in a cabinet usually traces back to a failing supply line or a caulk gap at the sink. A soft floor usually means moisture below. A high energy bill usually means air sealing failures at the envelope.",
      },
      {
        type: "p",
        text: "The 360° Method is a structured walk-through protocol that Handy Pioneers runs on every new client engagement. It evaluates five interconnected systems:",
      },
      {
        type: "ul",
        items: [
          "**Envelope** — Roof condition, siding integrity, window and door seals, caulking lines, fascia and soffit",
          "**Structure** — Foundation visible areas, deck ledger and post bases, fence posts, stair stringers",
          "**Moisture** — Gutters and downspout extensions, crawl space vapor barrier, bathroom ventilation, under-sink areas",
          "**Interior Finish** — Flooring condition, wall and ceiling staining, trim and cabinetry, door and window operation",
          "**Safety** — GFCI outlets, smoke and CO detector placement and function, handrail integrity, egress windows",
        ],
      },
      {
        type: "p",
        text: "For each system, we're looking for three things: active problems that need immediate attention, early-stage issues that should be monitored or addressed this season, and deferred maintenance items that are fine now but will become expensive if ignored for another year or two.",
      },
      {
        type: "h2",
        text: "Why This Matters More in Clark County",
      },
      {
        type: "p",
        text: "The Pacific Northwest has a specific set of home health challenges that most national home care content doesn't address. The combination of wet winters, mild summers, and the freeze-thaw cycles in our shoulder seasons creates moisture stress that shows up in predictable places: deck ledger connections, window sill caulking, crawl space vapor barriers, and roof moss accumulation.",
      },
      {
        type: "p",
        text: "Clark County homes — especially those built in the 1980s through early 2000s — were often built with materials and techniques that are now at or past their expected service life. A 1995 deck. A 2002 roof. Original windows from when the house was built. These aren't problems yet. But they're on a timeline.",
      },
      {
        type: "p",
        text: "The 360° Method was designed specifically for this environment. It's not a generic national checklist — it's a protocol built around what actually fails in Clark County homes, in Clark County weather, at Clark County home ages.",
      },
      {
        type: "h2",
        text: "What You Get at the End",
      },
      {
        type: "p",
        text: "Every 360° Assessment produces a written home health report — a prioritized list of findings organized by urgency, with plain-language descriptions, photos of anything notable, and rough cost estimates for each item. You're not getting a sales pitch. You're getting information.",
      },
      {
        type: "p",
        text: "Some items you'll handle yourself. Some you'll want us to address. Some you'll want to get a second opinion on. That's fine. The goal of the 360° Method isn't to sell you a repair list — it's to make sure you know what's going on with your home so you can make informed decisions.",
      },
      {
        type: "blockquote",
        text: "\"I've owned this house for eight years and I've never felt like I actually knew what was going on with it. This was the first time.\" — Camas homeowner, April 2026",
      },
      {
        type: "h2",
        text: "How to Get Your 360° Assessment",
      },
      {
        type: "p",
        text: "The 360° Assessment is free for new clients in Clark County. It takes about 60–90 minutes depending on the size of your home. You'll receive your written report within 24 hours of the visit.",
      },
      {
        type: "p",
        text: "If you're an existing Handy Pioneers client, ask your tech to run the 360° protocol on your next visit — we'll add it to any scheduled job at no additional charge.",
      },
      {
        type: "cta",
        text: "Schedule your free 360° Home Assessment",
        ctaLabel: "Schedule Free Assessment",
        ctaAction: "booking",
      },
    ],
  },
];
