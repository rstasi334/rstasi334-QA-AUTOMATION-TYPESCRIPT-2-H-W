Lesson 12 - API Testing basics. Creating E2E API tests using Postman
This lesson covers the following topics:
API testing basics
Types of testing that uses API requests
Structure of API request/response
API request methods and response status codes
During this session we learned the basics needed to start API testing. We tried to create (simulate) E2E test using Postman tool that also uses scripts(tests) for needed requests. Then we can run the collection (after exporting it to JSON) using newman cmd tool

How to Run collection
Import the collection to your instance of Postman using this guide

Because we used picture upload from the local file system - please update /images/upload request with the file from your file system before running request or running collection

To run collection from Postman - Right click on this collection and select Run Collection

***

### Run Locally
* Clone the repo
* `npm i && npm run dev`
* Visit `localhost:3005/jokes/random` or `localhost:3005/jokes/ten` on your browser
