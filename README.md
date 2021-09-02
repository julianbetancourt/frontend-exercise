# Notes

- Available at this [Github Page](https://julianbetancourt.github.io/frontend-exercise/)

- Server requests: Handled with `react-query` and `axios`. This allows us to keep our UI state separated from server state. Created a custom hook that can be utilized in other parts of the app if required. We can easily prefetch when we think we can predict the users behaviour; in our case, if a user is in page 1 we can prefetch page 2 and when they do go to the new page the data will be already there.

- Styles and responsive: Used `styled-components` with a classic css-reset. Media queries are defined in `src/utils/styles.ts` and are based on [adaptative design](https://www.uxpin.com/studio/blog/responsive-vs-adaptive-design-whats-best-choice-designers/) instead of classic device breakpoints.

- Planets filtering: I questioned myself whether I should _filter out_ planets OR _search_ by making a new HTTP request. The assignment says "filter" so I went ahead and implemented a client-side filter system whose core is `[{}].includes(search)`. To be clear, the API supports search with `/api/planets/?search=name` however implementing this brings new challenges as we are also constantly including `?page=` and the search query param does not work in conjuction with page (e.g `/api/planets/?search=Tatooine` works but `/api/planets/?search=Tatooine?page=1` does not). I also decided to `memo` the filtering. This could be perceived as an early optimization as it is now because the planets rendered per page are in the 10s, `memo` would really be useful here if the total of planets was more in the 100s.

- Sorting. Implemented a simple sorting from low to high using a select element to choose the criteria. We sort in a 2nd loop (apart from the 1st filtering loop) which is fine for the amount of data we're handling, if we had thousands, the current O(N2) could case performance issues, in such case, we would have to look for a O(N) solution

- Marking reviewed. Managed through a simple array of urls (as planets dont have an id but do have a unique url). Decided to put the state in `PlanetsContainer` as `App` (its parent) doesn't need to know about it and one shoud always ["keep state as close to where it's needed"](https://julianbetancourt.co/blog/manejo-de-estados-de-aplicacion-en-react)

- Error handling: if an error does happen in GET /api/planets (either a network issue or response for a bad request) `NoPlanets` will take care of it.

- Testing: Since the time was limited, I decided to implement integration tests that checked whole functionalities and bring us more value (instead of for example testing `Pagination` in isolation and checking that the pagination number changes when buttons are clicked). I used `msw` to interecept requests from the UI and mock them as we wish. In `mocks/planets` I export several utilities that can be use anywhere in the test suite to override the global server (in `mocks/server` and instantiated in `setupTests`)

---

# ONTRUCK FRONT-END TEST

Welcome to the Ontruck front end test, we are so glad that you reached here and we are so gratefull for the time you are going to dedicate to this test. We hope that you don't invest more than a couple of hours to make it work and that you enjoy doing it.

## Objective

The objective of this test is that you show us your front end skills and more specifically your skills with the React framework, if the test meets our criteria we will have a technical interview where we can discuss the decissions taken in the test and get a bit deeper into your knowledge.

## So, what you need to do?

Given this [repository](https://github.com/ontruck/frontend-exercise) with a Create React App boilerplate we want you to implement a list of SW planets showing at least these properties: name, diameter, climate, population and terrain.

You will need to fetch the list of planets from [this public API](https://swapi.dev/) like "https://swapi.dev/api/planets" it will return a list of paginated planets with the desired properties.

Here it's a design about how we want it to look. [DESIGN](https://www.figma.com/file/7XKPqc9Yd4ns8fAu5XRq40/FE-Technical-Test?node-id=0%3A1)

### Main functionalities

- Make it responsive, it should look good in mobile and desktop.
- Fetch the data from the public api. It's ok to use a library like Axios, SWR or similar, up to you.
- Show the list of planets and their properties in each card.
- You don't need to care about pagination, it's ok to work with the first page of planets that the api returns.
- You need to implement a search box that should filter the list of planets by name from a string the user should type in an input field.

#### Bonus functionalities (not required, just if you have the time)

- Tests
- More product complexity:
  - Mark planets as reviewed.
  - Sorting the list of planets by their properties.
  - Add more properties to search by at the search box.
  - Edit the planet information saving locally.
- Basic CI/CD funnel with free Github actions or similar.

### How would you share it?

We want you to fork this repo to your github account and push your code there, then you could share with us the link so we can check the code before the interview.

Extra points if you could make it available on Github pages 😉

## Final thoughts

Let us know if you have any major questions with the objective or the functionalities, although we want you to take your own decisions if you are able to back them up later in the interview.

Thank you for your time!

The Ontruck team.
