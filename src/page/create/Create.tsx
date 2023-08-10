import { Button, Modal } from "antd";
import style from './Create.module.scss';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const CreatePage: React.FC = () => {
  const navigate = useNavigate();
  const [backDialogOpened, setBackDialogOpened] = useState(false);
  const goBack = () => {
    navigate('/')
  }

  return (
    <div className={style.Create}>
      asdadsada
      <header>
        <Button onClick={() => setBackDialogOpened(true)}>返回</Button>
        <Modal title="提示" open={backDialogOpened} okText="确认" cancelText="取消" onOk={goBack} onCancel={() => setBackDialogOpened(false)}>
          <p>确认要返回吗？</p>
        </Modal>
      </header>
      <div className="content">

      </div>
    </div>
  );
}

export default CreatePage;