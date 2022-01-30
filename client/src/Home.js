import React, {useState, useEffect} from "react";
import FundraiserCard from './components/FundraiserCard';
const Home = ()=>{
        /*structure of fundraiser
        name = _name;
        url = _url;
        imageUrl = _imageUrl;
        description = _description;
        beneficiary = _beneficiary;
        */
    const FundRaisers = [
       { 
          name:"Name 1",
          url:"mywebsite.com",
          imageUrl:"https://placedog.net/500",
          description:"We are the organization to raise funds for cute dogs",
          beneficiary:"000xxxx...000"
        },
        {
          name:"Name 2",
          url:"mywebsite.com",
          imageUrl:"https://placedog.net/500",
          description:"We are the organization to raise funds for cute dogs",
          beneficiary:"000xxxx...000"
        },
        {
          name:"Name 3",
          url:"mywebsite.com",
          imageUrl:"https://placedog.net/500",
          description:"We are the organization to raise funds for cute dogs",
          beneficiary:"000xxxx...000"
      },
        {
          name:"Name 4",
          url:"mywebsite.com",
          imageUrl:"https://placedog.net/500",
          description:"We are the organization to raise funds for cute dogs",
          beneficiary:"000xxxx...000"
      }
      ];
    useEffect(()=>{

    },[]);

    return(
      <div className="d-flex flex-row justify-content-center flex-wrap">
        {FundRaisers.map( (e,id)=><FundraiserCard key={id} name={e.name} url={e.url} imageUrl={e.imageUrl} description={e.description} beneficiary={e.beneficiary} />)}
      </div>
    );
}

export default Home;