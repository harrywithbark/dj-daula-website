import { NextRequest, NextResponse } from 'next/server'

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

    if (!body.name?.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!body.weddingDate) {
      return NextResponse.json({ error: 'Wedding date is required.' }, { status: 400 })
    }
    if (!body.events?.length) {
      return NextResponse.json({ error: 'Please select at least one event.' }, { status: 400 })
    }

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
