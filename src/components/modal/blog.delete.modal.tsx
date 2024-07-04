import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { deleteABlog, resetDelete } from '../../redux/blog/blog.slice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const BlogDeleteModal = (props: any) => {
    const { dataBlog, isOpenDeleteModal, setIsOpenDeleteModal } = props;
    const dispatch = useAppDispatch();
    const isDeleteSuccess = useAppSelector(state => state.blog.isDeleteSuccess)


    const handleSubmit = () => {
        console.log(">>> check delete: ", { id: dataBlog?.id ?? "" })

        dispatch(deleteABlog({ id: dataBlog.id }))
    }

    useEffect(() => {
        if (isDeleteSuccess === true) {
            setIsOpenDeleteModal(false)
            toast('🦄 Wow so easy! Delete succeed')
            // reset redux
            dispatch(resetDelete())
        }
    }, [isDeleteSuccess])

    return (
        <Modal
            show={isOpenDeleteModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop={false}
            onHide={() => setIsOpenDeleteModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Delete A Blog
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete the blog of author: {dataBlog?.author ?? ""}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='warning'
                    onClick={() => setIsOpenDeleteModal(false)} className='mr-2'>Cancel</Button>
                <Button onClick={() => handleSubmit()}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BlogDeleteModal;