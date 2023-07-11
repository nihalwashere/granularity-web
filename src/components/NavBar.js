"use client";

import React from "react";
import { SignUpButton, SignInButton } from "./CustomButton";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div
        className={styles["navbar-logo"]}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        granularity
      </div>

      <div className={styles["navbar-items-container"]}>
        <SignInButton />

        <div className={styles["navbar-item"]}>
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
