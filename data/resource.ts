import { ObservableResource } from 'observable-hooks';
import { catchError, map, of, startWith, Subject, switchMap } from 'rxjs';
import { Todo } from './types';
import { ajax } from 'rxjs/ajax'

const fetchTodos$$ = new Subject<void>();
const todosResource$$ = fetchTodos$$.pipe(
	switchMap(() => ajax.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
		startWith(null),
		map(r => r ? r.response : r),
		catchError(() => of([] as Todo[]))
	)),
)

export const todosResource = new ObservableResource(
	todosResource$$,
	(todo: Todo[] | null) => !!todo
)

export const fetchTodos = () => {fetchTodos$$.next()}
