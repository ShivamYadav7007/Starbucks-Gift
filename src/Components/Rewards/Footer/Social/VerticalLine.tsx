import React from "react";

interface Props {}

const VerticalLine: React.FC<Props> = (props) => {
    return <div className="hidden h-5 bg-gray-600 full:block w-verySm"></div>;
}

VerticalLine.defaultProps = {}

export default VerticalLine;