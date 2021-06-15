import os from 'os';

interface IIpObject {
  hostname: string;
  IPv4?: string;
  IPv6?: string;
}

export const getIps = (name?: string) => {
  const o: IIpObject = { hostname: os.hostname() };
  if (!name) return o;
  name = name.trim();
  const interfaces = os.networkInterfaces();
  return interfaces[name]?.reduce((obj, _if) => {
    obj[_if.family] = _if.address;
    return obj;
  }, o) ?? o;
};

export default getIps;
