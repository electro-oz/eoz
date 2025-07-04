import fetch from 'node-fetch';
export default async function handler(req, res) {
  const { token } = req.body;
  const secret = process.env.HCAPTCHA_SECRET;
  const verifyRes = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });
  const json = await verifyRes.json();
  if (json.success) return res.status(200).json({ ok: true });
  return res.status(400).json({ ok: false, error: json['error-codes'] });
}
