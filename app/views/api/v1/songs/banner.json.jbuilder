json.albums do
  json.set! @song.album.id do
    json.id @song.album.id
    json.name @song.album.name
    json.releaseDate @song.album.release_date
  end
end

json.songs do
  json.set! @song.id do
    json.id @song.id
    json.name @song.name
    json.albumId @song.album_id
    json.urlAlbumCover @song.album.cover.attached? ? url_for(@song.album.cover) : nil
    json.urlAlbumBanner @song.album.banner.attached? url_for(@song.album.banner) : nil
  end
end
