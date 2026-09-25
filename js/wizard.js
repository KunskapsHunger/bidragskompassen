/* Bidragskompassen – Kompassen: three questions, one at a time, then a ranked, explained result. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var SHOW_FIRST = 8;

  var QUESTIONS = [
    { q: 'Vilken skolform gäller det?', help: 'Välj en eller flera. Hoppar ni över frågan tar vi med alla skolformer.' },
    { q: 'Vad vill ni göra?', help: 'Välj det som ligger närmast. Flera val går bra.' },
    { q: 'Bara det som är öppet snart?', help: 'Vill ni bara se bidrag som går att söka nu eller inom 60 dagar?' }
  ];

  function init(app) {
    var host = document.getElementById('wizard');
    var step = 0;
    var answers = { skolformer: [], goals: [], snart: false };
    var showAll = false;

    function countFor(pred) {
      return app.grants.filter(function (g) {
        return !core.isEnded(g) && pred(g) && (app.get().organiser === 'alla' || core.canApply(g, app.get().organiser));
      }).length;
    }

    function choice(type, name, value, label, count, checked) {
      var input = h('input', { class: 'choice__input', type: type, name: name, value: value });
      input.checked = !!checked;
      return h('label', { class: 'choice choice--' + type }, [
        input,
        h('span', { class: 'choice__mark', 'aria-hidden': 'true' }),
        h('span', { class: 'choice__label' }, [label, count === null ? null : h('span', { class: 'choice__count', text: dom.plural(count, 'bidrag', 'bidrag') })])
      ]);
    }

    var count = h('p', { class: 'wizard__count label-caps', id: 'wiz-count' });
    var bars = h('div', { class: 'wizard__bars', 'aria-hidden': 'true' }, [0, 1, 2].map(function () { return h('span'); }));
    var fieldsets = QUESTIONS.map(function (qq, i) {
      return h('fieldset', { class: 'wstep', 'data-step': String(i), tabindex: '-1', 'aria-describedby': 'wiz-help-' + i, hidden: i !== 0 }, [
        h('legend', { class: 'wstep__q' }, [h('span', { class: 'wstep__n', 'aria-hidden': 'true', text: String(i + 1) }), h('span', { text: qq.q })]),
        h('p', { class: 'wstep__help', id: 'wiz-help-' + i, text: qq.help }),
        h('div', { class: 'choices choices--' + i })
      ]);
    });
    var backBtn = h('button', { type: 'button', class: 'link-btn wizard__back' }, [h('span', { 'aria-hidden': 'true', text: '← ' }), 'Tillbaka']);
    var nextBtn = h('button', { type: 'submit', class: 'btn btn--primary' });
    var form = h('form', { class: 'wizard__form', novalidate: true, 'aria-labelledby': 'kompassen-title' },
      fieldsets.concat([h('div', { class: 'wizard__nav' }, [backBtn, nextBtn])]));
    var result = h('div', { class: 'wresult', hidden: true });
    dom.append(host, [h('div', { class: 'wizard__top' }, [count, bars]), form, result]);

    function fillChoices() {
      var c0 = dom.$('.choices--0', form);
      var c1 = dom.$('.choices--1', form);
      var c2 = dom.$('.choices--2', form);
      dom.clear(c0); dom.clear(c1); dom.clear(c2);
      core.SKOLFORMER.forEach(function (s) {
        var n = countFor(function (g) { return g.skolformer.indexOf(s.id) !== -1; });
        c0.appendChild(choice('checkbox', 'skolform', s.id, s.label, n, answers.skolformer.indexOf(s.id) !== -1));
      });
      core.GOALS.forEach(function (goal) {
        var n = countFor(function (g) { return g.omraden.some(function (o) { return goal.omraden.indexOf(o) !== -1; }); });
        c1.appendChild(choice('checkbox', 'goal', goal.id, goal.label, n, answers.goals.indexOf(goal.id) !== -1));
      });
      c2.appendChild(choice('radio', 'snart', 'ja', 'Ja – bara det som är öppet nu eller öppnar inom 60 dagar', null, answers.snart));
      c2.appendChild(choice('radio', 'snart', 'nej', 'Nej – visa allt som passar', null, !answers.snart));
    }

    function readAnswers() {
      var val = function (name) { return dom.$$('input[name="' + name + '"]:checked', form).map(function (i) { return i.value; }); };
      answers = { skolformer: val('skolform'), goals: val('goal'), snart: val('snart')[0] === 'ja' };
    }

    function showStep(i, dir) {
      step = i;
      fieldsets.forEach(function (fs, idx) {
        fs.hidden = idx !== i;
        fs.classList.remove('is-enter-fwd', 'is-enter-back');
      });
      var fs = fieldsets[i];
      void fs.offsetWidth;
      if (dir) fs.classList.add(dir > 0 ? 'is-enter-fwd' : 'is-enter-back');
      count.textContent = 'Fråga ' + (i + 1) + ' av 3';
      dom.$$('span', bars).forEach(function (b, idx) { b.classList.toggle('is-done', idx <= i); });
      backBtn.hidden = i === 0;
      dom.clear(nextBtn);
      dom.append(nextBtn, [i === 2 ? 'Visa bidragen' : 'Nästa', h('span', { class: 'arrow', 'aria-hidden': 'true', text: ' →' })]);
      if (dir) fs.focus();
    }

    function reasonsLine(reasons) {
      return h('ul', { class: 'wstack__reasons' }, reasons.map(function (r) { return h('li', { text: r }); }));
    }

    function summaryText() {
      var parts = [];
      parts.push(answers.skolformer.length ? answers.skolformer.map(function (s) { return core.labelOf(core.SKOLFORMER, s); }).join(', ') : 'Alla skolformer');
      parts.push(answers.goals.length ? answers.goals.map(function (g) { return core.labelOf(core.GOALS, g); }).join(', ') : 'Alla mål');
      parts.push(answers.snart ? 'Öppet nu eller snart' : 'Oavsett datum');
      return parts.join(' · ');
    }

    function renderResult(focus) {
      var ranked = core.rankWizard(app.grants, answers, app.ctx());
      var org = core.findById(core.ORGANISERS, app.get().organiser);
      var items = showAll ? ranked.items : ranked.items.slice(0, SHOW_FIRST);
      var title = h('h3', { class: 'wresult__title', tabindex: '-1', text: ranked.items.length
        ? (ranked.items.length === 1 ? 'Ett bidrag passar er.' : ranked.items.length + ' bidrag passar er.')
        : 'Inga bidrag passar just de svaren.' });
      var edit = h('button', { type: 'button', class: 'link-btn', text: 'Ändra svaren' });
      edit.addEventListener('click', function () { result.hidden = true; form.hidden = false; showStep(0, -1); });
      var restart = h('button', { type: 'button', class: 'link-btn', text: 'Börja om' });
      restart.addEventListener('click', function () {
        answers = { skolformer: [], goals: [], snart: false };
        showAll = false; fillChoices(); result.hidden = true; form.hidden = false; showStep(0, -1);
      });
      var toCatalog = h('button', { type: 'button', class: 'btn btn--secondary' }, ['Se urvalet i registret', h('span', { class: 'arrow', 'aria-hidden': 'true', text: ' →' })]);
      toCatalog.addEventListener('click', function () {
        app.goToCatalog({ filters: Object.assign(core.emptyFilters(), {
          skolform: answers.skolformer, omrade: ranked.omraden, status: answers.snart ? ['open', 'soon', 'auto'] : []
        }) });
      });

      dom.clear(result);
      dom.append(result, [
        h('p', { class: 'label-caps wresult__kicker', text: 'Ert resultat' }),
        title,
        h('p', { class: 'wresult__summary' }, [summaryText() + ' ', edit]),
        items.length ? h('ol', { class: 'wstack' }, items.map(function (it, i) {
          return h('li', { class: 'wstack__item', style: { '--i': String(i) } }, [
            h('span', { class: 'wstack__num', 'aria-hidden': 'true', text: dom.pad2(i + 1) }),
            h('div', { class: 'wstack__body' }, [
              h('p', { class: 'label-caps wstack__meta', text: it.grant.myndighet + ' · ' + core.labelOf(core.TYPER, it.grant.typ) }),
              h('h4', { class: 'wstack__name' }, dom.grantLink(it.grant, null, it.grant.kortnamn)),
              h('p', { class: 'wstack__sum', text: it.grant.sammanfattning }),
              reasonsLine(it.reasons)
            ]),
            h('div', { class: 'wstack__status' }, dom.statusTag(it.status))
          ]);
        })) : h('div', { class: 'wresult__empty' }, [
          h('p', { text: answers.snart ? 'Inget av det som passar är öppet de närmaste 60 dagarna. Prova att visa allt, oavsett datum.' : 'Prova att välja fler skolformer eller mål.' })
        ]),
        ranked.items.length > SHOW_FIRST && !showAll ? (function () {
          var more = h('button', { type: 'button', class: 'link-btn wresult__more', text: 'Visa alla ' + ranked.items.length });
          more.addEventListener('click', function () { showAll = true; renderResult(false); });
          return more;
        })() : null,
        ranked.excluded ? h('p', { class: 'wresult__excluded small' }, [h('span', { 'aria-hidden': 'true', text: '⊘ ' }),
          dom.plural(ranked.excluded, 'bidrag', 'bidrag') + ' till passar, men ' + org.cannot.charAt(0).toLowerCase() + org.cannot.slice(1) + '.']) : null,
        h('div', { class: 'wresult__actions' }, [toCatalog, restart])
      ]);
      result.hidden = false;
      form.hidden = true;
      count.textContent = 'Klart';
      dom.$$('span', bars).forEach(function (b) { b.classList.add('is-done'); });
      SB.motion.observe(result);
      if (focus) title.focus();
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      readAnswers();
      if (step < 2) { showStep(step + 1, 1); return; }
      showAll = false;
      renderResult(true);
    });
    backBtn.addEventListener('click', function () { readAnswers(); if (step > 0) showStep(step - 1, -1); });

    fillChoices();
    showStep(0, 0);
    app.subscribe(function (next, prev) {
      if (next.organiser === prev.organiser) return;
      readAnswers();
      fillChoices();
      if (!result.hidden) renderResult(false);
    });
  }

  SB.wizard = { init: init };
})();
