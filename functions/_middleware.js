// Cloudflare Pages Function Middleware
// Blocks access from mainland China IP addresses

export function onRequest(context) {
  var country = context.request.cf && context.request.cf.country;
  if (country === "CN") {
    return new Response(
      "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Access Denied</title>"
      + "<style>body{display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;font-family:sans-serif;background:#f8fafc;color:#1e293b}"
      + ".msg{text-align:center;padding:2rem}</style></head>"
      + "<body><div class=\"msg\"><h1>403</h1>"
      + "<p>This site is not available in your region.</p></div></body></html>",
      { status: 403, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
  return context.next();
}
