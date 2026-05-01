import { motion, useScroll } from "motion/react";
import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Experiments", id: "experiments" },
    { label: "Signal Lab", id: "mind" },
    { label: "About", id: "profile" },
    { label: "Contact", id: "contact" },
  ];

  // scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "hero";

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = item.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 🔥 TOP PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-[60]"
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-zinc-950/60 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <div
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-brand-violet rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-brand-violet/30 blur-md opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            <span className="text-white font-bold text-sm tracking-tight">
              Eval <span className="text-zinc-500 font-normal">by</span>{" "}
              <span className="text-brand-violet">Eram</span>
            </span>
          </div>

          {/* NAV */}
          <div className="hidden md:flex items-center relative bg-white/5 border border-white/10 rounded-full p-1">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative px-5 py-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition"
              >
                {/* ACTIVE PILL */}
                {active === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-purple-500/20 active:scale-95 transition-transform"
          >
            Connect
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};
