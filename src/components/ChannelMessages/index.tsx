import React from 'react';

import { Container, Avatar, Messages, Header, Content } from './styles';
export { Mention } from './styles';

export interface Props{
  author: String; 
  date: String; 
  content: String | React.ReactElement | React.ReactNode; 
  hasMention?: boolean; 
  isBot?: boolean; 
}

const ChannelMessages: React.FC<Props> = ({author, date, content, hasMention, isBot}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''}/>

      <Messages>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}
          <time>{date}</time>
        </Header>

        <Content> 
          {content}
        </Content>
      </Messages>
    </Container>
  );
};

export default ChannelMessages;
