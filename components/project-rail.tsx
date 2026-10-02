'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const projects = [
  { name: 'River Intelligence', type: 'GIS · Data · Infrastructure', year: '2026', art: 'art-one', mark: 'RI', slug: 'river-intelligence' },
  { name: 'Project OS', type: 'Digital systems · Automation', year: '2026', art: 'art-two', mark: 'OS', slug: 'project-os' },
  { name: 'Material Flow', type: 'CAPEX · Tracking · Dashboards', year: '2026', art: 'art-three', mark: 'MF', slug: 'material-flow' },
  { name: 'Green Building', type: 'Design · Analysis · Sustainability', year: '2025', art: 'art-four', mark: 'GB', slug: 'green-building' },
];

function ProjectGraphic({ art, mark }: { art: string; mark: string }) {
  return (
    <div className={`project-art ${art}`} aria-hidden="true">
      <div className="graphic-grid" />
      {mark === 'RI' && <><div className="river-line"/><div className="contour contour-a"/><div className="contour contour-b"/><div className="map-node node-a"/><div className="map-node node-b"/><div className="map-node node-c"/></>}
      {mark === 'OS' && <><div className="os-panel"><span/><span/><span/><span/></div><div className="os-bars"><i/><i/><i/><i/><i/></div><div className="os-orbit"/></>}
      {mark === 'MF' && <><div className="flow-line flow-a"/><div className="flow-line flow-b"/><div className="flow-line flow-c"/><div className="flow-node fn-a">IN</div><div className="flow-node fn-b">STOCK</div><div className="flow-node fn-c">OUT</div></>}
      {mark === 'GB' && <><div className="building"><i/><i/><i/><i/><i/><i/></div><div className="sun-disc"/><div className="leaf leaf-a"/><div className="leaf leaf-b"/></>}
      <div className="art-mark">{mark}</div>
    </div>
  );
}

export function ProjectRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = Math.max(el.offsetHeight - window.innerHeight, 1);
      const next = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  const translate = progress * 78;

  return (
    <section className="project-rail" ref={sectionRef}>
      <div className="project-rail-sticky">
        <div className="container project-rail-inner">
          <div className="rail-heading">
            <div><div className="eyebrow">Selected work</div><h2 className="section-title">Built to work.</h2></div>
            <div className="rail-copy"><p>Scroll to move through the work. Each project is a different expression of engineering intelligence.</p><Link className="mono" href="/work">View all work ↗</Link></div>
          </div>
          <div className="rail-viewport">
            <div className="rail-track" style={{ transform: `translate3d(-${translate}%,0,0)` }}>
              {projects.map((p, i) => (
                <Link href={`/work/${p.slug}`} className={`rail-card ${p.art}`} key={p.slug}>
                  <ProjectGraphic art={p.art} mark={p.mark} />
                  <div className="project-link">↗</div>
                  <div className="project-info"><div><div className="project-meta">{p.year} · {p.type}</div><div className="project-name">{p.name}</div></div><span className="rail-index">0{i + 1}</span></div>
                </Link>
              ))}
            </div>
          </div>
          <div className="rail-progress"><span>01</span><div><i style={{ width: `${Math.max(8, progress * 100)}%` }}/></div><span>04</span></div>
        </div>
      </div>
    </section>
  );
}
