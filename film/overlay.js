// Browser-side film overlay: a visible cursor, open captions and an end card.
// Injected with page.addInitScript, so it must be self-contained.
export function installOverlay() {
  const css = `
    html { scroll-behavior: auto !important; }
    #film-cursor, #film-caption { inset: auto; margin: 0; border: 0; overflow: visible; }
    #film-cursor { position: fixed; left: -60px; top: -60px; width: 28px; height: 28px; z-index: 2147483647; background: none; padding: 0;
      pointer-events: none; transition: left .75s cubic-bezier(.65,0,.35,1), top .75s cubic-bezier(.65,0,.35,1); }
    #film-cursor svg { width: 28px; height: 28px; display: block; }
    #film-cursor .ring { position: absolute; left: -16px; top: -16px; width: 32px; height: 32px; border-radius: 50%;
      border: 2px solid #553876; opacity: 0; transform: scale(.4); }
    #film-cursor.click .ring { animation: film-ring .55s ease-out; }
    @keyframes film-ring { 0% { opacity: .9; transform: scale(.4); } 100% { opacity: 0; transform: scale(1.8); } }
    #film-caption { position: fixed; left: 50%; bottom: 44px; transform: translate(-50%, 12px); z-index: 2147483646;
      max-width: min(1080px, 86vw); padding: 14px 26px; background: #1F2F45; color: #fff; outline: 1px solid #4F6A8C;
      font: 400 25px/1.35 Inter, Arial, sans-serif; text-align: center; opacity: 0; pointer-events: none;
      transition: opacity .35s ease, transform .35s ease; }
    #film-caption.on { opacity: 1; transform: translate(-50%, 0); }
    #film-card { position: fixed; inset: 0; z-index: 2147483645; background: #1F2F45; color: #fff; display: flex;
      flex-direction: column; justify-content: center; padding: 0 9vw; opacity: 0; pointer-events: none;
      transition: opacity .9s ease; }
    #film-card.on { opacity: 1; }
    #film-card .eyebrow { font: 700 14px/1.2 Inter, Arial, sans-serif; letter-spacing: .08em; text-transform: uppercase;
      color: #ADBCD7; display: flex; align-items: center; gap: 16px; }
    #film-card .eyebrow::before { content: ''; width: 64px; height: 1px; background: #ADBCD7; }
    #film-card h2 { font-family: 'Bodoni Moda', 'Bodoni MT', Didot, serif; font-weight: 400;
      font-size: 88px; line-height: 1.08; letter-spacing: .02em; margin: 28px 0 32px; }
    #film-card h2 em { display: block; font-style: italic; color: #D7DEEC; }
    #film-card p { font: 400 22px/1.4 Inter, Arial, sans-serif; color: #D7DEEC; max-width: 780px; margin: 0; }
    #film-card .mark { position: absolute; left: 9vw; bottom: 64px; display: flex; align-items: center; gap: 12px;
      font: 400 30px/1 'Bodoni Moda', 'Bodoni MT', Didot, serif; letter-spacing: .02em; }
    #film-card .mark svg { width: 34px; height: 34px; color: #D7DEEC; }
    #film-card .mark em { color: #ADBCD7; }
  `;
  const mount = () => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    const cursor = document.createElement('div');
    cursor.id = 'film-cursor';
    cursor.popover = 'manual';
    cursor.innerHTML = '<span class="ring"></span><svg viewBox="0 0 28 28"><path d="M4 2 L4 22 L9.5 17 L13 25 L16.5 23.5 L13 15.8 L20.5 15.8 Z" fill="#fff" stroke="#1F2F45" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    const caption = document.createElement('div');
    caption.id = 'film-caption';
    caption.popover = 'manual';
    const card = document.createElement('div');
    card.id = 'film-card';
    card.innerHTML = '<span class="eyebrow">Statsbidrag för skolan, förklarat</span>'
      + '<h2>Bidragskompassen.<em>Pengarna finns – vi visar vägen.</em></h2>'
      + '<p>Kontrollera alltid villkoren hos myndigheten innan ni söker.</p>'
      + '<span class="mark"><svg aria-hidden="true"><use href="#bk-mark"/></svg><span>Bidrags<em>kompassen</em></span></span>';
    document.body.append(card, caption, cursor);
    caption.showPopover();
    cursor.showPopover();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();

  // A modal <dialog> sits in the top layer; re-showing the popovers puts them above it again.
  const raise = () => {
    for (const id of ['film-caption', 'film-cursor']) {
      const el = document.getElementById(id);
      if (!el) return;
      el.hidePopover();
      el.showPopover();
    }
  };
  let raisedFor = null;
  const keepOnTop = () => {
    const open = document.querySelector('dialog[open]');
    if (open !== raisedFor) {
      raisedFor = open;
      raise();
    }
  };
  setInterval(keepOnTop, 50);

  window.FILM = {
    move(x, y) {
      const c = document.getElementById('film-cursor');
      c.style.left = `${x - 4}px`;
      c.style.top = `${y - 2}px`;
    },
    click() {
      const c = document.getElementById('film-cursor');
      c.classList.remove('click');
      void c.offsetWidth;
      c.classList.add('click');
    },
    caption(text) {
      const el = document.getElementById('film-caption');
      el.classList.toggle('on', Boolean(text));
      if (text) el.textContent = text;
    },
    card(on) {
      document.getElementById('film-card').classList.toggle('on', on);
    },
    // Eased scroll of the window (or an element) over a fixed duration, so camera moves are deliberate.
    scroll(target, ms, selector) {
      const el = selector ? document.querySelector(selector) : null;
      const from = el ? el.scrollTop : window.scrollY;
      const to = typeof target === 'number' ? target
        : document.querySelector(target).getBoundingClientRect().top + window.scrollY - 24;
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
      return new Promise((done) => {
        const t0 = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - t0) / ms);
          const y = from + (to - from) * ease(t);
          if (el) el.scrollTop = y; else window.scrollTo(0, y);
          if (t < 1) requestAnimationFrame(step); else done();
        };
        requestAnimationFrame(step);
      });
    },
  };
}
