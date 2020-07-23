import React, {useEffect, useState} from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import axios from 'axios';



const PagesPromotionSearch = () => {
  const [promotions, setPromotions]  = useState([]);
  //euseEffect execulta so qdo monta ou faz update de componente
  useEffect(() =>{
    axios.get('http://localhost:5000/promotions?_embed=comments')
    .then((resp) =>{
      setPromotions(resp.data);
      //console.log(resp.data);
    });
  }, []);
 

    return (
        <div
            style={{
              maxWidth:800,
              margin: '30px auto'
            }}
        >
          {promotions.map((promotion) =>(
             <PromotionCard promotion={promotion} />
          ))}
        </div>
      );
}

export default PagesPromotionSearch;