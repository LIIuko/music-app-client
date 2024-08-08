import React from 'react';

const Index: React.FC = () => {
    return (
        <nav className={"bg-teal-800 p-3 text-lime-100"}>
            <div className={"container flex items-center justify-between w-3/4 mx-auto"}>
                <ul className={"flex text-2xl font-semibold"}>
                    <li className={"mr-6"}>Главная</li>
                    <li className={"mr-6"}>Топ треков</li>
                    <li>Новинки</li>
                </ul>
                <input
                    className={"rounded-xl bg-teal-800 border-2 border-teal-500 focus:border-teal-300 py-2 px-4"}
                    type="text"
                    placeholder={"search"}/>
            </div>
        </nav>
    );
};

export default Index;