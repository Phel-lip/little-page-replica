import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { ArrowRight, MapPin, Instagram, ChevronDown, Menu, X, ExternalLink, MessageCircle, Clock } from "lucide-react";
import { SALON, MARQUEE_ITEMS } from "@/lib/salon";
import { BookingModal } from "@/components/BookingModal";
import { ServicesSection } from "@/components/ServicesSection";
import gelAntes from "@/assets/sm-gel-antes.jpg.asset.json";
import gelDepois from "@/assets/sm-gel-vermelho.jpg.asset.json";
import manutAntes from "@/assets/sm-manut-antes.jpg.asset.json";
import manutDepois from "@/assets/sm-manut-marrom.jpg.asset.json";
import loiroAntes from "@/assets/sm-loiro-antes.jpg.asset.json";
import loiroDepois from "@/assets/sm-loiro.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SM Studio de Beleza — São José do Rio Preto | Unhas, cabelo e cílios" },
      { name: "description", content: "SM Studio de Beleza em São José do Rio Preto/SP: alongamento em molde F1, esmaltação em gel, cabelo, extensão de cílios, sobrancelha, depilação e estética. Solicite seu horário pelo WhatsApp." },
      { property: "og:title", content: "SM Studio de Beleza — São José do Rio Preto/SP" },
      { property: "og:description", content: "Unhas, cabelo, cílios e sobrancelha. Veja trabalhos reais do studio e solicite seu horário pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [["Serviços", "#servicos"], ["Antes e depois", "#antes-depois"], ["Visite", "#visite"], ["Dúvidas", "#faq"]];

function Index() {
  const [modal, setModal] = useState<{ open: boolean; service: string | null }>({ open: false, service: null });
  const book = (service: string | null = null) => setModal({ open: true, service });
  const close = useCallback(() => setModal({ open: false, service: null }), []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header onBook={() => book()} />
      <Hero onBook={() => book()} />
      <ServiceMarquee />
      <ServicesSection onBook={book} />
      <BeforeAfter onBook={book} />
      <Visit />
      <Faq />
      <Footer />
      {modal.open && <BookingModal open initialService={modal.service} onClose={close} />}
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label={SALON.name}>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 font-display text-lg italic text-primary">SM</span>
      <span className="leading-none">
        <span className="block font-display text-xl tracking-wide text-foreground">SM Studio</span>
        <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">de beleza</span>
      </span>
    </a>
  );
}

function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {NAV.map(([l, h]) => <a key={h} href={h} className="text-muted-foreground transition hover:text-primary">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onBook} className="rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:px-5">Solicitar horário</button>
          <button className="rounded-full p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      {open && (
        <nav className="grid border-t px-5 py-2 md:hidden">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-sm">{l}</a>)}
        </nav>
      )}
    </header>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-sand blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 md:grid-cols-[1fr_1.05fr] md:py-16">
        <div className="order-2 md:order-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
            <MapPin className="h-3.5 w-3.5" /> {SALON.city}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Unhas impecáveis, <em className="text-brand">do preparo ao último detalhe.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Alongamento em molde F1, esmaltação em gel e manutenção — além de cabelo, cílios, sobrancelha, depilação e estética no SM Studio de Beleza.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onBook} className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-medium text-primary-foreground shadow-soft transition hover:opacity-90">
              Solicitar horário <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#antes-depois" className="rounded-full border bg-card px-7 py-3.5 font-medium transition hover:border-primary">Ver antes e depois</a>
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {SALON.hours}</span>
            <span className="flex items-center gap-2"><Instagram className="h-4 w-4 text-primary" /> {SALON.instagramHandle}</span>
          </p>
        </div>
        <div className="relative order-1 mx-auto w-full max-w-md md:order-2">
          <img src={SALON.heroImg} alt="Unhas alongadas em tom nude perolado feitas no SM Studio de Beleza" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
          <img src={SALON.heroAccent} alt="Esmaltação vermelha com nail art de corações" className="absolute -bottom-6 -left-4 w-32 rounded-2xl border-4 border-background object-cover shadow-soft sm:w-40 md:-left-10" />
          <span className="absolute right-4 top-4 rounded-full bg-card/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary">Trabalho real do studio</span>
        </div>
      </div>
    </section>
  );
}

function ServiceMarquee() {
  return (
    <div className="mt-6 overflow-hidden border-y border-gold/30 bg-cocoa py-3.5 text-cocoa-foreground md:py-[18px]" aria-label="Serviços do studio">
      <div className="marquee-track flex w-max font-display text-xl uppercase tracking-[0.14em] sm:text-2xl">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-7 pr-7" aria-hidden={copy === 1}>
            {MARQUEE_ITEMS.map((item) => (
              <span key={item} className="flex shrink-0 items-center gap-7">
                <span>{item}</span>
                <span className="text-gold" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-10 max-w-xl">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

const PAIRS = [
  { id: "esmaltacao-gel", label: "Esmaltação em gel", before: gelAntes.url, after: gelDepois.url, note: "Renovação completa mantendo a estrutura das unhas." },
  { id: "manutencao", label: "Manutenção", before: manutAntes.url, after: manutDepois.url, note: "Do alongamento ao marrom intenso e brilhante." },
  { id: "cabelo", label: "Loiro", before: loiroAntes.url, after: loiroDepois.url, note: "Transformação de cor publicada pelo studio." },
];

function BeforeAfter({ onBook }: { onBook: (id: string) => void }) {
  return (
    <section id="antes-depois" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Antes e depois" title={<>Cada etapa <em className="text-brand">faz diferença.</em></>} sub="Transformações reais publicadas no Instagram do studio." />
        <div className="grid gap-6 md:grid-cols-3">
          {PAIRS.map((p) => (
            <figure key={p.id} className="rounded-3xl border bg-card p-3">
              <div className="grid grid-cols-2 gap-2">
                {([["Antes", p.before], ["Depois", p.after]] as const).map(([l, src]) => (
                  <div key={l} className="relative overflow-hidden rounded-2xl">
                    <img src={src} alt={`${p.label} — ${l.toLowerCase()}`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                    <span className={`absolute left-2 top-2 rounded-full px-2.5 py-0.5 text-[11px] ${l === "Antes" ? "bg-cocoa/80 text-cocoa-foreground" : "bg-primary text-primary-foreground"}`}>{l}</span>
                  </div>
                ))}
              </div>
              <figcaption className="flex items-end justify-between gap-3 px-2 pb-1 pt-4">
                <span>
                  <span className="block font-display text-xl">{p.label}</span>
                  <span className="text-xs text-muted-foreground">{p.note}</span>
                </span>
                <button onClick={() => onBook(p.id)} className="shrink-0 text-sm font-medium text-primary hover:underline">Quero este</button>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visite" className="scroll-mt-20 bg-cocoa py-16 text-cocoa-foreground md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Visite o studio</p>
          <h2 className="font-display text-4xl leading-tight">Atendimento com <em>horário marcado.</em></h2>
        </div>
        <p className="flex gap-3 text-sm"><MapPin className="h-5 w-5 shrink-0 text-gold" /><span>{SALON.address}<br />{SALON.city}</span></p>
        <div className="grid gap-3 text-sm">
          <p className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-gold" />{SALON.hours}</p>
          <a href={`https://wa.me/${SALON.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-gold"><MessageCircle className="h-5 w-5 shrink-0 text-gold" />WhatsApp {SALON.whatsappLabel}</a>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  ["Quais serviços o studio oferece?", "Unhas (alongamento em molde F1, esmaltação em gel e manutenção), cabelo, extensão de cílios, sobrancelha, depilação e estética. Cada serviço tem um botão para solicitar horário."],
  ["Como funciona a extensão de cílios?", "A aplicação leva cerca de 40 minutos, com cola vegana e hipoalergênica, e você permanece com os olhos abertos durante o procedimento."],
  ["Quais são os horários?", "O studio atende de terça a sábado, das 9h às 19h, com horário marcado."],
  ["Como solicito um horário?", "Escolha o serviço e, se quiser, uma data, um período e uma observação. No final, o WhatsApp abre com a mensagem pronta — você envia, e o studio confirma a disponibilidade por lá."],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="divide-y rounded-3xl border bg-card">
          {FAQ.map(([q, a], i) => (
            <div key={q}>
              <button aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium">
                {q}<ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p id={`faq-answer-${i}`} className="px-6 pb-5 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl italic text-primary">SM Studio</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">de beleza</p>
        </div>
        <p className="flex gap-3 text-sm"><MapPin className="h-4 w-4 shrink-0 text-primary" /><span>{SALON.address}<br />{SALON.city}</span></p>
        <nav className="grid gap-2 text-sm">{NAV.map(([l, h]) => <a key={h} href={h} className="hover:text-primary">{l}</a>)}</nav>
        <div className="grid gap-3 text-sm">
          <a href={`https://wa.me/${SALON.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-primary"><MessageCircle className="h-4 w-4 shrink-0 text-primary" />WhatsApp {SALON.whatsappLabel}</a>
          <a href={SALON.instagram} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-primary"><Instagram className="h-4 w-4 shrink-0 text-primary" />{SALON.instagramHandle} <ExternalLink className="h-3 w-3" /></a>
        </div>
      </div>
      <p className="border-t py-5 text-center text-xs text-muted-foreground">© {SALON.name}</p>
    </footer>
  );
}
