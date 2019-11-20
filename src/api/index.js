import axios from "./http";

const safePromise = promise =>
    promise
        .then(data => {
            return [null, data]
        })
        .catch(err => [err])



