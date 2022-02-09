import { memo, useState } from "react"

type ToggleProps = { isOpen: boolean; toggle: () => void }

function ToggleComponent({
  render
}: {
  render: (props: ToggleProps) => JSX.Element
}) {
  const [isToggle, setIsToggle] = useState(true)
  const onToggle = () => {
    setIsToggle((isToggle) => !isToggle)
  }
  console.warn("App is renderer")
  return render({
    isOpen: isToggle,
    toggle: onToggle
  })
}

const WrapperToggle = memo(ToggleComponent)

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div
      className="App"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#282c34"
      }}>
      <button onClick={() => setCounter((latestValue) => latestValue + 1)}>
        {counter}
      </button>
      <WrapperToggle
        render={({ isOpen, toggle }) => {
          return (
            <>
              <h2
                style={{
                  color: "red"
                }}>
                {JSON.stringify(isOpen)}
              </h2>
              <button onClick={() => toggle()}>ON TOGGLE</button>
            </>
          )
        }}
      />
    </div>
  )
}

export default App
