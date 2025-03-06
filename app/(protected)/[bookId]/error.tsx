"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Error() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[calc(100vh-64px)]">
      <Card className="max-w-md w-full">
        <CardHeader className="bg-red-50 dark:bg-red-900/30 flex items-center justify-center pb-2">
          <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
        </CardHeader>
        <CardContent className="text-center p-6">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
            Error
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Something went wrong while fetching the item information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

