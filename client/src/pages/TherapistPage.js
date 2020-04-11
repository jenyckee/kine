import React from 'react';
import Header from '../components/Header'
import { selectUser, authCheckState } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Axios from 'axios';

class TherapistPage extends React.Component {

  componentDidMount() {
    if (!this.props.user) {
      this.props.authCheckState()
    }
  }

  render() {

    const { user } = this.props
    if (user) {
      Axios.get(`/api/v1/therapists/${this.props.user.id}/patients`).then(response => {
        console.log(response)
      })
    }
    return (
      <div>
        <Header/>
        <div className="container">
          {user ? user.username : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => { 
  return {
    authCheckState: () => dispatch(authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TherapistPage)
