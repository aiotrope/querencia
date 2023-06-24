const Component = (props) => {
  return <div>Hello {props.name}!</div>
}

const MyHOC = (Component) => {
  return (
    <div className='wrapper'>
      <Component />
    </div>
  )
}

export const wrappedWithName = MyHOC(Component, { name: 'Kalle' })
