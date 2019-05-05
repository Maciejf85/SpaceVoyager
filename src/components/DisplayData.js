import React from "react";
import Module from "./Module";
import Planets from "./Planets";

class DisplayData extends React.Component {
  state = {
    page: 1,
    selected: false,
    selected_id: ""
  };

  viewDetails = (id, page) => {
    this.setState({
      selected: true,
      selected_id: id,
      page
    });
  };
  closeDetails = (pageNumber, numberOfPages) => {
    this.setState({
      selected: false,
      page: pageNumber,
      numberOfPages
    });
  };

  render() {
    const { selected, page, selected_id } = this.state;
    return (
      <>
        {!selected && <Planets page={page} item={this.viewDetails} />}
        {selected && (
          <Module
            view={this.closeDetails}
            id={selected_id}
            page={this.state.page}
          />
        )}
      </>
    );
  }
}

export default DisplayData;
