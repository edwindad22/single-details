'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

const STARS = [
  { cx: 120,  cy: 75,  r: 1.2, dur: '4s',   begin: '0s'   },
  { cx: 380,  cy: 50,  r: 1.0, dur: '5.5s', begin: '1.2s' },
  { cx: 620,  cy: 90,  r: 1.5, dur: '3.5s', begin: '0.5s' },
  { cx: 850,  cy: 38,  r: 1.0, dur: '6s',   begin: '2s'   },
  { cx: 1050, cy: 115, r: 1.3, dur: '4.5s', begin: '1.8s' },
  { cx: 1200, cy: 62,  r: 1.0, dur: '7s',   begin: '0.8s' },
  { cx: 245,  cy: 155, r: 1.1, dur: '5s',   begin: '3s'   },
  { cx: 755,  cy: 168, r: 1.4, dur: '3.8s', begin: '1.5s' },
]

export default function FloralBackground() {
  const { theme } = useTheme()
  const [mounted, set_mounted] = useState(false)
  useEffect(() => set_mounted(true), [])
  const isDark = mounted && theme === 'dark'

  return (
    <>
      {/* Atmosphere layer — behind header/footer */}
      <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden" aria-hidden="true">
        {isDark && <MoonlightEffect />}
        {isDark && <NightSky />}
        <LoosePetals />
      </div>

      {/* Flower cluster layer — above header/footer, frames corners */}
      <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden" aria-hidden="true">
        <div className={`absolute -top-6 -right-6 w-[300px] h-[640px] sm:w-[340px] sm:h-[700px] floral-cluster-tr ${isDark ? 'opacity-90' : 'opacity-75'}`} style={{ perspective: '900px' }}>
          <FloralCluster variant="top-right" />
        </div>

        <div className={`absolute bottom-10 -left-6 w-[270px] h-[580px] sm:w-[310px] sm:h-[640px] floral-cluster-bl ${isDark ? 'opacity-85' : 'opacity-70'}`} style={{ perspective: '900px' }}>
          <FloralCluster variant="bottom-left" />
        </div>

        <div className="absolute top-1/2 right-2 -translate-y-1/2 w-16 h-16 opacity-30">
          <SmallAccentFlower color="#F2C4CE" seed={0} />
        </div>

        <div className="absolute top-1/4 left-3 w-12 h-12 opacity-25">
          <SmallAccentFlower color="#A8C5AC" seed={1} />
        </div>
      </div>
    </>
  )
}

function MoonlightEffect() {
  const mx = 1418
  const my = 62

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMaxYMin slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="moon-disc" cx="38%" cy="32%" r="62%">
          <stop offset="0%"   stopColor="#FDF8F3" stopOpacity="0.98" />
          <stop offset="40%"  stopColor="#FDE8EE" stopOpacity="0.85" />
          <stop offset="75%"  stopColor="#F2C4CE" stopOpacity="0.40" />
          <stop offset="100%" stopColor="#F2C4CE" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="moon-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FDE8EE" stopOpacity="0.10" />
          <stop offset="60%"  stopColor="#F2C4CE" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#F2C4CE" stopOpacity="0"    />
        </radialGradient>
        <filter id="beam-blur">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="halo-blur">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* Soft outer halo — blurred, very subtle */}
      <circle cx={mx} cy={my} r={115} fill="url(#moon-halo)" filter="url(#halo-blur)" />

      {/* Moonbeams — thin, long, soft, fanning left */}
      <g filter="url(#beam-blur)" opacity="0.6">
        <ellipse cx={mx} cy={my} rx={1.5} ry={260} fill="#FDE8EE" opacity="0.07" transform={`rotate(-152 ${mx} ${my})`} />
        <ellipse cx={mx} cy={my} rx={1.2} ry={200} fill="#FDE8EE" opacity="0.06" transform={`rotate(-142 ${mx} ${my})`} />
        <ellipse cx={mx} cy={my} rx={1.2} ry={300} fill="#FDE8EE" opacity="0.05" transform={`rotate(-162 ${mx} ${my})`} />
        <ellipse cx={mx} cy={my} rx={1.0} ry={180} fill="#FDF8F3" opacity="0.06" transform={`rotate(-132 ${mx} ${my})`} />
        <ellipse cx={mx} cy={my} rx={1.0} ry={220} fill="#FDE8EE" opacity="0.04" transform={`rotate(-172 ${mx} ${my})`} />
      </g>

      {/* Moon disc — breathes gently */}
      <circle cx={mx} cy={my} r={46} fill="url(#moon-disc)">
        <animate
          attributeName="opacity"
          values="0.88;1.0;0.88"
          dur="9s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
        />
      </circle>

      {/* Shadow circle — creates crescent illusion for 3D depth */}
      <circle cx={mx + 14} cy={my - 8} r={40} fill="#140A0E" opacity="0.72" />

      {/* Highlight shimmer on the lit edge */}
      <ellipse cx={mx - 16} cy={my - 12} rx={10} ry={6} fill="#FDF8F3" opacity="0.45" transform={`rotate(-35 ${mx - 16} ${my - 12})`} />
    </svg>
  )
}

function NightSky() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      aria-hidden="true"
    >
      {STARS.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#FDE8EE">
          <animate
            attributeName="opacity"
            values="0.85;0.20;0.85"
            dur={s.dur}
            begin={s.begin}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
          />
        </circle>
      ))}
    </svg>
  )
}

function FloralCluster({ variant }: { variant: 'top-right' | 'bottom-left' }) {
  const flip = variant === 'bottom-left'
  const tf   = flip ? 'scale(-1,-1)' : undefined
  const id   = variant

  const p = {
    a0: '#FEF0F4', a50: '#F2C4CE', a100: '#D48090', aO: [1, 0.92, 0.65] as [number,number,number],
    b0: '#FDE8EE', b55: '#E8A0B0', b100: '#C97080', bO: [1, 0.88, 0.60] as [number,number,number],
    c0: '#FFF5F7', c60: '#F2C4CE', c100: '#D48090', cO: [1, 0.80, 0.55] as [number,number,number],
    ctr0: '#FDE8EE', ctr100: '#C97080', ctrO: [1, 0.80] as [number,number],
    bud0: '#FFF0F4', bud70: '#F2C4CE', bud100: '#D48090', budO: [1, 0.85, 0.55] as [number,number,number],
    l1a: '#B8D4BB', l1b: '#7A9E7E', l1c: '#4E7255', l2a: '#A8C5AC', l2b: '#5F8565',
    shadow: '#C97080', stemFill: '#7A9E7E',
  }

  return (
    <svg
      viewBox="0 0 340 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: tf, width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id={`pa-${id}`} cx="40%" cy="25%" r="75%">
          <stop offset="0%"   stopColor={p.a0}   stopOpacity={p.aO[0]} />
          <stop offset="50%"  stopColor={p.a50}  stopOpacity={p.aO[1]} />
          <stop offset="100%" stopColor={p.a100} stopOpacity={p.aO[2]} />
        </radialGradient>
        <radialGradient id={`pb-${id}`} cx="40%" cy="25%" r="75%">
          <stop offset="0%"   stopColor={p.b0}   stopOpacity={p.bO[0]} />
          <stop offset="55%"  stopColor={p.b55}  stopOpacity={p.bO[1]} />
          <stop offset="100%" stopColor={p.b100} stopOpacity={p.bO[2]} />
        </radialGradient>
        <radialGradient id={`pc-${id}`} cx="40%" cy="20%" r="70%">
          <stop offset="0%"   stopColor={p.c0}   stopOpacity={p.cO[0]} />
          <stop offset="60%"  stopColor={p.c60}  stopOpacity={p.cO[1]} />
          <stop offset="100%" stopColor={p.c100} stopOpacity={p.cO[2]} />
        </radialGradient>
        <radialGradient id={`pctr-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={p.ctr0}   stopOpacity={p.ctrO[0]} />
          <stop offset="100%" stopColor={p.ctr100} stopOpacity={p.ctrO[1]} />
        </radialGradient>
        <radialGradient id={`pbud-${id}`} cx="40%" cy="25%" r="70%">
          <stop offset="0%"   stopColor={p.bud0}   stopOpacity={p.budO[0]} />
          <stop offset="70%"  stopColor={p.bud70}  stopOpacity={p.budO[1]} />
          <stop offset="100%" stopColor={p.bud100} stopOpacity={p.budO[2]} />
        </radialGradient>
        <linearGradient id={`ll1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={p.l1a} stopOpacity="0.9"  />
          <stop offset="50%"  stopColor={p.l1b} stopOpacity="0.75" />
          <stop offset="100%" stopColor={p.l1c} stopOpacity="0.5"  />
        </linearGradient>
        <linearGradient id={`ll2-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={p.l2a} stopOpacity="0.85" />
          <stop offset="100%" stopColor={p.l2b} stopOpacity="0.5"  />
        </linearGradient>
        <linearGradient id={`stem-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor={p.l1b} stopOpacity="0.7" />
          <stop offset="60%"  stopColor={p.l1c} stopOpacity="0.5" />
          <stop offset="100%" stopColor={p.l1c} stopOpacity="0.2" />
        </linearGradient>
        <filter id={`fs-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor={p.shadow} floodOpacity="0.22" />
        </filter>
        <filter id={`fb-${id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
      </defs>

      {/* Branch stems */}
      <g opacity="0.55" strokeLinecap="round" fill="none">
        <path d="M 240 675 C 220 600 190 530 200 460 C 210 390 165 340 150 275 C 135 210 155 155 135 100 C 118 52 105 28 88 8"
          stroke={`url(#stem-${id})`} strokeWidth="4" />
        <path d="M 198 458 C 235 428 268 390 290 355"
          stroke={`url(#stem-${id})`} strokeWidth="2.5" />
        <path d="M 152 278 C 112 252 72 235 42 215"
          stroke={`url(#stem-${id})`} strokeWidth="2.2" />
        <path d="M 138 135 C 175 112 205 88 222 58"
          stroke={`url(#stem-${id})`} strokeWidth="2" />
        <path d="M 130 192 C 95 178 65 170 38 168"
          stroke={`url(#stem-${id})`} strokeWidth="1.8" />
      </g>

      {/* Background layer — blurred for depth */}
      <g filter={`url(#fb-${id})`} opacity="0.52">
        <RoseSVG cx={55}  cy={210} r={34} pg={`pa-${id}`} cg={`pctr-${id}`} windDur="12s" windDelay="0.5s" windAmt={1.3} />
        <RoseSVG cx={245} cy={340} r={38} pg={`pb-${id}`} cg={`pctr-${id}`} windDur="14s" windDelay="2.5s" windAmt={1.1} />
      </g>

      {/* Leaves along branch */}
      <g opacity="0.85">
        <LeafSVG cx={175} cy={455} rx={9}  ry={48} rotate={-40} grad={`ll1-${id}`} windDur="6s"   windDelay="0.4s" />
        <LeafSVG cx={220} cy={355} rx={8}  ry={40} rotate={50}  grad={`ll2-${id}`} windDur="7.5s" windDelay="1.5s" />
        <LeafSVG cx={148} cy={275} rx={7}  ry={34} rotate={-65} grad={`ll1-${id}`} windDur="5.5s" windDelay="0.2s" />
        <LeafSVG cx={45}  cy={215} rx={7}  ry={30} rotate={25}  grad={`ll2-${id}`} windDur="8s"   windDelay="2.2s" />
        <LeafSVG cx={118} cy={192} rx={6}  ry={28} rotate={-55} grad={`ll1-${id}`} windDur="6.8s" windDelay="1.0s" />
        <LeafSVG cx={165} cy={118} rx={7}  ry={35} rotate={60}  grad={`ll2-${id}`} windDur="5.8s" windDelay="1.8s" />
        <LeafSVG cx={95}  cy={90}  rx={6}  ry={28} rotate={-45} grad={`ll1-${id}`} windDur="7.2s" windDelay="0.6s" />
      </g>

      {/* Foreground — sharp with shadow for 3D lift */}
      <g filter={`url(#fs-${id})`}>
        <RoseSVG cx={100} cy={42}  r={68} pg={`pa-${id}`} cg={`pctr-${id}`} windDur="8s"  windDelay="0s"   windAmt={1.8} />
        <RoseSVG cx={225} cy={62}  r={50} pg={`pc-${id}`} cg={`pctr-${id}`} windDur="10s" windDelay="1.2s" windAmt={1.4} />
        <RoseSVG cx={40}  cy={168} r={46} pg={`pb-${id}`} cg={`pctr-${id}`} windDur="9s"  windDelay="0.6s" windAmt={1.6} />
        <RoseSVG cx={292} cy={348} r={52} pg={`pa-${id}`} cg={`pctr-${id}`} windDur="11s" windDelay="1.8s" windAmt={1.3} />
        <RoseSVG cx={158} cy={268} r={42} pg={`pb-${id}`} cg={`pctr-${id}`} windDur="7s"  windDelay="0.9s" windAmt={2.0} />
      </g>

      {/* Buds — smaller, lower on branch */}
      <g opacity="0.88">
        <BudSVG cx={205} cy={460} r={22} pg={`pbud-${id}`} stemFill={p.stemFill} windDur="7s"  windDelay="0.3s" windAmt={2.5} />
        <BudSVG cx={175} cy={545} r={18} pg={`pbud-${id}`} stemFill={p.stemFill} windDur="9s"  windDelay="2s"   windAmt={2.2} />
        <BudSVG cx={228} cy={620} r={16} pg={`pbud-${id}`} stemFill={p.stemFill} windDur="8s"  windDelay="1.2s" windAmt={2.0} />
      </g>

      {/* Loose petals scattered along branch */}
      <g opacity="0.45">
        <LoosePetalSVG cx={60}  cy={310} rotate={20}  color="#F2C4CE" windDur="5s"   windDelay="0s"   />
        <LoosePetalSVG cx={270} cy={180} rotate={-40} color="#FDE8EE" windDur="6.5s" windDelay="1.5s" />
        <LoosePetalSVG cx={130} cy={390} rotate={55}  color="#E8A0B0" windDur="4.5s" windDelay="0.7s" />
        <LoosePetalSVG cx={310} cy={430} rotate={-15} color="#F2C4CE" windDur="7s"   windDelay="2s"   />
      </g>
    </svg>
  )
}

function RoseSVG({
  cx, cy, r, pg, cg, windDur, windDelay, windAmt = 1.5,
}: {
  cx: number; cy: number; r: number
  pg: string; cg: string
  windDur: string; windDelay: string; windAmt?: number
}) {
  const angles5  = [0, 72, 144, 216, 288]
  const angles5o = [36, 108, 180, 252, 324]

  const oPD = r * 0.60; const oPRx = r * 0.28; const oPRy = r * 0.50
  const iPD = r * 0.35; const iPRx = r * 0.18; const iPRy = r * 0.32
  const cR  = r * 0.15

  const rot_vals = `0 ${cx} ${cy};${windAmt} ${cx} ${cy};-${windAmt * 0.7} ${cx} ${cy};${windAmt * 0.4} ${cx} ${cy};0 ${cx} ${cy}`

  return (
    <g transform={`translate(${cx},${cy})`}>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values={rot_vals}
        dur={windDur}
        begin={windDelay}
        repeatCount="indefinite"
        additive="sum"
        calcMode="spline"
        keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
        keyTimes="0;0.3;0.55;0.8;1"
      />
      {angles5.map((deg, i) => (
        <ellipse
          key={`op${i}`}
          cx={0} cy={-oPD}
          rx={oPRx} ry={oPRy}
          fill={`url(#${pg})`}
          transform={`rotate(${deg})`}
          opacity="0.92"
        />
      ))}
      {angles5.map((deg, i) => (
        <ellipse
          key={`oh${i}`}
          cx={0} cy={-oPD * 0.65}
          rx={oPRx * 0.45} ry={oPRy * 0.3}
          fill="white"
          opacity="0.18"
          transform={`rotate(${deg})`}
        />
      ))}
      {angles5o.map((deg, i) => (
        <ellipse
          key={`ip${i}`}
          cx={0} cy={-iPD}
          rx={iPRx} ry={iPRy}
          fill={`url(#${pg})`}
          transform={`rotate(${deg})`}
          opacity="0.85"
        />
      ))}
      <circle cx={0} cy={0} r={cR} fill={`url(#${cg})`} />
      <circle cx={-cR * 0.2} cy={-cR * 0.2} r={cR * 0.35} fill="white" opacity="0.4" />
    </g>
  )
}

function BudSVG({
  cx, cy, r, pg, stemFill, windDur, windDelay, windAmt = 2,
}: { cx: number; cy: number; r: number; pg: string; stemFill: string; windDur: string; windDelay: string; windAmt?: number }) {
  const rot_vals = `0 ${cx} ${cy};${windAmt} ${cx} ${cy};-${windAmt} ${cx} ${cy};${windAmt * 0.5} ${cx} ${cy};0 ${cx} ${cy}`
  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values={rot_vals}
        dur={windDur}
        begin={windDelay}
        repeatCount="indefinite"
        additive="sum"
        calcMode="spline"
        keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
        keyTimes="0;0.25;0.55;0.8;1"
      />
      <ellipse cx={cx} cy={cy + r * 0.3} rx={r * 0.22} ry={r * 0.55} fill={stemFill} opacity="0.6" />
      <ellipse cx={cx} cy={cy - r * 0.1} rx={r * 0.38} ry={r * 0.62} fill={`url(#${pg})`} opacity="0.9"  transform={`rotate(-15 ${cx} ${cy})`} />
      <ellipse cx={cx} cy={cy - r * 0.1} rx={r * 0.34} ry={r * 0.58} fill={`url(#${pg})`} opacity="0.85" transform={`rotate(15 ${cx} ${cy})`} />
      <ellipse cx={cx} cy={cy - r * 0.15} rx={r * 0.28} ry={r * 0.5} fill={`url(#${pg})`} opacity="0.8" />
      <ellipse cx={cx - r * 0.05} cy={cy - r * 0.25} rx={r * 0.1} ry={r * 0.2} fill="white" opacity="0.25" />
    </g>
  )
}

function LeafSVG({
  cx, cy, rx, ry, rotate, grad, windDur, windDelay,
}: { cx: number; cy: number; rx: number; ry: number; rotate: number; grad: string; windDur: string; windDelay: string }) {
  const wind_rot = 3
  const rot_vals = `${rotate} ${cx} ${cy};${rotate + wind_rot} ${cx} ${cy};${rotate - wind_rot * 0.8} ${cx} ${cy};${rotate + wind_rot * 0.5} ${cx} ${cy};${rotate} ${cx} ${cy}`
  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values={rot_vals}
        dur={windDur}
        begin={windDelay}
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
        keyTimes="0;0.3;0.6;0.8;1"
      />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${grad})`} />
      <line x1={cx} y1={cy - ry * 0.85} x2={cx} y2={cy + ry * 0.85}
        stroke="white" strokeWidth="0.8" strokeOpacity="0.3"
      />
      <ellipse cx={cx - rx * 0.15} cy={cy - ry * 0.2} rx={rx * 0.25} ry={ry * 0.3}
        fill="white" opacity="0.12"
      />
    </g>
  )
}

function LoosePetalSVG({
  cx, cy, rotate, color, windDur, windDelay,
}: { cx: number; cy: number; rotate: number; color: string; windDur: string; windDelay: string }) {
  const rot_vals = `${rotate} ${cx} ${cy};${rotate + 8} ${cx} ${cy};${rotate - 6} ${cx} ${cy};${rotate + 4} ${cx} ${cy};${rotate} ${cx} ${cy}`
  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values={rot_vals}
        dur={windDur}
        begin={windDelay}
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
        keyTimes="0;0.3;0.6;0.8;1"
      />
      <ellipse cx={cx} cy={cy} rx={9} ry={16} fill={color} opacity="0.65" />
    </g>
  )
}

function SmallAccentFlower({ color, seed }: { color: string; seed: number }) {
  const angles = [0, 72, 144, 216, 288]
  const grad_id = `saf-${seed}`
  return (
    <svg viewBox="0 0 60 60" fill="none" style={{ width: '100%', height: '100%' }}>
      <defs>
        <radialGradient id={grad_id} cx="40%" cy="25%" r="70%">
          <stop offset="0%"   stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </radialGradient>
      </defs>
      <g transform="translate(30,30)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 30 30;3 30 30;-2.5 30 30;2 30 30;0 30 30"
          dur={seed === 0 ? '7s' : '9s'}
          begin={`${seed * 1.5}s`}
          repeatCount="indefinite"
          additive="sum"
          calcMode="spline"
          keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
          keyTimes="0;0.3;0.6;0.8;1"
        />
        {angles.map((deg, i) => (
          <ellipse key={i} cx={0} cy={-16} rx={6} ry={12}
            fill={`url(#${grad_id})`}
            transform={`rotate(${deg})`}
          />
        ))}
        <circle cx={0} cy={0} r={4} fill={color} opacity="0.7" />
      </g>
    </svg>
  )
}

function LoosePetals() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx={1380} cy={450} rx={14} ry={24} fill="#F2C4CE" opacity="0.22" transform="rotate(-25 1380 450)" />
      <ellipse cx={1360} cy={480} rx={10} ry={18} fill="#FDE8EE" opacity="0.18" transform="rotate(30 1360 480)" />
      <ellipse cx={55}   cy={420} rx={11} ry={20} fill="#A8C5AC" opacity="0.2"  transform="rotate(15 55 420)" />
      <ellipse cx={75}   cy={450} rx={8}  ry={14} fill="#F2C4CE" opacity="0.16" transform="rotate(-40 75 450)" />
      <ellipse cx={720}  cy={80}  rx={10} ry={17} fill="#FDE8EE" opacity="0.15" transform="rotate(10 720 80)" />
      <ellipse cx={740}  cy={820} rx={9}  ry={16} fill="#F2C4CE" opacity="0.15" transform="rotate(-20 740 820)" />
    </svg>
  )
}
