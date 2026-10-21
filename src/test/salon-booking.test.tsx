import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { BookingModal } from '@/components/BookingModal';
import { CATEGORIES, SALON, SERVICES } from '@/lib/salon';

afterEach(cleanup);

describe('Service selection', () => {
  it('offers the 14 curated real services, including the hair services from the studio reels', () => {
    expect(SERVICES).toHaveLength(14);
    for (const id of ['mega-hair', 'massagem', 'limpeza-de-pele', 'corte-escova', 'manutencao-loiro', 'tratamento-truss', 'plastica-dos-fios']) {
      expect(SERVICES.map((s) => s.id)).toContain(id);
    }
  });
  it('has no unproven technical claims about cílios', () => {
    const cilios = SERVICES.find((s) => s.id === 'cilios');
    expect(cilios?.copy).not.toMatch(/minutos|cola|hipoalerg/i);
  });
  it('uses a different photo for each pictured service', () => {
    const imgs = SERVICES.flatMap((s) => (s.img ? [s.img] : []));
    expect(new Set(imgs).size).toBe(imgs.length);
  });
  it('sends requests to the verified WhatsApp number', () => {
    expect(SALON.whatsapp).toBe('5517992064697');
  });
  for (const service of SERVICES) {
    it(`keeps ${service.id} selected in the WhatsApp request`, () => {
      render(<BookingModal open initialService={service.id} onClose={() => {}} />);
      fireEvent.click(screen.getByRole('button', { name: 'Ver resumo' }));
      const link = screen.getByTestId('wa-link');
      const url = new URL(link.getAttribute('href') ?? '');
      expect(url.pathname).toBe('/5517992064697');
      const message = url.searchParams.get('text');
      expect(message).toContain('Olá, SM Studio de Beleza!');
      expect(message).toContain(`• Serviço: ${service.title}`);
      expect(message).toContain('• Data preferida: A combinar');
      expect(message).not.toContain('Profissional');
      expect(CATEGORIES).toContain(service.category);
    });
  }
});
