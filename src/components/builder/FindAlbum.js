import React, { useState, useEffect, useCallback } from "react";

//importing debounce so api is not called upon every keystroke.
import { useDebounce } from "use-lodash-debounce";
//context
import { useApiContext } from "../../providers/ApiProvider";
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
//css
import "../../css/FindAlbum.css";

function FindAlbum() {
  const [getApi, buildQueryString] = useApiContext();
  const [currentAlbum, setCurrentAlbum] = useCurrentAlbumContext();
  const [albumSearch, setAlbumSearch] = useState("");
  const [albumJson, setAlbumJson] = useState([]);
  const [isResultsShown, setIsResultsShown] = useState(false);
  const debouncedAlbumSearch = useDebounce(albumSearch, 1000);

  //this function will run if query or get api function has changed
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
      //building query string and calling api storing api data in results.
      const completeUrl = `${baseUrl}${buildQueryString(urlAlbumOptions)}`;
      const results = await getApi(completeUrl);

      //removing unwanted data from api we only want music.
      const albumData = JSON.parse(
        results.data.slice(9, -4).replace(/\u21b5/g, "")
      );

      //Storing api results in state, and showing user.
      setAlbumJson(albumData.results);
      setIsResultsShown(true);
    },
    [buildQueryString, getApi]
  );

  //this will run upon render, and anytime debounced or search album is changed.
  //takes users query and passes to search album
  useEffect(() => {
    if (debouncedAlbumSearch) {
      SearchAlbum(debouncedAlbumSearch);
    } else if (debouncedAlbumSearch === "") {
      setAlbumJson([]);
    }
  }, [debouncedAlbumSearch, SearchAlbum]);

  //sets current album in state upon clicked.
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
      {/* If there is a selected album, pass current selected album to Search Results. If not display input for user to search for album*/}
      {currentAlbum ? (
        <div
        className="selected-album-delete">
          {/* Deletes selected album */}
          <h5 onClick={() => [setCurrentAlbum(null), setAlbumSearch("")]}>X</h5>
          {/*Component to display album information. */}
          <SearchResults item={currentAlbum} />
        </div>
      ) : (
        <input
          className="find-album-input"
          type="search"
          placeholder="Find Album"
          onChange={(e) => setAlbumSearch(e.target.value)}
        />
      )}

      {/* This will display all the current API results based on users search query. */}
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
