import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Reservation request:', body);
    return NextResponse.json({ success: true, message: 'Reservation request received' });
  } catch (error) {
    console.error('Reservation error:', error);
    return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 500 });
  }
}
