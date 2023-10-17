
const licenseBadgeUrls = {
  Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',

  'GNU General Public': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',

  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

  'BSD 2-Clause "Simplified"': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',

  'BSD 3-Clause "New" or "Revised"': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',

  'Boost Software': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',

  'Creative Commons Zero v1.0 Universal': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',

  'Eclipse Public 1.0': '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',

  'GNU Affero General Public v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',

  'Mozilla Public 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',

  'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',

}

const licenseLinkUrls = {
  Apache: 'https://opensource.org/licenses/Apache-2.0',

  'GNU General Public': 'https://www.gnu.org/licenses/gpl-3.0',

  MIT: 'https://opensource.org/licenses/MIT',

  'BSD 2-Clause "Simplified"': 'https://opensource.org/licenses/BSD-2-Clause',

  'BSD 3-Clause "New" or "Revised"': 'https://opensource.org/licenses/BSD-3-Clause',

  'Boost Software': 'https://www.boost.org/LICENSE_1_0.txt',

  'Creative Commons Zero v1.0 Universal': 'http://creativecommons.org/publicdomain/zero/1.0/',

  'Eclipse Public 1.0': 'https://opensource.org/licenses/EPL-1.0',

  'GNU Affero General Public v3.0': 'https://www.gnu.org/licenses/gpl-3.0',

  'Mozilla Public 2.0': 'https://opensource.org/licenses/MPL-2.0',

  'The Unlicense': 'http://unlicense.org/',
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license.toLowerCase() === 'none'
  ? '' : licenseBadgeUrls[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  return license === 'None' ? '' : licenseLinkUrls[license.toLowerCase()] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license.toLowerCase() === 'none' ? '' : `## License\n\nLicensed under the [${license}](${licenseLinkUrls[license]}) license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}${licenseBadge}${licenseLink}${licenseSection}`
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
}
