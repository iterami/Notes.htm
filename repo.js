'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'notes': {
          'onblur': function(){
              if(this.value.length
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
        'sort': {
          'onclick': function(){
              if(!globalThis.confirm('Sort all lines?')){
                  return;
              }

              const element = document.getElementById('notes');
              element.value = element.value.split('\n').sort().join('\n');
          },
        },
      },
      'info': '<input id=select-start type=button value=Start><input id=sort type=button value="Sort All"><input id=select-end type=button value=End><br>'
        + '<textarea id=notes></textarea>',
      'menu': true,
      'menu-lock': true,
      'storage': {
        'notes': '',
      },
      'title': 'Notes.htm',
    });

    const textarea = document.getElementById('notes');
    if(globalThis.innerHeight > 390){
        textarea.style.height = globalThis.innerHeight - 200 + 'px';
    }
    if(globalThis.innerWidth > 540){
        textarea.style.width = globalThis.innerWidth - 50 + 'px';
    }
}
