export function ajaxService(url, params = {}) {
  let accessToken = window.localStorage.getItem("ACCESS");
  let newParams = params;
  if (accessToken) {
    newParams = {
      ...params,
      headers: { ...params.headers, Authorization: `Bearer ${accessToken}` },
    };
  }

  return fetch("http://localhost:8000/api" + url, newParams).then((data) => {
    if (data.ok) {
      return data.json();
    }

    throw Error();
  });
}

export async function ajaxAuthService(url, params) {
  const data = await fetch("http://localhost:8000/api" + url, params);
  if (data.ok) {
    return data.json();
  }
  throw Error();
}
