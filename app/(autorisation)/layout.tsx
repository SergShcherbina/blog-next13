export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={'px-3'}>
            <h1 className={'my-5 text-3xl text-center'}>Auth Layout</h1>
            {children}
        </div>
    );
}
