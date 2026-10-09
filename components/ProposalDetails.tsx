import { proposals } from '@/data/proposals';
import { getProposals } from '@/lib/content';
import { ui, type Locale } from '@/lib/i18n';
import { BudgetLink } from '@/components/BudgetLink';

type Workshop = (typeof proposals.workshops)[number];
type Communication = (typeof proposals.communication)[number];
const emphasis = /(Nivel inicial-intermedio|manual de voz y tono|pautas y ejemplos|temas y enfoques|selección de temas|presentación de la información|forma de contactar a los medios|ética, privacidad y revisión de resultados|herramientas, creamos instrucciones|ideas, experiencias y destinatarios|Presencial o virtual|Beginner to intermediate level|voice and tone guide|guidelines and examples|topics and angles|selecting topics|presenting information|approaching the media|ethics, privacy and reviewing outputs|In person or online|\d+(?:\.\d+)?(?:-hour| hours? y media| hours?| sessions?| clases?| clase| hora y media))/g;
function Emphasis({ text }: { text: string }) {
  return <>{text.split(emphasis).map((part,index) => index % 2 ? <strong key={index}>{part}</strong> : part)}</>;
}
function Formats({ formats, locale }: { formats: string[]; locale: Locale }) {
  const options = formats.filter(format => format.includes(':'));
  return <section className="detail-block"><h4>{ui[locale].formats}</h4>
    {options.length ? <><div className="detail-format-grid">{options.map(format => {
      const split = format.indexOf(':');
      return <div className="detail-format" key={format}><h5>{format.slice(0,split)}</h5><p><Emphasis text={format.slice(split+1).trim()}/></p></div>;
    })}</div>{formats.filter(format => !format.includes(':')).map(format => <p className="detail-modality" key={format}><Emphasis text={format}/></p>)}</> : formats.map(format => <p key={format}><Emphasis text={format}/></p>)}
  </section>;
}
export function ProposalDetails({ description, workshop, communication, locale = 'es' }: { description: string; workshop: Workshop | null; communication: Communication | null; locale?: Locale }) {
  const text = ui[locale];
  const topicTitles = text.topicTitles;
  const content = getProposals(locale);
  const additionalDescription = description.slice(description.indexOf('.') + 1).trim();
  return <>
    {additionalDescription && <section className="detail-block">{communication && <h4>{text.workOn}</h4>}<p><Emphasis text={additionalDescription}/></p></section>}
    {workshop && <>
      <section className="detail-block"><h4>{text.audience}</h4><p><Emphasis text={workshop.audience}/></p></section>
      <section className="detail-block"><h4>{workshop.topicsLabel}</h4>
        {workshop.steps.length ? <ol className="detail-steps">{workshop.steps.map(step => <li key={step.title}><strong className="detail-step-title">{step.title}</strong><p>{step.text}</p></li>)}</ol> : workshop.formats.length > 1 ? <ol className="detail-steps">{workshop.topics.map(topic => <li key={topic}><strong className="detail-step-title">{topicTitles.find(title => topic.startsWith(title))}</strong><p>{topic.slice((topicTitles.find(title => topic.startsWith(title)) ?? '').length).trim()}</p></li>)}</ol> : <ul className="detail-topics">{workshop.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>}
        {workshop.care && <p className="detail-care"><Emphasis text={workshop.care}/></p>}
      </section>
      <section className="detail-block detail-result"><h4>{text.outcome}</h4><p>{workshop.outcome}</p></section>
      <Formats formats={workshop.formats} locale={locale}/>
    </>}
    {communication && <>
      <section className="detail-block detail-result"><h4>{text.result}</h4><p>{communication.outcome}</p></section>
      {communication.note && <p className="communication-note">{communication.note}</p>}
      <section className="detail-block"><h4>{text.mode}</h4><p><strong>{text.modePrefix}</strong>{content.communicationMode.slice(text.modePrefix.length)}</p></section>
    </>}
    <div className="detail-budget"><BudgetLink locale={locale}/></div>
  </>;
}
