import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer IfR4jk_NLkmvXgzzn5RbxQ1bx0ca47-zpPQppMytKMZFB1D30uQhwDzGJbNFlnCq9s7lJfiSCNBl9e8xbwmdK9zk2lBPYssK4-_la4JGqawLcBJRuCotOCtuKzdFYHYx'
  }
})