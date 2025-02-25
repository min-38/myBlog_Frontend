import "./globals.css";

export default function Layout({ children }) {
    return (
        <html lang="ko">
            <body className="min-h-screen bg-gray-100">

                <header className="bg-white shadow-md p-4">
                    <h1 className="text-center text-2xl font-bold">Blog Name</h1>
                    <nav className="flex justify-center space-x-4 mt-2">
                        <a href="/" className="text-gray-600 hover:text-black">Home</a>
                        <a href="/info" className="text-gray-600 hover:text-black">Info</a>
                        <a href="/project" className="text-gray-600 hover:text-black">Project</a>
                        <a href="/studying" className="text-gray-600 hover:text-black">Studying</a>
                    </nav>
                </header>
    
                <main className="container mx-auto p-6">{children}</main>
    
                <footer className="bg-white text-center py-4 mt-6 shadow-md">
                    <p>© 2025 Blog Name. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
}
