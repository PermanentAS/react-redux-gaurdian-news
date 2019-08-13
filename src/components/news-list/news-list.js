import React from "react";
import { connect } from "react-redux";

import NewsListItem from "./../news-list-item";
import Spinner from "./../spinner";

import './news-list.css'

const NewsList = ({ posts }) => {
  const renderPosts = () => {
    if (posts !== null) {
      let list = posts.map((item, idx) => {
        let correctedText = item.fields.bodyText.split(" ", 100).join(" ");
        return (
          <NewsListItem
            key={idx}
            id={idx}
            title={item.webTitle}
            webUrl={item.webUrl}
            body={correctedText + "..."}
          />
        );
      });

      return list;
    } else {
      return <Spinner />;
    }
  };

  return (
    <div className="accordion news-list" id="accordionExample">
      {renderPosts()}
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps)(NewsList);
