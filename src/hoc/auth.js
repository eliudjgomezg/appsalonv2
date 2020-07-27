import React, { useEffect } from 'react';
import { auth } from './../_actions/user/user_actions';
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClass, reload, adminRoute) {
    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
      
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log("14", response)
                if (!response.payload.isAuth) {
                    if (reload) {
                        props.history.push('/register')
                        console.log("response", response)
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                        console.log("adminRoute", adminRoute)
                        console.log("isAdmin", response.payload.isAdmin)
                    }
                    else {
                        if (reload === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
            
        }, [dispatch, props.history])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}


