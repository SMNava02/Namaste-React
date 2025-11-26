import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child: Constructor");
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Child: Component did mount");
  }

  render() {
    console.log("Child: Render");
    const { count } = this.state;
    return (
      <div className="my-3 border-2 border-gray-500">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            //Never updater state variables directly, always use setState fn
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button> */}
        <h3>Name: {this.props.name}</h3>
        <h3>Location: {this.props.location}</h3>
        <h3>Contact: @sm02</h3>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child: Component did update after state update");
    console.log(`Props is ${JSON.stringify(prevProps)}`);
    console.log(`State is ${JSON.stringify(prevState)}`);
  }

  componentWillUnmount() {
    console.log("Child: Component is unmounting");
  }
}

export default UserClass;
