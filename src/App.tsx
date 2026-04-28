/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Palmtree, 
  ChevronLeft, 
  ChevronRight, 
  PawPrint, 
  Castle, 
  Waves,
  MessageSquare,
  Map,
  PlaneTakeoff,
  Facebook,
  Instagram,
  Mail,
  Smartphone
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-20 font-sans">
        <div className="text-2xl font-bold tracking-tighter text-primary">Serendib Quest</div>
        
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Destinations", "Tours", "Gallery", "About", "Contact"].map((item) => (
            <a 
              key={item}
              href="#" 
              className={`text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 ${item === "About" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center px-4 py-2 bg-surface-container rounded-full border border-outline-variant">
            <Search className="w-4 h-4 text-outline mr-2" />
            <span className="text-sm text-on-surface-variant">Search adventures...</span>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold active:scale-95 transition-transform duration-200">
            Book Now
          </button>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-outline-variant p-4 space-y-4"
        >
          {["Home", "Destinations", "Tours", "Gallery", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="block text-on-surface-variant font-medium py-2">{item}</a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative h-[716px] w-full overflow-hidden flex items-center">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsYSzKAOn5yIo9o9ZrReVB0xsMvrxUhh4MCUtMw5S7WbPuY_BaIexWiAQHFkX0Zxd1FzA2mijjc-jvKFf6_dceIhY_wWQpMQfLIQmTszjSsdHKdjOgACn1mws9m_HU5JNJI4hDTb_FH3O8LE5nvOKT9U7fNLA7r1plguaZdY7Eb2Gz2SZg3BMlOkSwA65-SIEbMiFXUMeA7OqTuMO86RF-SxCn5rReJgCLwZSZNdI3p_6PCjuBEyW5m-zRpQmPl_FFMenVjq7fNvNM" 
        alt="Sri Lankan landscape" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs mb-6">
          ESTABLISHED 2012
        </span>
        <h1 className="font-sans text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
          We Are The Curators Of <span className="text-secondary-container">Authentic</span> Sri Lanka
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
          From the misty highlands to the sun-drenched southern shores, we bridge the gap between global travelers and the soul of our island home.
        </p>
      </motion.div>
    </div>
  </section>
);

const FounderSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 mb-12 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOaVvNx1MYGhj5dzfBp5K7VJ6UgiJK5lwk3wExK51bYlS4VyFlqy67-0Q2zrYoWdF-0Wat6YvQbXPty9C9FRjCN974CoIsF2vNL5YBXLystz_ZchLrxSe3dALGYQVI5PtphquTYHlL--qsITR7s_Eyd2c6h4dYFvNcOszNrNIqbjBEOHDKLKOilmiP9Ob6AkCvjzMgzSoYJIEJQyNAa6nmbSkk6RpcyYvAhRIrLa4KnxgI1FHrCUiRNNZZht1JhJp34AJFHF0QBkfG" 
              alt="Founder" 
              className="rounded-2xl shadow-2xl z-10 relative aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-container/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary-container rounded-2xl -z-10"></div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-lg shadow-lg border border-outline-variant z-20">
              <span className="font-sans font-bold tracking-widest text-[#a65d00]">FOUNDER</span>
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-7 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-sans font-bold text-primary mb-6">Born from a passion for the untraveled path.</h2>
            <div className="space-y-6 text-on-surface-variant text-lg">
              <p>Serendib Quest didn't start in a boardroom. It began on a vintage motorcycle, navigating the rugged dirt tracks of the Knuckles Mountain Range. Our founder, a local explorer, realized that while many visited Sri Lanka, few truly *experienced* it.</p>
              <p>We saw a world of hidden waterfalls, centuries-old family recipes, and remote village traditions that were invisible to the average tourist. We decided to change that.</p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="text-3xl font-sans font-bold text-on-surface">12+ Years</h4>
                  <p className="text-sm text-outline">Local Expertise</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-3xl font-sans font-bold text-on-surface">500+ Towns</h4>
                  <p className="text-sm text-outline">Mapped & Explored</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const PhilosophySection = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-sans font-bold text-on-surface mb-4">Our Core Philosophy</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Travel should be a two-way exchange. We protect the heritage we share while providing you with unparalleled access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {/* Large Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-2 bg-white rounded-3xl shadow-sm border border-outline-variant p-10 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <Leaf className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl font-sans font-bold mb-6">Regenerative Tourism</h3>
            <p className="text-on-surface-variant max-w-md text-lg">
              We don't just 'do no harm.' We actively invest 10% of every tour's proceeds back into local wildlife conservation and rural school initiatives. Your journey helps our island flourish.
            </p>
          </div>
          <div className="relative z-10">
            <button className="flex items-center text-primary font-bold hover:gap-4 transition-all group">
              LEARN ABOUT OUR IMPACT
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-surface-variant/30 to-transparent">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnUaSjeJzk3xyK4O7YZRzNDgWZ1c5e1PGBNAkrphYb0R2-0YV1AXl_l_Oh-Gu_Gr0bMLbNFrWZu3L6qBXK4TlZK_ieE8r_xhZMl_lBxkct_43IA5SCYw2qTPjrwdQsQVM3Be4yVv4oFc43_x0XsYd7aHs2TtD6XTZLrZYaifIUK49nYn1SnNtzRrcU5MtOs49Xdyx5FQR_NcKrZANYOx8ZA32jfVR-wYdT0UNA8ey66EVNu-PSlfiRVSO4ppCprcWUx5XecxF_2xK6"
              className="absolute right-0 bottom-0 h-full w-1/2 object-cover opacity-10 mix-blend-multiply"
              alt="Eco impact"
            />
          </div>
        </motion.div>

        {/* Small Card 1 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-primary-container text-on-primary-container rounded-3xl p-8 flex flex-col justify-center"
        >
          <ShieldCheck className="w-10 h-10 mb-4" />
          <h4 className="text-2xl font-sans font-bold mb-4">Unmatched Safety</h4>
          <p className="text-sm opacity-90 leading-relaxed">
            24/7 on-ground support with certified professional guides and luxury-maintained fleet.
          </p>
        </motion.div>

        {/* Small Card 2 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-tertiary-fixed text-on-tertiary-fixed rounded-3xl p-8 flex flex-col justify-center"
        >
          <Castle className="w-10 h-10 mb-4" />
          <h4 className="text-2xl font-sans font-bold mb-4">Cultural Respect</h4>
          <p className="text-sm opacity-90 leading-relaxed">
            Deep connections with local communities ensuring you are welcomed as a guest, not a stranger.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const SignatureSection = () => {
  const experiences = [
    {
      title: "The Wild Soul",
      category: "WILDLIFE & SAFARI",
      desc: "Access to private zones and expert naturalists who track leopards and elephants with surgical precision.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwi_wK9DKoZ9oCKtVgMlqgEHuYAE8-0maGDoB-pPgZRXaPLHcIzCrrgJXN1Vo3hMpn0j3W1opQoSZS91jttctrDws0cGSjiMDcMT31OqmlUauSLm1i_D6OWFDmblcdjFPbEl-1nZ7nuQOHO5fzCBx-lP07y37lY43Ju44i9Hk_AVV-FQr1cGgvp-FkoUHEQGCn39xnUSf4oWglcjj-BQCNHbo4eNpUsmN0YxaNm0gm-avaGo682oVq-CEi8f-vW_xSEnzRYBh958z_",
      icon: <PawPrint className="w-4 h-4" />
    },
    {
      title: "Timeless Echoes",
      category: "HERITAGE & ANCIENT CITIES",
      desc: "Walk through 2,500 years of history with historians who bring ruins back to life through storytelling.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTR67I9tBgAOIi5WatjSwY4KYOGfybezLpEIrAxuoMosvt8BpBjuSrTcEBCoc5yfw-9WBpuSopsqxtVZXBNlZP1y7PSShgAHd4SfA_X3tj8tylTljF97N6PlC36TGAARr72CfnIrIDCpfFHK1DwYxyeFYNLsc9D8y2nX0PPcKZqJhF7_l8Al7XULf4nyI3UVSzybsSpEr_evKKecb69WpAxgXfUEvpKsF3-2kEaNO_xkFvQLuac4vJY5Y4YnQsldqGS1l0hMKCGJu0",
      icon: <Castle className="w-4 h-4" />
    },
    {
      title: "The Sapphire Coast",
      category: "COASTAL & LEISURE",
      desc: "Curated beachfront villas and secret surfing spots known only to the locals.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBedUQLihC8-KNDzlFJ5n4KIsNW-2H-S46vZebh_mudLrvjvAxRKzmV_ER1sG3-dXpcy2KKhK_BFcdPaT2rVFWKurh9kOS0YSzEc9byTkqXB0KFfJyv4jCT0IopIt7HKUhcf6X8K0XWTDgLB5KW3C_eYjXu4r7s7LEaPgz6vNvrZkhoDpYTgfGWefGQcezr88d5sD2aGuFF8jv5hoULw9Py44D4-ohbna6rfekzWsSevi-tIfa9f_SoRJJLHqkAzg55zMLhLoF4N2Yo",
      icon: <Waves className="w-4 h-4" />
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-sans font-bold text-on-surface">The Serendib Signature</h2>
            <p className="text-on-surface-variant mt-4 text-lg">
              We specialize in three distinct pillars of the Sri Lankan experience, each curated by a dedicated regional expert.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 rounded-full border border-outline-variant hover:bg-primary-container hover:text-on-primary-container transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full border border-outline-variant hover:bg-primary-container hover:text-on-primary-container transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary">{exp.icon}</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">{exp.category}</span>
                </div>
                <h4 className="text-2xl font-sans font-bold mb-4 text-on-surface group-hover:text-primary transition-colors">{exp.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlanningSection = () => {
  const steps = [
    {
      title: "The Discovery Session",
      desc: "A 1-on-1 consultation to understand your travel style, pace, and interests.",
      icon: <MessageSquare className="w-5 h-5 text-white" />
    },
    {
      title: "Bespoke Blueprint",
      desc: "A hand-crafted itinerary that balances iconic sights with hidden, off-grid experiences.",
      icon: <Map className="w-5 h-5 text-white" />
    },
    {
      title: "The Quest Begins",
      desc: "You arrive to a dedicated concierge and a private vehicle, ready to explore with absolute peace of mind.",
      icon: <PlaneTakeoff className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section className="py-24 bg-surface-container-highest/20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sans font-bold text-on-surface">How We Plan Your Quest</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary/20"></div>
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-sans font-bold text-on-surface mb-2">{step.title}</h4>
                <p className="text-lg text-on-surface-variant leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-24 bg-primary-container text-on-primary-container overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full -mr-64 -mt-64 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full -ml-48 -mb-48 blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-10 leading-tight">
          Ready to discover your own Sri Lanka?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            VIEW ALL TOURS
          </button>
          <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary active:scale-95 transition-all duration-300">
            SPEAK TO AN EXPERT
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full pt-20 pb-10 border-t border-outline-variant bg-surface-container-low text-on-surface-variant text-sm font-sans">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="text-2xl font-bold tracking-tighter text-primary mb-6">Serendib Quest</div>
          <p className="leading-relaxed mb-8">
            Unveiling the soul of Sri Lanka through expert curation and authentic local connections.
          </p>
          <div className="flex gap-4">
            <div className="p-2 bg-white rounded-lg border border-outline-variant hover:text-primary cursor-pointer transition-colors">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="p-2 bg-white rounded-lg border border-outline-variant hover:text-primary cursor-pointer transition-colors">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="p-2 bg-white rounded-lg border border-outline-variant hover:text-primary cursor-pointer transition-colors">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
          <ul className="space-y-4 font-medium">
            {["About Us", "Destinations", "Tour Packages", "FAQ"].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Legals</h5>
          <ul className="space-y-4 font-medium">
            {["Privacy Policy", "Terms of Service", "Travel Insurance"].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Contact</h5>
          <div className="space-y-4 font-medium">
            <p className="flex items-center gap-3">
              <Map className="w-4 h-4 text-primary" />
              Galle Road, Colombo 03, Sri Lanka
            </p>
            <p className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-primary" />
              +94 11 2345 678
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              hello@serendibquest.com
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-outline-variant text-center opacity-60">
        <p>© 2024 Serendib Quest. Authentic Sri Lankan Adventures.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <FounderSection />
        <PhilosophySection />
        <SignatureSection />
        <PlanningSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
