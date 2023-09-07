import React, { useState } from 'react'
import listContext from './listContext'

const ListState = (props) => {
    const host = "http://localhost";
    const [lists, setLists] = useState([]);

    //Fetching all lists

    const getLists = async () => {

        const response = await fetch(`${host}/lists/getlists`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            },

        });
        const json = await response.json();
        // console.log(json);
        setLists(json);

    }

    //Adding a new list

    const addList = async (title) => {

        const response = await fetch(`${host}/lists/addlist`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            },

            body: JSON.stringify({ title }),

        });
        const list = await response.json();
        console.log(list);
        setLists(lists.concat(list));

    }

    const editList = async (id, title) => {

        try {

            const response = await fetch(`${host}/lists/updatelist/${id}`, {
                method: 'PUT',

                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem("token")
                },

                body: JSON.stringify({ title }),

            });
            const json = await response.json();
            console.log(json);

            let newLists = JSON.parse(JSON.stringify(lists))
            for (let i = 0; i < newLists.length; i++) {
                const ele = newLists[i];
                if (ele._id === id) {  
                    newLists[i].title = title;
                    break;
                }

            }
            setLists(newLists);

        } catch (error) {
            console.log(error);
        }

    }

    const deleteList = async (list_id) => {

        try {
            
            const response = await fetch(`${host}/lists/deletelist/${list_id}`, {
                method: 'DELETE',
    
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem("token")
                },
    
    
            });
            const list = await response.json();
            console.log(list);

            const newLists=lists.filter(list=>list._id!==list_id);
            setLists(newLists);

        } catch (error) {
            console.log(error);
        }

        
    }

    return (
        <listContext.Provider value={{ lists, getLists, addList, editList,deleteList}}>
            {props.children}
        </listContext.Provider>
    )
}

export default ListState