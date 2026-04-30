"use client";

import React from 'react';
import SectionHeader from './sectionHeader';
import Project from './singleProject';
import FeaturedProject from './FeaturedProject';
import { projectsData } from '../lib/data';
import { useSectionTimeOutForClick } from '../lib/hooks';

/* ── Static terminal snapshot for WillAgent ── */
function AgentPreview() {
  return (
    <div className='h-full bg-[#0a0a0a] font-mono text-[10px] p-3 flex flex-col gap-1 overflow-hidden'>
      <div className='flex items-center justify-between mb-1'>
        <span className='text-green-400 font-bold'>&gt; WillAgent Terminal v0.1</span>
        <span className='text-yellow-400 border border-yellow-400/40 px-1 rounded text-[9px]'>LIVE</span>
      </div>
      <div className='text-blue-400'>SYSTEM initialized</div>
      <div className='text-green-400'>WillAgent ready. Primary: Qwen3.5-122B | Critical: Claude</div>
      <div className='h-1' />
      <div className='text-green-300'>
        Token-discovery flow: <span className='text-blue-300'>scan → who_bought {'<token>'} → inspect {'<token>'}</span>
      </div>
      <div className='text-green-400'>Smart wallets: <span className='text-yellow-400'>996 identities</span> indexed</div>
      <div className='h-1' />
      <div className='text-green-900 text-[9px] leading-tight overflow-hidden max-h-[6rem]'>
        {[
          '0xSteve_Bullish', '0x_ultra', 'avaxbro', '0xAntho', '0xCeb', '0xChefGoose',
          '0xDilbaz', 'averageAndy', 'BananaBrowski', 'BrandSuzuki', '0xLevi', '0xlord',
          'AlienOG', 'ArenaDads', 'AVAX_Chad_9000', 'avax_m4x1', 'bas_ornstein',
          'Belac', 'BigBlockKing', 'BKBigRhaz', 'BluDigger',
        ].join(' · ')}
        {' · '}
        <span className='text-green-800'>+976 more</span>
      </div>
      <div className='mt-auto border-t border-green-900/40 pt-1 text-green-900'>
        scan · who_bought {'<token>'} · inspect · heartbeat — Press ? for help
      </div>
    </div>
  );
}

/* ── Static code block for DCGP ── */
function CodePreview() {
  const lines = [
    { t: 'comment', v: '// DCGP — Context Governance Kernel' },
    { t: 'blank',   v: '' },
    { t: 'keyword', v: 'import', rest: ' { DCGPKernel } from \'dcgp\'' },
    { t: 'blank',   v: '' },
    { t: 'keyword', v: 'const', rest: ' kernel = new DCGPKernel({' },
    { t: 'prop',    v: '  entropyThreshold', rest: ': 0.85,' },
    { t: 'prop',    v: '  hallucinationGates', rest: ': 5,' },
    { t: 'prop',    v: '  plugin', rest: ': \'opencode\',' },
    { t: 'plain',   v: '})' },
    { t: 'blank',   v: '' },
    { t: 'comment', v: '// Enforce typed context boundary' },
    { t: 'keyword', v: 'const', rest: ' result = await kernel.evaluate(ctx)' },
    { t: 'blank',   v: '' },
    { t: 'comment', v: '// Block on entropy spike' },
    { t: 'keyword', v: 'if', rest: ' (result.blocked) {' },
    { t: 'prop',    v: '  throw', rest: ' new HallucinationError(result.reason)' },
    { t: 'plain',   v: '}' },
  ];

  return (
    <div className='h-full bg-[#0d1117] font-mono text-[10px] p-3 flex flex-col overflow-hidden rounded-lg border border-white/5'>
      <div className='flex items-center gap-1.5 mb-3'>
        <span className='w-2 h-2 rounded-full bg-red-500/60' />
        <span className='w-2 h-2 rounded-full bg-yellow-500/60' />
        <span className='w-2 h-2 rounded-full bg-green-500/60' />
        <span className='text-white/30 ml-2 text-[9px]'>dcgp/kernel.ts</span>
      </div>
      <div className='flex flex-col gap-0.5 overflow-hidden'>
        {lines.map((l, i) => (
          <div key={i} className='leading-snug whitespace-pre'>
            {l.t === 'comment' && <span className='text-green-700/80'>{l.v}</span>}
            {l.t === 'blank'   && <span className='opacity-0'>.</span>}
            {l.t === 'keyword' && <><span className='text-blue-400'>{l.v}</span><span className='text-white/70'>{l.rest}</span></>}
            {l.t === 'prop'    && <><span className='text-purple-400'>{l.v}</span><span className='text-white/60'>{l.rest}</span></>}
            {l.t === 'plain'   && <span className='text-white/60'>{l.v}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MyProjects() {
  const { ref } = useSectionTimeOutForClick("Projects", 0.555);
  const [featured, ...rest] = projectsData;

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28 w-full max-w-[55rem]'>
      <SectionHeader>My Developer Roles</SectionHeader>

      {/* AvaSleuth — featured wide card with live terminal */}
      <FeaturedProject
        title={featured.title}
        description={featured.description}
        tags={featured.tags}
        githubUrl={'githubUrl' in featured ? (featured as { githubUrl?: string }).githubUrl : undefined}
        demoUrl={'demoUrl' in featured ? (featured as { demoUrl?: string }).demoUrl : undefined}
      />

      {/* Remaining projects */}
      <div>
        {rest.map((project, index) => {
          let mediaSlot: React.ReactNode | undefined;
          if (project.title === 'WillAgent') mediaSlot = <AgentPreview />;
          if (project.title === 'DCGP')      mediaSlot = <CodePreview />;

          return (
            <React.Fragment key={index}>
              <Project {...project} mediaSlot={mediaSlot} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
