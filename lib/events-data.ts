// Shared event data — used by EventsPreview (client), events/page.tsx, and packages/page.tsx
// TODO: replace imgSrc with real photographer photos before launch

export const EVENTS = [
  {
    id: 'sangeet',
    name: 'Sangeet',
    description:
      'The high-energy night that sets the tone for the whole weekend. Deep Bhangra, peak-hour Bollywood, and the floor-filling sets your family will talk about for years.',
    badge: 'Most Booked',
    badgeColor: 'bg-daula-red text-daula-white',
    included: ['3–5 hour set', 'Full sound system', 'Custom Bhangra/Bollywood set', 'Live mic transitions'],
    // TODO: replace with real Sangeet floor shot — packed dance floor, Bhangra energy
    imgSrc: '/placeholder.svg?height=480&width=720',
    imgAlt: 'Sangeet dance floor packed with guests, Bhangra energy',
    accentLabel: 'Bhangra · Bollywood',
  },
  {
    id: 'reception',
    name: 'Wedding Reception',
    description:
      'Open-format for every guest at every table. Seamless transitions from first dance to peak floor — Hip-Hop, Top 40, Bollywood, R&B, all in one night.',
    badge: null,
    badgeColor: '',
    included: ['4–6 hour set', 'Full sound system', 'First dance coordination', 'Open-format mixing'],
    // TODO: replace with real Reception shot — couple first dance or full floor
    imgSrc: '/placeholder.svg?height=480&width=720',
    imgAlt: 'Wedding reception with couple on the dance floor',
    accentLabel: 'Hip-Hop · R&B · Open Format',
  },
  {
    id: 'mehndi',
    name: 'Mehndi / Dholki',
    description:
      'A more intimate, high-vibe gathering. Daula keeps the energy right — not too big, not too quiet — while the henna flows and the family warms up for the weekend ahead.',
    badge: null,
    badgeColor: '',
    included: ['2–4 hour set', 'Sound system', 'Coordinated playlist pacing', 'Family-friendly format'],
    // TODO: replace with Mehndi/Dholki shot — intimate setting, warm lighting
    imgSrc: '/placeholder.svg?height=480&width=720',
    imgAlt: 'Mehndi evening with guests dancing in warm lighting',
    accentLabel: 'Mehndi · Dholki',
  },
  {
    id: 'engagement',
    name: 'Engagement Party',
    description:
      'The first celebration of many. Lock in the vibe early with a set that blends backgrounds, generations, and playlists — so everyone leaves knowing this wedding is going to be different.',
    badge: null,
    badgeColor: '',
    included: ['2–4 hour set', 'Sound system', 'Mixed-audience format', 'Custom playlist consultation'],
    // TODO: replace with Engagement Party shot
    imgSrc: '/placeholder.svg?height=480&width=720',
    imgAlt: 'Engagement party guests celebrating on the dance floor',
    accentLabel: 'Mixed · Open Format',
  },
  {
    id: 'full-weekend',
    name: 'Full Weekend Package',
    description:
      'One DJ across every night of your wedding weekend. No handoffs, no inconsistency — just Daula reading the same crowd from night one through the last song of the reception.',
    badge: 'Best Value',
    badgeColor: 'bg-daula-gold text-daula-black',
    included: ['All events covered', 'Consistent DJ across every night', 'Custom set planning per event', 'Priority booking'],
    // TODO: replace with Full Weekend collage or reception wide shot
    imgSrc: '/placeholder.svg?height=480&width=720',
    imgAlt: 'Full wedding weekend dance floor moments across multiple events',
    accentLabel: 'All Events · One DJ',
  },
] as const
