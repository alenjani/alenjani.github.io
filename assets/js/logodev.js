// logo.dev image-CDN helper
//
// To activate: paste your publishable key into the <meta name="logodev-token">
// tag in each HTML <head>. Without a key, all `[data-logo-domain]` elements
// are hidden gracefully (no broken images, no failed requests).
//
// Markup pattern:
//   <img data-logo-domain="netflix.com" alt="Netflix" class="brand-mark" />
//   <img data-logo-domain="netflix.com" data-logo-size="48" data-logo-theme="dark" alt="Netflix" />
//
// Free tier (500K req/mo) requires attribution. When you flip the key on,
// also add <a href="https://logo.dev">Logos provided by Logo.dev</a> to the
// footer — see POSITIONING.md for the activation checklist.

(function () {
  function getToken() {
    if (typeof window !== 'undefined' && window.LOGODEV_TOKEN) return window.LOGODEV_TOKEN;
    var meta = document.querySelector('meta[name="logodev-token"]');
    return (meta && meta.getAttribute('content')) || '';
  }

  function buildUrl(domain, opts) {
    opts = opts || {};
    var token = opts.token || getToken();
    if (!token || !domain) return null;
    var params = new URLSearchParams();
    params.set('token', token);
    params.set('size', String(opts.size || 128));
    params.set('format', opts.format || 'webp');
    params.set('retina', String(opts.retina !== false));
    if (opts.theme) params.set('theme', opts.theme);
    if (opts.greyscale) params.set('greyscale', 'true');
    if (opts.fallback) params.set('fallback', opts.fallback);
    return 'https://img.logo.dev/' + encodeURIComponent(domain) + '?' + params.toString();
  }

  function hydrate(root) {
    root = root || document;
    var token = getToken();
    var nodes = root.querySelectorAll('[data-logo-domain]');
    nodes.forEach(function (node) {
      var domain = node.getAttribute('data-logo-domain');
      if (!domain) return;
      if (!token) {
        node.style.display = 'none';
        return;
      }
      var url = buildUrl(domain, {
        size: node.getAttribute('data-logo-size'),
        format: node.getAttribute('data-logo-format'),
        theme: node.getAttribute('data-logo-theme'),
        greyscale: node.getAttribute('data-logo-greyscale') === 'true',
        fallback: node.getAttribute('data-logo-fallback') || 'monogram',
        retina: node.getAttribute('data-logo-retina') !== 'false',
      });
      if (!url) return;
      if (node.tagName === 'IMG') {
        node.src = url;
        if (!node.getAttribute('alt')) node.setAttribute('alt', domain);
        node.setAttribute('loading', 'lazy');
        node.removeAttribute('data-logo-domain');
      } else {
        node.style.backgroundImage = "url('" + url + "')";
      }
    });
  }

  if (typeof window !== 'undefined') {
    window.logoDev = { url: buildUrl, hydrate: hydrate, getToken: getToken };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { hydrate(); });
    } else {
      hydrate();
    }
  }
})();
