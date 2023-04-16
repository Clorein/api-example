import { Default } from "./src/utils/default"
import http from "http"

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

// const logger: ILogger = DIContainer.get<ILogger>(Identifier.LOGGER)
// const app: Application = (DIContainer.get<App>(Identifier.APP)).getExpress()
const port_http = process.env.PORT_HTTP || Default.PORT_HTTP
const port_https = process.env.PORT_HTTPS || Default.PORT_HTTPS

http.createServer((req, res) => {
    const host = req.headers.host || ''
    const newLocation = 'https://' + host.replace(/:\d+/, ':' + port_https) + req.url
    res.writeHead(301, { Location: newLocation })
    res.end()
    
}).listen(port_http)
