import React from 'react';
import { google, microsoft, dropbox, shopify, amazon } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={shopify} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={microsoft} />
    </div>
    <div>
      <img src={amazon}  className='amazon'/>
    </div>
  </div>
);

export default Brand;