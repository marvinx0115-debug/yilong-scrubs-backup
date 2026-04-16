export function onRequest(context) {
  var country = context.request.cf && context.request.cf.country;
  if (country === "CN") {
    return new Response(
      "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>404 Not Found</title></head><body style=\"font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;background:#fff;color:#333\"><div style=\"text-align:center;max-width:600px;padding:2rem\"><h1 style=\"font-size:72px;margin:0 0 16px;font-weight:300;color:#999\">404</h1><p style=\"font-size:18px;margin:0 0 8px;color:#333\">Not Found</p><p style=\"font-size:14px;margin:0 0 24px;color:#999;line-height:1.6\">The requested resource could not be found on this server.</p><hr style=\"border:none;border-top:1px solid #eee;margin:0 0 16px\"><p style=\"font-size:12px;margin:0;color:#bbb\">nginx/1.24.0</p></div></body></html>",
      { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
  return context.next();
}
