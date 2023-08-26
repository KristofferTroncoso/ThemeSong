# Contributing to ThemeSong

## A message from the maintainer

Hey guys! Thanks for your interest in contributing to ThemeSong and the YouTube Music experience!
I had a whole 10-page essay written up about how to contribute and all the processes contributors would have to go through.
Since it's still an early OSS project, I thought I'd just keep the processes minimal for now and go from there.

-- Kris

## Notice to potential contributors

- If you'd like to avoid potentially wasting your time, first open a GitHub Issue to discuss your proposed contribution before diving into coding
  - Low-quality features (themes, visualizers, utilities, etc) may be rejected to avoid software bloat and/or feature creep.
- Naming and written copy may be changed by the maintainer to avoid abuse
  - e.g. A Theme named "KrisWasHereLol Theme" will probably require a change before being accepted.
- Contributed features may be removed, archived, or hidden in the future
- By contributing to this project, you agree to follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Stuff to contribute (in order of most welcome)

- Bug fixes and perfomance improvements:
  - Less bugs is always good
  - Major code refactors and optimization may be postponed. Please open a GitHub Issue first.
- Visualizers:
  - We can always use more high quality audio visualizers
  - Should be fairly good quality and not too redundant
- Pieces:
  - "Pieces" are small UI/UX options such as hiding the dislike button or changing the font
  - These options on top of Themes can really personalize the YouTube Music experience
- Utilities:
  - There's room for more utilities
  - These can make ThemeSong not just look good but be useful as well
- New fun features
  - There's definitely room for more fun features
  - live lyrics, integrations, games?... The sky is the limit!
- Themes (low priority):
  - Most users will stick to a favorite dynamic theme so a few high-quality dynamic themes is all we really need
  - Themes are very high maintenance and require lots of work to thoroughly cover all UI elements
  - There is some room for more "clones" and other creative ideas but for the most part, the existing themes will need maintenance
- Website [currently off limits]
- Etcetera / Art / Drawings / Images / Non-Code stuff:
  - Feel free to explore GitHub Discussions or GitHub Issues
  - People can submit designs and other artwork if they want

Check GitHub Issues, Discussions, or Projects for updated ideas to work on.

# Project Overview:

- This project is a monorepo
  - why? premature optimization
  - currently includes
    - ThemeSong extension (Chromium and Firefox)
    - ThemeSong website (themesong.app)
    - potentially other packages

## Dev environment system requirements:

- git
- pnpm (package manager)
- node

## Start coding on ThemeSong extension:

- cd into /apps/extension
- `pnpm install`
- `pnpm start`
- load the /apps/extension/builds/chrome folder into Chrome (chrome://extensions/)
