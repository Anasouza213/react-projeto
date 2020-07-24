import React from 'react';

import PromotionSearch from 'components/Promotion/Search/Search'
import UIContainer from '../../../components/UI/Container/Container'



const PagesPromotionSearch = () => {
  
    return (
      //props children -passar o componente UIContainer
        <UIContainer>          
             <PromotionSearch />
        </UIContainer>
      );
}

export default PagesPromotionSearch;