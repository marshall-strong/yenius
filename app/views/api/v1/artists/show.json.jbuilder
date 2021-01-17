json.artists do
  json.set! @artist.id do
    json.extract! @artist, :id
    json.extract! @artist, :name
    json.extract! @artist, :bio
    json.urlArtist @artist.headshot.attached? ? url_for(@artist.headshot) : nil
    json.urlAlbumBanner url_for(@artist.banner)
    json.description @artist.description
    json.albums do
      json.array! @artist.albums.ids
    end
    json.songs do
      json.array! @artist.songs.ids
    end
    json.comments do
      json.array! @artist.comments.ids
    end
  end
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id
      json.extract! album, :name
      json.extract! album, :release_date
      json.releaseDate album.release_date
      json.urlArtist url_for(album.cover)
    end
  end
end

json.songs do
  @artist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :name
    end
  end
end
