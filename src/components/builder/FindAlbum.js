import React, { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-lodash-debounce";
import { useApiContext } from "../../providers/ApiProvider";
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";

import "../../css/FindAlbum.css";

function FindAlbum() {
  const [getApi, buildQueryString] = useApiContext();
  const [currentAlbum, setCurrentAlbum] = useCurrentAlbumContext();
  const [albumSearch, setAlbumSearch] = useState("");
  const [albumJson, setAlbumJson] = useState([]);
  const [isResultsShown, setIsResultsShown] = useState(false);
  const debouncedAlbumSearch = useDebounce(albumSearch, 1000);

  //this function will run if query or getapi function has changed
  const SearchAlbum = useCallback(
    async (input) => {
      const baseUrl = "https://itunes.apple.com/search?";
      //Only search for music albums on api
      const urlAlbumOptions = {
        media: "music",
        entity: "album",
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
      // console.log(albumJson);
    },
    [buildQueryString, getApi]
  );

  useEffect(() => {
    if (debouncedAlbumSearch) {
      SearchAlbum(debouncedAlbumSearch);
    } else if (debouncedAlbumSearch === "") {
      setAlbumJson([]);
    }
  }, [debouncedAlbumSearch, SearchAlbum]);

  //sets current album in state
  const getCurrentAlbum = (album) => {
    setCurrentAlbum(album);
  };

  //display search results from api response.
  const SearchResults = ({ item }) => {
    return (
      <div
        onClick={() => getCurrentAlbum(item)}
        className="search-results-flex"
      >
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
      {currentAlbum ? (
        //deletes current album, resets search
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "20px",
            cursor: "pointer",
          }}
        >
          <h5 onClick={() => [setCurrentAlbum(null), setAlbumSearch("")]}>X</h5>
          <SearchResults item={currentAlbum} />
        </div>
      ) : (
        //Seach Input
        <input
          className="find-album-input"
          type="search"
          placeholder="Find Album"
          onChange={(e) => setAlbumSearch(e.target.value)}
        />
      )}

      {/* all API results */}
      {isResultsShown && albumJson.length > 1 && !currentAlbum ? (
        <div className="search-results-container">
          {albumJson.map((item, index) => (
            <div key={index} className="search-results">
              <SearchResults item={item} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FindAlbum;
