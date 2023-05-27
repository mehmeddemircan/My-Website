import { Space, Spin } from 'antd';
const LoadingSpinner = () => {
    return (
        <Space className='d-flex  flex-1  justify-content-center align-items-center' style={{height :'35vh'}}>
            <Spin size='large' />
        </Space>
    )
};
export default LoadingSpinner;