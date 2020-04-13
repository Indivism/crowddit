import { connect } from 'react-redux'
import Crowddit from '../../presentationals/crowddit'
import * as C from '../../../constants' 
import * as A from '../../../actions'

const mapStateToProps = (store, ownProps) => ({
    loggedIn: store.app.cookie
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Crowddit)