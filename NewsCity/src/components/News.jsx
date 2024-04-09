import React,{useEffect,useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)



  const CapatalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  // constructor(props){
  //     super(props)
  //     console.log("hello i am a constructor from news components");
  //     this.state={
  //       articles:[],
  //       loading:false,
  //       page:1,
  //       totalResults:0,
  //     }
  //     document.title=`${this.CapatalizeFirstLetter(props.category)} - NewsCity`
  //   }
    const  updateNews=async()=>{
      props.setProgress(0);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
      
      setLoading(true)
      let data= await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false)
      // this.setState({articles: parsedData.articles,
      //   totalResults:parsedData.totalResults,
      //   loading:false})
        props.setProgress(100);
    }
    useEffect(() => {
        document.title=`${CapatalizeFirstLetter(props.category)} - NewsCity`;
     updateNews();
    
      }, [])
    
    // async componentDidMount(){
    
    // updateNews(); 
     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=415d850f3c3a4c75a58224871c705a9d&pagesize=${props.pageSize}`;
      // this.setState({loading:true})
      // let data= await fetch(url);
      // let parsedData = await data.json();
      // console.log(parsedData);
      // this.setState({articles: parsedData.articles,
      //   totalResults:parsedData.totalResults,
      //   loading:false})
    // }
//     handlePrevClick= async ()=>{
//       this.setState({
//         page:this.state.page -1,
//  })
//  this.updateNews();}
    
    
    
    
    
      //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=415d850f3c3a4c75a58224871c705a9d&page=${this.state.page -1}&pagesize=${props.pageSize}`;
    //   this.setState({loading:true})
    //   let data= await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
      
    // this.setState({
    //   page:this.state.page -1,
    //   articles : parsedData.articles,
    //   loading:false
    // })
   
  
    // handleNextClick= async ()=>{
    //   console.log("clicked n")
    //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){

       
    //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=415d850f3c3a4c75a58224871c705a9d&page=${this.state.page +1}&pagesize=${props.pageSize}`;
    //   this.setState({loading:true})
    //   let data= await fetch(url);
    //   let parsedData = await data.json();
    
    //   console.log(parsedData);
      
    // this.setState({
    //   page:this.state.page + 1,
    //   articles : parsedData.articles,
    //   loading:false
    // })
  //   this.setState({
  //     page:this.state.page + 1})
  //     this.updateNews();
  // }
  const fetchMoreData =async () => {
    // this.setState({page:this.state.page + 1})
    
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1);
    // this.setState({loading:true})
    let data= await fetch(url);
    let parsedData = await data.json();
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults:parsedData.totalResults,
    //   loading:false})
  };
    
    return (
      <>
      {/* <div className='container-my-3'> */}
        <h1 className='my-5' style={{marginTop:'90px'}}>NewsCity - Top  {CapatalizeFirstLetter(props.category)} Headlines</h1>
      {/* { loading &&<Spinner/>} */}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

        <div className='row'>
        {articles.map((element)=>{
         return <div className='col-md-4' key={element.url}>
             <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}
             newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>
            })}
        </div>
        </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark my-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
         
        {/* </div> */}
       
      </>
    )
  }

News.defaultProps = {
  country :'in',
  pageSize : 8 ,
  category : 'General',
}
News.propsTypes = {
  country :PropTypes.string,
  pageSize :PropTypes.number,
  category :PropTypes.string,
}
export default News