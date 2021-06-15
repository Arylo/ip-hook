import schedule from 'node-schedule';
import getOptions from './utils/getOptions';
import sendHook from './utils/sendHook';

export default () => {
  const opts = getOptions();

  if (!opts.webhook || typeof opts.webhook === 'undefined') {
    return false;
  }

  if (!opts.interface || typeof opts.interface === 'undefined') {
    return false;
  }

  if (opts.cron && /[^\w\d-* ]/.test(opts.cron)) {
    schedule.scheduleJob(opts.cron.trim(), () => {
      sendHook(opts.webhook, opts.interface);
    });
  }
};
