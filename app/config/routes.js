/**
 * Created by muna on 8/23/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
//var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/main');
var Login = require('../components/login');
var Home = require('../components/home');



var routes = (
    //activate this route no matter what page your on
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <Route path='/login' component={Login}/>
            <Route path='/main' component={Main}/>
        </Route>
    </Router>
);

module.exports =  routes;