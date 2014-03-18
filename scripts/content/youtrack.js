/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

// #id_l.I.ic.icr.issueContent
togglbutton.render('.issueContainer', {}, function (elem) {
  var link, description,
    numElem = $('.issueId', elem),
    titleElem = $('.issue-summary', elem),
    projectElem = $('.something');

  description = titleElem.innerText;
  if (numElem !== null) {
    description = numElem.innerText + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'youtrack',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  $('.fsi-toolbar-content').appendChild(link);
});
