# rails c
# load 'constants.rb'

# artists
KANYE = Artist.find_by! name:"Kanye West"
JAYZ = Artist.find_by! name:"JAY-Z"
FRANK = Artist.find_by! name:"Frank Ocean"
DREAM = Artist.find_by! name:"The-Dream"

# albums
THRONE = Album.find_by! name: "Watch the Throne"
FANTASY =  Album.find_by! name:"My Beautiful Dark Twisted Fantasy"

# songs
CHURCH = Song.find_by! name: "No Church in the Wild"
MONSTER = Song.find_by! name: "Monster"
SOUR = Song.find_by! name: "Sourdeezal"