
const Sidebar = ({ categories, onSelectCategory }) => {
    return (
        <div className="w-60 p-4 bg-white shadow-md rounded-lg">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className="w-full py-2 my-1 px-4 text-left rounded-lg bg-gray-100 hover:bg-purple-500 hover:text-white transition-all"
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;