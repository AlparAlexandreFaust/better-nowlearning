# Better NowLearning

A browser extension that enhances the learning experience on the ServiceNow Learning platform.

## Description

Better NowLearning is a browser extension that adds useful features to the ServiceNow Learning platform. Currently, the extension focuses on improving SCORM content visualization by automatically adjusting iframe heights to provide a better viewing experience.

## Features

- **Automatic height adjustment**: Increases SCORM iframe height to 85vh, allowing you to view more content without constant scrolling
- **CSS style application**: Applies custom styles to improve the user interface
- **Specific execution**: Works only on ServiceNow Learning course pages

## Installation

### Manual installation (developer mode)

1. Download or clone this repository to your computer
2. Open your browser's extensions page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
   - Firefox: `about:addons`
3. Enable "Developer mode" (usually a toggle in the top right corner)
4. Click "Load unpacked" (Chrome/Edge) or "Load temporary add-on" (Firefox)
5. Navigate to the folder where you downloaded/cloned this repository and select it

## Usage

1. Access the ServiceNow Learning platform at [learning.servicenow.com](https://learning.servicenow.com)
2. Navigate to any course page
3. The extension will automatically activate and adjust SCORM iframe heights

## Debugging

If you need to debug the extension:

1. Open the `content.js` file
2. Change the line `const DEBUG = false;` to `const DEBUG = true;`
3. Reload the extension in your browser's extensions page
4. Open the browser console (F12) to see debug logs

## Project Structure 