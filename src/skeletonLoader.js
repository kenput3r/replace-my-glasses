/* global React */
export function SayHello({ data }) {
  console.log(data)
  const [helloMessage, setHelloMessage] = React.useState(
    "Ohhhh yea, hello world"
  )
  return <div>{helloMessage}</div>
}
