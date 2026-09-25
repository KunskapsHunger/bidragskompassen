/* Bidragskompassen – "Så gör du" scroll story, fristående panel, glossary (search + A–Ö) and FAQ. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'.split('');

  function arr(v) { return Array.isArray(v) ? v : []; }
  function str(v) { return typeof v === 'string' ? v : ''; }

  function renderSteps(guide) {
    var host = document.getElementById('guide-steps');
    var steps = arr(guide.steg).filter(function (st) { return st && str(st.rubrik); });
    if (!steps.length) { host.appendChild(h('p', { text: 'Stegen läggs till snart.' })); return; }
    var railNum = h('span', { class: 'story__num-inner', text: '01' });
    var bar = h('span', { class: 'story__bar' });
    var items = steps.map(function (st, i) {
      return h('li', { class: 'story__step', 'data-index': String(i), 'data-reveal': true }, [
        h('span', { class: 'story__inline-num', 'aria-hidden': 'true', text: dom.pad2(i + 1) }),
        h('h3', { class: 'story__title' }, [h('span', { class: 'sr-only', text: 'Steg ' + (i + 1) + ': ' }), str(st.rubrik)]),
        h('p', { class: 'story__text', text: str(st.text) }),
        arr(st.detaljer).length ? h('ul', { class: 'story__details' }, arr(st.detaljer).map(function (d) { return h('li', { text: str(d) }); })) : null
      ]);
    });
    host.appendChild(h('div', { class: 'story' }, [
      h('div', { class: 'story__rail', 'aria-hidden': 'true' }, [
        h('div', { class: 'story__sticky' }, [h('span', { class: 'story__num' }, railNum), h('span', { class: 'story__total', text: '/ ' + dom.pad2(steps.length) }), h('span', { class: 'story__progress' }, bar)])
      ]),
      h('ol', { class: 'story__steps' }, items)
    ]));

    var current = -1;
    function setCurrent(i) {
      if (i === current) return;
      current = i;
      railNum.textContent = dom.pad2(i + 1);
      railNum.classList.remove('is-swap');
      void railNum.offsetWidth;
      railNum.classList.add('is-swap');
      items.forEach(function (el, idx) { el.classList.toggle('is-current', idx === i); });
    }
    setCurrent(0);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setCurrent(+e.target.getAttribute('data-index')); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      items.forEach(function (el) { io.observe(el); });
    }
    var list = dom.$('.story__steps', host);
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        var r = list.getBoundingClientRect();
        var vh = window.innerHeight;
        var p = Math.min(1, Math.max(0, (vh * 0.5 - r.top) / Math.max(1, r.height)));
        bar.style.transform = 'scaleY(' + p.toFixed(3) + ')';
      });
    }, { passive: true });
  }

  function renderFristaende(guide) {
    var host = document.getElementById('guide-fristaende');
    var items = arr(guide.fristaende).filter(function (f) { return f && str(f.rubrik); });
    var kalender = str(guide.kalenderNot);
    if (!items.length && !kalender) return;
    host.appendChild(h('div', { class: 'fri on-dark' }, h('div', { class: 'wrap' }, [
      h('div', { class: 'fri__head' }, [
        h('p', { class: 'label-caps fri__kicker', text: 'Särskilt för fristående huvudmän' }),
        h('h3', { class: 'fri__title', 'data-split': true }, ['Driver ni en fristående skola? ', h('em', { text: 'Det här är bra att veta.' })])
      ]),
      items.length ? h('ul', { class: 'fri__grid' }, items.map(function (f, i) {
        return h('li', { class: 'fri__item', 'data-reveal': true, style: { '--i': String(i % 4) } }, [
          h('h4', { class: 'fri__item-title', text: str(f.rubrik) }), h('p', { text: str(f.text) })
        ]);
      })) : null,
      kalender ? h('aside', { class: 'fri__calendar', 'aria-label': 'Bidragsåret' }, [
        h('p', { class: 'label-caps', text: 'Bidragsåret i korthet' }), h('p', { class: 'fri__calendar-text', text: kalender })
      ]) : null
    ])));
  }

  function firstLetter(term) {
    var c = term.trim().charAt(0).toUpperCase();
    return ALPHABET.indexOf(c) !== -1 ? c : '#';
  }

  function renderLexicon(guide) {
    var host = document.getElementById('lexicon');
    var terms = arr(guide.ordlista).filter(function (o) { return o && str(o.term); })
      .slice().sort(function (a, b) { return a.term.localeCompare(b.term, 'sv'); });
    var faq = arr(guide.faq).filter(function (f) { return f && str(f.fraga); });

    var input = h('input', { id: 'lex-q', type: 'search', class: 'catalog__input', autocomplete: 'off', placeholder: 'Till exempel huvudman eller rekvisition' });
    var status = h('p', { class: 'lex__status small', role: 'status', 'aria-live': 'polite' });
    var index = h('nav', { class: 'lex__index', 'aria-label': 'Ordlistan från A till Ö' });
    var dl = h('div', { class: 'lex__groups' });

    function draw(q) {
      var tokens = core.tokenize(q);
      var shown = terms.filter(function (t) {
        if (!tokens.length) return true;
        var hay = core.normalize(t.term + ' ' + t.forklaring);
        return tokens.every(function (tok) { return hay.indexOf(tok) !== -1; });
      });
      var groups = {};
      shown.forEach(function (t) { var l = firstLetter(t.term); (groups[l] = groups[l] || []).push(t); });
      dom.clear(index);
      dom.append(index, h('ul', { class: 'lex__letters' }, ALPHABET.map(function (l) {
        return h('li', null, groups[l]
          ? h('a', { href: '#ord-' + l, class: 'lex__letter', text: l })
          : h('span', { class: 'lex__letter is-empty', text: l, 'aria-hidden': 'true' }));
      })));
      dom.clear(dl);
      Object.keys(groups).sort(function (a, b) { return a.localeCompare(b, 'sv'); }).forEach(function (l) {
        dl.appendChild(h('section', { class: 'lex__group', 'aria-labelledby': 'ord-' + l }, [
          h('h4', { class: 'lex__glyph', id: 'ord-' + l, tabindex: '-1', text: l }),
          h('dl', { class: 'lex__dl' }, groups[l].map(function (t) {
            return h('div', { class: 'lex__entry' }, [
              h('dt', null, dom.highlight(t.term, q)), h('dd', null, dom.highlight(str(t.forklaring), q))
            ]);
          }))
        ]));
      });
      status.textContent = tokens.length
        ? (shown.length ? dom.plural(shown.length, 'ord', 'ord') + ' matchar.' : 'Inget ord matchar. Prova ett kortare ord.')
        : terms.length + ' ord i ordlistan.';
    }
    input.addEventListener('input', dom.debounce(function () { draw(input.value); }, 120));
    index.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      e.preventDefault();
      var target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) { target.scrollIntoView({ behavior: SB.motion.isReduced() ? 'auto' : 'smooth', block: 'start' }); target.focus({ preventScroll: true }); }
    });

    var faqList = h('div', { class: 'faq' }, faq.map(function (f) {
      return h('details', { class: 'faq__item' }, [
        h('summary', { class: 'faq__q' }, [h('span', { text: f.fraga }), h('span', { class: 'faq__icon', 'aria-hidden': 'true' })]),
        h('div', { class: 'faq__a' }, h('p', { text: str(f.svar) }))
      ]);
    }));

    dom.append(host, [
      h('div', { class: 'lex' }, [
        h('h3', { class: 'lex__heading', text: 'Ordlista' }),
        h('div', { class: 'lex__search' }, [h('label', { class: 'label-caps', for: 'lex-q', text: 'Sök i ordlistan' }), input, status]),
        index, dl
      ]),
      h('div', { class: 'lex-faq' }, [h('h3', { class: 'lex__heading', text: 'Vanliga frågor' }), faq.length ? faqList : h('p', { text: 'Frågor och svar läggs till snart.' })])
    ]);
    draw('');
  }

  function init(app) {
    var guide = app.guide;
    renderSteps(guide);
    renderFristaende(guide);
    renderLexicon(guide);
    SB.motion.observe(document.getElementById('sa-gor-du'));
  }

  SB.guide = { init: init };
})();
