const ext_config = {
  manifest: (name, description, icon48, icon128, permissions) => ({
    manifest_version: 3,
    name,
    description,
    action: {
      default_icon: `icons/${icon48}`,
    },
    icons: {
      48: `icons/${icon48}`,
      128: `icons/${icon128}`,
    },
    version: "1.0",
    chrome_url_overrides: {
      newtab: "new_tab.html",
    },

    permissions,
  }),
  scripts: [
    {
      filename: "background.js",
      content: (
        code
      ) => `chrome.browserAction.onClicked.addListener(function() {
chrome.tabs.create({url: "https://www.example.com"});
});`,
    },
  ],
  html: [
    {
      filename: "new_tab.html",
      content: (body) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>
<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
<!-- MDB -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
  rel="stylesheet"
/>
    <title>Custom Extension Tab</title>
</head>
<body>
    ${body}
    <!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
></script>
</body>
</html>`,
    },
  ],
};

module.exports = ext_config;
