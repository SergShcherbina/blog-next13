export function Footer() {
    const date = new Date().getFullYear();
    return <footer className={'p-3 flex justify-center border-t'}>&copy; {date} Footer</footer>;
}
