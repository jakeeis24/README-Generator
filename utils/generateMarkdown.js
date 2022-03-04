// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `# [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `# [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache 2.0") {
    return `# [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `The work contained in this repository is covered by the MIT License. Learn about it [here.](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `The work contained in this repository is covered by the Mozilla Public License 2.0. Learn about it [here.](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache 2.0") {
    return `The work contained in this repository is covered by the Apache 2.0 License. Learn about it [here.](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return `No license associated with this repository.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  # Description
  ${data.description}

  # Table of Contents
  [Installation](#instructions) \n
  [Usage](#usage) \n
  [Contributing](#contributing) \n
  [Tests](#tests) \n
  [Questions](#questions) \n
  [License](#license)


  # Installation 
  ${data.instructions}
  
  # Usage
  ${data.usage}

  # Contributing
  ${data.contribute}

  # Tests
  ${data.tests}

  # Questions
  My Github username is ${data.github} \n
  Link to my Github profile: ${data.githubUrl} \n
  Questions? Email me: ${data.email}

  # License
  ${renderLicenseLink(data.license)}


`;
}

module.exports = generateMarkdown;
