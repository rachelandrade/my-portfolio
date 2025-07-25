
export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">Rachel Prima Andrade</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#tech-skills" className="hover:underline">Tech Skills</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>

                </ul>
            </nav>
        </header>
    );
};
