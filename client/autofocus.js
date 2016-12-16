// from https://github.com/mquandalle/blaze-autofocus/blob/master/autofocus.js
// respects the autofocus tag when switching views
import { Template } from 'meteor/templating';

/*
const autofocusableTags = ['input', 'textarea', 'button'];

const autofocusSelector = _.map(autofocusableTags, function (tag) {
  return tag + '[autofocus]';
}).join(', ')
*/
const autofocusSelector = 'input[autofocus], textarea[autofocus], button[autofocus]';

function autofocusRenderedCallback() {
  const autofocusField = this.find(autofocusSelector);
  if (autofocusField) {
    autofocusField.focus();
  }
}

const orig = Template.prototype._getCallbacks;
Template.prototype._getCallbacks = function (which) {
  const callbacks = orig.call(this, which);
  if (which === 'rendered') {
    callbacks.push(autofocusRenderedCallback);
  }
  return callbacks;
};
