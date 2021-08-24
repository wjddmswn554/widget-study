import useState from 'react';
import './App.css';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//https://ichi.pro/ko/yeje-ui-react-dnd-226845595632541

const MovableItem = ({name, setItems}) => {

  const changeItemColumn = (currenItem, columnName) => {
    setItems((prevState) => {
      return prevState.map(e => {
        return {
          ...e,
          column: e.name === currenItem ? columnName : e.column, //일치하면 이동
        }
      })
    })
  }
  
    const [{ isDragging }, drag] = useDrag({
        name, 
        type: 'Our first type',
        end: (item, monitor) => { // 사용자가 드래그 후 버튼을 놓을 때 수행해야 하는 작업
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.name === 'Column 1'){
                changeItemColumn(name, 'Column 1')
            } else {
                changeItemColumn(name, 'Column 2')
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(), // 드래그가 됨
        }),
    });

    const opacity = isDragging ? 0.4 : 1; //불투명도

    return (
        <div ref={drag} className='movable-item' style={{ opacity }}>
            {name}
        </div>
    )
}

const Column = ({children, className, title}) => {
    const [, drop] = useDrop({
        accept: 'Our first type',
        drop : () => ({name : title}),
    });

    return (
        <div ref={drop} className={className}>
            {title}
            {children}
        </div>
    )
}

const Drage = () => {
    const [items, setItems] = useState([
      {id: 1, name: 'Item 1', column: 'Column 1'},
      {id: 2, name: 'Item 2', column: 'Column 1'},
      {id: 3, name: 'Item 3', column: 'Column 1'},
    ]);
    // const Itme = <MovableItem setIsFirstColumn={setIsFirstColumn} />;
    const returnItemsForColumn = (columnName) => {
      return items // item은 items의 값들을 가리킴
        .filter((item) => item.column === columnName)
        .map((item) => (
          <MovableItem key={item.id} name={item.name} setItems={setItems} />
        ))
    }

        return (
            <div className="container">
                <DndProvider backend={HTML5Backend}>
                    <Column title='Column 1' className='column first-column'>
                        {returnItemsForColumn('Column 1')}
                    </Column>
                    <Column title='Column 2' className='column second-column'>
                        {returnItemsForColumn('Column 2')}
                    </Column>
                </DndProvider>
            </div>
        );
};

export default Drage;