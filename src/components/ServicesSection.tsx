import { useState } from "react";
import { ArrowRight, ExternalLink, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, SALON, SERVICES } from "@/lib/salon";

export function ServicesSection({ onBook }: { onBook: (id: string) => void }) {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Todos");
  const services = category === "Todos" ? SERVICES : SERVICES.filter((service) => service.category === category);
  const withPhoto = services.filter((s) => s.img);
  const compact = services.filter((s) => !s.img);

  return (
    <section id="servicos" className="services-section scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="services-heading">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Serviços</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Das unhas ao olhar,<br /><em className="text-brand">tudo em um só studio.</em></h2>
          </div>
          <div className="services-intro">
            <p className="text-muted-foreground">Unhas, loiros, corte, tratamentos e mega hair, cílios e sobrancelha, limpeza de pele, massagem e depilação. Fotos reais do Instagram do studio.</p>
            <a href={SALON.instagram} target="_blank" rel="noopener noreferrer" className="services-profile"><Instagram className="h-4 w-4" />{SALON.instagramHandle}<ExternalLink className="h-3 w-3" /></a>
          </div>
        </div>

        <div className="services-toolbar">
          <div className="services-filters" aria-label="Filtrar serviços">
            {CATEGORIES.map((item) => {
              const count = item === "Todos" ? SERVICES.length : SERVICES.filter((service) => service.category === item).length;
              return <Button key={item} variant="serviceFilter" size="service" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}<span className="service-filter-count">{count}</span></Button>;
            })}
          </div>
          <p className="services-count" role="status" aria-live="polite">{services.length} {services.length === 1 ? "serviço" : "serviços"}</p>
        </div>

        <div className={withPhoto.length > 0 && withPhoto.length <= 2 && compact.length > 0 ? "services-split" : undefined}>
          {withPhoto.length > 0 && (
            <div className="services-grid" style={{ "--cols": withPhoto.length >= 7 ? 4 : withPhoto.length === 6 ? 3 : Math.max(withPhoto.length, 3) } as React.CSSProperties}>
              {withPhoto.map((service) => (
                <article key={service.id} className="service-card group">
                  <div className="service-photo-link">
                    <img src={service.img} alt={service.alt} loading="lazy" decoding="async" className="service-photo" />
                    <span className="service-category">{service.category}</span>
                  </div>
                  <div className="service-card-body">
                    <h3 className="font-display text-2xl leading-tight">{service.title}</h3>
                    <p className="service-description">{service.copy}</p>
                    <div className="service-card-footer">
                      <p className="text-xs text-muted-foreground">Valor <span className="font-medium text-primary">sob consulta</span></p>
                      <Button variant="service" size="service" onClick={() => onBook(service.id)} className="w-full justify-between">{service.cta}<ArrowRight /></Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {compact.length > 0 && (
            <div className="services-compact">
              {withPhoto.length > 0 && <p className="services-compact-title">Também no studio</p>}
              <ul className="services-compact-list">
                {compact.map((service) => (
                  <li key={service.id} className="service-compact">
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-primary">{service.category}</p>
                      <h3 className="font-display text-xl leading-tight">{service.title}</h3>
                      <p className="text-xs text-muted-foreground">{service.copy}</p>
                    </div>
                    <button onClick={() => onBook(service.id)} aria-label={service.cta} className="service-compact-cta">Solicitar<ArrowRight className="h-4 w-4" /></button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="services-assistance">
          <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">Em dúvida sobre qual serviço escolher?</p>
          <Button variant="link" asChild><a href={`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent("Olá, SM Studio de Beleza! Vi os serviços no site e gostaria de ajuda para escolher o melhor para mim.")}`} target="_blank" rel="noopener noreferrer">Fale com o studio<ArrowRight /></a></Button>
        </div>
      </div>
    </section>
  );
}
