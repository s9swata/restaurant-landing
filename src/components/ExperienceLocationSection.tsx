export default function ExperienceLocationSection() {
  return (
    <section id="location" className="py-16 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
              The Atmosphere
            </span>
            <h2 className="font-headline text-5xl text-on-surface mb-8 font-light leading-tight">
              An Evening Above<br />
              the City of Light
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed max-w-xl mb-12">
              Located just steps from the Louvre, our dining room offers an
              intimate escape from the bustling streets. As the sun sets, the
              room transforms into a golden sanctuary, mirrored by the twinkling
              lights of the Eiffel Tower visible from our panoramic terrace.
            </p>
          </div>
          <div className="bg-surface-container-highest p-10 rounded-sm editorial-shadow">
            <div className="flex items-start gap-4 mb-8">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="location_on"
              >
                location_on
              </span>
              <div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface mb-1">
                  Address
                </p>
                <p className="text-on-surface-variant font-light">
                  22 Rue de Rivoli, 75001 Paris, France
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-8">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="schedule"
              >
                schedule
              </span>
              <div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface mb-1">
                  Hours
                </p>
                <p className="text-on-surface-variant font-light">
                  Tuesday — Saturday: 19:00 - 23:30
                </p>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              href="#"
            >
              Get Directions
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 h-80 md:h-[600px] relative overflow-hidden rounded-sm">
          <img
            alt="Eiffel Tower at night from restaurant"
            className="w-full h-full object-cover"
            data-alt="View of Eiffel Tower at night from a window seat"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD52kPGeaE59a91uLNA8mr0hLJ07JuFGxjeKUfvCQ_lndwvzIiuLh2S8gGZplHtsAfop4Cfo7ZKVcSCez0n7mlmWwpcJrAn_JHw2JcurU4VF1GqAlXuugtYlFwGQXSp0nK5SOVV1ELYLtTSd1tf-STaBEoVT3Hb6eW-iTFO2Cwlm_fxScIgPYcAfxYuKDMFOwTtg_upi7MZ3Ij0tkT0eVoZCAJPKNDgpLWMAeHAP3YTG8M3_M6xadP1i5zPXIaQuXkopcP8BGnjPeiu"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <div className="aspect-video w-full rounded-sm overflow-hidden opacity-90 shadow-2xl">
              <img
                alt="Map of Paris 1st"
                className="w-full h-full object-cover grayscale"
                data-alt="Stylized map of Paris center"
                data-location="Paris, France"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYvFiv-jD7Y5pWtRD8oloEvMZS4q_Gi-X1YYpvx4Ezz6wXe5vOalvQg_krvDdgrHvEAREQ9cnGZiUTUabtx87e1mIb4yEdZi0Es9xK5i2Hi_B9LHA9or1yJS7hMVy-TCVpBB253MNEoXkAhCv6zgAlqZZV9-w2tYmWvQDnJ-m9HLgG4QusuqFvq9PGwi07c6o-GgD4eI5PZgTRisLKrrPC-HEnKY76geg0eYFb_NuasU3AV3N123uTBHL_XwuCurShre3AoV0wm88x"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
