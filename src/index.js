import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import Widget from './components/Widget';
import store from '../src/store/store';

const ConnectedWidget = props => (
  <Provider store={store}>
    <Widget
      title={props.title}
      titleAvatar={props.titleAvatar}
      subtitle={props.subtitle}
      handleNewUserMessage={props.handleNewUserMessage}
      handleQuickButtonClicked={props.handleQuickButtonClicked}
      senderPlaceHolder={props.senderPlaceHolder}
      responseAvatar={props.responseAvatar}
      clientAvatar={props.clientAvatar}
      showCloseButton={props.showCloseButton}
      fullScreenMode={props.fullScreenMode}
      badge={props.badge}
      autofocus={props.autofocus}
      customLauncher={props.launcher}
      onOpen={props.onOpen}
      onClose={props.onClose}
    />
  </Provider>
);

ConnectedWidget.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  handleQuickButtonClicked: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  responseAvatar: PropTypes.node,
  clientAvatar: PropTypes.node,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  launcher: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

ConnectedWidget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
  autofocus: true,
};

export default ConnectedWidget;
