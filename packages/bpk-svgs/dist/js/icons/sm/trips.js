import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M12 5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H5v8h8V7h-1V5zM8 5h2v2H8V5zM1 8.5v5c0 .8.7 1.5 1.5 1.5H4V7H2.5C1.7 7 1 7.7 1 8.5zM15.5 7H14v8h1.5c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5z" /></svg>;
  }

}