# IP Hook

Push the interface IP to any machine, when it start up

[![Author][AUTHOR_URL]][AUTHOR_HREF]
[![MIT-License][LICENSE_URL]][LICENSE_HREF]
[![996ICU-License][LICENSE_996_URL]][LICENSE_996_HREF]

## Environment Variable

|Variable Name|Commit|Example|
|--|--|--|
|WEBHOOK|webhook url|`http://example.com/webhook`|
|INTERFACE|interface name|`lo`|
|CRON||`0 1 * * *`|

## Usage

### Pull
```shell
docker pull ... # TODO
```

### Run

#### Run hook where it start up or 01:00 everyday

```shell
docker run
  --name ip-hook
  -e WEBHOOK=http://example.com/webhook
  -e INTERFACE=lo
  -e CRON='0 1 * * *'
  ... # TODO
```

when the `CRON` is empty, just run when start up.

#### Use webpage

```shell
docker run
  --name ip-hook
  -P 8080:8080
  ... # TODO
```

You can type one of these urls into browser.

- http://ip-hook:8080
- http://ip-hook:8080?interface=lo

[AUTHOR_URL]: https://img.shields.io/badge/Author-AryloYeung-blue.svg?style=flat-square&maxAge=7200
[AUTHOR_HREF]: https://github.com/arylo
[LICENSE_URL]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&maxAge=7200
[LICENSE_HREF]: https://opensource.org/licenses/MIT
[LICENSE_996_URL]: https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square&maxAge=7200
[LICENSE_996_HREF]: https://github.com/996icu/996.ICU/blob/master/LICENSE
