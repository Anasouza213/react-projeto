import React, {useState}from 'react';
import {useHistory} from 'react-router-dom';
import './Form.css';
import axios from 'axios';

const initialValue ={
    title: '',
    url: '',
    imageUrl: '',
    price: 0
}

const PromotionForm = () => {

    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    onchange = (ev) => {
        const {name, value} = ev.target;
        console.log({name, value});
        //altera a variavel {...values, [name]: value}
        setValues({...values, [name]: value});
    }

    const onsubmit = (ev) => {
        //nao exibir comportamento default naparece na url
        ev.preventDefault();
        axios.post('http://localhost:5000/promotions', values)
        .then((resp)=>{
            history.push('/');
        });

    }
    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit = {onsubmit}>
                <div className="promotion-form__group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onchange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="text" onChange={onchange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="imageUrl">Imagem (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="text" onChange={onchange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onchange} />
                </div>
                <div className="">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm;