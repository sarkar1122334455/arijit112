import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { projects } from '@/data/projects';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Arijit Sarkar`,
    description: project.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  // Format index as '01', '02', etc.
  const formattedIndex = (projectIndex + 1).toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-bg-primary/90 backdrop-blur border-b border-border">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent transition-colors"
        >
          <span>←</span> Back to Portfolio
        </Link>
        <span className="text-sm font-heading font-medium tracking-wider hidden sm:block">
          {project.title}
        </span>
      </header>

      <main className="pb-32">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32 max-w-5xl mx-auto relative">
          <div className="text-[12rem] leading-none font-mono font-bold text-bg-elevated select-none absolute top-0 left-6 -z-10 opacity-50">
            {formattedIndex}
          </div>
          
          <div className="space-y-8 relative z-10 pt-16 md:pt-24">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-text-primary">
              {project.title}
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-bg-tertiary border border-border rounded-full text-sm font-mono text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.publication && (
              <div className="pt-8 flex flex-col gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-accent">Publication</span>
                <div className="flex flex-wrap items-center gap-4 text-sm font-sans text-text-secondary">
                  <span className="bg-bg-tertiary px-3 py-1 rounded-md border border-border">
                    {project.publication.journal}
                  </span>
                  {project.publication.doi && (
                    <a 
                      href={`https://doi.org/${project.publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors underline decoration-border-primary underline-offset-4"
                    >
                      DOI: {project.publication.doi}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="h-px w-full max-w-5xl mx-auto bg-border-primary my-12" />

        {/* Case Study Body */}
        {caseStudy && (
          <article className="px-6 max-w-3xl mx-auto space-y-24">
            
            {/* 01 - The Problem */}
            {caseStudy.problem && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">01</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">The Problem</h2>
                </div>
                <p className="font-sans text-lg text-text-secondary leading-relaxed whitespace-pre-wrap">
                  {caseStudy.problem}
                </p>
              </section>
            )}

            {/* 02 - Why It Matters */}
            {caseStudy.whyItMatters && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">02</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">Why It Matters</h2>
                </div>
                <p className="font-sans text-lg text-text-secondary leading-relaxed whitespace-pre-wrap">
                  {caseStudy.whyItMatters}
                </p>
              </section>
            )}

            {/* 03 - My Approach */}
            {caseStudy.approach && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">03</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">My Approach</h2>
                </div>
                <p className="font-sans text-lg text-text-secondary leading-relaxed whitespace-pre-wrap">
                  {caseStudy.approach}
                </p>
              </section>
            )}

            {/* 04 - System Architecture */}
            {caseStudy.architecture && caseStudy.architecture.length > 0 && (
              <section className="space-y-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">04</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">System Architecture</h2>
                </div>
                <div className="flex flex-col items-center py-8">
                  {caseStudy.architecture.map((item, i) => (
                    <div key={i} className="flex flex-col items-center w-full max-w-md">
                      <div className="w-full bg-bg-secondary border border-border p-6 rounded-lg shadow-sm text-center">
                        <span className="font-sans text-lg text-text-primary">{item}</span>
                      </div>
                      {i !== caseStudy.architecture.length - 1 && (
                        <div className="h-12 w-px bg-border-primary relative flex justify-center">
                          <div className="absolute bottom-0 w-2 h-2 border-b border-r border-border transform rotate-45 translate-y-1"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 05 - Technology */}
            {caseStudy.technologyDetail && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">05</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">Technology</h2>
                </div>
                <p className="font-sans text-lg text-text-secondary leading-relaxed whitespace-pre-wrap">
                  {caseStudy.technologyDetail}
                </p>
              </section>
            )}

            {/* 06 - Challenges */}
            {caseStudy.challenges && caseStudy.challenges.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">06</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">Challenges</h2>
                </div>
                <ul className="space-y-4 font-sans text-lg text-text-secondary">
                  {caseStudy.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-accent mt-1.5">•</span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 07 - Solution */}
            {caseStudy.solution && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">07</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">Solution</h2>
                </div>
                <p className="font-sans text-lg text-text-secondary leading-relaxed whitespace-pre-wrap">
                  {caseStudy.solution}
                </p>
              </section>
            )}

            {/* 08 - Results */}
            {caseStudy.results && caseStudy.results.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">08</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">Results</h2>
                </div>
                <ul className="space-y-4 font-sans text-lg text-text-secondary">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-accent mt-1.5">→</span>
                      <span className="leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 09 - What I Learned */}
            {caseStudy.learned && caseStudy.learned.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">09</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">What I Learned</h2>
                </div>
                <ul className="space-y-4 font-sans text-lg text-text-secondary list-none">
                  {caseStudy.learned.map((learned, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-accent font-mono text-sm mt-1">{String(i + 1).padStart(2, '0')}</span>
                      <span className="leading-relaxed">{learned}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 10 - Future Improvements */}
            {caseStudy.futureImprovements && caseStudy.futureImprovements.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">10</span>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary">Future Improvements</h2>
                </div>
                <ul className="space-y-4 font-sans text-lg text-text-secondary">
                  {caseStudy.futureImprovements.map((improvement, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-accent mt-1.5">+</span>
                      <span className="leading-relaxed">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </article>
        )}

        {/* Bottom Navigation */}
        <div className="mt-32 pt-12 border-t border-border max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex-1 flex justify-start w-full">
              {prevProject && (
                <Link 
                  href={`/case-study/${prevProject.slug}`}
                  className="group flex flex-col gap-2"
                >
                  <span className="text-sm font-mono text-text-secondary">← Previous Project</span>
                  <span className="text-xl font-heading text-text-primary group-hover:text-accent transition-colors">
                    {prevProject.title}
                  </span>
                </Link>
              )}
            </div>

            <div className="flex-shrink-0">
              <Link 
                href="/"
                className="px-6 py-3 rounded-full border border-border bg-bg-tertiary hover:bg-bg-secondary text-text-primary font-mono text-sm transition-colors uppercase tracking-widest inline-flex items-center gap-2"
              >
                All Work →
              </Link>
            </div>

            <div className="flex-1 flex justify-end w-full text-right">
              {nextProject && (
                <Link 
                  href={`/case-study/${nextProject.slug}`}
                  className="group flex flex-col gap-2 items-end"
                >
                  <span className="text-sm font-mono text-text-secondary">Next Project →</span>
                  <span className="text-xl font-heading text-text-primary group-hover:text-accent transition-colors">
                    {nextProject.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
