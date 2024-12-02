import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import DataReceiver from "./DataReceiver";
import ErrorFallback from "./ErrorFallback";

function WrappedDataReceiver() {
    const { showBoundary } = useErrorBoundary();

    return <DataReceiver showBoundary={showBoundary}/>
}

export default function DataReceiverWithBoundary() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <WrappedDataReceiver/>
        </ErrorBoundary>
    );
}
