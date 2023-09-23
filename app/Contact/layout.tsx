

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='bg-main_bg bg-repeat-y font-montserrat text-white'>

        {children}
        </div>
        </body>
    </html>
  )
}
