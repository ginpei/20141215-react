var ColorPreview = React.createClass({
	render: function() {
		return <div className="color-preview" style={{ backgroundColor:this.props.color }} />
	}
});

var ColorSelect = React.createClass({
	onChange: function(event) {
		var color = this.getDOMNode().value;
		this.props.onChange({ color:color });
	},

	render: function() {
		return <select onChange={this.onChange} value={this.props.color}>
			<option value="red">Red</option>
			<option value="green">Green</option>
			<option value="blue">Blue</option>
		</select>;
	}
});

var ColorPanel = React.createClass({
	getInitialState: function() {
		return { color:'red' };
	},

	onChange: function(data) {
		this.setState({ color:data.color });
	},

	render: function() {
		return <div>
			<ColorPreview color={this.state.color} />
			<ColorSelect onChange={this.onChange} color={this.state.color} />
		</div>;
	}
});

React.render(
	<ColorPanel />,
	document.querySelector('body')
);
