import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent: Constructor");
  }

  componentDidMount() {
    // Exceuted after initial render
    // Used for data fetching - API calls - Can be made async
    console.log("Parent: Component did mount");
  }

  render() {
    console.log("Parent: Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is a Sample React Food App</h2>
        <h2>Contributors</h2>
        <UserClass name="Sushma" location="AU (Class)" />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // Executed after rerender of State/Props update
    // Used to validate/verify the state/prop changes
    console.log("Parent: Component did update after state update");
    console.log(`Props is ${JSON.stringify(prevProps)}`);
    console.log(`State is ${JSON.stringify(prevState)}`);
  }

  componentWillUnmount() {
    // Executed when you navigate to different route, just before Unmounting the component from DOM
    // Used to Clean up (Timers)
    console.log("Parent: Component is unmounting");
  }
}

export default About;
