import { proposals } from '@/data/proposals';
import { BudgetLink } from '@/components/BudgetLink';

type Workshop = (typeof proposals.workshops)[number];
type Communication = (typeof proposals.communication)[number];
const emphasis = /(Nivel inicial-intermedio|manual de voz y tono|pautas y ejemplos|temas y enfoques|selección de temas|presentación de la información|forma de contactar a los medios|ética, privacidad y revisión de resultados|herramientas, creamos instrucciones|ideas, experiencias y destinatarios|Presencial o virtual|\d+(?: horas? y media| horas?| clases?| clase| hora y media))/g;
function Emphasis({ text }: { text: string }) {
  return <>{text.split(emphasis).map((part,index) => index % 2 ? <strong key={index}>{part}</strong> : part)}</>;
}
const topicTitles = ['Definir el mensaje', 'Encontrar historias, experiencias y detalles', 'Usar IA', 'Tomar decisiones'];
function Formats({ formats }: { formats: string[] }) {
  const options = formats.filter(format => format.includes(':'));
  return <section className="detail-block"><h4>Formatos</h4>
    {options.length ? <><div className="detail-format-grid">{options.map(format => {
      const split = format.indexOf(':');
      return <div className="detail-format" key={format}><h5>{format.slice(0,split)}</h5><p><Emphasis text={format.slice(split+1).trim()}/></p></div>;
    })}</div>{formats.filter(format => !format.includes(':')).map(format => <p className="detail-modality" key={format}><Emphasis text={format}/></p>)}</> : formats.map(format => <p key={format}><Emphasis text={format}/></p>)}
  </section>;
}
export function ProposalDetails({ description, workshop, communication }: { description: string; workshop: Workshop | null; communication: Communication | null }) {
  const additionalDescription = description.slice(description.indexOf('.') + 1).trim();
  return <>
    {additionalDescription && <section className="detail-block">{communication && <h4>Qué trabajamos</h4>}<p><Emphasis text={additionalDescription}/></p></section>}
    {workshop && <>
      <section className="detail-block"><h4>Para quién</h4><p><Emphasis text={workshop.audience}/></p></section>
      <section className="detail-block"><h4>{workshop.topicsLabel}</h4>
        {workshop.steps.length ? <ol className="detail-steps">{workshop.steps.map(step => <li key={step.title}><strong className="detail-step-title">{step.title}</strong><p>{step.text}</p></li>)}</ol> : workshop.formats.length > 1 ? <ol className="detail-steps">{workshop.topics.map(topic => <li key={topic}><strong className="detail-step-title">{topicTitles.find(title => topic.startsWith(title))}</strong><p>{topic.slice((topicTitles.find(title => topic.startsWith(title)) ?? '').length).trim()}</p></li>)}</ol> : <ul className="detail-topics">{workshop.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>}
        {workshop.care && <p className="detail-care"><Emphasis text={workshop.care}/></p>}
      </section>
      <section className="detail-block detail-result"><h4>Qué te llevás</h4><p>{workshop.outcome}</p></section>
      <Formats formats={workshop.formats}/>
    </>}
    {communication && <>
      <section className="detail-block detail-result"><h4>Resultado</h4><p>{communication.outcome}</p></section>
      {communication.note && <p className="communication-note">{communication.note}</p>}
      <section className="detail-block"><h4>Modalidad</h4><p><strong>Consultoría o formación</strong>{proposals.communicationMode.slice('Consultoría o formación'.length)}</p></section>
    </>}
    <div className="detail-budget"><BudgetLink/></div>
  </>;
}
