import { authHeader} from "../_helpers";
import fetch from "cross-fetch";

export const dataService = {
    getPosting,
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
