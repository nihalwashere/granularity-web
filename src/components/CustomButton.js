"use client";

import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export const GetStartedButton = () => (
  <Button
    variant="contained"
    style={{
      width: 400,
      height: 50,
      backgroundColor: "#66b2b2",
      color: "#ffffff",
      fontFamily: "Product Sans",
      fontSize: 18,
      "&:hover": {
        backgroundColor: "#66b2b2d1",
      },
      textTransform: "none",
    }}
  >
    <Link
      underline="none"
      color="inherit"
      href={process.env.NEXT_PUBLIC_APP_URL}
      rel="noopener"
    >
      Get started with <span style={{ fontWeight: "bold" }}>Granularity</span> -
      it&apos;s FREE!
    </Link>
  </Button>
);

export const SignUpButton = () => (
  <Button
    variant="contained"
    style={{
      width: 100,
      backgroundColor: "#8e8e8e",
      color: "#000000",
      fontFamily: "Product Sans",
      fontSize: 18,
      "&:hover": {
        backgroundColor: "#8e8e8e99",
      },
      textTransform: "none",
    }}
  >
    <Link
      underline="none"
      color="inherit"
      href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}
      rel="noopener"
    >
      Sign Up
    </Link>
  </Button>
);

export const SignInButton = () => (
  <Button
    variant="contained"
    style={{
      width: 100,
      backgroundColor: "#66b2b2",
      color: "#ffffff",
      fontFamily: "Product Sans",
      fontSize: 18,
      "&:hover": {
        backgroundColor: "#66b2b2d1",
      },
      textTransform: "none",
    }}
  >
    <Link
      underline="none"
      color="inherit"
      href={`${process.env.NEXT_PUBLIC_APP_URL}/signin`}
      rel="noopener"
    >
      Sign In
    </Link>
  </Button>
);
