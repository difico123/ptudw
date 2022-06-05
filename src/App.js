import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings, Office, Offices, Cert } from "./components";
import { Overeview, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Login } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import * as AuthService from "./service/auth";
const App = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings, isLogin, setLogin } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    useEffect(() => {
        let token = AuthService.getToken();
        if (token) {
            setLogin(true);
        }
    }, []);

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <BrowserRouter>
                {!isLogin ? (
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                ) : (
                    <div className="flex relative dark:bg-main-dark-bg">
                        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                            <TooltipComponent content="Settings" position="Top">
                                <button
                                    type="button"
                                    onClick={() => setThemeSettings(true)}
                                    style={{ background: currentColor, borderRadius: "50%" }}
                                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                >
                                    <FiSettings />
                                </button>
                            </TooltipComponent>
                        </div>
                        {activeMenu ? (
                            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                                <Sidebar />
                            </div>
                        ) : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                <Sidebar />
                            </div>
                        )}
                        <div className={activeMenu ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  " : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "}>
                            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                                <Navbar />
                            </div>
                            <div>
                                {themeSettings && <ThemeSettings />}

                                <Routes>
                                    {/* dashboard  */}
                                    <Route path="/" element={<Overeview />} />
                                    <Route path="/overeview" element={<Overeview />} />

                                    {/* pages  */}
                                    <Route path="/orders" element={<Orders />} />
                                    <Route path="/employees" element={<Employees />} />
                                    <Route path="/customers" element={<Customers />} />
                                    <Route path="/Safety" element={<Offices />} />
                                    <Route path="/UnSafety" element={<Offices />} />
                                    <Route path="/Addcert" element={<Cert />} />
                                    <Route path="/Offices/:id" element={<Office />} />

                                    {/* apps  */}
                                    <Route path="/kanban" element={<Kanban />} />
                                    <Route path="/editor" element={<Editor />} />
                                    <Route path="/calendar" element={<Calendar />} />
                                    <Route path="/color-picker" element={<ColorPicker />} />

                                    {/* charts  */}
                                    <Route path="/line" element={<Line />} />
                                    <Route path="/area" element={<Area />} />
                                    <Route path="/bar" element={<Bar />} />
                                    <Route path="/pie" element={<Pie />} />
                                    <Route path="/financial" element={<Financial />} />
                                    <Route path="/color-mapping" element={<ColorMapping />} />
                                    <Route path="/pyramid" element={<Pyramid />} />
                                    <Route path="/stacked" element={<Stacked />} />
                                </Routes>
                            </div>
                            <Footer />
                        </div>
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
};

export default App;
