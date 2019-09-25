const withinFieldHandler = (e, board) => {
        const x = e.clientX;
        const y = e.clientY;
        const positions = [
          ...board.querySelectorAll(".field-position"),
          ...board.querySelectorAll(".heros")
        ];
        let field = null;
        positions.forEach(position => {
          const d = position.getBoundingClientRect();
          if (x >= d.left && x <= d.right && y >= d.top && y <= d.bottom) {
            field = position;
          }
        });
        return field;
  
  };
  
  export default withinFieldHandler;
  