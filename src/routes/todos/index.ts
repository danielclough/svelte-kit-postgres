import { api } from "./_api";

export const get = (request: Request) => {
    return api(request);
}

export const post = async (event:any) => {
    const timestamp = new Date();
	const form = await await event.request.formData();;
    const data = form.get("text");
    const todo = {
        uid: String(Math.floor(Math.random()*10000000)),
        text: String(data),
        created_at: timestamp,
        done: false
    }
    return api(event, todo); 
};



