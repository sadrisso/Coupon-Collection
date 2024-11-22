import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const MainLayout = () => {


    return (
        <div>
            <header className="bg-slate-200">
                <Navbar />
                <div className="banner container mx-auto mt-10">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center font-mono mb-5">You Favourite Brands</h1>
                    <Banner />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;