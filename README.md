## Varo Web Engineering Challenge

For this challenge, you’ll build a small web application that fetches a list of movies from ​TheMovie Database​ (​https://www.themoviedb.org/​) API and displays them to a user. The exercise is open-ended and calibrated to take approximately two hours of your time. You’re welcome to add as many extra features as you like if you finish the requirements early. Take a look at theOptional​ section if you need some inspiration.

### Repo Instructions

- Run npm install
- Add API key (received in the challenge email) to `/server/services/imdb.js`
- Run npm start

### Guidelines

- Use any third-party libraries you like.
- Pay attention to code cleanliness, naming, and testability.
- Plan out proper separation of concerns between your components.
- UI and aesthetics are not our primary concern but the user experience should be intuitive thoughtful and responsive.
- Make sure your code compiles and has no errors or warnings.
  - Note: warnings caused by third-party libraries are fine.

### Requirements

- An API for _The Movie Database_ is available and set to a list of “Now Playing” movies
  - Additional documentation can for endpoint can be found at: https://developers.themoviedb.org/3/movies/get-now-playing
- Display the movies in the layout found in `/wireFrames` or seen below.

  - Mobile

    ![Mobile Wire Frame][mobilewireframe]

    When row is tapped it expands to show detail content

  - Non-mobile

    ![Non-Mobile Wire Frame][nonmobilewireframe]

    When card is clicked it flips/collapses to show detail content

- Add a way to favorite a movies that posts back to server.
- Add an additional page to view favorites by returning them from the server.

### Optional

- Enable sorting of movies in the backend by rating, release date, title and update UI to utilize it.
- Enable searching for movies.
- Show off some animation.
- Add the ability to view local show times.
- Anything else you like!

If you’re not able to finish in the designated time, just send us what you have. At the end of the day, quality > quantity, meaning: if the code is really good, and you're missing a small feature,that doesn’t mean you're disqualified.

[mobilewireframe]: wireFrames/webChallengeMobile.jpeg 'Mobile Wire Frame'
[nonmobilewireframe]: wireFrames/webChallengeNonMobile.jpeg 'Non-Mobile Wire Frame'


### My own instruction 

first run npm install to install the necessary packages

Then run npm start to start the application 

--- Some the things that i have made to implement the functionalites are

1) based on the documentation of imdb i specified the image baseUrl and available poster and backdrop sizes
2) added roboto from google font using index.html method
3) Generate session id using the imdb guest session endpoint and store it in local storage
4) install react redux toolkit
5) install qs to parse query string of url