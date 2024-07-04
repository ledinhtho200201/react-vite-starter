import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { resetUpdate, updateABlog } from '../../redux/blog/blog.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { toast } from 'react-toastify';

const BlogEditModal = (props: any) => {
    const { isOpenUpdateModal, setIsOpenUpdateModal, dataBlog } = props;
    const dispatch = useAppDispatch()
    const [id, setId] = useState();

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (dataBlog?.id) {
            setId(dataBlog?.id);
            setTitle(dataBlog?.title);
            setAuthor(dataBlog?.author)
            setContent(dataBlog?.content)
        }
    }, [dataBlog])

    const handleSubmit = () => {
        if (!title) {
            alert("title empty");
            return;
        }
        if (!author) {
            alert("author empty");
            return;
        }
        if (!content) {
            alert("content empty");
            return;
        }
        dispatch(updateABlog({ title, author, content, id }))
    }

    const isUpdateSuccess = useAppSelector(state => state.blog.isUpdateSuccess)

    useEffect(() => {
        if (isUpdateSuccess === true) {
            setIsOpenUpdateModal(false)
            setTitle("")
            setAuthor("")
            setContent("")
            toast('🦄 Wow so easy! Update succeed')
            // reset redux
            dispatch(resetUpdate())
        }
    }, [isUpdateSuccess])

    return (
        <>
            <Modal
                show={isOpenUpdateModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop={false}
                onHide={() => setIsOpenUpdateModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update this Blog
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        label="Title"
                        className="mb-3"
                    >
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Author"
                        className="mb-3"
                    >
                        <Form.Control
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Content">
                        <Form.Control
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='warning'
                        onClick={() => setIsOpenUpdateModal(false)} className='mr-2'>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BlogEditModal;