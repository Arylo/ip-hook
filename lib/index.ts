import webhookFn from "./webhook";
import scheduleFn from "./schedule";
import serverFn from "./server";

Promise.all([webhookFn(), scheduleFn(), serverFn()]);
