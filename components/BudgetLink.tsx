import { ArrowUpRight } from 'lucide-react';
import { budgetFormUrl } from '@/data/proposals';

export function BudgetLink() {
  return <a className="budget-link" href={budgetFormUrl} target="_blank" rel="noopener noreferrer">
    Solicitar presupuesto <ArrowUpRight size={18} aria-hidden="true" />
  </a>;
}
