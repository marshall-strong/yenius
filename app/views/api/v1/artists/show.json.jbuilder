json.artists do
  json.set! @artist.id do
    json.extract! @artist, :id
    json.extract! @artist, :name
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

json.comments do
  @artist.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.authorId comment.commenting_user_id
      json.commentableType comment.commentable_type
      json.commentableId comment.commentable_id
      json.body comment.body
      json.createdAt comment.created_at
      json.updatedAt comment.updated_at
    end
  end
end

json.users do
  @artist.comments.each do |comment|
    json.set! comment.author.id do
      json.id comment.author.id
      json.username comment.author.username
      json.email comment.author.email
    end
  end
end
