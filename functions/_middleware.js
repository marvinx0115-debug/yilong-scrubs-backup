export function onRequest(context) {
  var country = context.request.cf && context.request.cf.country;
  if (country === "CN") {
    return new Response(
      '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>500 Internal Server Error</title></head><body style="font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;background:#f5f5f5;color:#333"><div style="text-align:center;padding:2rem;max-width:600px"><h1 style="font-size:28px;margin:0 0 12px;color:#dc2626">500 Internal Server Error</h1><p style="font-size:16px;color:#666;margin:0 0 24px;line-height:1.6">The server encountered an unexpected condition that prevented it from fulfilling the request.</p><p style="font-size:13px;color:#999;margin:0">Please try again later.</p></div></body></html>',
      { status: 503, headers: { "Content-Type": "text/html; charset=utf-8", "Retry-After": "3600" } }
    );
  }
  return context.next();
}
