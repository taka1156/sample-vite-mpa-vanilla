import $ from 'jquery';
import util from './utils';

$('#nav-toggle').on('click', () => {
  const toggle = util.toBoolean($('#nav-list').attr('aria-expand'));
  $('#nav-list').attr('aria-expand', `${!toggle}`);
});
