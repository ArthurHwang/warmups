const queryString = {
  parse: (querystring) => {
    querystring = querystring.substring(querystring.indexOf('?') + 1).split('&');
    const params = {}
    let pair;
    const d = decodeURIComponent;
    for (let i = querystring.length - 1; i >= 0; i--) {
      pair = querystring[i].split('=');
      params[d(pair[0])] = d(pair[1] || '');
    }
    return params;
  }
  stringify: ()
}
