import { CSSProperties } from "react"
import { SyncLoader } from "react-spinners"


export const Spinner = ({loading = false, color = '#d0ff00', bg = '#00000096',}) => {

  const override:CSSProperties = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bg,
  }


  return (
    <SyncLoader loading={loading} color={color} cssOverride={override} />
  )
}
