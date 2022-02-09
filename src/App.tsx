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

  return children({ isOpen: isToggle, toggle: onToggle })
}

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
      <ToggleComponent>
        {(params) => (
          <div>
            <code>{JSON.stringify(params)}</code>
          </div>
        )}
      </ToggleComponent>
    </div>
  )
}

export default App
