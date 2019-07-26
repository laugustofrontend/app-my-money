import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import If from '../operador/if';
import { selectTab } from './tabActions';

class TabHeader extends Component {
  render() {
    const isSelected = this.props.tab.selected === this.props.target;
    const visible = this.props.tab.visible[this.props.target];

    return (
      <If test={visible}>
        <li className={isSelected ? 'active' : ''}>
          <a href="javascript:;"
            onClick={() => this.props.selectTab(this.props.target)}
            data-toggle="tab"
            data-target={this.props.target}>
            <span className={`fa fa-${this.props.icon}`} />
            {` ${this.props.label}`}
          </a>
        </li>
      </If>
    );
  }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
