"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders an Avatar root element with default avatar styling and forwarded props.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @returns The Avatar root element with rounded, square-aspect sizing and merged class names
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with a square aspect ratio and merged class names.
 *
 * @returns The Radix Avatar Image element with a `data-slot="avatar-image"` attribute and combined `className`.
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Render an avatar fallback element displayed when the avatar image is unavailable.
 *
 * @param className - Additional CSS classes to append to the component's default styling
 * @returns A Radix `Avatar.Fallback` element with rounded, centered, muted styling, the `data-slot="avatar-fallback"` attribute, and any other props forwarded onto the element
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }