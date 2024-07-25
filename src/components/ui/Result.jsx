export default function Result({ result }) {
  return (
    <p className="num-results">
      Found <strong>{result.length}</strong> results
    </p>
  );
}
