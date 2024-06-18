import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');

    // let data = posts;
    // if (query) {
    //     data = data.filter(post => post.title.includes(query));
    // }
    // return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    return NextResponse.json(body);
}
