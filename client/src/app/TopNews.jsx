import React, { useEffect, useState } from "react";
import "../../assets/stylesheets/TopNews.scss";

const fetchNews = async (query) => {
  const url = `https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${encodeURIComponent(
    query
  )}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_NEWS_API_KEY,
      "x-bingapis-sdk": "true",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`response is not okay.`);
      }
      return response.json();
    })
    .then((body) => {
      return body.value;
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const HeroStory = ({ article }) => {
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

  return (
    <div className="HeroStory">
      <div className="Container">
        <div className="Link">
          <div className="Header">
            <div className="Label">
              <span className="TextLabel">news</span>
            </div>
            <div className="Title">
              <h2>
                <a href={article.url}>{article.name}</a>
              </h2>
            </div>
            <div className="Body">
              <a href={article.url}>{article.description}</a>{" "}
            </div>
          </div>
          <div className="Byline">
            <span className="Author">{article.provider[0].name} / </span>
            <span className="PublishedAt">
              {formatDate(article.datePublished)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroImage = ({ article }) => {
  return (
    <a href={article.url} className="HeroImageLink">
      <div className="SizedImageContainer">
        {article.image && (
          <img
            className="thumbnail"
            alt=""
            src={article.image?.thumbnail?.contentUrl + "&w=500&h=300"}
          />
        )}
      </div>
    </a>
  );
};

const NewsStory = ({ article }) => {
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

  return (
    <div className="NewsStory">
      <div className="Container">
        <a href={article.url} className="Link">
          <div className="Header">
            <div className="Label">
              <span className="TextLabel">news</span>
            </div>
            <div className="Title">
              <h2>{article.name}</h2>
            </div>
          </div>
          <div className="Byline">
            <span className="Author">{article.provider[0].name} / </span>
            <span className="PublishedAt">
              {formatDate(article.datePublished)}
            </span>
          </div>
          <div className="Image">
            {article.image && (
              <img
                className="thumbnail"
                alt=""
                src={article.image?.thumbnail?.contentUrl}
              />
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

const TopNews = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetchNews("kanye")
      .then((news) => setArticles(news))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      {!articles ? (
        <p>Loading...</p>
      ) : articles.length === 0 ? (
        <p>
          <i>No results</i>
        </p>
      ) : (
        <div className="TopNews">
          <div className="PageGrid">
            <HeroStory article={articles[0]} />
            <HeroImage article={articles[0]} />
            <NewsStory article={articles[1]} />
            <NewsStory article={articles[2]} />
            <NewsStory article={articles[3]} />
            <NewsStory article={articles[4]} />
          </div>
          {/* <ul>
            {articles.map((article, i) => (
              <NewsArticle key={i} article={article} />
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default TopNews;
