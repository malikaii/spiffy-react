import { useQuery } from "@apollo/client";
import { GET_USERS } from "components/gql/getUsers";
import './feed.css';
import React from "react";
import Header from "components/header/header";

const Feed = () => {
    const {loading, error, data} = useQuery(GET_USERS);
    if(loading) return <p>Data loading....</p>
    if(error) return <p>Couldn't get list of users, refresh and try again.</p>
    const users = data.getUsers;
    return (
        <>
            <Header/>
            <p>Feed results show here. If you don't see anything, refresh the page.</p>
            <p>This is a list of users for the app: </p>
            <ul>
                {users.map((user, id) => (
                    <li key={id}>[{user.name}]</li>
                ))}
            </ul>
        </>)
}

export default Feed;