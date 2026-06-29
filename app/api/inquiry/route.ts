import { NextRequest, NextResponse } from 'next/server'

// TODO: wire to real email provider before launch
// Options: Resend (recommended), Formspree, or direct SMTP
// TODO: confirm domain + email (bookings@djdaula.com) is live before enabling real sends

export interface InquiryPayload {
  name: string
  partnerName: string
  weddingDate: string
  venue: string
  events: string[]
  guestCount: string
  referralSource: string
}

export async function POST(request: NextRequest) {
  try {
    const body: InquiryPayload = await request.json()

    // Basic server-side validation
    if (!body.name || !body.name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!body.weddingDate) {
      return NextResponse.json({ error: 'Wedding date is required.' }, { status: 400 })
    }
    if (!body.events || body.events.length === 0) {
      return NextResponse.json({ error: 'Please select at least one event.' }, { status: 400 })
    }

    // Placeholder — log to server console until real email integration is wired
    console.log('[DJ Daula] New booking inquiry:', {
      name: body.name,
      partnerName: body.partnerName,
      weddingDate: body.weddingDate,
      venue: body.venue,
      events: body.events,
      guestCount: body.guestCount,
      referralSource: body.referralSource,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Inquiry received. Daula will be in touch within 24 hours.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
