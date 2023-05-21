import React, {useState} from 'react';
import './style.css'
import { Button, Modal,Input,Pagination, Table, Tag } from 'antd';
import { DeleteOutlined, PlusOutlined,ExclamationCircleFilled } from '@ant-design/icons';


const SharedTable = ({data, HeaderData}) => {
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'service',
            dataIndex: 'service',
            key: 'service',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'nom',
            dataIndex: 'nom',
            key: 'nom',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'date',
            key: 'date',
            dataIndex: 'date',
            render: (text) => <a>{text}</a>,


        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: "id",
            render: (id) =>
                <Button type="primary" danger onClick={()=>showDeleteConfirm(Number(id))}>
                <DeleteOutlined />
                Delete
            </Button>,

        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };


    const [dataArray, setDataArray] = useState(data)
    const [form , setForm] = useState({
        service: '',
        nom: '',
        data: '',
    });
    const handleAddItem = ()=>{
        setDataArray(prevState => [...prevState, {
            id: dataArray.length+ 1,
            service: form.service,
            nom: form.nom,
            date : form.data
        },])
        setForm({data: '', nom: '' ,service:  ''})
    }
    const handleChangeService= (event)=>{
        setForm({...form, service: event.target.value});
    }
    const handleChangeNom= (event)=>{
        setForm({...form, nom: event.target.value});
    }
    const handleChangeData= (event)=>{
        setForm({...form, data: event.target.value});
    }
    const onDelete = (id)=>{
        setDataArray(oldValue =>{
            return oldValue.filter(v=>v.id !== id)
        })
    }
    const handleOk = () => {
        handleAddItem()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { confirm } = Modal;
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                onDelete(id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                <PlusOutlined />
                Add Item
            </Button>
            <Modal title="ADD ITEM" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={'formContainer'}>
                    <p>Service</p>
                    <Input placeholder="service"   value={form.service} onChange={handleChangeService} />
                    <p>Nom</p>
                    <Input placeholder="nom"  value={form.nom} onChange={handleChangeNom} />
                    <p>Date</p>
                    <Input placeholder="data"  value={form.data} onChange={handleChangeData} />
                </div>
                </Modal>
            <Table columns={columns} dataSource={dataArray} />
        </div>
    );
};

export default SharedTable;
