import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AgileResultsList from '../components/AgileResultsList/AgileResultsList';
import * as AgileActions from '../actions/AgileActions';
import { Route, Switch, withRouter } from 'react-router-dom';
import './AgilePageStyles.scss';

export class AgilePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchResults();
  }

  render() {
    const {
      error,
      agileResults,
      loading,
    } = this.props;

    return (
      <div>
        <h1>Agile React Sample</h1>
        {error && <p>{error}</p>}
        {loading && <div className="loader" />}
        {!loading && <Switch>
          <Route exact path='/'
            render={() =>
              <AgileResultsList results={agileResults}/>
            }
          />
        </Switch>}
      </div>
    );
  }
}

AgilePage.propTypes = {
  agileResults: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

AgilePage.defaultProps = {
  error: '',
};

const mapStateToProps = state => ({
  agileResults: state.resultSearch.results,
  error: state.resultSearch.error,
  loading: state.resultSearch.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AgileActions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AgilePage));
