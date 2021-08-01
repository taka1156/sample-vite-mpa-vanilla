import $ from 'jquery';
import tools from './utils';

$('#nav-toggle').on('click', () => {
  const toggle = tools.toBoolean($('#nav-list').attr('aria-expand'));
  const t1 = toggle;
  const t2 = !toggle;
  $('#nav-list').attr('aria-expand', `${!toggle}`);
  tools.dump.line('t1=>', t1, ', t2=>', t2);
  tools.dump.row('t=>', t1, '=>', t2);
});
