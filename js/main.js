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
      },
      'info': '<textarea id=notes></textarea>',
      'menu': true,
      'storage': {
        'notes': '',
      },
      'title': 'Notes.htm',
    });
}
