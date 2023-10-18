// License Badges
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

// Program Badges
const badgesArrUrl = {
  GIT: '![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)',

  GitHub: '![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)',

  'GitHub Pages': '![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)',

  'GitHub Actions': '![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)',

  JavaScript: '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',

  MySQL: '![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)',

  Bootstrap: '![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)',

  jQuery: '![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)',

  'Node.JS': '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)',

  'Express.js': '![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)',
}

// License
const renderLicenseBadge = (license) =>
(license === 'None' ? '' : `\n${licenseBadgeUrls[license]}\n`)

// Live Link
const renderLiveLink = (liveLink, liveLinkUrl) =>
liveLink === 'Yes'
  ? `[Link to live deploy](${liveLinkUrl})\n`
  : liveLink === '\nPlaceholder (add later)'
  ? `[Link to live deploy](add url here)\n`
  : ''

// Description
const renderDescription = (data) => {
  return data.description
  ?`## Description\n${data.description}\n`
  : ''
}

// Installation
const renderInstallation = (installation) => {
  return installation
    ? `## Installation\n${installation.split('. ').map((step, index) => `${index + 1}. ${step}`).join('\n')}\n`
    : ''
}

// Program Badges
const renderProgramBadges = (data) => {
  const selectedBadges = data.badges
      .filter((badge) => badge !== 'None')
      .map((badge) => badgesArrUrl[badge])

  return selectedBadges.length > 0
      ? `## Badges\n${selectedBadges.join('\n')}`
      : ''
}

// Function to generate markdown for README
function generateMarkdown(data) {

  // License
  const licenseBadge = renderLicenseBadge(data.license)

  //Live Link
  const livelinkSection = renderLiveLink(data.liveLink, data.liveLinkUrl)

  //Description
  const descriptionSection = renderDescription(data)

  //Installation
  const installationSection = renderInstallation(data.installation)

  //Badge
  const badgesSection = renderProgramBadges(data)

  return `# ${data.title}\n${licenseBadge}\n${livelinkSection}\n${descriptionSection}${installationSection}${badgesSection}`
}

module.exports = {
  generateMarkdown,
}
