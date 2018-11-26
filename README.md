# Design System

## Development

### Website

#### Requirements
- [Ruby Development Environment](https://jekyllrb.com/docs/installation)
- [Node](https://nodejs.org) >= 10

#### Quick Start
```shell
$ cd docs
$ npm install
$ npm start
```

### Packages

#### Requirements
- [Node](https://nodejs.org) >= 10
- [Lerna](https://lernajs.io) (optional for adding dependencies)

#### Quick Start
```shell
$ npm install
$ npm start
```

#### Adding Dependencies
To add a dependency to a specific package, you should use `lerna add` instead of `npm install`.

For example:
```shell
$ lerna add lodash --scope=@ridi/web-ui
``` 
Please see [`@lerna/add`](https://github.com/lerna/lerna/tree/master/commands/add#readme) for more details.
