const RootLayout = ({
  children,
}:  {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head />
        <body>
        <nav>This is my nav</nav>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default  RootLayout
