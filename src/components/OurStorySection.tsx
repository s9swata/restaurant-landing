export default function OurStorySection() {
  return (
    <section id="our-story" className="py-16 md:py-32 px-4 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] relative overflow-hidden rounded-sm editorial-shadow">
            <img
              alt="Chef plating a gourmet dish"
              className="w-full h-full object-cover scale-105"
              data-alt="Chef focused on plating fine dining pasta"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV9YvPVVly0amqKbyEf0koU-LwB9j3VRfYjwmI1LtLJ0qFlgqJQSSLTGZpeQ_RFCzrOk796rjY08geMpx3t-KqxQHsOdNFORHw30Yp78AC1krkD771_EDDQpvyCkppn3fAHSBVKBJP_iwhFAyx73UanWuxMv7S4tCIkeEi3ST7DeDR2VTWRvTw0l_3RT_Cdavs69OCNbq2foTL5CbRw5rssWE1P1VgCIgQ8NgF0fLBKA5Oo95s4p_OalYk5kkYjJVG0lfPKH6hp26U"
            />
          </div>
          {/* Ingredient Overlay Signature Component */}
          <div className="absolute -bottom-8 -right-8 bg-secondary-container/40 backdrop-blur-md p-8 rounded-sm max-w-xs hidden md:block">
            <p className="font-label text-[10px] uppercase tracking-widest text-white mb-2">
              Seasonal Highlight
            </p>
            <p className="font-headline italic text-white text-lg leading-relaxed">
              &quot;The Alba White Truffle, arriving this October from the Piedmont
              hills.&quot;
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            The Heritage
          </span>
          <h2 className="font-headline text-4xl md:text-6xl text-on-surface mb-8 leading-tight font-light">
            Where Rome Whispers<br />
            to the Seine
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed text-lg">
            <p>
              L&apos;Oro d&apos;Italia was born from a singular vision: to transplant the
              rustic, sun-drenched soul of the Italian countryside into the
              refined architectural elegance of Paris&apos;s 1st Arrondissement.
            </p>
            <p>
              Our Michelin-starred heritage is rooted in the respect for the
              ingredient. We source our flour from centennial mills in Puglia
              and our herbs from secret gardens in the Île-de-France, creating
              a dialogue between two of the world&apos;s most storied culinary
              cultures.
            </p>
            <p className="italic font-headline text-on-surface mt-8">
              &quot;Gastronomy is the only art form that enters the body. At L&apos;Oro, we
              ensure it also touches the soul.&quot;
            </p>
          </div>
          <div className="mt-12 pt-12 border-t border-outline-variant/15 flex items-center gap-6">
            <img
              alt="Chef portrait"
              className="w-16 h-16 rounded-full object-cover"
              data-alt="Portrait of our Executive Chef"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj2ts8fYh0pPIiMl2zAQCZdAXeTJtd35ECwLfV1TxU8Sj23aKqWp9z1umbzuTMW_9XVmKqaBXsfcn3Rtit8iZLFwzqR1Js-XdHBfurZQiKE5xyFJ3jVFN62iAO2xJ4SsdzCVKb3g8iJASYl6lu53MwYgYUlIORhuX1Lu4xST0VOKgUyvPtsubBK5tazMKNpO1IchEEQgUdjQ91UufDhwsIFQnc-aDtVo-PvpTeDXOL0D-cOF0V0Y2Vuh_ccBeU_V_qxsWjjOJHnEhI"
            />
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface">
                Marco Valente
              </p>
              <p className="font-body text-sm text-outline">
                Executive Chef & Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
