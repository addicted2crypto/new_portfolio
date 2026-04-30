"use client"
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type LT = 'system' | 'output' | 'highlight' | 'check' | 'muted' | 'section'
        | 'pair' | 'group' | 'link' | 'error' | 'blank' | 'input';

interface Line { type: LT; text: string; sub?: string; id: number; }
type Raw  = { type: LT; text: string; sub?: string };

const BOOT: Raw[] = [
  { type: 'system',    text: 'Initializing portfolio v2.0...' },
  { type: 'blank',     text: '' },
  { type: 'pair',      text: 'Name  ', sub: 'William Heeb' },
  { type: 'pair',      text: 'Role  ', sub: 'Full-Stack Engineer · Security+ · Web3' },
  { type: 'pair',      text: 'Status', sub: 'Available for hire' },
  { type: 'blank',     text: '' },
  { type: 'muted',     text: "Type 'help' to explore ↵" },
];

const CMDS: Record<string, Raw[]> = {
  whoami: [
    { type: 'highlight', text: 'William Heeb — Full-Stack Engineer' },
    { type: 'blank',     text: '' },
    { type: 'output',    text: '8+ years shipping production systems.' },
    { type: 'output',    text: 'Federal health IT · Web3 infrastructure · SaaS.' },
    { type: 'blank',     text: '' },
    { type: 'pair',      text: 'Contract ', sub: 'DoD Engineer — Defense Health Agency' },
    { type: 'pair',      text: 'Certs    ', sub: 'CompTIA Security+ | IAT Level II' },
    { type: 'pair',      text: 'Ecosystem', sub: 'AVAX builder — The Grotto' },
  ],
  stack: [
    { type: 'section',  text: 'Tech Stack' },
    { type: 'group',    text: 'Backend  ', sub: 'NestJS · Node.js · TypeScript · Python · C#' },
    { type: 'group',    text: 'Frontend ', sub: 'Next.js · React · Tailwind · Framer Motion' },
    { type: 'group',    text: 'Web3     ', sub: 'Solidity · Foundry · wagmi · viem · Avalanche' },
    { type: 'group',    text: 'Data     ', sub: 'PostgreSQL · Redis · BullMQ · Supabase' },
    { type: 'group',    text: 'DevOps   ', sub: 'Docker · Azure · Vercel · Linux' },
    { type: 'group',    text: 'AI       ', sub: 'Claude API · LLM pipelines · RAG · Agents' },
  ],
  experience: [
    { type: 'section', text: 'Career Timeline' },
    { type: 'pair',    text: '2025–2026', sub: 'Software Engineer — DoD Contractor (DHA)' },
    { type: 'pair',    text: '2024–now ', sub: 'AvaSleuth / The Grotto (AVAX ecosystem)' },
    { type: 'pair',    text: '2022–now ', sub: 'Lead Full-Stack Developer' },
    { type: 'pair',    text: '2021–2024', sub: 'Blockchain Dev & Team Lead' },
    { type: 'pair',    text: '2020–2021', sub: 'Freelance Full-Stack Developer' },
  ],
  projects: [
    { type: 'section', text: 'Key Projects' },
    { type: 'pair',    text: 'AvaSleuth ', sub: 'AVAX Web3 intelligence platform' },
    { type: 'pair',    text: 'GymTech   ', sub: 'Multi-tenant gym management SaaS' },
    { type: 'pair',    text: 'WillAgent ', sub: 'NestJS ReACT agent orchestration' },
    { type: 'pair',    text: 'DCGP      ', sub: 'LLM context governance kernel' },
    { type: 'pair',    text: 'DHA / DoD ', sub: 'Hyperledger Iroha · health.mil · TRICARE' },
  ],
  hire: [
    { type: 'highlight', text: 'Why hire Will?' },
    { type: 'blank',     text: '' },
    { type: 'check',     text: '8+ years production experience. Delivers.' },
    { type: 'check',     text: 'DoD-cleared. Security+ certified. IAT II.' },
    { type: 'check',     text: 'Shipped first gov blockchain deployment.' },
    { type: 'check',     text: 'TypeScript-first. Typed boundaries. No hacks.' },
    { type: 'check',     text: 'Security-first design in everything built.' },
    { type: 'blank',     text: '' },
    { type: 'muted',     text: "→ Type 'contact' to reach out." },
  ],
  avax: [
    { type: 'section', text: 'AVAX Ecosystem' },
    { type: 'pair',    text: 'Community', sub: 'The Grotto — builder since 2021' },
    { type: 'pair',    text: 'Platform ', sub: 'AvaSleuth (ContractSleuth + WalletSleuth + TokenRadar)' },
    { type: 'pair',    text: 'Wallets  ', sub: '996 smart money identities indexed' },
    { type: 'pair',    text: 'Audit    ', sub: 'Club HashCash — 44 findings (Avalanche C-Chain)' },
    { type: 'pair',    text: 'Network  ', sub: 'On-chain every day.' },
  ],
  help: [
    { type: 'section', text: 'Commands' },
    { type: 'pair',    text: 'whoami    ', sub: 'Who is Will?' },
    { type: 'pair',    text: 'stack     ', sub: 'Tech stack overview' },
    { type: 'pair',    text: 'experience', sub: 'Career timeline' },
    { type: 'pair',    text: 'projects  ', sub: 'Key projects' },
    { type: 'pair',    text: 'hire      ', sub: 'Why hire Will' },
    { type: 'pair',    text: 'avax      ', sub: 'AVAX ecosystem work' },
    { type: 'pair',    text: 'github    ', sub: 'Open GitHub profile' },
    { type: 'pair',    text: 'contact   ', sub: 'Jump to contact form' },
    { type: 'pair',    text: 'clear     ', sub: 'Clear terminal' },
  ],
  github: [
    { type: 'output', text: 'Opening GitHub...' },
    { type: 'link',   text: 'github.com/addicted2crypto' },
  ],
  contact: [
    { type: 'output', text: 'Jumping to contact form...' },
  ],
};
CMDS['?'] = CMDS['help'];

/* line color map */
const C: Record<LT, string> = {
  system:    'text-blue-400',
  output:    'text-white/80',
  highlight: 'text-yellow-300 font-bold',
  check:     'text-green-400',
  muted:     'text-white/40 italic',
  section:   'text-white font-bold',
  pair:      '',
  group:     '',
  link:      'text-blue-400 underline underline-offset-2 cursor-pointer',
  error:     'text-red-400',
  blank:     '',
  input:     'text-white/60',
};

let uid = 0;
const stamp = (raw: Raw[]): Line[] => raw.map(r => ({ ...r, id: ++uid }));

export default function HeroCLI() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState('');
  const [busy,  setBusy]  = useState(false);
  const bootedRef = useRef(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  /* auto-scroll — uses scrollTop so only the terminal scrolls, not the page */
  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  /* boot sequence — ref guard prevents StrictMode double-fire */
  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;
    setBusy(true);
    BOOT.forEach((raw, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, { ...raw, id: ++uid }]);
        if (i === BOOT.length - 1) setBusy(false);
      }, 120 * i);
    });
  }, []);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setLines(prev => [...prev, { type: 'input', text: `> ${raw.trim()}`, id: ++uid }]);
    setInput('');

    if (cmd === 'clear') {
      setTimeout(() => setLines(stamp(BOOT)), 80);
      return;
    }

    if (cmd === 'github') {
      window.open('https://github.com/addicted2crypto', '_blank');
    }
    if (cmd === 'contact') {
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }

    const response = CMDS[cmd] ?? [
      { type: 'error' as LT, text: `Command not found: ${cmd}` },
      { type: 'muted' as LT, text: "Type 'help' for available commands." },
    ];

    setBusy(true);
    response.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, { ...line, id: ++uid }]);
        if (i === response.length - 1) {
          setLines(prev => [...prev, { type: 'blank', text: '', id: ++uid }]);
          setBusy(false);
        }
      }, 40 * i + 120);
    });
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !busy) run(input);
  }

  function renderLine(line: Line) {
    if (line.type === 'pair' || line.type === 'group') {
      const keyColor = line.type === 'pair' ? 'text-blue-300' : 'text-purple-400';
      return (
        <span>
          <span className={keyColor}>{line.text}</span>
          <span className='text-white/60'>{line.sub}</span>
        </span>
      );
    }
    if (line.type === 'section') {
      return (
        <span className='text-white font-semibold uppercase tracking-widest text-[10px]
                         border-b border-white/20 pb-0.5 block w-full'>
          {line.text}
        </span>
      );
    }
    if (line.type === 'check') {
      return <span className='text-green-400'><span className='mr-1.5'>✓</span>{line.text}</span>;
    }
    if (line.type === 'blank') return <span className='h-2 block' />;
    return <span className={C[line.type]}>{line.text}</span>;
  }

  return (
    <div
      className='flex flex-col h-full bg-[#080c10] rounded-xl border border-white/8
                 font-mono text-xs overflow-hidden cursor-text
                 shadow-2xl shadow-black/50'
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className='flex items-center justify-between px-4 py-2.5 bg-[#0d1117]
                      border-b border-white/8 shrink-0'>
        <div className='flex items-center gap-2'>
          <div className='flex gap-1.5'>
            <span className='w-3 h-3 rounded-full bg-[#ff5f57]' />
            <span className='w-3 h-3 rounded-full bg-[#febc2e]' />
            <span className='w-3 h-3 rounded-full bg-[#28c840]' />
          </div>
          <span className='text-white/40 text-[11px] ml-2 tracking-wide'>portfolio.sh</span>
        </div>
        <span className='text-[10px] text-green-400/70 tracking-widest'>● LIVE</span>
      </div>

      {/* Output */}
      <div ref={outputRef} className='flex-1 overflow-y-auto px-4 py-3 space-y-0.5
                      scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent'>
        <AnimatePresence initial={false}>
          {lines.map(line => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.09 }}
              className='leading-relaxed'
            >
              {renderLine(line)}
            </motion.div>
          ))}
        </AnimatePresence>

        {busy && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.75 }}
            className='text-green-400 inline-block'
          >▋</motion.span>
        )}
      </div>

      {/* Input */}
      <div className='flex items-center gap-2 px-4 py-2.5 border-t border-white/8
                      bg-[#0d1117] shrink-0'>
        <span className='text-green-400 select-none text-sm'>›</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          disabled={busy}
          placeholder={busy ? '' : 'whoami · stack · hire · avax · help'}
          className='flex-1 bg-transparent text-white/80 outline-none text-[11px]
                     placeholder:text-white/20 disabled:cursor-wait caret-green-400'
          spellCheck={false}
          autoComplete='off'
        />
      </div>
    </div>
  );
}
