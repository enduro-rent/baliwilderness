import React from 'react'
import {cn} from "@/lib/utils";

function Container({
                       children,
                       className,
                   }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("mx-auto", className)}>
            {children}
        </div>
    )
}

export default Container
