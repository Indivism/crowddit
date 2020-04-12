import { connect } from 'react-redux'
import NavigationBar from '../presentationals/navbar'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    test: store.app.init_data,
    cookie: store.app.cookie,
    username: store.app.username,
    page: store.app.page
})

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => { dispatch(A.toggleLogin()) },
        logout: () => { dispatch(A.logout()); dispatch(A.purge()) },
        setPage: page => { dispatch(A.setPage(page)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)