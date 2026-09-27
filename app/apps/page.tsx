import AppsShowcase from "@/components/apps/AppsShowcase";
import { apps } from "@/lib/apps";

export default function AppsPage() {
  return <AppsShowcase apps={apps} />;
}
