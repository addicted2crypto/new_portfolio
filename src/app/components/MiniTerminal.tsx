"use client"
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type LineType = 'input' | 'output' | 'system' | 'success' | 'error' | 'warning' | 'section' | 'blank';

interface Line {
  type: LineType;
  text: string;
  id: number;
}

type Raw = { type: LineType; text: string };

const RESPONSES: Record<string, Raw[]> = {
  scan: [
    { type: 'system',  text: '[AVAX] Scanning hot tokens...' },
    { type: 'blank',   text: '' },
    { type: 'section', text: 'TOKEN RADAR — Top Movers' },
    { type: 'success', text: 'NOCHILL  $0.00142  +847%  smart: 12 wallets' },
    { type: 'success', text: 'GROTTO   $0.00089  +312%  smart: 7 wallets' },
    { type: 'output',  text: 'KIMBO    $0.00034  +189%  smart: 4 wallets' },
    { type: 'output',  text: 'JOE      $0.512    +24%   smart: 19 wallets' },
    { type: 'blank',   text: '' },
    { type: 'output',  text: '→ try: who_bought NOCHILL' },
  ],
  who_bought: [
    { type: 'system',  text: '[AVAX] Smart money check...' },
    { type: 'blank',   text: '' },
    { type: 'section', text: 'NOCHILL  |  Holders: 2,847  |  Vol: $2.1M' },
    { type: 'success', text: '✓ 0xSteve_Bullish   +2.1M  +59%   HOLD' },
    { type: 'success', text: '✓ 0x_ultra          +890K  +39%   HOLD' },
    { type: 'output',  text: '✓ avaxbro            +445K  +6%    HOLD' },
    { type: 'error',   text: '✗ 0x_djocreates      -200K  exit' },
    { type: 'blank',   text: '' },
    { type: 'success', text: 'Smart money conviction: HIGH (3/4 holding)' },
    { type: 'output',  text: '→ try: inspect NOCHILL' },
  ],
  inspect: [
    { type: 'system',  text: '[AVAX] ContractSleuth L0-L7 pipeline...' },
    { type: 'blank',   text: '' },
    { type: 'section', text: 'AUDIT: NOCHILL  0x45b1...f3d2' },
    { type: 'success', text: '[L0] Bytecode verified         ✓' },
    { type: 'success', text: '[L1] No proxy patterns         ✓' },
    { type: 'success', text: '[L2] Ownership renounced       ✓' },
    { type: 'success', text: '[L3] No mint authority         ✓' },
    { type: 'success', text: '[L4] Liquidity locked 365d     ✓' },
    { type: 'success', text: '[L5] No honeypot patterns      ✓' },
    { type: 'output',  text: '[L6] Tax 2% buy / 2% sell      ✓' },
    { type: 'success', text: '[L7] Threat model: LOW RISK    ✓' },
    { type: 'blank',   text: '' },
    { type: 'success', text: 'Score: 91/100 — CLEAN  |  5/5 gates passed' },
  ],
  heartbeat: [
    { type: 'system',  text: '[AVAX] Module status...' },
    { type: 'blank',   text: '' },
    { type: 'section', text: 'MODULES' },
    { type: 'success', text: 'ContractSleuth  ● ACTIVE   L0-L7 ready' },
    { type: 'success', text: 'WalletSleuth    ● ACTIVE   996 identities' },
    { type: 'success', text: 'TokenRadar      ● ACTIVE   847 pairs' },
    { type: 'success', text: 'AntiHalluc.     ● ACTIVE   5/5 gates armed' },
    { type: 'blank',   text: '' },
    { type: 'output',  text: 'Last audit: Club HashCash — 44 findings' },
    { type: 'success', text: 'Redis: healthy  |  Uptime: 99.2%' },
  ],
  help: [
    { type: 'section', text: 'AvaSleuth Commands' },
    { type: 'output',  text: 'scan              Hot tokens on AVAX now' },
    { type: 'output',  text: 'who_bought <tok>  Smart money check' },
    { type: 'output',  text: 'inspect <tok>     L0-L7 contract audit' },
    { type: 'output',  text: 'heartbeat         System module status' },
    { type: 'output',  text: 'help / ?          This menu' },
    { type: 'blank',   text: '' },
    { type: 'warning', text: '⚠  Demo — simulated output' },
  ],
};
RESPONSES['?'] = RESPONSES['help'];
RESPONSES['sleuth'] = RESPONSES['inspect'];

const BOOT: Raw[] = [
  { type: 'system', text: 'AvaSleuth ready. Primary: Qwen3.5 | Critical: Claude' },
  { type: 'blank',  text: '' },
  { type: 'output', text: 'Token flow:  scan → who_bought → inspect' },
  { type: 'output', text: 'Smart wallets: 996 identities indexed' },
  { type: 'blank',  text: '' },
  { type: 'output', text: 'Type help or ? to see all commands.' },
];

const COLOR: Record<LineType, string> = {
  input:   'text-white',
  output:  'text-green-400',
  system:  'text-blue-400',
  success: 'text-green-300',
  error:   'text-red-400',
  warning: 'text-yellow-400',
  section: 'text-white font-bold',
  blank:   '',
};

let uid = 0;
const stamp = (raw: Raw[]): Line[] => raw.map(r => ({ ...r, id: ++uid }));

export default function MiniTerminal() {
  const [lines, setLines] = useState<Line[]>(stamp(BOOT));
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    const key = cmd.split(/\s+/)[0].toLowerCase();
    const response = RESPONSES[key] ?? [
      { type: 'error' as LineType, text: `Unknown command: ${key}` },
      { type: 'output' as LineType, text: 'Type help to see available commands.' },
    ];

    setLines(prev => [...prev, { type: 'input', text: `> ${cmd}`, id: ++uid }]);
    setInput('');
    setBusy(true);

    response.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, { ...line, id: ++uid }]);
        if (i === response.length - 1) {
          setLines(prev => [...prev, { type: 'blank', text: '', id: ++uid }]);
          setBusy(false);
        }
      }, 45 * i + 180);
    });
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !busy) run(input);
  }

  return (
    <div
      className='flex flex-col h-full bg-[#0a0a0a] rounded-lg border border-green-900/40 font-mono text-xs overflow-hidden cursor-text'
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header bar */}
      <div className='flex items-center justify-between px-3 py-2 bg-[#111] border-b border-green-900/30 shrink-0'>
        <div className='flex items-center gap-2'>
          <div className='flex gap-1.5'>
            <span className='w-2.5 h-2.5 rounded-full bg-red-500/70' />
            <span className='w-2.5 h-2.5 rounded-full bg-yellow-500/70' />
            <span className='w-2.5 h-2.5 rounded-full bg-green-500/70' />
          </div>
          <span className='text-green-400 text-[11px] font-bold tracking-wider ml-1'>
            &gt; AvaSleuth Terminal
          </span>
        </div>
        <span className='text-[10px] text-yellow-400 border border-yellow-400/40 px-1.5 py-0.5 rounded'>
          DEMO
        </span>
      </div>

      {/* Output scroll area */}
      <div className='flex-1 overflow-y-auto px-3 py-2 space-y-0.5'>
        <AnimatePresence initial={false}>
          {lines.map(line => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className={`leading-snug whitespace-pre-wrap break-all ${COLOR[line.type]} ${line.type === 'blank' ? 'h-2 block' : ''}`}
            >
              {line.type === 'input'
                ? <span className='text-white opacity-90'>{line.text}</span>
                : line.type === 'section'
                  ? <span className='text-white font-bold underline underline-offset-2'>{line.text}</span>
                  : line.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {busy && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className='text-green-400 inline-block'
          >▋</motion.span>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className='flex items-center gap-2 px-3 py-2 border-t border-green-900/30 shrink-0'>
        <span className='text-green-400 select-none'>&gt;</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          disabled={busy}
          placeholder={busy ? '' : 'scan · who_bought · inspect · heartbeat · help'}
          className='flex-1 bg-transparent text-green-300 outline-none text-[11px]
                     placeholder:text-green-900 disabled:cursor-wait caret-green-400'
          spellCheck={false}
          autoComplete='off'
        />
      </div>
    </div>
  );
}
