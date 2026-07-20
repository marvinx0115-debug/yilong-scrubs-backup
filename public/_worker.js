// Cloudflare Pages Worker - 301 重定向
// 此文件会被 Astro 复制到 dist/_worker.js，配合 wrangler --no-bundle 部署生效
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const hostname = url.hostname;
    const pathname = url.pathname;

    // non-www → www
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

    // 其他请求 → 正常处理
    return env.ASSETS.fetch(request, env, ctx);
  }
};