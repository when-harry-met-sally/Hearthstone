import React from "react";

function Log({log, playerId, focus}) {
    const focusContent = focus ? <img className='focus-img' src={focus.img}/> : null;
    const content = log.map((action, i) => {
        const color = action.playerId === playerId ? 'log-event friend': 'log-event foe';
        return (
            <div key={i} className={color}>{action.event}</div>
        )
    })
  return (
    <div className="center">
      <div className='log-text'>{content}</div>
      <div className='inspector'>{focusContent}</div>
    </div>
  );
}

export default Log;
