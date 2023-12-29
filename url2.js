const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require('url');

// Read the filename from command-line arguments
const filename = process.argv[2];

// Read the file and process each URL
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Split the file content into lines
  const urls = data.split('\n');

  // Process each URL
  urls.forEach((urlString) => {
    // Parse the URL
    const parsedUrl = url.parse(urlString);

    // Get the protocol based on the URL scheme
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    // Make a GET request to the URL
    protocol.get(urlString, (res) => {
      let html = '';

      // Read the response data
      res.on('data', (chunk) => {
        html += chunk;
      });

      // Save the HTML content to a file
      res.on('end', () => {
        // Get the hostname from the URL
        const hostname = parsedUrl.hostname;

        // Create a file name based on the hostname
        const fileName = `${hostname}.txt`;

        // Write the HTML content to the file
        fs.writeFile(fileName, html, (err) => {
          if (err) {
            console.error(`Error writing file: ${err}`);
          } else {
            console.log(`Saved HTML content of ${urlString} to ${fileName}`);
          }
        });
      });
    }).on('error', (err) => {
      console.error(`Error making request to ${urlString}: ${err}`);
    });
  });
});