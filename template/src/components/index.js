import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Tab, Tabs, Button, Icon, Left, Right, Body } from 'native-base';

// ours
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

export default class Index extends Component {
  render() {
    return (
    <Container>
      <Header hasTabs>
        <Left>
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Left>
        <Body>
        <Title>@TODO Tab Title Switch</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='ios-share-outline' />
          </Button>
        </Right>
      </Header>
      <Tabs>
        <Tab1 heading='Tab1' />
        <Tab2 heading='Tab2' />
        <Tab3 heading='Tab3' />
      </Tabs>
    </Container>
    );
  }
}
