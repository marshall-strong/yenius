![](./client/src/images/logo-yenius-1482-207.png)

# Description

headcase is a single page web app clone of the meditation website <a href="https://www.headspace.com/" target="_blank">headspace</a> that allows users to stream guided meditations. Check out the live site <a href="https://headcase-aa.herokuapp.com/#/" target="_blank">here</a>!

![](./app/assets/images/headcase-gif2.gif)

# A Rock Solid, Modern Web Stack
Create React App
All the power of a highly-tuned Webpack config without the hassle.

Rails in API-only mode
Just the best bits, leaving React to handle the UI.

ActiveAdmin
An instant CMS backend.

Seamless deployment on Heroku
Same-origin (so no CORS complications) with build steps to manage both Node and Ruby.

Single page app support with React Router
So you can have lightning fast rendering on the front end.

# Technologies

Frontend:

* React
* Redux
* SCSS
* Bing News Search API

Backend:

* Ruby on Rails
* PostgreSQL

Hosting:
* AWS S3
* Heroku

# Features

* User Authentication, including error handling and "Demo User" login
* Custom audio player built with the HTMLAudioElement API and DOM Event Listeners
* CRUD (Create, Read, Update, Delete) functionalities for a user's "User Packs"
* => Authenticated Users can create, update, and delete comments/annotations
* "Meditation Completions" to track the meditations the user has listened to in each "User Pack"
* Media management and hosting with Rails Active Storage and AWS S3

![](./app/assets/images/headcase-gif1.gif)

# Project Highlights

One major challenge of this project was creating an audio player from scratch. I chose to utilize the HTMLAudioElement API, which gave me access to the properties and methods of ```<audio>``` elements while also giving me the flexibility of custom styling. These event listeners are applied in the ```componentDidMount``` function.

```js
  componentDidMount() {
    this.handleTimeUpdate();
    this.audio.addEventListener('loadedmetadata', this.handleMetadata);
    this.audio.addEventListener('ended', this.handleCompletion);
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
  }
```

The ```handleTimeUpdate``` function accesses the ```currentTime``` and ```duration``` properties on the ```Audio``` instance. It formats the current time and duration to be displayed beneath the player as well as calling the ```positionTime``` function which updates the position of the handle on the progress bar.

```js
  handleTimeUpdate() {
    if (this.audio) {
      let curMins = Math.floor(this.audio.currentTime / 60);
      let curSecs = Math.floor(this.audio.currentTime - curMins * 60);
      let durMins = Math.floor(this.audio.duration / 60);
      let durSecs = Math.floor(this.audio.duration - durMins * 60);
      if (curSecs < 10) {
        curSecs = "0" + curSecs;
      }
      if (durSecs < 10) {
        durSecs = "0" + durSecs;
      }
      if (curMins < 10) {
        curMins = "0" + curMins;
      }
      this.setState({ durMins })
      if (durMins < 10) {
        durMins = "0" + durMins;
      }
      this.setState({
        currentTime: curMins + ":" + curSecs,
        durTime: durMins + ":" + durSecs,
        currentTimeUnMod: this.audio.currentTime
      })
      let ratio = this.audio.currentTime / this.audio.duration;
      if (this.outer) {
        let position = (this.outer.offsetWidth * ratio) + this.outer.offsetLeft;
        this.positionTime(position);
      }
    }
  }

  positionTime(position) {
    let outerBarWidth = this.outer.offsetWidth - this.range.offsetWidth;
    let rangeLeft = position - this.outer.offsetLeft;

    if (rangeLeft >= 0 && rangeLeft <= outerBarWidth) {
      this.range.style.marginLeft = rangeLeft + "px";
    }
    if (rangeLeft < 0) {
      this.range.style.marginLeft = "0px";
    }
    if (rangeLeft > outerBarWidth) {
      this.range.style.marginLeft = outerBarWidth + "px";
    }
  }
  ```

The audio player features an animated button that toggles between play and pause, a progress bar that shows the current position of the audio track based on the current time vs the track duration, and the ability for the user to click the progress bar to seek. These features are created by utilizing local react state inside of the ```PlayPage``` component as well as handling a user's interactions with the progress bar.

```js
  togglePlay() {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  handleMouseMove(e) {
    this.positionTime(e.pageX)
    this.audio.currentTime = (e.pageX - this.outer.offsetLeft) / this.outer.offsetWidth * this.audio.duration;
  }

  handleMouseDown(e) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp(e) {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

```

Additionaly, an ```onEnded``` event listener is applied to the audio track, which allows for a "Meditation Completion" to be created when the user finishes listening to a meditation.

```js
  handleCompletion() {
    this.setState({ play: false })
    let meditationCompletion = {
      userPackId: this.props.currentUp.id,
      meditationId: this.props.currentMed.id
    }
    this.props.action(meditationCompletion);
  }
```

# To Do

* Edit audio player to function more closely to the headspace audio player
* Implement meditation completion timeline on the user's profile page


# SCRATCH

Production: https://yenius--rails6-api.herokuapp.com/

Guide for deployment:
_[A Rock Solid, Modern Web Stack—Rails 5 API + ActiveAdmin + Create React App on Heroku](https://blog.heroku.com/a-rock-solid-modern-web-stack)_
https://devcenter.heroku.com/articles/heroku-postgresql

_[ActiveAdmin](https://activeadmin.info/0-installation.html#setting-up-active-admin)_

## Development environment
seed development:
`heroku local:run rails db:seed`

run:
`rails start`

The `rails start` command is configured in `lib/tasks/start.rake`.
`heroku` commands are executed by the Heroku Command Line Interface (CLI).
heroku reads `Procfile.dev` and starts the tasks:

- `web: PORT=3000 yarn --cwd client start`
  Runs the frontend on a local Node server on port 3000
  Access the client at http://localhost:3000 in your browser
- `api: PORT=3001 bundle exec rails s`
  Run the backend on a local Rails server on port 3001
  Access ActiveAdmin via the API, at http://localhost:3001/admin

## Style

Use _[pre-commit](https://pre-commit.com/)_ framework for managing and maintaining multi-language pre-commit hooks (Requires _[python](https://docs.python-guide.org/starting/install3/linux/)_)
UPDATE: pre-commit should now only run Prettier the /client directory
/client directory uses Prettier and ESLint to format code as a pre-commit hook




Since this app will ultimately be deployed to Heroku, we should use [Heroku local](https://devcenter.heroku.com/articles/heroku-local) for development so that our dev environment more closely resembles our production environment.

# credentials
DEV: Heroku local reads environmental variables from .env
PROD: Heroku stores environmental variables in the config vars. For reference, these values have been locally exported to .env.prod

# seeding database
DEV: `heroku local:run rails db:seed`
PROD: `heroku run rake db:migrate db:seed`

# resetting database
DEV: `heroku local:run rails db:drop && heroku local:run rails db:create && heroku local:run rails db:migrate && heroku local:run rails db:seed`
PROD: `heroku restart && heroku pg:reset DATABASE --confirm yenius--rails6-api && heroku run rake db:migrate && heroku run rake db:seed`
https://devcenter.heroku.com/articles/heroku-postgresql

# deploying
DEV: `heroku local -f Procfile.dev -e .env`
PROD: `git push heroku main`, `heroku run rake db:migrate`, `heroku run rails db:seed`


# Counter Cache
The Rails API uses a counter cache to store each User's authored comments.
https://blog.appsignal.com/2018/06/19/activerecords-counter-cache.html
The counter_cache: option is specified on the belongs_to side of the association (Comment), and the symbol passed (:authored_comments_count) is the name of the field that will be added to the has_many model (User).
`belongs_to :author, class_name: :User, foreign_key: :commenting_user_id, counter_cache: :authored_comments_count`
Generate migration to add a column to the Users table
`rails g migration AddAuthoredCommentsCountToUsers authored_comments_count:integer`
Generate migration to update the existing records (avoids having to re-seed the database)
`rails g migration ResetUserAuthoredCommentsCount --force`
Run migrations (development)
`heroku local:run rails db:migrate`


# User Colors
https://colorswall.com/palette/73/
Color		HEX			RGB
msYellow	#fff100		rgb(255, 241, 0)
msOrange	#ff8c00		rgb(255, 140, 0)
msRed		#e81123		rgb(232, 17, 35)
msMagenta	#ec008c		rgb(236, 0, 140)
msPurple	#68217a		rgb(104, 33, 122)
msBlue		#00188f		rgb(0, 24, 143)
msCyan		#00bcf2		rgb(0, 188, 242)
msTeal		#00b294		rgb(0, 178, 148)
msGreen		#009e49		rgb(0, 158, 73)
msLime		#bad80a		rgb(186, 216, 10)


# ToDo STILL

Lyrics shows "Lyrics not available, sorry" while still loading

VerseComments ("Annotations") currently display at the top of the page -- would be nice if they showed up next to the Verse in Lyrics

Style Links WITHIN Artist/Album Descriptions

Need more content on ArtistPages

ArtistIndex, SongIndex -- remove Rank numbers from Suggestions

AlbumsIndex -- do not show Samples & Interpolations

Style User Profile.

Add links to all usernames so that clicking on a user's username will redirect to the user's Profile Page.

When adding a comment, show an "avatar" square filled with user.my_color (currently just a gray circle).

If Lyrics are unavailable for a song, provide a link to the relevent Kanye song

Add Login with Google, Facebook, Twitter

# About Links!
Internal links should use a <Link> tag.
External links should use an <a> tag:
  <a
    href="https://github.com/marstrong/yenius--rails6-api"
    target="_blank"
    rel="noopener noreferrer"
  >
    About Yenius
  </a>

The href attribute set to the URL of the page you want to link to
The target attribute set to _blank, which tells the browser to open the link in a new tab/window, depending on the browser's settings
The rel attribute set to noreferrer noopener to prevent possible malicious attacks from the pages you link to

# ToDo COMPLETED
[DONE (1/27)] - External links use <a> tags and open in new tabs, Internal links use <Link>
[DONE (1/27)] - Replace <a> with <Link> in SongAlbum component -- clicking on a track was breaking app in Production
[DONE (1/27)] - Seed a bunch of Demo user comments so that users have something they can delete and edit if they wish.
[DONE (1/27)] - Authenticated users can update their color from the user profile page

[DONE (1/26)] - Do not include ReleaseDate in Song TrackInfo if song.album.name === 'Samples & Interpolations'
[DONE (1/26)] - Style Album Description -- label, showMore/Less button
[DONE (1/26)] - Style Artist Description -- label, showMore/Less button
[DONE (1/26)] - Get rid of dummy links in PageFooter.
[DONE (1/26)] - Fix broken styling on AlbumsIndex
[DONE (1/26)] - Center all page content

[DONE (1/25)] - CommentsList responds immediately if a comment is added/edited/deleted
[DONE (1/25)] - Authenticated Users can edit/update their own comments
[DONE (1/25)] - Authenticated Users can delete their own comments

[DONE (1/24)] - Add Community widget to HomeContainer
[DONE (1/24)] - Add Charts widget to HomeContainer

[DONE (1/23)] - Add 'Suggested Artists/Songs' to Artists/Songs index page
[DONE (1/23)] - All flavors of UserAuth work (Signup new user, Login existing user, Login as demo user)



list of all icons, things I could use icons for
GitHub
LinkedIn
Portfolio



X to close Annotations
Submit
Save
Delete
Update
Edit
Login
Log out
sign up
upvote
downvote
IQ?
Profile square
Profile icon??
Search icon

Pyongs?

Refresh news?

https://iconmonstr.com/iconicfont/
