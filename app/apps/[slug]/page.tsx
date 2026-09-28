import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AppDetail from "@/components/apps/AppDetail";
import { apps, getApp } from "@/lib/apps";

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
  return <AppDetail app={app} />;
}
