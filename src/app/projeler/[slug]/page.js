import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-dvh bg-background px-6 pt-24 pb-12 text-foreground md:px-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span aria-hidden="true">←</span>
          <span>Projelere Dön</span>
        </Link>

        {/* Project Header */}
        <header className="border-b border-border pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest uppercase">
            <span className="text-accent">/{project.index}</span>
            <span className="text-border">•</span>
            <span className="text-muted">{project.category}</span>
            <span className="text-border">•</span>
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-foreground">
              {project.badge}
            </span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground uppercase md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted md:text-2xl">
            {project.subtitle}
          </p>
        </header>

        {/* Meta Info Grid */}
        {(project.role || project.year || project.stack?.length > 0) && (
          <section className="grid gap-6 border-b border-border py-8 sm:grid-cols-3">
            {project.role && (
              <div>
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  Rol
                </p>
                <p className="mt-2 text-sm font-medium text-foreground md:text-base">
                  {project.role}
                </p>
              </div>
            )}
            {project.year && (
              <div>
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  Yıl
                </p>
                <p className="mt-2 font-mono text-sm font-medium text-foreground md:text-base">
                  {project.year}
                </p>
              </div>
            )}
            {project.stack?.length > 0 && (
              <div>
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  Teknolojiler
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Project Gallery or Single Visual */}
        {project.gallery?.length > 0 ? (
          <ProjectGallery images={project.gallery} title={project.title} />
        ) : (
          project.image && (
            <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={project.image}
                alt={`${project.title} arayüz görseli`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          )
        )}

        {/* Details & Highlights */}
        <section className="grid gap-10 py-12 md:grid-cols-12">
          <div
            className={
              project.highlights?.length > 0
                ? "md:col-span-7"
                : "md:col-span-12"
            }
          >
            <h2 className="mb-4 font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Proje Detayı
            </h2>
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
              {project.details}
            </p>
          </div>

          {project.highlights?.length > 0 && (
            <div className="rounded-2xl border border-border bg-surface p-6 md:col-span-5">
              <h2 className="mb-4 font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Öne Çıkanlar
              </h2>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Next Project Footer */}
        <footer className="border-t border-border pt-10">
          <p className="mb-3 font-mono text-xs tracking-widest text-muted uppercase">
            Sıradaki Proje
          </p>
          <Link
            href={`/projeler/${nextProject.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:p-8"
          >
            <div>
              <span className="font-mono text-xs text-accent">
                /{nextProject.index}
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent md:text-4xl">
                {nextProject.title}
              </h3>
            </div>
            <span
              aria-hidden="true"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border font-mono text-xl transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
            >
              →
            </span>
          </Link>
        </footer>
      </div>
    </main>
  );
}
