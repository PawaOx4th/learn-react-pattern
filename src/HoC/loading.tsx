import React from "react"

interface TWithLoadingProps {
  loading: boolean
}

const LoadingSpinner = () => <div>Loading....</div>

// export const withLoading = <P extends object>(
//   Component: React.ComponentType<P>
// ): React.FC<P & TWithLoadingProps> => {
//   return ({ loading, ...props }: TWithLoadingProps) => {
//     return loading ? <LoadingSpinner /> : <Component {...(props as P)} />
//   }
// }

export function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return ({ ...props }: TWithLoadingProps) => {
    return <Component {...(props as P)} />
  }
}

export function Statue({ loading }: TWithLoadingProps) {
  return <div>status is {loading ? "✅" : "❌"}</div>
}
