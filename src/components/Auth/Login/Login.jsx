"use client";
import React, { useState } from "react";
import TextInput from "../../UI/Inputs/TextInput";
import PasswordInput from "../../UI/Inputs/PasswordInput";
import Button from "../../UI/Buttons/Button";
import Link from "next/link";
import DescriptionCard from "../../UI/DescriptionSection/DescriptionCard";

function Login() {
    return (
        <>
            <div className="pt-5 mb-10">
                <h1 className="text-3xl font-bold">Log into your account</h1>
                <p className="mt-3 opacity-65 tracking-wide">
                    Join our community to access all features
                </p>
            </div>
            <div>
                <TextInput
                    label={"Email or Phone"}
                    placeholder={"Enter your email or phone number"}
                ></TextInput>
                <PasswordInput
                    label={"Password"}
                    placeholder={"Create a strong password"}
                ></PasswordInput>
            </div>
            <div className="mt-6">
                <div className="mt-10">
                    <Button type="success" className={"!w-full mb-7"}>
                        Login
                    </Button>
                    <Link
                        href={"/signup"}
                        className="mt-7 text-center text-lightGreen"
                    >
                        <p>Don't have an account yet? Create One</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Login;
