import React  from 'react'

const NewsItems=(props)=>  {
   
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="card" >
  <img src={!imageUrl?"data:image/png;base64,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":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <div style={{display:'flex',right:'0',justifyContent:'flex-end',position:'absolute',top:'0',}}>
  <span class=" badge rounded-pill bg-success " >
    {source}</span>
    </div>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary btn-dark">Read more</a>
  </div>
</div>
    )
  }


export default NewsItems