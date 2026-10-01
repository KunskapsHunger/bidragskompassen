/* Bidragskompassen – fördjupning: page frame. Hero with the grant's own basics, snabbfakta panel,
 * sticky section tabs that follow the scroll, print button, sections, and the friendly error state. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  SB.fd = SB.fd || {};

  function root() { return document.getElementById('fd-root'); }

  /** Shared section head: "01 — Reglerna", Bodoni heading with italic part, ingress. */
  function sectionHead(number, label, eyebrow, rubrik, kursiv, ingress, titleId) {
    return h('header', { class: 'section-head' }, [
      h('p', { class: 'section-head__meta label-caps', 'data-reveal': true }, [h('span', { text: number + ' — ' + label }), eyebrow ? h('span', { text: eyebrow }) : null]),
      h('h2', { class: 'section-head__title', id: titleId, 'data-split': true }, [rubrik ? rubrik + ' ' : '', kursiv ? h('em', { text: kursiv }) : null]),
      ingress ? h('p', { class: 'section-head__lead', 'data-reveal': true, style: { '--i': '2' }, text: ingress }) : null
    ]);
  }

  function findGrant(id) {
    var list = core.prepareGrants(window.SB_GRANTS);
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function basics(grant) {
    if (!grant) return null;
    var today = core.isoFromDate(new Date());
    var st = core.grantStatus(grant, today);
    var deadline = core.nextDeadline(grant, today);
    var stored = dom.storage.get('sb.organiser', core.DEFAULT_ORGANISER);
    var org = core.findById(core.ORGANISERS, stored) || core.findById(core.ORGANISERS, core.DEFAULT_ORGANISER);
    var elig = core.eligibility(grant, org.id);
    var who = org.id === 'alla'
      ? h('dd', null, dom.eligList(grant, 'alla', true))
      : h('dd', null, [h('span', { class: 'fd-basics__sym', 'aria-hidden': 'true', text: core.ELIG[elig].symbol + ' ' }),
        core.ELIG[elig].label, h('span', { class: 'fd-basics__org', text: ' (' + org.label.toLowerCase() + ')' })]);
    return h('div', { class: 'fd-basics', 'data-reveal': true, style: { '--i': '4' } }, [
      h('p', { class: 'label-caps fd-basics__kicker', text: grant.myndighet + ' · ' + core.labelOf(core.TYPER, grant.typ) }),
      h('dl', { class: 'fd-basics__list' }, [
        h('div', null, [h('dt', { text: 'Status' }), h('dd', null, [dom.statusTag(st), ' ', core.statusText(st)])]),
        h('div', null, [h('dt', { text: 'Nästa sista dag' }), h('dd', { text: deadline ? core.formatDate(deadline, { long: true }) : 'Inget datum känt just nu' })]),
        h('div', null, [h('dt', { text: org.id === 'alla' ? 'Vem kan söka?' : 'Kan ni söka?' }), who])
      ]),
      h('a', { class: 'fd-basics__more', href: 'index.html#bidrag/' + grant.id }, ['Datum, villkor och källor i Bidragskompassen', h('span', { 'aria-hidden': 'true', text: ' →' })])
    ]);
  }

  /** Long single words in Bodoni get wide fast – scale the headline by its longest word. */
  function titleScale(guide) {
    var longest = (guide.rubrik + ' ' + (guide.rubrikKursiv || '')).split(/\s+/).reduce(function (m, w) { return Math.max(m, w.length); }, 0);
    return String(longest <= 11 ? 1 : longest <= 15 ? 0.78 : longest <= 19 ? 0.64 : 0.54);
  }

  function hero(guide, grant) {
    var calc = (guide.kalkylatorer || [])[0];
    var facts = guide.snabbfakta || [];
    return h('section', { class: 'fd-hero', 'aria-labelledby': 'fd-title' }, h('div', { class: 'wrap fd-hero__grid' }, [
      h('div', { class: 'fd-hero__main' }, [
        h('p', { class: 'label-caps fd-eyebrow', 'data-reveal': true }, ['Fördjupning', guide.forordning && guide.forordning.sfs ? ' · Förordning ' + guide.forordning.sfs : '']),
        h('h1', { class: 'fd-title', id: 'fd-title', 'data-split': true, style: { '--fd-title-scale': titleScale(guide) } }, [guide.rubrik + ' ', guide.rubrikKursiv ? h('em', { text: guide.rubrikKursiv }) : null]),
        h('p', { class: 'fd-ingress', 'data-reveal': true, style: { '--i': '2' }, text: guide.ingress }),
        h('div', { class: 'fd-actions', 'data-reveal': true, style: { '--i': '3' } }, [
          calc ? h('a', { class: 'btn btn--primary', href: '#rakna-' + calc.id }, ['Prova räknaren', h('span', { class: 'arrow', 'aria-hidden': 'true', text: ' →' })]) : null,
          h('a', { class: 'link-btn', href: '#regler', text: 'Läs reglerna i korthet' })
        ]),
        basics(grant)
      ]),
      facts.length ? h('aside', { class: 'fd-facts on-dark', 'aria-labelledby': 'fd-facts-title', 'data-reveal': true, style: { '--i': '3' } }, [
        h('h2', { class: 'label-caps fd-facts__title', id: 'fd-facts-title', text: guide.snabbfaktaRubrik || 'Bra att veta först' }),
        h('ol', { class: 'fd-facts__list' }, facts.map(function (f, i) {
          return h('li', { class: 'fd-facts__item' }, [
            h('span', { class: 'fd-facts__num', 'aria-hidden': 'true', text: dom.pad2(i + 1) }),
            h('div', null, [h('h3', { class: 'fd-facts__rubrik', text: f.rubrik }), h('p', { text: f.text })])
          ]);
        })),
        guide.snabbfaktaNot ? h('p', { class: 'fd-facts__note', text: guide.snabbfaktaNot }) : null
      ]) : null
    ]));
  }

  function tabs(sections) {
    var links = sections.map(function (s) {
      return h('li', null, h('a', { class: 'fd-tab', href: '#' + s.id, 'data-target': s.id }, [h('span', { class: 'fd-tab__num', text: s.number + ' · ' }), s.label]));
    });
    var print = h('button', { type: 'button', class: 'link-btn fd-print' }, ['Skriv ut / spara PDF', h('span', { 'aria-hidden': 'true', text: ' ↗' })]);
    print.addEventListener('click', function () { window.print(); });
    return h('nav', { class: 'fd-tabs', 'aria-label': 'Fördjupningens avsnitt' }, [
      h('div', { class: 'wrap fd-tabs__inner' }, [h('ul', { class: 'fd-tabs__list' }, links), print]),
      h('span', { class: 'fd-tabs__progress', 'aria-hidden': 'true' })
    ]);
  }

  /** Highlight the tab of the section currently under the sticky bar; progress hairline. */
  function scrollSpy(nav, sections) {
    var anchors = dom.$$('.fd-tab', nav);
    var list = dom.$('.fd-tabs__list', nav);
    var bar = dom.$('.fd-tabs__progress', nav);
    var current = null;
    var ticking = false;
    function update() {
      ticking = false;
      var limit = nav.getBoundingClientRect().bottom + 48;
      var active = sections[0].id;
      sections.forEach(function (s) {
        var el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= limit) active = s.id;
      });
      var total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (total > 0 ? Math.min(1, window.scrollY / total) : 0).toFixed(3) + ')';
      if (active === current) return;
      current = active;
      anchors.forEach(function (a) {
        var on = a.getAttribute('data-target') === active;
        a.classList.toggle('is-active', on);
        if (on) {
          a.setAttribute('aria-current', 'location');
          var left = a.parentNode.offsetLeft;
          if (left < list.scrollLeft || left + a.offsetWidth > list.scrollLeft + list.clientWidth) list.scrollLeft = Math.max(0, left - 16);
        } else a.removeAttribute('aria-current');
      });
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function render(guide) {
    var host = root();
    var grant = findGrant(guide.id);
    var sections = core.guideSections(guide);
    var sek = guide.sektioner || {};
    document.title = (guide.rubrik + (guide.rubrikKursiv ? ' ' + guide.rubrikKursiv : '')).replace(/[.!?]$/, '') + ' – Fördjupning – Bidragskompassen';
    var back = document.getElementById('fd-back');
    if (back) back.setAttribute('href', 'index.html#bidrag/' + guide.id);

    var regler = h('section', { class: 'section fd-section', id: 'regler', 'aria-labelledby': 'regler-title' }, h('div', { class: 'wrap' }, [
      sectionHead(sections[0].number, 'Reglerna', guide.forordning && guide.forordning.sfs ? 'Förordning ' + guide.forordning.sfs : '',
        (sek.regler && sek.regler.rubrik) || 'Reglerna', (sek.regler && sek.regler.rubrikKursiv) || 'i klartext.', sek.regler && sek.regler.ingress, 'regler-title')
    ]));
    SB.fd.paragrafer.render(dom.$('.wrap', regler), guide);

    var calcs = (guide.kalkylatorer || []).map(function (k, i) {
      var s = sections[i + 1];
      var sec = h('section', { class: 'section fd-section' + (i % 2 === 0 ? ' section--tint' : ''), id: s.id, 'aria-labelledby': s.id + '-title' }, h('div', { class: 'wrap' }, [
        sectionHead(s.number, s.label, k.eyebrow, k.rubrik, k.rubrikKursiv, k.ingress, s.id + '-title')
      ]));
      SB.fd.kalkylator.render(dom.$('.wrap', sec), guide, k);
      return sec;
    });

    var ps = sections[sections.length - 1];
    var praktik = h('section', { class: 'section fd-section', id: 'praktiken', 'aria-labelledby': 'praktiken-title' }, h('div', { class: 'wrap' }, [
      sectionHead(ps.number, 'I praktiken', 'Från beslut till uppföljning', (sek.praktik && sek.praktik.rubrik) || 'Så används', (sek.praktik && sek.praktik.rubrikKursiv) || 'reglerna.', sek.praktik && sek.praktik.ingress, 'praktiken-title')
    ]));
    SB.fd.praktik.render(dom.$('.wrap', praktik), guide);

    var nav = tabs(sections);
    dom.append(dom.clear(host), [hero(guide, grant), nav, regler].concat(calcs, [praktik, SB.fd.praktik.sources(guide)]));
    host.classList.remove('fd-loading', 'wrap');
    SB.motion.observe(host);
    scrollSpy(nav, sections);
    SB.fd.paragrafer.followHash();
  }

  function error(id, kind) {
    var host = root();
    host.classList.remove('fd-loading');
    document.title = 'Fördjupningen hittades inte – Bidragskompassen';
    dom.append(dom.clear(host), h('section', { class: 'fd-error', 'aria-labelledby': 'fd-error-title' }, [
      h('p', { class: 'label-caps fd-eyebrow', text: 'Fördjupning' }),
      h('h1', { class: 'fd-title', id: 'fd-error-title' }, kind === 'laddning'
        ? ['Fördjupningen kunde ', h('em', { text: 'inte laddas.' })]
        : ['Den här fördjupningen ', h('em', { text: 'finns inte.' })]),
      h('p', { class: 'fd-ingress', text: kind === 'laddning'
        ? 'Något gick fel när sidan skulle hämta innehållet. Ladda om sidan och försök igen.'
        : 'Länken kan vara fel, eller så finns det ännu ingen fördjupning för det här bidraget. Alla bidrag finns i Bidragskompassen.' }),
      h('a', { class: 'btn btn--primary', href: id && kind === 'laddning' ? 'index.html#bidrag/' + id : 'index.html#alla-bidrag' }, [
        h('span', { 'aria-hidden': 'true', text: '← ' }), 'Till alla bidrag'])
    ]));
    var title = document.getElementById('fd-error-title');
    if (title) { title.setAttribute('tabindex', '-1'); title.focus({ preventScroll: true }); }
  }

  SB.fd.page = { render: render, error: error, sectionHead: sectionHead };
})();
