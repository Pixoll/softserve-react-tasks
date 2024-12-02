import { ErrorBoundary } from "react-error-boundary";
import DataItem from "./DataItem";
import ErrorFallback from "./ErrorFallback";

export default function DataReceiverWithBoundary() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <DataItem/>
        </ErrorBoundary>
    );
}
