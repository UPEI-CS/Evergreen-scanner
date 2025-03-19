"use client";

import * as React from "react";
import {
  BarChart4,
  LogOut,
  Moon,
  QrCode,
  Settings,
  Shield,
  Sun,
  User,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = {
  nav: [
    { name: "General", icon: Settings },
    { name: "Admin settings", icon: Shield },
  ],
};

export function SettingsDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [activeSection, setActiveSection] = React.useState("General");
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 md:max-h-[600px] md:max-w-[900px] lg:max-w-[1000px]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={activeSection === item.name}
                          onClick={() => setActiveSection(item.name)}
                        >
                          <a href="#">
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-[580px] flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{activeSection}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-2">
              {activeSection === "General" ? (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>User Profile</CardTitle>
                      <CardDescription>
                        View and manage your account information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">
                            john.doe@library.edu
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Administrator
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance</CardTitle>
                      <CardDescription>
                        Customize how the application looks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {darkMode ? (
                            <Moon className="h-5 w-5" />
                          ) : (
                            <Sun className="h-5 w-5" />
                          )}
                          <span>Dark Mode</span>
                        </div>
                        <Switch
                          checked={darkMode}
                          onCheckedChange={setDarkMode}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Manage your account settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="flex items-center gap-2">
                        <LogOut className="h-4 w-4" />
                        Log Out
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Tabs defaultValue="barcode" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="barcode">Barcode Scanning</TabsTrigger>
                    <TabsTrigger value="display">Item Display</TabsTrigger>
                    <TabsTrigger value="functions">Functionalities</TabsTrigger>
                  </TabsList>

                  <TabsContent value="barcode" className="space-y-4 pt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <QrCode className="h-5 w-5" />
                          Barcode Type Selection
                        </CardTitle>
                        <CardDescription>
                          Configure the barcode scanner settings
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <RadioGroup defaultValue="codabar">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="codabar" id="codabar" />
                            <Label htmlFor="codabar">
                              Codabar (default for UPEI)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3of9" id="3of9" />
                            <Label htmlFor="3of9">3 of 9</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="interleaved"
                              id="interleaved"
                            />
                            <Label htmlFor="interleaved">
                              Interleaved 2 of 5
                            </Label>
                          </div>
                        </RadioGroup>

                        <Separator className="my-4" />

                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">
                            Unscannable Barcode Handling
                          </h3>

                          <div className="flex items-center space-x-2">
                            <Checkbox id="auto-cancel" />
                            <Label htmlFor="auto-cancel">
                              Automatically cancel scan if barcode can't be read
                            </Label>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="error-message">
                              Message for unscannable barcodes:
                            </Label>
                            <Input
                              id="error-message"
                              placeholder="Enter message"
                              defaultValue="Barcode cannot be read. Please handle manually."
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="display" className="space-y-4 pt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart4 className="h-5 w-5" />
                          Item Display Configuration
                        </CardTitle>
                        <CardDescription>
                          Configure how items are displayed before menu actions
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="display-toggle">
                            Enable Item Display Before Menu Actions
                          </Label>
                          <Switch id="display-toggle" />
                        </div>

                        <Separator className="my-2" />

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="location-display" />
                            <Label htmlFor="location-display">
                              Include Location (Organizational Unit Short Name)
                            </Label>
                          </div>
                          <p className="text-xs text-muted-foreground pl-6">
                            Optional - UPEI would not use this, but other
                            libraries might
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="functions" className="space-y-4 pt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Configurable Functionalities</CardTitle>
                        <CardDescription>
                          Enable or disable specific features
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="in-house-use">
                              Record In-House Use
                            </Label>
                            <Switch id="in-house-use" />
                          </div>

                          <div className="flex items-center justify-between">
                            <Label htmlFor="check-in">
                              Check-in the Book if Status is Checked Out
                            </Label>
                            <Switch id="check-in" defaultChecked />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="change-status">
                                Change Status to Available (if Lost or Missing)
                              </Label>
                              <Switch id="change-status" />
                            </div>
                            <div className="pl-6 space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="send-email" />
                                <Label htmlFor="send-email">
                                  Send email notification when status changes
                                </Label>
                              </div>
                              <div className="space-y-1">
                                <Label
                                  htmlFor="email-recipient"
                                  className="text-xs"
                                >
                                  Email recipient:
                                </Label>
                                <Input
                                  id="email-recipient"
                                  placeholder="library@example.edu"
                                />
                              </div>
                            </div>
                          </div>

                          <Separator />

                          <h3 className="font-medium">Cataloging Options</h3>
                          <div className="space-y-2 pl-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="mark-replacement">
                                Mark Items for Replacement (Change Status to
                                Discard)
                              </Label>
                              <Switch id="mark-replacement" />
                            </div>

                            <div className="flex items-center justify-between">
                              <Label htmlFor="mark-damaged">
                                Change Status to Damaged (If item needs repair)
                              </Label>
                              <Switch id="mark-damaged" />
                            </div>

                            <div className="flex items-center justify-between">
                              <Label htmlFor="mark-discard">
                                Change Status to Discard/Weed
                              </Label>
                              <Switch id="mark-discard" />
                            </div>
                          </div>

                          <Separator />

                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="update-inventory">
                                Update Inventory
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                Applies a "check-in modifier" that updates the
                                date/time in the copy_inventory table
                              </p>
                            </div>
                            <Switch id="update-inventory" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
