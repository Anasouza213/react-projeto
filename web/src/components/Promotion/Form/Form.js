import React, {useState, useEffect}from 'react';
import {useHistory} from 'react-router-dom';
import './Form.css';
import useApi from 'components/utils/useApi';

const initialValue ={
    title: '',
    url: '',
    imageUrl: '',
    price: 0
}

const PromotionForm = ({id}) => {

    const [values, setValues] = useState(id? null : initialValue);
    const history = useHistory();
   
    const [load] = useApi({

        url: `/promotions/${id}`,
        method: 'get',
        onCompleted: (resp) =>{
            setValues(resp.data);
        }
    });

    const [save, saveInfo] = useApi({
        url:  id ? `/promotions/${id}` : '/promotions',
        method: id ? 'put' : 'post',
       // data: values,
        onCompleted: (resp) =>{
            if(!resp.error){
                history.push('/');
            }
        }
    })

    useEffect(() =>{
        if(id){
           load();
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    onchange = (ev) => {
        const {name, value} = ev.target;
        console.log({name, value});
        //altera a variavel {...values, [name]: value}
        setValues({...values, [name]: value});
    }

    const onsubmit = (ev) => {
        //nao exibir comportamento default naparece na url
        ev.preventDefault();

        save({
            data: values,
        });
    }
  
    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            {!values
            ? (<div>Carregando...</div>)
            : (

            <form onSubmit = {onsubmit}>
                {saveInfo.loading && <span> Salvando dados...</span>}
                <div className="promotion-form__group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" value={values.title} onChange={onchange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="text" value={values.url} onChange={onchange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="imageUrl">Imagem (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="text" value={values.imageUrl} onChange={onchange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" value={values.price} onChange={onchange} />
                </div>
                <div className="">
                    <button type="submit">Salvar</button>
                </div>
            </form>
            )}
        </div>
    )
}

export default PromotionForm;