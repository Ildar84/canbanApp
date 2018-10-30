import { connect } from 'react-redux';
import { addTask, closeModal } from '../actions';
import MainBoard from '../components/MainBoard';

const getEditableTask = (state) => state.tasks[state.editableTask];

const getModalVisibility = (state) => {
    return state.modalShow;
}


const mapStateToProps = state => ({
    modalVisibility: getModalVisibility(state),
    editableTask: getEditableTask(state)
})
const mapDispatchToProps = dispatch => ({
    onAddTask: (data)=>dispatch(addTask(data)),
    onCancelClick: () => dispatch(closeModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBoard)

