export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="data">
            <p>Something went wrong:</p>
            <p>{error.message}</p>
            <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
    );
}
