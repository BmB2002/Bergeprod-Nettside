import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import AppDetail from "@/components/apps/AppDetail";
import BergeShell from "@/components/apps/BergeShell";
import MinBelonningLanding from "@/components/apps/minbelonning/Landing";
import { apps, getApp, type App } from "@/lib/apps";

// Apps with their own landing page, outside the BERGE frame
const landings: Record<string, React.ComponentType<{ app: App }>> = {
  minbelonning: MinBelonningLanding,
};

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const app = getApp((await params).slug);
  return app ? { title: `${app.name} — BERGE`, description: app.short } : {};
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  if (app.projectUrl) redirect(app.projectUrl);
  const Landing = landings[app.slug];
  if (Landing) return <Landing app={app} />;
  return (
    <BergeShell>
      <AppDetail app={app} />
    </BergeShell>
  );
}
