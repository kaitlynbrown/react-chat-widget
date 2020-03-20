import React, {PureComponent} from 'react';
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

import {PROP_TYPES} from '@constants';

import './styles.scss';

class Message extends PureComponent {
  render() {
    return (
      <div className={`rcw-${this.props.message.get('sender')}`}>
        <div className="rcw-message-text">{this.props.message.get('text')}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE,
};

export default Message;
