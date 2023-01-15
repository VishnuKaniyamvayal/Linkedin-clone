import React from 'react'
import "./Widgets.css"
import ArticleIcon from '@mui/icons-material/Article';
import CircleIcon from '@mui/icons-material/Circle';

const Widgets = () => {
  
    const newsArticle = (heading,subtitle) => 
        
        <div className="widgets__article">
                <div className="widgets__articleleft">
                <CircleIcon/>
                </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    

  return (
    <div className='widgets'>
        <div className="widgets__header">
           <h2>Linkedin News</h2>
           <ArticleIcon/>
            
        </div>
        {newsArticle("2020's top keywords","creators find it diffrent")}
        {newsArticle("ukraine on attack","soldiers find it diffrent")}
        {newsArticle("2020's top keywords","creators find it diffrent")}
        {newsArticle("2020's top keywords","creators find it diffrent")}
        {newsArticle("2020's top keywords","creators find it diffrent")}
        {newsArticle("2020's top keywords","creators find it diffrent")}
    </div>
  )
}

export default Widgets