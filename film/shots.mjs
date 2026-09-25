// The demo storyboard: one shot per narration line. Each shot drives the real app.
// `d` is the director (see record.mjs): d.click, d.type, d.hover, d.scroll, d.wait, d.page.

export const SHOTS = {
  async intro(d) {
    await d.wait(1200);
    await d.moveTo(1180, 560);
    await d.wait(2600);
  },

  async roll(d) {
    await d.click(d.page.locator('#org-seg label').filter({ hasText: 'Kommunal skola' }));
    await d.wait(2200);
    await d.click(d.page.locator('#org-seg label').filter({ hasText: 'Fristående skola' }));
    await d.wait(1200);
    await d.hover(d.page.locator('#hero-counters'));
  },

  async sok(d) {
    await d.type(d.page.locator('#hero-q'), 'laxhjalp');
    await d.wait(1600);
    await d.page.keyboard.press('ArrowDown');
    await d.wait(900);
  },

  async detalj(d) {
    await d.page.keyboard.press('Enter');
    await d.wait(1800);
    await d.scroll(900, 3200, '#detail-body');
    await d.wait(700);
    await d.scroll(1900, 2600, '#detail-body');
  },

  async kompass(d) {
    await d.click(d.page.locator('#detail-close'));
    await d.wait(700);
    await d.scroll('#kompassen', 1800);
    await d.click(d.page.locator('#wizard label').filter({ hasText: /^Grundskola/ }));
    await d.click(d.page.locator('#wizard button[type=submit]:visible'));
    await d.wait(500);
    await d.click(d.page.locator('#wizard label:visible').filter({ hasText: 'Stärka läsningen' }));
    await d.click(d.page.locator('#wizard button[type=submit]:visible'));
    await d.wait(500);
    await d.click(d.page.locator('#wizard label:visible').filter({ hasText: /^Nej/ }));
    await d.click(d.page.locator('#wizard button[type=submit]:visible'));
    await d.wait(900);
    await d.scrollBy(420, 1800);
  },

  async hjul(d) {
    await d.scroll('#arshjulet', 2000);
    await d.wait(1600);
    await d.scrollBy(380, 1600);
    await d.hover(d.page.locator('#wheel .wr[data-id="sakerhetshojande-atgarder"] path').last());
    await d.wait(1600);
  },

  async katalog(d) {
    await d.scroll('#alla-bidrag', 2000);
    await d.click(d.page.locator('#catalog .chip').filter({ hasText: 'Gymnasieskola' }).first());
    await d.wait(700);
    await d.click(d.page.locator('#catalog .chip').filter({ hasText: 'Öppen nu' }));
    await d.wait(1200);
    await d.scrollBy(560, 2200);
  },

  async guide(d) {
    await d.scroll('#sa-gor-du', 2000);
    await d.scrollBy(1500, 4200);
    await d.scroll('#guide-fristaende', 1800);
  },

  async ordlista(d) {
    await d.scroll('#ordlista', 1600);
    await d.type(d.page.locator('#lex-q'), 'rekvisition');
    await d.wait(800);
  },

  async outro(d) {
    await d.moveTo(-60, -60);
    await d.page.evaluate(() => { window.FILM.caption(''); window.FILM.card(true); });
    await d.wait(2000);
  },
};
