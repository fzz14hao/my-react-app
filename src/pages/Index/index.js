import Index from './index.jsx'
import * as actions from '../../redux/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'


function mapStateToProps(state) {

  return {
    stores: {...state.reducer}
  }

}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(actions, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Index)