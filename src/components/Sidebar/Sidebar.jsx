import React from "react";
import cls from "./Sidebar.module.scss";
import logo from "../../assets/images/logo.png";
import dashboard from "../../assets/images/dashboard.png";

const Sidebar = () => {
    return (
        <div className={cls.sidebar}>
            <img src={logo} alt="pdp logo" className="logo" />
            <nav className={cls.nav}>
                <ul className={cls.list}>
                    <li className={`${cls.listItem} ${cls.active}`}>
                        <img src={dashboard} alt="dashboard icon" />
                        <a href="/">Dashboard</a>
                    </li>
                    <li className={cls.listItem}>
                        <img src={dashboard} alt="dashboard icon" />
                        <a href="/">Settings</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
