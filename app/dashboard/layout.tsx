

const layout = ({children}:{children:React.ReactNode}) => {
  return (<>
    <h1 className="text-3xl">Dashboard Interface Header</h1>
    <div>{children}</div>
    </>
  )
}

export default layout