// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GPLv2:'[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    Apache:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    None:"",
  }
  return badges[license]
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return ""
  } else {
    return "- [License](#license)"
  } 
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return ""
  } else {
    return ` ## License
This application uses license ${license}
    `

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

---
## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)



## Installation:
${data.installation}

---

## Usage:
${data.usage}

---

## Contributing:
${data.contributing}

---

## Tests:
${data.tests}

---

## Questions:

Github: <http:github.com/${data.github}>

Contact via Email: ${data.email}

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
