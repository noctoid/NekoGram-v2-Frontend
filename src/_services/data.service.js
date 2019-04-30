import { authHeader, get_uid } from "../_helpers";
import fetch from "cross-fetch";

export const dataService = {
    getPosting,
  newPost
};

function getPosting(pid) {
    return fetch(
        "http://127.0.0.1/api/p/read/",
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


function newPost(txt, media) {
  // alert(txt);
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
