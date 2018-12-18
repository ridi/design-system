# Design System

## Development

### Website

#### Requirements
- [Ruby Development Environment](https://jekyllrb.com/docs/installation)
- [Yarn](https://yarnpkg.com)

#### Quick Start
```shell
$ cd docs
$ yarn
$ yarn start
```

### Packages

#### Requirements
- [Yarn](https://yarnpkg.com)

#### Quick Start
```shell
$ yarn
$ yarn start
```

#### Deployment
To publish the packages, please follow the steps:

1. Checkout `master` branch.
2. Run `lerna version` to update the packages' version. This will automatically *commit version changes* and *add a tag*.
3. Push the commit & tag to `mater` branch.

> CI will be triggered to start deployment process after pushing the tag.
