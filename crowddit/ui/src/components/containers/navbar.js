import { connect } from 'react-redux'
import NavigationBar from '../presentationals/navbar'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    test: store.app.init_data
})

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => { dispatch(A.toggleLogin()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)