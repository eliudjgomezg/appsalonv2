import React, { useEffect } from 'react';
import { auth } from './../_actions/user/user_actions';
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClass, reload, adminRoute = null) {
    function AuthenticationCheck(props) {
        console.log("props", props)
        let user = useSelector(state => state.user);
        console.log("userAuth", user)
      
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(async response => {
                if (await !response.payload.isAuth) {
                    if (reload) {
                        alert("AQUI")
                      //  props.history.push('/register_login')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        alert("AQUI 1 ")
                        //props.history.push('/')
                    }
                    else {
                        if (reload === false) {
                            alert("AQUI 2")
                          //  props.history.push('/')
                        }
                    }
                }
            })
            
        }, [dispatch, props.history, user.payload])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}