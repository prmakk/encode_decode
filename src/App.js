import { Route, Routes } from "react-router-dom";
import Base64Encode from "./pages/Base64Encode";
import './styles/css/main.css'
import SideMenu from "./components/SideMenu";
import Base64Decode from "./pages/Base64Decode";
import LowerCase from "./pages/LowerCase";
import UpperCase from "./pages/UpperCase";
import ReverseString from "./pages/ReverseString";
import GenerateQr from "./pages/GenerateQr";
import CaesarEncode from "./pages/CaesarEncode";
import CaesarDecode from "./pages/CaesarDecode";
import HomePage from "./pages/HomePage";
import BinaryEncode from "./pages/BinaryEncode";
import BinaryDecode from "./pages/BinaryDecode";
import Error from "./pages/Error";
import EditImage from "./pages/EditImage";

function App() {
    return (
        <div className="container">
            <SideMenu />
            <Routes>
                <Route path="*" element={<Error message={'page not found'}/>}></Route>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/base64/encode" element={<Base64Encode />}></Route>
                <Route path="/base64/decode" element={<Base64Decode />}></Route>
                <Route path="/lower" element={<LowerCase />}></Route>
                <Route path="/upper" element={<UpperCase />}></Route>
                <Route path="/reverseall" element={<ReverseString />}></Route>
                <Route path="/generateqr" element={<GenerateQr />}></Route>
                <Route path="/caesar/encode" element={<CaesarEncode />}></Route>
                <Route path="/caesar/decode" element={<CaesarDecode />}></Route>
                <Route path="/binary/encode" element={<BinaryEncode />}></Route>
                <Route path="/binary/decode" element={<BinaryDecode />}></Route>
                <Route path="/image/edit" element={<EditImage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
