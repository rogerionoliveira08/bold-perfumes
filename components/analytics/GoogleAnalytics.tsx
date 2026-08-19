"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-QZ13SCVCBN";
const CONSENT_KEY = "bold-parfum-cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
    }

    setReady(true);
  }, []);

  function updateConsent(status: Exclude<ConsentStatus, null>) {
    window.localStorage.setItem(CONSENT_KEY, status);
    setConsent(status);
  }

  function reopenPreferences() {
    window.localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
  }

  if (!ready) {
    return null;
  }

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <section
          aria-label="Preferências de cookies"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-4xl rounded-2xl border border-yellow-400/30 bg-zinc-950/95 p-4 text-white shadow-2xl backdrop-blur-md sm:bottom-5 sm:p-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-yellow-400 sm:text-base">
                Sua privacidade é importante
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-zinc-400 sm:text-sm sm:leading-6">
                Utilizamos cookies de análise para entender como o site é
                acessado e melhorar sua experiência. Você pode aceitar ou
                recusar esses cookies.{" "}
                <Link
                  href="/politica-de-privacidade"
                  className="font-bold text-yellow-400 transition hover:text-yellow-300"
                >
                  Saiba mais
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => updateConsent("rejected")}
                className="rounded-xl border border-zinc-700 px-5 py-3 text-xs font-black text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                Recusar
              </button>

              <button
                type="button"
                onClick={() => updateConsent("accepted")}
                className="rounded-xl bg-yellow-400 px-5 py-3 text-xs font-black text-black transition hover:bg-yellow-300"
              >
                Aceitar cookies
              </button>
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={reopenPreferences}
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-zinc-700 bg-zinc-950/90 px-3 py-2 text-[10px] font-bold text-zinc-400 shadow-lg backdrop-blur transition hover:border-yellow-400 hover:text-yellow-400"
          aria-label="Alterar preferências de cookies"
        >
          Cookies
        </button>
      )}
    </>
  );
}