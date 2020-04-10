import { connect } from 'react-redux'
import AccountInitAlert from '../presentationals/AccountInitAlert'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    showInitAlert: store.app.initAccountAlert
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AccountInitAlert)