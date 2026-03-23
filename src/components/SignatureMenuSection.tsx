export default function SignatureMenuSection() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-12">
        <div className="text-center mb-24">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Seasonal Selection
          </span>
          <h2 className="font-headline text-5xl text-on-surface font-light">
            The Signature Menu
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Dish 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-8 rounded-sm transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                alt="Truffle Tagliatelle"
                className="w-full h-full object-cover"
                data-alt="Close up of truffle pasta on white plate"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDedUyUKHPQFBZsjZw4QMVnhkBav3ysd90az8AQf5ql-v90A4bMpPjA1VY2M2tPPXdYFkvg393WZMz_9J_mR4IMOc2K7B1t-RhKFqHCF9-xIKlOtEESJRQBOPk71NYku_h_SLqkxIBj4Iq7JnB_nK0Q6uda9XSSI_U3gwb1fRVpj_QTFt2YuGM57hqMog7gOAvFjxaA9knEIqDGwPnJRonY_WedeMjYmNlmZVY2hFpxBGVyufPuYgFIJZGKAVrp88PEqu_9gVn0MU_r"
              />
            </div>
            <h3 className="font-headline text-2xl mb-3 text-on-surface">
              Truffle Tagliatelle
            </h3>
            <p className="text-on-surface-variant font-light text-sm mb-4 leading-relaxed">
              Hand-cut pasta, 36-month aged Parmigiano Reggiano, and freshly
              shaved Umbrian black truffles.
            </p>
            <p className="font-label text-xs tracking-widest text-primary uppercase">
              €48
            </p>
          </div>
          {/* Dish 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-8 rounded-sm transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                alt="Osso Buco Parisian"
                className="w-full h-full object-cover"
                data-alt="Braised veal with saffron risotto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkW4YYpsgf19RIfiPmbEbD7Cpq4FN2jAlqqRGuLpwTPm44aXKKtWYUZX8cL_z-eCKnIFy1ddPyMgYnJBGBLcp4XDsfMNNlVCuqkKytMQIBAXKwpRCBbGzu7b6d_52f3lLJgcdWlJpdTgD0uS4QGubXAvWMBsjOnd8HRVOZXYzuObvHmenSUZXLRrEvevWQ3HKo-Yz0oN7vKiv-zpvFU_lUeaJz3pEBmZxxxjcyNwJDGLFjohdJRsDTYHSokerTS7-ONz6tJN81LWQL"
              />
            </div>
            <h3 className="font-headline text-2xl mb-3 text-on-surface">
              Osso Buco à la Parisienne
            </h3>
            <p className="text-on-surface-variant font-light text-sm mb-4 leading-relaxed">
              Slow-braised milk-fed veal shank, saffron risotto, and a delicate
              bone marrow foam.
            </p>
            <p className="font-label text-xs tracking-widest text-primary uppercase">
              €62
            </p>
          </div>
          {/* Dish 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-8 rounded-sm transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                alt="Signature Dessert"
                className="w-full h-full object-cover"
                data-alt="Gourmet tiramisu with gold leaf decoration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkIhzPTgCnE-OIIl_zZlUYQfbjWUlxap8AZPg0vdLwpXKBqzPhGYn_dhNq0CvDcP3MtZytEnQzkSAfleVmIgH4AW7pytgKyQFPytP8Hoc1CRuMOM5oR6U8B4ZsDetNKDcsuyoMOn-OAx8we4A60M5jHjr0b3yWPrpVGFe4OXUXNw8xOD7cvqmfYiOdG2z4wQdpKoJAdW38gwd0x1TPnaw82pjxrrW4Fd6klTcf9asn8evBWPYn3a0eTy5lwbulY5Cm5luSKdXCuwq6"
              />
            </div>
            <h3 className="font-headline text-2xl mb-3 text-on-surface">
              Gold Leaf Tiramisu
            </h3>
            <p className="text-on-surface-variant font-light text-sm mb-4 leading-relaxed">
              Espresso-soaked savoiardi, mascarpone cream, and delicate 24k
              Italian gold leaf finish.
            </p>
            <p className="font-label text-xs tracking-widest text-primary uppercase">
              €32
            </p>
          </div>
        </div>
        <div className="mt-24 text-center">
          <button className="border border-outline-variant/30 px-12 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] transition-all hover:bg-surface-container-high">
            Explore Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
