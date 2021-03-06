import React from 'react';

const DrinksList = () => {
  return (
    <div className="mdl-card something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop">
      <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent">
        <i className="material-icons mdl-color-text--white" role="presentation">add</i>
        <span className="visuallyhidden">add</span>
      </button>
      <div className="mdl-card__media mdl-color--white mdl-color-text--grey-600">
        <svg xmlns="http://www.w3.org/2000/svg"
          style={{ width: '6em', marginLeft: '0.75em' }}
          viewBox="0 0 24 24">
          <path fill="#424D52" d="M16.713 9.87c-.103-3.382-.495-6.58-1.192-8.399-.954-.98-4.054-1.471-7.154-1.471-3.097 0-6.193.49-7.148 1.471-.821 2.144-1.219 6.204-1.219 10.223 0 4.314.459 8.581 1.346 10.374 1.147 1.287 4.087 1.932 7.027 1.932 2.938 0 5.875-.644 7.022-1.932.29-.587.535-1.439.732-2.471.318-1.658.207-2.896 2.874-2.896v-3.6c-2.418 0-2.224-1.1-2.288-3.231zm-13.284 10.758c-.596-2.462-1.506-9.642-.293-15.547.67.141 1.364.247 1.981.3-.846 5.634-.743 10.673.366 15.869-1.087-.137-2.054-.622-2.054-.622zm8.83-17.16c-.6.121-.847.532-.838 1.058.017.942.727 2.161.794 2.813.1.977-.506 1.661-1.46 1.661-.93 0-1.475-.733-1.401-1.66.055-.689.883-1.782.765-2.819-.104-.92-.778-.849-1.39-.849-2.909 0-5.729-.443-5.729-.879s2.82-.79 5.729-.79 5.268.354 5.268.79c0 .233-.683.463-1.738.675zm11.741 14.532h-1.776l-.37-1.484c-.144-.43-.546-.72-1-.72h-.854v-1.78h1.07c1.024 0 1.935.65 2.267 1.618l.663 2.366zm-2.559-5h-.935l-.498-3.653c-.079-.576.369-1.09.952-1.09.579 0 1.027.509.953 1.083l-.472 3.66z"/>
        </svg>
      </div>
      <div className="mdl-card__supporting-text meta meta--fill mdl-color-text--grey-600">
        Create a Drinks List
      </div>
    </div>
  );
};

export default DrinksList;
