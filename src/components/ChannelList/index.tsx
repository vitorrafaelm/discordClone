import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton'; 

const ServerName: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="Chat-livre" />
    </Container>
  );
};

export default ServerName;
