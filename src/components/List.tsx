import React from "react";
import { useState } from "react";
import App from "../App";
import { type } from "os";
import { constants } from "buffer";

export type test = {
    contents:string;
    done: boolean;
}
type Props = {tasks: test[]};
let todoLists:Array<test> = [];

export const TodoList = (props:Props) => {
    const {tasks} = props
    
    return(
        <ul>
            <div>{tasks.map((task)=> (<li>{task.contents}</li>))}</div>
        </ul>
    );
};