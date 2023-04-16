import express, { Application } from "express";
import { config } from "dotenv";
import cors from 'cors'
import { inject, injectable } from "inversify";
import { Identifier } from "di/identifier";
import { ILogger } from "utils/custom.logger";
import { InversifyExpressServer } from "inversify-express-utils";
import { DIContainer } from "di/di";
import qs from "query-strings-parser";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";


@injectable()
export class App{
  private readonly express: Application

  constructor(@inject(Identifier.LOGGER) private readonly _logger: ILogger) {
    this.express = express()
    this.bootstrap()
  }

  public getExpress(): Application {
    return this.express
  }

  private bootstrap(): void {
    this.initMiddleware()
  }

  private initMiddleware(): void {
    this.setupInversifyExpress()
  }

  setupInversifyExpress() {
    const inversifyExpress: InversifyExpressServer = new InversifyExpressServer(
        DIContainer, null, { rootPath: '/' })

        inversifyExpress.setConfig((app: Application) => {
          // for handling query strings
          // {@link https://www.npmjs.com/package/query-strings-parser}
          app.use(qs({
              use_page: true,
              default: {
                  pagination: { page: 1, limit: 100 }
              }
          }))

          // helps you secure your Express apps by setting various HTTP headers.
          // {@link https://www.npmjs.com/package/helmet}
          app.use(helmet())

          // create application/json parser
          // {@link https://www.npmjs.com/package/body-parser}
          app.use(bodyParser.json())
          // create application/x-www-form-urlencoded parser
          app.use(bodyParser.urlencoded({ extended: false }))

          app.use(morgan(':remote-addr :remote-user ":method :url HTTP/:http-version" ' +
              ':status :res[content-length] :response-time ms ":referrer" ":user-agent"', {
                  stream: { write: (str: string) => this._logger.info(str) }
              }
          ))
      })
    this.express.use(inversifyExpress.build())
  }
}

config();
export const app = express();

app.use(express.json())
app.use(cors())


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(`Acesso: http://localhost:8000`);
});
