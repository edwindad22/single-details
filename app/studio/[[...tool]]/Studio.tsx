'use client'

import NextDynamic from 'next/dynamic'
import config from '@/sanity.config'

const NextStudio = NextDynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function Studio() {
  return <NextStudio config={config} />
}
