export function DoneIcon({ item }) {
  if (item.done) {
    return (
      <img
        src="/assets/done.svg"
        alt="Done"
        style={{ opacity: '1' }}
      />
    )
  } else {
    return (
      <img
        src="/assets/done.svg"
        alt="Undone"
        style={{ opacity: '0.3' }}
      />
    )
  }
}