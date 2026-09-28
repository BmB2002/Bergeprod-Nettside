import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { apps, getApp } from "@/lib/apps";

export function generateStaticParams() {
  // Every app, so English visitors to an app without an English version still get the Norwegian page
  return apps.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  return { title: app.privacyEn ? `Privacy — ${app.nameEn ?? app.name}` : `Personvern — ${app.name}` };
}

export default async function PrivacyEnPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  return <LegalPage app={app} kind="privacy" lang="en" />;
}
