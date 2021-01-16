json.artists do
  @album.song_artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id
      json.extract! artist, :name
    end
  end
end

json.albums do
  json.set! @album.id do
    json.id @album.id
    json.name @album.name
    json.bio @album.bio
    json.releaseDate @album.release_date
    json.urlAlbumCover url_for(@album.cover)
    json.urlAlbumBanner url_for(@album.banner)
    json.artistsPrimary do
      json.array! @album.artistsPrimary.map { |artist| artist.id }
    end
    json.songs do
      json.array! @album.songs_on_album.ids
    end
    json.comments do
      json.array! @album.comments.ids
    end
  end
end

json.songs do
  @album.songs_on_album.each do |song|
    json.set! song.id do
      json.extract! song, :id, :name
      json.trackNumber song.track_number
      json.nameFt song.name_ft_list_featured_artists
      json.artistsFeatured do
        json.array! song.featured_artists.map { |artist| artist.id }
      end
      json.artistsProducers do
        json.array! song.producers.map { |artist| artist.id }
      end
    end
  end
end

json.comments do
  @album.comments.each do |comment|
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
  @album.comments.each do |comment|
    json.set! comment.author.id do
      json.id comment.author.id
      json.username comment.author.username
      json.email comment.author.email
    end
  end
end
