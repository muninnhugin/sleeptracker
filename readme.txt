--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 3/3 The ability to log overnight sleep
- 3/3 The ability to log sleepiness during the day
- 3/3 The ability to view these two categories of logged data
- 3/3 Either using a native device resource or backing up logged data
- 3/3 Following good principles of mobile design
- 3/3 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
Ha: 16 hours
Crystal: 10 hours

3. What online resources did you consult when completing this assignment? (list specific URLs)
https://edupala.com/ionic-segment-example/
https://ionicacademy.com/ionic-routing-navigation/
https://ionicframework.com/docs/components
https://ionicframework.com/docs/native/local-notifications
https://ionicframework.com/docs/angular/your-first-app/deploying-mobile

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Questions and answers and Slack


5. Is there anything special we need to know in order to run your code?
install extra capacitor plug ins with npm install
can launch Android app via ionic capacitor

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?



7. Did you design your app specifically for iOS or Android, or both?



8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
A person can press the "Going to bed" button on the Sleep Timer page to start logging overnight sleep. When they wake up, they can
press the "Waking up" button to stop logging. The time will be recorded to the sleep logs.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
A person can go to the sleepiness page and choose a scale for their sleepiness on the scale. By pressing the submit button, their
sleepiness will be logged.

10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
A person can view the data they logged in the sleep log page. There are two segments, one for sleepiness log and one for overnight time log.
I put them into one page because it is easier for users to check all the logs. Users can switch between sleppiness and overnight.

11. Which feature choose--using a native device resource, backing up logged data, or both?



12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?



13. If you backed up logged data, where does it back up to?


14. How does your app implement or follow principles of good mobile design?
1. There is an "uh-oh" button for logging the overnight sleep in the alert message after pressing the "Going to sleep" and "Waking up" button
2. There is a navigation bar at the bottom for users to navigate between different pages
3. Follows platform conventions with appropriate icons, widgets, and button positions