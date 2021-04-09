export function createBase64WorkerFactory(base64) {
    var url;
    return function WorkerFactory(options) {
        url = url || `data:text/javascript;base64,${base64}`;
        return new SharedWorker(url, options);
    };
}
