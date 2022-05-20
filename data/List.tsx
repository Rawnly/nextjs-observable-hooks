import axios from 'axios';
import { useObservableSuspense } from 'observable-hooks';
import React, { FC, PropsWithChildren } from "react";
import useSWR from 'swr';
import { todosResource } from './resource';
import { Todo } from './types';

interface IListProps { }

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
})

const List: FC<PropsWithChildren<IListProps>> = ( props ) => {
	const todos = useObservableSuspense(todosResource)

	return (
		<ul>
			{todos?.slice( 0, 10 ).map( todo => (
				<li key={todo.id} style={{
					textDecoration: todo.completed ? 'line-through' : 'none'
				}}>{todo.title}</li>
			) )}
		</ul>
	);
}

List.displayName = 'List'

export default List;
