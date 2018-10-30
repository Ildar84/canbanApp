import { connect } from 'react-redux'
import{ columnNames } from '../constants/ActionTypes'
import { showModal } from '../actions'
import ColumnField from '../components/ColumnField'

const mapStateToProps = state => ({
  phases: columnNames,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onShowModalClick: () => dispatch(showModal()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnField)
