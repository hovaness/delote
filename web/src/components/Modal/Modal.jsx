import { useState } from 'react'

import { Modal, Button } from 'antd'

import { toast } from '@redwoodjs/web/toast'

import styles from 'src/components/Modal/modal.module.css'

const CancelModal = ({ isOpen, record, cancel, confirm }) => {
  return (
    <Modal
      style={{ margin: 'auto' }}
      closeIcon={null}
      centered
      open={isOpen}
      title="Вы уверены, что хотите отменить запись?"
      footer={[
        <>
          <Button onClick={cancel}>Нет</Button>
          <Button danger onClick={confirm}>
            Да
          </Button>
        </>,
      ]}
    >
      <p>Время: {record.time}</p>
      <p>Услуга: {record.service}</p>
    </Modal>
  )
}

const NavModal = ({ record, isOpen, onClose }) => {
  const [cancel, setCancel] = useState(false)
  function closeCancel() {
    setCancel(false)
  }
  function confirmCancel() {
    toast.success(`${record.service + ' от ' + record.time} была удалена.`)
    setCancel(false)
  }
  return (
    <Modal
      classNames={styles}
      title="Информация о вашей записи"
      centered
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button
          onClick={() => setCancel(true)}
          type="primary"
          danger
          key={record.service}
        >
          Отменить запись
        </Button>,
      ]}
    >
      <div className={styles.content}>
        <p>Время: {record.time}</p>
        <p>Услуга: {record.service}</p>
        <p>Приходите на 10 минут раньше</p>
      </div>
      <CancelModal
        isOpen={cancel}
        record={record}
        cancel={closeCancel}
        confirm={confirmCancel}
      />
    </Modal>
  )
}

export default NavModal
