import axios from "axios";

export default class TheGuardianService {
  _apiKey = "53810346-e447-4f62-86ed-b961f580ee95";
  _apiUrl = "https://content.guardianapis.com/search";

  getData = async url => {
    try {
      const response = await axios.get(url, {params: {"show-fields" : "all"}});
      return response;
    } catch (error) {
      return error;
    }
  };

  getNews = async (page) => {
    const response = await this.getData(
      `${this._apiUrl}?page=${page}&api-key=${this._apiKey}`
    );
    return this._transformData(response);
  };

  _transformData = (data) => {
    return {
      currentPage: data.data.response.currentPage,
      totalPages: data.data.response.total,
      posts: data.data.response.results
    }
  }
}
