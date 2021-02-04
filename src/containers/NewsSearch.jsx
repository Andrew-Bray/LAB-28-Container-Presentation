/* eslint-disable no-console */
import React, { Component } from 'react';
import { getArticles } from '../services/newsApi';
import ArticleContainer from '../components/article/ArticleContainer';
import SearchContainer from '../components/search/SearchContainer';

export default class NewsSearch extends Component {
  state = {
    articles: [],
    loading: true
  }

  componentDidMount() {
    getArticles()
      .then(articles => this.setState({ articles }))
      .then(() => this.setState({ loading: false }));
  }

  handleChange = ({ target }) => {
    target.value.trim() && getArticles(target.value)
      .then(articles => this.setState({ articles }));
  }
  render() {

    const { articles, query, loading } = this.state;
    console.log(query);
    return (
      <section>
        <SearchContainer 
          query={query}
          onHandleChange={this.handleChange}
        />
        { !loading ? <ArticleContainer articles={articles} />
          : <h1> loading...</h1>
        }
      </section>
    );
  }
}
