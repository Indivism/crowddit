import { connect } from 'react-redux'
import AuthAlert from '../presentationals/AuthAlert'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    visible: store.app.showAuthAlert
})

const mapDispatchToProps = (dispatch) => ({
    dismiss: () => { dispatch(A.dismissAuthAlert()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthAlert)