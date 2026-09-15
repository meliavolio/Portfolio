'use client';

import { cn } from '@/lib/utils';

export interface DisplayCardData {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  year: string;
}

interface DisplayCardsProps {
  cards: DisplayCardData[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

function DisplayCard({ card, index, active, onSelect }: {
  card: DisplayCardData;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return <button
    type="button"
    className={cn('display-card', `display-card-${index + 1}`, active && 'is-active')}
    aria-pressed={active}
    aria-controls={`work-panel-${card.id}`}
    onClick={onSelect}
  >
    <span className="display-card-top"><span>{card.number} / {card.category}</span><span className="display-card-arrow" aria-hidden="true">↗</span></span>
    <span className="display-card-title">{card.title}</span>
    <span className="display-card-description">{card.description}</span>
    <span className="display-card-bottom"><span>AÑO / {card.year}</span><span className="display-card-open">Ver detalle <span aria-hidden="true">→</span></span></span>
  </button>;
}

export default function DisplayCards({ cards, activeIndex, onSelect }: DisplayCardsProps) {
  return <div className="display-cards" aria-label="Proyectos seleccionados">
    {cards.map((card, index) => <DisplayCard key={card.id} card={card} index={index} active={activeIndex === index} onSelect={() => onSelect(index)} />)}
  </div>;
}
