export const config = {
  runtime: 'edge'
}

export default async function (request) {
  const url = new URL(request.url)
  const host = request.headers.get('host') || ''
  // If request is to apex, redirect to www preserving path and method
  if (host === 'datajuslegal.com.br') {
    url.hostname = 'www.datajuslegal.com.br'
    return Response.redirect(url.toString(), 308)
  }

  // Otherwise proxy to origin
  return fetch(request)
}
