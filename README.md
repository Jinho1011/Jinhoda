# Jinhoda Blog

### TODO

- [ ] fix styled-component fouc
  - [hint](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/)
  - better than before, but still need improvement...
- [ ] fix category button background color in dark-mode

### F\*\*K FOUC

Let's assume the user visited before and set to dark-mode. Then when user come back, site shows as dark-mode at first(170ms) and change to light-mode and return to dark-mode.

The reason of flickering at first is
