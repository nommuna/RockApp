/**
 * Created by muna on 8/20/16.
 */
//npm run start
// login page

var React = require('react');

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

module.exports =  Login;