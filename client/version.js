import { Template } from 'meteor/templating'
import git from '../lib/git-version.js'
import moment from 'moment'

function format(s) {
  return moment(s).format("YYYY-M-D H:mm")
}

Template.version.onRendered(function() {
  var dirty = ""
  if (git.dirty) {
    dirty = " (dirty)"
  }
  this.$('#version a').popover({
    html: true,
    content:
      "<b>build:</b> " + git.short + dirty + "<br/>" +
      "<b>branch:</b> " + git.branch + "<br/>" +
      "<b>date:</b> " + format(git.date)
  })
})

Template.version.helpers({
  git: git
})

Template.version.events({
  'click a' : function (event) {
    event.preventDefault()
  }
})
