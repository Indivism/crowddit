import { connect } from 'react-redux'
import Settings from '../presentationals/settings'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    crowddit: store.app.username
})

const mapDispatchToProps = (dispatch) => ({
    auth: async e => { dispatch( await A.auth(e)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)