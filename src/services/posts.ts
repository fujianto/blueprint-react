/* eslint-disable prefer-promise-reject-errors */
function fetchPosts<T>(url: string): Promise<T> {
    return fetch(url)
        .then((res) => {
            const result = res.json().then((resJson: T) => ({
                ok: res.ok,
                status: res.status,
                body: resJson,
            }));

            return result;
        })
        .then((res) => {
            if (res.ok) {
                return res.body;
            }

            const result = Promise.reject({
                status: res.status,
                message: 'Error fetch Posts',
            });

            return result;
        });
}

export default fetchPosts;
