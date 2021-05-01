
import * as React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/user-reducer";
import Users from "./Users";



let mapStateToProps=(state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        follow: (id)=>{
            dispatch(followAC(id))
        },
        unfollow: (id)=>{
            dispatch(unfollowAC(id))
        },
        setUsers:(users )=>{
            dispatch(setUsersAC(users))
        }
    }

}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;