export const metadata = {
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout" style={{ marginTop: 0 }}>
      <style>{`
        .admin-layout { position: relative; z-index: 50; }
        header, footer, #main-content > .admin-layout { all: unset; }
        body > header, body > footer { display: none !important; }
        body > a[href="#main-content"] { display: none !important; }
      `}</style>
      {children}
    </div>
  );
}
