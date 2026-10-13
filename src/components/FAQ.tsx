"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "Werkt u samen met alle verzekeraars?",
    a: "Ja, wij werken samen met alle grote Nederlandse verzekeraars, waaronder Centraal Beheer, Interpolis, OHRA, Allianz, Nationale-Nederlanden en Aegon. Wij regelen het contact met uw verzekeraar en helpen u bij het invullen van de schadeformulieren.",
  },
  {
    q: "Hoe lang duurt een gemiddelde reparatie?",
    a: "De duur verschilt per type schade. Kleine parkeerschade of steenslag is vaak binnen één dag klaar. Grotere schades zoals botsschade of complete spuitbeurten duren gemiddeld 3 tot 7 werkdagen. Na de beoordeling geven wij u altijd een concrete planning.",
  },
  {
    q: "Krijg ik een leenauto tijdens de reparatie?",
    a: "Ja, wij bieden gratis vervangend vervoer tijdens de reparatie van uw auto. Zo staat u nooit zonder vervoer. Neem dit mee bij het inplannen van uw afspraak zodat wij een leenauto voor u kunnen reserveren.",
  },
  {
    q: "Geven jullie garantie op het werk?",
    a: "Ja. Als BOVAG-gecertificeerd bedrijf staan wij garant voor de kwaliteit van ons werk. Op alle uitgevoerde reparaties en lakwerkzaamheden verlenen wij garantie. Uw auto verlaat onze werkplaats pas als het resultaat aan onze hoge standaarden voldoet.",
  },
  {
    q: "Kan ik ook zonder verzekering terecht?",
    a: "Absoluut. Reparaties worden zowel via de verzekering als particulier afgehandeld. Wij geven u altijd eerst een gratis en vrijblijvende offerte, zodat u precies weet waar u aan toe bent.",
  },
  {
    q: "Werken jullie ook met bedrijfsauto's en bestelwagens?",
    a: "Ja, wij repareren alle merken en typen voertuigen: personenauto's, bestelwagens, bedrijfsauto's en caravans. Voor wagenparken bieden wij voordeligs afspraken en snelle doorlooptijden.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-gray-900 text-base">{item.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-brand-700 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64" : "max-h-0"}`}
          >
            <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
