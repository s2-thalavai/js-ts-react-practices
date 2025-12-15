export default function Skeleton () {
  return (
    <div style={{padding: '16px'}}>
      <div style={styles.line} />
      <div style={styles.line} />
      <div style={{...styles.line, width: '60%'}} />
    </div>
  );
}

const styles = {
  line: {
    height: '14px',
    background: '#e0e0e0',
    marginBottom: '10px',
    borderRadius: '4px',
    animation: 'pulse 1.5s infinite',
  },
};