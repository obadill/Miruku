import React from 'react';
import searchLogo from "./Search.svg";

interface SearchBarProps {
    query: string,
    setQuery: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "start",
                background: "white",
                padding: "12px",
                borderRadius: "16px",
                gap: "10px",
                alignItems: "center",
            }}
        >

            <img src={searchLogo} alt="looking-glass" height={16} width={16}/>
            <input
                placeholder="Search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    width: "100%",
                    border: 'none',
                    zIndex: "1",
                }}
            />
        </div>
    );
}

export default SearchBar;
