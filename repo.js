'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'copy': {
          'onclick': function(){
              const element = document.getElementById('notes');
              navigator.clipboard.writeText(element.value);
              element.focus();
          },
        },
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
      'info': '<input id=copy type=button value=Copy><input id=sort type=button value=Sort> <input id=select-start type=button value=Start><input id=select-end type=button value=End><br>'
        + '<textarea id=notes></textarea>',
      'menu': true,
      'menu-lock': true,
      'storage': {
        'notes': '',
      },
      'title': 'Notes.htm',
    });

    resize_textarea();
    globalThis.onresize = resize_textarea;
}

function resize_textarea(){
    const textarea = document.getElementById('notes');
    const height = Math.max(
      globalThis.innerHeight - 200,
      390
    );
    const width = Math.max(
      globalThis.innerWidth - 50,
      540
    );
    textarea.style.height = height + 'px';
    textarea.style.width = width + 'px';
}
