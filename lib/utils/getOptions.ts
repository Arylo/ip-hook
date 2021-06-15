export const getOptions = () => {
  return {
    webhook: process.env.WEBHOOK || '',
    cron: process.env.CRON || '',
    interface: process.env.INTERFACE || '',
  };
};

export default getOptions;
