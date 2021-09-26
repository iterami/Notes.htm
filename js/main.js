'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'notes': {
          'onblur': function(){
              if(this.value.length > 0
                && !this.value.endsWith('\n')){
                  this.value += '\n';
              }
          },
        },
        'select-end': {
          'onclick': function(){
              const element = document.getElementById('notes');
              const textarea_end = element.value.length;
              element.focus();
              element.setSelectionRange(
                textarea_end,
                textarea_end
              );
              element.scrollLeft = 0;
              element.scrollTop = element.scrollHeight;
          },
        },
        'select-start': {
          'onclick': function(){
              const element = document.getElementById('notes');
              element.focus();
              element.setSelectionRange(0, 0);
              element.scrollLeft = 0;
              element.scrollTop = 0;
          },
        },
      },
      'info': '<textarea id=notes></textarea><br>'
        + '<input id=select-start type=button value=Start><input id=select-end type=button value=End>',
      'menu': true,
      'storage': {
        'notes': '',
      },
      'title': 'Notes.htm',
    });
}
