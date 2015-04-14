var React = require('react');
var request = require('superagent');

var Home = React.createClass({
	getInitialState: function(){
		return {articles: []}
	},
	componentDidMount: function(){
		var that = this;
		request.get('/api/v1/dailymail').end(function(err, res){
			console.log(res);
			that.setState({articles: res.body});
		});
	},
	render:function(){
		var items = this.state.articles.map(function(article){
			return <Article data={article} />
		})
		return (
			<div>
				<h1>English</h1>
				<ul>
					{items}
				</ul>
			</div>
		)
	}
})

var Article = React.createClass({
	render: function(){
		return (
			<li>
				<a href={this.props.data.url}>{this.props.data.title}</a>
			</li>
		)
	}
})

React.render(<Home />, document.getElementById('example'));