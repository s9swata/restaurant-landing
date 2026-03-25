export default function SecondiSection() {
  return (
    <section className="mb-40 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 sticky top-40">
          <h2 className="font-headline text-4xl mb-6">Secondi</h2>
          <div className="w-24 h-px bg-primary-container mb-12"></div>
          <div className="space-y-16">
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Filetto di Rombo
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  58
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed">
                Wild turbot fillet, charcoal-grilled artichokes, and a light
                champagne emulsion.
              </p>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Agnello di Montagna
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  65
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed mb-3">
                Dorset lamb rack in herb crust, smoked eggplant purée, and wild
                berry jus.
              </p>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Guancia al Barolo
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  62
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed">
                36-hour slow-cooked beef cheek in Barolo wine, parsnip cream,
                and dehydrated kale.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[16/9] overflow-hidden">
              <img
                alt="Secondi main course"
                className="w-full h-full object-cover"
                data-alt="Beautifully seared lamb rack served with roasted vegetables and a glossy red wine reduction on dark slate"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtQN3pUrqK2yiguYcGrYtYN3WJXp1LZZ2PIigu8VVfurdBuMlWKsP4lBpe6xGhRiaoJ5Y7HNpmU3zsUIzeyCO5Vy_tv7PY7Dp83G-Z7JXo1Y75eG5sP9OAp6-aPyah_p35M1YlGFLBcqpq2eDdxJZ0A29GTMwur0lGg9AmCMiH8_m-KkO1R6Avz-HTHvc2fTX36Uvy76c_906D6yvFIlyv_CznT10o6X4DeFZWo6K8iymooxyyURH7M38MSugemlR78IVswR8qBlLP"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                alt="Detail of ingredients"
                className="w-full h-full object-cover"
                data-alt="Fresh purple artichokes and garden herbs on a marble surface with soft natural light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACXb62mvREDhRGQQTh4U9TGp3leh7C3zqL8TzbCi1AmxS86tZbPq-O3OepLux7RGZR-52_4GTGYDxwbaU2wY9sIlTEhHNMjjpq54ldofnRB43TSqD_dFk9uGjiiZNxPuVGBwM6iCfiuyW3LmAreBzvxYsIpQwiRp6Ski9UT7hW0r38s2xf8a2VTuvSkammuw5gUtQeRpkXMrL_AUUeZpFa1ovEOrpM9ixnMp8PTi6rTnOC1Xx5Xo2OIL46AEKPI0L5jcAeVJLYO2kW"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12">
              <img
                alt="Wine pairing"
                className="w-full h-full object-cover"
                data-alt="A glass of deep red Barolo wine standing next to a bottle in a dim, sophisticated cellar atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxhIwjFM6mMCQJl1FnixVo54TfqmEVe6YQUprO5PPB698gJKRCJ3Bcv8IV3CMTzOPAEnSQDAN78zhwt8TgynMfdf4HEYaf_I1urf3g9nstUSNHH_2M9k_BKqiOs1LRFI-rALm9T-2nikOSfmfJtkGLp68kvdivyqnaa3hKE7bb5N7SGMTl46Qe9P_Pmt846ehCNkXz6TDUox5zRiDiv4KSrxVJgRUgiaDFKP5GCXXVHrqF2fFFgttj5EmSe-e4LVOA6QApGqtzsHWc"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
