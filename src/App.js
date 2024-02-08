import {useRoutes, Navigate} from "react-router-dom"
import Register from "./screens/Register";
import {useContext} from "react";
import {UserContext} from "./context/AppContext";
import NotFound from "./screens/NotFound";
import Login from "./screens/Login";
import Booklist from "./components/Booklist";
import SingleBook from "./components/Booklist/SingleBook";
import Navbar from "./screens/Navbar/Navbar";
import Categories from "./components/Categories/Categories"; 
import Author from "./components/Author/Author";
import Single_Author from "./components/Author/Single_Author";

function App() {
    const {user} = useContext(UserContext)

    return useRoutes(!user ? [
            {
                path: '/register',
                element: <Register/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/',
                element: <Navigate to="/login"/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
        ] : [
           
            {
                path: '/single__book/:id',
                element: <SingleBook/>

            },
            {
                path: '/',
                element: <Navbar/>
            },
            {
                path: '/books',
                element: <Booklist/>,
            },
            {
                path: '/categories',
                element: <Categories/>

            },
            {
                path: '/autors',
                element: <Author/>

            },
            {
                path: '/single_autor/:id',
                element: <Single_Author/>

            },
            {
                path: '*',
                element: <NotFound/>,
            },
        ]
    )
}

export default App;
