const { scrapeCourses } = require('./scraper');

// EDIT THESE ----------------------------------------------------------------

// The course category and course number you want to track. Example below
const COURSE_CATEGORY = 'Computer Science (CSCI-UA)';
const COURSE_NUMBER = '7441';

// Telegram info for alerts
// Watch a youtube video on 'telegram bot' to learn how to obtain these
const TOKEN = 'ENTER YOUR TOKEN HERE';
const CHAT_ID = 'ENTER YOUR CHAT ID HERE';

// Will run randomly somewhere between every 3-6 seconds.
// Adjust as you wish
var INTERVAL_MIN = 3000;
var INTERVAL_MAX = 6000;
// ---------------------------------------------------------------------------

var interval = parseInt(
  Math.random() * (INTERVAL_MAX - INTERVAL_MIN) + INTERVAL_MIN
);

scrapeCourses(COURSE_CATEGORY, COURSE_NUMBER, TOKEN, CHAT_ID, interval);
