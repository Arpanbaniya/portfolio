import Link from "next/link";
import { ArrowDown, ArrowDownRight, ArrowUpRight, ArrowRight, Asterisk } from "lucide-react";
import { projects } from "@/data/projects";
import { links } from "@/data/links";
import {
  SectionLabel,
  ProjectActions,
  ExternalLink,
} from "@/components/shared";
import {
  FinanceDiagram,
  EmailDiagram,
  EventDiagram,
} from "@/components/diagrams";
const capabilities = [
  [
    "Building the whole thing",
    "React · Next.js · Node.js · PHP",
    "Interfaces, backend workflows, and the connections between them.",
  ],
  [
    "Working with data",
    "MySQL · MongoDB · Supabase · APIs",
    "From database-backed applications to structured information.",
  ],
  [
    "Making systems smarter",
    "Recommendations · Chatbots · Basic NLP",
    "Exploring useful intelligence in ordinary software.",
  ],
  [
    "Working with others",
    "GitHub · GCP · Vercel · Documentation",
    "Shared code, team decisions, and getting a product online.",
  ],
];
export default function Home() {
  const finance = projects[4],
    email = projects[2],
    smart = projects[1],
    product = projects[3];
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span>
            <i className="status-dot" /> An NCIT graduate. A builder. Still
            figuring things out.
          </span>
          <span>
            KATHMANDU, NEPAL <span className="tiny-sun">✳</span>
          </span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Hi, I’m Arpan.</p>
            <h1 id="hero-title">
              I make things
              <br />
              work.
              <br />
              <span className="hero-outline">Then make</span>
              <br />
              <span className="hero-last">
                them <em>better.</em>
                <svg viewBox="0 0 380 25" aria-hidden="true">
                  <path d="M5 17 Q170 1 368 10 M80 23 Q230 11 375 18" />
                </svg>
              </span>
            </h1>
            <div className="hero-bottom">
              <p>
                Computer Engineering graduate from NCIT.
                <br />
                Building software, exploring automation, and getting curious
                about finance.
              </p>
              <a
                className="round-link"
                href="#work"
                aria-label="Explore selected work"
              >
                <ArrowDown size={25} />
              </a>
            </div>
          </div>
          <div className="notebook-wrap">
            <div className="margin-note">
              a few things on my mind <ArrowDownRight size={32} aria-hidden="true" style={{display:'inline-block',verticalAlign:'middle',marginLeft:12}}/>
            </div>
            <div className="notebook">
              <div className="notebook-meta">
                <span>FIELD NOTES</span>
                <span>No. 01—05</span>
              </div>
              <h2>
                One project leads
                <br />
                to the next.
              </h2>
              <div className="notebook-route">
                {projects.map((p, i) => (
                  <Link
                    className={i === 4 ? "route-step current" : "route-step"}
                    href={`/projects/${p.slug}`}
                    key={p.slug}
                  >
                    <span className="route-number">{p.number}</span>
                    <span>
                      {
                        [
                          "Make it work.",
                          "Make it smarter.",
                          "Make it automatic.",
                          "Build it together.",
                          "Follow the numbers.",
                        ][i]
                      }
                      <small>{p.category}</small>
                    </span>
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
              <div className="notebook-bottom">
                <span className="handwritten">Always a work in progress.</span>
                <Asterisk size={30} />
              </div>
            </div>
            <span className="notebook-edge">
              ENGINEERING / CURIOSITY / REPEAT
            </span>
          </div>
        </div>
        <div className="hero-foot">
          <span>SELECTED WORK & EXPLORATIONS</span>
          <span>
            SCROLL TO LOOK AROUND <ArrowDown size={13} />
          </span>
        </div>
      </section>
      <section className="about-section shell section" id="about">
        <SectionLabel number="01">A little context</SectionLabel>
        <div className="about-layout">
          <h2>
            I learn best with
            <br />
            something <span className="serif">half-built</span>
            <br />
            in front of me.
          </h2>
          <div>
            <p>
              I graduated in Computer Engineering from NCIT in Nepal. I started
              with database-backed web apps, then found myself asking what else
              a system could do: recommend an event, sort an email, or make a
              restaurant order easier.
            </p>
            <p>
              Now I’m exploring financial automation. I’m learning the finance
              as I build the software. There’s a lot to understand, and that’s
              part of what interests me.
            </p>
            <div className="education">
              <span className="mono">THE FOUNDATION</span>
              <strong>Bachelor of Computer Engineering</strong>
              <span>NCIT College · Nepal · Graduated</span>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="work-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <SectionLabel number="02">Selected work</SectionLabel>
              <h2>
                Built. Tested.
                <br />
                <span className="serif">Learned something.</span>
              </h2>
            </div>
            <p>
              A few things I’ve built, and one
              <br />I helped build with a team.
            </p>
          </div>
          <article className="finance-feature">
            <div className="feature-copy">
              <div className="project-meta">
                <span>05 / FINANCE + ENGINEERING</span>
                <span className="building">
                  <i className="status-dot" /> Currently building
                </span>
                <span className="building">
                  <i className="status-dot" /> Live app
                </span>
              </div>
              <h3>
                Following
                <br />
                the <span className="serif">numbers.</span>
              </h3>
              <p className="project-real-title">
                Financial Statement Automation
              </p>
              <p>{finance.description}</p>
              <ul className="tech-list">
                {finance.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ProjectActions project={finance} />
              <div className="feature-note">
                <span>↳</span> My current intersection of code + curiosity.
              </div>
            </div>
            <FinanceDiagram />
          </article>
          <div className="project-pair">
            <article className="small-project">
              <div className="project-art email-art">
                <span className="art-index">
                  03 / AN EXPERIMENT IN AUTOMATION
                </span>
                <EmailDiagram />
              </div>
              <div className="small-project-copy">
                <span className="mono">
                  NLP & AUTOMATION · ACADEMIC PROJECT
                </span>
                <h3>{email.shortTitle}</h3>
                <p>{email.description}</p>
                <ProjectActions project={email} />
              </div>
            </article>
            <article className="small-project">
              <div className="project-art event-art">
                <span className="art-index">02 / BEYOND THE CRUD APP</span>
                <EventDiagram />
              </div>
              <div className="small-project-copy">
                <span className="mono">
                  INTELLIGENT APPLICATIONS · ACADEMIC PROJECT
                </span>
                <h3>
                  What if an event system
                  <br />
                  could help you choose?
                </h3>
                <p>{smart.description}</p>
                <ProjectActions project={smart} />
              </div>
            </article>
          </div>
          <div className="foundation-row">
            <span className="mono">01 / WHERE IT STARTED</span>
            <Link href="/projects/college-event-management">
              <span>College Event Management</span>
              <span className="foundation-caption">PHP / MySQL → MERN</span>
              <ArrowUpRight />
            </Link>
          </div>
          <Link className="text-link" href="/projects" style={{marginTop:20}}>Browse all project notes <ArrowRight size={17}/></Link>
        </div>
      </section>
      <section className="experience-section shell section" id="experience">
        <SectionLabel number="03">Built together</SectionLabel>
        <div className="experience-grid">
          <div className="receipt">
            <div className="receipt-top">
              <span>DIGIPAILA</span>
              <Asterisk size={28} />
            </div>
            <h3>
              Good food.
              <br />
              Less friction.
            </h3>
            <div className="receipt-rule" />
            <div className="receipt-line">
              <span>01</span>
              <span>Scan the QR</span>
              <ArrowDown size={16} />
            </div>
            <div className="receipt-line">
              <span>02</span>
              <span>Explore the menu</span>
              <ArrowDown size={16} />
            </div>
            <div className="receipt-line">
              <span>03</span>
              <span>Place an order</span>
              <ArrowRight size={16} />
            </div>
            <div className="receipt-rule" />
            <div className="receipt-total">
              <span>MADE BY A TEAM</span>
              <span>✓</span>
            </div>
            <p>A sketch of the product journey.</p>
          </div>
          <div className="experience-copy">
            <span className="mono">TEAM PRODUCT / FULL-STACK CONTRIBUTOR</span>
            <h2>
              Code that made it
              <br />
              to the <span className="serif">table.</span>
            </h2>
            <p>
              I was part of the team behind <strong>DigiPaila</strong>, a
              restaurant QR-menu and real-time ordering platform.
            </p>
            <p>
              Working on a shared product brought a different set of lessons:
              collaborating across the stack, making decisions together, and
              getting a complete application deployed.
            </p>
            <ul className="tech-list">
              {product.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <ProjectActions project={product} />
          </div>
        </div>
      </section>
      <section id="journey" className="journey-section section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <SectionLabel number="04">The connecting thread</SectionLabel>
              <h2>
                No master plan.
                <br />
                <span className="serif">Just better questions.</span>
              </h2>
            </div>
            <p>
              Each project left me with
              <br />
              something new to try.
            </p>
          </div>
          <div className="journey">
            {projects.map((p, i) => (
              <Link
                href={`/projects/${p.slug}`}
                className="journey-item"
                key={p.slug}
              >
                <span className="journey-number">{p.number}</span>
                <div>
                  <h3>{p.category}</h3>
                  <p>
                    {
                      [
                        "How does a whole application fit together?",
                        "Can it help people find something relevant?",
                        "Could the repetitive part happen automatically?",
                        "What changes when you build with a team?",
                        "Can engineering help me understand finance?",
                      ][i]
                    }
                  </p>
                </div>
                <span className="journey-type">{p.status}</span>
                <ArrowUpRight size={21} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="capability-section section shell">
        <SectionLabel number="05">Things in my toolkit</SectionLabel>
        <div className="capability-heading">
          <h2>
            Tools are useful.
            <br />
            <span className="serif">Knowing why is better.</span>
          </h2>
          <p>
            Picked up through projects,
            <br />
            coursework, and working with others.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([title, stack, description], i) => (
            <div className="capability" key={title}>
              <span className="mono">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="capability-stack">{stack}</span>
            </div>
          ))}
        </div>
        <div className="foundation-note">
          <span className="mono">UNDERNEATH IT ALL</span>
          <span>C · C++ · Data Structures · Algorithms · Problem solving</span>
        </div>
      </section>
      <section className="now-section shell">
        <div className="now-label">
          <Asterisk size={48} />
          <span className="mono">
            ON MY DESK
            <br />
            RIGHT NOW
          </span>
        </div>
        <div>
          <h2>
            Learning the story
            <br />
            <span className="serif">behind a financial statement.</span>
          </h2>
          <p>
            I want to understand financial systems well enough to build useful
            tools around them. My automation project is where I’m putting that
            curiosity to work, one document and one question at a time.
          </p>
          <Link
            className="text-link"
            href="/projects/financial-statement-automation"
          >
            See what I’m working on <ArrowRight size={17} />
          </Link>
        </div>
        <span className="now-note">
          still learning.
          <br />
          that’s the point.
        </span>
      </section>
      <section id="contact" className="contact-section shell">
        <div className="contact-top">
          <SectionLabel number="06">Leave a note</SectionLabel>
          <span className="mono">KATHMANDU / LALITPUR, NEPAL</span>
        </div>
        <h2>
          Something on
          <br />
          your{" "}
          <a href={links.email}>
            <span className="serif">mind?</span>
            <ArrowUpRight />
          </a>
        </h2>
        <div className="contact-bottom">
          <p>
            A project, a question, or a good idea.
            <br />
            I’d be glad to hear about it.
          </p>
          <a className="email-link" href={links.email}>
            arpanbaniya1@gmail.com <ArrowUpRight size={22} />
          </a>
          <ExternalLink href={links.github}>Find me on GitHub</ExternalLink>
        </div>
      </section>
    </main>
  );
}
