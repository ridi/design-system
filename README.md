# RIDI Design System

[![](https://img.shields.io/npm/v/@ridi/colors.svg?label=%40ridi%2Fcolors&style=flat)](https://www.npmjs.com/package/@ridi/colors)
[![](https://img.shields.io/npm/v/@ridi/web-icons.svg?label=%40ridi%2Fweb-icons&style=flat)](https://www.npmjs.com/package/@ridi/web-icons)
[![](https://img.shields.io/npm/v/@ridi/web-ui.svg?label=%40ridi%2Fweb-ui&style=flat)](https://www.npmjs.com/package/@ridi/web-ui)
[![](https://img.shields.io/travis/com/ridi/design-system.svg?label=travis&style=flat)](https://travis-ci.com/ridi/design-system)

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

1. Create a new branch from `master` and do the following:
   - Update `CHANGELOG.md` and commit changes.
   - Run `yarn lerna version --no-git-tag-version` to update the packages' version. This will automatically *commit version changes*.
1. Open a pull request with the branch.
1. When the PR is merged, create a version tag on `master` and push it.

> CI will be triggered after pushing the tag to start deployment process.
