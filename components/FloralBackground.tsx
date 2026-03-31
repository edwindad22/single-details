export default function FloralBackground() {
  return (
    <div
      className="fixed inset-0 z-20 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-8 -right-8 w-[380px] h-[380px] opacity-75 sm:w-[420px] sm:h-[420px] floral-cluster-tr" style={{ perspective: '900px' }}>
        <FloralCluster variant="top-right" />
      </div>

      <div className="absolute -bottom-8 -left-8 w-[340px] h-[340px] opacity-70 sm:w-[400px] sm:h-[400px] floral-cluster-bl" style={{ perspective: '900px' }}>
        <FloralCluster variant="bottom-left" />
      </div>

      <div className="absolute top-1/2 right-2 -translate-y-1/2 w-16 h-16 opacity-30">
        <SmallAccentFlower color="#F2C4CE" seed={0} />
      </div>

      <div className="absolute top-1/4 left-3 w-12 h-12 opacity-25">
        <SmallAccentFlower color="#A8C5AC" seed={1} />
      </div>

      <LoosePetals />
    </div>
  )
}

function FloralCluster({ variant }: { variant: 'top-right' | 'bottom-left' }) {
  const flip = variant === 'bottom-left'
  const tf   = flip ? 'scale(-1,-1)' : undefined
  const id   = variant

  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: tf, width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id={`pa-${id}`} cx="40%" cy="25%" r="75%">
          <stop offset="0%"   stopColor="#FEF0F4" stopOpacity="1" />
          <stop offset="50%"  stopColor="#F2C4CE" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D48090" stopOpacity="0.55" />
        </radialGradient>
        <radialGradient id={`pb-${id}`} cx="40%" cy="25%" r="75%">
          <stop offset="0%"   stopColor="#FDE8EE" stopOpacity="1" />
          <stop offset="55%"  stopColor="#E8A0B0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C97080" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient id={`pc-${id}`} cx="40%" cy="20%" r="70%">
          <stop offset="0%"   stopColor="#FFF5F7" stopOpacity="1" />
          <stop offset="60%"  stopColor="#F2C4CE" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D48090" stopOpacity="0.45" />
        </radialGradient>
        <radialGradient id={`pctr-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FDE8EE" stopOpacity="1" />
          <stop offset="100%" stopColor="#C97080" stopOpacity="0.7" />
        </radialGradient>
        <radialGradient id={`pbud-${id}`} cx="40%" cy="25%" r="70%">
          <stop offset="0%"   stopColor="#FFF0F4" stopOpacity="1" />
          <stop offset="70%"  stopColor="#F2C4CE" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#D48090" stopOpacity="0.45" />
        </radialGradient>
        <linearGradient id={`ll1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#B8D4BB" stopOpacity="0.9" />
          <stop offset="50%"  stopColor="#7A9E7E" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#4E7255" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`ll2-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#A8C5AC" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#5F8565" stopOpacity="0.5" />
        </linearGradient>
        <filter id={`fs-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#C97080" floodOpacity="0.22" />
        </filter>
        <filter id={`fb-${id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
      </defs>

      {/* Background layer — blurred for depth */}
      <g filter={`url(#fb-${id})`} opacity="0.55">
        <RoseSVG cx={85}  cy={100} r={38} pg={`pa-${id}`} cg={`pctr-${id}`} windDur="11s" windDelay="0s" windAmt={1.5} />
        <RoseSVG cx={200} cy={130} r={50} pg={`pa-${id}`} cg={`pctr-${id}`} windDur="13s" windDelay="2s" windAmt={1.2} />
        <BudSVG  cx={310} cy={80}  r={28} pg={`pbud-${id}`}                  windDur="9s"  windDelay="1s" windAmt={2} />
      </g>

      {/* Leaves — mid-layer with independent sway */}
      <g opacity="0.85">
        <LeafSVG cx={195} cy={260} rx={10} ry={52} rotate={-35} grad={`ll1-${id}`} windDur="6s"  windDelay="0.5s" />
        <LeafSVG cx={290} cy={195} rx={8}  ry={42} rotate={55}  grad={`ll2-${id}`} windDur="7.5s" windDelay="1.8s" />
        <LeafSVG cx={130} cy={175} rx={7}  ry={30} rotate={-70} grad={`ll1-${id}`} windDur="5.5s" windDelay="0.2s" />
        <LeafSVG cx={340} cy={145} rx={6}  ry={26} rotate={25}  grad={`ll2-${id}`} windDur="8s"   windDelay="2.5s" />
        <LeafSVG cx={360} cy={270} rx={9}  ry={46} rotate={70}  grad={`ll1-${id}`} windDur="6.5s" windDelay="1.2s" />
      </g>

      {/* Foreground — sharp with shadow for 3D lift */}
      <g filter={`url(#fs-${id})`}>
        <RoseSVG cx={295} cy={70}  r={75} pg={`pa-${id}`} cg={`pctr-${id}`} windDur="8s"   windDelay="0s"   windAmt={1.8} />
        <RoseSVG cx={155} cy={205} r={60} pg={`pb-${id}`} cg={`pctr-${id}`} windDur="10s"  windDelay="1.5s" windAmt={1.4} />
        <RoseSVG cx={320} cy={220} r={44} pg={`pc-${id}`} cg={`pctr-${id}`} windDur="7s"   windDelay="0.8s" windAmt={2} />
      </g>

      {/* Buds */}
      <g opacity="0.9">
        <BudSVG cx={90}  cy={195} r={22} pg={`pbud-${id}`} windDur="7s"  windDelay="0.3s" windAmt={2.5} />
        <BudSVG cx={385} cy={160} r={18} pg={`pbud-${id}`} windDur="9s"  windDelay="2.2s" windAmt={2} />
        <BudSVG cx={250} cy={290} r={20} pg={`pbud-${id}`} windDur="6s"  windDelay="1s"   windAmt={2.2} />
      </g>

      {/* Scattered loose petals */}
      <g opacity="0.5">
        <LoosePetalSVG cx={50}  cy={240} rotate={20}  color="#F2C4CE" windDur="5s"   windDelay="0s" />
        <LoosePetalSVG cx={370} cy={310} rotate={-40} color="#FDE8EE" windDur="6.5s" windDelay="1.5s" />
        <LoosePetalSVG cx={140} cy={330} rotate={60}  color="#E8A0B0" windDur="4.5s" windDelay="0.7s" />
        <LoosePetalSVG cx={400} cy={55}  rotate={-15} color="#F2C4CE" windDur="7s"   windDelay="2s" />
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
  cx, cy, r, pg, windDur, windDelay, windAmt = 2,
}: { cx: number; cy: number; r: number; pg: string; windDur: string; windDelay: string; windAmt?: number }) {
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
      <ellipse cx={cx} cy={cy + r * 0.3} rx={r * 0.22} ry={r * 0.55} fill="#7A9E7E" opacity="0.6" />
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
