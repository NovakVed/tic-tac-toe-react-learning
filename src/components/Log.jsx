export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}+${turn.square.column}`}>
            Player {turn.player} selected: [{turn.square.row},
            {turn.square.column}]
          </li>
        );
      })}
    </ol>
  );
}
