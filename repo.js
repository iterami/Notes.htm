'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'save': {
          'onclick': function(){
              core_storage_save();
              core_elements.notes.focus();
          },
        },
        'notes': {
          'onblur': function(){
              core_storage_save({
                'keys': ['notes'],
                'rebind': false,
              });
          },
        },
      },
      'storage': {
        'notes': '',
      },
      'title': 'Notes.htm',
      'ui': '<button id=save>Save</button>',
      'ui_elements': [
        'notes',
      ],
    });

    core_elements.notes.style.width = '100%';

    resize_textarea();
    globalThis.onresize = resize_textarea;
}

function resize_textarea(){
    const style = globalThis.getComputedStyle(core_elements.notes);

    core_elements.notes.style.height = Math.max(
      globalThis.innerHeight - globalThis.parseFloat(style.fontSize) * 2,
      50
    ) + 'px';
}
