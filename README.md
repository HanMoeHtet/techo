# [Techo](https://github.com/HanMoeHtet/techo) &middot; ![](https://github.com/HanMoeHtet/techo/actions/workflows/main.yml/badge.svg) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![npm version](https://img.shields.io/npm/v/@han-moe-htet/techo.svg?style=flat)](https://www.npmjs.com/package/@han-moe-htet/techo) 

Touch and echo. Genarate dynamic files from stubs. Currently supports React only.

## Get started

```
npm i -g @han-moe-htet/techo
```

Or install locally
```
npm i -D @han-moe-htet/techo
```

Generating a component file
```
techo make:component Button
```

If you installed locally
```
npx techo make:component Button
```

## Usage 

<pre>Usage: techo [options] [command]

Options:
  -V, --version                    output the version number
  -h, --help                       display help for command

Commands:
  make:component [options] &lt;name&gt;  Create a new component
  make:page &lt;name&gt;                 Create a new page
  make:service &lt;name&gt;              Create a new service
  make:composable &lt;name&gt;           Create a new composable that contains related hooks, contexts, providers, HOCs
  make:icon [options] &lt;name&gt;       Create a new icon
  make:layout &lt;name&gt;               Create a new layout
  help [command]                   display help for command</pre>