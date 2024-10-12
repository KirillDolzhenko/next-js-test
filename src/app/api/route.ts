export async function GET(request: Request) {
    // console.log(request);

    return Response.json({
        f: "fff"
    })
}


// import { NextResponse } from 'next/server';

// // Определение API роута с типами для GET-запроса
// export async function GET(request: Request) {
//   return Response.json({ message: 'Hello, API!' });
// }
