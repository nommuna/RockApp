/**
 * Created by muna on 8/23/16.
 */
var React = require('react');


var Title = React.createClass({
    render: function () {
        return(
            <div className="head text-center">
                <h1>Rock App</h1>
                <h3>The only app you need to track your climbs</h3>
            </div>
        )
    }
});

/*

 var Login = React.createClass({
 render: function () {
 return(
 <div>
 <form className="form-horizontal">
 <div className="form-group">
 <label className="col-sm-2 control-label">Email</label>
 <div className="col-sm-10">
 <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
 </div>
 </div>
 <div className="form-group">
 <label className="col-sm-2 control-label">Password</label>
 <div className="col-sm-10">
 <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
 </div>
 </div>
 <div className="form-group">
 <div className="col-sm-offset-2 col-sm-10">
 <button type="submit" className="btn btn-default">Sign in</button>
 </div>
 </div>
 </form>
 </div>
 )
 }
 });

 */

var Homepage = React.createClass({
    render: function () {
        return(
            <div>

                <div className="container">
                    <Title>{this.props.children}</Title>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

//ReactDOM.render(<Homepage/>, document.getElementById('app'));

module.exports =  Homepage;



