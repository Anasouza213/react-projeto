import {useState} from 'react';
import axios from 'axios';

const initialRequestInfo = {
    error: null,
    data: null,
    loading: false,
}

export default function useApi(config){

    const [requestInfo, setRequestInfo] = useState(initialRequestInfo)

  const  call = async (localConfig) =>{
        setRequestInfo({
            //atualiza estado
            ...initialRequestInfo,
            loading: true,
        })
  let resp = null;

      try {
            //igual ao then
            resp = await axios({
                baseURL: 'http://localhost:5000',
                ...config,
                ...localConfig
            });

            setRequestInfo({
                ...initialRequestInfo,
                data: resp.data,
            });

      } catch (error) {
            setRequestInfo({
                ...initialRequestInfo,
                error,
            });
      }
       
    if(config.onCompleted){
        config.onCompleted(resp);
    }
}

    return [
        call,
        requestInfo
    ]
}