import { getIps } from "./getIps"

export const sendHook = (url: string, interfaceName: string) => {
  try {
    fetch(url, {
      method: 'post',
      body: JSON.stringify(getIps(interfaceName)),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
  }
}

export default sendHook;
