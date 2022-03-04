// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}

  # Table of Contents
  [Installation](#instructions) \n
  [Usage](#usage) \n
  [Contributing](#contributing) \n
  [Tests](#tests) \n
  [Questions](#questions) \n


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
  Or email me: ${data.email}


`;
}

module.exports = generateMarkdown;
