export default function QuoteSection() {
  return (
    <section className="py-20 md:py-40 px-4 md:px-8 text-center max-w-4xl mx-auto">
      <span className="material-symbols-outlined text-primary-container text-4xl mb-12">
        restaurant
      </span>
      <blockquote className="font-headline text-3xl md:text-5xl font-light leading-tight italic text-on-surface/80">
        "Cuisine is the art of memory and transformation. At Oro e Cenere, we
        honor the gold of the soil and the ash of the hearth."
      </blockquote>
    </section>
  );
}
