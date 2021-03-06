import React, { FC } from "react";
import { css, cx } from "@emotion/css";

let IconBookAlt: FC<{ className?: string; color: string; size: number }> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let width = props.size;
  let height = (width / 18) * 19;

  return (
    <div className={cx(styleContainer, props.className)}>
      <svg width={width ?? 18} height={height ?? 19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5 2H6C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V14C3 14.7956 3.31607 15.5587 3.87868 16.1213C4.44129 16.6839 5.20435 17 6 17H13.5C13.8978 17 14.2794 16.842 14.5607 16.5607C14.842 16.2794 15 15.8978 15 15.5V3.5C15 3.10218 14.842 2.72064 14.5607 2.43934C14.2794 2.15804 13.8978 2 13.5 2ZM4.5 5C4.5 4.60217 4.65803 4.22064 4.93934 3.93934C5.22064 3.65803 5.60217 3.5 6 3.5H13.5V11H6C5.47128 11.0022 4.95299 11.1473 4.5 11.42V5ZM6 15.5C5.60217 15.5 5.22064 15.342 4.93934 15.0607C4.65803 14.7794 4.5 14.3978 4.5 14C4.5 13.6022 4.65803 13.2206 4.93934 12.9393C5.22064 12.658 5.60217 12.5 6 12.5H13.5V15.5H6ZM7.5 6.5H10.5C10.6989 6.5 10.8897 6.42098 11.0303 6.28033C11.171 6.13968 11.25 5.94891 11.25 5.75C11.25 5.55109 11.171 5.36032 11.0303 5.21967C10.8897 5.07902 10.6989 5 10.5 5H7.5C7.30109 5 7.11032 5.07902 6.96967 5.21967C6.82902 5.36032 6.75 5.55109 6.75 5.75C6.75 5.94891 6.82902 6.13968 6.96967 6.28033C7.11032 6.42098 7.30109 6.5 7.5 6.5Z"
          fill="#DB3680"
        />
      </svg>
    </div>
  );
});

export default IconBookAlt;

let styleContainer = css`
  display: inline-block;
`;
