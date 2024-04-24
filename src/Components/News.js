import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Button from './Button';
import Spinnier from './Spinnier';
import Propstypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    country: "in",
    // pageSize: 16,
    category: "Sports",
  }

  Propstypes ={
    country: Propstypes.string,
    pageSize: Propstypes.number,
    category: Propstypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0, // Track total results if needed
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    const { page } = this.state;
    const { pageSize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=791a2e4f029f49f29c71406c806e8957&page=${page}&pageSize=${pageSize}`;

    try {
      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();

      this.setState((prevState) => ({
        articles: data.articles,
        loading: false,
        totalResults: data.totalResults,
      }));
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.setState({ loading: false });
    }
  };

  previousClick = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
      }),
      this.fetchArticles
    );
  }
  nextClick = () => {
    const maxPage = Math.ceil(this.state.totalResults/this.props.pageSize);
if(this.state.page < maxPage){
  this.setState(
    (prevState) => ({
      page: prevState.page + 1,
    }),
    this.fetchArticles
  );
  }
    
     
  };

  render() {
    const { articles, loading, page } = this.state;
    const maxPage = Math.ceil(this.state.totalResults/this.props.pageSize);

    return (
      <>
        <div>
          <h1 className="my-4 mx-4">Today News - Top Headlines</h1>
          {loading && <Spinnier />}
          <div className='d-flex justify-content-start flex-wrap ps-3'>
            {articles.map((element) => (
              <div key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 53) : ''}
                  description={element.description ? element.description.slice(0, 145) : ''}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='d-flex justify-content-between mx-5 mt-3'>
          <Button buttonName="Previous" arrow=" &#8592;" onClick={this.previousClick} disabled={page <= 1} />
          <Button buttonName="Next" arrow="&#8594;" onClick={this.nextClick} disabled={ this.state.page >= maxPage || articles.length === 0} />
        </div>
      </>
    );
  }
}
