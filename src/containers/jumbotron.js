import React from 'react';
import jumoData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  return (
     <Jumbotron.Container>
       {jumoData.map((item) => (
         <Jumbotron key={item.id} direction={item.direction}>
           <Jumbotron.Pane>
           <Jumbotron.Title>{item.title}</Jumbotron.Title>
           <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
           </Jumbotron.Pane>
           <Jumbotron.Pane>
           <Jumbotron.Image src={item.image} alt={item.alt} />
           </Jumbotron.Pane>
           <p>{item.alt}</p> 
         </Jumbotron>
       ))}
     </Jumbotron.Container>
  );
}

