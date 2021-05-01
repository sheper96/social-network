import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";



function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile

                       />}
                        />
                    <Route path='/dialogs'
                           render={() => <DialogsContainer  />}/>
                           <Route path='/users'
                           render={() => <UsersContainer  />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
