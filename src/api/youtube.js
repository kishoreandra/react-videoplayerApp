import axios from "axios";

const KEY = "AIzaSyCX0u88KlBJ8rDTAyGM85WQk8RqTxHz0iw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
