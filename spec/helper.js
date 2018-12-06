var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'M8T2.app', 'Contents', 'MacOS', 'M8T2');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'M8T2');
      default:
        throw 'Unsupported platform';
    }
  }
};
