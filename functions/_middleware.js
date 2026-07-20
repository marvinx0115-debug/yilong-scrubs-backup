// Cloudflare Pages Functions - 301 重定向中间件
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;

  // non-www → www 重定向（yilongscrubs.com 和 yilongscrub.com）
  if (hostname === 'yilongscrubs.com' || hostname === 'yilongscrub.com') {
    url.hostname = 'www.yilongscrubs.com';
    return Response.redirect(url.toString(), 301);
  }

  // www.yilongscrub.com → www.yilongscrubs.com
  if (hostname === 'www.yilongscrub.com') {
    url.hostname = 'www.yilongscrubs.com';
    return Response.redirect(url.toString(), 301);
  }

  // 路径别名重定向
  if (pathname === '/about/' || pathname === '/about') {
    url.pathname = '/about-us/';
    return Response.redirect(url.toString(), 301);
  }
  if (pathname === '/fabric-tech/' || pathname === '/fabric-tech') {
    url.pathname = '/fabric-technology/';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}