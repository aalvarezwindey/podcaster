class HTTPService {
  async get(url) {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );

    if (!response.ok) {
      throw new Error(`[FAIL_GET][${url}][${response.statusText}]`);
    }

    const jsonData = (await response.json()).contents;
    return JSON.parse(jsonData);
  }
}

export default HTTPService;
