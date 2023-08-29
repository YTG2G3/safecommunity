'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingNav() {
    let { status } = useSession();
    let router = useRouter();

    return (
        <Navbar>
            <NavbarBrand>
                <Link href="#a">
                    <h1 className="font-medium">SafeCommunity</h1>
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
                        <Button variant="solid" onClick={() => router.push("/link")}>
                            Dashboard
                        </Button>
                    ) : (
                        <Button variant="ghost" onClick={() => signIn("github", { callbackUrl: "/console" })}>
                            Login
                        </Button>
                    )}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}