Meteor AdminLTE Skeleton
========================
This project is a skeleton implementaton of a meteor application that uses [Almsaeed Studio''s AdminLTE](https://almsaeedstudio.com/themes/AdminLTE/index.html).

It is meant to provide a starting point web applications. The skeleton provides basic navigation with sign-up/sign-in buttons and forms.

Following recommendations found in the Meteor documention, it is built on [Flow Router](https://github.com/kadirahq/flow-router) and [Blaze Layout](https://github.com/kadirahq/blaze-layout), and has removed the [autopublish](https://atmospherejs.com/meteor/autopublish) and [insecure](https://atmospherejs.com/meteor/insecure) packages.

## Usage

To start a new project using this repository:

    git clone https://github.com/pbatey/meteor-adminlte-skeleton project-name
    cd project-name
    git remote remove origin
    meteor npm install
    meteor

Then navigate to `http://localhost:3000`. Make changes and push them to your own repository. See [GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for details.

*Note:* This skeleton uses *force-ssl* since it asks for user credentials. You'll need to setup TLS for production. For ease of development, connections from `localhost` are always accepted over HTTP.

## Meteor packages

This project makes use of the following meteor packages:

**force-ssl@1.0.13**
: redirects any insecure connections (HTTP) to a secure URL (HTTPS). See the [atmosphere package](https://atmospherejs.com/meteor/force-ssl) for more information.

**mfactory:admin-lte**
: CSS and JQuery from [Almsaeed Studio''s AdminLTE](https://almsaeedstudio.com/themes/AdminLTE/index.html) template

**fortawesome:fontawesome**
: CSS from [Font Awesome](http://fontawesome.io/icons/)

**themeteorchef:jquery-validation**
: Client-side form input validation.
See the [api docs](https://jqueryvalidation.org/documentation/).

**kadira:flow-router**
: Handles url changes by routing them to templates

**kadira:blaze-layout**
: Renders templates into regions within a layout

**useraccounts:flow-routing**
: Require users to be signed-in for specific routes

**accounts-password**
: Allow users to login via password

**arillo:flow-router-helpers**
: adds `{{pathFor}}` helper (and others) for handling links between routes.
See the [github project](https://github.com/arillo/meteor-flow-router-helpers).

**accounts-activedirectory**
: adds ability to sign-in with active-directory (local package).

**themeteorchef:bert**
: A growl-syle message alert system. See the [github project](https://github.com/themeteorchef/bert).

**mixmax:smart-disconnect**
: Automatically disconnects from the Meteor server when the user switches to another tab.
See the [github project](https://github.com/mixmaxhq/meteor-smart-disconnect).

**joshdellay:meteor-ladda-bootstrap**
: Provides buttons with loading indicators. See the [github project](https://github.com/JoshDellay/meteor-ladda-bootstrap).

**fourseven:scss**
: Compiles Sass and scss into CSS. See the [github project](https://github.com/fourseven/meteor-scss).

**check**
: Lightweight JSON validation. For example `check(value, String)`. See the [api doc](https://docs.meteor.com/api/check.html).

**mizzao:user-status**
: Tracks user connection state. See the [github project](https://github.com/mizzao/meteor-user-status).

**session**
: Client-side key-value store. See the [api documentation](https://docs.meteor.com/api/session.html). Should not be used to store state related to the page -- that should be kept in the URL.

**255kb:meteor-status**
: Alerts the client if the server connection is lost. See the [github project](https://github.com/255kb/meteor-status).

## NPM Packages

**moment**
: Timestamp formatter. See the [api docs](http://momentjs.com/docs/) for details.

## TODO

* Adjust the directory structure to match [recomendations from Meteor](https://guide.meteor.com/structure.html#example-app-structure).
* Add user profile configuration (change name, cv, etc)
* Avatar customization (gravatar/file upload/avatar designer?)
* Add user messaging, chat, and associated notifications
* Other things hiding in the AdminLTE examples that might apply to *any* 'web-app'
