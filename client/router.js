import {
    FlowRouter
} from 'meteor/kadira:flow-router'
import {
    BlazeLayout
} from 'meteor/kadira:blaze-layout'

BlazeLayout.setRoot('body');

AccountsTemplates.configureRoute('signIn', {
    layoutType: 'blaze',
    name: 'signin',
    path: '/sign-in',
    template: 'signin',
    layoutTemplate: 'blankLayout',
    layoutRegions: {},
    contentRegion: 'main',
    onLogoutHook: function() {
        FlowRouter.reload()
    }
});

// uncomment to ensure sign-in for ALL routes
FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

FlowRouter.notFound = {
    action: function() {
        FlowRouter.withReplaceState(function() {
            FlowRouter.go('notFound')
        })
    }
}

FlowRouter.route('/', {
    name: 'home',
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'home'
        })
    }
})

FlowRouter.route('/register', {
    name: 'register',
    action(params, queryParams) {
        BlazeLayout.render('blankLayout', {
            main: 'register'
        })
    }
})

FlowRouter.route('/pages/:pageId', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'page'
        })
    }
})

FlowRouter.route('/profile/:username', {
    name: 'profile',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'profile'
        })
    }
})

FlowRouter.route('/users', {
    name: 'userList',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'users'
        })
    }
})

FlowRouter.route('/spinner', {
    name: 'userList',
    action(params, queryParams) {
        BlazeLayout.render('blankLayout', {
            main: 'spinner'
        })
    }
})

FlowRouter.route('/not-found', {
    name: 'notFound',
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'notFound'
        })
    }
})

FlowRouter.route('/events', {
    name: 'events',
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'events'
        })
    }
})

FlowRouter.route('/roster', {
    name: 'roster',
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'roster'
        })
    }
})

FlowRouter.route('/attendance', {
    name: 'attendance',
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'attendance'
        })
    }
})

FlowRouter.route('/scanner', {
    name: 'scanner',
    action(params, queryParams) {
        BlazeLayout.render('navLayout', {
            main: 'scanner'
        })
    }
})

FlowRouter.route('/add-employee', {
    name: 'add-employee',
    action(params, queryParams) {
        Session.set('employeeForm', {
            type: 'add'
        });
        BlazeLayout.render('navLayout', {
            main: 'addEditEmployeeForm'
        })
    }
})

FlowRouter.route('/edit-employee/:slug', {
    name: 'edit-employee',
    action(params, queryParams) {
        Session.set('employeeForm', {
            type: 'edit',
            employee: FlowRouter.getParam("slug"),
        });
        BlazeLayout.render('navLayout', {
            main: 'addEditEmployeeForm'
        })
    }
})
