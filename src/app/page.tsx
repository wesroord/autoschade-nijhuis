import Animate from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";
import MobileNav from "@/components/MobileNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import {
  Car, Paintbrush, Hammer, CloudSnow, Truck, Shield,
  Phone, Mail, MapPin, Star, CheckCircle2, Award,
  Clock, ChevronRight, ArrowRight, Users,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const services = [
  {
    icon: Car,
    image: "/services/schadeherstel.jpg",
    title: "Schadeherstel",
    description: "Vakkundig herstel van alle soorten autoschade. Van kleine deukjes tot grote botsschade — altijd met oog voor detail.",
  },
  {
    icon: Paintbrush,
    image: "/services/spuitwerk.jpg",
    title: "Spuitwerk & Lakwerk",
    description: "Perfecte kleurmatching met moderne spuittechnologie. Van spot-reparatie tot volledige spuitbeurt.",
  },
  {
    icon: Hammer,
    image: "/services/deukwerk.jpg",
    title: "Deukwerk & PDR",
    description: "Paintless Dent Repair voor snel en kostenbesparend deukherstel zonder schilderwerk.",
  },
  {
    icon: CloudSnow,
    image: "/services/hagelschade.jpg",
    title: "Hagelschade",
    description: "Specialisten in hagelschadeherstel. Gratis beoordeling, snelle en vakkundige afhandeling.",
  },
  {
    icon: Truck,
    image: "/services/caravan.jpg",
    title: "Caravan & Camper",
    description: "Ook voor schade aan uw caravan of camper bent u bij ons aan het juiste adres. Alle merken.",
  },
  {
    icon: Shield,
    image: "/services/steenslag.jpg",
    title: "Steenslag & Parkeerschade",
    description: "Steenslagschade, bumperdeukjes of parkeerschade? Snel opgelost voor een scherpe prijs.",
  },
];

const reviews = [
  {
    name: "Jan de Boer",
    location: "Denekamp",
    rating: 5,
    date: "2 weken geleden",
    text: "Uitstekende service! Na mijn hagelschade was mijn auto binnen een week als nieuw. Echt vakwerk en een vriendelijk team.",
    avatar: "J",
  },
  {
    name: "Maria Scholte",
    location: "Enschede",
    rating: 5,
    date: "1 maand geleden",
    text: "Super vriendelijk en professioneel. Parkeerschade perfect hersteld, niet meer te zien. Gratis leenauto heel fijn geregeld.",
    avatar: "M",
  },
  {
    name: "Kevin Hendriks",
    location: "Oldenzaal",
    rating: 5,
    date: "3 maanden geleden",
    text: "Al voor de tweede keer hier voor spuitwerk. Perfecte kleurmatching en uitstekende kwaliteit. Eerlijke prijs en snel klaar.",
    avatar: "K",
  },
  {
    name: "Sandra van Dam",
    location: "Losser",
    rating: 5,
    date: "4 maanden geleden",
    text: "BOVAG-erkend bedrijf dat het echt waarmaakt. Professioneel van begin tot eind. Ze helpen ook met de schadeformulieren.",
    avatar: "S",
  },
];

const usps = [
  { icon: CheckCircle2, label: "Gratis offerte",       sub: "Altijd vrijblijvend" },
  { icon: Car,          label: "Vervangend vervoer",   sub: "Gratis leenauto" },
  { icon: Clock,        label: "24/7 bereikbaar",       sub: "Ook bij spoed" },
  { icon: Award,        label: "BOVAG gecertificeerd", sub: "Gegarandeerde kwaliteit" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ─── NAVBAR ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 nav-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Autoschade Bertie Nijhuis logo" className="h-10 w-10 rounded-lg flex-shrink-0" />
            <div>
              <span className="text-gray-900 font-black text-base leading-none tracking-tight">AUTOSCHADE</span>
              <br />
              <span className="text-brand-700 font-black text-base leading-none tracking-tight">BERTIE NIJHUIS</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "Diensten",  href: "#diensten" },
              { label: "Over ons", href: "#over-ons" },
              { label: "Reviews",  href: "#reviews" },
              { label: "Partners", href: "#partners" },
              { label: "Contact",  href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:0541354640" className="hidden md:flex items-center gap-1.5 text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors">
              <Phone className="w-4 h-4 text-brand-700" />
              0541-354640
            </a>
            <a href="#contact" className="hidden lg:block btn-primary bg-brand-700 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold">
              Schade melden
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      {/* ─── HERO ─── */}
      <section id="home" className="relative flex items-end sm:items-center pt-16 overflow-hidden h-[100svh] sm:h-[620px] lg:h-[680px]">
        {/* Building photo: fixed 680px height, minimal crop (image is 1892×800) */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%", filter: "brightness(0.52)" }}
          />
        </div>
        {/* Gradient: dark-left for text, fades to transparent on right */}
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(105deg, rgba(4,8,20,0.85) 0%, rgba(4,8,20,0.60) 50%, rgba(4,8,20,0.20) 100%)" }} />
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10" style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-4">
                IJZER
                <span className="text-brand-400">STERK</span>
                <br />IN SCHADE
                <br />WERK
              </h1>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md mb-6">
                Familiebedrijf in Denekamp. Vakkundig herstel van alle autoschade. BOVAG gecertificeerd. Duurzaam Repareren.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary bg-brand-700 hover:bg-brand-600 text-white px-7 py-3.5 rounded-lg font-bold flex items-center gap-2">
                  Gratis offerte aanvragen <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#diensten" className="text-white/80 border border-white/20 hover:border-white/40 hover:bg-white/5 px-7 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2">
                  Onze diensten <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex gap-6 sm:gap-10 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white"><CountUp to={40} suffix="+" /></div>
                  <div className="text-white/40 text-xs mt-0.5">jaar ervaring</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-3xl font-black text-white">
                    <CountUp to={4.8} decimals={1} /> <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">Google rating</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white"><CountUp to={100} suffix="%" /></div>
                  <div className="text-white/40 text-xs mt-0.5">BOVAG kwaliteit</div>
                </div>
              </div>
            </div>

            {/* Right — white card on dark hero */}
            <div className="hidden lg:flex justify-end">
              <div className="glass-card rounded-2xl p-8 w-full max-w-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1 h-7 bg-brand-700 rounded-full" />
                  <h3 className="text-gray-900 font-black text-xl">Schade melden</h3>
                </div>
                <p className="text-gray-500 text-sm mb-6 pl-3">Ontvang binnen 24 uur een reactie</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Uw naam"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                  <input
                    type="tel"
                    placeholder="Telefoonnummer"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500">
                    <option value="">Soort schade</option>
                    <option>Schadeherstel</option>
                    <option>Spuitwerk / Lakwerk</option>
                    <option>Hagelschade</option>
                    <option>Deukwerk / PDR</option>
                    <option>Anders</option>
                  </select>
                  <a href="#contact" className="btn-primary w-full bg-brand-700 hover:bg-brand-600 text-white py-3 rounded-lg font-bold text-sm text-center block">
                    Direct schade melden →
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                  <Phone className="w-4 h-4 text-brand-700" />
                  <span className="text-gray-400 text-xs">Of bel:</span>
                  <a href="tel:0541354640" className="text-gray-700 text-xs font-bold hover:text-brand-700">0541-354640</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USP BAR ─── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {usps.map((usp, i) => (
              <Animate key={usp.label} delay={i * 70} animation="reveal">
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-700 transition-colors">
                    <usp.icon className="w-5 h-5 text-brand-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm leading-tight">{usp.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{usp.sub}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIENSTEN ─── */}
      <section id="diensten" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Animate animation="reveal" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-brand-700 rounded-full" />
              <span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Onze specialiteiten</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">Wat wij voor u doen</h2>
            <p className="text-gray-500 max-w-xl text-lg">
              Van kleine parkeerschade tot complete carrosserieherstel — wij pakken het aan.
            </p>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Animate key={service.title} delay={i * 70} animation="reveal">
                <div className="service-card bg-white border border-gray-150 rounded-2xl overflow-hidden group cursor-default h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-gray-900 font-bold text-lg mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WERKPROCES ─── */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Animate animation="reveal" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-brand-700 rounded-full" />
              <span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Hoe werkt het</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">Van schade naar rijklaar</h2>
            <p className="text-gray-500 max-w-lg">In vier stappen zorgen wij dat uw auto snel en vakkundig hersteld is.</p>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { n: "01", title: "Schade melden", desc: "Bel ons, stuur een bericht of vul het online formulier in. Wij reageren binnen 24 uur." },
              { n: "02", title: "Gratis beoordeling", desc: "Wij beoordelen de schade vrijblijvend en maken een heldere offerte op maat." },
              { n: "03", title: "Vakkundige reparatie", desc: "Onze specialisten herstellen uw auto met hoogwaardige materialen. U krijgt een leenauto." },
              { n: "04", title: "Auto klaar", desc: "Uw auto is gereinigd en rijklaar. Wij leveren hem persoonlijk bij u af of u haalt hem op." },
            ].map((step, i) => (
              <Animate key={step.n} delay={i * 100} animation="reveal">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 border-2 border-brand-100 flex items-center justify-center mb-4">
                    <span className="text-brand-700 font-black text-sm">{step.n}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-brand-200 to-brand-100" style={{ width: "calc(100% - 3rem)", left: "calc(100% + 1.5rem)" }} />
                  )}
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVER ONS ─── */}
      <section id="over-ons" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Animate animation="reveal-left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-brand-700 rounded-full" />
                  <span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Over ons</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
                  Familiebedrijf met<br />
                  <span className="text-brand-700">meer dan 40 jaar</span><br />
                  vakmanschap
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                  Autoschade Bertie Nijhuis is een professioneel familiebedrijf in Denekamp dat al meer dan 40 jaar
                  gespecialiseerd is in het herstellen van alle merken personen- en bedrijfsvoertuigen.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                  Als BOVAG-gecertificeerd bedrijf werken wij volgens strenge kwaliteitsnormen en zijn wij
                  gecertificeerd voor <strong className="text-gray-700">Duurzaam Repareren</strong> — milieubewust
                  herstel en restauratie.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "40+",   label: "jaar ervaring" },
                    { val: "4.8★",  label: "Google rating" },
                    { val: "BOVAG", label: "gecertificeerd" },
                    { val: "Alle",  label: "merken & modellen" },
                  ].map((stat) => (
                    <div key={stat.val} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <div className="text-2xl font-black text-brand-700">{stat.val}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Animate>
            <Animate animation="reveal-right">
              <div className="bg-gray-900 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-700/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <Users className="w-9 h-9 text-brand-400 mb-6" />
                  <h3 className="text-white font-bold text-xl mb-6">Waarom kiezen voor ons?</h3>
                  <ul className="space-y-3.5">
                    {[
                      "Gratis en vrijblijvende offerte",
                      "Gratis vervangend vervoer tijdens reparatie",
                      "Hulp bij invullen schadeformulieren",
                      "24 uur per dag bereikbaar bij spoed",
                      "BOVAG gecertificeerd — zekerheid & kwaliteit",
                      "Duurzaam Repareren certificaat",
                      "Alle merken personen- en bedrijfsvoertuigen",
                      "Meer dan 40 jaar vertrouwen in Denekamp",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-brand-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <section id="reviews" className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Animate animation="reveal" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-yellow-400 rounded-full" />
              <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Google Reviews</span>
            </div>
            <div className="flex items-end gap-5 mb-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Wat onze klanten zeggen</h2>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-2xl font-black text-gray-900">4.8</span>
              <span className="text-gray-400 text-sm">gemiddeld op Google</span>
            </div>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review, i) => (
              <Animate key={review.name} delay={i * 70} animation="reveal-scale">
                <div className="review-card bg-white rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm truncate">{review.name}</div>
                      <div className="text-gray-400 text-xs">{review.location}</div>
                    </div>
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <Stars count={review.rating} />
                  <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="text-gray-300 text-xs mt-4">{review.date}</div>
                </div>
              </Animate>
            ))}
          </div>
          <Animate animation="reveal" className="mt-8">
            <a
              href="https://www.google.com/search?q=autoschade+bertie+nijhuis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-brand-500 hover:text-brand-700 text-gray-600 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
            >
              Alle Google Reviews bekijken <ChevronRight className="w-4 h-4" />
            </a>
          </Animate>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section id="partners" className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Animate animation="reveal" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-brand-700 rounded-full" />
              <span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Onze partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">Gecertificeerd & vertrouwd</h2>
            <p className="text-gray-500 max-w-lg">
              Wij werken samen met toonaangevende partners om u de beste kwaliteit en service te garanderen.
            </p>
          </Animate>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Animate delay={0} animation="reveal-scale">
              <div className="partner-card border-2 border-gray-200 hover:border-brand-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 min-h-[110px] bg-white">
                <div className="text-[#C8102E] font-black text-2xl tracking-tight">BOVAG</div>
                <div className="text-gray-400 text-xs text-center font-medium">Gecertificeerd lid</div>
              </div>
            </Animate>
            <Animate delay={70} animation="reveal-scale">
              <div className="partner-card border-2 border-gray-200 hover:border-brand-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 min-h-[110px] bg-white">
                <div className="text-green-700 font-black text-sm text-center leading-tight">DUURZAAM<br />REPAREREN</div>
                <div className="text-gray-400 text-xs text-center font-medium">Gecertificeerd</div>
              </div>
            </Animate>
            {[1,2,3,4].map((n, i) => (
              <Animate key={n} delay={(i + 2) * 70} animation="reveal-scale">
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 min-h-[110px] bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-lg font-bold leading-none">+</span>
                  </div>
                  <div className="text-gray-400 text-xs text-center font-medium">Partner<br />binnenkort</div>
                </div>
              </Animate>
            ))}
          </div>
          <Animate animation="reveal" className="mt-12 pt-10 border-t border-gray-100">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-5 text-center">Wij werken samen met alle grote verzekeraars</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Centraal Beheer", "Interpolis", "OHRA", "Allianz", "Nationale-Nederlanden", "Aegon", "InShared", "Univé"].map((name) => (
                <span key={name} className="bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-gray-600 text-sm font-medium">
                  {name}
                </span>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Animate animation="reveal" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-brand-700 rounded-full" />
              <span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Veelgestelde vragen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">Heeft u een vraag?</h2>
            <p className="text-gray-500">Hieronder vindt u antwoord op de meest gestelde vragen. Staat uw vraag er niet bij? Neem dan gerust contact op.</p>
          </Animate>
          <Animate animation="reveal">
            <FAQ />
          </Animate>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <Animate animation="reveal-left" className="lg:col-span-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-brand-400 rounded-full" />
                  <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Contact</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">Hoe kunnen<br />wij u helpen?</h2>
                <p className="text-white/50 mb-8 leading-relaxed text-sm">
                  Neem contact op voor een gratis en vrijblijvende offerte. Wij reageren altijd binnen 24 uur.
                </p>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Adres",    val: "Ambachtstraat 5\n7591 BE Denekamp" },
                    { icon: Phone,  label: "Telefoon", val: "0541-354640", href: "tel:0541354640" },
                    { icon: Mail,   label: "E-mail",   val: "info@autoschadenijhuis.nl", href: "mailto:info@autoschadenijhuis.nl" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-brand-400" />
                      </div>
                      <div>
                        <div className="text-white/30 text-xs font-semibold uppercase tracking-wide mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-white text-sm font-semibold hover:text-brand-300 transition-colors whitespace-pre-line">
                            {item.val}
                          </a>
                        ) : (
                          <div className="text-white text-sm font-semibold whitespace-pre-line">{item.val}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <span className="text-white/30 text-xs font-semibold uppercase tracking-wide">Volg ons</span>
                  <a href="https://www.instagram.com/autoschadenijhuis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-90 hover:opacity-100 transition-opacity">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/instagram.png" alt="Instagram" className="w-8 h-8 object-contain rounded-xl" />
                  </a>
                  <a href="https://www.facebook.com/autoschadenijhuis/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-90 hover:opacity-100 transition-opacity">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/facebook.png" alt="Facebook" className="w-8 h-8 object-contain rounded-full" />
                  </a>
                </div>
              </div>
            </Animate>
            <Animate animation="reveal-right" className="lg:col-span-3">
              <ContactForm />
            </Animate>
          </div>

          {/* Google Maps */}
          <Animate animation="reveal" className="mt-14">
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: "320px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.0!2d7.0106187!3d52.3857758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b81895223a8dc7%3A0x1780e24733beb432!2sAutoschade%20Bertie%20Nijhuis!5e0!3m2!1snl!2snl!4v1728835200000!5m2!1snl!2snl"
                width="100%"
                height="320"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Autoschade Bertie Nijhuis locatie"
              />
            </div>
            <p className="text-white/30 text-xs mt-3 text-center">
              Ambachtstraat 5, 7591 BE Denekamp ·{" "}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Autoschade+Bertie+Nijhuis,+Ambachtstraat+5,+7591+BE+Denekamp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 font-semibold transition-colors"
              >
                Route plannen →
              </a>
            </p>
          </Animate>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-950 text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Autoschade Bertie Nijhuis logo" className="h-10 w-10 rounded-lg flex-shrink-0" />
                <div>
                  <span className="text-white font-black text-sm leading-none block">AUTOSCHADE</span>
                  <span className="text-brand-400 font-black text-sm leading-none block">BERTIE NIJHUIS</span>
                </div>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">
                IJzersterk in schadewerk. Meer dan 40 jaar familiebedrijf in Denekamp.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-4 text-white/70 uppercase tracking-widest">Diensten</h4>
              <ul className="space-y-2 text-white/55 text-sm">
                {["Schadeherstel", "Spuitwerk & Lakwerk", "Deukwerk & PDR", "Hagelschade", "Caravan & Camper"].map(s => (
                  <li key={s} className="hover:text-white/60 transition-colors cursor-default">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-4 text-white/70 uppercase tracking-widest">Informatie</h4>
              <ul className="space-y-2 text-white/55 text-sm">
                {[
                  { label: "Over ons",  href: "#over-ons" },
                  { label: "Reviews",   href: "#reviews" },
                  { label: "Partners",  href: "#partners" },
                  { label: "Contact",   href: "#contact" },
                ].map(s => (
                  <li key={s.label}><a href={s.href} className="hover:text-white/60 transition-colors">{s.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-4 text-white/70 uppercase tracking-widest">Contact</h4>
              <ul className="space-y-2 text-white/55 text-sm">
                <li>Ambachtstraat 5, Denekamp</li>
                <li><a href="tel:0541354640" className="hover:text-white transition-colors">0541-354640</a></li>
                <li><a href="mailto:info@autoschadenijhuis.nl" className="hover:text-white transition-colors">info@autoschadenijhuis.nl</a></li>
              </ul>
              <div className="flex gap-2 mt-4">
                <a href="https://www.instagram.com/autoschadenijhuis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-75 hover:opacity-100 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/instagram.png" alt="Instagram" className="w-7 h-7 object-contain rounded-xl" />
                </a>
                <a href="https://www.facebook.com/autoschadenijhuis/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-75 hover:opacity-100 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/facebook.png" alt="Facebook" className="w-7 h-7 object-contain rounded-full" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/15 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <div className="text-white/60 text-xs">
              © 2026 Autoschade Bertie Nijhuis · BOVAG gecertificeerd · Duurzaam Repareren
            </div>
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span>Denekamp, Overijssel</span>
              <span className="text-white/30">·</span>
              <span>
                Webdesign:{" "}
                <a
                  href="https://conneqtai.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-400 transition-colors font-semibold"
                >
                  Conneqtai
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
      <StickyMobileCTA />
    </>
  );
}
