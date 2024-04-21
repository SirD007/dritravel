const jsonFetcher = (input: URL | RequestInfo, init?: RequestInit | undefined): Promise<Response> => fetch(input, init).then(res => res.json())
export default jsonFetcher