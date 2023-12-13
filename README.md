# Walkthrough-SAPUI5

# Global installation to have the command available
npm install --global @ui5/cli
 
# Additional local install in your project
npm install --save-dev @ui5/cli

# Run the project in a local web server
npm run build

npm i -D local-web-server

"npm run serve-dist" or "npm start" (both without quotes)

#Other forms of execution

- In the package.json file, modify the line that starts with "start"

"scripts": {
        "start": "ui5 serve -o test/mockServer.html",
        "build": "ui5 build -a",
        "serve-dist": "ws --compress -d dist --open"
    }

to

"scripts": {
        "start": "ui5 serve -o index.html",
        "build": "ui5 build -a",
        "serve-dist": "ws --compress -d dist --open"
    }

and run the command "npm start" (Without quotes)
