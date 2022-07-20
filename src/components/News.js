import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'General'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    // console.log("Hello I am a constructor of news componennt");
    //have ahi this.state kari ne state ne change kari sakay je rite aapde function based componennt ma karta hata usestate kari ne e rite
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.props.category} - NewsMonkey`;
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fbf7b2c236744b1a12592f04fee85cf&page=1 &pagesize=${this.props.pagesize}`;
    let data = await fetch(url);//fetch function url etle k link lese ane promise return krse
    let parsedata = await data.json()
    console.log(parsedata);
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults })
    this.props.setProgress(100);

  }
  //aakhu render execute thai jay pachi componentDidMount execute thase 
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fbf7b2c236744b1a12592f04fee85cf&page=${this.state.page + 1} &pagesize=${this.props.pagesize}`;
      let data = await fetch(url);//fetch function url etle k link lese ane promise return krse
      let parsedata = await data.json()
      console.log(parsedata);
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        totalResults: parsedata.totalResults
      })
    }
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fbf7b2c236744b1a12592f04fee85cf&page=${this.state.page - 1} &pagesize=${this.props.pagesize}`;
    let data = await fetch(url);//fetch function url etle k link lese ane promise return krse
    let parsedata = await data.json()
    console.log(parsedata);
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      totalResults: parsedata.totalResults
    })
  }
  fetchMoreData = async() => {
    this.setState({
      page: this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fbf7b2c236744b1a12592f04fee85cf&page=${this.state.page - 1} &pagesize=${this.props.pagesize}`;
    let data = await fetch(url);//fetch function url etle k link lese ane promise return krse
    let parsedata = await data.json()
    console.log(parsedata);
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults
    })
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Newsmonkey - Top Headlines From {this.props.category} Category</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}></NewsItem>
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
