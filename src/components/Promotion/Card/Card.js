import React from 'react';
import './Card.css'

const PromotionCard = ({promotion}) => (
        <div className="promotion-card">
          <img className="promotion-card__image" src={promotion.imageUrl} />
          <div className="promotion-card__info">
            <hi className="promotion-card__title">{promotion.title}</hi>
            <span className="promotion-card__price"> R$ {promotion.price}</span>
            <footer className="promotion-card__footer">
                {/* caso quiser colocar condição */}
                {promotion.comments.length > 0 && (
                    <div className="promotion-card__comment">
                       "{promotion.comments[0].comment}"
                    </div>
                )}

                <div className="promotion-card__comments-count">
                    {promotion.comments.length}{' '}
                    {promotion.comments.length > 1 ? 'Comentários': 'Comentário'}
                </div>
                <a href={promotion.url}  target="_blank" className="promotion-card__link"> IR PARA O SITE</a>
            </footer>
          </div>
        </div>
    );

export default PromotionCard;