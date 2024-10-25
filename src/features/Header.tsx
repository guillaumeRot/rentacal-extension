import { Layout } from "@/components/layout";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-popover">
      <Layout>
        <div className="mx-auto">
          <Image
            src="/icon_title.png"
            width={250}
            height={50}
            alt="rentacal logo"
          />
        </div>
      </Layout>
    </header>
  );
};
