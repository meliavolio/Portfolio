import { ProposalsPage } from '@/components/ProposalsPage';
import { metadataFor } from '@/lib/metadata';

export const metadata = metadataFor('es', 'proposals');
export default function Proposals() { return <ProposalsPage locale="es"/>; }
