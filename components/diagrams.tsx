import {
  ArrowDown,
  ArrowRight,
  FileText,
  Mail,
  MessageSquare,
  Layers,
  ScanLine,
} from "lucide-react";
export function FinanceDiagram() {
  return (
    <div
      className="finance-diagram"
      aria-label="Conceptual workflow from documents to structured financial statements"
    >
      <div className="diagram-caption">
        <span>WORKING MODEL / 05</span>
        <span>INPUT → UNDERSTANDING</span>
      </div>
      <div className="document-stack">
        <div className="document-back" />
        <div className="document-sheet">
          <FileText size={26} />
          <span>Financial records</span>
          <div className="document-lines">
            <i />
            <i />
            <i />
          </div>
          <div className="file-formats">
            PDF <span>Excel</span> CSV
          </div>
        </div>
        <div className="annotation">start with the messy stuff</div>
      </div>
      <div className="flow-connector">
        <span />
        <ArrowDown size={20} />
      </div>
      <div className="normalize">
        <ScanLine size={19} />
        <span>extract · normalize · structure</span>
      </div>
      <div className="flow-connector short">
        <span />
        <ArrowDown size={20} />
      </div>
      <div className="statement">
        <div className="statement-title">
          Structured statements <span>↗</span>
        </div>
        <div className="statement-row">
          <span>Income statement</span>
          <i />
        </div>
        <div className="statement-row">
          <span>Balance sheet</span>
          <i />
        </div>
        <div className="statement-row">
          <span>Cash flow</span>
          <i />
        </div>
      </div>
      <span className="concept-caption">
        Concept sketch — a direction I’m exploring
      </span>
    </div>
  );
}
export function EmailDiagram() {
  return (
    <div
      className="email-diagram"
      aria-label="Email text goes through classification and into sorted groups"
    >
      <div className="mail-pile">
        <Mail />
        <Mail />
        <Mail />
      </div>
      <ArrowRight className="diagram-arrow" />
      <div className="classifier">
        Aa<span>NLP</span>
      </div>
      <ArrowRight className="diagram-arrow" />
      <div className="sorted-mail">
        <span />
        <span />
        <span />
      </div>
      <div className="small-annotation">a place for every message</div>
    </div>
  );
}
export function EventDiagram() {
  return (
    <div
      className="event-diagram"
      aria-label="Event discovery connected to recommendations, chatbot, and feedback"
    >
      <div className="event-center">
        <Layers size={24} />
        <span>Discover</span>
      </div>
      <div className="event-orbit orbit-one">Recommendations</div>
      <div className="event-orbit orbit-two">
        <MessageSquare size={14} /> Chatbot
      </div>
      <div className="event-orbit orbit-three">Ratings & reviews</div>
      <svg viewBox="0 0 450 230" preserveAspectRatio="none" aria-hidden="true">
        <path d="M225 115 L100 50 M225 115 L350 90 M225 115 L200 200" />
      </svg>
    </div>
  );
}
