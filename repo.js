'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'copy': {
          'onclick': function(){
              navigator.clipboard.writeText(core_elements.notes.value);
              core_elements.notes.focus();
          },
        },
        'end': {
          'onclick': function(){
              core_elements.notes.focus();
              const textarea_end = core_elements.notes.value.length;
              core_elements.notes.setSelectionRange(
                textarea_end,
                textarea_end
              );
              core_elements.notes.scrollLeft = 0;
              core_elements.notes.scrollTop = core_elements.notes.scrollHeight;
          },
        },
        'notes': {
          'onblur': function(){
              core_storage_save(['notes']);
          },
        },
        'sort': {
          'onclick': function(){
              if(globalThis.confirm('Sort all lines?')){
                  core_elements.notes.value = core_elements.notes.value.split('\n').sort().join('\n');
              }

              core_elements.notes.focus();
          },
        },
        'start': {
          'onclick': function(){
              core_elements.notes.focus();
              core_elements.notes.setSelectionRange(0, 0);
              core_elements.notes.scrollLeft = 0;
              core_elements.notes.scrollTop = 0;
          },
        },
      },
      'info': '<button id=copy type=button>Copy</button><button id=sort type=button>Sort</button> <button id=start type=button>Start</button><button id=end type=button>End</button><br><textarea id=notes></textarea>',
      'menu-lock': true,
      'storage': {
        'notes': '',
      },
      'title': 'Notes.htm',
      'ui-elements': [
        'notes',
      ],
    });

    resize_textarea();
    globalThis.onresize = resize_textarea;
}

function resize_textarea(){
    core_elements.notes.style.height = Math.max(
      globalThis.innerHeight - 170,
      50
    ) + 'px';
    core_elements.notes.style.width = globalThis.innerWidth + 'px';
}
