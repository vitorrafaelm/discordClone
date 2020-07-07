import React, { useRef, useEffect} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon} from './styles';
import ChannelMessages, { Mention } from '../ChannelMessages';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>; 

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight; 
    }

  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
      {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessages 
          author="Guilherme Rodz"
          date="21/06/2020"
          content="Hoje é meu aniversário"
          />
      ))}
        
        <ChannelMessages 
          author="Diego Fernandes"
          date="21/06/2021"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>, me carrega no LoL e CS de novo, por favor? 
            </>
          }
          hasMention
          isBot
        />


      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
