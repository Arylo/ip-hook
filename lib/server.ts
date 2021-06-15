import os from 'os';
import Koa from 'koa';
import getIps from "./utils/getIps";

export default () => {
  const app = new Koa();
  app.use((ctx) => {
    const name = Array.isArray(ctx.query.interface)
      ? ctx.query.interface[0]
      : ctx.query.interface;
    if (name) {
      ctx.body = getIps(name);
    } else {
      ctx.body = Object.keys(os.networkInterfaces())
        .reduce<any>((obj, key) => {
          obj[key] = getIps(key);
          return obj;
        }, { });
    }
  });

  app.listen(8080, () => {
    console.log('listening on http://0.0.0.0:8080');
  });
};
