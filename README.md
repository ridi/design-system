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
2. Update `CHANGELOG.md` and commit changes.
3. Run `node_modules/.bin/lerna version` to update the packages' version. This will automatically *commit version changes* and *add a version tag*.
4. Push the commits & version tag to `mater` branch.

> CI will be triggered after pushing the tag to start deployment process.
