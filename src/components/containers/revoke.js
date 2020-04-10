import { connect } from 'react-redux'
import Revoke from '../presentationals/settings/revoke'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    auth: store.app.auth
})

const mapDispatchToProps = (dispatch) => ({
    revokeAuth: async () => dispatch( await A.revokeAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(Revoke)