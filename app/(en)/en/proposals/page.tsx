import { ProposalsPage } from '@/components/ProposalsPage';
import { metadataFor } from '@/lib/metadata';

export const metadata = metadataFor('en', 'proposals');
export default function Proposals() { return <ProposalsPage locale="en"/>; }
