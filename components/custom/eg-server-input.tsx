"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { validateServer } from "@/app/actions";
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

const formSchema = z.object({
  server: z.string().url().min(1, { message: "Server is required" }),
});

export default function EgServerInput({
  server,
}: {
  server: string | undefined;
}) {
  const [isDisabled, setIsDisabled] = useState(!!server);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      server: server || "",
    },
  });
  const handleSubmit = async ({ server }: z.infer<typeof formSchema>) => {
    try {
      await validateServer(server);
      setIsDisabled(true);
    } catch (error) {
      console.error(error);
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
              <FormLabel>Evergreen Server</FormLabel>
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
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDisabled(false);
                      form.reset();
                    }}
                    className="whitespace-nowrap"
                  >
                    Disconnect
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
