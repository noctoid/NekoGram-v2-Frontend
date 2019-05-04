import {authHeader, get_uid} from "../_helpers";
import fetch from "cross-fetch";

import {apiConstants} from "../_constants";

export const dataService = {
  search,
  getPosting,
  newPost,
  newMedia,
  like,
  deleteP
};

function search(query) {
  const options = {
    method: "OPTIONS",
    headers: authHeader(),
    body: JSON.stringify({
      "query": query,
    })
  };
  return fetch(apiConstants.search, options)
    .then(res => res.text()
      .then(text => {
        console.log(text);
        return text && JSON.parse(text);
      }));
}

function getPosting(pid) {
  return fetch(
    apiConstants.getPosting,
    // "http://127.0.0.1/api/p/read/",
    // "http://127.0.0.1:8000/",
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({"pid": pid}),
    }).then(handle_getPostingData)
  // }).then(res => res.text().then(console.log));
}

function handle_getPostingData(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    // console.log("data should be ", data);
    return data.result;
  });
}


function newPost(txt, mediaUrl) {
  if (mediaUrl) {
    // console.log("finally", mediaUrl);
    return fetch(
      // "http://127.0.0.1/api/p/create/",
      apiConstants.newPost,
      {
        method: "OPTIONS",
        headers: authHeader(),
        body: JSON.stringify({
          "uid": get_uid(),
          "content": {
            "txt": txt,
            "hasMedia": true,
            "mediaUrl": mediaUrl,
            "mimeType": "image/png"
          },
          "type": "posting",
          "public": true
        })
      }
    ).then(handle_getPostingData)
  } else {
    return fetch(
      "http://127.0.0.1/api/p/create/",
      {
        method: "OPTIONS",
        headers: authHeader(),
        body: JSON.stringify({
          "uid": get_uid(),
          "content": {
            "txt": txt,
            "hasMedia": false
          },
          "type": "posting",
          "public": true
        })
      }
    ).then(handle_getPostingData)
  }
}

function newMedia(media) {
  return fetch(
    apiConstants.media,
    // "http://127.0.0.1/api/p/new_media/",
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify(
        {"data": media}
      )
    }).then(handle_newMedia)
}

function handle_newMedia(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    // console.log("data should be ", data);
    localStorage.setItem("mediaUrl", data.result);
    return data.result;
  });
}

function like(pid) {
  console.log("like", pid);
  const options = {
    method: "OPTIONS",
    headers: authHeader(),
    body: JSON.stringify({
      "uid": get_uid(),
      "pid": pid
    })
  };
  return fetch(
    apiConstants.likePost,
    options
  ).then(res => res.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(data);
    if (res.ok) {
      return true;
    }
  }));
}

function deleteP(pid) {
  console.log(pid, "I AM RUNNING");
  return fetch(
    apiConstants.deletePost,
    {
      method: "OPTIONS",
      headers: authHeader(),
      body: JSON.stringify({
        "uid": get_uid(),
        "pid": pid
      })
    }
  ).then(res => res.text().then(console.log))
}

function getBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onloadend = () => {
    console.log(reader.result);
  };
  reader.onerror = (error) => {
    console.log('Error: ', error);
  };
}
