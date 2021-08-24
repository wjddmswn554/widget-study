import { Component } from 'react';
import { Dragact } from 'dragact';

const fakeData = [
    { GridX: 0, GridY: 0, w: 4, h: 2, key: '0' },
    { GridX: 4, GridY: 0, w: 4, h: 2, key: '1' },
    { GridX: 8, GridY: 0, w: 4, h: 2, key: '2' },
    { GridX: 12, GridY: 0, w: 4, h: 2, key: '4' },
]

const getblockStyle = (isDragging) => {
    return {
        background: isDragging ? '#1890ff' : 'white',
    }
};

class DragactTest extends Component {
    render() {
        const title = "title";
        return (
            <Dragact
                layout={fakeData}//필수 항목
                col={16}//필수 항목
                width={1300}//필수 항목
                rowHeight={150}//필수 항목
                margin={[5, 5]}//필수 항목
                className='plant-layout'//필수 항목
                style={{ background: '#333' }}//필수가 아닌 항목
                placeholder={true}//필수가 아닌 항목
                title={title}
            >
                {(item, provided) => {
                    return (
                        <>
                            <div
                                {...provided.props}
                                {...provided.dragHandle}
                                style={{
                                    ...provided.props.style,
                                    ...getblockStyle(provided.isDragging)
                                }}
                            >
                                {provided.isDragging ? '선택' : '배정'}
                                {title}
                            </div>
                        </>
                    )
                }}
            </Dragact>
        )
    }
}

export default DragactTest;