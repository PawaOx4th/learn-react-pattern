import { memo, useState } from "react"

type ToggleProps = {
  isToggle: boolean
  onToggle: () => void
}

const withToggle = (Component: React.ComponentType<ToggleProps>) => {
  return () => {
    const [isOpen, setIsOpen] = useState(true)

    const onSetIsOpen = () => {
      setIsOpen((latestValue) => !latestValue)
    }

    return <Component isToggle={isOpen} onToggle={onSetIsOpen} />
  }
}

const ButtonToggle = ({ isToggle, onToggle }: ToggleProps) => {
  console.log("🐳 BUTTON TOGLE IS RENDERING :")
  return (
    <div
      style={{
        border: "1px solid #fff",
        width: "max-content",
        padding: "1rem 2rem",
        color: "#fff"
      }}>
      <kbd>Section {"<ButtonToggle/>"}.</kbd>
      <br />

      <button onClick={() => onToggle()}>On Toggle</button>
      <h1>{isToggle ? "✅" : "❌"}</h1>
    </div>
  )
}

const WrapperToggle = memo(withToggle(ButtonToggle))
// const WrapperToggle = withToggle(ButtonToggle)

function App() {
  const [count, setCount] = useState(0)
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#282c34",
        width: "100%",
        minHeight: "100vh"
      }}>
      <WrapperToggle />
      <button onClick={() => setCount((latestValue) => latestValue + 1)}>
        {count}
      </button>
    </div>
  )
}

export default App
