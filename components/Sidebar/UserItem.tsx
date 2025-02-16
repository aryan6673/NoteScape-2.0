"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ChevronsLeftRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const UserItem = () => {
    const { user } = useUser();
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5 rounded-sm" >
                    <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar className="h-5 w-5 max-md:h-12 max-md:w-12">
                            <AvatarImage src={user?.imageUrl} />
                        </Avatar>
                        <span className="text-start font-medium line-clamp-1 max-md:text-lg">
                            {user?.fullName}&apos;s Scape
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 h-4 w-4 ml-2 text-muted-foreground" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-80"
                align="start"
                alignOffset={11}
                forceMount
            >
                <div className="flex flex-col space-y-4 p-2 cursor-pointer" onClick={() => router.push('/profile')}>
                    <p className="text-xs font-medium leading-none text-muted-foreground">
                        {user?.emailAddresses[0].emailAddress}
                    </p>
                    <div className="flex gap-x-2 items-center">
                        <div className="rounded-md bg-secondary p-1">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={user?.imageUrl}/>
                        </Avatar>
                        </div>
                        <div className="space-y-1">
                        <p className="text-sm line-clamp-1">
                            {user?.fullName}&apos;s Scape
                        </p>
                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className="w-full cursor-pointer text-muted-foreground" asChild>
                <SignOutButton>
                    Log out
                </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}