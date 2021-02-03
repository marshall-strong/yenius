
# Icons?
- Submit
- Save
- Delete
- Update
- Edit
- Login
- Log out
- sign up
- upvote
- downvote
- IQ?
- Profile square
- Profile icon??
- Search icon
- Pyongs?
- Refresh news?

# ToDo STILL
Move the Annotations X
Move the Annotation quotes
Style Edit/Delete comment buttons

Lyrics shows "Lyrics not available, sorry" while still loading

Style Links WITHIN Artist/Album Descriptions

Need more content on ArtistPages

ArtistIndex, SongIndex -- remove Rank numbers from Suggestions

AlbumsIndex -- do not show Samples & Interpolations

Style Color Dropdown on User Profile.
Style User Profile.

If Lyrics are unavailable for a song, provide a link to the relevent Kanye song

Add Login with Google, Facebook, Twitter


# DONE RECENTLY
VerseComments ("Annotations") currently display at the top of the page -- would be nice if they showed up next to the Verse in Lyrics
Add links to all usernames so that clicking on a user's username will redirect to the user's Profile Page.
When adding a comment, show an "avatar" square filled with user.my_color (currently just a gray circle).

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
