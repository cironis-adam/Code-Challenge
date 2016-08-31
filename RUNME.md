# Code-Challenge for an internship in Volta

This repository is a finished challenge for an interview in Volta. It is forked from [GitHub](https://github.com/Volta-Charging/Code-Challenge).

## How to run the project

Clone this repository to your local device. Use `cd` to enter the folder __Code-Challenge__. Database is already generated in json by faker in root, so there is no need to start mongodb etc. 

### Run the project
First two steps shouldn't be necessary, so try skipping to step 3.
1. `npm install` It shouldn't be necessary, but in case some modules were missing or wouldn't run.
2. `npm run gulp` Just in case typescript would show errors.
3. `npm start` in folder Code-Challenge.
4. Open `http://localhost:3000` in your web browser.

If everything went well app should load and show you stations and search input which filters results as shown below.
[`Index - screenshot`](./Station-index.png)
[`Search - screenshot`](./Station-search.png)

### About
It was a lot of googling and "stack-overflowing" because it is my first "bigger" project running on Angular2 and Node.JS since I'm more in Front-end developing. It took me way more than two hours but when I knew how it works it wasn't that hard. I learned a lot with this challenge.
 
### Additional design improvements
CSS3 effect on search input to make it more entertaining. Small icon of location to indicate place. 
It wasn't mentioned in requirements but there are some broken stations in database so I have marked them with red color.