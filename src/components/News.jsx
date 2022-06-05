import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.Api_Key}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  async componentDidMount() {
    this.updateNews()
    this.setState({page:this.state.page+1})

  }

  fetchMoreData =async () => {
    this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.Api_Key}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ 
      articles:this.state.articles.concat(parsedData.articles),
      page:this.state.page+1
    })
    console.log(this.state.articles.length!== this.state.totalResults)
    console.log(this.state.articles.length,this.state.totalResults)
    console.log(this.state.articles)
  };

  render() {
    return (
      <>
        <h1>top headlines</h1>
<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<h4>Loading...</h4>}
          >

        <div className='news-container'>
          {this.state.articles.map((element,i) => {
            return <NewsItem key={i} title={!element.title ? 'null' : element.title} desc={!element.description ? 'null' : element.description} imageUrl={!element.urlToImage ? 'https://s.yimg.com/os/creatr-uploaded-images/2022-05/2ce93ac0-d07b-11ec-9ca7-fe68bbf70a1f' : element.urlToImage} />
          })}
         
        </div> 
        
        </InfiniteScroll>
      </>
    )
  }
}
