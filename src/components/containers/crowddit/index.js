import { connect } from 'react-redux'
import Crowddit from '../../presentationals/crowddit'
import * as C from '../../../constants' 
import * as A from '../../../actions'

const mapStateToProps = (store, ownProps) => ({
    loggedIn: store.app.cookie,
    crowds: store.app.crowds,
    subredditSet: store.app.subredditSet,
    jsx: store.app.crowdJSX
})

const mapDispatchToProps = () => ({
    refreshCrowds: async () => { await A.getCrowds() }
})

export default connect(mapStateToProps, mapDispatchToProps)(Crowddit)