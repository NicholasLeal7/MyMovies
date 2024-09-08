import { FaSearch } from "react-icons/fa";
import './Navbar.scss';

interface Props {
    inputText: string,
    onChangeInputText: (value: string) => void
}
export default function Navbar(props: Props) {
    return (
        <nav className="navbar">
            <h1 className="page-title">MyMovies</h1>
            <div className="search-field">
                <input type="text" value={props.inputText} onChange={(evt) => props.onChangeInputText(evt.target.value)} placeholder="Search here..." />
                <span className="icon">
                    <FaSearch />
                </span>
            </div>
        </nav>
    );
}