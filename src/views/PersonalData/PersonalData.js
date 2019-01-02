import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '$component/App';
import { login } from '../../model/action';
import './PersonalData.less';

class PersonalData extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    loginUserName: PropTypes.string,
    loginError: PropTypes.string
  };
  componentDidMount() {
    this.props.login();
  }
  render() {
    return (
      <App>
        <div>welcome to personal</div>
        {
          this.props.isLoading ?
            <p>疯狂redux...</p> : null
        }
        {
          this.props.loginUserName ?
            <p>{this.props.loginUserName}</p> : null
        }
        {
          this.props.loginError ?
            <p>{this.props.loginError}</p> : null
        }
      </App>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.loginPageData.loading,
  loginUserName: state.entities.loginUser || null,
  loginError: state.loginPageData.error || null
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);
