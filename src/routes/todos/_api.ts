let todos: Todo[]  = [];
const home = {
    status: 303,
    headers: {
        location: "/"
    }
}
export const api = (event: any, todo?: Todo ) => {
    switch (event.request.method.toUpperCase()) {
        case "GET":
            return {
                body: todos,
                status: 200,
            }
        case "POST":
            console.log(event.request)
            if (todo) todos.push(todo);
            return home;
        case "DELETE":
            console.log(event.request)
            todos = todos.filter(t => t.uid);
            return home;
        default:
    }
}