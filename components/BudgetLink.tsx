import { ArrowUpRight } from 'lucide-react';
import { budgetFormUrl } from '@/data/proposals';
import { ui, type Locale } from '@/lib/i18n';

export function BudgetLink({ locale = 'es' }: { locale?: Locale }) {
  return <a className="budget-link" href={budgetFormUrl} target="_blank" rel="noopener noreferrer">
    {ui[locale].budget} <ArrowUpRight size={18} aria-hidden="true" />
  </a>;
}
