import React from "react";
import "./news-list-item.css";

const NewsListItem = ({ id, title, body, webUrl }) => {
  return (
    <div className="card">
      <div className="card-header d-flex" id={`heading-${id}`}>
        <h2 className="mb-0">
          <button
            className="btn btn-link text-dark font-weight-bold"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse-${id}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {title}
          </button>
          
        </h2>
        {/* <i className="fas fa-sort-down icon"></i> */}
      </div>

      <div
        id={`collapse-${id}`}
        className="collapse"
        aria-labelledby={`heading-${id}`}
        data-parent="#accordionExample"
      >
        <div className="card-body">
          {body}
          <div>
            <a href={webUrl} className="btn btn-dark pl-3 pr-3 mt-3">
              Read full article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsListItem;
