# &nbsp; React &nbsp;&nbsp;+&nbsp;&nbsp; Redux

| | |
| - | - |
| A library for creating user interfaces | A predictable state container

![][redux-react]


---

# Overview

-----

| __Part 1__ | __Part 2__ | __Part 3__ |
|:---------- |:---------- |:---------- |
| &cir;&nbsp; What is React? | &cir;&nbsp; Unit Testing | &cir;&nbsp; What is Redux?
| &cir;&nbsp; Why use it? | | &cir;&nbsp; State is your friend
| &cir;&nbsp; Let's code! | | &cir;&nbsp; More coding!

---

# Who's Using It?

[yahoo.com]: http://yahoo.com
[facebook.com]: http://facebook.com
[office.com]: http://office.com
[outlook.office365.com]: http://outlook.office365.com
[walmart.com]: http://walmart.com
[walmart-article]: https://www.informationweek.com/devops/programming-languages/walmart-agility-enabled-with-reactjs-nodejs/d/d-id/1328676?

&nbsp;

| | |
| -:| - |:-
| [yahoo.com][yahoo.com] | &nbsp;&nbsp;&nbsp; | News + other areas
| [facebook.com][facebook.com] | | Because obviously
| [office.com][office.com] | | Office 365
| [outlook.office365.com][outlook.office365.com] | | MS likes React
| [walmart.com][walmart.com] | | [(article)][walmart-article]

---

# Why?

<!-- {{ x: step * 1200 * 1 }} -->

-----

Cross Platform

Community Support

Unidirectional Data Flow

Excellent for Small, Medium, or Large Applications



---

![https://www.otssolutions.com/blog/wp-content/uploads/react-native-for-cross-platform-mobile-app-development.jpg](https://www.otssolutions.com/blog/wp-content/uploads/react-native-for-cross-platform-mobile-app-development.jpg)

---

![https://cdn.images.dailystar.co.uk/dynamic/184/photos/222000/620x/Oculus-Rift-Vr-Headset-Facebook-data-505708.jpg](https://cdn.images.dailystar.co.uk/dynamic/184/photos/222000/620x/Oculus-Rift-Vr-Headset-Facebook-data-505708.jpg)

---

![https://zgab33vy595fw5zq-zippykid.netdna-ssl.com/wp-content/uploads/2017/03/ChangesinDemand.png](https://zgab33vy595fw5zq-zippykid.netdna-ssl.com/wp-content/uploads/2017/03/ChangesinDemand.png)

---

__The fifteen most popular languages on GitHub__

![Picture][most-popular-languages]

by opened pull request

---

__Projects with the most contributors__

![Most Contribtors][most-contributors]

---

![Tech][tech]

-----

| |
| - | - | - | - | - |
| React | Redux | | NodeJS | Babel
| Jest | VS Code | Wallaby | MaterialUI | Webpack

---

# UFO Sightings

-----

| Components | |
|:---------- 

- List
- Filter by shape, state, etc.
- Sighting of the day (ticker, react-truncate)
- Tabbed Display (opened items)
- Ratings
- Filter by Rating

---

# Museums

-----

| Components | |
|:----------

- List
- Detail
- Filter by State
- Find nearest museum


---

# TED Talks

-----

| Components | |
|:----------

- Word cloud ([react-tag-cloud](https://www.npmjs.com/package/react-tag-cloud))
- Posts with tag lookup (table)
- Event Quick Detail
- Full Transcript
- Ratings
- Related Talks
- Formatted Duration
- Formatted Date


---

# A few packages for convenience

linq
```js
import Enumerable from 'linq';
Enumerable.from(someArray)
    .where(x => x.someProp === 'someValue')
    .select(x => ({...x}))
    .toArray();
```

-----

react-overflow-ellipsis
```js
import OverflowEllipsis from 'react-overflow-ellipsis'
<OverflowEllipsis>{longText}</OverflowEllipsis>
```


---

# Best Practices

- If it can be calculated, it should be (see: [identify state](https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state))
- Calculations and conditionals should happen in render.
- Keep components small, simple.

---

![Redux Flow][redux-flow1]

---

# Resources

- [9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
- [React Architecture and Best Practices](https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md)
- [Clean Code vs. Dirty Code: React Best Practices](http://americanexpress.io/clean-code-dirty-code/)

