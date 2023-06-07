import axios from "axios";

export const QuoteAPI = {
  get: async function () {
    const response = await axios.request({
      url: "https://api.quotable.io/random",
      method: "GET",
    });

    const data = {
      quote: response.data.content,
      author: response.data.author,
    };

    return data;
  },
};
