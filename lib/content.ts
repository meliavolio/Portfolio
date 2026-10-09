import { portfolio } from '@/data/portfolio';
import { portfolioEn } from '@/data/portfolio-en';
import { proposals } from '@/data/proposals';
import { proposalsEn } from '@/data/proposals-en';
import type { Locale } from './i18n';

export function getPortfolio(locale: Locale) { return locale === 'en' ? portfolioEn : portfolio; }
export function getProposals(locale: Locale) { return locale === 'en' ? proposalsEn : proposals; }
