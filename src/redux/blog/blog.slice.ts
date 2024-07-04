import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IBlog {
    id: number;
    title: string;
    author: string;
    content: string;
}

interface IPayload {
    id?: number;
    title: string;
    author: string;
    content: string;
}

export const fetchListBlog = createAsyncThunk(
    'blogs/fetchListBlog',
    async () => {
        const res = await fetch("http://localhost:8000/blogs");
        const data = await res.json();
        return data;
    },
)

export const fetchListBlogById = createAsyncThunk(
    'blogs/fetchListBlogById',
    async (payload: any, thunkAPI) => {
        const res = await fetch(`http://localhost:8000/blogs/${payload.id}`);
        const data = await res.json();
        return data;
    },
)

export const createNewBlog = createAsyncThunk(
    'blogs/createNewBlog',
    async (payload: IPayload, thunkAPI) => {
        const res = await fetch("http://localhost:8000/blogs", {
            method: "POST",
            body: JSON.stringify({
                title: payload.title,
                author: payload.author,
                content: payload.content,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        if (data && data.id) {
            //create succeed
            thunkAPI.dispatch(fetchListBlog())
        }
        return data;
    },
)

export const updateABlog = createAsyncThunk(
    'blogs/updateAUser',
    async (payload: any, thunkAPI) => {
        const res = await fetch(`http://localhost:8000/blogs/${payload.id}`, {
            method: "PUT",
            body: JSON.stringify({
                title: payload.title,
                author: payload.author,
                content: payload.content,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        if (data && data.id) {
            //create succeed
            thunkAPI.dispatch(fetchListBlog())
        }
        return data;
    },
)

export const deleteABlog = createAsyncThunk(
    'blogs/deleteBlog',
    async (payload: any, thunkAPI) => {
        const res = await fetch(`http://localhost:8000/blogs/${payload.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        thunkAPI.dispatch(fetchListBlog())
        return data;
    },
)

const initialState: {
    listBlogs: IBlog[],
    isCreateSuccess: boolean,
    isUpdateSuccess: boolean,
    isDeleteSuccess: boolean
} = {
    listBlogs: [],
    isCreateSuccess: false,
    isUpdateSuccess: false,
    isDeleteSuccess: false
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        resetCreate(state) {
            state.isCreateSuccess = false
        },
        resetUpdate(state) {
            state.isUpdateSuccess = false
        },
        resetDelete(state) {
            state.isDeleteSuccess = false
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListBlog.fulfilled, (state, action) => {
            // Add user to the state array
            state.listBlogs = action.payload;
        })
            .addCase(createNewBlog.fulfilled, (state, action) => {
                state.isCreateSuccess = true;
            })
            .addCase(updateABlog.fulfilled, (state, action) => {
                state.isUpdateSuccess = true;
            })
            .addCase(deleteABlog.fulfilled, (state, action) => {
                state.isDeleteSuccess = true;
            })
    },
})

// Action creators are generated for each case reducer function
export const { resetCreate, resetUpdate, resetDelete } = blogSlice.actions

export default blogSlice.reducer