const MoviesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>another nav only for movies</nav>
      <div>{children}</div>
    </div>
  )
}

export default MoviesLayout
