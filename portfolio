'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ChevronDown, X } from "lucide-react";

// ——— CONFIG ———
const YOU = {
  name: "Joseph Burgoyne",
  title: "Naval Architecture + Techno‑Economic Modeling",
  email: "jburgoyn@umich.edu",
  phone: "+1-313-870-7969",
  linkedin: "https://www.linkedin.com/in/josephpburgoyne",
  location: "Ann Arbor, MI",
  blurb:
    "Grad student building decision tools for maritime decarbonization. I like problems where hydro, power, economics, and practical buildability collide.",
};

// NOTE: Use side: 'left' or 'right' to position relative to timeline
const ITEMS = [
  {
    date: "2025",
    title: "Graduate Research — Zero‑Emission Power Barge",
    side: "left",
    image: "/images/zeb_mock.png",
    tags: ["Python", "TEA/LCA", "Fuel Pathways", "Uncertainty"],
    summary:
      "Python engine + web UI for lifecycle cost & emissions of grid‑tied / alt‑fuel power barges for Detroit.",
    details:
      "Modeled LNG, biofuels, ammonia, hydrogen, and battery pathways; integrated efficiency stacks and TTW/WtW logic; presented uncertainty‑informed design at PRADS 2025.",
    gallery: ["/images/zeb_mock.png", "/images/zeb_flow.png"],
  },
  {
    date: "2025",
    title: "Semi‑Submersible Offshore Fish Farm (Capstone)",
    side: "left",
    image: "/images/fishfarm_render.png",
    tags: ["MATLAB", "Seakeeping", "Stability", "Powering"],
    summary:
      "Optimized pontoon/column geometry with GM, natural‑period, and displacement constraints; explored mobility vs. site‑specificity.",
    details:
      "Linked technical trade‑offs to a Levelized Cost of Fish (LCOF) framework; presented integrated feasibility to faculty jury.",
    gallery: ["/images/fishfarm_render.png", "/images/fishfarm_plan.png"],
  },
  {
    date: "2024",
    title: "Crowley Engineering — Vessel Design Intern",
    side: "right",
    image: "/images/crowley_longliner.jpg",
    tags: ["Stability", "Hydrostatics", "Operations"],
    summary:
      "USCG lightship booklets after Dutch Harbor surveys; hydrostatics + geometry; MR remote‑support pilot.",
    details:
      "Built coating/cleaning fuel model showing >$100k/ship savings; coordinated pilots with shipyards, vendors, and chiefs.",
    gallery: ["/images/crowley_longliner.jpg"],
  },
  {
    date: "2023",
    title: "Ingalls Shipbuilding — Naval Arch Intern",
    side: "right",
    image: "/images/ingalls_ddg.jpg",
    tags: ["Inclining", "GHS", "Yard Ops"],
    summary:
      "Launch & inclining (DDG‑51 / NSC); intact stability & hydrostatics; roll‑prevention cradle for dry‑dock ops.",
    details:
      "Applied first‑principles structural calcs; processed inclining data for certification.",
    gallery: ["/images/ingalls_ddg.jpg"],
  },
  {
    date: "2022–2023",
    title: "Human Powered Submarine — Hull Systems Lead",
    side: "right",
    image: "/images/hpsub.jpg",
    tags: ["Rhino", "CFD", "Composites"],
    summary:
      "Hull geometry, vacuum‑bag composites, 3D‑printed systems; 2nd overall (ISR 2022) + collegiate top speed (2023).",
    details:
      "Balanced hydrodynamics, propulsion, and controls for performance at race depth.",
    gallery: ["/images/hpsub.jpg"],
  },
];

// ——— COMPONENTS ———
function TimelineItem({ item, index, onOpen }: { item: any; index: number; onOpen: (it: any) => void }) {
  const left = item.side === "left"; // left column vs right column
  const cardColClasses = left
    ? "order-2 md:order-1 md:pr-12"
    : "order-2 md:order-2 md:pl-12"; // explicit classes (no dynamic md:order-${x})
  const spacerColClasses = left ? "order-1 md:order-2" : "order-1 md:order-1";

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {/* center line is drawn by parent */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.05 * index }}
        className={cardColClasses}
      >
        <Card
          onClick={() => onOpen(item)}
          className="group cursor-pointer shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="text-xs font-medium text-gray-500">{item.date}</div>
              <div className="h-1 w-1 rounded-full bg-gray-400" />
              <CardTitle className="text-lg flex-1">{item.title}</CardTitle>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tags?.map((t: string) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center text-sm text-gray-400">Add image</div>
                )}
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col gap-2">
              <p className="text-sm text-gray-700">{item.summary}</p>
              <p className="text-sm text-gray-600">{item.details}</p>
              <div className="pt-1 text-xs text-gray-500">Click card for more</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      {/* spacer on the opposite side to keep the alternating layout */}
      <div className={spacerColClasses} />
      {/* center dot */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 h-6 w-6 rounded-full bg-white border-2 border-gray-300" />
    </div>
  );
}

function FullscreenModal({ item, onClose }: { item: any; onClose: () => void }) {
  const [gix, setGix] = useState(0);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (!item) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setGix((prev) => (prev + 1) % (item?.gallery?.length || 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setGix((prev) => (prev - 1 + (item?.gallery?.length || 1)) % (item?.gallery?.length || 1));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [item, onClose]);

  useEffect(() => {
    setGix(0);
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative bg-white w-full h-[90vh] max-w-[1280px] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-white/70 backdrop-blur">
              <div className="min-w-0">
                <div className="text-xs text-gray-500 truncate">{item.date}</div>
                <h2 className="text-2xl md:text-3xl font-semibold truncate">{item.title}</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags?.map((t: string) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={onClose}>Close</Button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={onClose} aria-label="Close">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="h-[calc(90vh-64px)] grid lg:grid-cols-[1.6fr_1fr]">
              <div className="h-full overflow-y-auto p-6 pr-4 space-y-6">
                <section>
                  <h3 className="text-base font-semibold mb-2">Overview</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.summary}</p>
                </section>
                <section>
                  <h3 className="text-base font-semibold mb-2">Role & Impact</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Placeholder for responsibilities</li>
                    <li>Key outcomes or decisions</li>
                    <li>Stakeholders worked with</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-base font-semibold mb-2">Technical Methods</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Tools, models, assumptions</li>
                    <li>Data validation and uncertainty</li>
                    <li>Trade-off analysis</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-base font-semibold mb-2">Selected Results</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Headline technical results</li>
                    <li>Business/operational implications</li>
                    <li>Lessons learned</li>
                  </ul>
                </section>
              </div>

              {/* Right gallery */}
              <div className="relative bg-gray-50 border-l h-full">
                <div className="sticky top-0 p-4">
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100">
                    {item.gallery?.length ? (
                      <img src={item.gallery[gix]} alt={`visual-${gix}`} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full grid place-items-center text-sm text-gray-400">Add visuals</div>
                    )}
                  </div>
                  {item.gallery?.length > 1 && (
                    <div className="mt-3 flex items-center justify-between">
                      <Button size="sm" variant="outline" onClick={() => setGix((gix - 1 + item.gallery.length) % item.gallery.length)}>Prev</Button>
                      <div className="text-xs text-gray-500">{gix + 1} / {item.gallery.length}</div>
                      <Button size="sm" onClick={() => setGix((gix + 1) % item.gallery.length)}>Next</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PortfolioTimeline() {
  const [activeItem, setActiveItem] = useState<any>(null);
  const handleOpen = (item: any) => setActiveItem(item);
  const handleClose = () => setActiveItem(null);

  // lock background scroll while modal is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (activeItem) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [activeItem]);

  // "Dev tests": lightweight runtime checks so we catch content mistakes early
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      console.groupCollapsed("Portfolio dev checks");
      console.assert(Array.isArray(ITEMS) && ITEMS.length > 0, "ITEMS must be a non-empty array");
      console.assert(
        ITEMS.every((it) => it.side === "left" || it.side === "right"),
        "Each item.side must be 'left' or 'right'",
      );
      console.assert(
        ITEMS.some((it) => it.side === "left") && ITEMS.some((it) => it.side === "right"),
        "There should be at least one left and one right item",
      );
      ITEMS.forEach((it) => {
        if (it.gallery && it.gallery.length === 0) {
          console.warn("Gallery is empty for:", it.title);
        }
      });
      console.groupEnd();
    } catch (e) {
      // no-op
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            {YOU.name}
          </motion.h1>
          <p className="mt-2 text-lg text-gray-700">{YOU.title}</p>
          <p className="mt-2 text-gray-600 max-w-3xl">{YOU.blurb}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a className="inline-flex items-center gap-2" href={`mailto:${YOU.email}`}>
              <Mail size={16} /> {YOU.email}
            </a>
            <span className="text-gray-400">•</span>
            <a className="inline-flex items-center gap-2" href={YOU.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <span className="text-gray-400">•</span>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} /> {YOU.phone}
            </span>
            <span className="text-gray-400">•</span>
            <span>{YOU.location}</span>
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <ChevronDown className="animate-bounce" />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative">
          {/* central vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block" aria-hidden />
          <div className="space-y-14">
            {ITEMS.map((item, i) => (
              <TimelineItem item={item} key={i} index={i} onOpen={handleOpen} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="text-gray-600">© {new Date().getFullYear()} {YOU.name}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="#">Download PDF Resume</a>
            </Button>
            <Button size="sm" asChild>
              <a href={`mailto:${YOU.email}?subject=Portfolio%20Inquiry`}>Get in touch</a>
            </Button>
          </div>
        </div>
      </footer>

      {/* FULLSCREEN OVERLAY */}
      <FullscreenModal item={activeItem} onClose={handleClose} />
    </div>
  );
}
