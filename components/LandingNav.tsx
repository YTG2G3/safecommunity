'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function LandingNav() {
    let { status } = useSession();

    return (
        <Navbar>
            <NavbarBrand>
                <Link href="#a">
                    <h1>SafeCommunity</h1>
                </Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavbarItem>
                    <Link href="#about">
                        About
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#plans">
                        Plans
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#api">
                        API
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {status === "authenticated" ? (
                        <Link href="/login">
                            Dashboard
                        </Link>
                    ) : (
                        <Button variant="flat" onClick={() => signIn()}>
                            Login
                        </Button>
                    )}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}