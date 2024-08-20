# [Project Name]

Created by Rashell and Kevin.

## 🚀 Mission statement

Our application, freeventure is for gamers looking for free games. It allows users to browse for free games based on their prefrences.

## API & React Router

This application will use the Free-To-Play-Games API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: [https://www.freetogame.com/api-doc]

-  https://www.freetogame.com/api/games
  - This will fetch an array of free games
  - For each game, I want the `id`, `title`, `thumbnail`, and `release_date`
- https://www.freetogame.com/api/games
  - This will fetch (on click) a single game object
  - I will use the `id`, `title`, `short_description`, `thumbnail`, `release_date`, `genre` and `URL`
- https://www.freetogame.com/api/games?platform=pc
  - This will fetch a filtered list of games based on the platform
  - For each games, I will use the `id`, `title`, `thumbnail`, and `release_date`
- https://www.freetogame.com/api/games?category=shooter
  - This will fetch a filtered list of games based on the category
  - For each games, I will use the `id`, `title`, `thumbnail`, and `release_date`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/game list` page, users can view a list of free games and be able to click on them
* On the `/${title} (single) game` page, users can view, a short description, genre, and the store page URL 
* On the `/platform` page, users can see a filtered listing of games based on platform
* On the `/category` page, users can see a filtered listing of games based on category

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to search for a specified game. 
* Users will be able to lightmode/darkmode
* Users will be able to save their free games (maybe)

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Making sure fetching works (fetching for the right things, making sure they're working properly) 
- [ ] Creating the bare-bones components needed (no functionality) 

**Day 2**
- [ ] Make proper functionality to the components 
- [ ] Get the routing down (make sure the components are in their proper places)
- [ ] General functionality throughout the site

**Day 3** (MVP due by the end of the day)
- [ ] Focus on stretches ---> Local storage (?), Search Bar, Light mode/Dark mode

**Day 4**
- [ ] MAKE IT LOOK PRETTY

**Day 5**
- [ ] MAKE IT LOOK PRETTY

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

https://wireframe.cc/ruu3eh

