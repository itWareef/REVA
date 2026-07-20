/**
 * وسيط تسجيل الدخول للوحة التحكم (Sveltia/Decap CMS) عبر GitHub.
 * ينشر على Cloudflare Workers مجاناً.
 *
 * متغيّرات البيئة المطلوبة (تُضاف في إعدادات الـ Worker → Variables):
 *   GITHUB_CLIENT_ID      ← من GitHub OAuth App
 *   GITHUB_CLIENT_SECRET  ← من GitHub OAuth App (اجعلها Secret/مشفّرة)
 *
 * في GitHub OAuth App اضبط:
 *   Homepage URL:               https://rivacontractingsa.com
 *   Authorization callback URL: https://<اسم-الوركر>.workers.dev/callback
 *
 * وفي public/admin/config.yml اضبط:
 *   backend.base_url: https://<اسم-الوركر>.workers.dev
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname, searchParams, origin } = url;

    // 1) بدء تسجيل الدخول
    if (pathname === "/auth") {
      const scope = searchParams.get("scope") || "repo,user";
      const state = crypto.randomUUID();
      const authorize = new URL("https://github.com/login/oauth/authorize");
      authorize.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      authorize.searchParams.set("redirect_uri", `${origin}/callback`);
      authorize.searchParams.set("scope", scope);
      authorize.searchParams.set("state", state);
      return new Response(null, {
        status: 302,
        headers: {
          Location: authorize.toString(),
          "Set-Cookie": `csrf=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
        },
      });
    }

    // 2) عودة GitHub بعد الموافقة
    if (pathname === "/callback") {
      const code = searchParams.get("code");
      const state = searchParams.get("state");
      const cookie = request.headers.get("Cookie") || "";
      const saved = (cookie.match(/csrf=([^;]+)/) || [])[1];

      let message;
      if (!code || !state || state !== saved) {
        message = "authorization:github:error:" + JSON.stringify({ error: "invalid_state" });
      } else {
        const res = await fetch("https://github.com/login/oauth/access_token", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
          }),
        });
        const data = await res.json();
        if (data.access_token) {
          message = "authorization:github:success:" + JSON.stringify({ token: data.access_token, provider: "github" });
        } else {
          message = "authorization:github:error:" + JSON.stringify({ error: data.error || "no_token" });
        }
      }

      const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;text-align:center;padding:40px">
<p>تم تسجيل الدخول، جارٍ إغلاق النافذة…</p>
<script>
(function () {
  function receive(e) {
    window.opener && window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener("message", receive, false);
    window.close();
  }
  window.addEventListener("message", receive, false);
  window.opener && window.opener.postMessage("authorizing:github", "*");
})();
</script></body></html>`;
      return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    return new Response("Sveltia CMS Auth broker — جاهز", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
};
