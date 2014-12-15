var ColorPreview = React.createClass({displayName: 'ColorPreview',
	render: function() {
		return React.createElement("div", {className: "color-preview", style: { backgroundColor:this.props.color}})
	}
});

var ColorSelect = React.createClass({displayName: 'ColorSelect',
	onChange: function(event) {
		var color = this.getDOMNode().value;
		this.props.onChange({ color:color });
	},

	render: function() {
		return React.createElement("select", {onChange: this.onChange, value: this.props.color}, 
			React.createElement("option", {value: "red"}, "Red"), 
			React.createElement("option", {value: "green"}, "Green"), 
			React.createElement("option", {value: "blue"}, "Blue")
		);
	}
});

var ColorPanel = React.createClass({displayName: 'ColorPanel',
	getInitialState: function() {
		return { color:'red' };
	},

	onChange: function(data) {
		this.setState({ color:data.color });
	},

	render: function() {
		return React.createElement("div", null, 
			React.createElement(ColorPreview, {color: this.state.color}), 
			React.createElement(ColorSelect, {onChange: this.onChange, color: this.state.color})
		);
	}
});

React.render(
	React.createElement(ColorPanel, null),
	document.querySelector('body')
);
