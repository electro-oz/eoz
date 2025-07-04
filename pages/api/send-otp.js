// pages/api/send-otp.js
import { createClient }    from '@supabase/supabase-js'
import Twilio             from 'twilio'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
const twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { phone } = req.body
  const otp = Math.floor(100000 + Math.random() * 900000).toString()

  // 1) Send SMS
  await twilio.messages.create({
    body: `Your EOz verification code is ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone
  })

  // 2) Store in Supabase with 5-minute expiry
  const expires_at = new Date(Date.now() + 5 * 60 * 1000).toISOString()
  await supabase
    .from('otps')
    .insert([{ phone, code: otp, expires_at }])

  return res.status(200).json({ success: true })
}
