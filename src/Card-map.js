
import React from 'react';
import Cards from './cards';
import SetData from './Card-obj'


export default function CardMap() {

    let cardData = SetData;

    console.log(cardData)
    return (
        <>

            {
                cardData.map(
                    (val, ind) => (
                        <Cards
                            key={ind}
                            imgSrc={val.imgSrcCard}
                            title={val.title}
                            CardDes={val.CardDes}
                            ctaName={val.ctaName}
                            ctaUrl={val.ctaUrl}
                            ModalTitle={val.ModalTitle}
                            modalDes={val.modalDes} />

                    )
                )
                
            }
            

        </>
    )
}
