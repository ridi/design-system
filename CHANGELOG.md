# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [0.7.4] - 2020-09-16
### @ridi/colors
- Add scubablue color

## [Unreleased]
## [0.7.3] - 2020-03-17
### @ridi/colors
- Resurrection .travis.yml

## [0.7.2] - 2020-03-17
### @ridi/colors
- Added Seagreen

## [0.7.1] - 2019-09-25
### Fixed
- Optimize icons
- Fix build process - Move svgo to pre-commit hook

## [0.7.0] - 2019-09-25
### @ridi/web-icons
- **BREAKING** - Renaming icon
  - `Ridiselect` → `RidiselectFilled`
#### Added
- Add multiple icons
### @ridi/web-ui
- **BREAKING** - Remove components
  - `Annotation`
  - `DownloadButton`
  - `ReadingProgressBar`
  - `UnitBookDownloading`
  - `UnreadDot`
#### Added
- Add slots to LandscapeBook and PortraitBook
- Add SVGO to build process

## [0.6.3] - 2019-08-19
### Fixed
- Update yarn.lock

## [0.6.2] - 2019-08-19
### Removed
- Remove lodash from web-ui

## [0.6.1] - 2019-08-12
### Changed
- Update the adult badge to use path instead of text

## [0.6.0] - 2019-07-23
### Changed
- **BREAKING**: Book component only icons remove from '@ridi/web-icons'
- Adult badge icon file type change : base64 → SVG
  

## [0.5.0] - 2019-07-03
### Fixed
- Fix max-height issue

### Changed
- **BREAKING**: Change thumbnailWidth prop 
  - optional to required
  - type: only pixel number

## [0.4.0] - 2019-06-27
### Changed
- **BREAKING**: Remove unused components

## [0.3.10] - 2019-03-18
### Fixed
- Fix line clamp bug
- Fix ExpiredAt remain time conditional rendering
- Fix typo

## [0.3.9] - 2019-03-14
### Fixed
- Fix some method for IE : includes to indexOf

## [0.3.8] - 2019-03-13
### Fixed
- Fix wrong font style order

### Added
- Add conditional rendering to ExpiredAt icon
- Add thumbnail image skeleton’s height Ratio

## [0.3.7] - 2019-03-13
### Added
- Add thumbnailChildrenSize props

### Fixed
- Fix update badge style

## [0.3.6] - 2019-02-26
### Added
- Add a logic for already loaded image

## [0.3.5] - 2019-02-26
### Added
- missing props

### Fixed
- flex layout
- README

## [0.3.4] - 2019-02-25
### Fixed
- Fix flex style for IE 11

## [0.3.3] - 2019-02-21
### Added
- Add Thumbnail Image skeleton

### Fixed
- Fix Expired layout

## [0.3.2] - 2019-02-20
### Added
- Fix/book component (#48)
- Setup Netlify (#47)

## [0.3.1] - 2019-02-15
### Added
- Add slots to LandscapeBook and PortraitBook (#46)

## [0.3.0] - 2019-02-14
### Added
- Implement `Group` component. (#35)

### Changed
- **BREAKING**: Remove unused icons and renaming, Fix Book component styles (#44)

## [0.2.2] - 2019-02-08
### Fixed
- Add classnames to 'Book''s some child components and Fix UnitBookCount style (#43)

## [0.2.1] - 2019-01-29
### Fixed
- Fix 'Book''s child components z-index and classNames (#42)

## [0.2.0] - 2019-01-25
### Added
- Publish package explorer (#40)

### Changed
- **BREAKING**: Rename indexes and files of `@ridi/colors` and `@ridi/icons` (#34)

## [0.1.2] - 2019-01-24
### Fixed
- Add missing conditions and change styles for `Book` (#39)

## [0.1.1] - 2019-01-23
### Fixed
- Fix `Book`'s `max-width` and conditional rendering option (#38)

## [0.1.0] - 2019-01-22
### Added
- Add `thumbnailLink` prop to `Book` (#37)

### Changed
- **BREAKING**: Change `renderUnitBookCount` to `unitBookCount` of `Book` (#37)

## [0.0.2] - 2019-01-18
### Added
- Implement `Options` component. (#33)

### Fixed
- Fix server side rendering error. (#36)

## [0.0.1] - 2019-01-18
- Initial release.
