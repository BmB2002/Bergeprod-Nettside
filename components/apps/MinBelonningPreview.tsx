const green = "#2fc58a";
const ink = "#12332a";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-[1.6em] pt-[0.9em] text-[0.8em] font-semibold" style={{ color: ink }}>
      <span>09:41</span>
      <span className="flex items-center gap-[0.35em]">
        <span className="inline-block h-[0.6em] w-[1em] rounded-[0.15em] bg-current opacity-80" />
        <span className="inline-block h-[0.7em] w-[1.5em] rounded-[0.2em] border border-current" />
      </span>
    </div>
  );
}

function Coin({ size = "1em" }: { size?: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-black"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(145deg,#ffd75e,#f2a900)",
        boxShadow: "inset 0 -0.08em 0 rgba(0,0,0,0.18)",
        color: "#8a5a00",
        fontSize: `calc(${size} * 0.5)`,
      }}
    >
      kr
    </span>
  );
}

function Chore({ emoji, title, amount, done }: { emoji: string; title: string; amount: number; done?: boolean }) {
  return (
    <div className="flex items-center gap-[0.7em] rounded-[0.9em] bg-white px-[0.8em] py-[0.7em] shadow-[0_0.1em_0.4em_rgba(18,51,42,0.08)]">
      <span
        className="flex h-[1.5em] w-[1.5em] shrink-0 items-center justify-center rounded-full text-[0.85em] font-bold text-white"
        style={done ? { background: green } : { border: "0.12em solid #cfe5da" }}
      >
        {done ? "✓" : ""}
      </span>
      <span className="text-[1.05em]">{emoji}</span>
      <span className={`flex-1 text-[0.85em] font-semibold ${done ? "line-through opacity-40" : ""}`} style={{ color: ink }}>
        {title}
      </span>
      <span
        className="rounded-full px-[0.6em] py-[0.2em] text-[0.75em] font-bold"
        style={{ background: done ? "#e3f6ed" : "#fff4d6", color: done ? "#1d8a5e" : "#9a6500" }}
      >
        {amount} kr
      </span>
    </div>
  );
}

export function ChildScreen() {
  return (
    <div className="flex h-full flex-col" style={{ background: "#f3fbf6" }}>
      <StatusBar />
      <div className="flex items-center justify-between px-[1.4em] pt-[2em]">
        <div>
          <p className="text-[0.75em] font-semibold uppercase tracking-[0.12em]" style={{ color: green }}>God morgen</p>
          <p className="text-[1.7em] font-black leading-tight" style={{ color: ink }}>Hei, Emma! 👋</p>
        </div>
        <span className="flex h-[2.4em] w-[2.4em] items-center justify-center rounded-full bg-[#ffe7b3] text-[1.1em]">🦊</span>
      </div>

      <div
        className="mx-[1.4em] mt-[1.2em] rounded-[1.2em] p-[1.1em] text-white"
        style={{ background: "linear-gradient(135deg,#34d399,#1fa872)" }}
      >
        <p className="text-[0.75em] font-semibold opacity-85">Du har tjent</p>
        <div className="mt-[0.2em] flex items-center justify-between">
          <p className="text-[2.3em] font-black leading-none">240 kr</p>
          <Coin size="2.4em" />
        </div>
        <p className="mt-[0.6em] inline-block rounded-full bg-white/20 px-[0.6em] py-[0.15em] text-[0.7em] font-semibold">+55 kr denne uken</p>
      </div>

      <div className="mt-[1.3em] flex items-baseline justify-between px-[1.4em]">
        <p className="text-[1em] font-extrabold" style={{ color: ink }}>Dagens oppgaver</p>
        <p className="text-[0.75em] font-semibold opacity-50" style={{ color: ink }}>2 av 5</p>
      </div>
      <div className="mt-[0.6em] flex flex-col gap-[0.5em] px-[1.4em]">
        <Chore emoji="🛏️" title="Re opp sengen" amount={10} done />
        <Chore emoji="🧸" title="Rydde rommet" amount={30} done />
        <Chore emoji="🍽️" title="Tømme oppvasken" amount={20} />
        <Chore emoji="🐕" title="Gå tur med Luna" amount={25} />
        <Chore emoji="🗑️" title="Bære ut søppel" amount={15} />
      </div>

      <div className="mt-auto flex justify-around border-t border-[#dcefe5] bg-white px-[1em] pb-[1.6em] pt-[0.7em] text-[0.65em] font-semibold">
        {[
          ["🏠", "Hjem", true],
          ["✅", "Oppgaver", false],
          ["👛", "Lommebok", false],
        ].map(([icon, label, active]) => (
          <span key={label as string} className="flex flex-col items-center gap-[0.2em]" style={{ color: active ? green : "#8aa89b" }}>
            <span className="text-[1.6em]">{icon}</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ParentScreen() {
  return (
    <div className="flex h-full flex-col" style={{ background: "#f3fbf6" }}>
      <StatusBar />
      <div className="px-[1.4em] pt-[2em]">
        <p className="text-[0.75em] font-semibold uppercase tracking-[0.12em]" style={{ color: green }}>Forelder</p>
        <p className="text-[1.7em] font-black leading-tight" style={{ color: ink }}>Familien</p>
      </div>

      <div className="mt-[1em] grid grid-cols-2 gap-[0.6em] px-[1.4em]">
        {[
          ["🦊", "Emma", "240 kr", "#ffe7b3"],
          ["🐻", "Noah", "115 kr", "#dbeafe"],
        ].map(([emoji, name, amount, bg]) => (
          <div key={name} className="rounded-[1em] bg-white p-[0.9em] shadow-[0_0.1em_0.4em_rgba(18,51,42,0.08)]">
            <span className="flex h-[2em] w-[2em] items-center justify-center rounded-full text-[1em]" style={{ background: bg }}>{emoji}</span>
            <p className="mt-[0.5em] text-[0.8em] font-semibold opacity-60" style={{ color: ink }}>{name}</p>
            <p className="text-[1.3em] font-black" style={{ color: ink }}>{amount}</p>
          </div>
        ))}
      </div>

      <p className="mt-[1.3em] px-[1.4em] text-[1em] font-extrabold" style={{ color: ink }}>Til godkjenning</p>
      <div className="mx-[1.4em] mt-[0.6em] flex items-center gap-[0.7em] rounded-[0.9em] bg-white px-[0.8em] py-[0.7em] shadow-[0_0.1em_0.4em_rgba(18,51,42,0.08)]">
        <span className="text-[1.05em]">🧹</span>
        <div className="flex-1">
          <p className="text-[0.85em] font-semibold" style={{ color: ink }}>Støvsuge stua</p>
          <p className="text-[0.7em] opacity-50" style={{ color: ink }}>Noah · 40 kr</p>
        </div>
        <span className="rounded-full px-[0.8em] py-[0.35em] text-[0.72em] font-bold text-white" style={{ background: green }}>Godkjenn</span>
      </div>

      <p className="mt-[1.3em] px-[1.4em] text-[1em] font-extrabold" style={{ color: ink }}>Ny oppgave</p>
      <div className="mx-[1.4em] mt-[0.6em] rounded-[1em] bg-white p-[0.9em] shadow-[0_0.1em_0.4em_rgba(18,51,42,0.08)]">
        <div className="rounded-[0.6em] border border-[#dcefe5] px-[0.7em] py-[0.55em] text-[0.8em] font-semibold" style={{ color: ink }}>
          🚗 Vaske bilen
        </div>
        <p className="mt-[0.8em] text-[0.7em] font-semibold opacity-50" style={{ color: ink }}>Beløp</p>
        <div className="mt-[0.35em] flex gap-[0.4em]">
          {[20, 50, 100].map((v) => (
            <span
              key={v}
              className="flex-1 rounded-[0.6em] py-[0.45em] text-center text-[0.78em] font-bold"
              style={v === 50 ? { background: green, color: "white" } : { background: "#eef7f2", color: ink }}
            >
              {v} kr
            </span>
          ))}
        </div>
        <div className="mt-[0.9em] flex items-center justify-center gap-[0.4em] rounded-full py-[0.6em] text-[0.8em] font-bold text-white" style={{ background: ink }}>
          + Legg til oppgave
        </div>
      </div>

      <div
        className="mx-[1.4em] mt-[1em] flex items-center justify-between rounded-[1em] px-[1em] py-[0.8em] text-white"
        style={{ background: "linear-gradient(135deg,#34d399,#1fa872)" }}
      >
        <div>
          <p className="text-[0.7em] font-semibold opacity-85">Denne uken</p>
          <p className="text-[1.1em] font-black">9 oppgaver · 175 kr</p>
        </div>
        <Coin size="2em" />
      </div>
    </div>
  );
}

export function MinBelonningIcon() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ background: "linear-gradient(145deg,#4be3a4,#1fa872)" }}
    >
      <div className="@container flex h-[58%] w-[58%] items-center justify-center">
        <span
          className="flex h-full w-full items-center justify-center rounded-full font-black text-[#8a5a00]"
          style={{
            background: "linear-gradient(145deg,#ffe07a,#f2a900)",
            boxShadow: "inset 0 -6% 0 rgba(0,0,0,0.15), 0 4% 10% rgba(0,0,0,0.2)",
            fontSize: "40cqw",
          }}
        >
          ★
        </span>
      </div>
    </div>
  );
}
