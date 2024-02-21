import Ticket from '../models/Ticket';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
