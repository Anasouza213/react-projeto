import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PromotionList from 'components/Promotion/List/List';
import './Search.css';


const PromotionSearch = () =>{
    const [promotions, setPromotions]  = useState([]);
    const [search, setSearch] =  useState('');

    //euseEffect execulta so qdo monta ou faz update de componente
    useEffect(() =>{
        const params = {};
        if(search){
            //like verifica se tem alguma letra no title
            params.title_like = search;
        }

      axios.get('http://localhost:5000/promotions?_embed=comments', {params})
      .then((resp) =>{
        setPromotions(resp.data);
        //console.log(resp.data);
      });
    }, [search]);

    return(
        <div className="promotion-search">
            <header className="promotion-search__header">
                <h1>Promo Show</h1>
                <Link to="/create">Nova Promoção</Link>
            </header>
           {/*controlled passar valor, uncontrolled n passa valor input armazena de outra forma com browse */}
                <input 
                    type="search" 
                    className="promotion-search__input"
                    placeholder="Buscar"
                    value={search} 
                    onChange={(ev) => setSearch(ev.target.value)}
                 />
             <PromotionList promotions={promotions} loading={!promotions.length} />
           
        </div>
    )
}

export default PromotionSearch;