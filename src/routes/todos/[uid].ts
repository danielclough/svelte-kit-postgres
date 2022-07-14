import type { RequestHandler } from "@sveltejs/kit";

export const del:RequestHandler = (request) => {
    console.log(request)
    return {
        status: 200,
        body: request.params.uid
    }
}