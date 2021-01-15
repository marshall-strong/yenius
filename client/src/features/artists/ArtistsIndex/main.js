const main = () => {
  return (
    <div id="main">
      <ul class="artists_index-breadcrumbs breadcrumbs">
        <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
          <a href="https://genius.com/artists" itemprop="url">
            <span itemprop="title">Artists</span>
          </a>
        </li>
        <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
          <a href="https://genius.com/artists/index/j" itemprop="url">
            <span itemprop="title">J</span>
          </a>
        </li>
      </ul>

      <h1 class="artists_index-header">Most Popular J Artists on Genius</h1>

      <ul class="artists_index_list">
        <li class="artists_index_list-popular_artist">
          <a
            href="https://genius.com/artists/Jay-z"
            class="artists_index_list-artist_name"
          >
            JAY-Z
          </a>
          <ul class="artists_index_list-popular_song_list">
            <li class="popular_song">
              <a href="https://genius.com/Jay-z-empire-state-of-mind-lyrics">
                Empire State of Mind
              </a>
            </li>
            <li class="popular_song">
              <a href="https://genius.com/Jay-z-the-story-of-oj-lyrics">
                The Story of O.J.
              </a>
            </li>
          </ul>
        </li>

        <li class="artists_index_list-popular_artist">
          <a
            href="https://genius.com/artists/John-legend"
            class="artists_index_list-artist_name"
          >
            John Legend
          </a>
          <ul class="artists_index_list-popular_song_list">
            <li class="popular_song">
              <a href="https://genius.com/John-legend-all-of-me-lyrics">
                All of Me
              </a>
            </li>
            <li class="popular_song">
              <a href="https://genius.com/John-legend-baby-its-cold-outside-lyrics">
                Baby, It’s Cold Outside
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="all_artists_link">
        <a href="https://genius.com/artists/index/j/all">
          All J Artists on Genius
        </a>
      </div>
      <ul class="artists_index_list">
        <li>
          <a href="https://genius.com/artists/Jaah-slt">Jaah SLT</a>
        </li>
        <li>
          <a href="https://genius.com/artists/Jabo">JABO</a>
        </li>
        <li>
          <a href="https://genius.com/artists/The-jacka">The Jacka</a>
        </li>
        <li>
          <a href="https://genius.com/artists/Jack-and-jack">Jack &amp; Jack</a>
        </li>
        <li>
          <a href="https://genius.com/artists/Jackboy">Jackboy</a>
        </li>
      </ul>
    </div>
  );
};
