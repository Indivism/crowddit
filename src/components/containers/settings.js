import { connect } from 'react-redux'
import Settings from '../presentationals/settings'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = store => ({
    crowddit: store.app.username,
    isAuthenticated: store.app.auth
})

const mapDispatchToProps = dispatch => ({
    auth: async e => { dispatch( await A.auth(e)) },
    onUpdate: async () => { dispatch( await A.returnFromReddit() ) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)