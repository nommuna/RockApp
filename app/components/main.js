/**
 * Created by muna on 8/22/16.
 */
//main page
var React = require('react');

var data = [
    {
        //to acsess climb user climb[0].whatever
        user: "Muna",
        climb: [{
            nameroute: "Moms climb",
            grade: "v7",
            type: "Boulder",
        }],
    }
];

var Usertitle = React.createClass({
    getInitialState: function () {
        return {
            reactdata: data[0]
        };
    },
    render: function () {
        return(
            <div>
                <h1>{this.state.reactdata.user} Climbs</h1>
            </div>
        )
    }
});

//add new routes by the amount of data passed in
var MainInterface = React.createClass({
    getInitialState: function () {
        return {
            reactdata: data[0]
        };
    },
    render: function () {
        obj = this.state.reactdata.climb[0];
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Name of route</th>
                        <th>Grade</th>
                        <th>Boulder/Sport</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {obj.nameroute}
                    </tr>
                </tbody>
            </table>
        )
    }
});

var ParentComponent = React.createClass({
    render: function () {
        return(
            <div className="container">
                <Usertitle>{this.props.children}</Usertitle>
                <MainInterface>{this.props.children}</MainInterface>
            </div>
        )
    }
});


module.exports = ParentComponent;