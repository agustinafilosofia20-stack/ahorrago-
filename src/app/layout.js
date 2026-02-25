export const metadata = {
  title: "Ahorrago",
  description: "App para ahorrar y gestionar finanzas",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
