export default function ArticleLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="max-w-[60ch] mx-auto w-full">{children}</div>;
}