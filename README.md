<img src="https://user-images.githubusercontent.com/57072903/184505533-f61774e7-f392-4cc4-aa00-67c8dbb08f41.svg#gh-dark-mode-only" width="600px"> 
<img src="https://user-images.githubusercontent.com/57072903/184505372-c0a81d1f-163e-4827-95d4-6b0905ccd282.svg#gh-light-mode-only" width="600px">

## 📋 Overview
This course tracker utilises puppeteer to scrape the NYU public course search via a headless browser for your desired class and check its status. It sends you an alert via telegram when the class opens up. I used this program to track a class for about a month and was finally able to enroll once I got an alert that it opened up. I hope this little program proves useful to you. Please see usage guide below for instructions. 

## ⚡️ Usage Guide

Clone the repo or download a zip and open it up in your desired IDE. Then, run the following command in your root to install all dependencies.

<img src="https://user-images.githubusercontent.com/57072903/184505707-75b8db1a-4dc6-4033-80af-61d55bb0194c.png" width="300px">


Then, open up ```index.js``` and edit the following values.

<img src="https://user-images.githubusercontent.com/57072903/184505701-c47a261b-41ec-4ae1-8ab0-2e95c8a73448.png" width="600px">

To find the course category and number, visit this link: https://sis.nyu.edu/psc/csprod/EMPLOYEE/SA/c/NYU_SR.NYU_CLS_SRCH.GBL?& and find your category. 

<img src="https://user-images.githubusercontent.com/57072903/184505856-f48e65d0-478c-4ca5-bf33-9cac1950f2ba.jpg" width="600px">

Then, click on it, and find your class. Copy the number. Make sure you are copying the correct one. 
<img src="https://user-images.githubusercontent.com/57072903/184505893-87072d50-3f0a-4ed2-8525-055e508015c0.png" width="600px">

Update the information in ```index.js```.

Then, all you have to do is run the file and pray. 

## Notes

The bot currently checks for a closed class that becomes open. If you would like to check for a closed class that is likely to open up directly into a waitlist, then go to ```scraper.js``` and change the conditional on line 51 to:

<img src="https://user-images.githubusercontent.com/57072903/184506030-a0da1704-6464-4731-9a80-41bee8fc48f4.png" width="500px">

I have opted to not do it this way by default because I am not sure if classes even open up into a waitlist, and it is therefore untested. It could cause a lot of unnecessary telegram alerts if it always detects a class rotating between closed and waitlist. 

## License

MIT
