Step one:

Co host your site, you need to install Firebase command line tools using npm (Node.js).

Install Firebase tools:

$ npm install -g firebase-tools
Doesn't work? You may need to change npm permissions.

If you've previously installed Firebase command line tools,
run the install command again to make sure that you have the latest version.

2)  Initiate your project:  firebase init.  Use Public as the public directory
3)  Add your static files to your deploy directory (default is public but you may have dist)
4) Test site locally using command line 'firebase serve'
5) Deploy your website (everything in public folder): 'firebase deploy'
6) go to version history and change settings to say keep previous 4 versions

NOte:  firebase.json file you can configure redirects.  For example:

{
  "hosting": {
    "redirects": [
      {
        "source": "/about", 
        "destination": "/",
        "type": 301 
      },
      {
        "source": "/contact", 
        "destination": "/",
        "type": 302 
      }
    ],
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}