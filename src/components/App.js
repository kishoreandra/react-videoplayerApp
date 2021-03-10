import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
class App extends React.Component {
  state = { videos: [] };
  onFormSubmit = async (term) => {
    const searchResults = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: searchResults.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />I have{" "}
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
