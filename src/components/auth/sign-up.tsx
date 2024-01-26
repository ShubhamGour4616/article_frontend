"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpApi } from "../api/AuthApis";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUp({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    const res = await SignUpApi({ email, password, firstName, lastName });
    if (res) {
      setIsLoading(false);
      router.replace("/dashboard");
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="first_name">
              First Name
            </Label>
            <h4>First Name</h4>
            <Input
              id="first_name"
              placeholder="John"
              type="text"
              autoCapitalize="none"
              autoComplete="given-name"
              autoCorrect="off"
              disabled={isLoading}
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="last_name">
              Last Name
            </Label>
            <h4>Last Name</h4>
            <Input
              id="last_name"
              placeholder="Doe"
              type="text"
              autoCapitalize="none"
              autoComplete="family-name"
              autoCorrect="off"
              disabled={isLoading}
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
            />
          </div>

          {/* Additional fields for email and password go here */}

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <h4>Email</h4>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <h4>Password</h4>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  );
}
