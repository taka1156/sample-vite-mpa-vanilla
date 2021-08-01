import $ from 'jquery';
import utils from './utils';
import { dump } from './tools';

$('#nav-toggle').on('click', () => {
  const toggle = utils.toBoolean($('#nav-list').attr('aria-expand'));
  const t1 = toggle;
  const t2 = !toggle;
  $('#nav-list').attr('aria-expand', `${!toggle}`);
  dump.row('row: ', `t1=>${t1}`, `t2=>${t2}`);
  dump.col('column: ', 't1=>', t1, ', t2=>', t2);
});
