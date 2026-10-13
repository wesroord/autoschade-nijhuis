"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xpwzgojq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-navy-100">
      <h3 className="font-bold text-navy-900 mb-6 text-lg">Stuur ons een bericht</h3>
      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h4 className="font-bold text-green-800 mb-1">Bericht verstuurd!</h4>
          <p className="text-green-700 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
              <input
                type="text"
                name="naam"
                required
                placeholder="Uw naam"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefoon</label>
              <input
                type="tel"
                name="telefoon"
                placeholder="Uw telefoonnummer"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="uw@email.nl"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
            <select
              name="onderwerp"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600 text-gray-700"
            >
              <option value="">Selecteer een onderwerp</option>
              <option>Gratis offerte aanvragen</option>
              <option>Schadeherstel</option>
              <option>Spuitwerk / Lakwerk</option>
              <option>Hagelschade</option>
              <option>Deukwerk / PDR</option>
              <option>Caravan / Camper</option>
              <option>Anders</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bericht *</label>
            <textarea
              name="bericht"
              required
              rows={4}
              placeholder="Omschrijf uw schade of vraag..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600 resize-none"
            />
          </div>
          {status === "error" && (
            <p className="text-red-600 text-sm">Er ging iets mis. Bel ons op 0541-354640.</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-navy-900 text-white py-3 rounded-lg font-bold text-sm hover:bg-navy-700 transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Versturen..." : "Bericht versturen →"}
          </button>
          <p className="text-xs text-gray-400 text-center">
            Of bel direct: <a href="tel:0541354640" className="text-navy-600 font-semibold">0541-354640</a>
          </p>
        </form>
      )}
    </div>
  );
}
