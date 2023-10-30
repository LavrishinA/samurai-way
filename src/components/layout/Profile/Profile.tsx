import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Actions, Posts} from "../../../redux/state";

type ProfileProps = {
    profileState: {
        posts: Posts[]
        textAreaValue: string
    }
    dispatch: (action: Actions) => void
}

export const Profile = ({profileState,  dispatch}: ProfileProps) => {

    return (
        <section>
            <ProfileInfo/>
            <MyPosts posts={profileState.posts} textAreaValue={profileState.textAreaValue} dispatch={dispatch}/>
        </section>
    );
};

