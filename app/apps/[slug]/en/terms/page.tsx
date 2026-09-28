import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { apps, getApp } from "@/lib/apps";

export function generateStaticParams() {
  return apps.filter((a) => a.termsEn).map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const app = getApp((await params).slug);
  return { title: app ? `Terms — ${app.nameEn ?? app.name}` : "Terms" };
}

export default async function TermsEnPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug);
  if (!app?.termsEn) notFound();
  return <LegalPage app={app} kind="terms" lang="en" />;
}
