# FindETH

[![Build Status](https://travis-ci.com/Mrtenz/FindETH.svg?branch=master)](https://travis-ci.com/Mrtenz/FindETH) [![GitHub license](https://img.shields.io/github/license/Mrtenz/FindETH.svg)](https://github.com/Mrtenz/FindETH/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/Mrtenz/FindETH.svg)](https://github.com/Mrtenz/FindETH/issues) ![David](https://img.shields.io/david/Mrtenz/FindETH.svg) [![Codecov](https://codecov.io/gh/Mrtenz/FindETH/branch/next/graph/badge.svg)](https://codecov.io/gh/Mrtenz/FindETH)

A tool to help you find your lost Ethereum address, Ether or tokens, by searching through a bunch of derivation paths. It currently supports Ledger and Trezor devices and mnemonic phrases. It has experimental support for Ledger devices over Bluetooth.

<https://findeth.io>

## Running locally

If you want to use this tool with your mnemonic phrase, it's required to run it locally. The requirements for this are:

* [Node.js 10 or newer](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

Clone this repository with Git or download the ZIP file and extract it. In the project folder, run the following command to install the dependencies.

```
yarn
yarn bootstrap
```

Now you can run

```
yarn run serve
```

to start the local production server. You can access it by navigating to <https://localhost:8000> in your browser. You will get an SSL warning because it's using a self-signed certificate, but it's safe to ignore this.

## Development

This tool is built on top of React and Redux, and uses tools like `yarn` and `webpack` to bundle everything. Install the dependencies with `yarn` as follows:

```
yarn
yarn bootstrap
```

### Run a local development server

To run a local development server, use:

```
yarn run start:web
```

Head to <https://localhost:8000> in your browser to see the application.

### Bundle the files

Use the following command to bundle everything

```
yarn run build
```

The output files will be available in the `dist` folder.
