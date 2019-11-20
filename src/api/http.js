import axios from "axios";
import { Notification } from "element-ui";

const instance = axios.create({
    timeout: 50000,
    cancelToken: null,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

const pending = [];
const cancelToken = axios.CancelToken;

let timer;
export const cancelRequest = config => {
    for (const i in pending) {
        if (pending[i].token === `${config.method}:${config.url}`) {
            pending[i].cancel();
            pending.splice(i, 1);
        }
    }
};
instance.interceptors.request.use(
    config => {
        try {
            cancelRequest(config);
            Object.assign(config, {
                cancelToken: new cancelToken(c => {
                    pending.push({
                        token: `${config.method}:${config.url}`,
                        cancel: c
                    });
                })
            });
        } catch (err) {
            return Promise.resolve(err);
        }
        return config;
    },
    error => {
        Notification.error({ title: "错误", message: "请求发生错误！" });
        return Promise.resolve(error);
    }
);

instance.interceptors.response.use(
    response => {
        // Cancel the request after completing the response and remove it from the pending queue
        cancelRequest(response.config);
        if (response.headers['content-type'] == "application/octet-stream;charset=UTF-8") {
            const contentDisposition = response.headers["content-disposition"];
            var startIndex = contentDisposition.indexOf("filename=") + 10;
            var endIndex = contentDisposition.length - 1;
            var filename = contentDisposition.substring(startIndex, endIndex);
            return {
                data: response.data,
                filename
            }
        }
        if (
            response.status &&
            response.status === 200 &&
            response.data.status === 0
        ) {
            return response.data.data;
        } else if (
            response.status &&
            response.status === 200 &&
            response.data.status === 100001
        ) {
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                Notification.error({ title: "错误", message: "登录状态失效" });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }, 200);
        } else {
            Notification.error({ title: "错误", message: response.data.msg });
            return Promise.reject(response);
        }
    },
    error => {
        if (!axios.isCancel(error)) {
            Notification.error({ title: "错误", message: "响应发生错误！" });
        }
        return Promise.reject(error);
    }
);

export default instance;
