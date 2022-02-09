import React, { memo, PropsWithChildren, useState } from "react"

type ToggleProps = { isOpen: boolean; toggle: () => void }

function ToggleComponent({
  children
}: {
  children: (props: ToggleProps) => JSX.Element
}) {
  const [isToggle, setIsToggle] = useState(true)
  const onToggle = () => {
    setIsToggle((isToggle) => !isToggle)
  }
  console.log("🐳 :")
  return children({ isOpen: isToggle, toggle: onToggle })
}

const Wrapper = memo(ToggleComponent)

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div
      className="App"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#282c34",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
      <button onClick={() => setCounter((latestValue) => latestValue + 1)}>
        Counter : {counter}
      </button>
      <Wrapper>
        {({ isOpen, toggle }) => (
          <div
            style={{
              backgroundColor: "#fefefe"
            }}>
            <kbd>{JSON.stringify(isOpen)}</kbd>
            <input type="button" value="On Toggle" onClick={() => toggle()} />
          </div>
        )}
      </Wrapper>
    </div>
  )
}

export default App
