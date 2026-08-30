'use client'

import { useState } from 'react'
import { Header } from '@/components/pipull/header'
import { Hero } from '@/components/pipull/hero'
import { GigMarketplace } from '@/components/pipull/gig-marketplace'
import { TalentRoster } from '@/components/pipull/talent-roster'
import { TrustSection } from '@/components/pipull/trust-section'
import { InsightsFeed } from '@/components/pipull/insights-feed'
import { Footer } from '@/components/pipull/footer'
import { BookingTray, type BookingItem } from '@/components/pipull/booking-tray'
import type { Gig, Student } from '@/lib/pipull-data'

export default function Page() {
  const [tray, setTray] = useState<BookingItem[]>([])
  const [trayOpen, setTrayOpen] = useState(false)

  function bookGig(gig: Gig) {
    setTray((prev) => {
      if (prev.some((i) => i.id === gig.id)) return prev
      return [
        ...prev,
        {
          id: gig.id,
          title: gig.title,
          provider: gig.provider,
          avatarColor: gig.avatarColor,
          turnaround: gig.turnaround,
          price: gig.price,
          kind: 'gig',
        },
      ]
    })
    setTrayOpen(true)
  }

  function hireStudent(student: Student) {
    const id = `req-${student.id}`
    setTray((prev) => {
      if (prev.some((i) => i.id === id)) return prev
      return [
        ...prev,
        {
          id,
          title: `Custom ${student.primarySkill} request`,
          provider: student.name,
          avatarColor: student.avatarColor,
          turnaround: 'Scope to be agreed',
          price: 25,
          kind: 'request',
        },
      ]
    })
    setTrayOpen(true)
  }

  function removeItem(id: string) {
    setTray((prev) => prev.filter((i) => i.id !== id))
  }

  const trayGigIds = tray.map((i) => i.id)

  return (
    <div className="min-h-dvh bg-background">
      <Header cartCount={tray.length} onCartClick={() => setTrayOpen(true)} />
      <main>
        <Hero />
        <GigMarketplace trayIds={trayGigIds} onBook={bookGig} />
        <TrustSection />
        <TalentRoster onHire={hireStudent} />
        <InsightsFeed />
      </main>
      <Footer />
      <BookingTray
        open={trayOpen}
        items={tray}
        onClose={() => setTrayOpen(false)}
        onRemove={removeItem}
      />
    </div>
  )
}
