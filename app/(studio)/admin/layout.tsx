import "../../globals.css";

export const metadata = {
  title: "Ahmad Elmesery",
  description: "Motion Graphics Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
