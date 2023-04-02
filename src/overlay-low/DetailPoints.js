import DetailPoint from "./DetailPoint";

export default function DetailPoints({detailPointPositions, setUnderlayTopic, scrollPercentage}) {
    return (
        <>
            {(scrollPercentage > 0.249 && scrollPercentage < 0.251) &&
                <>
                    {detailPointPositions.map(dpp =>
                        <DetailPoint
                            detailPointPosition={dpp}
                            setUnderlayTopic={setUnderlayTopic}
                        />
                    )}
                </>
            }
        </>
    )
}
