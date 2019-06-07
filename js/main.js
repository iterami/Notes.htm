'use strict';

function repo_init(){
    core_repo_init({
      'info': '<textarea id=notes></textarea>',
      'menu': true,
      'storage': {
        'notes': '',
      },
      'title': 'Notes.htm',
    });
}
