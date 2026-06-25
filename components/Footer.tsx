export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
        <p className="text-sm tracking-[0.4em] text-white">BERGE</p>
        <p className="text-xs text-mute">
          © {new Date().getFullYear()} Bjørn Magnus Berge. Alle rettigheter forbeholdt.
        </p>
        <a
          href="#top"
          className="text-xs text-mute transition-colors hover:text-white"
        >
          Til toppen ↑
        </a>
      </div>
    </footer>
  );
}
