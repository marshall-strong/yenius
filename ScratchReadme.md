
# SCRATCH



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


The album cover images in the SongAlbum component are not displaying in Development -- it may have something to do with permissions on the variant folder in the development bucket. To try and solve, I deleted everything in the development bucket except for the seeds folder. Now attempting to reseed.