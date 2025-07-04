// pages/api/verify-otp.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { phone, code } = req.body

  // 1) Look up the latest, unexpired OTP for this phone
  const { data, error } = await supabase
    .from('otps')
    .select('code,expires_at')
    .eq('phone', phone)
    .order('id', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) {
    return res.status(400).json({ success: false, message: 'No OTP found' })
  }

  // 2) Validate
  if (data.code !== code || new Date(data.expires_at) < new Date()) {
    return res.status(400).json({ success: false, message: 'Invalid or expired code' })
  }

  // 3) (Optional) delete it so it can’t be re-used
  await supabase
    .from('otps')
    .delete()
    .eq('phone', phone)
    .eq('code', code)

  // 4) Success!
  return res.status(200).json({ success: true })
}
