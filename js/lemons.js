/**
 * Lemon Aide: Young Entrepreneurs
 */
(function() {
    console.log("wtf");

    /**
     * Lemon Aide Ember Application.
     */
    window.LAApp = Em.Application.create({
        rootElement: '#lemon-aid-app'
    });

    /**
     * Ember data store to allow for Ember-Data.
     */
//    LAApp.Store = DS.Store.extend({
//        revision: 13,
//        adapter: 'DS.FixtureAdapter'
//    });

    /**
     * Map of all the routes in the Application.
     */
    LAApp.Router.map(function() {
        //Lemonade Stand Shop
        this.resource('lemonade-stand');
        //Profit
        this.resource('profit');
        //Total Monies
        this.resource('total-sales');
        //Sales Calendar
        this.resource('sales-calendar');
        //Supplies
        this.resource('supplies');
        //Costs
        this.resource('costs');
        //Give
        this.resource('give');
        //Sign-in
        this.resource('sign-in');
    });

    /**
     * Handles initial hand-off of index route to the lemonade-stand route.
     */
    LAApp.IndexRoute = Ember.Route.extend({
        //Redirect hook
        redirect: function() {
            this.transitionTo('lemonade-stand');
        }
    });

})();
