"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  // State variables to store username, password, error message, and loading state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Router instance for navigation
  const router = useRouter();

  // Function to handle the login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null); // Clear any previous error messages
    setIsLoading(true); // Set loading state to true

    try {
      // Send a POST request to the /api/login endpoint with username and password
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json(); // Parse the response as JSON

      // If the response is not ok, throw an error with the message from the response
      if (!response.ok) {
        throw new Error(data.error);
      }

      // If login is successful, redirect to the home page
      router.push("/");
    } catch (err: any) {
      // If an error occurs, set the error message to the error's message
      setError(err.message);
    } finally {
      // Regardless of success or failure, set loading state to false
      setIsLoading(false);
    }
  };

  return (
    // Main container with flexbox for layout
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      {/* Container to center the card and apply responsive width */}
      <div className="w-full max-w-md px-4 sm:max-w-lg">
        <Card className="w-full">
          {/* Card header with title and icon */}
          <CardHeader className="space-y-1 text-center">
            <div className="flex flex-col items-center">
              {/* Icon with background and rounded corners */}
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              {/* Card title */}
              <CardTitle className="text-2xl font-extrabold mt-2">
                Library Scanner
              </CardTitle>
            </div>
            {/* Description text */}
            <p className="text-sm text-gray-500">
              Enter your credentials to sign in
            </p>
          </CardHeader>
          {/* Card content with login form */}
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email input field */}
              <div className="space-y-2">
                <Label className="font-semibold" htmlFor="username">
                  Email
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              {/* Password input field */}
              <div className="space-y-2">
                <Label className="font-semibold" htmlFor="password">
                  Password
                </Label>
                <div className="flex justify-between items-center">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Submit button with loading state */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 font-semibold"
                disabled={isLoading}
              >
                {/* Conditionally render loading spinner or text */}
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          {/* Card footer with demo account information */}
          <CardFooter className="text-center text-sm text-slate-500 dark:text-slate-400">
            <div className="w-full">
              Demo accounts:
              <br />
              Username: admin / Password: demo123
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
