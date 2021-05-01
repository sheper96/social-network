import classes from './Users.module.css'
import axios from "axios";
import user from '../../assets/user.png';
import * as React from "react";


class Users extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? classes.selectedPage : ''}>{p}</span>
                    })}

                </div>
                <button onClick={this.getUsers}>get users</button>
                {this.props.users.map(u => <div key={u.id}>
        <span><div><img className={classes.ava} src={u.photos.small != null ? u.photos.small : user} alt=""/></div><div>{u.followed ?
            <button onClick={() => {
                this.props.unfollow(u.id)
            }}>Unfollow</button> :
            <button onClick={() => {
                this.props.follow(u.id)
            }}>Follow</button>}</div></span>
                    <span><span>
        <div>{u.name}</div>
        <div>{u.status}</div>
        </span></span></div>)}
            </div>
        )
    }

}


export default Users;



