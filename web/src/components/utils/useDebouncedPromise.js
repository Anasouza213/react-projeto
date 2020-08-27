import { useRef } from 'react';

//debounce economiza chamadas requisicao
export default function useDebouncedPromise (fn, delay){
  //useRef retorna objeto
    let timeoutRef = useRef(null);
    //...params pega todos parametros q vir na funcao
    //const handler = (...params) =>{ // pegar todos parametros 
    function handler(...params) {
        return new Promise((resolve, reject) => {
            if (timeoutRef.current) {
              //limpa req p comecar outra
              clearTimeout(timeoutRef.current);
            }
      
            timeoutRef.current = window.setTimeout(async () => {
              try {
                const response = await fn(...params);
                resolve(response);
              } catch(e) {
                reject(e);
              }
            }, delay);
          });
        }
        return handler;
}