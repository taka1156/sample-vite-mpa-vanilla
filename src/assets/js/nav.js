import $ from 'jquery';
import tools from './utils';

$('#nav-toggle').on('click', () => {
  const toggle = tools.toBoolean($('#nav-list').attr('aria-expand'));
  $('#nav-list').attr('aria-expand', `${!toggle}`);
});
