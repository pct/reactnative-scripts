import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Tabs, Button, Icon } from 'native-base';

// ours
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

export default class Index extends Component {
  render() {
    return (
    <Container>
      <Header>
        <Button transparent>
          <Icon name='ios-menu' />
        </Button>
        <Title>@TODO Tab Title Switch</Title>
        <Button transparent>
          <Icon name='ios-share-outline' />
        </Button>
      </Header>
      <Content>
        <Tabs>
          <Tab1 tabLabel='Tab1' />
          <Tab2 tabLabel='Tab2' />
          <Tab3 tabLabel='Tab3' />
        </Tabs>
      </Content>
    </Container>
    );
  }
}
