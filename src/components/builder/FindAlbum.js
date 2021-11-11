import React, { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-lodash-debounce";
import { useApiContext } from "../../providers/ApiProvider";
import { useCurrentAlbumProvider } from "../../providers/CurrentAlbumProvider";

import "../../css/FindAlbum.css";

function FindAlbum() {
  const [getApi, buildQueryString] = useApiContext();
  const [albumSearch, setAlbumSearch] = useState("");
  const [apiJson, setApiJson] = useState(null);
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
      setApiJson(albumData);
      console.log(apiJson.results[1]);
    },
    [buildQueryString, getApi]
  );

  useEffect(() => {
    if (debouncedAlbumSearch) {
      SearchAlbum(debouncedAlbumSearch);
    } else if (debouncedAlbumSearch === "") {
      setApiJson(null);
    }
  }, [debouncedAlbumSearch, SearchAlbum]);

  return (
    <div className="find-album-input-container">
      <p id="find-album-label">Album Art</p>
      <input
        className="find-album-input"
        type="search"
        placeholder="Find Album"
        onChange={(e) => setAlbumSearch(e.target.value)}
      />
      {apiJson && <img src={apiJson.results[1].artworkUrl60} alt="" />}
    </div>
  );
}

export default FindAlbum;
