import './globals.css'
import React from "react";

const RootLayout = ({
                        children
                    }) => {
    {
        return (
            <main>
                {children}
            </main>
        );
    }
}

export default RootLayout;