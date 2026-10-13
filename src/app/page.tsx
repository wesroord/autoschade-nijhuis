import ContactForm from "@/components/ContactForm";

const services = [
  {
    icon: "🔧",
    title: "Schadeherstel",
    description:
      "Professioneel herstel van alle soorten autoschade. Wij werken nauwkeurig en snel, zodat uw auto er weer als nieuw uitziet.",
  },
  {
    icon: "🎨",
    title: "Spuitwerk & Lakwerk",
    description:
      "Hoogwaardige lacquering met perfecte kleurmatching. Van kleine krassen tot complete spuitbeurten — altijd een onberispelijk resultaat.",
  },
  {
    icon: "🔨",
    title: "Deukwerk & PDR",
    description:
      "Deukjes verwijderen zonder schilderwerk? Met Paintless Dent Repair (PDR) herstellen wij kleine deuken snel en kostenbesparend.",
  },
  {
    icon: "🌨️",
    title: "Hagelschade",
    description:
      "Hagelschade aan uw auto? Wij herstellen snel en vakkundig alle hagelschade, van klein tot groot, met of zonder schilderwerk.",
  },
  {
    icon: "🚐",
    title: "Caravan & Camper",
    description:
      "Ook voor schade aan uw caravan of camper bent u bij ons aan het juiste adres. Wij herstellen alle merken en modellen.",
  },
  {
    icon: "🛡️",
    title: "Steenslag & Parkeerschade",
    description:
      "Steenslagschade, bumperdeukjes of parkeerschade? Wij lossen het op — snel, vakkundig en voor een scherpe prijs.",
  },
];

const usps = [
  { icon: "✅", title: "Gratis offerte", description: "Altijd vrijblijvend en transparant" },
  { icon: "🚗", title: "Vervangend vervoer", description: "Gratis leenauto tijdens reparatie" },
  { icon: "📋", title: "Schadeformulier hulp", description: "Wij helpen met de papieren" },
  { icon: "📞", title: "24/7 bereikbaar", description: "Ook bij spoed staat u er niet alleen voor" },
];

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.autoschadenijhuis.nl/Autoschade-Nijhuis.jpg"
              alt="Autoschade Bertie Nijhuis logo"
              className="h-10 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {["Diensten", "Over ons", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white text-sm font-semibold tracking-wide hover:text-navy-100 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:0541354640"
              className="bg-white text-navy-900 px-4 py-2 rounded text-sm font-bold hover:bg-navy-100 transition-colors"
            >
              0541-354640
            </a>
          </nav>
          {/* Mobile */}
          <a
            href="tel:0541354640"
            className="md:hidden bg-white text-navy-900 px-3 py-2 rounded text-sm font-bold"
          >
            Bel ons
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen bg-navy-900 pt-16"
        style={{
          background: "linear-gradient(135deg, #0d1550 0%, #1B2880 50%, #2B4AD4 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-navy-100 text-sm font-semibold tracking-widest uppercase mb-4">
            Meer dan 40 jaar vakmanschap
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            IJZERSTERK
            <br />
            <span className="text-navy-100">IN SCHADEWERK</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Autoschade Bertie Nijhuis in Denekamp. Familiebedrijf met meer dan 40 jaar ervaring
            in schadeherstel. BOVAG gecertificeerd. Duurzaam Repareren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-navy-900 px-8 py-4 rounded text-base font-bold hover:bg-navy-100 transition-colors"
            >
              Gratis offerte aanvragen
            </a>
            <a
              href="#diensten"
              className="border-2 border-white text-white px-8 py-4 rounded text-base font-bold hover:bg-white/10 transition-colors"
            >
              Onze diensten
            </a>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {usps.map((usp) => (
            <div key={usp.title} className="flex flex-col items-center text-center gap-2 p-4">
              <span className="text-3xl">{usp.icon}</span>
              <h3 className="font-bold text-navy-900 text-sm">{usp.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIENSTEN */}
      <section id="diensten" className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-navy-600 text-sm font-semibold tracking-widest uppercase mb-2">Wat wij doen</p>
            <h2 className="text-4xl font-black text-navy-900 mb-4">Onze Diensten</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Van kleine parkeerschade tot grote hagelschade — wij herstellen het vakkundig en snel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-navy-100 hover:shadow-md hover:border-navy-300 transition-all"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section id="over-ons" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-navy-600 text-sm font-semibold tracking-widest uppercase mb-2">Over ons</p>
              <h2 className="text-4xl font-black text-navy-900 mb-6">
                Familiebedrijf met<br />meer dan 40 jaar<br />ervaring
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Autoschade Bertie Nijhuis is een professioneel familiebedrijf in Denekamp dat al meer dan
                40 jaar gespecialiseerd is in het herstellen van alle merken personen- en
                bedrijfsvoertuigen. Wij staan voor kwaliteit, eerlijkheid en vakmanschap.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Als BOVAG-gecertificeerd bedrijf werken wij volgens strenge kwaliteitsnormen en zijn wij
                gecertificeerd voor <strong>Duurzaam Repareren</strong> — milieubewust onderhoud, herstel
                en restauratie.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-navy-50 border border-navy-200 rounded-lg px-4 py-3 text-center">
                  <div className="text-2xl font-black text-navy-900">40+</div>
                  <div className="text-xs text-gray-500 font-medium">jaar ervaring</div>
                </div>
                <div className="bg-navy-50 border border-navy-200 rounded-lg px-4 py-3 text-center">
                  <div className="text-2xl font-black text-navy-900">BOVAG</div>
                  <div className="text-xs text-gray-500 font-medium">gecertificeerd</div>
                </div>
                <div className="bg-navy-50 border border-navy-200 rounded-lg px-4 py-3 text-center">
                  <div className="text-2xl font-black text-navy-900">🌱</div>
                  <div className="text-xs text-gray-500 font-medium">Duurzaam Repareren</div>
                </div>
                <div className="bg-navy-50 border border-navy-200 rounded-lg px-4 py-3 text-center">
                  <div className="text-2xl font-black text-navy-900">Alle</div>
                  <div className="text-xs text-gray-500 font-medium">merken & modellen</div>
                </div>
              </div>
            </div>
            <div className="bg-navy-900 rounded-2xl p-8 text-white"
              style={{ background: "linear-gradient(135deg, #1B2880 0%, #2B4AD4 100%)" }}
            >
              <h3 className="text-xl font-bold mb-6">Waarom Bertie Nijhuis?</h3>
              <ul className="space-y-4">
                {[
                  "Gratis en vrijblijvende offerte",
                  "Gratis vervangend vervoer tijdens reparatie",
                  "Hulp bij het invullen van schadeformulieren",
                  "24 uur per dag bereikbaar bij spoed",
                  "BOVAG gecertificeerd — zekerheid en kwaliteit",
                  "Duurzaam Repareren certificaat",
                  "Alle merken personen- en bedrijfsvoertuigen",
                  "Meer dan 40 jaar familiebedrijf in Denekamp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-navy-100 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-navy-600 text-sm font-semibold tracking-widest uppercase mb-2">Neem contact op</p>
            <h2 className="text-4xl font-black text-navy-900 mb-4">Hoe kunnen wij u helpen?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Vraag een gratis offerte aan of stel uw vraag. Wij reageren zo snel mogelijk.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-navy-100">
                <h3 className="font-bold text-navy-900 mb-4">Contactgegevens</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="font-semibold text-gray-800">Adres</p>
                      <p>Ambachtstraat 5</p>
                      <p>7591 BE Denekamp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📞</span>
                    <div>
                      <p className="font-semibold text-gray-800">Telefoon</p>
                      <a href="tel:0541354640" className="text-navy-600 hover:underline font-medium">
                        0541-354640
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-800">E-mail</p>
                      <a href="mailto:info@autoschadenijhuis.nl" className="text-navy-600 hover:underline">
                        info@autoschadenijhuis.nl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border border-navy-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.1!2d7.0!3d52.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b81c2a73d77cd5%3A0x1!2sAmbachtstraat+5%2C+7591+BE+Denekamp!5e0!3m2!1snl!2snl!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie Autoschade Bertie Nijhuis"
                />
              </div>
            </div>
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-950 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="https://www.autoschadenijhuis.nl/Autoschade-Nijhuis.jpg"
                alt="Autoschade Bertie Nijhuis"
                className="h-10 w-auto mb-3"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                IJzersterk in schadewerk. Meer dan 40 jaar familiebedrijf in Denekamp.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Diensten</h4>
              <ul className="space-y-1 text-white/60 text-sm">
                {["Schadeherstel", "Spuitwerk & Lakwerk", "Deukwerk & PDR", "Hagelschade", "Caravan & Camper"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Contact</h4>
              <ul className="space-y-1 text-white/60 text-sm">
                <li>Ambachtstraat 5, Denekamp</li>
                <li><a href="tel:0541354640" className="hover:text-white">0541-354640</a></li>
                <li><a href="mailto:info@autoschadenijhuis.nl" className="hover:text-white">info@autoschadenijhuis.nl</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs">
            © 2026 Autoschade Bertie Nijhuis · KvK Denekamp · BOVAG gecertificeerd
          </div>
        </div>
      </footer>
    </>
  );
}
