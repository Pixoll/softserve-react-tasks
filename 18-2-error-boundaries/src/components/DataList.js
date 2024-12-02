import DataReceiverWithBoundary from "./DataItemWithBoundary";

export default function DataList() {
    return (
        <div className="data-list">
            <DataReceiverWithBoundary/>
            <DataReceiverWithBoundary/>
            <DataReceiverWithBoundary/>
        </div>
    );
}
