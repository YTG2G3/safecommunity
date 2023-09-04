import { getApiDocs } from '@/lib/swagger';
import ReactSwagger from './ReactSwagger';

export default async function Page() {
    const spec = await getApiDocs();
    return (
        <main className='h-screen w-screen bg-white fixed overflow-auto'>
            <section className="container">
                <ReactSwagger spec={spec} />
            </section>
        </main>
    );
}