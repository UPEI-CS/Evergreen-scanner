"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { disconnectServer, validateServer } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
const formSchema = z.object({
  server: z.string().url().min(1, { message: "Server is required" }),
});

export default function EgServerInput({
  server,
}: {
  server: string | undefined;
}) {
  const [isDisabled, setIsDisabled] = useState(!!server);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      server: server || "",
    },
  });
  const handleSubmit = async ({ server }: z.infer<typeof formSchema>) => {
    try {
      const response = await validateServer(server);
      if (response.success) {
        toast.success(response.message);
        setIsDisabled(true);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
    }
  };

  const handleDisconnect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDisconnecting(true);
    try {
      await disconnectServer();
      form.reset();
      setIsDisabled(false);
      toast.success("Successfully disconnected from server");
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred while disconnecting");
    } finally {
      setIsDisconnecting(false);
    }

  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col w-full gap-2"
      >
        <FormField
          control={form.control}
          name="server"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-semibold">Evergreen Server</FormLabel>
              <div className="flex w-full gap-2">
                <FormControl className="flex-grow">
                  <Input
                    id="server"
                    type="url"
                    {...field}
                    disabled={isDisabled}
                    placeholder="https://your-eg-server.com"
                    className="w-full"
                  />
                </FormControl>
                {!isDisabled ? (
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="whitespace-nowrap"
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      "Connect"
                    )}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleDisconnect}
                    className="whitespace-nowrap"
                    disabled={isDisconnecting}
                    >
                    {isDisconnecting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      "Disconnect"
                    )}
                  </Button>
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

      </form>
    </Form>
  );
}
