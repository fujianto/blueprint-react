function fetchPosts<T>(url: string): Promise<T> {
    return fetch(url)
      .then((res) => {
        return res.json().then((resJson: T) => ({
          ok: res.ok,
          status: res.status,
          body: resJson,
        }));
      })
      .then((res) => {
       if (res.ok) {
         return res.body;
       }
       return Promise.reject({
         status: res.status,
         message: 'Error fetch Posts',
       });
      });
  }

  export default fetchPosts