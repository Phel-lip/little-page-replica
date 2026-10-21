import hero from "@/assets/sm-hero-nude.jpg";
import f1 from "@/assets/sm-f1-lilas.jpg";
import gel from "@/assets/sm-gel-vermelho.jpg";
import manut from "@/assets/sm-manut-marrom.jpg";
import loiro from "@/assets/sm-loiro.jpg";
import cilios from "@/assets/sm-cilios.jpg";
import nailart from "@/assets/sm-nailart.jpg";
import corte from "@/assets/sm-reel-corte_depois.jpg";
import loiroManut from "@/assets/sm-reel-loiro_depois.jpg";
import truss from "@/assets/sm-reel-truss.jpg";

// Single source of truth for the salon's details.
// Source: Instagram bio of @sm_studiodebeleza (name, services, hours, address,
// official WhatsApp link wa.me/message/WLXNBERURYCUP1 → +55 17 99206-4697).
export const SALON = {
  name: "SM Studio de Beleza",
  short: "SM",
  tagline: "Studio de Beleza",
  city: "São José do Rio Preto · SP",
  address: "R. Josina Teixeira de Carvalho, 552",
  hours: "Terça a sábado, das 9h às 19h",
  whatsapp: "5517992064697",
  whatsappLabel: "(17) 99206-4697",
  instagram: "https://www.instagram.com/sm_studiodebeleza/",
  instagramHandle: "@sm_studiodebeleza",
  heroImg: hero,
  heroAccent: nailart,
};

const IG = "https://www.instagram.com/p";

export type Category = "Unhas" | "Cabelo" | "Olhar" | "Estética";

export type Service = {
  id: string;
  title: string;
  category: Category;
  copy: string;
  cta: string;
  img?: string;
  pros: string[];
  source: string;
  alt: string;
};

// No team member names are confirmed publicly, so the professional step is skipped.
const PRO: string[] = [];

// Services with an authentic photo get a full card; the rest render compactly.
// Hair services and photos come from the studio's own reels (captions quoted in
// source). Mega hair, limpeza de pele and massagem were reported by the agency;
// only the massagem bronzeadora appears publicly (collab tagged with the studio).
const REEL = "https://www.instagram.com/sm_studiodebeleza/reel";
export const SERVICES: Service[] = [
  { id: "alongamento-f1", title: "Alongamento em molde F1", category: "Unhas", copy: "Preparação, acoplagem do molde F1, lixamento e cutículas para unhas resistentes e com aparência natural.", cta: "Solicitar alongamento", img: f1, alt: "Unhas alongadas em molde F1 com esmaltação lilás marmorizada", pros: PRO, source: `${IG}/DaeG2b-Ee1s/` },
  { id: "esmaltacao-gel", title: "Esmaltação em gel", category: "Unhas", copy: "Cor e brilho com acabamento caprichado — nas unhas naturais ou como renovação do alongamento.", cta: "Solicitar esmaltação", img: gel, alt: "Esmaltação em gel vermelha feita no SM Studio", pros: PRO, source: `${IG}/Db_rQb6EfGq/` },
  { id: "manutencao", title: "Manutenção de unhas", category: "Unhas", copy: "Manutenção do alongamento com cuidado com a estrutura das unhas e um novo acabamento.", cta: "Solicitar manutenção", img: manut, alt: "Unhas stiletto em marrom intenso após manutenção", pros: PRO, source: `${IG}/Db_rxf3ERuX/` },
  { id: "loiros", title: "Mechas e loiros", category: "Cabelo", copy: "Loiros iluminados, um dos trabalhos que mais aparecem no perfil do studio.", cta: "Solicitar avaliação", img: loiro, alt: "Cabelo loiro iluminado com ondas feito no SM Studio", pros: PRO, source: `${IG}/DdEyOGjIJ6W/` },
  { id: "manutencao-loiro", title: "Manutenção de loiro", category: "Cabelo", copy: "Para quem já é loira e quer renovar a cor e o brilho dos fios.", cta: "Solicitar manutenção", img: loiroManut, alt: "Cabelo longo loiro após manutenção de loiro no SM Studio", pros: PRO, source: `${REEL}/C0hx0WvOh_7/` },
  { id: "corte-escova", title: "Corte e escova", category: "Cabelo", copy: "Corte para renovar o visual, finalizado com escova.", cta: "Solicitar corte", img: corte, alt: "Cabelo escuro cortado na altura dos ombros e finalizado com escova", pros: PRO, source: `${REEL}/C4N5DXGOJGY/` },
  { id: "tratamento-truss", title: "Tratamento TRUSS Infusion", category: "Cabelo", copy: "Tratamento de hidratação e brilho para os fios, divulgado pelo studio.", cta: "Solicitar tratamento", img: truss, alt: "Cabelo loiro com brilho após tratamento no SM Studio", pros: PRO, source: `${REEL}/Cu9ecYFMIfM/` },
  { id: "plastica-dos-fios", title: "Plástica dos fios", category: "Cabelo", copy: "Para quem quer o cabelo liso no dia a dia. Tire suas dúvidas pelo WhatsApp.", cta: "Solicitar plástica dos fios", alt: "", pros: PRO, source: `${REEL}/Cu4qrSUtKwU/` },
  { id: "mega-hair", title: "Mega hair", category: "Cabelo", copy: "Comprimento e volume. Conte pelo WhatsApp o resultado que deseja.", cta: "Solicitar mega hair", alt: "", pros: PRO, source: SALON.instagram },
  { id: "cilios", title: "Extensão de cílios", category: "Olhar", copy: "Extensão de cílios para valorizar o olhar. Tire suas dúvidas sobre o procedimento pelo WhatsApp.", cta: "Solicitar cílios", img: cilios, alt: "Olhar com extensão de cílios e sobrancelha definida", pros: PRO, source: `${IG}/DeCrvbQCAdR/` },
  { id: "sobrancelha", title: "Sobrancelha", category: "Olhar", copy: "Cuidado das sobrancelhas para valorizar o seu olhar.", cta: "Solicitar sobrancelha", alt: "", pros: PRO, source: SALON.instagram },
  { id: "limpeza-de-pele", title: "Limpeza de pele", category: "Estética", copy: "Cuidado com a pele do rosto. Pergunte pelos detalhes pelo WhatsApp.", cta: "Solicitar limpeza de pele", alt: "", pros: PRO, source: SALON.instagram },
  { id: "massagem", title: "Massagem", category: "Estética", copy: "Entre as opções divulgadas está a massagem bronzeadora. Consulte as demais pelo WhatsApp.", cta: "Solicitar massagem", alt: "", pros: PRO, source: "https://www.instagram.com/p/DeKeqQWC_PQ/" },
  { id: "depilacao", title: "Depilação", category: "Estética", copy: "Conte pelo WhatsApp quais áreas deseja.", cta: "Solicitar depilação", alt: "", pros: PRO, source: SALON.instagram },
];

export const CATEGORIES: ("Todos" | Category)[] = ["Todos", "Unhas", "Cabelo", "Olhar", "Estética"];
export const MARQUEE_ITEMS = ["ALONGAMENTO F1", "ESMALTAÇÃO EM GEL", "MANUTENÇÃO", "MECHAS E LOIROS", "CORTE E ESCOVA", "TRATAMENTO TRUSS", "PLÁSTICA DOS FIOS", "MEGA HAIR", "EXTENSÃO DE CÍLIOS", "SOBRANCELHA", "LIMPEZA DE PELE", "MASSAGEM", "DEPILAÇÃO"];
export const PERIODS = ["Manhã", "Tarde", "Fim da tarde"];
export const NO_PREF = "Sem preferência";

export function fmtDate(d: string) {
  if (!d) return "A combinar";
  const [y, m, dd] = d.split("-");
  return `${dd}/${m}/${y}`;
}

export function todayLocal(now = new Date()) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

export function buildWhatsAppUrl(o: { service: string; pro: string; date: string; period: string; notes: string }) {
  const lines = [
    `Olá, SM Studio de Beleza! Gostaria de solicitar um horário:`,
    ``,
    `• Serviço: ${o.service}`,
    ...(o.pro && o.pro !== NO_PREF ? [`• Profissional: ${o.pro}`] : []),
    `• Data preferida: ${fmtDate(o.date)}`,
    `• Período preferido: ${o.period || "A combinar"}`,
    ...(o.notes.trim() ? [`• Observação: ${o.notes.trim()}`] : []),
    ``,
    `Aguardo a confirmação da disponibilidade.`,
  ];
  return `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
