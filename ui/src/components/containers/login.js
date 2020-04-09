import { connect } from 'react-redux'
import Login from '../presentationals/login'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    modal: store.app.showLoginModal
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(A.toggleLogin()),
    login: async fields => dispatch(await A.login(fields))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)