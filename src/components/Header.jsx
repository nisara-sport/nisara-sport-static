"use client";

import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  ChevronDown,
  ShoppingCart,
  Search,
  X,
  ChevronRight,
  Trash,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cart";
import { formatNumber } from "@/utils/formatNumber";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      <MenuBar />
      {isDesktop ? <NavBar /> : <MobileNavbar />}
    </>
  );
};

const TopBar = () => {
  return (
    <div className="py-1 bg-gray-300">
      <div className="container">
        <div className="flex justify-end">
          <a className="text-red-600" href="tel:+349258885">
            Hotline: 034 925 8885
          </a>
        </div>
      </div>
    </div>
  );
};

const MenuBar = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex justify-center items-center">
          <Link href="/">
            <img
              className="w-2/5 lg:w-1/5 mx-auto"
              src={`/assets/nisara-logo.png`}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              BÍT TẤT <ChevronDown size={16} className="ml-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href={`/category/tat-da-bong`}>Tất đá bóng</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={`/category/tat-the-thao`}>Tất thể thao</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={`/category/tat-hang-ngay`}>Tất hàng ngày</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* <MenubarMenu>
            <MenubarTrigger>
              GIÀY THỂ THAO <ChevronDown size={16} className="ml-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Giày đá bóng người lớn</MenubarItem>
              <MenubarItem>Giày đá bóng trẻ em</MenubarItem>
              <MenubarItem>Giày thể thao unisex</MenubarItem>
            </MenubarContent>
          </MenubarMenu> */}
          {/* <MenubarMenu>
            <MenubarTrigger>
              QUẦN ÁO <ChevronDown size={16} className="ml-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Quần áo thể thao</MenubarItem>
              <MenubarItem>Quần áo đá bóng</MenubarItem>
              <MenubarItem>Quần áo giữ nhiệt</MenubarItem>
            </MenubarContent>
          </MenubarMenu> */}
          <MenubarMenu>
            <MenubarTrigger>
              PHỤ KIỆN THỂ THAO <ChevronDown size={16} className="ml-1" />
            </MenubarTrigger>
            <MenubarContent>
              {/* <MenubarItem>Bóng đá</MenubarItem> */}
              <MenubarItem asChild>
                <Link href={`/category/balo`}>Balo</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={`/category/phu-kien-bao-ve`}>Phụ kiện bảo vệ</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu asChild>
            <Link
              className="px-3 py-1.5 border-0 hover:bg-gray-600 hover:text-white rounded text-sm font-medium outline-nonefocus:text-accent-foreground data-[state=open]:text-accent-foreground transition-all"
              href={"/affiliate"}
            >
              ĐĂNG KÝ ĐẠI LÝ
            </Link>
          </MenubarMenu>
          <MenubarMenu asChild>
            <Link
              href={"/affiliate"}
              className="px-3 py-1.5 border-0 hover:bg-gray-600 hover:text-white rounded text-sm font-medium outline-nonefocus:text-accent-foreground data-[state=open]:text-accent-foreground transition-all"
            >
              GIỚI THIỆU
            </Link>
          </MenubarMenu>
          <MenubarMenu asChild>
            <Link
              href={"/"}
              className="px-3 py-1.5 border-0 hover:bg-gray-600 hover:text-white rounded text-sm font-medium outline-nonefocus:text-accent-foreground data-[state=open]:text-accent-foreground transition-all"
            >
              LIÊN HỆ
            </Link>
          </MenubarMenu>
          {/* <CustomDialog /> */}
          <CustomDrawer />
        </Menubar>
      </div>
    </div>
  );
};

const CustomDrawer = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-0 hover:bg-gray-600 hover:text-white rounded"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-screen lg:w-[500px] rounded-none">
        <ScrollArea className="h-screen relative">
          <div className="absolute right-4">
            <DrawerClose>
              <X className="h-4 w-4" />
            </DrawerClose>
          </div>
          <div className="mx-auto w-full p-5">
            <DrawerHeader>
              <DrawerTitle className="text-lg font-semibold mb-5">
                Giỏ hàng
              </DrawerTitle>
              <DrawerDescription>
                {cart.length === 0 ? (
                  <>
                    Không có sản phẩm nào trong giỏ hàng. Vui lòng quay lại cửa
                    hàng để tiếp tục mua sắm.
                  </>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b pb-4"
                      >
                        <div className="flex flex-col items-start">
                          <h3 className="text-black font-semibold lg:text-lg text-left">
                            {item.product.name}
                          </h3>
                          <p className="italic text-gray-600">
                            {item.variant.option}
                          </p>
                          <p className="text-gray-600">
                            {formatNumber(item.price)}đ x {item.quantity}
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              removeFromCart(index);
                            }}
                          >
                            <Trash size={15} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                {cart.length !== 0 && (
                  <Link
                    href={`/cart`}
                    className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-400 p-2 transition-all hover:bg-black hover:border-black hover:text-white"
                  >
                    <span className="font-semibold">Đến trang thanh toán</span>{" "}
                    <ChevronRight />
                  </Link>
                )}
              </DrawerClose>
            </DrawerFooter>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

const CustomDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-0 hover:bg-gray-600 hover:text-white rounded"
        >
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold mb-2">
            Tìm kiếm sản phẩm
          </DialogTitle>
          <DialogDescription className="flex flex-col justify-center items-center gap-4">
            {/* <div> */}
            <Input
              className="rounded"
              placeholder="Nhập tên sản phẩm để tìm kiếm..."
            />
            <Button
              variant="outline"
              className="rounded hover:bg-black hover:text-white transition-all"
            >
              Tìm kiếm
            </Button>
            {/* </div> */}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-black text-white py-2 relative">
        <div className="container">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="icon"
              className="border-0 hover:bg-gray-600 hover:text-white rounded"
              onClick={toggleNavbar}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              {/* <CustomDialog /> */}
              <CustomDrawer />
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-navbar py-4 ${isOpen ? "open" : ""}`}>
        <div className="container">
          <Collapsible className="mb-4">
            <CollapsibleTrigger className="flex flex-row items-center gap-2">
              <span className="font-semibold">BÍT TẤT</span>
              <ChevronDown size={16} className="ml-1" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <ul className="pl-2">
                <li>
                  <Link href={`/category/tat-da-bong`}>Tất đá bóng</Link>
                </li>
                <li>
                  <Link href={`/category/tat-the-thao`}>Tất thể thao</Link>
                </li>
                <li>
                  <Link href={`/category/tat-hang-ngay`}>Tất hàng ngày</Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          {/* <Collapsible className="mb-4">
            <CollapsibleTrigger className="flex flex-row items-center gap-2">
              <span className="font-semibold">GIÀY THỂ THAO</span>
              <ChevronDown size={16} className="ml-1" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <ul className="pl-2">
                <li>Giày đá bóng người lớn</li>
                <li>Giày đá bóng trẻ em</li>
                <li>Giày đá bóng unisex</li>
              </ul>
            </CollapsibleContent>
          </Collapsible> */}
          {/* <Collapsible className="mb-4">
            <CollapsibleTrigger className="flex flex-row items-center gap-2">
              <span className="font-semibold">QUẦN ÁO</span>
              <ChevronDown size={16} className="ml-1" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <ul className="pl-2">
                <li>Quần áo thể thao</li>
                <li>Quần áo đá bóng</li>
                <li>Quần áo giữ nhiệt</li>
              </ul>
            </CollapsibleContent>
          </Collapsible> */}
          <Collapsible className="mb-4">
            <CollapsibleTrigger className="flex flex-row items-center gap-2">
              <span className="font-semibold">PHỤ KIỆN THỂ THAO</span>
              <ChevronDown size={16} className="ml-1" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <ul className="pl-2">
                {/* <li>Bóng đá</li> */}
                <li>
                  <Link href={`/category/balo`}>Balo</Link>
                </li>
                <li>
                  <Link href={`/category/phu-kien-bao-ve`}>
                    Phụ kiện bảo vệ
                  </Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          <Link
            className="font-semibold uppercase mb-4 block"
            onClick={() => setIsOpen(false)}
            href={"/affiliate"}
          >
            ĐĂNG KÝ ĐẠI LÝ
          </Link>
          <h1 className="font-semibold uppercase mb-4">Giới thiệu</h1>
          <h1 className="font-semibold uppercase mb-4">Liên hệ</h1>
        </div>
      </div>
    </div>
  );
};
