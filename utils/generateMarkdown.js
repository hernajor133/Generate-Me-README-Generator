function renderLicenseBadge(selectedLicense) {
    console.log(selectedLicense);
    if (selectedLicense === 'Mozilla License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (selectedLicense === 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (selectedLicense === 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (selectedLicense === 'Boost Software License 1.0') {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else {
        return '';
    }
}



function renderLicenseLink(selectedLicense) {
    if (selectedLicense === 'Mozilla License 2.0') {
        return `[This application is licensed under Mozilla](https://opensource.org/licenses/MPL-2.0)`;
    } else if (selectedLicense === 'Apache License 2.0') {
        return `[This application is licensed under Apache]((https://opensource.org/licenses/Apache-2.0))`;
    } else if (selectedLicense === 'MIT License') {
        return `[This application is licensed under MIT](https://opensource.org/licenses/MIT)`;
    } else if (selectedLicense === 'Boost Software License 1.0') {
        return `[This application is licensed under Boost](https://www.boost.org/LICENSE_1_0.txt)`
    } else {
        return '';
    }
}

function renderLicenseSection(selectedLicense) {
    if (selectedLicense == 'none') {
        return '';
    } else {
        return '## License';
    }
}


function generateMarkdown(selectedLicense) {
    return `${renderLicenseSection(selectedLicense)}
    ${renderLicenseBadge(selectedLicense)}
    ${renderLicenseLink(selectedLicense)}`;
}


module.exports = generateMarkdown;