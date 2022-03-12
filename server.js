// import cacheableResponse from 'cacheable-response';
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const dayjs = require('dayjs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

morgan.token('dateTime', (req, res, tz) => {
  return dayjs().locale('id').format('dddd, D MMMM YYYY, HH.mm');
});

// Example for using SSR cache
// const ssrCache = cacheableResponse({
//   ttl: 1000 * 60 * 60, // 1hour
//   get: async ({ req, res }) => {
//     const data = await app.renderToHTML(req, res, req.path, {
//       ...req.query,
//       ...req.params,
//     })

//     // Add here custom logic for when you do not want to cache the page, for
//     // example when the page returns a 404 status code:
//     if (res.statusCode === 404) {
//       res.end(data)
//       return
//     }

//     return { data }
//   },
//   send: ({ data, res }) => res.send(data),
// })

app.prepare().then(() => {
  const server = express();
  const port = process.env.NEXT_PUBLIC_APP_PORT ? process.env.NEXT_PUBLIC_APP_PORT : 3000;

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  // Disabling x-powered-by in response headers
  server.set('x-powered-by', false);

  // Access log
  if (dev) {
    server.use(
      morgan(
        `[ ${chalk.blue('request')} ] ${chalk.greenBright(':method')} ${chalk.yellowBright(
          ':url'
        )} ${chalk.magentaBright(':status')} ${chalk.cyanBright(':response-time ms')}`
      )
    );
  } else {
    server.use(
      morgan(
        `${chalk.blueBright('[:dateTime]')} ${chalk.greenBright(':method')} ${chalk.yellowBright(
          ':url'
        )} ${chalk.magentaBright(':status')} ${chalk.cyanBright(':response-time ms')} ":user-agent"`
      )
    );
  }

  // Example for using SSR cache
  // server.get('/', (req, res) => ssrCache({ req, res }))
  // server.get('/blog/:id', (req, res) => {
  //   return ssrCache({ req, res })
  // })

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME ? process.env.NEXT_PUBLIC_APP_NAME : 'Application';
    if (err) {
      console.log(chalk.redBright(err));
      throw err;
    }
    if (dev) {
      console.log(
        chalk.green(
          `> Development ${appName} Ready on ${chalk.yellowBright(
            `http://localhost:${port}`
          )} => ${chalk.cyanBright('HAPPY CODING :D')}`
        )
      );
    } else {
      console.log(chalk.greenBright(`> ${appName} is already running`));
    }
  });
});
