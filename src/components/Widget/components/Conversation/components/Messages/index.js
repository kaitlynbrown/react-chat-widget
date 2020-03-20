import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {connect} from 'react-redux';

import {MESSAGE_SENDER} from '@constants';
import {hideAvatar} from '@actions';
import {scrollToBottom} from '@utils/messages';

import Loader from './components/Loader';
import './styles.scss';

class Messages extends Component {
  componentDidMount() {
    scrollToBottom(this.$message);
  }

  componentDidUpdate() {
    scrollToBottom(this.$message);
  }

  $message = null;

  getComponentToRender = message => {
    const ComponentToRender = message.get('component');
    const previousMessage = this.props.messages.get();
    if (message.get('type') === 'component') {
      return <ComponentToRender {...message.get('props')} />;
    }
    return <ComponentToRender message={message} />;
  };

  shouldRenderAvatar = (message, index) => {
    const previousMessage = this.props.messages.get(index - 1);
    if (message.get('showAvatar') && previousMessage.get('showAvatar')) {
      this.props.dispatch(hideAvatar(index));
    }
  };

  render() {
    const {messages, responseAvatar, clientAvatar, typing} = this.props;
    return (
      <div
        id="messages"
        className="rcw-messages-container"
        ref={msg => (this.$message = msg)}
      >
        {messages.map((message, index) => (
          <div className="rcw-message" key={index}>
            {message.get('sender') === MESSAGE_SENDER.RESPONSE &&
              responseAvatar}
            {this.getComponentToRender(message)}
            {message.get('sender') === MESSAGE_SENDER.CLIENT && clientAvatar}
          </div>
        ))}
        <Loader typing={typing} />
      </div>
    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  responseAvatar: PropTypes.node,
  clientAvatar: PropTypes.node,
};

export default connect(store => ({
  messages: store.messages,
  typing: store.behavior.get('msgLoader'),
}))(Messages);
