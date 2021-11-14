import React, { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-lodash-debounce";
import { useApiContext } from "../../providers/ApiProvider";
import { useCurrentAlbumProvider } from "../../providers/CurrentAlbumProvider";

import "../../css/FindAlbum.css";

function FindAlbum() {
  const [getApi, buildQueryString] = useApiContext();
  const [albumSearch, setAlbumSearch] = useState("");
  const [albumJson, setAlbumJson] = useState([]);
  const [isResultsShown, setIsResultsShown] = useState(false);
  const debouncedAlbumSearch = useDebounce(albumSearch, 1000);

  //look up use of useCallBack
  const SearchAlbum = useCallback(
    async (input) => {
      const baseUrl = "https://itunes.apple.com/search?";
      const urlAlbumOptions = {
        //   country: 'us',
        //   media: 'music',
        //   entity: 'album',
        callback: "getApi",
        term: input,
      };
      const completeUrl = `${baseUrl}${buildQueryString(urlAlbumOptions)}`;
      const results = await getApi(completeUrl);
      //removing unwanted data from api
      const albumData = JSON.parse(
        results.data.slice(9, -4).replace(/\u21b5/g, "")
      );
      setAlbumJson(albumData.results);
      setIsResultsShown(true);
      console.log(albumJson);
    },
    [buildQueryString, getApi]
  );

  useEffect(() => {
    if (debouncedAlbumSearch) {
      SearchAlbum(debouncedAlbumSearch);
    } else if (debouncedAlbumSearch === "") {
      setAlbumJson(null);
    }
  }, [debouncedAlbumSearch, SearchAlbum]);

  //display search results from api response.
  const SearchResults = ({ item }) => {
    return (
      <div className="search-results-flex" style={{ display: "flex" }}>
        <div className="search-result-image">
          <img src={item.artworkUrl60} alt="Artist's Album" />
        </div>
        <div className="search-result-information">
          <p>{item.collectionName}</p>
          <p>{item.artistName}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="find-album-input-container">
      <p id="find-album-label">Album Art</p>
      <input
        className="find-album-input"
        type="search"
        placeholder="Find Album"
        onChange={(e) => setAlbumSearch(e.target.value)}
      />
      {isResultsShown ? (
        <div className="search-results-container">
          {albumJson.map((item, index) => (
            <div key={index} className="search-results">
              <SearchResults item={item} />
            </div>
          ))}
        </div>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  );
}

export default FindAlbum;
